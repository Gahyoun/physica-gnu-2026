// Fresh vector display adapter for the ported original optical calculations.
// It records paths and primitives, never SWF artwork or frame images.
export const int=n=>Number(n)|0,uint=n=>Number(n)>>>0,trace=()=>{};
export const LineScaleMode={NONE:'none',NORMAL:'normal'},GradientType={LINEAR:'linear'};
export class Matrix {createGradientBox(){}}
export const CapsStyle={NONE:'none',ROUND:'round',SQUARE:'square'};
export const MouseEvent={CLICK:'click',MOUSE_DOWN:'down',MOUSE_UP:'up',MOUSE_MOVE:'move'};
export class SliderEvent {static CHANGE='change';constructor(type){this.type=type;}};
export class TimerEvent {static TIMER='timer';constructor(type){this.type=type;}}
export class Rectangle {constructor(x=0,y=0,width=0,height=0){Object.assign(this,{x,y,width,height});}contains(x,y){return x>=this.x&&y>=this.y&&x<this.x+this.width&&y<this.y+this.height;}}
export class Graphics {
 constructor(){this.clear();}
 clear(){this.items=[];this.path=null;this.fill=null;this.stroke={width:1,color:0x43545c,alpha:1};this.cursor=[0,0];}
 lineStyle(width=1,color=0x43545c,alpha=1){this.stroke={width,color,alpha};this.path=null;}
 beginFill(color,alpha=1){this.fill={color,alpha};this.path=null;}
 beginGradientFill(_kind,colors,alphas){this.beginFill(colors[0],alphas[0]);}
 endFill(){this.fill=null;this.path=null;}
 moveTo(x,y){this.cursor=[x,y];this.path=null;}
 start(){if(!this.path){this.path={kind:'path',commands:[['M',...this.cursor]],stroke:{...this.stroke},fill:this.fill?{...this.fill}:null};this.items.push(this.path);}return this.path;}
 lineTo(x,y){this.start().commands.push(['L',x,y]);this.cursor=[x,y];}
 curveTo(cx,cy,x,y){this.start().commands.push(['Q',cx,cy,x,y]);this.cursor=[x,y];}
 drawRect(x,y,width,height){this.items.push({kind:'rect',x,y,width,height,stroke:{...this.stroke},fill:this.fill?{...this.fill}:null});this.path=null;}
 drawCircle(x,y,r){this.items.push({kind:'circle',x,y,r,stroke:{...this.stroke},fill:this.fill?{...this.fill}:null});this.path=null;}
}
export class Sprite {
 constructor(){this.x=0;this.y=0;this.width=700;this.height=400;this.visible=true;this.isChecked=false;this.isON=false;this.value=0;this.selIndex=0;this.labels=[];this.text='';this.graphics=new Graphics();this.children=[];this.listeners=new Map();}
 addChild(c){if(!this.children.includes(c))this.children.push(c);return c;}
 addEventListener(type,fn){if(!this.listeners.has(type))this.listeners.set(type,new Set());this.listeners.get(type).add(fn);}
 removeEventListener(type,fn){this.listeners.get(type)?.delete(fn);}
 dispatchEvent(e){e.target??=this;e.updateAfterEvent??=()=>{};for(const fn of this.listeners.get(e.type)||[])typeof fn==='function'?fn(e):fn[e.type]?.call(AS2.root,e);}
 setTextFormat(){} setCustomColor(){} stop(){} startDrag(){} stopDrag(){} gotoAndStop(){} addFrameScript(){}
}
export class Shape extends Sprite {}
export class TextField extends Sprite {}
export class TextFormat {constructor(...args){this.args=args;}}
export class Point {constructor(x=0,y=0){this.x=x;this.y=y;}}
export class Timer extends Sprite {constructor(delay,repeat=0){super();this.delay=delay;this.repeatCount=repeat;this.running=false;}start(){this.running=true;}reset(){this.running=false;}stop(){this.running=false;}}
export const navigateToURL=()=>{},URLRequest=class {constructor(url){this.url=url;}};
const fmt=n=>Number.isFinite(n)?Number(n.toFixed(4)):0,esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
export function vectorMarkup(graphics,layer='instrument'){
 const color=layer==='wavefront'?'var(--plot-muted)':'var(--plot-action)';
 return graphics.items.map(item=>{
  const stroke=item.stroke?.alpha===0?'none':layer==='axis'||layer==='instrument'?'var(--plot-muted)':color;
  const fill=item.fill?layer==='instrument'?'var(--plot-action)':color:'none';
  const style=`stroke="${stroke}" stroke-width="${fmt(Math.max(.8,item.stroke?.width||1))}" stroke-opacity="${layer==='ray'||layer==='wavefront'?.65:.8}" fill="${fill}" fill-opacity="${layer==='instrument'?.13:.65}" vector-effect="non-scaling-stroke"`;
  if(item.kind==='path')return `<path ${style} d="${item.commands.map(([c,...ns])=>c+ns.map(fmt).join(',')).join(' ')}"/>`;
  if(item.kind==='circle')return `<circle ${style} cx="${fmt(item.x)}" cy="${fmt(item.y)}" r="${fmt(Math.max(0,item.r))}"/>`;
  return `<rect ${style} x="${fmt(item.x)}" y="${fmt(item.y)}" width="${fmt(Math.max(0,item.width))}" height="${fmt(Math.max(0,item.height))}"/>`;
 }).join('');
}
export function timelineSnapshot(t){return {rays:t.wf.ray.map(r=>({x:r.p.x,y:r.p.y,dir:r.p.dir,reflection:r.countReflection,refraction:r.countRefraction,out:r.isOut})),readouts:Object.fromEntries(Object.entries(t).filter(([k,v])=>k.endsWith('Txt')&&v?.text).map(([k,v])=>[k,v.text])),instruments:t.indexField.instrumentArray?.length??null};}
// Display primitives are authored anew. Original mathematical state is kept separate.
export const MovieClip=Sprite,identity=x=>x,getQualifiedClassName=x=>x?.constructor?.name||'';
export class ColorTransform{constructor(...v){this.values=v;}}
Graphics.prototype.drawEllipse=function(x,y,w,h){this.items.push({kind:'ellipse',x,y,w,h,stroke:{...this.stroke},fill:this.fill?{...this.fill}:null});};
Graphics.prototype.drawRoundRect=function(x,y,w,h){this.drawRect(x,y,w,h);};
Object.defineProperty(Sprite.prototype,'numChildren',{get(){return this.children.length;}});
Sprite.prototype.getChildAt=function(i){return this.children[i];};Sprite.prototype.swapChildrenAt=function(i,j){[this.children[i],this.children[j]]=[this.children[j],this.children[i]];};Sprite.prototype.removeChild=function(c){this.children=this.children.filter(x=>x!==c);};
Sprite.prototype.draw=function(){};Sprite.prototype.setColor=function(){};Sprite.prototype.setStyle=function(){};Sprite.prototype.transform={colorTransform:{}};
Sprite.prototype.getNextHighestDepth=function(){return this.children.length+1;};Sprite.prototype.swapDepths=function(d){this.depth=d;};Sprite.prototype.createEmptyMovieClip=function(name){const c=new Sprite();c._name=name;c.parent=this;this[name]=c;this.children.push(c);return c;};
for(const key of ['clear','lineStyle','beginFill','endFill','moveTo','lineTo','curveTo'])Sprite.prototype[key]=function(...a){if(key==='lineStyle'&&a.length>2)a[2]/=100;if(key==='beginFill'&&a.length>1)a[1]/=100;return this.graphics[key](...a);};
for(const [a,b]of Object.entries({_x:'x',_y:'y',_width:'width',_height:'height',_visible:'visible'}))Object.defineProperty(Sprite.prototype,a,{get(){return this[b];},set(v){this[b]=v;}});
Sprite.prototype.getDepth=function(){return this.depth;};Sprite.prototype.removeMovieClip=function(){};
export const _X='_x',_Y='_y',_xscale='_xscale',_rotation='_rotation',_alpha='_alpha',_width='_width',stopDrag=()=>{},startDrag=()=>{};
export const AS2={root:null,lookup(name){return this.root[name.replace(/^_root[.]/,'')];},duplicateMovieClip(source,name,depth){const r=this.root,c=new Sprite();c.sourceGlyph=typeof source==='string'?source:source?.sourceGlyph||source?._name||'';c._name=name;c._xscale=c._yscale=c._alpha=100;c._rotation=0;c.depth=depth;r[name]=c;r.children.push(c);return c;},setProperty(name,key,value){const q=typeof name==='string'?this.lookup(name):name;if(q)q[key]=value;},getProperty(name,key){return this.lookup(name)?.[key];},setInterval(fn,delay){this.root.intervalCallback=fn;this.root.intervalDelay=delay;return 1;},clearInterval(){}};
export function configure(t,s){for(const[k,p]of Object.entries(s.placements)){if(!t[k])t[k]=new Sprite();for(const[x,v]of Object.entries(p))if(v!==null)t[k][x]=v;t[k]._name=k;}for(const c of s.controls){t[c.clip]??=new Sprite();t[c.clip][c.property||'value']=c.value;}for(const c of s.checks){t[c.clip]??=new Sprite();t[c.clip].isChecked=c.value;}for(const b of s.buttons){t[b.clip]??=new Sprite();t[b.clip].isON=b.value??false;}t.spec=s;}
export function createRoot(s){const t=new Sprite();t.spec=s;t._currentframe=1;configure(t,s);t._root=t;t.stage=t;for(const key of ['ball','line','myArrow','arrowRed','plate1','plate2','startBtn','imageCanvas','position'])t[key]??=new Sprite();return t;}

Sprite.prototype.setCustomStyle=function(){};

Sprite.prototype.removeChildAt=function(i){return this.children.splice(i,1)[0];};
