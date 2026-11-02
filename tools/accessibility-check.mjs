// Targeted rendered accessibility checks for the GNU/KRDS shell, not a WCAG certification.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PHYSICA_PLAYWRIGHT||'playwright');
const base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/';
const browser=await chromium.launch({headless:true,...(process.env.PHYSICA_BROWSER_CHANNEL?{channel:process.env.PHYSICA_BROWSER_CHANNEL}:{})});
const report={date:new Date().toISOString(),base,checks:[],errors:[],scope:'Rendered shell and TOC contrast, keyboard focus, target size, text spacing, CSS zoom (200/400%) plus 320px viewport reflow and reduced motion; native browser zoom and manual assistive-technology review remain separate.'};
const pass=name=>report.checks.push(name);
try{
 const context=await browser.newContext({viewport:{width:1440,height:1100},colorScheme:'light',reducedMotion:'reduce'});
 const page=await context.newPage();page.on('pageerror',error=>report.errors.push(error.message));
 const home=new URL('index.html',base).href;
 for(const theme of ['light','dark']){
  for(const width of [320,390,768,1440]){
   await page.setViewportSize({width,height:1100});await page.goto(home,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
   const pageNames=await page.locator('.toc-pages a').evaluateAll(nodes=>nodes.map(n=>({name:n.getAttribute('aria-label'),label:n.textContent.trim()})));
   assert.equal(pageNames.length,566);assert.ok(pageNames.every(({name,label})=>typeof name==='string'&&/\d+쪽$/.test(name)&&label.length>0&&name.startsWith(label+' ')),'Every page link preserves its visible label at the start of its topic and page name');
   await page.locator(`[data-theme-value=${theme}]`).click();
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),theme+' '+width+' page overflow');
   await page.locator('.search-menu>summary').click();
   const menu=await page.locator('.search-menu>div').boundingBox();
   assert.ok(menu.x>=-1&&menu.x+menu.width<=width+1,'Open search menu stays in the viewport');
   await page.keyboard.press('Escape');
   assert.equal(await page.locator('.search-menu>summary').evaluate(n=>document.activeElement===n),true);
   await page.locator('#chapter-1>summary').click();await page.locator('#chapter-1 .toc-section>summary').first().click();
   assert.ok(await page.getByRole('link',{name:'1p 운동량 1쪽',exact:true}).isVisible(),'Page link has a meaningful accessible name');
   const measures=await page.evaluate(()=>{
    const parse=s=>{const v=s.match(/[\d.]+/g).map(Number);return [v[0]/255,v[1]/255,v[2]/255,v[3]??1];};
    const blend=(a,b)=>[a[0]*a[3]+b[0]*(1-a[3]),a[1]*a[3]+b[1]*(1-a[3]),a[2]*a[3]+b[2]*(1-a[3]),1];
    function background(n){const chain=[];for(let p=n;p;p=p.parentElement)chain.unshift(p);let c=[1,1,1,1];for(const p of chain)c=blend(parse(getComputedStyle(p).backgroundColor),c);return c;}
    const lum=c=>c.slice(0,3).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
    const ratio=(a,b)=>(Math.max(lum(a),lum(b))+.05)/(Math.min(lum(a),lum(b))+.05);
    const visible=n=>n.getClientRects().length>0;
    const text=[...document.querySelectorAll('.source-credit a,.toc-overview,.toc-preview,.toc-count,.site-footer p,.theme-switch button,.home-search-control input')].filter(visible).map(n=>{const s=getComputedStyle(n),bg=background(n);return {name:n.className||n.tagName,font:parseFloat(s.fontSize),contrast:ratio(blend(parse(s.color),bg),bg)};});
    const controls=[...document.querySelectorAll('.theme-switch button,.page-heading button,.home-search-control input,.toc-actions button')].filter(visible).map(n=>{const s=getComputedStyle(n);return {name:n.textContent||n.id,contrast:ratio(parse(s.borderTopColor),background(n.parentElement)),borderWidth:parseFloat(s.borderTopWidth)};});
    const field=document.querySelector('#home-query');const placeholderContrast=ratio(parse(getComputedStyle(field,'::placeholder').color),background(field));
    const targets=[...document.querySelectorAll('.theme-switch button,.top-menu>a,.search-menu>summary,.page-heading button,.home-search-control input,.home-search-control button,.toc-actions button,.toc-topic>a,.toc-pages a,.site-footer>div>a')].filter(visible).map(n=>{const bounds=n.getBoundingClientRect();return {name:n.textContent.trim()||n.id,width:bounds.width,height:bounds.height};});
    const previews=[...document.querySelectorAll('.toc-preview')].map(n=>{const s=getComputedStyle(n);return {font:parseFloat(s.fontSize),whiteSpace:s.whiteSpace,overflow:s.overflow,textOverflow:s.textOverflow,overflowing:n.scrollWidth>n.clientWidth+1};});
    return {text,controls,targets,previews,placeholderContrast};
   });
   assert.ok(measures.text.every(n=>n.contrast>=4.5),JSON.stringify(measures.text.filter(n=>n.contrast<4.5)));
   assert.ok(measures.text.every(n=>n.font>=14),'Readable metadata sizes');
   assert.ok(measures.placeholderContrast>=4.5,'Readable search placeholder');
   assert.ok(measures.controls.every(n=>n.contrast>=3&&n.borderWidth>=1),JSON.stringify(measures.controls.filter(n=>n.contrast<3)));
   assert.ok(measures.targets.every(n=>n.width>=43.99&&n.height>=43.99),JSON.stringify(measures.targets.filter(n=>n.width<43.99||n.height<43.99)));
   assert.ok(measures.previews.every(n=>n.font>=14&&n.whiteSpace!=='nowrap'&&n.overflow!=='hidden'&&n.textOverflow!=='ellipsis'&&!n.overflowing),'Complete, wrapping chapter previews');
   assert.equal(await page.locator('.theme-switch [aria-pressed=true]').evaluate(n=>getComputedStyle(n).textDecorationLine.includes('underline')),true);
   assert.equal(await page.locator('.home-search-links a').first().evaluate(n=>getComputedStyle(n).textDecorationLine.includes('underline')),true);
   await page.locator('#home-query').click();await page.keyboard.press('Tab');
   const focus=await page.locator('.home-search button').evaluate(n=>{const s=getComputedStyle(n);return {active:n===document.activeElement,visible:n.matches(':focus-visible'),width:parseFloat(s.outlineWidth),style:s.outlineStyle,shadow:s.boxShadow};});
   assert.ok(focus.active&&focus.visible&&focus.width>=3&&focus.style==='solid'&&focus.shadow!=='none',JSON.stringify(focus));
   pass(theme+' @ '+width+'px: text 4.5:1+, control boundaries 3:1+, 14px metadata, 44×44px targets, wrapped previews and keyboard focus');
  }
 }
 await page.setViewportSize({width:1280,height:1100});await page.goto(home,{waitUntil:'networkidle'});
 for(const zoom of [2,4]){
  await page.evaluate(value=>document.body.style.zoom=String(value),zoom);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),zoom*100+'% CSS zoom page overflow');
 }
 await page.evaluate(()=>document.body.style.zoom='1');
 pass('CSS zoom 200%/400% plus 320px viewport reflow without whole-page horizontal scrolling');
 await page.setViewportSize({width:320,height:1100});await page.reload({waitUntil:'networkidle'});
 await page.addStyleTag({content:'p,li,a,button,label,summary,small,span{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}'});
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Text-spacing page overflow');
 const clipped=await page.locator('.theme-switch button,.toc-actions button,.toc-name,.toc-preview,.toc-count').evaluateAll(nodes=>nodes.filter(n=>n.scrollWidth>n.clientWidth+1).map(n=>n.className||n.textContent));
 assert.deepEqual(clipped,[]);
 pass('Custom text spacing preserves control labels and chapter content at 320px');
 await page.goto(new URL('lesson-1-1-1-1.html',base).href,{waitUntil:'networkidle'});
 await page.locator('.menu-toggle').click();await page.keyboard.press('Escape');
 assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');
 assert.equal(await page.evaluate(()=>document.activeElement.className),'menu-toggle');
 assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
 pass('Mobile textbook Escape returns focus; reduced motion disables smooth scrolling');
 const forced=await browser.newContext({viewport:{width:390,height:844},forcedColors:'active'});
 const forcedPage=await forced.newPage();await forcedPage.goto(home,{waitUntil:'networkidle'});await forcedPage.keyboard.press('Tab');
 assert.equal(await forcedPage.locator('.skip').evaluate(n=>getComputedStyle(n).outlineStyle),'solid');
 assert.ok(await forcedPage.locator('.skip').evaluate(n=>parseFloat(getComputedStyle(n).outlineWidth)>=3));
 await forced.close();pass('Forced-colors mode retains an explicit keyboard focus outline');
 assert.deepEqual(report.errors,[]);report.passed=true;
 if(process.env.PHYSICA_ACCESSIBILITY_REPORT)await fs.writeFile(process.env.PHYSICA_ACCESSIBILITY_REPORT,JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify(report,null,2));await context.close();
}finally{await browser.close();}
