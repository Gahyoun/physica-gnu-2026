// Original geometry arrays and projected atom centres, read without calling source functions.
import fs from 'node:fs';import crypto from 'node:crypto';
import {expansionSpecs,structureData,structureFaces} from '../assets/expansion-physics.mjs';
import {matrixVector} from '../assets/native-refraction.mjs';
import {instrumentObserver} from './swf-runtime-probe.mjs';import {runtimeSession} from './runtime-session.mjs';
import {parseTrace} from './swf-runtime-probe.mjs';
import {compareFinite} from './runtime-comparison.mjs';
const root=new URL('../',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('src/flash-manifest.json',root))),hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const nativeModelHashes=Object.fromEntries(['assets/expansion-physics.mjs','assets/expansion-specs.mjs','assets/native-refraction.mjs'].map(f=>[f,hash(fs.readFileSync(new URL(f,root)))]));
const selected=Object.entries(expansionSpecs).filter(([,s])=>s.group==='structure'&&(!process.env.PHYSICA_ONLY||process.env.PHYSICA_ONLY.split(',').includes(s.type))),rt=await runtimeSession(),results=[];
const reportPath=process.env.PHYSICA_RUNTIME_REPORT?new URL('file://'+process.env.PHYSICA_RUNTIME_REPORT):new URL('docs/structure-runtime-report.json',root);
function structureClips(d){
 let line=0,arrow=0;return [...d.nodes.map((p,i)=>({clip:'point_'+i,field:'point',coordinates:p.p,size:p.size})),...d.lines.flatMap(q=>q.type==='arrow'?[{clip:'arrow_'+arrow++,field:'pointarray',coordinates:q.pts.flat()}]:q.pts.slice(1).map((p,i)=>({clip:'line_'+line++,field:'pointarray',coordinates:[q.pts[i],p].flat()}))),...d.faces.map((p,i)=>({clip:'surface_'+i,field:'pointarray',coordinates:p.flat()}))];
}
try{for(const [kind,s]of selected){
 const d=structureData[s.type],clips=structureClips(d),r=manifest.files.find(r=>r.id===s.id),bytes=fs.readFileSync(new URL(r.file,root));
 const query=['TransformMatrix','points','lines','arrows','surfaces','moviewidth','movieheight','f','isPressed','isAnimation','time'].map(k=>'_root.'+k);
 for(const q of clips){query.push('_root.'+q.clip+'.'+q.field);if(q.size!==undefined)for(const k of ['refSize','_x','_y','_xscale'])query.push('_root.'+q.clip+'.'+k);}
 const probe=instrumentObserver(bytes,query),rec={id:r.id,kind,type:s.type,sha256:r.sha256,sha256Verified:hash(bytes)===r.sha256,diagnosticSha256:hash(probe.bytes),comparisons:0,maxAbsoluteError:0,maxGeometryError:0,maxProjectionError:0,maxScaleError:0,mismatches:[],cases:[],controls:[],fullEquivalence:false};
 await rt.load(r,probe.bytes);const get=(t,k)=>t['_root.'+k],array=(t,k)=>typeof get(t,k)==='string'?get(t,k).split(',').map(Number):[];
 const eq=(a,b,info,absolute=0,relative=2e-9)=>{const {error,passed}=compareFinite(a,b,absolute,relative);rec.comparisons++;if(Number.isFinite(error)){rec.maxAbsoluteError=Math.max(rec.maxAbsoluteError,error);const key=info.category||'maxGeometryError';rec[key]=Math.max(rec[key],error);}if(!passed&&rec.mismatches.length<40)rec.mismatches.push({...info,expected:a,observed:b,error:Number.isFinite(error)?error:'unreadable'});};
 const counts={points:d.nodes.length,lines:clips.filter(q=>q.clip.startsWith('line_')).length,arrows:clips.filter(q=>q.clip.startsWith('arrow_')).length,surfaces:d.faces.length};
 let t=await rt.sample();rec.geometryCounts=counts;rec.observedCounts=Object.fromEntries(Object.keys(counts).map(k=>[k,get(t,k)]));
 rec.absentZeroCounters=[];for(const [key,value]of Object.entries(counts)){const observed=get(t,key);if(value===0&&(observed===null||observed===undefined||observed===''))rec.absentZeroCounters.push(key);else eq(value,observed,{name:'initial counts',key});}
 function compare(t,name){
  const a=array(t,'TransformMatrix').slice(0,9),matrix=Array.from({length:3},(_,i)=>a.slice(i*3,i*3+3));if(a.length!==9||!a.every(Number.isFinite))throw Error('Unreadable original camera');
  rec.cases.push({name,camera:a,width:get(t,'moviewidth'),height:get(t,'movieheight'),perspective:get(t,'f'),time:get(t,'time'),pressed:get(t,'isPressed'),animated:get(t,'isAnimation')});
  const f=get(t,'f');if(!Number.isFinite(f)||f<=0)throw Error('Unreadable original perspective distance');
  const current=s.type==='wavefronta'?structureClips({...d,faces:structureFaces(s.type,get(t,'time'))}):clips;
  if(s.type==='wavefronta')eq(get(t,'time'),get(t,'time'),{name,key:'readable original phase'});
  for(const q of current){const observed=array(t,q.clip+'.'+q.field);eq(q.coordinates.length,observed.length,{name,clip:q.clip,key:'coordinate count'});q.coordinates.forEach((v,i)=>eq(v,observed[i],{name,clip:q.clip,key:'coordinate '+i}));
   if(q.size!==undefined){eq(q.size,get(t,q.clip+'.refSize'),{name,clip:q.clip,key:'reference size'});
    const v=matrixVector(matrix,q.coordinates),denominator=1-v[2]/f;
    eq(v[0]/denominator+get(t,'moviewidth')/2,get(t,q.clip+'._x'),{name,clip:q.clip,key:'projected x',category:'maxProjectionError'},.050001,0);
    // Compare in original screen coordinates at its measured perspective distance.
    eq((['wavefronta','wavevector'].includes(s.type)?-1:1)*v[1]/denominator+get(t,'movieheight')/2,get(t,q.clip+'._y'),{name,clip:q.clip,key:'projected y',category:'maxProjectionError'},.050001,0);
    eq(f*10*q.size/Math.hypot(v[0],v[1],f-v[2]),get(t,q.clip+'._xscale'),{name,clip:q.clip,key:'projected scale',category:'maxScaleError'},.0001,0);
   }
  }
 }
 compare(t,'default');const interaction=typeof get(t,'isPressed')==='boolean'?'press-drag':'pointer-offset';rec.originalInteraction=interaction;
 for(const [name,dx,dy]of [['right',45,0],['up',0,-35],['diagonal',-35,25]]){
  const x=get(t,'moviewidth')/2,y=get(t,'movieheight')/2,b=await rt.page.locator('#runtime-host').boundingBox(),before=array(t,'TransformMatrix').slice(0,9);
  await rt.page.mouse.move(b.x+x,b.y+y);if(interaction==='press-drag')await rt.page.mouse.down();await rt.page.mouse.move(b.x+x+dx,b.y+y+dy,{steps:8});await rt.page.waitForTimeout(450);t=await rt.sample();compare(t,name+(interaction==='press-drag'?' held':' pointer offset'));const heldPressed=get(t,'isPressed');
  if(interaction==='press-drag')await rt.page.mouse.up();t=await rt.sample();compare(t,name+(interaction==='press-drag'?' released':' continued hover'));const releasedPressed=get(t,'isPressed');const after=array(t,'TransformMatrix').slice(0,9);
  const cameraChanged=after.some((v,i)=>Math.abs(v-before[i])>1e-8);rec.controls.push({name,interaction,heldPressed,releasedPressed,cameraChanged,passed:cameraChanged&&(interaction==='pointer-offset'||(heldPressed===true&&releasedPressed===false))});
 }
 if(s.type==='wavefronta'){await rt.page.evaluate(()=>window.traces=[]);await rt.page.waitForTimeout(6500);const observed=(await rt.page.evaluate(()=>window.traces.slice())).map(parseTrace).filter(Boolean),phases=new Set();for(const state of observed){const phase=get(state,'time');if(Number.isInteger(phase)&&phase>=0&&phase<20&&!phases.has(phase)){phases.add(phase);compare(state,'natural phase '+phase);}}rec.naturalPhases=[...phases].sort((a,b)=>a-b);rec.controls.push({name:'natural full 20-step phase cycle',passed:phases.size===20});}
 rec.passed=rec.sha256Verified&&rec.comparisons>0&&!rec.mismatches.length&&rec.controls.every(c=>c.passed);
 rec.scope='Actual Ruffle atom/label centre arrays and reference sizes, bond endpoints, arrow endpoints and plane vertices at default and three real camera pointer gestures. Eight originals require press-drag; calcite, NaCl and Ruby rotate from pointer offset without a press, which is recorded separately. Projected atom centres/scales compared with independent perspective math at the observed original camera, using each original screen y-axis convention and measured perspective distance. Moving wavefront vertices additionally checked over all 20 naturally played phase values. Coordinate tolerance one 0.05 px twip; scale tolerance 0.0001. Remaster default camera, rendered atom artwork/radii, projected bond pixels, painter depth order, random camera distribution, all gestures and automatic long-time camera motion are outside scope. Legacy case-insensitive Ruby outline is included. Absent counters for an expected zero are recorded explicitly; required geometry and projection values must be finite.';
 results.push(rec);console.log(s.type,rec.comparisons,rec.passed,JSON.stringify(rec.mismatches.slice(0,2)),JSON.stringify(rec.controls));
 fs.writeFileSync(reportPath,JSON.stringify({date:new Date().toISOString(),nativeModelHashes,method:'Read-only original Ruffle AVM1 geometry and camera arrays versus HTML semantic coordinate data and independent perspective formula',files:results.length,comparisons:results.reduce((n,r)=>n+r.comparisons,0),fullEquivalence:false,results},null,2)+'\n');
 }}finally{await rt.browser.close();}
if(!selected.length||results.length!==selected.length||results.some(r=>!r.passed))process.exitCode=1;
