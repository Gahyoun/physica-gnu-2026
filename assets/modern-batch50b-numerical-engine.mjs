const trace=()=>{};export const numericalFactories={};
numericalFactories["flash-794a8753d80d4025"]=(p)=>{let omega;let Mathematics;Mathematics=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function Mathematics()
      {
         
      }
function cosh(param1) 
      {
         var _loc2_ = Math.exp(param1) + Math.exp(-param1);
         return _loc2_ / 2;
      }
function max(param1, param2, param3) 
      {
         var _loc7_ = undefined;
         var _loc4_ = 0;
         var _loc5_ = (param3 - param2) / 100;
         var _loc6_ = param2;
         do
         {
            _loc7_ = param1.value(_loc6_);
            if(_loc7_ > _loc4_)
            {
               _loc4_ = _loc7_;
            }
         }
         while(_loc6_ += _loc5_, _loc6_ < param3);
         return _loc4_;
      }
function tanh(param1) 
      {
         return sinh(param1) / cosh(param1);
      }
function schrodStoerm(param1, param2, param3, param4, param5, param6) 
      {
         var _loc13_ = NaN;
         var _loc7_ = param3.length;
         var _loc8_ = param6 * param6 / 12;
         var _loc9_ = 0;
         var _loc10_ = 1;
         param3[0] = param4;
         param3[1] = param3[0] + param6 * param5;
         var _loc11_ = (1 - _loc8_ * (param2[0] - param1)) * param3[0];
         var _loc12_ = (1 - _loc8_ * (param2[1] - param1)) * param3[1];
         var _loc14_ = 2;
         while(_loc14_ < _loc7_)
         {
            _loc13_ = (2 + (param2[_loc14_ - 1] - param1) * _loc8_ * 12 / (1 - _loc8_ * (param2[_loc14_ - 1] - param1))) * _loc12_ - _loc11_;
            param3[_loc14_] = _loc13_ / (1 - _loc8_ * (param2[_loc14_] - param1));
            _loc11_ = _loc12_;
            _loc12_ = _loc13_;
            if(sign(param3[_loc14_]) != _loc10_)
            {
               _loc9_++;
               _loc10_ = -_loc10_;
            }
            _loc14_++;
         }
         return _loc9_;
      }
function step(param1) 
      {
         return param1 <= 0 ? 0 : 1;
      }
function well(param1, param2, param3) 
      {
         var _loc4_ = 0;
         var _loc5_ = true;
         var _loc6_ = Math.round(Math.abs(param1) / param3) * param3 * sign(param1);
         if(Math.abs(param1 - _loc6_) <= param2 / 2)
         {
            _loc5_ = false;
         }
         if(_loc5_)
         {
            _loc4_ = 1;
         }
         return _loc4_;
      }
function schrodStoerm1(param1, param2, param3, param4, param5, param6) 
      {
         var _loc7_ = param3.length;
         var _loc8_ = param6 * param6;
         var _loc9_ = 0;
         var _loc10_ = 1;
         param3[0] = param4;
         var _loc11_ = param6 * (param5 + param6 * (param2[0] - param1) * param3[0] / 2);
         var _loc12_ = 1;
         while(_loc12_ < _loc7_)
         {
            param3[_loc12_] = param3[_loc12_ - 1] + _loc11_;
            _loc11_ += _loc8_ * (param2[_loc12_] - param1) * param3[_loc12_];
            if(sign(param3[_loc12_]) != _loc10_)
            {
               _loc9_++;
               _loc10_ = -_loc10_;
            }
            _loc12_++;
         }
         return _loc9_;
      }
function schrodStoerm2(param1, param2, param3, param4, param5, param6) 
      {
         var _loc7_ = param3.length;
         var _loc8_ = param6 * param6;
         var _loc9_ = 0;
         var _loc10_ = 1;
         var _loc11_ = 0;
         param3[0] = param4;
         param3[1] = param3[0] + param6 * param5;
         _loc11_ = 2;
         while(_loc11_ <= 3)
         {
            param3[_loc11_] = (2 + _loc8_ * (param2[_loc11_ - 1] - param1)) * param3[_loc11_ - 1] - param3[_loc11_ - 2];
            if(sign(param3[_loc11_]) != _loc10_)
            {
               _loc9_++;
               _loc10_ = -_loc10_;
            }
            _loc11_++;
         }
         _loc11_ = 4;
         while(_loc11_ < _loc7_)
         {
            param3[_loc11_] = (2 + _loc8_ * (param2[_loc11_ - 1] - param1)) * param3[_loc11_ - 1] - param3[_loc11_ - 2];
            if(sign(param3[_loc11_]) != _loc10_)
            {
               _loc9_++;
               _loc10_ = -_loc10_;
            }
            _loc11_++;
         }
         return _loc9_;
      }
function min(param1, param2, param3) 
      {
         var _loc7_ = undefined;
         var _loc4_ = 0;
         var _loc5_ = (param3 - param2) / 100;
         var _loc6_ = param2;
         do
         {
            _loc7_ = param1.value(_loc6_);
            if(_loc7_ < _loc4_)
            {
               _loc4_ = _loc7_;
            }
         }
         while(_loc6_ += _loc5_, _loc6_ < param3);
         return _loc4_;
      }
function maxArray(param1, param2) 
      {
         var _loc5_ = NaN;
         var _loc3_ = 0;
         var _loc4_ = 0;
         while(_loc4_ < param2)
         {
            _loc5_ = Math.abs(param1[_loc4_]);
            if(_loc5_ > _loc3_)
            {
               _loc3_ = _loc5_;
            }
            _loc4_++;
         }
         return _loc3_;
      }
function sinh(param1) 
      {
         var _loc2_ = Math.exp(param1) - Math.exp(-param1);
         return _loc2_ / 2;
      }
function schrodLR(param1, param2, param3, param4, param5, param6, param7, param8) 
      {var delRCenter,psiRCenter;
         var _loc15_ = NaN;
         var _loc19_ = NaN;
         var _loc9_ = Math.trunc(param3.length);
         var _loc10_ = 0;
         var _loc11_ = Math.floor(_loc9_ * param6);
         var _loc12_ = param7 * param7 / 12;
         param3[0] = param4;
         param3[1] = param3[0] + param7 * param5;
         var _loc13_ = (1 - _loc12_ * (param2[0] - param1)) * param3[0];
         var _loc14_ = (1 - _loc12_ * (param2[1] - param1)) * param3[1];
         _loc10_ = 2;
         while(_loc10_ <= _loc11_ + 2)
         {
            _loc15_ = (2 + (param2[_loc10_ - 1] - param1) * _loc12_ * 12 / (1 - _loc12_ * (param2[_loc10_ - 1] - param1))) * _loc14_ - _loc13_;
            param3[_loc10_] = _loc15_ / (1 - _loc12_ * (param2[_loc10_] - param1));
            _loc13_ = _loc14_;
            _loc14_ = _loc15_;
            _loc10_++;
         }
         var _loc16_ = 1 / 12 / param7 * (8 * (param3[_loc11_ + 1] - param3[_loc11_ - 1]) - (param3[_loc11_ + 2] - param3[_loc11_ - 2]));
         var _loc17_ = Number(param3[_loc11_]);
         param3[_loc9_ - 1] = 0;
         param3[_loc9_ - 2] = param3[_loc9_ - 1] + param7 * 0.1;
         _loc13_ = (1 - _loc12_ * (param2[_loc9_ - 1] - param1)) * param3[_loc9_ - 1];
         _loc14_ = (1 - _loc12_ * (param2[_loc9_ - 2] - param1)) * param3[_loc9_ - 2];
         _loc10_ = Math.trunc(_loc9_ - 3);
         while(_loc10_ >= _loc11_ - 2)
         {
            _loc15_ = (2 + (param2[_loc10_ + 1] - param1) * _loc12_ * 12 / (1 - _loc12_ * (param2[_loc10_ + 1] - param1))) * _loc14_ - _loc13_;
            param3[_loc10_] = _loc15_ / (1 - _loc12_ * (param2[_loc10_] - param1));
            _loc13_ = _loc14_;
            _loc14_ = _loc15_;
            _loc10_--;
         }
         delRCenter = -1 / 12 / param7 * (8 * (param3[_loc11_ - 1] - param3[_loc11_ + 1]) - (param3[_loc11_ - 2] - param3[_loc11_ + 2]));
         psiRCenter = param3[_loc11_];
         var _loc18_ = 1 - delRCenter * _loc17_ / _loc16_ / psiRCenter;
         if(param8)
         {
            _loc19_ = _loc17_ / psiRCenter;
            _loc10_ = Math.trunc(_loc9_ - 1);
            while(_loc10_ >= _loc11_ - 2)
            {
               param3[_loc10_] *= _loc19_;
               _loc10_--;
            }
         }
         return _loc18_ * _loc18_;
      }
function sign(param1) 
      {
         return param1 < 0 ? -1 : 1;
      }
Mathematics.cosh=cosh;Mathematics.max=max;Mathematics.tanh=tanh;Mathematics.schrodStoerm=schrodStoerm;Mathematics.step=step;Mathematics.well=well;Mathematics.schrodStoerm1=schrodStoerm1;Mathematics.schrodStoerm2=schrodStoerm2;Mathematics.min=min;Mathematics.maxArray=maxArray;Mathematics.sinh=sinh;Mathematics.schrodLR=schrodLR;Mathematics.sign=sign;return Mathematics;})();
let FittingProtocol;FittingProtocol=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function FittingProtocol()
      {this.numOfBisection=10;this.centerPos=0.51;this.acceptedToll=1e-10;this.isCenterPosAtMinPotential=false;this.numOfSympletic=100;
         
      }
