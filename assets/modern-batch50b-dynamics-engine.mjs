// Original source-specific QMSolver arithmetic and init/reset/run transcribed from Ki Soo Chung. New SVG renderer contains no original artwork.
const trace=()=>{},XML=class{},ArgumentError=Error,noop=()=>{},Rectangle=function(){},LineScaleMode={NORMAL:0,NONE:0},CapsStyle={NONE:0},ComplexSprite={getColorMap:()=>0},ComplexFtnUtil={getUncertainty:()=>0};
function graph(){return new Proxy({},{get:()=>noop});}
export const dynamicsFactories={};
dynamicsFactories["flash-ed9c176e3d02983b"]=(p,random=Math.random)=>{const Math=Object.create(globalThis.Math);Math.random=random;let Complex;Complex=(function(){const TWO_PI=2*Math.PI;function Complex(... rest)
      {this.re=undefined;this.im=undefined;
         
         this.re = Number.NaN;
         this.im = Number.NaN;
         switch(rest.length)
         {
            case 0:
               this.re = Number(0);
               this.im = Number(0);
               break;
            case 1:
               if(rest[0] instanceof Complex)
               {
                  this.re = Number(rest[0].re);
                  this.im = Number(rest[0].im);
               }
               else if(typeof rest[0] === "number")
               {
                  this.re = Number(rest[0]);
                  this.im = Number(0);
               }
               else if(rest[0] instanceof XML)
               {
                  this.re = this.fromXML(rest[0]).re;
                  this.im = this.fromXML(rest[0]).im;
               }
               else if(typeof rest[0] === "string")
               {
                  this.re = this.fromString(rest[0]).re;
                  this.im = this.fromString(rest[0]).im;
               }
               break;
            case 2:
               this.re = Number(rest[0]);
               this.im = Number(rest[1]);
         }
      }
function real(param1) 
      {
         return new Complex(param1,0);
      }
function cart(param1, param2) 
      {
         return new Complex(param1,param2);
      }
function polar(param1, param2) 
      {
         if(param1 < 0)
         {
            param2 += Math.PI;
            param1 = -param1;
         }
         param2 %= TWO_PI;
         return cart(param1 * Math.cos(param2),param1 * Math.sin(param2));
      }
function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      }
function absPrivate(param1, param2) 
      {
         var _loc5_ = NaN;
         var _loc3_ = Math.abs(param1);
         var _loc4_ = Math.abs(param2);
         if(_loc3_ == 0 && _loc4_ == 0)
         {
            return 0;
         }
         if(_loc3_ >= _loc4_)
         {
            _loc5_ = param2 / param1;
            return _loc3_ * Math.sqrt(1 + _loc5_ * _loc5_);
         }
         _loc5_ = param1 / param2;
         return _loc4_ * Math.sqrt(1 + _loc5_ * _loc5_);
      }
function inv(param1) 
      {
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         if(Math.abs(param1.re) >= Math.abs(param1.im))
         {
            _loc2_ = 1 / (param1.re + param1.im * (param1.im / param1.re));
            _loc3_ = _loc2_ * (-param1.im / param1.re);
         }
         else
         {
            _loc4_ = 1 / (param1.re * (param1.re / param1.im) + param1.im);
            _loc2_ = _loc4_ * (param1.re / param1.im);
            _loc3_ = -_loc4_;
         }
         param1.re = _loc2_;
         param1.im = _loc3_;
      }
function divPrivate(param1, param2, param3) 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         if(Math.abs(param2) >= Math.abs(param3))
         {
            _loc6_ = 1 / (param2 + param3 * (param3 / param2));
            _loc4_ = _loc6_ * (param1.re + param1.im * (param3 / param2));
            _loc5_ = _loc6_ * (param1.im - param1.re * (param3 / param2));
         }
         else
         {
            _loc6_ = 1 / (param2 * (param2 / param3) + param3);
            _loc4_ = _loc6_ * (param1.re * (param2 / param3) + param1.im);
            _loc5_ = _loc6_ * (param1.im * (param2 / param3) - param1.re);
         }
         param1.re = _loc4_;
         param1.im = _loc5_;
      }
function sqrtPrivate(param1) 
      {
         var _loc5_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = 0;
         var _loc4_ = param1.abs();
         if(_loc4_ > 0)
         {
            if(param1.re > 0)
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ + param1.re));
               param1.re = _loc5_;
               param1.im = 0.5 * param1.im / _loc5_;
            }
            else
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ - param1.re));
               if(param1.im < 0)
               {
                  _loc5_ = -_loc5_;
               }
               param1.re = 0.5 * param1.im / _loc5_;
               param1.im = _loc5_;
            }
         }
         else
         {
            param1.re = 0;
            param1.im = 0;
         }
      }
Complex.prototype.isInfinite=function isInfinite() 
      {
         return !isFinite(this.re) || !isFinite(this.im);
      };
Complex.prototype.isNaC=function isNaC() 
      {
         return isNaN(this.re) || isNaN(this.im);
      };
Complex.prototype.equals=function equals(param1, param2) 
      {
         return absPrivate(this.re - param1.re,this.im - param1.im) <= Math.abs(param2);
      };
Complex.prototype.getRe=function getRe() 
      {
         return this.re;
      };
Complex.prototype.getIm=function getIm() 
      {
         return this.im;
      };
Complex.prototype.norm=function norm() 
      {
         return this.re * this.re + this.im * this.im;
      };
Complex.prototype.abs=function abs() 
      {
         return absPrivate(this.re,this.im);
      };
Complex.prototype.arg=function arg() 
      {
         return Math.atan2(this.im,this.re);
      };
Complex.prototype.neg=function neg() 
      {
         return this.scale(-1);
      };
Complex.prototype.conj=function conj() 
      {
         return cart(this.re,-this.im);
      };
Complex.prototype.scale=function scale(param1) 
      {
         return cart(param1 * this.re,param1 * this.im);
      };
Complex.prototype.add=function add(param1) 
      {
         return cart(this.re + param1.re,this.im + param1.im);
      };
Complex.prototype.sub=function sub(param1) 
      {
         return cart(this.re - param1.re,this.im - param1.im);
      };
Complex.prototype.mul=function mul(param1) 
      {
         return cart(this.re * param1.re - this.im * param1.im,this.re * param1.im + this.im * param1.re);
      };
Complex.prototype.div=function div(param1) 
      {
         var _loc2_ = new Complex(this);
         divPrivate(_loc2_,param1.re,param1.im);
         return _loc2_;
      };
Complex.prototype.sqrt=function sqrt() 
      {
         var _loc1_ = new Complex(this);
         sqrtPrivate(_loc1_);
         return _loc1_;
      };
Complex.prototype.pow=function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      };
Complex.prototype.exp=function exp() 
      {
         var _loc1_ = Math.exp(this.re);
         return cart(_loc1_ * Math.cos(this.im),_loc1_ * Math.sin(this.im));
      };
Complex.prototype.log=function log() 
      {
         return cart(Math.log(this.abs()),this.arg());
      };
Complex.prototype.sin=function sin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         return cart(0.5 * _loc6_,-0.5 * _loc5_);
      };
Complex.prototype.cos=function cos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         return cart(0.5 * _loc5_,0.5 * _loc6_);
      };
Complex.prototype.tan=function tan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc1_ = cart(0.5 * _loc10_,-0.5 * _loc9_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc11_ = 0.5 * _loc9_;
         _loc12_ = 0.5 * _loc10_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.cosec=function cosec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         _loc1_ = cart(0.5 * _loc6_,-0.5 * _loc5_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.sec=function sec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         _loc1_ = cart(0.5 * _loc5_,0.5 * _loc6_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.cot=function cot() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc1_ = cart(0.5 * _loc9_,0.5 * _loc10_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc11_ = 0.5 * _loc10_;
         _loc12_ = -0.5 * _loc9_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.sinh=function sinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ -= _loc5_;
         _loc4_ -= _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.cosh=function cosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ += _loc5_;
         _loc4_ += _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.tanh=function tanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc7_ = _loc3_ - _loc5_;
         _loc8_ = _loc4_ - _loc6_;
         _loc1_ = cart(0.5 * _loc7_,0.5 * _loc8_);
         _loc7_ = _loc3_ + _loc5_;
         _loc8_ = _loc4_ + _loc6_;
         _loc9_ = 0.5 * _loc7_;
         _loc10_ = 0.5 * _loc8_;
         divPrivate(_loc1_,_loc9_,_loc10_);
         return _loc1_;
      };
Complex.prototype.asin=function asin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -this.im;
         _loc3_ = this.re;
         _loc1_.re = _loc2_ + _loc1_.re;
         _loc1_.im = _loc3_ + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.acos=function acos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -_loc1_.im;
         _loc3_ = _loc1_.re;
         _loc1_.re = this.re + _loc2_;
         _loc1_.im = this.im + _loc3_;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.atan=function atan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(-this.re,1 - this.im);
         _loc2_ = this.re;
         _loc3_ = 1 + this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc3_;
         _loc1_.im = -0.5 * _loc2_;
         return _loc1_;
      };
Complex.prototype.asinh=function asinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im + 1;
         _loc3_ = this.re * this.im + this.im * this.re + 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.acosh=function acosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im - 1;
         _loc3_ = this.re * this.im + this.im * this.re - 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.atanh=function atanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(1 + this.re,this.im);
         _loc2_ = 1 - this.re;
         _loc3_ = -this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc2_;
         _loc1_.im = 0.5 * _loc3_;
         return _loc1_;
      };Complex.real=real;Complex.cart=cart;Complex.polar=polar;Complex.pow=pow;Complex.absPrivate=absPrivate;Complex.inv=inv;Complex.divPrivate=divPrivate;Complex.sqrtPrivate=sqrtPrivate;Complex.NaC=new Complex(Number.NaN,Number.NaN);Complex.i=new Complex(0,1);return Complex;})();
let Potential1D;Potential1D=(function(){const TWO_PI=2*Math.PI;function Potential1D()
      {
         
      }
function getU(param1, param2 = 4, param3 = 256, param4 = 10000, param5 = 500) 
      {param1=Math.trunc(param1);param2=Math.trunc(param2);param3=Math.trunc(param3);param4=Math.trunc(param4);param5=Math.trunc(param5);
         var _loc7_ = 0;
         var _loc8_ = NaN;
         var _loc11_ = 0;
         var _loc6_ = new Array(param1);
         _loc7_ = 0;
         while(_loc7_ < param1)
         {
            _loc6_[_loc7_] = 0;
            _loc7_++;
         }
         var _loc9_ = param3 - param5 / 2;
         if(_loc9_ < 0)
         {
            _loc9_ = 0;
         }
         var _loc10_ = param3 + param5 / 2;
         if(_loc10_ > param1)
         {
            _loc10_ = param1;
         }
         switch(param2)
         {
            case 0:
               _loc7_ = _loc9_;
               while(_loc7_ < _loc10_)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 1:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  if(_loc7_ < _loc9_ || _loc7_ > _loc10_)
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
               break;
            case 2:
               _loc7_ = param3;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 3:
               break;
            case 4:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 5:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / Math.abs(param3 - 1);
               }
               else
               {
                  _loc8_ = 1 * param4 / Math.abs(param1 - param3);
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * Math.abs(_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 6:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3 * param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3) * (param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 7:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc11_ = Math.abs(_loc7_ - param1 / 2) + param5 / 2;
                  if(_loc11_ / param5 / 2 * 2 == _loc11_ / param5)
                  {
                     _loc6_[_loc7_] = 0;
                  }
                  else
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
         }
         return _loc6_;
      }Potential1D.getU=getU;return Potential1D;})();
let Quantum1D;Quantum1D=(function(){const TWO_PI=2*Math.PI;function Quantum1D(param1, param2, param3, param4 = null)
      {this.numPt=undefined;this.epsilon=undefined;this.lambda=undefined;this.iLambda=undefined;this.v=undefined;this.a=undefined;this.b=undefined;param1=Math.trunc(param1);
         
         this.numPt = param1;
         this.epsilon = param2;
         this.lambda = param3;
         this.a = new Array(param1);
         this.b = new Array(param1);
         this.iLambda = new Complex(0,param3);
         if(param4 != null)
         {
            this.setPotential(param4);
         }
      }
Quantum1D.prototype.setPotential=function setPotential(param1) 
      {
         this.v = param1;
         this.calcLU();
      };
Quantum1D.prototype.calcLU=function calcLU() 
      {
         var _loc2_ = 0;
         var _loc1_ = new Array(this.numPt);
         _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc1_[_loc2_] = Complex.cart(-2 - this.epsilon * this.epsilon * this.v[_loc2_],this.lambda);
            _loc2_++;
         }
         this.a[0] = new Complex(_loc1_[0]);
         var _loc3_ = new Complex(1,0);
         _loc2_ = 1;
         while(_loc2_ < this.numPt)
         {
            this.a[_loc2_] = _loc1_[_loc2_].sub(_loc3_.div(this.a[_loc2_ - 1]));
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numPt - 1)
         {
            this.b[_loc2_] = _loc3_.div(this.a[_loc2_]);
            _loc2_++;
         }
      };
Quantum1D.prototype.calcNext=function calcNext(param1) 
      {
         var _loc2_ = new Array(this.numPt);
         var _loc3_ = 0;
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = Math.trunc(this.numPt - 1);
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = 1;
         while(_loc3_ < this.numPt - 1)
         {
            _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
            _loc3_++;
         }
         var _loc4_ = new Array(this.numPt);
         _loc4_[0] = _loc2_[0].div(this.a[0]);
         _loc3_ = 1;
         while(_loc3_ < this.numPt)
         {
            _loc4_[_loc3_] = _loc2_[_loc3_].sub(_loc4_[_loc3_ - 1]).div(this.a[_loc3_]);
            _loc3_++;
         }
         param1[this.numPt - 1] = new Complex(_loc4_[this.numPt - 1]);
         _loc3_ = Math.trunc(this.numPt - 2);
         while(_loc3_ >= 0)
         {
            param1[_loc3_] = _loc4_[_loc3_].sub(this.b[_loc3_].mul(param1[_loc3_ + 1]));
            _loc3_--;
         }
      };return Quantum1D;})();
let FFT1D;FFT1D=(function(){const TWO_PI=2*Math.PI;function FFT1D(param1)
      {this.numPt=undefined;this.sint=undefined;param1=Math.trunc(param1);
         
         var _loc2_ = param1;
         var _loc3_ = 1;
         do
         {
            _loc2_ = Math.floor(_loc2_ / 2);
            _loc3_ *= 2;
         }
         while(_loc2_ > 1);
         if(_loc3_ != param1)
         {
            throw new ArgumentError("numData is not 2^N !");
         }
         this.numPt = param1;
         var _loc4_ = Math.floor(this.numPt / 4) + 1;
         this.sint = new Array(_loc4_);
         _loc2_ = 0;
         while(_loc2_ < _loc4_)
         {
            this.sint[_loc2_] = Math.sin(_loc2_ * 2 * Math.PI / this.numPt);
            _loc2_++;
         }
      }
function rearrangeArray(param1) 
      {
         var _loc3_ = 0;
         var _loc4_ = null;
         var _loc2_ = 0;
         while(_loc2_ < Math.floor(param1.length / 2))
         {
            _loc3_ = _loc2_ + Math.floor(param1.length / 2);
            _loc4_ = param1[_loc2_];
            param1[_loc2_] = param1[_loc3_];
            param1[_loc3_] = _loc4_;
            _loc2_++;
         }
      }
FFT1D.prototype.FFTransform1D=function FFTransform1D(param1, param2, param3) 
      {
         var _loc4_ = null;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = 0;
         var _loc9_ = 0;
         var _loc10_ = 0;
         var _loc11_ = 0;
         var _loc12_ = 0;
         var _loc13_ = 0;
         var _loc14_ = 0;
         var _loc15_ = 0;
         var _loc16_ = 0;
         var _loc17_ = 0;
         var _loc18_ = 0;
         var _loc19_ = 0;
         var _loc21_ = 0;
         var _loc22_ = 0;
         if(param1.length != this.numPt)
         {
            throw new ArgumentError("numer of Data is not numPt !");
         }
         _loc14_ = Math.floor(this.numPt / 4);
         _loc13_ = _loc14_ + _loc14_;
         var _loc20_ = new Array(this.numPt);
         _loc8_ = 0;
         while(_loc8_ < this.numPt)
         {
            _loc20_[_loc8_] = new Complex(param1[_loc8_]);
            _loc8_++;
         }
         _loc9_ = 0;
         _loc8_ = 0;
         while(_loc8_ < this.numPt - 2)
         {
            if(_loc9_ > _loc8_)
            {
               _loc4_ = new Complex(_loc20_[_loc9_]);
               _loc20_[_loc9_] = new Complex(_loc20_[_loc8_]);
               _loc20_[_loc8_] = new Complex(_loc4_);
            }
            _loc10_ = _loc13_;
            while(_loc9_ >= _loc10_)
            {
               _loc9_ -= _loc10_;
               _loc10_ = Math.floor(_loc10_ / 2);
            }
            _loc9_ += _loc10_;
            _loc8_++;
         }
         _loc18_ = 1;
         _loc15_ = 1;
         _loc12_ = 0;
         _loc16_ = 0;
         do
         {
            _loc8_ = _loc18_;
            _loc18_ += _loc18_;
            _loc9_ = 0;
            while(_loc9_ <= _loc8_ - 1)
            {
               _loc7_ = this.sint[_loc12_];
               if(param2)
               {
                  _loc7_ = -_loc7_;
               }
               _loc6_ = this.sint[_loc14_ - _loc12_];
               if(_loc9_ >= _loc15_)
               {
                  _loc12_ -= _loc16_;
                  _loc6_ = -_loc6_;
               }
               if(_loc9_ < _loc15_)
               {
                  _loc12_ += _loc16_;
               }
               _loc5_ = new Complex(_loc6_,_loc7_);
               _loc19_ = _loc9_;
               while(_loc19_ < this.numPt)
               {
                  _loc10_ = _loc19_;
                  _loc11_ = _loc10_ + _loc8_;
                  _loc4_ = _loc5_.mul(_loc20_[_loc11_]);
                  _loc20_[_loc11_] = _loc20_[_loc10_].sub(_loc4_);
                  _loc20_[_loc10_] = _loc20_[_loc10_].add(_loc4_);
                  _loc19_ += _loc18_;
               }
               _loc9_++;
            }
            _loc15_ = _loc8_;
            _loc16_ = Math.floor(_loc14_ / _loc8_);
         }
         while(_loc8_ < _loc13_);
         if(param2)
         {
            _loc8_ = 0;
            while(_loc8_ < this.numPt)
            {
               _loc20_[_loc8_] = _loc20_[_loc8_].scale(1 / this.numPt);
               _loc8_++;
            }
         }
         if(param3)
         {
            _loc21_ = -1;
            _loc22_ = 0;
            while(_loc22_ < _loc20_.length)
            {
               _loc21_ *= -1;
               _loc20_[_loc22_] = _loc20_[_loc22_].scale(_loc21_);
               _loc22_++;
            }
            rearrangeArray(_loc20_);
            return _loc20_;
         }
         return _loc20_;
      };
FFT1D.prototype.powerSpectrum1D=function powerSpectrum1D(param1, param2) 
      {
         var _loc3_ = this.FFTransform1D(param1,false,param2);
         var _loc4_ = Math.trunc(_loc3_.length);
         var _loc5_ = new Array(_loc4_);
         var _loc6_ = 0;
         while(_loc6_ < _loc4_)
         {
            _loc5_[_loc6_] = _loc3_[_loc6_].norm() * _loc4_;
            _loc6_++;
         }
         return _loc5_;
      };FFT1D.rearrangeArray=rearrangeArray;return FFT1D;})();
const c={};Object.defineProperty(c,"numPt",{get(){return this.__numPt??0;},set(v){this.__numPt=(v|0);}});Object.defineProperty(c,"Time",{get(){return this.__Time??0;},set(v){this.__Time=(v|0);}});Object.defineProperty(c,"potentialType",{get(){return this.__potentialType??0;},set(v){this.__potentialType=(v|0);}});Object.defineProperty(c,"potentialCenter",{get(){return this.__potentialCenter??0;},set(v){this.__potentialCenter=(v|0);}});Object.defineProperty(c,"potentialHeight",{get(){return this.__potentialHeight??0;},set(v){this.__potentialHeight=(v|0);}});Object.defineProperty(c,"potentialWidth",{get(){return this.__potentialWidth??0;},set(v){this.__potentialWidth=(v|0);}});Object.defineProperty(c,"k0",{get(){return this.__k0??0;},set(v){this.__k0=(v|0);}});Object.defineProperty(c,"x0",{get(){return this.__x0??0;},set(v){this.__x0=(v|0);}});Object.defineProperty(c,"xLeft",{get(){return this.__xLeft??0;},set(v){this.__xLeft=(v|0);}});Object.defineProperty(c,"i",{get(){return this.__i??0;},set(v){this.__i=(v|0);}});c.numPt=511;c.epsilon=0.005;c.lambda=2;c.deltaT=0.000025;c.deltaK=2.4591723315771374;c.Time=0;c.potentialType=2;c.potentialCenter=256;c.potentialHeight=0;c.potentialWidth=100;c.k0=50;c.x0=256;c.uncertainty=0.05;c.xLeft=9;c.i=1;for(const [k,v]of Object.entries(p))c[k]=typeof v==="boolean"?{isChecked:v}:k==="potentialCmb"?{selIndex:v}:{value:v};
for(const k of ["timeStr","timeStepStr","periodTxt","omegaTxt","momentumTxt","omeganTxt"])c[k]={text:""};for(const k of ["canvas","canvas_Potential","canvas_State","canvas_StateGrid","canvas_PotentialBackground"])c[k]={graphics:graph()};c.aniTimer={reset:noop,stop:noop};c.startBtn={isON:false};c.psi=new Array(c.numPt);c.psi2=new Array(c.numPt+1);c.Tji=new Array(c.numPt+1).fill(0);c.v=new Array(c.numPt);c.drawWave=c.init2DWave=c.draw2DWave=c.drawPotential=c.resetAni=noop;c.reset=function reset() 
      {
         var _loc6_ = NaN;
         this.potentialCenter = this.slider2.value;
         this.potentialHeight = this.slider3.value;
         var _loc1_ = this.slider1.value;
         var _loc2_ = _loc1_ * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc3_ = 0;
         while(_loc3_ < this.numPt)
         {
            _loc6_ = this.epsilon * (_loc3_ + 1 - (this.numPt + 1) / 2);
            this.psi[_loc3_] = Complex.polar(Math.sin(_loc2_ * _loc6_),0);
            _loc3_++;
         }
         this.v = Potential1D.getU(this.numPt,this.potentialType,this.potentialCenter,this.potentialHeight,this.potentialWidth);
         this.quantum1D.setPotential(this.v);
         var _loc4_ = _loc2_ * _loc2_;
         Potential1D.DrawFtn(this.canvas_Potential,new Rectangle(this.xLeft,5,this.numPt + 1,80),this.v,_loc4_,true);
         this.Time = 0;
         this.timeStr.text = "" + this.Time;
         this.psi2[0] = new Complex(0);
         var _loc5_ = 0;
         while(_loc5_ < this.numPt)
         {
            this.psi2[_loc5_ + 1] = new Complex(this.psi[_loc5_]);
            _loc5_++;
         }
         this.momentumPsi = this.fft.FFTransform1D(this.psi2,false,true);
         _loc5_ = 0;
         while(_loc5_ < this.numPt + 1)
         {
            _loc5_++;
         }
         this.drawWave();
      }.bind(c);
c.run=function run() 
      {
         this.Time += 1;
         this.timeStr.text = "" + this.Time;
         this.quantum1D.calcNext(this.psi);
         if(this.Time >= 5000)
         {
            this.resetAni();
            this.Time = 0;
            return;
         }
         this.psi2[0] = new Complex(0,0);
         var _loc1_ = 0;
         while(_loc1_ < this.numPt)
         {
            this.psi2[_loc1_ + 1] = new Complex(this.psi[_loc1_]);
            _loc1_++;
         }
         this.momentumPsi = this.fft.FFTransform1D(this.psi2,false,true);
         this.drawWave(-1);
      }.bind(c);
