import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-45e0cb978ce7c1c6", "title": "광활성의 물체에서의 편광면의 회전 모양", "source": "http://physica.gnu.ac.kr/phtml/optics/polarization/activity/activity.swf", "sourceFile": "activity.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/polarization/activity/activity.swf", "originalSHA256": "e63e90e3829a131a4cff217e3bf756dc85b49868e3b32b212f0f10de17781216", "lesson": "5-3-6-1", "width": 430.0, "height": 280.0, "fps": 10.0, "type": "activity", "as3": false, "animated": true, "controls": [{"clip": "rotatoryP", "label": "회전능 / °", "min": -100, "max": 100, "step": 1, "value": 60, "property": "level"}], "checks": [], "buttons": [], "placements": {"xCharacter": {"x": 360.95, "y": 45.4, "depth": 9, "width": null, "height": null}, "yCharacter": {"x": 282.25, "y": 146.75, "depth": 11, "width": null, "height": null}, "zCharacter": {"x": -52.45, "y": 309.35, "depth": 13, "width": null, "height": null}}};
export function createTimeline(){

const t=A.createRoot(SPEC);AS2.root=t;t.remakeWave=()=>{};
t.InitMovie = function(){
   this.TransformMatrix = [[1,0,0],[0,1,0],[0,0,1],[0,0,0]];
   this.f = 1000;
   this.moviewidth = 280;
   this.movieheight = 280;
   this.points = 0;
   this.lines = 0;
   this.curves = 0;
   this.surfaces = 0;
   this.arrows = 0;
}.bind(t);
t.InitScene = function(){
   var _loc2_ = this;
   this.make3Dobj("arrow",[[-130,0,0],[- this.depth - 5,0,0]],3,"0xFF0000",80);
   this.make3Dobj("arrow",[[- this.depth,0,0],[this.depth - 5,0,0]],3,"0xFF0000",80);
   this.make3Dobj("arrow",[[this.depth,0,0],[155,0,0]],3,"0xFF0000",80);
   this.make3Dobj("arrow",[[- this.depth,-100,0],[- this.depth,100,0]],2,"0x000000",55);
   this.make3Dobj("arrow",[[- this.depth,5,-100],[- this.depth,0,100]],2,"0x000000",55);
   this.copyObj("xCharacter",[[- this.depth + 10,110,0]],9);
   this.copyObj("yCharacter",[[- this.depth + 5,0,112]],9);
   this.calcVar();
   this.make3Dobj("surface",[[- this.depth,this.x1,this.y1],[- this.depth,this.x2,this.y2],[- this.depth,this.x3,this.y3],[- this.depth,this.x4,this.y4],[- this.depth,this.x5,this.y5],[- this.depth,this.x6,this.y6]],1,"0x000000",40,"0x88BBCC",15);
   this.make3Dobj("surface",[[this.depth,this.x1,this.y1],[this.depth,this.x2,this.y2],[this.depth,this.x3,this.y3],[this.depth,this.x4,this.y4],[this.depth,this.x5,this.y5],[this.depth,this.x6,this.y6]],1,"0x000000",40,"0x88BBCC",15);
   this.make3Dobj("surface",[[this.depth,this.x1,this.y1],[- this.depth,this.x1,this.y1],[- this.depth,this.x2,this.y2],[this.depth,this.x2,this.y2]],1,"0x000000",40,"0x8888FF",20);
   this.make3Dobj("surface",[[this.depth,this.x2,this.y2],[- this.depth,this.x2,this.y2],[- this.depth,this.x3,this.y3],[this.depth,this.x3,this.y3]],1,"0x000000",40,"0x8888FF",20);
   this.make3Dobj("surface",[[this.depth,this.x3,this.y3],[- this.depth,this.x3,this.y3],[- this.depth,this.x4,this.y4],[this.depth,this.x4,this.y4]],1,"0x000000",40,"0x8888FF",20);
   this.make3Dobj("surface",[[this.depth,this.x4,this.y4],[- this.depth,this.x4,this.y4],[- this.depth,this.x5,this.y5],[this.depth,this.x5,this.y5]],1,"0x000000",40,"0x8888FF",20);
   this.make3Dobj("surface",[[this.depth,this.x5,this.y5],[- this.depth,this.x5,this.y5],[- this.depth,this.x6,this.y6],[this.depth,this.x6,this.y6]],1,"0x000000",40,"0x8888FF",20);
   this.make3Dobj("surface",[[this.depth,this.x6,this.y6],[- this.depth,this.x6,this.y6],[- this.depth,this.x1,this.y1],[this.depth,this.x1,this.y1]],1,"0x000000",40,"0x8888FF",20);
   var _loc1_ = 0;
   while(_loc1_ < 360)
   {
      this.make3Dobj("arrow",[[-130,0,0],[-130,60 * Math.cos(_loc1_ * this.toRad),60 * Math.sin(_loc1_ * this.toRad)]],3,"0x006600",95);
      _loc1_ += 180;
   }
   _loc1_ = 0;
   while(_loc1_ < 60)
   {
      if(_loc1_ == 0)
      {
         this.make3Dobj("line",[[0,0,0],[0,100,0]],3,"0x006600",100);
      }
      else if(_loc1_ < 50)
      {
         this.make3Dobj("line",[[0,0,0],[0,100,0]],1,"0x006600",90);
      }
      else if(_loc1_ == 50)
      {
         this.make3Dobj("line",[[0,0,0],[0,100,0]],3,"0x0077BB",100);
      }
      else
      {
         this.make3Dobj("line",[[0,0,0],[0,100,0]],1,"0x0077BB",90);
      }
      _loc1_ = _loc1_ + 1;
   }
   this.outPutTag1 = "arrow_" + _loc2_.arrows;
   this.make3Dobj("arrow",[[0,0,0],[0,0,100]],3,"0x0077BB",100);
   this.outPutTag2 = "arrow_" + _loc2_.arrows;
   this.make3Dobj("arrow",[[0,0,0],[0,0,100]],3,"0x0077BB",100);
   _loc2_.createEmptyMovieClip("d2Graphic",1000);
}.bind(t);
t.calcVar = function(){
   var _loc3_ = (this.crystalRotAngle + 30) * this.toRad;
   var _loc2_ = (this.crystalRotAngle + 90) * this.toRad;
   var _loc1_ = (this.crystalRotAngle + 150) * this.toRad;
   var in4 = (this.crystalRotAngle + 210) * this.toRad;
   var in5 = (this.crystalRotAngle + 270) * this.toRad;
   var in6 = (this.crystalRotAngle + 330) * this.toRad;
   this.x1 = this.radius * Math.cos(_loc3_);
   this.y1 = this.radius * Math.sin(_loc3_);
   this.x2 = this.radius * Math.cos(_loc2_);
   this.y2 = this.radius * Math.sin(_loc2_);
   this.x3 = this.radius * Math.cos(_loc1_);
   this.y3 = this.radius * Math.sin(_loc1_);
   this.x4 = this.radius * Math.cos(in4);
   this.y4 = this.radius * Math.sin(in4);
   this.x5 = this.radius * Math.cos(in5);
   this.y5 = this.radius * Math.sin(in5);
   this.x6 = this.radius * Math.cos(in6);
   this.y6 = this.radius * Math.sin(in6);
}.bind(t);
t.changeRotatoryPower = function(sk){
   this.rotatoryPower = - sk;
   this.remakeWave();
   this.RenderScene();
   if(this.rotatoryPower > 0)
   {
      this.rotatoryStr = "좌선성";
      this.rotatoryStr2 = "levorotatory";
   }
   else if(this.rotatoryPower < 0)
   {
      this.rotatoryStr = "우선성";
      this.rotatoryStr2 = "dextrorotatory";
   }
   else
   {
      this.rotatoryStr = "";
      this.rotatoryStr2 = "";
   }
}.bind(t);
t.remakeWave = function(){
   this.index = 0;
   var angle;
   var angleRad;
   var i = 0;
   while(i < 50)
   {
      this.len = 4 * i;
      this.xP = - this.depth + this.len;
      angle = this.rotatoryPower * this.len / 200;
      var waveX = 60 * Math.sin(this.len / 10 - this.time / 10) * Math.cos(angle * this.toRad);
      var waveY = 60 * Math.sin(this.len / 10 - this.time / 10) * Math.sin(angle * this.toRad);
      this.obj = this["line_" + this.index++];
      this.obj.pointarray = [[this.xP,0,0],[this.xP,waveX,waveY]];
      i++;
   }
   angleRad = this.rotatoryPower * this.toRad;
   var i = 0;
   while(i < 10)
   {
      this.len = 300 + 4 * i;
      this.xP = this.depth + 4 * i;
      var waveX = 60 * Math.sin(this.len / 15 - this.time / 10) * Math.cos(angleRad);
      var waveY = 60 * Math.sin(this.len / 15 - this.time / 10) * Math.sin(angleRad);
      this.obj = this["line_" + this.index++];
      this.obj.pointarray = [[this.xP,0,0],[this.xP,waveX,waveY]];
      i++;
   }
   var objOut1 = this[this.outPutTag1];
   var objOut2 = this[this.outPutTag2];
   objOut1.pointarray = [[155,0,0],[155,60 * Math.cos(angleRad),60 * Math.sin(angleRad)]];
   objOut2.pointarray = [[155,0,0],[155,-60 * Math.cos(angleRad),-60 * Math.sin(angleRad)]];
   {
      this.d2Graphic.clear();
      this.d2Graphic.lineStyle(1,0,40);
      this.d2Graphic.beginFill("0x88BBCC",25);
      this.d2Graphic.moveTo(360 + this.y1,140 + this.x1);
      this.d2Graphic.lineTo(360 + this.y2,140 + this.x2);
      this.d2Graphic.lineTo(360 + this.y3,140 + this.x3);
      this.d2Graphic.lineTo(360 + this.y4,140 + this.x4);
      this.d2Graphic.lineTo(360 + this.y5,140 + this.x5);
      this.d2Graphic.lineTo(360 + this.y6,140 + this.x6);
      this.d2Graphic.lineTo(360 + this.y1,140 + this.x1);
      this.d2Graphic.endFill();
      this.d2Graphic.lineStyle(3,26112,100);
      this.d2Graphic.moveTo(360,140);
      this.d2Graphic.lineTo(360,140 - 60 * Math.sin((- this.time) / 10));
      this.d2Graphic.lineStyle(3,30651,100);
      this.d2Graphic.moveTo(360,140);
      this.d2Graphic.lineTo(360 - 60 * Math.sin(20 - this.time / 10) * Math.sin(angleRad),140 - 60 * Math.sin(20 - this.time / 10) * Math.cos(angleRad));
   }
}.bind(t);
t.copyObj = function(objName, pointArray, refSize){
   var _loc2_ = pointArray;
   var _loc3_ = refSize;
   var _loc1_ = 0;
   while(_loc1_ < _loc2_.length)
   {
      AS2.duplicateMovieClip(objName,"point_" + this.points,16384 + (this.points + this.lines + this.curves + this.surfaces + this.arrows));
      this.obj = this["point_" + this.points];
      this.obj.point = _loc2_[_loc1_];
      this.obj.refSize = _loc3_;
      this.points++;
      _loc1_ = _loc1_ + 1;
   }
}.bind(t);
t.make3Dobj = function(objtype, pointarray, lineweight, linecolour, linealpha, fillcolour, fillalpha){
   var _loc2_ = pointarray;
   var _loc3_ = this;
   var _loc1_;
   if(objtype == "line")
   {
      _loc1_ = 1;
      while(_loc1_ < _loc2_.length)
      {
         this.obj = _loc3_.createEmptyMovieClip("line_" + this.lines,this.points + this.lines + this.curves + this.surfaces + this.arrows);
         this.obj.pointarray = [_loc2_[_loc1_ - 1],_loc2_[_loc1_]];
         this.obj.lineweight = lineweight;
         this.obj.linecolour = linecolour;
         this.obj.linealpha = linealpha;
         this.lines++;
         _loc1_ = _loc1_ + 1;
      }
   }
   else
   {
      this.obj = _loc3_.createEmptyMovieClip(objtype + "_" + _loc3_[objtype + "s"],this.points + this.lines + this.curves + this.surfaces + this.arrows);
      this.obj.pointarray = _loc2_;
      this.obj.lineweight = lineweight;
      this.obj.linecolour = linecolour;
      this.obj.linealpha = linealpha;
      this.obj.fillcolour = fillcolour;
      this.obj.fillalpha = fillalpha;
      _loc3_[objtype + "s"]++;
   }
}.bind(t);
t.RenderScene = function(){
   this.i = 0;
   while(this.i <= this.points - 1)
   {
      this.obj = this["point_" + this.i];
      this.point = this.MatrixVectorMultiply(this.TransformMatrix,this.obj.point);
      this.obj._x = this.point[0] / (1 - this.point[2] / this.f) + this.moviewidth / 2;
      this.obj._y = (- this.point[1]) / (1 - this.point[2] / this.f) + this.movieheight / 2;
      this.camdist = Math.sqrt(Math.pow(this.point[0],2) + Math.pow(this.point[1],2) + Math.pow(this.f - this.point[2],2));
      this.obj._xscale = this.f * 10 * this.obj.refSize / this.camdist;
      this.obj._yscale = this.f * 10 * this.obj.refSize / this.camdist;
      this.obj.swapDepths(Math.pow(this.f,3) - Math.floor(this.camdist * 100));
      this.i++;
   }
   this.i = 0;
   while(this.i <= this.lines - 1)
   {
      this.obj = this["line_" + this.i];
      this.obj.clear();
      this.obj.lineStyle(this.obj.lineweight,this.obj.linecolour,this.obj.linealpha);
      this.point1 = this.MatrixVectorMultiply(this.TransformMatrix,this.obj.pointarray[0]);
      this.point2 = this.MatrixVectorMultiply(this.TransformMatrix,this.obj.pointarray[1]);
      this.obj.moveTo(this.point1[0] / (1 - this.point1[2] / this.f) + this.moviewidth / 2,(- this.point1[1]) / (1 - this.point1[2] / this.f) + this.movieheight / 2);
      this.obj.lineTo(this.point2[0] / (1 - this.point2[2] / this.f) + this.moviewidth / 2,(- this.point2[1]) / (1 - this.point2[2] / this.f) + this.movieheight / 2);
      this.camdist = Math.sqrt(Math.pow((this.point1[0] + this.point2[0]) / 2,2) + Math.pow((this.point1[1] + this.point2[1]) / 2,2) + Math.pow(this.f - (this.point1[2] + this.point2[2]) / 2,2));
      this.obj.swapDepths(Math.pow(this.f,3) - Math.floor(this.camdist * 100));
      this.i++;
   }
   this.i = 0;
   var _loc3_;
   var _loc1_;
   var _loc2_;
   while(this.i <= this.arrows - 1)
   {
      this.obj = this["arrow_" + this.i];
      this.obj.clear();
      this.obj.lineStyle(this.obj.lineweight,this.obj.linecolour,this.obj.linealpha);
      this.point1 = this.MatrixVectorMultiply(this.TransformMatrix,this.obj.pointarray[0]);
      this.point2 = this.MatrixVectorMultiply(this.TransformMatrix,this.obj.pointarray[1]);
      this.pt1X = this.point1[0] / (1 - this.point1[2] / this.f) + this.moviewidth / 2;
      this.pt1Y = (- this.point1[1]) / (1 - this.point1[2] / this.f) + this.movieheight / 2;
      this.pt2X = this.point2[0] / (1 - this.point2[2] / this.f) + this.moviewidth / 2;
      this.pt2Y = (- this.point2[1]) / (1 - this.point2[2] / this.f) + this.movieheight / 2;
      this.obj.moveTo(this.pt1X,this.pt1Y);
      this.obj.lineTo(this.pt2X,this.pt2Y);
      this.camdist = Math.sqrt(Math.pow((this.point1[0] + this.point2[0]) / 2,2) + Math.pow((this.point1[1] + this.point2[1]) / 2,2) + Math.pow(this.f - (this.point1[2] + this.point2[2]) / 2,2));
      this.obj.swapDepths(Math.pow(this.f,3) - Math.floor(this.camdist * 100));
      _loc3_ = 0;
      _loc1_ = 0;
      while(_loc1_ < 3)
      {
         _loc3_ += (this.obj.pointarray[0][_loc1_] - this.obj.pointarray[1][_loc1_]) * (this.obj.pointarray[0][_loc1_] - this.obj.pointarray[1][_loc1_]);
         _loc1_ = _loc1_ + 1;
      }
      _loc3_ = Math.sqrt(_loc3_);
      var lengthNow = Math.sqrt((this.pt1X - this.pt2X) * (this.pt1X - this.pt2X) + (this.pt1Y - this.pt2Y) * (this.pt1Y - this.pt2Y));
      var dir = Math.atan2(this.pt2Y - this.pt1Y,this.pt2X - this.pt1X);
      _loc2_ = 15 * lengthNow / _loc3_;
      if(_loc2_ <= lengthNow)
      {
         this.obj.lineTo(this.pt2X + _loc2_ * Math.cos(dir + 2.9),this.pt2Y + _loc2_ * Math.sin(dir + 2.9));
         this.obj.moveTo(this.pt2X,this.pt2Y);
         this.obj.lineTo(this.pt2X + _loc2_ * Math.cos(dir - 2.9),this.pt2Y + _loc2_ * Math.sin(dir - 2.9));
      }
      this.i++;
   }
   this.i = 0;
   while(this.i <= this.curves - 1)
   {
      this.obj = this["curve_" + this.i];
      this.obj.clear();
      this.obj.lineStyle(this.obj.lineweight,this.obj.linecolour,this.obj.linealpha);
      this.point1 = this.MatrixVectorMultiply(this.TransformMatrix,this.obj.pointarray[0]);
      this.point2 = this.MatrixVectorMultiply(this.TransformMatrix,this.obj.pointarray[1]);
      this.point3 = this.MatrixVectorMultiply(this.TransformMatrix,this.obj.pointarray[2]);
      this.obj.moveTo(this.point1[0] / (1 - this.point1[2] / this.f) + this.moviewidth / 2,(- this.point1[1]) / (1 - this.point1[2] / this.f) + this.movieheight / 2);
      this.obj.curveTo(this.point3[0] / (1 - this.point3[2] / this.f) + this.moviewidth / 2,(- this.point3[1]) / (1 - this.point3[2] / this.f) + this.movieheight / 2,this.point2[0] / (1 - this.point2[2] / this.f) + this.moviewidth / 2,(- this.point2[1]) / (1 - this.point2[2] / this.f) + this.movieheight / 2);
      this.camdist = Math.sqrt(Math.pow((this.point1[0] + this.point2[0] + this.point3[0]) / 3,2) + Math.pow((this.point1[1] + this.point2[1] + this.point3[1]) / 3,2) + Math.pow(this.f - (this.point1[2] + this.point2[2] + this.point3[2]) / 3,2));
      this.obj.swapDepths(Math.pow(this.f,3) - Math.floor(this.camdist * 100));
      this.i++;
   }
   this.i = 0;
   while(this.i <= this.surfaces - 1)
   {
      this.obj = this["surface_" + this.i];
      this.obj.clear();
      this.obj.lineStyle(this.obj.lineweight,this.obj.linecolour,this.obj.linealpha);
      this.obj.beginFill(this.obj.fillcolour,this.obj.fillalpha);
      _loc1_ = 0;
      this.xsum = this.ysum = this.zsum = 0;
      while(_loc1_ <= this.obj.pointarray.length)
      {
         if(_loc1_ == 0)
         {
            this.point = this.MatrixVectorMultiply(this.TransformMatrix,this.obj.pointarray[0]);
            this.obj.moveTo(this.point[0] / (1 - this.point[2] / this.f) + this.moviewidth / 2,(- this.point[1]) / (1 - this.point[2] / this.f) + this.movieheight / 2);
            this.xsum += this.point[0];
            this.ysum += this.point[1];
            this.zsum += this.point[2];
         }
         else if(_loc1_ < this.obj.pointarray.length)
         {
            this.point = this.MatrixVectorMultiply(this.TransformMatrix,this.obj.pointarray[_loc1_]);
            this.obj.lineTo(this.point[0] / (1 - this.point[2] / this.f) + this.moviewidth / 2,(- this.point[1]) / (1 - this.point[2] / this.f) + this.movieheight / 2);
            this.xsum += this.point[0];
            this.ysum += this.point[1];
            this.zsum += this.point[2];
         }
         else
         {
            this.point1 = this.MatrixVectorMultiply(this.TransformMatrix,this.obj.pointarray[0]);
            this.obj.lineTo(this.point[0] / (1 - this.point[2] / this.f) + this.moviewidth / 2,(- this.point[1]) / (1 - this.point[2] / this.f) + this.movieheight / 2);
         }
         this.camdist = Math.sqrt(Math.pow(this.xsum / (_loc1_ + 1),2) + Math.pow(this.ysum / (_loc1_ + 1),2) + Math.pow(this.f - this.zsum / (_loc1_ + 1),2));
         this.obj.swapDepths(Math.pow(this.f,3) - Math.floor(this.camdist * 100));
         _loc1_ = _loc1_ + 1;
      }
      this.obj.endFill();
      this.i++;
   }
}.bind(t);
t.SetTransformMatrix = function(x, y, z, M){
   var _loc1_ = z;
   var _loc2_ = y;
   var _loc3_ = x;
   this.vectorLength = Math.sqrt(_loc3_ * _loc3_ + _loc2_ * _loc2_ + _loc1_ * _loc1_);
   if(this.vectorLength > 0.0001)
   {
      _loc3_ /= this.vectorLength;
      _loc2_ /= this.vectorLength;
      _loc1_ /= this.vectorLength;
      this.Theta = this.vectorLength / 500;
      this.cosT = Math.cos(this.Theta);
      this.sinT = Math.sin(this.Theta);
      this.tanT = 1 - this.cosT;
      this.T = [[],[],[]];
      this.T[0][0] = this.tanT * _loc3_ * _loc3_ + this.cosT;
      this.T[0][1] = this.tanT * _loc3_ * _loc2_ - this.sinT * _loc1_;
      this.T[0][2] = this.tanT * _loc3_ * _loc1_ + this.sinT * _loc2_;
      this.T[1][0] = this.tanT * _loc3_ * _loc2_ + this.sinT * _loc1_;
      this.T[1][1] = this.tanT * _loc2_ * _loc2_ + this.cosT;
      this.T[1][2] = this.tanT * _loc2_ * _loc1_ - this.sinT * _loc3_;
      this.T[2][0] = this.tanT * _loc3_ * _loc1_ - this.sinT * _loc2_;
      this.T[2][1] = this.tanT * _loc2_ * _loc1_ + this.sinT * _loc3_;
      this.T[2][2] = this.tanT * _loc1_ * _loc1_ + this.cosT;
      this.TransformMatrix = this.MatrixMatrixMultiply(this.T,M);
   }
}.bind(t);
t.MatrixMatrixMultiply = function(A, B){
   var _loc1_ = B;
   var _loc2_ = A;
   this.C = [[],[],[]];
   this.C[0][0] = _loc2_[0][0] * _loc1_[0][0] + _loc2_[0][1] * _loc1_[1][0] + _loc2_[0][2] * _loc1_[2][0];
   this.C[0][1] = _loc2_[0][0] * _loc1_[0][1] + _loc2_[0][1] * _loc1_[1][1] + _loc2_[0][2] * _loc1_[2][1];
   this.C[0][2] = _loc2_[0][0] * _loc1_[0][2] + _loc2_[0][1] * _loc1_[1][2] + _loc2_[0][2] * _loc1_[2][2];
   this.C[1][0] = _loc2_[1][0] * _loc1_[0][0] + _loc2_[1][1] * _loc1_[1][0] + _loc2_[1][2] * _loc1_[2][0];
   this.C[1][1] = _loc2_[1][0] * _loc1_[0][1] + _loc2_[1][1] * _loc1_[1][1] + _loc2_[1][2] * _loc1_[2][1];
   this.C[1][2] = _loc2_[1][0] * _loc1_[0][2] + _loc2_[1][1] * _loc1_[1][2] + _loc2_[1][2] * _loc1_[2][2];
   this.C[2][0] = _loc2_[2][0] * _loc1_[0][0] + _loc2_[2][1] * _loc1_[1][0] + _loc2_[2][2] * _loc1_[2][0];
   this.C[2][1] = _loc2_[2][0] * _loc1_[0][1] + _loc2_[2][1] * _loc1_[1][1] + _loc2_[2][2] * _loc1_[2][1];
   this.C[2][2] = _loc2_[2][0] * _loc1_[0][2] + _loc2_[2][1] * _loc1_[1][2] + _loc2_[2][2] * _loc1_[2][2];
   return this.C;
}.bind(t);
t.MatrixVectorMultiply = function(A, B){
   var _loc1_ = B;
   var _loc2_ = A;
   this.C = [];
   this.C[0] = _loc2_[0][0] * _loc1_[0] + _loc2_[0][1] * _loc1_[1] + _loc2_[0][2] * _loc1_[2];
   this.C[1] = _loc2_[1][0] * _loc1_[0] + _loc2_[1][1] * _loc1_[1] + _loc2_[1][2] * _loc1_[2];
   this.C[2] = _loc2_[2][0] * _loc1_[0] + _loc2_[2][1] * _loc1_[1] + _loc2_[2][2] * _loc1_[2];
   return this.C;
}.bind(t);
(function(){










this.isPressed = false;
this.time = 0;
this.isRunning = false;
this.radius = 75;
this.depth = 100;
this.toRad = 0.017453292519943;
this.crystalRotAngle = 30;
this.mousePressX = 0;
this.mousePressY = 0;
this.InitMovie();
this.InitScene();
this.remakeWave();
this.SetTransformMatrix(200,-450,0,this.TransformMatrix);
this.RenderScene();
}).call(t);
return t;}
