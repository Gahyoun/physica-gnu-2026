import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-78a4cbab0b8ef677", "title": "푸앵카레 구", "source": "http://physica.gnu.ac.kr/phtml/optics/polarization/polrepresent/poincaresphereV3.swf", "sourceFile": "poincaresphereV3.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/polarization/polrepresent/poincaresphereV3.swf", "originalSHA256": "b9b2b47c62428f0afac89d1cbb4dc2cfe9b35c0783004e04fd02492bac7f3ee1", "lesson": "5-3-5-4", "width": 600.0, "height": 450.0, "fps": 12.0, "type": "poincare", "as3": true, "animated": true, "controls": [], "checks": [], "buttons": [], "placements": {"ellipticityAngle1Str": {"x": 469.6, "y": 402, "depth": 5, "width": null, "height": null}, "azimuth1Str": {"x": 469.75, "y": 433.15, "depth": 6, "width": null, "height": null}, "ellipticity1Str": {"x": 469.75, "y": 418, "depth": 8, "width": null, "height": null}, "ellipticityAngle2Str": {"x": 469.6, "y": 161.9, "depth": 19, "width": null, "height": null}, "azimuth2Str": {"x": 469.75, "y": 193.05, "depth": 20, "width": null, "height": null}, "ellipticity2Str": {"x": 469.75, "y": 177.9, "depth": 22, "width": null, "height": null}, "marker1": {"x": 652.45, "y": 365.45, "depth": 23, "width": 10, "height": 10}, "marker2": {"x": 662.45, "y": 375.45, "depth": 25, "width": 10, "height": 10}, "xStrO": {"x": -66.75, "y": 456.55, "depth": 29, "width": null, "height": null}, "yStrO": {"x": -83.95, "y": 460.6, "depth": 31, "width": null, "height": null}, "zStrO": {"x": -47.85, "y": 459.6, "depth": 33, "width": null, "height": null}, "helpText": {"x": 7.35, "y": 20.55, "depth": 39, "width": 157.5, "height": 56.2}}};
export function createTimeline(){
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
normalization(){
         let _loc1_ = Math.sqrt(this.element[0].absSquare() + this.element[1].absSquare());
         this.element[0] = this.element[0].mul(1 / _loc1_);
         this.element[1] = this.element[1].mul(1 / _loc1_);
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
translation(param1, param2, param3){
         return this.add(new Point3D(param1,param2,param3));
      }
add(param1){
         let _loc2_ = this.x + param1.x;
         let _loc3_ = this.y + param1.y;
         let _loc4_ = this.z + param1.z;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
norm(){
         return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
mul(param1){
         let _loc2_ = param1 * this.x;
         let _loc3_ = param1 * this.y;
         let _loc4_ = param1 * this.z;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
dotProduct(param1){
         return this.x * param1.x + this.y * param1.y + this.z * param1.z;
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
distance(param1){
         return Math.sqrt((this.x - param1.x) * (this.x - param1.x) + (this.y - param1.y) * (this.y - param1.y) + (this.z - param1.z) * (this.z - param1.z));
      }
dilation(param1, param2, param3){
         return new Point3D(param1 * this.x,param2 * this.y,param3 * this.z);
      }
crossProduct(param1){
         let _loc2_ = this.y * param1.z - this.z * param1.y;
         let _loc3_ = this.z * param1.x - this.x * param1.z;
         let _loc4_ = this.x * param1.y - this.y * param1.x;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
div(param1){
         let _loc2_ = this.x / param1;
         let _loc3_ = this.y / param1;
         let _loc4_ = this.z / param1;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
average2(param1){
         return this.add(param1).div(2);
      }
average3(param1, param2){
         return this.add(param1).add(param2).div(3);
      }
subtract(param1){
         let _loc2_ = this.x - param1.x;
         let _loc3_ = this.y - param1.y;
         let _loc4_ = this.z - param1.z;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
mulByMatrix(param1){
         let _loc2_ = param1[0][0] * this.x + param1[0][1] * this.y + param1[0][2] * this.z;
         let _loc3_ = param1[1][0] * this.x + param1[1][1] * this.y + param1[1][2] * this.z;
         let _loc4_ = param1[2][0] * this.x + param1[2][1] * this.y + param1[2][2] * this.z;
         return new Point3D(_loc2_,_loc3_,_loc4_);
      }
}
class Sprite3D extends Sprite {
depth = 0;
constructor(){super();
         
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
sub(param1){
         return new Complex(this.x - param1.x,this.y - param1.y);
      }
add(param1){
         return new Complex(this.x + param1.x,this.y + param1.y);
      }
mul(param1){
         return new Complex(this.x * param1,this.y * param1);
      }
log(){
         return new Complex(Math.log(this.modulus()),this.argument());
      }
argument(){
         return Math.atan2(this.y,this.x);
      }
absSquare(){
         return this.x * this.x + this.y * this.y;
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
prod(param1){
         return new Complex(this.x * param1.x - this.y * param1.y,this.x * param1.y + this.y * param1.x);
      }
exp(){
         let _loc1_ = Math.exp(this.x);
         return new Complex(_loc1_ * Math.cos(this.y),_loc1_ * Math.sin(this.y));
      }
modulus(){
         return Math.sqrt(this.x * this.x + this.y * this.y);
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
}
class Ellipse {
NUM_SEGMENT = 8;
startAngle = 0;
yDir = null;
center = null;
lineStyle = null;
mcTag = new Array(this.NUM_SEGMENT);
sp = null;
fillStyle = null;
xDir = null;
endAngle = 6.283185307179586;
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
translation(param1, param2, param3){
         this.center = this.center.translation(param1,param2,param3);
      }
eulerTransform(param1, param2, param3){
         this.center = this.center.eulerTransform(param1,param2,param3);
         this.xDir = this.xDir.eulerTransform(param1,param2,param3);
         this.yDir = this.yDir.eulerTransform(param1,param2,param3);
      }
draw(param1){
         let _loc6_ = null;
         let _loc7_ = null;
         let _loc9_ = NaN;
         let _loc10_ = null;
         let _loc11_ = null;
         let _loc12_ = undefined;
         let _loc13_ = null;
         let _loc14_ = null;
         let _loc2_ = (this.endAngle - this.startAngle) / this.NUM_SEGMENT;
         let _loc3_ = 1 / Math.cos(_loc2_ / 2);
         let _loc4_ = false;
         if(this.fillStyle != null)
         {
            _loc4_ = true;
         }
         let _loc5_ = param1.GetXY(this.center);
         let _loc8_ = 0;
         while(_loc8_ <= this.NUM_SEGMENT)
         {
            _loc9_ = this.startAngle + _loc2_ * _loc8_;
            _loc10_ = this.center.add(this.xDir.mul(Math.cos(_loc9_))).add(this.yDir.mul(Math.sin(_loc9_)));
            _loc11_ = param1.GetXY(_loc10_);
            if(_loc8_ != 0)
            {
               _loc12_ = this.startAngle + _loc2_ * (_loc8_ - 0.5);
               _loc13_ = this.center.add(this.xDir.mul(Math.cos(_loc12_) * _loc3_)).add(this.yDir.mul(Math.sin(_loc12_) * _loc3_));
               _loc14_ = param1.GetXY(_loc13_);
               this.mcTag[_loc8_].graphics.clear();
               this.mcTag[_loc8_].graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,this.lineStyle.alpha);
               if(_loc4_)
               {
                  this.mcTag[_loc8_].graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
               }
               this.mcTag[_loc8_].graphics.moveTo(_loc7_[0],_loc7_[1]);
               this.mcTag[_loc8_].graphics.curveTo(_loc14_[0],_loc14_[1],_loc11_[0],_loc11_[1]);
               if(_loc4_)
               {
                  this.mcTag[_loc8_].graphics.lineStyle(this.lineStyle.lineThickness,this.lineStyle.lineColor,0);
                  this.mcTag[_loc8_].graphics.lineTo(_loc5_[0],_loc5_[1]);
                  this.mcTag[_loc8_].graphics.endFill();
               }
               this.mcTag[_loc8_].depth = param1.GetCamDist(_loc6_.average3(_loc13_,_loc10_));
            }
            _loc6_ = _loc10_;
            _loc7_ = _loc11_;
            _loc8_++;
         }
      }
dilation(param1, param2, param3){
         this.center = this.center.dilation(param1,param2,param3);
         this.xDir = this.xDir.dilation(param1,param2,param3);
         this.yDir = this.yDir.dilation(param1,param2,param3);
      }
setStyle(param1, param2 = null){
         this.lineStyle = param1;
         this.fillStyle = param2;
      }
setRange(param1, param2){
         this.startAngle = param1;
         this.endAngle = param2;
      }
}
class PtObject {
scale = 0;
obj = null;
sDir = null;
sp = null;
constructor(param1, param2, param3, param4){
         
         this.obj = param2;
         this.sDir = param3;
         this.scale = param4;
         this.sp = new Sprite3D();
         this.sp.addChild(param2);
         param1.addChild(this.sp);
      }
eulerTransform(param1, param2, param3){
         this.sDir = this.sDir.eulerTransform(param1,param2,param3);
      }
draw(param1){
         let _loc2_ = param1.GetXY(this.sDir);
         this.obj.x = _loc2_[0];
         this.obj.y = _loc2_[1];
         let _loc3_ = param1.GetCamDist(this.sDir);
         this.sp.depth = _loc3_;
         this.obj.scaleX = param1.f * param1.magnification * this.scale / _loc3_;
         this.obj.scaleY = param1.f * param1.magnification * this.scale / _loc3_;
      }
translation(param1, param2, param3){
         this.sDir = this.sDir.translation(param1,param2,param3);
      }
dilation(param1, param2, param3){
         this.sDir = this.sDir.dilation(param1,param2,param3);
      }
}
class LineStyle {
lineThickness = 1;
alpha = 80;
lineColor = 8421504;
constructor(param1, param2, param3 = 1){
         
         this.lineThickness = param1;
         this.lineColor = param2;
         this.alpha = param3;
      }
}
class PolarizationState {
mcTagTrace = null;
yPhase = 0;
yAmp = 0;
outlineStyle = null;
axisStyle = null;
showBack = true;
markerStyle = null;
zUnit = null;
mcTagBack = null;
xAmp = 0;
arrowSize = 6;
zDir = null;
NUM_SEGMENT = 32;
showZAxis = true;
showAxis = false;
time = 0;
yDir = null;
center = null;
omega = 1;
xPhase = 0;
showAxisName = true;
traceStyle = null;
fillStyle = null;
showFrame = false;
markerRadius = 0;
xDir = null;
mcTagEfield = null;
efieldStyle = null;
mcTagMarker = null;
constructor(param1, param2, param3, param4){
         
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
eulerTransform(param1, param2, param3){
         this.center = this.center.eulerTransform(param1,param2,param3);
         this.xDir = this.xDir.eulerTransform(param1,param2,param3);
         this.yDir = this.yDir.eulerTransform(param1,param2,param3);
         this.zDir = this.zDir.eulerTransform(param1,param2,param3);
         this.zUnit = this.zUnit.eulerTransform(param1,param2,param3);
      }
drawEvolve(param1){
         this.mcTagEfield.graphics.clear();
         if(param1.GetXYZ(this.zUnit).z < 0 && !this.showBack)
         {
            return;
         }
         this.mcTagEfield.depth = param1.GetCamDist(this.center.add(this.zUnit.mul(2)));
         let _loc2_ = param1.GetXY(this.center);
         let _loc3_ = this.center.add(this.CalcPolPoint3D(this.time));
         let _loc4_ = param1.GetXY(_loc3_);
         let _loc5_ = param1.Get2dLength(this.center,this.efieldStyle.lineThickness);
         this.mcTagEfield.graphics.lineStyle(_loc5_,this.efieldStyle.lineColor,this.efieldStyle.alpha);
         this.mcTagEfield.graphics.moveTo(_loc2_[0],_loc2_[1]);
         this.mcTagEfield.graphics.lineTo(_loc4_[0],_loc4_[1]);
         this.mcTagMarker.graphics.clear();
         let _loc6_ = param1.Get2dLength(_loc3_,this.markerRadius);
         this.mcTagMarker.graphics.beginFill(this.markerStyle.fillColor,this.markerStyle.alpha);
         this.mcTagMarker.graphics.lineStyle(0,this.markerStyle.fillColor,0);
         this.mcTagMarker.graphics.drawEllipse(_loc4_[0] - _loc6_,_loc4_[1] - _loc6_,_loc6_ * 2,_loc6_ * 2);
         this.mcTagMarker.graphics.endFill();
         this.mcTagMarker.depth = param1.GetCamDist(this.center.add(this.zUnit.mul(2)));
      }
normalization(){
         let _loc1_ = Math.sqrt(this.xAmp * this.xAmp + this.yAmp * this.yAmp);
         this.xAmp /= _loc1_;
         this.yAmp /= _loc1_;
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
translation(param1, param2, param3){
         this.center = this.center.translation(param1,param2,param3);
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
setByJonesVector(param1){
         this.xAmp = param1.element[0].modulus();
         this.yAmp = param1.element[1].modulus();
         this.xPhase = param1.element[0].argument();
         this.yPhase = param1.element[1].argument();
         this.normalization();
      }
draw(param1){
         let _loc2_ = NaN;
         let _loc4_ = null;
         let _loc5_ = null;
         let _loc8_ = null;
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
         let _loc3_ = 2 * Math.PI / this.omega / this.NUM_SEGMENT;
         let _loc6_ = param1.Get2dLength(this.center,1);
         this.mcTagBack.depth = param1.GetCamDist(this.center);
         this.mcTagBack.graphics.clear();
         if(this.showFrame)
         {
            this.mcTagBack.graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
            this.mcTagBack.graphics.lineStyle(this.outlineStyle.lineThickness * _loc6_,this.outlineStyle.lineColor,this.outlineStyle.alpha);
            _loc8_ = param1.GetXY(this.center.add(this.xDir).add(this.yDir));
            _loc9_ = param1.GetXY(this.center.subtract(this.xDir).add(this.yDir));
            _loc10_ = param1.GetXY(this.center.subtract(this.xDir).subtract(this.yDir));
            _loc11_ = param1.GetXY(this.center.add(this.xDir).subtract(this.yDir));
            this.mcTagBack.graphics.moveTo(_loc8_[0],_loc8_[1]);
            this.mcTagBack.graphics.lineTo(_loc9_[0],_loc9_[1]);
            this.mcTagBack.graphics.lineTo(_loc10_[0],_loc10_[1]);
            this.mcTagBack.graphics.lineTo(_loc11_[0],_loc11_[1]);
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
         if(param1.GetXYZ(this.zUnit).z < 0 && !this.showBack)
         {
            return;
         }
         this.mcTagTrace.depth = param1.GetCamDist(this.center.add(this.zUnit));
         this.mcTagTrace.graphics.lineStyle(this.traceStyle.lineThickness * _loc6_,this.traceStyle.lineColor,this.traceStyle.alpha);
         let _loc7_ = 0;
         while(_loc7_ <= this.NUM_SEGMENT)
         {
            _loc2_ = _loc7_ * _loc3_;
            _loc12_ = this.center.add(this.CalcPolPoint3D(_loc2_));
            _loc13_ = param1.GetXY(_loc12_);
            if(_loc7_ != 0)
            {
               this.mcTagTrace.graphics.moveTo(_loc5_[0],_loc5_[1]);
               this.mcTagTrace.graphics.lineTo(_loc13_[0],_loc13_[1]);
            }
            _loc4_ = _loc12_;
            _loc5_ = _loc13_;
            _loc7_++;
         }
         if(this.showAxis)
         {
            this.mcTagTrace.graphics.lineStyle(this.axisStyle.lineThickness * _loc6_,this.axisStyle.lineColor,this.axisStyle.alpha);
            _loc14_ = param1.GetXY(this.center.subtract(this.xDir.mul(0.2)));
            _loc15_ = param1.GetXY(this.center.add(this.xDir.mul(1.2)));
            _loc16_ = param1.GetXY(this.center.subtract(this.yDir.mul(0.2)));
            _loc17_ = param1.GetXY(this.center.add(this.yDir.mul(1.2)));
            this.drawArrow(this.mcTagTrace,_loc14_,_loc15_,_loc6_);
            this.drawArrow(this.mcTagTrace,_loc16_,_loc17_,_loc6_);
            if(this.showZAxis)
            {
               _loc18_ = param1.GetXY(this.center.subtract(this.zDir.mul(0.2)));
               _loc19_ = param1.GetXY(this.center.add(this.zDir.mul(0.5)));
               this.drawArrow(this.mcTagTrace,_loc18_,_loc19_,_loc6_);
            }
            if(this.showAxisName)
            {
               _loc20_ = new TextFormat("Times New Roman",10 * this.axisStyle.lineThickness * _loc6_,this.axisStyle.lineColor,false,true);
               _loc21_ = new TextField();
               _loc21_.text = "x";
               _loc21_.setTextFormat(_loc20_);
               _loc21_.x = _loc15_[0];
               _loc21_.y = _loc15_[1] - 12 * _loc6_;
               this.mcTagTrace.addChild(_loc21_);
               _loc22_ = new TextField();
               _loc22_.text = "y";
               _loc22_.setTextFormat(_loc20_);
               _loc22_.x = _loc17_[0];
               _loc22_.y = _loc17_[1] - 5 * _loc6_;
               this.mcTagTrace.addChild(_loc22_);
               if(this.showZAxis)
               {
                  _loc23_ = new TextField();
                  _loc23_.text = "z";
                  _loc23_.setTextFormat(_loc20_);
                  _loc23_.x = _loc19_[0];
                  _loc23_.y = _loc19_[1] - 7 * _loc6_;
                  this.mcTagTrace.addChild(_loc23_);
               }
            }
         }
         this.drawEvolve(param1);
      }
CalcPolPoint3D(param1){
         let _loc2_ = this.xDir.mul(this.xAmp * Math.cos(-this.omega * param1 + this.xPhase));
         let _loc3_ = this.yDir.mul(this.yAmp * Math.cos(-this.omega * param1 + this.yPhase));
         return _loc2_.add(_loc3_);
      }
dilation(param1, param2, param3){
         this.center = this.center.dilation(param1,param2,param3);
         this.xDir = this.xDir.dilation(param1,param2,param3);
         this.yDir = this.yDir.dilation(param1,param2,param3);
         this.zDir = this.zDir.dilation(param1,param2,param3);
      }
setByJones(param1, param2, param3, param4){
         this.xAmp = param1;
         this.yAmp = param2;
         this.xPhase = param3;
         this.yPhase = param4;
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
setShowOption(param1, param2 = true, param3 = true, param4 = false){
         this.showBack = param1;
         this.showAxis = param2;
         this.showFrame = param3;
         this.showAxisName = param4;
      }
Rotate(param1){
         let _loc2_ = this.calcThetaEpsilon();
         this.setByAE(_loc2_[0] + param1,_loc2_[1]);
      }
}
class Arrow {
arrowReferenceSize = 1;
eDir = null;
arrowBoth = false;
fillStyle = null;
arrowReferenceAngle = 1;
sDir = null;
thickness = 0;
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
draw(param1){
         this.sp.graphics.clear();
         let _loc2_ = this.sDir.average2(this.eDir);
         let _loc3_ = param1.GetXY(this.sDir);
         let _loc4_ = param1.GetXY(this.eDir);
         let _loc5_ = param1.Get2dLength(_loc2_,this.thickness);
         let _loc6_ = param1.GetDirCosine(this.sDir,this.eDir);
         let _loc7_ = _loc5_ * 10 * this.arrowReferenceSize;
         let _loc8_ = _loc7_ * _loc6_;
         let _loc9_ = Math.PI / 18 * this.arrowReferenceAngle;
         let _loc10_ = Math.atan2(Math.tan(_loc9_),_loc6_);
         let _loc11_ = Math.sqrt((_loc4_[0] - _loc3_[0]) * (_loc4_[0] - _loc3_[0]) + (_loc4_[1] - _loc3_[1]) * (_loc4_[1] - _loc3_[1]));
         if(_loc11_ < 1)
         {
            return;
         }
         if(this.arrowBoth && _loc11_ < 1.5 * _loc8_ || !this.arrowBoth && _loc11_ < 0.7 * _loc8_)
         {
            this.sp.graphics.lineStyle(_loc5_,this.fillStyle.fillColor,this.fillStyle.alpha,false,LineScaleMode.NORMAL,CapsStyle.NONE);
            this.sp.graphics.moveTo(_loc3_[0],_loc3_[1]);
            this.sp.graphics.lineTo(_loc4_[0],_loc4_[1]);
            this.sp.depth = param1.GetCamDist(_loc2_);
            return;
         }
         let _loc12_ = Math.atan2(_loc4_[1] - _loc3_[1],_loc4_[0] - _loc3_[0]);
         let _loc13_ = Math.PI - _loc10_;
         let _loc14_ = _loc8_ / Math.cos(_loc10_);
         let _loc15_ = 2 * Math.atan(_loc5_ * 0.5 / (_loc8_ * 0.8));
         let _loc16_ = Math.PI - _loc15_ / 2;
         let _loc17_ = _loc8_ * 0.8 / Math.cos(_loc15_ / 2);
         this.sp.graphics.lineStyle(1,0,0);
         this.sp.graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
         this.sp.graphics.moveTo(_loc4_[0],_loc4_[1]);
         this.sp.graphics.lineTo(_loc4_[0] + _loc14_ * Math.cos(_loc12_ + _loc13_),_loc4_[1] + _loc14_ * Math.sin(_loc12_ + _loc13_));
         this.sp.graphics.lineTo(_loc4_[0] + _loc17_ * Math.cos(_loc12_ + _loc16_),_loc4_[1] + _loc17_ * Math.sin(_loc12_ + _loc16_));
         this.sp.graphics.lineTo(_loc4_[0] + _loc17_ * Math.cos(_loc12_ - _loc16_),_loc4_[1] + _loc17_ * Math.sin(_loc12_ - _loc16_));
         this.sp.graphics.lineTo(_loc4_[0] + _loc14_ * Math.cos(_loc12_ - _loc13_),_loc4_[1] + _loc14_ * Math.sin(_loc12_ - _loc13_));
         this.sp.graphics.lineTo(_loc4_[0],_loc4_[1]);
         this.sp.graphics.endFill();
         this.sp.graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
         this.sp.graphics.moveTo(_loc4_[0] + _loc17_ * Math.cos(_loc12_ + _loc16_),_loc4_[1] + _loc17_ * Math.sin(_loc12_ + _loc16_));
         if(this.arrowBoth)
         {
            this.sp.graphics.lineTo(_loc3_[0] - _loc17_ * Math.cos(_loc12_ - _loc16_),_loc3_[1] - _loc17_ * Math.sin(_loc12_ - _loc16_));
            this.sp.graphics.lineTo(_loc3_[0] - _loc17_ * Math.cos(_loc12_ + _loc16_),_loc3_[1] - _loc17_ * Math.sin(_loc12_ + _loc16_));
         }
         else
         {
            this.sp.graphics.lineTo(_loc3_[0] - _loc5_ / 2 * Math.cos(_loc12_ - Math.PI / 2),_loc3_[1] - _loc5_ / 2 * Math.sin(_loc12_ - Math.PI / 2));
            this.sp.graphics.lineTo(_loc3_[0] - _loc5_ / 2 * Math.cos(_loc12_ + Math.PI / 2),_loc3_[1] - _loc5_ / 2 * Math.sin(_loc12_ + Math.PI / 2));
         }
         this.sp.graphics.lineTo(_loc4_[0] + _loc17_ * Math.cos(_loc12_ - _loc16_),_loc4_[1] + _loc17_ * Math.sin(_loc12_ - _loc16_));
         this.sp.graphics.lineTo(_loc4_[0] + _loc17_ * Math.cos(_loc12_ + _loc16_),_loc4_[1] + _loc17_ * Math.sin(_loc12_ + _loc16_));
         this.sp.graphics.endFill();
         if(this.arrowBoth)
         {
            this.sp.graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
            this.sp.graphics.moveTo(_loc3_[0] - _loc17_ * Math.cos(_loc12_ - _loc16_),_loc3_[1] - _loc17_ * Math.sin(_loc12_ - _loc16_));
            this.sp.graphics.lineTo(_loc3_[0] - _loc14_ * Math.cos(_loc12_ - _loc13_),_loc3_[1] - _loc14_ * Math.sin(_loc12_ - _loc13_));
            this.sp.graphics.lineTo(_loc3_[0],_loc3_[1]);
            this.sp.graphics.lineTo(_loc3_[0] - _loc14_ * Math.cos(_loc12_ + _loc13_),_loc3_[1] - _loc14_ * Math.sin(_loc12_ + _loc13_));
            this.sp.graphics.lineTo(_loc3_[0] - _loc17_ * Math.cos(_loc12_ + _loc16_),_loc3_[1] - _loc17_ * Math.sin(_loc12_ + _loc16_));
            this.sp.graphics.lineTo(_loc3_[0] - _loc17_ * Math.cos(_loc12_ - _loc16_),_loc3_[1] - _loc17_ * Math.sin(_loc12_ - _loc16_));
            this.sp.graphics.endFill();
         }
         this.sp.depth = param1.GetCamDist(_loc2_);
      }
eulerTransform(param1, param2, param3){
         this.sDir = this.sDir.eulerTransform(param1,param2,param3);
         this.eDir = this.eDir.eulerTransform(param1,param2,param3);
      }
dilation(param1, param2, param3){
         this.sDir = this.sDir.dilation(param1,param2,param3);
         this.eDir = this.eDir.dilation(param1,param2,param3);
      }
setStyle(param1){
         this.fillStyle = param1;
      }
translation(param1, param2, param3){
         this.sDir = this.sDir.translation(param1,param2,param3);
         this.eDir = this.eDir.translation(param1,param2,param3);
      }
}
class Cam {
magnification = 0;
__movieWidth = 0;
__movieHeight = 0;
centerX = 0;
centerY = 0;
f = 0;
TransformMatrix = null;
constructor(){
         
         this.TransformMatrix = [[1,0,0],[0,1,0],[0,0,1]];
         this.f = 1000;
         this.magnification = 1;
         this.movieWidth = 400;
         this.movieHeight = 400;
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
GetXYZ(param1){
         return param1.mulByMatrix(this.TransformMatrix);
      }
GetDirCosine(param1, param2){
         let _loc3_ = param1.distance(param2);
         let _loc4_ = param1.mulByMatrix(this.TransformMatrix);
         let _loc5_ = param2.mulByMatrix(this.TransformMatrix);
         let _loc6_ = Math.sqrt((_loc4_.x - _loc5_.x) * (_loc4_.x - _loc5_.x) + (_loc4_.y - _loc5_.y) * (_loc4_.y - _loc5_.y));
         return _loc6_ / _loc3_;
      }
getTransformMatrix(){
         let _loc1_ = "";
         _loc1_ += "[[" + this.TransformMatrix[0][0] + "," + this.TransformMatrix[0][1] + "," + this.TransformMatrix[0][2] + "],";
         _loc1_ += "[" + this.TransformMatrix[1][0] + "," + this.TransformMatrix[1][1] + "," + this.TransformMatrix[1][2] + "],";
         return _loc1_ + ("[" + this.TransformMatrix[2][0] + "," + this.TransformMatrix[2][1] + "," + this.TransformMatrix[2][2] + "]]");
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
Get2dLength(param1, param2){
         let _loc3_ = param1.mulByMatrix(this.TransformMatrix);
         return this.magnification * param2 / (1 - _loc3_.z / this.f);
      }
getNormalDir(){
         let _loc1_ = new Point3D(0,0,1);
         return _loc1_.mulByMatrix(Cam.getInverseMatrix(this.TransformMatrix));
      }
get movieWidth(){
         return this.__movieWidth;
      }
GetXY(param1){
         let _loc2_ = param1.mulByMatrix(this.TransformMatrix);
         let _loc3_ = new Array(2);
         _loc3_[0] = this.magnification * _loc2_.x / (1 - _loc2_.z / this.f) + this.centerX;
         _loc3_[1] = -this.magnification * _loc2_.y / (1 - _loc2_.z / this.f) + this.centerY;
         return _loc3_;
      }
set movieWidth(param1){
         this.__movieWidth = param1;
         this.centerX = this.__movieWidth / 2;
      }
set movieHeight(param1){
         this.__movieHeight = param1;
         this.centerY = this.__movieHeight / 2;
      }
get movieHeight(){
         return this.__movieHeight;
      }
GetCamDist(param1){
         let _loc2_ = param1.mulByMatrix(this.TransformMatrix);
         return Math.sqrt(_loc2_.x * _loc2_.x + _loc2_.y * _loc2_.y + (this.f - _loc2_.z) * (this.f - _loc2_.z));
      }
}
class MainTimeline extends Sprite {
ellipticityAngle1Str = new Sprite();
ps = new Sprite();
azimuth2Str = new Sprite();
helpText = new Sprite();
yRef1 = 0;
yRef2 = 0;
currentCanvas2 = new Sprite();
ellip1 = new Sprite();
ellip2 = new Sprite();
ellipticity1Str = new Sprite();
currentCanvas = new Sprite();
marker1 = new Sprite();
marker2 = new Sprite();
xAxis = new Sprite();
mousePressedX = 0;
mousePressedY = 0;
currentJV1 = new Sprite();
currentJV2 = new Sprite();
pos = new Sprite();
yStrO = new Sprite();
zAxis = new Sprite();
zStr = new Sprite();
omega = 0;
ellipticityAngle2Str = new Sprite();
psSpole = new Sprite();
i = new Sprite();
j = 0;
phi = 0;
ellipticity2Str = new Sprite();
phiUnit = new Sprite();
xRef1 = 0;
xRef2 = 0;
isPressed = false;
xStr = new Sprite();
theUnit = new Sprite();
theta = 0;
radius = 0;
azimuth1Str = new Sprite();
yAxis = new Sprite();
canvas3D = new Sprite();
cam = new Sprite();
aniTimer = new Sprite();
xStrO = new Sprite();
zStrO = new Sprite();
psNpole = new Sprite();
currentTime = 0;
yStr = new Sprite();
squareBtn = new Sprite();
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
      }
mouseup(param1){
         if(param1.target == this.squareBtn)
         {
            this.isPressed = false;
         }
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
                  identity(this.canvas3D.getChildAt(_loc2_)).depth = _loc4_;
                  identity(this.canvas3D.getChildAt(_loc2_ + 1)).depth = _loc3_;
               }
               _loc2_++;
            }
            _loc1_++;
         }
      }
startAni(){
         this.currentTime = 0;
         if(!this.aniTimer.running)
         {
            this.aniTimer.start();
         }
      }
onTick(param1){
         if(!this.isPressed)
         {
            this.currentTime += 0.2;
            this.run();
         }
      }
frame1(){
         this.cam = new Cam();
         this.cam.movieWidth = 450;
         this.cam.movieHeight = 450;
         this.cam.magnification = 1.2;
         this.cam.TransformMatrix = [[-0.438419799258867,0.889922576365943,0.12580098446363],[-0.175498830029003,-0.222041257135226,0.959113049013651],[0.881469364343576,0.39841622482526,0.253527654349031]];
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
         this.aniTimer = new Timer(100,0);
         this.currentTime = 0;
         this.aniTimer.addEventListener(TimerEvent.TIMER,this.onTick);
         this.xRef1 = 525;
         this.yRef1 = 325;
         this.xRef2 = 525;
         this.yRef2 = 85;
         this.omega = 1;
         this.currentJV1 = new JonesVector();
         this.currentJV2 = new JonesVector();
         this.currentCanvas = new Sprite();
         this.addChild(this.currentCanvas);
         this.currentCanvas2 = new Sprite();
         this.addChild(this.currentCanvas2);
         this.addChild(this.marker1);
         this.addChild(this.marker2);
         this.radius = 175;
         this.ellip1 = new Array(6);
         this.i = 0;
         while(this.i < this.ellip1.length)
         {
            this.phi = this.i / this.ellip1.length * Math.PI;
            this.ellip1[this.i] = new Ellipse(this.canvas3D,new Point3D(0,0,0),new Point3D(this.radius * Math.cos(this.phi),this.radius * Math.sin(this.phi),0),new Point3D(0,0,this.radius));
            this.ellip1[this.i].setStyle(new LineStyle(1,8421504,0.5));
            if(this.i == 0 || this.i == 3)
            {
               this.ellip1[this.i].setStyle(new LineStyle(1,4210752,0.9));
            }
            ++this.i;
         }
         this.ellip2 = new Array(12);
         this.i = 1;
         while(this.i < this.ellip2.length)
         {
            this.theta = this.i / this.ellip2.length * Math.PI;
            this.ellip2[this.i] = new Ellipse(this.canvas3D,new Point3D(0,0,this.radius * Math.cos(this.theta)),new Point3D(this.radius * Math.sin(this.theta),0,0),new Point3D(0,this.radius * Math.sin(this.theta),0));
            this.ellip2[this.i].setStyle(new LineStyle(1,8421504,0.5));
            if(this.i == this.ellip2.length / 2)
            {
               this.ellip2[this.i].setStyle(new LineStyle(1,4210752,0.9),new FillStyle(8421631,0.1));
            }
            ++this.i;
         }
         this.xAxis = new Arrow(this.canvas3D,new Point3D(-this.radius,0,0),new Point3D(this.radius,0,0),2,new FillStyle(13158));
         this.yAxis = new Arrow(this.canvas3D,new Point3D(0,-this.radius,0),new Point3D(0,this.radius,0),2,new FillStyle(13158));
         this.zAxis = new Arrow(this.canvas3D,new Point3D(0,0,-this.radius),new Point3D(0,0,this.radius),2,new FillStyle(13158));
         this.xAxis.arrowReferenceSize = 1.5;
         this.yAxis.arrowReferenceSize = 1.5;
         this.zAxis.arrowReferenceSize = 1.5;
         this.xStr = new PtObject(this.canvas3D,this.xStrO,new Point3D(this.radius - 10,5,10),1);
         this.yStr = new PtObject(this.canvas3D,this.yStrO,new Point3D(10,this.radius - 10,12),1);
         this.zStr = new PtObject(this.canvas3D,this.zStrO,new Point3D(10,15,this.radius - 10),1);
         this.radius += 2;
         this.ps = new Array(12);
         this.i = 0;
         while(this.i < this.ps.length)
         {
            this.phi = this.i / this.ps.length * 2 * Math.PI;
            this.ps[this.i] = new Array(12);
            this.j = 1;
            while(this.j < this.ps[this.i].length)
            {
               this.theta = this.j / this.ps[this.i].length * Math.PI;
               this.pos = new Point3D(this.radius * Math.sin(this.theta) * Math.cos(this.phi),this.radius * Math.sin(this.theta) * Math.sin(this.phi),this.radius * Math.cos(this.theta));
               this.phiUnit = new Point3D(-Math.sin(this.phi),Math.cos(this.phi),0);
               this.theUnit = new Point3D(Math.cos(this.theta) * Math.cos(this.phi),Math.cos(this.theta) * Math.sin(this.phi),-Math.sin(this.theta));
               this.ps[this.i][this.j] = new PolarizationState(this.canvas3D,this.pos,this.phiUnit.mul(20),this.theUnit.mul(-20));
               this.ps[this.i][this.j].setByAE(this.phi / 2,Math.PI / 4 - this.theta / 2);
               this.ps[this.i][this.j].setShowOption(false,false,false);
               ++this.j;
            }
            ++this.i;
         }
         this.theta = 0;
         this.phi = 0;
         this.psNpole = new PolarizationState(this.canvas3D,new Point3D(0,0,this.radius),new Point3D(0,20,0),new Point3D(-20,0,0));
         this.psNpole.setByAE(this.phi / 2,Math.PI / 4 - this.theta / 2);
         this.psNpole.setShowOption(false,false,false);
         this.psNpole.setCustomStyle(1);
         this.theta = Math.PI;
         this.phi = 0;
         this.psSpole = new PolarizationState(this.canvas3D,new Point3D(0,0,-this.radius),new Point3D(0,20,0),new Point3D(20,0,0));
         this.psSpole.setByAE(this.phi / 2,Math.PI / 4 - this.theta / 2);
         this.psSpole.setShowOption(false,false,false);
         this.psSpole.setCustomStyle(1);
         this.RenderScene();
         this.startAni();
      }
stopAni(){
         this.aniTimer.reset();
      }
RenderScene(){
         let _loc1_ = undefined;
         let _loc2_ = 0;
         this.sortSprite();
         _loc1_ = 0;
         while(_loc1_ < this.ellip1.length)
         {
            this.ellip1[_loc1_].draw(this.cam);
            _loc1_++;
         }
         _loc1_ = 1;
         while(_loc1_ < this.ellip2.length)
         {
            this.ellip2[_loc1_].draw(this.cam);
            _loc1_++;
         }
         this.xAxis.draw(this.cam);
         this.yAxis.draw(this.cam);
         this.zAxis.draw(this.cam);
         this.xStr.draw(this.cam);
         this.yStr.draw(this.cam);
         this.zStr.draw(this.cam);
         _loc1_ = 0;
         while(_loc1_ < this.ps.length)
         {
            _loc2_ = int(1);
            while(_loc2_ < this.ps[_loc1_].length)
            {
               this.ps[_loc1_][_loc2_].draw(this.cam);
               _loc2_++;
            }
            _loc1_++;
         }
         this.psNpole.draw(this.cam);
         this.psSpole.draw(this.cam);
         this.run();
         let _loc3_ = this.cam.getNormalDir();
         let _loc4_ = Math.acos(_loc3_.z / _loc3_.norm());
         let _loc5_ = Math.atan2(_loc3_.y,_loc3_.x);
         this.currentJV1.setByAE(_loc5_ / 2,Math.PI / 4 - _loc4_ / 2);
         this.currentJV2.setByAE((_loc5_ + Math.PI) / 2,Math.PI / 4 - (Math.PI - _loc4_) / 2);
         this.drawPolarizationState();
         this.azimuth1Str.text = "" + Math.round(180 / Math.PI * (_loc5_ / 2) * 100) / 100 + "°";
         this.ellipticityAngle1Str.text = "" + Math.round(180 / Math.PI * (Math.PI / 4 - _loc4_ / 2) * 100) / 100 + "°";
         this.ellipticity1Str.text = "" + Math.round(Math.tan(Math.PI / 4 - _loc4_ / 2) * 1000) / 1000;
         this.azimuth2Str.text = "" + Math.round(180 / Math.PI * ((_loc5_ + Math.PI) / 2) * 100) / 100 + "°";
         this.ellipticityAngle2Str.text = "" + Math.round(180 / Math.PI * (Math.PI / 4 - (Math.PI - _loc4_) / 2) * 100) / 100 + "°";
         this.ellipticity2Str.text = "" + Math.round(Math.tan(Math.PI / 4 - (Math.PI - _loc4_) / 2) * 1000) / 1000;
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
calcE(param1, param2){
         let _loc3_ = new Array();
         _loc3_[0] = param1.element[0].modulus() * Math.cos(-this.omega * param2 + param1.element[0].argument());
         _loc3_[1] = param1.element[1].modulus() * Math.cos(-this.omega * param2 + param1.element[1].argument());
         return _loc3_;
      }
run(){
         let _loc1_ = undefined;
         let _loc2_ = 0;
         let _loc3_ = null;
         _loc1_ = 0;
         while(_loc1_ < this.ps.length)
         {
            _loc2_ = int(1);
            while(_loc2_ < this.ps[_loc1_].length)
            {
               this.ps[_loc1_][_loc2_].time = this.currentTime;
               this.ps[_loc1_][_loc2_].drawEvolve(this.cam);
               _loc2_++;
            }
            _loc1_++;
         }
         this.psNpole.time = this.currentTime;
         this.psNpole.drawEvolve(this.cam);
         this.psSpole.time = this.currentTime;
         this.psSpole.drawEvolve(this.cam);
         this.currentCanvas2.graphics.clear();
         _loc3_ = this.calcE(this.currentJV1,this.currentTime);
         this.marker1.x = this.xRef1 + 70 * _loc3_[0];
         this.marker1.y = this.yRef1 - 70 * _loc3_[1];
         this.currentCanvas2.graphics.lineStyle(4,26112,0.7);
         this.currentCanvas2.graphics.moveTo(this.xRef1,this.yRef1);
         this.currentCanvas2.graphics.lineTo(this.marker1.x,this.marker1.y);
         _loc3_ = this.calcE(this.currentJV2,this.currentTime);
         this.marker2.x = this.xRef2 + 70 * _loc3_[0];
         this.marker2.y = this.yRef2 - 70 * _loc3_[1];
         this.currentCanvas2.graphics.lineStyle(4,26112,0.7);
         this.currentCanvas2.graphics.moveTo(this.xRef2,this.yRef2);
         this.currentCanvas2.graphics.lineTo(this.marker2.x,this.marker2.y);
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
drawPolarizationState(){
         let _loc1_ = NaN;
         let _loc2_ = null;
         this.currentCanvas.graphics.clear();
         this.currentCanvas.graphics.lineStyle(2,1118719,0.8);
         _loc1_ = 0;
         while(_loc1_ <= 2 * Math.PI)
         {
            _loc2_ = this.calcE(this.currentJV1,_loc1_);
            if(_loc1_ == 0)
            {
               this.currentCanvas.graphics.moveTo(this.xRef1 + 70 * _loc2_[0],this.yRef1 - 70 * _loc2_[1]);
            }
            else
            {
               this.currentCanvas.graphics.lineTo(this.xRef1 + 70 * _loc2_[0],this.yRef1 - 70 * _loc2_[1]);
            }
            _loc1_ += Math.PI / 20;
         }
         _loc1_ = 0;
         while(_loc1_ <= 2 * Math.PI)
         {
            _loc2_ = this.calcE(this.currentJV2,_loc1_);
            if(_loc1_ == 0)
            {
               this.currentCanvas.graphics.moveTo(this.xRef2 + 70 * _loc2_[0],this.yRef2 - 70 * _loc2_[1]);
            }
            else
            {
               this.currentCanvas.graphics.lineTo(this.xRef2 + 70 * _loc2_[0],this.yRef2 - 70 * _loc2_[1]);
            }
            _loc1_ += Math.PI / 20;
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
}
const t=new MainTimeline();A.configure(t,SPEC);t.frame1();return t;}
