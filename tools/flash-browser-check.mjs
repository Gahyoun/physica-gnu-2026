import {createRequire} from 'node:module';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PHYSICA_PLAYWRIGHT||'playwright');
const {PNG}=require(process.env.PHYSICA_PNGJS||'pngjs');
const manifest=JSON.parse(await fs.readFile(new URL('../src/flash-manifest.json',import.meta.url)));
const base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/';
const names=process.env.PHYSICA_FLASH_NAMES?.split(',');
const selectedFiles=names?manifest.files.filter(r=>names.includes(r.source.split('/').pop())):process.env.PHYSICA_FLASH_LIMIT?manifest.files.slice(0,Number(process.env.PHYSICA_FLASH_LIMIT)):manifest.files;
const screenshotDir=process.env.PHYSICA_FLASH_PREVIEWS||'/private/tmp/physica-flash-previews';
await fs.mkdir(screenshotDir,{recursive:true});
const browser=await chromium.launch({headless:true});
const results=[];
try{
 const workers=await Promise.all([0,1].map(async()=>{
  const page=await browser.newPage({viewport:{width:1000,height:900}});
  await page.goto(base+'flash.html',{waitUntil:'load'});
  await page.evaluate(async()=>{window.flashModule=await import('./assets/flash.mjs');window.flashEngine=await window.flashModule.engine();document.querySelector('main').innerHTML='<div id="audit-stage" style="width:640px;height:480px;background:white"></div>';});
  return page;
 }));
 let next=0;
 await Promise.all(workers.map(async page=>{
  while(next<selectedFiles.length){
   const r=selectedFiles[next++],errors=[],warnings=[],requests=[];
   const onConsole=m=>{if(m.type()==='error')errors.push(m.text());if(m.type()==='warning'&&!m.text().includes('GPU stall'))warnings.push(m.text());};
   const onError=e=>errors.push(e.message);
   const onResponse=res=>{if(res.status()>=400)requests.push({url:res.url(),status:res.status()});};
   page.on('console',onConsole);page.on('pageerror',onError);page.on('response',onResponse);
   let metadata=null,pixels=0,error=null;
   try{
    metadata=await page.evaluate(async record=>{
     const host=document.getElementById('audit-stage');host.replaceChildren();
     const player=window.flashEngine.createPlayer();window.auditPlayer=player;
     player.style.width='100%';player.style.height='100%';host.append(player);
     const config=window.flashModule.config(record.file);config.preferredRenderer='canvas';
     await Promise.race([player.ruffle().load(config),new Promise((_,reject)=>setTimeout(()=>reject(Error('Load timeout')),15000))]);
     return player.ruffle().metadata;
    },r);
    await page.waitForFunction(()=>window.auditPlayer.ruffle().readyState===2,{timeout:5000});
    metadata=await page.evaluate(()=>window.auditPlayer.ruffle().metadata);
    await page.waitForTimeout(Math.max(250,Math.min(1200,3000/r.frameRate)));
    assert.equal(metadata.width,r.width);assert.equal(metadata.height,r.height);
    const bytes=await page.locator('#audit-stage').screenshot();
    await fs.writeFile(screenshotDir+'/'+r.id+'.png',bytes);
    const png=PNG.sync.read(bytes),colors=new Set();
    for(let i=0;i<png.data.length;i+=16){const [red,green,blue]=png.data.subarray(i,i+3);colors.add((red<<16)|(green<<8)|blue);}
    pixels=colors.size;
   }catch(e){error=e.message;}
   await page.evaluate(()=>{window.auditPlayer?.remove();window.auditPlayer=null;});
   page.off('console',onConsole);page.off('pageerror',onError);page.off('response',onResponse);
   results.push({id:r.id,source:r.source,loaded:!!metadata&&!error,metadata,colors:pixels,visualNonempty:pixels>4,error,errors,warnings,requests,controlsVerified:false});
   if(results.length%25===0)console.log('Flash',results.length,'/',manifest.files.length);
  }
 }));
 const report={base,engine:manifest.engine,files:results.length,loaded:results.filter(r=>r.loaded).length,visualNonempty:results.filter(r=>r.visualNonempty).length,results};
 await fs.writeFile(process.env.PHYSICA_FLASH_REPORT||new URL('../docs/flash-browser-report.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({files:report.files,loaded:report.loaded,visualNonempty:report.visualNonempty,loadFailures:results.filter(r=>!r.loaded).slice(0,15).map(r=>({source:r.source,error:r.error})),requestFailures:results.filter(r=>r.requests.length).length}));
}finally{await browser.close();}
