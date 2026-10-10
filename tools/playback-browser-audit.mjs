// Audit every catalogued HTML counterpart on the actual reading page.
// A counter advancing alone does not pass: scene geometry must change.
import fs from 'node:fs';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
const root=new URL('../',import.meta.url);
const catalog=JSON.parse(fs.readFileSync(new URL('assets/flash-catalog.json',root))).files.filter(r=>r.nativeHref);
const require=createRequire(import.meta.url),pw=require(process.env.PHYSICA_PLAYWRIGHT||'playwright');
const engine=process.env.PHYSICA_BROWSER_ENGINE||'chromium',browser=await pw[engine].launch({headless:true});
const widths=(process.env.PHYSICA_PLAYBACK_WIDTHS||'320,768,1360').split(',').map(Number);
const selected=process.env.PHYSICA_PLAYBACK_IDS?catalog.filter(r=>process.env.PHYSICA_PLAYBACK_IDS.split(',').includes(r.id)):catalog;
const jobs=widths.flatMap(width=>selected.map(r=>({r,width}))),results=[],errors=[];
const output=new URL(process.env.PHYSICA_PLAYBACK_REPORT||'docs/playback-ui-report.json',root);
const dependencies=fs.readdirSync(new URL('assets',root)).filter(f=>f.endsWith('.mjs')||f==='style.css').map(f=>'assets/'+f);
const nativeModelHashes=Object.fromEntries(dependencies.map(f=>[f,crypto.createHash('sha256').update(fs.readFileSync(new URL(f,root))).digest('hex')]));
const playSelector=['gf69','vl69','modern-final69','optics-final69','modern-batch50b-probability','gb50b-particles','gb50b-dynamics','modern-batch50b-dynamics','fund','wave','exp','timeline','refraction','native','chain','mechanics','optics','scene','quantum','light','dynamics','em','circuit','potential','diffraction','ray','matrix','interferometer','polarizer','dichroic','jones','atomic','nuclear','modern-next','general-next-phasor','optics-next','general-next-molecule','modern-next-semiconductor','general-next-field','nuclear-structure','modern-next-rotor','general-next-boundary','n50','gb50-wave','gb50-huy','modern-batch50-kp','modern-batch50-periodic'].map(k=>`button[data-${k}-play]`).concat('button[data-action="play"]').join(',');
const seekSelector=['gf69-seek','vl69-seek','modern-final69-seek','optics-final69-timeline','modern-batch50b-probability-seek','gb50b-particles-seek','gb50b-dynamics-seek','modern-batch50b-dynamics-seek','optics-b50b-timeline','fund-seek','wave-step','exp-seek','timeline-step','refraction-step','native-time','chain-step','step','optics-time','scene-seek','quantum-seek','light-seek','dynamics-seek','em-seek','circuit-seek','potential-seek','diffraction-seek','ray-seek','matrix-seek','interferometer-seek','polarizer-seek','dichroic-seek','jones-seek','nuclear-seek','modern-next-seek','general-next-phasor-seek','optics-next-seek','general-next-molecule-seek','modern-next-semiconductor-seek','general-next-field-seek','nuclear-structure-seek','modern-next-rotor-seek','general-next-boundary-seek','n50-seek','gb50-wave-seek','gb50-huy-seek','modern-batch50-kp-seek','modern-batch50-periodic-seek','optics-b50-timeline'].map(k=>`input[data-${k}]`).join(',');
function save(){fs.writeFileSync(output,JSON.stringify({date:new Date().toISOString(),engine,widths,expected:jobs.length,observed:results.length,nativeModelHashes,summary:{animated:results.filter(r=>r.classification==='animated').length,equilibrium:results.filter(r=>r.classification==='equilibrium-input-tested').length,static:results.filter(r=>r.classification==='static').length,failed:results.filter(r=>!r.passed).length},scope:'Reading-page play clicks with normal scrolling; timed SVG scene geometry, pause/resume, seek from end and replay. Authored waits and equilibrium/boundary defaults are explicit, with a separate nonzero-input motion test. Static models are counted separately. This is playback QA, not all original-runtime input equivalence.',results,errors},null,2)+'\n');}
async function snapshot(h,click=false){return h.evaluate((e,{selector,click})=>{
 if(click)e.querySelector(selector)?.click();
 const scene=e.querySelector('[data-fund-scene],[data-wave-scene],[data-exp-scene],[data-refraction-scene],.timeline-native-stage svg,[data-chain-scene],[data-optics-scene],.remaster-scene svg,[data-view] svg')||e.querySelector('svg');
 const shapes=scene?[...scene.querySelectorAll('circle,path,ellipse,line,rect,polygon,polyline,g')].map(q=>[q.tagName,...['cx','cy','r','rx','ry','d','x','y','x1','x2','y1','y2','points','transform','opacity','visibility'].map(k=>q.getAttribute(k))]):[];
 return {geometry:JSON.stringify(shapes),dataset:{...e.dataset},button:e.querySelector(selector)?.textContent};
},{selector:playSelector,click});}
async function setInput(input,value){await input.evaluate((e,v)=>{e.value=v;e.dispatchEvent(new Event('input',{bubbles:true}));},value);await input.page().waitForTimeout(60);}
async function sampleMotion(h,play,page){
 const before=await snapshot(h);await play.click();const activated=(await play.textContent())==='일시정지';
 let moved=false;for(let i=0;i<10;i++){await page.waitForTimeout(200);if((await snapshot(h)).geometry!==before.geometry)moved=true;}
 const after=await snapshot(h);await play.evaluate(el=>{if(el.textContent==='일시정지')el.click();});
 return {geometryChanged:moved,playActivated:activated,before:before.dataset,after:after.dataset};
}
let next=0;
try{await Promise.all(Array.from({length:Number(process.env.PHYSICA_PLAYBACK_WORKERS||3)},async()=>{
 const page=await browser.newPage();page.setDefaultTimeout(6000);page.on('pageerror',e=>errors.push({url:page.url(),message:e.message}));
 while(next<jobs.length){const {r,width}=jobs[next++],v={id:r.id,title:r.title,href:r.nativeHref,width,passed:false};try{
  await page.setViewportSize({width,height:900});await page.goto((process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/')+r.nativeHref);
  const anchor=r.nativeHref.split('#')[1],f=page.locator('#'+anchor),h=f.locator('[data-flash-native],[data-flash-timeline],[data-widget]').first();
  await h.scrollIntoViewIfNeeded();await page.waitForFunction(id=>{const h=document.getElementById(id)?.querySelector('[data-flash-native],[data-flash-timeline],[data-widget]');return h&&(h.dataset.nativeReady==='true'||h.dataset.widget&&h.querySelector('svg'));},anchor,{timeout:6000});
  const play=h.locator(playSelector).first();if(!await play.count()||await play.isDisabled()){v.classification='static';v.frameControls=await h.locator(seekSelector).count();v.staticHasNoFrameBar=v.frameControls===0;if(!v.staticHasNoFrameBar)throw Error('Static model has a frame bar');v.passed=true;}
  else{
   v.defaultPlayback=await sampleMotion(h,play,page);let trial=v.defaultPlayback;
   // Source-authored default equilibria and a boundary stop must not be called broken.
   const dynamics=JSON.parse(fs.readFileSync(new URL('src/native-dynamics.json',root))).find(s=>s.id===r.id);
   const adjustment=r.id==='flash-60bbd9b257ac7ced'?['[data-gf69-control="y"]',300]:dynamics?.type.startsWith('springmot')?['[data-dynamics-control="x1"]',260]:dynamics?.type==='springpen'?['[data-dynamics-control="angle"]',65]:r.id==='flash-8cd1b69a0017cc1c'?['[data-fund-control="position"]',250]:r.id==='flash-56a6d23341185a0b'?['[data-fund-control="x"]',.1]:null;
   if(adjustment){await setInput(h.locator(adjustment[0]),adjustment[1]);v.nonzeroInput={selector:adjustment[0],value:adjustment[1]};trial=v.nonzeroPlayback=await sampleMotion(h,play,page);}
   if(!trial.geometryChanged){
    const initial=h.locator('[data-chain-initial]').first();
    if(await initial.count()){await setInput(initial,60);v.nonzeroInput={selector:'[data-chain-initial]',value:60};trial=v.nonzeroPlayback=await sampleMotion(h,play,page);}
    else{const seek=h.locator(seekSelector).first();if(await seek.count()){const range=await seek.evaluate(e=>({min:+e.min,max:+e.max}));await setInput(seek,range.min+(range.max-range.min)/2);trial=v.afterAuthoredWait=await sampleMotion(h,play,page);}}
   }
   const paused=await snapshot(h);await page.waitForTimeout(200);v.pauseStopsGeometry=(await snapshot(h)).geometry===paused.geometry;
   const resumeStart=await snapshot(h,true),resumeActivated=resumeStart.button==='일시정지';let resumeMotion=false;for(let sample=0;sample<5;sample++){await page.waitForTimeout(50);if((await snapshot(h)).geometry!==resumeStart.geometry)resumeMotion=true;}v.resumeActive=(await play.textContent())==='일시정지';
   // A finite ray front can legitimately finish within the observation window.
   // Accept that only with explicit natural completion and real resumed motion.
   const resumed=await snapshot(h);
   const finiteKey=['opticsB50State','opticsB50bState','opticsFinal69State'].find(k=>paused.dataset[k]&&resumed.dataset[k]);if(!v.resumeActive&&finiteKey){const before=JSON.parse(paused.dataset[finiteKey]),start=JSON.parse(resumeStart.dataset[finiteKey]),after=JSON.parse(resumed.dataset[finiteKey]);v.resumeNaturalCompletion={activated:resumeActivated,completed:after.completed===true,beforeStep:before.step,resumedFromStep:start.step,afterStep:after.step,geometryChanged:resumeMotion,passed:resumeActivated&&after.completed===true&&after.step>start.step&&resumeMotion};}
   if(!v.resumeActive){const finiteSeek=h.locator('input[data-vl69-seek]');if(await finiteSeek.count()){const end=+(await finiteSeek.getAttribute('max')),from=+resumeStart.dataset.nativeStep,to=+resumed.dataset.nativeStep;v.resumeNaturalCompletion={activated:resumeActivated,completed:to===end,beforeStep:+paused.dataset.nativeStep,resumedFromStep:from,afterStep:to,geometryChanged:resumeMotion,passed:resumeActivated&&to===end&&to>from&&resumeMotion};}}
   await play.evaluate(el=>{if(el.textContent==='일시정지')el.click();});
   const seek=h.locator(seekSelector).first();if(await seek.count()){
    const range=await seek.evaluate(e=>({min:+e.min,max:+e.max}));const loop=h.locator('input[data-gf69-loop],input[data-vl69-loop],input[data-modern-final69-loop],input[data-gb50b-particles-loop],input[data-gb50b-dynamics-loop],input[data-modern-batch50b-dynamics-loop],input[data-modern-batch50b-probability-loop],input[data-fund-loop],input[data-exp-loop],input[data-timeline-loop],input[data-scene-loop],input[data-quantum-loop],input[data-light-loop],input[data-dynamics-loop],input[data-em-loop],input[data-circuit-loop],input[data-potential-loop],input[data-diffraction-loop],input[data-ray-loop],input[data-matrix-loop],input[data-interferometer-loop],input[data-polarizer-loop],input[data-dichroic-loop],input[data-jones-loop],input[data-nuclear-loop],input[data-modern-next-loop],input[data-general-next-phasor-loop],input[data-optics-next-loop],input[data-general-next-molecule-loop],input[data-modern-next-semiconductor-loop],input[data-general-next-field-loop],input[data-nuclear-structure-loop],input[data-modern-next-rotor-loop],input[data-general-next-boundary-loop],input[data-n50-loop],input[data-gb50-wave-loop],input[data-gb50-huy-loop],input[data-modern-batch50-kp-loop],input[data-modern-batch50-periodic-loop]').first();if(await loop.count())await loop.uncheck();
    await setInput(seek,range.max);v.endBeforePlay=await seek.inputValue();await play.click();
    // Some authored timers advance below 2 Hz. Allow a real tick rather than
    // mistaking a 450 ms observation window for a failed replay.
    const deadline=Date.now()+5000;while(Date.now()<deadline&&+await seek.inputValue()>=range.max&&await play.textContent()==='일시정지')await page.waitForTimeout(100);
    v.replayFromEnd=+await seek.inputValue()<range.max&&await play.textContent()==='일시정지';await play.evaluate(el=>{if(el.textContent==='일시정지')el.click();});
   }else v.replayFromEnd=null;
   v.classification=v.nonzeroInput?'equilibrium-input-tested':'animated';v.passed=trial.geometryChanged&&trial.playActivated&&v.pauseStopsGeometry&&(v.resumeActive||v.resumeNaturalCompletion?.passed)&&v.replayFromEnd!==false;
  }
  if(!v.passed)console.log('REVIEW',width,r.title,JSON.stringify(v));
 }catch(e){v.error=e.message;console.log('ERROR',width,r.title,e.message);}results.push(v);if(results.length%10===0){console.log('checked',results.length,'/',jobs.length);save();}}
 await page.close();
}));}finally{await browser.close();save();}
if(results.length!==jobs.length||results.some(v=>!v.passed)||errors.length)process.exitCode=1;