c.quantum1D=new Quantum1D(c.numPt,c.epsilon,c.lambda);c.fft=new FFT1D(c.numPt+1);Potential1D.DrawFtn=noop;c.reset();return c;};
dynamicsFactories["flash-7be4ee6e97bc41f0"]=(p,random=Math.random)=>{const Math=Object.create(globalThis.Math);Math.random=random;let Complex;Complex=(function(){const TWO_PI=2*Math.PI;function Complex(... rest)
      {this.re=undefined;this.im=undefined;
         
         this.re = Number.NaN;
         this.im = Number.NaN;
         switch(rest.length)
         {
            case 0:
               this.re = Number(0);
               this.im = Number(0);
               break;
            case 1:
               if(rest[0] instanceof Complex)
               {
                  this.re = Number(rest[0].re);
                  this.im = Number(rest[0].im);
               }
               else if(typeof rest[0] === "number")
               {
                  this.re = Number(rest[0]);
                  this.im = Number(0);
               }
               else if(rest[0] instanceof XML)
               {
                  this.re = this.fromXML(rest[0]).re;
                  this.im = this.fromXML(rest[0]).im;
               }
               else if(typeof rest[0] === "string")
               {
                  this.re = this.fromString(rest[0]).re;
                  this.im = this.fromString(rest[0]).im;
               }
               break;
            case 2:
               this.re = Number(rest[0]);
               this.im = Number(rest[1]);
         }
      }
function real(param1) 
      {
         return new Complex(param1,0);
      }
function cart(param1, param2) 
      {
         return new Complex(param1,param2);
      }
function polar(param1, param2) 
      {
         if(param1 < 0)
         {
            param2 += Math.PI;
            param1 = -param1;
         }
         param2 %= TWO_PI;
         return cart(param1 * Math.cos(param2),param1 * Math.sin(param2));
      }
function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      }
function absPrivate(param1, param2) 
      {
         var _loc5_ = NaN;
         var _loc3_ = Math.abs(param1);
         var _loc4_ = Math.abs(param2);
         if(_loc3_ == 0 && _loc4_ == 0)
         {
            return 0;
         }
         if(_loc3_ >= _loc4_)
         {
            _loc5_ = param2 / param1;
            return _loc3_ * Math.sqrt(1 + _loc5_ * _loc5_);
         }
         _loc5_ = param1 / param2;
         return _loc4_ * Math.sqrt(1 + _loc5_ * _loc5_);
      }
function inv(param1) 
      {
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         if(Math.abs(param1.re) >= Math.abs(param1.im))
         {
            _loc2_ = 1 / (param1.re + param1.im * (param1.im / param1.re));
            _loc3_ = _loc2_ * (-param1.im / param1.re);
         }
         else
         {
            _loc4_ = 1 / (param1.re * (param1.re / param1.im) + param1.im);
            _loc2_ = _loc4_ * (param1.re / param1.im);
            _loc3_ = -_loc4_;
         }
         param1.re = _loc2_;
         param1.im = _loc3_;
      }
function divPrivate(param1, param2, param3) 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         if(Math.abs(param2) >= Math.abs(param3))
         {
            _loc6_ = 1 / (param2 + param3 * (param3 / param2));
            _loc4_ = _loc6_ * (param1.re + param1.im * (param3 / param2));
            _loc5_ = _loc6_ * (param1.im - param1.re * (param3 / param2));
         }
         else
         {
            _loc6_ = 1 / (param2 * (param2 / param3) + param3);
            _loc4_ = _loc6_ * (param1.re * (param2 / param3) + param1.im);
            _loc5_ = _loc6_ * (param1.im * (param2 / param3) - param1.re);
         }
         param1.re = _loc4_;
         param1.im = _loc5_;
      }
function sqrtPrivate(param1) 
      {
         var _loc5_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = 0;
         var _loc4_ = param1.abs();
         if(_loc4_ > 0)
         {
            if(param1.re > 0)
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ + param1.re));
               param1.re = _loc5_;
               param1.im = 0.5 * param1.im / _loc5_;
            }
            else
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ - param1.re));
               if(param1.im < 0)
               {
                  _loc5_ = -_loc5_;
               }
               param1.re = 0.5 * param1.im / _loc5_;
               param1.im = _loc5_;
            }
         }
         else
         {
            param1.re = 0;
            param1.im = 0;
         }
      }
Complex.prototype.isInfinite=function isInfinite() 
      {
         return !isFinite(this.re) || !isFinite(this.im);
      };
Complex.prototype.isNaC=function isNaC() 
      {
         return isNaN(this.re) || isNaN(this.im);
      };
Complex.prototype.equals=function equals(param1, param2) 
      {
         return absPrivate(this.re - param1.re,this.im - param1.im) <= Math.abs(param2);
      };
Complex.prototype.getRe=function getRe() 
      {
         return this.re;
      };
Complex.prototype.getIm=function getIm() 
      {
         return this.im;
      };
Complex.prototype.norm=function norm() 
      {
         return this.re * this.re + this.im * this.im;
      };
Complex.prototype.abs=function abs() 
      {
         return absPrivate(this.re,this.im);
      };
Complex.prototype.arg=function arg() 
      {
         return Math.atan2(this.im,this.re);
      };
Complex.prototype.neg=function neg() 
      {
         return this.scale(-1);
      };
Complex.prototype.conj=function conj() 
      {
         return cart(this.re,-this.im);
      };
Complex.prototype.scale=function scale(param1) 
      {
         return cart(param1 * this.re,param1 * this.im);
      };
Complex.prototype.add=function add(param1) 
      {
         return cart(this.re + param1.re,this.im + param1.im);
      };
Complex.prototype.sub=function sub(param1) 
      {
         return cart(this.re - param1.re,this.im - param1.im);
      };
Complex.prototype.mul=function mul(param1) 
      {
         return cart(this.re * param1.re - this.im * param1.im,this.re * param1.im + this.im * param1.re);
      };
Complex.prototype.div=function div(param1) 
      {
         var _loc2_ = new Complex(this);
         divPrivate(_loc2_,param1.re,param1.im);
         return _loc2_;
      };
Complex.prototype.sqrt=function sqrt() 
      {
         var _loc1_ = new Complex(this);
         sqrtPrivate(_loc1_);
         return _loc1_;
      };
Complex.prototype.pow=function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      };
Complex.prototype.exp=function exp() 
      {
         var _loc1_ = Math.exp(this.re);
         return cart(_loc1_ * Math.cos(this.im),_loc1_ * Math.sin(this.im));
      };
Complex.prototype.log=function log() 
      {
         return cart(Math.log(this.abs()),this.arg());
      };
Complex.prototype.sin=function sin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         return cart(0.5 * _loc6_,-0.5 * _loc5_);
      };
Complex.prototype.cos=function cos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         return cart(0.5 * _loc5_,0.5 * _loc6_);
      };
Complex.prototype.tan=function tan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc1_ = cart(0.5 * _loc10_,-0.5 * _loc9_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc11_ = 0.5 * _loc9_;
         _loc12_ = 0.5 * _loc10_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.cosec=function cosec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         _loc1_ = cart(0.5 * _loc6_,-0.5 * _loc5_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.sec=function sec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         _loc1_ = cart(0.5 * _loc5_,0.5 * _loc6_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.cot=function cot() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc1_ = cart(0.5 * _loc9_,0.5 * _loc10_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc11_ = 0.5 * _loc10_;
         _loc12_ = -0.5 * _loc9_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.sinh=function sinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ -= _loc5_;
         _loc4_ -= _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.cosh=function cosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ += _loc5_;
         _loc4_ += _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.tanh=function tanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc7_ = _loc3_ - _loc5_;
         _loc8_ = _loc4_ - _loc6_;
         _loc1_ = cart(0.5 * _loc7_,0.5 * _loc8_);
         _loc7_ = _loc3_ + _loc5_;
         _loc8_ = _loc4_ + _loc6_;
         _loc9_ = 0.5 * _loc7_;
         _loc10_ = 0.5 * _loc8_;
         divPrivate(_loc1_,_loc9_,_loc10_);
         return _loc1_;
      };
Complex.prototype.asin=function asin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -this.im;
         _loc3_ = this.re;
         _loc1_.re = _loc2_ + _loc1_.re;
         _loc1_.im = _loc3_ + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.acos=function acos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -_loc1_.im;
         _loc3_ = _loc1_.re;
         _loc1_.re = this.re + _loc2_;
         _loc1_.im = this.im + _loc3_;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.atan=function atan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(-this.re,1 - this.im);
         _loc2_ = this.re;
         _loc3_ = 1 + this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc3_;
         _loc1_.im = -0.5 * _loc2_;
         return _loc1_;
      };
Complex.prototype.asinh=function asinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im + 1;
         _loc3_ = this.re * this.im + this.im * this.re + 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.acosh=function acosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im - 1;
         _loc3_ = this.re * this.im + this.im * this.re - 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.atanh=function atanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(1 + this.re,this.im);
         _loc2_ = 1 - this.re;
         _loc3_ = -this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc2_;
         _loc1_.im = 0.5 * _loc3_;
         return _loc1_;
      };Complex.real=real;Complex.cart=cart;Complex.polar=polar;Complex.pow=pow;Complex.absPrivate=absPrivate;Complex.inv=inv;Complex.divPrivate=divPrivate;Complex.sqrtPrivate=sqrtPrivate;Complex.NaC=new Complex(Number.NaN,Number.NaN);Complex.i=new Complex(0,1);return Complex;})();
let Potential1D;Potential1D=(function(){const TWO_PI=2*Math.PI;function Potential1D()
      {
         
      }
function getU(param1, param2 = 4, param3 = 256, param4 = 10000, param5 = 500) 
      {param1=Math.trunc(param1);param2=Math.trunc(param2);param3=Math.trunc(param3);param4=Math.trunc(param4);param5=Math.trunc(param5);
         var _loc7_ = 0;
         var _loc8_ = NaN;
         var _loc11_ = 0;
         var _loc6_ = new Array(param1);
         _loc7_ = 0;
         while(_loc7_ < param1)
         {
            _loc6_[_loc7_] = 0;
            _loc7_++;
         }
         var _loc9_ = param3 - param5 / 2;
         if(_loc9_ < 0)
         {
            _loc9_ = 0;
         }
         var _loc10_ = param3 + param5 / 2;
         if(_loc10_ > param1)
         {
            _loc10_ = param1;
         }
         switch(param2)
         {
            case 0:
               _loc7_ = _loc9_;
               while(_loc7_ < _loc10_)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 1:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  if(_loc7_ < _loc9_ || _loc7_ > _loc10_)
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
               break;
            case 2:
               _loc7_ = param3;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 3:
               break;
            case 4:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 5:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / Math.abs(param3 - 1);
               }
               else
               {
                  _loc8_ = 1 * param4 / Math.abs(param1 - param3);
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * Math.abs(_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 6:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3 * param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3) * (param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 7:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc11_ = Math.abs(_loc7_ - param1 / 2) + param5 / 2;
                  if(_loc11_ / param5 / 2 * 2 == _loc11_ / param5)
                  {
                     _loc6_[_loc7_] = 0;
                  }
                  else
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
         }
         return _loc6_;
      }Potential1D.getU=getU;return Potential1D;})();
let Quantum1D;Quantum1D=(function(){const TWO_PI=2*Math.PI;function Quantum1D(param1, param2, param3, param4 = null)
      {this.numPt=undefined;this.epsilon=undefined;this.lambda=undefined;this.iLambda=undefined;this.v=undefined;this.a=undefined;this.b=undefined;param1=Math.trunc(param1);
         
         this.numPt = param1;
         this.epsilon = param2;
         this.lambda = param3;
         this.a = new Array(param1);
         this.b = new Array(param1);
         this.iLambda = new Complex(0,param3);
         if(param4 != null)
         {
            this.setPotential(param4);
         }
      }
Quantum1D.prototype.setPotential=function setPotential(param1) 
      {
         this.v = param1;
         this.calcLU();
      };
Quantum1D.prototype.calcLU=function calcLU() 
      {
         var _loc2_ = 0;
         var _loc1_ = new Array(this.numPt);
         _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc1_[_loc2_] = Complex.cart(-2 - this.epsilon * this.epsilon * this.v[_loc2_],this.lambda);
            _loc2_++;
         }
         this.a[0] = new Complex(_loc1_[0]);
         var _loc3_ = new Complex(1,0);
         _loc2_ = 1;
         while(_loc2_ < this.numPt)
         {
            this.a[_loc2_] = _loc1_[_loc2_].sub(_loc3_.div(this.a[_loc2_ - 1]));
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numPt - 1)
         {
            this.b[_loc2_] = _loc3_.div(this.a[_loc2_]);
            _loc2_++;
         }
      };
Quantum1D.prototype.calcNext=function calcNext(param1) 
      {
         var _loc2_ = new Array(this.numPt);
         var _loc3_ = 0;
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = Math.trunc(this.numPt - 1);
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = 1;
         while(_loc3_ < this.numPt - 1)
         {
            _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
            _loc3_++;
         }
         var _loc4_ = new Array(this.numPt);
         _loc4_[0] = _loc2_[0].div(this.a[0]);
         _loc3_ = 1;
         while(_loc3_ < this.numPt)
         {
            _loc4_[_loc3_] = _loc2_[_loc3_].sub(_loc4_[_loc3_ - 1]).div(this.a[_loc3_]);
            _loc3_++;
         }
         param1[this.numPt - 1] = new Complex(_loc4_[this.numPt - 1]);
         _loc3_ = Math.trunc(this.numPt - 2);
         while(_loc3_ >= 0)
         {
            param1[_loc3_] = _loc4_[_loc3_].sub(this.b[_loc3_].mul(param1[_loc3_ + 1]));
            _loc3_--;
         }
      };return Quantum1D;})();
let FFT1D;FFT1D=(function(){const TWO_PI=2*Math.PI;function FFT1D(param1)
      {this.numPt=undefined;this.sint=undefined;param1=Math.trunc(param1);
         
         var _loc2_ = param1;
         var _loc3_ = 1;
         do
         {
            _loc2_ = Math.floor(_loc2_ / 2);
            _loc3_ *= 2;
         }
         while(_loc2_ > 1);
         if(_loc3_ != param1)
         {
            throw new ArgumentError("numData is not 2^N !");
         }
         this.numPt = param1;
         var _loc4_ = Math.floor(this.numPt / 4) + 1;
         this.sint = new Array(_loc4_);
         _loc2_ = 0;
         while(_loc2_ < _loc4_)
         {
            this.sint[_loc2_] = Math.sin(_loc2_ * 2 * Math.PI / this.numPt);
            _loc2_++;
         }
      }
function rearrangeArray(param1) 
      {
         var _loc3_ = 0;
         var _loc4_ = null;
         var _loc2_ = 0;
         while(_loc2_ < Math.floor(param1.length / 2))
         {
            _loc3_ = _loc2_ + Math.floor(param1.length / 2);
            _loc4_ = param1[_loc2_];
            param1[_loc2_] = param1[_loc3_];
            param1[_loc3_] = _loc4_;
            _loc2_++;
         }
      }
FFT1D.prototype.FFTransform1D=function FFTransform1D(param1, param2, param3) 
      {
         var _loc4_ = null;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = 0;
         var _loc9_ = 0;
         var _loc10_ = 0;
         var _loc11_ = 0;
         var _loc12_ = 0;
         var _loc13_ = 0;
         var _loc14_ = 0;
         var _loc15_ = 0;
         var _loc16_ = 0;
         var _loc17_ = 0;
         var _loc18_ = 0;
         var _loc19_ = 0;
         var _loc21_ = 0;
         var _loc22_ = 0;
         if(param1.length != this.numPt)
         {
            throw new ArgumentError("numer of Data is not numPt !");
         }
         _loc14_ = Math.floor(this.numPt / 4);
         _loc13_ = _loc14_ + _loc14_;
         var _loc20_ = new Array(this.numPt);
         _loc8_ = 0;
         while(_loc8_ < this.numPt)
         {
            _loc20_[_loc8_] = new Complex(param1[_loc8_]);
            _loc8_++;
         }
         _loc9_ = 0;
         _loc8_ = 0;
         while(_loc8_ < this.numPt - 2)
         {
            if(_loc9_ > _loc8_)
            {
               _loc4_ = new Complex(_loc20_[_loc9_]);
               _loc20_[_loc9_] = new Complex(_loc20_[_loc8_]);
               _loc20_[_loc8_] = new Complex(_loc4_);
            }
            _loc10_ = _loc13_;
            while(_loc9_ >= _loc10_)
            {
               _loc9_ -= _loc10_;
               _loc10_ = Math.floor(_loc10_ / 2);
            }
            _loc9_ += _loc10_;
            _loc8_++;
         }
         _loc18_ = 1;
         _loc15_ = 1;
         _loc12_ = 0;
         _loc16_ = 0;
         do
         {
            _loc8_ = _loc18_;
            _loc18_ += _loc18_;
            _loc9_ = 0;
            while(_loc9_ <= _loc8_ - 1)
            {
               _loc7_ = this.sint[_loc12_];
               if(param2)
               {
                  _loc7_ = -_loc7_;
               }
               _loc6_ = this.sint[_loc14_ - _loc12_];
               if(_loc9_ >= _loc15_)
               {
                  _loc12_ -= _loc16_;
                  _loc6_ = -_loc6_;
               }
               if(_loc9_ < _loc15_)
               {
                  _loc12_ += _loc16_;
               }
               _loc5_ = new Complex(_loc6_,_loc7_);
               _loc19_ = _loc9_;
               while(_loc19_ < this.numPt)
               {
                  _loc10_ = _loc19_;
                  _loc11_ = _loc10_ + _loc8_;
                  _loc4_ = _loc5_.mul(_loc20_[_loc11_]);
                  _loc20_[_loc11_] = _loc20_[_loc10_].sub(_loc4_);
                  _loc20_[_loc10_] = _loc20_[_loc10_].add(_loc4_);
                  _loc19_ += _loc18_;
               }
               _loc9_++;
            }
            _loc15_ = _loc8_;
            _loc16_ = Math.floor(_loc14_ / _loc8_);
         }
         while(_loc8_ < _loc13_);
         if(param2)
         {
            _loc8_ = 0;
            while(_loc8_ < this.numPt)
            {
               _loc20_[_loc8_] = _loc20_[_loc8_].scale(1 / this.numPt);
               _loc8_++;
            }
         }
         if(param3)
         {
            _loc21_ = -1;
            _loc22_ = 0;
            while(_loc22_ < _loc20_.length)
            {
               _loc21_ *= -1;
               _loc20_[_loc22_] = _loc20_[_loc22_].scale(_loc21_);
               _loc22_++;
            }
            rearrangeArray(_loc20_);
            return _loc20_;
         }
         return _loc20_;
      };
FFT1D.prototype.powerSpectrum1D=function powerSpectrum1D(param1, param2) 
      {
         var _loc3_ = this.FFTransform1D(param1,false,param2);
         var _loc4_ = Math.trunc(_loc3_.length);
         var _loc5_ = new Array(_loc4_);
         var _loc6_ = 0;
         while(_loc6_ < _loc4_)
         {
            _loc5_[_loc6_] = _loc3_[_loc6_].norm() * _loc4_;
            _loc6_++;
         }
         return _loc5_;
      };FFT1D.rearrangeArray=rearrangeArray;return FFT1D;})();
const c={};Object.defineProperty(c,"numPt",{get(){return this.__numPt??0;},set(v){this.__numPt=(v|0);}});Object.defineProperty(c,"Time",{get(){return this.__Time??0;},set(v){this.__Time=(v|0);}});Object.defineProperty(c,"potentialType",{get(){return this.__potentialType??0;},set(v){this.__potentialType=(v|0);}});Object.defineProperty(c,"potentialCenter",{get(){return this.__potentialCenter??0;},set(v){this.__potentialCenter=(v|0);}});Object.defineProperty(c,"potentialHeight",{get(){return this.__potentialHeight??0;},set(v){this.__potentialHeight=(v|0);}});Object.defineProperty(c,"potentialWidth",{get(){return this.__potentialWidth??0;},set(v){this.__potentialWidth=(v|0);}});Object.defineProperty(c,"xLeft",{get(){return this.__xLeft??0;},set(v){this.__xLeft=(v|0);}});Object.defineProperty(c,"n_QM_number",{get(){return this.__n_QM_number??0;},set(v){this.__n_QM_number=(v>>>0);}});Object.defineProperty(c,"i",{get(){return this.__i??0;},set(v){this.__i=(v|0);}});c.numPt=511;c.epsilon=0.005;c.lambda=2;c.deltaT=0.000025;c.deltaK=2.4591723315771374;c.L=2.56;c.Time=0;c.potentialType=0;c.potentialCenter=256;c.potentialHeight=0;c.potentialWidth=100;c.xLeft=9;c.i=1;c.i=0;for(const [k,v]of Object.entries(p))c[k]=typeof v==="boolean"?{isChecked:v}:k==="potentialCmb"?{selIndex:v}:{value:v};
for(const k of ["timeStr","timeStepStr","periodTxt","omegaTxt","momentumTxt","omeganTxt"])c[k]={text:""};for(const k of ["canvas","canvas_Potential","canvas_State","canvas_StateGrid","canvas_PotentialBackground"])c[k]={graphics:graph()};c.aniTimer={reset:noop,stop:noop};c.startBtn={isON:false};c.psi=new Array(c.numPt);c.psi2=new Array(2*(c.numPt+1));c.Tji=new Array(c.numPt+1).fill(0);c.v=new Array(c.numPt);c.drawWave=c.init2DWave=c.draw2DWave=c.drawPotential=c.resetAni=noop;c.reset=function reset() 
      {
         this.isTmnCalculated = false;
         this.potentialCenter = this.slider2.value;
         this.potentialHeight = this.slider3.value;
         this.potentialWidth = this.slider4.value;
         this.n_QM_number = this.slider1.value;
         var _loc1_ = this.n_QM_number * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            this.psi[_loc2_] = Complex.polar(this.waveFtnBasis(this.n_QM_number,_loc2_),0);
            _loc2_++;
         }
         this.v = Potential1D.getU(this.numPt,this.potentialType,this.potentialCenter,this.potentialHeight,this.potentialWidth);
         this.quantum1D.setPotential(this.v);
         var _loc3_ = _loc1_ * _loc1_;
         Potential1D.DrawFtn(this.canvas_Potential,new Rectangle(this.xLeft,5,this.numPt + 1,80),this.v,_loc3_,true);
         this.Time = 0;
         this.timeStepStr.text = "0";
         this.timeStr.text = "0";
         this.calcTji();
         this.calcAndDrawState();
         this.drawWave();
      }.bind(c);
c.run=function run() 
      {
         this.Time += 1;
         this.timeStepStr.text = "" + this.Time;
         var _loc1_ = this.Time * this.deltaT;
         this.timeStr.text = "" + _loc1_.toFixed(6);
         this.quantum1D.calcNext(this.psi);
         if(this.Time >= 100000)
         {
            this.resetAni();
            this.Time = 0;
            return;
         }
         this.calcAndDrawState();
         this.drawWave(-1);
      }.bind(c);
c.waveFtnBasis=function waveFtnBasis(param1, param2) 
      {param1=(param1>>>0);
         var _loc3_ = param1 * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc4_ = this.epsilon * (param2 + 1);
         return Math.sqrt(2 / this.L) * Math.sin(_loc3_ * _loc4_);
      }.bind(c);
c.calcTji=function calcTji() 
      {
         var _loc3_ = 0;
         this.Tji[0] = 0;
         var _loc1_ = this.n_QM_number * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc2_ = 1;
         while(_loc2_ <= this.numPt)
         {
            this.Tji[_loc2_] = 0;
            _loc3_ = 0;
            while(_loc3_ < this.numPt)
            {
               this.Tji[_loc2_] += this.waveFtnBasis(_loc2_,_loc3_) * this.v[_loc3_] * this.waveFtnBasis(this.n_QM_number,_loc3_);
               _loc3_++;
            }
            this.Tji[_loc2_] *= this.epsilon;
            _loc2_++;
         }
      }.bind(c);
c.calcAndDrawState=function calcAndDrawState() 
      {
         var _loc5_ = null;
         var _loc6_ = null;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = 0;
         var _loc1_ = 155 * Math.pow(2,this.slider5.value - 1);
         this.psi2[0] = new Complex(0);
         this.psi2[this.numPt + 1] = new Complex(0);
         var _loc2_ = 1;
         while(_loc2_ <= this.numPt)
         {
            _loc5_ = this.psi[_loc2_ - 1];
            this.psi2[this.numPt + 1 - _loc2_] = _loc5_.neg();
            this.psi2[this.numPt + 1 + _loc2_] = _loc5_;
            _loc2_++;
         }
         this.momentumPsi = this.fft.FFTransform1D(this.psi2,false,true);
         var _loc3_ = this.canvas_State.graphics;
         _loc3_.clear();
         var _loc4_ = -Math.sqrt(this.L / 2) / (this.numPt + 1);
         _loc2_ = 1;
         while(_loc2_ <= 110)
         {
            _loc6_ = this.momentumPsi[512 + _loc2_].mul(new Complex(0,_loc4_));
            _loc7_ = _loc2_ * Math.PI / (this.epsilon * (this.numPt + 1));
            _loc6_ = _loc6_.mul(Complex.polar(1,_loc7_ * _loc7_ * this.Time * this.deltaT));
            _loc8_ = _loc1_ * _loc6_.abs();
            _loc8_ = Math.min(_loc8_,155);
            _loc9_ = ComplexSprite.getColorMap(_loc6_,Number.MAX_VALUE);
            _loc3_.lineStyle(4,_loc9_,1,false,LineScaleMode.NORMAL,CapsStyle.NONE);
            _loc3_.moveTo(this.xLeft + 5 * _loc2_,395);
            _loc3_.lineTo(this.xLeft + 5 * _loc2_,395 - _loc8_);
            _loc2_++;
         }
      }.bind(c);
c.calc1stPertubation=function calc1stPertubation(param1, param2) 
      {param1=(param1>>>0);
         var _loc3_ = null;
         var _loc6_ = NaN;
         var _loc7_ = null;
         var _loc4_ = this.n_QM_number * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc5_ = param1 * Math.PI / (this.epsilon * (this.numPt + 1));
         if(param1 == this.n_QM_number)
         {
            _loc3_ = new Complex(1,-param2 * this.Tji[param1]);
         }
         else
         {
            _loc6_ = _loc5_ * _loc5_ - _loc4_ * _loc4_;
            _loc7_ = Complex.polar(1,_loc6_ * param2);
            _loc3_ = _loc7_.sub(new Complex(1)).scale(-this.Tji[param1] / _loc6_);
         }
         return _loc3_;
      }.bind(c);
c.calcTransitionMatrix=function calcTransitionMatrix() 
      {
         var _loc1_ = 0;
         var _loc2_ = 0;
         var _loc3_ = 0;
         if(this.isTmnCalculated)
         {
            return;
         }
         _loc1_ = 0;
         while(_loc1_ < this.Tmn.length)
         {
            _loc2_ = 0;
            while(_loc2_ < this.Tmn[_loc1_].length)
            {
               if(_loc1_ == 0 || _loc2_ == 0)
               {
                  this.Tmn[_loc1_][_loc2_] = 0;
               }
               else
               {
                  this.Tmn[_loc1_][_loc2_] = 0;
                  _loc3_ = 0;
                  while(_loc3_ < this.numPt)
                  {
                     this.Tmn[_loc1_][_loc2_] += this.waveFtnBasis(_loc1_,_loc3_) * this.v[_loc3_] * this.waveFtnBasis(_loc2_,_loc3_);
                     _loc3_++;
                  }
                  this.Tmn[_loc1_][_loc2_] *= this.epsilon;
               }
               _loc2_++;
            }
            _loc1_++;
         }
         this.isTmnCalculated = true;
      }.bind(c);
