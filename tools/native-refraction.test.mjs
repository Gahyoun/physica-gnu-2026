import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {refractionSpecs,refractionFields,cameraRotation,matrixVector,identity,projectPoint,wavefrontPlanes} from '../assets/native-refraction.mjs';
const root=new URL('../',import.meta.url),read=p=>JSON.parse(fs.readFileSync(new URL(p,root))),manifest=read('src/flash-manifest.json').files;
const dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0),cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9*Math.max(1,Math.abs(a),Math.abs(b)));
test('Five distinct reflection/refraction counterparts retain their original SWF hashes',()=>{
 assert.equal(Object.keys(refractionSpecs).length,5);assert.equal(new Set(Object.values(refractionSpecs).map(s=>s.id)).size,5);
 for(const s of Object.values(refractionSpecs)){const r=manifest.find(r=>r.id===s.id);assert.equal(s.originalSource,r.source);assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL(r.file,root))).digest('hex'),s.sha256);if(s.animated)assert.equal(s.rate,2.5);else assert.equal(s.rate,0);}
});
test('All polarization branches have transverse perpendicular E/B fields and forward energy direction',()=>{
 for(const type of ['p-wave','s-wave','p-sign','s-sign'])for(const t of [0,1,199,200,201,1999,2000])for(const length of [0,4,48,96])for(const f of refractionFields(type,length,t)){
  close(dot(f.E,f.k),0);close(dot(f.B,f.k),0);close(dot(f.E,f.B),0);close(Math.hypot(...f.k),1);
  cross(f.E,f.B).forEach((v,i)=>close(v,f.amplitude**2*f.k[i]));
 }
});
test('Camera rotations preserve lengths and wavefront planes are normal to propagation',()=>{
 let m=identity();for(let n=0;n<300;n++){m=cameraRotation([30,-20,10],m);for(const p of [[1,0,0],[0,1,0],[0,0,1],[150,-100,30]]){close(Math.hypot(...matrixVector(m,p)),Math.hypot(...p));assert.ok(projectPoint(p,m).every(Number.isFinite));}}
 const fields=refractionFields('s-sign',50);wavefrontPlanes().forEach((p,i)=>{const k=fields[Math.floor(i/2)].k;p.slice(1).forEach(q=>close(dot(q.map((v,j)=>v-p[0][j]),k),0));});
});
test('Every refraction counterpart has matching numerical and browser evidence with limits stated',()=>{
 const source=read('docs/refraction-source-report.json'),ui=read('docs/refraction-ui-report.json');assert.equal(source.comparisons,source.results.reduce((sum,x)=>sum+x.comparisons,0));
 for(const s of Object.values(refractionSpecs)){const a=source.results.find(x=>x.id===s.id),b=ui.results.find(x=>x.id===s.id);assert.equal(a.sha256,s.sha256);assert.ok(a.passed&&a.comparisons>0);assert.equal(a.sourceRuntimeExhaustive,false);assert.ok(b.svg&&b.drag&&b.keyboard&&b.cameraPresets&&b.localPerformance.sameSVG);assert.equal(b.curveAlpha,.65);if(s.animated)assert.ok(b.appliedFramesAndProbe&&b.playPause&&b.offscreenPause&&b.stableLowerProgress&&b.csvRows===2001);assert.equal(b.sourceRuntimeExhaustive,false);}
});
