import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const report=name=>JSON.parse(fs.readFileSync(new URL('../docs/'+name+'-runtime-report.json',import.meta.url)));
test('Molecule runtime evidence includes every original CO2 mode and 96 distinct natural phases',()=>{
 const r=report('molecule');assert.equal(r.files,4);
 for(const v of r.results){assert.equal(v.passed,true);assert.deepEqual(v.mismatches,[]);assert.equal(v.fullEquivalence,false);assert.equal(new Set(v.cases.map(c=>c.time)).size,96);assert.ok(v.controls.every(c=>c.passed));if(v.type==='laser_CO2'||v.type==='laser_CO2cov')assert.deepEqual(v.originalModes.map(p=>p.w).sort((a,b)=>a-b),[13,25,50]);if(v.type==='springmot1xy')assert.ok(v.cases.every(c=>c.renderPhase===c.time));}
});
test('Color runtime evidence uses live plate getters and checks all slider endpoints and interiors',()=>{
 const r=report('color');assert.equal(r.files,3);
 for(const v of r.results){assert.equal(v.passed,true);assert.equal(v.cases.length,16);assert.equal(v.comparisons,64);assert.deepEqual(v.mismatches,[]);assert.ok(v.cases.every(c=>Number.isInteger(c.paint)&&c.paint>=0&&c.paint<=0xffffff));assert.ok(v.controls.every(c=>c.passed));for(const key of Object.keys(v.cases[0].parameters))assert.deepEqual(v.controls.filter(c=>c.name==='original slider drag'&&c.key===key).map(c=>c.fraction),[0,.25,.5,.75,1]);}
});
test('Complex runtime evidence covers negative and positive quadrants, axes and zero through actual clicks',()=>{
 const r=report('complex'),v=r.results[0];assert.equal(r.files,1);assert.equal(v.passed,true);assert.equal(v.comparisons,364);assert.deepEqual(v.mismatches,[]);const clicks=v.cases.filter(c=>c.name.startsWith('plane click'));assert.equal(clicks.length,25);assert.equal(new Set(clicks.map(c=>[c.real,c.imag].join(','))).size,25);assert.ok(clicks.some(c=>c.real===0&&c.imag===0));assert.ok(clicks.every(c=>c.real===c.originalReal&&c.imag===c.originalImag));
});
test('Reflection runtime evidence preserves both original amplitudes and all random branches without forced seeds',()=>{
 const r=report('reflection-wave');assert.equal(r.files,2);
 for(const v of r.results){assert.equal(v.passed,true);assert.deepEqual(v.mismatches,[]);assert.ok(v.controls.every(c=>c.passed));assert.deepEqual([...new Set(v.cases.map(c=>c.shape))].sort(),[0,1,2,3]);const expected=v.type==='reflect1'?50:48;assert.ok(v.cases.every(c=>c.amplitude===expected));for(let shape=0;shape<4;shape++){const phases=v.controls.find(c=>c.name==='natural advancing phases branch '+shape).phases;assert.ok(phases.length>=30&&new Set(phases).size===phases.length);assert.ok(phases.every(Number.isInteger));}if(v.type==='reflect1')assert.ok(v.cases.every(c=>c.boundaryDisplacement===0));else assert.ok(v.cases.some(c=>Math.abs(c.boundaryDisplacement)>50));}
});
