export{generalNextBoundarySpecs}from'./general-next-boundary-specs.mjs';
export const boundaryVelocity=level=>level===31?100:level===32?1000:level;
export function boundaryPulse(x,shape=0){if(shape===3)return x<-200?60*Math.sin(2*Math.PI*(x-300)/100):0;if(!(x<-200&&x>-300))return 0;if(shape===0)return 60*Math.sin(2*Math.PI*(x-300)/100);if(shape===1)return 60*Math.sin(2*Math.PI*(x-300)/200);const a=Math.abs((x+300)/50);return 60*(a>=1?2-a:a);}
export function boundarySample(x,time,v2,shape){const incident=boundaryPulse(x-10*time,shape),reflected=(v2-10)/(v2+10)*boundaryPulse(-x-10*time,shape),transmitted=v2===0?0:2*v2/(10+v2)*boundaryPulse(10/v2*(x-v2*time),shape);return{incident,reflected,transmitted,sum:x<0?incident+reflected:transmitted};}
export function boundaryState(time=0,level=20,shape=0){const v2=boundaryVelocity(level);return{time,level,v2,shape,reflection:(v2-10)/(v2+10),transmission:2*v2/(10+v2),points:Array.from({length:121},(_,i)=>({x:i*5-300,...boundarySample(i*5-300,time,v2,shape)}))};}
export const boundaryCSV=q=>'x,incident,reflected,transmitted,sum\n'+q.points.map(p=>[p.x,p.incident,p.reflected,p.transmitted,p.sum].join(',')).join('\n')+'\n';
