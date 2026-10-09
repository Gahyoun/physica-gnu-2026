import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, GradientType, Matrix, int, uint, trace } from './optics-batch50b-adapter.mjs';
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
__fillStyle = null;
isWhiteBG = true;
g = null;
screenCoord = null;
__lineStyle = null;
constructor(param1, param2){
         
         this.g = param1;
         this.screenCoord = param2;
         this.lineStyle = new LineStyle();
         this.fillStyle = new FillStyle();
      }
static WaveLengthColor(param1, param2 = 1){
         let _loc3_ = null;
         let _loc4_ = null;
         let _loc5_ = null;
         let _loc6_ = null;
         let _loc7_ = 0;
         let _loc8_ = NaN;
         let _loc9_ = 0;
         let _loc10_ = 0;
         let _loc11_ = 0;
         _loc3_ = new Array(380,440,490,510,580,645);
         _loc4_ = new Array(255,10,10,10,255,255);
         _loc5_ = new Array(10,10,255,255,255,10);
         _loc6_ = new Array(255,255,255,10,10,10);
         _loc7_ = int(0);
         if(param1 <= _loc3_[0])
         {
            _loc7_ = int(0);
            _loc8_ = 0;
         }
         else if(param1 <= _loc3_[1])
         {
            _loc7_ = int(0);
            _loc8_ = 1 * (param1 - _loc3_[0]) / (_loc3_[1] - _loc3_[0]);
         }
         else if(param1 <= _loc3_[2])
         {
            _loc7_ = int(1);
            _loc8_ = 1 * (param1 - _loc3_[1]) / (_loc3_[2] - _loc3_[1]);
         }
         else if(param1 <= _loc3_[3])
         {
            _loc7_ = int(2);
            _loc8_ = 1 * (param1 - _loc3_[2]) / (_loc3_[3] - _loc3_[2]);
         }
         else if(param1 <= _loc3_[4])
         {
            _loc7_ = int(3);
            _loc8_ = 1 * (param1 - _loc3_[3]) / (_loc3_[4] - _loc3_[3]);
         }
         else if(param1 <= _loc3_[5])
         {
            _loc7_ = int(4);
            _loc8_ = 1 * (param1 - _loc3_[4]) / (_loc3_[5] - _loc3_[4]);
         }
         else
         {
            _loc7_ = int(4);
            _loc8_ = 1;
         }
         _loc9_ = uint(Math.floor((_loc4_[_loc7_] * (1 - _loc8_) + _loc4_[_loc7_ + 1] * _loc8_) * param2));
         _loc10_ = uint(Math.floor((_loc5_[_loc7_] * (1 - _loc8_) + _loc5_[_loc7_ + 1] * _loc8_) * param2));
         _loc11_ = uint(Math.floor((_loc6_[_loc7_] * (1 - _loc8_) + _loc6_[_loc7_ + 1] * _loc8_) * param2));
         if(_loc9_ > 255)
         {
            _loc9_ = uint(255);
         }
         if(_loc10_ > 255)
         {
            _loc10_ = uint(255);
         }
         if(_loc11_ > 255)
         {
            _loc11_ = uint(255);
         }
         return (_loc9_ * 256 + _loc10_) * 256 + _loc11_;
      }
set lineStyle(param1){
         this.__lineStyle = param1;
         this.g.lineStyle(param1.thickness,param1.color,param1.alpha,param1.pixelHinting,param1.scaleMode,param1.caps);
      }
curveTo(param1, param2, param3, param4){
         this.g.curveTo(this.screenCoord.xo + this.screenCoord.scale * param1,this.screenCoord.yo - this.screenCoord.scale * param2,this.screenCoord.xo + this.screenCoord.scale * param3,this.screenCoord.yo - this.screenCoord.scale * param4);
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
            this.g.moveTo(this.screenCoord.xo + this.screenCoord.scale * param1[0],this.screenCoord.yo - this.screenCoord.scale * param2[0]);
            _loc4_ = int(1);
            while(_loc4_ < param1.length)
            {
               this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * param1[_loc4_],this.screenCoord.yo - this.screenCoord.scale * param2[_loc4_]);
               _loc4_++;
            }
         }
         else
         {
            this.g.beginFill(this.__fillStyle.color,this.__fillStyle.alpha);
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.moveTo(this.screenCoord.xo + this.screenCoord.scale * param1[0],this.screenCoord.yo - this.screenCoord.scale * param2[0]);
            _loc4_ = int(1);
            while(_loc4_ < param1.length)
            {
               this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * param1[_loc4_],this.screenCoord.yo - this.screenCoord.scale * param2[_loc4_]);
               _loc4_++;
            }
            this.g.endFill();
         }
      }
lineTo(param1, param2){
         this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * param1,this.screenCoord.yo - this.screenCoord.scale * param2);
      }
drawRect(param1, param2, param3, param4, param5 = false){
         if(!param5)
         {
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.drawRect(this.screenCoord.xo + this.screenCoord.scale * param1,this.screenCoord.yo - this.screenCoord.scale * (param2 + param4),this.screenCoord.scale * param3,this.screenCoord.scale * param4);
         }
         else
         {
            this.g.beginFill(this.__fillStyle.color,this.__fillStyle.alpha);
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.drawRect(this.screenCoord.xo + this.screenCoord.scale * param1,this.screenCoord.yo - this.screenCoord.scale * (param2 + param4),this.screenCoord.scale * param3,this.screenCoord.scale * param4);
            this.g.endFill();
         }
      }
drawLine(param1, param2, param3, param4, param5 = false, param6 = false){
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = NaN;
         let _loc10_ = NaN;
         let _loc11_ = NaN;
         let _loc12_ = NaN;
         _loc7_ = this.__lineStyle.thickness * 6;
         if(_loc7_ < 10)
         {
            _loc7_ = 10;
         }
         _loc8_ = Math.sqrt((param3 - param1) * (param3 - param1) + (param4 - param2) * (param4 - param2));
         _loc9_ = Math.atan2(param4 - param2,param3 - param1);
         _loc10_ = 25 / 180 * Math.PI;
         _loc11_ = Math.PI - _loc10_ / 2;
         _loc12_ = _loc7_ / Math.cos(_loc10_ / 2);
         if(param5)
         {
            this.g.lineStyle(0,0,0);
            this.g.beginFill(this.__lineStyle.color,this.__lineStyle.alpha);
            this.g.moveTo(this.screenCoord.xo + this.screenCoord.scale * param3,this.screenCoord.yo - this.screenCoord.scale * param4);
            this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * (param3 + _loc12_ * Math.cos(_loc9_ + _loc11_)),this.screenCoord.yo - this.screenCoord.scale * (param4 + _loc12_ * Math.sin(_loc9_ + _loc11_)));
            this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * (param3 - _loc12_ * 0.7 * Math.cos(_loc9_)),this.screenCoord.yo - this.screenCoord.scale * (param4 - _loc12_ * 0.7 * Math.sin(_loc9_)));
            this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * (param3 + _loc12_ * Math.cos(_loc9_ - _loc11_)),this.screenCoord.yo - this.screenCoord.scale * (param4 + _loc12_ * Math.sin(_loc9_ - _loc11_)));
            this.g.endFill();
            if(param6)
            {
               this.g.beginFill(this.__lineStyle.color,this.__lineStyle.alpha);
               this.g.moveTo(this.screenCoord.xo + this.screenCoord.scale * param1,this.screenCoord.yo - this.screenCoord.scale * param2);
               this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * (param1 - _loc12_ * Math.cos(_loc9_ + _loc11_)),this.screenCoord.yo - this.screenCoord.scale * (param2 - _loc12_ * Math.sin(_loc9_ + _loc11_)));
               this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * (param1 + _loc12_ * 0.7 * Math.cos(_loc9_)),this.screenCoord.yo - this.screenCoord.scale * (param2 + _loc12_ * 0.7 * Math.sin(_loc9_)));
               this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * (param1 - _loc12_ * Math.cos(_loc9_ - _loc11_)),this.screenCoord.yo - this.screenCoord.scale * (param2 - _loc12_ * Math.sin(_loc9_ - _loc11_)));
               this.g.endFill();
            }
            if(_loc8_ > _loc7_)
            {
               this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,false,LineScaleMode.NORMAL,CapsStyle.NONE);
               if(!param6)
               {
                  this.g.moveTo(this.screenCoord.xo + this.screenCoord.scale * param1,this.screenCoord.yo - this.screenCoord.scale * param2);
               }
               else
               {
                  this.g.moveTo(this.screenCoord.xo + this.screenCoord.scale * (param1 + _loc12_ * 0.7 * Math.cos(_loc9_)),this.screenCoord.yo - this.screenCoord.scale * (param2 + _loc12_ * 0.7 * Math.sin(_loc9_)));
               }
               this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * (param3 - _loc12_ * 0.7 * Math.cos(_loc9_)),this.screenCoord.yo - this.screenCoord.scale * (param4 - _loc12_ * 0.7 * Math.sin(_loc9_)));
            }
         }
         else
         {
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.moveTo(this.screenCoord.xo + this.screenCoord.scale * param1,this.screenCoord.yo - this.screenCoord.scale * param2);
            this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * param3,this.screenCoord.yo - this.screenCoord.scale * param4);
         }
         this.g.moveTo(this.screenCoord.xo,this.screenCoord.yo);
      }
