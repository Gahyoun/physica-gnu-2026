import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-a503a95f16f31f43", "title": "수차와 회절무늬", "source": "http://physica.gnu.ac.kr/phtml/optics/diffraction/aberdiff/phaseAberImage.swf", "sourceFile": "phaseAberImage.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/diffraction/aberdiff/phaseAberImage.swf", "originalSHA256": "1d3c1c22724fd7f2e7d79da0a10f91357a18651b9dc57e0dd5ba62659e1a3893", "lesson": "5-5-6-3", "width": 600.0, "height": 500.0, "fps": 12.0, "type": "aberration", "as3": false, "animated": false, "controls": [{"clip": "a00Slider", "label": "제르니케 계수 a00 · cos", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a02Slider", "label": "제르니케 계수 a02 · cos", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a04Slider", "label": "제르니케 계수 a04 · cos", "min": -1.5, "max": 1.5, "step": 0.1, "value": 1.0}, {"clip": "a33Slider", "label": "제르니케 계수 a33 · cos", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a33SliderS", "label": "제르니케 계수 a33 · sin", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a26Slider", "label": "제르니케 계수 a26 · cos", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a26SliderS", "label": "제르니케 계수 a26 · sin", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a24Slider", "label": "제르니케 계수 a24 · cos", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a24SliderS", "label": "제르니케 계수 a24 · sin", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a22Slider", "label": "제르니케 계수 a22 · cos", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a22SliderS", "label": "제르니케 계수 a22 · sin", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a15Slider", "label": "제르니케 계수 a15 · cos", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a15SliderS", "label": "제르니케 계수 a15 · sin", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a13Slider", "label": "제르니케 계수 a13 · cos", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a13SliderS", "label": "제르니케 계수 a13 · sin", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a11Slider", "label": "제르니케 계수 a11 · cos", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "a11SliderS", "label": "제르니케 계수 a11 · sin", "min": -1.5, "max": 1.5, "step": 0.1, "value": 0.0}, {"clip": "numOfGraphSpinor", "label": "회절상 수", "min": 3.0, "max": 9.0, "step": 2.0, "value": 3.0}], "checks": [], "buttons": [{"clip": "clearBtn", "label": "수차제거", "alternate": "수차제거", "toggle": true, "value": false}, {"clip": "imageBtn", "label": "회절상", "alternate": "회절상", "toggle": true, "value": false}], "placements": {"mk": {"x": -32.55, "y": -23.2, "depth": 6, "width": 4, "height": 4}, "xStr": {"x": -91.3, "y": -14.45, "depth": 8, "width": null, "height": null}, "yStr": {"x": -108.5, "y": -14.45, "depth": 10, "width": null, "height": null}, "zStr": {"x": -72.4, "y": -14.45, "depth": 12, "width": null, "height": null}, "arrowAxis": {"x": -70, "y": -32.35, "depth": 14, "width": 100, "height": 3.125}, "a00Slider": {"x": 350, "y": 12.3, "depth": 27, "width": 203.97753913421184, "height": 18.012542850337923}, "a02Slider": {"x": 350, "y": 38.05, "depth": 28, "width": 203.97753913421184, "height": 18.012542850337923}, "a04Slider": {"x": 350, "y": 63.8, "depth": 29, "width": 203.97753913421184, "height": 18.012542850337923}, "a33Slider": {"x": 350, "y": 246.3, "depth": 30, "width": 203.97753913421184, "height": 18.012542850337923}, "a33SliderS": {"x": 439.15, "y": 246.3, "depth": 31, "width": 203.97753913421184, "height": 18.012542850337923}, "a26Slider": {"x": 350, "y": 220.3, "depth": 32, "width": 203.97753913421184, "height": 18.012542850337923}, "a26SliderS": {"x": 439.15, "y": 220.3, "depth": 33, "width": 203.97753913421184, "height": 18.012542850337923}, "a24Slider": {"x": 350, "y": 194.3, "depth": 34, "width": 203.97753913421184, "height": 18.012542850337923}, "a24SliderS": {"x": 439.15, "y": 194.3, "depth": 35, "width": 203.97753913421184, "height": 18.012542850337923}, "a22Slider": {"x": 350, "y": 168.3, "depth": 36, "width": 203.97753913421184, "height": 18.012542850337923}, "a22SliderS": {"x": 439.15, "y": 168.3, "depth": 37, "width": 203.97753913421184, "height": 18.012542850337923}, "a15Slider": {"x": 350, "y": 142.3, "depth": 38, "width": 203.97753913421184, "height": 18.012542850337923}, "a15SliderS": {"x": 439.15, "y": 142.3, "depth": 39, "width": 203.97753913421184, "height": 18.012542850337923}, "a13Slider": {"x": 350, "y": 115.3, "depth": 40, "width": 203.97753913421184, "height": 18.012542850337923}, "a13SliderS": {"x": 439.15, "y": 115.3, "depth": 41, "width": 203.97753913421184, "height": 18.012542850337923}, "a11Slider": {"x": 350, "y": 89.55, "depth": 42, "width": 203.97753913421184, "height": 18.012542850337923}, "a11SliderS": {"x": 439.15, "y": 89.55, "depth": 43, "width": 203.97753913421184, "height": 18.012542850337923}, "clearBtn": {"x": 534.8, "y": 266.4, "depth": 44, "width": 75, "height": 20.000152587890625}, "imageBtn": {"x": 448.1, "y": 279.05, "depth": 45, "width": 75, "height": 20.000152587890625}, "numOfGraphSpinor": {"x": 383.65, "y": 281, "depth": 46, "width": 60.0006103515625, "height": 15}}};
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
nCk(n, k){
      return this.fac(n) / this.fac(n - k) / this.fac(k);
   }
