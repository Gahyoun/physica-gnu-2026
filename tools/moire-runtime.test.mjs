import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import crypto from 'node:crypto';
import {moireDrag,moireLayout} from '../assets/moire-controls.mjs';import {moireOverlayState,moireGeometry,expansionSpecs} from '../assets/expansion-physics.mjs';
const root=new URL('../',import.meta.url),read=f=>JSON.parse(fs.readFileSync(new URL(f,root))),current=r=>{for(const [file,hash]of Object.entries(r.nativeModelHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL(file,root))).digest('hex'),hash,'Stale evidence: '+file);};
test('Moire original runtime includes all 1809 reachable count/spacing tuples without forcing inputs',()=>{
 const r=read('docs/moire-runtime-report.json');current(r);assert.equal(r.files,7);assert.equal(r.comparisons,r.results.reduce((n,v)=>n+v.comparisons,0));
 for(const v of r.results){assert.equal(v.passed,true,v.type);assert.equal(v.sha256Verified,true);assert.equal(v.fullEquivalence,false);assert.deepEqual(v.mismatches,[]);assert.ok(v.controls.every(c=>c.passed));assert.ok(v.scope);}
 const v=r.results.find(v=>v.type==='moireint4'),c=v.finiteInputCombinations;assert.equal(c.expected,1809);assert.equal(c.observed,1809);assert.equal(c.complete,true);
 const tuples=v.cases.filter(c=>c.name==='complete finite slider tuple'),observed=new Set(tuples.map(c=>c.parameters.count+','+c.parameters.space));assert.equal(observed.size,1809);
 for(let count=2;count<=10;count++)for(let space=50;space<=250;space++)assert.ok(observed.has(count+','+space));assert.ok(tuples.every(c=>c.time===0));assert.ok(v.controls.some(c=>c.name==='original initial spacing is 150'&&c.passed));
 const initial=Object.values(expansionSpecs).find(s=>s.type==='moireint4').controls.find(c=>c.key==='space');assert.equal(initial.min,50);assert.equal(initial.initial,150);
 const radial=r.results.find(v=>v.type==='moireint'),phases=radial.cases.filter(c=>c.name==='natural expansion').map(c=>c.time);assert.equal(new Set(phases).size,26);for(let i=0;i<26;i++)assert.ok(phases.includes(i));
 const sectors=r.results.find(v=>v.type==='moire3');for(let d=80;d<=120;d++)assert.ok(sectors.cases.some(c=>c.name==='division '+d&&c.parameters.divisions===d));
 const wavelengths=r.results.find(v=>v.type==='moireint3');for(let w=4;w<=20;w++)assert.ok(wavelengths.cases.some(c=>c.parameters.wavelength===w));
});
test('All 100 original superposition initial tuples include actual controls and natural advancing phases',()=>{
 const r=read('docs/superposition-combinations-runtime-report.json');current(r);assert.equal(r.observedTuples,100);assert.equal(r.expectedTuples,100);assert.deepEqual(r.missingTuples,[]);const v=r.results[0];assert.equal(v.passed,true);assert.equal(v.fullEquivalence,false);assert.deepEqual(v.mismatches,[]);assert.ok(v.controls.every(c=>c.passed));const tuples=new Set(v.tuples.map(c=>c.key));assert.equal(tuples.size,100);
 for(let a=0;a<5;a++)for(let b=0;b<5;b++)for(let c=0;c<2;c++)for(let d=0;d<2;d++)assert.ok(tuples.has([a,b,c,d].join(',')));
 for(const tuple of v.tuples){assert.ok(new Set(tuple.cases.filter(c=>c.name==='natural').map(c=>c.time)).size>=5);assert.ok(tuple.cases.some(c=>c.name==='paused'&&!c.playing));}
});
test('Original moire drag equations keep height dependence, center lock and only the authored lower clamps',()=>{
 assert.equal(moireDrag('moireint2',{tilt:10},[100,75],[160,75]).tilt,10);
 assert.equal(moireDrag('moireint2',{tilt:10},[100,25],[160,25]).tilt,-30);
 assert.equal(moireDrag('moireint2',{tilt:10},[100,125],[160,125]).tilt,30);
 assert.deepEqual(moireDrag('moire2',{dx:0,dy:0},[20,20],[90,80]),{dx:32,dy:18});
 assert.deepEqual(moireDrag('moireint3',{x2:10,y2:170},[100,140],[10,10]),{x2:10,y2:130});
 assert.deepEqual(moireDrag('moireint3',{x2:10,y2:170},[80,150],[480,300]),{x2:410,y2:320});
 assert.deepEqual(moireDrag('moire3',{dx:0,dy:0},[100,75],[450,200]),{dx:350,dy:125});
 assert.equal(moireGeometry('moire2',{},0).lines.length,96);assert.equal(moireGeometry('moire2',{},0).circles.length,23);
 assert.equal(moireGeometry('moireint',{},0).circles[0].r,0);assert.equal(moireGeometry('moireint',{},25).circles[0].r,10);assert.equal(moireGeometry('moireint',{},26).circles[0].r,0);
 assert.notDeepEqual(moireOverlayState(0),moireOverlayState(60));assert.equal(moireLayout('moire2').scale,2.5);
});
test('Moire HTML gesture evidence covers all seven models and three display scales',()=>{
 const r=read('docs/moire-interactions-ui-report.json');current(r);assert.equal(r.passed,true);assert.deepEqual(r.errors,[]);assert.equal(r.results.length,7);
 for(const v of r.results){assert.equal(v.passed,true);assert.deepEqual([...new Set(v.cases.map(c=>c.width))],[320,768,1360]);if(v.type==='moireint4')assert.ok(v.cases.every(c=>c.authoredSliderDomain));else assert.ok(v.cases.every(c=>c.originalWorldCoordinates));}
});
test('Collection coverage never promotes a finite subdomain to full-file equivalence',()=>{
 const r=read('docs/flash-combination-coverage.json'),m=read('src/flash-manifest.json');assert.equal(r.total,518);assert.equal(r.files.length,m.files.length);assert.equal(new Set(r.files.map(c=>c.id)).size,518);assert.equal(r.allFilesFullyCompared,false);assert.equal(r.fullyComparedFiles,0);assert.equal(r.legacySliderCandidates,125);assert.equal(r.finiteScopeChecks.length,4);
 for(const e of r.finiteScopeChecks){assert.equal(e.passed,true);assert.equal(e.complete,true);assert.equal(e.expected,e.observed);assert.ok(e.scope);}
 for(const e of r.files){assert.equal(e.sha256,m.files.find(v=>v.id===e.id).sha256);assert.equal(e.sourceSha256Verified,true);assert.equal(e.fullEquivalence,false);assert.equal(e.finiteDomainsComplete,false);assert.equal(e.allFiniteInputCombinationsCompared,false);assert.equal(e.allEventTransitionsCompared,false);assert.equal(e.continuousInputsProvenEquivalent,false);assert.ok(e.remaining.length);}
});
