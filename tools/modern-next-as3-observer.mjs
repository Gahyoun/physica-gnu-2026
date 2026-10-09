// Diagnostic memory copies only. The original document class, all original ABC,
// timeline actions, frame rate, version and Timer objects remain byte-for-byte.
import {inspectSWF} from './swf-runtime-probe.mjs';
const tag=(code,data)=>{const b=Buffer.alloc(6);b.writeUInt16LE((code<<6)|63);b.writeUInt32LE(data.length,2);return Buffer.concat([b,data]);};
export function instrumentAS3Observer(bytes,abc,{className='PhysicaAS3ObserverModern',instanceName='__physica_read_only_as3_observer'}={}){
 const s=inspectSWF(bytes);if(s.body[3]<9)throw Error('No SWF version upgrades are permitted');if(!s.tags.some(t=>t.code===82||t.code===72))throw Error('Pilot expects original scripted AS3');
 // Character IDs share a global namespace, including nested sprite definitions.
 const ids=new Set();const defCodes=new Set([2,6,7,10,11,14,20,21,22,32,33,34,35,36,37,39,46,48,60,75,83,84,87,90,91]);
 function collect(ts){for(const t of ts){if(defCodes.has(t.code)&&t.data.length>=2)ids.add(t.data.readUInt16LE(0));if(t.code===39){let o=4;while(o+2<=t.data.length){const h=t.data.readUInt16LE(o);o+=2;let len=h&63;if(len===63){len=t.data.readUInt32LE(o);o+=4;}if(o+len>t.data.length)throw Error('Malformed nested diagnostic input');collect([{code:h>>6,data:t.data.subarray(o,o+len)}]);o+=len;if((h>>6)===0)break;}}}}
 collect(s.tags);if(s.tags.some(t=>(t.code===76&&t.data.includes(Buffer.from(className+'\0')))||([72,82].includes(t.code)&&t.data.includes(Buffer.from(className.split('.').at(-1))))))throw Error('Observer class name collides with original symbols');if(s.rootPlacements.some(p=>p.name===instanceName))throw Error('Observer instance name collides with original placement');
 let id=65530;while(ids.has(id))id--;let depth=65530;while(s.rootPlacements.some(p=>p.depth===depth))depth--;
 const sprite=Buffer.alloc(8);sprite.writeUInt16LE(id);sprite.writeUInt16LE(1,2);sprite.writeUInt16LE(1<<6,4); // ShowFrame, then End.
 const symbol=Buffer.alloc(4);symbol.writeUInt16LE(1);symbol.writeUInt16LE(id,2);
 const place=Buffer.alloc(6);place[0]=0x26;place.writeUInt16LE(depth,1);place.writeUInt16LE(id,3);place[5]=0; // identity matrix
 const injected=[tag(39,sprite),tag(82,Buffer.concat([Buffer.alloc(4),Buffer.from('physica_as3_readonly_observer\0'),abc])),tag(76,Buffer.concat([symbol,Buffer.from(className+'\0')])),tag(26,Buffer.concat([place,Buffer.from(instanceName+'\0')]))];
 const out=[s.body.subarray(0,s.offset)];let added=false;for(const t of s.tags){if(t.code===1&&!added){out.push(...injected);added=true;}out.push(s.body.subarray(t.start,t.end));}if(!added)throw Error('No original ShowFrame');const result=Buffer.concat(out);result.writeUInt32LE(result.length,4);
 return {bytes:result,characterId:id,depth,originalTagCount:s.tags.length,injectedTags:[39,82,76,26],originalDocumentClassPreserved:true,originalABCPreserved:true};
}
