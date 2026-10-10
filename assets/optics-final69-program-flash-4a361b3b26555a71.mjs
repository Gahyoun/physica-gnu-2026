import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-4a361b3b26555a71", "title": "꼬인 네마틱 액정 모의실험", "source": "http://physica.gnu.ac.kr/phtml/optics/polarization/liquidcrystal/stnsimV2.swf", "sourceFile": "stnsimV2.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/polarization/liquidcrystal/stnsimV2.swf", "originalSHA256": "7d2d1a632ce8e05f1aeda075225f54ef20b1e629f64fbe1faa35edaf3d56279f", "lesson": "5-3-8-4", "width": 700.0, "height": 460.0, "fps": 12.0, "type": "stn", "as3": true, "animated": true, "controls": [{"clip": "lengthSlider", "label": "길이 / µm", "min": 2.0, "max": 25.0, "step": 0.2, "value": 15.0}, {"clip": "twistSlider", "label": "비틀림 / °", "min": 0.0, "max": 720.0, "step": 5.0, "value": 90.0}, {"clip": "neSlider", "label": "이상 굴절률", "min": 1.25, "max": 2.5, "step": 0.01, "value": 1.7}, {"clip": "pol1AngleSlider", "label": "입사 편광판 / °", "min": -90.0, "max": 90.0, "step": 1.0, "value": 0.0}, {"clip": "noSlider", "label": "정상 굴절률", "min": 1.25, "max": 2.5, "step": 0.01, "value": 1.5}, {"clip": "pol2AngleSlider", "label": "출사 편광판 / °", "min": -90.0, "max": 90.0, "step": 1.0, "value": 0.0}, {"clip": "lambdaSlider", "label": "파장 / nm", "min": 300.0, "max": 1000.0, "step": 5.0, "value": 500.0}, {"clip": "zPosSlider", "label": "관측 깊이 / µm", "min": 0.0, "max": 15.0, "step": 0.1, "value": 7.5}], "checks": [], "buttons": [{"clip": "startBtn", "label": "동작", "alternate": "정지", "toggle": true, "value": true}], "placements": {"arrowPol": {"x": 612.65, "y": 8.55, "depth": 3, "width": 79.998779296875, "height": 5.593719482421875}, "arrowRed": {"x": 612.65, "y": 24.5, "depth": 5, "width": 79.998779296875, "height": 7.9913330078125}, "lambdaStr": {"x": 631.45, "y": 39.15, "depth": 8, "width": null, "height": null}, "outputStr": {"x": 611.95, "y": 114, "depth": 9, "width": null, "height": null}, "polStr": {"x": -63.1, "y": 35.6, "depth": 10, "width": null, "height": null}, "polStr2": {"x": -53.1, "y": 45.6, "depth": 12, "width": null, "height": null}, "LCStr": {"x": -82.3, "y": 60.6, "depth": 14, "width": null, "height": null}, "marker": {"x": 742.3, "y": 278.35, "depth": 27, "width": 10, "height": 10}, "ellipticityAngleStr": {"x": 569.6, "y": 307, "depth": 32, "width": null, "height": null}, "azimuthStr": {"x": 569.75, "y": 338.15, "depth": 33, "width": null, "height": null}, "directorStr": {"x": 569.75, "y": 353.1, "depth": 35, "width": null, "height": null}, "ellipticityStr": {"x": 569.75, "y": 323, "depth": 37, "width": null, "height": null}, "depthStr": {"x": 565.9, "y": 371.95, "depth": 39, "width": null, "height": null}, "outputRefStr": {"x": 613.95, "y": 78, "depth": 41, "width": null, "height": null}, "startBtn": {"x": 476.45, "y": 433.7, "depth": 45, "width": 70, "height": 20}, "lengthSlider": {"x": 51.4, "y": 361.75, "depth": 46, "width": 150, "height": 13}, "twistSlider": {"x": 314.05, "y": 389.8, "depth": 47, "width": 150, "height": 13}, "neSlider": {"x": 51.4, "y": 389.15, "depth": 48, "width": 150, "height": 13}, "pol1AngleSlider": {"x": 314.05, "y": 417.2, "depth": 49, "width": 150, "height": 13}, "noSlider": {"x": 51.4, "y": 416.4, "depth": 50, "width": 150, "height": 13}, "pol2AngleSlider": {"x": 314.05, "y": 444.45, "depth": 51, "width": 150, "height": 13}, "lambdaSlider": {"x": 51.4, "y": 445.45, "depth": 52, "width": 150, "height": 13}, "zPosSlider": {"x": 272, "y": 364.45, "depth": 53, "width": 150, "height": 13}, "helpText": {"x": 7.35, "y": 20.55, "depth": 58, "width": 157.5, "height": 56.2}}};
export function createTimeline(){
class JonesMatrix {
element = null;
constructor(param1, param2, param3, param4){
         
         this.element = new Array(2);
         this.element[0] = new Array(2);
         this.element[1] = new Array(2);
         this.element[0][0] = param1;
         this.element[0][1] = param2;
         this.element[1][0] = param3;
         this.element[1][1] = param4;
      }
mul(param1){
         let _loc4_ = 0;
         let _loc5_ = 0;
         let _loc2_ = new Array(2);
         let _loc3_ = 0;
         while(_loc3_ < 2)
         {
            _loc2_[_loc3_] = new Array(2);
            _loc4_ = int(0);
            while(_loc4_ < 2)
            {
               _loc2_[_loc3_][_loc4_] = new Complex();
               _loc5_ = int(0);
               while(_loc5_ < 2)
               {
                  _loc2_[_loc3_][_loc4_] = _loc2_[_loc3_][_loc4_].add(this.element[_loc3_][_loc5_].prod(param1.element[_loc5_][_loc4_]));
                  _loc5_++;
               }
               _loc4_++;
            }
            _loc3_++;
         }
         return new JonesMatrix(_loc2_[0][0],_loc2_[0][1],_loc2_[1][0],_loc2_[1][1]);
      }
applyJones(param1){
         let _loc4_ = 0;
         let _loc2_ = new Array(2);
         let _loc3_ = 0;
         while(_loc3_ < 2)
         {
            _loc2_[_loc3_] = new Complex(0,0);
            _loc4_ = int(0);
            while(_loc4_ < 2)
            {
               _loc2_[_loc3_] = _loc2_[_loc3_].add(this.element[_loc3_][_loc4_].prod(param1.element[_loc4_]));
               _loc4_++;
            }
            _loc3_++;
         }
         return new JonesVector(_loc2_[0],_loc2_[1]);
      }
}
class JonesVector {
element = null;
constructor(param1 = null, param2 = null){
         
         this.element = new Array(2);
         if(param1 != null)
         {
            this.element[0] = param1;
         }
         else
         {
            this.element[0] = new Complex(1,0);
         }
         if(param2 != null)
         {
            this.element[1] = param2;
         }
         else
         {
            this.element[1] = new Complex(1,0);
         }
      }
intensity(){
         return this.element[0].absSquare() + this.element[1].absSquare();
      }
setByAE(param1, param2){
         let _loc3_ = Math.tan(param1);
         let _loc4_ = Math.tan(param2);
         let _loc5_ = _loc3_ * (1 - _loc4_ * _loc4_) / (1 + _loc3_ * _loc3_ * _loc4_ * _loc4_);
         let _loc6_ = -_loc4_ * (1 + _loc3_ * _loc3_) / (1 + _loc3_ * _loc3_ * _loc4_ * _loc4_);
         let _loc7_ = Math.atan2(_loc6_,_loc5_);
         let _loc8_ = Math.sqrt(_loc5_ * _loc5_ + _loc6_ * _loc6_);
         this.element[0] = new Complex(1,0);
         this.element[1] = new Complex(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         this.normalization();
      }
normalization(){
         let _loc1_ = Math.sqrt(this.element[0].absSquare() + this.element[1].absSquare());
         this.element[0] = this.element[0].mul(1 / _loc1_);
         this.element[1] = this.element[1].mul(1 / _loc1_);
      }
}
class Point3D {
x = 0;
y = 0;
z = 0;
constructor(param1 = 0, param2 = 0, param3 = 0){
         
         this.x = param1;
         this.y = param2;
         this.z = param3;
      }
add(param1){
         let _loc2_ = this.x + param1.x;
         let _loc3_ = this.y + param1.y;
         let _loc4_ = this.z + param1.z;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
subtract(param1){
         let _loc2_ = this.x - param1.x;
         let _loc3_ = this.y - param1.y;
         let _loc4_ = this.z - param1.z;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
crossProduct(param1){
         let _loc2_ = this.y * param1.z - this.z * param1.y;
         let _loc3_ = this.z * param1.x - this.x * param1.z;
         let _loc4_ = this.x * param1.y - this.y * param1.x;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
dotProduct(param1){
         return this.x * param1.x + this.y * param1.y + this.z * param1.z;
      }
mul(param1){
         let _loc2_ = param1 * this.x;
         let _loc3_ = param1 * this.y;
         let _loc4_ = param1 * this.z;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
div(param1){
         let _loc2_ = this.x / param1;
         let _loc3_ = this.y / param1;
         let _loc4_ = this.z / param1;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
mulByMatrix(param1){
         let _loc2_ = param1[0][0] * this.x + param1[0][1] * this.y + param1[0][2] * this.z;
         let _loc3_ = param1[1][0] * this.x + param1[1][1] * this.y + param1[1][2] * this.z;
         let _loc4_ = param1[2][0] * this.x + param1[2][1] * this.y + param1[2][2] * this.z;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
norm(){
         return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
average2(param1){
         return this.add(param1).div(2);
      }
average3(param1, param2){
         return this.add(param1).add(param2).div(3);
      }
distance(param1){
         return Math.sqrt((this.x - param1.x) * (this.x - param1.x) + (this.y - param1.y) * (this.y - param1.y) + (this.z - param1.z) * (this.z - param1.z));
      }
eulerTransform(param1, param2, param3){
         let _loc4_ = Math.cos(param1);
         let _loc5_ = Math.sin(param1);
         let _loc6_ = Math.cos(param2);
         let _loc7_ = Math.sin(param2);
         let _loc8_ = Math.cos(param3);
         let _loc9_ = Math.sin(param3);
         let _loc10_ = [[],[],[]];
         _loc10_[0][0] = _loc8_ * _loc4_ - _loc6_ * _loc5_ * _loc9_;
         _loc10_[0][1] = -_loc9_ * _loc4_ - _loc6_ * _loc5_ * _loc8_;
         _loc10_[0][2] = _loc7_ * _loc5_;
         _loc10_[1][0] = _loc8_ * _loc5_ + _loc6_ * _loc4_ * _loc9_;
         _loc10_[1][1] = -_loc9_ * _loc5_ + _loc6_ * _loc4_ * _loc8_;
         _loc10_[1][2] = -_loc7_ * _loc4_;
         _loc10_[2][0] = _loc7_ * _loc9_;
         _loc10_[2][1] = _loc7_ * _loc8_;
         _loc10_[2][2] = _loc6_;
         return this.mulByMatrix(_loc10_);
      }
translation(param1, param2, param3){
         return this.add(new Point3D(param1,param2,param3));
      }
dilation(param1, param2, param3){
         return new Point3D(param1 * this.x,param2 * this.y,param3 * this.z);
      }
}
class Sprite3D extends Sprite {
depth = 0;
constructor(){super();
         
      }
}
class Cylinder {
NUM_SEGMENT = 8;
center = null;
xDir = null;
yDir = null;
zDir = null;
lineStyle = null;
fillStyleTB = null;
fillStyleS = null;
mcTagT = new Array(this.NUM_SEGMENT);
mcTagB = new Array(this.NUM_SEGMENT);
mcTagS = new Array(this.NUM_SEGMENT);
mcTagE = null;
constructor(param1, param2, param3, param4, param5){
         
         this.center = param2;
         this.xDir = param3;
         this.yDir = param4;
         this.zDir = param5;
         this.fillStyleTB = null;
         this.fillStyleS = null;
         this.lineStyle = new LineStyle(1,8421504,100);
         let _loc6_ = 1;
         while(_loc6_ <= this.NUM_SEGMENT)
         {
            this.mcTagT[_loc6_] = new Sprite3D();
            param1.addChild(this.mcTagT[_loc6_]);
            this.mcTagB[_loc6_] = new Sprite3D();
            param1.addChild(this.mcTagB[_loc6_]);
            this.mcTagS[_loc6_] = new Sprite3D();
            param1.addChild(this.mcTagS[_loc6_]);
            _loc6_++;
         }
         this.mcTagE = new Sprite3D();
         param1.addChild(this.mcTagE);
      }
setStyle(param1, param2, param3){
         this.lineStyle = param1;
         this.fillStyleTB = param2;
         this.fillStyleS = param3;
      }
draw(param1){
         let _loc2_ = 0;
         let _loc12_ = null;
         let _loc13_ = null;
         let _loc14_ = null;
         let _loc15_ = null;
         let _loc16_ = null;
         let _loc17_ = null;
         let _loc18_ = null;
         let _loc19_ = null;
         let _loc20_ = NaN;
         let _loc21_ = null;
         let _loc22_ = null;
         let _loc23_ = null;
         let _loc24_ = null;
         let _loc25_ = undefined;
         let _loc26_ = null;
         let _loc27_ = null;
         let _loc28_ = null;
         let _loc29_ = null;
         let _loc3_ = this.center.add(this.zDir);
         let _loc4_ = 2 * Math.PI / this.NUM_SEGMENT;
         let _loc5_ = 1 / Math.cos(_loc4_ / 2);
         let _loc6_ = false;
         if(this.fillStyleTB != null)
         {
            _loc6_ = true;
         }
         let _loc7_ = false;
         if(this.fillStyleS != null)
         {
            _loc7_ = true;
         }
         let _loc8_ = 0;
         let _loc9_ = this.findEdge(param1);
         this.mcTagE.graphics.clear();
         if(_loc9_[0] != undefined)
         {
            this.mcTagE.graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,this.lineStyle.alpha);
            _loc2_ = int(0);
            while(_loc2_ < 2)
            {
               if(!isNaN(_loc9_[_loc2_]))
               {
                  _loc16_ = this.center.add(this.xDir.mul(Math.cos(_loc9_[_loc2_]))).add(this.yDir.mul(Math.sin(_loc9_[_loc2_])));
                  _loc17_ = _loc3_.add(this.xDir.mul(Math.cos(_loc9_[_loc2_]))).add(this.yDir.mul(Math.sin(_loc9_[_loc2_])));
                  _loc18_ = param1.GetXY(_loc16_);
                  _loc19_ = param1.GetXY(_loc17_);
                  this.mcTagE.graphics.moveTo(_loc18_[0],_loc18_[1]);
                  this.mcTagE.graphics.lineTo(_loc19_[0],_loc19_[1]);
                  if(_loc2_ == 0)
                  {
                     this.mcTagE.depth = param1.GetCamDist(_loc16_.average2(_loc17_));
                  }
               }
               _loc2_++;
            }
            _loc8_ = Number(_loc9_[0]);
         }
         let _loc10_ = param1.GetXY(this.center);
         let _loc11_ = param1.GetXY(_loc3_);
         _loc2_ = int(0);
         while(_loc2_ <= this.NUM_SEGMENT)
         {
            _loc20_ = _loc8_ + _loc4_ * _loc2_;
            _loc21_ = this.center.add(this.xDir.mul(Math.cos(_loc20_))).add(this.yDir.mul(Math.sin(_loc20_)));
            _loc22_ = param1.GetXY(_loc21_);
            _loc23_ = _loc3_.add(this.xDir.mul(Math.cos(_loc20_))).add(this.yDir.mul(Math.sin(_loc20_)));
            _loc24_ = param1.GetXY(_loc23_);
            if(_loc2_ != 0)
            {
               _loc25_ = _loc8_ + _loc4_ * (_loc2_ - 0.5);
               _loc26_ = this.center.add(this.xDir.mul(Math.cos(_loc25_) * _loc5_)).add(this.yDir.mul(Math.sin(_loc25_) * _loc5_));
               _loc27_ = param1.GetXY(_loc26_);
               this.mcTagT[_loc2_].graphics.clear();
               this.mcTagT[_loc2_].graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,this.lineStyle.alpha);
               if(_loc6_)
               {
                  this.mcTagT[_loc2_].graphics.beginFill(this.fillStyleTB.fillColor,this.fillStyleTB.alpha);
               }
               this.mcTagT[_loc2_].graphics.moveTo(_loc13_[0],_loc13_[1]);
               this.mcTagT[_loc2_].graphics.curveTo(_loc27_[0],_loc27_[1],_loc22_[0],_loc22_[1]);
               this.mcTagT[_loc2_].depth = param1.GetCamDist(_loc12_.average3(_loc21_,_loc26_));
               if(_loc6_)
               {
                  this.mcTagT[_loc2_].graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,0);
                  this.mcTagT[_loc2_].graphics.lineTo(_loc10_[0],_loc10_[1]);
                  this.mcTagT[_loc2_].graphics.endFill();
               }
               _loc28_ = _loc3_.add(this.xDir.mul(Math.cos(_loc25_) * _loc5_)).add(this.yDir.mul(Math.sin(_loc25_) * _loc5_));
               _loc29_ = param1.GetXY(_loc28_);
               this.mcTagB[_loc2_].graphics.clear();
               this.mcTagB[_loc2_].graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,this.lineStyle.alpha);
               if(_loc6_)
               {
                  this.mcTagB[_loc2_].graphics.beginFill(this.fillStyleTB.fillColor,this.fillStyleTB.alpha);
               }
               this.mcTagB[_loc2_].graphics.moveTo(_loc15_[0],_loc15_[1]);
               this.mcTagB[_loc2_].graphics.curveTo(_loc29_[0],_loc29_[1],_loc24_[0],_loc24_[1]);
               this.mcTagB[_loc2_].depth = param1.GetCamDist(_loc14_.average3(_loc23_,_loc28_));
               if(_loc6_)
               {
                  this.mcTagB[_loc2_].graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,0);
                  this.mcTagB[_loc2_].graphics.lineTo(_loc11_[0],_loc11_[1]);
                  this.mcTagB[_loc2_].graphics.endFill();
               }
               this.mcTagS[_loc2_].graphics.clear();
               if(_loc7_)
               {
                  this.mcTagS[_loc2_].graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,0);
                  this.mcTagS[_loc2_].graphics.beginFill(this.fillStyleS.fillColor,this.fillStyleS.alpha);
                  this.mcTagS[_loc2_].graphics.moveTo(_loc13_[0],_loc13_[1]);
                  this.mcTagS[_loc2_].graphics.curveTo(_loc27_[0],_loc27_[1],_loc22_[0],_loc22_[1]);
                  this.mcTagS[_loc2_].graphics.lineTo(_loc24_[0],_loc24_[1]);
                  this.mcTagS[_loc2_].graphics.curveTo(_loc29_[0],_loc29_[1],_loc15_[0],_loc15_[1]);
                  this.mcTagS[_loc2_].graphics.endFill();
               }
               this.mcTagS[_loc2_].depth = param1.GetCamDist(_loc12_.average2(_loc23_));
            }
            _loc12_ = _loc21_;
            _loc13_ = _loc22_;
            _loc14_ = _loc23_;
            _loc15_ = _loc24_;
            _loc2_++;
         }
      }
findEdge(param1){
         let _loc2_ = 0;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = NaN;
         let _loc10_ = NaN;
         let _loc11_ = NaN;
         let _loc12_ = NaN;
         let _loc13_ = NaN;
         let _loc3_ = [];
         let _loc4_ = [];
         let _loc7_ = true;
         _loc2_ = int(0);
         while(_loc2_ <= 10)
         {
            _loc13_ = 2 * Math.PI * _loc2_ / 10;
            _loc6_ = this.zDirCrossTangential(param1,_loc13_);
            if(_loc2_ != 0)
            {
               if(_loc5_ * _loc6_ < 0)
               {
                  if(_loc7_)
                  {
                     _loc4_[0] = _loc2_ - 1;
                     _loc7_ = false;
                  }
                  else
                  {
                     _loc4_[1] = _loc2_ - 1;
                  }
               }
            }
            _loc5_ = _loc6_;
            _loc2_++;
         }
         if(_loc7_)
         {
            return _loc3_;
         }
         _loc2_ = int(0);
         while(_loc2_ < 2)
         {
            _loc8_ = _loc4_[_loc2_] * 2 * Math.PI / 10;
            _loc9_ = (_loc4_[_loc2_] + 1) * 2 * Math.PI / 10;
            _loc11_ = 0;
            do
            {
               _loc10_ = (_loc8_ + _loc9_) / 2;
               _loc12_ = this.zDirCrossTangential(param1,_loc10_);
               if(_loc12_ * this.zDirCrossTangential(param1,_loc8_) < 0)
               {
                  _loc9_ = _loc10_;
               }
               else
               {
                  _loc8_ = _loc10_;
               }
            }
            while(_loc11_++ < 10 && Math.abs(_loc12_) > 0.001);
            _loc3_[_loc2_] = _loc10_;
            _loc2_++;
         }
         return _loc3_;
      }
zDirCrossTangential(param1, param2){
         let _loc3_ = this.center.add(this.xDir.mul(Math.cos(param2))).add(this.yDir.mul(Math.sin(param2)));
         let _loc4_ = param1.GetXY(_loc3_);
         let _loc5_ = this.yDir.mul(Math.cos(param2)).subtract(this.xDir.mul(Math.sin(param2))).add(_loc3_);
         let _loc6_ = param1.GetXY(_loc5_);
         let _loc7_ = this.zDir.add(_loc3_);
         let _loc8_ = param1.GetXY(_loc7_);
         return (_loc6_[0] - _loc4_[0]) * (_loc8_[1] - _loc4_[1]) - (_loc6_[1] - _loc4_[1]) * (_loc8_[0] - _loc4_[0]);
      }
eulerTransform(param1, param2, param3){
         this.center = this.center.eulerTransform(param1,param2,param3);
         this.xDir = this.xDir.eulerTransform(param1,param2,param3);
         this.yDir = this.yDir.eulerTransform(param1,param2,param3);
         this.zDir = this.zDir.eulerTransform(param1,param2,param3);
      }
translation(param1, param2, param3){
         this.center = this.center.translation(param1,param2,param3);
      }
dilation(param1, param2, param3){
         this.center = this.center.dilation(param1,param2,param3);
         this.xDir = this.xDir.dilation(param1,param2,param3);
         this.yDir = this.yDir.dilation(param1,param2,param3);
         this.zDir = this.zDir.dilation(param1,param2,param3);
      }
}
class FillStyle {
fillColor = 8421504;
alpha = 1;
constructor(param1, param2 = 1){
         
         this.fillColor = param1;
         this.alpha = param2;
      }
}
class Complex {
x = 0;
y = 0;
constructor(param1 = 0, param2 = 0){
         
         this.x = param1;
         this.y = param2;
      }
add(param1){
         return new Complex(this.x + param1.x,this.y + param1.y);
      }
sub(param1){
         return new Complex(this.x - param1.x,this.y - param1.y);
      }
prod(param1){
         return new Complex(this.x * param1.x - this.y * param1.y,this.x * param1.y + this.y * param1.x);
      }
div(param1){
         let _loc2_ = param1.modulus();
         if(_loc2_ == 0)
         {
            return new Complex(NaN,NaN);
         }
         let _loc3_ = new Complex(this.x * param1.x + this.y * param1.y,-this.x * param1.y + this.y * param1.x);
         return _loc3_.mul(1 / _loc2_);
      }
mul(param1){
         return new Complex(this.x * param1,this.y * param1);
      }
exp(){
         let _loc1_ = Math.exp(this.x);
         return new Complex(_loc1_ * Math.cos(this.y),_loc1_ * Math.sin(this.y));
      }
modulus(){
         return Math.sqrt(this.x * this.x + this.y * this.y);
      }
absSquare(){
         return this.x * this.x + this.y * this.y;
      }
argument(){
         return Math.atan2(this.y,this.x);
      }
log(){
         return new Complex(Math.log(this.modulus()),this.argument());
      }
pow(param1){
         if(param1 == 0)
         {
            return new Complex(1,0);
         }
         if(this.x == 0 && this.y == 0)
         {
            return new Complex(0,0);
         }
         return this.log().mul(param1).exp();
      }
conjugate(){
         return new Complex(this.x,-this.y);
      }
}
class Ellipse {
NUM_SEGMENT = 8;
sp = null;
center = null;
xDir = null;
yDir = null;
lineStyle = null;
fillStyle = null;
startAngle = 0;
endAngle = 6.283185307179586;
mcTag = new Array(this.NUM_SEGMENT);
constructor(param1, param2, param3, param4, param5 = null, param6 = null){
         
         this.center = param2;
         this.xDir = param3;
         this.yDir = param4;
         if(param5 == null)
         {
            this.lineStyle = new LineStyle(1,8421504,1);
         }
         else
         {
            this.lineStyle = param5;
         }
         this.fillStyle = param6;
         let _loc7_ = 1;
         while(_loc7_ <= this.NUM_SEGMENT)
         {
            this.mcTag[_loc7_] = new Sprite3D();
            param1.addChild(this.mcTag[_loc7_]);
            _loc7_++;
         }
      }
setStyle(param1, param2 = null){
         this.lineStyle = param1;
         this.fillStyle = param2;
      }
setRange(param1, param2){
         this.startAngle = param1;
         this.endAngle = param2;
      }
draw(param1, param2 = true){
         let _loc7_ = null;
         let _loc8_ = null;
         let _loc10_ = NaN;
         let _loc11_ = null;
         let _loc12_ = null;
         let _loc13_ = undefined;
         let _loc14_ = null;
         let _loc15_ = null;
         let _loc3_ = (this.endAngle - this.startAngle) / this.NUM_SEGMENT;
         let _loc4_ = 1 / Math.cos(_loc3_ / 2);
         let _loc5_ = false;
         if(this.fillStyle != null)
         {
            _loc5_ = true;
         }
         let _loc6_ = param1.GetXY(this.center);
         let _loc9_ = 0;
         while(_loc9_ <= this.NUM_SEGMENT)
         {
            _loc10_ = this.startAngle + _loc3_ * _loc9_;
            _loc11_ = this.center.add(this.xDir.mul(Math.cos(_loc10_))).add(this.yDir.mul(Math.sin(_loc10_)));
            _loc12_ = param1.GetXY(_loc11_);
            if(_loc9_ != 0)
            {
               _loc13_ = this.startAngle + _loc3_ * (_loc9_ - 0.5);
               _loc14_ = this.center.add(this.xDir.mul(Math.cos(_loc13_) * _loc4_)).add(this.yDir.mul(Math.sin(_loc13_) * _loc4_));
               _loc15_ = param1.GetXY(_loc14_);
               this.mcTag[_loc9_].graphics.clear();
               if(param2)
               {
                  this.mcTag[_loc9_].graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,this.lineStyle.alpha);
                  if(_loc5_)
                  {
                     this.mcTag[_loc9_].graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
                  }
                  this.mcTag[_loc9_].graphics.moveTo(_loc8_[0],_loc8_[1]);
                  this.mcTag[_loc9_].graphics.curveTo(_loc15_[0],_loc15_[1],_loc12_[0],_loc12_[1]);
                  if(_loc5_)
                  {
                     this.mcTag[_loc9_].graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,0);
                     this.mcTag[_loc9_].graphics.lineTo(_loc6_[0],_loc6_[1]);
                     this.mcTag[_loc9_].graphics.endFill();
                  }
                  this.mcTag[_loc9_].depth = param1.GetCamDist(_loc7_.average3(_loc14_,_loc11_));
               }
            }
            _loc7_ = _loc11_;
            _loc8_ = _loc12_;
            _loc9_++;
         }
      }
eulerTransform(param1, param2, param3){
         this.center = this.center.eulerTransform(param1,param2,param3);
         this.xDir = this.xDir.eulerTransform(param1,param2,param3);
         this.yDir = this.yDir.eulerTransform(param1,param2,param3);
      }
translation(param1, param2, param3){
         this.center = this.center.translation(param1,param2,param3);
      }
dilation(param1, param2, param3){
         this.center = this.center.dilation(param1,param2,param3);
         this.xDir = this.xDir.dilation(param1,param2,param3);
         this.yDir = this.yDir.dilation(param1,param2,param3);
      }
}
class PtObject {
sDir = null;
scale = 0;
obj = null;
sp = null;
constructor(param1, param2, param3, param4){
         
         this.obj = param2;
         this.sDir = param3;
         this.scale = param4;
         this.sp = new Sprite3D();
         this.sp.addChild(param2);
         param1.addChild(this.sp);
      }
draw(param1, param2 = true){
         this.sp.visible = param2;
         if(!param2)
         {
            return;
         }
         let _loc3_ = param1.GetXY(this.sDir);
         this.obj.x = _loc3_[0];
         this.obj.y = _loc3_[1];
         let _loc4_ = param1.GetCamDist(this.sDir);
         this.sp.depth = _loc4_;
         this.obj.scaleX = param1.f * param1.magnification * this.scale / _loc4_;
         this.obj.scaleY = param1.f * param1.magnification * this.scale / _loc4_;
      }
eulerTransform(param1, param2, param3){
         this.sDir = this.sDir.eulerTransform(param1,param2,param3);
      }
translation(param1, param2, param3){
         this.sDir = this.sDir.translation(param1,param2,param3);
      }
dilation(param1, param2, param3){
         this.sDir = this.sDir.dilation(param1,param2,param3);
      }
}
class Polarizer extends Ellipse {
SPACE = 7;
orientation = 0;
sp1 = null;
constructor(param1, param2, param3, param4, param5){
         super(param1,param2,param3,param4);
         this.orientation = param5;
         this.sp1 = new Sprite3D();
         param1.addChild(this.sp1);
      }
draw(param1, param2 = true){
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = null;
         let _loc10_ = null;
         let _loc11_ = null;
         let _loc12_ = null;
         super.draw(param1,param2);
         this.sp1.graphics.clear();
         if(!param2)
         {
            return;
         }
         this.sp1.graphics.lineStyle(1,2105552,75);
         let _loc3_ = this.xDir.norm();
         let _loc4_ = Math.floor(_loc3_ * 0.95 / this.SPACE);
         let _loc5_ = -_loc4_;
         while(_loc5_ <= _loc4_)
         {
            _loc6_ = _loc5_ * this.SPACE;
            _loc7_ = this.orientation + Math.asin(_loc6_ / _loc3_);
            _loc8_ = Math.PI - _loc7_ + 2 * this.orientation;
            _loc9_ = this.center.add(this.xDir.mul(Math.cos(_loc7_))).add(this.yDir.mul(Math.sin(_loc7_)));
            _loc10_ = param1.GetXY(_loc9_);
            _loc11_ = this.center.add(this.xDir.mul(Math.cos(_loc8_))).add(this.yDir.mul(Math.sin(_loc8_)));
            _loc12_ = param1.GetXY(_loc11_);
            this.sp1.graphics.moveTo(_loc10_[0],_loc10_[1]);
            this.sp1.graphics.lineTo(_loc12_[0],_loc12_[1]);
            _loc5_++;
         }
         this.sp1.depth = param1.GetCamDist(this.center);
      }
eulerTransform(param1, param2, param3){
         super.eulerTransform(param1,param2,param3);
      }
translation(param1, param2, param3){
         super.translation(param1,param2,param3);
      }
dilation(param1, param2, param3){
         super.dilation(param1,param2,param3);
      }
}
class Line2 {
center = null;
theta = 0;
phi = 0;
length = 0;
lineStyle = null;
isRound = true;
sp = null;
constructor(param1, param2 = null, param3 = 0, param4 = 0, param5 = 5, param6 = null){
         
         if(param2 == null)
         {
            this.center = new Point3D(0,0,0);
         }
         else
         {
            this.center = param2;
         }
         this.theta = param3;
         this.phi = param4;
         this.length = param5;
         if(param6 == null)
         {
            this.lineStyle = new LineStyle(2,8421504,1);
         }
         else
         {
            this.lineStyle = param6;
         }
         this.sp = new Sprite3D();
         param1.addChild(this.sp);
      }
setStyle(param1){
         this.lineStyle = param1;
      }
setOrientation(param1 = 0, param2 = 0){
         this.theta = param1;
         this.phi = param2;
      }
draw(param1){
         let _loc2_ = this.length / 2;
         let _loc3_ = Math.cos(this.theta);
         let _loc4_ = Math.sin(this.theta);
         let _loc5_ = Math.cos(this.phi);
         let _loc6_ = Math.sin(this.phi);
         let _loc7_ = new Point3D(this.center.x - _loc2_ * _loc4_ * _loc5_,this.center.y - _loc2_ * _loc4_ * _loc6_,this.center.z - _loc2_ * _loc3_);
         let _loc8_ = new Point3D(this.center.x + _loc2_ * _loc4_ * _loc5_,this.center.y + _loc2_ * _loc4_ * _loc6_,this.center.z + _loc2_ * _loc3_);
         this.sp.graphics.clear();
         let _loc9_ = _loc7_.average2(_loc8_);
         let _loc10_ = param1.GetXY(_loc7_);
         let _loc11_ = param1.GetXY(_loc8_);
         let _loc12_ = Math.round(param1.Get2dLength(_loc9_,this.lineStyle.lineThickness));
         if(this.isRound)
         {
            this.sp.graphics.lineStyle(_loc12_,this.lineStyle.lineColor,this.lineStyle.alpha,false,LineScaleMode.NORMAL,CapsStyle.ROUND);
         }
         else
         {
            this.sp.graphics.lineStyle(_loc12_,this.lineStyle.lineColor,this.lineStyle.alpha,false,LineScaleMode.NORMAL,CapsStyle.NONE);
         }
         this.sp.graphics.moveTo(_loc10_[0],_loc10_[1]);
         this.sp.graphics.lineTo(_loc11_[0],_loc11_[1]);
         this.sp.depth = param1.GetCamDist(_loc9_);
      }
}
class LineStyle {
lineThickness = 1;
lineColor = 8421504;
alpha = 80;
constructor(param1, param2, param3 = 1){
         
         this.lineThickness = param1;
         this.lineColor = param2;
         this.alpha = param3;
      }
}
class PolarizationState {
NUM_SEGMENT = 32;
time = 0;
omega = 1;
center = null;
xDir = null;
yDir = null;
zUnit = null;
zDir = null;
xAmp = 0;
yAmp = 0;
xPhase = 0;
yPhase = 0;
traceStyle = null;
axisStyle = null;
efieldStyle = null;
outlineStyle = null;
fillStyle = null;
markerStyle = null;
markerRadius = 0;
showBack = true;
showAxis = false;
showAxisName = true;
showZAxis = true;
arrowSize = 6;
isNormalization = true;
showFrame = false;
mcTagBack = null;
mcTagTrace = null;
mcTagEfield = null;
mcTagMarker = null;
constructor(param1, param2, param3, param4, param5 = true){
         
         this.isNormalization = param5;
         this.center = param2;
         this.xDir = param3;
         this.yDir = param4;
         this.zUnit = this.xDir.crossProduct(this.yDir);
         this.zUnit = this.zUnit.div(this.zUnit.norm());
         this.zDir = this.zUnit.mul(this.xDir.norm());
         this.xAmp = 1;
         this.yAmp = 1;
         this.xPhase = 0;
         this.yPhase = Math.PI / 2;
         this.normalization();
         this.setCustomStyle(1);
         this.mcTagBack = new Sprite3D();
         this.mcTagTrace = new Sprite3D();
         this.mcTagEfield = new Sprite3D();
         this.mcTagMarker = new Sprite3D();
         param1.addChild(this.mcTagBack);
         param1.addChild(this.mcTagTrace);
         param1.addChild(this.mcTagEfield);
         param1.addChild(this.mcTagMarker);
      }
setByJones(param1, param2, param3, param4){
         this.xAmp = param1;
         this.yAmp = param2;
         this.xPhase = param3;
         this.yPhase = param4;
         this.normalization();
      }
setByJonesVector(param1){
         this.xAmp = param1.element[0].modulus();
         this.yAmp = param1.element[1].modulus();
         this.xPhase = param1.element[0].argument();
         this.yPhase = param1.element[1].argument();
         this.normalization();
      }
setByAE(param1, param2){
         let _loc3_ = Math.tan(param1);
         let _loc4_ = Math.tan(param2);
         let _loc5_ = _loc3_ * (1 - _loc4_ * _loc4_) / (1 + _loc3_ * _loc3_ * _loc4_ * _loc4_);
         let _loc6_ = -_loc4_ * (1 + _loc3_ * _loc3_) / (1 + _loc3_ * _loc3_ * _loc4_ * _loc4_);
         let _loc7_ = Math.atan2(_loc6_,_loc5_);
         let _loc8_ = Math.sqrt(_loc5_ * _loc5_ + _loc6_ * _loc6_);
         this.xAmp = 1;
         this.yAmp = _loc8_;
         this.xPhase = 0;
         this.yPhase = _loc7_;
         this.normalization();
      }
calcThetaEpsilon(){
         let _loc1_ = this.yAmp / this.xAmp;
         let _loc2_ = this.yPhase - this.xPhase;
         let _loc3_ = 1 / 2 * Math.atan2(2 * _loc1_ * Math.cos(_loc2_),1 - _loc1_ * _loc1_);
         let _loc4_ = -1 / 2 * Math.asin(2 * _loc1_ * Math.sin(_loc2_) / (1 + _loc1_ * _loc1_));
         let _loc5_ = new Array(2);
         _loc5_[0] = _loc3_;
         _loc5_[1] = _loc4_;
         return _loc5_;
      }
Rotate(param1){
         let _loc2_ = this.calcThetaEpsilon();
         this.setByAE(_loc2_[0] + param1,_loc2_[1]);
      }
normalization(){
         if(!this.isNormalization)
         {
            return;
         }
         let _loc1_ = Math.sqrt(this.xAmp * this.xAmp + this.yAmp * this.yAmp);
         this.xAmp /= _loc1_;
         this.yAmp /= _loc1_;
      }
setShowOption(param1, param2 = true, param3 = true, param4 = false){
         this.showBack = param1;
         this.showAxis = param2;
         this.showFrame = param3;
         this.showAxisName = param4;
      }
setCustomStyle(param1){
         if(param1 == 1)
         {
            this.traceStyle = new LineStyle(1,1118719,0.9);
            this.axisStyle = new LineStyle(1,8421504,0.8);
            this.efieldStyle = new LineStyle(2,26112,0.7);
            this.outlineStyle = new LineStyle(1,0,0.5);
            this.fillStyle = new FillStyle(8388608,0.1);
            this.markerStyle = new FillStyle(16711680,0.75);
            this.markerRadius = 2.5;
         }
         else if(param1 == 2)
         {
            this.traceStyle = new LineStyle(1,6711039,0.9);
            this.axisStyle = new LineStyle(1,8421504,0.8);
            this.efieldStyle = new LineStyle(2,52224,0.7);
            this.outlineStyle = new LineStyle(1,16777215,0.5);
            this.fillStyle = new FillStyle(4210752,0.8);
            this.markerStyle = new FillStyle(16711680,0.75);
            this.markerRadius = 2.5;
         }
      }
draw(param1, param2 = true){
         let _loc3_ = NaN;
         let _loc5_ = null;
         let _loc6_ = null;
         let _loc9_ = null;
         let _loc10_ = null;
         let _loc11_ = null;
         let _loc12_ = null;
         let _loc13_ = null;
         let _loc14_ = null;
         let _loc15_ = null;
         let _loc16_ = null;
         let _loc17_ = null;
         let _loc18_ = null;
         let _loc19_ = null;
         let _loc20_ = null;
         let _loc21_ = null;
         let _loc22_ = null;
         let _loc23_ = null;
         let _loc24_ = null;
         let _loc4_ = 2 * Math.PI / this.omega / this.NUM_SEGMENT;
         let _loc7_ = param1.Get2dLength(this.center,1);
         this.mcTagBack.depth = param1.GetCamDist(this.center);
         this.mcTagBack.graphics.clear();
         if(this.showFrame)
         {
            this.mcTagBack.graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
            this.mcTagBack.graphics.lineStyle(this.outlineStyle.lineThickness * _loc7_,this.outlineStyle.lineColor,this.outlineStyle.alpha);
            _loc9_ = param1.GetXY(this.center.add(this.xDir).add(this.yDir));
            _loc10_ = param1.GetXY(this.center.subtract(this.xDir).add(this.yDir));
            _loc11_ = param1.GetXY(this.center.subtract(this.xDir).subtract(this.yDir));
            _loc12_ = param1.GetXY(this.center.add(this.xDir).subtract(this.yDir));
            this.mcTagBack.graphics.moveTo(_loc9_[0],_loc9_[1]);
            this.mcTagBack.graphics.lineTo(_loc10_[0],_loc10_[1]);
            this.mcTagBack.graphics.lineTo(_loc11_[0],_loc11_[1]);
            this.mcTagBack.graphics.lineTo(_loc12_[0],_loc12_[1]);
            this.mcTagBack.graphics.endFill();
         }
         this.mcTagTrace.graphics.clear();
         this.mcTagEfield.graphics.clear();
         this.mcTagMarker.graphics.clear();
         this.mcTagTrace.graphics.clear();
         while(this.mcTagTrace.numChildren > 0)
         {
            this.mcTagTrace.removeChildAt(0);
         }
         if(!param2)
         {
            return;
         }
         if(param1.GetXYZ(this.zUnit).z < 0 && !this.showBack)
         {
            return;
         }
         this.mcTagTrace.depth = param1.GetCamDist(this.center.add(this.zUnit));
         this.mcTagTrace.graphics.lineStyle(this.traceStyle.lineThickness * _loc7_,this.traceStyle.lineColor,this.traceStyle.alpha);
         let _loc8_ = 0;
         while(_loc8_ <= this.NUM_SEGMENT)
         {
            _loc3_ = _loc8_ * _loc4_;
            _loc13_ = this.center.add(this.CalcPolPoint3D(_loc3_));
            _loc14_ = param1.GetXY(_loc13_);
            if(_loc8_ != 0)
            {
               this.mcTagTrace.graphics.moveTo(_loc6_[0],_loc6_[1]);
               this.mcTagTrace.graphics.lineTo(_loc14_[0],_loc14_[1]);
            }
            _loc5_ = _loc13_;
            _loc6_ = _loc14_;
            _loc8_++;
         }
         if(this.showAxis)
         {
            this.mcTagTrace.graphics.lineStyle(this.axisStyle.lineThickness * _loc7_,this.axisStyle.lineColor,this.axisStyle.alpha);
            _loc15_ = param1.GetXY(this.center.subtract(this.xDir.mul(0.2)));
            _loc16_ = param1.GetXY(this.center.add(this.xDir.mul(1.2)));
            _loc17_ = param1.GetXY(this.center.subtract(this.yDir.mul(0.2)));
            _loc18_ = param1.GetXY(this.center.add(this.yDir.mul(1.2)));
            this.drawArrow(this.mcTagTrace,_loc15_,_loc16_,_loc7_);
            this.drawArrow(this.mcTagTrace,_loc17_,_loc18_,_loc7_);
            if(this.showZAxis)
            {
               _loc19_ = param1.GetXY(this.center.subtract(this.zDir.mul(0.2)));
               _loc20_ = param1.GetXY(this.center.add(this.zDir.mul(0.5)));
               this.drawArrow(this.mcTagTrace,_loc19_,_loc20_,_loc7_);
            }
            if(this.showAxisName)
            {
               _loc21_ = new TextFormat("Times New Roman",10 * this.axisStyle.lineThickness * _loc7_,this.axisStyle.lineColor,false,true);
               _loc22_ = new TextField();
               _loc22_.text = "x";
               _loc22_.setTextFormat(_loc21_);
               _loc22_.x = _loc16_[0];
               _loc22_.y = _loc16_[1] - 12 * _loc7_;
               this.mcTagTrace.addChild(_loc22_);
               _loc23_ = new TextField();
               _loc23_.text = "y";
               _loc23_.setTextFormat(_loc21_);
               _loc23_.x = _loc18_[0];
               _loc23_.y = _loc18_[1] - 5 * _loc7_;
               this.mcTagTrace.addChild(_loc23_);
               if(this.showZAxis)
               {
                  _loc24_ = new TextField();
                  _loc24_.text = "z";
                  _loc24_.setTextFormat(_loc21_);
                  _loc24_.x = _loc20_[0];
                  _loc24_.y = _loc20_[1] - 7 * _loc7_;
                  this.mcTagTrace.addChild(_loc24_);
               }
            }
         }
         this.drawEvolve(param1,param2);
      }
drawEvolve(param1, param2 = true){
         this.mcTagEfield.graphics.clear();
         this.mcTagMarker.graphics.clear();
         if(!param2)
         {
            return;
         }
         if(param1.GetXYZ(this.zUnit).z < 0 && !this.showBack)
         {
            return;
         }
         this.mcTagEfield.depth = param1.GetCamDist(this.center.add(this.zUnit.mul(2)));
         let _loc3_ = param1.GetXY(this.center);
         let _loc4_ = this.center.add(this.CalcPolPoint3D(this.time));
         let _loc5_ = param1.GetXY(_loc4_);
         let _loc6_ = param1.Get2dLength(this.center,this.efieldStyle.lineThickness);
         this.mcTagEfield.graphics.lineStyle(_loc6_,this.efieldStyle.lineColor,this.efieldStyle.alpha);
         this.mcTagEfield.graphics.moveTo(_loc3_[0],_loc3_[1]);
         this.mcTagEfield.graphics.lineTo(_loc5_[0],_loc5_[1]);
         let _loc7_ = param1.Get2dLength(_loc4_,this.markerRadius);
         this.mcTagMarker.graphics.beginFill(this.markerStyle.fillColor,this.markerStyle.alpha);
         this.mcTagMarker.graphics.lineStyle(0,this.markerStyle.fillColor,0);
         this.mcTagMarker.graphics.drawEllipse(_loc5_[0] - _loc7_,_loc5_[1] - _loc7_,_loc7_ * 2,_loc7_ * 2);
         this.mcTagMarker.graphics.endFill();
         this.mcTagMarker.depth = param1.GetCamDist(this.center.add(this.zUnit.mul(2)));
      }
drawArrow(param1, param2, param3, param4 = 1){
         let _loc5_ = undefined;
         let _loc6_ = undefined;
         let _loc7_ = undefined;
         param1.graphics.moveTo(param2[0],param2[1]);
         param1.graphics.lineTo(param3[0],param3[1]);
         if(this.arrowSize > 0.1)
         {
            _loc5_ = Math.sqrt((param2[0] - param3[0]) * (param2[0] - param3[0]) + (param2[1] - param3[1]) * (param2[1] - param3[1]));
            if(_loc5_ > 5)
            {
               _loc6_ = Math.atan2(param3[1] - param2[1],param3[0] - param2[0]);
               _loc7_ = this.arrowSize * param4;
               param1.graphics.lineTo(param3[0] + _loc7_ * Math.cos(_loc6_ + 2.9),param3[1] + _loc7_ * Math.sin(_loc6_ + 2.9));
               param1.graphics.moveTo(param3[0],param3[1]);
               param1.graphics.lineTo(param3[0] + _loc7_ * Math.cos(_loc6_ - 2.9),param3[1] + _loc7_ * Math.sin(_loc6_ - 2.9));
            }
         }
      }
CalcPolPoint3D(param1){
         let _loc2_ = this.xDir.mul(this.xAmp * Math.cos(-this.omega * param1 + this.xPhase));
         let _loc3_ = this.yDir.mul(this.yAmp * Math.cos(-this.omega * param1 + this.yPhase));
         return _loc2_.add(_loc3_);
      }
eulerTransform(param1, param2, param3){
         this.center = this.center.eulerTransform(param1,param2,param3);
         this.xDir = this.xDir.eulerTransform(param1,param2,param3);
         this.yDir = this.yDir.eulerTransform(param1,param2,param3);
         this.zDir = this.zDir.eulerTransform(param1,param2,param3);
         this.zUnit = this.zUnit.eulerTransform(param1,param2,param3);
      }
translation(param1, param2, param3){
         this.center = this.center.translation(param1,param2,param3);
      }
dilation(param1, param2, param3){
         this.center = this.center.dilation(param1,param2,param3);
         this.xDir = this.xDir.dilation(param1,param2,param3);
         this.yDir = this.yDir.dilation(param1,param2,param3);
         this.zDir = this.zDir.dilation(param1,param2,param3);
      }
}
class Plate {
center = null;
xDir = null;
yDir = null;
lineStyle = null;
fillStyle = null;
mcTag = new Array(8);
constructor(param1, param2, param3, param4, param5 = null, param6 = null){
         
         this.center = param2;
         this.xDir = param3;
         this.yDir = param4;
         if(param5 == null)
         {
            this.lineStyle = new LineStyle(2,8421504,1);
         }
         else
         {
            this.lineStyle = param5;
         }
         this.fillStyle = param6;
         let _loc7_ = 1;
         while(_loc7_ <= 8)
         {
            this.mcTag[_loc7_] = new Sprite3D();
            param1.addChild(this.mcTag[_loc7_]);
            _loc7_++;
         }
      }
setStyle(param1, param2 = null){
         this.lineStyle = param1;
         this.fillStyle = param2;
      }
draw(param1){
         let _loc4_ = null;
         let _loc5_ = null;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = null;
         let _loc10_ = null;
         let _loc2_ = false;
         if(this.fillStyle != null)
         {
            _loc2_ = true;
         }
         let _loc3_ = param1.GetXY(this.center);
         let _loc6_ = 0;
         while(_loc6_ <= 8)
         {
            switch(_loc6_)
            {
               case 0:
                  _loc7_ = 1;
                  _loc8_ = 0;
                  break;
               case 1:
                  _loc7_ = 1;
                  _loc8_ = 1;
                  break;
               case 2:
                  _loc7_ = 0;
                  _loc8_ = 1;
                  break;
               case 3:
                  _loc7_ = -1;
                  _loc8_ = 1;
                  break;
               case 4:
                  _loc7_ = -1;
                  _loc8_ = 0;
                  break;
               case 5:
                  _loc7_ = -1;
                  _loc8_ = -1;
                  break;
               case 6:
                  _loc7_ = 0;
                  _loc8_ = -1;
                  break;
               case 7:
                  _loc7_ = 1;
                  _loc8_ = -1;
                  break;
               case 8:
                  _loc7_ = 1;
                  _loc8_ = 0;
            }
            _loc9_ = this.center.add(this.xDir.mul(_loc7_)).add(this.yDir.mul(_loc8_));
            _loc10_ = param1.GetXY(_loc9_);
            if(_loc6_ != 0)
            {
               this.mcTag[_loc6_].graphics.clear();
               this.mcTag[_loc6_].graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,this.lineStyle.alpha,false,LineScaleMode.NORMAL,CapsStyle.NONE);
               if(_loc2_)
               {
                  this.mcTag[_loc6_].graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
               }
               this.mcTag[_loc6_].graphics.moveTo(_loc5_[0],_loc5_[1]);
               this.mcTag[_loc6_].graphics.lineTo(_loc10_[0],_loc10_[1]);
               if(_loc2_)
               {
                  this.mcTag[_loc6_].graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,0);
                  this.mcTag[_loc6_].graphics.lineTo(_loc3_[0],_loc3_[1]);
                  this.mcTag[_loc6_].graphics.endFill();
               }
               this.mcTag[_loc6_].depth = param1.GetCamDist(_loc4_.average2(_loc9_));
            }
            _loc4_ = _loc9_;
            _loc5_ = _loc10_;
            _loc6_++;
         }
      }
