import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-2c0dad26bfbc41ed", "title": "광고립장치에서 빛이 투과 및 차단되는 상황", "source": "http://physica.gnu.ac.kr/phtml/optics/polarization/emeffect/faradayef.swf", "sourceFile": "faradayef.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/polarization/emeffect/faradayef.swf", "originalSHA256": "81b89cb3cd9a3eca0b924bae78ad5f89ff15e81fe059a2cd404b77fd6a00e9e2", "lesson": "5-3-7-1", "width": 450.0, "height": 350.0, "fps": 12.0, "type": "faraday", "as3": false, "animated": false, "controls": [], "checks": [], "buttons": [], "placements": {"arrowMagenta": {"x": 40, "y": 20.5, "depth": 3, "width": 79.998779296875, "height": 7.9913330078125}, "arrowPol": {"x": 40, "y": 6.8, "depth": 5, "width": 79.998779296875, "height": 5.593719482421875}, "arrowRed": {"x": 40, "y": 34.2, "depth": 7, "width": 79.998779296875, "height": 7.9913330078125}, "faradayStr": {"x": -52.05, "y": 430, "depth": 10, "width": null, "height": null}, "polStr": {"x": -29.65, "y": 414, "depth": 12, "width": null, "height": null}}};
export function createTimeline(){
class DirObject {
constructor(parent, mc, sDir, eDir){
      this.parent = parent;
      this.sDir = sDir;
      this.eDir = eDir;
      this.mcTag = "diro" + Math.floor(Math.random() * 100000);
      AS2.duplicateMovieClip(mc,this.mcTag,16384 + parent.getNextHighestDepth());
      this.originalWidth = 100;
   }
draw(cam){
      var _loc4_ = this.parent[this.mcTag];
      var _loc2_ = cam.GetXY(this.sDir);
      var _loc3_ = cam.GetXY(this.eDir);
      _loc4_.swapDepths(cam.GetDepth(this.sDir.Average2(this.eDir)));
      var _loc6_ = Math.sqrt((_loc2_[0] - _loc3_[0]) * (_loc2_[0] - _loc3_[0]) + (_loc2_[1] - _loc3_[1]) * (_loc2_[1] - _loc3_[1]));
      var _loc8_ = Math.atan2(_loc3_[1] - _loc2_[1],_loc3_[0] - _loc2_[0]);
      var _loc7_ = cam.GetCamDist(this.sDir.Average2(this.eDir));
      _loc4_._xscale = _loc6_ / this.originalWidth * 100;
      _loc4_._yscale = cam.f * cam.magnification * 100 / _loc7_;
      _loc4_._rotation = 180 * _loc8_ / 3.141592653589793;
      _loc4_._x = (_loc2_[0] + _loc3_[0]) / 2;
      _loc4_._y = (_loc2_[1] + _loc3_[1]) / 2;
   }
EulerTransform(phi, the, psi){
      this.sDir = this.sDir.EulerTransform(phi,the,psi);
      this.eDir = this.eDir.EulerTransform(phi,the,psi);
   }
Translation(x_, y_, z_){
      this.sDir = this.sDir.Translation(x_,y_,z_);
      this.eDir = this.eDir.Translation(x_,y_,z_);
   }
Dilation(x_, y_, z_){
      this.sDir = this.sDir.Dilation(x_,y_,z_);
      this.eDir = this.eDir.Dilation(x_,y_,z_);
   }
}
class Cylinder {
NUM_SEGMENT = 8;
constructor(parent, center, xDir, yDir, zDir){
      this.parent = parent;
      this.center = center;
      this.xDir = xDir;
      this.yDir = yDir;
      this.zDir = zDir;
      this.fillColorTB = null;
      this.fillColorS = null;
      this.lineColor = new LineColor(1,8421504,100);
      this.mcTag = "cyl" + Math.floor(Math.random() * 100000);
      var _loc2_ = 1;
      while(_loc2_ <= this.NUM_SEGMENT)
      {
         parent.createEmptyMovieClip(this.mcTag + "T" + _loc2_,parent.getNextHighestDepth());
         parent.createEmptyMovieClip(this.mcTag + "B" + _loc2_,parent.getNextHighestDepth());
         parent.createEmptyMovieClip(this.mcTag + "S" + _loc2_,parent.getNextHighestDepth());
         _loc2_ = _loc2_ + 1;
      }
      parent.createEmptyMovieClip(this.mcTag + "E",parent.getNextHighestDepth());
   }
setColor(lineColor, fillColorTB, fillColorS){
      this.lineColor = lineColor;
      this.fillColorTB = fillColorTB;
      this.fillColorS = fillColorS;
   }
draw(cam){
      var _loc2_;
      var _loc24_ = this.center.Add(this.zDir);
      var _loc27_ = 6.283185307179586 / this.NUM_SEGMENT;
      var _loc17_ = 1 / Math.cos(_loc27_ / 2);
      var _loc16_ = false;
      if(this.fillColorTB != null)
      {
         _loc16_ = true;
      }
      var _loc31_ = false;
      if(this.fillColorS != null)
      {
         _loc31_ = true;
      }
      var _loc26_ = 0;
      var _loc12_ = this.findEdge(cam);
      _loc2_ = this.parent[this.mcTag + "E"];
      _loc2_.clear();
      var _loc4_;
      var _loc19_;
      var _loc18_;
      var _loc20_;
      var _loc23_;
      if(_loc12_[0] != undefined)
      {
         _loc2_.lineStyle(this.lineColor.lineThickness,this.lineColor.lineColor,this.lineColor.alpha);
         _loc4_ = 0;
         while(_loc4_ < 2)
         {
            if(_loc12_[_loc4_] != NaN)
            {
               _loc19_ = this.center.Add(this.xDir.Mul(Math.cos(_loc12_[_loc4_]))).Add(this.yDir.Mul(Math.sin(_loc12_[_loc4_])));
               _loc18_ = _loc24_.Add(this.xDir.Mul(Math.cos(_loc12_[_loc4_]))).Add(this.yDir.Mul(Math.sin(_loc12_[_loc4_])));
               _loc20_ = cam.GetXY(_loc19_);
               _loc23_ = cam.GetXY(_loc18_);
               _loc2_.moveTo(_loc20_[0],_loc20_[1]);
               _loc2_.lineTo(_loc23_[0],_loc23_[1]);
               if(_loc4_ == 0)
               {
                  _loc2_.swapDepths(cam.GetDepth(_loc19_.Average2(_loc18_)));
               }
            }
            _loc4_ = _loc4_ + 1;
         }
         _loc26_ = _loc12_[0];
      }
      var _loc29_ = cam.GetXY(this.center);
      var _loc28_ = cam.GetXY(_loc24_);
      var _loc25_;
      var _loc14_;
      var _loc30_;
      var _loc13_;
      _loc4_ = 0;
      var _loc10_;
      var _loc15_;
      var _loc6_;
      var _loc8_;
      var _loc5_;
      var _loc7_;
      var _loc22_;
      var _loc11_;
      var _loc21_;
      var _loc9_;
      while(_loc4_ <= this.NUM_SEGMENT)
      {
         _loc10_ = _loc26_ + _loc27_ * _loc4_;
         _loc15_ = this.center.Add(this.xDir.Mul(Math.cos(_loc10_))).Add(this.yDir.Mul(Math.sin(_loc10_)));
         _loc6_ = cam.GetXY(_loc15_);
         _loc8_ = _loc24_.Add(this.xDir.Mul(Math.cos(_loc10_))).Add(this.yDir.Mul(Math.sin(_loc10_)));
         _loc5_ = cam.GetXY(_loc8_);
         if(_loc4_ != 0)
         {
            _loc7_ = _loc26_ + _loc27_ * (_loc4_ - 0.5);
            _loc22_ = this.center.Add(this.xDir.Mul(Math.cos(_loc7_) * _loc17_)).Add(this.yDir.Mul(Math.sin(_loc7_) * _loc17_));
            _loc11_ = cam.GetXY(_loc22_);
            _loc2_ = this.parent[this.mcTag + "T" + _loc4_];
            _loc2_.clear();
            _loc2_.lineStyle(this.lineColor.lineThickness,this.lineColor.lineColor,this.lineColor.alpha);
            if(_loc16_)
            {
               _loc2_.beginFill(this.fillColorTB.fillColor,this.fillColorTB.alpha);
            }
            _loc2_.moveTo(_loc14_[0],_loc14_[1]);
            _loc2_.curveTo(_loc11_[0],_loc11_[1],_loc6_[0],_loc6_[1]);
            _loc2_.swapDepths(cam.GetDepth(_loc25_.Average3(_loc15_,_loc22_)));
            if(_loc16_)
            {
               _loc2_.lineStyle(this.lineColor.lineThickness,this.lineColor.lineColor,0);
               _loc2_.lineTo(_loc29_[0],_loc29_[1]);
               _loc2_.endFill();
            }
            _loc21_ = _loc24_.Add(this.xDir.Mul(Math.cos(_loc7_) * _loc17_)).Add(this.yDir.Mul(Math.sin(_loc7_) * _loc17_));
            _loc9_ = cam.GetXY(_loc21_);
            _loc2_ = this.parent[this.mcTag + "B" + _loc4_];
            _loc2_.clear();
            _loc2_.lineStyle(this.lineColor.lineThickness,this.lineColor.lineColor,this.lineColor.alpha);
            if(_loc16_)
            {
               _loc2_.beginFill(this.fillColorTB.fillColor,this.fillColorTB.alpha);
            }
            _loc2_.moveTo(_loc13_[0],_loc13_[1]);
            _loc2_.curveTo(_loc9_[0],_loc9_[1],_loc5_[0],_loc5_[1]);
            _loc2_.swapDepths(cam.GetDepth(_loc30_.Average3(_loc8_,_loc21_)));
            if(_loc16_)
            {
               _loc2_.lineStyle(this.lineColor.lineThickness,this.lineColor.lineColor,0);
               _loc2_.lineTo(_loc28_[0],_loc28_[1]);
               _loc2_.endFill();
            }
            _loc2_ = this.parent[this.mcTag + "S" + _loc4_];
            _loc2_.clear();
            if(_loc31_)
            {
               _loc2_.lineStyle(this.lineColor.lineThickness,this.lineColor.lineColor,0);
               _loc2_.beginFill(this.fillColorS.fillColor,this.fillColorS.alpha);
               _loc2_.moveTo(_loc14_[0],_loc14_[1]);
               _loc2_.curveTo(_loc11_[0],_loc11_[1],_loc6_[0],_loc6_[1]);
               _loc2_.lineTo(_loc5_[0],_loc5_[1]);
               _loc2_.curveTo(_loc9_[0],_loc9_[1],_loc13_[0],_loc13_[1]);
               _loc2_.endFill();
            }
            _loc2_.swapDepths(cam.GetDepth(_loc25_.Average2(_loc8_)));
         }
         _loc25_ = _loc15_;
         _loc14_ = _loc6_;
         _loc30_ = _loc8_;
         _loc13_ = _loc5_;
         _loc4_ = _loc4_ + 1;
      }
   }
findEdge(cam){
      var _loc14_ = [];
      var _loc8_ = [];
      var _loc13_;
      var _loc10_;
      var _loc12_ = true;
      var _loc4_ = 0;
      var _loc11_;
      while(_loc4_ <= 10)
      {
         _loc11_ = 6.283185307179586 * _loc4_ / 10;
         _loc10_ = this.zDirCrossTangential(cam,_loc11_);
         if(_loc4_ != 0)
         {
            if(_loc13_ * _loc10_ < 0)
            {
               if(_loc12_)
               {
                  _loc8_[0] = _loc4_ - 1;
                  _loc12_ = false;
               }
               else
               {
                  _loc8_[1] = _loc4_ - 1;
               }
            }
         }
         _loc13_ = _loc10_;
         _loc4_ = _loc4_ + 1;
      }
      if(_loc12_)
      {
         return _loc14_;
      }
      var _loc3_;
      var _loc6_;
      var _loc2_;
      var _loc9_;
      var _loc5_;
      _loc4_ = 0;
      while(_loc4_ < 2)
      {
         _loc3_ = _loc8_[_loc4_] * 2 * 3.141592653589793 / 10;
         _loc6_ = (_loc8_[_loc4_] + 1) * 2 * 3.141592653589793 / 10;
         _loc9_ = 0;
         do
         {
            _loc2_ = (_loc3_ + _loc6_) / 2;
            _loc5_ = this.zDirCrossTangential(cam,_loc2_);
            if(_loc5_ * this.zDirCrossTangential(cam,_loc3_) < 0)
            {
               _loc6_ = _loc2_;
            }
            else
            {
               _loc3_ = _loc2_;
            }
         }
         while(_loc9_++ < 10 && Math.abs(_loc5_) > 0.001);
         _loc14_[_loc4_] = _loc2_;
         _loc4_ = _loc4_ + 1;
      }
      return _loc14_;
   }
zDirCrossTangential(cam, theta){
      var _loc3_ = this.center.Add(this.xDir.Mul(Math.cos(theta))).Add(this.yDir.Mul(Math.sin(theta)));
      var _loc2_ = cam.GetXY(_loc3_);
      var _loc7_ = this.yDir.Mul(Math.cos(theta)).Sub(this.xDir.Mul(Math.sin(theta))).Add(_loc3_);
      var _loc6_ = cam.GetXY(_loc7_);
      var _loc10_ = this.zDir.Add(_loc3_);
      var _loc5_ = cam.GetXY(_loc10_);
      var _loc8_ = (_loc6_[0] - _loc2_[0]) * (_loc5_[1] - _loc2_[1]) - (_loc6_[1] - _loc2_[1]) * (_loc5_[0] - _loc2_[0]);
      return _loc8_;
   }
EulerTransform(phi, the, psi){
      this.center = this.center.EulerTransform(phi,the,psi);
      this.xDir = this.xDir.EulerTransform(phi,the,psi);
      this.yDir = this.yDir.EulerTransform(phi,the,psi);
      this.zDir = this.zDir.EulerTransform(phi,the,psi);
   }
Translation(x_, y_, z_){
      this.center = this.center.Translation(x_,y_,z_);
   }
Dilation(x_, y_, z_){
      this.center = this.center.Dilation(x_,y_,z_);
      this.xDir = this.xDir.Dilation(x_,y_,z_);
      this.yDir = this.yDir.Dilation(x_,y_,z_);
      this.zDir = this.zDir.Dilation(x_,y_,z_);
   }
}
class FillColor {
fillColor = 8421504;
alpha = 80;
constructor(fillColor, alpha){
      this.fillColor = fillColor;
      this.alpha = alpha;
   }
}
class Ellipse {
NUM_SEGMENT = 8;
constructor(parent, center, xDir, yDir){
      this.parent = parent;
      this.center = center;
      this.xDir = xDir;
      this.yDir = yDir;
      this.fillColor = null;
      this.lineColor = new LineColor(1,8421504,100);
      this.mcTag = "ell" + Math.floor(Math.random() * 100000);
      var _loc2_ = 1;
      while(_loc2_ <= this.NUM_SEGMENT)
      {
         parent.createEmptyMovieClip(this.mcTag + _loc2_,parent.getNextHighestDepth());
         _loc2_ = _loc2_ + 1;
      }
   }
setColor(lineColor, fillColor){
      this.lineColor = lineColor;
      this.fillColor = fillColor;
   }
draw(cam){
      var _loc13_ = 6.283185307179586 / this.NUM_SEGMENT;
      var _loc14_ = 1 / Math.cos(_loc13_ / 2);
      var _loc12_ = false;
      if(this.fillColor != null)
      {
         _loc12_ = true;
      }
      var _loc15_ = cam.GetXY(this.center);
      var _loc16_;
      var _loc10_;
      var _loc3_ = 0;
      var _loc8_;
      var _loc4_;
      var _loc5_;
      var _loc6_;
      var _loc9_;
      var _loc7_;
      var _loc2_;
      while(_loc3_ <= this.NUM_SEGMENT)
      {
         _loc8_ = _loc13_ * _loc3_;
         _loc4_ = this.center.Add(this.xDir.Mul(Math.cos(_loc8_))).Add(this.yDir.Mul(Math.sin(_loc8_)));
         _loc5_ = cam.GetXY(_loc4_);
         if(_loc3_ != 0)
         {
            _loc6_ = _loc13_ * (_loc3_ - 0.5);
            _loc9_ = this.center.Add(this.xDir.Mul(Math.cos(_loc6_) * _loc14_)).Add(this.yDir.Mul(Math.sin(_loc6_) * _loc14_));
            _loc7_ = cam.GetXY(_loc9_);
            _loc2_ = this.parent[this.mcTag + _loc3_];
            _loc2_.clear();
            _loc2_.lineStyle(this.lineColor.lineThickness,this.lineColor.lineColor,this.lineColor.alpha);
            if(_loc12_)
            {
               _loc2_.beginFill(this.fillColor.fillColor,this.fillColor.alpha);
            }
            _loc2_.moveTo(_loc10_[0],_loc10_[1]);
            _loc2_.curveTo(_loc7_[0],_loc7_[1],_loc5_[0],_loc5_[1]);
            _loc2_.swapDepths(cam.GetDepth(_loc16_.Average3(_loc9_,_loc4_)));
            if(_loc12_)
            {
               _loc2_.lineStyle(this.lineColor.lineThickness,this.lineColor.lineColor,0);
               _loc2_.lineTo(_loc15_[0],_loc15_[1]);
               _loc2_.endFill();
            }
         }
         _loc16_ = _loc4_;
         _loc10_ = _loc5_;
         _loc3_ = _loc3_ + 1;
      }
   }
EulerTransform(phi, the, psi){
      this.center = this.center.EulerTransform(phi,the,psi);
      this.xDir = this.xDir.EulerTransform(phi,the,psi);
      this.yDir = this.yDir.EulerTransform(phi,the,psi);
   }
Translation(x_, y_, z_){
      this.center = this.center.Translation(x_,y_,z_);
   }
Dilation(x_, y_, z_){
      this.center = this.center.Dilation(x_,y_,z_);
      this.xDir = this.xDir.Dilation(x_,y_,z_);
      this.yDir = this.yDir.Dilation(x_,y_,z_);
   }
}
class PtObject {
constructor(parent, mc, sDir, scale){
      this.parent = parent;
      this.sDir = sDir;
      this.scale = scale;
      this.mcTag = "pto" + Math.floor(Math.random() * 100000);
      AS2.duplicateMovieClip(mc,this.mcTag,16384 + parent.getNextHighestDepth());
   }
draw(cam){
      var _loc2_ = this.parent[this.mcTag];
      var _loc5_ = cam.GetXY(this.sDir);
      _loc2_._x = _loc5_[0];
      _loc2_._y = _loc5_[1];
      _loc2_.swapDepths(cam.GetDepth(this.sDir));
      var _loc4_ = cam.GetCamDist(this.sDir);
      _loc2_._xscale = cam.f * cam.magnification * this.scale / _loc4_;
      _loc2_._yscale = cam.f * cam.magnification * this.scale / _loc4_;
   }
EulerTransform(phi, the, psi){
      this.sDir = this.sDir.EulerTransform(phi,the,psi);
   }
Translation(x_, y_, z_){
      this.sDir = this.sDir.Translation(x_,y_,z_);
   }
Dilation(x_, y_, z_){
      this.sDir = this.sDir.Dilation(x_,y_,z_);
   }
}
class Polarizer extends Ellipse {
SPACE = 7;
constructor(parent, center, xDir, yDir, orient){
      super(parent,center,xDir,yDir);
      this.orient = orient;
      parent.createEmptyMovieClip(this.mcTag + "pol",parent.getNextHighestDepth());
   }
draw(cam){
      super.draw(cam);
      var _loc11_ = this.parent[this.mcTag + "pol"];
      _loc11_.clear();
      _loc11_.lineStyle(1,2105520,75);
      var _loc14_ = this.xDir.Norm();
      var _loc12_ = Math.floor(_loc14_ * 0.95 / this.SPACE);
      var _loc3_ = - _loc12_;
      var _loc10_;
      var _loc4_;
      var _loc7_;
      var _loc9_;
      var _loc5_;
      var _loc8_;
      var _loc6_;
      while(_loc3_ <= _loc12_)
      {
         _loc10_ = _loc3_ * this.SPACE;
         _loc4_ = this.orient + Math.asin(_loc10_ / _loc14_);
         _loc7_ = 3.141592653589793 - _loc4_ + 2 * this.orient;
         _loc9_ = this.center.Add(this.xDir.Mul(Math.cos(_loc4_))).Add(this.yDir.Mul(Math.sin(_loc4_)));
         _loc5_ = cam.GetXY(_loc9_);
         _loc8_ = this.center.Add(this.xDir.Mul(Math.cos(_loc7_))).Add(this.yDir.Mul(Math.sin(_loc7_)));
         _loc6_ = cam.GetXY(_loc8_);
         _loc11_.moveTo(_loc5_[0],_loc5_[1]);
         _loc11_.lineTo(_loc6_[0],_loc6_[1]);
         _loc3_ = _loc3_ + 1;
      }
      _loc11_.swapDepths(cam.GetDepth(this.center));
   }
}
class Vector {
constructor(X, Y, Z){
      this.X = X;
      this.Y = Y;
      this.Z = Z;
   }
Add(adV){
      var _loc3_ = this.X + adV.X;
      var _loc2_ = this.Y + adV.Y;
      var _loc4_ = this.Z + adV.Z;
      return new Vector(_loc3_,_loc2_,_loc4_);
   }
Sub(suV){
      var _loc3_ = this.X - suV.X;
      var _loc2_ = this.Y - suV.Y;
      var _loc4_ = this.Z - suV.Z;
      return new Vector(_loc3_,_loc2_,_loc4_);
   }
Mul(coef){
      var _loc4_ = coef * this.X;
      var _loc3_ = coef * this.Y;
      var _loc5_ = coef * this.Z;
      return new Vector(_loc4_,_loc3_,_loc5_);
   }
Div(coef){
      var _loc4_ = this.X / coef;
      var _loc3_ = this.Y / coef;
      var _loc5_ = this.Z / coef;
      return new Vector(_loc4_,_loc3_,_loc5_);
   }
MulByMatrix(matrix){
      var _loc4_ = matrix[0][0] * this.X + matrix[0][1] * this.Y + matrix[0][2] * this.Z;
      var _loc3_ = matrix[1][0] * this.X + matrix[1][1] * this.Y + matrix[1][2] * this.Z;
      var _loc5_ = matrix[2][0] * this.X + matrix[2][1] * this.Y + matrix[2][2] * this.Z;
      return new Vector(_loc4_,_loc3_,_loc5_);
   }
Norm(){
      return Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z);
   }
Average2(pt){
      return this.Add(pt).Div(2);
   }
Average3(pt1, pt2){
      return this.Add(pt1).Add(pt2).Div(3);
   }
EulerTransform(phi, the, psi){
      var _loc7_ = Math.cos(phi);
      var _loc6_ = Math.sin(phi);
      var _loc5_ = Math.cos(the);
      var _loc8_ = Math.sin(the);
      var _loc4_ = Math.cos(psi);
      var _loc3_ = Math.sin(psi);
      var _loc2_ = [[],[],[]];
      _loc2_[0][0] = _loc4_ * _loc7_ - _loc5_ * _loc6_ * _loc3_;
      _loc2_[0][1] = _loc4_ * _loc6_ + _loc5_ * _loc7_ * _loc3_;
      _loc2_[0][2] = _loc8_ * _loc3_;
      _loc2_[1][0] = (- _loc3_) * _loc7_ - _loc5_ * _loc6_ * _loc4_;
      _loc2_[1][1] = (- _loc3_) * _loc6_ + _loc5_ * _loc7_ * _loc4_;
      _loc2_[1][2] = _loc8_ * _loc4_;
      _loc2_[2][0] = _loc8_ * _loc6_;
      _loc2_[2][1] = (- _loc8_) * _loc7_;
      _loc2_[2][2] = _loc5_;
      return this.MulByMatrix(_loc2_);
   }
Translation(x_, y_, z_){
      return this.Add(new Vector(x_,y_,z_));
   }
Dilation(x_, y_, z_){
      return new Vector(x_ * this.X,y_ * this.Y,z_ * this.Z);
   }
}
class LineColor {
lineThickness = 1;
lineColor = 8421504;
alpha = 80;
constructor(lineThickness, lineColor, alpha){
      this.lineThickness = lineThickness;
      this.lineColor = lineColor;
      this.alpha = alpha;
   }
}
class Cam {
constructor(){
      this.TransformMatrix = [[1,0,0],[0,1,0],[0,0,1]];
      this.f = 1000;
      this.magnification = 1;
      this.movieWidth = 400;
      this.movieHeight = 400;
   }
GetXY(originalPt){
      var _loc2_ = originalPt.MulByMatrix(this.TransformMatrix);
      var _loc3_ = [];
      _loc3_[0] = this.magnification * _loc2_.X / (1 - _loc2_.Z / this.f) + this.movieWidth / 2;
      _loc3_[1] = (- this.magnification) * _loc2_.Y / (1 - _loc2_.Z / this.f) + this.movieHeight / 2;
      return _loc3_;
   }
GetCamDist(originalPt){
      var _loc2_ = originalPt.MulByMatrix(this.TransformMatrix);
      return Math.sqrt(_loc2_.X * _loc2_.X + _loc2_.Y * _loc2_.Y + (this.f - _loc2_.Z) * (this.f - _loc2_.Z));
   }
GetDepth(originalPt){
      var _loc2_ = this.GetCamDist(originalPt);
      var _loc3_ = Math.floor(this.f * this.f * this.f * 0.001 - _loc2_ * 300);
      return _loc3_;
   }
SetTransformMatrix(x, y, z){
      var _loc8_ = Math.sqrt(x * x + y * y + z * z);
      var _loc10_;
      var _loc9_;
      var _loc7_;
      var _loc3_;
      var _loc2_;
      if(_loc8_ > 0.0001)
      {
         x /= _loc8_;
         y /= _loc8_;
         z /= _loc8_;
         _loc10_ = _loc8_ / 500;
         _loc9_ = Math.cos(_loc10_);
         _loc7_ = Math.sin(_loc10_);
         _loc3_ = 1 - _loc9_;
         _loc2_ = [[],[],[]];
         _loc2_[0][0] = _loc3_ * x * x + _loc9_;
         _loc2_[0][1] = _loc3_ * x * y - _loc7_ * z;
         _loc2_[0][2] = _loc3_ * x * z + _loc7_ * y;
         _loc2_[1][0] = _loc3_ * x * y + _loc7_ * z;
         _loc2_[1][1] = _loc3_ * y * y + _loc9_;
         _loc2_[1][2] = _loc3_ * y * z - _loc7_ * x;
         _loc2_[2][0] = _loc3_ * x * z - _loc7_ * y;
         _loc2_[2][1] = _loc3_ * y * z + _loc7_ * x;
         _loc2_[2][2] = _loc3_ * z * z + _loc9_;
         this.TransformMatrix = this.MatrixMatrixMultiply(_loc2_,this.TransformMatrix);
      }
   }
MatrixMatrixMultiply(A, B){
      var _loc3_ = [[],[],[]];
      _loc3_[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] + A[0][2] * B[2][0];
      _loc3_[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1] + A[0][2] * B[2][1];
      _loc3_[0][2] = A[0][0] * B[0][2] + A[0][1] * B[1][2] + A[0][2] * B[2][2];
      _loc3_[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0] + A[1][2] * B[2][0];
      _loc3_[1][1] = A[1][0] * B[0][1] + A[1][1] * B[1][1] + A[1][2] * B[2][1];
      _loc3_[1][2] = A[1][0] * B[0][2] + A[1][1] * B[1][2] + A[1][2] * B[2][2];
      _loc3_[2][0] = A[2][0] * B[0][0] + A[2][1] * B[1][0] + A[2][2] * B[2][0];
      _loc3_[2][1] = A[2][0] * B[0][1] + A[2][1] * B[1][1] + A[2][2] * B[2][1];
      _loc3_[2][2] = A[2][0] * B[0][2] + A[2][1] * B[1][2] + A[2][2] * B[2][2];
      return _loc3_;
   }
}
const t=A.createRoot(SPEC);AS2.root=t;t.remakeWave=()=>{};
t.RenderScene = function(){
   this.pol1.draw(this.cam);
   this.pol2.draw(this.cam);
   this.cyl.draw(this.cam);
   this.arrow1.draw(this.cam);
   this.arrow2.draw(this.cam);
   this.arrow3.draw(this.cam);
   this.arrow4.draw(this.cam);
   this.arrowPol1.draw(this.cam);
   this.arrowPol2.draw(this.cam);
   this.arrowPol3.draw(this.cam);
   this.arrowRay1.draw(this.cam);
   this.arrowRay2.draw(this.cam);
   this.arrowRay3.draw(this.cam);
   this.arrowRay4.draw(this.cam);
   this.arrowRay5.draw(this.cam);
   this.str1.draw(this.cam);
   this.str2.draw(this.cam);
   this.str3.draw(this.cam);
   this.pol1p.draw(this.cam);
   this.pol2p.draw(this.cam);
   this.cylp.draw(this.cam);
   this.arrow1p.draw(this.cam);
   this.arrow2p.draw(this.cam);
   this.arrow3p.draw(this.cam);
   this.arrow4p.draw(this.cam);
   this.arrowPol1p.draw(this.cam);
   this.arrowPol2p.draw(this.cam);
   this.arrowPol3p.draw(this.cam);
   this.arrowRay2p.draw(this.cam);
   this.arrowRay3p.draw(this.cam);
   this.arrowRay4p.draw(this.cam);
   this.arrowRay5p.draw(this.cam);
   this.str1p.draw(this.cam);
   this.str2p.draw(this.cam);
   this.str3p.draw(this.cam);
}.bind(t);
t.SetTransformMatrix = function(x_, y_, z_){
   this.cam.SetTransformMatrix(x_,y_,z_);
}.bind(t);
(function(){

this.cam = new Cam();
this.cam.movieWidth = 450;
this.cam.movieHeight = 350;
this.cam.magnification = 1.1;
this.cam.TransformMatrix = [[0.919178106315053,0.100725466635946,0.380743994361098],[0.0516563548681413,0.927558041371352,-0.37009147637993],[-0.390439790329839,0.359847829308877,0.847387933516213]];
this.pol1 = new Polarizer(this,new Vector(-100,75,0),new Vector(0,50,0),new Vector(0,0,50),0);
this.pol1.setColor(new LineColor(2,43690,100),new FillColor(8421504,25));
this.pol2 = new Polarizer(this,new Vector(100,75,0),new Vector(0,50,0),new Vector(0,0,50),0.7853981633974483);
this.pol2.setColor(new LineColor(2,43690,100),new FillColor(8421504,25));
this.cyl = new Cylinder(this,new Vector(-50,75,0),new Vector(0,50,0),new Vector(0,0,50),new Vector(100,0,0));
this.cyl.setColor(new LineColor(1,8421504,100),new FillColor(22015,10),new FillColor(65365,10));
this.arrow1 = new DirObject(this,"arrowMagenta",new Vector(-40,100,0),new Vector(40,100,0));
this.arrow2 = new DirObject(this,"arrowMagenta",new Vector(-40,50,0),new Vector(40,50,0));
this.arrow3 = new DirObject(this,"arrowMagenta",new Vector(-40,75,25),new Vector(40,75,25));
this.arrow4 = new DirObject(this,"arrowMagenta",new Vector(-40,75,-25),new Vector(40,75,-25));
this.arrowPol1 = new DirObject(this,"arrowPol",new Vector(-75,25,0),new Vector(-75,125,0));
this.arrowPol2 = new DirObject(this,"arrowPol",new Vector(75,39.64466094067263,-35.35533905932737),new Vector(75,110.35533905932738,35.35533905932737));
this.arrowPol3 = new DirObject(this,"arrowPol",new Vector(125,39.64466094067263,-35.35533905932737),new Vector(125,110.35533905932738,35.35533905932737));
this.arrowRay1 = new DirObject(this,"arrowRed",new Vector(-200,75,0),new Vector(-100,75,0));
this.arrowRay2 = new DirObject(this,"arrowRed",new Vector(-100,75,0),new Vector(-50,75,0));
this.arrowRay3 = new DirObject(this,"arrowRed",new Vector(-50,75,0),new Vector(50,75,0));
this.arrowRay4 = new DirObject(this,"arrowRed",new Vector(50,75,0),new Vector(100,75,0));
this.arrowRay5 = new DirObject(this,"arrowRed",new Vector(100,75,0),new Vector(200,75,0));
this.str1 = new PtObject(this,"polStr",new Vector(105,125,30),100);
this.str2 = new PtObject(this,"polStr",new Vector(-115,125,30),100);
this.str3 = new PtObject(this,"faradayStr",new Vector(0,125,30),100);
this.pol1p = new Polarizer(this,new Vector(-100,-75,0),new Vector(0,50,0),new Vector(0,0,50),0);
this.pol1p.setColor(new LineColor(2,43690,100),new FillColor(8421504,25));
this.pol2p = new Polarizer(this,new Vector(100,-75,0),new Vector(0,50,0),new Vector(0,0,50),0.7853981633974483);
this.pol2p.setColor(new LineColor(2,43690,100),new FillColor(8421504,25));
this.cylp = new Cylinder(this,new Vector(-50,-75,0),new Vector(0,50,0),new Vector(0,0,50),new Vector(100,0,0));
this.cylp.setColor(new LineColor(1,8421504,100),new FillColor(22015,10),new FillColor(65365,10));
this.arrow1p = new DirObject(this,"arrowMagenta",new Vector(-40,-100,0),new Vector(40,-100,0));
this.arrow2p = new DirObject(this,"arrowMagenta",new Vector(-40,-50,0),new Vector(40,-50,0));
this.arrow3p = new DirObject(this,"arrowMagenta",new Vector(-40,-75,25),new Vector(40,-75,25));
this.arrow4p = new DirObject(this,"arrowMagenta",new Vector(-40,-75,-25),new Vector(40,-75,-25));
this.arrowPol1p = new DirObject(this,"arrowPol",new Vector(-75,-75,50),new Vector(-75,-75,-50));
this.arrowPol2p = new DirObject(this,"arrowPol",new Vector(75,-110.35533905932738,-35.35533905932737),new Vector(75,-39.64466094067263,35.35533905932737));
this.arrowPol3p = new DirObject(this,"arrowPol",new Vector(125,-110.35533905932738,-35.35533905932737),new Vector(125,-39.64466094067263,35.35533905932737));
this.arrowRay2p = new DirObject(this,"arrowRed",new Vector(-50,-75,0),new Vector(-100,-75,0));
this.arrowRay3p = new DirObject(this,"arrowRed",new Vector(50,-75,0),new Vector(-50,-75,0));
this.arrowRay4p = new DirObject(this,"arrowRed",new Vector(100,-75,0),new Vector(60,-75,0));
this.arrowRay5p = new DirObject(this,"arrowRed",new Vector(200,-75,0),new Vector(100,-75,0));
this.str1p = new PtObject(this,"polStr",new Vector(105,-125,30),100);
this.str2p = new PtObject(this,"polStr",new Vector(-115,-125,30),100);
this.str3p = new PtObject(this,"faradayStr",new Vector(0,-125,30),100);
this.RenderScene();
}).call(t);
return t;}
