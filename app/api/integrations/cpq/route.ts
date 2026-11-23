import {receiveCPQ} from '@/lib/server/cpq-integration';
export const dynamic='force-dynamic';
export async function POST(request:Request){try{return Response.json(await receiveCPQ(request),{headers:{'Cache-Control':'no-store'}})}catch(e:any){return Response.json({error:e.status?e.message:'CPQ handover could not be received.'},{status:e.status||500})}}
