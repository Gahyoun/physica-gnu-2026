import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-e1f3b51663ebef1c", "title": "전반사", "source": "http://physica.gnu.ac.kr/phtml/optics/geometric/fiber/totalref3.swf", "sourceFile": "totalref3.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/fiber/totalref3.swf", "originalSHA256": "3a4a753746dc356ea1bbae73851add0794f144710b376a4579f7ec9b97522883", "lesson": "5-2-7-1", "width": 280.0, "height": 250.0, "fps": 20.0, "type": "total", "as3": false, "animated": true, "controls": [{"clip": "relN", "label": "상대 굴절률", "min": 1.2, "max": 3, "step": 0.1, "value": 1.5, "property": "level"}], "checks": [], "buttons": [], "placements": {"relN": {"x": 122.3, "y": 243.3, "depth": 8, "width": 110.89999999999999, "height": 14.85}, "vLine": {"x": -215.5, "y": 110, "depth": 18, "width": 0, "height": 0}, "trueLine": {"x": -142.7, "y": 241.75, "depth": 20, "width": 100, "height": 1.251861572265625}, "targetCaption": {"x": -264.95, "y": -9.55, "depth": 29, "width": null, "height": null}, "point": {"x": 10, "y": 210, "depth": 31, "width": 6, "height": 6}, "line": {"x": -146.7, "y": 279.4, "depth": 35, "width": 100, "height": 0.9749908447265625}}};
export function createTimeline(){

const t=A.createRoot(SPEC);AS2.root=t;t.remakeWave=()=>{};
t.setStatic = function(){
   this.gtime = 0;
   this.isRunning = false;
}.bind(t);
t.positionLine = function(tag, x1, y1, x2, y2){
   var len = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
   var dir = Math.atan2(y1 - y2,x1 - x2);
   AS2.setProperty("line" + tag, _xscale, len);
   AS2.setProperty("line" + tag, _rotation, 180 * dir / 3.1415926);
   AS2.setProperty("line" + tag, _X, (x1 + x2) / 2);
   AS2.setProperty("line" + tag, _Y, (y1 + y2) / 2);
   AS2.setProperty("dot" + tag, _X, x2);
   AS2.setProperty("dot" + tag, _Y, y2);
}.bind(t);
t.init = function(){
   this.tX = this.position.level * 10;
   this.n = this.relN.level;
   this.i = 0;
   while(this.num >= this.i)
   {
      this.positionLine("L" + this.i,-1000,-1000,-1000,-1500);
      this.positionLine("U" + this.i,-1000,-1000,-1000,-1500);
      this.positionLine("X" + this.i,-1000,-1000,-1000,-1500);
      this.i++;
   }
   this.isFind = false;
   this.isFindOK = false;
   this.minRemainLength = 10000;
   this.rayNumber = 0;
   this.gtime = -1;
   this.isRunning = true;
   this.lineUT._alpha = 40;
   this.lineLT._alpha = 40;
   this.n2Str = this.n;
}.bind(t);
t.X = function(xc){
   return xc + 10;
}.bind(t);
t.Y = function(yc){
   return yc + 10;
}.bind(t);
t.calcAllAndMove = function(){
   if(this.gtime == 0)
   {
      this.angC = Math.atan(1 / Math.sqrt(this.n * this.n - 1));
      this.angle = this.rayNumber * this.angC / 20;
      this.temp2 = this.n * Math.sin(this.angle);
      if(this.temp2 < 1)
      {
         this.angleR = Math.atan(this.temp2 / Math.sqrt(1 - this.temp2 * this.temp2));
      }
      this.d1 = 100 / Math.cos(this.angle);
   }
   this.len1 = this.c * this.gtime;
   if(this.len1 < this.d1 * this.n)
   {
      this.positionLine("U" + this.rayNumber,this.X(0),this.Y(200),this.X(this.len1 / this.n * Math.sin(this.angle)),this.Y(200 - this.len1 / this.n * Math.cos(this.angle)));
   }
   else if(this.len1 - this.d1 * this.n < 200)
   {
      this.len2 = this.len1 - this.d1 * this.n;
      this.positionLine("U" + this.rayNumber,this.X(0),this.Y(200),this.X(100 * Math.tan(this.angle)),this.Y(100));
      if(this.rayNumber < 20)
      {
         this.positionLine("X" + this.rayNumber,this.X(100 * Math.tan(this.angle)),this.Y(100),this.X(100 * Math.tan(this.angle) + this.len2 / this.n * Math.sin(this.angle)),this.Y(100 + this.len2 / 2 * Math.cos(this.angle)));
         this.positionLine("L" + this.rayNumber,this.X(100 * Math.tan(this.angle)),this.Y(100),this.X(100 * Math.tan(this.angle) + this.len2 * Math.sin(this.angleR)),this.Y(100 - this.len2 * Math.cos(this.angleR)));
      }
      else if(this.rayNumber == 20)
      {
         this.positionLine("X" + this.rayNumber,this.X(100 * Math.tan(this.angle)),this.Y(100),this.X(100 * Math.tan(this.angle) + this.len2 / this.n * Math.sin(this.angle)),this.Y(100 + this.len2 / 2 * Math.cos(this.angle)));
         this.positionLine("L" + this.rayNumber,this.X(100 * Math.tan(this.angC)),this.Y(100),this.X(100 * Math.tan(this.angC) + this.len2),this.Y(100));
      }
      else
      {
         this.positionLine("L" + this.rayNumber,this.X(100 * Math.tan(this.angle)),this.Y(100),this.X(100 * Math.tan(this.angle) + this.len2 / this.n * Math.sin(this.angle)),this.Y(100 + this.len2 / 2 * Math.cos(this.angle)));
      }
   }
   else
   {
      this.rayNumber++;
      this.gtime = -1;
      if(this.rayNumber >= this.num)
      {
         this.isRunning = false;
         this.positionLine("UT",this.X(0),this.Y(200),this.X(100 * Math.tan(this.angC)),this.Y(100));
         this.positionLine("LT",this.X(100 * Math.tan(this.angC)),this.Y(100),this.X(300),this.Y(100));
         this.lineUT._alpha = 100;
         this.lineLT._alpha = 100;
         this.vLine2._x = this.X(100 * Math.tan(this.angC));
         this.angCStr = "{invalid_utf8=192}{invalid_utf8=211}{invalid_utf8=176}谢 = " + Math.floor(0.5 + this.angC * 180 / 3.1415926 * 100) / 100;
      }
   }
}.bind(t);
(function(){





this.num = 25;
this.tX = 200;
this.c = 40;
this.i = 0;
while(this.num >= this.i)
{
   AS2.duplicateMovieClip(this.line,"lineU" + this.i,16384 + (1500 + this.i));
   AS2.duplicateMovieClip(this.line,"lineL" + this.i,16384 + (2000 + this.i));
   AS2.duplicateMovieClip(this.line,"lineX" + this.i,16384 + (1000 + this.i));
   AS2.setProperty("lineX" + this.i, _alpha, 20);
   this.i++;
}
AS2.duplicateMovieClip(this.trueLine,"lineUT",21384);
AS2.duplicateMovieClip(this.trueLine,"lineLT",21385);
AS2.duplicateMovieClip(this.vLine,"vLine2",21387);
}).call(t);
return t;}
export function originalFrameTick(t){(function(){(function(){if(this.gtime >= 725)
{
   setStatic();
}
if(isRunning)
{
   this.gtime++;
   calcAllAndMove();
}
}).call(t);}).call(t);}
