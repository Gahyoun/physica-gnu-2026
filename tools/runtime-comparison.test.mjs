import test from 'node:test';import assert from 'node:assert/strict';import {compareFinite} from './runtime-comparison.mjs';
test('Runtime comparisons reject unreadable values, including equal infinities and numeric strings',()=>{
 for(const value of [undefined,null,NaN,Infinity,-Infinity,'1','',{},[]]){
  assert.equal(compareFinite(1,value,1e-7,1e-7).passed,false);
  assert.equal(compareFinite(value,1,1e-7,1e-7).passed,false);
  assert.equal(compareFinite(value,value,1e-7,1e-7).passed,false);
 }
 assert.equal(compareFinite(1e308,-1e308,0,1e-8).passed,false);
});
test('Runtime comparisons preserve valid zero, absolute pixel bounds and relative numeric bounds',()=>{
 assert.equal(compareFinite(0,0).passed,true);assert.equal(compareFinite(-0,0).passed,true);
 assert.equal(compareFinite(100,100.05,.051).passed,true);assert.equal(compareFinite(100,100.052,.051).passed,false);
 assert.equal(compareFinite(1e6,1e6+.005,0,1e-8).passed,true);assert.equal(compareFinite(1e6,1e6+.02,0,1e-8).passed,false);
});