FittingProtocol.prototype.setParameter=function setParameter(param1, param2, param3, param4) 
      {
         this.numOfBisection = param1;
         this.numOfSympletic = param2;
         this.isCenterPosAtMinPotential = param3;
         this.centerPos = param4;
      };
return FittingProtocol;})();
let PotentialPointer;PotentialPointer=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function PotentialPointer()
      {this.isEven=true;this.width=5;this.amp=100;this.dist=10;this.num=1;this.fittingProtocol=undefined;this.potentialType=1;
         
      }
PotentialPointer.prototype.value=function value(param1) 
      {
         var _loc5_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = 0;
         var _loc4_ = 0;
         var _loc6_ = Math.abs(param1);
         switch(this.potentialType)
         {
            case 0:
               break;
            case 1:
               _loc2_ = this.amp * param1 * param1;
               break;
            case 2:
               if(Math.abs(param1) < this.width / 2)
               {
                  _loc2_ += -this.amp;
               }
               break;
            case 3:
               if(Math.abs(param1 - this.dist / 2) < this.width / 2)
               {
                  _loc2_ += -this.amp;
               }
               if(Math.abs(-param1 - this.dist / 2) < this.width / 2)
               {
                  _loc2_ += -this.amp;
               }
               break;
            case 4:
               _loc4_ = -2;
               while(_loc4_ <= 2)
               {
                  if(Math.abs(param1 - _loc4_ * this.dist) < this.width / 2)
                  {
                     _loc2_ -= this.amp;
                  }
                  _loc4_++;
               }
               break;
            case 5:
               _loc2_ = this.amp * _loc6_;
               break;
            case 6:
               _loc2_ = this.amp * param1 * param1 * param1 * param1;
               break;
            case 7:
               _loc7_ = Math.cos(param1);
               _loc2_ = this.amp * _loc7_ * _loc7_;
               break;
            case 8:
               _loc2_ = this.amp / 10 * Math.floor(_loc6_);
               break;
            case 9:
               _loc3_ = Math.abs(100 * (param1 - this.dist / 2) / this.width);
               if(_loc3_ >= 0.02)
               {
                  _loc2_ += -this.amp / _loc3_;
               }
               else
               {
                  _loc2_ += -this.amp / 0.02;
               }
               _loc3_ = Math.abs(100 * (-param1 - this.dist / 2) / this.width);
               if(_loc3_ >= 0.02)
               {
                  _loc2_ += -this.amp / _loc3_;
               }
               else
               {
                  _loc2_ += -this.amp / 0.02;
               }
               break;
            case 10:
               _loc2_ += this.amp * (param1 - this.dist / 2) * (param1 - this.dist / 2) * (param1 + this.dist / 2) * (param1 + this.dist / 2);
               break;
            case 11:
               _loc3_ = Math.abs(param1);
               _loc3_ = Math.max(0.005,_loc3_);
               _loc2_ += -7.37996 * this.amp / _loc3_;
               _loc2_ += this.width * (this.width + 1) / _loc3_ / _loc3_;
               break;
            case 12:
               _loc3_ = Math.abs(param1);
               _loc2_ += 1 / 4 * this.amp * this.amp * _loc3_ * _loc3_;
               _loc3_ = Math.max(0.05,_loc3_);
               _loc2_ += this.width * (this.width + 1) / _loc3_ / _loc3_;
               break;
            case 13:
               _loc3_ = Math.abs(param1);
               _loc3_ = Math.max(0.05,_loc3_);
               if(param1 < this.dist)
               {
                  _loc2_ += -this.amp;
               }
               _loc2_ += this.width * (this.width + 1) / _loc3_ / _loc3_;
               break;
            case 14:
               _loc3_ = Math.abs(param1);
               _loc3_ = Math.max(0.05,_loc3_);
               _loc2_ += -7.37996 * Math.exp(-_loc3_ / this.dist) / _loc3_;
               _loc2_ += this.width * (this.width + 1) / _loc3_ / _loc3_;
               _loc2_ *= this.amp;
               break;
            case 15:
               _loc3_ = Math.abs(param1);
               _loc3_ = Math.max(0.05,_loc3_);
               if(_loc3_ > this.dist)
               {
                  _loc2_ += 7.37996 * this.amp / _loc3_;
               }
               else
               {
                  _loc2_ += -50;
               }
               _loc2_ += this.width * (this.width + 1) / _loc3_ / _loc3_;
               break;
            case 16:
               _loc8_ = (param1 - this.width / 2) / this.width * 2;
               _loc9_ = _loc8_ * _loc8_;
               if(this.dist == 1)
               {
                  _loc2_ = this.amp * _loc9_;
               }
               else if(this.dist == 2)
               {
                  _loc2_ = this.amp * Math.abs(_loc8_);
               }
               else if(this.dist == 3)
               {
                  _loc2_ = this.amp * _loc9_ * _loc9_;
               }
               else if(this.dist == 4)
               {
                  _loc2_ = this.amp * _loc9_ * _loc9_ * _loc9_ * _loc9_;
               }
               else if(this.dist == 5)
               {
                  _loc2_ = 2.5 * this.amp * (_loc8_ - 0.6) * (_loc8_ - 0.6) * (_loc8_ + 0.6) * (_loc8_ + 0.6);
               }
               else if(this.dist == 6)
               {
                  if(_loc8_ > 0.5)
                  {
                     _loc2_ = this.amp * (_loc8_ - 0.5) * (_loc8_ - 0.5) / 0.25;
                  }
                  else
                  {
                     _loc2_ = this.amp * (_loc8_ - 0.5) * (_loc8_ - 0.5) / 2.25;
                  }
               }
               else if(this.dist == 7)
               {
                  if(Math.abs(_loc8_) > 0.5)
                  {
                     _loc2_ = this.amp * _loc9_ * _loc9_ * _loc9_ * _loc9_;
                  }
                  else
                  {
                     _loc2_ = this.amp * 0.8 * Math.exp(-_loc9_ / 0.02);
                  }
               }
               break;
            case 17:
               _loc10_ = 1 - Math.exp(-(param1 - this.dist) / this.width);
               _loc2_ = this.amp * _loc10_ * _loc10_;
               if(_loc2_ > 500)
               {
                  _loc2_ = 500;
               }
               break;
            case 18:
               _loc4_ = 0;
               while(_loc4_ < this.num)
               {
                  if(Math.floor(this.num / 2) * 2 == this.num)
                  {
                     _loc5_ = this.dist / 2 + this.dist * (_loc4_ - this.num / 2);
                  }
                  else
                  {
                     _loc5_ = this.dist * (_loc4_ - Math.floor(this.num / 2));
                  }
                  if(Math.abs(param1 - _loc5_) < this.width / 2)
                  {
                     _loc3_ = Math.abs(50 * (param1 - _loc5_) / this.width);
                     if(_loc3_ >= 0.025)
                     {
                        _loc2_ += -this.amp / _loc3_;
                     }
                     else
                     {
                        _loc2_ += -this.amp / 0.025;
                     }
                  }
                  _loc4_++;
               }
               break;
            case 19:
               _loc4_ = 0;
               while(_loc4_ < this.num)
               {
                  if(Math.floor(this.num / 2) * 2 == this.num)
                  {
                     _loc5_ = this.dist / 2 + this.dist * (_loc4_ - this.num / 2);
                  }
                  else
                  {
                     _loc5_ = this.dist * (_loc4_ - Math.floor(this.num / 2));
                  }
                  if(param1 - _loc5_ > -this.width / 2 && param1 - _loc5_ <= this.width / 2)
                  {
                     _loc2_ += -this.amp;
                  }
                  _loc4_++;
               }
               break;
            case 20:
               _loc3_ = Math.abs(param1);
               _loc3_ = Math.max(0.005,_loc3_);
               _loc2_ += -7.37996 * this.amp / _loc3_;
         }
         return _loc2_;
      };
PotentialPointer.prototype.getFittingProtocol=function getFittingProtocol() 
      {
         return this.fittingProtocol;
      };
PotentialPointer.prototype.setType=function setType(param1) 
      {
         this.potentialType = param1;
         if(param1 == 11 || param1 == 12 || param1 == 13 || param1 == 14 || param1 == 15 || param1 == 16 || param1 == 17)
         {
            this.isEven = false;
         }
         else
         {
            this.isEven = true;
         }
      };
PotentialPointer.prototype.setParameter=function setParameter(param1, param2, param3, param4 = 1) 
      {
         this.amp = param1;
         this.width = param2;
         this.dist = param3;
         this.num = param4;
      };
PotentialPointer.prototype.IsEven=function IsEven() 
      {
         return this.isEven;
      };
PotentialPointer.prototype.setFittingProtocol=function setFittingProtocol(param1) 
      {
         this.fittingProtocol = param1;
      };
return PotentialPointer;})();
let EigenfunctionData;EigenfunctionData=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function EigenfunctionData(param1, param2, param3, param4, param5)
      {this.functionPointer=undefined;this.numberOfSteps=undefined;this.energyValues=undefined;this.numberOfLevels=undefined;this.startX=undefined;this.stopX=undefined;
         
         this.functionPointer = param1;
         this.numberOfLevels = param2;
         this.numberOfSteps = param3;
         this.energyValues = new Array(this.numberOfLevels);
         this.startX = param4;
         this.stopX = param5;
      }