drawLineExtend(param1, param2 = 1000, param3 = true){
         let _loc4_ = NaN;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         _loc4_ = param1.x;
         _loc5_ = param1.y;
         _loc6_ = param3 ? param1.dir : param1.dir + Math.PI;
         param1.transdir(param2,_loc6_);
         this.drawLine(_loc4_,_loc5_,param1.x,param1.y);
      }
get lineStyle(){
         return this.__lineStyle;
      }
set fillStyle(param1){
         this.__fillStyle = param1;
      }
moveTo(param1, param2){
         this.g.moveTo(this.screenCoord.xo + this.screenCoord.scale * param1,this.screenCoord.yo - this.screenCoord.scale * param2);
      }
arcTo(param1, param2, param3, param4, param5){
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = 0;
         let _loc10_ = NaN;
         let _loc11_ = NaN;
         let _loc12_ = NaN;
         _loc6_ = 8;
         _loc7_ = (param5 - param4) / _loc6_;
         _loc8_ = 1 / Math.cos(_loc7_ / 2);
         _loc9_ = int(0);
         while(_loc9_ < _loc6_)
         {
            _loc10_ = param4 + _loc7_ * _loc9_;
            _loc11_ = param4 + _loc7_ * (_loc9_ + 0.5);
            _loc12_ = param4 + _loc7_ * (_loc9_ + 1);
            if(_loc9_ == 0)
            {
               this.g.lineTo(this.screenCoord.xo + this.screenCoord.scale * (param1 + param3 * Math.cos(_loc10_)),this.screenCoord.yo - this.screenCoord.scale * (param2 + param3 * Math.sin(_loc10_)));
            }
            this.g.curveTo(this.screenCoord.xo + this.screenCoord.scale * (param1 + param3 * Math.cos(_loc11_) * _loc8_),this.screenCoord.yo - this.screenCoord.scale * (param2 + param3 * Math.sin(_loc11_) * _loc8_),this.screenCoord.xo + this.screenCoord.scale * (param1 + param3 * Math.cos(_loc12_)),this.screenCoord.yo - this.screenCoord.scale * (param2 + param3 * Math.sin(_loc12_)));
            _loc9_++;
         }
      }
get fillStyle(){
         return this.__fillStyle;
      }
drawCircle(param1, param2, param3, param4 = false){
         if(!param4)
         {
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.drawCircle(this.screenCoord.xo + this.screenCoord.scale * param1,this.screenCoord.yo - this.screenCoord.scale * param2,this.screenCoord.scale * param3);
         }
         else
         {
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.beginFill(this.__fillStyle.color,this.__fillStyle.alpha);
            this.g.drawCircle(this.screenCoord.xo + this.screenCoord.scale * param1,this.screenCoord.yo - this.screenCoord.scale * param2,this.screenCoord.scale * param3);
            this.g.endFill();
         }
      }
beginBoxGradientFill(param1, param2, param3){
         let _loc4_ = NaN;
         let _loc5_ = null;
         let _loc6_ = null;
         let _loc7_ = null;
         let _loc8_ = null;
         let _loc9_ = null;
         _loc4_ = this.screenCoord.scale * Math.max(param2,param3);
         _loc5_ = GradientType.LINEAR;
         _loc6_ = [16777215,8421631,16777215];
         if(!this.isWhiteBG)
         {
            _loc6_ = [5592422,102,5592422];
         }
         _loc7_ = [1,1,1];
         _loc8_ = [0,128,255];
         _loc9_ = new Matrix();
         _loc9_.createGradientBox(this.screenCoord.scale * param3,this.screenCoord.scale * param3,Math.PI / 2 - param1.dir,this.screenCoord.xo + this.screenCoord.scale * param1.x,this.screenCoord.yo - this.screenCoord.scale * (param1.y + param3 / 2) / Math.cos(param1.dir));
         this.g.beginGradientFill(_loc5_,_loc6_,_loc7_,_loc8_,_loc9_);
      }
