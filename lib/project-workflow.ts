import type {ModuleId, WorkRecord} from './workspace';

export const productLines=['PrecisionMicro','PrecisionPro','PrecisionLuma','PrecisionFlex','DuraBlaze','StructuraSign','Digital Kiosk'];
export type WorkflowKind='commercial'|'pm-plan'|'order-confirmation'|'qc-led'|'qc-kiosk'|'itp'|'logistics'|'site-preparation'|'site-inspection'|'installation'|'commissioning'|'completion'|'warranty'|'nonconformity'|'swms'|'support-handover';
export const workflowDefinitions:Record<WorkflowKind,{title:string;module:ModuleId;audience:'internal'|'customer';document:boolean}>={
 commercial:{title:'Commercial contacts & billing',module:'sales',audience:'internal',document:false},
 'pm-plan':{title:'Project delivery plan',module:'projects',audience:'internal',document:false},
 'order-confirmation':{title:'Order Confirmation',module:'production',audience:'internal',document:true},
 'qc-led':{title:'LED Video Wall QC Report',module:'production',audience:'internal',document:true},
 'qc-kiosk':{title:'Digital Kiosk QC Report',module:'production',audience:'internal',document:true},
 itp:{title:'Inspection Test Plan',module:'production',audience:'customer',document:true},
 logistics:{title:'Packing List',module:'production',audience:'customer',document:true},
 'site-preparation':{title:'Client Site Preparation Pack',module:'projects',audience:'customer',document:true},
 'site-inspection':{title:'Pre-installation Inspection',module:'projects',audience:'internal',document:true},
 installation:{title:'Installation Completion Record',module:'projects',audience:'customer',document:true},
 commissioning:{title:'Commissioning / UAT Record',module:'projects',audience:'customer',document:true},
 completion:{title:'Project Completion Form',module:'projects',audience:'customer',document:true},
 warranty:{title:'Warranty & Care Certificate',module:'projects',audience:'customer',document:true},
 nonconformity:{title:'Non-conformity Report',module:'projects',audience:'internal',document:true},
 swms:{title:'Safe Work Method Statement',module:'projects',audience:'internal',document:true},
 'support-handover':{title:'Support handover',module:'support',audience:'internal',document:false},
};
export const pmDocumentKinds:WorkflowKind[]=['site-preparation','site-inspection','swms','installation','commissioning','completion','warranty','nonconformity'];
export const workflowOf=(r:WorkRecord)=>r.payload?.workflow as WorkflowKind|undefined;
export const projectScope=(p:WorkRecord)=>({supplyModel:p.payload.supplyModel||'',installationIncluded:p.payload.installationIncluded,commissioningIncluded:p.payload.commissioningIncluded,processorIncluded:p.payload.processorIncluded,mediaPlayerIncluded:p.payload.mediaPlayerIncluded,cmsIncluded:p.payload.cmsIncluded,touchIncluded:p.payload.touchIncluded,sparePartsIncluded:p.payload.sparePartsIncluded});
export function applicableDocument(kind:string,p:WorkRecord){if(['installation','site-inspection','site-preparation','swms'].includes(kind)&&p.payload.installationIncluded===false)return false;if(kind==='commissioning'&&p.payload.commissioningIncluded===false)return false;return true;}
export function quoteFacts(p:WorkRecord,productLine:string){const es=(p.payload.entries||[]).filter((e:any)=>e.productLine===productLine);const v=(k:string)=>es.map((e:any)=>e[k]).filter(Boolean).join(' / ');return {projectNumber:p.number,projectName:p.title,productLine,model:v('model'),pixelPitch:v('pixelPitch'),screenDimensions:v('dimensions'),screenResolution:v('resolution'),cabinetDimensionsQty:es.map((e:any)=>[e.cabinetSize,e.cabinetQuantity?`${e.cabinetQuantity} cabinets`:''].filter(Boolean).join(' · ')).filter(Boolean).join(' / ')};}
export const tradeRoles=['Delivery partner','Installation partner','Commissioning partner','Service partner','Electrical contractor','Other'];
export type Stakeholder={id:string;role:string;company:string;name:string;email:string;phone:string;position:string;involvement:string;inHouse?:boolean;personnel?:{id:string;name:string;position:string;phone:string;email:string;employer:string}[]};
export function deliveryImpact(plan:any,logistics:any,installation:boolean){const target=installation?plan.installationDate:plan.deliveryDate;const forecast=logistics.localDeliveryDate;return target&&forecast&&forecast>target?'Customer date at risk':logistics.delayReason?'Transit update — customer date unchanged':'On schedule';}
export function documentFileIds(value:any):string[]{const ids=new Set<string>();const scan=(v:any,k='')=>{if(!v)return;if(typeof v==='string'&&v.startsWith('file:'))ids.add(v.slice(5));else if(typeof v==='string'&&(/fileId$/i.test(k)||k==='signedQuoteId'||k==='signedPdfId'||k==='schematicsId'||k==='deploymentProfileId'))ids.add(v);else if(Array.isArray(v))v.forEach(x=>scan(x,k));else if(typeof v==='object')Object.entries(v).forEach(([key,x])=>scan(x,key));};scan(value);return [...ids];}