j0(x){
      var _loc2_;
      var _loc1_;
      var _loc6_;
      var _loc5_;
      if((_loc2_ = Math.abs(x)) < 8)
      {
         _loc1_ = x * x;
         _loc6_ = 57568490574 + _loc1_ * (-13362590354 + _loc1_ * (651619640.7 + _loc1_ * (-11214424.18 + _loc1_ * (77392.33017 + _loc1_ * -184.9052456))));
         _loc5_ = 57568490411 + _loc1_ * (1029532985 + _loc1_ * (9494680.718 + _loc1_ * (59272.64853 + _loc1_ * (267.8532712 + _loc1_ * 1))));
         return _loc6_ / _loc5_;
      }
      var _loc3_ = 8 / _loc2_;
      _loc1_ = _loc3_ * _loc3_;
      var _loc4_ = _loc2_ - 0.785398164;
      _loc6_ = 1 + _loc1_ * (-0.001098628627 + _loc1_ * (0.00002734510407 + _loc1_ * (-0.000002073370639 + _loc1_ * 2.093887211e-7)));
      _loc5_ = -0.01562499995 + _loc1_ * (0.0001430488765 + _loc1_ * (-0.000006911147651 + _loc1_ * (7.621095161e-7 - _loc1_ * 9.34935152e-8)));
      return Math.sqrt(0.636619772 / _loc2_) * (Math.cos(_loc4_) * _loc6_ - _loc3_ * Math.sin(_loc4_) * _loc5_);
   }
j1(x){
      var _loc5_;
      var _loc1_;
      var _loc4_;
      var _loc3_;
      if((_loc5_ = Math.abs(x)) < 8)
      {
         _loc1_ = x * x;
         _loc4_ = x * (72362614232 + _loc1_ * (-7895059235 + _loc1_ * (242396853.1 + _loc1_ * (-2972611.439 + _loc1_ * (15704.4826 + _loc1_ * -30.16036606)))));
         _loc3_ = 144725228442 + _loc1_ * (2300535178 + _loc1_ * (18583304.74 + _loc1_ * (99447.43394 + _loc1_ * (376.9991397 + _loc1_ * 1))));
         return _loc4_ / _loc3_;
      }
      var _loc6_ = 8 / _loc5_;
      var _loc8_ = _loc5_ - 2.356194491;
      _loc1_ = _loc6_ * _loc6_;
      _loc4_ = 1 + _loc1_ * (0.00183105 + _loc1_ * (-0.00003516396496 + _loc1_ * (0.000002457520174 + _loc1_ * -2.40337019e-7)));
      _loc3_ = 0.04687499995 + _loc1_ * (-0.0002002690873 + _loc1_ * (0.000008449199096 + _loc1_ * (-8.8228987e-7 + _loc1_ * 1.05787412e-7)));
      var _loc2_ = Math.sqrt(0.636619772 / _loc5_) * (Math.cos(_loc8_) * _loc4_ - _loc6_ * Math.sin(_loc8_) * _loc3_);
      if(x < 0)
      {
         _loc2_ = - _loc2_;
      }
      return _loc2_;
   }
