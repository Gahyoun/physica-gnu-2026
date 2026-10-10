import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {BOX_DEFAULTS,HARMONIC_DEFAULTS,boxBasisList,buildBoxPacket,buildHarmonicPacket,boxSample,boxGrid,boxMarginals,boxIsosurface,isoFraction} from '../assets/legacy-quantum-physics.mjs';
const fixture=JSON.parse(readFileSync(new URL('../docs/legacy-quantum-reference.json',import.meta.url)));
const close=(a,b,rel=2e-10)=>assert.ok(Math.abs(a-b)<=Math.max(1e-11,Math.abs(b)*rel),`${a} ≠ ${b}`);
for(const kind of ['box3d','harmonic3d'])for(const [index,r] of fixture[kind].entries())test(`${kind}: original Java runtime configuration ${index+1}`,()=>{
  const [kx,ky,kz,x0,uncertainty]=r.parameters,model=(kind==='box3d'?buildBoxPacket:buildHarmonicPacket)({kx,ky,kz,x0,uncertainty});
  assert.equal(model.terms.length,r.selected);close(model.initialMax,r.initialMax);
  const first=model.terms[0],offset=kind==='harmonic3d'?1:0;
  assert.deepEqual([first.x-offset,first.y-offset,first.z-offset],r.coefficient0.slice(0,3));close(first.re,r.coefficient0[3]);close(first.im,r.coefficient0[4]);
  for(const row of r.samples){const s=boxSample(model,...row.point);close(s.re,row.re);close(s.im,row.im);}
});
test('source defaults and nonlinear isovalue controls are preserved',()=>{
  assert.deepEqual([BOX_DEFAULTS.kx,BOX_DEFAULTS.ky,BOX_DEFAULTS.x0,BOX_DEFAULTS.uncertainty],[2,0,0,.1]);
  assert.deepEqual([HARMONIC_DEFAULTS.kx,HARMONIC_DEFAULTS.ky,HARMONIC_DEFAULTS.x0,HARMONIC_DEFAULTS.omega],[0,5,.5,50]);
  close(isoFraction(1),.001);close(isoFraction(9),.009);close(isoFraction(28),.1);close(isoFraction(48),.30);close(isoFraction(82),.98);
  assert.equal(boxBasisList().length,829);
});
test('3D tensor solver agrees with direct complex sums and hard walls at both time directions',()=>{
  const m=buildBoxPacket();for(const t of [-.024,0,.016]){const g=boxGrid(m,t,17);for(const [x,y,z] of [[0,8,8],[8,0,8],[8,8,16],[5,11,9]]){const s=boxSample(m,-1+x/8,-1+y/8,-1+z/8,t),k=(x*17+y)*17+z;close(g.re[k],s.re);close(g.im[k],s.im);}close(boxMarginals(m,t,33).mass,1,1e-8);}
});
test('3D motion changes density and isosurface responds to its height',()=>{
  const m=buildBoxPacket({kx:4,ky:3,kz:-2}),a=boxSample(m,.2,.12,-.2,0),b=boxSample(m,.2,.12,-.2,.02);assert.ok(Math.abs(a.density-b.density)>.01);
  const g=boxGrid(m,.01,17),low=boxIsosurface(g,m.initialMax*.1),high=boxIsosurface(g,m.initialMax*.4);assert.ok(low.length>0);assert.ok(high.length>0);assert.notEqual(low.length,high.length);assert.ok(low.every(t=>t.length===3&&t.every(v=>v.position.every(Number.isFinite))));
});

