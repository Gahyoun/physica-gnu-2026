import fs from 'node:fs';import crypto from 'node:crypto';
import {refractionSpecs,refractionSegments,wavefrontPlanes,cameraRotation} from '../assets/native-refraction.mjs';
import {instrumentObserver,parseTrace} from './swf-runtime-probe.mjs';
import {runtimeSession} from './runtime-session.mjs';
const root=new URL('../',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('src/flash-manifest.json',root)));
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const nativeModelHashes=Object.fromEntries(['assets/native-refraction.mjs','assets/refraction-specs.mjs'].map(f=>[f,hash(fs.readFileSync(new URL(f,root)))]));
const selected=Object.entries(refractionSpecs).filter(([,s])=>!process.env.PHYSICA_ONLY||process.env.PHYSICA_ONLY.split(',').includes(s.type));
const reportPath=process.env.PHYSICA_RUNTIME_REPORT?new URL('file://'+process.env.PHYSICA_RUNTIME_REPORT):new URL('docs/refraction-runtime-report.json',root);
const rt=await runtimeSession(),results=[];
try{for(const [kind,s]of selected){
 const r=manifest.files.find(r=>r.id===s.id),bytes=fs.readFileSync(new URL(r.file,root)),segments=refractionSegments(s);
 const names=s.animated?segments.map((_,i)=>'line_'+i):segments.map((_,i)=>i<2?'line_'+i:'arrow_'+(i-2));
 const query=['time','isPressed','xMouse','yMouse','TransformMatrix','inAng','reAng',...names.map(n=>n+'.pointarray'),...(s.type==='wavefronts'?Array.from({length:6},(_,i)=>'surface_'+(i+2)+'.pointarray'):[])].map(k=>'_root.'+k);
 const probe=instrumentObserver(bytes,query),rec={id:r.id,kind,type:s.type,sha256:r.sha256,sha256Verified:hash(bytes)===r.sha256,diagnosticSha256:hash(probe.bytes),comparisons:0,maxAbsoluteError:0,mismatches:[],cases:[],controls:[],rotationSteps:0,fullEquivalence:false};
 await rt.load(r,probe.bytes);const get=(t,k)=>t['_root.'+k];
 const array=(t,k)=>typeof get(t,k)==='string'?get(t,k).split(',').map(Number):[];
 function eq(a,b,info){const error=Number.isFinite(a)&&Number.isFinite(b)?Math.abs(a-b):Infinity;rec.comparisons++;if(Number.isFinite(error))rec.maxAbsoluteError=Math.max(rec.maxAbsoluteError,error);if((!Number.isFinite(error)||error>2e-9*Math.max(1,Math.abs(a),Math.abs(b)))&&rec.mismatches.length<40)rec.mismatches.push({...info,expected:a,observed:b,error:Number.isFinite(error)?error:'unreadable'});}
 let last=null;const seen=new Set();
 function compare(t,name){
  const time=get(t,'time'),matrix=array(t,'TransformMatrix');
  const signature=JSON.stringify([time,matrix]);if(seen.has(signature))return;seen.add(signature);
  rec.cases.push({name,time,pressed:get(t,'isPressed'),rotationInput:[-get(t,'yMouse'),get(t,'xMouse'),0],camera:matrix});
  let expected=refractionSegments(s,s.animated?time:0).map(q=>q.points.flat());
  if(s.type==='s-sign')for(let i=2;i<expected.length;i+=3)[expected[i],expected[i+1]]=[expected[i+1],expected[i]];
  for(const [i,clip]of names.entries()){const observed=array(t,clip+'.pointarray');for(const [j,v]of expected[i].entries())eq(v,observed[j],{time,name,clip,coordinate:j});}
  if(s.type==='wavefronts')for(const [i,points]of wavefrontPlanes().entries()){const observed=array(t,'surface_'+(i+2)+'.pointarray');for(const [j,v]of points.flat().entries())eq(v,observed[j],{time,name,plane:i,coordinate:j});}
  if(!last){const initial=cameraRotation(s.camera).flat();for(let i=0;i<9;i++)eq(initial[i],matrix[i],{time,name,key:'initial camera '+i});}
  else if(time-last.time===1&&last.pressed&&get(t,'isPressed')){
   const m=Array.from({length:3},(_,i)=>last.matrix.slice(i*3,i*3+3));
   const v=[-get(t,'yMouse'),get(t,'xMouse'),0];
   const next=v.every(Number.isFinite)?cameraRotation(v,m).flat():m.flat();
   for(let i=0;i<9;i++)eq(next[i],matrix[i],{time,name,key:'incremental camera '+i});
   rec.rotationSteps++;
  }
  last={time,matrix,pressed:get(t,'isPressed')};
 }
 let t=await rt.sample();compare(t,'initial');
 // The original uses a sustained displacement from the press point to spin
 // the camera at each timeline update. Keep the pointer inside its hit area.
 for(const [name,dx,dy]of [['right',60,0],['up',0,-60],['diagonal',-45,35]]){
  await rt.page.evaluate(()=>window.traces=[]);
  t=await rt.pointer(140+dx,140+dy,'drag',[140,140]);
  const traces=(await rt.page.evaluate(()=>window.traces)).map(parseTrace).filter(Boolean);
  for(const q of traces)compare(q,name);
  const before=last.matrix.slice();
  // Longer press exercises more than a single rotation tick.
  const b=await rt.page.locator('#runtime-host').boundingBox();
  await rt.page.mouse.move(b.x+140,b.y+140);await rt.page.mouse.down();await rt.page.mouse.move(b.x+140+dx,b.y+140+dy,{steps:6});
  await rt.page.waitForTimeout(1500);
  for(const q of (await rt.page.evaluate(()=>window.traces)).map(parseTrace).filter(Boolean))compare(q,name+' hold');
  await rt.page.mouse.up();t=await rt.sample();compare(t,name+' release');
  const after=array(t,'TransformMatrix'),changed=after.some((v,i)=>Math.abs(v-before[i])>1e-8);
  const stoppedTime=get(t,'time');await rt.page.waitForTimeout(500);t=await rt.sample();compare(t,name+' stable');
  rec.controls.push({name,cameraChanged:changed,releaseStoppedRotation:array(t,'TransformMatrix').every((v,i)=>Math.abs(v-after[i])<1e-10),releaseTimes:[stoppedTime,get(t,'time')],passed:changed&&array(t,'TransformMatrix').every((v,i)=>Math.abs(v-after[i])<1e-10)&&get(t,'isPressed')===false});
 }
 rec.passed=rec.sha256Verified&&rec.comparisons>0&&!rec.mismatches.length&&rec.controls.every(c=>c.passed)&&rec.rotationSteps>0;
 rec.scope='Read-only original AVM1 coordinates for all 150 animated E/B segments or all static signed vectors and six wavefront planes, at recorded original time/drag states. Initial and consecutive-step rotation matrices compared with independent HTML equations, only when both adjacent samples are held pressed. Press/release transition ordering, drawn path pixels, painter depth order, all gestures and 2000-step history are not asserted. Original sustained-displacement camera rotation differs intentionally from the HTML incremental pointer interface.';
 results.push(rec);console.log(s.type,rec.comparisons,rec.passed,rec.rotationSteps,JSON.stringify(rec.mismatches.slice(0,2)),JSON.stringify(rec.controls));
 fs.writeFileSync(reportPath,JSON.stringify({date:new Date().toISOString(),nativeModelHashes,method:'Actual Ruffle original state and 3D vector arrays via read-only in-memory AVM1 observer, no original functions called or scripts distributed',files:results.length,selectedTypes:selected.map(([,s])=>s.type),comparisons:results.reduce((n,r)=>n+r.comparisons,0),fullEquivalence:false,results},null,2)+'\n');
 }}finally{await rt.browser.close();}
if(!selected.length||results.length!==selected.length||results.some(r=>!r.passed))process.exitCode=1;
