import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, GradientType, Matrix, int, uint, trace } from './optics-batch50-adapter.mjs';
export function createKernel(){
class CoordTrans {
constructor(){
         
      }
static rotTrans(param1, param2, param3){
         let _loc4_ = NaN;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = null;
         _loc6_ = Math.cos(param3.dir);
         _loc7_ = Math.sin(param3.dir);
         _loc4_ = _loc6_ * param1 - _loc7_ * param2 + param3.x;
         _loc5_ = _loc7_ * param1 + _loc6_ * param2 + param3.y;
         return new Array(_loc4_,_loc5_);
      }
static invRotTrans(param1, param2, param3){
         let _loc4_ = NaN;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = null;
         _loc4_ = param1 - param3.x;
         _loc5_ = param2 - param3.y;
         _loc6_ = Math.cos(-param3.dir);
         _loc7_ = Math.sin(-param3.dir);
         _loc8_ = _loc6_ * _loc4_ - _loc7_ * _loc5_;
         _loc5_ = _loc7_ * _loc4_ + _loc6_ * _loc5_;
         _loc4_ = _loc8_;
         return new Array(_loc4_,_loc5_);
      }
}
class EGraphics {
scale = 1;
__fillStyle = null;
isWhiteBG = true;
yo = 0;
g = null;
xo = 0;
__lineStyle = null;
constructor(param1, param2 = 0, param3 = 0, param4 = 1){
         
         this.g = param1;
         this.xo = param2;
         this.yo = param3;
         this.scale = param4;
      }
drawRect(param1, param2, param3, param4, param5 = false){
         if(!param5)
         {
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.drawRect(this.xo + this.scale * param1,this.yo - this.scale * (param2 + param4),this.scale * param3,this.scale * param4);
         }
         else
         {
            this.g.beginFill(this.__fillStyle.color,this.__fillStyle.alpha);
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.drawRect(this.xo + this.scale * param1,this.yo - this.scale * (param2 + param4),this.scale * param3,this.scale * param4);
            this.g.endFill();
         }
      }
beginFill(){
         this.g.beginFill(this.__fillStyle.color,this.__fillStyle.alpha);
      }
clear(){
         this.g.clear();
      }
drawPollygon(param1, param2, param3 = false){
         let _loc4_ = 0;
         if(!param3)
         {
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.moveTo(this.xo + this.scale * param1[0],this.yo - this.scale * param2[0]);
            _loc4_ = 1;
            while(_loc4_ < param1.length)
            {
               this.g.lineTo(this.xo + this.scale * param1[_loc4_],this.yo - this.scale * param2[_loc4_]);
               _loc4_++;
            }
         }
         else
         {
            this.g.beginFill(this.__fillStyle.color,this.__fillStyle.alpha);
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.moveTo(this.xo + this.scale * param1[0],this.yo - this.scale * param2[0]);
            _loc4_ = 1;
            while(_loc4_ < param1.length)
            {
               this.g.lineTo(this.xo + this.scale * param1[_loc4_],this.yo - this.scale * param2[_loc4_]);
               _loc4_++;
            }
            this.g.endFill();
         }
      }
curveTo(param1, param2, param3, param4){
         this.g.curveTo(this.xo + this.scale * param1,this.yo - this.scale * param2,this.xo + this.scale * param3,this.yo - this.scale * param4);
      }
drawLine(param1, param2, param3, param4, param5 = false){
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = NaN;
         let _loc10_ = NaN;
         let _loc11_ = NaN;
         _loc6_ = this.__lineStyle.thickness * 5;
         _loc7_ = Math.sqrt(param3 - param1 * param3 - param1 + param4 - param2 * param4 - param2);
         _loc8_ = Math.atan2(param4 - param2,param3 - param1);
         _loc9_ = 25 / 180 * Math.PI;
         _loc10_ = Math.PI - _loc9_ / 2;
         _loc11_ = _loc6_ / Math.cos(_loc9_ / 2);
         if(param5)
         {
            this.g.beginFill(this.__lineStyle.color,this.__lineStyle.alpha);
            this.g.lineStyle(0,0,0);
            this.g.moveTo(this.xo + this.scale * param3,this.yo - this.scale * param4);
            this.g.lineTo(this.xo + this.scale * (param3 + _loc11_ * Math.cos(_loc8_ + _loc10_)),this.yo - this.scale * (param4 + _loc11_ * Math.sin(_loc8_ + _loc10_)));
            this.g.lineTo(this.xo + this.scale * (param3 + _loc11_ * Math.cos(_loc8_ - _loc10_)),this.yo - this.scale * (param4 + _loc11_ * Math.sin(_loc8_ - _loc10_)));
            this.g.endFill();
            if(_loc7_ > _loc6_)
            {
               this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,false,LineScaleMode.NORMAL,CapsStyle.NONE);
               this.g.moveTo(this.xo + this.scale * param1,this.yo - this.scale * param2);
               this.g.lineTo(this.xo + this.scale * (param1 + _loc7_ - _loc6_ + 1 * Math.cos(_loc8_)),this.yo - this.scale * (param2 + _loc7_ - _loc6_ + 1 * Math.sin(_loc8_)));
            }
         }
         else
         {
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.moveTo(this.xo + this.scale * param1,this.yo - this.scale * param2);
            this.g.lineTo(this.xo + this.scale * param3,this.yo - this.scale * param4);
         }
         this.g.moveTo(this.xo,this.yo);
      }
beginBoxGradientFill(param1, param2, param3){
         let _loc4_ = NaN;
         let _loc5_ = null;
         let _loc6_ = null;
         let _loc7_ = null;
         let _loc8_ = null;
         let _loc9_ = null;
         _loc4_ = this.scale * Math.max(param2,param3);
         _loc5_ = GradientType.LINEAR;
         _loc6_ = [16777215,8421631,16777215];
         if(!this.isWhiteBG)
         {
            _loc6_ = [5592422,102,5592422];
         }
         _loc7_ = [1,1,1];
         _loc8_ = [0,128,255];
         _loc9_ = new Matrix();
         _loc9_.createGradientBox(this.scale * param3,this.scale * param3,Math.PI / 2 - param1.dir,this.xo + this.scale * param1.x,this.yo - this.scale * (param1.y + param3 / 2) / Math.cos(param1.dir));
         this.g.beginGradientFill(_loc5_,_loc6_,_loc7_,_loc8_,_loc9_);
      }
set fillStyle(param1){
         this.__fillStyle = param1;
      }
get lineStyle(){
         return this.__lineStyle;
      }
lineTo(param1, param2){
         this.g.lineTo(this.xo + this.scale * param1,this.yo - this.scale * param2);
      }
arcTo(param1, param2, param3, param4, param5){
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = 0;
         let _loc9_ = NaN;
         let _loc10_ = NaN;
         let _loc11_ = NaN;
         let _loc12_ = NaN;
         _loc6_ = 8;
         _loc7_ = (param5 - param4) / _loc6_;
         _loc8_ = 0;
         while(_loc8_ < _loc6_)
         {
            _loc9_ = param4 + _loc7_ * _loc8_;
            _loc10_ = param4 + _loc7_ * (_loc8_ + 0.5);
            _loc11_ = param4 + _loc7_ * (_loc8_ + 1);
            _loc12_ = 1 / Math.cos(_loc7_ / 2);
            if(_loc8_ == 0)
            {
               this.g.lineTo(this.xo + this.scale * (param1 + param3 * Math.cos(_loc9_)),this.yo - this.scale * (param2 + param3 * Math.sin(_loc9_)));
            }
            this.g.curveTo(this.xo + this.scale * (param1 + param3 * Math.cos(_loc10_) * _loc12_),this.yo - this.scale * (param2 + param3 * Math.sin(_loc10_) * _loc12_),this.xo + this.scale * (param1 + param3 * Math.cos(_loc11_)),this.yo - this.scale * (param2 + param3 * Math.sin(_loc11_)));
            _loc8_++;
         }
      }
drawCircle(param1, param2, param3, param4 = false){
         if(!param4)
         {
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.drawCircle(this.xo + this.scale * param1,this.yo - this.scale * param2,this.scale * param3);
         }
         else
         {
            this.g.beginFill(this.__fillStyle.color,this.__fillStyle.alpha);
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.drawCircle(this.xo + this.scale * param1,this.yo - this.scale * param2,this.scale * param3);
            this.g.endFill();
         }
      }
set lineStyle(param1){
         this.__lineStyle = param1;
         this.g.lineStyle(param1.thickness,param1.color,param1.alpha,param1.pixelHinting,param1.scaleMode,param1.caps);
      }
moveTo(param1, param2){
         this.g.moveTo(this.xo + this.scale * param1,this.yo - this.scale * param2);
      }
endFill(){
         this.g.endFill();
      }
}
class FillStyle {
color = 8421504;
alpha = 80;
constructor(param1, param2 = 1){
         
         this.color = param1;
         this.alpha = param2;
      }
}
class Fresnel {
static flatCriterior = 10000;
theta1Arr = null;
__thickness = 0;
dy = 0;
eThickness = 0;
rIndex = 0;
length = 0;
__num = 15;
p = null;
x1Arr = null;
type = 1;
__R1 = 0;
constructor(param1, param2, param3, param4){
         
         this.rIndex = param1;
         this.__R1 = param2;
         this.__thickness = param3;
         if(param4 / 2 < param2 * 2 / 3)
         {
            this.length = param4;
         }
         else
         {
            this.length = param2 * 2 / 3 * 2;
         }
         this.p = new Point2D(0,0,0);
         this.x1Arr = new Array(this.__num);
         this.theta1Arr = new Array(this.__num);
         this.dy = this.length / 2 / this.__num;
         this.makeXp();
      }
n2(param1, param2){
         if(this.isInside(param1,param2))
         {
            return this.rIndex;
         }
         return 999;
      }
makeXp(){
         let _loc1_ = 0;
         this.eThickness = this.__thickness + Math.sqrt(this.__R1 * this.__R1 - (this.__num - 1) * (this.__num - 1) * this.dy * this.dy) - Math.sqrt(this.__R1 * this.__R1 - this.__num * this.__num * this.dy * this.dy);
         _loc1_ = 0;
         while(_loc1_ < this.__num)
         {
            this.x1Arr[_loc1_] = -this.eThickness + (Math.sqrt(this.R * this.R - _loc1_ * _loc1_ * this.dy * this.dy) - Math.sqrt(this.R * this.R - (_loc1_ + 1) * (_loc1_ + 1) * this.dy * this.dy));
            this.theta1Arr[_loc1_] = Math.asin((_loc1_ + 1) * this.dy / this.__R1);
            _loc1_++;
         }
      }
draw(param1){
         let _loc2_ = 0;
         let _loc3_ = null;
         let _loc4_ = null;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         if(param1.isWhiteBG)
         {
            param1.lineStyle = new LineStyle(1,21760,1,false,LineScaleMode.NONE);
            if(this.rIndex > 1)
            {
               param1.fillStyle = new FillStyle(14540287,1);
            }
            else if(this.rIndex == 1)
            {
               param1.fillStyle = new FillStyle(16777215,1);
               param1.lineStyle = new LineStyle(1,16777215,0);
            }
            else if(this.rIndex == 0)
            {
               param1.fillStyle = new FillStyle(30464,1);
            }
            else if(this.rIndex < 0)
            {
               param1.fillStyle = new FillStyle(11184810,1);
            }
            else
            {
               param1.fillStyle = new FillStyle(16777164,1);
            }
         }
         else
         {
            param1.lineStyle = new LineStyle(1,43520,1,false,LineScaleMode.NONE);
            if(this.rIndex > 1)
            {
               param1.fillStyle = new FillStyle(68,1);
            }
            else if(this.rIndex == 1)
            {
               param1.fillStyle = new FillStyle(0,1);
               param1.lineStyle = new LineStyle(1,0,0);
            }
            else if(this.rIndex == 0)
            {
               param1.fillStyle = new FillStyle(17408,1);
            }
            else if(this.rIndex < 0)
            {
               param1.fillStyle = new FillStyle(4473924,1);
            }
            else
            {
               param1.fillStyle = new FillStyle(3355392,1);
            }
         }
         param1.beginFill();
         _loc2_ = 0;
         while(_loc2_ <= this.__num)
         {
            if(_loc2_ == 0)
            {
               _loc3_ = CoordTrans.rotTrans(-this.eThickness,0,this.p);
               param1.moveTo(_loc3_[0],_loc3_[1]);
            }
            else
            {
               _loc3_ = CoordTrans.rotTrans(this.x1Arr[_loc2_ - 1],_loc2_ * this.dy,this.p);
               if(this.type == 0)
               {
                  param1.lineTo(_loc3_[0],_loc3_[1]);
               }
               else
               {
                  if(_loc2_ == 1)
                  {
                     _loc5_ = this.__R1 / Math.cos(this.theta1Arr[_loc2_ - 1] / 2);
                     _loc6_ = this.theta1Arr[_loc2_ - 1] / 2;
                  }
                  else
                  {
                     _loc5_ = this.__R1 / Math.cos((this.theta1Arr[_loc2_ - 1] - this.theta1Arr[_loc2_ - 2]) / 2);
                     _loc6_ = (this.theta1Arr[_loc2_ - 1] + this.theta1Arr[_loc2_ - 2]) / 2;
                  }
                  _loc7_ = Math.sqrt(this.__R1 * this.__R1 - (_loc2_ - 1) * (_loc2_ - 1) * this.dy * this.dy) - this.eThickness;
                  _loc4_ = CoordTrans.rotTrans(-_loc5_ * Math.cos(_loc6_) + _loc7_,_loc5_ * Math.sin(_loc6_),this.p);
                  param1.curveTo(_loc4_[0],_loc4_[1],_loc3_[0],_loc3_[1]);
               }
               if(_loc2_ != this.__num)
               {
                  _loc3_ = CoordTrans.rotTrans(-this.eThickness,_loc2_ * this.dy,this.p);
                  param1.lineTo(_loc3_[0],_loc3_[1]);
               }
            }
            _loc2_++;
         }
         _loc3_ = CoordTrans.rotTrans(0,this.__num * this.dy,this.p);
         param1.lineTo(_loc3_[0],_loc3_[1]);
         _loc3_ = CoordTrans.rotTrans(0,-this.__num * this.dy,this.p);
         param1.lineTo(_loc3_[0],_loc3_[1]);
         _loc2_ = this.__num;
         while(_loc2_ >= 0)
         {
            if(_loc2_ !== this.__num)
            {
               _loc3_ = CoordTrans.rotTrans(-this.eThickness,-_loc2_ * this.dy,this.p);
               if(this.type == 0)
               {
                  param1.lineTo(_loc3_[0],_loc3_[1]);
               }
               else
               {
                  if(_loc2_ == 0)
                  {
                     _loc5_ = this.__R1 / Math.cos(this.theta1Arr[_loc2_] / 2);
                     _loc6_ = this.theta1Arr[_loc2_] / 2;
                  }
                  else
                  {
                     _loc5_ = this.__R1 / Math.cos((this.theta1Arr[_loc2_] - this.theta1Arr[_loc2_ - 1]) / 2);
                     _loc6_ = (this.theta1Arr[_loc2_] + this.theta1Arr[_loc2_ - 1]) / 2;
                  }
                  _loc7_ = Math.sqrt(this.__R1 * this.__R1 - _loc2_ * _loc2_ * this.dy * this.dy) - this.eThickness;
                  _loc4_ = CoordTrans.rotTrans(-_loc5_ * Math.cos(_loc6_) + _loc7_,-_loc5_ * Math.sin(_loc6_),this.p);
                  param1.curveTo(_loc4_[0],_loc4_[1],_loc3_[0],_loc3_[1]);
               }
            }
            if(_loc2_ != 0)
            {
               _loc3_ = CoordTrans.rotTrans(this.x1Arr[_loc2_ - 1],-_loc2_ * this.dy,this.p);
               param1.lineTo(_loc3_[0],_loc3_[1]);
            }
            _loc2_--;
         }
         param1.endFill();
      }
isInside(param1, param2){
         let _loc3_ = null;
         let _loc4_ = NaN;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = 0;
         let _loc8_ = NaN;
         let _loc9_ = NaN;
         let _loc10_ = NaN;
         let _loc11_ = undefined;
         _loc3_ = CoordTrans.invRotTrans(param1,param2,this.p);
         _loc4_ = Number(_loc3_[0]);
         _loc5_ = Number(_loc3_[1]);
         if(_loc4_ >= 0)
         {
            return false;
         }
         _loc6_ = Math.abs(_loc5_);
         if(_loc6_ >= this.length / 2)
         {
            return false;
         }
         _loc7_ = Math.floor(_loc6_ / this.dy);
         _loc8_ = this.dy * _loc7_;
         if(this.type == 0)
         {
            _loc10_ = _loc6_ - _loc8_;
            _loc9_ = -this.eThickness + (this.x1Arr[_loc7_] + this.eThickness) * _loc10_ / this.dy;
         }
         else
         {
            _loc11_ = Math.sqrt(this.__R1 * this.__R1 - _loc8_ * _loc8_) - this.eThickness;
            _loc9_ = -Math.sqrt(this.__R1 * this.__R1 - _loc6_ * _loc6_) + _loc11_;
         }
         if(_loc4_ < _loc9_)
         {
            return false;
         }
         return true;
      }
get R(){
         return this.__R1;
      }
set num(param1){
         this.__num = param1;
         this.x1Arr = new Array(param1);
         this.theta1Arr = new Array(param1);
         this.dy = this.length / 2 / param1;
         this.makeXp();
      }
set R(param1){
         this.__R1 = param1;
      }
focalLength(){
         if(this.rIndex == 1)
         {
            return Number.MAX_VALUE;
         }
         return this.R / (this.rIndex - 1);
      }
n(param1){
         return this.n2(param1.x,param1.y);
      }
set thickness(param1){
         this.__thickness = param1;
      }
get thickness(){
         return this.__thickness;
      }
}
class IndexField {
boundRect = null;
instrumentArray = new Array();
insG = null;
constructor(param1, param2){
         
         this.insG = param1;
         this.boundRect = param2;
      }
RemoveInstrument(){
         while(this.instrumentArray.length > 0)
         {
            this.instrumentArray.shift();
            trace(this.instrumentArray.length);
         }
      }
Draw(){
         let _loc1_ = 0;
         this.insG.clear();
         _loc1_ = 0;
         while(_loc1_ < this.instrumentArray.length)
         {
            this.instrumentArray[_loc1_].draw(this.insG);
            _loc1_++;
         }
      }
AddInstrument(param1){
         this.instrumentArray.push(param1);
      }
n(param1){
         return this.n2(param1.x,param1.y);
      }
n2(param1, param2){
         let _loc3_ = NaN;
         let _loc4_ = 0;
         _loc4_ = int(this.instrumentArray.length - 1);
         while(_loc4_ >= 0)
         {
            _loc3_ = Number(this.instrumentArray[_loc4_].n2(param1,param2));
            if(_loc3_ != 999)
            {
               return _loc3_;
            }
            _loc4_--;
         }
         return 1;
      }
contains(param1){
         return this.boundRect.contains(param1.x,param1.y);
      }
}
class LineStyle {
color = 8421504;
scaleMode = null;
caps = null;
thickness = 1;
pixelHinting = false;
alpha = 0;
constructor(param1, param2, param3 = 1, param4 = false, param5 = "normal", param6 = null){
         
         this.thickness = param1;
         this.color = param2;
         this.alpha = param3;
         this.pixelHinting = param4;
         this.scaleMode = param5;
         this.caps = param6;
      }
}
class Point2D {
dir = 0;
x = 0;
y = 0;
constructor(param1 = 0, param2 = 0, param3 = 0){
         
         this.x = param1;
         this.y = param2;
         this.dir = param3;
      }
transdir(param1, param2){
         this.translate(param1 * Math.cos(param2),param1 * Math.sin(param2));
      }
Angle(param1, param2, param3){
         let _loc4_ = NaN;
         _loc4_ = Math.abs(180 * (param1 - param2) / Math.PI);
         while(_loc4_ > param3 / 2)
         {
            _loc4_ = Math.abs(_loc4_ - param3);
         }
         return _loc4_;
      }
translate(param1, param2){
         this.x += param1;
         this.y += param2;
      }
distance(param1){
         let _loc2_ = NaN;
         return Math.sqrt((param1.x - this.x) * (param1.x - this.x) + (param1.y - this.y) * (param1.y - this.y));
      }
movePt(param1){
         this.x = param1.x;
         this.y = param1.y;
         this.dir = param1.dir;
      }
clone(param1){
         return new Point2D(this.x,this.y,this.dir);
      }
findCrossSection(param1){
         let _loc2_ = null;
         let _loc3_ = NaN;
         let _loc4_ = NaN;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = NaN;
         let _loc10_ = NaN;
         let _loc11_ = false;
         let _loc12_ = false;
         _loc2_ = new Point2D(0,0,0);
         _loc3_ = this.x;
         _loc4_ = this.y;
         _loc5_ = param1.x;
         _loc6_ = param1.y;
         _loc7_ = this.dir;
         _loc8_ = param1.dir;
         if(this.Angle(_loc7_,Math.PI / 2,180) < 0.1 && this.Angle(_loc8_,Math.PI / 2,180) > 0.1)
         {
            _loc2_.x = _loc3_;
            _loc2_.y = _loc6_ + (_loc2_.x - _loc5_) * Math.tan(_loc8_);
         }
         else if(this.Angle(_loc8_,Math.PI / 2,180) < 0.1 && this.Angle(_loc7_,Math.PI / 2,180) > 0.1)
         {
            _loc2_.x = _loc5_;
            _loc2_.y = _loc4_ + (_loc2_.x - _loc3_) * Math.tan(_loc7_);
         }
         else if(this.Angle(_loc7_,_loc8_,180) > 0.01)
         {
            _loc2_.x = -(_loc4_ - _loc3_ * Math.tan(_loc7_) - (_loc6_ - _loc5_ * Math.tan(_loc8_))) / (Math.tan(_loc7_) - Math.tan(_loc8_));
            _loc2_.y = _loc4_ + (_loc2_.x - _loc3_) * Math.tan(_loc7_);
         }
         else
         {
            _loc2_.dir = 666;
         }
         if(_loc2_.dir != 666)
         {
            _loc9_ = Math.atan2(_loc2_.y - _loc4_,_loc2_.x - _loc3_);
            _loc10_ = Math.atan2(_loc2_.y - _loc6_,_loc2_.x - _loc5_);
            _loc11_ = this.Angle(_loc9_,_loc7_,360) < 90;
            _loc12_ = this.Angle(_loc10_,_loc8_,360) < 90;
            if(_loc11_)
            {
               _loc2_.dir += 1;
            }
            if(_loc12_)
            {
               _loc2_.dir += 2;
            }
         }
         return _loc2_;
      }
equals(param1){
         return param1.x == this.x && param1.y == this.y && param1.dir == this.dir;
      }
}
class Prototype {
huyCanvas = null;
yOrigin = 0;
__background = null;
numOfPoint = 0;
wfCanvas = null;
insEG = null;
timeHyugence = 0;
aniMode = 0;
animationTimer = null;
rayCanvas = null;
wfEG = null;
huyEG = null;
instrumentCanvas = null;
xOrigin = 0;
statusExplanation = "";
indexField = null;
scale = 1;
wf = null;
rayEG = null;
currentTime = 0;
__aniDelay = 50;
hyugenceMode = 0;
aniTimeLimit = 200;
wfAux = null;
__wavelength = 0;
constructor(param1, param2, param3, param4){
         
         this.__background = new Sprite();
         this.__wavelength = param2;
         this.instrumentCanvas = new Shape();
         this.insEG = new EGraphics(this.instrumentCanvas.graphics,param3,param4,this.scale);
         this.xOrigin = param3;
         this.yOrigin = param4;
         this.rayCanvas = new Shape();
         this.rayEG = new EGraphics(this.rayCanvas.graphics,param3,param4,this.scale);
         this.wfCanvas = new Shape();
         this.wfEG = new EGraphics(this.wfCanvas.graphics,param3,param4,this.scale);
         this.huyCanvas = new Shape();
         this.huyEG = new EGraphics(this.huyCanvas.graphics,param3,param4,this.scale);
         this.__background.addChild(this.instrumentCanvas);
         this.__background.addChild(this.rayCanvas);
         this.__background.addChild(this.wfCanvas);
         this.__background.addChild(this.huyCanvas);
         this.indexField = new IndexField(this.insEG,new Rectangle(-param3 - 200,-200 - param4,1000,400 + 2 * param4));
         this.numOfPoint = param1;
         this.wf = new WaveFront(this.indexField,this.numOfPoint,this.rayEG,this.wfEG,this.huyEG);
         this.wfAux = new WaveFront(this.indexField,3,this.rayEG,this.wfEG,this.huyEG);
         this.wfAux.isShowFront = false;
         this.wfAux.isShowRay = true;
         this.animationTimer = new Timer(this.__aniDelay,0);
         this.animationTimer.addEventListener(TimerEvent.TIMER,this.onTick);
      }
stopAni(){
         this.animationTimer.reset();
      }
run(){
         let _loc1_ = 0;
         switch(this.hyugenceMode)
         {
            case 0:
               this.procedeWave();
               ++this.currentTime;
               break;
            case 1:
               if(this.timeHyugence < 20)
               {
                  this.huyCanvas.graphics.clear();
                  ++this.timeHyugence;
                  this.wf.ShowHyugence(this.timeHyugence / 20 * this.__wavelength,1);
               }
               else
               {
                  this.timeHyugence = 0;
                  this.procedeWave();
                  ++this.currentTime;
               }
               break;
            case 2:
               if(this.timeHyugence < 20)
               {
                  this.huyCanvas.graphics.clear();
                  ++this.timeHyugence;
                  this.wf.ShowHyuFre(this.timeHyugence / 20 * this.__wavelength,2);
               }
               else
               {
                  this.timeHyugence = 0;
                  this.procedeWave();
                  ++this.currentTime;
               }
         }
         _loc1_ = this.wf.insideRayCount();
         if(_loc1_ / this.numOfPoint < 0.1 || this.currentTime > this.aniTimeLimit)
         {
            this.stopAni();
            if(this.aniMode == 0)
            {
               this.finalTreat();
            }
            this.background.dispatchEvent(new TimerEvent(TimerEvent.TIMER));
         }
      }
set aniDelay(param1){
         this.__aniDelay = param1;
         if(this.animationTimer != null)
         {
            this.animationTimer.delay = param1;
         }
      }
startAni(){
         this.currentTime = 0;
         if(!this.animationTimer.running)
         {
            this.animationTimer.start();
         }
      }
onTick(param1){
         this.run();
      }
procedeWave(){
         this.wf.MakeNew(this.__wavelength);
      }
get background(){
         return this.__background;
      }
finalTreat(){
         let _loc1_ = 0;
         let _loc2_ = null;
         let _loc3_ = null;
         let _loc4_ = 0;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = null;
         let _loc8_ = null;
         let _loc9_ = NaN;
         _loc1_ = Math.floor(this.numOfPoint / 2);
         _loc2_ = new Point2D(0,0,0);
         _loc3_ = new Point2D(0,0,0);
         _loc2_ = this.wf.crosssection(_loc1_,_loc1_ + 1);
         _loc3_ = this.wf.crosssection(_loc1_,_loc1_ - 1);
         if(_loc2_.dir != 666 && _loc3_.dir != 666)
         {
            this.rayEG.lineStyle = new LineStyle(1,8421504,1,false,LineScaleMode.NONE);
            this.rayEG.moveTo(_loc2_.x,_loc2_.y);
            this.rayEG.lineTo(this.wf.ray[_loc1_].p.x,this.wf.ray[_loc1_].p.y);
            this.rayEG.moveTo(_loc2_.x,_loc2_.y);
            this.rayEG.lineTo(this.wf.ray[_loc1_ + 1].p.x,this.wf.ray[_loc1_ + 1].p.y);
            this.rayEG.moveTo(_loc3_.x,_loc3_.y);
            this.rayEG.lineTo(this.wf.ray[_loc1_ - 1].p.x,this.wf.ray[_loc1_ - 1].p.y);
         }
         _loc4_ = 0;
         while(_loc4_ < this.currentTime)
         {
            this.wfAux.MakeNew(this.__wavelength);
            _loc4_++;
         }
         if(Math.abs(_loc2_.x - _loc3_.x) < 15 && _loc2_.dir != 666 && _loc3_.dir != 666)
         {
            _loc5_ = Math.round((_loc2_.x + _loc3_.x) / 2 * 100) / 100;
            _loc6_ = Math.round((_loc2_.y + _loc3_.y) / 2 * 100) / 100;
            _loc8_ = "실상";
            _loc9_ = _loc5_;
            if(this.wf.ray[_loc1_].p.x > 0 && _loc5_ < 0)
            {
               _loc8_ = "허상";
            }
            if(this.wf.ray[_loc1_].p.x < 0 && _loc5_ > 0)
            {
               _loc8_ = "허상";
            }
            if(this.wf.ray[_loc1_].p.x < 0)
            {
               _loc8_ += "(거울)";
               _loc9_ = -_loc5_;
            }
            _loc7_ = "(" + _loc9_ + ", " + _loc6_ + ")";
            this.statusExplanation = _loc8_ + " " + _loc7_;
            if(this.indexField.contains(new Point2D(_loc5_,_loc6_)))
            {
               this.rayEG.lineStyle = new LineStyle(1,11141290,1);
               this.rayEG.fillStyle = new FillStyle(26112,1);
               this.rayEG.drawCircle(_loc5_,_loc6_,3,true);
            }
         }
         else
         {
            this.statusExplanation = "상 형성?";
         }
      }
set wavelength(param1){
         this.__wavelength = param1;
      }
clearWaveFront(){
         this.rayCanvas.graphics.clear();
         this.wfCanvas.graphics.clear();
         this.huyCanvas.graphics.clear();
         this.currentTime = 0;
         this.timeHyugence = 0;
      }
setWhiteBG(param1){
         this.insEG.isWhiteBG = param1;
      }
getScreenCoordinate(param1){
         return new Point2D(this.xOrigin + this.scale * param1.x,this.yOrigin - this.scale * param1.y);
      }
}
class RayTrace {
isOut = false;
isLineContinue = false;
indexField = null;
stepDist = 3;
rayG = null;
isLineComplete = false;
isShowRay = true;
connect = false;
distReal = 0;
lineStartPosition = null;
p = null;
__rayLineStyle = null;
huyG = null;
constructor(param1, param2, param3){
         
         this.indexField = param1;
         this.rayG = param2;
         this.huyG = param3;
         this.p = new Point2D(0,0,0);
         this.connect = false;
      }
NextByOnce(param1, param2){
         let _loc3_ = NaN;
         let _loc4_ = NaN;
         let _loc5_ = null;
         let _loc6_ = null;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = NaN;
         let _loc10_ = NaN;
         let _loc11_ = NaN;
         let _loc12_ = NaN;
         let _loc13_ = NaN;
         let _loc14_ = NaN;
         _loc3_ = Number(this.indexField.n(param1));
         _loc4_ = param1.dir;
         _loc5_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc6_ = new Point2D(param1.x,param1.y,param1.dir);
         if(_loc3_ <= 0)
         {
            _loc6_.movePt(new Point2D(-200,-200,3.14));
            return _loc6_;
         }
         _loc7_ = _loc3_;
         if(_loc7_ >= 100)
         {
            _loc7_ -= 100;
         }
         _loc6_.transdir(param2 / _loc7_,_loc4_);
         _loc8_ = Number(this.indexField.n(_loc6_));
         if(_loc3_ == _loc8_ && _loc3_ < 100)
         {
            if(!this.isLineContinue)
            {
               this.lineStartPosition = new Point2D(param1.x,param1.y,param1.dir);
            }
            if(this.isLineComplete)
            {
               if(this.isShowRay)
               {
                  this.rayG.drawLine(this.lineStartPosition.x,this.lineStartPosition.y,_loc6_.x,_loc6_.y);
               }
            }
            this.isLineContinue = true;
            return _loc6_;
         }
         if(this.isLineContinue)
         {
            if(this.isShowRay)
            {
               this.rayG.drawLine(this.lineStartPosition.x,this.lineStartPosition.y,param1.x,param1.y);
            }
         }
         this.isLineContinue = false;
         if(_loc3_ >= 100 && _loc8_ >= 100)
         {
            return this.NextBy2Beam(param1,param2);
         }
         if(_loc3_ >= 100 && _loc8_ < 100)
         {
            return this.NextBy2Beam(param1,param2,true);
         }
         if(_loc3_ < 100 && _loc8_ >= 100)
         {
            return this.NextBy2Beam(param1,param2,true);
         }
         if(_loc3_ < 100 && _loc8_ < 100)
         {
            this.FindIntersect(_loc5_,_loc6_);
            _loc8_ = Number(this.indexField.n(_loc6_));
            _loc9_ = _loc8_ / _loc3_;
            if(this.isShowRay)
            {
               this.rayG.drawLine(param1.x,param1.y,_loc5_.x,_loc5_.y);
            }
            _loc10_ = _loc5_.distance(param1) * _loc3_;
            _loc11_ = this.FindNormalDir(_loc6_,_loc4_);
            _loc12_ = _loc4_ - _loc11_;
            _loc14_ = Math.sin(_loc12_) / _loc9_;
            if(_loc9_ < 0)
            {
               _loc6_.movePt(new Point2D(-200,-200,3.14));
               return _loc6_;
            }
            if(Math.abs(_loc14_) >= 1 || _loc9_ == 0)
            {
               _loc4_ = _loc11_ + Math.PI - _loc12_;
               _loc5_.transdir((param2 - _loc10_) / _loc3_,_loc4_);
               _loc5_.dir = _loc4_;
               if(this.isShowRay)
               {
                  this.rayG.drawLine(_loc6_.x,_loc6_.y,_loc5_.x,_loc5_.y);
               }
               return _loc5_;
            }
            _loc4_ = _loc11_ + Math.atan(_loc14_ / Math.sqrt(1 - _loc14_ * _loc14_));
            _loc6_.transdir((param2 - _loc10_) / _loc8_,_loc4_);
            _loc6_.dir = _loc4_;
            if(this.isShowRay)
            {
               this.rayG.drawLine(_loc5_.x,_loc5_.y,_loc6_.x,_loc6_.y);
            }
            return _loc6_;
         }
      }
CalcNextPointBy2Beam(param1){
         this.p.movePt(this.NextBy2Beam(this.p,param1));
      }
ShowRay(param1){
         let _loc2_ = 0;
         let _loc3_ = null;
         let _loc4_ = null;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = 0;
         let _loc8_ = null;
         this.isLineContinue = false;
         this.isLineComplete = false;
         _loc2_ = int(param1 / 4);
         if(_loc2_ < 1)
         {
            _loc2_ = 1;
         }
         _loc3_ = new Point2D(0,0,0);
         _loc4_ = new Point2D(0,0,0);
         _loc5_ = 0;
         _loc6_ = 0;
         _loc3_.movePt(this.p);
         if(this.indexField.contains(_loc3_))
         {
            _loc7_ = 0;
            while(_loc7_ < _loc2_)
            {
               _loc5_ = _loc3_.x;
               _loc6_ = _loc3_.y;
               _loc8_ = this.NextByOnce(_loc3_,param1 / _loc2_);
               _loc3_.movePt(_loc8_);
               if(_loc7_ == _loc2_ - 1)
               {
                  this.rayG.drawLine(_loc5_,_loc6_,_loc3_.x,_loc3_.y,true);
               }
               else
               {
                  this.rayG.drawLine(_loc5_,_loc6_,_loc3_.x,_loc3_.y);
               }
               _loc7_++;
            }
         }
      }
FindIntersect(param1, param2){
         let _loc3_ = null;
         let _loc4_ = null;
         let _loc5_ = null;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = 0;
         _loc3_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc4_ = new Point2D(param2.x,param2.y,param2.dir);
         _loc5_ = new Point2D(0,0,param1.dir);
         _loc8_ = 0;
         while(_loc8_ < 20)
         {
            _loc5_.x = (_loc3_.x + _loc4_.x) / 2;
            _loc5_.y = (_loc3_.y + _loc4_.y) / 2;
            _loc6_ = Number(this.indexField.n(_loc5_));
            _loc7_ = Number(this.indexField.n(_loc3_));
            if(_loc6_ == _loc7_ || _loc6_ >= 100 && _loc7_ >= 100)
            {
               _loc3_.movePt(_loc5_);
            }
            else
            {
               _loc4_.movePt(_loc5_);
            }
            _loc8_++;
         }
         param1.movePt(_loc3_);
         param2.movePt(_loc4_);
      }
NextBy2BeamWithinGRIN(param1, param2){
         let _loc3_ = NaN;
         let _loc4_ = 0;
         let _loc5_ = NaN;
         let _loc6_ = null;
         let _loc7_ = null;
         let _loc8_ = NaN;
         let _loc9_ = NaN;
         let _loc10_ = null;
         let _loc11_ = NaN;
         let _loc12_ = false;
         let _loc13_ = 0;
         let _loc14_ = null;
         _loc3_ = 0.005;
         _loc4_ = Math.ceil(param2 / _loc3_);
         _loc3_ = param2 / _loc4_;
         _loc5_ = param1.dir;
         _loc6_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc7_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc7_.transdir(0.05,_loc5_ + Math.PI / 2);
         _loc8_ = Number(this.indexField.n(_loc6_));
         _loc9_ = Number(this.indexField.n(_loc7_));
         _loc12_ = false;
         _loc13_ = 0;
         while(_loc13_ < _loc4_)
         {
            _loc10_ = new Point2D(_loc6_.x,_loc6_.y,_loc5_);
            if(_loc8_ < 100)
            {
               _loc6_.transdir(_loc3_ / _loc8_,_loc5_);
            }
            else
            {
               _loc6_.transdir(_loc3_ / (_loc8_ - 100),_loc5_);
            }
            if(_loc9_ < 100)
            {
               _loc7_.transdir(_loc3_ / _loc9_,_loc5_);
            }
            else
            {
               _loc7_.transdir(_loc3_ / (_loc9_ - 100),_loc5_);
            }
            _loc8_ = Number(this.indexField.n(_loc6_));
            _loc11_ = _loc13_;
            if(_loc8_ < 100)
            {
               _loc12_ = true;
               break;
            }
            _loc9_ = Number(this.indexField.n(_loc7_));
            _loc5_ = -Math.atan2(_loc7_.x - _loc6_.x,_loc7_.y - _loc6_.y);
            _loc13_++;
         }
         if(_loc12_)
         {
            _loc14_ = new Point2D(_loc10_.x,_loc10_.y,_loc10_.dir);
            this.FindIntersect(_loc14_,_loc6_);
            if(this.isShowRay)
            {
               this.rayG.drawLine(param1.x,param1.y,_loc14_.x,_loc14_.y);
            }
            if(_loc8_ < 100)
            {
               this.dist = _loc10_.distance(_loc14_) * _loc8_;
            }
            else
            {
               this.dist = _loc10_.distance(_loc14_) * (_loc8_ - 100);
            }
            this.distReal = _loc11_ * _loc3_ + this.dist;
            return _loc14_;
         }
         this.distReal = _loc4_ * _loc3_;
         return _loc6_;
      }
FindNormalDir(param1, param2){
         let _loc3_ = NaN;
         let _loc4_ = NaN;
         let _loc5_ = null;
         let _loc6_ = null;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = NaN;
         let _loc10_ = NaN;
         let _loc11_ = NaN;
         let _loc12_ = NaN;
         let _loc13_ = NaN;
         let _loc14_ = NaN;
         let _loc15_ = 0;
         let _loc16_ = NaN;
         _loc3_ = param2;
         _loc4_ = param2 + Math.PI;
         _loc5_ = new Point2D(0,0,0);
         _loc6_ = new Point2D(0,0,0);
         _loc7_ = 0;
         _loc15_ = 0;
         while(_loc15_ < 20)
         {
            _loc7_ = (_loc3_ + _loc4_) / 2;
            _loc5_.movePt(param1);
            _loc5_.transdir(0.1,_loc3_);
            _loc6_.movePt(param1);
            _loc6_.transdir(0.1,_loc7_);
            if(Math.min(this.indexField.n(_loc5_),100) == Math.min(this.indexField.n(_loc6_),100))
            {
               _loc3_ = _loc7_;
            }
            else
            {
               _loc4_ = _loc7_;
            }
            _loc15_++;
         }
         _loc8_ = _loc7_;
         _loc3_ = param2 + 2 * Math.PI;
         _loc4_ = param2;
         _loc15_ = 0;
         while(_loc15_ < 20)
         {
            _loc7_ = (_loc3_ + _loc4_) / 2;
            _loc5_.movePt(param1);
            _loc5_.transdir(0.1,_loc3_);
            _loc6_.movePt(param1);
            _loc6_.transdir(0.1,_loc7_);
            if(Math.min(this.indexField.n(_loc5_),100) == Math.min(this.indexField.n(_loc6_),100))
            {
               _loc3_ = _loc7_;
            }
            else
            {
               _loc4_ = _loc7_;
            }
            _loc15_++;
         }
         _loc9_ = _loc7_;
         return (_loc8_ + _loc9_) * 0.5 - Math.PI;
      }
MakeNew(param1){
         let _loc2_ = 0;
         let _loc3_ = NaN;
         let _loc4_ = 0;
         if(this.isOut)
         {
            return;
         }
         this.rayG.lineStyle = this.__rayLineStyle;
         if(!this.indexField.contains(this.p))
         {
            this.isOut = true;
            return;
         }
         this.isLineContinue = false;
         this.isLineComplete = false;
         if(param1 > this.stepDist)
         {
            _loc2_ = int(param1 / this.stepDist + 1);
            _loc3_ = param1 / _loc2_;
            _loc4_ = 0;
            while(_loc4_ < _loc2_)
            {
               if(_loc4_ == _loc2_ - 1)
               {
                  this.isLineComplete = true;
               }
               this.p.movePt(this.NextByOnce(this.p,_loc3_));
               _loc4_++;
            }
         }
         else
         {
            this.isLineComplete = true;
            this.p.movePt(this.NextByOnce(this.p,param1));
         }
      }
set rayLineStyle(param1){
         this.__rayLineStyle = param1;
         this.rayG.lineStyle = param1;
      }
ShowHyugence(param1, param2){
         let _loc3_ = NaN;
         if(this.isOut)
         {
            return;
         }
         _loc3_ = param1 / this.indexField.n(this.p);
         this.huyG.drawCircle(this.p.x,this.p.y,_loc3_);
      }
NextBy2Beam(param1, param2, param3 = false){
         let _loc4_ = NaN;
         let _loc5_ = 0;
         let _loc6_ = NaN;
         let _loc7_ = null;
         let _loc8_ = null;
         let _loc9_ = null;
         let _loc10_ = NaN;
         let _loc11_ = NaN;
         let _loc12_ = NaN;
         let _loc13_ = 0;
         _loc4_ = 0.01;
         if(param3)
         {
            _loc4_ = 0.001;
         }
         _loc5_ = Math.ceil(param2 / _loc4_);
         _loc4_ = param2 / _loc5_;
         _loc6_ = param1.dir;
         _loc7_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc8_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc9_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc8_.transdir(0.05,_loc6_ + Math.PI / 2);
         _loc9_.transdir(-0.05,_loc6_ + Math.PI / 2);
         _loc10_ = Number(this.indexField.n(_loc7_));
         _loc11_ = Number(this.indexField.n(_loc8_));
         _loc12_ = Number(this.indexField.n(_loc9_));
         _loc13_ = 0;
         while(_loc13_ < _loc5_)
         {
            if(_loc10_ < 100)
            {
               _loc7_.transdir(_loc4_ / _loc10_,_loc6_);
            }
            else
            {
               _loc7_.transdir(_loc4_ / (_loc10_ - 100),_loc6_);
            }
            if(_loc11_ < 100)
            {
               _loc8_.transdir(_loc4_ / _loc11_,_loc6_);
            }
            else
            {
               _loc8_.transdir(_loc4_ / (_loc11_ - 100),_loc6_);
            }
            if(_loc12_ < 100)
            {
               _loc9_.transdir(_loc4_ / _loc12_,_loc6_);
            }
            else
            {
               _loc9_.transdir(_loc4_ / (_loc12_ - 100),_loc6_);
            }
            _loc6_ = -Math.atan2(_loc8_.x - _loc9_.x,_loc8_.y - _loc9_.y);
            _loc8_.movePt(_loc7_);
            _loc9_.movePt(_loc7_);
            _loc8_.transdir(0.05,_loc6_ + Math.PI / 2);
            _loc9_.transdir(-0.05,_loc6_ + Math.PI / 2);
            _loc10_ = Number(this.indexField.n(_loc7_));
            _loc11_ = Number(this.indexField.n(_loc8_));
            _loc12_ = Number(this.indexField.n(_loc9_));
            _loc13_++;
         }
         _loc7_.dir = _loc6_;
         if(this.isShowRay)
         {
            this.rayG.drawLine(param1.x,param1.y,_loc7_.x,_loc7_.y);
         }
         return _loc7_;
      }
ShowHyuFre(param1, param2){
         let _loc3_ = NaN;
         let _loc4_ = null;
         let _loc5_ = null;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = false;
         let _loc9_ = 0;
         if(this.isOut)
         {
            return;
         }
         _loc4_ = new Point2D(0,0,0);
         _loc5_ = new Point2D(0,0,0);
         _loc6_ = 0;
         _loc7_ = 0;
         _loc8_ = this.isShowRay;
         _loc4_.movePt(this.p);
         _loc3_ = _loc4_.dir;
         this.isShowRay = false;
         _loc9_ = 0;
         while(_loc9_ <= 20)
         {
            _loc4_.dir = _loc3_ - 0.08 * (_loc9_ - 10);
            _loc5_.movePt(this.NextByOnce(_loc4_,param1));
            if(_loc9_ > 0)
            {
               this.huyG.drawLine(_loc6_,_loc7_,_loc5_.x,_loc5_.y);
            }
            _loc6_ = _loc5_.x;
            _loc7_ = _loc5_.y;
            _loc9_++;
         }
         this.isShowRay = _loc8_;
      }
}
class WaveFront {
__isShowFront = true;
__isShowRay = true;
indexField = null;
numP = 0;
__huyLineStyle = null;
__defaultRayLineStyle = null;
__frontLineStyle = null;
rayG = null;
ray = null;
__stepDist = 0;
huyG = null;
frontG = null;
constructor(param1, param2, param3, param4, param5){
         let _loc6_ = 0;
         
         this.numP = param2;
         this.ray = new Array(this.numP);
         this.rayG = param3;
         this.frontG = param4;
         this.huyG = param5;
         this.indexField = param1;
         _loc6_ = 0;
         while(_loc6_ < this.numP)
         {
            this.ray[_loc6_] = new RayTrace(param1,param3,param5);
            this.ray[_loc6_].connect = true;
            this.ray[_loc6_].isOut = false;
            this.ray[_loc6_].rayLineStyle = new LineStyle(1,8421504,1,false,LineScaleMode.NONE);
            _loc6_++;
         }
      }
set frontLineStyle(param1){
         this.__frontLineStyle = param1;
         this.frontG.lineStyle = param1;
      }
SetParallelWave(param1, param2, param3, param4){
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = 0;
         let _loc10_ = 0;
         _loc5_ = param1 + param4 / 2 * Math.cos(param3 - Math.PI / 2);
         _loc6_ = param2 + param4 / 2 * Math.sin(param3 - Math.PI / 2);
         _loc7_ = param1 + param4 / 2 * Math.cos(param3 + Math.PI / 2);
         _loc8_ = param2 + param4 / 2 * Math.sin(param3 + Math.PI / 2);
         _loc9_ = this.numP - 1;
         _loc10_ = 0;
         while(_loc10_ < this.numP)
         {
            this.ray[_loc10_].p.x = ((_loc9_ - _loc10_) * _loc5_ + _loc10_ * _loc7_) / _loc9_;
            this.ray[_loc10_].p.y = ((_loc9_ - _loc10_) * _loc6_ + _loc10_ * _loc8_) / _loc9_;
            this.ray[_loc10_].p.dir = param3;
            this.ray[_loc10_].connect = true;
            this.ray[_loc10_].isOut = false;
            if(this.__defaultRayLineStyle != null)
            {
               this.ray[_loc10_].rayLineStyle = this.__defaultRayLineStyle;
            }
            _loc10_++;
         }
      }
set isShowFront(param1){
         this.__isShowFront = param1;
      }
set isShowRay(param1){
         let _loc2_ = 0;
         this.__isShowRay = param1;
         _loc2_ = 0;
         while(_loc2_ < this.numP)
         {
            this.ray[_loc2_].isShowRay = param1;
            _loc2_++;
         }
      }
ShowWaveFront(){
         let _loc1_ = 0;
         _loc1_ = 1;
         while(_loc1_ < this.numP)
         {
            if(this.ray[_loc1_ - 1].connect)
            {
               this.frontG.drawLine(this.ray[_loc1_ - 1].p.x,this.ray[_loc1_ - 1].p.y,this.ray[_loc1_].p.x,this.ray[_loc1_].p.y);
            }
            _loc1_++;
         }
      }
Angle(param1, param2, param3){
         let _loc4_ = NaN;
         _loc4_ = Math.abs(180 * (param1 - param2) / Math.PI);
         while(_loc4_ > param3 / 2)
         {
            _loc4_ = Math.abs(_loc4_ - param3);
         }
         return _loc4_;
      }
ShowHyugence(param1, param2){
         let _loc3_ = 0;
         _loc3_ = 0;
         while(_loc3_ < this.numP)
         {
            this.ray[_loc3_].ShowHyugence(param1,param2);
            _loc3_ += param2;
         }
      }
SetInside(){
         let _loc1_ = 0;
         _loc1_ = 0;
         while(_loc1_ < this.numP)
         {
            this.ray[_loc1_].connect = true;
            this.ray[_loc1_].isOut = false;
            _loc1_++;
         }
      }
ShowRayStatus(param1, param2, param3){
         let _loc4_ = null;
         let _loc5_ = 0;
         this.ShowWaveFront();
         _loc4_ = this.rayG.lineStyle;
         this.rayG.lineStyle = param2;
         _loc5_ = int(this.numP / 2);
         while(_loc5_ < this.numP)
         {
            this.ray[_loc5_].ShowRay(param1);
            _loc5_ += param3;
         }
         _loc5_ = int(this.numP / 2) - param3;
         while(_loc5_ >= 0)
         {
            this.ray[_loc5_].ShowRay(param1);
            _loc5_ -= param3;
         }
         this.rayG.lineStyle = _loc4_;
      }
CalcDirByFront(param1){
         if(param1 == 0)
         {
            return -Math.atan2(this.ray[param1 + 1].p.x - this.ray[param1].p.x,this.ray[param1 + 1].p.y - this.ray[param1].p.y);
         }
         if(param1 == this.numP - 1)
         {
            return -Math.atan2(this.ray[param1].p.x - this.ray[param1 - 1].p.x,this.ray[param1].p.y - this.ray[param1 - 1].p.y);
         }
         return -Math.atan2(this.ray[param1 + 1].p.x - this.ray[param1 - 1].p.x,this.ray[param1 + 1].p.y - this.ray[param1 - 1].p.y);
      }
SetCircularWave(param1, param2, param3, param4, param5){
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = 0;
         _loc6_ = param3 - param4 / 2;
         _loc7_ = param4 / (this.numP - 1);
         _loc9_ = 0;
         while(_loc9_ < this.numP)
         {
            _loc8_ = _loc6_ + _loc9_ * _loc7_;
            this.ray[_loc9_].p.x = param1 + param5 * Math.cos(_loc8_);
            this.ray[_loc9_].p.y = param2 + param5 * Math.sin(_loc8_);
            if(param4 > 0)
            {
               this.ray[_loc9_].p.dir = _loc8_;
            }
            else
            {
               this.ray[_loc9_].p.dir = _loc8_ - Math.PI;
            }
            this.ray[_loc9_].connect = true;
            this.ray[_loc9_].isOut = false;
            if(this.__defaultRayLineStyle != null)
            {
               this.ray[_loc9_].rayLineStyle = this.__defaultRayLineStyle;
            }
            _loc9_++;
         }
      }
get isShowRay(){
         return this.__isShowRay;
      }
crosssection(param1, param2){
         return this.ray[param1].p.findCrossSection(this.ray[param2].p);
      }
CalcDirByFrontAll(){
         let _loc1_ = 0;
         _loc1_ = 0;
         while(_loc1_ < this.numP)
         {
            this.ray[_loc1_].p.dir = this.CalcDirByFront(_loc1_);
            _loc1_++;
         }
      }
set defaultRayLineStyle(param1){
         let _loc2_ = 0;
         this.__defaultRayLineStyle = param1;
         _loc2_ = 0;
         while(_loc2_ < this.numP)
         {
            this.ray[_loc2_].rayLineStyle = param1;
            _loc2_++;
         }
      }
set huyLineStyle(param1){
         this.__huyLineStyle = param1;
         this.huyG.lineStyle = param1;
      }
set stepDist(param1){
         let _loc2_ = 0;
         this.__stepDist = param1;
         _loc2_ = 0;
         while(_loc2_ < this.numP)
         {
            this.ray[_loc2_].stepDist = param1;
            _loc2_++;
         }
      }
insideRayCount(){
         let _loc1_ = 0;
         _loc1_ = 0;
         this.i = 0;
         while(this.i < this.numP)
         {
            if(!this.ray[this.i].isOut)
            {
               _loc1_++;
            }
            ++this.i;
         }
         return _loc1_;
      }
MakeNew(param1){
         let _loc2_ = 0;
         let _loc3_ = undefined;
         let _loc4_ = NaN;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         _loc2_ = 0;
         while(_loc2_ < this.numP)
         {
            this.ray[_loc2_].MakeNew(param1);
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numP - 1)
         {
            _loc3_ = this.Angle(this.ray[_loc2_].p.dir,this.ray[_loc2_ + 1].p.dir,360);
            _loc4_ = -Math.atan2(this.ray[_loc2_ + 1].p.x - this.ray[_loc2_].p.x,this.ray[_loc2_ + 1].p.y - this.ray[_loc2_].p.y);
            _loc5_ = this.Angle(_loc4_,this.ray[_loc2_].p.dir,180);
            _loc6_ = this.Angle(_loc4_,this.ray[_loc2_ + 1].p.dir,180);
            _loc7_ = Number(this.ray[_loc2_].p.distance(this.ray[_loc2_ + 1].p));
            if(_loc3_ + _loc5_ + _loc7_ > 75 || _loc3_ > 15 || _loc5_ > 15 || _loc7_ > 15)
            {
               this.ray[_loc2_].connect = false;
            }
            else
            {
               this.ray[_loc2_].connect = true;
            }
            if(_loc5_ < 5 && _loc6_ < 5 && _loc7_ < 60)
            {
               this.ray[_loc2_].connect = true;
            }
            _loc2_++;
         }
         if(this.__isShowFront)
         {
            this.ShowWaveFront();
         }
      }
ShowHyuFre(param1, param2){
         let _loc3_ = 0;
         _loc3_ = 0;
         while(_loc3_ < this.numP)
         {
            this.ray[_loc3_].ShowHyuFre(param1,param2);
            _loc3_ += param2;
         }
      }
}
return {CoordTrans,EGraphics,FillStyle,Fresnel,IndexField,LineStyle,Point2D,Prototype,RayTrace,WaveFront};
}
