import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {fieldSpecs} from '../assets/field-specs.mjs';
const report=JSON.parse(fs.readFileSync(new URL('../docs/field-runtime-report.json',import.meta.url)));
test('Field dragging cannot exceed the limits reached in the original runtime',()=>{
 for(const s of Object.values(fieldSpecs)){
  const r=report.results.find(r=>r.id===s.id);assert.ok(r?.passed,s.id);
  for(const c of r.controls.filter(c=>c.clip&&c.name.endsWith('-bound'))){
   const keys=c.clip==='ball1'?['x1','y1']:c.clip==='ball2'?['x2','y2']:s.type==='efield1'||s.type==='efield2'?['xq','yq']:c.clip==='ballR'?['xqR','yqR']:['xqB','yqB'];
   for(const [i,key]of keys.entries())assert.equal(s.controls.find(c=>c.key===key)[c.name==='lower-bound'?'min':'max'],c.observed[i],s.type+' '+key+' '+c.name);
  }
 }
});
test('All five field runtime audits retain actual controls and finite scope',()=>{
 assert.equal(report.results.length,5);
 for(const r of report.results){assert.equal(r.sha256Verified,true);assert.equal(r.passed,true);assert.deepEqual(r.mismatches,[]);assert.ok(r.controls.length>=4);assert.ok(r.controls.every(c=>c.passed));assert.equal(r.cases.length,r.controls.length+1);assert.equal(r.fullEquivalence,false);assert.ok(r.scope.includes('0.05'));}
});
