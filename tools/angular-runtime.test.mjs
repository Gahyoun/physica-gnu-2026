import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import crypto from 'node:crypto';
import {expansionSpecs} from '../assets/expansion-physics.mjs';
test('three angular runtimes cover one natural orbital cycle and actual camera presses',()=>{
 const r=JSON.parse(fs.readFileSync(new URL('../docs/angular-runtime-report.json',import.meta.url))),specs=Object.values(expansionSpecs).filter(s=>s.group==='angular');
 assert.equal(r.files,3);assert.equal(r.results.length,3);assert.equal(new Set(r.results.map(v=>v.id)).size,3);assert.equal(r.fullEquivalence,false);
 for(const s of specs){const v=r.results.find(v=>v.id===s.id);assert.equal(v.passed,true,s.type);assert.equal(v.sha256,s.sha256);assert.equal(v.sha256Verified,true);assert.deepEqual(v.mismatches,[]);assert.equal(v.fullEquivalence,false);assert.deepEqual(v.naturalPhases,Array.from({length:72},(_,i)=>i));assert.equal(v.cases.length,79);assert.ok(v.comparisons>800);assert.ok(v.controls.every(c=>c.passed));assert.equal(v.controls.filter(c=>c.cameraChanged&&c.heldPressed===true&&c.releasedPressed===false).length,3);}
 for(const [file,hash]of Object.entries(r.nativeModelHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL('../'+file,import.meta.url))).digest('hex'),hash,file);
});
