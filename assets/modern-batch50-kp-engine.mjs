// Original Kronig–Penney numerical equations transcribed from Ki Soo Chung’s web textbook. New SVG views are separate.
import {Complex,ComplexMatrix} from "./modern-batch50-complex.mjs";
export class KronigPenney {constructor(b,c,U0,Emax=20){this.nData=501;this.Emax=Emax;this.delta=Emax*2.5/500;this.dataArray=new Array(501).fill(0);this.setParameter(b,c,U0);}
setParameter(param1, param2, param3) 
      {
         this.b = param1;
         this.c = param2;
         this.U0 = param3;
         this.makeAll();
      }
makeAll() 
      {
         var _loc1_ = 0;
         var _loc5_ = NaN;
         var _loc6_ = 0;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = 0;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         _loc1_ = 0;
         while(_loc1_ < this.nData)
         {
            _loc5_ = _loc1_ * this.delta;
            this.dataArray[_loc1_] = this.leftFtn(_loc5_);
            _loc1_++;
         }
         var _loc2_ = false;
         var _loc3_ = new Array();
         var _loc4_ = 0;
         _loc3_[0] = 0;
         _loc1_ = 1;
         while(_loc1_ < this.nData)
         {
            if(this.dataArray[_loc1_ - 1] < this.dataArray[_loc1_])
            {
               if(!_loc2_)
               {
                  var _loc13_;
                  _loc3_[_loc13_ = ++_loc4_] = _loc1_ - 1;
                  _loc2_ = true;
               }
            }
            else if(_loc2_)
            {
               _loc3_[_loc13_ = ++_loc4_] = _loc1_ - 1;
               _loc2_ = false;
            }
            _loc1_++;
         }
         this.nExtreme = _loc3_.length;
         this.extremeArray = new Array(this.nExtreme).fill(0);
         this.extremeArray[0] = 0;
         _loc1_ = 1;
         while(_loc1_ < this.nExtreme)
         {
            _loc6_ = _loc3_[_loc1_];
            _loc7_ = (_loc6_ - 1) * this.delta;
            _loc8_ = (_loc6_ + 1) * this.delta;
            _loc9_ = 0;
            while(Math.abs(_loc7_ - _loc8_) > 0.000001 && _loc9_ <= 22)
            {
               _loc10_ = this.leftFtnDerivative(_loc7_);
               _loc11_ = (_loc7_ + _loc8_) / 2;
               _loc12_ = this.leftFtnDerivative(_loc11_);
               if(_loc12_ * _loc10_ < 0)
               {
                  _loc8_ = _loc11_;
               }
               else
               {
                  _loc7_ = _loc11_;
               }
               _loc9_++;
            }
            this.extremeArray[_loc1_] = (_loc7_ + _loc8_) / 2;
            _loc1_++;
         }
      }
getEnergyBand(param1 = 0) 
      {
         var _loc2_ = 0;
         var _loc3_ = new Array();
         var _loc4_ = this.calcEnergyRoot(1,false);
         var _loc5_ = this.calcEnergyRoot(-1,false);
         var _loc6_ = Math.min(_loc4_.length,_loc5_.length);
         if(param1 == 0)
         {
            _loc2_ = 0;
            while(_loc2_ < _loc4_.length)
            {
               _loc3_[_loc2_] = new Array(2).fill(0);
               if(_loc2_ % 2 == 0)
               {
                  _loc3_[_loc2_][0] = _loc4_[_loc2_];
                  _loc3_[_loc2_][1] = _loc5_[_loc2_];
               }
               else
               {
                  _loc3_[_loc2_][0] = _loc5_[_loc2_];
                  _loc3_[_loc2_][1] = _loc4_[_loc2_];
               }
               _loc2_++;
            }
         }
         else
         {
            _loc2_ = 0;
            while(_loc2_ < _loc4_.length)
            {
               if(_loc2_ % 2 == 0)
               {
                  if(_loc4_[_loc2_] <= param1)
                  {
                     _loc3_[_loc2_] = new Array(2).fill(0);
                     _loc3_[_loc2_][0] = _loc4_[_loc2_];
                     if(_loc5_[_loc2_] <= param1)
                     {
                        _loc3_[_loc2_][1] = _loc5_[_loc2_];
                     }
                     else
                     {
                        _loc3_[_loc2_][1] = param1;
                     }
                  }
               }
               else if(_loc5_[_loc2_] <= param1)
               {
                  _loc3_[_loc2_] = new Array(2).fill(0);
                  _loc3_[_loc2_][0] = _loc5_[_loc2_];
                  if(_loc4_[_loc2_] <= param1)
                  {
                     _loc3_[_loc2_][1] = _loc4_[_loc2_];
                  }
                  else
                  {
                     _loc3_[_loc2_][1] = param1;
                  }
               }
               _loc2_++;
            }
         }
         return _loc3_;
      }
calcEnergyRoot(param1, param2 = true) 
      {
         var _loc4_ = 0;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = 0;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc3_ = new Array();
         _loc4_ = 0;
         while(_loc4_ < this.nExtreme - 1)
         {
            _loc5_ = this.extremeArray[_loc4_];
            _loc6_ = this.extremeArray[_loc4_ + 1];
            _loc7_ = 0;
            while(Math.abs(_loc5_ - _loc6_) > 0.0001 && _loc7_ <= 20)
            {
               _loc9_ = this.leftFtn(_loc5_) - param1;
               _loc10_ = (_loc5_ + _loc6_) / 2;
               _loc11_ = this.leftFtn(_loc10_) - param1;
               if(_loc11_ * _loc9_ < 0)
               {
                  _loc6_ = _loc10_;
               }
               else
               {
                  _loc5_ = _loc10_;
               }
               _loc7_++;
            }
            _loc8_ = (_loc5_ + _loc6_) / 2;
            if(!(_loc8_ <= this.Emax || !param2))
            {
               break;
            }
            _loc3_[_loc4_] = _loc8_;
            _loc4_++;
         }
         return _loc3_;
      }
leftFtn(param1) 
      {
         var _loc4_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = Math.sqrt(param1);
         if(param1 < 1e-12)
         {
            _loc4_ = Math.sqrt(this.U0 - param1);
            _loc2_ = this.cosh(_loc4_ * this.c) + _loc4_ / 2 * this.b * this.sinh(_loc4_ * this.c);
         }
         else if(Math.abs(param1 - this.U0) < 1e-12)
         {
            _loc2_ = Math.cos(_loc3_ * this.b) - _loc3_ / 2 * Math.sin(_loc3_ * this.b) * this.c;
         }
         else if(param1 > this.U0)
         {
            _loc4_ = Math.sqrt(param1 - this.U0);
            _loc2_ = Math.cos(_loc3_ * this.b) * Math.cos(_loc4_ * this.c) - (_loc3_ * _loc3_ + _loc4_ * _loc4_) / (2 * _loc3_ * _loc4_) * Math.sin(_loc3_ * this.b) * Math.sin(_loc4_ * this.c);
         }
         else
         {
            _loc4_ = Math.sqrt(this.U0 - param1);
            _loc2_ = Math.cos(_loc3_ * this.b) * this.cosh(_loc4_ * this.c) - (_loc3_ * _loc3_ - _loc4_ * _loc4_) / (2 * _loc3_ * _loc4_) * Math.sin(_loc3_ * this.b) * this.sinh(_loc4_ * this.c);
         }
         return _loc2_;
      }
leftFtnDerivative(param1) 
      {
         var _loc2_ = 0.00001;
         var _loc3_ = 1 / _loc2_;
         if(param1 < _loc2_)
         {
            return (this.leftFtn(param1 + _loc2_) - this.leftFtn(param1)) * _loc3_;
         }
         return (this.leftFtn(param1 + _loc2_) - this.leftFtn(param1 - _loc2_)) * _loc3_ / 2;
      }
getDensityOfState(param1) 
      {
         var _loc2_ = this.leftFtn(param1);
         if(Math.abs(_loc2_) >= 1)
         {
            return 0;
         }
         var _loc3_ = 1 / ((this.b + this.c) * Math.sqrt(1 - _loc2_ * _loc2_));
         return 2 / Math.PI * _loc3_ * Math.abs(this.leftFtnDerivative(param1));
      }
getWaveFtn(param1, param2, param3 = 90, param4 = 1) 
      {
         var _loc5_ = undefined;
         var _loc6_ = 0;
         var _loc11_ = null;
         var _loc7_ = this.getBlochWaveFtn(param1,param2,param3,false);
         var _loc8_ = (this.b + this.c) / param3;
         var _loc9_ = param3 * param4;
         var _loc10_ = new Array(_loc9_).fill(0);
         _loc5_ = 0;
         while(_loc5_ < param4)
         {
            _loc11_ = Complex.polar(1,_loc5_ * param1);
            _loc6_ = 0;
            while(_loc6_ < param3)
            {
               _loc10_[_loc6_ + _loc5_ * param3] = _loc7_[_loc6_].times(_loc11_);
               _loc6_++;
            }
            _loc5_++;
         }
         return _loc10_;
      }
getBlochWaveFtn(param1, param2, param3 = 90, param4 = true) 
      {
         var _loc5_ = undefined;
         var _loc6_ = 0;
         var _loc43_ = NaN;
         var _loc44_ = null;
         var _loc7_ = param2;
         var _loc8_ = this.b + this.c;
         var _loc9_ = param1 / _loc8_;
         var _loc10_ = Math.sqrt(_loc7_);
         var _loc11_ = new Complex(_loc7_ - this.U0,0);
         var _loc12_ = _loc11_.sqrt();
         var _loc13_ = new Complex(0,1);
         var _loc14_ = new Complex(0,param1);
         var _loc15_ = new Complex(0,_loc10_ * _loc8_);
         var _loc16_ = _loc13_.times(_loc12_).scale(_loc8_);
         var _loc17_ = new Complex(0,_loc10_ * this.b);
         var _loc18_ = _loc13_.times(_loc12_).scale(this.b);
         var _loc19_ = new Complex(1);
         var _loc20_ = new Complex(1);
         var _loc21_ = Complex.exp(_loc16_.minus(_loc14_)).scale(-1);
         var _loc22_ = Complex.exp(_loc16_.scale(-1).minus(_loc14_)).scale(-1);
         var _loc23_ = new Complex(_loc10_,0);
         var _loc24_ = new Complex(-_loc10_,0);
         var _loc25_ = _loc21_.times(_loc12_);
         var _loc26_ = _loc22_.times(_loc12_).scale(-1);
         var _loc27_ = Complex.exp(_loc17_);
         var _loc28_ = Complex.exp(_loc17_.scale(-1));
         var _loc29_ = Complex.exp(_loc18_).scale(-1);
         var _loc30_ = Complex.exp(_loc18_.scale(-1)).scale(-1);
         var _loc31_ = _loc27_.scale(_loc10_);
         var _loc32_ = _loc28_.scale(-_loc10_);
         var _loc33_ = _loc29_.times(_loc12_);
         var _loc34_ = _loc30_.times(_loc12_).scale(-1);
         var _loc35_ = new ComplexMatrix(3,3);
         var _loc36_ = new Array(3).fill(0);
         _loc5_ = 0;
         while(_loc5_ < _loc36_.length)
         {
            _loc36_[_loc5_] = new Array(3).fill(0);
            _loc5_++;
         }
         _loc36_[0][0] = _loc20_;
         _loc36_[0][1] = _loc21_;
         _loc36_[0][2] = _loc22_;
         _loc36_[1][0] = _loc24_;
         _loc36_[1][1] = _loc25_;
         _loc36_[1][2] = _loc26_;
         _loc36_[2][0] = _loc28_;
         _loc36_[2][1] = _loc29_;
         _loc36_[2][2] = _loc30_;
         _loc35_.setTwoDarray(_loc36_);
         var _loc37_ = new Array(3).fill(0);
         _loc37_[0] = _loc19_.scale(-1);
         _loc37_[1] = _loc23_.scale(-1);
         _loc37_[2] = _loc27_.scale(-1);
         var _loc38_ = _loc35_.solveLinearSet(_loc37_);
         var _loc39_ = _loc38_[0].sqrt();
         var _loc40_ = _loc39_.conjugate();
         this.A = _loc40_;
         this.B = _loc38_[0].times(_loc40_);
         this.C = _loc38_[1].times(_loc40_);
         this.D = _loc38_[2].times(_loc40_);
         var _loc41_ = _loc8_ / param3;
         var _loc42_ = new Array(param3).fill(0);
         _loc6_ = 0;
         while(_loc6_ < param3)
         {
            _loc43_ = _loc6_ * _loc41_;
            if(_loc43_ <= this.b)
            {
               _loc42_[_loc6_] = Complex.polar(1,_loc10_ * _loc43_).times(this.A).plus(Complex.polar(1,-_loc10_ * _loc43_).times(this.B));
            }
            else
            {
               _loc44_ = _loc13_.times(_loc12_).scale(_loc43_);
               _loc42_[_loc6_] = Complex.exp(_loc44_).times(this.C).plus(Complex.exp(_loc44_.negate()).times(this.D));
            }
            _loc6_++;
         }
         if(param4)
         {
            _loc6_ = 0;
            while(_loc6_ < param3)
            {
               _loc43_ = _loc6_ * _loc41_;
               _loc42_[_loc5_] = _loc42_[_loc5_].times(Complex.polar(1,-_loc9_ * _loc43_));
               _loc6_++;
            }
         }
         return _loc42_;
      }
getABCD() 
      {
         var _loc1_ = new Array(4).fill(0);
         _loc1_[0] = this.A;
         _loc1_[1] = this.B;
         _loc1_[2] = this.C;
         _loc1_[3] = this.D;
         return _loc1_;
      }
cosh(param1) 
      {
         return (Math.exp(param1) + Math.exp(-param1)) / 2;
      }
sinh(param1) 
      {
         return (Math.exp(param1) - Math.exp(-param1)) / 2;
      }
getFourierCoef(param1, param2, param3, param4) 
      {
         var _loc11_ = null;
         var _loc12_ = null;
         var _loc13_ = null;
         var _loc14_ = 0;
         var _loc16_ = 0;
         var _loc5_ = param2;
         var _loc6_ = this.b + this.c;
         var _loc7_ = new Complex(param1 / _loc6_);
         var _loc8_ = new Complex(Math.sqrt(_loc5_));
         var _loc9_ = new Complex(_loc5_ - this.U0,0);
         var _loc10_ = _loc9_.sqrt();
         var _loc15_ = new Array(param4 - param3 + 1).fill(0);
         _loc14_ = param3;
         while(_loc14_ <= param4)
         {
            _loc16_ = _loc14_ - param3;
            _loc11_ = new Complex(2 * _loc14_ * Math.PI / _loc6_);
            _loc12_ = _loc8_.minus(_loc7_).minus(_loc11_);
            _loc13_ = this.getExpIntegral(0,this.b,_loc12_).times(this.A);
            _loc12_ = _loc8_.plus(_loc7_).negate().minus(_loc11_);
            _loc13_ = _loc13_.plus(this.getExpIntegral(0,this.b,_loc12_).times(this.B));
            _loc12_ = _loc10_.minus(_loc7_).minus(_loc11_);
            _loc13_ = _loc13_.plus(this.getExpIntegral(this.b,_loc6_,_loc12_).times(this.C));
            _loc12_ = _loc10_.plus(_loc7_).negate().minus(_loc11_);
            _loc13_ = _loc13_.plus(this.getExpIntegral(this.b,_loc6_,_loc12_).times(this.D));
            _loc15_[_loc16_] = _loc13_.scale(1 / _loc6_);
            _loc14_++;
         }
         return _loc15_;
      }
getPotentialFourierCoef(param1, param2) 
      {
         var _loc4_ = null;
         var _loc5_ = null;
         var _loc6_ = 0;
         var _loc8_ = 0;
         var _loc3_ = this.b + this.c;
         var _loc7_ = new Array(param2 - param1 + 1).fill(0);
         _loc6_ = param1;
         while(_loc6_ <= param2)
         {
            _loc8_ = _loc6_ - param1;
            _loc4_ = new Complex(-2 * _loc6_ * Math.PI / _loc3_);
            _loc5_ = this.getExpIntegral(this.b,_loc3_,_loc4_);
            _loc7_[_loc8_] = _loc5_.scale(this.U0 / _loc3_);
            _loc6_++;
         }
         return _loc7_;
      }
getExpIntegral(param1, param2, param3) 
      {
         if(param3.abs() < 1e-9)
         {
            return new Complex(param2 - param1);
         }
         var _loc4_ = param3.times(new Complex(0,1));
         var _loc5_ = Complex.expi(param3.scale(param2));
         var _loc6_ = Complex.expi(param3.scale(param1));
         var _loc7_ = _loc5_.minus(_loc6_);
         return _loc7_.over(_loc4_);
      }
}