EigenfunctionData.prototype.changeParameters=function changeParameters(param1, param2) 
      {
         this.numberOfLevels = param1;
         this.numberOfSteps = param2;
         this.energyValues = new Array(this.numberOfLevels);
      };
EigenfunctionData.prototype.getEnergyValue=function getEnergyValue(param1) 
      {
         return this.energyValues[param1];
      };
EigenfunctionData.prototype.getX=function getX(param1) 
      {
         return this.startX + (this.stopX - this.startX) / this.numberOfSteps * param1;
      };
EigenfunctionData.prototype.getNumberOfLevels=function getNumberOfLevels() 
      {
         return this.numberOfLevels;
      };
EigenfunctionData.prototype.getNumberOfSteps=function getNumberOfSteps() 
      {
         return this.numberOfSteps;
      };
EigenfunctionData.prototype.getFunctionPointer=function getFunctionPointer() 
      {
         return this.functionPointer;
      };
EigenfunctionData.prototype.setEnergyValue=function setEnergyValue(param1, param2) 
      {
         this.energyValues[param1] = param2;
      };
return EigenfunctionData;})();
let EigenfunctionFinder;EigenfunctionFinder=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function EigenfunctionFinder(param1)
      {this.potentialPt=undefined;this.level=undefined;this.psi=undefined;this.numberOfSteps=undefined;this.numberOfLevels=undefined;this.energyStepSize=undefined;this.stopX=undefined;this.allowedToRun=undefined;this.calculating=undefined;this.isEven=undefined;this.potentialData=undefined;this.energyStop=undefined;this.stepSize=undefined;this.eigenData=undefined;this.energyStart=undefined;this.startX=undefined;
         
         this.calculating = false;
         this.allowedToRun = true;
         this.eigenData = param1;
         this.startX = this.eigenData.startX;
         this.stopX = this.eigenData.stopX;
         this.potentialPt = this.eigenData.getFunctionPointer();
         if(Boolean(this.potentialPt.IsEven()) && -this.startX == this.stopX)
         {
            this.isEven = true;
            this.startX = 0;
         }
         else
         {
            this.isEven = false;
         }
         this.numberOfLevels = this.eigenData.getNumberOfLevels();
         this.numberOfSteps = this.eigenData.getNumberOfSteps();
         if(this.isEven)
         {
            this.numberOfSteps = Math.floor(this.numberOfSteps / 2) + 1;
         }
         this.psi = new Array(this.numberOfSteps);
         this.potentialData = new Array(this.numberOfSteps);
         this.stepSize = (this.stopX - this.startX) / this.numberOfSteps;
         this.resetPotential();
      }
EigenfunctionFinder.prototype.schrodStoerm=function schrodStoerm(param1) 
      {
         var _loc2_ = NaN;
         if(Boolean(this.isEven) && Math.floor(this.level / 2) * 2 == this.level)
         {
            _loc2_ = Number(Mathematics.schrodStoerm(param1,this.potentialData,this.psi,1,0,this.stepSize));
         }
         else
         {
            _loc2_ = Number(Mathematics.schrodStoerm(param1,this.potentialData,this.psi,0,0.1,this.stepSize));
         }
         return _loc2_;
      };
EigenfunctionFinder.prototype.iterate=function iterate() 
      {
         var _loc4_ = undefined;
         var _loc5_ = undefined;
         var _loc6_ = undefined;
         var _loc7_ = undefined;
         var _loc8_ = undefined;
         var _loc9_ = undefined;
         var _loc10_ = undefined;
         var _loc1_ = 0;
         var _loc2_ = Number(this.energyStart);
         var _loc3_ = Number(this.energyStepSize);
         do
         {
            do
            {
               _loc8_ = _loc6_ = _loc2_;
               _loc9_ = this.schrodStoerm(_loc6_);
               _loc5_ = this.psi[this.numberOfSteps - 1];
               _loc8_ = _loc7_ = _loc2_ + _loc3_;
               _loc4_ = this.schrodStoerm(_loc7_);
               if(_loc4_ > _loc1_ + 1)
               {
                  _loc3_ /= 2;
               }
               else if(_loc4_ == _loc1_)
               {
                  _loc2_ = _loc7_;
                  _loc3_ *= 2;
               }
            }
            while(_loc4_ != _loc1_ + 1 && Boolean(this.allowedToRun));
            _loc3_ = _loc7_ - _loc6_;
            if(Mathematics.sign(this.psi[this.numberOfSteps - 1]) != Mathematics.sign(_loc5_) && Boolean(this.allowedToRun))
            {
               _loc10_ = this.findEigenValueAndFunction(_loc2_,_loc2_ + _loc3_);
               this.eigenData.setEnergyValue(this.level,_loc10_);
               if(this.isEven)
               {
                  this.level += 2;
               }
               else
               {
                  ++this.level;
               }
               _loc1_++;
            }
            _loc2_ = _loc7_;
         }
         while(_loc2_ < this.energyStop && this.level < this.numberOfLevels && Boolean(this.allowedToRun));
      };
EigenfunctionFinder.prototype.getNumberOfFoundLevels=function getNumberOfFoundLevels() 
      {
         return this.level;
      };
EigenfunctionFinder.prototype.run=function run() 
      {
         this.calculating = true;
         this.allowedToRun = true;
         this.level = 0;
         this.iterate();
         if(this.isEven)
         {
            this.level = 1;
            this.iterate();
         }
         this.calculating = false;
      };
EigenfunctionFinder.prototype.getEnergyStart=function getEnergyStart() 
      {
         return this.energyStart;
      };
EigenfunctionFinder.prototype.isCalculating=function isCalculating() 
      {
         return this.calculating;
      };
EigenfunctionFinder.prototype.stopIt=function stopIt() 
      {
         this.allowedToRun = false;
      };
EigenfunctionFinder.prototype.getEigenfunction=function getEigenfunction(param1, param2) 
      {
         var _loc3_ = null;
         var _loc4_ = undefined;
         this.level = param2;
         this.schrodLR(param1,true);
         if(this.isEven)
         {
            _loc3_ = new Array(this.numberOfSteps * 2 - 1);
            _loc4_ = 0;
            while(_loc4_ < this.numberOfSteps * 2 - 1)
            {
               if(_loc4_ < this.numberOfSteps - 1)
               {
                  if(Math.floor(this.level / 2) * 2 == this.level)
                  {
                     _loc3_[_loc4_] = this.psi[this.numberOfSteps - _loc4_ - 1];
                  }
                  else
                  {
                     _loc3_[_loc4_] = -this.psi[this.numberOfSteps - _loc4_ - 1];
                  }
               }
               else
               {
                  _loc3_[_loc4_] = this.psi[_loc4_ - this.numberOfSteps + 1];
               }
               _loc4_++;
            }
            return _loc3_;
         }
         return this.psi;
      };
EigenfunctionFinder.prototype.resetPotential=function resetPotential() 
      {
         var _loc1_ = Number(this.startX);
         var _loc2_ = Number.MAX_VALUE;
         var _loc3_ = 0;
         var _loc4_ = 0;
         while(_loc4_ < this.numberOfSteps)
         {
            this.potentialData[_loc4_] = this.potentialPt.value(_loc1_);
            if(this.potentialData[_loc4_] < _loc2_)
            {
               _loc2_ = Number(this.potentialData[_loc4_]);
               _loc3_ = _loc4_;
            }
            else if(this.potentialData[_loc4_] == _loc2_)
            {
               if(_loc4_ < this.numberOfSteps / 2)
               {
                  _loc3_ = _loc4_;
               }
            }
            _loc1_ += this.stepSize;
            _loc4_++;
         }
         _loc3_ = Math.max(Math.min(this.numberOfSteps - 5,_loc3_),5);
         if(this.potentialPt.getFittingProtocol().isCenterPosAtMinPotential)
         {
            this.potentialPt.getFittingProtocol().centerPos = _loc3_ / this.numberOfSteps;
         }
         this.energyStart = _loc2_;
         this.energyStop = 10000;
         this.energyStepSize = 0.5;
      };
EigenfunctionFinder.prototype.numberOfZeros=function numberOfZeros(param1, param2, param3, param4) 
      {
         var _loc6_ = NaN;
         var _loc5_ = 0;
         _loc6_ = 1;
         while(param4 < this.potentialData[_loc6_++])
         {
         }
         var _loc7_ = _loc6_;
         var _loc8_ = Number(Mathematics.sign(param1[_loc7_]));
         _loc6_ = param2 - 30;
         while(param4 < this.potentialData[_loc6_--])
         {
         }
         var _loc9_ = _loc6_;
         var _loc10_ = _loc7_;
         while(_loc10_ < _loc9_)
         {
            if(Mathematics.sign(param1[_loc10_]) != _loc8_)
            {
               _loc5_++;
               _loc8_ = -_loc8_;
            }
            _loc10_++;
         }
         return _loc5_;
      };
