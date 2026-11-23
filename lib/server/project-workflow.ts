import {brandedPackingPDF} from './packing-pdf';
import {env} from 'cloudflare:workers';
import {database,allRecords,getRecord,baseRecord,insert,audit,record,nextNumber,loadCadence,WorkError} from './workspace-store';
import {canRead,inScope,moduleCanWrite,type Member,type WorkRecord} from '../workspace';
import {workflowDefinitions,pmDocumentKinds,workflowOf,quoteFacts,applicableDocument,documentFileIds,type WorkflowKind} from '../project-workflow';
import {initialValues} from '../templates/order-confirmation';
import {getQCTemplate,resolveQCApplicability} from '../templates/qc';
import {projectEvidenceChecklist,siteInspectionSections,resolveSWMSActivitySelection} from '../templates/pm-templates';

const businessDate=(d:Date)=>new Intl.DateTimeFormat('en-CA',{timeZone:'Australia/Sydney',year:'numeric',month:'2-digit',day:'2-digit'}).format(d);
const today=()=>businessDate(new Date());
const timestamp=()=>new Date().toISOString();
const due=(days:number)=>businessDate(new Date(Date.now()+days*86400000));
function authority(user:Member,r:WorkRecord){if(user.kind==='partner'||!inScope(user,r)||!moduleCanWrite(user,r.module))throw new WorkError('This action belongs to the responsible module.',403);}
async function workflowRecord(user:Member,p:WorkRecord,kind:WorkflowKind,suffix='',payload:any={}){
 const definition=workflowDefinitions[kind];const key=`workflow:${p.id}:${kind}${suffix?':'+suffix:''}`;
 const existing=(await database().prepare('SELECT * FROM workspace_records WHERE source_key=?').bind(key).first());if(existing)return record(existing);
 const cadence=await loadCadence();const days=kind==='pm-plan'?cadence.kickoffDays:kind==='order-confirmation'?cadence.orderDays:kind.startsWith('qc')?cadence.qcDays:kind==='logistics'?cadence.logisticsDays:cadence.sitePrepDays;
 const r=await baseRecord(user,{kind:'workflow',module:definition.module,title:definition.title+(suffix?' · '+suffix:''),projectId:p.id,organisationId:p.organisationId,sourceId:p.id,sourceKey:key,dueAt:due(days)});
 r.id=key;r.payload={workflow:kind,...payload};r.audience=definition.audience;return r;
}
export async function handover(user:Member,p:WorkRecord,input:any){
 authority(user,p);if(p.kind!=='project')throw new WorkError('Select a Sales project.');
 if(p.state==='Approved')return p;
 if(input.revision!==p.revision)throw new WorkError('The project changed. Reload before handover.',409);
 for(const key of ['customer','site','acceptedReference','acceptedDate','signedQuoteId','supplyModel'])if(!p.payload[key])throw new WorkError('Complete the signed quote, customer, site, acceptance and supply model before handover.',422);
 const entries=p.payload.entries;if(!Array.isArray(entries)||!entries.length||entries.some((e:any)=>!e.productLine||!e.model||!e.configuration))throw new WorkError('Complete every agreed infrastructure entry.',422);
 const signed:any=await database().prepare('SELECT * FROM workspace_attachments WHERE id=? AND record_id=? AND mime=?').bind(p.payload.signedQuoteId,p.id,'application/pdf').first();if(!signed)throw new WorkError('Attach the signed quote PDF.',422);
 if(typeof p.payload.installationIncluded!=='boolean'||typeof p.payload.commissioningIncluded!=='boolean')throw new WorkError('Confirm installation and commissioning scope.',422);
 const cadence=await loadCadence();const t=timestamp(), children:WorkRecord[]=[];
 for(const e of entries){const inf=await baseRecord(user,{kind:'inf',module:'production',title:e.model,projectId:p.id,organisationId:p.organisationId,sourceId:p.id,sourceKey:`inf:${p.id}:${e.id}`});inf.id=`inf:${p.id}:${e.id}`;inf.state='Approved';inf.audience='customer';inf.approvedAt=t;inf.approvedBy=user.id;inf.payload={...e,agreementReference:p.payload.acceptedReference,registeredAt:t,supportToken:crypto.randomUUID()};children.push(inf);}
 const infIds=children.map(r=>r.id),lines=[...new Set<string>(entries.map((e:any)=>e.productLine))];
 children.push(await workflowRecord(user,p,'commercial','',{stakeholders:p.payload.stakeholders||[],invoiceEmail:p.payload.invoiceEmail||''}));
 children.push(await workflowRecord(user,p,'pm-plan','',{stakeholders:p.payload.stakeholders||[],trackerToken:crypto.randomUUID(),installationEstimate:p.payload.promisedInstallationDate||'',deliveryDate:p.payload.promisedDeliveryDate||'',kickoffDue:due(cadence.kickoffDays),tradesDue:due(cadence.tradesDays),sitePrepDue:due(cadence.sitePrepDays),commissioningInHouse:true}));
 for(const line of lines)children.push(await workflowRecord(user,p,'order-confirmation',line,{productLine:line,values:{},spares:[],paymentStages:[50,50],extraCosts:[]}));
 const categories=[...new Set<string>(entries.map((e:any)=>e.category==='Digital kiosk'?'qc-kiosk':'qc-led'))];
 for(const k of categories){const selected=entries.filter((e:any)=>(e.category==='Digital kiosk'?'qc-kiosk':'qc-led')===k);children.push(await workflowRecord(user,p,k as WorkflowKind,'',{evidence:{},checks:{},counts:[],scope:{processorIncluded:selected.some((e:any)=>e.processorIncluded??p.payload.processorIncluded),touchIncluded:selected.some((e:any)=>e.touchIncluded??p.payload.touchIncluded)}}));}
 children.push(await workflowRecord(user,p,'logistics','',{cases:[],contents:[],dispatchConfirmed:false}));
 for(const k of pmDocumentKinds){const r=await workflowRecord(user,p,k,'',{checks:{},evidence:{},selectedActivities:[]});if(!applicableDocument(k,p))r.state='Not applicable';children.push(r);}
 const tech=await baseRecord(user,{kind:'work',module:'technical',title:'System schematics & deployment profile',projectId:p.id,organisationId:p.organisationId,sourceId:p.id,sourceKey:`technical:${p.id}`,infIds,dueAt:due(5)});children.push(tech);
 for(const r of children)if(r.kind!=='inf')r.infIds=infIds;
 const state='Approved',rev=p.revision+1;
 const result=await database().batch([database().prepare('UPDATE workspace_records SET state=?,audience=?,approved_at=?,approved_by=?,updated_at=?,revision=revision+1 WHERE id=? AND revision=? AND state<>? RETURNING *').bind(state,'internal',t,user.id,t,p.id,p.revision,'Approved'),...children.map(r=>insert(r,{id:p.id,revision:rev,state})),audit(user,p,'Sales handover completed',{infraCount:infIds.length,productLines:lines},{id:p.id,revision:rev,state})]);
 if(!result[0].results.length)throw new WorkError('The project changed. Reload it.',409);return record(result[0].results[0]);
}
const fields:Record<string,string[]>={
 commercial:['stakeholders','invoiceEmail','poReference','billingStage','amount','invoiceDueDate'],
 'pm-plan':['stakeholders','installationEstimate','installationDate','installationConfirmed','deliveryDate','kickoffAt','customerMeetingAt','kickoffDue','tradesDue','sitePrepDue','receiverName','receiverEmail','receiverPhone','receivingAddress','deliveryInstructions','commissioningInHouse','practicalCompletionDate','handoverDate','customerUpdate','notificationRequired','notificationsRecorded'],
 'order-confirmation':['values','configurationSets','supplierName','supplierEmail','signedPdfId','supplierInvoiceId','invoiceAmount','currency','paymentStages','extraCosts','spares','printedName'],
 'qc-led':['evidence','checks','counts','scope','internalNotes','finalConfirmation'],
 'qc-kiosk':['evidence','checks','counts','scope','internalNotes','finalConfirmation'],
 logistics:['mode','carrier','reference','destination','dispatchDate','dispatchConfirmed','arrivalDate','actualArrivalDate','localDeliveryDate','deliveryInstructions','receiverName','receiverEmail','receiverPhone','cases','contents','sourcePackingFileId','freightFileId','delayReason','schematicsId','deploymentProfileId','insuranceFileId','technicalReleased'],
 'site-preparation':['reviewByDate','schematicsId','deploymentProfileId','insuranceFileId','finalConfirmation'],
 'site-inspection':['checks','inspectionDate','finalConfirmation'],
 installation:['evidence','finalConfirmation'],commissioning:['evidence','finalConfirmation'],
 completion:['practicalCompletionDate','handoverDate','finalConfirmation'],warranty:['practicalCompletionDate','handoverDate'],
 nonconformity:['observationDate','context','actionTaken','evidence','noNonconformity'],
 swms:['selectedActivities','siteSpecificDetails','installerPersonnel','finalConfirmation','sharedAt','shareMethod','acknowledgements'],
 'support-handover':['supportCompany','supportContact','supportEmail','supportPhone','received'],itp:[]
};
function ownedPayload(r:WorkRecord,input:any){const next={...r.payload};for(const k of fields[workflowOf(r)!]||[])if(input[k]!==undefined)next[k]=input[k];return next;}
async function change(user:Member,r:WorkRecord,payload:any,state=r.state){const t=timestamp();const row=await database().prepare('UPDATE workspace_records SET payload=?,state=?,updated_at=?,revision=revision+1 WHERE id=? AND revision=? RETURNING *').bind(JSON.stringify(payload),state,t,r.id,r.revision).first();if(!row)throw new WorkError('Another person changed this form. Reload before saving.',409);await audit(user,r,state==='Approved'?'Finalised':'Saved').run();return record(row);}
export async function workflowAction(user:Member,key:string,input:any){
 const r=await getRecord(key);if(!canRead(user,r))throw new WorkError('Outside your project access.',403);
 if(input.action==='handover')return handover(user,r,input);
 authority(user,r);const kind=workflowOf(r);if(!kind)throw new WorkError('Not a project workflow.');
 if(input.revision!==r.revision)throw new WorkError('This form changed. Reload before saving.',409);
 const p=await getRecord(r.projectId!);let payload=ownedPayload(r,input.payload||{});
 if(input.action==='inherit'){
  if(kind!=='order-confirmation')throw new WorkError('Select an order confirmation.');
  const prior=(await allRecords()).filter(x=>workflowOf(x)==='order-confirmation'&&x.id!==r.id&&x.state==='Approved'&&x.payload.productLine===r.payload.productLine).sort((a,b)=>(b.approvedAt||b.updatedAt).localeCompare(a.approvedAt||a.updatedAt))[0];
  payload={...r.payload,values:initialValues(r.payload.productLine,quoteFacts(p,r.payload.productLine),prior?{productLine:prior.payload.productLine,finalized:true,values:prior.payload.values}:undefined),inheritedFrom:prior?.number||null,inheritedAt:timestamp(),configurationSets:(p.payload.entries||[]).filter((e:any)=>e.productLine===r.payload.productLine).filter((e:any,i:number,es:any[])=>es.findIndex(x=>[x.model,x.configuration,x.dimensions,x.resolution].join('|')===[e.model,e.configuration,e.dimensions,e.resolution].join('|'))===i).map((e:any)=>({infEntryId:e.id,label:e.model,values:initialValues(r.payload.productLine,quoteFacts({...p,payload:{...p.payload,entries:[e]}},r.payload.productLine),prior?{productLine:prior.payload.productLine,finalized:true,values:prior.payload.values}:undefined)})),spares:prior?.payload.spares?.map((s:any)=>({...s,id:crypto.randomUUID(),infId:''}))||[]};
  return change(user,r,payload,'Draft');
 }
 if(input.action==='invoice'){
  if(kind!=='commercial')throw new WorkError('Billing is requested from Sales.');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.invoiceEmail||''))throw new WorkError('Enter the invoice email.',422);
  if(!(Number(payload.amount)>0)||!payload.billingStage)throw new WorkError('Enter the payable stage and amount.',422);
  if(input.withPO&&!String(payload.poReference||'').trim())throw new WorkError('Enter the purchase order reference.',422);
  const bill=await baseRecord(user,{kind:'work',module:'finance',projectId:p.id,organisationId:p.organisationId,title:`${p.number} · ${payload.billingStage}`,sourceId:r.id,sourceKey:`billing:${p.id}:${payload.billingStage}`,dueAt:payload.invoiceDueDate});
  bill.payload={billingMilestone:payload.billingStage,amount:payload.amount,termsReference:`${p.number} — Accepted quote ${p.payload.acceptedReference}; ${payload.billingStage}`,requestedDueDate:payload.invoiceDueDate,invoiceEmail:payload.invoiceEmail,poReference:input.withPO?payload.poReference:'',verificationStatus:'Not connected — request only'};
  await database().batch([insert(bill),audit(user,r,'Invoice request queued',{stage:payload.billingStage,amount:payload.amount})]);return {queued:true,message:'Saved to Finance. Xero sending is not connected.'};
 }
 if(input.action==='request-override'){
  if(!['installation','commissioning'].includes(kind)||!input.stepId||!String(input.reason||'').trim())throw new WorkError('Enter the item and reason for N/A.');
  payload={...r.payload,overrides:{...(r.payload.overrides||{}),[input.stepId]:{status:'requested',reason:String(input.reason).slice(0,1000),requestedBy:user.name,requestedAt:timestamp()}}};return change(user,r,payload,r.state==='Approved'?'Draft':r.state);
 }
 if(input.action==='approve-override'){
  if(user.kind!=='management')throw new WorkError('Management approval is required.',403);
  if(!r.payload.overrides?.[input.stepId])throw new WorkError('Override request not found.');
  payload={...r.payload,overrides:{...r.payload.overrides,[input.stepId]:{...r.payload.overrides[input.stepId],status:input.approved?'approved':'declined',approvedBy:user.name,approvedAt:timestamp()}}};return change(user,r,payload,r.state==='Approved'?'Draft':r.state);
 }
 if(input.action==='save'){
  await validateReferences(r,payload);
  if(kind==='pm-plan'&&payload.installationConfirmed){const lg=(await allRecords()).find(x=>workflowOf(x)==='logistics'&&x.projectId===p.id);if(!lg?.payload.dispatchConfirmed||!lg.approvedAt)throw new WorkError('Production must confirm dispatch before the installation date is locked.',422);if(!payload.installationDate)throw new WorkError('Enter the confirmed installation date.',422);}
  const saved=await change(user,r,payload,r.state==='Approved'?'Draft':r.state==='Not applicable'?'Not applicable':'In progress');
  if(kind==='commercial'){const plan=(await allRecords()).find(x=>workflowOf(x)==='pm-plan'&&x.projectId===p.id);if(plan){const contacts=payload.stakeholders||[],ids=new Set((plan.payload.stakeholders||[]).map((x:any)=>x.id));const merged=[...(plan.payload.stakeholders||[]).filter((x:any)=>x.role!=='Commercial contact'),...contacts.filter((x:any)=>x.role==='Commercial contact'||!ids.has(x.id))];await database().prepare('UPDATE workspace_records SET payload=?,revision=revision+1,updated_at=? WHERE id=? AND revision=?').bind(JSON.stringify({...plan.payload,stakeholders:merged}),timestamp(),plan.id,plan.revision).run();}}
  return saved;
 }
 if(input.action!=='finalise')throw new WorkError('Unknown workflow action.');
 await validateReferences(r,payload);await validateFinal(user,r,p,payload);
 const t=timestamp();payload={...payload,issuedBy:user.name,position:kind==='order-confirmation'||kind.startsWith('qc')||kind==='logistics'?'Production':'Project Manager',issuedAt:t};
 const saved=await change(user,r,payload,'Approved');await database().prepare('UPDATE workspace_records SET approved_at=?,approved_by=?,actual_at=? WHERE id=?').bind(t,user.id,t,r.id).run();saved.approvedAt=t;saved.approvedBy=user.id;
 if(kind==='commercial'||kind==='pm-plan')return {record:saved};
 const doc=workflowDefinitions[kind].document?await issueWorkflowDocument(user,saved,p):null;
 if(kind.startsWith('qc-')){
  const itpTemplate=getQCTemplate(kind==='qc-led'?'led-videowall':'digital-kiosk')!;const publicChecks=Object.fromEntries([...itpTemplate.generalChecks,...itpTemplate.categoryChecks].map(c=>[c.id,payload.checks[c.id]]));
  const itp=await workflowRecord(user,p,'itp',kind,{category:kind==='qc-led'?'led-videowall':'digital-kiosk',checks:publicChecks,issuedAt:t,issuedBy:user.name});itp.payload={workflow:'itp',category:kind==='qc-led'?'led-videowall':'digital-kiosk',checks:publicChecks,issuedAt:t,issuedBy:user.name};itp.infIds=r.infIds;itp.state='Approved';
  const existing=await database().prepare('SELECT * FROM workspace_records WHERE id=?').bind(itp.id).first();if(existing){const prior=record(existing);itp.revision=prior.revision+1;await database().prepare('UPDATE workspace_records SET payload=?,state=?,revision=?,updated_at=?,approved_at=? WHERE id=?').bind(JSON.stringify(itp.payload),'Approved',itp.revision,t,t,itp.id).run();}else await insert(itp).run();await issueWorkflowDocument(user,itp,p);
 }
 if(kind==='order-confirmation'&&payload.supplierInvoiceId){const expense=await baseRecord(user,{kind:'work',module:'finance',title:`Supplier invoice · ${p.number} · ${payload.productLine}`,projectId:p.id,organisationId:p.organisationId,sourceId:r.id,sourceKey:`expense:${r.id}:${saved.revision}`});expense.payload={billingMilestone:'Supplier invoice',amount:Number(payload.invoiceAmount||0)+(payload.extraCosts||[]).reduce((n:number,c:any)=>n+Number(c.amount||0),0),currency:payload.currency||'AUD',termsReference:`${r.number} · ${payload.supplierName}`,supplierInvoiceId:payload.supplierInvoiceId,paymentStages:payload.paymentStages,verificationStatus:'Not connected — request only'};await insert(expense).run();}
 if(kind==='completion'){
  const support=await workflowRecord(user,p,'support-handover','',{completionDocumentId:doc?.id,received:false});support.infIds=r.infIds;await insert(support).run();
 }
 if(kind==='logistics')await audit(user,r,'Dispatch handed to PM',{dispatchDate:payload.dispatchDate,arrivalDate:payload.arrivalDate}).run();
 return {record:saved,document:doc};
}
async function validateReferences(r:WorkRecord,payload:any){for(const id of documentFileIds(payload)){const file:any=await database().prepare('SELECT a.record_id FROM workspace_attachments a WHERE a.id=?').bind(id).first();if(!file)throw new WorkError('An attached file is missing. Re-upload it.',422);const parent=await getRecord(file.record_id);if(parent.id!==r.id&&parent.id!==r.projectId&&parent.projectId!==r.projectId)throw new WorkError('Attachments must belong to this project.',403);}}
async function validateFinal(user:Member,r:WorkRecord,p:WorkRecord,v:any){const k=workflowOf(r)!;
 if(!applicableDocument(k,p))throw new WorkError('This document is outside the accepted supply scope.',422);
 if(k==='order-confirmation'){
  if(!v.supplierName||!v.signedPdfId)throw new WorkError('Enter the supplier and attach the supplier-signed PDF.',422);
  const signed:any=await database().prepare('SELECT mime,record_id FROM workspace_attachments WHERE id=?').bind(v.signedPdfId).first();if(signed?.mime!=='application/pdf'||signed.record_id!==r.id)throw new WorkError('Upload the supplier-signed PDF to this order.',422);
  for(const item of v.spares||[])if(!r.infIds.includes(item.infId)||!item.sku||!(Number(item.quantity)>=0))throw new WorkError('Complete the INF, SKU and quantity for each linked spare.',422);
  if(![JSON.stringify([50,50]),JSON.stringify([50,20,30])].includes(JSON.stringify(v.paymentStages)))throw new WorkError('Select the 50/50 or 50/20/30 payment stages.',422);
 }
 if(k.startsWith('qc-')){
  const all=await allRecords();if(all.some(x=>x.projectId===p.id&&workflowOf(x)==='order-confirmation'&&x.state!=='Approved'))throw new WorkError('Finalise the signed supplier orders before QC.',422);
  const tpl=getQCTemplate(k==='qc-led'?'led-videowall':'digital-kiosk')!;
  for(const step of tpl.steps){const e=v.evidence?.[step.id];if(resolveQCApplicability(step,v.scope||{}).status==='not_applicable')continue;if(e?.na&&e?.reason)continue;if(!e?.files?.length)throw new WorkError(`Evidence ${step.id} is still pending. Upload it or record N/A.`,422);if(step.measurement&&!(Number(e.measuredValue)>=0&&e.measuredValue!==''&&e.measuredValue!==undefined))throw new WorkError(`Enter the measurement for ${step.id}.`,422);}
  for(const check of [...tpl.generalChecks,...tpl.categoryChecks])if(!['Confirmed','N/A'].includes(v.checks?.[check.id]))throw new WorkError('Complete the inspection checklist.',422);
  if(!v.finalConfirmation)throw new WorkError('Confirm the completed inspection before finalising.',422);
  const infs=all.filter(x=>x.kind==='inf'&&x.projectId===p.id&&((x.payload.category==='Digital kiosk')===(k==='qc-kiosk')));
  for(const inf of infs)if(!(v.counts||[]).some((c:any)=>c.infId===inf.id&&c.type==='Installed'))throw new WorkError('Record installed component counts for every INF.',422);
  for(const c of v.counts||[])if(!infs.some(i=>i.id===c.infId)||!c.sku||!(Number(c.count)>=0)||c.expected!==undefined&&c.expected!==''&&Number(c.expected)!==Number(c.count))throw new WorkError('Check the INF, SKU and counted quantities.',422);
 }
 if(k==='logistics'){
  const qcs=(await allRecords()).filter(x=>x.projectId===p.id&&workflowOf(x)?.startsWith('qc-'));if(!qcs.length||qcs.some(x=>x.state!=='Approved'))throw new WorkError('Finalise the project QC before dispatch.',422);
  const packingSource:any=v.sourcePackingFileId?await database().prepare('SELECT mime FROM workspace_attachments WHERE id=?').bind(v.sourcePackingFileId).first():null;
  if(!v.dispatchConfirmed||!v.dispatchDate||!v.arrivalDate||!v.mode||(!(v.cases?.length&&v.contents?.length)&&packingSource?.mime!=='application/pdf'))throw new WorkError('Complete the packing list, dispatch confirmation and expected Australian arrival.',422);
  if(v.dispatchDate>today())throw new WorkError('Actual dispatch cannot be a future date.',422);
  if(v.arrivalDate<v.dispatchDate)throw new WorkError('Expected arrival cannot precede dispatch.',422);
 }
 if(k==='nonconformity'&&!v.noNonconformity&&!String(v.context||'').trim())throw new WorkError('Record the observation or select no non-conformity.',422);
 if(k==='site-inspection')for(const section of siteInspectionSections)for(const item of section.items)if(v.checks?.[item.id]!=='Confirmed'&&!(item.allowNA&&v.checks?.[item.id]==='N/A'))throw new WorkError('Complete every inspection checkbox.',422);
 if(k==='installation'||k==='commissioning'){
  const records=await allRecords();const hasSpares=records.some(x=>x.projectId===p.id&&workflowOf(x)==='order-confirmation'&&x.state==='Approved'&&x.payload.spares?.length);const infs=records.filter(x=>x.kind==='inf'&&x.projectId===p.id).map(i=>({id:i.id,number:i.number,scope:{...p.payload,...i.payload,sparePartsIncluded:hasSpares}}));
  for(const step of projectEvidenceChecklist(k,infs)){if(step.applicability==='not_applicable'||r.payload.overrides?.[step.key]?.status==='approved')continue;if(!v.evidence?.[step.key]?.files?.length)throw new WorkError(`Complete ${step.infNumber}: ${step.title}, or request an N/A override.`,422);}
  if(!v.finalConfirmation)throw new WorkError('Confirm the completed work before finalising.',422);
 }
 if(k==='site-preparation'&&(!v.schematicsId||!v.deploymentProfileId))throw new WorkError('Attach Production’s schematic and deployment profile.',422);
 if(k==='completion'){
  if(!v.practicalCompletionDate||!v.finalConfirmation)throw new WorkError('Confirm completion and enter the practical completion date.',422);
  const all=await allRecords();for(const kind of ['installation','commissioning'])if(applicableDocument(kind,p)&&!all.some(x=>x.projectId===p.id&&workflowOf(x)===kind&&x.state==='Approved'))throw new WorkError('Finalise the applicable installation and commissioning records.',422);
 }
 if(k==='warranty'){
  if(!(v.handoverDate||v.practicalCompletionDate)||!p.payload.warrantyMonths)throw new WorkError('Confirm the handover date and accepted warranty term in Sales.',422);
 }
 if(k==='support-handover'&&!v.received)throw new WorkError('Confirm receipt of the Support handover.',422);
 if(k==='swms'){
  if(!v.selectedActivities?.length||!v.finalConfirmation)throw new WorkError('Select the applicable activities and confirm issue.',422);
  const plan=(await allRecords()).find(x=>workflowOf(x)==='pm-plan'&&x.projectId===p.id);
  const installers=v.installerPersonnel?.length?v.installerPersonnel:(plan?.payload.stakeholders||[]).flatMap((s:any)=>s.role==='Installation partner'?s.personnel||[]:[]);
  if(!installers.length||installers.some((i:any)=>!i.name||!i.employer))throw new WorkError('Enter each installer’s name and employer.',422);
  if(!plan?.payload.installationDate)throw new WorkError('Set the installation work date.',422);
  v.installerPersonnel=installers;v.selectedActivities=resolveSWMSActivitySelection(v.selectedActivities).map(x=>x.id);
 }
}
export async function issueWorkflowDocument(user:Member,r:WorkRecord,p:WorkRecord){
 const existing:any=await database().prepare('SELECT id,number FROM workspace_documents WHERE record_id=? AND source_revision=?').bind(r.id,r.revision).first();if(existing)return existing;
 const kind=workflowOf(r)!,definition=workflowDefinitions[kind];const all=await allRecords();const plan=all.find(x=>workflowOf(x)==='pm-plan'&&x.projectId===p.id);
 let payload=structuredClone(r.payload);
 if(kind==='logistics'){payload=Object.fromEntries(['workflow','cases','contents','mode','destination','dispatchDate','arrivalDate','localDeliveryDate','issuedAt','issuedBy','position','sourcePackingFileId'].map(k=>[k,payload[k]]));}
 const inf=all.filter(x=>x.kind==='inf'&&x.projectId===p.id).map(x=>({id:x.id,number:x.number,model:x.payload.model,productLine:x.payload.productLine,configuration:x.payload.configuration}));
 const snapshot={kind,payload,record:{number:r.number,title:definition.title},project:{id:p.id,number:p.number,title:p.title,customer:p.payload.customer,site:p.payload.site,acceptedReference:p.payload.acceptedReference,warrantyMonths:p.payload.warrantyMonths,careMonths:p.payload.careMonths,carePlan:p.payload.carePlan,warrantyTerms:p.payload.warrantyTerms,installationDate:plan?.payload.installationDate,pmContact:plan?.payload.pmContact},inf,issuedBy:user.name,issuedAt:timestamp(),position:payload.position,template:'TINNOX-2026.11',audience:definition.audience,sourceDocuments:all.filter(x=>x.projectId===p.id&&['installation','commissioning'].includes(workflowOf(x)||'')&&x.state==='Approved').map(x=>({title:x.title,number:x.number,issuedAt:x.payload.issuedAt}))};
 const serial=JSON.stringify(snapshot);const digest=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(serial)))).map(x=>x.toString(16).padStart(2,'0')).join('');const id=crypto.randomUUID(),number=await nextNumber('DOC');
 await database().prepare('INSERT OR IGNORE INTO workspace_documents (id,record_id,source_revision,number,title,project_id,inf_ids,audience,template_edition,snapshot,digest,issued_by,issued_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)').bind(id,r.id,r.revision,number,definition.title,p.id,JSON.stringify(r.infIds),definition.audience,'TINNOX-2026.11',serial,digest,user.id,snapshot.issuedAt).run();return {id,number};
}
export async function publicTracker(token:string,docId?:string,fileId?:string,packingId?:string){
 if(!/^[a-f\d-]{36}$/i.test(token))throw new WorkError('Project link not found.',404);
 const row:any=await database().prepare("SELECT * FROM workspace_records WHERE json_extract(payload,'$.workflow')='pm-plan' AND json_extract(payload,'$.trackerToken')=?").bind(token).first();if(!row)throw new WorkError('Project link not found.',404);const plan=record(row),p=await getRecord(plan.projectId!);
 const all=await allRecords();let logistic:any=all.find(x=>x.projectId===p.id&&workflowOf(x)==='logistics'&&x.state==='Approved');
 const {results}=await database().prepare("SELECT * FROM workspace_documents WHERE project_id=? AND audience='customer' AND template_edition='TINNOX-2026.11' ORDER BY issued_at DESC").bind(p.id).all();const latest=new Map<string,any>();for(const d of results as any[])if(!latest.has(d.record_id))latest.set(d.record_id,d);const docs=[...latest.values()];const issuedPacking=docs.find(d=>d.title==='Packing List');logistic=issuedPacking?{payload:JSON.parse(issuedPacking.snapshot).payload}:undefined;
 if(packingId){const packing=docs.find(d=>d.id===packingId&&d.title==='Packing List');if(!packing)throw new WorkError('Packing list not available.',404);return brandedPackingPDF(packing);}
 if(fileId){const allowed=docs.some(d=>{const s=JSON.parse(d.snapshot);if(s.kind==='logistics')delete s.payload.sourcePackingFileId;return documentFileIds(s).includes(fileId);});if(!allowed)throw new WorkError('Document attachment not available.',404);const file:any=await database().prepare('SELECT * FROM workspace_attachments WHERE id=?').bind(fileId).first();const obj=file&&await env.BUCKET?.get(file.object_key);if(!obj)throw new WorkError('File unavailable.',404);return new Response(obj.body,{headers:{'Content-Type':file.mime,'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});}
 if(docId){const d=docs.find(d=>d.id===docId);if(!d)throw new WorkError('Document not available.',404);const snapshot=JSON.parse(d.snapshot);if(snapshot.kind==='logistics'&&snapshot.payload.sourcePackingFileId){snapshot.payload.usesSourcePDF=true;delete snapshot.payload.sourcePackingFileId;}return {...d,snapshot};}
 return {project:{number:p.number,title:p.title,site:p.payload.site},status:docs.some(d=>d.title==='Project Completion Form')?'Handed over':logistic?'In transit':'In production',installationIncluded:p.payload.installationIncluded,installationDate:plan.payload.installationDate||plan.payload.installationEstimate,installationConfirmed:!!plan.payload.installationConfirmed,deliveryDate:plan.payload.deliveryDate,arrivalDate:logistic?.payload.arrivalDate,dispatchDate:logistic?.payload.dispatchDate,customerUpdate:plan.payload.customerUpdate||'',documents:docs.map(({id,title,number,issued_at})=>({id,title,number,issued_at}))};
}
