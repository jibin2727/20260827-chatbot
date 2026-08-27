window.DATA=null;
async function loadEmbeddedData(){
 const parts=[];
 for(let i=1;i<=12;i++){
  const r=await fetch(`data/part${i}.txt`);
  if(!r.ok)throw new Error(`데이터 파일 로드 실패: part${i}`);
  parts.push(await r.text());
 }
 window.DATA=JSON.parse(parts.join(""));
 DATA=window.DATA;
 CHUNKS=flatten();
}