eulerTransform(param1, param2, param3){
         this.center = this.center.eulerTransform(param1,param2,param3);
         this.xDir = this.xDir.eulerTransform(param1,param2,param3);
         this.yDir = this.yDir.eulerTransform(param1,param2,param3);
      }
translation(param1, param2, param3){
         this.center = this.center.translation(param1,param2,param3);
      }
dilation(param1, param2, param3){
         this.center = this.center.dilation(param1,param2,param3);
         this.xDir = this.xDir.dilation(param1,param2,param3);
         this.yDir = this.yDir.dilation(param1,param2,param3);
      }
}
class Arrow {
sDir = null;
eDir = null;
thickness = 0;
fillStyle = null;
arrowBoth = false;
arrowReferenceSize = 1;
arrowReferenceAngle = 1;
sp = null;
constructor(param1, param2, param3, param4 = 3, param5 = null, param6 = false){
         
         this.sDir = param2;
         this.eDir = param3;
         this.thickness = param4;
         if(param5 == null)
         {
            this.fillStyle = new FillStyle(8421504,1);
         }
         else
         {
            this.fillStyle = param5;
         }
         this.arrowBoth = param6;
         this.sp = new Sprite3D();
         param1.addChild(this.sp);
      }
setStyle(param1){
         this.fillStyle = param1;
      }
draw(param1, param2 = true){
         let _loc19_ = NaN;
         this.sp.graphics.clear();
         if(!param2)
         {
            return;
         }
         let _loc3_ = this.sDir.average2(this.eDir);
         let _loc4_ = param1.GetXY(this.sDir);
         let _loc5_ = param1.GetXY(this.eDir);
         let _loc6_ = param1.Get2dLength(_loc3_,this.thickness);
         let _loc7_ = param1.GetDirCosine(this.sDir,this.eDir);
         let _loc8_ = _loc6_ * 10 * this.arrowReferenceSize;
         let _loc9_ = _loc8_ * _loc7_;
         let _loc10_ = Math.PI / 18 * this.arrowReferenceAngle;
         let _loc11_ = Math.atan2(Math.tan(_loc10_),_loc7_);
         let _loc12_ = Math.sqrt((_loc5_[0] - _loc4_[0]) * (_loc5_[0] - _loc4_[0]) + (_loc5_[1] - _loc4_[1]) * (_loc5_[1] - _loc4_[1]));
         if(_loc12_ < 0.5)
         {
            return;
         }
         let _loc13_ = Math.atan2(_loc5_[1] - _loc4_[1],_loc5_[0] - _loc4_[0]);
         let _loc14_ = Math.PI - _loc11_;
         let _loc15_ = _loc9_ / Math.cos(_loc11_);
         if(this.arrowBoth && _loc12_ < 2 * _loc9_ || !this.arrowBoth && _loc12_ < _loc9_)
         {
            if(_loc12_ < 1.5)
            {
               this.sp.graphics.lineStyle(_loc6_,this.fillStyle.fillColor,this.fillStyle.alpha,false,LineScaleMode.NORMAL,CapsStyle.NONE);
               this.sp.graphics.moveTo(_loc4_[0],_loc4_[1]);
               this.sp.graphics.lineTo(_loc5_[0],_loc5_[1]);
               this.sp.depth = param1.GetCamDist(_loc3_);
               return;
            }
            if(!this.arrowBoth)
            {
               _loc19_ = _loc12_ / Math.cos(_loc11_);
               this.sp.graphics.lineStyle(1,0,0);
               this.sp.graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
               this.sp.graphics.moveTo(_loc5_[0],_loc5_[1]);
               this.sp.graphics.lineTo(_loc5_[0] + _loc19_ * Math.cos(_loc13_ + _loc14_),_loc5_[1] + _loc19_ * Math.sin(_loc13_ + _loc14_));
               this.sp.graphics.lineTo(_loc5_[0] + _loc19_ * Math.cos(_loc13_ - _loc14_),_loc5_[1] + _loc19_ * Math.sin(_loc13_ - _loc14_));
               this.sp.graphics.moveTo(_loc5_[0],_loc5_[1]);
               this.sp.graphics.endFill();
               return;
            }
            _loc19_ = _loc12_ / 2 / Math.cos(_loc11_);
            this.sp.graphics.lineStyle(1,0,0);
            this.sp.graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
            this.sp.graphics.moveTo(_loc5_[0],_loc5_[1]);
            this.sp.graphics.lineTo(_loc5_[0] + _loc19_ * Math.cos(_loc13_ + _loc14_),_loc5_[1] + _loc19_ * Math.sin(_loc13_ + _loc14_));
            this.sp.graphics.lineTo(_loc4_[0],_loc4_[1]);
            this.sp.graphics.lineTo(_loc5_[0] + _loc19_ * Math.cos(_loc13_ - _loc14_),_loc5_[1] + _loc19_ * Math.sin(_loc13_ - _loc14_));
            this.sp.graphics.moveTo(_loc5_[0],_loc5_[1]);
            this.sp.graphics.endFill();
            return;
         }
         let _loc16_ = 2 * Math.atan(_loc6_ * 0.5 / (_loc9_ * 0.8));
         let _loc17_ = Math.PI - _loc16_ / 2;
         let _loc18_ = _loc9_ * 0.8 / Math.cos(_loc16_ / 2);
         this.sp.graphics.lineStyle(1,0,0);
         this.sp.graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
         this.sp.graphics.moveTo(_loc5_[0],_loc5_[1]);
         this.sp.graphics.lineTo(_loc5_[0] + _loc15_ * Math.cos(_loc13_ + _loc14_),_loc5_[1] + _loc15_ * Math.sin(_loc13_ + _loc14_));
         this.sp.graphics.lineTo(_loc5_[0] + _loc18_ * Math.cos(_loc13_ + _loc17_),_loc5_[1] + _loc18_ * Math.sin(_loc13_ + _loc17_));
         this.sp.graphics.lineTo(_loc5_[0] + _loc18_ * Math.cos(_loc13_ - _loc17_),_loc5_[1] + _loc18_ * Math.sin(_loc13_ - _loc17_));
         this.sp.graphics.lineTo(_loc5_[0] + _loc15_ * Math.cos(_loc13_ - _loc14_),_loc5_[1] + _loc15_ * Math.sin(_loc13_ - _loc14_));
         this.sp.graphics.lineTo(_loc5_[0],_loc5_[1]);
         this.sp.graphics.endFill();
         this.sp.graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
         this.sp.graphics.moveTo(_loc5_[0] + _loc18_ * Math.cos(_loc13_ + _loc17_),_loc5_[1] + _loc18_ * Math.sin(_loc13_ + _loc17_));
         if(this.arrowBoth)
         {
            this.sp.graphics.lineTo(_loc4_[0] - _loc18_ * Math.cos(_loc13_ - _loc17_),_loc4_[1] - _loc18_ * Math.sin(_loc13_ - _loc17_));
            this.sp.graphics.lineTo(_loc4_[0] - _loc18_ * Math.cos(_loc13_ + _loc17_),_loc4_[1] - _loc18_ * Math.sin(_loc13_ + _loc17_));
         }
         else
         {
            this.sp.graphics.lineTo(_loc4_[0] - _loc6_ / 2 * Math.cos(_loc13_ - Math.PI / 2),_loc4_[1] - _loc6_ / 2 * Math.sin(_loc13_ - Math.PI / 2));
            this.sp.graphics.lineTo(_loc4_[0] - _loc6_ / 2 * Math.cos(_loc13_ + Math.PI / 2),_loc4_[1] - _loc6_ / 2 * Math.sin(_loc13_ + Math.PI / 2));
         }
         this.sp.graphics.lineTo(_loc5_[0] + _loc18_ * Math.cos(_loc13_ - _loc17_),_loc5_[1] + _loc18_ * Math.sin(_loc13_ - _loc17_));
         this.sp.graphics.lineTo(_loc5_[0] + _loc18_ * Math.cos(_loc13_ + _loc17_),_loc5_[1] + _loc18_ * Math.sin(_loc13_ + _loc17_));
         this.sp.graphics.endFill();
         if(this.arrowBoth)
         {
            this.sp.graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
            this.sp.graphics.moveTo(_loc4_[0] - _loc18_ * Math.cos(_loc13_ - _loc17_),_loc4_[1] - _loc18_ * Math.sin(_loc13_ - _loc17_));
            this.sp.graphics.lineTo(_loc4_[0] - _loc15_ * Math.cos(_loc13_ - _loc14_),_loc4_[1] - _loc15_ * Math.sin(_loc13_ - _loc14_));
            this.sp.graphics.lineTo(_loc4_[0],_loc4_[1]);
            this.sp.graphics.lineTo(_loc4_[0] - _loc15_ * Math.cos(_loc13_ + _loc14_),_loc4_[1] - _loc15_ * Math.sin(_loc13_ + _loc14_));
            this.sp.graphics.lineTo(_loc4_[0] - _loc18_ * Math.cos(_loc13_ + _loc17_),_loc4_[1] - _loc18_ * Math.sin(_loc13_ + _loc17_));
            this.sp.graphics.lineTo(_loc4_[0] - _loc18_ * Math.cos(_loc13_ - _loc17_),_loc4_[1] - _loc18_ * Math.sin(_loc13_ - _loc17_));
            this.sp.graphics.endFill();
         }
         this.sp.depth = param1.GetCamDist(_loc3_);
      }
eulerTransform(param1, param2, param3){
         this.sDir = this.sDir.eulerTransform(param1,param2,param3);
         this.eDir = this.eDir.eulerTransform(param1,param2,param3);
      }
translation(param1, param2, param3){
         this.sDir = this.sDir.translation(param1,param2,param3);
         this.eDir = this.eDir.translation(param1,param2,param3);
      }
dilation(param1, param2, param3){
         this.sDir = this.sDir.dilation(param1,param2,param3);
         this.eDir = this.eDir.dilation(param1,param2,param3);
      }
enlarge(param1, param2 = 1){
         let _loc3_ = this.eDir.subtract(this.sDir);
         let _loc4_ = _loc3_.norm();
         if(_loc4_ < 1e-9)
         {
            return;
         }
         _loc3_ = _loc3_.mul(1 / _loc4_);
         this.eDir = this.eDir.add(_loc3_.mul(_loc4_ * (param1 - 1)));
         this.sDir = this.sDir.subtract(_loc3_.mul(_loc4_ * (param2 - 1)));
      }
}
class Cam {
TransformMatrix = null;
f = 0;
magnification = 0;
centerX = 0;
centerY = 0;
__movieWidth = 0;
__movieHeight = 0;
constructor(){
         
         this.TransformMatrix = [[1,0,0],[0,1,0],[0,0,1]];
         this.f = 1000;
         this.magnification = 1;
         this.movieWidth = 400;
         this.movieHeight = 400;
      }
static MatrixMatrixMultiply(param1, param2){
         let _loc3_ = new Array(3);
         _loc3_[0] = new Array(3);
         _loc3_[1] = new Array(3);
         _loc3_[2] = new Array(3);
         _loc3_[0][0] = param1[0][0] * param2[0][0] + param1[0][1] * param2[1][0] + param1[0][2] * param2[2][0];
         _loc3_[0][1] = param1[0][0] * param2[0][1] + param1[0][1] * param2[1][1] + param1[0][2] * param2[2][1];
         _loc3_[0][2] = param1[0][0] * param2[0][2] + param1[0][1] * param2[1][2] + param1[0][2] * param2[2][2];
         _loc3_[1][0] = param1[1][0] * param2[0][0] + param1[1][1] * param2[1][0] + param1[1][2] * param2[2][0];
         _loc3_[1][1] = param1[1][0] * param2[0][1] + param1[1][1] * param2[1][1] + param1[1][2] * param2[2][1];
         _loc3_[1][2] = param1[1][0] * param2[0][2] + param1[1][1] * param2[1][2] + param1[1][2] * param2[2][2];
         _loc3_[2][0] = param1[2][0] * param2[0][0] + param1[2][1] * param2[1][0] + param1[2][2] * param2[2][0];
         _loc3_[2][1] = param1[2][0] * param2[0][1] + param1[2][1] * param2[1][1] + param1[2][2] * param2[2][1];
         _loc3_[2][2] = param1[2][0] * param2[0][2] + param1[2][1] * param2[1][2] + param1[2][2] * param2[2][2];
         return _loc3_;
      }
static getInverseMatrix(param1){
         let _loc2_ = new Array(3);
         _loc2_[0] = new Array(3);
         _loc2_[1] = new Array(3);
         _loc2_[2] = new Array(3);
         let _loc3_ = param1[0][0] * (param1[1][1] * param1[2][2] - param1[1][2] * param1[2][1]) + param1[1][1] * (param1[2][2] * param1[0][0] - param1[2][0] * param1[0][2]) + param1[2][2] * (param1[0][0] * param1[1][1] - param1[0][1] * param1[1][0]);
         _loc2_[0][0] = (param1[1][1] * param1[2][2] - param1[1][2] * param1[2][1]) / _loc3_;
         _loc2_[0][1] = (param1[0][2] * param1[2][1] - param1[0][1] * param1[2][2]) / _loc3_;
         _loc2_[0][2] = (param1[0][1] * param1[1][2] - param1[0][2] * param1[1][1]) / _loc3_;
         _loc2_[1][0] = (param1[1][2] * param1[2][0] - param1[1][0] * param1[2][2]) / _loc3_;
         _loc2_[1][1] = (param1[0][0] * param1[2][2] - param1[0][2] * param1[2][0]) / _loc3_;
         _loc2_[1][2] = (param1[0][2] * param1[1][0] - param1[0][0] * param1[1][2]) / _loc3_;
         _loc2_[2][0] = (param1[1][0] * param1[2][1] - param1[1][1] * param1[2][0]) / _loc3_;
         _loc2_[2][1] = (param1[0][1] * param1[2][0] - param1[0][0] * param1[2][1]) / _loc3_;
         _loc2_[2][2] = (param1[0][0] * param1[1][1] - param1[0][1] * param1[1][0]) / _loc3_;
         return _loc2_;
      }
set movieWidth(param1){
         this.__movieWidth = param1;
         this.centerX = this.__movieWidth / 2;
      }
get movieWidth(){
         return this.__movieWidth;
      }
set movieHeight(param1){
         this.__movieHeight = param1;
         this.centerY = this.__movieHeight / 2;
      }
get movieHeight(){
         return this.__movieHeight;
      }
GetXYZ(param1){
         return param1.mulByMatrix(this.TransformMatrix);
      }
GetXY(param1){
         let _loc2_ = param1.mulByMatrix(this.TransformMatrix);
         let _loc3_ = new Array(2);
         _loc3_[0] = this.magnification * _loc2_.x / (1 - _loc2_.z / this.f) + this.centerX;
         _loc3_[1] = -this.magnification * _loc2_.y / (1 - _loc2_.z / this.f) + this.centerY;
         return _loc3_;
      }
GetDirCosine(param1, param2){
         let _loc3_ = param1.distance(param2);
         let _loc4_ = param1.mulByMatrix(this.TransformMatrix);
         let _loc5_ = param2.mulByMatrix(this.TransformMatrix);
         let _loc6_ = Math.sqrt((_loc4_.x - _loc5_.x) * (_loc4_.x - _loc5_.x) + (_loc4_.y - _loc5_.y) * (_loc4_.y - _loc5_.y));
         return _loc6_ / _loc3_;
      }
Get2dLength(param1, param2){
         let _loc3_ = param1.mulByMatrix(this.TransformMatrix);
         return this.magnification * param2 / (1 - _loc3_.z / this.f);
      }
GetCamDist(param1){
         let _loc2_ = param1.mulByMatrix(this.TransformMatrix);
         return Math.sqrt(_loc2_.x * _loc2_.x + _loc2_.y * _loc2_.y + (this.f - _loc2_.z) * (this.f - _loc2_.z));
      }
SetTransformMatrix(param1, param2, param3){
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = null;
         let _loc4_ = Math.sqrt(param1 * param1 + param2 * param2 + param3 * param3);
         if(_loc4_ > 0.0001)
         {
            param1 /= _loc4_;
            param2 /= _loc4_;
            param3 /= _loc4_;
            _loc5_ = _loc4_ / 500;
            _loc6_ = Math.cos(_loc5_);
            _loc7_ = Math.sin(_loc5_);
            _loc8_ = 1 - _loc6_;
            _loc9_ = new Array(3);
            _loc9_[0] = new Array(3);
            _loc9_[1] = new Array(3);
            _loc9_[2] = new Array(3);
            _loc9_[0][0] = _loc8_ * param1 * param1 + _loc6_;
            _loc9_[0][1] = _loc8_ * param1 * param2 - _loc7_ * param3;
            _loc9_[0][2] = _loc8_ * param1 * param3 + _loc7_ * param2;
            _loc9_[1][0] = _loc8_ * param1 * param2 + _loc7_ * param3;
            _loc9_[1][1] = _loc8_ * param2 * param2 + _loc6_;
            _loc9_[1][2] = _loc8_ * param2 * param3 - _loc7_ * param1;
            _loc9_[2][0] = _loc8_ * param1 * param3 - _loc7_ * param2;
            _loc9_[2][1] = _loc8_ * param2 * param3 + _loc7_ * param1;
            _loc9_[2][2] = _loc8_ * param3 * param3 + _loc6_;
            this.TransformMatrix = Cam.MatrixMatrixMultiply(_loc9_,this.TransformMatrix);
         }
      }
getNormalDir(){
         let _loc1_ = new Point3D(0,0,1);
         return _loc1_.mulByMatrix(Cam.getInverseMatrix(this.TransformMatrix));
      }
getTransformMatrix(){
         let _loc1_ = "";
         _loc1_ += "[[" + this.TransformMatrix[0][0] + "," + this.TransformMatrix[0][1] + "," + this.TransformMatrix[0][2] + "],";
         _loc1_ += "[" + this.TransformMatrix[1][0] + "," + this.TransformMatrix[1][1] + "," + this.TransformMatrix[1][2] + "],";
         return _loc1_ + ("[" + this.TransformMatrix[2][0] + "," + this.TransformMatrix[2][1] + "," + this.TransformMatrix[2][2] + "]]");
      }
}
class MainTimeline extends Sprite {
pol2AngleSlider = new Sprite();
LCStr = new Sprite();
outputStr = new Sprite();
zPosSlider = new Sprite();
pol1AngleSlider = new Sprite();
directorStr = new Sprite();
neSlider = new Sprite();
azimuthStr = new Sprite();
helpText = new Sprite();
depthStr = new Sprite();
ellipticityAngleStr = new Sprite();
polStr = new Sprite();
arrowRed = new Sprite();
twistSlider = new Sprite();
ellipticityStr = new Sprite();
arrowPol = new Sprite();
startBtn = new Sprite();
outputRefStr = new Sprite();
marker = new Sprite();
lambdaSlider = new Sprite();
noSlider = new Sprite();
lengthSlider = new Sprite();
lambdaStr = new Sprite();
polStr2 = new Sprite();
cam = new Sprite();
canvas3D = new Sprite();
squareBtn = new Sprite();
isPressed = false;
mousePressedX = 0;
mousePressedY = 0;
aniTimer = new Sprite();
currentTime = 0;
length = 0;
lengthMax = 0;
lengthPixel = 0;
omega = 0;
twistAngle = 0;
no = 0;
ne = 0;
pol1Angle = 0;
pol2Angle = 0;
twistAnglePerLenght = 0;
lambda = 0;
LClength = 0;
xPos = 0;
yPos = 0;
xShift = 0;
xRef = 0;
yRef = 0;
currentZ = 0;
currentJV = new Sprite();
currentCanvas = new Sprite();
currentCanvas2 = new Sprite();
LCspace = 0;
inJV = new Sprite();
outJV = new Sprite();
pol1 = new Sprite();
pol2 = new Sprite();
cyl = new Sprite();
plate1 = new Sprite();
plate2 = new Sprite();
currentDisk = new Sprite();
currentPlate = new Sprite();
arrowPol1 = new Sprite();
arrowPol2 = new Sprite();
arrowRay1 = new Sprite();
arrowRay2 = new Sprite();
arrowRay4 = new Sprite();
arrowRay5 = new Sprite();
str1 = new Sprite();
str2 = new Sprite();
str3 = new Sprite();
i = 0;
nLC = 0;
LC = new Sprite();
ps = new Sprite();
zPos = 0;
phaseDiff = 0;
currentPs = new Sprite();
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_startBtn_();
         this.__setProp_lengthSlider_();
         this.__setProp_twistSlider_();
         this.__setProp_neSlider_();
         this.__setProp_pol1AngleSlider_();
         this.__setProp_noSlider_();
         this.__setProp_pol2AngleSlider_();
         this.__setProp_lambdaSlider_();
         this.__setProp_zPosSlider_();
      }
