import {compareFinite} from './runtime-comparison.mjs';
import fs from 'node:fs';import crypto from 'node:crypto';
import {opticsSpecs,wavePhasor,fresnel,fresnelPhase,slitPhasor,slitPath} from '../assets/native-optics.mjs';
import {inspectSWF,instrumentObserver} from './swf-runtime-probe.mjs';
import {runtimeSession} from './runtime-session.mjs';
const root=new URL('../',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('src/flash-manifest.json',root)));
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const nativeModelHashes=Object.fromEntries(['assets/native-optics.mjs','assets/optics-specs.mjs'].map(f=>[f,hash(fs.readFileSync(new URL(f,root)))]));
const runtime=await runtimeSession(),results=[];
try{for(const [kind,s]of Object.entries(opticsSpecs)){
 const r=manifest.files.find(r=>r.id===s.id),bytes=fs.readFileSync(new URL(r.file,root)),swf=inspectSWF(bytes),wave=s.type.startsWith('wave-'),ref=s.type.startsWith('fresnel');
 const scalar=['time','wavelength','xSelected','xSelected1','xSelected2','startBtn.isON','n','angleSelected','angSlider.level','wlSlider.level','dSlider.level','xe','ye','xstart','ystart','resultLen','op','pa','br','showT','showR'];
 const sliderNames=wave?['wavelengthSlider']:ref?['nSlider']:s.type==='slit-phasor'?['angSlider']:['angSlider','wlSlider','dSlider'];
 const sliderProps=['_x','_y','_xscale','level','value','box._x','box._y','slider._x','slider._y','width','height','limitLower','limitUpper'];
 const qs=[];
 if(wave)for(let i=0;i<=10;i++)for(const fn of ['waveFtn','phaseFactor'])qs.push({label:fn+i,fn,args:[i*40,'_root.time'],x:i*40});
 if(ref)for(let i=0;i<=10;i++)for(const fn of s.type==='fresnel'?['myFunction1','myFunction2','myFunction3','myFunction4']:['myFunction1','myFunction2','myFunctionD'])qs.push({label:fn+i,fn,args:[i*9],x:i*9});
 const probe=instrumentObserver(bytes,[...scalar.map(k=>'_root.'+k),...sliderNames.flatMap(k=>sliderProps.map(p=>'_root.'+k+'.'+p)),...qs]);
 const record={id:r.id,kind,type:s.type,sha256:r.sha256,sha256Verified:hash(bytes)===r.sha256,diagnosticSha256:hash(probe.bytes),comparisons:0,maxAbsoluteError:0,mismatches:[],cases:[],controls:[],fullEquivalence:false};
 await runtime.load(r,probe.bytes);const get=(t,k)=>t['_root.'+k];
 function eq(a,b,name,key,tolerance=2e-8){
  const {error,passed}=compareFinite(a,b,0,tolerance);
  record.comparisons++;if(Number.isFinite(error))record.maxAbsoluteError=Math.max(record.maxAbsoluteError,error);
  if(!passed&&record.mismatches.length<30)record.mismatches.push({name,key,expected:a,observed:b,error:Number.isFinite(error)?error:'unreadable'});
 }
 function compare(t,name){
  const p={wavelength:get(t,'wavelength'),n:get(t,'n'),phase:get(t,'angSlider.level'),angle:get(t,'angSlider.level'),distance:get(t,'dSlider.level')};
  if(s.type==='slit-path')p.wavelength=get(t,'wlSlider.level');
  record.cases.push({name,parameters:p,time:wave?get(t,'time'):undefined});
  if(wave)for(const q of qs){const v=wavePhasor(s.type,p,q.x,get(t,'time'));eq(q.fn==='waveFtn'?v.im:v.phase,t[q.label],name,q.label);}
  else if(ref)for(const q of qs){const v=s.type==='fresnel'?fresnel(p.n,q.x):fresnelPhase(p.n,q.x),key={myFunction1:s.type==='fresnel'?'rs':'s',myFunction2:s.type==='fresnel'?'rp':'p',myFunction3:'ts',myFunction4:'tp',myFunctionD:'difference'}[q.fn];eq(v[key],t[q.label],name,q.label);}
  else if(s.type==='slit-phasor'){
   const v=slitPhasor(p.phase);eq(v.re,get(t,'xe')-get(t,'xstart'),name,'phasor real');eq(v.im,get(t,'ystart')-get(t,'ye'),name,'phasor imaginary');eq(Math.floor(.5+v.intensity*10)/10,Number(get(t,'resultLen')),name,'rounded intensity');
  }else{
   const v=slitPath(p);eq(v.path,get(t,'op'),name,'path');eq(v.phase,get(t,'pa'),name,'phase');eq(Math.trunc(.5+v.intensity),parseFloat(get(t,'br')),name,'rounded intensity');
  }
 }
 let t=await runtime.sample();compare(t,'default');
 for(const clip of sliderNames){
  const spec=s.controls.find(c=>c.key===(clip==='wavelengthSlider'||clip==='wlSlider'?'wavelength':clip==='nSlider'?'n':clip==='dSlider'?'distance':s.type==='slit-phasor'?'phase':'angle'));
  for(const fraction of [0,.25,.5,.75,1]){
   const x=get(t,clip+'._x'),y=get(t,clip+'._y'),scale=get(t,clip+'._xscale')/100;
   let from,target,expected=spec.min+(spec.max-spec.min)*fraction;
   if(wave){
    const h=get(t,clip+'.height'),width=get(t,clip+'.width'),offset=.85*h+1+(h-2)/2;
    from=[x+(get(t,clip+'.box._x')+offset)*scale,y+get(t,clip+'.box._y')+h/2];
    const delta=(expected-get(t,clip+'.value'))/(spec.max-spec.min)*(width-2.7*h);
    target=[from[0]+delta*scale,from[1]];
   }else{
    from=[x+get(t,clip+'.slider._x')*scale,y+get(t,clip+'.slider._y')];
    const track=swf.instances.find(i=>i.path==='_root.'+clip+'.track'),length=2*track.localX;
    target=[x+((fraction===0?-10:fraction===1?length+10:length*fraction))*scale,from[1]];
   }
   t=await runtime.pointer(...target,'drag',from);
   const observed=get(t,clip+(wave?'.value':'.level'));
   const passed=Number.isFinite(observed)&&Math.abs(observed-expected)<=spec.step/2+.000001;
   record.controls.push({clip,fraction,target:expected,observed,tolerance:spec.step/2,passed});compare(t,clip+' fraction '+fraction);
  }
 }
 if(wave){
  for(const x of [60,200,350]){t=await runtime.pointer(x+10,80);compare(t,'wave selection '+x);const positions=s.type==='wave-sum'?[get(t,'xSelected1'),get(t,'xSelected2')]:[get(t,'xSelected')];record.controls.push({name:'wave selection',target:x,observed:positions,passed:positions.some(v=>Math.abs(v-x)<.051)});}
  const start=swf.instances.find(i=>i.path==='_root.startBtn');
  const before=get(t,'time');t=await runtime.pointer(start.x,start.y);
  await runtime.page.waitForTimeout(800);t=await runtime.sample();
  record.controls.push({name:'start advances phase',before,observed:get(t,'time'),passed:get(t,'time')>before});
  for(let i=0;i<8;i++){t=await runtime.sample();compare(t,'running phase '+i);}
  t=await runtime.pointer(start.x,start.y);const stopped=get(t,'time');await runtime.page.waitForTimeout(300);t=await runtime.sample();record.controls.push({name:'pause stops phase',before:stopped,observed:get(t,'time'),passed:get(t,'time')===stopped});compare(t,'paused phase');
 }else if(ref){
  for(const angle of [0,30,60,90]){t=await runtime.pointer(30+300*angle/90,100);record.controls.push({name:'incident angle click',target:angle,observed:get(t,'angleSelected'),passed:Math.abs(get(t,'angleSelected')-angle)<.02});compare(t,'angle '+angle);}
  for(const name of s.type==='fresnel'?['showTCheck','showRCheck']:['showTCheck']){
   const button=swf.instances.find(i=>i.button&&i.parentPath==='_root.'+name),key=name==='showRCheck'?'showR':'showT',before=get(t,key);
   t=await runtime.pointer(button.x,button.y);record.controls.push({name:key+' toggle',before,observed:get(t,key),passed:get(t,key)!==before});compare(t,key+' on');
  }
 }
 record.passed=record.sha256Verified&&record.comparisons>0&&!record.mismatches.length&&record.controls.every(c=>c.passed);
 record.scope='Actual Ruffle numerical queries at 11 axis positions/components, or read-only slit path/phasor endpoints and original rounded intensity, at defaults and five actual pointer settings per slider. Wave selection, start/pause and Fresnel angle/toggles checked where present. Query calls may update original temporary variables. Full displayed curve pixels, every combination and long-time wraparound are outside scope.';
 results.push(record);console.log(s.type,record.comparisons,record.passed,JSON.stringify(record.mismatches.slice(0,2)),JSON.stringify(record.controls.filter(c=>!c.passed)));
 fs.writeFileSync(new URL('docs/optics-runtime-report.json',root),JSON.stringify({date:new Date().toISOString(),nativeModelHashes,method:'Actual original AVM1 function queries or read-only telemetry in Ruffle, with pointer control changes; independent HTML optics equations. No extracted scripts or diagnostic SWFs distributed.',files:results.length,comparisons:results.reduce((n,r)=>n+r.comparisons,0),fullEquivalence:false,results},null,2)+'\n');
 }}finally{await runtime.browser.close();}
if(results.length!==Object.keys(opticsSpecs).length||results.some(r=>!r.passed))process.exitCode=1;
