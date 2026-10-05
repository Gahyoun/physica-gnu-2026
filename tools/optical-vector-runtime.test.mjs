import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {refractionSpecs,refractionSegments} from '../assets/native-refraction.mjs';
import {expansionSpecs} from '../assets/expansion-physics.mjs';
const read=name=>JSON.parse(fs.readFileSync(new URL('../docs/'+name+'-runtime-report.json',import.meta.url)));
test('Actual reflection/refraction evidence covers every declared vector coordinate and held rotation steps',()=>{
 const report=read('refraction');assert.equal(report.files,5);
 for(const s of Object.values(refractionSpecs)){
  const r=report.results.find(r=>r.id===s.id);assert.ok(r?.passed&&r.sha256Verified);assert.deepEqual(r.mismatches,[]);assert.equal(r.fullEquivalence,false);
  const coordinates=refractionSegments(s).length*6+(s.type==='wavefronts'?72:0);
  assert.equal(r.comparisons,r.cases.length*coordinates+9+r.rotationSteps*9);
  assert.ok(r.rotationSteps>0);assert.equal(r.controls.length,3);assert.ok(r.controls.every(c=>c.passed&&c.cameraChanged&&c.releaseStoppedRotation));
  for(const c of r.cases){assert.ok(Number.isFinite(c.time));assert.equal(c.camera.length,9);assert.ok(c.camera.every(Number.isFinite));}
 }
});
test('Six thin-film runtimes retain raw drags, fine button corrections and rounded graph readings',()=>{
 const report=read('film'),specs=Object.values(expansionSpecs).filter(s=>s.group==='film');assert.equal(report.files,specs.length);
 for(const s of specs){
  const r=report.results.find(r=>r.id===s.id);assert.ok(r?.passed&&r.sha256Verified);assert.deepEqual(r.mismatches,[]);assert.equal(r.fullEquivalence,false);
  assert.equal(r.comparisons,r.cases.length*21+3);
  const sliders=s.controls.filter(c=>c.key!=='probe');
  assert.equal(r.controls.filter(c=>c.name==='slider limits').length,sliders.length);
  for(const c of sliders){const changes=r.controls.filter(q=>q.name==='slider change'&&q.key===c.key);assert.deepEqual(changes.map(q=>q.fraction),[0,.25,.5,.75,1]);for(const q of changes){assert.ok(Number.isFinite(q.dragObserved));assert.ok(q.passed);for(const a of q.fineAdjustments)assert.ok(Number.isFinite(a.before)&&Number.isFinite(a.observed));}}
  assert.equal(r.controls.filter(c=>c.name==='graph wavelength selection').length,3);assert.ok(r.controls.every(c=>c.passed));
  for(const c of r.cases)assert.ok(Object.values(c.parameters).every(Number.isFinite));
 }
});
