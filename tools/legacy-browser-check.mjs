import fs from 'node:fs';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
const root=new URL('../',import.meta.url),require=createRequire(import.meta.url);
const {chromium}=require(process.env.PHYSICA_PLAYWRIGHT||'playwright');
const base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/';
const specs=JSON.parse(fs.readFileSync(new URL('assets/legacy-specs.json',root)));
const browser=await chromium.launch({headless:true});
const results=[],errors=[],widths=[320,768,1360];let next=0;
const dependencies=['assets/style.css','assets/legacy.css','assets/legacy.mjs','assets/legacy-specs.json',...fs.readdirSync(new URL('assets/',root)).filter(f=>f.startsWith('legacy-')&&f.endsWith('.mjs')).map(f=>'assets/'+f)];
const dependencyHashes=Object.fromEntries(dependencies.map(f=>[f,crypto.createHash('sha256').update(fs.readFileSync(new URL(f,root))).digest('hex')]));
const state=h=>h.getAttribute('data-legacy-state');
const motionState=async h=>{const v=JSON.parse(await state(h));delete v.running;delete v.playing;return JSON.stringify(v);};
const picture=h=>h.evaluate(e=>[...e.querySelectorAll('svg,canvas')].map(s=>s.tagName.toLowerCase()==='canvas'?s.toDataURL():s.innerHTML).join('\n'));
const finite=async h=>h.evaluate(e=>!e.querySelector('svg [d*="NaN"],svg [d*="Infinity"],svg [points*="NaN"]')&&!/NaN|Infinity|undefined/.test(e.dataset.legacyState||''));
try{await Promise.all(Array.from({length:3},async()=>{
 const page=await browser.newPage({viewport:{width:1360,height:950},acceptDownloads:true});
 let current='';page.on('pageerror',e=>errors.push({id:current,error:e.message}));page.on('response',r=>{if(r.status()>=400)errors.push({id:current,error:r.status()+' '+r.url()});});
 while(next<specs.length){const s=specs[next++],r={id:s.id,group:s.group,inputs:0,options:0,playback:false,csv:false,passed:false};current=s.id;
  try{
   await page.setViewportSize({width:1360,height:950});await page.goto(base+s.href,{waitUntil:'load'});
   const host=page.locator('[data-legacy-id="'+s.id+'"]');await host.scrollIntoViewIfNeeded();await page.waitForFunction(id=>!!document.querySelector('[data-legacy-id="'+id+'"]')?.dataset.legacyState,s.id,{timeout:60000});
   if(!await finite(host))throw Error('Nonfinite initial state');
   const particles=host.locator('[data-particle]');if(await particles.count()){r.particleStyle=await particles.evaluateAll(es=>({count:es.length,passed:es.every(e=>{const c=getComputedStyle(e);return Number(c.fillOpacity)===.65&&c.stroke==='none';})}));if(!r.particleStyle.passed)throw Error('Particle opacity or border mismatch');}
   const reset=host.getByRole('button',{name:/^(초기화|처음 상태)$/}).first();
   const ranges=await host.locator('input[type=range]').all();
   for(const range of ranges){const initial=await range.inputValue();for(const b of ['min','max']){
    await range.evaluate((e,b)=>{e.value=e[b];e.dispatchEvent(new Event('input',{bubbles:true}));},b);await page.waitForTimeout(s.group==='quantum'?250:80);
    if(!await finite(host))throw Error('Nonfinite range '+await range.getAttribute('aria-label')+' '+b);r.inputs++;
   }await range.evaluate((e,v)=>{e.value=v;e.dispatchEvent(new Event('input',{bubbles:true}));},initial);await page.waitForTimeout(120);}
   if(await reset.count()){await reset.click();await page.waitForTimeout(250);}
   for(const select of await host.locator('select').all()){
    const initial=await select.inputValue();for(const option of await select.locator('option').evaluateAll(es=>es.map(e=>e.value))){
     await select.selectOption(option);await page.waitForTimeout(80);if(!await finite(host))throw Error('Nonfinite selected '+option);r.options++;
    }await select.selectOption(initial);
   }
   for(const checkbox of await host.locator('input[type=checkbox]').all()){
    const initial=await checkbox.isChecked();await checkbox.setChecked(!initial);await page.waitForTimeout(100);if(!await finite(host))throw Error('Nonfinite checkbox state');r.inputs++;await checkbox.setChecked(initial);
   }
   if(await reset.count()){await reset.click();await page.waitForTimeout(250);}
   const play=host.getByRole('button',{name:'재생',exact:true});
   if(await play.count()){
    const initial=await motionState(host),initialPicture=await picture(host);await play.click();await page.waitForTimeout(s.group==='quantum'?1000:700);
    const live=await motionState(host),livePicture=await picture(host);await host.getByRole('button',{name:'일시정지',exact:true}).click();await page.waitForTimeout(80);const stopped=await state(host);await page.waitForTimeout(350);
    if(initial===live)throw Error('Play did not advance');
    if(initialPicture===livePicture)throw Error('Play did not update visible geometry/graph');
    if(stopped!==await state(host))throw Error('Paused state continued changing');r.playback=true;
   }
   const csv=host.getByRole('button',{name:/CSV/}).first();if(await csv.count()){
    const [download]=await Promise.all([page.waitForEvent('download'),csv.click()]);const path=await download.path();if(!path||fs.statSync(path).size<30)throw Error('Empty CSV');r.csv=true;
   }
   for(const width of widths){await page.setViewportSize({width,height:950});await page.waitForTimeout(100);if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))throw Error('Page overflow '+width);}
   await page.setViewportSize({width:1360,height:950});
   r.themes=[];for(const theme of ['light','dark']){
    await page.evaluate(t=>document.documentElement.dataset.theme=t,theme);r.themes.push(await host.evaluate(e=>{const g=getComputedStyle(e.closest('.legacy-figure'));return {theme:document.documentElement.dataset.theme,color:g.color,surface:g.getPropertyValue('--surface').trim(),text:g.getPropertyValue('--text').trim()};}));
   }
   if(r.themes[0].color===r.themes[1].color||r.themes[0].surface===r.themes[1].surface)throw Error('Theme colors did not change');
   await page.evaluate(()=>document.documentElement.dataset.theme='light');r.passed=true;
  }catch(e){r.error=String(e);}results.push(r);console.log(r.passed?'PASS':'FAIL',s.id,r.error||'',r.inputs,r.options);
 }
 await page.close();
}));}finally{await browser.close();}
for(const [f,hash] of Object.entries(dependencyHashes))if(crypto.createHash('sha256').update(fs.readFileSync(new URL(f,root))).digest('hex')!==hash)errors.push({id:'build',error:'Assets changed during QA: '+f});
const report={date:new Date().toISOString(),base,programs:specs.length,widths,passed:results.length===specs.length&&results.every(r=>r.passed)&&errors.length===0,scope:'Actual generated lesson pages; lazy initialization, each range bound and select option, real play/pause where present, nonfinite state/geometry, CSV downloads, whole-page responsive overflow, light/dark theme tokens. Not all Cartesian input combinations or original GUI equivalence.',dependencies:dependencyHashes,results,errors};
fs.writeFileSync(process.env.PHYSICA_LEGACY_REPORT||new URL('docs/legacy-ui-report.json',root),JSON.stringify(report,null,2)+'\n');console.log('Legacy integration',results.length,'/',specs.length,report.passed);if(!report.passed)process.exitCode=1;