c.calc2ndPertubation=function calc2ndPertubation(param1, param2) 
      {param1=(param1>>>0);
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = null;
         var _loc12_ = null;
         var _loc13_ = null;
         var _loc3_ = new Complex(0,0);
         var _loc4_ = this.n_QM_number * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc5_ = param1 * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc6_ = _loc5_ * _loc5_ - _loc4_ * _loc4_;
         var _loc7_ = this.ew(_loc6_,param2);
         var _loc8_ = 0;
         while(_loc8_ < this.Tmn.length)
         {
            _loc9_ = _loc8_ * Math.PI / (this.epsilon * (this.numPt + 1));
            _loc10_ = _loc5_ * _loc5_ - _loc9_ * _loc9_;
            if(this.n_QM_number == _loc8_)
            {
               if(param1 == _loc8_)
               {
                  _loc11_ = new Complex(param2 * param2 / 2);
               }
               else
               {
                  _loc13_ = Complex.polar(1,_loc10_ * param2);
                  _loc11_ = _loc13_.mul(new Complex(1 / _loc10_ / _loc10_,-param2 / _loc10_));
                  _loc11_ = _loc11_.sub(new Complex(1 / (_loc10_ * _loc10_)));
               }
            }
            else
            {
               _loc11_ = _loc7_.sub(this.ew(_loc10_,param2)).scale(-1 / (_loc9_ * _loc9_ - _loc4_ * _loc4_));
            }
            _loc12_ = _loc11_.scale(-this.Tmn[param1][_loc8_] * this.Tmn[_loc8_][this.n_QM_number]);
            _loc3_ = _loc3_.add(_loc12_);
            _loc8_++;
         }
         return _loc3_;
      }.bind(c);
c.ew=function ew(param1, param2) 
      {
         var _loc3_ = null;
         if(param1 == 0)
         {
            return new Complex(0,param2);
         }
         var _loc4_ = Complex.polar(1,param1 * param2);
         return _loc4_.sub(new Complex(1)).scale(1 / param1);
      }.bind(c);
c.quantum1D=new Quantum1D(c.numPt,c.epsilon,c.lambda);c.fft=new FFT1D(2*(c.numPt+1));Potential1D.DrawFtn=noop;c.reset();return c;};
dynamicsFactories["flash-df3437d7b74fef0e"]=(p,random=Math.random)=>{const Math=Object.create(globalThis.Math);Math.random=random;let Complex;Complex=(function(){const TWO_PI=2*Math.PI;function Complex(... rest)
      {this.re=undefined;this.im=undefined;
         
         this.re = Number.NaN;
         this.im = Number.NaN;
         switch(rest.length)
         {
            case 0:
               this.re = Number(0);
               this.im = Number(0);
               break;
            case 1:
               if(rest[0] instanceof Complex)
               {
                  this.re = Number(rest[0].re);
                  this.im = Number(rest[0].im);
               }
               else if(typeof rest[0] === "number")
               {
                  this.re = Number(rest[0]);
                  this.im = Number(0);
               }
               else if(rest[0] instanceof XML)
               {
                  this.re = this.fromXML(rest[0]).re;
                  this.im = this.fromXML(rest[0]).im;
               }
               else if(typeof rest[0] === "string")
               {
                  this.re = this.fromString(rest[0]).re;
                  this.im = this.fromString(rest[0]).im;
               }
               break;
            case 2:
               this.re = Number(rest[0]);
               this.im = Number(rest[1]);
         }
      }
function real(param1) 
      {
         return new Complex(param1,0);
      }
function cart(param1, param2) 
      {
         return new Complex(param1,param2);
      }
function polar(param1, param2) 
      {
         if(param1 < 0)
         {
            param2 += Math.PI;
            param1 = -param1;
         }
         param2 %= TWO_PI;
         return cart(param1 * Math.cos(param2),param1 * Math.sin(param2));
      }
function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      }
function absPrivate(param1, param2) 
      {
         var _loc5_ = NaN;
         var _loc3_ = Math.abs(param1);
         var _loc4_ = Math.abs(param2);
         if(_loc3_ == 0 && _loc4_ == 0)
         {
            return 0;
         }
         if(_loc3_ >= _loc4_)
         {
            _loc5_ = param2 / param1;
            return _loc3_ * Math.sqrt(1 + _loc5_ * _loc5_);
         }
         _loc5_ = param1 / param2;
         return _loc4_ * Math.sqrt(1 + _loc5_ * _loc5_);
      }
function inv(param1) 
      {
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         if(Math.abs(param1.re) >= Math.abs(param1.im))
         {
            _loc2_ = 1 / (param1.re + param1.im * (param1.im / param1.re));
            _loc3_ = _loc2_ * (-param1.im / param1.re);
         }
         else
         {
            _loc4_ = 1 / (param1.re * (param1.re / param1.im) + param1.im);
            _loc2_ = _loc4_ * (param1.re / param1.im);
            _loc3_ = -_loc4_;
         }
         param1.re = _loc2_;
         param1.im = _loc3_;
      }
function divPrivate(param1, param2, param3) 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         if(Math.abs(param2) >= Math.abs(param3))
         {
            _loc6_ = 1 / (param2 + param3 * (param3 / param2));
            _loc4_ = _loc6_ * (param1.re + param1.im * (param3 / param2));
            _loc5_ = _loc6_ * (param1.im - param1.re * (param3 / param2));
         }
         else
         {
            _loc6_ = 1 / (param2 * (param2 / param3) + param3);
            _loc4_ = _loc6_ * (param1.re * (param2 / param3) + param1.im);
            _loc5_ = _loc6_ * (param1.im * (param2 / param3) - param1.re);
         }
         param1.re = _loc4_;
         param1.im = _loc5_;
      }
function sqrtPrivate(param1) 
      {
         var _loc5_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = 0;
         var _loc4_ = param1.abs();
         if(_loc4_ > 0)
         {
            if(param1.re > 0)
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ + param1.re));
               param1.re = _loc5_;
               param1.im = 0.5 * param1.im / _loc5_;
            }
            else
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ - param1.re));
               if(param1.im < 0)
               {
                  _loc5_ = -_loc5_;
               }
               param1.re = 0.5 * param1.im / _loc5_;
               param1.im = _loc5_;
            }
         }
         else
         {
            param1.re = 0;
            param1.im = 0;
         }
      }
Complex.prototype.isInfinite=function isInfinite() 
      {
         return !isFinite(this.re) || !isFinite(this.im);
      };
Complex.prototype.isNaC=function isNaC() 
      {
         return isNaN(this.re) || isNaN(this.im);
      };
Complex.prototype.equals=function equals(param1, param2) 
      {
         return absPrivate(this.re - param1.re,this.im - param1.im) <= Math.abs(param2);
      };
Complex.prototype.getRe=function getRe() 
      {
         return this.re;
      };
Complex.prototype.getIm=function getIm() 
      {
         return this.im;
      };
Complex.prototype.norm=function norm() 
      {
         return this.re * this.re + this.im * this.im;
      };
Complex.prototype.abs=function abs() 
      {
         return absPrivate(this.re,this.im);
      };
Complex.prototype.arg=function arg() 
      {
         return Math.atan2(this.im,this.re);
      };
Complex.prototype.neg=function neg() 
      {
         return this.scale(-1);
      };
Complex.prototype.conj=function conj() 
      {
         return cart(this.re,-this.im);
      };
Complex.prototype.scale=function scale(param1) 
      {
         return cart(param1 * this.re,param1 * this.im);
      };
Complex.prototype.add=function add(param1) 
      {
         return cart(this.re + param1.re,this.im + param1.im);
      };
Complex.prototype.sub=function sub(param1) 
      {
         return cart(this.re - param1.re,this.im - param1.im);
      };
Complex.prototype.mul=function mul(param1) 
      {
         return cart(this.re * param1.re - this.im * param1.im,this.re * param1.im + this.im * param1.re);
      };
Complex.prototype.div=function div(param1) 
      {
         var _loc2_ = new Complex(this);
         divPrivate(_loc2_,param1.re,param1.im);
         return _loc2_;
      };
Complex.prototype.sqrt=function sqrt() 
      {
         var _loc1_ = new Complex(this);
         sqrtPrivate(_loc1_);
         return _loc1_;
      };
Complex.prototype.pow=function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      };
Complex.prototype.exp=function exp() 
      {
         var _loc1_ = Math.exp(this.re);
         return cart(_loc1_ * Math.cos(this.im),_loc1_ * Math.sin(this.im));
      };
Complex.prototype.log=function log() 
      {
         return cart(Math.log(this.abs()),this.arg());
      };
Complex.prototype.sin=function sin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         return cart(0.5 * _loc6_,-0.5 * _loc5_);
      };
Complex.prototype.cos=function cos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         return cart(0.5 * _loc5_,0.5 * _loc6_);
      };
Complex.prototype.tan=function tan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc1_ = cart(0.5 * _loc10_,-0.5 * _loc9_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc11_ = 0.5 * _loc9_;
         _loc12_ = 0.5 * _loc10_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.cosec=function cosec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         _loc1_ = cart(0.5 * _loc6_,-0.5 * _loc5_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.sec=function sec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         _loc1_ = cart(0.5 * _loc5_,0.5 * _loc6_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.cot=function cot() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc1_ = cart(0.5 * _loc9_,0.5 * _loc10_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc11_ = 0.5 * _loc10_;
         _loc12_ = -0.5 * _loc9_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.sinh=function sinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ -= _loc5_;
         _loc4_ -= _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.cosh=function cosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ += _loc5_;
         _loc4_ += _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.tanh=function tanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc7_ = _loc3_ - _loc5_;
         _loc8_ = _loc4_ - _loc6_;
         _loc1_ = cart(0.5 * _loc7_,0.5 * _loc8_);
         _loc7_ = _loc3_ + _loc5_;
         _loc8_ = _loc4_ + _loc6_;
         _loc9_ = 0.5 * _loc7_;
         _loc10_ = 0.5 * _loc8_;
         divPrivate(_loc1_,_loc9_,_loc10_);
         return _loc1_;
      };
Complex.prototype.asin=function asin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -this.im;
         _loc3_ = this.re;
         _loc1_.re = _loc2_ + _loc1_.re;
         _loc1_.im = _loc3_ + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.acos=function acos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -_loc1_.im;
         _loc3_ = _loc1_.re;
         _loc1_.re = this.re + _loc2_;
         _loc1_.im = this.im + _loc3_;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.atan=function atan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(-this.re,1 - this.im);
         _loc2_ = this.re;
         _loc3_ = 1 + this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc3_;
         _loc1_.im = -0.5 * _loc2_;
         return _loc1_;
      };
Complex.prototype.asinh=function asinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im + 1;
         _loc3_ = this.re * this.im + this.im * this.re + 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.acosh=function acosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im - 1;
         _loc3_ = this.re * this.im + this.im * this.re - 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.atanh=function atanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(1 + this.re,this.im);
         _loc2_ = 1 - this.re;
         _loc3_ = -this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc2_;
         _loc1_.im = 0.5 * _loc3_;
         return _loc1_;
      };Complex.real=real;Complex.cart=cart;Complex.polar=polar;Complex.pow=pow;Complex.absPrivate=absPrivate;Complex.inv=inv;Complex.divPrivate=divPrivate;Complex.sqrtPrivate=sqrtPrivate;Complex.NaC=new Complex(Number.NaN,Number.NaN);Complex.i=new Complex(0,1);return Complex;})();
let Potential1D;Potential1D=(function(){const TWO_PI=2*Math.PI;function Potential1D()
      {
         
      }
function getU(param1, param2 = 4, param3 = 256, param4 = 10000, param5 = 500) 
      {param1=Math.trunc(param1);param2=Math.trunc(param2);param3=Math.trunc(param3);param4=Math.trunc(param4);param5=Math.trunc(param5);
         var _loc7_ = 0;
         var _loc8_ = NaN;
         var _loc11_ = 0;
         var _loc6_ = new Array(param1);
         _loc7_ = 0;
         while(_loc7_ < param1)
         {
            _loc6_[_loc7_] = 0;
            _loc7_++;
         }
         var _loc9_ = param3 - param5 / 2;
         if(_loc9_ < 0)
         {
            _loc9_ = 0;
         }
         var _loc10_ = param3 + param5 / 2;
         if(_loc10_ > param1)
         {
            _loc10_ = param1;
         }
         switch(param2)
         {
            case 0:
               _loc7_ = _loc9_;
               while(_loc7_ < _loc10_)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 1:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  if(_loc7_ < _loc9_ || _loc7_ > _loc10_)
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
               break;
            case 2:
               _loc7_ = param3;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 3:
               break;
            case 4:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 5:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / Math.abs(param3 - 1);
               }
               else
               {
                  _loc8_ = 1 * param4 / Math.abs(param1 - param3);
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * Math.abs(_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 6:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3 * param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3) * (param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 7:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc11_ = Math.abs(_loc7_ - param1 / 2) + param5 / 2;
                  if(_loc11_ / param5 / 2 * 2 == _loc11_ / param5)
                  {
                     _loc6_[_loc7_] = 0;
                  }
                  else
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
         }
         return _loc6_;
      }Potential1D.getU=getU;return Potential1D;})();
let Quantum1D;Quantum1D=(function(){const TWO_PI=2*Math.PI;function Quantum1D(param1, param2, param3, param4 = null)
      {this.numPt=undefined;this.epsilon=undefined;this.lambda=undefined;this.iLambda=undefined;this.v=undefined;this.a=undefined;this.b=undefined;param1=Math.trunc(param1);
         
         this.numPt = param1;
         this.epsilon = param2;
         this.lambda = param3;
         this.a = new Array(param1);
         this.b = new Array(param1);
         this.iLambda = new Complex(0,param3);
         if(param4 != null)
         {
            this.setPotential(param4);
         }
      }
Quantum1D.prototype.setPotential=function setPotential(param1) 
      {
         this.v = param1;
         this.calcLU();
      };
Quantum1D.prototype.calcLU=function calcLU() 
      {
         var _loc2_ = 0;
         var _loc1_ = new Array(this.numPt);
         _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc1_[_loc2_] = Complex.cart(-2 - this.epsilon * this.epsilon * this.v[_loc2_],this.lambda);
            _loc2_++;
         }
         this.a[0] = new Complex(_loc1_[0]);
         var _loc3_ = new Complex(1,0);
         _loc2_ = 1;
         while(_loc2_ < this.numPt)
         {
            this.a[_loc2_] = _loc1_[_loc2_].sub(_loc3_.div(this.a[_loc2_ - 1]));
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numPt - 1)
         {
            this.b[_loc2_] = _loc3_.div(this.a[_loc2_]);
            _loc2_++;
         }
      };
Quantum1D.prototype.calcNext=function calcNext(param1) 
      {
         var _loc2_ = new Array(this.numPt);
         var _loc3_ = 0;
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = Math.trunc(this.numPt - 1);
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = 1;
         while(_loc3_ < this.numPt - 1)
         {
            _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
            _loc3_++;
         }
         var _loc4_ = new Array(this.numPt);
         _loc4_[0] = _loc2_[0].div(this.a[0]);
         _loc3_ = 1;
         while(_loc3_ < this.numPt)
         {
            _loc4_[_loc3_] = _loc2_[_loc3_].sub(_loc4_[_loc3_ - 1]).div(this.a[_loc3_]);
            _loc3_++;
         }
         param1[this.numPt - 1] = new Complex(_loc4_[this.numPt - 1]);
         _loc3_ = Math.trunc(this.numPt - 2);
         while(_loc3_ >= 0)
         {
            param1[_loc3_] = _loc4_[_loc3_].sub(this.b[_loc3_].mul(param1[_loc3_ + 1]));
            _loc3_--;
         }
      };return Quantum1D;})();
let FFT1D;FFT1D=(function(){const TWO_PI=2*Math.PI;function FFT1D(param1)
      {this.numPt=undefined;this.sint=undefined;param1=Math.trunc(param1);
         
         var _loc2_ = param1;
         var _loc3_ = 1;
         do
         {
            _loc2_ = Math.floor(_loc2_ / 2);
            _loc3_ *= 2;
         }
         while(_loc2_ > 1);
         if(_loc3_ != param1)
         {
            throw new ArgumentError("numData is not 2^N !");
         }
         this.numPt = param1;
         var _loc4_ = Math.floor(this.numPt / 4) + 1;
         this.sint = new Array(_loc4_);
         _loc2_ = 0;
         while(_loc2_ < _loc4_)
         {
            this.sint[_loc2_] = Math.sin(_loc2_ * 2 * Math.PI / this.numPt);
            _loc2_++;
         }
      }
function rearrangeArray(param1) 
      {
         var _loc3_ = 0;
         var _loc4_ = null;
         var _loc2_ = 0;
         while(_loc2_ < Math.floor(param1.length / 2))
         {
            _loc3_ = _loc2_ + Math.floor(param1.length / 2);
            _loc4_ = param1[_loc2_];
            param1[_loc2_] = param1[_loc3_];
            param1[_loc3_] = _loc4_;
            _loc2_++;
         }
      }
FFT1D.prototype.FFTransform1D=function FFTransform1D(param1, param2, param3) 
      {
         var _loc4_ = null;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = 0;
         var _loc9_ = 0;
         var _loc10_ = 0;
         var _loc11_ = 0;
         var _loc12_ = 0;
         var _loc13_ = 0;
         var _loc14_ = 0;
         var _loc15_ = 0;
         var _loc16_ = 0;
         var _loc17_ = 0;
         var _loc18_ = 0;
         var _loc19_ = 0;
         var _loc21_ = 0;
         var _loc22_ = 0;
         if(param1.length != this.numPt)
         {
            throw new ArgumentError("numer of Data is not numPt !");
         }
         _loc14_ = Math.floor(this.numPt / 4);
         _loc13_ = _loc14_ + _loc14_;
         var _loc20_ = new Array(this.numPt);
         _loc8_ = 0;
         while(_loc8_ < this.numPt)
         {
            _loc20_[_loc8_] = new Complex(param1[_loc8_]);
            _loc8_++;
         }
         _loc9_ = 0;
         _loc8_ = 0;
         while(_loc8_ < this.numPt - 2)
         {
            if(_loc9_ > _loc8_)
            {
               _loc4_ = new Complex(_loc20_[_loc9_]);
               _loc20_[_loc9_] = new Complex(_loc20_[_loc8_]);
               _loc20_[_loc8_] = new Complex(_loc4_);
            }
            _loc10_ = _loc13_;
            while(_loc9_ >= _loc10_)
            {
               _loc9_ -= _loc10_;
               _loc10_ = Math.floor(_loc10_ / 2);
            }
            _loc9_ += _loc10_;
            _loc8_++;
         }
         _loc18_ = 1;
         _loc15_ = 1;
         _loc12_ = 0;
         _loc16_ = 0;
         do
         {
            _loc8_ = _loc18_;
            _loc18_ += _loc18_;
            _loc9_ = 0;
            while(_loc9_ <= _loc8_ - 1)
            {
               _loc7_ = this.sint[_loc12_];
               if(param2)
               {
                  _loc7_ = -_loc7_;
               }
               _loc6_ = this.sint[_loc14_ - _loc12_];
               if(_loc9_ >= _loc15_)
               {
                  _loc12_ -= _loc16_;
                  _loc6_ = -_loc6_;
               }
               if(_loc9_ < _loc15_)
               {
                  _loc12_ += _loc16_;
               }
               _loc5_ = new Complex(_loc6_,_loc7_);
               _loc19_ = _loc9_;
               while(_loc19_ < this.numPt)
               {
                  _loc10_ = _loc19_;
                  _loc11_ = _loc10_ + _loc8_;
                  _loc4_ = _loc5_.mul(_loc20_[_loc11_]);
                  _loc20_[_loc11_] = _loc20_[_loc10_].sub(_loc4_);
                  _loc20_[_loc10_] = _loc20_[_loc10_].add(_loc4_);
                  _loc19_ += _loc18_;
               }
               _loc9_++;
            }
            _loc15_ = _loc8_;
            _loc16_ = Math.floor(_loc14_ / _loc8_);
         }
         while(_loc8_ < _loc13_);
         if(param2)
         {
            _loc8_ = 0;
            while(_loc8_ < this.numPt)
            {
               _loc20_[_loc8_] = _loc20_[_loc8_].scale(1 / this.numPt);
               _loc8_++;
            }
         }
         if(param3)
         {
            _loc21_ = -1;
            _loc22_ = 0;
            while(_loc22_ < _loc20_.length)
            {
               _loc21_ *= -1;
               _loc20_[_loc22_] = _loc20_[_loc22_].scale(_loc21_);
               _loc22_++;
            }
            rearrangeArray(_loc20_);
            return _loc20_;
         }
         return _loc20_;
      };
FFT1D.prototype.powerSpectrum1D=function powerSpectrum1D(param1, param2) 
      {
         var _loc3_ = this.FFTransform1D(param1,false,param2);
         var _loc4_ = Math.trunc(_loc3_.length);
         var _loc5_ = new Array(_loc4_);
         var _loc6_ = 0;
         while(_loc6_ < _loc4_)
         {
            _loc5_[_loc6_] = _loc3_[_loc6_].norm() * _loc4_;
            _loc6_++;
         }
         return _loc5_;
      };FFT1D.rearrangeArray=rearrangeArray;return FFT1D;})();
const c={};Object.defineProperty(c,"numPt",{get(){return this.__numPt??0;},set(v){this.__numPt=(v|0);}});Object.defineProperty(c,"Time",{get(){return this.__Time??0;},set(v){this.__Time=(v|0);}});Object.defineProperty(c,"potentialType",{get(){return this.__potentialType??0;},set(v){this.__potentialType=(v|0);}});Object.defineProperty(c,"potentialCenter",{get(){return this.__potentialCenter??0;},set(v){this.__potentialCenter=(v|0);}});Object.defineProperty(c,"potentialHeight",{get(){return this.__potentialHeight??0;},set(v){this.__potentialHeight=(v|0);}});Object.defineProperty(c,"potentialWidth",{get(){return this.__potentialWidth??0;},set(v){this.__potentialWidth=(v|0);}});Object.defineProperty(c,"xLeft",{get(){return this.__xLeft??0;},set(v){this.__xLeft=(v|0);}});Object.defineProperty(c,"numTMax",{get(){return this.__numTMax??0;},set(v){this.__numTMax=(v>>>0);}});Object.defineProperty(c,"numT",{get(){return this.__numT??0;},set(v){this.__numT=(v>>>0);}});Object.defineProperty(c,"vCount",{get(){return this.__vCount??0;},set(v){this.__vCount=(v>>>0);}});Object.defineProperty(c,"st",{get(){return this.__st??0;},set(v){this.__st=(v|0);}});Object.defineProperty(c,"ed",{get(){return this.__ed??0;},set(v){this.__ed=(v|0);}});Object.defineProperty(c,"n_QM_number",{get(){return this.__n_QM_number??0;},set(v){this.__n_QM_number=(v>>>0);}});Object.defineProperty(c,"i",{get(){return this.__i??0;},set(v){this.__i=(v|0);}});c.numPt=511;c.epsilon=0.005;c.lambda=2;c.deltaT=0.000025;c.deltaK=2.4591723315771374;c.L=2.56;c.Time=0;c.potentialType=0;c.potentialCenter=256;c.potentialHeight=0;c.potentialWidth=100;c.xLeft=4;c.numTMax=120;c.numT=100;c.vCount=0;c.i=1;c.i=0;for(const [k,v]of Object.entries(p))c[k]=typeof v==="boolean"?{isChecked:v}:k==="potentialCmb"?{selIndex:v}:{value:v};
for(const k of ["timeStr","timeStepStr","periodTxt","omegaTxt","momentumTxt","omeganTxt"])c[k]={text:""};for(const k of ["canvas","canvas_Potential","canvas_State","canvas_StateGrid","canvas_PotentialBackground"])c[k]={graphics:graph()};c.aniTimer={reset:noop,stop:noop};c.startBtn={isON:false};c.psi=new Array(c.numPt);c.psi2=new Array(2*(c.numPt+1));c.Tji=new Array(c.numPt+1).fill(0);c.v=new Array(c.numPt);c.drawWave=c.init2DWave=c.draw2DWave=c.drawPotential=c.resetAni=noop;c.reset=function reset() 
      {
         var _loc5_ = NaN;
         this.isTmnCalculated = false;
         this.potentialCenter = this.slider2.value;
         this.potentialHeight = this.slider3.value;
         this.potentialWidth = this.slider4.value;
         this.numT = this.slider5.value;
         this.omega = 2 * Math.PI / (this.numT * this.deltaT);
         this.n_QM_number = this.slider1.value;
         var _loc1_ = this.n_QM_number * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            this.psi[_loc2_] = Complex.polar(this.waveFtnBasis(this.n_QM_number,_loc2_),0);
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numT / 2 + 1)
         {
            _loc5_ = Math.cos(2 * Math.PI * _loc2_ / this.numT);
            this.v[_loc2_] = Potential1D.getU(this.numPt,this.potentialType,this.potentialCenter,_loc5_ * this.potentialHeight,this.potentialWidth);
            this.quantum1D[_loc2_].setPotential(this.v[_loc2_]);
            _loc2_++;
         }
         this.periodTxt.text = "" + Math.round(this.numT * this.deltaT * 100000) / 100000;
         this.omegaTxt.text = "" + Math.round(this.omega * 100) / 100;
         this.momentumTxt.text = "" + Math.round(_loc1_ * 100) / 100;
         this.omeganTxt.text = "" + Math.round(_loc1_ * _loc1_ * 100) / 100;
         this.st = this.potentialCenter - this.potentialWidth / 2;
         if(this.st < 0)
         {
            this.st = 0;
         }
         this.ed = this.potentialCenter + this.potentialWidth / 2;
         if(this.ed > this.numPt)
         {
            this.ed = this.numPt;
         }
         var _loc3_ = _loc1_ * _loc1_;
         var _loc4_ = this.canvas_PotentialBackground.graphics;
         _loc4_.clear();
         _loc4_.lineStyle(1,8421504,1);
         _loc4_.moveTo(this.xLeft,5);
         _loc4_.lineTo(this.xLeft,105);
         _loc4_.lineTo(this.xLeft + this.numPt + 1,105);
         _loc4_.lineTo(this.xLeft + this.numPt + 1,5);
         _loc4_.lineTo(this.xLeft,5);
         _loc4_.moveTo(this.xLeft,55);
         _loc4_.lineTo(this.xLeft + this.numPt + 1,55);
         if(this.potentialHeight > 0 && this.potentialWidth > 0)
         {
            _loc4_.lineStyle(3,16711680,1);
            _loc4_.moveTo(this.xLeft,5);
            _loc4_.lineTo(this.xLeft,55);
            _loc4_.lineTo(this.xLeft + this.st,55);
            _loc4_.moveTo(this.xLeft + this.ed,55);
            _loc4_.lineTo(this.xLeft + this.numPt + 1,55);
            _loc4_.lineTo(this.xLeft + this.numPt + 1,5);
            _loc4_.lineStyle(1,16711935,1);
            _loc4_.moveTo(this.xLeft + this.st,5);
            _loc4_.lineTo(this.xLeft + this.st,105);
            _loc4_.lineTo(this.xLeft + this.ed,105);
            _loc4_.lineTo(this.xLeft + this.ed,5);
            _loc4_.lineTo(this.xLeft + this.st,5);
         }
         else
         {
            _loc4_.lineStyle(3,16711680,1);
            _loc4_.moveTo(this.xLeft,55);
            _loc4_.lineTo(this.xLeft + this.numPt + 1,55);
         }
         this.Time = 0;
         this.timeStepStr.text = "0";
         this.timeStr.text = "0";
         this.vCount = 0;
         this.calcTji();
         this.calcAndDrawState();
         this.drawWave();
         this.drawPotential();
      }.bind(c);
