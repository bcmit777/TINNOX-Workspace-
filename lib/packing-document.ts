import {PDFDocument,StandardFonts,rgb} from 'pdf-lib';
import {brandLogoPNG} from './templates/brand-logo';
export async function createBrandedPackingPDF(doc:any,sourceBytes:ArrayBuffer){
 const snapshot=typeof doc.snapshot==='string'?JSON.parse(doc.snapshot):doc.snapshot;
 const source=await PDFDocument.load(sourceBytes);if(source.getPageCount()>60)throw new Error('Use a packing list of 60 pages or fewer.');
 const pdf=await PDFDocument.create(),font=await pdf.embedFont(StandardFonts.Helvetica),bold=await pdf.embedFont(StandardFonts.HelveticaBold),logo=await pdf.embedPng(brandLogoPNG);
 const clean=(v:any)=>String(v||'').replace(/[^\x20-\x7e]/g,' ');
 for(let i=0;i<source.getPageCount();i++){
  const sourcePage=source.getPage(i),landscape=sourcePage.getWidth()>sourcePage.getHeight();const page=pdf.addPage(landscape?[841.89,595.28]:[595.28,841.89]);const w=page.getWidth(),h=page.getHeight();
  page.drawImage(logo,{x:36,y:h-67,width:125,height:125*logo.height/logo.width});page.drawText('PACKING LIST',{x:36,y:h-102,size:19,font:bold,color:rgb(.06,.28,.38)});
  page.drawText(clean(snapshot.project.number)+'  |  '+clean(snapshot.project.title).slice(0,68),{x:36,y:h-121,size:10,font});
  page.drawText('Dispatched '+clean(snapshot.payload.dispatchDate)+'  |  '+clean(snapshot.payload.mode),{x:36,y:h-139,size:10,font});
  page.drawText('Expected Australia arrival: '+clean(snapshot.payload.arrivalDate),{x:36,y:h-156,size:10,font});
  const embedded=await pdf.embedPage(sourcePage),scale=Math.min((w-72)/embedded.width,(h-215)/embedded.height);
  page.drawPage(embedded,{x:(w-embedded.width*scale)/2,y:48+(h-215-embedded.height*scale)/2,width:embedded.width*scale,height:embedded.height*scale});
  page.drawText('TINNOX  |  '+clean(doc.number)+'  |  '+clean(snapshot.issuedAt).slice(0,10),{x:36,y:25,size:8,font,color:rgb(.36,.42,.45)});page.drawText(`${i+1} / ${source.getPageCount()}`,{x:w-65,y:25,size:8,font});
 }
 return pdf.save();
}
