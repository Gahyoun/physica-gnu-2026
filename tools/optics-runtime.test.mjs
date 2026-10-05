import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const report=JSON.parse(fs.readFileSync(new URL('../docs/optics-runtime-report.json',import.meta.url)));
test('All six optics runtimes cover actual interior and endpoint slider changes',()=>{
 assert.equal(report.results.length,6);
 for(const r of report.results){
  assert.equal(r.sha256Verified,true);assert.equal(r.passed,true);assert.deepEqual(r.mismatches,[]);assert.ok(r.comparisons>0);assert.equal(r.fullEquivalence,false);
  assert.ok(r.controls.every(c=>c.passed),r.type);
  const sliders=r.controls.filter(c=>c.clip);
  for(const clip of new Set(sliders.map(c=>c.clip)))assert.deepEqual(sliders.filter(c=>c.clip===clip).map(c=>c.fraction),[0,.25,.5,.75,1]);
  assert.ok(r.scope.includes('outside scope'));
 }
});
test('Wave runtime evidence includes selection and actual start/pause phase counters',()=>{
 for(const r of report.results.filter(r=>r.type.startsWith('wave-'))){
  for(const name of ['start advances phase','pause stops phase'])assert.ok(r.controls.find(c=>c.name===name)?.passed,r.type+' '+name);
  assert.equal(r.controls.filter(c=>c.name==='wave selection').length,3);
  assert.equal(r.cases.filter(c=>c.name.startsWith('running phase ')).length,8);
 }
});