c.run=function run() 
      {
         this.Time += 1;
         this.timeStepStr.text = "" + this.Time;
         var _loc1_ = this.Time * this.deltaT;
         this.timeStr.text = "" + _loc1_.toFixed(6);
         this.quantum1D[this.transCount(this.vCount)].calcNext(this.psi);
         ++this.vCount;
         if(this.vCount >= this.numT)
         {
            this.vCount = 0;
         }
         if(this.Time >= 50001)
         {
            this.resetAni();
            this.Time = 0;
            return;
         }
         this.calcAndDrawState();
         this.drawWave(-1);
         this.drawPotential();
      }.bind(c);
c.waveFtnBasis=function waveFtnBasis(param1, param2) 
      {param1=(param1>>>0);
         var _loc3_ = param1 * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc4_ = this.epsilon * (param2 + 1);
         return Math.sqrt(2 / this.L) * Math.sin(_loc3_ * _loc4_);
      }.bind(c);
c.calcTji=function calcTji() 
      {
         var _loc3_ = 0;
         this.Tji[0] = 0;
         var _loc1_ = this.n_QM_number * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc2_ = 1;
         while(_loc2_ <= this.numPt)
         {
            this.Tji[_loc2_] = 0;
            _loc3_ = 0;
            while(_loc3_ < this.numPt)
            {
               this.Tji[_loc2_] += this.waveFtnBasis(_loc2_,_loc3_) * this.v[0][_loc3_] * this.waveFtnBasis(this.n_QM_number,_loc3_);
               _loc3_++;
            }
            this.Tji[_loc2_] *= this.epsilon;
            _loc2_++;
         }
      }.bind(c);
c.calcAndDrawState=function calcAndDrawState() 
      {
         var _loc5_ = null;
         var _loc6_ = null;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = 0;
         var _loc1_ = 155 * Math.pow(2,this.slider6.value - 1);
         this.psi2[0] = new Complex(0);
         this.psi2[this.numPt + 1] = new Complex(0);
         var _loc2_ = 1;
         while(_loc2_ <= this.numPt)
         {
            _loc5_ = this.psi[_loc2_ - 1];
            this.psi2[this.numPt + 1 - _loc2_] = _loc5_.neg();
            this.psi2[this.numPt + 1 + _loc2_] = _loc5_;
            _loc2_++;
         }
         this.momentumPsi = this.fft.FFTransform1D(this.psi2,false,true);
         var _loc3_ = this.canvas_State.graphics;
         _loc3_.clear();
         var _loc4_ = -Math.sqrt(this.L / 2) / (this.numPt + 1);
         _loc2_ = 1;
         while(_loc2_ < 130)
         {
            _loc6_ = this.momentumPsi[512 + _loc2_].mul(new Complex(0,_loc4_));
            _loc7_ = _loc2_ * Math.PI / (this.epsilon * (this.numPt + 1));
            _loc6_ = _loc6_.mul(Complex.polar(1,_loc7_ * _loc7_ * this.Time * this.deltaT));
            _loc8_ = _loc1_ * _loc6_.abs();
            _loc8_ = Math.min(_loc8_,155);
            _loc9_ = ComplexSprite.getColorMap(_loc6_,Number.MAX_VALUE);
            _loc3_.lineStyle(4,_loc9_,1,false,LineScaleMode.NORMAL,CapsStyle.NONE);
            _loc3_.moveTo(this.xLeft + 5 * _loc2_,395);
            _loc3_.lineTo(this.xLeft + 5 * _loc2_,395 - _loc8_);
            _loc2_++;
         }
      }.bind(c);
c.transCount=function transCount(param1) 
      {param1=(param1>>>0);
         if(param1 <= this.numT / 4)
         {
            return this.numT / 4 - param1;
         }
         if(param1 <= 3 * this.numT / 4)
         {
            return param1 - this.numT / 4;
         }
         return 5 * this.numT / 4 - param1;
      }.bind(c);
c.calc1stPertubation=function calc1stPertubation(param1, param2) 
      {param1=(param1>>>0);
         var _loc3_ = null;
         var _loc4_ = this.n_QM_number * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc5_ = param1 * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc6_ = _loc5_ * _loc5_ - _loc4_ * _loc4_;
         _loc3_ = this.ew(_loc6_ + this.omega,param2).sub(this.ew(_loc6_ - this.omega,param2));
         _loc3_ = _loc3_.div(new Complex(0,-2));
         _loc3_ = _loc3_.scale(this.Tji[param1]);
         if(this.n_QM_number == param1)
         {
            _loc3_ = _loc3_.add(new Complex(1));
         }
         return _loc3_;
      }.bind(c);
c.calcTransitionMatrix=function calcTransitionMatrix() 
      {
         var _loc1_ = 0;
         var _loc2_ = 0;
         var _loc3_ = 0;
         if(this.isTmnCalculated)
         {
            return;
         }
         _loc1_ = 0;
         while(_loc1_ < this.Tmn.length)
         {
            _loc2_ = 0;
            while(_loc2_ < this.Tmn[_loc1_].length)
            {
               if(_loc1_ == 0 || _loc2_ == 0)
               {
                  this.Tmn[_loc1_][_loc2_] = 0;
               }
               else
               {
                  this.Tmn[_loc1_][_loc2_] = 0;
                  _loc3_ = 0;
                  while(_loc3_ < this.numPt)
                  {
                     this.Tmn[_loc1_][_loc2_] += this.waveFtnBasis(_loc1_,_loc3_) * this.v[0][_loc3_] * this.waveFtnBasis(_loc2_,_loc3_);
                     _loc3_++;
                  }
                  this.Tmn[_loc1_][_loc2_] *= this.epsilon;
               }
               _loc2_++;
            }
            _loc1_++;
         }
         this.isTmnCalculated = true;
      }.bind(c);
c.calc2ndPertubation=function calc2ndPertubation(param1, param2) 
      {param1=(param1>>>0);
         var _loc6_ = null;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc3_ = new Complex(0,0);
         var _loc4_ = this.n_QM_number * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc5_ = param1 * Math.PI / (this.epsilon * (this.numPt + 1));
         var _loc7_ = 0;
         while(_loc7_ < this.Tmn.length)
         {
            _loc8_ = _loc7_ * Math.PI / (this.epsilon * (this.numPt + 1));
            _loc9_ = _loc5_ * _loc5_ - _loc8_ * _loc8_;
            _loc10_ = _loc8_ * _loc8_ - _loc4_ * _loc4_;
            _loc6_ = this.ew2(_loc9_ + this.omega,_loc10_ + this.omega,param2);
            _loc6_ = _loc6_.sub(this.ew2(_loc9_ - this.omega,_loc10_ + this.omega,param2));
            _loc6_ = _loc6_.sub(this.ew2(_loc9_ + this.omega,_loc10_ - this.omega,param2));
            _loc6_ = _loc6_.add(this.ew2(_loc9_ - this.omega,_loc10_ - this.omega,param2));
            _loc6_ = _loc6_.scale(this.Tmn[param1][_loc7_] * this.Tmn[_loc7_][this.n_QM_number]);
            _loc3_ = _loc3_.add(_loc6_);
            _loc7_++;
         }
         return _loc3_.scale(0.25);
      }.bind(c);
c.ew=function ew(param1, param2) 
      {
         var _loc3_ = null;
         if(Math.abs(param1) < 1e-10)
         {
            return new Complex(0,param2);
         }
         var _loc4_ = Complex.polar(1,param1 * param2);
         return _loc4_.sub(new Complex(1)).scale(1 / param1);
      }.bind(c);
c.ew2=function ew2(param1, param2, param3) 
      {
         var _loc4_ = null;
         var _loc5_ = null;
         if(Math.abs(param2) > 1e-10)
         {
            _loc4_ = this.ew(param1 + param2,param3).sub(this.ew(param1,param3));
            _loc4_ = _loc4_.scale(-1 / param2);
         }
         else if(Math.abs(param1) > 1e-10)
         {
            _loc5_ = Complex.polar(1,param1 * param3);
            _loc4_ = _loc5_.mul(new Complex(1 / param1 / param1,-param3 / param1));
            _loc4_ = _loc4_.sub(new Complex(-1 / param1 / param1));
         }
         else
         {
            _loc4_ = new Complex(param3 * param3 / 2);
         }
         return _loc4_;
      }.bind(c);
c.quantum1D=Array.from({length:c.numTMax/2+1},()=>new Quantum1D(c.numPt,c.epsilon,c.lambda));c.v=Array.from({length:c.numTMax/2+1},()=>new Array(c.numPt));c.fft=new FFT1D(2*(c.numPt+1));Potential1D.DrawFtn=noop;c.reset();return c;};
dynamicsFactories["flash-d3f7862985c51103"]=(p,random=Math.random)=>{const Math=Object.create(globalThis.Math);Math.random=random;let Complex;Complex=(function(){const TWO_PI=2*Math.PI;function Complex(... rest)
      {this.re=undefined;this.im=undefined;
         
         this.re = Number.NaN;
         this.im = Number.NaN;
         switch(rest.length)
         {
            case 0:
               this.re = Number(0);
               this.im = Number(0);
               break;
            case 1:
               if(rest[0] instanceof Complex)
               {
                  this.re = Number(rest[0].re);
                  this.im = Number(rest[0].im);
               }
               else if(typeof rest[0] === "number")
               {
                  this.re = Number(rest[0]);
                  this.im = Number(0);
               }
               else if(rest[0] instanceof XML)
               {
                  this.re = this.fromXML(rest[0]).re;
                  this.im = this.fromXML(rest[0]).im;
               }
               else if(typeof rest[0] === "string")
               {
                  this.re = this.fromString(rest[0]).re;
                  this.im = this.fromString(rest[0]).im;
               }
               break;
            case 2:
               this.re = Number(rest[0]);
               this.im = Number(rest[1]);
         }
      }
function real(param1) 
      {
         return new Complex(param1,0);
      }
function cart(param1, param2) 
      {
         return new Complex(param1,param2);
      }
function polar(param1, param2) 
      {
         if(param1 < 0)
         {
            param2 += Math.PI;
            param1 = -param1;
         }
         param2 %= TWO_PI;
         return cart(param1 * Math.cos(param2),param1 * Math.sin(param2));
      }
function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      }
function absPrivate(param1, param2) 
      {
         var _loc5_ = NaN;
         var _loc3_ = Math.abs(param1);
         var _loc4_ = Math.abs(param2);
         if(_loc3_ == 0 && _loc4_ == 0)
         {
            return 0;
         }
         if(_loc3_ >= _loc4_)
         {
            _loc5_ = param2 / param1;
            return _loc3_ * Math.sqrt(1 + _loc5_ * _loc5_);
         }
         _loc5_ = param1 / param2;
         return _loc4_ * Math.sqrt(1 + _loc5_ * _loc5_);
      }
function inv(param1) 
      {
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         if(Math.abs(param1.re) >= Math.abs(param1.im))
         {
            _loc2_ = 1 / (param1.re + param1.im * (param1.im / param1.re));
            _loc3_ = _loc2_ * (-param1.im / param1.re);
         }
         else
         {
            _loc4_ = 1 / (param1.re * (param1.re / param1.im) + param1.im);
            _loc2_ = _loc4_ * (param1.re / param1.im);
            _loc3_ = -_loc4_;
         }
         param1.re = _loc2_;
         param1.im = _loc3_;
      }
function divPrivate(param1, param2, param3) 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         if(Math.abs(param2) >= Math.abs(param3))
         {
            _loc6_ = 1 / (param2 + param3 * (param3 / param2));
            _loc4_ = _loc6_ * (param1.re + param1.im * (param3 / param2));
            _loc5_ = _loc6_ * (param1.im - param1.re * (param3 / param2));
         }
         else
         {
            _loc6_ = 1 / (param2 * (param2 / param3) + param3);
            _loc4_ = _loc6_ * (param1.re * (param2 / param3) + param1.im);
            _loc5_ = _loc6_ * (param1.im * (param2 / param3) - param1.re);
         }
         param1.re = _loc4_;
         param1.im = _loc5_;
      }
function sqrtPrivate(param1) 
      {
         var _loc5_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = 0;
         var _loc4_ = param1.abs();
         if(_loc4_ > 0)
         {
            if(param1.re > 0)
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ + param1.re));
               param1.re = _loc5_;
               param1.im = 0.5 * param1.im / _loc5_;
            }
            else
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ - param1.re));
               if(param1.im < 0)
               {
                  _loc5_ = -_loc5_;
               }
               param1.re = 0.5 * param1.im / _loc5_;
               param1.im = _loc5_;
            }
         }
         else
         {
            param1.re = 0;
            param1.im = 0;
         }
      }
Complex.prototype.isInfinite=function isInfinite() 
      {
         return !isFinite(this.re) || !isFinite(this.im);
      };
Complex.prototype.isNaC=function isNaC() 
      {
         return isNaN(this.re) || isNaN(this.im);
      };
Complex.prototype.equals=function equals(param1, param2) 
      {
         return absPrivate(this.re - param1.re,this.im - param1.im) <= Math.abs(param2);
      };
Complex.prototype.getRe=function getRe() 
      {
         return this.re;
      };
Complex.prototype.getIm=function getIm() 
      {
         return this.im;
      };
Complex.prototype.norm=function norm() 
      {
         return this.re * this.re + this.im * this.im;
      };
Complex.prototype.abs=function abs() 
      {
         return absPrivate(this.re,this.im);
      };
Complex.prototype.arg=function arg() 
      {
         return Math.atan2(this.im,this.re);
      };
Complex.prototype.neg=function neg() 
      {
         return this.scale(-1);
      };
Complex.prototype.conj=function conj() 
      {
         return cart(this.re,-this.im);
      };
Complex.prototype.scale=function scale(param1) 
      {
         return cart(param1 * this.re,param1 * this.im);
      };
Complex.prototype.add=function add(param1) 
      {
         return cart(this.re + param1.re,this.im + param1.im);
      };
Complex.prototype.sub=function sub(param1) 
      {
         return cart(this.re - param1.re,this.im - param1.im);
      };
Complex.prototype.mul=function mul(param1) 
      {
         return cart(this.re * param1.re - this.im * param1.im,this.re * param1.im + this.im * param1.re);
      };
Complex.prototype.div=function div(param1) 
      {
         var _loc2_ = new Complex(this);
         divPrivate(_loc2_,param1.re,param1.im);
         return _loc2_;
      };
Complex.prototype.sqrt=function sqrt() 
      {
         var _loc1_ = new Complex(this);
         sqrtPrivate(_loc1_);
         return _loc1_;
      };
Complex.prototype.pow=function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      };
Complex.prototype.exp=function exp() 
      {
         var _loc1_ = Math.exp(this.re);
         return cart(_loc1_ * Math.cos(this.im),_loc1_ * Math.sin(this.im));
      };
Complex.prototype.log=function log() 
      {
         return cart(Math.log(this.abs()),this.arg());
      };
Complex.prototype.sin=function sin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         return cart(0.5 * _loc6_,-0.5 * _loc5_);
      };
Complex.prototype.cos=function cos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         return cart(0.5 * _loc5_,0.5 * _loc6_);
      };
Complex.prototype.tan=function tan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc1_ = cart(0.5 * _loc10_,-0.5 * _loc9_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc11_ = 0.5 * _loc9_;
         _loc12_ = 0.5 * _loc10_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.cosec=function cosec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         _loc1_ = cart(0.5 * _loc6_,-0.5 * _loc5_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.sec=function sec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         _loc1_ = cart(0.5 * _loc5_,0.5 * _loc6_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.cot=function cot() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc1_ = cart(0.5 * _loc9_,0.5 * _loc10_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc11_ = 0.5 * _loc10_;
         _loc12_ = -0.5 * _loc9_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.sinh=function sinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ -= _loc5_;
         _loc4_ -= _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.cosh=function cosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ += _loc5_;
         _loc4_ += _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.tanh=function tanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc7_ = _loc3_ - _loc5_;
         _loc8_ = _loc4_ - _loc6_;
         _loc1_ = cart(0.5 * _loc7_,0.5 * _loc8_);
         _loc7_ = _loc3_ + _loc5_;
         _loc8_ = _loc4_ + _loc6_;
         _loc9_ = 0.5 * _loc7_;
         _loc10_ = 0.5 * _loc8_;
         divPrivate(_loc1_,_loc9_,_loc10_);
         return _loc1_;
      };
Complex.prototype.asin=function asin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -this.im;
         _loc3_ = this.re;
         _loc1_.re = _loc2_ + _loc1_.re;
         _loc1_.im = _loc3_ + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.acos=function acos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -_loc1_.im;
         _loc3_ = _loc1_.re;
         _loc1_.re = this.re + _loc2_;
         _loc1_.im = this.im + _loc3_;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.atan=function atan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(-this.re,1 - this.im);
         _loc2_ = this.re;
         _loc3_ = 1 + this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc3_;
         _loc1_.im = -0.5 * _loc2_;
         return _loc1_;
      };
Complex.prototype.asinh=function asinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im + 1;
         _loc3_ = this.re * this.im + this.im * this.re + 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.acosh=function acosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im - 1;
         _loc3_ = this.re * this.im + this.im * this.re - 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.atanh=function atanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(1 + this.re,this.im);
         _loc2_ = 1 - this.re;
         _loc3_ = -this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc2_;
         _loc1_.im = 0.5 * _loc3_;
         return _loc1_;
      };Complex.real=real;Complex.cart=cart;Complex.polar=polar;Complex.pow=pow;Complex.absPrivate=absPrivate;Complex.inv=inv;Complex.divPrivate=divPrivate;Complex.sqrtPrivate=sqrtPrivate;Complex.NaC=new Complex(Number.NaN,Number.NaN);Complex.i=new Complex(0,1);return Complex;})();
let Potential1D;Potential1D=(function(){const TWO_PI=2*Math.PI;function Potential1D()
      {
         
      }
function getU(param1, param2 = 4, param3 = 256, param4 = 10000, param5 = 500) 
      {param1=Math.trunc(param1);param2=Math.trunc(param2);param3=Math.trunc(param3);param4=Math.trunc(param4);param5=Math.trunc(param5);
         var _loc7_ = 0;
         var _loc8_ = NaN;
         var _loc11_ = 0;
         var _loc6_ = new Array(param1);
         _loc7_ = 0;
         while(_loc7_ < param1)
         {
            _loc6_[_loc7_] = 0;
            _loc7_++;
         }
         var _loc9_ = param3 - param5 / 2;
         if(_loc9_ < 0)
         {
            _loc9_ = 0;
         }
         var _loc10_ = param3 + param5 / 2;
         if(_loc10_ > param1)
         {
            _loc10_ = param1;
         }
         switch(param2)
         {
            case 0:
               _loc7_ = _loc9_;
               while(_loc7_ < _loc10_)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 1:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  if(_loc7_ < _loc9_ || _loc7_ > _loc10_)
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
               break;
            case 2:
               _loc7_ = param3;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 3:
               break;
            case 4:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 5:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / Math.abs(param3 - 1);
               }
               else
               {
                  _loc8_ = 1 * param4 / Math.abs(param1 - param3);
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * Math.abs(_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 6:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3 * param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3) * (param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 7:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc11_ = Math.abs(_loc7_ - param1 / 2) + param5 / 2;
                  if(_loc11_ / param5 / 2 * 2 == _loc11_ / param5)
                  {
                     _loc6_[_loc7_] = 0;
                  }
                  else
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
         }
         return _loc6_;
      }Potential1D.getU=getU;return Potential1D;})();
let Quantum1D;Quantum1D=(function(){const TWO_PI=2*Math.PI;function Quantum1D(param1, param2, param3, param4 = null)
      {this.numPt=undefined;this.epsilon=undefined;this.lambda=undefined;this.iLambda=undefined;this.v=undefined;this.a=undefined;this.b=undefined;param1=Math.trunc(param1);
         
         this.numPt = param1;
         this.epsilon = param2;
         this.lambda = param3;
         this.a = new Array(param1);
         this.b = new Array(param1);
         this.iLambda = new Complex(0,param3);
         if(param4 != null)
         {
            this.setPotential(param4);
         }
      }
Quantum1D.prototype.setPotential=function setPotential(param1) 
      {
         this.v = param1;
         this.calcLU();
      };
Quantum1D.prototype.calcLU=function calcLU() 
      {
         var _loc2_ = 0;
         var _loc1_ = new Array(this.numPt);
         _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc1_[_loc2_] = Complex.cart(-2 - this.epsilon * this.epsilon * this.v[_loc2_],this.lambda);
            _loc2_++;
         }
         this.a[0] = new Complex(_loc1_[0]);
         var _loc3_ = new Complex(1,0);
         _loc2_ = 1;
         while(_loc2_ < this.numPt)
         {
            this.a[_loc2_] = _loc1_[_loc2_].sub(_loc3_.div(this.a[_loc2_ - 1]));
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numPt - 1)
         {
            this.b[_loc2_] = _loc3_.div(this.a[_loc2_]);
            _loc2_++;
         }
      };
Quantum1D.prototype.calcNext=function calcNext(param1) 
      {
         var _loc2_ = new Array(this.numPt);
         var _loc3_ = 0;
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = Math.trunc(this.numPt - 1);
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = 1;
         while(_loc3_ < this.numPt - 1)
         {
            _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
            _loc3_++;
         }
         var _loc4_ = new Array(this.numPt);
         _loc4_[0] = _loc2_[0].div(this.a[0]);
         _loc3_ = 1;
         while(_loc3_ < this.numPt)
         {
            _loc4_[_loc3_] = _loc2_[_loc3_].sub(_loc4_[_loc3_ - 1]).div(this.a[_loc3_]);
            _loc3_++;
         }
         param1[this.numPt - 1] = new Complex(_loc4_[this.numPt - 1]);
         _loc3_ = Math.trunc(this.numPt - 2);
         while(_loc3_ >= 0)
         {
            param1[_loc3_] = _loc4_[_loc3_].sub(this.b[_loc3_].mul(param1[_loc3_ + 1]));
            _loc3_--;
         }
      };return Quantum1D;})();
const c={};Object.defineProperty(c,"numPt",{get(){return this.__numPt??0;},set(v){this.__numPt=(v|0);}});Object.defineProperty(c,"Time",{get(){return this.__Time??0;},set(v){this.__Time=(v|0);}});Object.defineProperty(c,"potentialType",{get(){return this.__potentialType??0;},set(v){this.__potentialType=(v|0);}});Object.defineProperty(c,"potentialCenter",{get(){return this.__potentialCenter??0;},set(v){this.__potentialCenter=(v|0);}});Object.defineProperty(c,"potentialHeight",{get(){return this.__potentialHeight??0;},set(v){this.__potentialHeight=(v|0);}});Object.defineProperty(c,"potentialWidth",{get(){return this.__potentialWidth??0;},set(v){this.__potentialWidth=(v|0);}});Object.defineProperty(c,"k0",{get(){return this.__k0??0;},set(v){this.__k0=(v|0);}});Object.defineProperty(c,"x0",{get(){return this.__x0??0;},set(v){this.__x0=(v|0);}});Object.defineProperty(c,"xLeft",{get(){return this.__xLeft??0;},set(v){this.__xLeft=(v|0);}});c.numPt=512;c.epsilon=0.005;c.lambda=2;c.deltaT=0.000025;c.deltaK=2.454369260617026;c.Time=0;c.potentialType=0;c.potentialCenter=250;c.potentialHeight=5000;c.potentialWidth=100;c.k0=50;c.x0=200;c.uncertainty=0.02;c.xLeft=9;for(const [k,v]of Object.entries(p))c[k]=typeof v==="boolean"?{isChecked:v}:k==="potentialCmb"?{selIndex:v}:{value:v};
for(const k of ["timeStr","timeStepStr","periodTxt","omegaTxt","momentumTxt","omeganTxt"])c[k]={text:""};for(const k of ["canvas","canvas_Potential","canvas_State","canvas_StateGrid","canvas_PotentialBackground"])c[k]={graphics:graph()};c.aniTimer={reset:noop,stop:noop};c.startBtn={isON:false};c.psi=new Array(c.numPt);c.psi2=new Array(2*(c.numPt+1));c.Tji=new Array(c.numPt+1).fill(0);c.v=new Array(c.numPt);c.drawWave=c.init2DWave=c.draw2DWave=c.drawPotential=c.resetAni=noop;c.reset=function reset() 
      {
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         this.potentialType = Math.floor(Math.random() * 4);
         this.x0 = 200 + Math.random() * 30;
         this.k0 = 70 * Math.random();
         this.uncertainty = 0.02 * Math.random();
         var _loc1_ = 220 + Math.random() * 30;
         var _loc2_ = -50 * Math.random();
         var _loc3_ = 0.02 * Math.random();
         var _loc4_ = Math.sqrt(2) * this.uncertainty;
         var _loc5_ = Math.sqrt(2) * _loc3_;
         var _loc6_ = 0;
         while(_loc6_ < this.numPt)
         {
            _loc7_ = this.epsilon * (_loc6_ - this.x0);
            _loc8_ = -1 / (2 * _loc4_ * _loc4_) * _loc7_ * _loc7_;
            this.psi[_loc6_] = Complex.polar(Math.exp(_loc8_),this.k0 * _loc7_);
            _loc9_ = this.epsilon * (_loc6_ - _loc1_);
            _loc10_ = -1 / (2 * _loc5_ * _loc5_) * _loc9_ * _loc9_;
            this.psi[_loc6_] = this.psi[_loc6_].add(Complex.polar(Math.exp(_loc10_),_loc2_ * _loc9_));
            _loc6_++;
         }
         this.v = Potential1D.getU(this.numPt,this.potentialType,this.potentialCenter,this.potentialHeight,this.potentialWidth);
         this.quantum1D.setPotential(this.v);
         this.Time = 0;
      }.bind(c);
