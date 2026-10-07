import {circuitSpecs} from './circuit-specs.mjs';
export {circuitSpecs};
export const circuitDefaults=s=>Object.fromEntries(s.controls.map(c=>[c.key,c.value]));
export function connectionValues(type,p){const values=[p.value1,p.value2,p.value3],v=p.voltage;
 if(type==='resistors'){const series=values.reduce((a,b)=>a+b,0),parallel=1/values.reduce((a,b)=>a+1/b,0);return {series,parallel,seriesCurrent:v/series,parallelCurrent:v/parallel,seriesVoltages:values.map(r=>v*r/series),parallelCurrents:values.map(r=>v/r),seriesPowers:values.map(r=>(v/series)**2*r),parallelPowers:values.map(r=>v*v/r)};}
 const series=1/values.reduce((a,b)=>a+1/b,0),parallel=values.reduce((a,b)=>a+b,0);return {series,parallel,seriesCharge:series*v,parallelCharge:parallel*v,seriesVoltages:values.map(c=>series*v/c),parallelCharges:values.map(c=>c*v)};
}
export const capacitorFrame=(on,steps)=>on?Math.min(20,2+Math.max(0,steps)):1;
export const magneticOrbitState=n=>{const phase=n*Math.PI/180,angle=phase-Math.PI/2,x=Math.cos(angle),y=Math.sin(angle);return {phase,x,y,vx:-y,vy:x,fx:-x,fy:-y};};
export const sourceAmp=current=>({angle:-60+current*12,display:Math.floor(.5+current*10)/10});
export const sourceVolt=voltage=>({angle:-100+voltage*20,display:Math.floor(.5+voltage*10)/10});
export const ohmGraph=(voltage,current)=>({x:385+330*voltage/10,y:5+310*(10-current)/10});
export const makeRandom=seed=>{let n=seed>>>0;const random=()=>{n=(Math.imul(1664525,n)+1013904223)>>>0;return n/4294967296;};random.state=()=>n;return random;};
export function ohmInitial(seed=20261007){const random=makeRandom(seed),particles=Array.from({length:250},()=>({x:300*random(),y:.9*50*(2*random()-1),vx:0,vy:10*(random()-.5)}));return {particles,current:0,measurements:Array(101).fill(0),marked:Array(101).fill(false),counter:0,ticks:0,dataCounter:0,autoCounter:0,auto:false,voltage:5,crosssection:4,step:0,elapsed:0,rate:40,rng:random.state(),collisions:0,totalPassed:0,flashes:[]};}
export function ohmMove(z,voltage,crosssection,random){let {x,y,vx,vy}=z,passed=0,collision=false,reentered=false;
 const restart=()=>{x=.01;vx=0;y=(2*random()-1)*45;vy=10*(random()-.5);reentered=true;};
 if(x>0&&x<300&&Math.abs(y)<50){vx+=5*voltage/50;x+=vx/50;y+=vy/50;const latticeX=Math.round(x/10)*10,latticeY=Math.round(y/10)*10,distance=Math.sqrt((x-latticeX)**2+(y-latticeY)**2);
  if(random()<crosssection*.01&&distance<4&&latticeX>5&&latticeX<295&&Math.abs(latticeY)<45){const kinetic=vx*vx+vy*vy;vx=random()-.5;vy=random()-.5;const norm=vx*vx+vy*vy,scale=Math.sqrt(.8*kinetic/norm);vx*=scale;vy*=scale;collision=true;}
  if(x>=300){passed=1;restart();}
 }else if(y>50){y=100-y;vy*=-1;}else if(y< -50){y=-100-y;vy*=-1;}else restart();
 return {x,y,vx,vy,passed,collision,reentered};
}
export function ohmControl(state,key,value){const q={...state,measurements:state.measurements.slice(),marked:state.marked.slice()};q[key]=value;
 if(key==='voltage'||key==='crosssection'){q.dataCounter=0;q.auto=false;if(key==='crosssection'){q.measurements.fill(0);q.marked.fill(false);}}
 if(key==='auto'&&value){q.voltage=1;q.dataCounter=0;q.rate=50;/* Original autoCounter is deliberately not reset on the button. */}
 return q;
}
export function ohmAdvance(state){const q={...state,measurements:state.measurements.slice(),marked:state.marked.slice()},random=makeRandom(state.rng);q.step++;q.elapsed+=1/q.rate;q.counter++;q.autoCounter++;q.flashes=state.flashes.map(f=>({...f}));
 if(q.auto&&q.autoCounter>2500){if(q.voltage>=10)q.auto=false;else{q.voltage=Number((q.voltage+.1).toFixed(10));q.dataCounter=0;q.autoCounter=0;}}
 q.particles=state.particles.map(z=>{const a=ohmMove(z,q.voltage,q.crosssection,random);q.ticks+=a.passed;q.totalPassed+=a.passed;if(a.collision){q.collisions++;q.flashes.push({x:a.x,y:a.y,alpha:100});}return {x:a.x,y:a.y,vx:a.vx,vy:a.vy};});q.flashes=q.flashes.slice(-20).map(f=>({...f,alpha:f.alpha>2?f.alpha-2:f.alpha}));
 if(q.counter>10){const instant=10.5*q.ticks/q.counter;q.current=q.current*.95+instant*.05;q.counter=0;q.ticks=0;q.dataCounter++;if(q.dataCounter>=50){const i=Math.round(q.voltage*10);q.marked[i]=true;if(q.dataCounter===50)q.measurements[i]=q.current;else if(q.dataCounter<100)q.measurements[i]=q.measurements[i]*.95+q.current*.05;else q.measurements[i]=q.measurements[i]*.98+q.current*.02;}}
 q.rng=random.state();return q;
}
