// Real Chromium touch input, rather than JavaScript-dispatched pointer events.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {chainSpecs, chainTrajectory, chainEquilibrium} from '../assets/native-chain.mjs';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PHYSICA_PLAYWRIGHT||'playwright');
const base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/';
const output=new URL('../'+(process.env.PHYSICA_TOUCH_REPORT||'docs/touch-drag-ui-report.json'),import.meta.url);
const nativeModelHashes=Object.fromEntries(['assets/style.css','assets/native-chain.mjs','assets/native-mechanics.mjs'].map(f=>[f,crypto.createHash('sha256').update(fs.readFileSync(new URL('../'+f,import.meta.url))).digest('hex')]));
const browser=await chromium.launch({headless:true}),results=[],errors=[];
try {
 for(const width of [320,768]) {
  const context=await browser.newContext({viewport:{width,height:1000},hasTouch:true,isMobile:true,deviceScaleFactor:2});
  const page=await context.newPage(),cdp=await context.newCDPSession(page);
  page.on('pageerror',e=>errors.push({width,url:page.url(),message:e.message}));
  for(const [kind,spec] of [...Object.entries(chainSpecs),['stick',{lesson:'1-2-1-1'}],['potential',{lesson:'1-2-1-1'}]]) {
   const r={width,kind,passed:false};results.push(r);
   try {
    await page.goto(base+'lesson-'+spec.lesson+'.html');
    const host=page.locator(`[data-flash-native="${kind}"]`),chain=!!chainSpecs[kind];
    await host.scrollIntoViewIfNeeded();
    await page.waitForFunction(k=>document.querySelector(`[data-flash-native="${k}"]`)?.dataset.nativeReady==='true',kind);
    const init=host.locator(chain?'[data-chain-initial="0"]':'[data-initial]');
    // Place the chosen mass away from the other masses/labels before testing.
    await init.evaluate(e=>{e.value=40;e.dispatchEvent(new Event('input',{bubbles:true}));});
    if(chain)await host.locator('[data-chain-force]').check();
    const bob=host.locator(chain?'[data-chain-bob="0"]':'[data-drag-tip]');
    await bob.scrollIntoViewIfNeeded();await page.waitForTimeout(80);
    const before=+await init.inputValue(),rect=await bob.boundingBox(),start={x:rect.x+rect.width/2,y:rect.y+rect.height/2};
    r.hitTarget=await page.evaluate(p=>document.elementFromPoint(p.x,p.y)?.matches('[data-chain-bob="0"],[data-drag-tip]'),start);
    assert.ok(r.hitTarget,'mass is the actual touch target');
    const end={x:start.x+(!chain&&kind==='potential'||chain&&spec.mode===2?18:0),y:start.y+(!chain&&kind==='stick'||chain&&spec.mode!==2?18:0)};
    const scrollBefore=await page.evaluate(()=>scrollY);
    await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{...start,id:1,radiusX:1,radiusY:1,force:1}]});
    for(let i=1;i<=4;i++){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:start.x+(end.x-start.x)*i/4,y:start.y+(end.y-start.y)*i/4,id:1,radiusX:1,radiusY:1,force:1}]});await page.waitForTimeout(35);}
    await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    await page.waitForFunction(k=>Number(document.querySelector(`[data-flash-native="${k}"]`)?.dataset.nativeStep)>0,kind,{timeout:4000});
    r.inputBefore=before;r.inputAfter=+await init.inputValue();r.touchChangesInput=r.inputAfter!==before;
    r.scrollStable=Math.abs(await page.evaluate(()=>scrollY)-scrollBefore)<2;
    assert.ok(r.touchChangesInput,'touch drag updates initial condition');assert.ok(r.scrollStable,'dragging mass does not scroll page');
    const play=host.locator(chain?'[data-chain-play]':'[data-mechanics-play]');
    r.releaseStartsPlayback=await play.textContent()==='일시정지';assert.ok(r.releaseStartsPlayback);
    await play.tap();r.pausedStep=+(await host.getAttribute('data-native-step'));
    await page.waitForTimeout(180);assert.equal(+(await host.getAttribute('data-native-step')),r.pausedStep);
    if(chain){
     const inputs=await host.locator('[data-chain-initial]').evaluateAll(es=>es.map(e=>+e.value));
     const initial=chainEquilibrium(spec);for(let i=0;i<spec.n;i++)initial[i][spec.mode===2?'x':'y']+=inputs[i];
     if(spec.mode===3){const xs=await host.locator('[data-chain-x]').evaluateAll(es=>es.map(e=>+e.value));xs.forEach((x,i)=>initial[i].x+=x);}
     assert.deepEqual(JSON.parse(await host.getAttribute('data-native-state')),chainTrajectory(initial,spec,r.pausedStep)[r.pausedStep]);
     r.stateMatchesNumericalModel=true;
     r.graphCursorAligned=await host.evaluate(h=>[...h.querySelectorAll('[data-chain-graph]')].every(g=>[...g.querySelectorAll('[data-chain-dot]')].every(d=>+d.getAttribute('cx')===+g.querySelector('[data-chain-cursor]').getAttribute('x1'))));
     assert.ok(r.graphCursorAligned);
    }
    r.noHorizontalOverflow=await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1);assert.ok(r.noHorizontalOverflow);
    r.passed=true;
   } catch(e) {r.error=e.message;console.log('FAIL',width,kind,e.message);}
   console.log('checked',results.length,'/ 26');
  }
  await context.close();
 }
} finally {
 await browser.close();
 fs.writeFileSync(output,JSON.stringify({date:new Date().toISOString(),base,engine:'Chromium',nativeModelHashes,input:'CDP touchStart/touchMove/touchEnd, native browser touch events',widths:[320,768],expected:26,observed:results.length,passed:results.length===26&&results.every(r=>r.passed)&&!errors.length,scope:'11 elastic-network models and 2 mechanics models; drag initial conditions, release auto-play, touch pause, state/graph synchronization, scroll and horizontal overflow. Emulation only, not physical-device or original-runtime input equivalence.',results,errors},null,2)+'\n');
}
if(results.some(r=>!r.passed)||errors.length)process.exitCode=1;
