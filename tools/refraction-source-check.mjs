// No original AS is copied into public artifacts: only comparison evidence.
import fs from 'node:fs';import path from 'node:path';import vm from 'node:vm';import assert from 'node:assert/strict';
import {refractionSpecs,refractionSegments,wavefrontPlanes,cameraRotation,matrixVector,projectPoint,identity} from '../assets/native-refraction.mjs';
const dir=process.env.PHYSICA_FLASH_SCRIPTS||'/private/tmp/physica-all-flash-scripts',results=[];
function fn(s,name){let i=s.search(new RegExp('function '+name+'\\s*\\('));assert.ok(i>=0,name);let b=s.indexOf('{',i),j=b+1,n=1;while(n&&j<s.length){if(s[j]==='{')n++;if(s[j]==='}')n--;j++;}return s.slice(i,j);}
for(const [kind,s] of Object.entries(refractionSpecs)){
 const source=fs.readFileSync(path.join(dir,s.id,'scripts/frame_1/DoAction.as'),'utf8'),lines=[],arrows=[],surfaces=[],ctx=vm.createContext({Math,time:0,inAng:s.type==='wavefronts'?55*Math.PI/180:55,reAng:s.type==='wavefronts'?30*Math.PI/180:30,points:0,lines:0,curves:0,surfaces:0,arrows:0,f:1000,moviewidth:280,movieheight:280,TransformMatrix:identity(),copyObj(){},make3Dobj(type,points){const item={pointarray:points,clear(){},lineStyle(){},moveTo(){},lineTo(){},beginFill(){},endFill(){},swapDepths(){}};if(type==='line'){ctx['line_'+lines.length]=item;lines.push(item);ctx.lines=lines.length;}else if(type==='arrow'){ctx['arrow_'+arrows.length]=item;arrows.push(item);ctx.arrows=arrows.length;}else{ctx['surface_'+surfaces.length]=item;surfaces.push(item);ctx.surfaces=surfaces.length;}}});
 vm.runInContext(['InitScene','RenderScene','MatrixMatrixMultiply','MatrixVectorMultiply','SetTransformMatrix'].map(n=>fn(source,n)).join('\n'),ctx);ctx.InitScene();let comparisons=0,maxAbsoluteError=0;
 const eq=(a,b)=>{const error=Math.abs(a-b);maxAbsoluteError=Math.max(maxAbsoluteError,error);assert.ok(error<=1e-9*Math.max(1,Math.abs(a),Math.abs(b)),s.type+': '+a+' / '+b);comparisons++;};
 const pointsEq=(a,b)=>{assert.equal(a.length,b.length);for(let i=0;i<a.length;i++)for(let j=0;j<a[i].length;j++)eq(a[i][j],b[i][j]);};
 const frames=s.animated?Array.from({length:2001},(_,i)=>i):[0];
 for(const time of frames){ctx.time=time;ctx.RenderScene();const expected=s.animated?lines.map(a=>a.pointarray):[...lines,...arrows].map(a=>a.pointarray),actual=refractionSegments(s,time).map(a=>a.points);assert.equal(actual.length,expected.length,s.type+' segment count');
  // Static originals emit B then E for p; s emits E then B.
  if(s.type==='s-sign'){for(let i=2;i<actual.length;i+=3)[actual[i],actual[i+1]]=[actual[i+1],actual[i]];}
  for(let i=0;i<actual.length;i++)pointsEq(actual[i],expected[i]);
 }
 if(s.type==='wavefronts'){const planes=wavefrontPlanes();for(let i=0;i<planes.length;i++)pointsEq(planes[i],surfaces[i+2].pointarray);}
 for(const camera of [s.camera,[0,0,0],[20,-20,0],[-20,20,0],[150,0,70],[-300,-300,300]]){ctx.TransformMatrix=identity();ctx.SetTransformMatrix(...camera,identity());const m=cameraRotation(camera);pointsEq(m,ctx.TransformMatrix);for(let i=0;i<100;i++){const p=[i-50,i*.75-30,Math.sin(i)*90],a=ctx.MatrixVectorMultiply(ctx.TransformMatrix,p),b=matrixVector(m,p);for(let j=0;j<3;j++)eq(a[j],b[j]);const projected=projectPoint(p,m);eq(a[0]/(1-a[2]/1000),projected[0]);eq(-a[1]/(1-a[2]/1000),projected[1]);}}
 // Cumulative rotations model the source's repeated view changes too.
 let m=identity();ctx.TransformMatrix=identity();for(let i=0;i<100;i++){const v=[Math.sin(i)*20,Math.cos(i)*20,0];m=cameraRotation(v,m);ctx.SetTransformMatrix(...v,ctx.TransformMatrix);pointsEq(m,ctx.TransformMatrix);}
 results.push({id:s.id,kind,source:s.originalSource,sha256:s.sha256,comparisons,maxAbsoluteError,passed:true,sourceRuntimeExhaustive:false,scope:s.animated?'All 2001 time steps × 25 distances × six field segments; source perspective and incremental rotations':s.type==='wavefronts'?'Source normal and k vectors, six wavefront plane coordinates, perspective and incremental rotations':'All source E/B/k signed vector endpoints; perspective and incremental rotations',originalAngles:[55,30],originalRates:s.animated?s.rate:null});console.log(s.type,comparisons,maxAbsoluteError);
}
fs.writeFileSync(new URL('../docs/refraction-source-report.json',import.meta.url),JSON.stringify({method:'Private source geometry and matrix functions versus independent vector/field equations; no source scripts published',files:results.length,comparisons:results.reduce((s,r)=>s+r.comparisons,0),results},null,2)+'\n');