c.run=function run() 
      {
         if(this.Time >= 38)
         {
            this.reset();
            this.canvas.graphics.clear();
            this.Time = 0;
            return;
         }
         this.drawWave();
         this.quantum1D.calcNext(this.psi);
         this.Time += 1;
      }.bind(c);
c.quantum1D=new Quantum1D(c.numPt,c.epsilon,c.lambda);Potential1D.DrawFtn=noop;c.reset();return c;};
dynamicsFactories["flash-8b82e3d95410433f"]=(p,random=Math.random)=>{const Math=Object.create(globalThis.Math);Math.random=random;let Complex;Complex=(function(){const TWO_PI=2*Math.PI;function Complex(... rest)
      {this.re=undefined;this.im=undefined;
         
         this.re = Number.NaN;
         this.im = Number.NaN;
         switch(rest.length)
         {
            case 0:
               this.re = Number(0);
               this.im = Number(0);
               break;
            case 1:
               if(rest[0] instanceof Complex)
               {
                  this.re = Number(rest[0].re);
                  this.im = Number(rest[0].im);
               }
               else if(typeof rest[0] === "number")
               {
                  this.re = Number(rest[0]);
                  this.im = Number(0);
               }
               else if(rest[0] instanceof XML)
               {
                  this.re = this.fromXML(rest[0]).re;
                  this.im = this.fromXML(rest[0]).im;
               }
               else if(typeof rest[0] === "string")
               {
                  this.re = this.fromString(rest[0]).re;
                  this.im = this.fromString(rest[0]).im;
               }
               break;
            case 2:
               this.re = Number(rest[0]);
               this.im = Number(rest[1]);
         }
      }
function real(param1) 
      {
         return new Complex(param1,0);
      }
function cart(param1, param2) 
      {
         return new Complex(param1,param2);
      }
function polar(param1, param2) 
      {
         if(param1 < 0)
         {
            param2 += Math.PI;
            param1 = -param1;
         }
         param2 %= TWO_PI;
         return cart(param1 * Math.cos(param2),param1 * Math.sin(param2));
      }
function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      }
function absPrivate(param1, param2) 
      {
         var _loc5_ = NaN;
         var _loc3_ = Math.abs(param1);
         var _loc4_ = Math.abs(param2);
         if(_loc3_ == 0 && _loc4_ == 0)
         {
            return 0;
         }
         if(_loc3_ >= _loc4_)
         {
            _loc5_ = param2 / param1;
            return _loc3_ * Math.sqrt(1 + _loc5_ * _loc5_);
         }
         _loc5_ = param1 / param2;
         return _loc4_ * Math.sqrt(1 + _loc5_ * _loc5_);
      }
function inv(param1) 
      {
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         if(Math.abs(param1.re) >= Math.abs(param1.im))
         {
            _loc2_ = 1 / (param1.re + param1.im * (param1.im / param1.re));
            _loc3_ = _loc2_ * (-param1.im / param1.re);
         }
         else
         {
            _loc4_ = 1 / (param1.re * (param1.re / param1.im) + param1.im);
            _loc2_ = _loc4_ * (param1.re / param1.im);
            _loc3_ = -_loc4_;
         }
         param1.re = _loc2_;
         param1.im = _loc3_;
      }
function divPrivate(param1, param2, param3) 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         if(Math.abs(param2) >= Math.abs(param3))
         {
            _loc6_ = 1 / (param2 + param3 * (param3 / param2));
            _loc4_ = _loc6_ * (param1.re + param1.im * (param3 / param2));
            _loc5_ = _loc6_ * (param1.im - param1.re * (param3 / param2));
         }
         else
         {
            _loc6_ = 1 / (param2 * (param2 / param3) + param3);
            _loc4_ = _loc6_ * (param1.re * (param2 / param3) + param1.im);
            _loc5_ = _loc6_ * (param1.im * (param2 / param3) - param1.re);
         }
         param1.re = _loc4_;
         param1.im = _loc5_;
      }
function sqrtPrivate(param1) 
      {
         var _loc5_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = 0;
         var _loc4_ = param1.abs();
         if(_loc4_ > 0)
         {
            if(param1.re > 0)
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ + param1.re));
               param1.re = _loc5_;
               param1.im = 0.5 * param1.im / _loc5_;
            }
            else
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ - param1.re));
               if(param1.im < 0)
               {
                  _loc5_ = -_loc5_;
               }
               param1.re = 0.5 * param1.im / _loc5_;
               param1.im = _loc5_;
            }
         }
         else
         {
            param1.re = 0;
            param1.im = 0;
         }
      }
Complex.prototype.isInfinite=function isInfinite() 
      {
         return !isFinite(this.re) || !isFinite(this.im);
      };
Complex.prototype.isNaC=function isNaC() 
      {
         return isNaN(this.re) || isNaN(this.im);
      };
Complex.prototype.equals=function equals(param1, param2) 
      {
         return absPrivate(this.re - param1.re,this.im - param1.im) <= Math.abs(param2);
      };
Complex.prototype.getRe=function getRe() 
      {
         return this.re;
      };
Complex.prototype.getIm=function getIm() 
      {
         return this.im;
      };
Complex.prototype.norm=function norm() 
      {
         return this.re * this.re + this.im * this.im;
      };
Complex.prototype.abs=function abs() 
      {
         return absPrivate(this.re,this.im);
      };
Complex.prototype.arg=function arg() 
      {
         return Math.atan2(this.im,this.re);
      };
Complex.prototype.neg=function neg() 
      {
         return this.scale(-1);
      };
Complex.prototype.conj=function conj() 
      {
         return cart(this.re,-this.im);
      };
Complex.prototype.scale=function scale(param1) 
      {
         return cart(param1 * this.re,param1 * this.im);
      };
Complex.prototype.add=function add(param1) 
      {
         return cart(this.re + param1.re,this.im + param1.im);
      };
Complex.prototype.sub=function sub(param1) 
      {
         return cart(this.re - param1.re,this.im - param1.im);
      };
Complex.prototype.mul=function mul(param1) 
      {
         return cart(this.re * param1.re - this.im * param1.im,this.re * param1.im + this.im * param1.re);
      };
Complex.prototype.div=function div(param1) 
      {
         var _loc2_ = new Complex(this);
         divPrivate(_loc2_,param1.re,param1.im);
         return _loc2_;
      };
Complex.prototype.sqrt=function sqrt() 
      {
         var _loc1_ = new Complex(this);
         sqrtPrivate(_loc1_);
         return _loc1_;
      };
Complex.prototype.pow=function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      };
Complex.prototype.exp=function exp() 
      {
         var _loc1_ = Math.exp(this.re);
         return cart(_loc1_ * Math.cos(this.im),_loc1_ * Math.sin(this.im));
      };
Complex.prototype.log=function log() 
      {
         return cart(Math.log(this.abs()),this.arg());
      };
Complex.prototype.sin=function sin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         return cart(0.5 * _loc6_,-0.5 * _loc5_);
      };
Complex.prototype.cos=function cos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         return cart(0.5 * _loc5_,0.5 * _loc6_);
      };
Complex.prototype.tan=function tan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc1_ = cart(0.5 * _loc10_,-0.5 * _loc9_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc11_ = 0.5 * _loc9_;
         _loc12_ = 0.5 * _loc10_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.cosec=function cosec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         _loc1_ = cart(0.5 * _loc6_,-0.5 * _loc5_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.sec=function sec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         _loc1_ = cart(0.5 * _loc5_,0.5 * _loc6_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.cot=function cot() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc1_ = cart(0.5 * _loc9_,0.5 * _loc10_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc11_ = 0.5 * _loc10_;
         _loc12_ = -0.5 * _loc9_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.sinh=function sinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ -= _loc5_;
         _loc4_ -= _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.cosh=function cosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ += _loc5_;
         _loc4_ += _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.tanh=function tanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc7_ = _loc3_ - _loc5_;
         _loc8_ = _loc4_ - _loc6_;
         _loc1_ = cart(0.5 * _loc7_,0.5 * _loc8_);
         _loc7_ = _loc3_ + _loc5_;
         _loc8_ = _loc4_ + _loc6_;
         _loc9_ = 0.5 * _loc7_;
         _loc10_ = 0.5 * _loc8_;
         divPrivate(_loc1_,_loc9_,_loc10_);
         return _loc1_;
      };
Complex.prototype.asin=function asin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -this.im;
         _loc3_ = this.re;
         _loc1_.re = _loc2_ + _loc1_.re;
         _loc1_.im = _loc3_ + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.acos=function acos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -_loc1_.im;
         _loc3_ = _loc1_.re;
         _loc1_.re = this.re + _loc2_;
         _loc1_.im = this.im + _loc3_;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.atan=function atan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(-this.re,1 - this.im);
         _loc2_ = this.re;
         _loc3_ = 1 + this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc3_;
         _loc1_.im = -0.5 * _loc2_;
         return _loc1_;
      };
Complex.prototype.asinh=function asinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im + 1;
         _loc3_ = this.re * this.im + this.im * this.re + 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.acosh=function acosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im - 1;
         _loc3_ = this.re * this.im + this.im * this.re - 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.atanh=function atanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(1 + this.re,this.im);
         _loc2_ = 1 - this.re;
         _loc3_ = -this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc2_;
         _loc1_.im = 0.5 * _loc3_;
         return _loc1_;
      };Complex.real=real;Complex.cart=cart;Complex.polar=polar;Complex.pow=pow;Complex.absPrivate=absPrivate;Complex.inv=inv;Complex.divPrivate=divPrivate;Complex.sqrtPrivate=sqrtPrivate;Complex.NaC=new Complex(Number.NaN,Number.NaN);Complex.i=new Complex(0,1);return Complex;})();
let Potential1D;Potential1D=(function(){const TWO_PI=2*Math.PI;function Potential1D()
      {
         
      }
function getU(param1, param2 = 4, param3 = 256, param4 = 10000, param5 = 500) 
      {param1=Math.trunc(param1);param2=Math.trunc(param2);param3=Math.trunc(param3);param4=Math.trunc(param4);param5=Math.trunc(param5);
         var _loc7_ = 0;
         var _loc8_ = NaN;
         var _loc11_ = 0;
         var _loc6_ = new Array(param1);
         _loc7_ = 0;
         while(_loc7_ < param1)
         {
            _loc6_[_loc7_] = 0;
            _loc7_++;
         }
         var _loc9_ = param3 - param5 / 2;
         if(_loc9_ < 0)
         {
            _loc9_ = 0;
         }
         var _loc10_ = param3 + param5 / 2;
         if(_loc10_ > param1)
         {
            _loc10_ = param1;
         }
         switch(param2)
         {
            case 0:
               _loc7_ = _loc9_;
               while(_loc7_ < _loc10_)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 1:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  if(_loc7_ < _loc9_ || _loc7_ > _loc10_)
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
               break;
            case 2:
               _loc7_ = param3;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 3:
               break;
            case 4:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 5:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / Math.abs(param3 - 1);
               }
               else
               {
                  _loc8_ = 1 * param4 / Math.abs(param1 - param3);
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * Math.abs(_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 6:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3 * param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3) * (param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 7:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc11_ = Math.abs(_loc7_ - param1 / 2) + param5 / 2;
                  if(_loc11_ / param5 / 2 * 2 == _loc11_ / param5)
                  {
                     _loc6_[_loc7_] = 0;
                  }
                  else
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
         }
         return _loc6_;
      }Potential1D.getU=getU;return Potential1D;})();
let Quantum1D;Quantum1D=(function(){const TWO_PI=2*Math.PI;function Quantum1D(param1, param2, param3, param4 = null)
      {this.numPt=undefined;this.epsilon=undefined;this.lambda=undefined;this.iLambda=undefined;this.v=undefined;this.a=undefined;this.b=undefined;param1=Math.trunc(param1);
         
         this.numPt = param1;
         this.epsilon = param2;
         this.lambda = param3;
         this.a = new Array(param1);
         this.b = new Array(param1);
         this.iLambda = new Complex(0,param3);
         if(param4 != null)
         {
            this.setPotential(param4);
         }
      }
Quantum1D.prototype.setPotential=function setPotential(param1) 
      {
         this.v = param1;
         this.calcLU();
      };
Quantum1D.prototype.calcLU=function calcLU() 
      {
         var _loc2_ = 0;
         var _loc1_ = new Array(this.numPt);
         _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc1_[_loc2_] = Complex.cart(-2 - this.epsilon * this.epsilon * this.v[_loc2_],this.lambda);
            _loc2_++;
         }
         this.a[0] = new Complex(_loc1_[0]);
         var _loc3_ = new Complex(1,0);
         _loc2_ = 1;
         while(_loc2_ < this.numPt)
         {
            this.a[_loc2_] = _loc1_[_loc2_].sub(_loc3_.div(this.a[_loc2_ - 1]));
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numPt - 1)
         {
            this.b[_loc2_] = _loc3_.div(this.a[_loc2_]);
            _loc2_++;
         }
      };
Quantum1D.prototype.calcNext=function calcNext(param1) 
      {
         var _loc2_ = new Array(this.numPt);
         var _loc3_ = 0;
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = Math.trunc(this.numPt - 1);
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = 1;
         while(_loc3_ < this.numPt - 1)
         {
            _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
            _loc3_++;
         }
         var _loc4_ = new Array(this.numPt);
         _loc4_[0] = _loc2_[0].div(this.a[0]);
         _loc3_ = 1;
         while(_loc3_ < this.numPt)
         {
            _loc4_[_loc3_] = _loc2_[_loc3_].sub(_loc4_[_loc3_ - 1]).div(this.a[_loc3_]);
            _loc3_++;
         }
         param1[this.numPt - 1] = new Complex(_loc4_[this.numPt - 1]);
         _loc3_ = Math.trunc(this.numPt - 2);
         while(_loc3_ >= 0)
         {
            param1[_loc3_] = _loc4_[_loc3_].sub(this.b[_loc3_].mul(param1[_loc3_ + 1]));
            _loc3_--;
         }
      };return Quantum1D;})();
const c={};Object.defineProperty(c,"yMargin",{get(){return this.__yMargin??0;},set(v){this.__yMargin=(v|0);}});Object.defineProperty(c,"xMargin",{get(){return this.__xMargin??0;},set(v){this.__xMargin=(v|0);}});Object.defineProperty(c,"numPt",{get(){return this.__numPt??0;},set(v){this.__numPt=(v|0);}});Object.defineProperty(c,"Time",{get(){return this.__Time??0;},set(v){this.__Time=(v|0);}});Object.defineProperty(c,"Time2D",{get(){return this.__Time2D??0;},set(v){this.__Time2D=(v|0);}});Object.defineProperty(c,"potentialType",{get(){return this.__potentialType??0;},set(v){this.__potentialType=(v|0);}});Object.defineProperty(c,"potentialCenter",{get(){return this.__potentialCenter??0;},set(v){this.__potentialCenter=(v|0);}});Object.defineProperty(c,"potentialHeight",{get(){return this.__potentialHeight??0;},set(v){this.__potentialHeight=(v|0);}});Object.defineProperty(c,"potentialWidth",{get(){return this.__potentialWidth??0;},set(v){this.__potentialWidth=(v|0);}});Object.defineProperty(c,"k0",{get(){return this.__k0??0;},set(v){this.__k0=(v|0);}});Object.defineProperty(c,"x0",{get(){return this.__x0??0;},set(v){this.__x0=(v|0);}});Object.defineProperty(c,"xLeft",{get(){return this.__xLeft??0;},set(v){this.__xLeft=(v|0);}});Object.defineProperty(c,"i",{get(){return this.__i??0;},set(v){this.__i=(v|0);}});c.numPt=680;c.epsilon=0.005;c.lambda=2;c.deltaT=0.000025;c.deltaK=1.8479956785822313;c.yMargin=250;c.xMargin=125;c.Time=0;c.Time2D=0;c.potentialType=0;c.potentialCenter=500;c.potentialHeight=20000;c.potentialWidth=100;c.k0=50;c.x0=200;c.uncertainty=0.05;c.xLeft=9;c.i=1;for(const [k,v]of Object.entries(p))c[k]=typeof v==="boolean"?{isChecked:v}:k==="potentialCmb"?{selIndex:v}:{value:v};
for(const k of ["timeStr","timeStepStr","periodTxt","omegaTxt","momentumTxt","omeganTxt"])c[k]={text:""};for(const k of ["canvas","canvas_Potential","canvas_State","canvas_StateGrid","canvas_PotentialBackground"])c[k]={graphics:graph()};c.aniTimer={reset:noop,stop:noop};c.startBtn={isON:false};c.psi=new Array(c.numPt);c.psi2=new Array(2*(c.numPt+1));c.Tji=new Array(c.numPt+1).fill(0);c.v=new Array(c.numPt);c.drawWave=c.init2DWave=c.draw2DWave=c.drawPotential=c.resetAni=noop;c.reset=function reset() 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         this.uncertainty = this.epsilon * this.slider1.value;
         this.k0 = this.slider2.value;
         this.potentialWidth = this.slider3.value;
         this.potentialHeight = this.slider4.value;
         var _loc1_ = Math.sqrt(2) * this.uncertainty;
         var _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc4_ = this.epsilon * (_loc2_ - this.x0);
            _loc5_ = -1 / (2 * _loc1_ * _loc1_) * _loc4_ * _loc4_;
            this.psi[_loc2_] = Complex.polar(Math.exp(_loc5_),this.k0 * _loc4_);
            _loc2_++;
         }
         this.v = Potential1D.getU(this.numPt,this.potentialType,this.potentialCenter,this.potentialHeight,this.potentialWidth);
         this.quantum1D.setPotential(this.v);
         var _loc3_ = this.k0 * this.k0 + this.v[this.x0];
         Potential1D.DrawFtn(this.canvas_Potential,new Rectangle(this.xLeft,5,this.numPt + 1,90),this.v,_loc3_,true);
         this.Time = 0;
         this.timeStr.text = "0";
         this.Time2D = 0;
         this.drawWave();
         this.init2DWave();
         this.draw2DWave();
      }.bind(c);
c.run=function run() 
      {
         this.quantum1D.calcNext(this.psi);
         this.Time += 1;
         this.timeStr.text = "" + this.Time;
         if(this.Time >= 5000)
         {
            this.resetAni();
            this.Time = 0;
            return;
         }
         if(Math.floor(this.Time / 5) * 5 == this.Time)
         {
            this.drawWave(-1);
         }
         if(!this.flatChk.isChecked)
         {
            if(Math.floor(this.Time / 40) * 40 == this.Time)
            {
               if(this.Time2D < 60)
               {
                  ++this.Time2D;
                  this.draw2DWave();
               }
            }
         }
         else if(Math.floor(this.Time / 8) * 8 == this.Time)
         {
            if(this.Time2D < 550)
            {
               ++this.Time2D;
               this.draw2DWave();
            }
         }
      }.bind(c);
c.quantum1D=new Quantum1D(c.numPt,c.epsilon,c.lambda);Potential1D.DrawFtn=noop;c.reset();return c;};
dynamicsFactories["flash-1f9ed0c45d4111ae"]=(p,random=Math.random)=>{const Math=Object.create(globalThis.Math);Math.random=random;let Complex;Complex=(function(){const TWO_PI=2*Math.PI;function Complex(... rest)
      {this.re=undefined;this.im=undefined;
         
         this.re = Number.NaN;
         this.im = Number.NaN;
         switch(rest.length)
         {
            case 0:
               this.re = Number(0);
               this.im = Number(0);
               break;
            case 1:
               if(rest[0] instanceof Complex)
               {
                  this.re = Number(rest[0].re);
                  this.im = Number(rest[0].im);
               }
               else if(typeof rest[0] === "number")
               {
                  this.re = Number(rest[0]);
                  this.im = Number(0);
               }
               else if(rest[0] instanceof XML)
               {
                  this.re = this.fromXML(rest[0]).re;
                  this.im = this.fromXML(rest[0]).im;
               }
               else if(typeof rest[0] === "string")
               {
                  this.re = this.fromString(rest[0]).re;
                  this.im = this.fromString(rest[0]).im;
               }
               break;
            case 2:
               this.re = Number(rest[0]);
               this.im = Number(rest[1]);
         }
      }
function real(param1) 
      {
         return new Complex(param1,0);
      }
function cart(param1, param2) 
      {
         return new Complex(param1,param2);
      }
function polar(param1, param2) 
      {
         if(param1 < 0)
         {
            param2 += Math.PI;
            param1 = -param1;
         }
         param2 %= TWO_PI;
         return cart(param1 * Math.cos(param2),param1 * Math.sin(param2));
      }
function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      }
function absPrivate(param1, param2) 
      {
         var _loc5_ = NaN;
         var _loc3_ = Math.abs(param1);
         var _loc4_ = Math.abs(param2);
         if(_loc3_ == 0 && _loc4_ == 0)
         {
            return 0;
         }
         if(_loc3_ >= _loc4_)
         {
            _loc5_ = param2 / param1;
            return _loc3_ * Math.sqrt(1 + _loc5_ * _loc5_);
         }
         _loc5_ = param1 / param2;
         return _loc4_ * Math.sqrt(1 + _loc5_ * _loc5_);
      }
function inv(param1) 
      {
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         if(Math.abs(param1.re) >= Math.abs(param1.im))
         {
            _loc2_ = 1 / (param1.re + param1.im * (param1.im / param1.re));
            _loc3_ = _loc2_ * (-param1.im / param1.re);
         }
         else
         {
            _loc4_ = 1 / (param1.re * (param1.re / param1.im) + param1.im);
            _loc2_ = _loc4_ * (param1.re / param1.im);
            _loc3_ = -_loc4_;
         }
         param1.re = _loc2_;
         param1.im = _loc3_;
      }
function divPrivate(param1, param2, param3) 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         if(Math.abs(param2) >= Math.abs(param3))
         {
            _loc6_ = 1 / (param2 + param3 * (param3 / param2));
            _loc4_ = _loc6_ * (param1.re + param1.im * (param3 / param2));
            _loc5_ = _loc6_ * (param1.im - param1.re * (param3 / param2));
         }
         else
         {
            _loc6_ = 1 / (param2 * (param2 / param3) + param3);
            _loc4_ = _loc6_ * (param1.re * (param2 / param3) + param1.im);
            _loc5_ = _loc6_ * (param1.im * (param2 / param3) - param1.re);
         }
         param1.re = _loc4_;
         param1.im = _loc5_;
      }
function sqrtPrivate(param1) 
      {
         var _loc5_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = 0;
         var _loc4_ = param1.abs();
         if(_loc4_ > 0)
         {
            if(param1.re > 0)
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ + param1.re));
               param1.re = _loc5_;
               param1.im = 0.5 * param1.im / _loc5_;
            }
            else
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ - param1.re));
               if(param1.im < 0)
               {
                  _loc5_ = -_loc5_;
               }
               param1.re = 0.5 * param1.im / _loc5_;
               param1.im = _loc5_;
            }
         }
         else
         {
            param1.re = 0;
            param1.im = 0;
         }
      }
Complex.prototype.isInfinite=function isInfinite() 
      {
         return !isFinite(this.re) || !isFinite(this.im);
      };
Complex.prototype.isNaC=function isNaC() 
      {
         return isNaN(this.re) || isNaN(this.im);
      };
Complex.prototype.equals=function equals(param1, param2) 
      {
         return absPrivate(this.re - param1.re,this.im - param1.im) <= Math.abs(param2);
      };
Complex.prototype.getRe=function getRe() 
      {
         return this.re;
      };
Complex.prototype.getIm=function getIm() 
      {
         return this.im;
      };
Complex.prototype.norm=function norm() 
      {
         return this.re * this.re + this.im * this.im;
      };
Complex.prototype.abs=function abs() 
      {
         return absPrivate(this.re,this.im);
      };
Complex.prototype.arg=function arg() 
      {
         return Math.atan2(this.im,this.re);
      };
Complex.prototype.neg=function neg() 
      {
         return this.scale(-1);
      };
Complex.prototype.conj=function conj() 
      {
         return cart(this.re,-this.im);
      };
Complex.prototype.scale=function scale(param1) 
      {
         return cart(param1 * this.re,param1 * this.im);
      };
Complex.prototype.add=function add(param1) 
      {
         return cart(this.re + param1.re,this.im + param1.im);
      };
Complex.prototype.sub=function sub(param1) 
      {
         return cart(this.re - param1.re,this.im - param1.im);
      };
Complex.prototype.mul=function mul(param1) 
      {
         return cart(this.re * param1.re - this.im * param1.im,this.re * param1.im + this.im * param1.re);
      };
Complex.prototype.div=function div(param1) 
      {
         var _loc2_ = new Complex(this);
         divPrivate(_loc2_,param1.re,param1.im);
         return _loc2_;
      };
Complex.prototype.sqrt=function sqrt() 
      {
         var _loc1_ = new Complex(this);
         sqrtPrivate(_loc1_);
         return _loc1_;
      };
