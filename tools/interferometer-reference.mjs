// Original ActionScript stays private. Only numeric comparisons are published.
import fs from 'node:fs';import vm from 'node:vm';import {sourceFunction} from './scene-source-capture.mjs';
export function interferometerReference(id,type){
 const source=fs.readFileSync((process.env.PHYSICA_FLASH_SCRIPTS||'/private/tmp/physica-all-flash-scripts')+'/'+id+'/scripts/frame_1/DoAction.as','utf8'),commands=[],clip={clear(){commands.length=0;},lineStyle(){},moveTo(...v){commands.push(['M',...v]);},lineTo(...v){commands.push(['L',...v]);},curveTo(...v){commands.push(['Q',...v]);}},ctx={Math,commands};
 if(type==='michelson'){
  Object.assign(ctx,{time:0,toRad:.017453292519943,horizontalShift:0,tilt:0,xHM:100,yHM:200,xObj:-60,yObj:0,distMR:50,isPlaneWave:false,isShowWave:false,myMovieClip:clip,ImageA2:{_x:100,_y:40},ImageB1:{},ImageB2:{},arrow1:{},arrow2:{},ball1:{_x:0,_y:200},ball2:{_x:0,_y:200},MovieClip:function(){},_xscale:0,_yscale:1,_rotation:2,_X:3,_Y:4,setProperty(){}});
  const c=vm.createContext(ctx);c._root=c;const start=source.indexOf('MovieClip.prototype.drawArc = function');const end=source.indexOf('\ntime =',start);vm.runInContext(source.slice(start,end),c);clip.drawArc=c.MovieClip.prototype.drawArc;vm.runInContext(['makeScene','animation','makeFrange','positionArrow'].map(n=>sourceFunction(source,n)).join('\n'),c);
  return {c,commands,set(p){c.horizontalShift=p.shift;c.tilt=p.tilt;c.isPlaneWave=!!p.plane;c.isShowWave=false;c.time=0;c.ball1={_x:0,_y:200};c.ball2={_x:0,_y:200};c.makeScene();},step(){c.animation();},snapshot(){return {time:c.time,ball1:[c.ball1._x,c.ball1._y],ball2:[c.ball2._x,c.ball2._y],imageB1:[c.ImageB1._x,c.ImageB1._y],imageB2:[c.ImageB2._x,c.ImageB2._y],rotationB1:c.ImageB1._rotation,rotationB2:c.ImageB2._rotation};},fronts(){commands.length=0;c.makeFrange();return commands.map(v=>Array.from(v));}};
 }
 Object.assign(ctx,{sec:0,nHigh:2,nLow:1.25,thicknessHigh:30,thicknessLow:48,wavelength:240,wavelengthSlider:{value:100},waveCanvas:clip});const c=vm.createContext(ctx);vm.runInContext(['getN','runthis'].map(n=>sourceFunction(source,n)).join('\n'),c);
 return {c,commands,set(value,step){c.wavelengthSlider.value=value;c.sec=6.2831853/(2.4*value)*100-.1+.1*step;c.runthis();},segments(){const out=[];for(let i=0;i<commands.length;i+=2)out.push([commands[i].slice(1),commands[i+1].slice(1)]);return out;}};
}
