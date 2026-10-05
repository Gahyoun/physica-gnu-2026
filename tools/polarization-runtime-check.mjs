// Real pointer actions and read-only display telemetry; no source functions invoked.
import fs from 'node:fs';import crypto from 'node:crypto';
import {expansionSpecs,polarization} from '../assets/expansion-physics.mjs';
import {inspectSWF,instrumentObserver} from './swf-runtime-probe.mjs';
import {runtimeSession} from './runtime-session.mjs';
const root=new URL('../',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('src/flash-manifest.json',root))),hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const nativeModelHashes=Object.fromEntries(['assets/expansion-physics.mjs','assets/expansion-specs.mjs'].map(f=>[f,hash(fs.readFileSync(new URL(f,root)))]));
const selected=Object.entries(expansionSpecs).filter(([,s])=>s.group==='polarization'&&!['xpol','ypol','rightcircular','leftcircular'].includes(s.type)&&(!process.env.PHYSICA_ONLY||process.env.PHYSICA_ONLY.split(',').includes(s.type)));
const rt=await runtimeSession(),results=[];
const reportPath=process.env.PHYSICA_RUNTIME_REPORT?new URL('file://'+process.env.PHYSICA_RUNTIME_REPORT):new URL('docs/polarization-runtime-report.json',root);
const props=['_x','_y','_xscale','_rotation'],angleError=(a,b)=>Math.abs(((a-b+540)%360+360)%360-180);
try{for(const [kind,s]of selected){
 const r=manifest.files.find(r=>r.id===s.id),bytes=fs.readFileSync(new URL(r.file,root)),swf=inspectSWF(bytes),circular=s.type.startsWith('circularright'),qwp=s.type==='qwpx';
 const controls=s.controls.filter(c=>c.origin==='original'),clipFor=key=>key==='wavelength'?'wavelengthSlider':key==='angle'?'angleSlider':'thickness';
 const clips=Array.from({length:70},(_,i)=>['1','2',...(circular?['3']:[]),...(qwp?['S1','S2','S3']:[])].map(p=>'line'+p+i)).flat();if(qwp)clips.push('lineRed1','lineRed2');
 const scalar=['gtime','num','xO','yO','toX','toY','wavelength','polDir','len','isRunning','isDrawSum'];
 const query=[...scalar.map(k=>'_root.'+k),...controls.flatMap(c=>['level','min','max','_x','_y','_xscale','slider._x','slider._y'].map(p=>'_root.'+clipFor(c.key)+'.'+p)),...clips.flatMap(k=>props.map(p=>'_root.'+k+'.'+p))];
 const probe=instrumentObserver(bytes,query),rec={id:r.id,kind,type:s.type,sha256:r.sha256,sha256Verified:hash(bytes)===r.sha256,diagnosticSha256:hash(probe.bytes),comparisons:0,maxAbsoluteError:0,maxCoordinateError:0,maxScaleError:0,maxRotationError:0,mismatches:[],cases:[],controls:[],fullEquivalence:false};
 await rt.load(r,probe.bytes);const get=(t,k)=>t['_root.'+k];
 function eq(a,b,info,tolerance,angle=false){
  const error=Number.isFinite(a)&&Number.isFinite(b)?(angle?angleError(a,b):Math.abs(a-b)):Infinity;
  rec.comparisons++;if(Number.isFinite(error)){rec.maxAbsoluteError=Math.max(rec.maxAbsoluteError,error);const category=info.key==='x'||info.key==='y'?'maxCoordinateError':info.key==='rotation'?'maxRotationError':'maxScaleError';rec[category]=Math.max(rec[category],error);}
  if((!Number.isFinite(error)||error>tolerance)&&rec.mismatches.length<40)rec.mismatches.push({...info,expected:a,observed:b,error:Number.isFinite(error)?error:'unreadable',tolerance});
 }
 function line(t,clip,base,delta,name){
  eq(base[0]+delta[0]/2,get(t,clip+'._x'),{name,clip,key:'x'},.050001);
  eq(base[1]+delta[1]/2,get(t,clip+'._y'),{name,clip,key:'y'},.050001);
  const length=Math.hypot(...delta);eq(length,get(t,clip+'._xscale'),{name,clip,key:'scale'},.0001);
  // The direction of a zero-length arrow is undefined. Floating cancellation
  // at the original coordinate origin can leave an arbitrary stored rotation.
  if(length>1e-10)eq(Math.atan2(delta[1],delta[0])*180/3.1415926,get(t,clip+'._rotation'),{name,clip,key:'rotation'},.0001,true);
  else rec.degenerateDirectionsExcluded=(rec.degenerateDirectionsExcluded||0)+1;
 }
 function compare(t,name){
  const n=get(t,'gtime'),count=get(t,'num'),p={wavelength:get(t,'wavelength'),angle:get(t,'polDir')*180/Math.PI,thickness:get(t,'len')};
  if(!Number.isFinite(n)||!Number.isInteger(count)||count<1||count>70)throw Error('Unreadable original time/sample count');
  rec.cases.push({name,time:n,samples:count,parameters:Object.fromEntries(Object.entries(p).filter(([,v])=>Number.isFinite(v))),running:get(t,'isRunning'),drawSum:get(t,'isDrawSum')});
  const tx=get(t,'toX'),ty=get(t,'toY'),ox=get(t,'xO'),oy=get(t,'yO');
  for(let i=0;i<count;i++){
   const x=i*5,a=polarization(s.type,p,n,x),E=a.E,B=a.B,base=[ox+x,oy];
   const vectors=s.type==='emwave2'?[[E[1]*tx,-E[0]+E[1]*ty],[B[1]*tx,-B[0]+B[1]*ty]]:s.type==='emwave'?[[0,-E[0]],[B[1]*tx,B[1]*ty]]:[[0,-E[0]],[E[1]*tx,E[1]*ty]];
   vectors.forEach((v,j)=>line(t,'line'+(j+1)+i,base,v,name));
   if(circular)line(t,'line3'+i,base,[E[1]*tx,-E[0]+E[1]*ty],name);
   if(qwp&&get(t,'isDrawSum')){
    const active=E[0]>0&&E[1]>0?'S3':E[0]<=0&&E[1]>0?'S2':'S1';
    line(t,'line'+active+i,base,[E[1]*tx,-E[0]+E[1]*ty],name);
    for(const tag of ['S1','S2','S3'].filter(q=>q!==active))eq(-1000,get(t,'line'+tag+i+'._x'),{name,clip:'line'+tag+i,key:'hidden'},.050001);
   }
  }
  if(qwp)for(const [i,x]of [50,50+p.thickness].entries()){const E=polarization(s.type,p,n,x).E;line(t,'lineRed'+(i+1),[ox+x,oy],[E[1]*tx,-E[0]+E[1]*ty],name);}
 }
 let t=await rt.sample();compare(t,'default');
 for(const c of controls){const clip=clipFor(c.key),bounds=[get(t,clip+'.min'),get(t,clip+'.max')];rec.controls.push({name:'slider limits',key:c.key,expected:[c.min,c.max],observed:bounds,passed:bounds[0]===c.min&&bounds[1]===c.max});
  for(const fraction of [0,.25,.5,.75,1]){
   const x=get(t,clip+'._x'),y=get(t,clip+'._y'),scale=get(t,clip+'._xscale')/100,track=swf.instances.find(i=>i.path==='_root.'+clip+'.track');if(!track)throw Error('Missing original slider track');
   const length=2*track.localX,from=[x+get(t,clip+'.slider._x')*scale,y+get(t,clip+'.slider._y')],target=[x+(fraction===0?-10:fraction===1?length+10:length*fraction)*scale,from[1]];
   t=await rt.pointer(...target,'drag',from);const expected=c.min+(c.max-c.min)*fraction,observed=get(t,clip+'.level');
   rec.controls.push({name:'slider change',key:c.key,fraction,expected,observed,passed:Number.isFinite(observed)&&Math.abs(observed-expected)<=c.step/2+.000001});compare(t,clip+' '+fraction);
  }
 }
 if(circular||qwp){const box=swf.instances.find(i=>i.button&&i.parentPath==='_root.checkbox');if(!box)throw Error('Missing original sum toggle');const before=get(t,'isDrawSum');t=await rt.pointer(box.x,box.y);rec.controls.push({name:'sum toggle',before,observed:get(t,'isDrawSum'),passed:get(t,'isDrawSum')===!before});compare(t,'sum enabled');}
 const button=swf.instances.find(i=>i.button&&i.parentPath==='_root');if(!button)throw Error('Missing original playback toggle');
 if(get(t,'isRunning'))t=await rt.pointer(button.x,button.y);
 const stopped=get(t,'gtime');await rt.page.waitForTimeout(300);t=await rt.sample();rec.controls.push({name:'pause holds time',before:stopped,observed:get(t,'gtime'),passed:stopped===get(t,'gtime')&&!get(t,'isRunning')});compare(t,'paused');
 t=await rt.pointer(button.x,button.y);const started=get(t,'gtime');
 for(let i=0;i<12;i++){t=await rt.sample();compare(t,'running '+i);}
 rec.controls.push({name:'play advances time',before:started,observed:get(t,'gtime'),passed:get(t,'isRunning')===true&&get(t,'gtime')>started});
 t=await rt.pointer(button.x,button.y);const end=get(t,'gtime');await rt.page.waitForTimeout(300);t=await rt.sample();rec.controls.push({name:'pause after playing',before:end,observed:get(t,'gtime'),passed:end===get(t,'gtime')&&!get(t,'isRunning')});compare(t,'paused after playing');
 rec.passed=rec.sha256Verified&&rec.comparisons>0&&!rec.mismatches.length&&rec.controls.every(c=>c.passed);
 rec.scope='Read-only actual original spatial field arrow centres, lengths and nonzero rotations, at recorded default/control/play/pause states. All original 65 or 70 spatial samples compared; quarter-wave input/output and active sum arrows checked. Directions of vectors with length <= 1e-10 are undefined and excluded with an explicit count; their positions and lengths are still compared. Original slider limits and five settings, sum toggle where present and playback time checked with real pointers. One twip (0.05 px) coordinate tolerance and 0.0001 scale/rotation tolerance. Artwork, arrow alpha styling, moving face markers, all combinations and long-time wraparound are outside scope. Four standalone polarization marker movies are in a separate report.';
 results.push(rec);console.log(s.type,rec.comparisons,rec.passed,JSON.stringify(rec.mismatches.slice(0,3)),JSON.stringify(rec.controls.filter(c=>!c.passed)));
 fs.writeFileSync(reportPath,JSON.stringify({date:new Date().toISOString(),nativeModelHashes,method:'Actual Ruffle AVM1 display telemetry with read-only observer and original pointer controls, versus independent HTML polarization equations',files:results.length,comparisons:results.reduce((n,r)=>n+r.comparisons,0),fullEquivalence:false,results},null,2)+'\n');
 }}finally{await rt.browser.close();}
if(!selected.length||results.length!==selected.length||results.some(r=>!r.passed))process.exitCode=1;