sortSprite(){
         let _loc2_ = 0;
         let _loc3_ = NaN;
         let _loc4_ = NaN;
         let _loc1_ = 0;
         while(_loc1_ < this.canvas3D.numChildren - 1)
         {
            _loc2_ = int(_loc1_);
            while(_loc2_ < this.canvas3D.numChildren - 1)
            {
               _loc3_ = Number(identity(this.canvas3D.getChildAt(_loc2_)).depth);
               _loc4_ = Number(identity(this.canvas3D.getChildAt(_loc2_ + 1)).depth);
               if(_loc3_ < _loc4_)
               {
                  this.canvas3D.swapChildrenAt(_loc2_,_loc2_ + 1);
               }
               _loc2_++;
            }
            _loc1_++;
         }
      }
helpMousedown(param1){
         if(param1.target == this.helpText)
         {
            if(this.helpText.x == 5)
            {
               this.helpText.x = -1000;
            }
         }
      }
mousedown(param1){
         if(param1.target == this.squareBtn)
         {
            this.mousePressedX = param1.stageX;
            this.mousePressedY = param1.stageY;
            if(this.mousePressedX > 25 || this.mousePressedY > 15)
            {
               this.isPressed = true;
               if(this.helpText.x == 5)
               {
                  this.helpText.x = -1000;
               }
            }
            else
            {
               this.isPressed = false;
               if(this.helpText.x == 5)
               {
                  this.helpText.x = -1000;
               }
               else
               {
                  this.helpText.x = 5;
               }
            }
         }
      }
