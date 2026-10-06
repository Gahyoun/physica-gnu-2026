// Diagnostic copies only: real original pointer controls and live AVM1 values.
import fs from 'node:fs';import crypto from 'node:crypto';
import {expansionSpecs,waveValue,incidentShape} from '../assets/expansion-physics.mjs';
import {inspectSWF,instrumentObserver,parseTrace} from './swf-runtime-probe.mjs';
import {runtimeSession} from './runtime-session.mjs';import {compareFinite} from './runtime-comparison.mjs';
const root=new URL('../',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('src/flash-manifest.json',root))),hash=b=>crypto.createHash('sha256').update(b).digest('hex'),nativeModelHashes=Object.fromEntries(['assets/expansion-physics.mjs','assets/expansion-specs.mjs'].map(f=>[f,hash(fs.readFileSync(new URL(f,root)))])),rt=await runtimeSession(),results=[];
const types=['harmonicwave2','phasorprin2Inv','waveexpweb','super1'];
try{for(const type of types){
 const [kind,s]=Object.entries(expansionSpecs).find(([,s])=>s.type===type),r=manifest.files.find(v=>v.id===s.id),bytes=fs.readFileSync(new URL(r.file,root)),swf=inspectSWF(bytes),qs=[];
 const scalar=type==='harmonicwave2'?[]:type==='phasorprin2Inv'?['time','wavelength','xSelected','chk1.isChecked','startBtn.isON',...['wavelengthSlider'].flatMap(c=>['_x','_y','_xscale','box._x','box._y','width','height','value'].map(k=>c+'.'+k)),...['marker1','marker2','marker3'].flatMap(c=>['_x','_y'].map(k=>c+'.'+k))]:type==='waveexpweb'?['stage','sec','secClock','amp','waveLength','frequency','nLine','interval','xs','ys','ball._x','ball._y','ballRed._x','ballRed._y','startTBtn.isON']:['time','waveIndex1','waveIndex2','direction1','direction2','isRunning','isFast','isEach','amplitude','marker1._x','marker1._y','marker2._x','marker2._y','marker3._x','marker3._y'];
 if(type==='harmonicwave2')for(let i=0;i<200;i++)for(const c of ['dot','line'])for(const k of (c==='dot'?['_x','_y']:['_x','_y','_xscale','_rotation']))scalar.push(c+i+'.'+k);
 if(type==='phasorprin2Inv')for(let x=0;x<=400;x+=4)qs.push({label:'wave'+x,fn:'waveFtn',args:[x,'_root.time'],x});
 if(type==='super1'){
  // Every original drawn x, plus exact discontinuity borders; queries retain originals' temporary-variable effects.
  for(let x=-400;x<=0;x+=5)for(let shape=0;shape<5;shape++)for(let sign=0;sign<2;sign++)qs.push({label:`branch${shape}_${sign}_${x}`,fn:'getWaveFtn',args:[sign,shape,x],x,shape,sign});
  for(let x=-300;x<=300;x+=5)for(let j=1;j<=2;j++)qs.push({label:`incident${j}_${x}`,fn:`getIncident${j}Wave`,args:[x],x,j});
 }
 const probe=instrumentObserver(bytes,[...scalar.map(k=>'_root.'+k),...qs]),rec={id:r.id,kind,type,sha256:r.sha256,sha256Verified:hash(bytes)===r.sha256,diagnosticSha256:hash(probe.bytes),comparisons:0,maxAbsoluteError:0,mismatches:[],cases:[],controls:[],fullEquivalence:false},get=(t,k)=>t['_root.'+k];
 function eq(a,b,name,key,tol=1e-8){const {error,passed}=compareFinite(a,b,tol,1e-10);rec.comparisons++;if(Number.isFinite(error))rec.maxAbsoluteError=Math.max(rec.maxAbsoluteError,error);if(!passed&&rec.mismatches.length<30)rec.mismatches.push({name,key,expected:a,observed:b,error:Number.isFinite(error)?error:'unreadable'});}
 function check(name,passed,details={}){rec.controls.push({name,...details,passed});}
 function compare(t,name){
  if(type==='harmonicwave2'){
   for(let i=0;i<200;i++){
    const x=(i<100?20:70)+2.5*i,y=60-waveValue(type,{},0,i)[0],next=60-(i<100?50*Math.sin(6.283*(i+1)/40):-50*Math.sin(6.283*(i+1)/30)),len=Math.hypot(2.5,next-y),angle=Math.atan2(y-next,-2.5)*180/3.1415926,rotation=((angle+180)%360+360)%360-180;
    for(const [key,value]of Object.entries({['dot'+i+'._x']:x,['dot'+i+'._y']:y,['line'+i+'._x']:x+1.25,['line'+i+'._y']:(y+next)/2,['line'+i+'._xscale']:len,['line'+i+'._rotation']:rotation}))eq(value,get(t,key),name,key,key.endsWith('scale')||key.endsWith('rotation')?1e-5:.050001);
   }rec.cases.push({name,points:200,segments:200});
  }else if(type==='phasorprin2Inv'){
   const time=get(t,'time'),wl=get(t,'wavelength'),x=get(t,'xSelected'),sign=get(t,'chk1.isChecked')?1:-1,p={wavelength:wl,sign};
   for(const q of qs)eq(waveValue(type,p,time/.05,q.x)[0],t[q.label],name,q.label);
   // Running runthis increments time AFTER drawing. Selection/slider changes draw at current time.
   if(name.includes('selection')||name.includes('wavelength')||name.includes('orientation')){
    const [y,re]=waveValue(type,p,time/.05,x);for(const [key,value]of Object.entries({'marker1._x':x+10,'marker1._y':110-y,'marker2._x':525,'marker2._y':110-y,'marker3._x':525+re,'marker3._y':110-y}))eq(value,get(t,key),name,key,.050001);
   }
   rec.cases.push({name,time,wavelength:wl,x,sign});
  }else if(type==='waveexpweb'){
   const stage=get(t,'stage'),time=get(t,'sec'),p={stage,wavelength:get(t,'waveLength'),frequency:get(t,'frequency'),amplitude:get(t,'amp')},i=Math.floor(get(t,'nLine')/2),x=i*get(t,'interval')/2,y=waveValue(type,p,time/.05,x)[0]*2,clip=stage===2?'ball':'ballRed';
   eq(get(t,'xs')+i*get(t,'interval')+(stage===3?y:0),get(t,clip+'._x'),name,'tracked particle x',.050001);eq(stage===2?get(t,'ys')-y:175,get(t,clip+'._y'),name,'tracked particle y',.050001);
   rec.cases.push({name,time,clock:get(t,'secClock'),parameters:p,trackedX:x});
  }else{
   const n=get(t,'time'),p={shape1:get(t,'waveIndex1'),shape2:get(t,'waveIndex2'),direction1:get(t,'direction1'),direction2:get(t,'direction2')};
   for(const q of qs)eq(q.fn==='getWaveFtn'?incidentShape(q.shape,q.sign,q.x):waveValue(type,p,n,q.x)[q.j-1],t[q.label],name,q.label);
   if(get(t,'isEach')){const v=waveValue(type,p,n,0);for(let j=1;j<=3;j++){eq(300,get(t,`marker${j}._x`),name,`marker${j} x`,.050001);eq(100-v[j-1],get(t,`marker${j}._y`),name,`marker${j} y`,.050001);}}
   rec.cases.push({name,time:n,parameters:p});
  }
 }
 await rt.load(r,probe.bytes);let t=await rt.sample();compare(t,'default');
 if(type==='phasorprin2Inv'){
  const clip='wavelengthSlider',c=s.controls.find(c=>c.key==='wavelength');
  // Drag to the lower stop, then use the authored right-arrow button for each exact integer.
  const x=get(t,clip+'._x'),y=get(t,clip+'._y'),scale=get(t,clip+'._xscale')/100,h=get(t,clip+'.height'),width=get(t,clip+'.width'),from=[x+(get(t,clip+'.box._x')+.85*h+1+(h-2)/2)*scale,y+get(t,clip+'.box._y')+h/2];
  t=await rt.pointer(from[0]-width*scale,from[1],'drag',from);
  for(let desired=c.min;desired<=c.max;desired+=c.step){if(desired>c.min)t=await rt.pointer(x+(width-.3*h)*scale,y+h/2);check('every integer wavelength',get(t,'wavelength')===desired,{desired,observed:get(t,'wavelength'),action:desired===c.min?'lower-stop drag':'right-arrow click'});compare(t,'wavelength '+desired);}
  const borderBefore=get(t,'xSelected');t=await rt.pointer(10,80);check('left hit-area boundary does not select zero',get(t,'xSelected')===borderBefore,{before:borderBefore,observed:get(t,'xSelected')});
  for(const x of [1,60,200,350,399,400]){t=await rt.pointer(x+10,80);check('original selection click',Math.abs(get(t,'xSelected')-x)<.051,{desired:x,observed:get(t,'xSelected')});compare(t,'selection '+x);}
  const chk=swf.instances.find(i=>i.path==='_root.chk1'),start=swf.instances.find(i=>i.path==='_root.startBtn');
  for(let j=0;j<2;j++){const before=get(t,'chk1.isChecked');t=await rt.pointer(chk.x+8,chk.y+8);check('orientation toggles',get(t,'chk1.isChecked')!==before);compare(t,'orientation '+j);}
  const before=get(t,'time');t=await rt.pointer(start.x+10,start.y+10);await rt.page.waitForTimeout(600);t=await rt.sample();check('play advances',get(t,'time')>before);for(let j=0;j<10;j++){compare(t,'natural '+j);t=await rt.sample();}t=await rt.pointer(start.x+10,start.y+10);const stopped=get(t,'time');await rt.page.waitForTimeout(300);t=await rt.sample();check('pause freezes',get(t,'time')===stopped);
 }else if(type==='waveexpweb'){
  const btn=name=>{const b=swf.instances.find(i=>i.path==='_root.'+name);if(!b)throw Error('Missing original '+name);return [b.x+10,b.y+(name==='resetTBtn'?3:10)];};
  for(let mode=2;mode<=3;mode++){
   check('stage '+mode,get(t,'stage')===mode);
   for(let j=0;j<6;j++){t=await rt.pointer(...btn('regenTBtn'));compare(t,'stage '+mode+' regeneration '+j);check('random settings in original bounds',get(t,'waveLength')>=100&&get(t,'waveLength')<=300&&get(t,'frequency')>=.4&&get(t,'frequency')<=.6&&get(t,'amp')>=(mode===2?35:15)&&get(t,'amp')<=(mode===2?75:25));}
   t=await rt.pointer(...btn('startTBtn'));const before=get(t,'sec');await rt.page.waitForTimeout(250);t=await rt.sample();check('stage '+mode+' play advances',get(t,'sec')>before);
   const phases=new Set();await rt.page.evaluate(()=>window.traces=[]);const deadline=Date.now()+12000;
   while(phases.size<50&&Date.now()<deadline){await rt.page.waitForTimeout(250);for(const raw of await rt.page.evaluate(()=>{const a=window.traces;window.traces=[];return a;})){const v=parseTrace(raw);if(v&&!phases.has(get(v,'sec'))){compare(v,'stage '+mode+' natural');phases.add(get(v,'sec'));}}}check('stage '+mode+' 50 natural phases',phases.size>=50,{count:phases.size});
   t=await rt.pointer(...btn('startTBtn'));const stopped=get(t,'sec');await rt.page.waitForTimeout(300);t=await rt.sample();check('stage '+mode+' pause',get(t,'sec')===stopped);compare(t,'stage '+mode+' paused');
   t=await rt.pointer(...btn('resetTBtn'));check('clock reset preserves physical phase',get(t,'sec')===stopped&&get(t,'secClock')===0,{phase:get(t,'sec'),clock:get(t,'secClock')});compare(t,'stage '+mode+' clock reset');
   t=await rt.pointer(...btn('nextTBtn'));check('next switches stage and stops playback',get(t,'stage')===(mode===2?3:2)&&get(t,'startTBtn.isON')===false);compare(t,'next stage');
  }
 }else if(type==='super1'){
  const button=id=>{const b=swf.instances.find(i=>i.button&&i.character===id);if(!b)throw Error('Missing original button '+id);return [b.x,b.y];};
  t=await rt.pointer(...button(7));check('individual waves toggled on',get(t,'isEach')===true);compare(t,'components on');
  t=await rt.pointer(...button(3));check('fast toggled on',get(t,'isFast')===true);t=await rt.pointer(...button(30));check('play toggled on',get(t,'isRunning')===true);
  const phases=new Set();await rt.page.evaluate(()=>window.traces=[]);const deadline=Date.now()+20000;
  while(phases.size<40&&Date.now()<deadline){await rt.page.waitForTimeout(250);for(const raw of await rt.page.evaluate(()=>{const a=window.traces;window.traces=[];return a;})){const v=parseTrace(raw);if(v&&get(v,'isRunning')===true&&!phases.has(get(v,'time'))){compare(v,'natural '+get(v,'time'));phases.add(get(v,'time'));}}}check('40 distinct natural fast phases',phases.size>=40,{phases:[...phases]});
  t=await rt.pointer(...button(30));const stopped=get(t,'time');await rt.page.waitForTimeout(300);t=await rt.sample();check('pause freezes',get(t,'isRunning')===false&&get(t,'time')===stopped);compare(t,'paused');t=await rt.pointer(...button(3));check('slow toggled on',get(t,'isFast')===false);t=await rt.pointer(...button(30));const before=get(t,'time');await rt.page.waitForTimeout(300);t=await rt.sample();check('slow advances fractional phase',get(t,'time')>before&&Number.isInteger(get(t,'time')*4));compare(t,'slow');
 }
 rec.passed=rec.sha256Verified&&!rec.mismatches.length&&rec.controls.every(c=>c.passed);
 rec.scope=type==='harmonicwave2'?'All 200 original dots and 200 line midpoints, lengths and rotations read from actual Ruffle clips; original twip quantization allowed. Original has no controls. Unrounded geometry uses original constants, while SVG projection is a new design.':type==='phasorprin2Inv'?'All 126 integer wavelengths set by a lower-stop drag and 125 actual increment-arrow clicks; 101 original function values at each setting; actual selection clicks, orientation, play and pause. The original left hit-area boundary excludes x=0; HTML allows zero as an added endpoint. Displayed markers checked after paused selection/slider/orientation redraw. Original runthis draws then increments time; running function queries use current time, not a claim of exact last-drawn frame equivalence.':type==='waveexpweb'?'Both original stages, six random regenerations each, tracked particle coordinates during at least 50 naturally advancing phases per stage, real play/pause/next and independent clock reset. The clock-reset button is partially below the original stage; its visible top strip is clicked without moving the button. All random seeds, full drawn line segments, wall-clock explanation and every randomized parameter combination remain outside scope.': 'Every original pure-function branch/sign combination at 81 x positions including support boundaries, plus both original incident functions at all 121 drawn x positions during at least 40 natural fast phases and actual component/fast/slow/play/pause controls. Function queries may update original temporary amp/tempValue variables; no inputs or random seeds forced. All initial random branch-pair combinations, every slow phase, reset wrap and drawing pixels remain outside scope.';
 results.push(rec);console.log(type,rec.comparisons,rec.passed,JSON.stringify(rec.mismatches.slice(0,3)),JSON.stringify(rec.controls.filter(c=>!c.passed)));fs.writeFileSync(new URL('docs/expansion-wave-runtime-report.json',root),JSON.stringify({date:new Date().toISOString(),nativeModelHashes,method:'Actual Ruffle clip positions, function queries, natural motion and real pointer controls versus independent HTML wave models. Original bytes unchanged; diagnostic copies private.',files:results.length,comparisons:results.reduce((n,r)=>n+r.comparisons,0),fullEquivalence:false,results},null,2)+'\n');
}}finally{await rt.browser.close();}if(results.length!==types.length||results.some(r=>!r.passed))process.exitCode=1;
