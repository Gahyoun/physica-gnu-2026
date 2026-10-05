// In-memory diagnostic SWFs only. Original files and scripts are never rewritten.
import {createRequire} from 'node:module';
import {parseTrace} from './swf-runtime-probe.mjs';
const require=createRequire(import.meta.url);
export async function runtimeSession(){
 const {chromium}=require(process.env.PHYSICA_PLAYWRIGHT||'playwright');
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:1300,height:1100}});
 const base=process.env.PHYSICA_BASE_URL||'http://127.0.0.1:8775/';
 let current;
 async function load(r,bytes){
  if(current)await page.unroute('**/'+current.file);
  current=r;
  await page.route('**/'+r.file,route=>route.fulfill({body:bytes,contentType:'application/x-shockwave-flash'}));
  await page.goto(base+'flash.html');
  await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
  await page.evaluate(async r=>{
   const mod=await import('./assets/flash.mjs'),api=await mod.engine();
   document.querySelector('main').innerHTML=`<div id="runtime-host" style="width:${r.width}px;height:${r.height}px;background:white"></div>`;
   window.traces=[];window.player=api.createPlayer();
   window.player.style.cssText='width:100%;height:100%';document.querySelector('#runtime-host').append(window.player);
   await window.player.ruffle().load(mod.config(r.file));
   window.player.ruffle().traceObserver=t=>{if(t.startsWith('PHYSICA_RT|')){window.traces.push(t);if(window.traces.length>100)window.traces.shift();}};
  },r);
  await page.locator('#runtime-host').scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>window.traces.length>0,null,{timeout:10000});
  await page.waitForTimeout(350);
 }
 async function sample(){
  await page.evaluate(()=>window.traces=[]);
  await page.waitForFunction(()=>window.traces.length>=2,null,{timeout:8000});
  const t=parseTrace(await page.evaluate(()=>window.traces.at(-1)));
  if(!t)throw Error('Unreadable original runtime telemetry');return t;
 }
 async function pointer(x,y,action='click',from){
  await page.locator('#runtime-host').scrollIntoViewIfNeeded();
  const b=await page.locator('#runtime-host').boundingBox();
  const X=v=>b.x+v*b.width/current.width,Y=v=>b.y+v*b.height/current.height;
  if(action==='drag'){
   await page.mouse.move(X(from[0]),Y(from[1]));await page.mouse.down();
   await page.mouse.move(X(x),Y(y),{steps:12});await page.waitForTimeout(250);
   // onMouseMove components can read the preceding event's pointer position.
   // A sub-twip final movement delivers that event without changing the value.
   await page.mouse.move(X(x+.01),Y(y));await page.waitForTimeout(150);await page.mouse.up();
  }else await page.mouse.click(X(x),Y(y));
  await page.waitForTimeout(250);return sample();
 }
 return {browser,page,load,sample,pointer};
}
