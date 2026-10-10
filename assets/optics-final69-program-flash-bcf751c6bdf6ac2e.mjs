import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-bcf751c6bdf6ac2e", "title": "프레넬 렌즈", "source": "http://physica.gnu.ac.kr/phtml/optics/geometric/grinetc/fresnelshape.swf", "sourceFile": "fresnelshape.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/grinetc/fresnelshape.swf", "originalSHA256": "fd67b7097b286fd5c3925eac25c7c8262fd62d6937a8898529285b5986817796", "lesson": "5-2-9-3", "width": 350.0, "height": 150.0, "fps": 12.0, "type": "fresnel", "as3": true, "animated": false, "controls": [], "checks": [], "buttons": [], "placements": {}};
export function createTimeline(){
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
         return "(" + this.x + ", " + this.y + ")";
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
         if(this.Angle(_loc7_,Math.PI / 2,180) < 0.01 && this.Angle(_loc8_,Math.PI / 2,180) > 0.01)
         {
            _loc2_.x = _loc3_;
            _loc2_.y = _loc6_ + (_loc2_.x - _loc5_) * Math.tan(_loc8_);
         }
         else if(this.Angle(_loc8_,Math.PI / 2,180) < 0.01 && this.Angle(_loc7_,Math.PI / 2,180) > 0.01)
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
class FillStyle {
color = 0;
alpha = 0;
constructor(param1 = 8421504, param2 = 1){
         
         this.color = param1;
         this.alpha = param2;
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
         _loc9_ = int(Math.floor((_loc4_[_loc7_] * (1 - _loc8_) + _loc4_[_loc7_ + 1] * _loc8_) * param2));
         _loc10_ = int(Math.floor((_loc5_[_loc7_] * (1 - _loc8_) + _loc5_[_loc7_ + 1] * _loc8_) * param2));
         _loc11_ = int(Math.floor((_loc6_[_loc7_] * (1 - _loc8_) + _loc6_[_loc7_ + 1] * _loc8_) * param2));
         if(_loc9_ > 255)
         {
            _loc9_ = int(255);
         }
         if(_loc10_ > 255)
         {
            _loc10_ = int(255);
         }
         if(_loc11_ > 255)
         {
            _loc11_ = int(255);
         }
         return (_loc9_ * 256 + _loc10_) * 256 + _loc11_;
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
            _loc4_ = int(1);
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
            _loc4_ = int(1);
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
               this.g.lineTo(this.xo + this.scale * (param1 + param3 * Math.cos(_loc10_)),this.yo - this.scale * (param2 + param3 * Math.sin(_loc10_)));
            }
            this.g.curveTo(this.xo + this.scale * (param1 + param3 * Math.cos(_loc11_) * _loc8_),this.yo - this.scale * (param2 + param3 * Math.sin(_loc11_) * _loc8_),this.xo + this.scale * (param1 + param3 * Math.cos(_loc12_)),this.yo - this.scale * (param2 + param3 * Math.sin(_loc12_)));
            _loc9_++;
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
            this.g.lineStyle(this.__lineStyle.thickness,this.__lineStyle.color,this.__lineStyle.alpha,this.__lineStyle.pixelHinting,this.__lineStyle.scaleMode,this.__lineStyle.caps);
            this.g.beginFill(this.__fillStyle.color,this.__fillStyle.alpha);
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
class Fresnel {
static flatCriterior = 10000;
__thickness = 0;
dy = 0;
eThickness = 0;
rIndex = 0;
theta1Arr = null;
length = 0;
material = 0;
__num = 15;
p = null;
x1Arr = null;
type = 1;
__R1 = 0;
constructor(param1, param2, param3, param4, param5 = -1){
         
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
         this.material = param5;
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
makeXp(){
         let _loc1_ = 0;
         this.eThickness = this.__thickness + Math.sqrt(this.__R1 * this.__R1 - (this.__num - 1) * (this.__num - 1) * this.dy * this.dy) - Math.sqrt(this.__R1 * this.__R1 - this.__num * this.__num * this.dy * this.dy);
         _loc1_ = int(0);
         while(_loc1_ < this.__num)
         {
            this.x1Arr[_loc1_] = -this.eThickness + (Math.sqrt(this.R * this.R - _loc1_ * _loc1_ * this.dy * this.dy) - Math.sqrt(this.R * this.R - (_loc1_ + 1) * (_loc1_ + 1) * this.dy * this.dy));
            this.theta1Arr[_loc1_] = Math.asin((_loc1_ + 1) * this.dy / this.__R1);
            _loc1_++;
         }
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
         _loc7_ = int(Math.floor(_loc6_ / this.dy));
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
set thickness(param1){
         this.__thickness = param1;
      }
get thickness(){
         return this.__thickness;
      }
}
class Rindex {
static data = new Array();
static {Rindex.data[0] = ["Artificial","#1",400,700,-1];
Rindex.data[1] = ["Glasses","BK7",300,2500,0,1.03961212,0.00600069867,0.231792344,0.0200179144,1.01046945,103.560653];
Rindex.data[2] = ["Glasses","Fused Silica",210,3710,1,0.6961663,0.0684043,0.4079426,0.1162414,0.8974794,9.896161];
Rindex.data[3] = ["Glasses","Fused Germania",360,4300,1,0.80686642,0.06897261,0.71815848,0.1539661,0.85416831,11.841931];
Rindex.data[4] = ["Crystal","Diamond",225,100000,1,4.3356,0.106,0.3306,0.175,0,0];
Rindex.data[5] = ["Crystal","Al2O3 (o-ray)",200,5500,1,1.4313493,0.0726631,0.65054713,0.1193242,5.3414021,18.028251];
Rindex.data[6] = ["Crystal","Al2O3 (e-ray)",200,5500,1,1.5039759,0.0740288,0.55069141,0.1216529,6.5927379,20.072248];
Rindex.data[7] = ["Crystal","CaCO3 (o-ray)",200,5500,2,0.8559,0.0588,0.8391,0.141,0.0009,0.197,0.6845,7.005];
Rindex.data[8] = ["Crystal","CaCO3 (e-ray)",200,3300,1,1.0856,0.07897,0.0988,0.142,0.317,11.468];
Rindex.data[9] = ["Plastics","Polyacrylate",435.8,1052,3,2.36483,-0.06955268,-0.1356107,0.060539,-0.0116664,0.0008542615];
Rindex.data[10] = ["Plastics","Zeonex E48R",435.8,1052,3,2.482396,-0.0695991,-0.1597726,0.07383333,-0.01398485,0.0009728455];}
constructor(){
         
      }
static n1(param1, param2, param3, param4, param5, param6, param7){
         let _loc8_ = NaN;
         _loc8_ = param1 * param1;
         return Math.sqrt(1 + param2 * _loc8_ / (_loc8_ - param3 * param3) + param4 * _loc8_ / (_loc8_ - param5 * param5) + param6 * _loc8_ / (_loc8_ - param7 * param7));
      }
static n3(param1, param2, param3, param4, param5, param6, param7){
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
               return 1.5 + 0.2 * (700 - param2) / 300;
            case 0:
               return Rindex.n0(_loc3_,Rindex.data[param1][5],Rindex.data[param1][6],Rindex.data[param1][7],Rindex.data[param1][8],Rindex.data[param1][9],Rindex.data[param1][10]);
            case 1:
               return Rindex.n1(_loc3_,Rindex.data[param1][5],Rindex.data[param1][6],Rindex.data[param1][7],Rindex.data[param1][8],Rindex.data[param1][9],Rindex.data[param1][10]);
            case 2:
               return Rindex.n2(_loc3_,Rindex.data[param1][5],Rindex.data[param1][6],Rindex.data[param1][7],Rindex.data[param1][8],Rindex.data[param1][9],Rindex.data[param1][10],Rindex.data[param1][11],Rindex.data[param1][12]);
            case 3:
               return Rindex.n3(_loc3_,Rindex.data[param1][5],Rindex.data[param1][6],Rindex.data[param1][7],Rindex.data[param1][8],Rindex.data[param1][9],Rindex.data[param1][10]);
            default:
               return 1;
         }
      }
static n0(param1, param2, param3, param4, param5, param6, param7){
         let _loc8_ = NaN;
         _loc8_ = param1 * param1;
         return Math.sqrt(1 + param2 * _loc8_ / (_loc8_ - param3) + param4 * _loc8_ / (_loc8_ - param5) + param6 * _loc8_ / (_loc8_ - param7));
      }
static n2(param1, param2, param3, param4, param5, param6, param7, param8, param9){
         let _loc10_ = NaN;
         _loc10_ = param1 * param1;
         return Math.sqrt(1 + param2 * _loc10_ / (_loc10_ - param3 * param3) + param4 * _loc10_ / (_loc10_ - param5 * param5) + param6 * _loc10_ / (_loc10_ - param7 * param7) + param8 * _loc10_ / (_loc10_ - param9 * param9));
      }
}
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
class MainTimeline extends Sprite {
insEG = new Sprite();
instrumentCanvas = new Sprite();
t3 = new Sprite();
t1 = new Sprite();
t2 = new Sprite();
indexField = new Sprite();
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
      }
frame1(){
         this.instrumentCanvas = new Shape();
         this.insEG = new EGraphics(this.instrumentCanvas.graphics,100,100,1);
         this.addChild(this.instrumentCanvas);
         this.indexField = new IndexField(this.insEG,new Rectangle(-100,-100,200,200));
         this.t1 = new Fresnel(2,400,3,340);
         this.t1.p.x = 75;
         this.t1.p.y = 70;
         this.t1.p.dir = -Math.PI / 2;
         this.t1.num = 5;
         this.t2 = new Fresnel(2,600,3,340);
         this.t2.p.x = 75;
         this.t2.p.y = 25;
         this.t2.p.dir = -Math.PI / 2;
         this.t2.num = 15;
         this.t3 = new Fresnel(2,900,3,340);
         this.t3.p.x = 75;
         this.t3.p.y = -25;
         this.t3.p.dir = -Math.PI / 2;
         this.t3.num = 25;
         this.indexField.AddInstrument(this.t1);
         this.indexField.AddInstrument(this.t2);
         this.indexField.AddInstrument(this.t3);
         this.indexField.Draw();
      }
}
const t=new MainTimeline();A.configure(t,SPEC);t.frame1();return t;}