EigenfunctionFinder.prototype.getPotential=function getPotential() 
      {
         var _loc1_ = null;
         var _loc2_ = undefined;
         if(this.isEven)
         {
            _loc1_ = new Array(this.numberOfSteps * 2 - 1);
            _loc2_ = 0;
            while(_loc2_ < this.numberOfSteps * 2 - 1)
            {
               if(_loc2_ < this.numberOfSteps - 1)
               {
                  _loc1_[_loc2_] = this.potentialData[this.numberOfSteps - _loc2_ - 1];
               }
               else
               {
                  _loc1_[_loc2_] = this.potentialData[_loc2_ - this.numberOfSteps + 1];
               }
               _loc2_++;
            }
            return _loc1_;
         }
         return this.potentialData;
      };
EigenfunctionFinder.prototype.schrodLR=function schrodLR(param1, param2) 
      {
         var _loc3_ = NaN;
         if(Boolean(this.isEven) && Math.floor(this.level / 2) * 2 == this.level)
         {
            _loc3_ = Number(Mathematics.schrodLR(param1,this.potentialData,this.psi,1,0,this.potentialPt.getFittingProtocol().centerPos,this.stepSize,param2));
         }
         else
         {
            _loc3_ = Number(Mathematics.schrodLR(param1,this.potentialData,this.psi,0,0.1,this.potentialPt.getFittingProtocol().centerPos,this.stepSize,param2));
         }
         return _loc3_;
      };
EigenfunctionFinder.prototype.findEigenValueAndFunction=function findEigenValueAndFunction(param1, param2) 
      {
         var _loc11_ = undefined;
         var _loc12_ = undefined;
         var _loc13_ = undefined;
         var _loc14_ = undefined;
         var _loc15_ = undefined;
         var _loc16_ = undefined;
         var _loc17_ = undefined;
         var _loc18_ = undefined;
         var _loc3_ = param1;
         var _loc4_ = param2;
         var _loc5_ = 0;
         var _loc6_ = _loc3_;
         this.schrodStoerm(_loc6_);
         var _loc7_ = Number(this.psi[this.numberOfSteps - 1]);
         _loc6_ = _loc4_;
         this.schrodStoerm(_loc6_);
         if(Mathematics.sign(this.psi[this.numberOfSteps - 1]) == Mathematics.sign(_loc7_))
         {
            trace("이게 무슨말이야? Waarschijnlijk geen convergentie!\n");
            return 1;
         }
         if(_loc7_ > 0)
         {
            _loc6_ = _loc3_;
            _loc3_ = _loc4_;
            _loc4_ = _loc6_;
         }
         do
         {
            _loc6_ = 0.5 * _loc3_ + 0.5 * _loc4_;
            this.schrodStoerm(_loc6_);
            _loc7_ = Number(this.psi[this.numberOfSteps - 1]);
            if(_loc7_ < 0)
            {
               _loc3_ = _loc6_;
            }
            else
            {
               _loc4_ = _loc6_;
            }
            _loc5_++;
         }
         while(Math.abs(_loc7_) > 0.001 && _loc5_ < this.potentialPt.getFittingProtocol().numOfBisection);
         var _loc8_ = _loc6_;
         var _loc9_ = param2 - _loc6_ > _loc6_ - param1 ? _loc6_ + 0.25 * (param2 - _loc6_) : _loc6_ - 0.25 * (_loc6_ - param1);
         var _loc10_ = 0;
         do
         {
            _loc11_ = this.schrodLR(_loc8_,false);
            _loc12_ = this.schrodLR(_loc9_,false);
            if(_loc12_ < _loc11_)
            {
               _loc15_ = _loc8_;
               _loc8_ = _loc9_;
               _loc9_ = _loc15_;
               _loc16_ = _loc11_;
               _loc11_ = _loc12_;
               _loc12_ = _loc16_;
            }
            _loc13_ = _loc8_ - (_loc9_ - _loc8_);
            if(_loc13_ > param2)
            {
               _loc13_ = param2;
            }
            else if(_loc13_ < param1)
            {
               _loc13_ = param1;
            }
            _loc14_ = this.schrodLR(_loc13_,false);
            if(_loc14_ < _loc11_)
            {
               _loc17_ = _loc8_ - 1.5 * (_loc9_ - _loc8_);
               if(_loc17_ > param2)
               {
                  _loc17_ = param2;
               }
               else if(_loc17_ < param1)
               {
                  _loc17_ = param1;
               }
               _loc18_ = this.schrodLR(_loc17_,false);
               if(_loc18_ < _loc14_)
               {
                  _loc9_ = _loc17_;
               }
               else
               {
                  _loc9_ = _loc13_;
               }
            }
            else if(_loc14_ < _loc12_)
            {
               _loc9_ = _loc13_;
            }
            else
            {
               _loc9_ = _loc8_ + 0.75 * (_loc9_ - _loc8_);
            }
            _loc10_++;
         }
         while(_loc11_ > this.potentialPt.getFittingProtocol().acceptedToll && _loc10_ < this.potentialPt.getFittingProtocol().numOfSympletic);
         return _loc8_;
      };
return EigenfunctionFinder;})();
const c={X_START:-5,X_END:5,N_POINTS:701,XSCALE:.1951,isHigherMode:false,comboMode:{selIndex:p.comboMode},slider1:{value:p.slider1},slider2:{value:p.slider2},slider3:{value:p.slider3},ampStr:{},widthStr:{},distStr:{},draw(){}};c.ft=new PotentialPointer();c.fp=new FittingProtocol();c.ft.setFittingProtocol(c.fp);c.fp.setParameter(16,60,true,.06);c.fp.acceptedToll=.000001;c.calc=function calc() 
      {
         if(this.b != null)
         {
            this.b.run();
            this.draw();
         }
      }.bind(c);c.setFunctionParameter=function setFunctionParameter() 
      {
         var _loc7_ = NaN;
         var _loc9_ = undefined;
         var _loc1_ = this.slider1.value;
         var _loc2_ = this.slider2.value;
         var _loc3_ = this.slider3.value;
         var _loc4_ = _loc1_;
         var _loc5_ = _loc2_ / 100 / this.XSCALE;
         var _loc6_ = _loc2_ / 100;
         _loc7_ = _loc3_ / 200 / this.XSCALE;
         var _loc8_ = _loc3_ / 200;
         this.ampStr.text = "";
         this.widthStr.text = "";
         this.distStr.text = "";
         this.modeNumber = this.comboMode.selIndex;
         this.yBottom = 450;
         switch(this.modeNumber)
         {
            case 0:
               this.functionType = 1;
               this.slider2.alpha = 0;
               this.slider3.alpha = 0;
               omega = _loc1_ / 5;
               _loc4_ = omega * omega / 4;
               this.ampStr.text = "U(x) = " + _loc4_ + " x^2 = 1/4 " + omega + "^2 x^2";
               break;
            case 1:
               this.functionType = 2;
               _loc4_ = _loc1_ * 2;
               this.yBottom = 30;
               this.slider3.alpha = 0;
               this.ampStr.text = "퍼텐셜 깊이 " + _loc4_ + " eV";
               this.widthStr.text = "퍼텐셜 폭 " + _loc6_ + " nm";
               break;
            case 2:
               this.functionType = 5;
               this.slider2.alpha = 0;
               this.slider3.alpha = 0;
               this.ampStr.text = "U(x) = " + _loc4_ + " |x|";
               break;
            case 3:
               this.functionType = 6;
               _loc4_ = _loc1_ / 10;
               this.slider2.alpha = 0;
               this.slider3.alpha = 0;
               this.ampStr.text = "U(x) = " + _loc4_ / 10 + " x^4";
               break;
            case 4:
               this.functionType = 19;
               _loc4_ = _loc1_ * 2;
               _loc5_ = _loc2_ / 500 / this.XSCALE;
               _loc6_ = _loc2_ / 500;
               this.yBottom = 20;
               this.ampStr.text = "퍼텐셜 깊이 " + _loc4_ + " eV";
               this.widthStr.text = "퍼텐셜 폭 " + _loc6_ + " nm";
               this.distStr.text = "공간주기 " + _loc8_ + " nm";
               break;
            case 5:
               this.functionType = 10;
               omega = _loc1_ / 5;
               _loc4_ = _loc1_ / 10;
               _loc7_ = _loc2_ / 100 / this.XSCALE;
               _loc9_ = Math.round(_loc7_ * this.XSCALE / 2 * 1000) / 1000;
               this.ampStr.text = "U(x) = " + _loc4_ / 10 + " (x-" + _loc9_ + " )^2 (x+" + _loc9_ + ")^2";
               this.slider3.alpha = 0;
               this.widthStr.text = "간격 " + _loc9_ * 2 + " nm";
               break;
            case 6:
               this.functionType = 20;
               _loc4_ = _loc1_ / 50;
               this.yBottom = 30;
               this.slider2.alpha = 0;
               this.slider3.alpha = 0;
               this.ampStr.text = "원자번호 Z = " + _loc4_;
               break;
            case 7:
               this.functionType = 17;
               omega = _loc1_ / 5;
               _loc4_ = _loc1_ / 0.5;
               _loc7_ = -0.5 / this.XSCALE;
               _loc5_ = _loc2_ / 200 / this.XSCALE;
               _loc6_ = Math.round(_loc5_ * this.XSCALE / 2 * 1000) / 1000;
               this.ampStr.text = "깊이  " + _loc4_ + "eV";
               this.slider3.alpha = 0;
               this.widthStr.text = "폭  " + _loc6_ + " nm";
         }
         this.ft.setType(this.functionType);
         if(this.modeNumber != 4)
         {
            this.ft.setParameter(_loc4_,_loc5_,_loc7_);
         }
         else
         {
            this.ft.setParameter(_loc4_,_loc5_,_loc7_,4);
         }
         this.a = new EigenfunctionData(this.ft,2,this.N_POINTS,this.X_START,this.X_END);
         this.b = new EigenfunctionFinder(this.a);
         this.isHigherMode = false;
         if(this.b != null)
         {
            this.b.resetPotential();
         }
         this.calc();
      }.bind(c);c.setFunctionParameter();if(p.higher){c.a=new EigenfunctionData(c.ft,20,c.N_POINTS,c.X_START,c.X_END);c.b=new EigenfunctionFinder(c.a);c.calc();}return c;};
