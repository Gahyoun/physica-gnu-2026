import {radialState} from './nuclear-batch50b-physics.mjs';
self.onmessage=({data:{token,type,p}})=>{try{self.postMessage({token,q:radialState(type,p)});}catch(e){self.postMessage({token,error:e.message});}};
