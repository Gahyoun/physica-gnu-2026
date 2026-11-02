// Inspect every generated mathematical reading page with JavaScript disabled.
// This checks the compiled output itself, not a browser-side renderer.
import fs from 'node:fs';import crypto from 'node:crypto';import {createRequire} from 'node:module';
const root=new URL('../',import.meta.url),require=createRequire(import.meta.url),{chromium}=require(process.env.PHYSICA_PLAYWRIGHT||'playwright');
const files=fs.readdirSync(root).filter(f=>f.endsWith('.html')&&fs.readFileSync(new URL(f,root),'utf8').includes('class="katex"'));
const dependencies=['assets/math.css','assets/style.css','assets/site-layout.css','assets/fonts/PhysicaText.woff2','assets/fonts/PhysicaTitle.woff2','vendor/katex/katex.min.css','vendor/katex/katex.min.js','tools/math-format.mjs','tools/math-browser-check.mjs','tools/build.mjs','tools/flash-build.mjs','tools/navigation-build.mjs','src/content.mjs','src/section-content.mjs','src/topic-guides.mjs'];
const hash=f=>crypto.createHash('sha256').update(fs.readFileSync(new URL(f,root))).digest('hex');
const sourceHashes=Object.fromEntries(dependencies.map(f=>[f,hash(f)]));
const base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/';
const widths=[320,768,1360],jobs=widths.flatMap(width=>files.map(file=>({file,width}))),results=[],errors=[],browser=await chromium.launch({headless:true,...(process.env.PHYSICA_BROWSER_CHANNEL?{channel:process.env.PHYSICA_BROWSER_CHANNEL}:{})});
let next=0;
try{await Promise.all(Array.from({length:4},async()=>{
 const page=await browser.newPage({javaScriptEnabled:false});
 page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url());});
 while(next<jobs.length){const {file,width}=jobs[next++],v={file,width,passed:false};try{
  await page.setViewportSize({width,height:950});await page.goto(new URL(file,base).href);await page.evaluate(()=>document.fonts.ready);
  Object.assign(v,await page.evaluate(()=>{
   const raw=[],walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),pattern=/\\(?:frac|sqrt|alpha|gamma|xi|lambda|delta|begin|end|sum|int|\(|\)|\[|\])|\$\$|__h__/;
   while(walker.nextNode()){const n=walker.currentNode;if(n.parentElement.closest('.katex,script,style'))continue;if(pattern.test(n.textContent))raw.push(n.textContent.slice(0,120));}
   const clipped=[];let longEquations=0;
   for(const e of document.querySelectorAll('.equation,.remaster-equations')){
    const box=e.getBoundingClientRect();if(!box.width||!box.height)continue;
    if(e.scrollWidth>e.clientWidth+1){longEquations++;if(!['auto','scroll'].includes(getComputedStyle(e).overflowX))clipped.push('unscrollable formula');}
    for(const k of e.querySelectorAll('.katex-html')){const r=k.getBoundingClientRect();if(!r.width)continue;if(r.left<box.left-2||r.top<box.top-2||r.bottom>box.bottom+2)clipped.push('formula outside its scroll container');}
   }
   return {math:document.querySelectorAll('.katex').length,mathErrors:document.querySelectorAll('.katex-error').length,raw,clipped,longEquations,pageOverflow:document.documentElement.scrollWidth>innerWidth+1,siteLayoutLoaded:[...document.styleSheets].some(sheet=>!sheet.disabled&&sheet.href?.endsWith('/assets/site-layout.css'))};
  }));v.passed=!v.mathErrors&&!v.raw.length&&!v.clipped.length&&!v.pageOverflow&&v.siteLayoutLoaded;
 }catch(e){v.error=String(e);}results.push(v);if(!v.passed)console.log('REVIEW',JSON.stringify(v));if(results.length%100===0)console.log('math pages',results.length,'/',jobs.length);}
}));}finally{await browser.close();}
for(const [file,initialHash]of Object.entries(sourceHashes))if(hash(file)!==initialHash)errors.push('Dependency changed during browser verification: '+file);
results.sort((a,b)=>a.width-b.width||a.file.localeCompare(b.file,'en',{numeric:true}));
const report={date:new Date().toISOString(),base,pages:files.length,widths,expected:jobs.length,observed:results.length,compiledMathNodes:results.filter(r=>r.width===1360).reduce((n,r)=>n+r.math,0),passed:results.length===jobs.length&&results.every(r=>r.passed)&&!errors.length,nativeModelHashes:sourceHashes,scope:'All generated pages containing KaTeX under the GNU/KRDS site layout, with JavaScript disabled; fonts and site-layout.css loaded, visible raw TeX outside annotation, error spans, whole-page overflow and formula container bounds. Long formulas may scroll within their own keyboard-focusable container. Simulation canvas/SVG labels are not KaTeX compilation. Hashed dependencies must remain unchanged throughout this run.',results,errors};
fs.writeFileSync(new URL('docs/math-ui-report.json',root),JSON.stringify(report,null,2)+'\n');console.log(report.pages,report.observed,report.passed);if(!report.passed)process.exitCode=1;
