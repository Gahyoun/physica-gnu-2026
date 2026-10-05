import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {oscillatorSpecs,damped,driven} from '../assets/native-oscillators.mjs';
import {trajectory} from '../assets/native-integrators.mjs';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PHYSICA_PLAYWRIGHT||'playwright');
const base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/';
const browser=await chromium.launch({headless:true}),page=await browser.newPage({viewport:{width:1360,height:1000}}),errors=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));
const set=async(locator,v)=>locator.evaluate((e,v)=>{e.value=v;e.dispatchEvent(new Event('input',{bubbles:true}));},v);
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-7*(1+Math.abs(b)),`${a} differs from ${b}`);
for(const [kind,spec] of Object.entries(oscillatorSpecs)){
 await page.goto(base+'lesson-'+spec.lesson+'.html',{waitUntil:'load'});
 const host=page.locator('[data-flash-native="'+kind+'"]');await host.scrollIntoViewIfNeeded();assert.equal(await host.getAttribute('data-native-ready'),'true');
 const p=Object.fromEntries(spec.parameters.map(([k,,,,,v])=>[k,v]));
 const expect=t=>kind.endsWith('Experiment')?trajectory(kind,p)[Math.round(t/(kind==='dampedExperiment'?.1:1/15))]:kind==='damped'?damped(p.b,p.k,t):driven(p.b,p.w,t);
 await set(host.locator('[data-native-time]'),1);let s=expect(1);near(+(await host.getAttribute('data-native-x')),s.x);near(+(await host.getAttribute('data-native-v')),s.v);near(+(await host.getAttribute('data-native-a')),s.a);
 const dots=await host.locator('[data-curve] [data-dot]').evaluateAll(es=>es.map(e=>+e.getAttribute('cx')));assert.equal(new Set(dots).size,1);
 await host.locator('[data-native-play]').click();await page.waitForTimeout(300);assert.ok(+(await host.getAttribute('data-native-time'))>1);await host.locator('[data-native-play]').click();const stopped=await host.getAttribute('data-native-time');await page.waitForTimeout(150);assert.equal(await host.getAttribute('data-native-time'),stopped);
 for(const [key,,min,max] of spec.parameters)for(const v of [min,max]){await set(host.locator('[data-parameter="'+key+'"]'),v);await set(host.locator('[data-native-time]'),2);assert.ok(Number.isFinite(+(await host.getAttribute('data-native-x'))));assert.ok(!await host.locator('svg').evaluateAll(es=>es.some(e=>/NaN|Infinity/.test(e.outerHTML))));}
 await host.locator('[data-native-reset]').click();assert.equal(+(await host.getAttribute('data-native-time')),0);
 if(kind==='damped'){await set(host.locator('[data-parameter=b]'),4);await set(host.locator('[data-parameter=k]'),4);await set(host.locator('[data-native-time]'),1);near(+(await host.getAttribute('data-native-x')),3*Math.exp(-2));await host.locator('[data-native-mode]').selectOption('rest');await host.locator('[data-native-mode]').dispatchEvent('input');near(+(await host.getAttribute('data-native-v')),0);}
 if(kind==='driven'){await set(host.locator('[data-parameter=b]'),0);await set(host.locator('[data-parameter=w]'),10);await set(host.locator('[data-native-time]'),1);near(+(await host.getAttribute('data-native-x')),5*Math.sin(10));assert.ok((await host.locator('[data-native-note]').textContent()).includes('공진 성장'));}
 if(kind==='dampedExperiment'){const bob=host.locator('[data-bob]');await bob.scrollIntoViewIfNeeded();const rect=await bob.boundingBox();await page.mouse.move(rect.x+rect.width/2,rect.y+rect.height/2);await page.mouse.down();await page.mouse.move(rect.x-40,rect.y+rect.height/2,{steps:5});await page.mouse.up();assert.ok(+(await host.locator('[data-parameter=x0]').inputValue())<.2);}
 if(kind==='drivenExperiment'){await set(host.locator('[data-parameter=w]'),0);assert.equal(await host.locator('[data-value=w]').textContent(),'0.1');}
 await host.locator('[data-native-reset]').click();const dlPromise=page.waitForEvent('download');await host.locator('[data-native-csv]').click();const dl=await dlPromise;await dl.saveAs('/private/tmp/physica-'+kind+'.csv');assert.equal(fs.readFileSync('/private/tmp/physica-'+kind+'.csv','utf8').trim().split('\n').length,kind==='dampedExperiment'?203:kind==='drivenExperiment'?303:403);
 for(const width of [320,768,1024,1360]){await page.setViewportSize({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));assert.ok(await page.locator('.remaster-label').isVisible());assert.ok((await page.locator('.source-credit').textContent()).includes('경상국립대학교 물리학과 정기수 명예교수님 작'));}
 await page.getByRole('button',{name:'다크',exact:true}).click();await host.screenshot({path:'/private/tmp/physica-'+kind+'-dark.png'});await page.getByRole('button',{name:'라이트',exact:true}).click();await host.screenshot({path:'/private/tmp/physica-'+kind+'.png'});
 checks.push({kind,source:spec.source,controls:spec.parameters.map(p=>p[0]),playPauseReset:true,timeAndGraphSynchronized:true,csv:true,widths:[320,768,1024,1360],darkMode:true});console.log('Passed',kind);
}
await page.goto(base+'index.html');await page.locator('.identity img').evaluate(e=>e.decode());await page.screenshot({path:'/private/tmp/physica-remaster-header.png'});assert.deepEqual(errors,[]);
fs.writeFileSync(new URL('../docs/native-ui-report.json',import.meta.url),JSON.stringify({base,checks,errors},null,2)+'\n');await browser.close();