mouseup(param1){
         if(param1.target == this.squareBtn)
         {
            this.isPressed = false;
         }
      }
mousemove(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         if(this.isPressed && param1.target == this.squareBtn)
         {
            _loc2_ = -(param1.stageY - this.mousePressedY);
            _loc3_ = param1.stageX - this.mousePressedX;
            this.cam.SetTransformMatrix(-_loc2_ / 3,_loc3_ / 3,0);
            this.RenderScene();
         }
      }
mousewheel(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         let _loc4_ = NaN;
         if(param1.target == this.squareBtn)
         {
            _loc2_ = this.cam.magnification * this.cam.f;
            _loc3_ = 250;
            _loc4_ = 2000;
            this.cam.f -= 2 * param1.delta;
            if(this.cam.f < _loc3_)
            {
               this.cam.f = _loc3_;
            }
            else if(this.cam.f > _loc4_)
            {
               this.cam.f = _loc4_;
            }
            this.cam.magnification = _loc2_ / this.cam.f;
            this.RenderScene();
         }
      }
onTick(param1){
         if(!this.isPressed)
         {
            this.currentTime += 0.1;
            this.run();
         }
      }
startAni(){
         if(!this.aniTimer.running)
         {
            this.aniTimer.start();
         }
      }
stopAni(){
         this.aniTimer.reset();
      }
