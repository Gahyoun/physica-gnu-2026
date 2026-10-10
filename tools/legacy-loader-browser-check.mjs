import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const root=new URL('../',import.meta.url),require=createRequire(import.meta.url),{chromium}=require(process.env.PHYSICA_PLAYWRIGHT||'playwright');
const specs=JSON.parse(fs.readFileSync(new URL('assets/legacy-specs.json',root))),base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/';
const browser=await chromium.launch({headless:true}),page=await browser.newPage(),results=[];
const ready=async s=>{const h=page.locator('[data-legacy-id="'+s.id+'"]');await h.scrollIntoViewIfNeeded();await page.waitForFunction(id=>!!document.querySelector('[data-legacy-id="'+id+'"]')?.dataset.legacyState,s.id);return h;};
const state=async h=>JSON.parse(await h.getAttribute('data-legacy-state'));
try{
 for(const s of specs.filter(s=>s.wrapperInitialStates)){
  for(const value of Object.values(s.wrapperInitialStates)){
   const url=s.href.replace('#','?legacyPreset='+encodeURIComponent(s.id+':'+JSON.stringify(value))+'#');await page.goto(base+url);const h=await ready(s),v=await state(h);for(const[k,x]of Object.entries(value))assert.equal(v.parameters[k],x);results.push({id:s.id,preset:value,passed:true});
  }
  await page.goto(base+s.href.replace('#','?legacyPreset='+encodeURIComponent(s.id+':'+JSON.stringify({concave:true,unsupported:99}))+'#'));const v=await state(await ready(s));assert.equal(v.parameters.concave,false);results.push({id:s.id,unapprovedPresetIgnored:true,passed:true});
 }
 const s=specs.find(s=>s.id==='rutherford-circular');await page.goto(base+s.href);let h=await ready(s);const initial=await state(h),svg=h.locator('.remaster-scene svg'),rect=await svg.boundingBox();
 await page.mouse.click(rect.x+rect.width*.65,rect.y+rect.height*.45,{modifiers:['Shift']});const added=await state(h);assert.equal(added.electronCount,initial.electronCount+1);
 const seek=h.locator('[data-frame]');for(const n of [50,0,50]){await seek.evaluate((e,n)=>{e.value=n;e.dispatchEvent(new Event('input',{bubbles:true}));},n);assert.equal((await state(h)).electronCount,added.electronCount);}
 await h.getByRole('button',{name:'초기화',exact:true}).click();assert.equal((await state(h)).electronCount,initial.electronCount);results.push({id:s.id,pointerAndSeek:true,passed:true});
 const scatter=specs.find(s=>s.id==='rutherford-scattering');await page.goto(base+scatter.href);h=await ready(scatter);let snapshots=[];for(let i=0;i<2;i++){await h.locator('[data-frame]').evaluate(e=>{e.value=240;e.dispatchEvent(new Event('input',{bubbles:true}));});snapshots.push(await h.getAttribute('data-legacy-state'));}assert.equal(snapshots[0],snapshots[1]);results.push({id:scatter.id,repeatSeekDeterministic:true,passed:true});
 await page.goto('about:blank');let recover=false;await page.route('**/assets/legacy-specs.json',async route=>{if(!recover)await route.fulfill({status:503,body:'Temporary failure'});else await route.continue();});
 await page.goto(base+scatter.href);h=page.locator('[data-legacy-id="'+scatter.id+'"]');await h.scrollIntoViewIfNeeded();await h.getByRole('button',{name:'다시 불러오기',exact:true}).waitFor();assert.equal(await h.getAttribute('data-native-ready'),null);recover=true;await h.getByRole('button',{name:'다시 불러오기',exact:true}).click();await ready(scatter);assert.equal(await h.getAttribute('data-native-ready'),'true');results.push({id:scatter.id,fetchRetry:true,passed:true});
}finally{await browser.close();}
fs.writeFileSync(new URL('docs/legacy-loader-ui-report.json',root),JSON.stringify({date:new Date().toISOString(),base,passed:true,results},null,2)+'\n');console.log('Loader/preset/pointer checks',results.length,'passed');