numericalFactories["flash-a855b470af9c09ac"]=(p)=>{let omega;let Mathematics;Mathematics=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function Mathematics()
      {
         
      }
function cosh(param1) 
      {
         var _loc2_ = Math.exp(param1) + Math.exp(-param1);
         return _loc2_ / 2;
      }
function max(param1, param2, param3) 
      {
         var _loc7_ = NaN;
         var _loc4_ = 0;
         var _loc5_ = (param3 - param2) / 100;
         var _loc6_ = param2;
         do
         {
            _loc7_ = param1.value(_loc6_);
            if(_loc7_ > _loc4_)
            {
               _loc4_ = _loc7_;
            }
         }
         while(_loc6_ += _loc5_, _loc6_ < param3);
         return _loc4_;
      }
function maxArray(param1, param2) 
      {
         var _loc5_ = NaN;
         var _loc3_ = 0;
         var _loc4_ = 0;
         while(_loc4_ < param2)
         {
            _loc5_ = Math.abs(param1[_loc4_]);
            if(_loc5_ > _loc3_)
            {
               _loc3_ = _loc5_;
            }
            _loc4_++;
         }
         return _loc3_;
      }
function min(param1, param2, param3) 
      {
         var _loc7_ = NaN;
         var _loc4_ = 0;
         var _loc5_ = (param3 - param2) / 100;
         var _loc6_ = param2;
         do
         {
            _loc7_ = param1.value(_loc6_);
            if(_loc7_ < _loc4_)
            {
               _loc4_ = _loc7_;
            }
         }
         while(_loc6_ += _loc5_, _loc6_ < param3);
         return _loc4_;
      }
function schrodStoerm1(param1, param2, param3, param4, param5, param6) 
      {
         var _loc7_ = param3.length;
         var _loc8_ = param6 * param6;
         var _loc9_ = 0;
         var _loc10_ = 1;
         param3[0] = param4;
         var _loc11_ = param6 * (param5 + param6 * (param2[0] - param1) * param3[0] / 2);
         var _loc12_ = 1;
         while(_loc12_ < _loc7_)
         {
            param3[_loc12_] = param3[_loc12_ - 1] + _loc11_;
            _loc11_ += _loc8_ * (param2[_loc12_] - param1) * param3[_loc12_];
            if(sign(param3[_loc12_]) != _loc10_)
            {
               _loc9_++;
               _loc10_ = -_loc10_;
            }
            _loc12_++;
         }
         return _loc9_;
      }
function schrodStoerm2(param1, param2, param3, param4, param5, param6) 
      {
         var _loc7_ = param3.length;
         var _loc8_ = param6 * param6;
         var _loc9_ = 0;
         var _loc10_ = 1;
         var _loc11_ = 0;
         param3[0] = param4;
         param3[1] = param3[0] + param6 * param5;
         _loc11_ = 2;
         while(_loc11_ <= 3)
         {
            param3[_loc11_] = (2 + _loc8_ * (param2[_loc11_ - 1] - param1)) * param3[_loc11_ - 1] - param3[_loc11_ - 2];
            if(sign(param3[_loc11_]) != _loc10_)
            {
               _loc9_++;
               _loc10_ = -_loc10_;
            }
            _loc11_++;
         }
         _loc11_ = 4;
         while(_loc11_ < _loc7_)
         {
            param3[_loc11_] = (2 + _loc8_ * (param2[_loc11_ - 1] - param1)) * param3[_loc11_ - 1] - param3[_loc11_ - 2];
            if(sign(param3[_loc11_]) != _loc10_)
            {
               _loc9_++;
               _loc10_ = -_loc10_;
            }
            _loc11_++;
         }
         return _loc9_;
      }
function schrodStoerm(param1, param2, param3, param4, param5, param6) 
      {
         var _loc13_ = NaN;
         var _loc7_ = param3.length;
         var _loc8_ = param6 * param6 / 12;
         var _loc9_ = 0;
         var _loc10_ = 1;
         param3[0] = param4;
         param3[1] = param3[0] + param6 * param5;
         var _loc11_ = (1 - _loc8_ * (param2[0] - param1)) * param3[0];
         var _loc12_ = (1 - _loc8_ * (param2[1] - param1)) * param3[1];
         var _loc14_ = 2;
         while(_loc14_ < _loc7_)
         {
            _loc13_ = (2 + (param2[_loc14_ - 1] - param1) * _loc8_ * 12 / (1 - _loc8_ * (param2[_loc14_ - 1] - param1))) * _loc12_ - _loc11_;
            param3[_loc14_] = _loc13_ / (1 - _loc8_ * (param2[_loc14_] - param1));
            _loc11_ = _loc12_;
            _loc12_ = _loc13_;
            if(sign(param3[_loc14_]) != _loc10_)
            {
               _loc9_++;
               _loc10_ = -_loc10_;
            }
            _loc14_++;
         }
         return _loc9_;
      }
function schrodLR(param1, param2, param3, param4, param5, param6, param7, param8) 
      {var delRCenter,psiRCenter;
         var _loc15_ = NaN;
         var _loc19_ = NaN;
         var _loc9_ = Math.trunc(param3.length);
         var _loc10_ = 0;
         var _loc11_ = Math.floor(_loc9_ * param6);
         var _loc12_ = param7 * param7 / 12;
         param3[0] = param4;
         param3[1] = param3[0] + param7 * param5;
         var _loc13_ = (1 - _loc12_ * (param2[0] - param1)) * param3[0];
         var _loc14_ = (1 - _loc12_ * (param2[1] - param1)) * param3[1];
         _loc10_ = 2;
         while(_loc10_ <= _loc11_ + 2)
         {
            _loc15_ = (2 + (param2[_loc10_ - 1] - param1) * _loc12_ * 12 / (1 - _loc12_ * (param2[_loc10_ - 1] - param1))) * _loc14_ - _loc13_;
            param3[_loc10_] = _loc15_ / (1 - _loc12_ * (param2[_loc10_] - param1));
            _loc13_ = _loc14_;
            _loc14_ = _loc15_;
            _loc10_++;
         }
         var _loc16_ = 1 / 12 / param7 * (8 * (param3[_loc11_ + 1] - param3[_loc11_ - 1]) - (param3[_loc11_ + 2] - param3[_loc11_ - 2]));
         var _loc17_ = Number(param3[_loc11_]);
         param3[_loc9_ - 1] = 0;
         param3[_loc9_ - 2] = param3[_loc9_ - 1] + param7 * 0.1;
         _loc13_ = (1 - _loc12_ * (param2[_loc9_ - 1] - param1)) * param3[_loc9_ - 1];
         _loc14_ = (1 - _loc12_ * (param2[_loc9_ - 2] - param1)) * param3[_loc9_ - 2];
         _loc10_ = Math.trunc(_loc9_ - 3);
         while(_loc10_ >= _loc11_ - 2)
         {
            _loc15_ = (2 + (param2[_loc10_ + 1] - param1) * _loc12_ * 12 / (1 - _loc12_ * (param2[_loc10_ + 1] - param1))) * _loc14_ - _loc13_;
            param3[_loc10_] = _loc15_ / (1 - _loc12_ * (param2[_loc10_] - param1));
            _loc13_ = _loc14_;
            _loc14_ = _loc15_;
            _loc10_--;
         }
         delRCenter = -1 / 12 / param7 * (8 * (param3[_loc11_ - 1] - param3[_loc11_ + 1]) - (param3[_loc11_ - 2] - param3[_loc11_ + 2]));
         psiRCenter = param3[_loc11_];
         var _loc18_ = 1 - delRCenter * _loc17_ / _loc16_ / psiRCenter;
         if(param8)
         {
            _loc19_ = _loc17_ / psiRCenter;
            _loc10_ = Math.trunc(_loc9_ - 1);
            while(_loc10_ >= _loc11_ - 2)
            {
               param3[_loc10_] *= _loc19_;
               _loc10_--;
            }
         }
         return _loc18_ * _loc18_;
      }
function sign(param1) 
      {
         return param1 < 0 ? -1 : 1;
      }
function sinh(param1) 
      {
         var _loc2_ = Math.exp(param1) - Math.exp(-param1);
         return _loc2_ / 2;
      }
function step(param1) 
      {
         return param1 <= 0 ? 0 : 1;
      }
function tanh(param1) 
      {
         return sinh(param1) / cosh(param1);
      }
function well(param1, param2, param3) 
      {
         var _loc4_ = 0;
         var _loc5_ = true;
         var _loc6_ = Math.round(Math.abs(param1) / param3) * param3 * sign(param1);
         if(Math.abs(param1 - _loc6_) <= param2 / 2)
         {
            _loc5_ = false;
         }
         if(_loc5_)
         {
            _loc4_ = 1;
         }
         return _loc4_;
      }
Mathematics.cosh=cosh;Mathematics.max=max;Mathematics.maxArray=maxArray;Mathematics.min=min;Mathematics.schrodStoerm1=schrodStoerm1;Mathematics.schrodStoerm2=schrodStoerm2;Mathematics.schrodStoerm=schrodStoerm;Mathematics.schrodLR=schrodLR;Mathematics.sign=sign;Mathematics.sinh=sinh;Mathematics.step=step;Mathematics.tanh=tanh;Mathematics.well=well;return Mathematics;})();
let FittingProtocol;FittingProtocol=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function FittingProtocol()
      {this.numOfBisection=10;this.numOfSympletic=100;this.acceptedToll=1e-10;this.isCenterPosAtMinPotential=false;this.centerPos=0.51;
         
      }