Complex.prototype.pow=function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      };
Complex.prototype.exp=function exp() 
      {
         var _loc1_ = Math.exp(this.re);
         return cart(_loc1_ * Math.cos(this.im),_loc1_ * Math.sin(this.im));
      };
Complex.prototype.log=function log() 
      {
         return cart(Math.log(this.abs()),this.arg());
      };
Complex.prototype.sin=function sin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         return cart(0.5 * _loc6_,-0.5 * _loc5_);
      };
Complex.prototype.cos=function cos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         return cart(0.5 * _loc5_,0.5 * _loc6_);
      };
Complex.prototype.tan=function tan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc1_ = cart(0.5 * _loc10_,-0.5 * _loc9_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc11_ = 0.5 * _loc9_;
         _loc12_ = 0.5 * _loc10_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.cosec=function cosec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         _loc1_ = cart(0.5 * _loc6_,-0.5 * _loc5_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.sec=function sec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         _loc1_ = cart(0.5 * _loc5_,0.5 * _loc6_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.cot=function cot() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc1_ = cart(0.5 * _loc9_,0.5 * _loc10_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc11_ = 0.5 * _loc10_;
         _loc12_ = -0.5 * _loc9_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.sinh=function sinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ -= _loc5_;
         _loc4_ -= _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.cosh=function cosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ += _loc5_;
         _loc4_ += _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.tanh=function tanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc7_ = _loc3_ - _loc5_;
         _loc8_ = _loc4_ - _loc6_;
         _loc1_ = cart(0.5 * _loc7_,0.5 * _loc8_);
         _loc7_ = _loc3_ + _loc5_;
         _loc8_ = _loc4_ + _loc6_;
         _loc9_ = 0.5 * _loc7_;
         _loc10_ = 0.5 * _loc8_;
         divPrivate(_loc1_,_loc9_,_loc10_);
         return _loc1_;
      };
Complex.prototype.asin=function asin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -this.im;
         _loc3_ = this.re;
         _loc1_.re = _loc2_ + _loc1_.re;
         _loc1_.im = _loc3_ + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.acos=function acos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -_loc1_.im;
         _loc3_ = _loc1_.re;
         _loc1_.re = this.re + _loc2_;
         _loc1_.im = this.im + _loc3_;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.atan=function atan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(-this.re,1 - this.im);
         _loc2_ = this.re;
         _loc3_ = 1 + this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc3_;
         _loc1_.im = -0.5 * _loc2_;
         return _loc1_;
      };
Complex.prototype.asinh=function asinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im + 1;
         _loc3_ = this.re * this.im + this.im * this.re + 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.acosh=function acosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im - 1;
         _loc3_ = this.re * this.im + this.im * this.re - 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.atanh=function atanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(1 + this.re,this.im);
         _loc2_ = 1 - this.re;
         _loc3_ = -this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc2_;
         _loc1_.im = 0.5 * _loc3_;
         return _loc1_;
      };Complex.real=real;Complex.cart=cart;Complex.polar=polar;Complex.pow=pow;Complex.absPrivate=absPrivate;Complex.inv=inv;Complex.divPrivate=divPrivate;Complex.sqrtPrivate=sqrtPrivate;Complex.NaC=new Complex(Number.NaN,Number.NaN);Complex.i=new Complex(0,1);return Complex;})();
let Potential1D;Potential1D=(function(){const TWO_PI=2*Math.PI;function Potential1D()
      {
         
      }
function getU(param1, param2 = 4, param3 = 256, param4 = 10000, param5 = 500) 
      {param1=Math.trunc(param1);param2=Math.trunc(param2);param3=Math.trunc(param3);param4=Math.trunc(param4);param5=Math.trunc(param5);
         var _loc7_ = 0;
         var _loc8_ = NaN;
         var _loc11_ = 0;
         var _loc6_ = new Array(param1);
         _loc7_ = 0;
         while(_loc7_ < param1)
         {
            _loc6_[_loc7_] = 0;
            _loc7_++;
         }
         var _loc9_ = param3 - param5 / 2;
         if(_loc9_ < 0)
         {
            _loc9_ = 0;
         }
         var _loc10_ = param3 + param5 / 2;
         if(_loc10_ > param1)
         {
            _loc10_ = param1;
         }
         switch(param2)
         {
            case 0:
               _loc7_ = _loc9_;
               while(_loc7_ < _loc10_)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 1:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  if(_loc7_ < _loc9_ || _loc7_ > _loc10_)
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
               break;
            case 2:
               _loc7_ = param3;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 3:
               break;
            case 4:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 5:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / Math.abs(param3 - 1);
               }
               else
               {
                  _loc8_ = 1 * param4 / Math.abs(param1 - param3);
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * Math.abs(_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 6:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3 * param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3) * (param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 7:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc11_ = Math.abs(_loc7_ - param1 / 2) + param5 / 2;
                  if(_loc11_ / param5 / 2 * 2 == _loc11_ / param5)
                  {
                     _loc6_[_loc7_] = 0;
                  }
                  else
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
         }
         return _loc6_;
      }Potential1D.getU=getU;return Potential1D;})();
let Quantum1D;Quantum1D=(function(){const TWO_PI=2*Math.PI;function Quantum1D(param1, param2, param3, param4 = null)
      {this.numPt=undefined;this.epsilon=undefined;this.lambda=undefined;this.iLambda=undefined;this.v=undefined;this.a=undefined;this.b=undefined;param1=Math.trunc(param1);
         
         this.numPt = param1;
         this.epsilon = param2;
         this.lambda = param3;
         this.a = new Array(param1);
         this.b = new Array(param1);
         this.iLambda = new Complex(0,param3);
         if(param4 != null)
         {
            this.setPotential(param4);
         }
      }
Quantum1D.prototype.setPotential=function setPotential(param1) 
      {
         this.v = param1;
         this.calcLU();
      };
Quantum1D.prototype.calcLU=function calcLU() 
      {
         var _loc2_ = 0;
         var _loc1_ = new Array(this.numPt);
         _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc1_[_loc2_] = Complex.cart(-2 - this.epsilon * this.epsilon * this.v[_loc2_],this.lambda);
            _loc2_++;
         }
         this.a[0] = new Complex(_loc1_[0]);
         var _loc3_ = new Complex(1,0);
         _loc2_ = 1;
         while(_loc2_ < this.numPt)
         {
            this.a[_loc2_] = _loc1_[_loc2_].sub(_loc3_.div(this.a[_loc2_ - 1]));
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numPt - 1)
         {
            this.b[_loc2_] = _loc3_.div(this.a[_loc2_]);
            _loc2_++;
         }
      };
Quantum1D.prototype.calcNext=function calcNext(param1) 
      {
         var _loc2_ = new Array(this.numPt);
         var _loc3_ = 0;
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = Math.trunc(this.numPt - 1);
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = 1;
         while(_loc3_ < this.numPt - 1)
         {
            _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
            _loc3_++;
         }
         var _loc4_ = new Array(this.numPt);
         _loc4_[0] = _loc2_[0].div(this.a[0]);
         _loc3_ = 1;
         while(_loc3_ < this.numPt)
         {
            _loc4_[_loc3_] = _loc2_[_loc3_].sub(_loc4_[_loc3_ - 1]).div(this.a[_loc3_]);
            _loc3_++;
         }
         param1[this.numPt - 1] = new Complex(_loc4_[this.numPt - 1]);
         _loc3_ = Math.trunc(this.numPt - 2);
         while(_loc3_ >= 0)
         {
            param1[_loc3_] = _loc4_[_loc3_].sub(this.b[_loc3_].mul(param1[_loc3_ + 1]));
            _loc3_--;
         }
      };return Quantum1D;})();
const c={};Object.defineProperty(c,"yMargin",{get(){return this.__yMargin??0;},set(v){this.__yMargin=(v|0);}});Object.defineProperty(c,"xMargin",{get(){return this.__xMargin??0;},set(v){this.__xMargin=(v|0);}});Object.defineProperty(c,"numPt",{get(){return this.__numPt??0;},set(v){this.__numPt=(v|0);}});Object.defineProperty(c,"Time",{get(){return this.__Time??0;},set(v){this.__Time=(v|0);}});Object.defineProperty(c,"Time2D",{get(){return this.__Time2D??0;},set(v){this.__Time2D=(v|0);}});Object.defineProperty(c,"potentialType",{get(){return this.__potentialType??0;},set(v){this.__potentialType=(v|0);}});Object.defineProperty(c,"potentialCenter",{get(){return this.__potentialCenter??0;},set(v){this.__potentialCenter=(v|0);}});Object.defineProperty(c,"potentialHeight",{get(){return this.__potentialHeight??0;},set(v){this.__potentialHeight=(v|0);}});Object.defineProperty(c,"potentialWidth",{get(){return this.__potentialWidth??0;},set(v){this.__potentialWidth=(v|0);}});Object.defineProperty(c,"k0",{get(){return this.__k0??0;},set(v){this.__k0=(v|0);}});Object.defineProperty(c,"x0",{get(){return this.__x0??0;},set(v){this.__x0=(v|0);}});Object.defineProperty(c,"xLeft",{get(){return this.__xLeft??0;},set(v){this.__xLeft=(v|0);}});Object.defineProperty(c,"i",{get(){return this.__i??0;},set(v){this.__i=(v|0);}});c.numPt=680;c.epsilon=0.005;c.lambda=2;c.deltaT=0.000025;c.deltaK=1.8479956785822313;c.yMargin=250;c.xMargin=125;c.Time=0;c.Time2D=0;c.potentialType=6;c.potentialCenter=340;c.potentialHeight=20000;c.potentialWidth=100;c.k0=50;c.x0=200;c.uncertainty=0.05;c.xLeft=9;c.i=1;for(const [k,v]of Object.entries(p))c[k]=typeof v==="boolean"?{isChecked:v}:k==="potentialCmb"?{selIndex:v}:{value:v};
for(const k of ["timeStr","timeStepStr","periodTxt","omegaTxt","momentumTxt","omeganTxt"])c[k]={text:""};for(const k of ["canvas","canvas_Potential","canvas_State","canvas_StateGrid","canvas_PotentialBackground"])c[k]={graphics:graph()};c.aniTimer={reset:noop,stop:noop};c.startBtn={isON:false};c.psi=new Array(c.numPt);c.psi2=new Array(2*(c.numPt+1));c.Tji=new Array(c.numPt+1).fill(0);c.v=new Array(c.numPt);c.drawWave=c.init2DWave=c.draw2DWave=c.drawPotential=c.resetAni=noop;c.reset=function reset() 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         this.x0 = this.slider3.value;
         this.uncertainty = this.epsilon * this.slider1.value;
         this.k0 = this.slider2.value;
         this.potentialType = this.potentialCmb.selIndex + 4;
         this.potentialHeight = this.slider4.value;
         var _loc1_ = Math.sqrt(2) * this.uncertainty;
         var _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc4_ = this.epsilon * (_loc2_ - this.x0);
            _loc5_ = -1 / (2 * _loc1_ * _loc1_) * _loc4_ * _loc4_;
            this.psi[_loc2_] = Complex.polar(Math.exp(_loc5_),this.k0 * _loc4_);
            _loc2_++;
         }
         this.v = Potential1D.getU(this.numPt,this.potentialType,this.potentialCenter,this.potentialHeight,this.potentialWidth);
         this.quantum1D.setPotential(this.v);
         var _loc3_ = this.k0 * this.k0 + this.v[this.x0];
         Potential1D.DrawFtn(this.canvas_Potential,new Rectangle(this.xLeft,5,this.numPt + 1,90),this.v,_loc3_,true);
         this.Time = 0;
         this.timeStr.text = "0";
         this.Time2D = 0;
         this.drawWave();
         this.init2DWave();
         this.draw2DWave();
      }.bind(c);
c.run=function run() 
      {
         this.quantum1D.calcNext(this.psi);
         this.Time += 1;
         this.timeStr.text = "" + this.Time;
         if(this.Time >= 5000)
         {
            this.resetAni();
            this.Time = 0;
            return;
         }
         if(Math.floor(this.Time / 5) * 5 == this.Time)
         {
            this.drawWave(-1);
         }
         if(!this.flatChk.isChecked)
         {
            if(Math.floor(this.Time / 40) * 40 == this.Time)
            {
               if(this.Time2D < 60)
               {
                  ++this.Time2D;
                  this.draw2DWave();
               }
            }
         }
         else if(Math.floor(this.Time / 8) * 8 == this.Time)
         {
            if(this.Time2D < 550)
            {
               ++this.Time2D;
               this.draw2DWave();
            }
         }
      }.bind(c);
c.quantum1D=new Quantum1D(c.numPt,c.epsilon,c.lambda);Potential1D.DrawFtn=noop;c.reset();return c;};
dynamicsFactories["flash-1deaf3760d3f79a8"]=(p,random=Math.random)=>{const Math=Object.create(globalThis.Math);Math.random=random;let Complex;Complex=(function(){const TWO_PI=2*Math.PI;function Complex(... rest)
      {this.re=undefined;this.im=undefined;
         
         this.re = Number.NaN;
         this.im = Number.NaN;
         switch(rest.length)
         {
            case 0:
               this.re = Number(0);
               this.im = Number(0);
               break;
            case 1:
               if(rest[0] instanceof Complex)
               {
                  this.re = Number(rest[0].re);
                  this.im = Number(rest[0].im);
               }
               else if(typeof rest[0] === "number")
               {
                  this.re = Number(rest[0]);
                  this.im = Number(0);
               }
               else if(rest[0] instanceof XML)
               {
                  this.re = this.fromXML(rest[0]).re;
                  this.im = this.fromXML(rest[0]).im;
               }
               else if(typeof rest[0] === "string")
               {
                  this.re = this.fromString(rest[0]).re;
                  this.im = this.fromString(rest[0]).im;
               }
               break;
            case 2:
               this.re = Number(rest[0]);
               this.im = Number(rest[1]);
         }
      }
function real(param1) 
      {
         return new Complex(param1,0);
      }
function cart(param1, param2) 
      {
         return new Complex(param1,param2);
      }
function polar(param1, param2) 
      {
         if(param1 < 0)
         {
            param2 += Math.PI;
            param1 = -param1;
         }
         param2 %= TWO_PI;
         return cart(param1 * Math.cos(param2),param1 * Math.sin(param2));
      }
function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      }
function absPrivate(param1, param2) 
      {
         var _loc5_ = NaN;
         var _loc3_ = Math.abs(param1);
         var _loc4_ = Math.abs(param2);
         if(_loc3_ == 0 && _loc4_ == 0)
         {
            return 0;
         }
         if(_loc3_ >= _loc4_)
         {
            _loc5_ = param2 / param1;
            return _loc3_ * Math.sqrt(1 + _loc5_ * _loc5_);
         }
         _loc5_ = param1 / param2;
         return _loc4_ * Math.sqrt(1 + _loc5_ * _loc5_);
      }
function inv(param1) 
      {
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         if(Math.abs(param1.re) >= Math.abs(param1.im))
         {
            _loc2_ = 1 / (param1.re + param1.im * (param1.im / param1.re));
            _loc3_ = _loc2_ * (-param1.im / param1.re);
         }
         else
         {
            _loc4_ = 1 / (param1.re * (param1.re / param1.im) + param1.im);
            _loc2_ = _loc4_ * (param1.re / param1.im);
            _loc3_ = -_loc4_;
         }
         param1.re = _loc2_;
         param1.im = _loc3_;
      }
function divPrivate(param1, param2, param3) 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         if(Math.abs(param2) >= Math.abs(param3))
         {
            _loc6_ = 1 / (param2 + param3 * (param3 / param2));
            _loc4_ = _loc6_ * (param1.re + param1.im * (param3 / param2));
            _loc5_ = _loc6_ * (param1.im - param1.re * (param3 / param2));
         }
         else
         {
            _loc6_ = 1 / (param2 * (param2 / param3) + param3);
            _loc4_ = _loc6_ * (param1.re * (param2 / param3) + param1.im);
            _loc5_ = _loc6_ * (param1.im * (param2 / param3) - param1.re);
         }
         param1.re = _loc4_;
         param1.im = _loc5_;
      }
function sqrtPrivate(param1) 
      {
         var _loc5_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = 0;
         var _loc4_ = param1.abs();
         if(_loc4_ > 0)
         {
            if(param1.re > 0)
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ + param1.re));
               param1.re = _loc5_;
               param1.im = 0.5 * param1.im / _loc5_;
            }
            else
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ - param1.re));
               if(param1.im < 0)
               {
                  _loc5_ = -_loc5_;
               }
               param1.re = 0.5 * param1.im / _loc5_;
               param1.im = _loc5_;
            }
         }
         else
         {
            param1.re = 0;
            param1.im = 0;
         }
      }
Complex.prototype.isInfinite=function isInfinite() 
      {
         return !isFinite(this.re) || !isFinite(this.im);
      };
Complex.prototype.isNaC=function isNaC() 
      {
         return isNaN(this.re) || isNaN(this.im);
      };
Complex.prototype.equals=function equals(param1, param2) 
      {
         return absPrivate(this.re - param1.re,this.im - param1.im) <= Math.abs(param2);
      };
Complex.prototype.getRe=function getRe() 
      {
         return this.re;
      };
Complex.prototype.getIm=function getIm() 
      {
         return this.im;
      };
Complex.prototype.norm=function norm() 
      {
         return this.re * this.re + this.im * this.im;
      };
Complex.prototype.abs=function abs() 
      {
         return absPrivate(this.re,this.im);
      };
Complex.prototype.arg=function arg() 
      {
         return Math.atan2(this.im,this.re);
      };
Complex.prototype.neg=function neg() 
      {
         return this.scale(-1);
      };
Complex.prototype.conj=function conj() 
      {
         return cart(this.re,-this.im);
      };
Complex.prototype.scale=function scale(param1) 
      {
         return cart(param1 * this.re,param1 * this.im);
      };
Complex.prototype.add=function add(param1) 
      {
         return cart(this.re + param1.re,this.im + param1.im);
      };
Complex.prototype.sub=function sub(param1) 
      {
         return cart(this.re - param1.re,this.im - param1.im);
      };
Complex.prototype.mul=function mul(param1) 
      {
         return cart(this.re * param1.re - this.im * param1.im,this.re * param1.im + this.im * param1.re);
      };
Complex.prototype.div=function div(param1) 
      {
         var _loc2_ = new Complex(this);
         divPrivate(_loc2_,param1.re,param1.im);
         return _loc2_;
      };
Complex.prototype.sqrt=function sqrt() 
      {
         var _loc1_ = new Complex(this);
         sqrtPrivate(_loc1_);
         return _loc1_;
      };
Complex.prototype.pow=function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      };
Complex.prototype.exp=function exp() 
      {
         var _loc1_ = Math.exp(this.re);
         return cart(_loc1_ * Math.cos(this.im),_loc1_ * Math.sin(this.im));
      };
Complex.prototype.log=function log() 
      {
         return cart(Math.log(this.abs()),this.arg());
      };
Complex.prototype.sin=function sin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         return cart(0.5 * _loc6_,-0.5 * _loc5_);
      };
Complex.prototype.cos=function cos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         return cart(0.5 * _loc5_,0.5 * _loc6_);
      };
Complex.prototype.tan=function tan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc1_ = cart(0.5 * _loc10_,-0.5 * _loc9_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc11_ = 0.5 * _loc9_;
         _loc12_ = 0.5 * _loc10_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.cosec=function cosec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         _loc1_ = cart(0.5 * _loc6_,-0.5 * _loc5_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.sec=function sec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         _loc1_ = cart(0.5 * _loc5_,0.5 * _loc6_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.cot=function cot() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc1_ = cart(0.5 * _loc9_,0.5 * _loc10_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc11_ = 0.5 * _loc10_;
         _loc12_ = -0.5 * _loc9_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.sinh=function sinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ -= _loc5_;
         _loc4_ -= _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.cosh=function cosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ += _loc5_;
         _loc4_ += _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.tanh=function tanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc7_ = _loc3_ - _loc5_;
         _loc8_ = _loc4_ - _loc6_;
         _loc1_ = cart(0.5 * _loc7_,0.5 * _loc8_);
         _loc7_ = _loc3_ + _loc5_;
         _loc8_ = _loc4_ + _loc6_;
         _loc9_ = 0.5 * _loc7_;
         _loc10_ = 0.5 * _loc8_;
         divPrivate(_loc1_,_loc9_,_loc10_);
         return _loc1_;
      };
Complex.prototype.asin=function asin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -this.im;
         _loc3_ = this.re;
         _loc1_.re = _loc2_ + _loc1_.re;
         _loc1_.im = _loc3_ + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.acos=function acos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -_loc1_.im;
         _loc3_ = _loc1_.re;
         _loc1_.re = this.re + _loc2_;
         _loc1_.im = this.im + _loc3_;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.atan=function atan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(-this.re,1 - this.im);
         _loc2_ = this.re;
         _loc3_ = 1 + this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc3_;
         _loc1_.im = -0.5 * _loc2_;
         return _loc1_;
      };
Complex.prototype.asinh=function asinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im + 1;
         _loc3_ = this.re * this.im + this.im * this.re + 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.acosh=function acosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im - 1;
         _loc3_ = this.re * this.im + this.im * this.re - 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.atanh=function atanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(1 + this.re,this.im);
         _loc2_ = 1 - this.re;
         _loc3_ = -this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc2_;
         _loc1_.im = 0.5 * _loc3_;
         return _loc1_;
      };Complex.real=real;Complex.cart=cart;Complex.polar=polar;Complex.pow=pow;Complex.absPrivate=absPrivate;Complex.inv=inv;Complex.divPrivate=divPrivate;Complex.sqrtPrivate=sqrtPrivate;Complex.NaC=new Complex(Number.NaN,Number.NaN);Complex.i=new Complex(0,1);return Complex;})();
let Potential1D;Potential1D=(function(){const TWO_PI=2*Math.PI;function Potential1D()
      {
         
      }
function getU(param1, param2 = 4, param3 = 256, param4 = 10000, param5 = 500) 
      {param1=Math.trunc(param1);param2=Math.trunc(param2);param3=Math.trunc(param3);param4=Math.trunc(param4);param5=Math.trunc(param5);
         var _loc7_ = 0;
         var _loc8_ = NaN;
         var _loc11_ = 0;
         var _loc6_ = new Array(param1);
         _loc7_ = 0;
         while(_loc7_ < param1)
         {
            _loc6_[_loc7_] = 0;
            _loc7_++;
         }
         var _loc9_ = param3 - param5 / 2;
         if(_loc9_ < 0)
         {
            _loc9_ = 0;
         }
         var _loc10_ = param3 + param5 / 2;
         if(_loc10_ > param1)
         {
            _loc10_ = param1;
         }
         switch(param2)
         {
            case 0:
               _loc7_ = _loc9_;
               while(_loc7_ < _loc10_)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 1:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  if(_loc7_ < _loc9_ || _loc7_ > _loc10_)
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
               break;
            case 2:
               _loc7_ = param3;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 3:
               break;
            case 4:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 5:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / Math.abs(param3 - 1);
               }
               else
               {
                  _loc8_ = 1 * param4 / Math.abs(param1 - param3);
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * Math.abs(_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 6:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3 * param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3) * (param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 7:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc11_ = Math.abs(_loc7_ - param1 / 2) + param5 / 2;
                  if(_loc11_ / param5 / 2 * 2 == _loc11_ / param5)
                  {
                     _loc6_[_loc7_] = 0;
                  }
                  else
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
         }
         return _loc6_;
      }Potential1D.getU=getU;return Potential1D;})();
let Quantum1D;Quantum1D=(function(){const TWO_PI=2*Math.PI;function Quantum1D(param1, param2, param3, param4 = null)
      {this.numPt=undefined;this.epsilon=undefined;this.lambda=undefined;this.iLambda=undefined;this.v=undefined;this.a=undefined;this.b=undefined;param1=Math.trunc(param1);
         
         this.numPt = param1;
         this.epsilon = param2;
         this.lambda = param3;
         this.a = new Array(param1);
         this.b = new Array(param1);
         this.iLambda = new Complex(0,param3);
         if(param4 != null)
         {
            this.setPotential(param4);
         }
      }
Quantum1D.prototype.setPotential=function setPotential(param1) 
      {
         this.v = param1;
         this.calcLU();
      };
Quantum1D.prototype.calcLU=function calcLU() 
      {
         var _loc2_ = 0;
         var _loc1_ = new Array(this.numPt);
         _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc1_[_loc2_] = Complex.cart(-2 - this.epsilon * this.epsilon * this.v[_loc2_],this.lambda);
            _loc2_++;
         }
         this.a[0] = new Complex(_loc1_[0]);
         var _loc3_ = new Complex(1,0);
         _loc2_ = 1;
         while(_loc2_ < this.numPt)
         {
            this.a[_loc2_] = _loc1_[_loc2_].sub(_loc3_.div(this.a[_loc2_ - 1]));
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numPt - 1)
         {
            this.b[_loc2_] = _loc3_.div(this.a[_loc2_]);
            _loc2_++;
         }
      };
Quantum1D.prototype.calcNext=function calcNext(param1) 
      {
         var _loc2_ = new Array(this.numPt);
         var _loc3_ = 0;
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = Math.trunc(this.numPt - 1);
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = 1;
         while(_loc3_ < this.numPt - 1)
         {
            _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
            _loc3_++;
         }
         var _loc4_ = new Array(this.numPt);
         _loc4_[0] = _loc2_[0].div(this.a[0]);
         _loc3_ = 1;
         while(_loc3_ < this.numPt)
         {
            _loc4_[_loc3_] = _loc2_[_loc3_].sub(_loc4_[_loc3_ - 1]).div(this.a[_loc3_]);
            _loc3_++;
         }
         param1[this.numPt - 1] = new Complex(_loc4_[this.numPt - 1]);
         _loc3_ = Math.trunc(this.numPt - 2);
         while(_loc3_ >= 0)
         {
            param1[_loc3_] = _loc4_[_loc3_].sub(this.b[_loc3_].mul(param1[_loc3_ + 1]));
            _loc3_--;
         }
      };return Quantum1D;})();
