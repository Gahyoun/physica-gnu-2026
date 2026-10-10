import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)(process.env.PHYSICA_PLAYWRIGHT||'playwright');
const browser=await chromium.launch({headless:true}),results=[];
const base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/';
const specs=JSON.parse(fs.readFileSync('src/native-optics-batch50b-rays.json')).filter(s=>['simprism1.swf','simprism5.swf'].includes(s.source));
try {
  for(const width of [320,768,1360])for(const spec of specs) {
    const page=await browser.newPage({viewport:{width,height:1000}}),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto(base+'lesson-'+spec.lesson+'.html');
    const host=page.locator('[data-flash-native="opticsbatch50b-'+spec.id+'"]');
    await host.scrollIntoViewIfNeeded();
    await page.waitForFunction(id=>document.querySelector('[data-flash-native="opticsbatch50b-'+id+'"]')?.dataset.nativeReady==='true',spec.id);
    const state=async()=>JSON.parse(await host.getAttribute('data-optics-b50b-state'));
    const bar=host.locator('[data-optics-b50b-timeline]'),play=host.locator('[data-optics-b50b-play]');
    assert.equal((await state()).endStep,38);
    assert.equal(+await bar.getAttribute('max'),38);
    await host.locator('[data-optics-b50b-speed]').selectOption('2');
    await play.click();await page.waitForTimeout(350);
    await play.evaluate(e=>{if(e.textContent==='일시정지')e.click();});
    const paused=await state();assert.ok(paused.step>0&&paused.step<38);
    await page.waitForTimeout(120);assert.deepEqual((await state()).snapshot.rays,paused.snapshot.rays);
    await play.click();
    await page.waitForFunction(id=>JSON.parse(document.querySelector('[data-flash-native="opticsbatch50b-'+id+'"]').dataset.opticsB50bState).completed,spec.id,{timeout:6000});
    const end=await state();assert.equal(end.step,38);assert.equal(end.endStep,38);
    assert.equal(+await bar.inputValue(),+await bar.getAttribute('max'));
    const finalGeometry=await host.locator('[data-optics-b50b-drawing]').innerHTML();
    await page.waitForTimeout(120);assert.equal(await host.locator('[data-optics-b50b-drawing]').innerHTML(),finalGeometry);
    await play.click();assert.equal((await state()).step,0);
    await page.waitForTimeout(150);assert.ok((await state()).step>0);
    await host.locator('[data-optics-b50b-reset]').click();
    let changedEnd=null;
    if(spec.controls.length) {
      await host.locator('[data-optics-b50b-input="nSlider"]').evaluate(e=>{
        e.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true,pointerId:17}));
        e.value='3';e.dispatchEvent(new Event('input',{bubbles:true}));
      });
      await page.waitForTimeout(100);
      assert.equal((await state()).endStep,38,'defer duration preview during the continuous drag');
      await page.evaluate(()=>document.dispatchEvent(new PointerEvent('pointerup',{bubbles:true,pointerId:17})));
      await page.waitForTimeout(100);changedEnd=(await state()).endStep;
      assert.notEqual(changedEnd,38);assert.equal((await state()).step,0);
      await bar.evaluate(e=>{e.value=e.max;e.dispatchEvent(new Event('input',{bubbles:true}));});
      assert.equal((await state()).completed,true);assert.equal((await state()).step,changedEnd);
    } else if(width===1360) {
      await bar.evaluate(e=>{e.value=e.max;e.dispatchEvent(new Event('input',{bubbles:true}));});
      await host.screenshot({path:'/private/tmp/physica-normalized-prism.png'});
    }
    assert.deepEqual(errors,[]);
    results.push({id:spec.id,source:spec.source,width,end:38,changedEnd,passed:true});
    await page.close();
  }
} finally {
  await browser.close();
  const dependencies=['assets/optical-progress.mjs','assets/native-optics-batch50.mjs','assets/native-optics-batch50b.mjs'];
  fs.writeFileSync(process.env.PHYSICA_PROGRESS_REPORT||'docs/optical-progress-ui-report.json',JSON.stringify({date:new Date().toISOString(),base,passed:results.length===6,results,nativeModelHashes:Object.fromEntries(dependencies.map(p=>[p,crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')]))},null,2)+'\n');
}
console.log(results.length+' natural completion, pause/resume, replay and changed-condition cases passed.');
