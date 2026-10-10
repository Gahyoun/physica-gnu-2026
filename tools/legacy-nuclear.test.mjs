import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {decaySeries,originalAmounts,decayEdges,decayStep} from '../assets/legacy-nuclear-physics.mjs';
const references=JSON.parse(fs.readFileSync(new URL('../docs/legacy-nuclear-numeric-reference.json',import.meta.url)));
test('All six decay sequences reproduce 36 actual original Java numerical outputs',()=>{
 for(const q of references){const a=originalAmounts(q.key,q.t);assert.equal(a.length,q.amounts.length);for(let i=0;i<a.length;i++)assert.ok(Math.abs(a[i]-q.amounts[i])<1e-8*Math.max(1,Math.abs(q.amounts[i])),`${q.key} t=${q.t} i=${i}`);}
});
test('Natural decay arrows preserve original alpha and beta changes and branching probabilities',()=>{
 for(const key of ['Th232','Pu241','U238','U235']){
  const s=decaySeries[key];
  for(const edge of decayEdges(key)){
   const a=s.elements.find(a=>a.id===edge.from),b=s.elements.find(a=>a.id===edge.to);
   assert.equal(b.Z-a.Z,edge.kind==='alpha'?-2:1);assert.equal(b.N-a.N,edge.kind==='alpha'?-2:-1);assert.ok(edge.fraction>0&&edge.fraction<=1);
  }
 }
 assert.equal(decayEdges('Th232').filter(e=>e.from==='bi212').length,2);
});
test('Original speed slider increases time steps tenfold while keeping time units in years',()=>{
 for(const key of Object.keys(decaySeries))for(let speed=1;speed<9;speed++)assert.ok(Math.abs(decayStep(key,speed+1)/decayStep(key,speed)-10)<1e-12);
 assert.equal(originalAmounts('Test',0)[0],100);assert.throws(()=>originalAmounts('Test',-1),RangeError);
});