const c={};Object.defineProperty(c,"yMargin",{get(){return this.__yMargin??0;},set(v){this.__yMargin=(v|0);}});Object.defineProperty(c,"xMargin",{get(){return this.__xMargin??0;},set(v){this.__xMargin=(v|0);}});Object.defineProperty(c,"numPt",{get(){return this.__numPt??0;},set(v){this.__numPt=(v|0);}});Object.defineProperty(c,"Time",{get(){return this.__Time??0;},set(v){this.__Time=(v|0);}});Object.defineProperty(c,"Time2D",{get(){return this.__Time2D??0;},set(v){this.__Time2D=(v|0);}});Object.defineProperty(c,"potentialType",{get(){return this.__potentialType??0;},set(v){this.__potentialType=(v|0);}});Object.defineProperty(c,"potentialCenter",{get(){return this.__potentialCenter??0;},set(v){this.__potentialCenter=(v|0);}});Object.defineProperty(c,"potentialHeight",{get(){return this.__potentialHeight??0;},set(v){this.__potentialHeight=(v|0);}});Object.defineProperty(c,"potentialWidth",{get(){return this.__potentialWidth??0;},set(v){this.__potentialWidth=(v|0);}});Object.defineProperty(c,"k0",{get(){return this.__k0??0;},set(v){this.__k0=(v|0);}});Object.defineProperty(c,"x0",{get(){return this.__x0??0;},set(v){this.__x0=(v|0);}});Object.defineProperty(c,"xLeft",{get(){return this.__xLeft??0;},set(v){this.__xLeft=(v|0);}});Object.defineProperty(c,"i",{get(){return this.__i??0;},set(v){this.__i=(v|0);}});c.numPt=680;c.epsilon=0.005;c.lambda=2;c.deltaT=0.000025;c.deltaK=1.8479956785822313;c.yMargin=250;c.xMargin=125;c.Time=0;c.Time2D=0;c.potentialType=2;c.potentialCenter=500;c.potentialHeight=20000;c.potentialWidth=100;c.k0=50;c.x0=200;c.uncertainty=0.05;c.xLeft=9;c.i=1;for(const [k,v]of Object.entries(p))c[k]=typeof v==="boolean"?{isChecked:v}:k==="potentialCmb"?{selIndex:v}:{value:v};
for(const k of ["timeStr","timeStepStr","periodTxt","omegaTxt","momentumTxt","omeganTxt"])c[k]={text:""};for(const k of ["canvas","canvas_Potential","canvas_State","canvas_StateGrid","canvas_PotentialBackground"])c[k]={graphics:graph()};c.aniTimer={reset:noop,stop:noop};c.startBtn={isON:false};c.psi=new Array(c.numPt);c.psi2=new Array(2*(c.numPt+1));c.Tji=new Array(c.numPt+1).fill(0);c.v=new Array(c.numPt);c.drawWave=c.init2DWave=c.draw2DWave=c.drawPotential=c.resetAni=noop;c.reset=function reset() 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         this.uncertainty = this.epsilon * this.slider1.value;
         this.k0 = this.slider2.value;
         this.potentialCenter = this.slider3.value;
         this.potentialHeight = this.slider4.value;
         var _loc1_ = Math.sqrt(2) * this.uncertainty;
         var _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc4_ = this.epsilon * (_loc2_ - this.x0);
            _loc5_ = -1 / (2 * _loc1_ * _loc1_) * _loc4_ * _loc4_;
            this.psi[_loc2_] = Complex.polar(Math.exp(_loc5_),this.k0 * _loc4_);
            _loc2_++;
         }
         this.v = Potential1D.getU(this.numPt,this.potentialType,this.potentialCenter,this.potentialHeight,this.potentialWidth);
         this.quantum1D.setPotential(this.v);
         var _loc3_ = this.k0 * this.k0 + this.v[this.x0];
         Potential1D.DrawFtn(this.canvas_Potential,new Rectangle(this.xLeft,5,this.numPt + 1,90),this.v,_loc3_,true);
         this.Time = 0;
         this.timeStr.text = "0";
         this.Time2D = 0;
         this.drawWave();
         this.init2DWave();
         this.draw2DWave();
      }.bind(c);
c.run=function run() 
      {
         this.quantum1D.calcNext(this.psi);
         this.Time += 1;
         this.timeStr.text = "" + this.Time;
         if(this.Time >= 5000)
         {
            this.resetAni();
            this.Time = 0;
            return;
         }
         if(Math.floor(this.Time / 5) * 5 == this.Time)
         {
            this.drawWave(-1);
         }
         if(!this.flatChk.isChecked)
         {
            if(Math.floor(this.Time / 40) * 40 == this.Time)
            {
               if(this.Time2D < 60)
               {
                  ++this.Time2D;
                  this.draw2DWave();
               }
            }
         }
         else if(Math.floor(this.Time / 8) * 8 == this.Time)
         {
            if(this.Time2D < 550)
            {
               ++this.Time2D;
               this.draw2DWave();
            }
         }
      }.bind(c);
c.quantum1D=new Quantum1D(c.numPt,c.epsilon,c.lambda);Potential1D.DrawFtn=noop;c.reset();return c;};
dynamicsFactories["flash-71ff0e62c1f13b7a"]=(p,random=Math.random)=>{const Math=Object.create(globalThis.Math);Math.random=random;let Complex;Complex=(function(){const TWO_PI=2*Math.PI;function Complex(... rest)
      {this.re=undefined;this.im=undefined;
         
         this.re = Number.NaN;
         this.im = Number.NaN;
         switch(rest.length)
         {
            case 0:
               this.re = Number(0);
               this.im = Number(0);
               break;
            case 1:
               if(rest[0] instanceof Complex)
               {
                  this.re = Number(rest[0].re);
                  this.im = Number(rest[0].im);
               }
               else if(typeof rest[0] === "number")
               {
                  this.re = Number(rest[0]);
                  this.im = Number(0);
               }
               else if(rest[0] instanceof XML)
               {
                  this.re = this.fromXML(rest[0]).re;
                  this.im = this.fromXML(rest[0]).im;
               }
               else if(typeof rest[0] === "string")
               {
                  this.re = this.fromString(rest[0]).re;
                  this.im = this.fromString(rest[0]).im;
               }
               break;
            case 2:
               this.re = Number(rest[0]);
               this.im = Number(rest[1]);
         }
      }
function real(param1) 
      {
         return new Complex(param1,0);
      }
function cart(param1, param2) 
      {
         return new Complex(param1,param2);
      }
function polar(param1, param2) 
      {
         if(param1 < 0)
         {
            param2 += Math.PI;
            param1 = -param1;
         }
         param2 %= TWO_PI;
         return cart(param1 * Math.cos(param2),param1 * Math.sin(param2));
      }
function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      }
function absPrivate(param1, param2) 
      {
         var _loc5_ = NaN;
         var _loc3_ = Math.abs(param1);
         var _loc4_ = Math.abs(param2);
         if(_loc3_ == 0 && _loc4_ == 0)
         {
            return 0;
         }
         if(_loc3_ >= _loc4_)
         {
            _loc5_ = param2 / param1;
            return _loc3_ * Math.sqrt(1 + _loc5_ * _loc5_);
         }
         _loc5_ = param1 / param2;
         return _loc4_ * Math.sqrt(1 + _loc5_ * _loc5_);
      }
function inv(param1) 
      {
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         if(Math.abs(param1.re) >= Math.abs(param1.im))
         {
            _loc2_ = 1 / (param1.re + param1.im * (param1.im / param1.re));
            _loc3_ = _loc2_ * (-param1.im / param1.re);
         }
         else
         {
            _loc4_ = 1 / (param1.re * (param1.re / param1.im) + param1.im);
            _loc2_ = _loc4_ * (param1.re / param1.im);
            _loc3_ = -_loc4_;
         }
         param1.re = _loc2_;
         param1.im = _loc3_;
      }
function divPrivate(param1, param2, param3) 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         if(Math.abs(param2) >= Math.abs(param3))
         {
            _loc6_ = 1 / (param2 + param3 * (param3 / param2));
            _loc4_ = _loc6_ * (param1.re + param1.im * (param3 / param2));
            _loc5_ = _loc6_ * (param1.im - param1.re * (param3 / param2));
         }
         else
         {
            _loc6_ = 1 / (param2 * (param2 / param3) + param3);
            _loc4_ = _loc6_ * (param1.re * (param2 / param3) + param1.im);
            _loc5_ = _loc6_ * (param1.im * (param2 / param3) - param1.re);
         }
         param1.re = _loc4_;
         param1.im = _loc5_;
      }
function sqrtPrivate(param1) 
      {
         var _loc5_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = 0;
         var _loc4_ = param1.abs();
         if(_loc4_ > 0)
         {
            if(param1.re > 0)
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ + param1.re));
               param1.re = _loc5_;
               param1.im = 0.5 * param1.im / _loc5_;
            }
            else
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ - param1.re));
               if(param1.im < 0)
               {
                  _loc5_ = -_loc5_;
               }
               param1.re = 0.5 * param1.im / _loc5_;
               param1.im = _loc5_;
            }
         }
         else
         {
            param1.re = 0;
            param1.im = 0;
         }
      }
Complex.prototype.isInfinite=function isInfinite() 
      {
         return !isFinite(this.re) || !isFinite(this.im);
      };
Complex.prototype.isNaC=function isNaC() 
      {
         return isNaN(this.re) || isNaN(this.im);
      };
Complex.prototype.equals=function equals(param1, param2) 
      {
         return absPrivate(this.re - param1.re,this.im - param1.im) <= Math.abs(param2);
      };
Complex.prototype.getRe=function getRe() 
      {
         return this.re;
      };
Complex.prototype.getIm=function getIm() 
      {
         return this.im;
      };
Complex.prototype.norm=function norm() 
      {
         return this.re * this.re + this.im * this.im;
      };
Complex.prototype.abs=function abs() 
      {
         return absPrivate(this.re,this.im);
      };
Complex.prototype.arg=function arg() 
      {
         return Math.atan2(this.im,this.re);
      };
Complex.prototype.neg=function neg() 
      {
         return this.scale(-1);
      };
Complex.prototype.conj=function conj() 
      {
         return cart(this.re,-this.im);
      };
Complex.prototype.scale=function scale(param1) 
      {
         return cart(param1 * this.re,param1 * this.im);
      };
Complex.prototype.add=function add(param1) 
      {
         return cart(this.re + param1.re,this.im + param1.im);
      };
Complex.prototype.sub=function sub(param1) 
      {
         return cart(this.re - param1.re,this.im - param1.im);
      };
Complex.prototype.mul=function mul(param1) 
      {
         return cart(this.re * param1.re - this.im * param1.im,this.re * param1.im + this.im * param1.re);
      };
Complex.prototype.div=function div(param1) 
      {
         var _loc2_ = new Complex(this);
         divPrivate(_loc2_,param1.re,param1.im);
         return _loc2_;
      };
Complex.prototype.sqrt=function sqrt() 
      {
         var _loc1_ = new Complex(this);
         sqrtPrivate(_loc1_);
         return _loc1_;
      };
Complex.prototype.pow=function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      };
Complex.prototype.exp=function exp() 
      {
         var _loc1_ = Math.exp(this.re);
         return cart(_loc1_ * Math.cos(this.im),_loc1_ * Math.sin(this.im));
      };
Complex.prototype.log=function log() 
      {
         return cart(Math.log(this.abs()),this.arg());
      };
Complex.prototype.sin=function sin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         return cart(0.5 * _loc6_,-0.5 * _loc5_);
      };
Complex.prototype.cos=function cos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         return cart(0.5 * _loc5_,0.5 * _loc6_);
      };
Complex.prototype.tan=function tan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc1_ = cart(0.5 * _loc10_,-0.5 * _loc9_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc11_ = 0.5 * _loc9_;
         _loc12_ = 0.5 * _loc10_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.cosec=function cosec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         _loc1_ = cart(0.5 * _loc6_,-0.5 * _loc5_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.sec=function sec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         _loc1_ = cart(0.5 * _loc5_,0.5 * _loc6_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.cot=function cot() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc1_ = cart(0.5 * _loc9_,0.5 * _loc10_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc11_ = 0.5 * _loc10_;
         _loc12_ = -0.5 * _loc9_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.sinh=function sinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ -= _loc5_;
         _loc4_ -= _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.cosh=function cosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ += _loc5_;
         _loc4_ += _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.tanh=function tanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc7_ = _loc3_ - _loc5_;
         _loc8_ = _loc4_ - _loc6_;
         _loc1_ = cart(0.5 * _loc7_,0.5 * _loc8_);
         _loc7_ = _loc3_ + _loc5_;
         _loc8_ = _loc4_ + _loc6_;
         _loc9_ = 0.5 * _loc7_;
         _loc10_ = 0.5 * _loc8_;
         divPrivate(_loc1_,_loc9_,_loc10_);
         return _loc1_;
      };
Complex.prototype.asin=function asin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -this.im;
         _loc3_ = this.re;
         _loc1_.re = _loc2_ + _loc1_.re;
         _loc1_.im = _loc3_ + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.acos=function acos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -_loc1_.im;
         _loc3_ = _loc1_.re;
         _loc1_.re = this.re + _loc2_;
         _loc1_.im = this.im + _loc3_;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.atan=function atan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(-this.re,1 - this.im);
         _loc2_ = this.re;
         _loc3_ = 1 + this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc3_;
         _loc1_.im = -0.5 * _loc2_;
         return _loc1_;
      };
Complex.prototype.asinh=function asinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im + 1;
         _loc3_ = this.re * this.im + this.im * this.re + 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.acosh=function acosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im - 1;
         _loc3_ = this.re * this.im + this.im * this.re - 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.atanh=function atanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(1 + this.re,this.im);
         _loc2_ = 1 - this.re;
         _loc3_ = -this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc2_;
         _loc1_.im = 0.5 * _loc3_;
         return _loc1_;
      };Complex.real=real;Complex.cart=cart;Complex.polar=polar;Complex.pow=pow;Complex.absPrivate=absPrivate;Complex.inv=inv;Complex.divPrivate=divPrivate;Complex.sqrtPrivate=sqrtPrivate;Complex.NaC=new Complex(Number.NaN,Number.NaN);Complex.i=new Complex(0,1);return Complex;})();
let Potential1D;Potential1D=(function(){const TWO_PI=2*Math.PI;function Potential1D()
      {
         
      }
function getU(param1, param2 = 4, param3 = 256, param4 = 10000, param5 = 500) 
      {param1=Math.trunc(param1);param2=Math.trunc(param2);param3=Math.trunc(param3);param4=Math.trunc(param4);param5=Math.trunc(param5);
         var _loc7_ = 0;
         var _loc8_ = NaN;
         var _loc11_ = 0;
         var _loc6_ = new Array(param1);
         _loc7_ = 0;
         while(_loc7_ < param1)
         {
            _loc6_[_loc7_] = 0;
            _loc7_++;
         }
         var _loc9_ = param3 - param5 / 2;
         if(_loc9_ < 0)
         {
            _loc9_ = 0;
         }
         var _loc10_ = param3 + param5 / 2;
         if(_loc10_ > param1)
         {
            _loc10_ = param1;
         }
         switch(param2)
         {
            case 0:
               _loc7_ = _loc9_;
               while(_loc7_ < _loc10_)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 1:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  if(_loc7_ < _loc9_ || _loc7_ > _loc10_)
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
               break;
            case 2:
               _loc7_ = param3;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 3:
               break;
            case 4:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 5:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / Math.abs(param3 - 1);
               }
               else
               {
                  _loc8_ = 1 * param4 / Math.abs(param1 - param3);
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * Math.abs(_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 6:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3 * param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3) * (param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 7:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc11_ = Math.abs(_loc7_ - param1 / 2) + param5 / 2;
                  if(_loc11_ / param5 / 2 * 2 == _loc11_ / param5)
                  {
                     _loc6_[_loc7_] = 0;
                  }
                  else
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
         }
         return _loc6_;
      }Potential1D.getU=getU;return Potential1D;})();
let Quantum1D;Quantum1D=(function(){const TWO_PI=2*Math.PI;function Quantum1D(param1, param2, param3, param4 = null)
      {this.numPt=undefined;this.epsilon=undefined;this.lambda=undefined;this.iLambda=undefined;this.v=undefined;this.a=undefined;this.b=undefined;param1=Math.trunc(param1);
         
         this.numPt = param1;
         this.epsilon = param2;
         this.lambda = param3;
         this.a = new Array(param1);
         this.b = new Array(param1);
         this.iLambda = new Complex(0,param3);
         if(param4 != null)
         {
            this.setPotential(param4);
         }
      }
Quantum1D.prototype.setPotential=function setPotential(param1) 
      {
         this.v = param1;
         this.calcLU();
      };
Quantum1D.prototype.calcLU=function calcLU() 
      {
         var _loc2_ = 0;
         var _loc1_ = new Array(this.numPt);
         _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc1_[_loc2_] = Complex.cart(-2 - this.epsilon * this.epsilon * this.v[_loc2_],this.lambda);
            _loc2_++;
         }
         this.a[0] = new Complex(_loc1_[0]);
         var _loc3_ = new Complex(1,0);
         _loc2_ = 1;
         while(_loc2_ < this.numPt)
         {
            this.a[_loc2_] = _loc1_[_loc2_].sub(_loc3_.div(this.a[_loc2_ - 1]));
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numPt - 1)
         {
            this.b[_loc2_] = _loc3_.div(this.a[_loc2_]);
            _loc2_++;
         }
      };
Quantum1D.prototype.calcNext=function calcNext(param1) 
      {
         var _loc2_ = new Array(this.numPt);
         var _loc3_ = 0;
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = Math.trunc(this.numPt - 1);
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = 1;
         while(_loc3_ < this.numPt - 1)
         {
            _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
            _loc3_++;
         }
         var _loc4_ = new Array(this.numPt);
         _loc4_[0] = _loc2_[0].div(this.a[0]);
         _loc3_ = 1;
         while(_loc3_ < this.numPt)
         {
            _loc4_[_loc3_] = _loc2_[_loc3_].sub(_loc4_[_loc3_ - 1]).div(this.a[_loc3_]);
            _loc3_++;
         }
         param1[this.numPt - 1] = new Complex(_loc4_[this.numPt - 1]);
         _loc3_ = Math.trunc(this.numPt - 2);
         while(_loc3_ >= 0)
         {
            param1[_loc3_] = _loc4_[_loc3_].sub(this.b[_loc3_].mul(param1[_loc3_ + 1]));
            _loc3_--;
         }
      };return Quantum1D;})();
const c={};Object.defineProperty(c,"yMargin",{get(){return this.__yMargin??0;},set(v){this.__yMargin=(v|0);}});Object.defineProperty(c,"xMargin",{get(){return this.__xMargin??0;},set(v){this.__xMargin=(v|0);}});Object.defineProperty(c,"numPt",{get(){return this.__numPt??0;},set(v){this.__numPt=(v|0);}});Object.defineProperty(c,"Time",{get(){return this.__Time??0;},set(v){this.__Time=(v|0);}});Object.defineProperty(c,"Time2D",{get(){return this.__Time2D??0;},set(v){this.__Time2D=(v|0);}});Object.defineProperty(c,"potentialType",{get(){return this.__potentialType??0;},set(v){this.__potentialType=(v|0);}});Object.defineProperty(c,"potentialCenter",{get(){return this.__potentialCenter??0;},set(v){this.__potentialCenter=(v|0);}});Object.defineProperty(c,"potentialHeight",{get(){return this.__potentialHeight??0;},set(v){this.__potentialHeight=(v|0);}});Object.defineProperty(c,"potentialWidth",{get(){return this.__potentialWidth??0;},set(v){this.__potentialWidth=(v|0);}});Object.defineProperty(c,"k0",{get(){return this.__k0??0;},set(v){this.__k0=(v|0);}});Object.defineProperty(c,"x0",{get(){return this.__x0??0;},set(v){this.__x0=(v|0);}});Object.defineProperty(c,"xLeft",{get(){return this.__xLeft??0;},set(v){this.__xLeft=(v|0);}});Object.defineProperty(c,"i",{get(){return this.__i??0;},set(v){this.__i=(v|0);}});c.numPt=680;c.epsilon=0.005;c.lambda=2;c.deltaT=0.000025;c.deltaK=1.8479956785822313;c.yMargin=250;c.xMargin=125;c.Time=0;c.Time2D=0;c.potentialType=6;c.potentialCenter=340;c.potentialHeight=10000;c.potentialWidth=50;c.k0=50;c.x0=200;c.uncertainty=0.05;c.xLeft=9;c.i=1;for(const [k,v]of Object.entries(p))c[k]=typeof v==="boolean"?{isChecked:v}:k==="potentialCmb"?{selIndex:v}:{value:v};
for(const k of ["timeStr","timeStepStr","periodTxt","omegaTxt","momentumTxt","omeganTxt"])c[k]={text:""};for(const k of ["canvas","canvas_Potential","canvas_State","canvas_StateGrid","canvas_PotentialBackground"])c[k]={graphics:graph()};c.aniTimer={reset:noop,stop:noop};c.startBtn={isON:false};c.psi=new Array(c.numPt);c.psi2=new Array(2*(c.numPt+1));c.Tji=new Array(c.numPt+1).fill(0);c.v=new Array(c.numPt);c.drawWave=c.init2DWave=c.draw2DWave=c.drawPotential=c.resetAni=noop;c.reset=function reset() 
      {
         var _loc2_ = 0;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         this.x0 = this.slider3.value;
         this.uncertainty = this.epsilon * this.slider1.value;
         this.k0 = this.slider2.value;
         this.potentialType = this.potentialCmb.selIndex;
         this.potentialHeight = this.slider4.value;
         var _loc1_ = Math.sqrt(2) * this.uncertainty;
         _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc3_ = this.epsilon * (_loc2_ - this.x0);
            _loc4_ = -1 / (2 * _loc1_ * _loc1_) * _loc3_ * _loc3_;
            this.psi[_loc2_] = Complex.polar(Math.exp(_loc4_),this.k0 * _loc3_);
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc3_ = this.epsilon * (_loc2_ - (this.numPt - this.x0));
            _loc4_ = -1 / (2 * _loc1_ * _loc1_) * _loc3_ * _loc3_;
            if(this.parityChk.isChecked)
            {
               this.psi[_loc2_] = this.psi[_loc2_].add(Complex.polar(Math.exp(_loc4_),-this.k0 * _loc3_));
            }
            else
            {
               this.psi[_loc2_] = this.psi[_loc2_].sub(Complex.polar(Math.exp(_loc4_),-this.k0 * _loc3_));
            }
            _loc2_++;
         }
         this.v = Potential1D.getU(this.numPt,this.potentialType,this.potentialCenter,this.potentialHeight,this.potentialWidth);
         this.quantum1D.setPotential(this.v);
         var _loc5_ = this.k0 * this.k0 + (this.v[this.x0] + this.v[this.numPt - this.x0]) / 2;
         Potential1D.DrawFtn(this.canvas_Potential,new Rectangle(this.xLeft,5,this.numPt + 1,90),this.v,_loc5_,true);
         this.Time = 0;
         this.timeStr.text = "0";
         this.Time2D = 0;
         this.drawWave();
         this.init2DWave();
         this.draw2DWave();
      }.bind(c);
c.run=function run() 
      {
         this.quantum1D.calcNext(this.psi);
         this.Time += 1;
         this.timeStr.text = "" + this.Time;
         if(this.Time >= 5000)
         {
            this.resetAni();
            this.Time = 0;
            return;
         }
         if(Math.floor(this.Time / 5) * 5 == this.Time)
         {
            this.drawWave(-1);
         }
         if(!this.flatChk.isChecked)
         {
            if(Math.floor(this.Time / 40) * 40 == this.Time)
            {
               if(this.Time2D < 60)
               {
                  ++this.Time2D;
                  this.draw2DWave();
               }
            }
         }
         else if(Math.floor(this.Time / 8) * 8 == this.Time)
         {
            if(this.Time2D < 550)
            {
               ++this.Time2D;
               this.draw2DWave();
            }
         }
      }.bind(c);
