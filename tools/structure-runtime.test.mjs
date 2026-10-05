import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import crypto from 'node:crypto';
import {expansionSpecs,structureData} from '../assets/expansion-physics.mjs';
test('eleven structure runtimes retain complete geometry and real camera-state evidence',()=>{
 const r=JSON.parse(fs.readFileSync(new URL('../docs/structure-runtime-report.json',import.meta.url))),specs=Object.values(expansionSpecs).filter(s=>s.group==='structure');
 assert.equal(r.files,11);assert.equal(r.results.length,specs.length);assert.equal(new Set(r.results.map(v=>v.id)).size,11);assert.equal(r.fullEquivalence,false);
 for(const s of specs){
  const v=r.results.find(v=>v.id===s.id),d=structureData[s.type];assert.equal(v.passed,true,s.type);assert.equal(v.sha256,s.sha256);assert.equal(v.sha256Verified,true);assert.deepEqual(v.mismatches,[]);assert.equal(v.fullEquivalence,false);
  assert.equal(v.geometryCounts.points,d.nodes.length);assert.equal(v.geometryCounts.surfaces,d.faces.length);
  for(const [key,count]of Object.entries(v.geometryCounts))if(count>0)assert.equal(v.observedCounts[key],count,s.type+' '+key);
  assert.ok(v.cases.length>=7);for(const c of v.cases){assert.equal(c.camera.length,9);assert.ok(c.camera.every(Number.isFinite));assert.ok(c.width>0&&c.height>0&&c.perspective>0);}
  assert.equal(v.controls.filter(c=>c.cameraChanged).length,3);for(const c of v.controls)if(c.interaction==='press-drag'){assert.equal(c.heldPressed,true);assert.equal(c.releasedPressed,false);}assert.equal(v.originalInteraction,['calcite','nacl','al2o3_rubby'].includes(s.type)?'pointer-offset':'press-drag');assert.ok(v.controls.every(c=>c.passed));assert.ok(v.maxProjectionError<=.050001);assert.ok(v.maxScaleError<=.0001);
  if(s.type==='wavefronta')assert.deepEqual(v.naturalPhases,Array.from({length:20},(_,i)=>i));
 }
 for(const [file,hash]of Object.entries(r.nativeModelHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL('../'+file,import.meta.url))).digest('hex'),hash,file);
});
test('HTML plane-wave motion evidence matches the tested renderer and model bytes',()=>{
 const r=JSON.parse(fs.readFileSync(new URL('../docs/wavefront-motion-ui-report.json',import.meta.url)));
 assert.equal(r.passed,true);assert.equal(r.planes,22);assert.equal(r.csvPlaneVertices,88);assert.equal(r.csvPhase,7);
 for(const key of ['svgMoves','svgNodesRetained','phase20ReturnsToStart','pauseStopsPlanes','progressPositionStable'])assert.equal(r[key],true,key);
 for(const [file,hash]of Object.entries(r.nativeModelHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL('../'+file,import.meta.url))).digest('hex'),hash,file);
});
