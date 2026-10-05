import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {expansionSpecs} from '../assets/expansion-physics.mjs';
const read=name=>JSON.parse(fs.readFileSync(new URL('../docs/'+name+'-runtime-report.json',import.meta.url)));
test('Actual spatial polarization evidence covers all vectors, controls and defined directions',()=>{
 const report=read('polarization');assert.equal(report.files,5);
 const selected=Object.values(expansionSpecs).filter(s=>s.group==='polarization'&&!['xpol','ypol','rightcircular','leftcircular'].includes(s.type));
 for(const s of selected){
  const r=report.results.find(r=>r.id===s.id);assert.ok(r?.passed&&r.sha256Verified);assert.deepEqual(r.mismatches,[]);assert.equal(r.fullEquivalence,false);
  let expected=0;for(const c of r.cases){assert.ok(Number.isFinite(c.time));assert.ok(c.samples===65||c.samples===70);assert.ok(Object.values(c.parameters).every(Number.isFinite));expected+=c.samples*(s.type.startsWith('circularright')?12:8);if(s.type==='qwpx')expected+=8+(c.drawSum?6*c.samples:0);}
  assert.equal(r.comparisons,expected-(r.degenerateDirectionsExcluded||0));
  assert.ok(r.maxCoordinateError<=.050001&&r.maxScaleError<=.0001&&r.maxRotationError<=.0001);
  assert.ok(r.cases.some(c=>c.running===true));assert.ok(r.cases.some(c=>c.running===false));assert.ok(r.controls.every(c=>c.passed));
  for(const ctl of s.controls.filter(c=>c.origin==='original'))assert.deepEqual(r.controls.filter(c=>c.name==='slider change'&&c.key===ctl.key).map(c=>c.fraction),[0,.25,.5,.75,1]);
  if(s.type.startsWith('circularright')||s.type==='qwpx')assert.ok(r.controls.some(c=>c.name==='sum toggle'));
  for(const name of ['pause holds time','play advances time','pause after playing'])assert.ok(r.controls.some(c=>c.name===name));
 }
});
test('Four polarization markers are compared with their own original clip-local time',()=>{
 const report=read('polarization-marker');assert.equal(report.files,4);
 for(const type of ['xpol','ypol','rightcircular','leftcircular']){
  const s=Object.values(expansionSpecs).find(s=>s.type===type),r=report.results.find(r=>r.id===s.id);assert.ok(r?.passed&&r.sha256Verified);assert.deepEqual(r.mismatches,[]);assert.equal(r.fullEquivalence,false);
  assert.equal(r.markerPaths.length,2);assert.equal(r.cases.length,25);assert.equal(r.comparisons,25*(type.endsWith('circular')?4:2));assert.ok(r.maxAbsoluteError<=.050001);
  for(const c of r.cases){assert.equal(c.times.length,2);assert.ok(c.times.every(Number.isFinite));assert.ok(c.positions.flat().every(Number.isFinite));}
  assert.ok(r.controls.every(c=>c.passed));
 }
});