RenderScene(){
         let _loc1_ = 0;
         this.sortSprite();
         this.pol1.draw(this.cam);
         this.pol2.draw(this.cam);
         this.cyl.draw(this.cam);
         this.plate1.draw(this.cam);
         this.plate2.draw(this.cam);
         this.currentDisk.draw(this.cam);
         this.currentPlate.draw(this.cam);
         this.arrowPol1.draw(this.cam);
         this.arrowPol2.draw(this.cam);
         this.arrowRay1.draw(this.cam);
         this.arrowRay2.draw(this.cam);
         this.arrowRay4.draw(this.cam);
         this.arrowRay5.draw(this.cam);
         this.str1.draw(this.cam);
         this.str2.draw(this.cam);
         this.str3.draw(this.cam);
         _loc1_ = int(0);
         while(_loc1_ < this.LC.length)
         {
            this.LC[_loc1_].draw(this.cam);
            _loc1_++;
         }
         _loc1_ = int(0);
         while(_loc1_ < this.ps.length)
         {
            this.ps[_loc1_].draw(this.cam);
            _loc1_++;
         }
         this.currentPs.draw(this.cam);
      }
Remake(){
         let _loc1_ = NaN;
         let _loc4_ = undefined;
         let _loc9_ = NaN;
         this.length = this.lengthSlider.value;
         this.twistAngle = this.twistSlider.value * Math.PI / 180;
         this.pol1Angle = this.pol1AngleSlider.value * Math.PI / 180;
         this.pol2Angle = this.pol2AngleSlider.value * Math.PI / 180;
         this.no = this.noSlider.value;
         this.ne = this.neSlider.value;
         this.lambda = this.lambdaSlider.value / 1000;
         this.twistAnglePerLenght = this.twistAngle / this.length;
         this.cyl.center = new Point3D(this.xPos,this.yPos,-this.length * this.lengthPixel / 2);
         this.cyl.zDir = new Point3D(0,0,this.length * this.lengthPixel);
         this.plate1.center.z = -this.length * this.lengthPixel / 2;
         this.plate2.center.z = this.length * this.lengthPixel / 2;
         this.arrowRay2.eDir = new Point3D(this.xPos,this.yPos,-this.length * this.lengthPixel / 2);
         this.arrowRay4.sDir = new Point3D(this.xPos,this.yPos,this.length * this.lengthPixel / 2);
         _loc4_ = 0;
         while(_loc4_ < this.LC.length)
         {
            if(this.LCspace * _loc4_ <= this.length)
            {
               this.LC[_loc4_].length = this.LClength;
               this.LC[_loc4_].center = new Point3D(this.xPos,this.yPos,(-this.length / 2 + _loc4_ * this.LCspace) * this.lengthPixel);
               this.LC[_loc4_].setOrientation(Math.PI / 2,this.twistAnglePerLenght * _loc4_ * this.LCspace);
            }
            else
            {
               this.LC[_loc4_].length = 0;
            }
            _loc4_++;
         }
         this.inJV = new JonesVector(new Complex(Math.cos(this.pol1Angle)),new Complex(Math.sin(this.pol1Angle)));
         this.outJV = this.makeJonesVector(this.inJV,this.length);
         let _loc2_ = this.calcJonesVectorByPolarizer(this.outJV,this.twistAngle + this.pol2Angle);
         let _loc3_ = _loc2_.intensity();
         _loc4_ = 0;
         while(_loc4_ < this.ps.length)
         {
            this.zPos = -135 + _loc4_ * 7.5;
            _loc9_ = (this.zPos + this.length * this.lengthPixel / 2) / this.lengthPixel;
            if(_loc9_ < 0)
            {
               this.ps[_loc4_].setByJonesVector(this.inJV);
            }
            else if(_loc9_ <= this.length)
            {
               this.ps[_loc4_].setByJonesVector(this.makeJonesVector(this.inJV,_loc9_));
            }
            else
            {
               this.ps[_loc4_].setByJonesVector(this.outJV);
            }
            _loc4_++;
         }
         this.lambdaStr.text = "" + this.lambda * 1000 + " nm";
         this.outputStr.text = "" + Math.round(_loc3_ * 100000) / 1000 + " %";
         let _loc5_ = Math.cos(this.twistAngle + this.pol2Angle - this.pol1Angle);
         this.outputRefStr.text = "" + Math.round(_loc5_ * _loc5_ * 100000) / 1000 + " %";
         this.pol1.orientation = this.pol1Angle;
         let _loc6_ = this.twistAngle + this.pol2Angle;
         this.pol2.orientation = _loc6_;
         this.arrowPol1.sDir = new Point3D(this.xPos - 50 * Math.cos(this.pol1Angle),this.yPos - 50 * Math.sin(this.pol1Angle),-135);
         this.arrowPol1.eDir = new Point3D(this.xPos + 50 * Math.cos(this.pol1Angle),this.yPos + 50 * Math.sin(this.pol1Angle),-135);
         let _loc7_ = 50 * _loc3_;
         this.arrowPol2.sDir = new Point3D(this.xPos - _loc7_ * Math.cos(_loc6_),this.yPos - _loc7_ * Math.sin(_loc6_),165);
         this.arrowPol2.eDir = new Point3D(this.xPos + _loc7_ * Math.cos(_loc6_),this.yPos + _loc7_ * Math.sin(_loc6_),165);
         this.currentZ = this.zPosSlider.value;
         this.currentZ = Math.min(this.currentZ,this.length);
         this.currentJV = this.makeJonesVector(this.inJV,this.currentZ);
         this.currentDisk.center.z = -this.length * this.lengthPixel / 2 + this.currentZ * this.lengthPixel;
         this.currentPlate.center.z = -this.length * this.lengthPixel / 2 + this.currentZ * this.lengthPixel;
         this.currentPs.setByJonesVector(this.currentJV);
         this.currentPs.center.z = -this.length * this.lengthPixel / 2 + this.currentZ * this.lengthPixel;
         this.directorStr.text = "" + Math.round(180 / Math.PI * this.twistAnglePerLenght * this.currentZ * 100) / 100 + "°";
         let _loc8_ = this.currentPs.calcThetaEpsilon();
         this.azimuthStr.text = "" + Math.round(180 / Math.PI * _loc8_[0] * 100) / 100 + "°";
         this.ellipticityAngleStr.text = "" + Math.round(180 / Math.PI * _loc8_[1] * 100) / 100 + "°";
         this.ellipticityStr.text = "" + Math.round(Math.tan(_loc8_[1]) * 1000) / 1000;
         this.depthStr.text = "" + Math.round(this.currentZ * 100) / 100;
         this.drawPolarizationState();
         this.RenderScene();
      }
