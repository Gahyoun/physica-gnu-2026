import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, GradientType, Matrix, int, uint, trace } from './optics-batch50b-adapter.mjs';
export function createKernel(){
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
return {EGraphics,FillStyle,LineStyle,Point2D,Rindex,ScreenCoord};
}
