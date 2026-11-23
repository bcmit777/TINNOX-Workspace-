import {env} from 'cloudflare:workers';
import {database,baseRecord,insert,audit,record,getRecord,WorkError,allRecords} from './workspace-store';
import {handover} from './project-workflow';
import {modules,type Member} from '../workspace';

const encoder=new TextEncoder();
export const sha=async(value:string|Uint8Array)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',typeof value==='string'?encoder.encode(value):value as any))).map(n=>n.toString(16).padStart(2,'0')).join('');
async function verified(request:Request,raw:string){
 const secret=(env as any).CPQ_HANDOVER_SECRET,t=request.headers.get('X-Tinnox-Time')||'',signature=request.headers.get('X-Tinnox-Signature')||'';
 if(!secret)throw new WorkError('CPQ connection is not configured.',503);
 if(!/^\d{13}$/.test(t)||Math.abs(Date.now()-Number(t))>300000||!/^[a-f0-9]{64}$/.test(signature))throw new WorkError('Invalid handover authentication.',401);
 const key=await crypto.subtle.importKey('raw',encoder.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['verify']);
 if(!await crypto.subtle.verify('HMAC',key,Uint8Array.from(signature.match(/../g)!,x=>parseInt(x,16)),encoder.encode(t+'.'+raw)))throw new WorkError('Invalid handover authentication.',401);
}
export async function receiveCPQ(request:Request){
 if(Number(request.headers.get('content-length')||0)>16000000)throw new WorkError('Handover is too large.',413);
 const raw=await request.text();if(raw.length>16000000)throw new WorkError('Handover is too large.',413);await verified(request,raw);
 const packet=JSON.parse(raw),{source,acceptance,project,document}=packet;
 if(packet.schema!==1||source?.system!=='ultimate-cpq-copy'||!source.quoteId||!source.rootQuoteId||!Number.isInteger(source.version)||!project?.number||!project.title||!project.payload||!document?.base64||!document.sha256)throw new WorkError('Incomplete accepted quote packet.',422);
 if(acceptance?.mode!=='test'&&acceptance?.mode!=='pandadoc')throw new WorkError('Verified completion or explicit test acceptance is required.',422);
 if(acceptance.mode==='test'&&((env as any).ENABLE_REVIEW_ACCEPTANCE!=='true'||source.reviewFixture!=='parramatta-v1'))throw new WorkError('Test acceptance is restricted to the Parramatta review.',403);
 if(acceptance.mode==='pandadoc'&&(!acceptance.documentId||!acceptance.verifiedAt))throw new WorkError('PandaDoc verification is missing.',422);
 const bytes=Uint8Array.from(atob(document.base64),c=>c.charCodeAt(0));
 if(bytes.length>10000000||new TextDecoder().decode(bytes.slice(0,5))!=='%PDF-'||await sha(bytes)!==document.sha256)throw new WorkError('The accepted PDF could not be verified.',422);
 const root=await sha(source.rootQuoteId),key='cpq:'+source.rootQuoteId,id='cpq-'+root.slice(0,32),fileId='cpq-pdf-'+document.sha256;
 const digest=await sha(JSON.stringify({...packet,document:{...document,base64:undefined}}));
 const actor:Member={id:'integration:ultimate-cpq',identityId:null,email:'',name:acceptance.mode==='test'?'Ultimate CPQ · test acceptance':'Ultimate CPQ · PandaDoc completion',kind:'management',modules:modules.map(m=>m.id),approvalModules:modules.map(m=>m.id),projectIds:['*'],organisationId:null,active:1,revision:1};
 let existing:any=await database().prepare('SELECT * FROM workspace_records WHERE source_key=?').bind(key).first();
 if(existing&&record(existing).payload.cpqSource?.digest!==digest)throw new WorkError('This CPQ project already has an accepted handover. Its agreed INF scope cannot be overwritten.',409);
 if(!existing){
  const p=await baseRecord(actor,{kind:'project',module:'sales',title:project.title,sourceKey:key,sourceId:source.quoteId});p.id=id;p.number=project.number;
  p.payload={...project.payload,signedQuoteId:fileId,acceptedDate:new Intl.DateTimeFormat('en-CA',{timeZone:'Australia/Sydney',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(acceptance.at)),cpqSource:{...source,digest},acceptance,reviewTest:acceptance.mode==='test'};
  const objectKey='cpq-accepted/'+id+'/'+document.sha256+'.pdf';
  if(!env.BUCKET)throw new WorkError('File storage unavailable.',503);
  await env.BUCKET.put(objectKey,bytes,{httpMetadata:{contentType:'application/pdf'}});
  await database().batch([insert(p),database().prepare('INSERT OR IGNORE INTO workspace_attachments (id,record_id,object_key,name,mime,size,uploaded_by,created_at) VALUES (?,?,?,?,?,?,?,?)').bind(fileId,id,objectKey,String(document.name).slice(0,200),'application/pdf',bytes.length,actor.id,new Date().toISOString()),audit(actor,p,'CPQ accepted quote received',{quoteId:source.quoteId,version:source.version,mode:acceptance.mode,pdfSha256:document.sha256})]);
  existing=await database().prepare('SELECT * FROM workspace_records WHERE source_key=?').bind(key).first();
 }
 let p=record(existing);if(p.payload.cpqSource?.digest!==digest)throw new WorkError('A different accepted version was received concurrently.',409);
 if(p.state!=='Approved')p=await handover(actor,p,{revision:p.revision});
 const children=(await allRecords()).filter(r=>r.projectId===p.id),origin=new URL(request.url).origin;
 return {projectId:p.id,projectNumber:p.number,quoteId:source.quoteId,acceptedVersion:source.version,mode:acceptance.mode,receivedAt:p.approvedAt,infNumbers:children.filter(r=>r.kind==='inf').map(r=>({number:r.number,model:r.payload.model})),links:{sales:origin+'/?module=sales&record='+p.id,production:origin+'/?module=production&record='+p.id,pm:origin+'/?module=projects&record='+p.id},workflows:children.filter(r=>r.kind==='workflow').map(r=>({title:r.title,workflow:r.payload.workflow,state:r.state,dueAt:r.dueAt}))};
}