run(){
         let _loc1_ = 0;
         while(_loc1_ < this.ps.length)
         {
            this.ps[_loc1_].time = this.currentTime;
            this.ps[_loc1_].drawEvolve(this.cam);
            _loc1_++;
         }
         this.currentPs.time = this.currentTime;
         this.currentPs.drawEvolve(this.cam);
         let _loc2_ = this.calcE(this.currentJV,this.currentTime);
         this.marker.x = this.xRef - 70 * _loc2_[1];
         this.marker.y = this.yRef - 70 * _loc2_[0];
         this.currentCanvas2.graphics.clear();
         this.currentCanvas2.graphics.lineStyle(3,26112,0.7);
         this.currentCanvas2.graphics.moveTo(this.xRef,this.yRef);
         this.currentCanvas2.graphics.lineTo(this.marker.x,this.marker.y);
      }
drawPolarizationState(){
         let _loc3_ = null;
         this.currentCanvas.graphics.clear();
         this.currentCanvas.graphics.lineStyle(7,150 * 256 * 256 + 220,0.6);
         let _loc1_ = this.twistAnglePerLenght * this.currentZ;
         this.currentCanvas.graphics.moveTo(this.xRef - 50 * Math.sin(_loc1_),this.yRef - 50 * Math.cos(_loc1_));
         this.currentCanvas.graphics.lineTo(this.xRef + 50 * Math.sin(_loc1_),this.yRef + 50 * Math.cos(_loc1_));
         this.currentCanvas.graphics.lineStyle(2,8421504,1);
         this.currentCanvas.graphics.moveTo(this.xRef - 75 * Math.sin(_loc1_),this.yRef - 75 * Math.cos(_loc1_));
         this.currentCanvas.graphics.lineTo(this.xRef + 75 * Math.sin(_loc1_),this.yRef + 75 * Math.cos(_loc1_));
         this.currentCanvas.graphics.lineStyle(2,1118719,0.8);
         let _loc2_ = 0;
         while(_loc2_ <= 2 * Math.PI)
         {
            _loc3_ = this.calcE(this.currentJV,_loc2_);
            if(_loc2_ == 0)
            {
               this.currentCanvas.graphics.moveTo(this.xRef - 70 * _loc3_[1],this.yRef - 70 * _loc3_[0]);
            }
            else
            {
               this.currentCanvas.graphics.lineTo(this.xRef - 70 * _loc3_[1],this.yRef - 70 * _loc3_[0]);
            }
            _loc2_ += Math.PI / 20;
         }
      }