jn(n, x){
      var _loc3_;
      var _loc14_;
      var _loc13_;
      var _loc2_;
      var _loc5_;
      var _loc4_;
      var _loc10_;
      var _loc11_;
      var _loc9_;
      var _loc7_;
      var _loc16_ = 20;
      var _loc12_ = 10000000000;
      var _loc6_ = 1e-10;
      if(n == 0)
      {
         return this.j0(x);
      }
      if(n == 1)
      {
         return this.j1(x);
      }
      _loc13_ = Math.abs(x);
      if(_loc13_ == 0)
      {
         return 0;
      }
      if(_loc13_ > n)
      {
         _loc11_ = 2 / _loc13_;
         _loc5_ = this.j0(_loc13_);
         _loc2_ = this.j1(_loc13_);
         _loc3_ = 1;
         while(_loc3_ < n)
         {
            _loc4_ = _loc3_ * _loc11_ * _loc2_ - _loc5_;
            _loc5_ = _loc2_;
            _loc2_ = _loc4_;
            _loc3_ = _loc3_ + 1;
         }
         _loc9_ = _loc2_;
      }
      else
      {
         _loc11_ = 2 / _loc13_;
         _loc14_ = 2 * Math.floor((n + Math.floor(Math.sqrt(_loc16_ * n))) / 2);
         _loc7_ = false;
         _loc4_ = _loc9_ = _loc10_ = 0;
         _loc2_ = 1;
         _loc3_ = _loc14_;
         while(_loc3_ > 0)
         {
            _loc5_ = _loc3_ * _loc11_ * _loc2_ - _loc4_;
            _loc4_ = _loc2_;
            _loc2_ = _loc5_;
            if(Math.abs(_loc2_) > _loc12_)
            {
               _loc2_ *= _loc6_;
               _loc4_ *= _loc6_;
               _loc9_ *= _loc6_;
               _loc10_ *= _loc6_;
            }
            if(_loc7_)
            {
               _loc10_ += _loc2_;
            }
            _loc7_ = !_loc7_;
            if(_loc3_ == n)
            {
               _loc9_ = _loc4_;
            }
            _loc3_ = _loc3_ - 1;
         }
         _loc10_ = 2 * _loc10_ - _loc2_;
         _loc9_ /= _loc10_;
      }
      return !(x < 0 && n - Math.floor(n / 2) * 2 == 1) ? _loc9_ : - _loc9_;
   }
