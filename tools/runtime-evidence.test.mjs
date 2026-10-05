import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {runtimeEvidence} from './runtime-evidence.mjs';
const root=new URL('../',import.meta.url);
const manifest=JSON.parse(fs.readFileSync(new URL('src/flash-manifest.json',root)));
const evidence=runtimeEvidence();
test('Every preserved original has actual playback evidence matching its current bytes',()=>{
 assert.equal(evidence.total,manifest.files.length);
 assert.equal(evidence.engine,JSON.parse(fs.readFileSync(new URL('vendor/ruffle/package.json',root))).version);
 for(const [file,hash]of Object.entries(evidence.nativeModelHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL(file,root))).digest('hex'),hash,'Stale runtime evidence: '+file);
 assert.equal(evidence.originalPlaybackPassed,manifest.files.length);
 assert.equal(new Set(evidence.files.map(r=>r.id)).size,manifest.files.length);
 for(const r of manifest.files){
  const e=evidence.files.find(e=>e.id===r.id);
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL(r.file,root))).digest('hex'),e.sha256,r.id);
  assert.equal(e.originalPlayback.sha256,e.sha256);
  assert.equal(e.originalPlayback.passed,true,r.id);
 }
});
test('Runtime numerical, slider and frame claims retain separate finite scopes',()=>{
 assert.equal(evidence.numericalFilesPassed,47);
 assert.equal(evidence.rootTimelineFilesPassed,29);
 assert.equal(evidence.rootTimelineFrames,805);
 assert.equal(evidence.sliderCandidates,125);
 assert.equal(evidence.sliderCandidatesPending,0);
 assert.equal(evidence.sliderNominalMatches,244);
 assert.equal(evidence.reviewedSourceBoundaryMatches,6);
 assert.equal(evidence.sliderEndpointChecks,250);
 assert.equal(evidence.allOriginalRuntimeControlsAndNumericsCompared,false);
 const sliders=JSON.parse(fs.readFileSync(new URL('docs/flash-slider-runtime-report.json',root)));
 for(const r of sliders.results){assert.ok(!r.error,r.id);for(const s of r.sliders){assert.equal(s.endpoints.length,2,r.id);for(const e of s.endpoints)assert.ok(e.passed||(e.reviewedRuntimeBoundaryMatch&&e.sourceBoundaryReason),r.id);}}
 for(const e of evidence.files){
  assert.equal(e.fullEquivalence,false);
  for(const check of [e.numerical,e.rootTimeline,e.sliders].filter(Boolean)){
   assert.equal(check.sha256,e.sha256,e.id);
   assert.ok(check.scope);
  }
  if(e.numerical){assert.ok(e.numerical.comparisons>0,e.id);assert.equal(e.numerical.passed,true,e.id);}
  if(e.rootTimeline)assert.equal(e.rootTimeline.framesObserved,e.rootTimeline.framesExpected,e.id);
 }
});
