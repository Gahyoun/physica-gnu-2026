import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-833b671bb8f1fdf2", "title": "결상계의 이상적인 파면", "source": "http://physica.gnu.ac.kr/phtml/optics/diffraction/aberdiff/pupilSpherical.swf", "sourceFile": "pupilSpherical.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/diffraction/aberdiff/pupilSpherical.swf", "originalSHA256": "a87ecd7ec99fbe01a8a6f93319f0f20d0773d205a9096af76726898ef64d896b", "lesson": "5-5-6-1", "width": 500.0, "height": 350.0, "fps": 12.0, "type": "pupil", "as3": false, "animated": false, "controls": [{"clip": "fSlider", "label": "초점 거리", "min": 120.0, "max": 250.0, "step": 5.0, "value": 200.0}], "checks": [], "buttons": [], "placements": {"mk": {"x": -5.55, "y": 473.35, "depth": 3, "width": 6, "height": 6}, "xStr": {"x": -64.3, "y": 461.5, "depth": 6, "width": null, "height": null}, "yStr": {"x": -81.5, "y": 465.55, "depth": 8, "width": null, "height": null}, "zStr": {"x": -45.4, "y": 464.55, "depth": 10, "width": null, "height": null}, "arrowBlue": {"x": -64.5, "y": 406.45, "depth": 12, "width": 100, "height": 10}, "arrowAxis": {"x": -64.5, "y": 424.95, "depth": 14, "width": 100, "height": 3.125}, "fSlider": {"x": 321.3, "y": 334.55, "depth": 16, "width": 203.97753913421184, "height": 18.012542850337923}}};
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
class SpecialFtn {
constructor(){
   }
fac(j){
      var _loc1_ = j;
      var _loc2_ = 1;
      if(j < 0)
      {
         _loc1_ = Math.abs(j);
      }
      while(_loc1_ > 1)
      {
         _loc2_ *= _loc1_--;
      }
      if(j < 0)
      {
         return - _loc2_;
      }
      return _loc2_;
   }
zernikeR(m, n, rho){
      var _loc8_ = rho;
      var _loc7_ = _loc8_ * _loc8_;
      var _loc11_ = _loc7_ * _loc8_;
      var _loc4_ = _loc11_ * _loc8_;
      var _loc17_ = _loc4_ * _loc8_;
      var _loc9_ = _loc17_ * _loc8_;
      var _loc18_ = _loc9_ * _loc8_;
      var _loc13_ = _loc18_ * _loc8_;
      if(m == 0)
      {
         if(n == 0)
         {
            return 1;
         }
         if(n == 2)
         {
            return 2 * _loc7_ - 1;
         }
         if(n == 4)
         {
            return 6 * _loc4_ - 6 * _loc7_ + 1;
         }
         if(n == 6)
         {
            return 20 * _loc9_ - 30 * _loc4_ + 12 * _loc7_ - 1;
         }
         if(n == 8)
         {
            return 70 * _loc13_ - 140 * _loc9_ + 90 * _loc4_ - 20 * _loc7_ + 1;
         }
      }
      else if(m == 1)
      {
         if(n == 1)
         {
            return _loc8_;
         }
         if(n == 3)
         {
            return 3 * _loc11_ - 2 * _loc8_;
         }
         if(n == 5)
         {
            return 10 * _loc17_ - 12 * _loc11_ + 3 * _loc8_;
         }
         if(n == 7)
         {
            return 35 * _loc18_ - 60 * _loc17_ + 30 * _loc11_ - 4 * _loc8_;
         }
         if(n == 9)
         {
            return _loc8_ * (5 - 60 * _loc7_ + 210 * _loc4_ - 280 * _loc9_ + 126 * _loc13_);
         }
      }
      else if(m == 2)
      {
         if(n == 2)
         {
            return _loc7_;
         }
         if(n == 4)
         {
            return 4 * _loc4_ - 3 * _loc7_;
         }
         if(n == 6)
         {
            return 15 * _loc9_ - 20 * _loc4_ + 6 * _loc7_;
         }
         if(n == 8)
         {
            return 56 * _loc13_ - 105 * _loc9_ + 60 * _loc4_ - 10 * _loc7_;
         }
         if(n == 10)
         {
            return _loc7_ * (15 - 140 * _loc7_ + 420 * _loc4_ - 504 * _loc9_ + 210 * _loc13_);
         }
      }
      else if(m == 3)
      {
         if(n == 3)
         {
            return _loc11_;
         }
         if(n == 5)
         {
            return 5 * _loc17_ - 4 * _loc11_;
         }
         if(n == 7)
         {
            return 21 * _loc18_ - 30 * _loc17_ + 10 * _loc11_;
         }
         if(n == 9)
         {
            return _loc11_ * (-20 + 105 * _loc7_ - 168 * _loc4_ + 84 * _loc9_);
         }
         if(n == 11)
         {
            return _loc11_ * (35 - 280 * _loc7_ + 756 * _loc4_ - 840 * _loc9_ + 330 * _loc13_);
         }
      }
      else if(m == 4)
      {
         if(n == 4)
         {
            return _loc4_;
         }
         if(n == 6)
         {
            return 6 * _loc9_ - 5 * _loc4_;
         }
         if(n == 8)
         {
            return 28 * _loc13_ - 42 * _loc9_ + 15 * _loc4_;
         }
         if(n == 10)
         {
            return _loc4_ * (-35 + 168 * _loc7_ - 252 * _loc4_ + 120 * _loc9_);
         }
         if(n == 12)
         {
            return _loc4_ * (70 - 504 * _loc7_ + 1260 * _loc4_ - 1320 * _loc9_ + 495 * _loc13_);
         }
      }
      if(m < 0 || n < 0 || n < m || rho < 0)
      {
         return 0;
      }
      if(n == 0 && m == 0)
      {
         return 1;
      }
      if((n - m) % 2 != 0)
      {
         return 0;
      }
      var _loc10_ = (n - m) / 2;
      var _loc16_ = (n + m) / 2;
      var _loc14_ = 0;
      var _loc2_ = 0;
      var _loc6_;
      var _loc5_;
      while(_loc2_ <= _loc10_)
      {
         _loc6_ = Math.pow(-1,_loc2_);
         _loc5_ = Math.pow(rho,n - 2 * _loc2_);
         _loc14_ += _loc6_ * _loc5_ * this.fac(n - _loc2_) / this.fac(_loc2_) / this.fac(_loc16_ - _loc2_) / this.fac(_loc10_ - _loc2_);
         _loc2_ = _loc2_ + 1;
      }
      return _loc14_;
   }
zernikeCos(m, n, rho, theta){
      return this.zernikeR(m,n,rho) * Math.cos(m * theta);
   }
zernikeSin(m, n, rho, theta){
      return this.zernikeR(m,n,rho) * Math.sin(m * theta);
   }
}
class Pupil {
constructor(parent, center, xDir, yDir, zDir, pupilFtn){
      this.parent = parent;
      this.center = center;
      this.xDir = xDir;
      this.yDir = yDir;
      this.zDir = zDir;
      this.fillColor = null;
      this.lineColor = new LineColor(1,8421504,100);
      this.pupilFtn = pupilFtn;
      this.mcTag = "pup" + Math.floor(Math.random() * 100000);
      var _loc3_ = 0;
      var _loc2_;
      while(_loc3_ < pupilFtn.length)
      {
         _loc2_ = 0;
         while(_loc2_ <= pupilFtn[_loc3_].length)
         {
            parent.createEmptyMovieClip(this.mcTag + _loc3_ + "_" + _loc2_,parent.getNextHighestDepth());
            _loc2_ = _loc2_ + 1;
         }
         _loc3_ = _loc3_ + 1;
      }
   }
setColor(lineColor, fillColor){
      this.lineColor = lineColor;
      this.fillColor = fillColor;
   }
draw(cam){
      var _loc26_ = 1 / (this.pupilFtn.length - 1);
      var _loc10_ = 1 / Math.cos(stepAngle / 2);
      var _loc25_ = false;
      if(this.fillColor != null)
      {
         _loc25_ = true;
      }
      var _loc5_;
      var _loc6_;
      var _loc2_ = 1;
      var _loc15_;
      var _loc13_;
      var _loc24_;
      var _loc20_;
      var _loc23_;
      var _loc9_;
      var _loc3_;
      var _loc8_;
      var _loc16_;
      var _loc12_;
      var _loc14_;
      var _loc11_;
      var _loc7_;
      var _loc22_;
      var _loc19_;
      var _loc21_;
      var _loc18_;
      var _loc4_;
      while(_loc2_ < this.pupilFtn.length)
      {
         var stepAngle = 6.283185307179586 / this.pupilFtn[_loc2_].length;
         _loc10_ = 1 / Math.cos(stepAngle / 2);
         _loc15_ = (_loc2_ - 1) * _loc26_;
         _loc13_ = _loc2_ * _loc26_;
         _loc3_ = 0;
         while(_loc3_ <= this.pupilFtn[_loc2_].length)
         {
            _loc8_ = _loc3_ * stepAngle;
            if(_loc3_ != this.pupilFtn[_loc2_].length)
            {
               _loc5_ = this.pupilFtn[_loc2_ - 1][_loc3_];
               _loc6_ = this.pupilFtn[_loc2_][_loc3_];
            }
            else
            {
               _loc5_ = this.pupilFtn[_loc2_ - 1][0];
               _loc6_ = this.pupilFtn[_loc2_][0];
            }
            _loc16_ = this.center.Add(this.xDir.Mul(_loc15_ * Math.cos(_loc8_))).Add(this.yDir.Mul(_loc15_ * Math.sin(_loc8_))).Add(this.zDir.Mul(_loc5_));
            _loc12_ = cam.GetXY(_loc16_);
            _loc14_ = this.center.Add(this.xDir.Mul(_loc13_ * Math.cos(_loc8_))).Add(this.yDir.Mul(_loc13_ * Math.sin(_loc8_))).Add(this.zDir.Mul(_loc6_));
            _loc11_ = cam.GetXY(_loc14_);
            if(_loc3_ != 0)
            {
               _loc7_ = stepAngle * (_loc3_ - 0.5);
               if(_loc3_ != this.pupilFtn[_loc2_].length)
               {
                  _loc5_ = (this.pupilFtn[_loc2_ - 1][_loc3_ - 1] + this.pupilFtn[_loc2_ - 1][_loc3_]) / 2;
                  _loc6_ = (this.pupilFtn[_loc2_][_loc3_ - 1] + this.pupilFtn[_loc2_][_loc3_]) / 2;
               }
               else
               {
                  _loc5_ = (this.pupilFtn[_loc2_ - 1][_loc3_ - 1] + this.pupilFtn[_loc2_ - 1][0]) / 2;
                  _loc6_ = (this.pupilFtn[_loc2_][_loc3_ - 1] + this.pupilFtn[_loc2_][0]) / 2;
               }
               _loc22_ = this.center.Add(this.xDir.Mul(_loc15_ * Math.cos(_loc7_) * _loc10_)).Add(this.yDir.Mul(_loc15_ * Math.sin(_loc7_) * _loc10_)).Add(this.zDir.Mul(_loc5_));
               _loc19_ = cam.GetXY(_loc22_);
               _loc21_ = this.center.Add(this.xDir.Mul(_loc13_ * Math.cos(_loc7_) * _loc10_)).Add(this.yDir.Mul(_loc13_ * Math.sin(_loc7_) * _loc10_)).Add(this.zDir.Mul(_loc6_));
               _loc18_ = cam.GetXY(_loc21_);
               _loc4_ = this.parent[this.mcTag + _loc2_ + "_" + _loc3_];
               _loc4_.clear();
               _loc4_.lineStyle(this.lineColor.lineThickness,this.lineColor.lineColor,this.lineColor.alpha);
               if(_loc25_)
               {
                  _loc4_.beginFill(this.fillColor.fillColor,this.fillColor.alpha);
               }
               _loc4_.moveTo(_loc9_[0],_loc9_[1]);
               _loc4_.curveTo(_loc18_[0],_loc18_[1],_loc11_[0],_loc11_[1]);
               _loc4_.lineTo(_loc12_[0],_loc12_[1]);
               _loc4_.curveTo(_loc19_[0],_loc19_[1],_loc20_[0],_loc20_[1]);
               _loc4_.lineTo(_loc9_[0],_loc9_[1]);
               _loc4_.swapDepths(cam.GetDepth(_loc24_.Average4(_loc16_,_loc14_,_loc23_)));
               if(_loc25_)
               {
                  _loc4_.endFill();
               }
            }
            _loc24_ = _loc16_;
            _loc20_ = _loc12_;
            _loc23_ = _loc14_;
            _loc9_ = _loc11_;
            _loc3_ = _loc3_ + 1;
         }
         _loc2_ = _loc2_ + 1;
      }
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
NUM_SEGMENT = 12;
startAngle = 0;
endAngle = 6.283185307179586;
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
setRange(startAngle, endAngle){
      this.startAngle = startAngle;
      this.endAngle = endAngle;
   }
draw(cam){
      var _loc13_ = (this.endAngle - this.startAngle) / this.NUM_SEGMENT;
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
         _loc8_ = this.startAngle + _loc13_ * _loc3_;
         _loc4_ = this.center.Add(this.xDir.Mul(Math.cos(_loc8_))).Add(this.yDir.Mul(Math.sin(_loc8_)));
         _loc5_ = cam.GetXY(_loc4_);
         if(_loc3_ != 0)
         {
            _loc6_ = this.startAngle + _loc13_ * (_loc3_ - 0.5);
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
CrossProduct(suV){
      var _loc4_ = this.Y * suV.Z - this.Z * suV.Y;
      var _loc3_ = this.Z * suV.X - this.X * suV.Z;
      var _loc5_ = this.X * suV.Y - this.Y * suV.X;
      return new Vector(_loc4_,_loc3_,_loc5_);
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
Average4(pt1, pt2, pt3){
      return this.Add(pt1).Add(pt2).Add(pt3).Div(4);
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
      _loc2_[0][1] = (- _loc3_) * _loc7_ - _loc5_ * _loc6_ * _loc4_;
      _loc2_[0][2] = _loc8_ * _loc6_;
      _loc2_[1][0] = _loc4_ * _loc6_ + _loc5_ * _loc7_ * _loc3_;
      _loc2_[1][1] = (- _loc3_) * _loc6_ + _loc5_ * _loc7_ * _loc4_;
      _loc2_[1][2] = (- _loc8_) * _loc7_;
      _loc2_[2][0] = _loc8_ * _loc3_;
      _loc2_[2][1] = _loc8_ * _loc4_;
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
GetXYZ(originalPt){
      return originalPt.MulByMatrix(this.TransformMatrix);
   }
GetXY(originalPt){
      var _loc2_ = originalPt.MulByMatrix(this.TransformMatrix);
      var _loc3_ = new Array(2);
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
t.changeState = function(){
   var _loc2_ = 0;
   var _loc4_;
   var _loc1_;
   var _loc3_;
   while(_loc2_ < this.pupilFtn.length)
   {
      _loc4_ = _loc2_ * 1 / (this.pupilFtn.length - 1);
      _loc1_ = 0;
      while(_loc1_ < this.pupilFtn[_loc2_].length)
      {
         _loc3_ = 0;
         _loc3_ += this.f - Math.sqrt(this.f * this.f - _loc4_ * _loc4_ * 10000);
         this.pupilFtn[_loc2_][_loc1_] = _loc3_;
         _loc1_ = _loc1_ + 1;
      }
      _loc2_ = _loc2_ + 1;
   }
   this.focalP.sDir = new Vector(0,0,-50 + this.f);
   this.fVec.sDir = new Vector(100,0,-50 + this.f - Math.sqrt(this.f * this.f - 10000));
   this.fVec.eDir = new Vector(0,0,-50 + this.f);
   this.NAStr = "" + Math.round(Math.asin(100 / this.f) * 1000) / 1000;
   this.RedrawAll();
}.bind(t);
t.RedrawAll = function(){
   this.xAxis.draw(this.cam);
   this.yAxis.draw(this.cam);
   this.zAxis.draw(this.cam);
   this.xStr.draw(this.cam);
   this.yStr.draw(this.cam);
   this.zStr.draw(this.cam);
   this.pupilCircle.draw(this.cam);
   this.focalP.draw(this.cam);
   this.fVec.draw(this.cam);
   this.pupil.draw(this.cam);
}.bind(t);
t.SetTransformMatrix = function(x_, y_, z_){
   this.cam.SetTransformMatrix(x_,y_,z_);
}.bind(t);
(function(){


this.cam = new Cam();
this.cam.movieWidth = 350;
this.cam.movieHeight = 350;
this.cam.magnification = 1.5;
this.cam.TransformMatrix = [[0.233332907397815,-0.380993425817405,0.894650637852113],[0.90460559769607,0.422557626854864,-0.0559800375466043],[-0.356713424112711,0.822367959900374,0.443245385296995]];
this.xPos = undefined;
this.yPos = undefined;
this.pupilFtn = new Array(11);
this.i = 0;
while(this.i < this.pupilFtn.length)
{
   this.pupilFtn[this.i] = new Array(24);
   this.j = 0;
   while(this.j < this.pupilFtn[this.i].length)
   {
      this.pupilFtn[this.i][this.j] = 0;
      this.j++;
   }
   this.i++;
}
this.xAxis = new DirObject(this,"arrowAxis",new Vector(-120,0,-50),new Vector(120,0,-50));
this.yAxis = new DirObject(this,"arrowAxis",new Vector(0,-120,-50),new Vector(0,120,-50));
this.zAxis = new DirObject(this,"arrowAxis",new Vector(0,0,-50),new Vector(0,0,210));
this.xStr = new PtObject(this,"xStr",new Vector(125,0,-52),100);
this.yStr = new PtObject(this,"yStr",new Vector(0,125,-52),100);
this.zStr = new PtObject(this,"zStr",new Vector(0,0,215),100);
this.pupilCircle = new Ellipse(this,new Vector(0,0,-50),new Vector(100,0,0),new Vector(0,100,0));
this.pupilCircle.setColor(new LineColor(2,160,90),new FillColor(16711680,10));
this.pupil = new Pupil(this,new Vector(0,0,-50),new Vector(100,0,0),new Vector(0,100,0),new Vector(0,0,1),this.pupilFtn);
this.pupil.setColor(new LineColor(1,255,75),new FillColor(65280,30));
this.specialFtn = new SpecialFtn();
this.f = 200;
this.focalP = new PtObject(this,"mk",new Vector(0,0,0),100);
this.fVec = new DirObject(this,"arrowAxis",new Vector(0,0,0),new Vector(0,0,0));
this.changeState();
this.RedrawAll();

this.eventByBtn = false;
this.OListener = new Object();
this.fSlider.addEventListener("change",this.OListener);
this.OListener.change = function(evt)
{
   this.f = this.fSlider.value;
   this.changeState();
};
}).call(t);
return t;}
