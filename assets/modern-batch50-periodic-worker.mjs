import {periodicState} from './modern-batch50-periodic-physics.mjs';
self.onmessage=({data:d})=>{try{self.postMessage({id:d.id,q:periodicState(d.type,d.p)});}catch(e){self.postMessage({id:d.id,error:String(e)});}};
