import test from 'node:test';import assert from 'node:assert/strict';
import {captureStructure} from './source-structure-capture.mjs';
test('closed polylines expose every segment to subsequent scene construction',()=>{
 const d=captureStructure(`function InitScene(){make3Dobj('line',[[0,0,0],[4,0,0],[4,4,0],[0,0,0]]);for(var i=0;i<lines;i++){var p=this['line_'+i].pointarray;copyObj('midpoint',[[ (p[0][0]+p[1][0])/2,(p[0][1]+p[1][1])/2,0]],1);}}`);
 assert.equal(d.lines.length,3);assert.deepEqual(d.nodes.map(n=>n.p),[[2,0,0],[4,2,0],[2,2,0]]);
});
test('bond trimming preserves direction and trims both endpoints for each segment',()=>{
 const d=captureStructure(`function InitScene(){make3DobjLine(2,[[0,0,0],[6,8,0],[6,8,10]]);}`);
 assert.deepEqual(d.lines.map(l=>l.pts),[[[1.2,1.6,0],[4.8,6.4,0]],[[6,8,2],[6,8,8]]]);
 assert.throws(()=>captureStructure(`function InitScene(){make3DobjLine(2,[[1,1,1],[1,1,1]]);}`),/Zero-length/);
});
test('legacy case alias retains outline while modern identifiers stay case-sensitive',()=>{
 const code=`function InitScene(){hexaarray=[[0,0,0],[3,0,0],[0,3,0]];for(var i=1;i<hexaArray.length;i++)make3Dobj('line',[hexaArray[i-1],hexaArray[i]]);}`;
 assert.equal(captureStructure(code,{legacyCaseInsensitive:true}).lines.length,2);
 assert.throws(()=>captureStructure(code),/hexaArray is not defined/);
});
