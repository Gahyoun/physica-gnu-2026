import fs from 'node:fs';import assert from 'node:assert/strict';import crypto from 'node:crypto';import {createRequire} from 'node:module';
import {expansionSpecs} from '../assets/expansion-physics.mjs';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PHYSICA_PLAYWRIGHT||'playwright'),browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1360,height:1000}}),[kind,s]=Object.entries(expansionSpecs).find(([,s])=>s.type==='wavefronta');
 await page.goto((process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/')+'lesson-'+s.lesson+'.html');
 const h=page.locator(`[data-flash-native="${kind}"]`);await h.scrollIntoViewIfNeeded();await page.waitForFunction(k=>document.querySelector(`[data-flash-native="${k}"]`)?.dataset.nativeReady==='true',kind);
 const planes=h.locator('.exp-plane');assert.equal(await planes.count(),22);
 const start=await planes.first().getAttribute('d');await planes.first().evaluate(e=>window.wavefrontFirstPlane=e);
 const seek=async n=>{await h.locator('[data-exp-seek]').evaluate((e,n)=>{e.value=n;e.dispatchEvent(new Event('input',{bubbles:true}));},n);await page.waitForFunction(([k,n])=>+document.querySelector(`[data-flash-native="${k}"]`).dataset.expFrame===n,[kind,n]);};
 await seek(7);assert.notEqual(await planes.first().getAttribute('d'),start);assert.equal(await planes.first().evaluate(e=>e===window.wavefrontFirstPlane),true);
 const download=page.waitForEvent('download');await h.locator('[data-exp-csv]').click();const dl=await download;assert.equal(await dl.failure(),null);
 const rows=fs.readFileSync(await dl.path(),'utf8').trim().split('\n');assert.equal(rows.length,93);assert.equal(JSON.parse(rows[0].slice(2)).frame,7);
 const vertices=rows.slice(2).filter(row=>row.startsWith('plane_'));assert.equal(vertices.length,88);
 const first=vertices.find(row=>row.startsWith('plane_11_vertex_0,')).split(',').slice(1).map(Number),a=55*Math.PI/180;
 for(const [i,v]of [50*Math.cos(a)+7*Math.sin(a),50*Math.sin(a)-7*Math.cos(a),50].entries())assert.ok(Math.abs(first[i]-v)<1e-9);
 await seek(20);assert.equal(await planes.first().getAttribute('d'),start);await seek(0);
 const offset=()=>h.locator('[data-exp-seek]').evaluate(e=>e.getBoundingClientRect().top-e.closest('[data-flash-native]').getBoundingClientRect().top),before=await offset();
 await h.locator('[data-exp-play]').click();await page.waitForTimeout(900);assert.ok(+await h.getAttribute('data-exp-frame')>0);assert.ok(Math.abs(await offset()-before)<1);
 await h.locator('[data-exp-play]').click();const paused=await planes.first().getAttribute('d');await page.waitForTimeout(400);assert.equal(await planes.first().getAttribute('d'),paused);
 const files=['assets/native-expansion.mjs','assets/expansion-physics.mjs','assets/expansion-specs.mjs'],nativeModelHashes=Object.fromEntries(files.map(f=>[f,crypto.createHash('sha256').update(fs.readFileSync(new URL('../'+f,import.meta.url))).digest('hex')]));
 const report={date:new Date().toISOString(),id:s.id,nativeModelHashes,passed:true,planes:22,csvPlaneVertices:88,csvPhase:7,svgMoves:true,svgNodesRetained:true,phase20ReturnsToStart:true,pauseStopsPlanes:true,progressPositionStable:true,scope:'Targeted HTML DOM motion, CSV numeric vertices, source 20-step wrap and playback controls; independent of original runtime audit.'};
 fs.writeFileSync(new URL('../docs/wavefront-motion-ui-report.json',import.meta.url),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
}finally{await browser.close();}
