import fs from 'node:fs';import crypto from 'node:crypto';
import {fieldSpecs,defaults,grid,probeAt,dipole} from '../assets/field-physics.mjs';
import {inspectSWF,instrumentObserver} from './swf-runtime-probe.mjs';
import {runtimeSession} from './runtime-session.mjs';
const root=new URL('../',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('src/flash-manifest.json',root)));
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
const nativeModelHashes=Object.fromEntries(['assets/field-physics.mjs','assets/field-specs.mjs','assets/native-fields.mjs'].map(f=>[f,hash(fs.readFileSync(new URL(f,root)))]));
const runtime=await runtimeSession(),results=[];
const properties=['_x','_y','_xscale','_rotation'];
const angleError=(a,b)=>Math.abs(((a-b+540)%360+360)%360-180);
try{for(const [kind,s]of Object.entries(fieldSpecs)){
 const r=manifest.files.find(r=>r.id===s.id),bytes=fs.readFileSync(new URL(r.file,root)),swf=inspectSWF(bytes);
 const params=['xq','yq','charge','xqR','yqR','xqB','yqB','xpt','ypt','x1','y1','x2','y2','xLeft','xRight','yTop','yBottom'];
 const cells=s.type.startsWith('efield')?grid(s.type,defaults(s)):[];
 const ny=s.type==='efield3'||s.type==='efield1'?21:19;
 const clips=[...cells.map((_,i)=>'arrow'+Math.floor(i/ny)+'_'+i%ny),'arrowX','aY','aM','dChar','pChar','line1','ballR','ballB','ball1','ball2','chargeSign'];
 const q=[...params.map(k=>'_root.'+k),...clips.flatMap(k=>properties.map(p=>'_root.'+k+'.'+p))];
 const probe=instrumentObserver(bytes,q),record={id:r.id,kind,type:s.type,sha256:r.sha256,sha256Verified:hash(bytes)===r.sha256,diagnosticSha256:hash(probe.bytes),comparisons:0,maxAbsoluteError:0,mismatches:[],cases:[],controls:[],fullEquivalence:false};
 await runtime.load(r,probe.bytes);
 const get=(t,k)=>t['_root.'+k];
 function eq(a,b,info,tolerance=1e-7,angle=false){
  const error=Number.isFinite(a)&&Number.isFinite(b)?(angle?angleError(a,b):Math.abs(a-b)):Infinity;
  record.comparisons++;if(Number.isFinite(error))record.maxAbsoluteError=Math.max(record.maxAbsoluteError,error);
  if(error>tolerance&&record.mismatches.length<40)record.mismatches.push({...info,expected:a,observed:b,error:Number.isFinite(error)?error:'unreadable',tolerance});
 }
 function segment(t,clip,a,b,name){
  const dx=a[0]-b[0],dy=a[1]-b[1];
  eq((a[0]+b[0])/2,get(t,clip+'._x'),{name,clip,key:'x'},.050001);
  eq((a[1]+b[1])/2,get(t,clip+'._y'),{name,clip,key:'y'},.050001);
  eq(Math.hypot(dx,dy),get(t,clip+'._xscale'),{name,clip,key:'length'},.0001);
  eq(Math.atan2(dy,dx)*180/3.1415926,get(t,clip+'._rotation'),{name,clip,key:'rotation'},.0001,true);
 }
 function compare(t,name){
  const p=Object.fromEntries(params.map(k=>[k,get(t,k)]));p.sign=Math.sign(p.charge);
  record.cases.push({name,parameters:p});
  if(s.type.startsWith('efield')){
   for(const [n,a]of grid(s.type,p).entries()){
    const clip='arrow'+Math.floor(n/ny)+'_'+n%ny;
    if(!a.visible){eq(s.type==='efield3'?-1000:-1000.5,get(t,clip+'._x'),{name,clip,key:'excluded'});continue;}
    if(s.type==='efield3'){
     eq(a.x,get(t,clip+'._x'),{name,clip,key:'x'});eq(a.y,get(t,clip+'._y'),{name,clip,key:'y'});
     eq(180+a.angle*180/3.1415926,get(t,clip+'._rotation'),{name,clip,key:'rotation'},.0001,true);
    }else segment(t,clip,[a.x,a.y],[a.x+a.length*Math.cos(a.angle),a.y+a.length*Math.sin(a.angle)],name);
   }
   if(s.type!=='efield2'){
    const a=probeAt(s.type,p);
    if(a.visible)segment(t,'arrowX',[p.xpt,p.ypt],[p.xpt+5*a.ex,p.ypt+5*a.ey],name);
    else eq(-1000.5,get(t,'arrowX._x'),{name,key:'excluded probe'});
   }
  }else if(s.type==='dipole'){
   const d=dipole(p);segment(t,'aY',[p.xqB,p.yqB],[p.xqR,p.yqR],name);segment(t,'aM',[p.xqB-2,p.yqB-2],[p.xqR-2,p.yqR-2],name);
   for(const [clip,offset]of [['dChar',0],['pChar',-22]])for(const [i,key]of ['_x','_y'].entries())eq(d.centre[i]+offset,get(t,clip+'.'+key),{name,clip,key},.050001);
  }else segment(t,'line1',[p.x1,p.y1],[p.x2,p.y2],name);
 }
 let t=await runtime.sample();compare(t,'default');
 const actors=s.type==='laplace1dim'?[['ball1','x1','y1'],['ball2','x2','y2']]:s.type==='efield3'||s.type==='dipole'?[['ballR','xqR','yqR'],['ballB','xqB','yqB']]:[['ballR','xq','yq']];
 for(const [clip,xkey,ykey]of actors){
  for(const [name,x,y]of [['interior',Math.round((get(t,'xLeft')+get(t,'xRight'))*.5),Math.round((get(t,'yTop')+get(t,'yBottom'))*.35)],['lower-bound',get(t,'xLeft')+2,get(t,'yTop')+2],['upper-bound',get(t,'xRight')-2,get(t,'yBottom')-2]]){
   t=await runtime.pointer(x,y,'drag',[get(t,clip+'._x'),get(t,clip+'._y')]);
   const expected=[Math.max(get(t,'xLeft')+20,Math.min(get(t,'xRight')-20,x)),Math.max(get(t,'yTop')+20,Math.min(get(t,'yBottom')-20,y))];
   const observed=[get(t,xkey),get(t,ykey)],passed=expected.every((v,i)=>Math.abs(v-observed[i])<=.051);
   record.controls.push({clip,name,target:[x,y],expected,observed,passed});compare(t,clip+' '+name);
  }
 }
 if(s.type==='efield1'||s.type==='efield2'){
  const sign=swf.instances.find(i=>i.button&&i.parentPath==='_root.chargeSign');
  if(!sign)throw Error('Original sign checkbox not found');
  const before=get(t,'charge');t=await runtime.pointer(sign.x,sign.y);
  record.controls.push({name:'sign toggle',before,observed:get(t,'charge'),passed:get(t,'charge')===-before});compare(t,'negative charge');
 }
 if(s.type==='efield1'||s.type==='efield3')for(const [x,y]of [[240,220],[60,75]]){t=await runtime.pointer(x,y);record.controls.push({name:'probe click',target:[x,y],observed:[get(t,'xpt'),get(t,'ypt')],passed:Math.abs(get(t,'xpt')-x)<=.051&&Math.abs(get(t,'ypt')-y)<=.051});compare(t,'probe '+x+','+y);}
 record.passed=record.sha256Verified&&record.comparisons>0&&record.mismatches.length===0&&record.controls.every(c=>c.passed);
 record.scope='Every original grid arrow at default and recorded real pointer drags, sign toggles and probe clicks, or dipole/potential line geometry. Coordinate tolerance is one 0.05 px twip; rotation/scale tolerances 0.0001. Hidden arrow stale rotations, original color coefficients, added HTML cross-section graphs/interpolation and all combinations are outside scope. No source functions are invoked by the observer.';
 results.push(record);console.log(s.type,record.comparisons,record.passed,JSON.stringify(record.mismatches.slice(0,2)),JSON.stringify(record.controls.filter(c=>!c.passed)));
 fs.writeFileSync(new URL('docs/field-runtime-report.json',root),JSON.stringify({date:new Date().toISOString(),nativeModelHashes,method:'Actual original Ruffle AVM1 display telemetry, read-only observer; original pointer actions versus independent HTML field geometry',files:results.length,comparisons:results.reduce((n,r)=>n+r.comparisons,0),fullEquivalence:false,results},null,2)+'\n');
 }}finally{await runtime.browser.close();}
if(results.length!==Object.keys(fieldSpecs).length||results.some(r=>!r.passed))process.exitCode=1;