import {buildHydrogenPacket,hydrogenSampleSpherical,hydrogenSphericalGrid,hydrogenCartesianGrid,hydrogenMarginals} from '../assets/legacy-hydrogen-physics.mjs';
const hclose=(a,b)=>assert.ok(Math.abs(a-b)<=Math.max(1e-12,Math.abs(b)*2e-10),`${a} ≠ ${b}`);
for(const [index,r] of fixture.hydrogen3d.entries())test(`hydrogen3d: original Java spherical projection configuration ${index+1}`,()=>{
  const [ky,kz,z0,uncertainty]=r.parameters,m=buildHydrogenPacket({ky,kz,z0,uncertainty});assert.equal(m.basisCount,650);assert.equal(m.terms.length,r.selected);hclose(m.initialMax,r.initialMax);
  const q=m.terms[0];assert.deepEqual([q.n,q.l,q.m],r.coefficient0.slice(0,3));hclose(q.re,r.coefficient0[3]);hclose(q.im,r.coefficient0[4]);for(const row of r.samples){const s=hydrogenSampleSpherical(m,...row.point);hclose(s.re,row.re);hclose(s.im,row.im);}
});
test('hydrogen spherical reconstruction agrees with direct complex sums on its original grid and changes with time',()=>{
  const m=buildHydrogenPacket();for(const t of [-5e-16,0,5e-16]){const g=hydrogenSphericalGrid(m,t);for(const [r,th,ph] of [[60,8,5],[100,15,18],[190,30,33]]){const s=hydrogenSampleSpherical(m,.05+r*49.95/200,.001+th*(Math.PI-.002)/36,ph*2*Math.PI/36,t),i=(r*37+th)*37+ph;hclose(g.re[i],s.re);hclose(g.im[i],s.im);}}
  const a=hydrogenCartesianGrid(m,0,25),b=hydrogenCartesianGrid(m,5e-16,25);assert.ok(a.amplitude.some((v,i)=>Math.abs(v-b.amplitude[i])>1e-4));const marginal=hydrogenMarginals(m,0,33);assert.ok(marginal.mass>.5&&marginal.mass<1.1);assert.ok(marginal.mean.every(Number.isFinite));assert.ok(boxIsosurface(a,.3*m.initialMax).length>0);
});

import {buildKeplerPacket,keplerSampleSpherical,keplerSphericalGrid,keplerCartesianGrid,keplerMarginals} from '../assets/legacy-kepler-physics.mjs';
const kclose=(a,b)=>assert.ok(Math.abs(a-b)<=Math.max(1e-20,Math.abs(b)*2e-10),`${a} ≠ ${b}`);
for(const [index,r] of fixture.kepler3d.entries())test(`kepler3d: actual original Java runtime table configuration ${index+1}`,()=>{
  const [n0,dn]=r.parameters,m=buildKeplerPacket({n0,dn});assert.equal(m.terms.length,r.selected);kclose(m.initialMax,r.initialMax);const q=m.terms[0];assert.deepEqual([q.n,q.l,q.m],r.coefficient0.slice(0,3));kclose(q.re,r.coefficient0[3]);kclose(q.im,r.coefficient0[4]);assert.equal(q.radialN,q.n+Math.ceil(n0+4*dn)-Math.floor(n0-4*dn));
  for(const row of r.samples){const v=keplerSampleSpherical(m,...row.point);kclose(v.re,row.re);kclose(v.im,row.im);}for(const row of r.gridSamples){const [ir,it,ip,time]=row.point,g=keplerSphericalGrid(m,time),k=(ir*11+it)*301+ip;kclose(g.re[k],row.re);kclose(g.im[k],row.im);}
});
test('Kepler displayed field evolves, remains finite and produces sharp isosurfaces in all source-bound cases',()=>{
  for(const r of fixture.kepler3d){const m=buildKeplerPacket({n0:r.parameters[0],dn:r.parameters[1]}),a=keplerCartesianGrid(m,0,33),b=keplerCartesianGrid(m,1e-11,33);assert.ok(a.amplitude.some((v,i)=>Math.abs(v-b.amplitude[i])>1e-8));assert.ok(boxIsosurface(a,.3*m.initialMax).length>0);const d=keplerMarginals(m,0,33);assert.ok(Number.isFinite(d.mass)&&d.mass>0);assert.ok(d.mean.every(Number.isFinite));}
});
