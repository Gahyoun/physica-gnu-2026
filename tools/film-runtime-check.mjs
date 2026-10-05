import fs from 'node:fs';import crypto from 'node:crypto';
import {expansionSpecs,filmValue} from '../assets/expansion-physics.mjs';
import {instrumentObserver} from './swf-runtime-probe.mjs';import {runtimeSession} from './runtime-session.mjs';
const root=new URL('../',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('src/flash-manifest.json',root))),hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const nativeModelHashes=Object.fromEntries(['assets/expansion-physics.mjs','assets/expansion-specs.mjs'].map(f=>[f,hash(fs.readFileSync(new URL(f,root)))]));
const selected=Object.entries(expansionSpecs).filter(([,s])=>s.group==='film'),rt=await runtimeSession(),results=[];
const clipFor=key=>({thickness:'thicknessSlider',n:'nSlider',thickness1:'thicknessSlider1',thickness2:'thicknessSlider2',n1:'nSlider1',n2:'nSlider2',n3:'nSlider3',central:'centralWavelengthSlider',layers:'layerNumberSlider'})[key];
try{for(const [kind,s]of selected){
 const r=manifest.files.find(r=>r.id===s.id),bytes=fs.readFileSync(new URL(r.file,root)),controls=s.controls.filter(c=>c.key!=='probe'),ps=controls.map(c=>[c.key,clipFor(c.key)]),range=s.controls.find(c=>c.key==='probe');
 const qs=Array.from({length:21},(_,i)=>({label:'w'+i,fn:'myFunction',args:[range.min+(range.max-range.min)*i/20],wavelength:range.min+(range.max-range.min)*i/20}));
 const query=['GrX','GrY','GrWidth','GrHeight','xs','xe','betaStr','valStr','nH','nL',...ps.flatMap(([,clip])=>['value','_x','_y','_xscale','box._x','box._y','width','height','radix','limitLower','limitUpper'].map(k=>clip+'.'+k))].map(k=>'_root.'+k);
 const probe=instrumentObserver(bytes,[...query,...qs]),rec={id:r.id,kind,type:s.type,sha256:r.sha256,sha256Verified:hash(bytes)===r.sha256,diagnosticSha256:hash(probe.bytes),comparisons:0,maxAbsoluteError:0,mismatches:[],cases:[],controls:[],fullEquivalence:false};
 await rt.load(r,probe.bytes);const get=(t,k)=>t['_root.'+k];
 function eq(a,b,name,key,tol=2e-8){const error=Number.isFinite(a)&&Number.isFinite(b)?Math.abs(a-b):Infinity;rec.comparisons++;if(Number.isFinite(error))rec.maxAbsoluteError=Math.max(rec.maxAbsoluteError,error);if((!Number.isFinite(error)||error>tol*Math.max(1,Math.abs(a),Math.abs(b)))&&rec.mismatches.length<30)rec.mismatches.push({name,key,expected:a,observed:b,error:Number.isFinite(error)?error:'unreadable'});}
 const params=t=>Object.fromEntries(ps.map(([key,clip])=>[key,get(t,clip+'.value')]));
 function compare(t,name){const p=params(t);rec.cases.push({name,parameters:p});for(const q of qs)eq(filmValue(s.type,p,q.wavelength).value,t[q.label],name,q.label);}
 let t=await rt.sample();compare(t,'default');
 for(const c of controls){const clip=clipFor(c.key);
  const limits=[get(t,clip+'.limitLower'),get(t,clip+'.limitUpper')];
  rec.controls.push({name:'slider limits',key:c.key,expected:[c.min,c.max],observed:limits,passed:limits[0]===c.min&&limits[1]===c.max});
  for(const fraction of [0,.25,.5,.75,1]){
   const x=get(t,clip+'._x'),y=get(t,clip+'._y'),scale=get(t,clip+'._xscale')/100,h=get(t,clip+'.height'),width=get(t,clip+'.width'),radix=get(t,clip+'.radix');
   const expected=c.min+Math.round((c.max-c.min)*fraction/radix)*radix,offset=.85*h+1+(h-2)/2;
   const from=[x+(get(t,clip+'.box._x')+offset)*scale,y+get(t,clip+'.box._y')+h/2],delta=(expected-get(t,clip+'.value'))/(c.max-c.min)*(width-2.7*h);
   t=await rt.pointer(from[0]+delta*scale,from[1],'drag',from);
   const dragObserved=get(t,clip+'.value'),fineAdjustments=[];compare(t,clip+' drag '+fraction);
   // Fine decimal settings can fall between physical screen pixels. Use the
   // original +/- triangle buttons, keeping the raw drag outcome in evidence.
   for(let i=0;i<12&&Number.isFinite(get(t,clip+'.value'))&&Math.abs(get(t,clip+'.value')-expected)>radix/2;i++){
    const before=get(t,clip+'.value'),right=before<expected;
    t=await rt.pointer(x+(right?width-.85*h/2:.85*h/2)*scale,y+h/2);
    fineAdjustments.push({direction:right?'increment':'decrement',before,observed:get(t,clip+'.value')});
    compare(t,clip+' fine '+fraction+' '+i);
   }
   const observed=get(t,clip+'.value');rec.controls.push({name:'slider change',key:c.key,fraction,expected,dragObserved,fineAdjustments,observed,passed:Number.isFinite(observed)&&Math.abs(observed-expected)<1e-7});
  }
 }
 // Exact border clicks lie on the original button hit-area boundary.
 // Use one nm inside each border, and disclose this finite selection scope.
 for(const wavelength of [range.min+1,(range.min+range.max)/2,range.max-1]){
  const x=get(t,'GrX')+get(t,'GrWidth')*(wavelength-get(t,'xs'))/(get(t,'xe')-get(t,'xs')),y=get(t,'GrY')+get(t,'GrHeight')/2;
  t=await rt.pointer(x,y);const number=v=>typeof v==='string'?Number(v.match(/[-+]?\d*\.?\d+(?:e[-+]?\d+)?/i)?.[0]):NaN,beta=number(get(t,'betaStr')),value=number(get(t,'valStr'));
  rec.controls.push({name:'graph wavelength selection',expected:wavelength,observed:beta,passed:Number.isFinite(beta)&&Math.abs(beta-wavelength)<=.15});
  eq(Math.round(filmValue(s.type,params(t),beta).value*10000)/10000,value,'selected wavelength '+wavelength,'rounded original readout',1e-7);compare(t,'selected wavelength '+wavelength);
 }
 rec.passed=rec.sha256Verified&&rec.comparisons>0&&!rec.mismatches.length&&rec.controls.every(c=>c.passed);
 rec.scope='21 wavelength queries in actual Ruffle at default and five actual settings per original class-based slider, with original limits checked. Raw drags retained; original +/- triangle clicks reach fine settings between screen pixels. Three original graph clicks (one nm inside each border and midpoint) compare wavelength and four-decimal reflectance/transmittance readout. Query calls may update temporary original matrix variables. Exact border hit tests, all combinations, full curve pixels, copied clipboard data and source color swatches are outside scope. These class-based components are separate from the earlier 125 AS2 candidates.';
 results.push(rec);console.log(s.type,rec.comparisons,rec.passed,JSON.stringify(rec.mismatches.slice(0,2)),JSON.stringify(rec.controls.filter(c=>!c.passed)));
 fs.writeFileSync(new URL('docs/film-runtime-report.json',root),JSON.stringify({date:new Date().toISOString(),nativeModelHashes,method:'Actual Ruffle AVM1 film function queries at live original pointer settings versus independent complex characteristic-matrix HTML equations',files:results.length,comparisons:results.reduce((n,r)=>n+r.comparisons,0),fullEquivalence:false,results},null,2)+'\n');
 }}finally{await rt.browser.close();}
if(results.length!==selected.length||results.some(r=>!r.passed))process.exitCode=1;