calcE(param1, param2){
         let _loc3_ = new Array();
         _loc3_[0] = param1.element[0].modulus() * Math.cos(-this.omega * param2 + param1.element[0].argument());
         _loc3_[1] = param1.element[1].modulus() * Math.cos(-this.omega * param2 + param1.element[1].argument());
         return _loc3_;
      }
makeJonesVector(param1, param2){
         let _loc3_ = null;
         let _loc4_ = null;
         let _loc5_ = null;
         let _loc6_ = 2 * Math.PI / this.lambda * (this.ne - this.no) * param2;
         let _loc7_ = this.twistAnglePerLenght * param2;
         let _loc8_ = Math.cos(_loc7_);
         let _loc9_ = Math.sin(_loc7_);
         let _loc10_ = Math.sqrt(_loc7_ * _loc7_ + _loc6_ * _loc6_ / 4);
         let _loc11_ = Math.cos(_loc10_);
         let _loc12_ = this.sinc(_loc10_);
         _loc3_ = new JonesMatrix(new Complex(_loc11_,_loc6_ / 2 * _loc12_),new Complex(_loc7_ * _loc12_),new Complex(-_loc7_ * _loc12_),new Complex(_loc11_,-_loc6_ / 2 * _loc12_));
         _loc4_ = new JonesMatrix(new Complex(_loc8_),new Complex(-_loc9_),new Complex(_loc9_),new Complex(_loc8_));
         _loc5_ = _loc4_.mul(_loc3_);
         return _loc5_.applyJones(param1);
      }
sinc(param1){
         if(param1 > -0.00001 && param1 < 0.00001)
         {
            return param1;
         }
         return Math.sin(param1) / param1;
      }
calcJonesVectorByPolarizer(param1, param2){
         let _loc3_ = null;
         let _loc4_ = Math.sin(param2);
         let _loc5_ = Math.cos(param2);
         _loc3_ = new JonesMatrix(new Complex(_loc5_ * _loc5_),new Complex(_loc4_ * _loc5_),new Complex(_loc4_ * _loc5_),new Complex(_loc4_ * _loc4_));
         return _loc3_.applyJones(param1);
      }
OListener(param1){
         if(param1.target == this.startBtn)
         {
            if(this.startBtn.isON)
            {
               this.startAni();
            }
            else
            {
               this.stopAni();
            }
         }
      }
OListener2(param1){
         if(param1.target == this.lengthSlider)
         {
            this.zPosSlider.limitUpper = this.lengthSlider.value;
            this.Remake();
         }
         else if(param1.target == this.noSlider)
         {
            this.Remake();
         }
         else if(param1.target == this.neSlider)
         {
            this.Remake();
         }
         else if(param1.target == this.twistSlider)
         {
            this.Remake();
         }
         else if(param1.target == this.lambdaSlider)
         {
            this.Remake();
         }
         else if(param1.target == this.pol1AngleSlider)
         {
            this.Remake();
         }
         else if(param1.target == this.pol2AngleSlider)
         {
            this.Remake();
         }
         else if(param1.target == this.zPosSlider)
         {
            this.marker.x = -1000;
            this.Remake();
         }
      }
