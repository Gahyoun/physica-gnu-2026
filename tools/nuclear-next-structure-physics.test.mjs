import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {nuclearMatrix,nuclearLattice,nuclearCloud,nuclearRotate,nuclearAutoMatrix,nuclearStructureCSV} from '../assets/nuclear-next-structure-physics.mjs';

test('Nucleus and excited nucleus retain their individual lattice counts, containment and radii',()=>{
 for(const [type,count,bound,radius] of [['nucleus',135,110,19],['excited',87,105,19.5]]){
  const balls=nuclearLattice(type);assert.equal(balls.length,count);
  assert.equal(new Set(balls.map(b=>b.pos.join(','))).size,count);
  assert.ok(balls.every(b=>Math.hypot(...b.pos)<bound&&b.radius===radius));
  assert.ok(balls.some(b=>b.proton)&&balls.some(b=>!b.proton));
 }
});
test('Camera rotations conserve distances and support reversing a manual rotation',()=>{
 const rotation=nuclearRotate(nuclearMatrix,34,-23,10),back=nuclearRotate(rotation,-34,23,-10);
 back.flat().forEach((v,i)=>assert.ok(Math.abs(v-nuclearMatrix.flat()[i])<1e-12));
 for(let i=0;i<3;i++)for(let j=0;j<3;j++)assert.ok(Math.abs(rotation[i].reduce((sum,v,k)=>sum+v*rotation[j][k],0)-(i===j?1:0))<1e-12);
});
test('Seeded poses remain reproducible while jitter and depth evolve with the selected step',()=>{
 const lattice=nuclearLattice('excited'),pose=nuclearAutoMatrix(nuclearMatrix,40),q=nuclearCloud(lattice,'excited',pose,40);
 assert.deepEqual(q,nuclearCloud(lattice,'excited',pose,40));
 assert.notDeepEqual(q,nuclearCloud(lattice,'excited',pose,41));
 assert.ok(q.every(b=>Number.isFinite(b.x)&&Number.isFinite(b.y)&&b.radius>0&&Number.isInteger(b.depth)));
});
test('Projection zoom scales both radius and position about the original camera center',()=>{
 const lattice=nuclearLattice('nucleus'),a=nuclearCloud(lattice,'nucleus',nuclearMatrix,1,1),b=nuclearCloud(lattice,'nucleus',nuclearMatrix,1,1.5);
 a.forEach((q,i)=>{assert.ok(Math.abs(b[i].x-150-1.5*(q.x-150))<1e-10);assert.ok(Math.abs(b[i].y-150-1.5*(q.y-150))<1e-10);assert.ok(Math.abs(b[i].radius-1.5*q.radius)<1e-10);});
});
test('CSV contains exactly the current selected pose, without future time rows',()=>{
 const q=nuclearCloud(nuclearLattice('nucleus'),'nucleus');const rows=nuclearStructureCSV(q,7).trim().split('\n');
 assert.equal(rows.length,136);assert.ok(rows.slice(1).every(row=>row.startsWith('7,')));
});
test('Every fresh nuclear structure has current independent source and responsive UI evidence',()=>{
 for(const kind of ['source','ui']){
  const report=JSON.parse(fs.readFileSync(new URL('../docs/nuclear-next-structure-'+kind+'-report.json',import.meta.url)));
  for(const [file,hash]of Object.entries(report.nativeModelHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL('../'+file,import.meta.url))).digest('hex'),hash,file);
  assert.ok(report.results.every(row=>row.passed));assert.equal(report.results.length,kind==='source'?2:6);
 }
});
