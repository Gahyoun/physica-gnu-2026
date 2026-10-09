import {createKernel} from './optics-batch50b-kernel-6632a04ecc70a480.mjs';
export function createTimeline(){const {Rindex}=createKernel();const data=Rindex.data.map((_,i)=>{const points=[];for(let j=300;j<=800;j+=5){const n=Rindex.getRindex(i,j);if(n>1)points.push({x:j,y:n});}return points;});return {data,materials:Rindex.data,Rindex};}