FittingProtocol.prototype.setParameter=function setParameter(param1, param2, param3, param4) 
      {
         this.numOfBisection = param1;
         this.numOfSympletic = param2;
         this.isCenterPosAtMinPotential = param3;
         this.centerPos = param4;
      };
return FittingProtocol;})();
let PotentialPointer;PotentialPointer=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function PotentialPointer()
      {this.isEven=true;this.fittingProtocol=undefined;this.potentialType=1;this.amp=100;this.width=5;this.dist=10;this.num=1;this.option1=1;
         
      }
PotentialPointer.prototype.setFittingProtocol=function setFittingProtocol(param1) 
      {
         this.fittingProtocol = param1;
      };
PotentialPointer.prototype.getFittingProtocol=function getFittingProtocol() 
      {
         return this.fittingProtocol;
      };
PotentialPointer.prototype.setType=function setType(param1) 
      {
         this.potentialType = param1;
         if(param1 == 11 || param1 == 12 || param1 == 13 || param1 == 14 || param1 == 15 || param1 == 16 || param1 == 17)
         {
            this.isEven = false;
         }
         else
         {
            this.isEven = true;
         }
      };
PotentialPointer.prototype.IsEven=function IsEven() 
      {
         return this.isEven;
      };
PotentialPointer.prototype.setParameter=function setParameter(param1, param2, param3, param4 = 1, param5 = 1) 
      {
         this.amp = param1;
         this.width = param2;
         this.dist = param3;
         this.num = param4;
         this.option1 = param5;
      };
PotentialPointer.prototype.value=function value(param1) 
      {
         var _loc5_ = NaN;
         var _loc6_ = 0;
         var _loc7_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         var _loc2_ = 0;
         var _loc3_ = 0;
         var _loc4_ = 0;
         var _loc8_ = Math.abs(param1);
         switch(this.potentialType)
         {
            case 0:
               break;
            case 1:
               _loc2_ = this.amp * param1 * param1;
               break;
            case 2:
               if(Math.abs(param1) < this.width / 2)
               {
                  _loc2_ += -this.amp;
               }
               break;
            case 3:
               if(Math.abs(param1 - this.dist / 2) < this.width / 2)
               {
                  _loc2_ += -this.amp;
               }
               if(Math.abs(-param1 - this.dist / 2) < this.width / 2)
               {
                  _loc2_ += -this.amp;
               }
               break;
            case 4:
               _loc4_ = -2;
               while(_loc4_ <= 2)
               {
                  if(Math.abs(param1 - _loc4_ * this.dist) < this.width / 2)
                  {
                     _loc2_ -= this.amp;
                  }
                  _loc4_++;
               }
               break;
            case 5:
               _loc2_ = this.amp * _loc8_;
               break;
            case 6:
               _loc2_ = this.amp * param1 * param1 * param1 * param1;
               break;
            case 7:
               _loc9_ = Math.cos(param1);
               _loc2_ = this.amp * _loc9_ * _loc9_;
               break;
            case 8:
               _loc2_ = this.amp / 10 * Math.floor(_loc8_);
               break;
            case 9:
               _loc3_ = Math.abs(100 * (param1 - this.dist / 2) / this.width);
               if(_loc3_ >= 0.02)
               {
                  _loc2_ += -this.amp / _loc3_;
               }
               else
               {
                  _loc2_ += -this.amp / 0.02;
               }
               _loc3_ = Math.abs(100 * (-param1 - this.dist / 2) / this.width);
               if(_loc3_ >= 0.02)
               {
                  _loc2_ += -this.amp / _loc3_;
               }
               else
               {
                  _loc2_ += -this.amp / 0.02;
               }
               break;
            case 10:
               _loc2_ += this.amp * (param1 - this.dist / 2) * (param1 - this.dist / 2) * (param1 + this.dist / 2) * (param1 + this.dist / 2);
               break;
            case 11:
               _loc3_ = Math.abs(param1);
               _loc3_ = Math.max(0.005,_loc3_);
               _loc2_ += -7.37996 * this.amp / _loc3_;
               _loc2_ += this.width * (this.width + 1) / _loc3_ / _loc3_;
               break;
            case 12:
               _loc3_ = Math.abs(param1);
               _loc2_ += 1 / 4 * this.amp * this.amp * _loc3_ * _loc3_;
               _loc3_ = Math.max(0.05,_loc3_);
               _loc2_ += this.width * (this.width + 1) / _loc3_ / _loc3_;
               break;
            case 13:
               _loc3_ = Math.abs(param1);
               _loc3_ = Math.max(0.05,_loc3_);
               if(param1 < this.dist)
               {
                  _loc2_ += -this.amp;
               }
               _loc2_ += this.width * (this.width + 1) / _loc3_ / _loc3_;
               break;
            case 14:
               _loc3_ = Math.abs(param1);
               _loc3_ = Math.max(0.05,_loc3_);
               _loc2_ += -7.37996 * Math.exp(-_loc3_ / this.dist) / _loc3_;
               _loc2_ *= this.amp;
               _loc2_ += this.width * (this.width + 1) / _loc3_ / _loc3_;
               break;
            case 15:
               _loc3_ = Math.abs(param1);
               _loc3_ = Math.max(0.05,_loc3_);
               if(_loc3_ > this.dist)
               {
                  _loc2_ += 7.37996 * this.amp / _loc3_;
               }
               else
               {
                  _loc2_ += -this.amp;
               }
               _loc2_ += this.width * (this.width + 1) / _loc3_ / _loc3_;
               break;
            case 16:
               _loc10_ = (param1 - this.width / 2) / this.width * 2;
               _loc11_ = _loc10_ * _loc10_;
               if(this.dist == 1)
               {
                  _loc2_ = this.amp * _loc11_;
               }
               else if(this.dist == 2)
               {
                  _loc2_ = this.amp * Math.abs(_loc10_);
               }
               else if(this.dist == 3)
               {
                  _loc2_ = this.amp * _loc11_ * _loc11_;
               }
               else if(this.dist == 4)
               {
                  _loc2_ = this.amp * _loc11_ * _loc11_ * _loc11_ * _loc11_;
               }
               else if(this.dist == 5)
               {
                  _loc2_ = 2.5 * this.amp * (_loc10_ - 0.6) * (_loc10_ - 0.6) * (_loc10_ + 0.6) * (_loc10_ + 0.6);
               }
               else if(this.dist == 6)
               {
                  if(_loc10_ > 0.5)
                  {
                     _loc2_ = this.amp * (_loc10_ - 0.5) * (_loc10_ - 0.5) / 0.25;
                  }
                  else
                  {
                     _loc2_ = this.amp * (_loc10_ - 0.5) * (_loc10_ - 0.5) / 2.25;
                  }
               }
               else if(this.dist == 7)
               {
                  if(Math.abs(_loc10_) > 0.5)
                  {
                     _loc2_ = this.amp * _loc11_ * _loc11_ * _loc11_ * _loc11_;
                  }
                  else
                  {
                     _loc2_ = this.amp * 0.8 * Math.exp(-_loc11_ / 0.02);
                  }
               }
               break;
            case 17:
               _loc12_ = 1 - Math.exp(-(param1 - this.dist) / this.width);
               _loc2_ = this.amp * _loc12_ * _loc12_;
               if(_loc2_ > 500)
               {
                  _loc2_ = 500;
               }
               break;
            case 18:
               _loc6_ = Math.floor(this.num / 2);
               _loc7_ = 1;
               _loc4_ = 0;
               while(_loc4_ < this.num)
               {
                  if(Math.floor(this.num / 2) * 2 == this.num)
                  {
                     _loc5_ = this.dist / 2 + this.dist * (_loc4_ - this.num / 2);
                  }
                  else
                  {
                     _loc5_ = this.dist * (_loc4_ - Math.floor(this.num / 2));
                  }
                  if(Math.abs(param1 - _loc5_) < this.width / 2)
                  {
                     _loc3_ = Math.abs(50 * (param1 - _loc5_) / this.width);
                     if(_loc6_ == _loc4_)
                     {
                        _loc7_ = Number(this.option1);
                     }
                     else
                     {
                        _loc7_ = 1;
                     }
                     if(_loc3_ >= 0.025)
                     {
                        _loc2_ += -_loc7_ * this.amp / _loc3_;
                     }
                     else
                     {
                        _loc2_ += -_loc7_ * this.amp / 0.025;
                     }
                  }
                  _loc4_++;
               }
               break;
            case 19:
               _loc6_ = Math.floor(this.num / 2);
               _loc7_ = 1;
               _loc4_ = 0;
               while(_loc4_ < this.num)
               {
                  if(Math.floor(this.num / 2) * 2 == this.num)
                  {
                     _loc5_ = this.dist / 2 + this.dist * (_loc4_ - this.num / 2);
                  }
                  else
                  {
                     _loc5_ = this.dist * (_loc4_ - Math.floor(this.num / 2));
                  }
                  if(param1 - _loc5_ > -this.width / 2 && param1 - _loc5_ <= this.width / 2)
                  {
                     if(_loc6_ == _loc4_)
                     {
                        _loc7_ = Number(this.option1);
                     }
                     else
                     {
                        _loc7_ = 1;
                     }
                     _loc2_ += -_loc7_ * this.amp;
                  }
                  _loc4_++;
               }
               break;
            case 20:
               _loc3_ = Math.abs(param1);
               _loc3_ = Math.max(0.005,_loc3_);
               _loc2_ += -7.37996 * this.amp / _loc3_;
               break;
            case 21:
               _loc3_ = Math.abs(param1);
               _loc2_ += 1 / (1 + Math.exp((_loc3_ - this.dist) / 1));
               _loc2_ *= -this.amp;
               _loc2_ += this.width * (this.width + 1) / _loc3_ / _loc3_;
         }
         return _loc2_;
      };
