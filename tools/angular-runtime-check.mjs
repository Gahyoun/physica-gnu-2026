import fs from 'node:fs';import crypto from 'node:crypto';
import {expansionSpecs,angularState} from '../assets/expansion-physics.mjs';
import {instrumentObserver,parseTrace} from './swf-runtime-probe.mjs';import {runtimeSession} from './runtime-session.mjs';import {compareFinite} from './runtime-comparison.mjs';
const root=new URL('../',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('src/flash-manifest.json',root))),hash=b=>crypto.createHash('sha256').update(b).digest('hex'),rt=await runtimeSession(),results=[];
const nativeModelHashes=Object.fromEntries(['assets/expansion-physics.mjs','assets/expansion-specs.mjs'].map(f=>[f,hash(fs.readFileSync(new URL(f,root)))]));
try{for(const [kind,s]of Object.entries(expansionSpecs).filter(([,s])=>s.group==='angular')){
 const r=manifest.files.find(r=>r.id===s.id),bytes=fs.readFileSync(new URL(r.file,root)),balls=s.type==='angularenergy'?['ball1Tag','ball2Tag']:['ballTag'],velocities=s.type==='angularenergy'?['velocity1Tag','velocity2Tag']:['velocityTag'],tags=[...balls,...velocities];
 const discovery=instrumentObserver(bytes,tags.map(k=>'_root.'+k));await rt.load(r,discovery.bytes);let t=await rt.sample();
 const paths=Object.fromEntries(tags.map(k=>[k,t['_root.'+k]]));for(const p of Object.values(paths))if(!/^(point|arrow)_\d+$/.test(p))throw Error('Unreadable original semantic clip name: '+p);
 const query=['time','isPressed','TransformMatrix',...tags].map(k=>'_root.'+k).concat(balls.map(k=>'_root.'+paths[k]+'.point'),velocities.map(k=>'_root.'+paths[k]+'.pointarray'));
 const probe=instrumentObserver(bytes,query),rec={id:r.id,kind,type:s.type,sha256:r.sha256,sha256Verified:hash(bytes)===r.sha256,diagnosticSha256:hash(probe.bytes),tagDiscoveryDiagnosticSha256:hash(discovery.bytes),paths,comparisons:0,maxAbsoluteError:0,mismatches:[],cases:[],controls:[],fullEquivalence:false};
 await rt.load(r,probe.bytes);const get=(t,k)=>t['_root.'+k],array=(t,k)=>typeof get(t,k)==='string'?get(t,k).split(',').map(Number):[];
 const eq=(a,b,info)=>{const {error,passed}=compareFinite(a,b,0,2e-9);rec.comparisons++;if(Number.isFinite(error))rec.maxAbsoluteError=Math.max(rec.maxAbsoluteError,error);if(!passed&&rec.mismatches.length<30)rec.mismatches.push({...info,expected:a,observed:b,error:Number.isFinite(error)?error:'unreadable'});};
 const compare=(t,name)=>{
  const n=get(t,'time');if(!Number.isInteger(n)||n<0)throw Error('Unreadable original angular time');const v=angularState(s.type,n);rec.cases.push({name,time:n,phase:n%72});
  for(let i=0;i<balls.length;i++){
   if(get(t,balls[i])!==paths[balls[i]]||get(t,velocities[i])!==paths[velocities[i]])throw Error('Original clip binding changed');
   const p=array(t,paths[balls[i]]+'.point'),a=array(t,paths[velocities[i]]+'.pointarray');eq(3,p.length,{name,key:'position count',actor:i});eq(6,a.length,{name,key:'velocity endpoint count',actor:i});
   for(let j=0;j<3;j++){eq(v.positions[i][j],p[j],{name,key:'position '+j,actor:i});eq(v.positions[i][j],a[j],{name,key:'velocity origin '+j,actor:i});eq(v.positions[i][j]+v.velocities[i][j],a[j+3],{name,key:'velocity endpoint '+j,actor:i});}
  }
 };
 t=await rt.sample();compare(t,'default');const phases=new Set();
 // Drain telemetry regularly: the runtime keeps only 100 trace records.
 const deadline=Date.now()+40000;await rt.page.evaluate(()=>window.traces=[]);
 while(phases.size<72&&Date.now()<deadline){await rt.page.waitForTimeout(600);const traces=await rt.page.evaluate(()=>{const a=window.traces.slice();window.traces=[];return a;});for(const raw of traces){const state=parseTrace(raw);if(!state)continue;const n=get(state,'time');if(!Number.isInteger(n)||n<0)throw Error('Unreadable naturally played phase');const phase=n%72;if(!phases.has(phase)){compare(state,'natural phase '+phase);phases.add(phase);}}}
 rec.naturalPhases=[...phases].sort((a,b)=>a-b);rec.controls.push({name:'full natural orbital phase cycle',passed:phases.size===72});
 for(const [name,dx,dy]of [['right',45,0],['up',0,-35],['diagonal',-35,25]]){
  const box=await rt.page.locator('#runtime-host').boundingBox(),before=array(t,'TransformMatrix');await rt.page.mouse.move(box.x+r.width/2,box.y+r.height/2);await rt.page.mouse.down();await rt.page.mouse.move(box.x+r.width/2+dx,box.y+r.height/2+dy,{steps:8});await rt.page.waitForTimeout(350);t=await rt.sample();compare(t,name+' held');const held=get(t,'isPressed');await rt.page.mouse.up();t=await rt.sample();compare(t,name+' released');const after=array(t,'TransformMatrix'),changed=after.length===9&&before.length===9&&after.some((v,i)=>Math.abs(v-before[i])>1e-8);
  rec.controls.push({name,heldPressed:held,releasedPressed:get(t,'isPressed'),cameraChanged:changed,passed:held===true&&get(t,'isPressed')===false&&changed});
 }
 rec.passed=rec.sha256Verified&&rec.comparisons>0&&!rec.mismatches.length&&rec.controls.every(c=>c.passed);
 rec.scope='Read-only actual Ruffle clip-binding discovery followed by point and velocity-arrow endpoints at all 72 naturally played orbital phases and three real press-drag camera settings. Energy model phase repeats within its longer 720-step root loop; the complete 720-step timeline is outside scope. Arrow artwork, fixed angular-momentum/magnetic-moment symbols, projected pixels, wall-clock rate and all camera paths are outside scope. HTML graphs and playback buttons are remaster additions.';
 results.push(rec);console.log(s.type,rec.comparisons,rec.passed,JSON.stringify(rec.mismatches.slice(0,2)),JSON.stringify(rec.controls.filter(c=>!c.passed)));
 fs.writeFileSync(new URL('docs/angular-runtime-report.json',root),JSON.stringify({date:new Date().toISOString(),nativeModelHashes,method:'Original naturally played semantic position and velocity-vector arrays versus independent HTML orbit equations',files:results.length,comparisons:results.reduce((n,r)=>n+r.comparisons,0),fullEquivalence:false,results},null,2)+'\n');
}}finally{await rt.browser.close();}
if(results.length!==3||results.some(r=>!r.passed))process.exitCode=1;