Vmn(m, n, r, f){
      var _loc12_ = 1e-10;
      if(m >= 1 && r < _loc12_)
      {
         return new Complex(0,0);
      }
      if(r < _loc12_)
      {
         r = _loc12_;
      }
      var _loc10_ = 15;
      var _loc8_ = new Complex(0,0);
      var _loc9_ = Math.floor((n + m) / 2);
      var _loc4_ = Math.floor((n - m) / 2);
      var _loc13_ = new Complex(0,f);
      var _loc11_ = new Complex(0,-2 * f);
      var _loc2_;
      var _loc3_;
      _loc2_ = 1;
      var _loc6_;
      while(_loc2_ <= _loc10_)
      {
         _loc6_ = 0;
         _loc3_ = 0;
         while(_loc3_ <= _loc4_)
         {
            if(_loc4_ - _loc3_ < _loc2_)
            {
               _loc6_ += Math.pow(-1,_loc4_) * (m + _loc2_ + 2 * _loc3_) * this.nCk(m + _loc3_ + _loc2_ - 1,_loc2_ - 1) * this.nCk(_loc3_ + _loc2_ - 1,_loc2_ - 1) * this.nCk(_loc2_ - 1,_loc4_ - _loc3_) / this.nCk(_loc9_ + _loc2_ + _loc3_,_loc2_) * this.jn(m + _loc2_ + 2 * _loc3_,6.283185307179586 * r) / (_loc2_ * Math.pow(6.283185307179586 * r,_loc2_));
            }
            _loc3_ = _loc3_ + 1;
         }
         _loc8_ = _loc8_.add(_loc11_.pow(_loc2_ - 1).mul(_loc6_));
         _loc2_ = _loc2_ + 1;
      }
      _loc8_ = _loc8_.prod(_loc13_.exp());
      return _loc8_;
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
class Complex {
constructor(x, y){
      this.x = x;
      this.y = y;
   }
add(c2){
      return new Complex(this.x + c2.x,this.y + c2.y);
   }
sub(c2){
      return new Complex(this.x - c2.x,this.y - c2.y);
   }
prod(z){
      return new Complex(this.x * z.x - this.y * z.y,this.x * z.y + this.y * z.x);
   }
mul(scalar){
      return new Complex(this.x * scalar,this.y * scalar);
   }
exp(){
      var _loc2_ = Math.exp(this.x);
      return new Complex(_loc2_ * Math.cos(this.y),_loc2_ * Math.sin(this.y));
   }
modulus(){
      return Math.sqrt(this.x * this.x + this.y * this.y);
   }
argument(){
      return Math.atan2(this.y,this.x);
   }
log(){
      return new Complex(Math.log(this.modulus()),this.argument());
   }
pow(index){
      if(index == 0)
      {
         return new Complex(1,0);
      }
      if(this.x == 0 && this.y == 0)
      {
         return new Complex(0,0);
      }
      return this.log().mul(index).exp();
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
   this.initImageCanvas();
   var _loc5_ = 0;
   var _loc3_;
   var _loc4_;
   var _loc2_;
   var _loc1_;
   while(_loc5_ < this.pupilFtn.length)
   {
      _loc3_ = _loc5_ * 1 / (this.pupilFtn.length - 1);
      _loc4_ = 0;
      while(_loc4_ < this.pupilFtn[_loc5_].length)
      {
         _loc2_ = _loc4_ * 2 * 3.141592653589793 / this.pupilFtn[_loc5_].length;
         _loc1_ = 0;
         _loc1_ += this.a00 * this.specialFtn.zernikeCos(0,0,_loc3_,_loc2_);
         _loc1_ += this.a02 * this.specialFtn.zernikeCos(0,2,_loc3_,_loc2_);
         _loc1_ += this.a04 * this.specialFtn.zernikeCos(0,4,_loc3_,_loc2_);
         _loc1_ += this.a11 * this.specialFtn.zernikeCos(1,1,_loc3_,_loc2_);
         _loc1_ += this.a13 * this.specialFtn.zernikeCos(1,3,_loc3_,_loc2_);
         _loc1_ += this.a15 * this.specialFtn.zernikeCos(1,5,_loc3_,_loc2_);
         _loc1_ += this.a22 * this.specialFtn.zernikeCos(2,2,_loc3_,_loc2_);
         _loc1_ += this.a24 * this.specialFtn.zernikeCos(2,4,_loc3_,_loc2_);
         _loc1_ += this.a26 * this.specialFtn.zernikeCos(2,6,_loc3_,_loc2_);
         _loc1_ += this.a33 * this.specialFtn.zernikeCos(3,3,_loc3_,_loc2_);
         _loc1_ += this.a11S * this.specialFtn.zernikeSin(1,1,_loc3_,_loc2_);
         _loc1_ += this.a13S * this.specialFtn.zernikeSin(1,3,_loc3_,_loc2_);
         _loc1_ += this.a15S * this.specialFtn.zernikeSin(1,5,_loc3_,_loc2_);
         _loc1_ += this.a22S * this.specialFtn.zernikeSin(2,2,_loc3_,_loc2_);
         _loc1_ += this.a24S * this.specialFtn.zernikeSin(2,4,_loc3_,_loc2_);
         _loc1_ += this.a26S * this.specialFtn.zernikeSin(2,6,_loc3_,_loc2_);
         _loc1_ += this.a33S * this.specialFtn.zernikeSin(3,3,_loc3_,_loc2_);
         this.pupilFtn[_loc5_][_loc4_] = _loc1_;
         _loc4_ = _loc4_ + 1;
      }
      _loc5_ = _loc5_ + 1;
   }
   this.RedrawAll();
}.bind(t);
t.RedrawAll = function(){
   this.xAxis.draw(this.cam);
   this.yAxis.draw(this.cam);
   this.zAxis.draw(this.cam);
   this.xStr.draw(this.cam);
   this.yStr.draw(this.cam);
   this.zStr.draw(this.cam);
   this.pupil.draw(this.cam);
   this.cicle.draw(this.cam);
}.bind(t);
t.SetTransformMatrix = function(x_, y_, z_){
   this.cam.SetTransformMatrix(x_,y_,z_);
}.bind(t);
t.makeImage = function(){
   
   this.imageCanvas.clear();
   var _loc4_ = 1.57;
   var _loc1_ = 600 / this.numOfGraph;
   var _loc3_ = Math.floor(this.numOfGraph / 2);
   this.fn = - _loc3_;
   var _loc2_;
   while(this.fn <= _loc3_)
   {
      _loc2_ = this.fn * _loc4_;
      this.makeSingleImage(_loc2_,300 + this.fn * _loc1_,400 - this.fn * (200 - _loc1_) * _loc1_ / (600 - _loc1_),_loc1_ / 2);
      this.fn += 1;
   }
}.bind(t);
t.makeSingleImage = function(f, x0, y0, radius){
   var _loc35_ = 0.04;
   var _loc7_ = 36;
   var _loc33_ = new Complex(0,1);
   var _loc32_ = new Complex(-1,0);
   var _loc31_ = new Complex(0,-1);
   var _loc36_ = new Complex(1,0);
   var _loc8_ = new Complex(0,0);
   var _loc34_ = Math.ceil(2 * radius / 50);
   var _loc15_ = 1;
   var _loc4_;
   var _loc3_;
   var _loc18_;
   var _loc5_;
   var _loc20_;
   var _loc28_;
   var _loc25_;
   var _loc29_;
   var _loc26_;
   var _loc22_;
   var _loc27_;
   var _loc23_;
   var _loc21_;
   var _loc24_;
   var _loc16_;
   var _loc9_;
   var _loc2_;
   var _loc1_;
   var _loc17_;
   var _loc10_;
   var _loc19_;
   var _loc12_;
   var _loc11_;
   while(_loc15_ <= 50)
   {
      _loc4_ = _loc15_ * _loc35_;
      _loc3_ = _loc15_ * radius / 50;
      _loc7_ = (2 + Math.floor(_loc15_ / 4)) * 5;
      _loc18_ = this.sp.Vmn(0,0,_loc4_,f);
      _loc5_ = 0.0001;
      _loc20_ = Math.abs(this.a00) <= _loc5_ ? _loc8_ : this.sp.Vmn(0,0,_loc4_,f).prod(_loc33_);
      _loc28_ = Math.abs(this.a02) <= _loc5_ ? _loc8_ : this.sp.Vmn(0,2,_loc4_,f).prod(_loc33_);
      _loc25_ = Math.abs(this.a04) <= _loc5_ ? _loc8_ : this.sp.Vmn(0,4,_loc4_,f).prod(_loc33_);
      _loc29_ = this.a11 * this.a11 + this.a11S * this.a11S <= _loc5_ ? _loc8_ : this.sp.Vmn(1,1,_loc4_,f).prod(_loc32_);
      _loc26_ = this.a13 * this.a13 + this.a13S * this.a13S <= _loc5_ ? _loc8_ : this.sp.Vmn(1,3,_loc4_,f).prod(_loc32_);
      _loc22_ = this.a15 * this.a15 + this.a15S * this.a15S <= _loc5_ ? _loc8_ : this.sp.Vmn(1,5,_loc4_,f).prod(_loc32_);
      _loc27_ = this.a22 * this.a22 + this.a22S * this.a22S <= _loc5_ ? _loc8_ : this.sp.Vmn(2,2,_loc4_,f).prod(_loc31_);
      _loc23_ = this.a24 * this.a24 + this.a24S * this.a24S <= _loc5_ ? _loc8_ : this.sp.Vmn(2,4,_loc4_,f).prod(_loc31_);
      _loc21_ = this.a26 * this.a26 + this.a26S * this.a26S <= _loc5_ ? _loc8_ : this.sp.Vmn(2,6,_loc4_,f).prod(_loc31_);
      _loc24_ = this.a33 * this.a33 + this.a33S * this.a33S <= _loc5_ ? _loc8_ : this.sp.Vmn(3,3,_loc4_,f).prod(_loc36_);
      _loc16_ = 1 / Math.cos(6.283185307179586 / _loc7_ / 2);
      _loc9_ = 0;
      while(_loc9_ < _loc7_)
      {
         _loc2_ = 6.283185307179586 * _loc9_ / _loc7_;
         _loc1_ = new Complex(_loc18_.x,_loc18_.y);
         _loc1_ = _loc1_.add(_loc20_.mul(this.a00));
         _loc1_ = _loc1_.add(_loc28_.mul(this.a02));
         _loc1_ = _loc1_.add(_loc25_.mul(this.a04));
         _loc1_ = _loc1_.add(_loc29_.mul(this.a11 * Math.cos(1 * _loc2_) + this.a11S * Math.sin(1 * _loc2_)));
         _loc1_ = _loc1_.add(_loc26_.mul(this.a13 * Math.cos(1 * _loc2_) + this.a13S * Math.sin(1 * _loc2_)));
         _loc1_ = _loc1_.add(_loc22_.mul(this.a15 * Math.cos(1 * _loc2_) + this.a15S * Math.sin(1 * _loc2_)));
         _loc1_ = _loc1_.add(_loc27_.mul(this.a22 * Math.cos(2 * _loc2_) + this.a22S * Math.sin(2 * _loc2_)));
         _loc1_ = _loc1_.add(_loc23_.mul(this.a24 * Math.cos(2 * _loc2_) + this.a24S * Math.sin(2 * _loc2_)));
         _loc1_ = _loc1_.add(_loc21_.mul(this.a26 * Math.cos(2 * _loc2_) + this.a26S * Math.sin(2 * _loc2_)));
         _loc1_ = _loc1_.add(_loc24_.mul(this.a33 * Math.cos(3 * _loc2_) + this.a33S * Math.sin(3 * _loc2_)));
         _loc17_ = _loc1_.mul(2).modulus();
         _loc10_ = Math.round(_loc17_ * 750);
         _loc10_ = Math.max(Math.min(_loc10_,255),0);
         _loc19_ = _loc10_ * 65537;
         this.imageCanvas.lineStyle(_loc34_,_loc19_,100,false,"normal","none");
         _loc12_ = _loc2_ - 6.283185307179586 / _loc7_ / 2 - 0.04;
         _loc11_ = _loc2_ + 6.283185307179586 / _loc7_ / 2 + 0.04;
         this.imageCanvas.moveTo(x0 + _loc3_ * Math.cos(_loc12_),y0 - _loc3_ * Math.sin(_loc12_));
         this.imageCanvas.curveTo(x0 + _loc3_ * Math.cos(_loc2_) * _loc16_,y0 - _loc3_ * Math.sin(_loc2_) * _loc16_,x0 + _loc3_ * Math.cos(_loc11_),y0 - _loc3_ * Math.sin(_loc11_));
         _loc9_ = _loc9_ + 1;
      }
      _loc15_ += 1.85;
   }
   this.imageCanvas.lineStyle(1,65280,100,false,"none");
   this.imageCanvas.moveTo(x0 - radius,y0);
   this.imageCanvas.lineTo(x0 + radius,y0);
   this.imageCanvas.moveTo(x0,y0 - radius);
   this.imageCanvas.lineTo(x0,y0 + radius);
   this.imageCanvas.lineStyle(1,8421504,100,false,"none");
   this.imageCanvas.moveTo(x0 - radius,y0 - radius);
   this.imageCanvas.lineTo(x0 - radius,y0 + radius);
   this.imageCanvas.lineTo(x0 + radius,y0 + radius);
   this.imageCanvas.lineTo(x0 + radius,y0 - radius);
   this.imageCanvas.lineTo(x0 - radius,y0 - radius);
}.bind(t);
t.initImageCanvas = function(){
   this.imageCanvas.clear();
}.bind(t);
(function(){


this.cam = new Cam();
this.cam.movieWidth = 340;
this.cam.movieHeight = 300;
this.cam.magnification = 1.3;
this.cam.TransformMatrix = [[0.875581196339714,0.470903955974311,-0.107735940447267],[-0.218022337758022,0.584235800686769,0.781751104530348],[0.431072881140578,-0.660997725747702,0.614213462650831]];
this.radius += 2;
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
this.xAxis = new DirObject(this,"arrowAxis",new Vector(-120,0,0),new Vector(120,0,0));
this.yAxis = new DirObject(this,"arrowAxis",new Vector(0,-120,0),new Vector(0,120,0));
this.zAxis = new DirObject(this,"arrowAxis",new Vector(0,0,-100),new Vector(0,0,100));
this.xStr = new PtObject(this,"xStr",new Vector(125,0,0),100);
this.yStr = new PtObject(this,"yStr",new Vector(0,125,0),100);
this.zStr = new PtObject(this,"zStr",new Vector(0,0,105),100);
this.pupil = new Pupil(this,new Vector(0,0,0),new Vector(100,0,0),new Vector(0,100,0),new Vector(0,0,25),this.pupilFtn);
this.pupil.setColor(new LineColor(1,128,100),new FillColor(16744576,50));
this.cicle = new Ellipse(this,new Vector(0,0,0),new Vector(100,0,0),new Vector(0,100,0));
this.cicle.setColor(new LineColor(2,160,100),null);
this.specialFtn = new SpecialFtn();
this.a00 = 0;
this.a02 = 0;
this.a04 = 1;
this.a11 = 0;
this.a13 = 0;
this.a15 = 0;
this.a22 = 0;
this.a24 = 0;
this.a26 = 0;
this.a33 = 0;
this.a11S = 0;
this.a13S = 0;
this.a15S = 0;
this.a22S = 0;
this.a24S = 0;
this.a26S = 0;
this.a33S = 0;
this.changeState();
this.RedrawAll();

this.eventByBtn = false;
this.OListener = new Object();
this.OListener2 = new Object();
this.a00Slider.addEventListener("change",this.OListener);
this.a02Slider.addEventListener("change",this.OListener);
this.a04Slider.addEventListener("change",this.OListener);
this.a11Slider.addEventListener("change",this.OListener);
this.a13Slider.addEventListener("change",this.OListener);
this.a15Slider.addEventListener("change",this.OListener);
this.a22Slider.addEventListener("change",this.OListener);
this.a24Slider.addEventListener("change",this.OListener);
this.a26Slider.addEventListener("change",this.OListener);
this.a33Slider.addEventListener("change",this.OListener);
this.a11SliderS.addEventListener("change",this.OListener);
this.a13SliderS.addEventListener("change",this.OListener);
this.a15SliderS.addEventListener("change",this.OListener);
this.a22SliderS.addEventListener("change",this.OListener);
this.a24SliderS.addEventListener("change",this.OListener);
this.a26SliderS.addEventListener("change",this.OListener);
this.a33SliderS.addEventListener("change",this.OListener);
this.OListener.change = function(evt)
{
   if(!this.eventByBtn)
   {
      this.a00 = this.a00Slider.value;
      this.a02 = this.a02Slider.value;
      this.a04 = this.a04Slider.value;
      this.a11 = this.a11Slider.value;
      this.a13 = this.a13Slider.value;
      this.a15 = this.a15Slider.value;
      this.a22 = this.a22Slider.value;
      this.a24 = this.a24Slider.value;
      this.a26 = this.a26Slider.value;
      this.a33 = this.a33Slider.value;
      this.a11S = this.a11SliderS.value;
      this.a13S = this.a13SliderS.value;
      this.a15S = this.a15SliderS.value;
      this.a22S = this.a22SliderS.value;
      this.a24S = this.a24SliderS.value;
      this.a26S = this.a26SliderS.value;
      this.a33S = this.a33SliderS.value;
      this.changeState();
   }
};
this.clearBtn.addEventListener("click",this.OListener);
this.OListener.click = function(evt)
{
   if(evt.target == this.clearBtn)
   {
      this.eventByBtn = true;
      this.a00Slider.value = 0;
      this.a02Slider.value = 0;
      this.a04Slider.value = 0;
      this.a11Slider.value = 0;
      this.a13Slider.value = 0;
      this.a15Slider.value = 0;
      this.a22Slider.value = 0;
      this.a24Slider.value = 0;
      this.a26Slider.value = 0;
      this.a33Slider.value = 0;
      this.a11SliderS.value = 0;
      this.a13SliderS.value = 0;
      this.a15SliderS.value = 0;
      this.a22SliderS.value = 0;
      this.a24SliderS.value = 0;
      this.a26SliderS.value = 0;
      this.eventByBtn = false;
      this.a33SliderS.value = 0;
      this.changeState();
   }
};
this.imageBtn.addEventListener("click",this.OListener2);
this.OListener2.click = function(evt)
{
   if(evt.target == this.imageBtn)
   {
      this.makeImage();
   }
};
this.numOfGraphSpinor.addEventListener("change",this.OListener2);
this.OListener2.change = function(evt)
{
   this.numOfGraph = this.numOfGraphSpinor.value;
   this.initImageCanvas();
};




this.sp = new SpecialFtn();
this.imageCanvas = this.createEmptyMovieClip("graphMove",500);
this.numOfGraph = 3;
this.makeImage();
}).call(t);
return t;}
