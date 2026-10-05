import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import crypto from 'node:crypto';
import {fundamentalSpecs,defaults,initial,step,energy} from '../assets/fundamental-physics.mjs';
const root=process.env.PHYSICA_FLASH_SCRIPTS||'/private/tmp/physica-all-flash-scripts',results=[];
function fn(s,name){const start=s.indexOf('function '+name+'(');assert.ok(start>=0,name);let i=s.indexOf('{',start)+1,d=1;while(d){d+=(s[i]==='{')-(s[i]==='}');i++;}return s.slice(start,i);}
for(const [kind,s]of Object.entries(fundamentalSpecs)){
 const source=fs.readFileSync(root+'/'+s.id+'/scripts/frame_1/DoAction.as','utf8');let comparisons=0,maxAbsoluteError=0;
 const eq=(a,b)=>{assert.ok(Number.isFinite(a)&&Number.isFinite(b),s.type+': nonfinite '+a+','+b);const error=Math.abs(a-b);maxAbsoluteError=Math.max(error,maxAbsoluteError);assert.ok(error<1e-8*Math.max(1,Math.abs(a),Math.abs(b)),s.type+': '+a+' != '+b);comparisons++;};
 const ps=[defaults(s)];for(const ctl of s.controls)for(const v of [ctl.min,ctl.max])ps.push({...defaults(s),[ctl.key]:v});
 for(const p of ps){const params={...s.constants,...p},a0=initial(s,p);let state=a0,props={};const noop=()=>{},v={Math,int:Math.trunc,ball:{drag:0},_X:'x',_Y:'y',_alpha:'alpha',_xscale:'xs',_yscale:'ys',_rotation:'rot',positionLine:noop,positionLine2:noop,positionArrow:noop,drawSpring2:noop,positionBall:noop,drawMarker:noop,springPositionH:noop,springPositionV:noop,plotGraph:noop,timevalue:{},xvalue:{},fvalue:{},lenvalue:{},anglevalue:{},mvalue:{},omegavalue:{},pBx:{},pBy:{},barU:{},barK:{},ballP:{},ballKK:{},ballxC:{},ballyC:{},omegaxC:{},omegayC:{},kxC:{},kyC:{},timeC:{},dampingSlider:{level:p.damping},massSlider:{level:p.mass},slider_w_x:{level:p.wx},slider_w_y:{level:p.wy},getProperty:()=>0,setProperty:(t,k,n)=>{props[t]??={};props[t][k]=n;},sArrow:0,isDrawForce:false,isThrown:true,removed:true,balloldx:0,balloldy:0,markerIndex:0,nump:0,ncalc:params.substeps,n_marker:0,numg:0,xindex:0,yindex:0,ginterval:4,time:0,gtime:0,xc:280,yc:50,dx:.001,dl:.01,len:p.length,angle:a0.angle,m:params.mass,...params};
 if(['spring','vertical'].includes(s.group)){v.ball={x:280+a0.x/.001,xv:a0.v,drag:0,_x:280,_y:50};if(s.group==='vertical'){v.ball={y:150+a0.x/.002,yv:a0.v,drag:0,_x:450};v.dx=.002;v.ballLfixed={_x:450,_y:20};v.width=500;v.nLine=0;v.speed=5;v.oldy=150;v.currentIndex=0;v.logo={_x:100};v.kvalue={};}if(s.type==='oscpoten2'){v.height=220;v.potentialV=x=>params.k*((x-280)/1000)**2/2;}}
 else if(s.group==='pendulum'){v.ball={w:a0.w,drag:0};v.len=p.length;v.angle=p.angle;}
 else if(['rubber','lissajous'].includes(s.group))v.ball={x:a0.x,y:a0.y,vx:0,vy:0,drag:0};
 else if(s.group==='momentum'){v.ball={...a0,drag:0};Object.assign(v,{xLeft:10,xRight:490,yTop:10,yBottom:190});}
 else if(s.group==='kinds')Object.assign(v,{time:0,time3:0,x2:-99,v2:0,g:1,R:14,ball:{},ball2:{},ball3:{}});
 else if(s.group==='collision')Object.assign(v,{time:0,ball2:{_x:25},ball3:{_x:110},arrow1:{},arrow2:{},arrow4:{},arrow5:{}});
 else if(s.group==='ballistic')Object.assign(v,{time:0,bullet:{_x:20,_y:130},wood:{_x:200,_y:130},label:{}});
 else if(s.group==='circular')Object.assign(v,{rc:100,omega:.1745329777777778,xc:130,yc:130,positionBall:(tag,x,y)=>{props['ball'+tag]={x,y};}});
 else if(s.group==='coulomb'){Object.assign(v,{xc:20,k:p.sign,isSameSign:p.sign===1,ball:{x:p.position,xv:0,drag:0},redBall:{},blueBall:{},arrow1:{}});}
 const ctx=vm.createContext(v);ctx._root=ctx;let code=fn(source,'calcAllAndMove');for(const name of s.group==='rubber'?['calcf','calc1rubber']:s.group==='kinds'?['move2']:s.group==='coulomb'?['setStatic']:[])code+='\n'+fn(source,name);vm.runInContext(code,ctx);
 for(let n=1;n<=Math.min(s.end,1000);n++){const previous=state;state=step(s,p,state);ctx.gtime=n;ctx.time=s.group==='kinds'?previous.time+1:n;if(s.group==='kinds')ctx.time3=previous.time3+1;ctx.calcAllAndMove();if(['spring','vertical'].includes(s.group)){eq(state.x,s.group==='vertical'?(ctx.ball.y-150)*.002:(ctx.ball.x-280)*.001);eq(state.v,s.group==='vertical'?ctx.ball.yv:ctx.ball.xv);eq(state.F,ctx.force);if(s.type==='oscpoten2'){const e=energy(s,p,state);eq(e[0],ctx.Uval);eq(e[1],ctx.Kval);eq(e[2],ctx.Eval);}}
 else if(s.group==='pendulum'){eq(state.angle,ctx.angle);eq(state.w,ctx.ball.w);eq(state.F,ctx.force);eq(state.T,ctx.tension);}
 else if(['rubber','lissajous'].includes(s.group)){for(const k of ['x','y','vx','vy'])eq(state[k],ctx.ball[k]);}
 else if(s.group==='momentum'){for(const k of ['x','y','vx','vy'])eq(state[k],ctx.ball[k]);}
 else if(s.group==='circular'){eq(state.x,props.ball2.x-130);eq(state.y,130-props.ball2.y);}
 else if(s.group==='kinds'){// Its time counters cycle independently, unlike gtime.
 eq(state.fall,ctx.ball._y);eq(state.bx,ctx.ball2._x);eq(state.by,ctx.ball2._y);eq(state.shuttle,ctx.ball3._x);eq(state.x,ctx.x2);eq(state.v,ctx.v2);ctx.time=state.time;ctx.time3=state.time3+1;}
 else if(s.group==='collision'){eq(state.x,ctx.ball2._x);eq(state.y,ctx.ball3._x);}
 else if(s.group==='ballistic'){eq(state.x,ctx.bullet._x);eq(state.y,ctx.bullet._y);eq(state.woodX,ctx.wood._x);eq(state.woodY,ctx.wood._y);}
 else if(s.group==='coulomb'){eq(state.x,ctx.ball.x);eq(state.v,ctx.ball.xv);eq(state.F,ctx.force);if(state.stopped)break;}
 }
 }
 const hash=crypto.createHash('sha256').update(fs.readFileSync(new URL('../assets/flash/original/phtml/'+s.source,import.meta.url))).digest('hex');assert.equal(hash,s.sha256);
 results.push({id:s.id,kind,type:s.type,sha256:hash,comparisons,maxAbsoluteError,passed:true,scope:'Source root recurrence / positions at initial controls and each control endpoint, up to 1000 steps. Source controller values inspected; remaster drag and controls tested separately. Graphs share these states. Not Flash runtime exhaustive equivalence.',sourceRuntimeExhaustive:false});console.log(s.type,comparisons,maxAbsoluteError);
}
fs.writeFileSync(new URL('../docs/fundamental-source-report.json',import.meta.url),JSON.stringify({method:'Private original root function versus independently implemented numerical recurrence or scripted positions',files:results.length,comparisons:results.reduce((n,r)=>n+r.comparisons,0),results},null,2)+'\n');
