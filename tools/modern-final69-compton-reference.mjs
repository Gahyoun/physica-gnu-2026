// Independent original SWF child placement decoder. No graphics, actions or runtime outputs.
// Unlike the producer's inspectSWF placement parser this walks raw nested tag bytes
// and reads MATRIX fields through a binary string cursor.
export function decodeComptonSprite(sprite, {photonDepth=26,electronDepth=29}={}) {
  const readMatrix=(bytes,offset)=>{
    const bits=Array.from(bytes.subarray(offset),b=>b.toString(2).padStart(8,'0')).join('');let cursor=0;
    const u=n=>{if(!n)return 0;const v=parseInt(bits.slice(cursor,cursor+n),2);cursor+=n;return v;};
    const signed=n=>{const v=u(n);return n&&v>=2**(n-1)?v-2**n:v;};
    let a=1,d=1,e=0,c=0;
    if(u(1)){const n=u(5);a=signed(n)/65536;d=signed(n)/65536;}
    if(u(1)){const n=u(5);e=signed(n)/65536;c=signed(n)/65536;}
    const n=u(5),x=signed(n)/20,y=signed(n)/20;
    return {a,d,c,e,x,y};
  };
  const state=new Map(),frames=[];let at=4;
  while(at<sprite.length){
    const head=sprite.readUInt16LE(at);at+=2;const code=head>>>6;let len=head&63;
    if(len===63){len=sprite.readUInt32LE(at);at+=4;}
    const data=sprite.subarray(at,at+len);at+=len;
    if(code===0)break;
    if(code===1){frames.push({photon:{...state.get(photonDepth)},electron:{...state.get(electronDepth)}});continue;}
    if(code===28){state.delete(data.readUInt16LE(0));continue;}
    if(code===5){state.delete(data.readUInt16LE(2));continue;}
    if(code===4){state.set(data.readUInt16LE(2),readMatrix(data,4));continue;}
    if(![26,70,94].includes(code))continue;
    const f=data[0],extra=code===26?0:data[1],depth=data.readUInt16LE(code===26?1:2);let offset=code===26?3:4;
    if((extra&8)||((extra&16)&&(f&2))){while(data[offset++]);}
    if(f&2)offset+=2;
    if(f&4)state.set(depth,readMatrix(data,offset));
  }
  return frames;
}
