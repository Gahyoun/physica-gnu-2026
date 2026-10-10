import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-a31c6f6c9dcd2fd5", "title": "결정에서 빛의 전파", "source": "http://physica.gnu.ac.kr/phtml/optics/polarization/birefringence/light_crystal.swf", "sourceFile": "light_crystal.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/polarization/birefringence/light_crystal.swf", "originalSHA256": "6e003a47be73400b34e0ff0e25f5aaf10865961472e0dc80ec74efcc42b1527d", "lesson": "5-3-4-1", "width": 660.0, "height": 180.0, "fps": 8.0, "type": "crystal", "as3": false, "animated": true, "controls": [], "checks": [], "buttons": [], "placements": {"myArrow": {"x": -29.5, "y": 444.45, "depth": 56, "width": 100, "height": 15}, "ball": {"x": -40.5, "y": 414.4, "depth": 58, "width": 20.000457763671875, "height": 20.000457763671875}}};
export function createTimeline(){

const t=A.createRoot(SPEC);AS2.root=t;t.remakeWave=()=>{};
t.init = function(){
   this.time = 0;
   var _loc2_ = 0;
   var _loc3_;
   while(_loc2_ < 12)
   {
      AS2.duplicateMovieClip(this.ball,"ball" + _loc2_,16384 + (2000 + _loc2_));
      _loc3_ = this["ball" + _loc2_];
      _loc3_._x = 200 + _loc2_ * 40;
      _loc3_._y = 110;
      _loc2_ = _loc2_ + 1;
   }
   _loc2_ = 1;
   while(_loc2_ < 65)
   {
      AS2.duplicateMovieClip(this.myArrow,"line" + _loc2_,16384 + 3 * _loc2_);
      _loc2_ = _loc2_ + 1;
   }
}.bind(t);
t.runthis = function(){
   this.time += 0.1;
   this.canvas.clear();
   var i = 1;
   while(i < 65)
   {
      var xp = i * 10 - 200;
      var yp;
      if(xp < 0)
      {
         yp = 40 * Math.sin(xp / 40 - this.time * 2.5);
      }
      else
      {
         yp = 50 * Math.sin(xp / 25 - this.time * 2.5);
      }
      this.positionLine(i,200 + xp,90,200 + xp,90 - yp);
      i++;
   }
   var i = 0;
   while(i < 12)
   {
      var xp = i * 40;
      var yp = -20 * Math.sin(xp / 25 - this.time * 2.5);
      this.drawSprings(this.canvas,200 + i * 40,yp);
      var obj = AS2.lookup("ball" + i);
      obj._y = 90 - yp;
      i++;
   }
}.bind(t);
t.drawSprings = function(obj, xp, yp){
   var _loc2_ = 10;
   var _loc1_ = 170;
   obj.lineStyle(1,5570645,100);
   this.drawYSpring(obj,xp,_loc2_,80 - yp);
   this.drawYSpring(obj,xp,_loc1_,-80 - yp);
}.bind(t);
t.positionLine = function(tag, x1, y1, x2, y2){
   var _loc6_ = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
   var _loc7_ = Math.atan2(y2 - y1,x2 - x1);
   AS2.setProperty("line" + tag, _xscale, _loc6_);
   AS2.setProperty("line" + tag, _rotation, 180 * _loc7_ / 3.1415926);
   AS2.setProperty("line" + tag, _X, (x1 + x2) / 2);
   AS2.setProperty("line" + tag, _Y, (y1 + y2) / 2);
}.bind(t);
t.drawYSpring = function(obj, xs, ys, len){
   var turn = 15;
   var radius = 10;
   var fixedLength = 15;
   if(len < 0)
   {
      fixedLength *= -1;
   }
   var factor = 1.414213562373095;
   var byroot2 = 0.7071067811865475;
   var fac2 = radius * factor * byroot2;
   {
      obj.moveTo(xs,ys);
      obj.lineTo(xs,ys + fixedLength);
      var step = (len - fixedLength * 2) / turn;
      var i = 0;
      while(i < turn)
      {
         obj.curveTo(xs - fac2,ys + fixedLength + fac2 / 2 + step * (i - 0.125),xs,ys + fixedLength + radius / 2 + step * i);
         obj.curveTo(xs + fac2,ys + fixedLength + fac2 / 2 + step * (i + 0.125),xs + radius,ys + fixedLength + step * (i + 0.25));
         obj.curveTo(xs + fac2,ys + fixedLength - fac2 / 2 + step * (i + 0.375),xs,ys + fixedLength - radius / 2 + step * (i + 0.5));
         if(i != turn - 1)
         {
            obj.curveTo(xs - fac2,ys + fixedLength - fac2 / 2 + step * (i + 0.625),xs - radius,ys + fixedLength + step * (i + 0.75));
         }
         else
         {
            obj.curveTo(xs - fac2,ys + fixedLength - fac2 / 2 + step * (i + 0.625),xs,ys + len - fixedLength);
         }
         i++;
      }
      obj.lineTo(xs,ys + len);
   }
}.bind(t);
(function(){



this.canvas = this.createEmptyMovieClip("graphic",1000);
this.time = undefined;
this.init();
this.id1 = AS2.setInterval(this.runthis,20);


}).call(t);
return t;}
