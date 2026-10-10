import {createRequire} from 'node:module';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pages} from '../src/book.mjs';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PHYSICA_PLAYWRIGHT||'playwright');
const base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/';
const browser=await chromium.launch({headless:true});
const errors=[],report={base,readingPages:0,modelPages:0,sliderChecks:0,widths:[320,768,1360],errors};
try{
 const workers=await Promise.all([0,1].map(()=>browser.newPage({viewport:{width:1360,height:950},reducedMotion:'reduce'})));
 for(const p of workers){p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url());});}
 let next=0;
 await Promise.all(workers.map(async page=>{while(next<pages.length){const lesson=pages[next++];
  await page.goto(base+lesson.file,{waitUntil:'load'});
  if(lesson.sections.some(s=>s.blocks.some(b=>b.type==='lab')))await page.waitForSelector('[data-book-lab][data-rendered=true]');
  const data=await page.evaluate(()=>{
   const ids=[...document.querySelectorAll('[id]')].map(e=>e.id);
   return {duplicates:ids.filter((id,i)=>ids.indexOf(id)!==i),badHashes:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(decodeURIComponent(a.hash.slice(1)))).map(a=>a.hash),forwarding:document.querySelectorAll('.source-section-link').length+Number(/원본의.*절 읽기/.test(document.body.innerText)),mathError:document.querySelectorAll('.katex-error').length,overflow:document.documentElement.scrollWidth>innerWidth+1};
  });assert.deepEqual(data.duplicates,[],lesson.file);assert.deepEqual(data.badHashes,[],lesson.file);assert.equal(data.forwarding,0,lesson.file);assert.equal(data.mathError,0,lesson.file);assert.equal(data.overflow,false,lesson.file);
  report.readingPages++;if(report.readingPages%100===0)console.log('Read',report.readingPages,'/ 566');
 }}));
 const examples=[...new Map(pages.filter(p=>p.edition==='learning').flatMap(p=>p.sections.flatMap(s=>s.blocks.filter(b=>b.type==='lab').map(b=>[b.model,p])))).values()];
 const page=workers[0];
 for(const lesson of examples){
  await page.goto(base+lesson.file,{waitUntil:'load'});await page.waitForSelector('[data-book-lab][data-rendered=true]');
  for(const input of await page.locator('.book-lab input[type=range]').all())for(const bound of ['min','max']){
   await input.evaluate((e,b)=>{e.value=e[b];e.dispatchEvent(new Event('input',{bubbles:true}));},bound);
   assert.equal(await page.locator('svg [d*="NaN"],svg [d*="Infinity"]').count(),0,lesson.file);
   assert.ok(!/NaN|Infinity|undefined/.test(await page.locator('.book-lab .book-readouts').innerText()),lesson.file);report.sliderChecks++;
  }
  await page.locator('[data-book-reset]').click();
  for(const width of report.widths){await page.setViewportSize({width,height:950});await page.waitForTimeout(180);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),lesson.file+' @ '+width);}
  await page.setViewportSize({width:1360,height:950});
  const play=page.locator('[data-book-play]');if(await play.count()){
   await play.scrollIntoViewIfNeeded();await play.click();await page.waitForTimeout(180);assert.ok(Number(await page.locator('[data-book-lab]').getAttribute('data-time'))>0);await play.click();
   const stopped=await page.locator('[data-book-lab]').getAttribute('data-time');await page.waitForTimeout(120);assert.equal(await page.locator('[data-book-lab]').getAttribute('data-time'),stopped);
  }
  report.modelPages++;
 }
 assert.deepEqual(errors,[]);await fs.writeFile(new URL('../docs/book-browser-report.json',import.meta.url),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
}finally{await browser.close();}
