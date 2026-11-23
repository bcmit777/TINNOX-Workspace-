// Local-only receiver verification. Never accepts a production destination.
import assert from 'node:assert/strict';
import {createHmac,createHash,randomUUID} from 'node:crypto';
import {PDFDocument} from 'pdf-lib';
const origin='http://127.0.0.1:5173',secret='local-integration-test-only';
const pdf=await PDFDocument.create();pdf.addPage().drawText('LOCAL HANDOVER TEST ONLY');const bytes=Buffer.from(await pdf.save());
const root=randomUUID(),packet={schema:1,source:{system:'ultimate-cpq-copy',quoteId:root,rootQuoteId:root,version:1,quoteNumber:'LOCAL-QUOTE',reviewFixture:'parramatta-v1'},acceptance:{mode:'test',at:new Date().toISOString(),actor:'Local verification'},project:{number:'LOCAL-'+root.slice(0,8),title:'LOCAL QA — CPQ receiver',payload:{customer:'Local QA',site:'Local QA site',acceptedReference:'LOCAL-QUOTE',supplyModel:'Supply, installation & commissioning',installationIncluded:true,commissioningIncluded:true,processorIncluded:true,touchIncluded:false,stakeholders:[{id:'local-contact',role:'Commercial contact',name:'Local QA',company:'QA',email:'qa@example.test'}],entries:[{id:'led',productLine:'PrecisionMicro',model:'QA wall',configuration:'Local test configuration',category:'LED videowall',processorIncluded:true,touchIncluded:false},{id:'kiosk',productLine:'EdgePro Digital kiosk',model:'QA kiosk',configuration:'Local test kiosk',category:'Digital kiosk',processorIncluded:false,touchIncluded:false}]}},document:{name:'local-test.pdf',sha256:createHash('sha256').update(bytes).digest('hex'),base64:bytes.toString('base64')}};
async function post(value,key=secret,time=String(Date.now())){const raw=JSON.stringify(value),response=await fetch(origin+'/api/integrations/cpq',{method:'POST',headers:{'Content-Type':'application/json','X-Tinnox-Time':time,'X-Tinnox-Signature':createHmac('sha256',key).update(time+'.'+raw).digest('hex')},body:raw});return {status:response.status,data:await response.json()};}
assert.equal((await post(packet,'invalid')).status,401);
assert.equal((await post(packet,secret,'1000000000000')).status,401);
const first=await post(packet);assert.equal(first.status,200,JSON.stringify(first));
const again=await post(packet);assert.equal(again.status,200);assert.deepEqual(again.data.infNumbers,first.data.infNumbers);
const changed=structuredClone(packet);changed.project.payload.entries[0].configuration='Overwritten';assert.equal((await post(changed)).status,409);
const broken=structuredClone(packet);broken.document.sha256='0'.repeat(64);assert.equal((await post(broken)).status,422);
const records=(await (await fetch(origin+'/api/workspace',{headers:{cookie:'__sites_local_auth=1'}})).json()).records;
const children=records.filter(r=>r.projectId===first.data.projectId);
assert.equal(children.filter(r=>r.kind==='inf').length,2);
assert.equal(children.filter(r=>r.payload.workflow==='order-confirmation').length,2);
assert.equal(children.filter(r=>r.payload.workflow?.startsWith('qc-')).length,2);
assert.equal(children.find(r=>r.payload.workflow==='qc-kiosk').payload.scope.processorIncluded,false);
assert.equal(children.find(r=>r.payload.workflow==='qc-led').payload.scope.processorIncluded,true);
assert.equal(children.find(r=>r.payload.workflow==='pm-plan').payload.stakeholders[0].id,'local-contact');
assert.equal((await fetch(origin+'/api/workspace')).status,401);
console.log('PASS: authenticated acceptance, PDF integrity, idempotent receipt, immutable agreed scope, two INF records, product-line OCs, per-category QC and shared contacts.');