endFill(){
         this.g.endFill();
      }
}
class FillStyle {
color = 0;
alpha = 0;
constructor(param1 = 8421504, param2 = 1){
         
         this.color = param1;
         this.alpha = param2;
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
         _loc1_ = int(0);
         while(_loc1_ < this.instrumentArray.length)
         {
            this.instrumentArray[_loc1_].draw(this.insG);
            _loc1_++;
         }
      }
AddInstrument(param1){
         this.instrumentArray.push(param1);
      }
n(param1, param2 = 0){
         return this.n2(param1.x,param1.y,param2);
      }
n2(param1, param2, param3){
         let _loc4_ = NaN;
         let _loc5_ = 0;
         _loc5_ = int(this.instrumentArray.length - 1);
         while(_loc5_ >= 0)
         {
            _loc4_ = Number(this.instrumentArray[_loc5_].n(param1,param2,param3));
            if(_loc4_ != 999)
            {
               return _loc4_;
            }
            _loc5_--;
         }
         return 1;
      }
contains(param1){
         return this.boundRect.contains(param1.x,param1.y);
      }
}
class LineStyle {
color = 0;
scaleMode = null;
caps = null;
thickness = 0;
pixelHinting = false;
alpha = 0;
constructor(param1 = 1, param2 = 8421504, param3 = 1, param4 = false, param5 = "normal", param6 = null){
         
         this.thickness = param1;
         this.color = param2;
         this.alpha = param3;
         this.pixelHinting = param4;
         this.scaleMode = param5;
         this.caps = param6;
      }
clone(){
         return new LineStyle(this.thickness,this.color,this.alpha,this.pixelHinting,this.scaleMode,this.caps);
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
Angle(param1, param2, param3){
         let _loc4_ = NaN;
         _loc4_ = Math.abs(180 * (param1 - param2) / Math.PI);
         while(_loc4_ > param3 / 2)
         {
            _loc4_ = Math.abs(_loc4_ - param3);
         }
         return _loc4_;
      }
transdir(param1, param2){
         this.translate(param1 * Math.cos(param2),param1 * Math.sin(param2));
      }
MakeDirTo(param1){
         this.dir = Math.atan2(param1.y - this.y,param1.x - this.x);
      }
abs(){
         let _loc1_ = NaN;
         return Math.sqrt(this.x * this.x + this.y * this.y);
      }
toString(){
         return "(" + this.x + ", " + this.y + ", " + this.dir + ")";
      }
translate(param1, param2){
         this.x += param1;
         this.y += param2;
      }
distance(param1){
         let _loc2_ = NaN;
         return Math.sqrt((param1.x - this.x) * (param1.x - this.x) + (param1.y - this.y) * (param1.y - this.y));
      }
rotate(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         _loc2_ = this.abs();
         _loc3_ = Math.atan2(this.y,this.x);
         this.x = _loc2_ * Math.cos(_loc3_ + param1);
         this.y = _loc2_ * Math.sin(_loc3_ + param1);
         this.dir += param1;
      }
movePt(param1){
         this.x = param1.x;
         this.y = param1.y;
         this.dir = param1.dir;
      }
clone(){
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
         if(this.Angle(_loc7_,Math.PI / 2,180) < 0.001 && this.Angle(_loc8_,Math.PI / 2,180) > 0.001)
         {
            _loc2_.x = _loc3_;
            _loc2_.y = _loc6_ + (_loc2_.x - _loc5_) * Math.tan(_loc8_);
         }
         else if(this.Angle(_loc8_,Math.PI / 2,180) < 0.001 && this.Angle(_loc7_,Math.PI / 2,180) > 0.001)
         {
            _loc2_.x = _loc5_;
            _loc2_.y = _loc4_ + (_loc2_.x - _loc3_) * Math.tan(_loc7_);
         }
         else if(this.Angle(_loc7_,_loc8_,180) > 0.001)
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
class Prism {
vertex1 = null;
p = null;
vertex2 = null;
material = 0;
rIndex = 0;
vertex3 = null;
constructor(param1, param2 = null, param3 = null, param4 = null, param5 = -1){
         
         this.rIndex = param1;
         if(param2 == null)
         {
            this.vertex1 = new Point2D(100,-100,0);
         }
         else
         {
            this.vertex1 = param2;
         }
         if(param3 == null)
         {
            this.vertex2 = new Point2D(0,100,0);
         }
         else
         {
            this.vertex2 = param3;
         }
         if(param4 == null)
         {
            this.vertex3 = new Point2D(-100,-100,0);
         }
         else
         {
            this.vertex3 = param4;
         }
         this.p = new Point2D(0,0,0);
         this.material = param5;
      }
makeIsosceles(){
         let _loc1_ = NaN;
         let _loc2_ = NaN;
         _loc1_ = this.vertex1.distance(this.vertex2);
         _loc2_ = this.vertex2.distance(this.vertex3);
         this.vertex3.x = (this.vertex3.x - this.vertex2.x) * _loc1_ / _loc2_ + this.vertex2.x;
         this.vertex3.y = (this.vertex3.y - this.vertex2.y) * _loc1_ / _loc2_ + this.vertex2.y;
      }
draw(param1){let rt1,rt2,rt3;
         let _loc2_ = null;
         let _loc3_ = null;
         let _loc4_ = null;
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
         rt1 = CoordTrans.rotTrans(this.vertex1.x,this.vertex1.y,this.p);
         param1.moveTo(rt1[0],rt1[1]);
         rt2 = CoordTrans.rotTrans(this.vertex2.x,this.vertex2.y,this.p);
         param1.lineTo(rt2[0],rt2[1]);
         rt3 = CoordTrans.rotTrans(this.vertex3.x,this.vertex3.y,this.p);
         param1.lineTo(rt3[0],rt3[1]);
         param1.lineTo(rt1[0],rt1[1]);
         param1.endFill();
      }
isInside(param1, param2){
         let _loc3_ = null;
         let _loc4_ = null;
         _loc3_ = CoordTrans.invRotTrans(param1,param2,this.p);
         _loc4_ = new Point2D(_loc3_[0],_loc3_[1],0);
         if(this.isLeft(this.vertex3,this.vertex1,this.vertex2))
         {
            if(!this.isLeft(_loc4_,this.vertex1,this.vertex2))
            {
               return false;
            }
            if(!this.isLeft(_loc4_,this.vertex2,this.vertex3))
            {
               return false;
            }
            if(!this.isLeft(_loc4_,this.vertex3,this.vertex1))
            {
               return false;
            }
         }
         else
         {
            if(this.isLeft(_loc4_,this.vertex1,this.vertex2))
            {
               return false;
            }
            if(this.isLeft(_loc4_,this.vertex2,this.vertex3))
            {
               return false;
            }
            if(this.isLeft(_loc4_,this.vertex3,this.vertex1))
            {
               return false;
            }
         }
         return true;
      }
makeEquilateral(){
         this.setApexAngle(Math.PI / 3);
         this.makeIsosceles();
      }
isLeft(param1, param2, param3){
         let _loc4_ = NaN;
         _loc4_ = (param3.x - param2.x) * (param1.y - param2.y) - (param3.y - param2.y) * (param1.x - param2.x);
         if(_loc4_ >= 0)
         {
            return true;
         }
         return false;
      }
positionCenter(param1 = false){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         let _loc4_ = NaN;
         let _loc5_ = NaN;
         _loc2_ = (this.vertex1.x + this.vertex2.x + this.vertex3.x) / 3;
         _loc3_ = (this.vertex1.y + this.vertex2.y + this.vertex3.y) / 3;
         this.vertex1.x -= _loc2_;
         this.vertex2.x -= _loc2_;
         this.vertex3.x -= _loc2_;
         this.vertex1.y -= _loc3_;
         this.vertex2.y -= _loc3_;
         this.vertex3.y -= _loc3_;
         if(param1)
         {
            _loc4_ = Math.atan2(this.vertex2.y,this.vertex2.x);
            _loc5_ = Math.PI / 2 - _loc4_;
            this.rotate(_loc5_);
         }
      }
setApexAngle(param1 = 1.5707963267948966){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         let _loc4_ = NaN;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         _loc2_ = Math.atan2(this.vertex1.y - this.vertex2.y,this.vertex1.x - this.vertex2.x);
         _loc3_ = Math.atan2(this.vertex3.y - this.vertex2.y,this.vertex3.x - this.vertex2.x);
         _loc4_ = (_loc2_ + _loc3_) / 2;
         _loc2_ = _loc4_ + param1 / 2;
         _loc3_ = _loc4_ - param1 / 2;
         _loc5_ = this.vertex2.distance(this.vertex1);
         _loc6_ = this.vertex2.distance(this.vertex3);
         this.vertex1.x = this.vertex2.x + _loc5_ * Math.cos(_loc2_);
         this.vertex1.y = this.vertex2.y + _loc5_ * Math.sin(_loc2_);
         this.vertex3.x = this.vertex2.x + _loc6_ * Math.cos(_loc3_);
         this.vertex3.y = this.vertex2.y + _loc6_ * Math.sin(_loc3_);
      }
rotate(param1){
         this.vertex1.rotate(param1);
         this.vertex2.rotate(param1);
         this.vertex3.rotate(param1);
      }
n(param1, param2, param3 = 0){
         if(this.isInside(param1,param2))
         {
            if(this.material == -1)
            {
               return this.rIndex;
            }
            return Rindex.getRindex(this.material,param3);
         }
         return 999;
      }
}
class Prototype {
huyCanvas = null;
wfCanvas = null;
numOfPoint = 0;
__background = null;
insEG = null;
timeHyugence = 0;
aniMode = 0;
animationTimer = null;
rayCanvas = null;
imagePosition = new Point2D(0,0,999);
wfEG = null;
huyEG = null;
instrumentCanvas = null;
statusExplanation = "";
indexField = null;
wf = null;
rayEG = null;
__wavefrontStep = 0;
currentTime = 0;
__aniDelay = 50;
screenCoord = null;
hyugenceMode = 0;
aniTimeLimit = 200;
wfAux = null;
constructor(param1, param2, param3, param4, param5 = 1){
         
         this.__background = new Sprite();
         this.__wavefrontStep = param2;
         this.screenCoord = new ScreenCoord(param3,param4,param5);
         this.instrumentCanvas = new Shape();
         this.insEG = new EGraphics(this.instrumentCanvas.graphics,this.screenCoord);
         this.rayCanvas = new Shape();
         this.rayEG = new EGraphics(this.rayCanvas.graphics,this.screenCoord);
         this.wfCanvas = new Shape();
         this.wfEG = new EGraphics(this.wfCanvas.graphics,this.screenCoord);
         this.huyCanvas = new Shape();
         this.huyEG = new EGraphics(this.huyCanvas.graphics,this.screenCoord);
         this.__background.addChild(this.instrumentCanvas);
         this.__background.addChild(this.huyCanvas);
         this.__background.addChild(this.rayCanvas);
         this.__background.addChild(this.wfCanvas);
         this.indexField = new IndexField(this.insEG,new Rectangle(-param3 - 200,-200 - param4,1000,400 + 2 * param4));
         this.numOfPoint = param1;
         this.wf = new WaveFront(this.indexField,this.numOfPoint,this.rayEG,this.wfEG,this.huyEG);
         this.wfAux = new WaveFront(this.indexField,3,this.rayEG,this.wfEG,this.huyEG);
         this.wfAux.isShowFront = false;
         this.wfAux.isShowRay = true;
         this.animationTimer = new Timer(this.__aniDelay,0);
         this.animationTimer.addEventListener(TimerEvent.TIMER,this.onTick);
      }
getScreenCoordinate(param1){
         return this.screenCoord.getScreenCoord(param1);
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
                  this.wf.ShowHyugence(this.timeHyugence / 20 * this.__wavefrontStep,1);
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
                  this.wf.ShowHyuFre(this.timeHyugence / 20 * this.__wavefrontStep,2);
               }
               else
               {
                  this.timeHyugence = 0;
                  this.procedeWave();
                  ++this.currentTime;
               }
         }
         _loc1_ = int(this.wf.insideRayCount());
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
stopAni(){
         this.animationTimer.reset();
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
set aniDelay(param1){
         this.__aniDelay = param1;
         if(this.animationTimer != null)
         {
            this.animationTimer.delay = param1;
         }
      }
procedeWave(){
         this.wf.MakeNew(this.__wavefrontStep);
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
         _loc1_ = int(Math.floor(this.numOfPoint / 2));
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
         _loc4_ = int(0);
         while(_loc4_ < this.currentTime)
         {
            this.wfAux.MakeNew(this.__wavefrontStep);
            _loc4_++;
         }
         if(_loc2_.dir != 666 && _loc3_.dir != 666 && _loc2_.distance(_loc3_) <= 20)
         {
            _loc5_ = Math.round((_loc2_.x + _loc3_.x) / 2 * 100) / 100;
            _loc6_ = Math.round((_loc2_.y + _loc3_.y) / 2 * 100) / 100;
            this.imagePosition.x = _loc5_;
            this.imagePosition.y = _loc6_;
            this.imagePosition.dir = 0;
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
               this.rayEG.lineStyle = new LineStyle(1,16711935,0.6);
               this.rayEG.fillStyle = new FillStyle(43520,0.4);
               this.rayEG.drawCircle(_loc5_,_loc6_,3,true);
            }
         }
         else if(_loc2_.dir == 666 && _loc3_.dir == 666)
         {
            this.statusExplanation = "무한대 결상";
            this.imagePosition.dir = 666;
         }
         else
         {
            this.statusExplanation = "상 형성?";
            this.imagePosition.dir = 999;
         }
      }
setWhiteBG(param1){
         this.insEG.isWhiteBG = param1;
      }
set wavefrontStep(param1){
         this.__wavefrontStep = param1;
      }
clearWaveFront(){
         this.rayCanvas.graphics.clear();
         this.wfCanvas.graphics.clear();
         this.huyCanvas.graphics.clear();
         this.currentTime = 0;
         this.timeHyugence = 0;
      }
}
class RayTrace {
isLineContinue = false;
stepDist = 3;
isLineComplete = false;
countReflection = 0;
lineStartPosition = null;
countRefraction = 0;
huyG = null;
waveLength = 0;
isOut = false;
pBackup = null;
indexField = null;
rayG = null;
isShowRay = true;
distReal = 0;
connect = false;
p = null;
__rayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
constructor(param1, param2, param3, param4 = 500){
         
         this.indexField = param1;
         this.rayG = param2;
         this.huyG = param3;
         this.p = new Point2D(0,0,0);
         this.connect = false;
         this.waveLength = param4;
      }
CalcNextPointBy2Beam(param1){
         this.p.movePt(this.NextBy2Beam(this.p,param1));
      }
get rayLineStyle(){
         return this.__rayLineStyle;
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
         _loc4_ = int(Math.ceil(param2 / _loc3_));
         _loc3_ = param2 / _loc4_;
         _loc5_ = param1.dir;
         _loc6_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc7_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc7_.transdir(0.05,_loc5_ + Math.PI / 2);
         _loc8_ = Number(this.indexField.n(_loc6_,this.waveLength));
         _loc9_ = Number(this.indexField.n(_loc7_,this.waveLength));
         _loc12_ = false;
         _loc13_ = int(0);
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
            _loc8_ = Number(this.indexField.n(_loc6_,this.waveLength));
            _loc11_ = _loc13_;
            if(_loc8_ < 100)
            {
               _loc12_ = true;
               break;
            }
            _loc9_ = Number(this.indexField.n(_loc7_,this.waveLength));
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
set rayLineStyle(param1){
         this.__rayLineStyle = param1;
         this.rayG.lineStyle = param1;
      }
Init(){
         this.pBackup = this.p.clone();
         this.countReflection = 0;
         this.countRefraction = 0;
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
            _loc2_ = int(int(param1 / this.stepDist + 1));
            _loc3_ = param1 / _loc2_;
            _loc4_ = int(0);
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
         if(this.p.dir > Math.PI)
         {
            this.p.dir -= 2 * Math.PI;
         }
         else if(this.p.dir < -Math.PI)
         {
            this.p.dir += 2 * Math.PI;
         }
      }
FindCrossSectionWithBackup(param1 = true){
         let _loc2_ = null;
         _loc2_ = this.pBackup.findCrossSection(this.p);
         if(param1 && _loc2_.dir == 1)
         {
            this.huyG.drawLine(this.pBackup.x,this.pBackup.y,_loc2_.x,_loc2_.y);
            this.huyG.drawLine(_loc2_.x,_loc2_.y,this.p.x,this.p.y);
            this.huyG.drawCircle(_loc2_.x,_loc2_.y,1,true);
         }
         return _loc2_;
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
         _loc8_ = int(0);
         while(_loc8_ < 20)
         {
            _loc5_.x = (_loc3_.x + _loc4_.x) / 2;
            _loc5_.y = (_loc3_.y + _loc4_.y) / 2;
            _loc6_ = Number(this.indexField.n(_loc5_,this.waveLength));
            _loc7_ = Number(this.indexField.n(_loc3_,this.waveLength));
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
         _loc2_ = int(int(param1 / 4));
         if(_loc2_ < 1)
         {
            _loc2_ = int(1);
         }
         _loc3_ = new Point2D(0,0,0);
         _loc4_ = new Point2D(0,0,0);
         _loc5_ = 0;
         _loc6_ = 0;
         _loc3_.movePt(this.p);
         if(this.indexField.contains(_loc3_))
         {
            _loc7_ = int(0);
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
         _loc15_ = int(0);
         while(_loc15_ < 20)
         {
            _loc7_ = (_loc3_ + _loc4_) / 2;
            _loc5_.movePt(param1);
            _loc5_.transdir(0.1,_loc3_);
            _loc6_.movePt(param1);
            _loc6_.transdir(0.1,_loc7_);
            if(Math.min(this.indexField.n(_loc5_,this.waveLength),100) == Math.min(this.indexField.n(_loc6_,this.waveLength),100))
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
         _loc15_ = int(0);
         while(_loc15_ < 20)
         {
            _loc7_ = (_loc3_ + _loc4_) / 2;
            _loc5_.movePt(param1);
            _loc5_.transdir(0.1,_loc3_);
            _loc6_.movePt(param1);
            _loc6_.transdir(0.1,_loc7_);
            if(Math.min(this.indexField.n(_loc5_,this.waveLength),100) == Math.min(this.indexField.n(_loc6_,this.waveLength),100))
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
         _loc3_ = Number(this.indexField.n(param1,this.waveLength));
         _loc4_ = param1.dir;
         _loc5_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc6_ = new Point2D(param1.x,param1.y,param1.dir);
         if(_loc3_ <= 0)
         {
            _loc6_.movePt(new Point2D(-2000,-2000,3.14));
            this.isOut = true;
            return _loc6_;
         }
         _loc7_ = _loc3_;
         if(_loc7_ >= 100)
         {
            _loc7_ -= 100;
         }
         _loc6_.transdir(param2 / _loc7_,_loc4_);
         _loc8_ = Number(this.indexField.n(_loc6_,this.waveLength));
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
            _loc8_ = Number(this.indexField.n(_loc6_,this.waveLength));
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
               _loc6_.movePt(new Point2D(-2000,-2000,3.14));
               this.isOut = true;
               return _loc6_;
            }
            if(Math.abs(_loc14_) >= 1 || _loc9_ == 0)
            {
               ++this.countReflection;
               _loc4_ = _loc11_ + Math.PI - _loc12_;
               _loc5_.transdir((param2 - _loc10_) / _loc3_,_loc4_);
               _loc5_.dir = _loc4_;
               if(this.isShowRay)
               {
                  this.rayG.drawLine(_loc6_.x,_loc6_.y,_loc5_.x,_loc5_.y);
               }
               return _loc5_;
            }
            ++this.countRefraction;
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
ShowHyugence(param1, param2){
         let _loc3_ = NaN;
         if(this.isOut)
         {
            return;
         }
         _loc3_ = param1 / this.indexField.n(this.p,this.waveLength);
         this.huyG.drawCircle(this.p.x,this.p.y,_loc3_);
      }
DrawRayExtendLine(param1 = -1, param2 = -1, param3 = true){
         let _loc4_ = NaN;
         let _loc5_ = null;
         if(param1 != -1 && param1 != this.countReflection)
         {
            return;
         }
         if(param2 != -1 && param2 != this.countRefraction)
         {
            return;
         }
         _loc4_ = Math.max(this.indexField.boundRect.width,this.indexField.boundRect.height) + 200;
         _loc5_ = this.huyG.lineStyle;
         this.huyG.lineStyle = new LineStyle(1,8421504,1,false,LineScaleMode.NONE);
         this.huyG.drawLineExtend(this.p,_loc4_,param3);
         this.huyG.lineStyle = _loc5_;
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
         _loc5_ = int(Math.ceil(param2 / _loc4_));
         _loc4_ = param2 / _loc5_;
         _loc6_ = param1.dir;
         _loc7_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc8_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc9_ = new Point2D(param1.x,param1.y,param1.dir);
         _loc8_.transdir(0.05,_loc6_ + Math.PI / 2);
         _loc9_.transdir(-0.05,_loc6_ + Math.PI / 2);
         _loc10_ = Number(this.indexField.n(_loc7_,this.waveLength));
         _loc11_ = Number(this.indexField.n(_loc8_,this.waveLength));
         _loc12_ = Number(this.indexField.n(_loc9_,this.waveLength));
         _loc13_ = int(0);
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
            _loc10_ = Number(this.indexField.n(_loc7_,this.waveLength));
            _loc11_ = Number(this.indexField.n(_loc8_,this.waveLength));
            _loc12_ = Number(this.indexField.n(_loc9_,this.waveLength));
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
         _loc9_ = int(0);
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
class Rindex {
static data = new Array();
static Cline = 656.2816;
static Fline = 486.1327;
static Dline = 587.5618;
static {Rindex.data[0] = ["Artificial","Artificial #1",300,800,-1,1.55,0.3];
Rindex.data[1] = ["Artificial","Artificial #2",300,800,-1,1.7,0.15];
Rindex.data[2] = ["Glass","Fused Silica",210,3710,1,0.6961663,0.0684043,0.4079426,0.1162414,0.8974794,9.896161,0,0];
Rindex.data[3] = ["Glass","Fused Germania",360,4300,1,0.80686642,0.06897261,0.71815848,0.1539661,0.85416831,11.841931,0,0];
Rindex.data[4] = ["Glass","BK7",300,2500,0,1.03961212,0.00600069867,0.231792344,0.0200179144,1.01046945,103.560653,0,0];
Rindex.data[5] = ["Glass","LaSF9",370,2500,0,2.00029547,0.0121426017,0.298926886,0.0538736236,1.80691843,156.530829,0,0];
Rindex.data[6] = ["Glass","LaF33",330,2500,0,1.79653417,0.00927313493,0.311577903,0.0358201181,1.15981863,87.3448712,0,0];
Rindex.data[7] = ["Glass","SF57",370,2500,0,1.87543831,0.0141749518,0.37375749,0.0640509927,2.30001797,177.389795,0,0];
Rindex.data[8] = ["Glass","PK51",290,2500,0,1.15610775,0.00585597402,0.153229344,0.0194072416,0.785618966,140.537046,0,0];
Rindex.data[9] = ["Glass","PSK3",300,2500,0,0.88727211,0.00469824067,0.489592425,0.0161818463,1.04865296,104.374975,0,0];
Rindex.data[10] = ["Glass","BaK1",300,2500,0,1.12365662,0.00644742752,0.309276848,0.0222284402,0.881511957,107.297751,0,0];
Rindex.data[11] = ["Glass","LaK7",310,2500,0,1.23679889,0.00610105538,0.445051837,0.0201388334,1.01745888,90.638038,0,0];
Rindex.data[12] = ["Glass","BaSF64",365,2500,0,1.65554268,0.0104485644,0.17131977,0.0499394756,1.33664448,118.961472,0,0];
Rindex.data[13] = ["Crystal","Diamond",225,100000,1,4.3356,0.106,0.3306,0.175,0,0,0,0];
Rindex.data[14] = ["Crystal","Sapphire (o-ray)",200,5500,1,1.4313493,0.0726631,0.65054713,0.1193242,5.3414021,18.028251,0,0];
Rindex.data[15] = ["Crystal","Sapphire (e-ray)",200,5500,1,1.5039759,0.0740288,0.55069141,0.1216529,6.5927379,20.072248,0,0];
Rindex.data[16] = ["Crystal","Calcite (o-ray)",200,5500,1,0.8559,0.0588,0.8391,0.141,0.0009,0.197,0.6845,7.005];
Rindex.data[17] = ["Crystal","Calcite (e-ray)",200,3300,1,1.0856,0.07897,0.0988,0.142,0.317,11.468,0,0];
Rindex.data[18] = ["Liquid","Water (20°C)",182,1129,0,0.5684027565,0.005101829712,0.1726177391,0.01821153936,0.02086189578,0.02620722293,0.1130748688,10.69792721];
Rindex.data[19] = ["Plastic","Polyacrylate",435.8,1052,2,2.36483,-0.06955268,-0.1356107,0.060539,-0.0116664,0.0008542615];
Rindex.data[20] = ["Plastic","Zeonex E48R",435.8,1052,2,2.482396,-0.0695991,-0.1597726,0.07383333,-0.01398485,0.0009728455];}
constructor(){
         
      }
static getAbbe(param1){
         let _loc2_ = NaN;
         return (Rindex.getRindex(param1,Rindex.Dline) - 1) / (Rindex.getRindex(param1,Rindex.Fline) - Rindex.getRindex(param1,Rindex.Cline));
      }
static n1(param1, param2, param3, param4, param5, param6, param7, param8, param9){
         let _loc10_ = NaN;
         _loc10_ = param1 * param1;
         return Math.sqrt(1 + param2 * _loc10_ / (_loc10_ - param3 * param3) + param4 * _loc10_ / (_loc10_ - param5 * param5) + param6 * _loc10_ / (_loc10_ - param7 * param7) + param8 * _loc10_ / (_loc10_ - param9 * param9));
      }
static n2(param1, param2, param3, param4, param5, param6, param7){
         let _loc8_ = NaN;
         let _loc9_ = NaN;
         let _loc10_ = NaN;
         let _loc11_ = NaN;
         let _loc12_ = NaN;
         _loc8_ = param1 * param1;
         _loc9_ = 1 / _loc8_;
         _loc10_ = _loc9_ * _loc9_;
         _loc11_ = _loc9_ * _loc10_;
         _loc12_ = _loc9_ * _loc11_;
         return Math.sqrt(param2 + param3 * _loc8_ + param4 * _loc9_ + param5 * _loc10_ + param6 * _loc11_ + param7 * _loc12_);
      }
static n0(param1, param2, param3, param4, param5, param6, param7, param8, param9){
         let _loc10_ = NaN;
         _loc10_ = param1 * param1;
         return Math.sqrt(1 + param2 * _loc10_ / (_loc10_ - param3) + param4 * _loc10_ / (_loc10_ - param5) + param6 * _loc10_ / (_loc10_ - param7) + param8 * _loc10_ / (_loc10_ - param9));
      }
static n_(param1, param2, param3){
         return param2 + param3 * (700 - param1) / 300;
      }
static getRindex(param1, param2){
         let _loc3_ = NaN;
         if(param1 >= Rindex.data.length)
         {
            return -1;
         }
         if(param2 < Rindex.data[param1][2])
         {
            return -1;
         }
         if(param2 > Rindex.data[param1][3])
         {
            return -1;
         }
         _loc3_ = param2 * 0.001;
         switch(Rindex.data[param1][4])
         {
            case -1:
               return Rindex.n_(param2,Rindex.data[param1][5],Rindex.data[param1][6]);
            case 0:
               return Rindex.n0(_loc3_,Rindex.data[param1][5],Rindex.data[param1][6],Rindex.data[param1][7],Rindex.data[param1][8],Rindex.data[param1][9],Rindex.data[param1][10],Rindex.data[param1][11],Rindex.data[param1][12]);
            case 1:
               return Rindex.n1(_loc3_,Rindex.data[param1][5],Rindex.data[param1][6],Rindex.data[param1][7],Rindex.data[param1][8],Rindex.data[param1][9],Rindex.data[param1][10],Rindex.data[param1][11],Rindex.data[param1][12]);
            case 2:
               return Rindex.n2(_loc3_,Rindex.data[param1][5],Rindex.data[param1][6],Rindex.data[param1][7],Rindex.data[param1][8],Rindex.data[param1][9],Rindex.data[param1][10]);
            default:
               return 1;
         }
      }
static get2Focus(param1, param2, param3){
         let _loc4_ = null;
         _loc4_ = new Array(2);
         _loc4_[0] = param3 * (Rindex.getAbbe(param1) - Rindex.getAbbe(param2)) / Rindex.getAbbe(param1);
         _loc4_[1] = -param3 * (Rindex.getAbbe(param1) - Rindex.getAbbe(param2)) / Rindex.getAbbe(param2);
         return _loc4_;
      }
}
class ScreenCoord {
yo = 0;
xo = 0;
scale = 1;
constructor(param1 = 0, param2 = 0, param3 = 1){
         
         this.xo = param1;
         this.yo = param2;
         this.scale = param3;
      }
getPhysicalCoord(param1){
         return new Point2D((param1.x - this.xo) / this.scale,(this.yo - param1.y) / this.scale);
      }
getScreenCoord(param1){
         return new Point2D(this.xo + this.scale * param1.x,this.yo - this.scale * param1.y);
      }
}
class WaveFront {
__isShowRay = true;
numP = 0;
__defaultRayLineStyle = null;
__waveLength = 500;
__frontFillStyle = null;
__huyFillStyle = null;
ray = null;
huyG = null;
frontG = null;
__isShowFront = true;
indexField = null;
__huyLineStyle = null;
__frontLineStyle = null;
rayG = null;
__stepDist = 0;
constructor(param1, param2, param3, param4, param5){
         let _loc6_ = 0;
         
         this.numP = param2;
         this.ray = new Array(this.numP);
         this.rayG = param3;
         this.frontG = param4;
         this.huyG = param5;
         this.indexField = param1;
         _loc6_ = int(0);
         while(_loc6_ < this.numP)
         {
            this.ray[_loc6_] = new RayTrace(param1,param3,param5);
            _loc6_++;
         }
         this.huyLineStyle = new LineStyle(1,8421504,1,false,LineScaleMode.NONE);
         this.frontLineStyle = new LineStyle(3,26112,1);
         this.huyFillStyle = new FillStyle();
         this.frontFillStyle = new FillStyle();
         this.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
         this.InitRay();
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
         _loc9_ = int(this.numP - 1);
         _loc10_ = int(0);
         while(_loc10_ < this.numP)
         {
            this.ray[_loc10_].p.x = ((_loc9_ - _loc10_) * _loc5_ + _loc10_ * _loc7_) / _loc9_;
            this.ray[_loc10_].p.y = ((_loc9_ - _loc10_) * _loc6_ + _loc10_ * _loc8_) / _loc9_;
            this.ray[_loc10_].p.dir = param3;
            if(this.__defaultRayLineStyle != null)
            {
               this.ray[_loc10_].rayLineStyle = this.__defaultRayLineStyle;
            }
            _loc10_++;
         }
         this.InitRay();
      }
SetColorParallelWave(param1, param2, param3, param4){
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = 0;
         let _loc10_ = 0;
         let _loc11_ = 0;
         let _loc12_ = 0;
         let _loc13_ = null;
         _loc5_ = param1 + param4 / 2 * Math.cos(param3 - Math.PI / 2);
         _loc6_ = param2 + param4 / 2 * Math.sin(param3 - Math.PI / 2);
         _loc7_ = param1 + param4 / 2 * Math.cos(param3 + Math.PI / 2);
         _loc8_ = param2 + param4 / 2 * Math.sin(param3 + Math.PI / 2);
         _loc9_ = int(this.numP / 4 - 1);
         _loc10_ = int(0);
         while(_loc10_ < this.numP)
         {
            _loc11_ = int(Math.floor(_loc10_ / 4));
            _loc12_ = int(_loc10_ - _loc11_ * 4);
            this.ray[_loc10_].p.x = ((_loc9_ - _loc11_) * _loc5_ + _loc11_ * _loc7_) / _loc9_;
            this.ray[_loc10_].p.y = ((_loc9_ - _loc11_) * _loc6_ + _loc11_ * _loc8_) / _loc9_;
            this.ray[_loc10_].p.dir = param3;
            this.ray[_loc10_].waveLength = 400 + _loc12_ * 100;
            _loc13_ = this.__defaultRayLineStyle.clone();
            _loc13_.color = EGraphics.WaveLengthColor(this.ray[_loc10_].waveLength,0.9);
            _loc13_.alpha = 0.8;
            this.ray[_loc10_].rayLineStyle = _loc13_;
            _loc10_++;
         }
         this.InitRay();
         _loc10_ = int(0);
         while(_loc10_ < this.numP)
         {
            this.ray[_loc10_].connect = false;
            _loc10_++;
         }
      }
set huyFillStyle(param1){
         this.__huyFillStyle = param1;
         this.huyG.fillStyle = param1;
      }
set frontFillStyle(param1){
         this.__frontFillStyle = param1;
         this.frontG.fillStyle = param1;
      }
ShowWaveFront(){
         let _loc1_ = 0;
         _loc1_ = int(1);
         while(_loc1_ < this.numP)
         {
            if(this.ray[_loc1_ - 1].connect)
            {
               this.frontG.drawLine(this.ray[_loc1_ - 1].p.x,this.ray[_loc1_ - 1].p.y,this.ray[_loc1_].p.x,this.ray[_loc1_].p.y);
            }
            _loc1_++;
         }
      }
SetColorCircularWave(param1, param2, param3, param4, param5){
         let _loc6_ = 0;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = NaN;
         let _loc10_ = 0;
         let _loc11_ = 0;
         let _loc12_ = 0;
         let _loc13_ = null;
         _loc6_ = int(this.numP / 4 - 1);
         _loc7_ = param3 - param4 / 2;
         _loc8_ = param4 / (_loc6_ - 1);
         _loc10_ = int(0);
         while(_loc10_ < this.numP)
         {
            _loc11_ = int(Math.floor(_loc10_ / 4));
            _loc12_ = int(_loc10_ - _loc11_ * 4);
            _loc9_ = _loc7_ + _loc11_ * _loc8_;
            this.ray[_loc10_].p.x = param1 + param5 * Math.cos(_loc9_);
            this.ray[_loc10_].p.y = param2 + param5 * Math.sin(_loc9_);
            if(param4 > 0)
            {
               this.ray[_loc10_].p.dir = _loc9_;
            }
            else
            {
               this.ray[_loc10_].p.dir = _loc9_ - Math.PI;
            }
            this.ray[_loc10_].waveLength = 400 + _loc12_ * 100;
            _loc13_ = this.__defaultRayLineStyle.clone();
            _loc13_.color = EGraphics.WaveLengthColor(this.ray[_loc10_].waveLength,0.9);
            _loc13_.alpha = 0.8;
            this.ray[_loc10_].rayLineStyle = _loc13_;
            _loc10_++;
         }
         this.InitRay();
         _loc10_ = int(0);
         while(_loc10_ < this.numP)
         {
            this.ray[_loc10_].connect = false;
            _loc10_++;
         }
      }
SetCircularWave(param1, param2, param3, param4, param5){
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = 0;
         _loc6_ = param3 - param4 / 2;
         _loc7_ = param4 / (this.numP - 1);
         _loc9_ = int(0);
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
            if(this.__defaultRayLineStyle != null)
            {
               this.ray[_loc9_].rayLineStyle = this.__defaultRayLineStyle;
            }
            _loc9_++;
         }
         this.InitRay();
      }
insideRayCount(){
         let _loc1_ = 0;
         _loc1_ = int(0);
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
set stepDist(param1){
         let _loc2_ = 0;
         this.__stepDist = param1;
         _loc2_ = int(0);
         while(_loc2_ < this.numP)
         {
            this.ray[_loc2_].stepDist = param1;
            _loc2_++;
         }
      }
ShowRayStatus(param1, param2, param3){
         let _loc4_ = null;
         let _loc5_ = 0;
         this.ShowWaveFront();
         _loc4_ = this.rayG.lineStyle;
         this.rayG.lineStyle = param2;
         _loc5_ = int(int(this.numP / 2));
         while(_loc5_ < this.numP)
         {
            this.ray[_loc5_].ShowRay(param1);
            _loc5_ += param3;
         }
         _loc5_ = int(int(this.numP / 2) - param3);
         while(_loc5_ >= 0)
         {
            this.ray[_loc5_].ShowRay(param1);
            _loc5_ -= param3;
         }
         this.rayG.lineStyle = _loc4_;
      }
CalcDirByFrontAll(){
         let _loc1_ = 0;
         _loc1_ = int(0);
         while(_loc1_ < this.numP)
         {
            this.ray[_loc1_].p.dir = this.CalcDirByFront(_loc1_);
            _loc1_++;
         }
      }
crosssection(param1, param2){
         return this.ray[param1].p.findCrossSection(this.ray[param2].p);
      }
MakeNew(param1){
         let _loc2_ = 0;
         let _loc3_ = undefined;
         let _loc4_ = NaN;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         _loc2_ = int(0);
         while(_loc2_ < this.numP)
         {
            this.ray[_loc2_].MakeNew(param1);
            _loc2_++;
         }
         _loc2_ = int(0);
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
RayTest(param1, param2 = -1, param3 = -1, param4 = 500){
         let _loc5_ = null;
         let _loc6_ = null;
         let _loc7_ = undefined;
         let _loc8_ = undefined;
         let _loc9_ = null;
         _loc5_ = param1.clone();
         _loc6_ = param1.clone();
         _loc5_.transdir(1,param1.dir + Math.PI / 2);
         _loc6_.transdir(1,param1.dir - Math.PI / 2);
         _loc7_ = new RayTrace(this.indexField,this.rayG,this.huyG);
         _loc7_.p = _loc5_;
         _loc7_.waveLength = param4;
         _loc8_ = new RayTrace(this.indexField,this.rayG,this.huyG);
         _loc8_.p = _loc6_;
         _loc8_.waveLength = param4;
         _loc7_.isShowRay = false;
         _loc8_.isShowRay = false;
         do
         {
            _loc7_.MakeNew(2);
            _loc8_.MakeNew(2);
            if(Boolean(_loc7_.isOut) && Boolean(_loc8_.isOut))
            {
               break;
            }
            if(param2 != -1 && _loc7_.countRefraction >= param2 && _loc7_.countRefraction >= param2)
            {
               break;
            }
         }
         while(!(param3 != -1 && _loc7_.countReflection >= param3 && _loc7_.countReflection >= param3));
         return _loc7_.p.findCrossSection(_loc8_.p);
      }
SetCDFParallelWave(param1, param2, param3, param4){
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         let _loc7_ = NaN;
         let _loc8_ = NaN;
         let _loc9_ = 0;
         let _loc10_ = 0;
         let _loc11_ = 0;
         let _loc12_ = 0;
         let _loc13_ = null;
         _loc5_ = param1 + param4 / 2 * Math.cos(param3 - Math.PI / 2);
         _loc6_ = param2 + param4 / 2 * Math.sin(param3 - Math.PI / 2);
         _loc7_ = param1 + param4 / 2 * Math.cos(param3 + Math.PI / 2);
         _loc8_ = param2 + param4 / 2 * Math.sin(param3 + Math.PI / 2);
         _loc9_ = int(this.numP / 3 - 1);
         _loc10_ = int(0);
         while(_loc10_ < this.numP)
         {
            _loc11_ = int(Math.floor(_loc10_ / 3));
            _loc12_ = int(_loc10_ - _loc11_ * 3);
            this.ray[_loc10_].p.x = ((_loc9_ - _loc11_) * _loc5_ + _loc11_ * _loc7_) / _loc9_;
            this.ray[_loc10_].p.y = ((_loc9_ - _loc11_) * _loc6_ + _loc11_ * _loc8_) / _loc9_;
            this.ray[_loc10_].p.dir = param3;
            switch(_loc12_)
            {
               case 0:
                  this.ray[_loc10_].waveLength = Rindex.Cline;
                  break;
               case 1:
                  this.ray[_loc10_].waveLength = Rindex.Fline;
                  break;
               case 2:
                  this.ray[_loc10_].waveLength = Rindex.Dline;
            }
            _loc13_ = this.__defaultRayLineStyle.clone();
            _loc13_.color = EGraphics.WaveLengthColor(this.ray[_loc10_].waveLength,0.8);
            _loc13_.alpha = 0.8;
            this.ray[_loc10_].rayLineStyle = _loc13_;
            _loc10_++;
         }
         this.InitRay();
         _loc10_ = int(0);
         while(_loc10_ < this.numP)
         {
            this.ray[_loc10_].connect = false;
            _loc10_++;
         }
      }
set isShowFront(param1){
         this.__isShowFront = param1;
      }
set isShowRay(param1){
         let _loc2_ = 0;
         this.__isShowRay = param1;
         _loc2_ = int(0);
         while(_loc2_ < this.numP)
         {
            this.ray[_loc2_].isShowRay = param1;
            _loc2_++;
         }
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
FindCrossSectionWithBackup(param1 = true, param2 = true, param3 = 500, param4 = 2){
         let _loc5_ = null;
         let _loc6_ = null;
         let _loc7_ = 0;
         let _loc8_ = 0;
         let _loc9_ = null;
         let _loc10_ = null;
         let _loc11_ = null;
         _loc7_ = int(0);
         while(_loc7_ < this.numP)
         {
            _loc5_ = this.ray[_loc7_].FindCrossSectionWithBackup(param1);
            if(_loc5_.dir == 1 && this.ray[_loc7_].countRefraction == param4 && this.ray[_loc7_].countReflection == 0)
            {
               if(_loc6_ != null && param2)
               {
                  this.frontG.drawLine(_loc5_.x,_loc5_.y,_loc6_.x,_loc6_.y);
               }
               _loc6_ = _loc5_.clone();
            }
            _loc7_++;
         }
         _loc8_ = int(Math.floor(this.numP / 2));
         _loc5_ = this.ray[_loc8_ - 1].FindCrossSectionWithBackup(param1);
         _loc6_ = this.ray[_loc8_ + 1].FindCrossSectionWithBackup(param1);
         if(_loc5_.dir == 1 && _loc6_.dir == 1)
         {
            _loc6_.MakeDirTo(_loc5_);
            _loc9_ = _loc6_.clone();
            _loc10_ = _loc6_.clone();
            _loc9_.transdir(-param3,_loc6_.dir);
            _loc10_.transdir(param3,_loc6_.dir);
            if(param2)
            {
               _loc11_ = this.frontG.lineStyle;
               this.frontG.lineStyle = new LineStyle(1,3355647,1);
               this.frontG.drawLine(_loc9_.x,_loc9_.y,_loc10_.x,_loc10_.y);
               this.frontG.lineStyle = _loc11_;
            }
            return _loc6_;
         }
         return null;
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
InitRay(){
         let _loc1_ = 0;
         this.SetInside();
         _loc1_ = int(0);
         while(_loc1_ < this.numP)
         {
            this.ray[_loc1_].Init();
            _loc1_++;
         }
      }
SetInside(){
         let _loc1_ = 0;
         _loc1_ = int(0);
         while(_loc1_ < this.numP)
         {
            this.ray[_loc1_].connect = true;
            this.ray[_loc1_].isOut = false;
            _loc1_++;
         }
      }
set huyLineStyle(param1){
         this.__huyLineStyle = param1;
         this.huyG.lineStyle = param1;
      }
get isShowRay(){
         return this.__isShowRay;
      }
set frontLineStyle(param1){
         this.__frontLineStyle = param1;
         this.frontG.lineStyle = param1;
      }
ShowHyugence(param1, param2){
         let _loc3_ = 0;
         _loc3_ = int(0);
         while(_loc3_ < this.numP)
         {
            this.ray[_loc3_].ShowHyugence(param1,param2);
            _loc3_ += param2;
         }
      }
set defaultRayLineStyle(param1){
         let _loc2_ = 0;
         this.__defaultRayLineStyle = param1;
         _loc2_ = int(0);
         while(_loc2_ < this.numP)
         {
            this.ray[_loc2_].rayLineStyle = param1;
            _loc2_++;
         }
      }
DrawRayExtendLine(param1 = -1, param2 = -1, param3 = true){
         this.i = 0;
         while(this.i < this.numP)
         {
            this.ray[this.i].DrawRayExtendLine(param1,param2,param3);
            ++this.i;
         }
      }
ShowHyuFre(param1, param2){
         let _loc3_ = 0;
         _loc3_ = int(0);
         while(_loc3_ < this.numP)
         {
            this.ray[_loc3_].ShowHyuFre(param1,param2);
            _loc3_ += param2;
         }
      }
set waveLength(param1){
         let _loc2_ = 0;
         this.__waveLength = param1;
         _loc2_ = int(0);
         while(_loc2_ < this.numP)
         {
            this.ray[_loc2_].waveLength = param1;
            _loc2_++;
         }
      }
}
return {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prism,Prototype,RayTrace,Rindex,ScreenCoord,WaveFront};
}
