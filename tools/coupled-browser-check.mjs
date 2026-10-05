import fs from 'node:fs';import assert from 'node:assert/strict';import {createRequire} from 'node:module';
import {pages} from '../src/book.mjs';import {models} from '../assets/book-models.mjs';import {motionModels,probeModels,motionState,probeHistory} from '../assets/book-motion.mjs';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PHYSICA_PLAYWRIGHT||'playwright'),base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/';
const b=await chromium.launch({headless:true}),p=await b.newPage({viewport:{width:1360,height:1000}}),errors=[],checked=[];p.on('pageerror',e=>errors.push(e.message));
for(const key of [...motionModels,...probeModels]){
 const lesson=pages.find(p=>p.sections.some(s=>s.blocks.some(b=>b.type==='lab'&&b.model===key)));await p.goto(base+lesson.file);const host=p.locator('[data-book-lab="'+key+'"]');await host.scrollIntoViewIfNeeded();
 const model=models[key],state=Object.fromEntries(model.controls.map(c=>[c.key,c.value]));await host.locator('[data-book-time]').evaluate(e=>{e.value=1;e.dispatchEvent(new Event('input',{bubbles:true}));});assert.equal(+(await host.getAttribute('data-time')),1);
 if(motionModels.has(key)){assert.equal(+(await host.getAttribute('data-motion-time')),1);const m=motionState(key,state,1,model.calculate(state,1));if(m.positions)assert.ok(Math.abs(+(await host.getAttribute('data-motion-x'))-m.positions[0])<1e-10);}
 if(probeModels.has(key)){await host.locator('[data-book-probe]').evaluate(e=>{e.value=+e.max;e.dispatchEvent(new Event('input',{bubbles:true}));});const x=+(await host.locator('[data-book-probe]').inputValue()),history=probeHistory(model,state,x),lim=Math.max(.01,...history.map(s=>Math.abs(s.y))),expected=90-45*model.calculate(state,1).curves.at(-1).fn(x)/lim;assert.ok(Math.abs(+(await host.locator('[data-book-probe-view] circle').getAttribute('cy'))-expected)<1e-10);}
 await host.locator('[data-book-play]').click();await p.waitForTimeout(220);await host.locator('[data-book-play]').click();assert.ok(+(await host.getAttribute('data-time'))>1);const t=await host.getAttribute('data-time');await p.waitForTimeout(100);assert.equal(await host.getAttribute('data-time'),t);
 for(const width of [320,768,1360]){await p.setViewportSize({width,height:1000});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 await host.screenshot({path:'/private/tmp/physica-coupled-'+key+'.png'});checked.push(key);console.log('Coupled',key);
}
assert.deepEqual(errors,[]);fs.writeFileSync(new URL('../docs/coupled-ui-report.json',import.meta.url),JSON.stringify({base,checked,widths:[320,768,1360],errors},null,2)+'\n');await b.close();
