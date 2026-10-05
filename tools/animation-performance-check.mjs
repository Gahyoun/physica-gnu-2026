// Same deterministic seek workload before/after; timings are device-specific.
import fs from 'node:fs';import assert from 'node:assert/strict';import {execFileSync} from 'node:child_process';import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)(process.env.PHYSICA_PLAYWRIGHT||'playwright'),base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/',baseline='b9b886d0af8927207d4a082dbc9bab4f87c33392';
const browser=await chromium.launch({headless:true}),results=[],errors=[];
for(const mode of ['before','after']){
 const page=await browser.newPage({viewport:{width:1360,height:950}});page.on('pageerror',e=>errors.push(e.message));
 if(mode==='before')for(const asset of ['book-labs.mjs','native-chain.mjs','style.css'])await page.route('**/assets/'+asset,route=>route.fulfill({contentType:asset.endsWith('.css')?'text/css':'text/javascript',body:execFileSync('git',['show',baseline+':assets/'+asset],{encoding:'utf8'})}));
 for(const [file,selector,time] of [['lesson-2-1-3-1.html','[data-book-lab=wave]','[data-book-time]'],['lesson-1-2-4-3.html','[data-book-lab=coupled]','[data-book-time]'],['lesson-2-1-2-2.html','[data-flash-native=chain20]','[data-chain-step]']]){
  // The coupled model's lesson is resolved rather than assuming an ordinal page.
  let target=file;if(selector.includes('coupled')){const {pages}=await import('../src/book.mjs');target=pages.find(p=>p.sections.some(s=>s.blocks.some(b=>b.type==='lab'&&b.model==='coupled'))).file;}
  await page.goto(base+target);const host=page.locator(selector);await host.waitFor();await host.scrollIntoViewIfNeeded();
  const data=await host.evaluate((h,time)=>{
   const input=h.querySelector(time),view=h.querySelector('[data-book-view]')||h.querySelector('[data-chain-graphs]'),root=view.querySelector('svg');let added=0;
   const observer=new MutationObserver(()=>{});observer.observe(view,{childList:true,subtree:true});const timing=[];
   for(let i=0;i<110;i++){input.value=i%100/100*Number(input.max);const start=performance.now();input.dispatchEvent(new Event('input',{bubbles:true}));if(i>=10)timing.push(performance.now()-start);for(const m of observer.takeRecords())added+=m.addedNodes.length;}
   observer.disconnect();const control=h.querySelector('[data-chain-initial]');let initialChangeMs=null;
   if(control){const samples=[];for(let i=0;i<40;i++){control.value=-300+600*i/40;const start=performance.now();control.dispatchEvent(new Event('input',{bubbles:true}));if(i>=10)samples.push(performance.now()-start);}initialChangeMs=samples.reduce((a,b)=>a+b)/samples.length;}
   timing.sort((a,b)=>a-b);
   const curves=[...h.querySelectorAll('.graph-curve,.native-curve')];
   return {updates:110,initialChangeMs,averageMs:timing.reduce((a,b)=>a+b)/timing.length,p95Ms:timing[Math.floor(timing.length*.95)],svgNodesAdded:added,sameSVGRoot:root===view.querySelector('svg'),alphas:[...new Set(curves.map(c=>getComputedStyle(c).strokeOpacity))]};
  },time);
  if(mode==='after'){assert.deepEqual(data.alphas,['0.65']);if(!selector.includes('chain20')){assert.equal(data.sameSVGRoot,true);assert.equal(data.svgNodesAdded,0);}}
  results.push({mode,file:target,model:selector,...data});
 }
 await page.close();
}
// Parameter/probe changes must invalidate cached curves, and colour mapping must
// change styling without changing timeline steps or archived SWF data.
const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'lesson-2-1-3-1.html');const wave=page.locator('[data-book-lab=wave]');
const path=await wave.locator('.graph-curve').getAttribute('d');await wave.locator('[data-key=a]').evaluate(e=>{e.value=e.max;e.dispatchEvent(new Event('input',{bubbles:true}));});assert.notEqual(await wave.locator('.graph-curve').getAttribute('d'),path);
const history=await wave.locator('[data-book-probe-view] .native-curve').getAttribute('d');await wave.locator('[data-book-probe]').evaluate(e=>{e.value=e.min;e.dispatchEvent(new Event('input',{bubbles:true}));});assert.notEqual(await wave.locator('[data-book-probe-view] .native-curve').getAttribute('d'),history);
await page.goto(base+'lesson-2-1-2-2.html');const chain=page.locator('[data-flash-native=chain12]');await chain.scrollIntoViewIfNeeded();await chain.screenshot({path:'/private/tmp/physica-remaster-blue-grey.png'});
const style=await chain.locator('.chain-spring').first().evaluate(e=>getComputedStyle(e).stroke);assert.equal(style,'rgb(67, 82, 90)');
assert.deepEqual(errors,[]);fs.writeFileSync(new URL('../docs/animation-performance-report.json',import.meta.url),JSON.stringify({date:new Date().toISOString(),baseline,environment:'Headless Chromium, local server, no CPU throttle; synchronous 110-seek workload, first 10 warm-up samples excluded. Timings are machine-specific, not a frame-rate guarantee.',results,errors},null,2)+'\n');console.log(JSON.stringify(results));await browser.close();
