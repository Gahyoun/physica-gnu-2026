// Observe original clip-local phases; these movies have no original sliders.
import fs from 'node:fs';import crypto from 'node:crypto';
import {expansionSpecs,polarization} from '../assets/expansion-physics.mjs';
import {instrumentObserver} from './swf-runtime-probe.mjs';import {runtimeSession} from './runtime-session.mjs';
const root=new URL('../',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('src/flash-manifest.json',root))),hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const nativeModelHashes=Object.fromEntries(['assets/expansion-physics.mjs','assets/expansion-specs.mjs'].map(f=>[f,hash(fs.readFileSync(new URL(f,root)))]));
const selected=Object.entries(expansionSpecs).filter(([,s])=>['xpol','ypol','rightcircular','leftcircular'].includes(s.type)),rt=await runtimeSession(),results=[];
try{for(const [kind,s]of selected){
 const r=manifest.files.find(r=>r.id===s.id),bytes=fs.readFileSync(new URL(r.file,root)),paths=Array.from({length:50},(_,i)=>'_root.instance'+(i+1));
 const probe=instrumentObserver(bytes,paths.flatMap(p=>['time','_x','_y'].map(k=>p+'.'+k))),rec={id:r.id,kind,type:s.type,sha256:r.sha256,sha256Verified:hash(bytes)===r.sha256,diagnosticSha256:hash(probe.bytes),comparisons:0,maxAbsoluteError:0,mismatches:[],cases:[],controls:[],fullEquivalence:false};
 await rt.load(r,probe.bytes);let t=await rt.sample();
 const actors=paths.filter(p=>Number.isFinite(t[p+'.time']));if(actors.length!==2)throw Error('Expected two original unnamed field markers, found '+actors.length);
 rec.markerPaths=actors;
 const eq=(a,b,info)=>{const error=Number.isFinite(a)&&Number.isFinite(b)?Math.abs(a-b):Infinity;rec.comparisons++;if(Number.isFinite(error))rec.maxAbsoluteError=Math.max(rec.maxAbsoluteError,error);if((!Number.isFinite(error)||error>.050001)&&rec.mismatches.length<30)rec.mismatches.push({...info,expected:a,observed:b,error:Number.isFinite(error)?error:'unreadable'});};
 const compare=(t,name)=>{
  const phases=actors.map(p=>t[p+'.time']);if(!phases.every(Number.isFinite))throw Error('Unreadable local marker time');
  rec.cases.push({name,times:phases,positions:actors.map(p=>[t[p+'._x'],t[p+'._y']])});
  const a=polarization(s.type,{},phases[0]),b=polarization(s.type,{},phases[1]);
  if(s.type==='xpol'){eq(140-a.E[1],t[actors[0]+'._y'],{name,path:actors[0],axis:'y'});eq(140+b.B[0],t[actors[1]+'._x'],{name,path:actors[1],axis:'x'});}
  else if(s.type==='ypol'){eq(140-a.B[1],t[actors[0]+'._y'],{name,path:actors[0],axis:'y'});eq(140+b.E[0],t[actors[1]+'._x'],{name,path:actors[1],axis:'x'});}
  else{eq(140+a.E[0],t[actors[0]+'._x'],{name,path:actors[0],axis:'x'});eq(140-a.E[1],t[actors[0]+'._y'],{name,path:actors[0],axis:'y'});eq(140+b.B[0],t[actors[1]+'._x'],{name,path:actors[1],axis:'x'});eq(140-b.B[1],t[actors[1]+'._y'],{name,path:actors[1],axis:'y'});}
 };
 compare(t,'initial');const first=actors.map(p=>t[p+'.time']);for(let i=0;i<24;i++){t=await rt.sample();compare(t,'natural frame '+i);}
 const last=actors.map(p=>t[p+'.time']);rec.controls.push({name:'natural local phases advance',before:first,observed:last,passed:last.every((n,i)=>n>first[i])});
 rec.passed=rec.sha256Verified&&rec.comparisons>0&&!rec.mismatches.length&&rec.controls.every(c=>c.passed);
 rec.scope='Read-only Ruffle coordinates of both original markers at 25 recorded clip-local phases; moving axes for linear polarization and both axes for circular polarization. Original anonymous runtime paths retained. Coordinate tolerance is one 0.05 px twip. Constant placement axes, source arrow artwork/rotations and the time > 500 wraparound are outside scope. These originals have no input sliders or playback buttons; modern playback controls are remaster additions.';
 results.push(rec);console.log(s.type,rec.comparisons,rec.passed,JSON.stringify(rec.mismatches.slice(0,2)));
 fs.writeFileSync(new URL('docs/polarization-marker-runtime-report.json',root),JSON.stringify({date:new Date().toISOString(),nativeModelHashes,method:'Actual original marker coordinates and independent clip-local time in Ruffle versus independent HTML linear/circular polarization equations',files:results.length,comparisons:results.reduce((n,r)=>n+r.comparisons,0),fullEquivalence:false,results},null,2)+'\n');
 }}finally{await rt.browser.close();}
if(results.length!==selected.length||results.some(r=>!r.passed))process.exitCode=1;
