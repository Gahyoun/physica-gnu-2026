import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {harmonic} from '../assets/flash-native.mjs';
test('Original SWFs preserve their signatures, bytes and SHA-256',()=>{
 const m=JSON.parse(fs.readFileSync(new URL('../src/flash-manifest.json',import.meta.url)));
 const ids=new Set();
 for(const r of m.files){const b=fs.readFileSync(new URL('../'+r.file,import.meta.url));assert.ok(['CWS','FWS','ZWS'].includes(b.subarray(0,3).toString()));assert.equal(b.length,r.bytes);assert.equal(createHash('sha256').update(b).digest('hex'),r.sha256);assert.ok(r.width>0&&r.height>0&&r.frameRate>0);assert.ok(!ids.has(r.id));ids.add(r.id);assert.ok(!r.file.includes('/bomb/'));}
});
test('Harmonic HTML curve matches source samples and analytic derivatives',()=>{
 for(const A of [20,75,100])for(const w of [.1,2,5])for(const phi of [-3.14,0,3.14])for(let i=0;i<=400;i++){
  const t=i/20,p=harmonic(A,w,phi,t);assert.equal(p.x,A*Math.sin(phi+w*t));assert.equal(p.v,A*w*Math.cos(phi+w*t));assert.ok(Math.abs(p.a+w*w*p.x)<1e-9);assert.ok(Math.abs(p.cx*p.cx+p.x*p.x-A*A)<1e-8);assert.ok(Math.abs(p.frequency*p.period-1)<1e-12);
 }
});