__setProp_startBtn_(){
         try
         {
            this.startBtn["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.startBtn.backOffColor = 21947;
         this.startBtn.backOnColor = 22015;
         this.startBtn.backOverColor = 13369548;
         this.startBtn.enabled = true;
         this.startBtn.fontBold = true;
         this.startBtn.fontColor = 14548957;
         this.startBtn.fontEmbed = false;
         this.startBtn.fontName = "_sans";
         this.startBtn.fontSize = 12;
         this.startBtn.boxHeight = 20;
         this.startBtn.lineColor = 8421504;
         this.startBtn.lineThickness = 1;
         this.startBtn.isON = true;
         this.startBtn.skin = 1;
         this.startBtn.textOFF = "동작";
         this.startBtn.textON = "정지";
         this.startBtn.isToggle = true;
         this.startBtn.visible = true;
         this.startBtn.boxWidth = 60;
         try
         {
            this.startBtn["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_lengthSlider_(){
         try
         {
            this.lengthSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.lengthSlider.arrowColor = 102;
         this.lengthSlider.centerSquareOffColor = 21947;
         this.lengthSlider.centerSquareOnColor = 13369548;
         this.lengthSlider.enabled = true;
         this.lengthSlider.fontBold = true;
         this.lengthSlider.fontColor = 8421504;
         this.lengthSlider.fontEmbed = false;
         this.lengthSlider.fontColorLimit = 8421504;
         this.lengthSlider.fontName = "_sans";
         this.lengthSlider.fontNumName = "_sans";
         this.lengthSlider.fontColorSelected = 8421504;
         this.lengthSlider.fontSize = 12;
         this.lengthSlider.boxHeight = 12;
         this.lengthSlider.incrementOrDigit = 0.2;
         this.lengthSlider.isIncrement = true;
         this.lengthSlider.limitLower = 2;
         this.lengthSlider.limitUpper = 25;
         this.lengthSlider.lineColor = 8421504;
         this.lengthSlider.lineThickness = 1;
         this.lengthSlider.isShowValue = true;
         this.lengthSlider.skin = 0;
         this.lengthSlider.text = "";
         this.lengthSlider.value = 15;
         this.lengthSlider.visible = true;
         this.lengthSlider.boxWidth = 150;
         try
         {
            this.lengthSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_twistSlider_(){
         try
         {
            this.twistSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.twistSlider.arrowColor = 102;
         this.twistSlider.centerSquareOffColor = 21947;
         this.twistSlider.centerSquareOnColor = 13369548;
         this.twistSlider.enabled = true;
         this.twistSlider.fontBold = true;
         this.twistSlider.fontColor = 8421504;
         this.twistSlider.fontEmbed = false;
         this.twistSlider.fontColorLimit = 8421504;
         this.twistSlider.fontName = "_sans";
         this.twistSlider.fontNumName = "_sans";
         this.twistSlider.fontColorSelected = 8421504;
         this.twistSlider.fontSize = 12;
         this.twistSlider.boxHeight = 12;
         this.twistSlider.incrementOrDigit = 5;
         this.twistSlider.isIncrement = true;
         this.twistSlider.limitLower = 0;
         this.twistSlider.limitUpper = 720;
         this.twistSlider.lineColor = 8421504;
         this.twistSlider.lineThickness = 1;
         this.twistSlider.isShowValue = true;
         this.twistSlider.skin = 0;
         this.twistSlider.text = "";
         this.twistSlider.value = 90;
         this.twistSlider.visible = true;
         this.twistSlider.boxWidth = 150;
         try
         {
            this.twistSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_neSlider_(){
         try
         {
            this.neSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.neSlider.arrowColor = 102;
         this.neSlider.centerSquareOffColor = 21947;
         this.neSlider.centerSquareOnColor = 13369548;
         this.neSlider.enabled = true;
         this.neSlider.fontBold = true;
         this.neSlider.fontColor = 8421504;
         this.neSlider.fontEmbed = false;
         this.neSlider.fontColorLimit = 8421504;
         this.neSlider.fontName = "_sans";
         this.neSlider.fontNumName = "_sans";
         this.neSlider.fontColorSelected = 8421504;
         this.neSlider.fontSize = 12;
         this.neSlider.boxHeight = 12;
         this.neSlider.incrementOrDigit = 2;
         this.neSlider.isIncrement = false;
         this.neSlider.limitLower = 1.25;
         this.neSlider.limitUpper = 2.5;
         this.neSlider.lineColor = 8421504;
         this.neSlider.lineThickness = 1;
         this.neSlider.isShowValue = true;
         this.neSlider.skin = 0;
         this.neSlider.text = "";
         this.neSlider.value = 1.7;
         this.neSlider.visible = true;
         this.neSlider.boxWidth = 150;
         try
         {
            this.neSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_pol1AngleSlider_(){
         try
         {
            this.pol1AngleSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.pol1AngleSlider.arrowColor = 102;
         this.pol1AngleSlider.centerSquareOffColor = 21947;
         this.pol1AngleSlider.centerSquareOnColor = 13369548;
         this.pol1AngleSlider.enabled = true;
         this.pol1AngleSlider.fontBold = true;
         this.pol1AngleSlider.fontColor = 8421504;
         this.pol1AngleSlider.fontEmbed = false;
         this.pol1AngleSlider.fontColorLimit = 8421504;
         this.pol1AngleSlider.fontName = "_sans";
         this.pol1AngleSlider.fontNumName = "_sans";
         this.pol1AngleSlider.fontColorSelected = 8421504;
         this.pol1AngleSlider.fontSize = 12;
         this.pol1AngleSlider.boxHeight = 12;
         this.pol1AngleSlider.incrementOrDigit = 1;
         this.pol1AngleSlider.isIncrement = true;
         this.pol1AngleSlider.limitLower = -90;
         this.pol1AngleSlider.limitUpper = 90;
         this.pol1AngleSlider.lineColor = 8421504;
         this.pol1AngleSlider.lineThickness = 1;
         this.pol1AngleSlider.isShowValue = true;
         this.pol1AngleSlider.skin = 0;
         this.pol1AngleSlider.text = "";
         this.pol1AngleSlider.value = 0;
         this.pol1AngleSlider.visible = true;
         this.pol1AngleSlider.boxWidth = 150;
         try
         {
            this.pol1AngleSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_noSlider_(){
         try
         {
            this.noSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.noSlider.arrowColor = 102;
         this.noSlider.centerSquareOffColor = 21947;
         this.noSlider.centerSquareOnColor = 13369548;
         this.noSlider.enabled = true;
         this.noSlider.fontBold = true;
         this.noSlider.fontColor = 8421504;
         this.noSlider.fontEmbed = false;
         this.noSlider.fontColorLimit = 8421504;
         this.noSlider.fontName = "_sans";
         this.noSlider.fontNumName = "_sans";
         this.noSlider.fontColorSelected = 8421504;
         this.noSlider.fontSize = 12;
         this.noSlider.boxHeight = 12;
         this.noSlider.incrementOrDigit = 2;
         this.noSlider.isIncrement = false;
         this.noSlider.limitLower = 1.25;
         this.noSlider.limitUpper = 2.5;
         this.noSlider.lineColor = 8421504;
         this.noSlider.lineThickness = 1;
         this.noSlider.isShowValue = true;
         this.noSlider.skin = 0;
         this.noSlider.text = "";
         this.noSlider.value = 1.5;
         this.noSlider.visible = true;
         this.noSlider.boxWidth = 150;
         try
         {
            this.noSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_pol2AngleSlider_(){
         try
         {
            this.pol2AngleSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.pol2AngleSlider.arrowColor = 102;
         this.pol2AngleSlider.centerSquareOffColor = 21947;
         this.pol2AngleSlider.centerSquareOnColor = 13369548;
         this.pol2AngleSlider.enabled = true;
         this.pol2AngleSlider.fontBold = true;
         this.pol2AngleSlider.fontColor = 8421504;
         this.pol2AngleSlider.fontEmbed = false;
         this.pol2AngleSlider.fontColorLimit = 8421504;
         this.pol2AngleSlider.fontName = "_sans";
         this.pol2AngleSlider.fontNumName = "_sans";
         this.pol2AngleSlider.fontColorSelected = 8421504;
         this.pol2AngleSlider.fontSize = 12;
         this.pol2AngleSlider.boxHeight = 12;
         this.pol2AngleSlider.incrementOrDigit = 1;
         this.pol2AngleSlider.isIncrement = true;
         this.pol2AngleSlider.limitLower = -90;
         this.pol2AngleSlider.limitUpper = 90;
         this.pol2AngleSlider.lineColor = 8421504;
         this.pol2AngleSlider.lineThickness = 1;
         this.pol2AngleSlider.isShowValue = true;
         this.pol2AngleSlider.skin = 0;
         this.pol2AngleSlider.text = "";
         this.pol2AngleSlider.value = 0;
         this.pol2AngleSlider.visible = true;
         this.pol2AngleSlider.boxWidth = 150;
         try
         {
            this.pol2AngleSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_lambdaSlider_(){
         try
         {
            this.lambdaSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.lambdaSlider.arrowColor = 102;
         this.lambdaSlider.centerSquareOffColor = 21947;
         this.lambdaSlider.centerSquareOnColor = 13369548;
         this.lambdaSlider.enabled = true;
         this.lambdaSlider.fontBold = true;
         this.lambdaSlider.fontColor = 8421504;
         this.lambdaSlider.fontEmbed = false;
         this.lambdaSlider.fontColorLimit = 8421504;
         this.lambdaSlider.fontName = "_sans";
         this.lambdaSlider.fontNumName = "_sans";
         this.lambdaSlider.fontColorSelected = 8421504;
         this.lambdaSlider.fontSize = 12;
         this.lambdaSlider.boxHeight = 12;
         this.lambdaSlider.incrementOrDigit = 5;
         this.lambdaSlider.isIncrement = true;
         this.lambdaSlider.limitLower = 300;
         this.lambdaSlider.limitUpper = 1000;
         this.lambdaSlider.lineColor = 8421504;
         this.lambdaSlider.lineThickness = 1;
         this.lambdaSlider.isShowValue = true;
         this.lambdaSlider.skin = 0;
         this.lambdaSlider.text = "";
         this.lambdaSlider.value = 500;
         this.lambdaSlider.visible = true;
         this.lambdaSlider.boxWidth = 150;
         try
         {
            this.lambdaSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_zPosSlider_(){
         try
         {
            this.zPosSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.zPosSlider.arrowColor = 102;
         this.zPosSlider.centerSquareOffColor = 21947;
         this.zPosSlider.centerSquareOnColor = 13369548;
         this.zPosSlider.enabled = true;
         this.zPosSlider.fontBold = true;
         this.zPosSlider.fontColor = 8421504;
         this.zPosSlider.fontEmbed = false;
         this.zPosSlider.fontColorLimit = 8421504;
         this.zPosSlider.fontName = "_sans";
         this.zPosSlider.fontNumName = "_sans";
         this.zPosSlider.fontColorSelected = 8421504;
         this.zPosSlider.fontSize = 12;
         this.zPosSlider.boxHeight = 12;
         this.zPosSlider.incrementOrDigit = 1;
         this.zPosSlider.isIncrement = false;
         this.zPosSlider.limitLower = 0;
         this.zPosSlider.limitUpper = 15;
         this.zPosSlider.lineColor = 8421504;
         this.zPosSlider.lineThickness = 1;
         this.zPosSlider.isShowValue = true;
         this.zPosSlider.skin = 1;
         this.zPosSlider.text = "";
         this.zPosSlider.value = 7.5;
         this.zPosSlider.visible = true;
         this.zPosSlider.boxWidth = 250;
         try
         {
            this.zPosSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
frame1(){
         this.cam = new Cam();
         this.cam.movieWidth = 545;
         this.cam.movieHeight = 350;
         this.cam.magnification = 1.4;
         this.cam.TransformMatrix = [[-0.17886500652491108,-0.3004513440959673,0.9368756771560645],[0.9556327485202795,-0.27956382912730243,0.09279139361591782],[0.2340368489166963,0.9119057318471268,0.3371256531378391]];
         this.canvas3D = new Sprite();
         this.addChild(this.canvas3D);
         this.squareBtn = new Sprite();
         this.squareBtn.graphics.beginFill(16711680,0);
         this.squareBtn.graphics.drawRect(0,0,this.cam.movieWidth,this.cam.movieHeight);
         this.squareBtn.graphics.endFill();
         this.squareBtn.x = 0;
         this.squareBtn.y = 0;
         this.addChild(this.squareBtn);
         this.squareBtn.buttonMode = true;
         this.isPressed = false;
         this.helpText.x = -1000;
         this.addChild(this.helpText);
         this.helpText.addEventListener(MouseEvent.MOUSE_DOWN,this.helpMousedown);
         this.squareBtn.addEventListener(MouseEvent.MOUSE_DOWN,this.mousedown);
         this.squareBtn.addEventListener(MouseEvent.MOUSE_UP,this.mouseup);
         this.squareBtn.addEventListener(MouseEvent.MOUSE_OUT,this.mouseup);
         this.squareBtn.addEventListener(MouseEvent.MOUSE_OVER,this.mouseup);
         this.squareBtn.addEventListener(MouseEvent.MOUSE_MOVE,this.mousemove);
         this.squareBtn.addEventListener(MouseEvent.MOUSE_WHEEL,this.mousewheel);
         this.aniTimer = new Timer(50,0);
         this.currentTime = 0;
         this.aniTimer.addEventListener(TimerEvent.TIMER,this.onTick);
         this.length = 30;
         this.lengthMax = 50;
         this.lengthPixel = 10;
         this.omega = 1;
         this.LClength = 50;
         this.xPos = 40;
         this.yPos = 0;
         this.xShift = -100;
         this.xRef = 625;
         this.yRef = 225;
         this.currentCanvas = new Sprite();
         this.addChild(this.currentCanvas);
         this.currentCanvas2 = new Sprite();
         this.addChild(this.currentCanvas2);
         this.addChild(this.marker);
         this.LCspace = 0.6;
         this.pol1 = new Polarizer(this.canvas3D,new Point3D(this.xPos,this.yPos,-150),new Point3D(50,0,0),new Point3D(0,50,0),0);
         this.pol1.setStyle(new LineStyle(2,43690,1),new FillStyle(8421504,0.25));
         this.pol2 = new Polarizer(this.canvas3D,new Point3D(this.xPos,this.yPos,150),new Point3D(50,0,0),new Point3D(0,50,0),0);
         this.pol2.setStyle(new LineStyle(2,43690,1),new FillStyle(8421504,0.25));
         this.cyl = new Cylinder(this.canvas3D,new Point3D(this.xPos,this.yPos,-75),new Point3D(0,50,0),new Point3D(50,0,0),new Point3D(0,0,150));
         this.cyl.setStyle(new LineStyle(1,8421504,1),new FillStyle(22015,0.05),new FillStyle(65365,0.05));
         this.plate1 = new Plate(this.canvas3D,new Point3D(this.xPos + this.xShift,0,0),new Point3D(0,35,0),new Point3D(35,0,0),new LineStyle(1,8421504,0.6),new FillStyle(22015,0.1));
         this.plate2 = new Plate(this.canvas3D,new Point3D(this.xPos + this.xShift,0,0),new Point3D(0,35,0),new Point3D(35,0,0),new LineStyle(1,8421504,0.6),new FillStyle(22015,0.1));
         this.currentDisk = new Ellipse(this.canvas3D,new Point3D(this.xPos,0,0),new Point3D(0,50,0),new Point3D(50,0,0),null,new FillStyle(16711935,0.1));
         this.currentPlate = new Plate(this.canvas3D,new Point3D(this.xPos + this.xShift,0,0),new Point3D(0,35,0),new Point3D(35,0,0),new LineStyle(1,8421504,0.6),new FillStyle(16711935,0.1));
         this.arrowPol1 = new Arrow(this.canvas3D,new Point3D(this.xPos - 50,this.yPos,-135),new Point3D(this.xPos + 50,this.yPos,-135),2,new FillStyle(26112,1),true);
         this.arrowPol2 = new Arrow(this.canvas3D,new Point3D(this.xPos - 50,this.yPos,165),new Point3D(this.xPos + 50,this.yPos,165),2,new FillStyle(26112,1),true);
         this.arrowRay1 = new Arrow(this.canvas3D,new Point3D(this.xPos,this.yPos,-200),new Point3D(this.xPos,this.yPos,-150),2,new FillStyle(16711680,0.8));
         this.arrowRay2 = new Arrow(this.canvas3D,new Point3D(this.xPos,this.yPos,-150),new Point3D(this.xPos,this.yPos,-75),2,new FillStyle(16711680,0.8));
         this.arrowRay4 = new Arrow(this.canvas3D,new Point3D(this.xPos,this.yPos,75),new Point3D(this.xPos,this.yPos,150),2,new FillStyle(16711680,0.8));
         this.arrowRay5 = new Arrow(this.canvas3D,new Point3D(this.xPos,this.yPos,150),new Point3D(this.xPos,this.yPos,200),2,new FillStyle(16711680,0.8));
         this.str1 = new PtObject(this.canvas3D,this.polStr,new Point3D(this.xPos + 60,this.yPos,155),1);
         this.str2 = new PtObject(this.canvas3D,this.polStr2,new Point3D(this.xPos + 60,this.yPos,-165),1);
         this.str3 = new PtObject(this.canvas3D,this.LCStr,new Point3D(this.xPos + 60,this.yPos,10),1);
         this.nLC = int(Math.floor(this.lengthMax / this.LCspace) + 1);
         this.LC = new Array(this.nLC);
         this.i = 0;
         while(this.i < this.LC.length)
         {
            this.LC[this.i] = new Line2(this.canvas3D,new Point3D(0,0,0),0,0,0);
            this.LC[this.i].setStyle(new LineStyle(5,(120 + 3 * this.i) * 256 * 256 + (255 - 2 * this.i),0.8));
            ++this.i;
         }
         this.ps = new Array(37);
         this.i = 0;
         while(this.i < this.ps.length)
         {
            this.zPos = -135 + this.i * 7.5;
            this.phaseDiff = 0;
            this.phaseDiff = this.i * 0.2;
            if(this.i == 0 || this.i == this.ps.length - 1)
            {
               this.ps[this.i] = new PolarizationState(this.canvas3D,new Point3D(this.xPos + this.xShift,0,this.zPos),new Point3D(50,0,0),new Point3D(0,50,0));
               this.ps[this.i].setCustomStyle(1);
               this.ps[this.i].markerStyle = new FillStyle(16711935,0.8);
               this.ps[this.i].markerRadius = 4;
               this.ps[this.i].axisStyle.lineThickness = 1.5;
               this.ps[this.i].traceStyle = new LineStyle(1,1118719,0.9);
               this.ps[this.i].setShowOption(true,true,false,true);
            }
            else
            {
               this.ps[this.i] = new PolarizationState(this.canvas3D,new Point3D(this.xPos + this.xShift,0,this.zPos),new Point3D(35,0,0),new Point3D(0,35,0));
               this.ps[this.i].setCustomStyle(1);
               this.ps[this.i].setShowOption(true,false,false);
            }
            this.ps[this.i].omega = this.omega;
            this.ps[this.i].setByJones(1,0,0,0);
            ++this.i;
         }
         this.currentPs = new PolarizationState(this.canvas3D,new Point3D(this.xPos,0,this.zPos),new Point3D(50,0,0),new Point3D(0,50,0));
         this.currentPs.setCustomStyle(1);
         this.currentPs.setShowOption(true,false,false);
         this.Remake();
         this.startAni();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.OListener);
         this.lengthSlider.addEventListener("change",this.OListener2);
         this.noSlider.addEventListener("change",this.OListener2);
         this.neSlider.addEventListener("change",this.OListener2);
         this.twistSlider.addEventListener("change",this.OListener2);
         this.lambdaSlider.addEventListener("change",this.OListener2);
         this.pol1AngleSlider.addEventListener("change",this.OListener2);
         this.pol2AngleSlider.addEventListener("change",this.OListener2);
         this.zPosSlider.addEventListener("change",this.OListener2);
         this.addChild(this.lengthSlider);
         this.addChild(this.zPosSlider);
         this.addChild(this.twistSlider);
         this.addChild(this.neSlider);
      }
}
const t=new MainTimeline();A.configure(t,SPEC);t.frame1();return t;}
