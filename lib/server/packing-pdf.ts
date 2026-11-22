import {env} from 'cloudflare:workers';
import {createBrandedPackingPDF} from '../packing-document';
import {database,WorkError} from './workspace-store';
export async function brandedPackingPDF(doc:any){
 const snapshot=typeof doc.snapshot==='string'?JSON.parse(doc.snapshot):doc.snapshot;
 const fileId=snapshot.payload.sourcePackingFileId;if(!fileId)throw new WorkError('No source packing PDF is attached.',404);
 const file:any=await database().prepare('SELECT * FROM workspace_attachments WHERE id=?').bind(fileId).first();if(file?.mime!=='application/pdf')throw new WorkError('Enter the packing table for spreadsheet sources.',422);
 const object=await env.BUCKET?.get(file.object_key);if(!object)throw new WorkError('Source packing list is unavailable.',404);
 const clean=(v:any)=>String(v||'').replace(/[^\x20-\x7e]/g,' ');
 return new Response(await createBrandedPackingPDF(doc,await object.arrayBuffer()) as BodyInit,{headers:{'Content-Type':'application/pdf','Content-Disposition':`inline; filename="${clean(snapshot.project.number)}-packing-list.pdf"`,'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
}
