import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-95128c2fde383176", "title": "산란된 빛의 편광 상태", "source": "http://physica.gnu.ac.kr/phtml/optics/polarization/scatterpol/scattering.swf", "sourceFile": "scattering.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/polarization/scatterpol/scattering.swf", "originalSHA256": "4b832b8763353d7c266bd83ac154ed618c5f15cf101e3dd6aed2ee158e8121d4", "lesson": "5-3-3-1", "width": 280.0, "height": 280.0, "fps": 10.0, "type": "scattering", "as3": false, "animated": false, "controls": [], "checks": [], "buttons": [], "placements": {"xCharacter": {"x": -14, "y": 313.35, "depth": 7, "width": null, "height": null}, "yCharacter": {"x": -36.75, "y": 310.7, "depth": 9, "width": null, "height": null}, "zCharacter": {"x": -52.45, "y": 309.35, "depth": 11, "width": null, "height": null}, "ball": {"x": 7.05, "y": 270.45, "depth": 13, "width": 4.960174560546875, "height": 4.960174560546875}, "dipoleosc": {"x": -27.15, "y": 291.75, "depth": 16, "width": null, "height": null}}};
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
   this.make3Dobj("arrow",[[-130,0,0],[0,0,0]],2,"0xFF0000",80);
   this.make3Dobj("arrow",[[0,-100,0],[0,100,0]],2,"0x000000",50);
   this.make3Dobj("arrow",[[0,0,-100],[0,0,100]],2,"0x000000",50);
   this.make3Dobj("arrow",[[0,0,0],[100,0,0]],2,"0x000000",50);
   this.copyObj("xCharacter",[[10,110,0]],9);
   this.copyObj("yCharacter",[[0,0,110]],9);
   this.copyObj("zCharacter",[[110,0,0]],9);
   this.copyObj("dipoleosc",[[0,60,0]],9);
   var _loc2_ = 0;
   while(_loc2_ < 360)
   {
      this.make3Dobj("arrow",[[-130,0,0],[-130,30 * Math.cos(_loc2_ * this.toRad),30 * Math.sin(_loc2_ * this.toRad)]],2,"0x006600",80);
      _loc2_ += 30;
   }
   _loc2_ = 0;
   while(_loc2_ < 20)
   {
      this.copyObj("ball",[[40 * (Math.random() - 0.5),40 * (Math.random() - 0.5),40 * (Math.random() - 0.5)]],10);
      _loc2_ = _loc2_ + 1;
   }
   _loc2_ = 0;
   while(_loc2_ < 360)
   {
      this.make3Dobj("arrow",[[0,0,0],[0,50 * Math.cos(_loc2_ * this.toRad),50 * Math.sin(_loc2_ * this.toRad)]],3,"0xFF00FF",70);
      _loc2_ += 30;
   }
   _loc2_ = 0;
   while(_loc2_ < 360)
   {
      this.make3Dobj("arrow",[[130,0,0],[130,20 * Math.cos(_loc2_ * this.toRad),20 * Math.sin(_loc2_ * this.toRad)]],1,"0x006600",80);
      _loc2_ += 30;
   }
   _loc2_ = 0;
   while(_loc2_ < 360)
   {
      this.make3Dobj("arrow",[[0,130,0],[20 * Math.sin(_loc2_ * this.toRad),130,20 * Math.cos(_loc2_ * this.toRad)]],1,"0x006600",80);
      this.make3Dobj("arrow",[[0,-130,0],[20 * Math.sin(_loc2_ * this.toRad),-130,20 * Math.cos(_loc2_ * this.toRad)]],1,"0x006600",80);
      _loc2_ += 180;
   }
   _loc2_ = 0;
   while(_loc2_ < 360)
   {
      this.make3Dobj("arrow",[[0,0,130],[20 * Math.sin(_loc2_ * this.toRad),20 * Math.cos(_loc2_ * this.toRad),130]],1,"0x006600",80);
      this.make3Dobj("arrow",[[0,0,-130],[20 * Math.sin(_loc2_ * this.toRad),20 * Math.cos(_loc2_ * this.toRad),-130]],1,"0x006600",80);
      _loc2_ += 180;
   }
   var _loc1_ = 0.7071067811865475;
   _loc2_ = 0;
   while(_loc2_ < 360)
   {
      this.make3Dobj("arrow",[[130 * _loc1_,-130 * _loc1_,0],[130 * _loc1_ + 20 * Math.cos(_loc2_ * this.toRad) * _loc1_ * _loc1_,-130 * _loc1_ + 20 * Math.cos(_loc2_ * this.toRad) * _loc1_ * _loc1_,30 * Math.sin(_loc2_ * this.toRad)]],1,"0x006600",80);
      _loc2_ += 30;
   }
   _loc1_ = 0.7071067811865475;
   _loc2_ = 0;
   while(_loc2_ < 360)
   {
      this.make3Dobj("arrow",[[-130 * _loc1_,-130 * _loc1_,0],[-130 * _loc1_ - 20 * Math.cos(_loc2_ * this.toRad) * _loc1_ * _loc1_,-130 * _loc1_ + 20 * Math.cos(_loc2_ * this.toRad) * _loc1_ * _loc1_,30 * Math.sin(_loc2_ * this.toRad)]],1,"0x006600",80);
      _loc2_ += 30;
   }
}.bind(t);
t.drawPolState = function(xPos, yPos, zPos, theta, phi, orientation, partial, thickness, color, alpha){
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
      if(_loc2_ > 0.2 * lengthNow)
      {
         _loc2_ = 0.2 * lengthNow;
      }
      this.obj.lineTo(this.pt2X + _loc2_ * Math.cos(dir + 2.9),this.pt2Y + _loc2_ * Math.sin(dir + 2.9));
      this.obj.moveTo(this.pt2X,this.pt2Y);
      this.obj.lineTo(this.pt2X + _loc2_ * Math.cos(dir - 2.9),this.pt2Y + _loc2_ * Math.sin(dir - 2.9));
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
this.radius = 75;
this.toRad = 0.017453292519943;
this.mousePressX = 0;
this.mousePressY = 0;
this.InitMovie();
this.InitScene();
this.remakeWave();
this.SetTransformMatrix(50,-150,0,this.TransformMatrix);
this.RenderScene();
}).call(t);
return t;}
