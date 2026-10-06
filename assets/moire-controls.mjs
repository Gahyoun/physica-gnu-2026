// Coordinates are original model units; browser zoom and viewport size stay outside the model.
export function moireLayout(type){return type==='moire2'?{x:170,y:65,scale:2.5,width:375,height:300}:{x:90,y:65,scale:type==='moire3'?310/220:type==='moire4'?500/360:310/300,width:500,height:310};}
export function moireDrag(type,initial,pressed,current){
 const p={...initial},dx=current[0]-pressed[0],dy=current[1]-pressed[1];
 if(type==='moire2'){p.dx=current[0]-58;p.dy=current[1]-62;}
 else if(type==='moireint2')p.tilt=Math.max(-30,Math.min(30,initial.tilt+(pressed[1]-75)/75*dx));
 else if(type==='moireint'||type==='moireint3'){p.x2=initial.x2+dx;p.y2=initial.y2+dy;if(type==='moireint3'){p.x2=Math.max(10,p.x2);p.y2=Math.max(130,p.y2);}}
 else if(type==='moire3'||type==='moire4'){p.dx=initial.dx+dx;p.dy=initial.dy+dy;}
 return p;
}
