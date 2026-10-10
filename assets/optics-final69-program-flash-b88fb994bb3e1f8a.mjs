import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-b88fb994bb3e1f8a", "title": "복굴절 물질을 통과하는 빛", "source": "http://physica.gnu.ac.kr/phtml/optics/polarization/birefringence/disample.swf", "sourceFile": "disample.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/polarization/birefringence/disample.swf", "originalSHA256": "9244a27f518036b7364fe968ad3f7ef67f971bf50eae288ae382406c69563e3a", "lesson": "5-3-4-1", "width": 360.0, "height": 300.0, "fps": 12.0, "type": "birefringence", "as3": false, "animated": false, "controls": [], "checks": [], "buttons": [], "placements": {"arrowGreen": {"x": -57.4, "y": 419.8, "depth": 2, "width": 100, "height": 14}, "arrowBlue": {"x": -47.4, "y": 429.8, "depth": 6, "width": 100, "height": 14}, "eray": {"x": -47.95, "y": 386.75, "depth": 8, "width": null, "height": null}, "oray": {"x": -45, "y": 366.95, "depth": 10, "width": null, "height": null}}};
export function createTimeline(){

const t=A.createRoot(SPEC);AS2.root=t;t.remakeWave=()=>{};
t.InitMovie = function(){
   this.TransformMatrix = [[1,0,0],[0,1,0],[0,0,1]];
   this.f = 800;
   this.moviewidth = 360;
   this.movieheight = 300;
   this.pointObjs = 0;
   this.directionalObjs = 0;
   this.lines = 0;
   this.curves = 0;
   this.surfaces = 0;
   this.arrows = 0;
   this.ellipses = 0;
   this.ellipseSegments = 0;
}.bind(t);
t.InitScene = function(){
   var _loc1_ = 50;
   var _loc9_ = 100;
   var _loc7_ = 75;
   var _loc8_ = -100;
   var _loc13_ = 75;
   var _loc14_ = -100;
   var _loc11_ = -75;
   var _loc12_ = 100;
   var _loc10_ = -75;
   this.make3Dobj("surface",[[- _loc1_,_loc9_,_loc7_],[- _loc1_,_loc8_,_loc13_],[- _loc1_,_loc14_,_loc11_],[- _loc1_,_loc12_,_loc10_]],1,"0x000000",40,"0x8888FF",10);
   this.make3Dobj("surface",[[_loc1_,_loc9_,_loc7_],[_loc1_,_loc8_,_loc13_],[_loc1_,_loc14_,_loc11_],[_loc1_,_loc12_,_loc10_]],1,"0x000000",40,"0x8888FF",10);
   this.make3Dobj("surface",[[_loc1_,_loc9_,_loc7_],[- _loc1_,_loc9_,_loc7_],[- _loc1_,_loc8_,_loc13_],[_loc1_,_loc8_,_loc13_]],1,"0x000000",40,"0x8888FF",10);
   this.make3Dobj("surface",[[_loc1_,_loc14_,_loc11_],[- _loc1_,_loc14_,_loc11_],[- _loc1_,_loc12_,_loc10_],[_loc1_,_loc12_,_loc10_]],1,"0x000000",40,"0x8888FF",10);
   this.make3Dobj("surface",[[_loc1_,_loc9_,_loc7_],[- _loc1_,_loc9_,_loc7_],[- _loc1_,_loc12_,_loc10_],[_loc1_,_loc12_,_loc10_]],1,"0x000000",40,"0x8888FF",10);
   this.make3Dobj("surface",[[_loc1_,_loc8_,_loc13_],[- _loc1_,_loc8_,_loc13_],[- _loc1_,_loc14_,_loc11_],[_loc1_,_loc14_,_loc11_]],1,"0x000000",40,"0x8888FF",10);
   var _loc3_ = 0.17453292519943295;
   var _loc6_ = 0;
   var _loc5_;
   var _loc4_ = 0;
   var _loc2_;
   while(_loc4_ < 36)
   {
      _loc2_ = -180 + 10 * _loc4_;
      this.copyDirectionalObj("arrowBlue",[[_loc2_,0,-25],[_loc2_,0,25]]);
      if(_loc2_ < - _loc1_)
      {
         this.copyDirectionalObj("arrowGreen",[[_loc2_,-25,0],[_loc2_,25,0]]);
      }
      else if(- _loc1_ + (_loc2_ + _loc1_) * Math.cos(_loc3_) < _loc1_)
      {
         this.copyDirectionalObj("arrowGreen",[[- _loc1_ + (_loc2_ + _loc1_) * Math.cos(_loc3_) + 25 * Math.sin(_loc3_),(_loc2_ + _loc1_) * Math.sin(_loc3_) - 25 * Math.cos(_loc3_),0],[- _loc1_ + (_loc2_ + _loc1_) * Math.cos(_loc3_) - 25 * Math.sin(_loc3_),(_loc2_ + _loc1_) * Math.sin(_loc3_) + 25 * Math.cos(_loc3_),0]]);
         _loc6_ = _loc4_;
      }
      else
      {
         _loc5_ = 2 * _loc1_ * Math.tan(_loc3_);
         this.copyDirectionalObj("arrowGreen",[[_loc1_ + (_loc4_ - _loc6_) * 10,_loc5_ - 25,0],[_loc1_ + (_loc4_ - _loc6_) * 10,_loc5_ + 25,0]]);
      }
      _loc4_ = _loc4_ + 1;
   }
   this.make3Dobj("line",[[-180,0,0],[180,0,0]],2,"0xCC0033",80);
   this.make3Dobj("line",[[- _loc1_,0,0],[_loc1_,_loc5_,0],[180,_loc5_,0]],2,"0xCC3300",80);
   this.copyPointObj("oray",[[150,-10,0]],10);
   this.copyPointObj("eray",[[150,_loc5_ + 15,10]],10);
   this.make3Dobj("line",[[- _loc1_,50,0],[_loc1_,-100,0]],1,"0xCC00CC",50);
   this.make3Dobj("line",[[- _loc1_,60,0],[_loc1_,-90,0]],1,"0xCC00CC",50);
   this.make3Dobj("line",[[- _loc1_,70,0],[_loc1_,-80,0]],1,"0xCC00CC",50);
   this.make3Dobj("line",[[- _loc1_,80,0],[_loc1_,-70,0]],1,"0xCC00CC",50);
   this.make3Dobj("line",[[- _loc1_,90,0],[_loc1_,-60,0]],1,"0xCC00CC",50);
   this.make3Dobj("line",[[- _loc1_,100,0],[_loc1_,-50,0]],1,"0xCC00CC",50);
   this.RenderScene();
}.bind(t);
t.copyPointObj = function(objName, pointArray, refSize){
   var _loc2_ = 0;
   while(_loc2_ < pointArray.length)
   {
      AS2.duplicateMovieClip(objName,"pointObj_" + this.pointObjs,16384 + (this.pointObjs + this.directionalObjs + this.lines + this.curves + this.surfaces + this.arrows + this.ellipseSegments));
      this.obj = this["pointObj_" + this.pointObjs];
      this.obj.point = pointArray[_loc2_];
      this.obj.refSize = refSize;
      this.pointObjs++;
      _loc2_ = _loc2_ + 1;
   }
}.bind(t);
t.copyDirectionalObj = function(objName, pointArray){
   AS2.duplicateMovieClip(objName,"directionalObj_" + this.directionalObjs,16384 + (this.pointObjs + this.directionalObjs + this.lines + this.curves + this.surfaces + this.arrows + this.ellipseSegments));
   this.obj = this["directionalObj_" + this.directionalObjs];
   this.obj.pointArray = pointArray;
   this.directionalObjs++;
}.bind(t);
t.make3Dobj = function(objtype, pointArray, lineWeight, lineColor, lineAlpha, fillColor, fillAlpha){
   var _loc2_;
   if(objtype == "line")
   {
      _loc2_ = 1;
      while(_loc2_ < pointArray.length)
      {
         this.obj = this.createEmptyMovieClip("line_" + this.lines,this.pointObjs + this.directionalObjs + this.lines + this.curves + this.surfaces + this.arrows + this.ellipseSegments);
         this.obj.pointArray = [pointArray[_loc2_ - 1],pointArray[_loc2_]];
         this.obj.lineWeight = lineWeight;
         this.obj.lineColor = lineColor;
         this.obj.lineAlpha = lineAlpha;
         this.lines++;
         _loc2_ = _loc2_ + 1;
      }
   }
   else if(objtype == "ellipse")
   {
      _loc2_ = 0;
      while(_loc2_ < ellipseSegment)
      {
         if(_loc2_ == 0)
         {
            this.obj = this.createEmptyMovieClip("ellipse_" + this.ellipses,this.pointObjs + this.directionalObjs + this.lines + this.curves + this.surfaces + this.arrows + this.ellipseSegments);
            this.obj.pointArray = pointArray;
            this.obj.lineWeight = lineWeight;
            this.obj.lineColor = lineColor;
            this.obj.lineAlpha = lineAlpha;
            this.obj.fillColor = fillColor;
            this.obj.fillAlpha = fillAlpha;
         }
         else
         {
            this.obj = this.createEmptyMovieClip("ellipse_" + this.ellipses + "_" + _loc2_,this.pointObjs + this.directionalObjs + this.lines + this.curves + this.surfaces + this.arrows + this.ellipseSegments);
         }
         this.ellipseSegments++;
         _loc2_ = _loc2_ + 1;
      }
      this.ellipses++;
   }
   else
   {
      this.obj = this.createEmptyMovieClip(objtype + "_" + this[objtype + "s"],this.pointObjs + this.directionalObjs + this.lines + this.curves + this.surfaces + this.arrows + this.ellipseSegments);
      this.obj.pointArray = pointArray;
      this.obj.lineWeight = lineWeight;
      this.obj.lineColor = lineColor;
      this.obj.lineAlpha = lineAlpha;
      this.obj.fillColor = fillColor;
      this.obj.fillAlpha = fillAlpha;
      this[objtype + "s"]++;
   }
}.bind(t);
t.RenderScene = function(){
   var _loc3_ = 0;
   var _loc2_;
   while(_loc3_ <= this.pointObjs - 1)
   {
      _loc2_ = this["pointObj_" + _loc3_];
      this.point = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.point);
      _loc2_._x = this.point[0] / (1 - this.point[2] / this.f) + this.moviewidth / 2;
      _loc2_._y = (- this.point[1]) / (1 - this.point[2] / this.f) + this.movieheight / 2;
      camdist = Math.sqrt(Math.pow(this.point[0],2) + Math.pow(this.point[1],2) + Math.pow(this.f - this.point[2],2));
      _loc2_._xscale = this.f * 10 * _loc2_.refSize / camdist;
      _loc2_._yscale = this.f * 10 * _loc2_.refSize / camdist;
      _loc2_.swapDepths(Math.pow(this.f,3) - Math.floor(camdist * 100));
      _loc3_ = _loc3_ + 1;
   }
   _loc3_ = 0;
   var _loc21_;
   var _loc20_;
   var _loc18_;
   var _loc19_;
   var _loc24_;
   var _loc22_;
   while(_loc3_ <= this.directionalObjs - 1)
   {
      _loc2_ = this["directionalObj_" + _loc3_];
      this.point1 = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[0]);
      this.point2 = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[1]);
      _loc21_ = this.point1[0] / (1 - this.point1[2] / this.f) + this.moviewidth / 2;
      _loc20_ = (- this.point1[1]) / (1 - this.point1[2] / this.f) + this.movieheight / 2;
      _loc18_ = this.point2[0] / (1 - this.point2[2] / this.f) + this.moviewidth / 2;
      _loc19_ = (- this.point2[1]) / (1 - this.point2[2] / this.f) + this.movieheight / 2;
      var camdist = Math.sqrt(Math.pow((this.point1[0] + this.point2[0]) / 2,2) + Math.pow((this.point1[1] + this.point2[1]) / 2,2) + Math.pow(this.f - (this.point1[2] + this.point2[2]) / 2,2));
      _loc24_ = Math.sqrt((_loc21_ - _loc18_) * (_loc21_ - _loc18_) + (_loc20_ - _loc19_) * (_loc20_ - _loc19_));
      _loc22_ = Math.atan2(_loc19_ - _loc20_,_loc18_ - _loc21_);
      _loc2_._xscale = _loc24_;
      _loc2_._yscale = this.f * 100 / camdist;
      _loc2_._rotation = 180 * _loc22_ / 3.141592653589793;
      _loc2_._x = (_loc21_ + _loc18_) / 2;
      _loc2_._y = (_loc20_ + _loc19_) / 2;
      _loc2_.swapDepths(Math.pow(this.f,3) - Math.floor(camdist * 100));
      _loc3_ = _loc3_ + 1;
   }
   _loc3_ = 0;
   while(_loc3_ <= this.lines - 1)
   {
      _loc2_ = this["line_" + _loc3_];
      _loc2_.clear();
      _loc2_.lineStyle(_loc2_.lineWeight,_loc2_.lineColor,_loc2_.lineAlpha);
      this.point1 = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[0]);
      this.point2 = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[1]);
      _loc2_.moveTo(this.point1[0] / (1 - this.point1[2] / this.f) + this.moviewidth / 2,(- this.point1[1]) / (1 - this.point1[2] / this.f) + this.movieheight / 2);
      _loc2_.lineTo(this.point2[0] / (1 - this.point2[2] / this.f) + this.moviewidth / 2,(- this.point2[1]) / (1 - this.point2[2] / this.f) + this.movieheight / 2);
      var camdist = Math.sqrt(Math.pow((this.point1[0] + this.point2[0]) / 2,2) + Math.pow((this.point1[1] + this.point2[1]) / 2,2) + Math.pow(this.f - (this.point1[2] + this.point2[2]) / 2,2));
      _loc2_.swapDepths(Math.pow(this.f,3) - Math.floor(camdist * 100));
      _loc3_ = _loc3_ + 1;
   }
   _loc3_ = 0;
   var _loc17_;
   var _loc6_;
   var _loc23_;
   var _loc16_;
   while(_loc3_ <= this.arrows - 1)
   {
      _loc2_ = this["arrow_" + _loc3_];
      _loc2_.clear();
      _loc2_.lineStyle(_loc2_.lineWeight,_loc2_.lineColor,_loc2_.lineAlpha);
      this.point1 = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[0]);
      this.point2 = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[1]);
      this.pt1X = this.point1[0] / (1 - this.point1[2] / this.f) + this.moviewidth / 2;
      this.pt1Y = (- this.point1[1]) / (1 - this.point1[2] / this.f) + this.movieheight / 2;
      this.pt2X = this.point2[0] / (1 - this.point2[2] / this.f) + this.moviewidth / 2;
      this.pt2Y = (- this.point2[1]) / (1 - this.point2[2] / this.f) + this.movieheight / 2;
      _loc2_.moveTo(this.pt1X,this.pt1Y);
      _loc2_.lineTo(this.pt2X,this.pt2Y);
      var camdist = Math.sqrt(Math.pow((this.point1[0] + this.point2[0]) / 2,2) + Math.pow((this.point1[1] + this.point2[1]) / 2,2) + Math.pow(this.f - (this.point1[2] + this.point2[2]) / 2,2));
      _loc2_.swapDepths(Math.pow(this.f,3) - Math.floor(camdist * 100));
      _loc17_ = 0;
      _loc6_ = 0;
      while(_loc6_ < 3)
      {
         _loc17_ += (_loc2_.pointArray[0][_loc6_] - _loc2_.pointArray[1][_loc6_]) * (_loc2_.pointArray[0][_loc6_] - _loc2_.pointArray[1][_loc6_]);
         _loc6_ = _loc6_ + 1;
      }
      _loc17_ = Math.sqrt(_loc17_);
      _loc23_ = Math.sqrt((this.pt1X - this.pt2X) * (this.pt1X - this.pt2X) + (this.pt1Y - this.pt2Y) * (this.pt1Y - this.pt2Y));
      _loc22_ = Math.atan2(this.pt2Y - this.pt1Y,this.pt2X - this.pt1X);
      _loc16_ = 15 * _loc23_ / _loc17_;
      if(_loc16_ <= _loc23_)
      {
         _loc2_.lineTo(this.pt2X + _loc16_ * Math.cos(_loc22_ + 2.9),this.pt2Y + _loc16_ * Math.sin(_loc22_ + 2.9));
         _loc2_.moveTo(this.pt2X,this.pt2Y);
         _loc2_.lineTo(this.pt2X + _loc16_ * Math.cos(_loc22_ - 2.9),this.pt2Y + _loc16_ * Math.sin(_loc22_ - 2.9));
      }
      _loc3_ = _loc3_ + 1;
   }
   _loc3_ = 0;
   while(_loc3_ <= this.curves - 1)
   {
      _loc2_ = this["curve_" + _loc3_];
      _loc2_.clear();
      _loc2_.lineStyle(_loc2_.lineWeight,_loc2_.lineColor,_loc2_.lineAlpha);
      this.point1 = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[0]);
      this.point2 = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[1]);
      this.point3 = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[2]);
      _loc2_.moveTo(this.point1[0] / (1 - this.point1[2] / this.f) + this.moviewidth / 2,(- this.point1[1]) / (1 - this.point1[2] / this.f) + this.movieheight / 2);
      _loc2_.curveTo(this.point3[0] / (1 - this.point3[2] / this.f) + this.moviewidth / 2,(- this.point3[1]) / (1 - this.point3[2] / this.f) + this.movieheight / 2,this.point2[0] / (1 - this.point2[2] / this.f) + this.moviewidth / 2,(- this.point2[1]) / (1 - this.point2[2] / this.f) + this.movieheight / 2);
      var camdist = Math.sqrt(Math.pow((this.point1[0] + this.point2[0] + this.point3[0]) / 3,2) + Math.pow((this.point1[1] + this.point2[1] + this.point3[1]) / 3,2) + Math.pow(this.f - (this.point1[2] + this.point2[2] + this.point3[2]) / 3,2));
      _loc2_.swapDepths(Math.pow(this.f,3) - Math.floor(camdist * 100));
      _loc3_ = _loc3_ + 1;
   }
   _loc3_ = 0;
   while(_loc3_ <= this.surfaces - 1)
   {
      _loc2_ = this["surface_" + _loc3_];
      _loc2_.clear();
      _loc2_.lineStyle(_loc2_.lineWeight,_loc2_.lineColor,_loc2_.lineAlpha);
      _loc2_.beginFill(_loc2_.fillColor,_loc2_.fillAlpha);
      _loc6_ = 0;
      this.xsum = this.ysum = this.zsum = 0;
      while(_loc6_ <= _loc2_.pointArray.length)
      {
         if(_loc6_ == 0)
         {
            this.point = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[0]);
            _loc2_.moveTo(this.point[0] / (1 - this.point[2] / this.f) + this.moviewidth / 2,(- this.point[1]) / (1 - this.point[2] / this.f) + this.movieheight / 2);
            this.xsum += this.point[0];
            this.ysum += this.point[1];
            this.zsum += this.point[2];
         }
         else if(_loc6_ < _loc2_.pointArray.length)
         {
            this.point = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[_loc6_]);
            _loc2_.lineTo(this.point[0] / (1 - this.point[2] / this.f) + this.moviewidth / 2,(- this.point[1]) / (1 - this.point[2] / this.f) + this.movieheight / 2);
            this.xsum += this.point[0];
            this.ysum += this.point[1];
            this.zsum += this.point[2];
         }
         else
         {
            this.point1 = this.MatrixVectorMultiply(this.TransformMatrix,_loc2_.pointArray[0]);
            _loc2_.lineTo(this.point[0] / (1 - this.point[2] / this.f) + this.moviewidth / 2,(- this.point[1]) / (1 - this.point[2] / this.f) + this.movieheight / 2);
         }
         var camdist = Math.sqrt(Math.pow(this.xsum / (_loc6_ + 1),2) + Math.pow(this.ysum / (_loc6_ + 1),2) + Math.pow(this.f - this.zsum / (_loc6_ + 1),2));
         _loc2_.swapDepths(Math.pow(this.f,3) - Math.floor(camdist * 100));
         _loc6_ = _loc6_ + 1;
      }
      _loc2_.endFill();
      _loc3_ = _loc3_ + 1;
   }
   _loc3_ = 0;
   var _loc15_;
   var _loc10_;
   var _loc25_;
   var _loc9_;
   var _loc14_;
   var _loc11_;
   var _loc13_;
   var _loc12_;
   var _loc4_;
   var _loc7_;
   var _loc5_;
   var _loc8_;
   while(_loc3_ <= this.ellipses - 1)
   {
      this.objFirst = this["ellipse_" + _loc3_];
      if(this.objFirst.pointArray[3][2] != 0)
      {
         _loc15_ = true;
      }
      else
      {
         _loc15_ = false;
      }
      _loc10_ = this.objFirst.pointArray[3][0];
      _loc25_ = this.objFirst.pointArray[3][1];
      _loc9_ = (_loc25_ - _loc10_) / ellipseSegment;
      _loc6_ = 0;
      while(_loc6_ < ellipseSegment)
      {
         if(_loc6_ == 0)
         {
            _loc2_ = this["ellipse_" + _loc3_];
         }
         else
         {
            _loc2_ = this["ellipse_" + _loc3_ + "_" + _loc6_];
         }
         _loc2_.clear();
         _loc2_.lineStyle(this.objFirst.lineWeight,this.objFirst.lineColor,this.objFirst.lineAlpha);
         if(_loc15_)
         {
            _loc2_.beginFill(this.objFirst.fillColor,this.objFirst.fillAlpha);
         }
         _loc14_ = _loc10_ + _loc9_ * _loc6_;
         _loc11_ = _loc10_ + _loc9_ * (_loc6_ + 0.5);
         _loc13_ = _loc10_ + _loc9_ * (_loc6_ + 1);
         _loc12_ = 1 / Math.cos(_loc9_ / 2);
         _loc4_ = this.MatrixVectorMultiply(this.TransformMatrix,this.VectorAddition(this.objFirst.pointArray[0],this.VectorAddition(this.ScalarVectorMultiply(Math.cos(_loc14_),this.objFirst.pointArray[1]),this.ScalarVectorMultiply(Math.sin(_loc14_),this.objFirst.pointArray[2]))));
         _loc7_ = this.MatrixVectorMultiply(this.TransformMatrix,this.VectorAddition(this.objFirst.pointArray[0],this.VectorAddition(this.ScalarVectorMultiply(Math.cos(_loc11_) * _loc12_,this.objFirst.pointArray[1]),this.ScalarVectorMultiply(Math.sin(_loc11_) * _loc12_,this.objFirst.pointArray[2]))));
         _loc5_ = this.MatrixVectorMultiply(this.TransformMatrix,this.VectorAddition(this.objFirst.pointArray[0],this.VectorAddition(this.ScalarVectorMultiply(Math.cos(_loc13_),this.objFirst.pointArray[1]),this.ScalarVectorMultiply(Math.sin(_loc13_),this.objFirst.pointArray[2]))));
         _loc2_.moveTo(_loc4_[0] / (1 - _loc4_[2] / this.f) + this.moviewidth / 2,(- _loc4_[1]) / (1 - _loc4_[2] / this.f) + this.movieheight / 2);
         _loc2_.curveTo(_loc7_[0] / (1 - _loc7_[2] / this.f) + this.moviewidth / 2,(- _loc7_[1]) / (1 - _loc7_[2] / this.f) + this.movieheight / 2,_loc5_[0] / (1 - _loc5_[2] / this.f) + this.moviewidth / 2,(- _loc5_[1]) / (1 - _loc5_[2] / this.f) + this.movieheight / 2);
         camdist = Math.sqrt(Math.pow((_loc4_[0] + _loc5_[0] + _loc7_[0]) / 3,2) + Math.pow((_loc4_[1] + _loc5_[1] + _loc7_[1]) / 3,2) + Math.pow(this.f - (_loc4_[2] + _loc5_[2] + _loc7_[2]) / 3,2));
         _loc2_.swapDepths(Math.pow(this.f,3) - Math.floor(camdist * 100));
         if(_loc15_)
         {
            _loc2_.lineStyle(this.objFirst.lineWeight,this.objFirst.lineColor,0);
            _loc8_ = this.MatrixVectorMultiply(this.TransformMatrix,this.objFirst.pointArray[0]);
            _loc2_.lineTo(_loc8_[0] / (1 - _loc4_[2] / this.f) + this.moviewidth / 2,(- _loc8_[1]) / (1 - _loc8_[2] / this.f) + this.movieheight / 2);
            _loc2_.endFill();
         }
         _loc6_ = _loc6_ + 1;
      }
      _loc3_ = _loc3_ + 1;
   }
}.bind(t);
t.SetTransformMatrix = function(x, y, z, M){
   this.vectorLength = Math.sqrt(x * x + y * y + z * z);
   if(this.vectorLength > 0.0001)
   {
      x /= this.vectorLength;
      y /= this.vectorLength;
      z /= this.vectorLength;
      this.Theta = this.vectorLength / 500;
      this.cosT = Math.cos(this.Theta);
      this.sinT = Math.sin(this.Theta);
      this.tanT = 1 - this.cosT;
      this.T = [[],[],[]];
      this.T[0][0] = this.tanT * x * x + this.cosT;
      this.T[0][1] = this.tanT * x * y - this.sinT * z;
      this.T[0][2] = this.tanT * x * z + this.sinT * y;
      this.T[1][0] = this.tanT * x * y + this.sinT * z;
      this.T[1][1] = this.tanT * y * y + this.cosT;
      this.T[1][2] = this.tanT * y * z - this.sinT * x;
      this.T[2][0] = this.tanT * x * z - this.sinT * y;
      this.T[2][1] = this.tanT * y * z + this.sinT * x;
      this.T[2][2] = this.tanT * z * z + this.cosT;
      this.TransformMatrix = this.MatrixMatrixMultiply(this.T,M);
   }
}.bind(t);
t.MatrixMatrixMultiply = function(A, B){
   this.C = [[],[],[]];
   this.C[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] + A[0][2] * B[2][0];
   this.C[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1] + A[0][2] * B[2][1];
   this.C[0][2] = A[0][0] * B[0][2] + A[0][1] * B[1][2] + A[0][2] * B[2][2];
   this.C[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0] + A[1][2] * B[2][0];
   this.C[1][1] = A[1][0] * B[0][1] + A[1][1] * B[1][1] + A[1][2] * B[2][1];
   this.C[1][2] = A[1][0] * B[0][2] + A[1][1] * B[1][2] + A[1][2] * B[2][2];
   this.C[2][0] = A[2][0] * B[0][0] + A[2][1] * B[1][0] + A[2][2] * B[2][0];
   this.C[2][1] = A[2][0] * B[0][1] + A[2][1] * B[1][1] + A[2][2] * B[2][1];
   this.C[2][2] = A[2][0] * B[0][2] + A[2][1] * B[1][2] + A[2][2] * B[2][2];
   return this.C;
}.bind(t);
t.MatrixVectorMultiply = function(A, B){
   this.C = [];
   this.C[0] = A[0][0] * B[0] + A[0][1] * B[1] + A[0][2] * B[2];
   this.C[1] = A[1][0] * B[0] + A[1][1] * B[1] + A[1][2] * B[2];
   this.C[2] = A[2][0] * B[0] + A[2][1] * B[1] + A[2][2] * B[2];
   return this.C;
}.bind(t);
t.VectorAddition = function(A, B){
   this.C = [];
   this.C[0] = A[0] + B[0];
   this.C[1] = A[1] + B[1];
   this.C[2] = A[2] + B[2];
   return this.C;
}.bind(t);
t.ScalarVectorMultiply = function(a, B){
   this.C = [];
   this.C[0] = a * B[0];
   this.C[1] = a * B[1];
   this.C[2] = a * B[2];
   return this.C;
}.bind(t);
(function(){










this.isPressed = false;
this.mousePressX = 0;
this.mousePressY = 0;
this.InitMovie();
this.TransformMatrix = [[0.99,0,-0.1],[-0.03,0.91,-0.4],[0.07,0.42,0.91]];
this.InitScene();
}).call(t);
return t;}
