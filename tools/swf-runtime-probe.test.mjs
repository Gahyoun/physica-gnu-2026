import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {inspectSWF,instrumentAVM1,instrumentObserver,instrumentAVM2Timeline,parseTrace} from './swf-runtime-probe.mjs';
const file=new URL('../assets/flash/original/phtml/mechanics/oscillation/harmonicosc/springmot1.swf',import.meta.url),bytes=fs.readFileSync(file);
test('Diagnostic observer preserves all original SWF tags and version',()=>{const before=Buffer.from(bytes),old=inspectSWF(bytes),probe=instrumentObserver(bytes,['_root.ball.x',{label:'sample',fn:'myFunction',args:[.5]}]),newer=inspectSWF(probe.bytes);assert.deepEqual(bytes,before);assert.equal(newer.body[3],old.body[3]);assert.deepEqual(newer.stage,old.stage);const originalTags=old.tags.map(t=>old.body.subarray(t.start,t.end));let cursor=0;for(const t of newer.tags){const data=newer.body.subarray(t.start,t.end);if(originalTags[cursor]?.equals(data))cursor++;}assert.equal(cursor,old.tags.length);assert.equal(newer.tags.length,old.tags.length+2);assert.equal(probe.bytes.readUInt32LE(4),probe.bytes.length);});
test('Root frame probes add only DoAction tags',()=>{const a=inspectSWF(bytes),b=instrumentAVM1(bytes,['_root.ball.x']),c=inspectSWF(b.bytes);assert.equal(c.tags.length,a.tags.length+b.probes);assert.equal(c.tags.filter(t=>t.code!==12).length,a.tags.filter(t=>t.code!==12).length);});
test('Runtime trace parsing preserves booleans, zero, missing and nonfinite distinctions',()=>{const x=parseTrace('PHYSICA_RT|x=0|r=true|absent=undefined|blank=|a=Infinity|b=-Infinity|c=NaN');assert.equal(x.x,0);assert.equal(x.r,true);assert.equal(x.absent,null);assert.equal(x.blank,'');assert.equal(x.a,Infinity);assert.equal(x.b,-Infinity);assert.ok(Number.isNaN(x.c));assert.equal(parseTrace('unrelated original message'),null);});
test('Source control geometry includes expected visible spring buttons',()=>{const s=inspectSWF(bytes);assert.ok(s.instances.some(x=>x.character===41&&x.button&&Math.abs(x.x-202.85)<.1));assert.ok(s.instances.some(x=>x.path==='_root.myBall'));});
test('AVM2 observer preserves artwork and refuses to replace existing scripts/classes',()=>{
 const bytes=fs.readFileSync(new URL('../assets/flash/original/phtml/modern/solidstate/semiconductorphysics/holecarrier.swf',import.meta.url));
 const original=Buffer.from(bytes),old=inspectSWF(bytes);
 // Tag preservation can be tested without shipping a private compiled diagnostic ABC.
 const probe=instrumentAVM2Timeline(bytes,Buffer.from([16,0,46,0]));
 const newer=inspectSWF(probe.bytes),tags=old.tags.map(t=>old.body.subarray(t.start,t.end));
 let cursor=0;for(const t of newer.tags)if(tags[cursor]?.equals(newer.body.subarray(t.start,t.end)))cursor++;
 assert.deepEqual(bytes,original);assert.equal(cursor,tags.length);
 assert.equal(newer.body[3],old.body[3]);assert.deepEqual(newer.stage,old.stage);
 assert.throws(()=>instrumentAVM2Timeline(probe.bytes,Buffer.alloc(0)),/must not be replaced/);
 assert.throws(()=>instrumentAVM2Timeline(original.fill(8,3,4),Buffer.alloc(0)),/original SWF >= 9/);
});
