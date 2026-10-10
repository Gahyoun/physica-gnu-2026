import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-5b4df2e3e2d7f004", "title": "렌즈의 비점수차", "source": "http://physica.gnu.ac.kr/phtml/optics/geometric/aberration/astigmatism.swf", "sourceFile": "astigmatism.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/aberration/astigmatism.swf", "originalSHA256": "ddea0016fd215c35729a5dd23c75b204c929037485aec4051ab05e463f5ba429", "lesson": "5-2-10-2", "width": 700.0, "height": 330.0, "fps": 12.0, "type": "astigmatism", "as3": true, "animated": false, "controls": [], "checks": [], "buttons": [], "placements": {"FsStr": {"x": -60.1, "y": -58.45, "depth": 1, "width": null, "height": null}, "FtStr": {"x": -36.5, "y": -70.95, "depth": 3, "width": null, "height": null}, "objStr": {"x": -72.1, "y": -46.55, "depth": 5, "width": null, "height": null}, "greenBall": {"x": 1, "y": -36, "depth": 7, "width": 10, "height": 10}, "blueBall": {"x": -28.65, "y": -28.65, "depth": 9, "width": 10, "height": 10}, "axisStr": {"x": -64.1, "y": -5.5, "depth": 11, "width": null, "height": null}, "arrowRed": {"x": 74.75, "y": 40.7, "depth": 19, "width": 79.998779296875, "height": 7.9913330078125}, "objBall": {"x": -10.65, "y": -14.65, "depth": 28, "width": 10, "height": 10}, "clcStr": {"x": -64.85, "y": 16.55, "depth": 30, "width": null, "height": null}, "helpText": {"x": 7.35, "y": 20.55, "depth": 39, "width": 157.5, "height": 56.2}}};
export function createTimeline(){
class Triangle {
lineStyle = null;
pt1 = null;
pt2 = null;
pt3 = null;
fillStyle = null;
sp = null;
constructor(param1, param2, param3, param4, param5 = null, param6 = null){
         
         this.pt1 = param2;
         this.pt2 = param3;
         this.pt3 = param4;
         if(param5 == null)
         {
            this.lineStyle = new LineStyle(1,8421504,1);
         }
         else
         {
            this.lineStyle = param5;
         }
         this.fillStyle = param6;
         this.sp = new Sprite3D();
         param1.addChild(this.sp);
      }
dilation(param1, param2, param3){
         this.pt1 = this.pt1.dilation(param1,param2,param3);
         this.pt2 = this.pt2.dilation(param1,param2,param3);
         this.pt3 = this.pt3.dilation(param1,param2,param3);
      }
eulerTransform(param1, param2, param3){
         this.pt1 = this.pt1.eulerTransform(param1,param2,param3);
         this.pt2 = this.pt2.eulerTransform(param1,param2,param3);
         this.pt3 = this.pt3.eulerTransform(param1,param2,param3);
      }
draw(param1){
         this.sp.graphics.clear();
         let _loc2_ = this.pt1.average3(this.pt2,this.pt3);
         let _loc3_ = param1.GetXY(this.pt1);
         let _loc4_ = param1.GetXY(this.pt2);
         let _loc5_ = param1.GetXY(this.pt3);
         let _loc6_ = param1.Get2dLength(_loc2_,this.lineStyle.lineThickness);
         if(this.fillStyle != null)
         {
            this.sp.graphics.beginFill(this.fillStyle.fillColor,this.fillStyle.alpha);
         }
         this.sp.graphics.lineStyle(_loc6_,this.lineStyle.lineColor,this.lineStyle.alpha);
         this.sp.graphics.moveTo(_loc3_[0],_loc3_[1]);
         this.sp.graphics.lineTo(_loc4_[0],_loc4_[1]);
         this.sp.graphics.lineTo(_loc5_[0],_loc5_[1]);
         this.sp.graphics.lineTo(_loc3_[0],_loc3_[1]);
         if(this.fillStyle != null)
         {
            this.sp.graphics.endFill();
         }
         this.sp.depth = param1.GetCamDist(_loc2_);
      }
translation(param1, param2, param3){
         this.pt1 = this.pt1.translation(param1,param2,param3);
         this.pt2 = this.pt2.translation(param1,param2,param3);
         this.pt3 = this.pt3.translation(param1,param2,param3);
      }
setStyle(param1, param2 = null){
         this.lineStyle = param1;
         this.fillStyle = param2;
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
class Cylinder {
NUM_SEGMENT = 8;
zDir = null;
yDir = null;
center = null;
fillStyleTB = null;
lineStyle = null;
mcTagE = null;
fillStyleS = null;
mcTagB = new Array(this.NUM_SEGMENT);
mcTagS = new Array(this.NUM_SEGMENT);
mcTagT = new Array(this.NUM_SEGMENT);
xDir = null;
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
translation(param1, param2, param3){
         this.center = this.center.translation(param1,param2,param3);
      }
eulerTransform(param1, param2, param3){
         this.center = this.center.eulerTransform(param1,param2,param3);
         this.xDir = this.xDir.eulerTransform(param1,param2,param3);
         this.yDir = this.yDir.eulerTransform(param1,param2,param3);
         this.zDir = this.zDir.eulerTransform(param1,param2,param3);
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
dilation(param1, param2, param3){
         this.center = this.center.dilation(param1,param2,param3);
         this.xDir = this.xDir.dilation(param1,param2,param3);
         this.yDir = this.yDir.dilation(param1,param2,param3);
         this.zDir = this.zDir.dilation(param1,param2,param3);
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
setStyle(param1, param2, param3){
         this.lineStyle = param1;
         this.fillStyleTB = param2;
         this.fillStyleS = param3;
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
class Line {
isRound = true;
eDir = null;
lineStyle = null;
sDir = null;
sp = null;
constructor(param1, param2, param3, param4 = null){
         
         this.sDir = param2;
         this.eDir = param3;
         if(param4 == null)
         {
            this.lineStyle = new LineStyle(2,8421504,1);
         }
         else
         {
            this.lineStyle = param4;
         }
         this.sp = new Sprite3D();
         param1.addChild(this.sp);
      }
eulerTransform(param1, param2, param3){
         this.sDir = this.sDir.eulerTransform(param1,param2,param3);
         this.eDir = this.eDir.eulerTransform(param1,param2,param3);
      }
draw(param1){
         this.sp.graphics.clear();
         let _loc2_ = this.sDir.average2(this.eDir);
         let _loc3_ = param1.GetXY(this.sDir);
         let _loc4_ = param1.GetXY(this.eDir);
         let _loc5_ = param1.Get2dLength(_loc2_,this.lineStyle.lineThickness);
         if(this.isRound)
         {
            this.sp.graphics.lineStyle(_loc5_,this.lineStyle.lineColor,this.lineStyle.alpha,false,LineScaleMode.NORMAL,CapsStyle.ROUND);
         }
         else
         {
            this.sp.graphics.lineStyle(_loc5_,this.lineStyle.lineColor,this.lineStyle.alpha,false,LineScaleMode.NORMAL,CapsStyle.NONE);
         }
         this.sp.graphics.moveTo(_loc3_[0],_loc3_[1]);
         this.sp.graphics.lineTo(_loc4_[0],_loc4_[1]);
         this.sp.depth = param1.GetCamDist(_loc2_);
      }
dilation(param1, param2, param3){
         this.sDir = this.sDir.dilation(param1,param2,param3);
         this.eDir = this.eDir.dilation(param1,param2,param3);
      }
translation(param1, param2, param3){
         this.sDir = this.sDir.translation(param1,param2,param3);
         this.eDir = this.eDir.translation(param1,param2,param3);
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
setStyle(param1){
         this.lineStyle = param1;
      }
}
class MainTimeline extends Sprite {
FsStr = new Sprite();
squareBtn = new Sprite();
helpText = new Sprite();
FtBall = new Sprite();
ObjectBall = new Sprite();
zObj = 0;
wavelength = 0;
SagittalRay1B = new Sprite();
SagittalRay1A = new Sprite();
fac1 = 0;
fac2 = 0;
fac3 = 0;
chiefRay2 = new Sprite();
FtStr1 = new Sprite();
currentCanvas = new Sprite();
chiefRay1 = new Sprite();
mousePressedX = 0;
SagittalRay2B = new Sprite();
mousePressedY = 0;
SagittalRay2A = new Sprite();
opticAxis = new Sprite();
image = new Sprite();
FtStr = new Sprite();
omega = 0;
zImg2 = 0;
k = 0;
zImg1 = 0;
axisStr1 = new Sprite();
clcStr1 = new Sprite();
thickness = 0;
blueBall = new Sprite();
MeridionalRay1B = new Sprite();
i = 0;
MeridionalRay1A = new Sprite();
FsBall = new Sprite();
objBall = new Sprite();
zLens = 0;
radius = 0;
MeridionalRay2A = new Sprite();
isPressed = false;
greenBall = new Sprite();
MeridionalRay2B = new Sprite();
theta = 0;
FsStr1 = new Sprite();
cyl = new Sprite();
clcStr = new Sprite();
objStr = new Sprite();
objStr1 = new Sprite();
arrowRed = new Sprite();
canvas3D = new Sprite();
chiefRayImage = new Sprite();
cam = new Sprite();
axisStr = new Sprite();
MeridionalTriangleA = new Sprite();
MeridionalTriangleB = new Sprite();
SagittalTriangleA = new Sprite();
SagittalTriangleB = new Sprite();
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
               }
               _loc2_++;
            }
            _loc1_++;
         }
      }
frame1(){
         this.cam = new Cam();
         this.cam.movieWidth = 700;
         this.cam.movieHeight = 330;
         this.cam.magnification = 1.2;
         this.cam.TransformMatrix = [[-0.1620992622721169,0.5857134081168777,0.7941432541625081],[0.9466370877348905,-0.13489313247034587,0.29271506196622865],[0.2785712486063143,0.7992137729453179,-0.5325921211825508]];
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
         this.wavelength = 500;
         this.thickness = 15;
         this.theta = 0.1;
         this.radius = 100;
         this.zLens = -85;
         this.zObj = -270;
         this.zImg1 = 250;
         this.zImg2 = 320;
         this.currentCanvas = new Sprite();
         this.addChild(this.currentCanvas);
         this.cyl = new Cylinder(this.canvas3D,new Point3D(0,0,-this.thickness / 2),new Point3D(this.radius,0,0),new Point3D(0,this.radius,0),new Point3D(0,0,this.thickness));
         this.cyl.setStyle(new LineStyle(1,8421504,0.7),new FillStyle(65365,0.02),new FillStyle(22015,0.02));
         this.cyl.eulerTransform(Math.PI / 2,-this.theta,0);
         this.cyl.translation(0,0,this.zLens);
         this.opticAxis = new Line(this.canvas3D,new Point3D(0,0,-350),new Point3D(0,0,470),new LineStyle(1.5,8421504,0.8));
         this.opticAxis.eulerTransform(Math.PI / 2,-this.theta,0);
         this.opticAxis.translation(0,0,this.zLens);
         this.chiefRay1 = new Arrow(this.canvas3D,new Point3D(0,0,this.zObj),new Point3D(0,0,this.zLens),1.5,new FillStyle(16711680,0.8));
         this.chiefRay2 = new Arrow(this.canvas3D,new Point3D(0,0,this.zLens),new Point3D(0,0,420),1.5,new FillStyle(16711680,0.8));
         this.MeridionalRay1B = new Arrow(this.canvas3D,new Point3D(0,0,this.zObj),new Point3D(this.radius * Math.cos(this.theta),0,this.zLens + this.radius * Math.sin(this.theta)),1.5,new FillStyle(26112,0.8));
         this.MeridionalRay1A = new Arrow(this.canvas3D,new Point3D(this.radius * Math.cos(this.theta),0,this.zLens + this.radius * Math.sin(this.theta)),new Point3D(0,0,this.zImg1),1.5,new FillStyle(26112,0.8));
         this.MeridionalRay1A.enlarge(1.4);
         this.MeridionalRay2B = new Arrow(this.canvas3D,new Point3D(0,0,this.zObj),new Point3D(-this.radius * Math.cos(this.theta),0,this.zLens - this.radius * Math.sin(this.theta)),1.5,new FillStyle(26112,0.8));
         this.MeridionalRay2A = new Arrow(this.canvas3D,new Point3D(-this.radius * Math.cos(this.theta),0,this.zLens - this.radius * Math.sin(this.theta)),new Point3D(0,0,this.zImg1),1.5,new FillStyle(26112,0.8));
         this.MeridionalRay2A.enlarge(1.4);
         this.MeridionalTriangleB = new Triangle(this.canvas3D,new Point3D(0,0,this.zObj),new Point3D(this.radius * Math.cos(this.theta),0,this.zLens + this.radius * Math.sin(this.theta)),new Point3D(-this.radius * Math.cos(this.theta),0,this.zLens - this.radius * Math.sin(this.theta)),new LineStyle(1,0,0.2),new FillStyle(34816,0.05));
         this.MeridionalTriangleA = new Triangle(this.canvas3D,new Point3D(0,0,this.zImg1),new Point3D(this.radius * Math.cos(this.theta),0,this.zLens + this.radius * Math.sin(this.theta)),new Point3D(-this.radius * Math.cos(this.theta),0,this.zLens - this.radius * Math.sin(this.theta)),new LineStyle(1,0,0.2),new FillStyle(65280,0.05));
         this.SagittalRay1B = new Arrow(this.canvas3D,new Point3D(0,0,this.zObj),new Point3D(0,this.radius,this.zLens),1.5,new FillStyle(255,0.8));
         this.SagittalRay1A = new Arrow(this.canvas3D,new Point3D(0,this.radius,this.zLens),new Point3D(0,0,this.zImg2),1.5,new FillStyle(255,0.8));
         this.SagittalRay1A.enlarge(1.25);
         this.SagittalRay2B = new Arrow(this.canvas3D,new Point3D(0,0,this.zObj),new Point3D(0,-this.radius,this.zLens),1.5,new FillStyle(255,0.8));
         this.SagittalRay2A = new Arrow(this.canvas3D,new Point3D(0,-this.radius,this.zLens),new Point3D(0,0,this.zImg2),1.5,new FillStyle(255,0.8));
         this.SagittalRay2A.enlarge(1.25);
         this.SagittalTriangleB = new Triangle(this.canvas3D,new Point3D(0,0,this.zObj),new Point3D(0,this.radius,this.zLens),new Point3D(0,-this.radius,this.zLens),new LineStyle(1,0,0.2),new FillStyle(255,0.05));
         this.SagittalTriangleA = new Triangle(this.canvas3D,new Point3D(0,0,this.zImg2),new Point3D(0,this.radius,this.zLens),new Point3D(0,-this.radius,this.zLens),new LineStyle(1,0,0.2),new FillStyle(255,0.05));
         this.FsStr1 = new PtObject(this.canvas3D,this.FsStr,new Point3D(15,0,this.zImg2 - 2),0.8);
         this.FtStr1 = new PtObject(this.canvas3D,this.FtStr,new Point3D(15,0,this.zImg1 - 5),0.8);
         this.objStr1 = new PtObject(this.canvas3D,this.objStr,new Point3D(-15,0,this.zObj),0.8);
         this.axisStr1 = new PtObject(this.canvas3D,this.axisStr,new Point3D(-40,0,this.zImg1),0.8);
         this.FsBall = new PtObject(this.canvas3D,this.blueBall,new Point3D(0,0,this.zImg2),0.8);
         this.FtBall = new PtObject(this.canvas3D,this.greenBall,new Point3D(0,0,this.zImg1),0.8);
         this.ObjectBall = new PtObject(this.canvas3D,this.objBall,new Point3D(0,0,this.zObj),0.8);
         this.image = new Array(11);
         this.i = 0;
         while(this.i < this.image.length)
         {
            this.fac1 = 20 / (this.image.length - this.i);
            this.fac2 = 20 / (this.i + 1);
            this.fac3 = (this.i - 5) * (this.i - 5) * 0.1;
            this.image[this.i] = new Ellipse(this.canvas3D,new Point3D(-100,0,100 + 15 * this.i),new Point3D(5 + this.fac1 + this.fac3,0,0),new Point3D(0,5 + this.fac2 + this.fac3,0),new LineStyle(1,8421504,0.8),new FillStyle(16711935,1 / (this.fac3 * 3 + 1.2)));
            ++this.i;
         }
         this.image[5].fillStyle = new FillStyle(16711680,0.8);
         this.chiefRayImage = new Arrow(this.canvas3D,new Point3D(-100,0,80),new Point3D(-100,0,270),1,new FillStyle(16711680,0.8));
         this.clcStr1 = new PtObject(this.canvas3D,this.clcStr,new Point3D(-120,0,175),1);
         this.RenderScene();
      }
RenderScene(){
         this.sortSprite();
         this.opticAxis.draw(this.cam);
         this.chiefRay1.draw(this.cam);
         this.chiefRay2.draw(this.cam);
         this.MeridionalRay1B.draw(this.cam);
         this.MeridionalRay1A.draw(this.cam);
         this.MeridionalRay2B.draw(this.cam);
         this.MeridionalRay2A.draw(this.cam);
         this.MeridionalTriangleB.draw(this.cam);
         this.MeridionalTriangleA.draw(this.cam);
         this.SagittalRay1B.draw(this.cam);
         this.SagittalRay1A.draw(this.cam);
         this.SagittalRay2B.draw(this.cam);
         this.SagittalRay2A.draw(this.cam);
         this.SagittalTriangleB.draw(this.cam);
         this.SagittalTriangleA.draw(this.cam);
         this.cyl.draw(this.cam);
         this.FsStr1.draw(this.cam);
         this.FtStr1.draw(this.cam);
         this.objStr1.draw(this.cam);
         this.axisStr1.draw(this.cam);
         this.FsBall.draw(this.cam);
         this.FtBall.draw(this.cam);
         this.ObjectBall.draw(this.cam);
         this.i = 0;
         while(this.i < this.image.length)
         {
            this.image[this.i].draw(this.cam);
            ++this.i;
         }
         this.chiefRayImage.draw(this.cam);
         this.clcStr1.draw(this.cam);
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