c.quantum1D=new Quantum1D(c.numPt,c.epsilon,c.lambda);Potential1D.DrawFtn=noop;c.reset();return c;};
dynamicsFactories["flash-82557e88691f925e"]=(p,random=Math.random)=>{const Math=Object.create(globalThis.Math);Math.random=random;let Complex;Complex=(function(){const TWO_PI=2*Math.PI;function Complex(... rest)
      {this.re=undefined;this.im=undefined;
         
         this.re = Number.NaN;
         this.im = Number.NaN;
         switch(rest.length)
         {
            case 0:
               this.re = Number(0);
               this.im = Number(0);
               break;
            case 1:
               if(rest[0] instanceof Complex)
               {
                  this.re = Number(rest[0].re);
                  this.im = Number(rest[0].im);
               }
               else if(typeof rest[0] === "number")
               {
                  this.re = Number(rest[0]);
                  this.im = Number(0);
               }
               else if(rest[0] instanceof XML)
               {
                  this.re = this.fromXML(rest[0]).re;
                  this.im = this.fromXML(rest[0]).im;
               }
               else if(typeof rest[0] === "string")
               {
                  this.re = this.fromString(rest[0]).re;
                  this.im = this.fromString(rest[0]).im;
               }
               break;
            case 2:
               this.re = Number(rest[0]);
               this.im = Number(rest[1]);
         }
      }
function real(param1) 
      {
         return new Complex(param1,0);
      }
function cart(param1, param2) 
      {
         return new Complex(param1,param2);
      }
function polar(param1, param2) 
      {
         if(param1 < 0)
         {
            param2 += Math.PI;
            param1 = -param1;
         }
         param2 %= TWO_PI;
         return cart(param1 * Math.cos(param2),param1 * Math.sin(param2));
      }
function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      }
function absPrivate(param1, param2) 
      {
         var _loc5_ = NaN;
         var _loc3_ = Math.abs(param1);
         var _loc4_ = Math.abs(param2);
         if(_loc3_ == 0 && _loc4_ == 0)
         {
            return 0;
         }
         if(_loc3_ >= _loc4_)
         {
            _loc5_ = param2 / param1;
            return _loc3_ * Math.sqrt(1 + _loc5_ * _loc5_);
         }
         _loc5_ = param1 / param2;
         return _loc4_ * Math.sqrt(1 + _loc5_ * _loc5_);
      }
function inv(param1) 
      {
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         if(Math.abs(param1.re) >= Math.abs(param1.im))
         {
            _loc2_ = 1 / (param1.re + param1.im * (param1.im / param1.re));
            _loc3_ = _loc2_ * (-param1.im / param1.re);
         }
         else
         {
            _loc4_ = 1 / (param1.re * (param1.re / param1.im) + param1.im);
            _loc2_ = _loc4_ * (param1.re / param1.im);
            _loc3_ = -_loc4_;
         }
         param1.re = _loc2_;
         param1.im = _loc3_;
      }
function divPrivate(param1, param2, param3) 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         if(Math.abs(param2) >= Math.abs(param3))
         {
            _loc6_ = 1 / (param2 + param3 * (param3 / param2));
            _loc4_ = _loc6_ * (param1.re + param1.im * (param3 / param2));
            _loc5_ = _loc6_ * (param1.im - param1.re * (param3 / param2));
         }
         else
         {
            _loc6_ = 1 / (param2 * (param2 / param3) + param3);
            _loc4_ = _loc6_ * (param1.re * (param2 / param3) + param1.im);
            _loc5_ = _loc6_ * (param1.im * (param2 / param3) - param1.re);
         }
         param1.re = _loc4_;
         param1.im = _loc5_;
      }
function sqrtPrivate(param1) 
      {
         var _loc5_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = 0;
         var _loc4_ = param1.abs();
         if(_loc4_ > 0)
         {
            if(param1.re > 0)
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ + param1.re));
               param1.re = _loc5_;
               param1.im = 0.5 * param1.im / _loc5_;
            }
            else
            {
               _loc5_ = Math.sqrt(0.5 * (_loc4_ - param1.re));
               if(param1.im < 0)
               {
                  _loc5_ = -_loc5_;
               }
               param1.re = 0.5 * param1.im / _loc5_;
               param1.im = _loc5_;
            }
         }
         else
         {
            param1.re = 0;
            param1.im = 0;
         }
      }
Complex.prototype.isInfinite=function isInfinite() 
      {
         return !isFinite(this.re) || !isFinite(this.im);
      };
Complex.prototype.isNaC=function isNaC() 
      {
         return isNaN(this.re) || isNaN(this.im);
      };
Complex.prototype.equals=function equals(param1, param2) 
      {
         return absPrivate(this.re - param1.re,this.im - param1.im) <= Math.abs(param2);
      };
Complex.prototype.getRe=function getRe() 
      {
         return this.re;
      };
Complex.prototype.getIm=function getIm() 
      {
         return this.im;
      };
Complex.prototype.norm=function norm() 
      {
         return this.re * this.re + this.im * this.im;
      };
Complex.prototype.abs=function abs() 
      {
         return absPrivate(this.re,this.im);
      };
Complex.prototype.arg=function arg() 
      {
         return Math.atan2(this.im,this.re);
      };
Complex.prototype.neg=function neg() 
      {
         return this.scale(-1);
      };
Complex.prototype.conj=function conj() 
      {
         return cart(this.re,-this.im);
      };
Complex.prototype.scale=function scale(param1) 
      {
         return cart(param1 * this.re,param1 * this.im);
      };
Complex.prototype.add=function add(param1) 
      {
         return cart(this.re + param1.re,this.im + param1.im);
      };
Complex.prototype.sub=function sub(param1) 
      {
         return cart(this.re - param1.re,this.im - param1.im);
      };
Complex.prototype.mul=function mul(param1) 
      {
         return cart(this.re * param1.re - this.im * param1.im,this.re * param1.im + this.im * param1.re);
      };
Complex.prototype.div=function div(param1) 
      {
         var _loc2_ = new Complex(this);
         divPrivate(_loc2_,param1.re,param1.im);
         return _loc2_;
      };
Complex.prototype.sqrt=function sqrt() 
      {
         var _loc1_ = new Complex(this);
         sqrtPrivate(_loc1_);
         return _loc1_;
      };
Complex.prototype.pow=function pow(... rest) 
      {
         var _loc2_ = NaN;
         var _loc3_ = null;
         var _loc4_ = NaN;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         if(rest[0] instanceof Complex && typeof rest[1] === "number")
         {
            _loc3_ = new Complex(rest[0]);
            _loc4_ = Number(rest[1]);
            _loc6_ = _loc4_ * Math.log(_loc3_.abs());
            _loc7_ = _loc4_ * _loc3_.arg();
            _loc8_ = Math.exp(_loc6_);
            return cart(_loc8_ * Math.cos(_loc7_),_loc8_ * Math.sin(_loc7_));
         }
         if(typeof rest[0] === "number" && rest[1] instanceof Complex)
         {
            _loc2_ = Number(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(Math.abs(_loc2_));
            _loc7_ = Math.atan2(0,_loc2_);
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         if(rest[0] instanceof Complex && rest[1] instanceof Complex)
         {
            _loc3_ = new Complex(rest[0]);
            _loc5_ = new Complex(rest[1]);
            _loc6_ = Math.log(_loc3_.abs());
            _loc7_ = _loc3_.arg();
            _loc9_ = _loc6_ * _loc5_.re - _loc7_ * _loc5_.im;
            _loc10_ = _loc6_ * _loc5_.im + _loc7_ * _loc5_.re;
            _loc8_ = Math.exp(_loc9_);
            return cart(_loc8_ * Math.cos(_loc10_),_loc8_ * Math.sin(_loc10_));
         }
         return new Complex(Number.NaN,Number.NaN);
      };
Complex.prototype.exp=function exp() 
      {
         var _loc1_ = Math.exp(this.re);
         return cart(_loc1_ * Math.cos(this.im),_loc1_ * Math.sin(this.im));
      };
Complex.prototype.log=function log() 
      {
         return cart(Math.log(this.abs()),this.arg());
      };
Complex.prototype.sin=function sin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         return cart(0.5 * _loc6_,-0.5 * _loc5_);
      };
Complex.prototype.cos=function cos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         return cart(0.5 * _loc5_,0.5 * _loc6_);
      };
Complex.prototype.tan=function tan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc1_ = cart(0.5 * _loc10_,-0.5 * _loc9_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc11_ = 0.5 * _loc9_;
         _loc12_ = 0.5 * _loc10_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.cosec=function cosec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ -= _loc7_;
         _loc6_ -= _loc8_;
         _loc1_ = cart(0.5 * _loc6_,-0.5 * _loc5_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.sec=function sec() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc5_ += _loc7_;
         _loc6_ += _loc8_;
         _loc1_ = cart(0.5 * _loc5_,0.5 * _loc6_);
         inv(_loc1_);
         return _loc1_;
      };
Complex.prototype.cot=function cot() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc3_ = -this.im;
         _loc4_ = this.re;
         _loc2_ = Math.exp(_loc3_);
         _loc5_ = _loc2_ * Math.cos(_loc4_);
         _loc6_ = _loc2_ * Math.sin(_loc4_);
         _loc2_ = Math.exp(-_loc3_);
         _loc7_ = _loc2_ * Math.cos(-_loc4_);
         _loc8_ = _loc2_ * Math.sin(-_loc4_);
         _loc9_ = _loc5_ + _loc7_;
         _loc10_ = _loc6_ + _loc8_;
         _loc1_ = cart(0.5 * _loc9_,0.5 * _loc10_);
         _loc9_ = _loc5_ - _loc7_;
         _loc10_ = _loc6_ - _loc8_;
         _loc11_ = 0.5 * _loc10_;
         _loc12_ = -0.5 * _loc9_;
         divPrivate(_loc1_,_loc11_,_loc12_);
         return _loc1_;
      };
Complex.prototype.sinh=function sinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ -= _loc5_;
         _loc4_ -= _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.cosh=function cosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc3_ += _loc5_;
         _loc4_ += _loc6_;
         return cart(0.5 * _loc3_,0.5 * _loc4_);
      };
Complex.prototype.tanh=function tanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         _loc2_ = Math.exp(this.re);
         _loc3_ = _loc2_ * Math.cos(this.im);
         _loc4_ = _loc2_ * Math.sin(this.im);
         _loc2_ = Math.exp(-this.re);
         _loc5_ = _loc2_ * Math.cos(-this.im);
         _loc6_ = _loc2_ * Math.sin(-this.im);
         _loc7_ = _loc3_ - _loc5_;
         _loc8_ = _loc4_ - _loc6_;
         _loc1_ = cart(0.5 * _loc7_,0.5 * _loc8_);
         _loc7_ = _loc3_ + _loc5_;
         _loc8_ = _loc4_ + _loc6_;
         _loc9_ = 0.5 * _loc7_;
         _loc10_ = 0.5 * _loc8_;
         divPrivate(_loc1_,_loc9_,_loc10_);
         return _loc1_;
      };
Complex.prototype.asin=function asin() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -this.im;
         _loc3_ = this.re;
         _loc1_.re = _loc2_ + _loc1_.re;
         _loc1_.im = _loc3_ + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.acos=function acos() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = 1 - (this.re * this.re - this.im * this.im);
         _loc3_ = 0 - (this.re * this.im + this.im * this.re);
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc2_ = -_loc1_.im;
         _loc3_ = _loc1_.re;
         _loc1_.re = this.re + _loc2_;
         _loc1_.im = this.im + _loc3_;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc3_;
         _loc1_.im = -_loc2_;
         return _loc1_;
      };
Complex.prototype.atan=function atan() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(-this.re,1 - this.im);
         _loc2_ = this.re;
         _loc3_ = 1 + this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc3_;
         _loc1_.im = -0.5 * _loc2_;
         return _loc1_;
      };
Complex.prototype.asinh=function asinh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im + 1;
         _loc3_ = this.re * this.im + this.im * this.re + 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.acosh=function acosh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc2_ = this.re * this.re - this.im * this.im - 1;
         _loc3_ = this.re * this.im + this.im * this.re - 0;
         _loc1_ = cart(_loc2_,_loc3_);
         sqrtPrivate(_loc1_);
         _loc1_.re = this.re + _loc1_.re;
         _loc1_.im = this.im + _loc1_.im;
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = _loc2_;
         _loc1_.im = _loc3_;
         return _loc1_;
      };
Complex.prototype.atanh=function atanh() 
      {
         var _loc1_ = null;
         var _loc2_ = NaN;
         var _loc3_ = NaN;
         _loc1_ = cart(1 + this.re,this.im);
         _loc2_ = 1 - this.re;
         _loc3_ = -this.im;
         divPrivate(_loc1_,_loc2_,_loc3_);
         _loc2_ = Math.log(_loc1_.abs());
         _loc3_ = _loc1_.arg();
         _loc1_.re = 0.5 * _loc2_;
         _loc1_.im = 0.5 * _loc3_;
         return _loc1_;
      };Complex.real=real;Complex.cart=cart;Complex.polar=polar;Complex.pow=pow;Complex.absPrivate=absPrivate;Complex.inv=inv;Complex.divPrivate=divPrivate;Complex.sqrtPrivate=sqrtPrivate;Complex.NaC=new Complex(Number.NaN,Number.NaN);Complex.i=new Complex(0,1);return Complex;})();
let Potential1D;Potential1D=(function(){const TWO_PI=2*Math.PI;function Potential1D()
      {
         
      }
function getU(param1, param2 = 4, param3 = 256, param4 = 10000, param5 = 500) 
      {param1=Math.trunc(param1);param2=Math.trunc(param2);param3=Math.trunc(param3);param4=Math.trunc(param4);param5=Math.trunc(param5);
         var _loc7_ = 0;
         var _loc8_ = NaN;
         var _loc11_ = 0;
         var _loc6_ = new Array(param1);
         _loc7_ = 0;
         while(_loc7_ < param1)
         {
            _loc6_[_loc7_] = 0;
            _loc7_++;
         }
         var _loc9_ = param3 - param5 / 2;
         if(_loc9_ < 0)
         {
            _loc9_ = 0;
         }
         var _loc10_ = param3 + param5 / 2;
         if(_loc10_ > param1)
         {
            _loc10_ = param1;
         }
         switch(param2)
         {
            case 0:
               _loc7_ = _loc9_;
               while(_loc7_ < _loc10_)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 1:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  if(_loc7_ < _loc9_ || _loc7_ > _loc10_)
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
               break;
            case 2:
               _loc7_ = param3;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = param4;
                  _loc7_++;
               }
               break;
            case 3:
               break;
            case 4:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 5:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / Math.abs(param3 - 1);
               }
               else
               {
                  _loc8_ = 1 * param4 / Math.abs(param1 - param3);
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * Math.abs(_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 6:
               if(param3 > param1 / 2)
               {
                  _loc8_ = 1 * param4 / (param3 * param3 * param3 * param3);
               }
               else
               {
                  _loc8_ = 1 * param4 / ((param1 - param3) * (param1 - param3) * (param1 - param3) * (param1 - param3));
               }
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc6_[_loc7_] = _loc8_ * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3) * (_loc7_ - param3);
                  _loc7_++;
               }
               break;
            case 7:
               _loc7_ = 0;
               while(_loc7_ < param1)
               {
                  _loc11_ = Math.abs(_loc7_ - param1 / 2) + param5 / 2;
                  if(_loc11_ / param5 / 2 * 2 == _loc11_ / param5)
                  {
                     _loc6_[_loc7_] = 0;
                  }
                  else
                  {
                     _loc6_[_loc7_] = param4;
                  }
                  _loc7_++;
               }
         }
         return _loc6_;
      }Potential1D.getU=getU;return Potential1D;})();
let Quantum1D;Quantum1D=(function(){const TWO_PI=2*Math.PI;function Quantum1D(param1, param2, param3, param4 = null)
      {this.numPt=undefined;this.epsilon=undefined;this.lambda=undefined;this.iLambda=undefined;this.v=undefined;this.a=undefined;this.b=undefined;param1=Math.trunc(param1);
         
         this.numPt = param1;
         this.epsilon = param2;
         this.lambda = param3;
         this.a = new Array(param1);
         this.b = new Array(param1);
         this.iLambda = new Complex(0,param3);
         if(param4 != null)
         {
            this.setPotential(param4);
         }
      }
Quantum1D.prototype.setPotential=function setPotential(param1) 
      {
         this.v = param1;
         this.calcLU();
      };
Quantum1D.prototype.calcLU=function calcLU() 
      {
         var _loc2_ = 0;
         var _loc1_ = new Array(this.numPt);
         _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc1_[_loc2_] = Complex.cart(-2 - this.epsilon * this.epsilon * this.v[_loc2_],this.lambda);
            _loc2_++;
         }
         this.a[0] = new Complex(_loc1_[0]);
         var _loc3_ = new Complex(1,0);
         _loc2_ = 1;
         while(_loc2_ < this.numPt)
         {
            this.a[_loc2_] = _loc1_[_loc2_].sub(_loc3_.div(this.a[_loc2_ - 1]));
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < this.numPt - 1)
         {
            this.b[_loc2_] = _loc3_.div(this.a[_loc2_]);
            _loc2_++;
         }
      };
Quantum1D.prototype.calcNext=function calcNext(param1) 
      {
         var _loc2_ = new Array(this.numPt);
         var _loc3_ = 0;
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = Math.trunc(this.numPt - 1);
         _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
         _loc3_ = 1;
         while(_loc3_ < this.numPt - 1)
         {
            _loc2_[_loc3_] = param1[_loc3_].scale(this.epsilon * this.epsilon * this.v[_loc3_] + 2).sub(param1[_loc3_ + 1]).sub(param1[_loc3_ - 1]).add(param1[_loc3_].mul(this.iLambda));
            _loc3_++;
         }
         var _loc4_ = new Array(this.numPt);
         _loc4_[0] = _loc2_[0].div(this.a[0]);
         _loc3_ = 1;
         while(_loc3_ < this.numPt)
         {
            _loc4_[_loc3_] = _loc2_[_loc3_].sub(_loc4_[_loc3_ - 1]).div(this.a[_loc3_]);
            _loc3_++;
         }
         param1[this.numPt - 1] = new Complex(_loc4_[this.numPt - 1]);
         _loc3_ = Math.trunc(this.numPt - 2);
         while(_loc3_ >= 0)
         {
            param1[_loc3_] = _loc4_[_loc3_].sub(this.b[_loc3_].mul(param1[_loc3_ + 1]));
            _loc3_--;
         }
      };return Quantum1D;})();
let FFT1D;FFT1D=(function(){const TWO_PI=2*Math.PI;function FFT1D(param1)
      {this.numPt=undefined;this.sint=undefined;param1=Math.trunc(param1);
         
         var _loc2_ = param1;
         var _loc3_ = 1;
         do
         {
            _loc2_ = Math.floor(_loc2_ / 2);
            _loc3_ *= 2;
         }
         while(_loc2_ > 1);
         if(_loc3_ != param1)
         {
            throw new ArgumentError("numData is not 2^N !");
         }
         this.numPt = param1;
         var _loc4_ = Math.floor(this.numPt / 4) + 1;
         this.sint = new Array(_loc4_);
         _loc2_ = 0;
         while(_loc2_ < _loc4_)
         {
            this.sint[_loc2_] = Math.sin(_loc2_ * 2 * Math.PI / this.numPt);
            _loc2_++;
         }
      }
function rearrangeArray(param1) 
      {
         var _loc3_ = 0;
         var _loc4_ = null;
         var _loc2_ = 0;
         while(_loc2_ < Math.floor(param1.length / 2))
         {
            _loc3_ = _loc2_ + Math.floor(param1.length / 2);
            _loc4_ = param1[_loc2_];
            param1[_loc2_] = param1[_loc3_];
            param1[_loc3_] = _loc4_;
            _loc2_++;
         }
      }
FFT1D.prototype.FFTransform1D=function FFTransform1D(param1, param2, param3) 
      {
         var _loc4_ = null;
         var _loc5_ = null;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = 0;
         var _loc9_ = 0;
         var _loc10_ = 0;
         var _loc11_ = 0;
         var _loc12_ = 0;
         var _loc13_ = 0;
         var _loc14_ = 0;
         var _loc15_ = 0;
         var _loc16_ = 0;
         var _loc17_ = 0;
         var _loc18_ = 0;
         var _loc19_ = 0;
         var _loc21_ = 0;
         var _loc22_ = 0;
         if(param1.length != this.numPt)
         {
            throw new ArgumentError("numer of Data is not numPt !");
         }
         _loc14_ = Math.floor(this.numPt / 4);
         _loc13_ = _loc14_ + _loc14_;
         var _loc20_ = new Array(this.numPt);
         _loc8_ = 0;
         while(_loc8_ < this.numPt)
         {
            _loc20_[_loc8_] = new Complex(param1[_loc8_]);
            _loc8_++;
         }
         _loc9_ = 0;
         _loc8_ = 0;
         while(_loc8_ < this.numPt - 2)
         {
            if(_loc9_ > _loc8_)
            {
               _loc4_ = new Complex(_loc20_[_loc9_]);
               _loc20_[_loc9_] = new Complex(_loc20_[_loc8_]);
               _loc20_[_loc8_] = new Complex(_loc4_);
            }
            _loc10_ = _loc13_;
            while(_loc9_ >= _loc10_)
            {
               _loc9_ -= _loc10_;
               _loc10_ = Math.floor(_loc10_ / 2);
            }
            _loc9_ += _loc10_;
            _loc8_++;
         }
         _loc18_ = 1;
         _loc15_ = 1;
         _loc12_ = 0;
         _loc16_ = 0;
         do
         {
            _loc8_ = _loc18_;
            _loc18_ += _loc18_;
            _loc9_ = 0;
            while(_loc9_ <= _loc8_ - 1)
            {
               _loc7_ = this.sint[_loc12_];
               if(param2)
               {
                  _loc7_ = -_loc7_;
               }
               _loc6_ = this.sint[_loc14_ - _loc12_];
               if(_loc9_ >= _loc15_)
               {
                  _loc12_ -= _loc16_;
                  _loc6_ = -_loc6_;
               }
               if(_loc9_ < _loc15_)
               {
                  _loc12_ += _loc16_;
               }
               _loc5_ = new Complex(_loc6_,_loc7_);
               _loc19_ = _loc9_;
               while(_loc19_ < this.numPt)
               {
                  _loc10_ = _loc19_;
                  _loc11_ = _loc10_ + _loc8_;
                  _loc4_ = _loc5_.mul(_loc20_[_loc11_]);
                  _loc20_[_loc11_] = _loc20_[_loc10_].sub(_loc4_);
                  _loc20_[_loc10_] = _loc20_[_loc10_].add(_loc4_);
                  _loc19_ += _loc18_;
               }
               _loc9_++;
            }
            _loc15_ = _loc8_;
            _loc16_ = Math.floor(_loc14_ / _loc8_);
         }
         while(_loc8_ < _loc13_);
         if(param2)
         {
            _loc8_ = 0;
            while(_loc8_ < this.numPt)
            {
               _loc20_[_loc8_] = _loc20_[_loc8_].scale(1 / this.numPt);
               _loc8_++;
            }
         }
         if(param3)
         {
            _loc21_ = -1;
            _loc22_ = 0;
            while(_loc22_ < _loc20_.length)
            {
               _loc21_ *= -1;
               _loc20_[_loc22_] = _loc20_[_loc22_].scale(_loc21_);
               _loc22_++;
            }
            rearrangeArray(_loc20_);
            return _loc20_;
         }
         return _loc20_;
      };
FFT1D.prototype.powerSpectrum1D=function powerSpectrum1D(param1, param2) 
      {
         var _loc3_ = this.FFTransform1D(param1,false,param2);
         var _loc4_ = Math.trunc(_loc3_.length);
         var _loc5_ = new Array(_loc4_);
         var _loc6_ = 0;
         while(_loc6_ < _loc4_)
         {
            _loc5_[_loc6_] = _loc3_[_loc6_].norm() * _loc4_;
            _loc6_++;
         }
         return _loc5_;
      };FFT1D.rearrangeArray=rearrangeArray;return FFT1D;})();
const c={};Object.defineProperty(c,"numPt",{get(){return this.__numPt??0;},set(v){this.__numPt=(v|0);}});Object.defineProperty(c,"Time",{get(){return this.__Time??0;},set(v){this.__Time=(v|0);}});Object.defineProperty(c,"potentialType",{get(){return this.__potentialType??0;},set(v){this.__potentialType=(v|0);}});Object.defineProperty(c,"potentialCenter",{get(){return this.__potentialCenter??0;},set(v){this.__potentialCenter=(v|0);}});Object.defineProperty(c,"potentialHeight",{get(){return this.__potentialHeight??0;},set(v){this.__potentialHeight=(v|0);}});Object.defineProperty(c,"potentialWidth",{get(){return this.__potentialWidth??0;},set(v){this.__potentialWidth=(v|0);}});Object.defineProperty(c,"k0",{get(){return this.__k0??0;},set(v){this.__k0=(v|0);}});Object.defineProperty(c,"x0",{get(){return this.__x0??0;},set(v){this.__x0=(v|0);}});Object.defineProperty(c,"xLeft",{get(){return this.__xLeft??0;},set(v){this.__xLeft=(v|0);}});Object.defineProperty(c,"i",{get(){return this.__i??0;},set(v){this.__i=(v|0);}});c.numPt=512;c.epsilon=0.005;c.lambda=2;c.deltaT=0.000025;c.deltaK=2.454369260617026;c.Time=0;c.potentialType=0;c.potentialCenter=256;c.potentialHeight=0;c.potentialWidth=100;c.k0=50;c.x0=256;c.uncertainty=0.05;c.xLeft=9;c.i=1;for(const [k,v]of Object.entries(p))c[k]=typeof v==="boolean"?{isChecked:v}:k==="potentialCmb"?{selIndex:v}:{value:v};
for(const k of ["timeStr","timeStepStr","periodTxt","omegaTxt","momentumTxt","omeganTxt"])c[k]={text:""};for(const k of ["canvas","canvas_Potential","canvas_State","canvas_StateGrid","canvas_PotentialBackground"])c[k]={graphics:graph()};c.aniTimer={reset:noop,stop:noop};c.startBtn={isON:false};c.psi=new Array(c.numPt);c.psi2=new Array(2*(c.numPt+1));c.Tji=new Array(c.numPt+1).fill(0);c.v=new Array(c.numPt);c.drawWave=c.init2DWave=c.draw2DWave=c.drawPotential=c.resetAni=noop;c.reset=function reset() 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         this.x0 = this.slider1.value;
         this.uncertainty = this.epsilon * this.slider2.value;
         this.k0 = this.slider3.value;
         var _loc1_ = Math.sqrt(2) * this.uncertainty;
         var _loc2_ = 0;
         while(_loc2_ < this.numPt)
         {
            _loc4_ = this.epsilon * (_loc2_ - this.x0);
            _loc5_ = -1 / (2 * _loc1_ * _loc1_) * _loc4_ * _loc4_;
            this.psi[_loc2_] = Complex.polar(Math.exp(_loc5_),this.k0 * _loc4_);
            _loc2_++;
         }
         this.momentumPsi = this.fft.FFTransform1D(this.psi,true,true);
         this.v = Potential1D.getU(this.numPt,this.potentialType,this.potentialCenter,this.potentialHeight,this.potentialWidth);
         this.quantum1D.setPotential(this.v);
         var _loc3_ = this.k0 * this.k0 + this.v[this.x0];
         this.Time = 0;
         this.timeStr.text = "" + this.Time;
         this.drawWave();
      }.bind(c);
c.run=function run() 
      {
         this.Time += 1;
         this.timeStr.text = "" + this.Time;
         this.quantum1D.calcNext(this.psi);
         if(this.Time >= 500)
         {
            this.resetAni();
            this.Time = 0;
            return;
         }
         this.momentumPsi = this.fft.FFTransform1D(this.psi,true,true);
         this.drawWave();
      }.bind(c);
c.quantum1D=new Quantum1D(c.numPt,c.epsilon,c.lambda);c.fft=new FFT1D(c.numPt);Potential1D.DrawFtn=noop;c.reset();return c;};