return PotentialPointer;})();
let EigenfunctionData;EigenfunctionData=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function EigenfunctionData(param1, param2, param3, param4, param5)
      {this.energyValues=undefined;this.functionPointer=undefined;this.numberOfLevels=undefined;this.numberOfSteps=undefined;this.startX=undefined;this.stopX=undefined;
         
         this.functionPointer = param1;
         this.numberOfLevels = param2;
         this.numberOfSteps = param3;
         this.energyValues = new Array(this.numberOfLevels);
         this.startX = param4;
         this.stopX = param5;
      }
EigenfunctionData.prototype.getFunctionPointer=function getFunctionPointer() 
      {
         return this.functionPointer;
      };
EigenfunctionData.prototype.changeParameters=function changeParameters(param1, param2) 
      {
         this.numberOfLevels = param1;
         this.numberOfSteps = param2;
         this.energyValues = new Array(this.numberOfLevels);
      };
EigenfunctionData.prototype.getEnergyValue=function getEnergyValue(param1) 
      {
         return this.energyValues[param1];
      };
EigenfunctionData.prototype.getNumberOfLevels=function getNumberOfLevels() 
      {
         return this.numberOfLevels;
      };
EigenfunctionData.prototype.getNumberOfSteps=function getNumberOfSteps() 
      {
         return this.numberOfSteps;
      };
EigenfunctionData.prototype.getX=function getX(param1) 
      {
         return this.startX + (this.stopX - this.startX) / this.numberOfSteps * param1;
      };
EigenfunctionData.prototype.setEnergyValue=function setEnergyValue(param1, param2) 
      {
         this.energyValues[param1] = param2;
      };
return EigenfunctionData;})();
let EigenfunctionFinder;EigenfunctionFinder=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function EigenfunctionFinder(param1)
      {this.psi=undefined;this.numberOfLevels=undefined;this.numberOfSteps=undefined;this.startX=undefined;this.stopX=undefined;this.energyStart=undefined;this.energyStop=undefined;this.energyStepSize=undefined;this.stepSize=undefined;this.level=undefined;this.potentialPt=undefined;this.eigenData=undefined;this.allowedToRun=undefined;this.calculating=undefined;this.potentialData=undefined;this.isEven=undefined;
         
         this.calculating = false;
         this.allowedToRun = true;
         this.eigenData = param1;
         this.startX = this.eigenData.startX;
         this.stopX = this.eigenData.stopX;
         this.potentialPt = this.eigenData.getFunctionPointer();
         if(Boolean(this.potentialPt.IsEven()) && -this.startX == this.stopX)
         {
            this.isEven = true;
            this.startX = 0;
         }
         else
         {
            this.isEven = false;
         }
         this.numberOfLevels = this.eigenData.getNumberOfLevels();
         this.numberOfSteps = this.eigenData.getNumberOfSteps();
         if(this.isEven)
         {
            this.numberOfSteps = Math.floor(this.numberOfSteps / 2) + 1;
         }
         this.psi = new Array(this.numberOfSteps);
         this.potentialData = new Array(this.numberOfSteps);
         this.stepSize = (this.stopX - this.startX) / this.numberOfSteps;
         this.resetPotential();
      }
EigenfunctionFinder.prototype.resetPotential=function resetPotential() 
      {
         var _loc1_ = Number(this.startX);
         var _loc2_ = Number.MAX_VALUE;
         var _loc3_ = 0;
         var _loc4_ = 0;
         while(_loc4_ < this.numberOfSteps)
         {
            this.potentialData[_loc4_] = this.potentialPt.value(_loc1_);
            if(this.potentialData[_loc4_] < _loc2_)
            {
               _loc2_ = Number(this.potentialData[_loc4_]);
               _loc3_ = _loc4_;
            }
            else if(this.potentialData[_loc4_] == _loc2_)
            {
               if(_loc4_ < this.numberOfSteps / 2)
               {
                  _loc3_ = _loc4_;
               }
            }
            _loc1_ += this.stepSize;
            _loc4_++;
         }
         _loc3_ = Math.max(Math.min(this.numberOfSteps - 5,_loc3_),5);
         if(this.potentialPt.getFittingProtocol().isCenterPosAtMinPotential)
         {
            this.potentialPt.getFittingProtocol().centerPos = _loc3_ / this.numberOfSteps;
         }
         this.energyStart = _loc2_;
         this.energyStop = 10000;
         this.energyStepSize = 0.5;
      };
EigenfunctionFinder.prototype.getEnergyStart=function getEnergyStart() 
      {
         return this.energyStart;
      };
EigenfunctionFinder.prototype.getEigenfunction=function getEigenfunction(param1, param2) 
      {
         var _loc3_ = null;
         var _loc4_ = undefined;
         this.level = param2;
         this.schrodLR(param1,true);
         if(this.isEven)
         {
            _loc3_ = new Array(this.numberOfSteps * 2 - 1);
            _loc4_ = 0;
            while(_loc4_ < this.numberOfSteps * 2 - 1)
            {
               if(_loc4_ < this.numberOfSteps - 1)
               {
                  if(Math.floor(this.level / 2) * 2 == this.level)
                  {
                     _loc3_[_loc4_] = this.psi[this.numberOfSteps - _loc4_ - 1];
                  }
                  else
                  {
                     _loc3_[_loc4_] = -this.psi[this.numberOfSteps - _loc4_ - 1];
                  }
               }
               else
               {
                  _loc3_[_loc4_] = this.psi[_loc4_ - this.numberOfSteps + 1];
               }
               _loc4_++;
            }
            return _loc3_;
         }
         return this.psi;
      };
EigenfunctionFinder.prototype.getPotential=function getPotential() 
      {
         var _loc1_ = null;
         var _loc2_ = undefined;
         if(this.isEven)
         {
            _loc1_ = new Array(this.numberOfSteps * 2 - 1);
            _loc2_ = 0;
            while(_loc2_ < this.numberOfSteps * 2 - 1)
            {
               if(_loc2_ < this.numberOfSteps - 1)
               {
                  _loc1_[_loc2_] = this.potentialData[this.numberOfSteps - _loc2_ - 1];
               }
               else
               {
                  _loc1_[_loc2_] = this.potentialData[_loc2_ - this.numberOfSteps + 1];
               }
               _loc2_++;
            }
            return _loc1_;
         }
         return this.potentialData;
      };
EigenfunctionFinder.prototype.findEigenValueAndFunction=function findEigenValueAndFunction(param1, param2) 
      {
         var _loc11_ = NaN;
         var _loc12_ = NaN;
         var _loc13_ = NaN;
         var _loc14_ = NaN;
         var _loc15_ = NaN;
         var _loc16_ = NaN;
         var _loc17_ = NaN;
         var _loc18_ = NaN;
         var _loc3_ = param1;
         var _loc4_ = param2;
         var _loc5_ = 0;
         var _loc6_ = _loc3_;
         this.schrodStoerm(_loc6_);
         var _loc7_ = Number(this.psi[this.numberOfSteps - 1]);
         _loc6_ = _loc4_;
         this.schrodStoerm(_loc6_);
         if(Mathematics.sign(this.psi[this.numberOfSteps - 1]) == Mathematics.sign(_loc7_))
         {
            trace("이게 무슨말이야? Waarschijnlijk geen convergentie!\n");
            return 1;
         }
         if(_loc7_ > 0)
         {
            _loc6_ = _loc3_;
            _loc3_ = _loc4_;
            _loc4_ = _loc6_;
         }
         do
         {
            _loc6_ = 0.5 * _loc3_ + 0.5 * _loc4_;
            this.schrodStoerm(_loc6_);
            _loc7_ = Number(this.psi[this.numberOfSteps - 1]);
            if(_loc7_ < 0)
            {
               _loc3_ = _loc6_;
            }
            else
            {
               _loc4_ = _loc6_;
            }
            _loc5_++;
         }
         while(Math.abs(_loc7_) > 0.001 && _loc5_ < this.potentialPt.getFittingProtocol().numOfBisection);
         var _loc8_ = _loc6_;
         var _loc9_ = param2 - _loc6_ > _loc6_ - param1 ? _loc6_ + 0.25 * (param2 - _loc6_) : _loc6_ - 0.25 * (_loc6_ - param1);
         var _loc10_ = 0;
         do
         {
            _loc11_ = Number(this.schrodLR(_loc8_,false));
            _loc12_ = Number(this.schrodLR(_loc9_,false));
            if(_loc12_ < _loc11_)
            {
               _loc15_ = _loc8_;
               _loc8_ = _loc9_;
               _loc9_ = _loc15_;
               _loc16_ = _loc11_;
               _loc11_ = _loc12_;
               _loc12_ = _loc16_;
            }
            _loc13_ = _loc8_ - (_loc9_ - _loc8_);
            if(_loc13_ > param2)
            {
               _loc13_ = param2;
            }
            else if(_loc13_ < param1)
            {
               _loc13_ = param1;
            }
            _loc14_ = Number(this.schrodLR(_loc13_,false));
            if(_loc14_ < _loc11_)
            {
               _loc17_ = _loc8_ - 1.5 * (_loc9_ - _loc8_);
               if(_loc17_ > param2)
               {
                  _loc17_ = param2;
               }
               else if(_loc17_ < param1)
               {
                  _loc17_ = param1;
               }
               _loc18_ = Number(this.schrodLR(_loc17_,false));
               if(_loc18_ < _loc14_)
               {
                  _loc9_ = _loc17_;
               }
               else
               {
                  _loc9_ = _loc13_;
               }
            }
            else if(_loc14_ < _loc12_)
            {
               _loc9_ = _loc13_;
            }
            else
            {
               _loc9_ = _loc8_ + 0.75 * (_loc9_ - _loc8_);
            }
            _loc10_++;
         }
         while(_loc11_ > this.potentialPt.getFittingProtocol().acceptedToll && _loc10_ < this.potentialPt.getFittingProtocol().numOfSympletic);
         return _loc8_;
      };
EigenfunctionFinder.prototype.schrodLR=function schrodLR(param1, param2) 
      {
         var _loc3_ = NaN;
         if(Boolean(this.isEven) && Math.floor(this.level / 2) * 2 == this.level)
         {
            _loc3_ = Number(Mathematics.schrodLR(param1,this.potentialData,this.psi,1,0,this.potentialPt.getFittingProtocol().centerPos,this.stepSize,param2));
         }
         else
         {
            _loc3_ = Number(Mathematics.schrodLR(param1,this.potentialData,this.psi,0,0.1,this.potentialPt.getFittingProtocol().centerPos,this.stepSize,param2));
         }
         return _loc3_;
      };
EigenfunctionFinder.prototype.schrodStoerm=function schrodStoerm(param1) 
      {
         var _loc2_ = NaN;
         if(Boolean(this.isEven) && Math.floor(this.level / 2) * 2 == this.level)
         {
            _loc2_ = Number(Mathematics.schrodStoerm(param1,this.potentialData,this.psi,1,0,this.stepSize));
         }
         else
         {
            _loc2_ = Number(Mathematics.schrodStoerm(param1,this.potentialData,this.psi,0,0.1,this.stepSize));
         }
         return _loc2_;
      };
EigenfunctionFinder.prototype.getNumberOfFoundLevels=function getNumberOfFoundLevels() 
      {
         return this.level;
      };
EigenfunctionFinder.prototype.isCalculating=function isCalculating() 
      {
         return this.calculating;
      };
EigenfunctionFinder.prototype.numberOfZeros=function numberOfZeros(param1, param2, param3, param4) 
      {
         var _loc6_ = NaN;
         var _loc5_ = 0;
         _loc6_ = 1;
         while(param4 < this.potentialData[_loc6_++])
         {
         }
         var _loc7_ = _loc6_;
         var _loc8_ = Number(Mathematics.sign(param1[_loc7_]));
         _loc6_ = param2 - 30;
         while(param4 < this.potentialData[_loc6_--])
         {
         }
         var _loc9_ = _loc6_;
         var _loc10_ = _loc7_;
         while(_loc10_ < _loc9_)
         {
            if(Mathematics.sign(param1[_loc10_]) != _loc8_)
            {
               _loc5_++;
               _loc8_ = -_loc8_;
            }
            _loc10_++;
         }
         return _loc5_;
      };
EigenfunctionFinder.prototype.run=function run() 
      {
         this.calculating = true;
         this.allowedToRun = true;
         this.level = 0;
         this.iterate();
         if(this.isEven)
         {
            this.level = 1;
            this.iterate();
         }
         this.calculating = false;
      };
EigenfunctionFinder.prototype.iterate=function iterate() 
      {
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         var _loc6_ = NaN;
         var _loc7_ = NaN;
         var _loc8_ = NaN;
         var _loc9_ = NaN;
         var _loc10_ = NaN;
         var _loc1_ = 0;
         var _loc2_ = Number(this.energyStart);
         var _loc3_ = Number(this.energyStepSize);
         do
         {
            do
            {
               _loc8_ = _loc6_ = _loc2_;
               _loc9_ = Number(this.schrodStoerm(_loc6_));
               _loc5_ = Number(this.psi[this.numberOfSteps - 1]);
               _loc8_ = _loc7_ = _loc2_ + _loc3_;
               _loc4_ = Number(this.schrodStoerm(_loc7_));
               if(_loc4_ > _loc1_ + 1)
               {
                  _loc3_ /= 2;
               }
               else if(_loc4_ == _loc1_)
               {
                  _loc2_ = _loc7_;
                  _loc3_ *= 2;
               }
            }
            while(_loc4_ != _loc1_ + 1 && Boolean(this.allowedToRun));
            _loc3_ = _loc7_ - _loc6_;
            if(Mathematics.sign(this.psi[this.numberOfSteps - 1]) != Mathematics.sign(_loc5_) && Boolean(this.allowedToRun))
            {
               _loc10_ = this.findEigenValueAndFunction(_loc2_,_loc2_ + _loc3_);
               this.eigenData.setEnergyValue(this.level,_loc10_);
               if(this.isEven)
               {
                  this.level += 2;
               }
               else
               {
                  ++this.level;
               }
               _loc1_++;
            }
            _loc2_ = _loc7_;
         }
         while(_loc2_ < this.energyStop && this.level < this.numberOfLevels && Boolean(this.allowedToRun));
      };
EigenfunctionFinder.prototype.stopIt=function stopIt() 
      {
         this.allowedToRun = false;
      };
return EigenfunctionFinder;})();
const c={X_START:0,X_END:20,N_POINTS:501,XSCALE:.1951,isHigherMode:false,comboMode:{selIndex:p.comboMode},slider1:{value:p.slider1},slider2:{value:p.slider2},slider3:{value:p.slider3},ampStr:{},widthStr:{},distStr:{},draw(){}};c.ft=new PotentialPointer();c.fp=new FittingProtocol();c.ft.setFittingProtocol(c.fp);c.fp.setParameter(10,60,true,.06);c.fp.acceptedToll=.000001;c.a=new EigenfunctionData(c.ft,2,c.N_POINTS,c.X_START,c.X_END);c.b=new EigenfunctionFinder(c.a);c.calc=function calc() 
      {
         if(this.b != null)
         {
            this.b.run();
            this.draw();
         }
      }.bind(c);c.setFunctionParameter=function setFunctionParameter() 
      {
         if(this.isHigherMode)
         {
            this.a = new EigenfunctionData(this.ft,2,this.N_POINTS,this.X_START,this.X_END);
            this.b = new EigenfunctionFinder(this.a);
            this.isHigherMode = false;
         }
         var _loc1_ = this.slider1.value;
         var _loc2_ = this.slider2.value;
         var _loc3_ = this.slider3.value;
         this.slider3.alpha = 0;
         var _loc4_ = _loc1_ / 10;
         var _loc5_ = _loc2_;
         var _loc6_ = _loc3_ / this.XSCALE;
         var _loc7_ = _loc3_;
         this.ampStr.text = "";
         this.widthStr.text = "";
         this.distStr.text = "";
         this.modeNumber = this.comboMode.selIndex;
         switch(this.modeNumber)
         {
            case 0:
               this.functionType = 11;
               this.ampStr.text = "원자번호 Z = " + _loc4_;
               break;
            case 1:
               this.functionType = 12;
               this.ampStr.text = "각진동수 w = " + _loc4_;
               break;
            case 2:
               this.functionType = 13;
               this.slider3.alpha = 1;
               _loc4_ = _loc1_ * 10;
               this.ampStr.text = "퍼텐셜 깊이 " + _loc4_ + " eV";
               this.distStr.text = "반경 R = " + _loc7_ + " nm";
               break;
            case 3:
               this.functionType = 14;
               this.slider3.alpha = 1;
               this.ampStr.text = "페텐셜 강도 " + _loc4_;
               this.distStr.text = "특성거리 R = " + _loc7_ + " nm";
               break;
            case 4:
               this.functionType = 15;
               _loc4_ = _loc1_;
               this.slider3.alpha = 1;
               this.ampStr.text = "원자번호 Z = " + _loc4_;
               this.distStr.text = "특성거리 R = " + _loc7_ + " nm";
         }
         this.widthStr.text = "각운동량 양자수 l = " + _loc5_;
         this.ft.setType(this.functionType);
         this.ft.setParameter(_loc4_,_loc5_,_loc6_);
         if(this.b != null)
         {
            this.b.resetPotential();
         }
         this.calc();
      }.bind(c);c.setFunctionParameter();if(p.higher){c.a=new EigenfunctionData(c.ft,10,c.N_POINTS,c.X_START,c.X_END);c.b=new EigenfunctionFinder(c.a);c.calc();}return c;};
