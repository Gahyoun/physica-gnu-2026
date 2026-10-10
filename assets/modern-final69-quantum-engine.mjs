const trace=()=>{};export const quantumFactories={};
quantumFactories["flash-73be9774daba6348"]=(p)=>{let Mathematics;Mathematics=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function Mathematics()
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
      {var delRCenter,psiRCenter;
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
let ft=new PotentialPointer(),fp=new FittingProtocol();ft.setFittingProtocol(fp);fp.setParameter(10,100,true,.06);fp.acceptedToll=.000001;const c={ft,fp,X_START:-2.5,X_END:2.5,N_POINTS:651,XSCALE:.1951,functionType:p.hydrogen?9:3,numOfLattice:11,rSlider:{value:p.distance},depthSlider:{value:p.depth},facSlider:{value:p.factor},distStr:{},depthStr:{},numberStr:{},facStr:{},draw(){}};c.a=new EigenfunctionData(ft,p.higher?6:2,c.N_POINTS,c.X_START,c.X_END);c.b=new EigenfunctionFinder(c.a);c.calc=function calc() 
      {
         this.ft.setType(this.functionType);
         var _loc1_ = this.rSlider.value / this.XSCALE;
         var _loc2_ = this.depthSlider.value;
         this.distStr.text = this.rSlider.value + " nm";
         this.depthStr.text = _loc2_ + " eV";
         if(this.functionType == 9)
         {
            this.ft.setParameter(7.37996,_loc2_,_loc1_);
         }
         else
         {
            this.ft.setParameter(_loc2_,0.2 / this.XSCALE,_loc1_);
         }
         this.b.resetPotential();
         this.b.run();
         this.draw();
      }.bind(c);c.calc();return{a:c.a,b:c.b,ft,start:c.X_START,end:c.X_END,steps:c.N_POINTS,xscale:c.XSCALE};};
quantumFactories["flash-acf2dab16134634a"]=(p)=>{let Mathematics;Mathematics=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function Mathematics()
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
      {this.isEven=true;this.width=5;this.amp=100;this.dist=10;this.num=1;this.fittingProtocol=undefined;this.potentialType=1;this.option1=1;
         
      }
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
         }
         return _loc2_;
      };
PotentialPointer.prototype.getFittingProtocol=function getFittingProtocol() 
      {
         return this.fittingProtocol;
      };
PotentialPointer.prototype.setFittingProtocol=function setFittingProtocol(param1) 
      {
         this.fittingProtocol = param1;
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
PotentialPointer.prototype.setParameter=function setParameter(param1, param2, param3, param4 = 1, param5 = 1) 
      {
         this.amp = param1;
         this.width = param2;
         this.dist = param3;
         this.num = param4;
         this.option1 = param5;
      };
PotentialPointer.prototype.IsEven=function IsEven() 
      {
         return this.isEven;
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
      {var delRCenter,psiRCenter;
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
let ft=new PotentialPointer(),fp=new FittingProtocol();ft.setFittingProtocol(fp);fp.setParameter(32,100,false,.06);fp.acceptedToll=.000001;const c={ft,fp,X_START:-5,X_END:5,N_POINTS:1401,XSCALE:.1951,functionType:p.hydrogen?18:19,numOfLattice:11,rSlider:{value:p.distance},depthSlider:{value:p.depth},facSlider:{value:p.factor},distStr:{},depthStr:{},numberStr:{},facStr:{},draw(){}};c.a=new EigenfunctionData(ft,p.higher?22:11,c.N_POINTS,c.X_START,c.X_END);c.b=new EigenfunctionFinder(c.a);c.calc=function calc() 
      {
         this.ft.setType(this.functionType);
         var _loc1_ = 0.15 / this.XSCALE;
         this.distStr.text = 0.15 + " nm";
         var _loc2_ = 100;
         this.depthStr.text = _loc2_ + " eV";
         this.numberStr.text = this.numOfLattice;
         var _loc3_ = this.facSlider.value;
         this.facStr.text = Math.round((_loc3_ - 1) * 100) / 100;
         this.fp.centerPos = _loc1_ / 5;
         if(Math.floor(this.numOfLattice / 2) * 2 == this.numOfLattice)
         {
            this.fp.centerPos = _loc1_ / 10;
         }
         if(this.functionType == 18)
         {
            this.ft.setParameter(7.37996 / 2,_loc2_,_loc1_,this.numOfLattice,_loc3_);
         }
         else
         {
            this.ft.setParameter(_loc2_,0.2 / this.XSCALE / 2,_loc1_,this.numOfLattice,_loc3_);
         }
         this.b.resetPotential();
         this.b.run();
         this.draw();
      }.bind(c);c.calc();return{a:c.a,b:c.b,ft,start:c.X_START,end:c.X_END,steps:c.N_POINTS,xscale:c.XSCALE};};
quantumFactories["flash-9b41f82783cf8a46"]=(p)=>{let Mathematics;Mathematics=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function Mathematics()
   {
   }
function cosh(d)
   {
      var _loc1_ = Math.exp(d) + Math.exp(- d);
      return _loc1_ / 2;
   }
function max(functionpointer, d, d1)
   {
      var _loc3_ = 0;
      var _loc4_ = (d1 - d) / 100;
      var _loc2_ = d;
      var _loc1_;
      do
      {
         _loc1_ = functionpointer.value(_loc2_);
         if(_loc1_ > _loc3_)
         {
            _loc3_ = _loc1_;
         }
         _loc2_ += _loc4_;
      }
      while(_loc2_ < d1);
      return _loc3_;
   }
function maxArray(ad, i)
   {
      var _loc3_ = 0;
      var _loc1_ = 0;
      var _loc2_;
      while(_loc1_ < i)
      {
         _loc2_ = Math.abs(ad[_loc1_]);
         if(_loc2_ > _loc3_)
         {
            _loc3_ = _loc2_;
         }
         _loc1_ = _loc1_ + 1;
      }
      return _loc3_;
   }
function min(functionpointer, d, d1)
   {
      var _loc3_ = 0;
      var _loc4_ = (d1 - d) / 100;
      var _loc2_ = d;
      var _loc1_;
      do
      {
         _loc1_ = functionpointer.value(_loc2_);
         if(_loc1_ < _loc3_)
         {
            _loc3_ = _loc1_;
         }
         _loc2_ += _loc4_;
      }
      while(_loc2_ < d1);
      return _loc3_;
   }
function schrodStoerm1(energyV, potentialArray, psiArray, psi0, psiD0, h)
   {
      var _loc6_ = psiArray.length;
      var _loc7_ = h * h;
      var _loc5_ = 0;
      var _loc3_ = 1;
      psiArray[0] = psi0;
      var _loc4_ = h * (psiD0 + h * (potentialArray[0] - energyV) * psiArray[0] / 2);
      var _loc1_ = 1;
      while(_loc1_ < _loc6_)
      {
         psiArray[_loc1_] = psiArray[_loc1_ - 1] + _loc4_;
         _loc4_ += _loc7_ * (potentialArray[_loc1_] - energyV) * psiArray[_loc1_];
         if(Mathematics.sign(psiArray[_loc1_]) != _loc3_)
         {
            _loc5_ = _loc5_ + 1;
            _loc3_ = - _loc3_;
         }
         _loc1_ = _loc1_ + 1;
      }
      return _loc5_;
   }
function schrodStoerm2(energyV, potentialArray, psiArray, psi0, psiD0, h)
   {
      var _loc8_ = psiArray.length;
      var _loc5_ = h * h;
      var _loc4_ = 0;
      var _loc3_ = 1;
      psiArray[0] = psi0;
      psiArray[1] = psiArray[0] + h * psiD0;
      var _loc1_ = 2;
      while(_loc1_ <= 3)
      {
         psiArray[_loc1_] = (2 + _loc5_ * (potentialArray[_loc1_ - 1] - energyV)) * psiArray[_loc1_ - 1] - psiArray[_loc1_ - 2];
         if(Mathematics.sign(psiArray[_loc1_]) != _loc3_)
         {
            _loc4_ = _loc4_ + 1;
            _loc3_ = - _loc3_;
         }
         _loc1_ = _loc1_ + 1;
      }
      _loc1_ = 4;
      while(_loc1_ < _loc8_)
      {
         psiArray[_loc1_] = (2 + _loc5_ * (potentialArray[_loc1_ - 1] - energyV)) * psiArray[_loc1_ - 1] - psiArray[_loc1_ - 2];
         if(Mathematics.sign(psiArray[_loc1_]) != _loc3_)
         {
            _loc4_ = _loc4_ + 1;
            _loc3_ = - _loc3_;
         }
         _loc1_ = _loc1_ + 1;
      }
      return _loc4_;
   }
function schrodStoerm(energyV, potentialArray, psiArray, psi0, psiD0, h)
   {
      var _loc11_ = psiArray.length;
      var _loc2_ = h * h / 12;
      var _loc10_ = 0;
      var _loc6_ = 1;
      psiArray[0] = psi0;
      psiArray[1] = psiArray[0] + h * psiD0;
      var _loc9_ = (1 - _loc2_ * (potentialArray[0] - energyV)) * psiArray[0];
      var _loc4_ = (1 - _loc2_ * (potentialArray[1] - energyV)) * psiArray[1];
      var _loc7_;
      var _loc1_ = 2;
      while(_loc1_ < _loc11_)
      {
         _loc7_ = (2 + (potentialArray[_loc1_ - 1] - energyV) * _loc2_ * 12 / (1 - _loc2_ * (potentialArray[_loc1_ - 1] - energyV))) * _loc4_ - _loc9_;
         psiArray[_loc1_] = _loc7_ / (1 - _loc2_ * (potentialArray[_loc1_] - energyV));
         _loc9_ = _loc4_;
         _loc4_ = _loc7_;
         if(Mathematics.sign(psiArray[_loc1_]) != _loc6_)
         {
            _loc10_ = _loc10_ + 1;
            _loc6_ = - _loc6_;
         }
         _loc1_ = _loc1_ + 1;
      }
      return _loc10_;
   }
function schrodLR(energyV, potentialArray, psiArray, psi0, psiD0, centerPos, h, isMakeMatching)
   {var delRCenter,psiRCenter;
      var _loc7_ = psiArray.length;
      var _loc5_ = Math.floor(_loc7_ * centerPos);
      var _loc1_ = h * h / 12;
      psiArray[0] = psi0;
      psiArray[1] = psiArray[0] + h * psiD0;
      var _loc10_ = (1 - _loc1_ * (potentialArray[0] - energyV)) * psiArray[0];
      var _loc8_ = (1 - _loc1_ * (potentialArray[1] - energyV)) * psiArray[1];
      var _loc9_;
      var _loc6_ = 2;
      while(_loc6_ <= _loc5_ + 2)
      {
         _loc9_ = (2 + (potentialArray[_loc6_ - 1] - energyV) * _loc1_ * 12 / (1 - _loc1_ * (potentialArray[_loc6_ - 1] - energyV))) * _loc8_ - _loc10_;
         psiArray[_loc6_] = _loc9_ / (1 - _loc1_ * (potentialArray[_loc6_] - energyV));
         _loc10_ = _loc8_;
         _loc8_ = _loc9_;
         _loc6_ = _loc6_ + 1;
      }
      var _loc16_ = 0.08333333333333333 / h * (8 * (psiArray[_loc5_ + 1] - psiArray[_loc5_ - 1]) - (psiArray[_loc5_ + 2] - psiArray[_loc5_ - 2]));
      var _loc13_ = psiArray[_loc5_];
      psiArray[_loc7_ - 1] = 0;
      psiArray[_loc7_ - 2] = psiArray[_loc7_ - 1] + h * 0.1;
      _loc10_ = (1 - _loc1_ * (potentialArray[_loc7_ - 1] - energyV)) * psiArray[_loc7_ - 1];
      _loc8_ = (1 - _loc1_ * (potentialArray[_loc7_ - 2] - energyV)) * psiArray[_loc7_ - 2];
      _loc6_ = _loc7_ - 3;
      while(_loc6_ >= _loc5_ - 2)
      {
         _loc9_ = (2 + (potentialArray[_loc6_ + 1] - energyV) * _loc1_ * 12 / (1 - _loc1_ * (potentialArray[_loc6_ + 1] - energyV))) * _loc8_ - _loc10_;
         psiArray[_loc6_] = _loc9_ / (1 - _loc1_ * (potentialArray[_loc6_] - energyV));
         _loc10_ = _loc8_;
         _loc8_ = _loc9_;
         _loc6_ = _loc6_ - 1;
      }
      var _loc17_ = -0.08333333333333333 / h * (8 * (psiArray[_loc5_ - 1] - psiArray[_loc5_ + 1]) - (psiArray[_loc5_ - 2] - psiArray[_loc5_ + 2]));
      var _loc15_ = psiArray[_loc5_];
      var _loc14_ = 1 - _loc17_ * _loc13_ / _loc16_ / _loc15_;
      var _loc11_;
      if(isMakeMatching)
      {
         _loc11_ = _loc13_ / _loc15_;
         _loc6_ = _loc7_ - 1;
         while(_loc6_ >= _loc5_ - 2)
         {
            psiArray[_loc6_] *= _loc11_;
            _loc6_ = _loc6_ - 1;
         }
      }
      return _loc14_ * _loc14_;
   }
function sign(d)
   {
      var _loc1_ = d >= 0 ? 1 : -1;
      return _loc1_;
   }
function sinh(d)
   {
      var _loc1_ = Math.exp(d) - Math.exp(- d);
      return _loc1_ / 2;
   }
function step(d)
   {
      return d > 0 ? 1 : 0;
   }
function tanh(d)
   {
      return Mathematics.sinh(d) / Mathematics.cosh(d);
   }
function well(d, d1, d2)
   {
      var _loc2_ = 0;
      var _loc1_ = true;
      var _loc4_ = Math.round(Math.abs(d) / d2) * d2 * Mathematics.sign(d);
      if(Math.abs(d - _loc4_) <= d1 / 2)
      {
         _loc1_ = false;
      }
      if(_loc1_)
      {
         _loc2_ = 1;
      }
      return _loc2_;
   }
Mathematics.cosh=cosh;Mathematics.max=max;Mathematics.maxArray=maxArray;Mathematics.min=min;Mathematics.schrodStoerm1=schrodStoerm1;Mathematics.schrodStoerm2=schrodStoerm2;Mathematics.schrodStoerm=schrodStoerm;Mathematics.schrodLR=schrodLR;Mathematics.sign=sign;Mathematics.sinh=sinh;Mathematics.step=step;Mathematics.tanh=tanh;Mathematics.well=well;return Mathematics;})();
let FittingProtocol;FittingProtocol=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function FittingProtocol()
   {
   }
FittingProtocol.prototype.setParameter=function setParameter(numOfBisection, numOfSympletic, isCenterPosAtMinPotential, centerPos)
   {
      this.numOfBisection = numOfBisection;
      this.numOfSympletic = numOfSympletic;
      this.isCenterPosAtMinPotential = isCenterPosAtMinPotential;
      this.centerPos = centerPos;
   };
return FittingProtocol;})();
let PotentialPointer;PotentialPointer=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function PotentialPointer()
   {
   }
PotentialPointer.prototype.setFittingProtocol=function setFittingProtocol(fittingProtocol)
   {
      this.fittingProtocol = fittingProtocol;
   };
PotentialPointer.prototype.getFittingProtocol=function getFittingProtocol()
   {
      return this.fittingProtocol;
   };
PotentialPointer.prototype.setType=function setType(type)
   {
      this.potentialType = type;
      if(type == 11 || type == 12 || type == 13 || type == 14 || type == 15 || type == 16)
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
PotentialPointer.prototype.setParameter=function setParameter(amp, width, dist)
   {
      this.amp = amp;
      this.width = width;
      this.dist = dist;
   };
PotentialPointer.prototype.value=function value(x)
   {
      var _loc2_ = 0;
      var _loc8_ = Math.abs(x);
      var _loc3_;
      var _loc9_;
      var _loc7_;
      var _loc5_;
      var _loc6_;
      switch(this.potentialType)
      {
         case 0:
            break;
         case 1:
            _loc2_ = this.amp * x * x;
            break;
         case 2:
            if(Math.abs(x) < this.width / 2)
            {
               _loc2_ += - this.amp;
            }
            break;
         case 3:
            if(Math.abs(x - this.dist / 2) < this.width / 2)
            {
               _loc2_ += - this.amp;
            }
            if(Math.abs(- x - this.dist / 2) < this.width / 2)
            {
               _loc2_ += - this.amp;
            }
            break;
         case 4:
            _loc3_ = -2;
            while(_loc3_ <= 2)
            {
               if(Math.abs(x - _loc3_ * this.dist) < this.width / 2)
               {
                  _loc2_ -= this.amp;
               }
               _loc3_ = _loc3_ + 1;
            }
            break;
         case 5:
            _loc2_ = this.amp * _loc8_;
            break;
         case 6:
            _loc2_ = this.amp * x * x * x * x;
            break;
         case 7:
            _loc9_ = Math.cos(x);
            _loc2_ = this.amp * _loc9_ * _loc9_;
            break;
         case 8:
            _loc2_ = this.amp / 10 * Math.floor(_loc8_);
            break;
         case 9:
            _loc7_ = Math.abs(100 * (x - this.dist / 2) / this.width);
            if(_loc7_ >= 0.04)
            {
               _loc2_ += (- this.amp) / _loc7_;
            }
            else
            {
               _loc2_ += (- this.amp) / 0.04;
            }
            _loc7_ = Math.abs(100 * (- x - this.dist / 2) / this.width);
            if(_loc7_ >= 0.04)
            {
               _loc2_ += (- this.amp) / _loc7_;
            }
            else
            {
               _loc2_ += (- this.amp) / 0.04;
            }
            break;
         case 10:
            _loc2_ += this.amp * (x - this.dist / 2) * (x - this.dist / 2) * (x + this.dist / 2) * (x + this.dist / 2);
            break;
         case 11:
            _loc7_ = Math.abs(x);
            _loc7_ = Math.max(0.005,_loc7_);
            _loc2_ += -7.37996 * this.amp / _loc7_;
            _loc2_ += this.width * (this.width + 1) / _loc7_ / _loc7_;
            break;
         case 12:
            _loc7_ = Math.abs(x);
            _loc2_ += 0.25 * this.amp * this.amp * _loc7_ * _loc7_;
            _loc7_ = Math.max(0.05,_loc7_);
            _loc2_ += this.width * (this.width + 1) / _loc7_ / _loc7_;
            break;
         case 13:
            _loc7_ = Math.abs(x);
            _loc7_ = Math.max(0.05,_loc7_);
            if(x < this.dist)
            {
               _loc2_ += - this.amp;
            }
            _loc2_ += this.width * (this.width + 1) / _loc7_ / _loc7_;
            break;
         case 14:
            _loc7_ = Math.abs(x);
            _loc7_ = Math.max(0.05,_loc7_);
            _loc2_ += -7.37996 * Math.exp((- _loc7_) / this.dist) / _loc7_;
            _loc2_ += this.width * (this.width + 1) / _loc7_ / _loc7_;
            break;
         case 15:
            _loc7_ = Math.abs(x);
            _loc7_ = Math.max(0.05,_loc7_);
            if(_loc7_ > this.dist)
            {
               _loc2_ += 7.37996 * this.amp / _loc7_;
            }
            else
            {
               _loc2_ += -50;
            }
            _loc2_ += this.width * (this.width + 1) / _loc7_ / _loc7_;
            break;
         case 16:
            _loc5_ = (x - this.width / 2) / this.width * 2;
            _loc6_ = _loc5_ * _loc5_;
            if(this.dist == 1)
            {
               _loc2_ = this.amp * _loc6_;
               break;
            }
            if(this.dist == 2)
            {
               _loc2_ = this.amp * Math.abs(_loc5_);
               break;
            }
            if(this.dist == 3)
            {
               _loc2_ = this.amp * _loc6_ * _loc6_;
               break;
            }
            if(this.dist == 4)
            {
               _loc2_ = this.amp * _loc6_ * _loc6_ * _loc6_ * _loc6_;
               break;
            }
            if(this.dist == 5)
            {
               _loc2_ = 2.5 * this.amp * (_loc5_ - 0.6) * (_loc5_ - 0.6) * (_loc5_ + 0.6) * (_loc5_ + 0.6);
               break;
            }
            if(this.dist == 6)
            {
               if(_loc5_ > 0.5)
               {
                  _loc2_ = this.amp * (_loc5_ - 0.5) * (_loc5_ - 0.5) / 0.25;
               }
               else
               {
                  _loc2_ = this.amp * (_loc5_ - 0.5) * (_loc5_ - 0.5) / 2.25;
               }
               break;
            }
            if(this.dist == 7)
            {
               if(Math.abs(_loc5_) > 0.5)
               {
                  _loc2_ = this.amp * _loc6_ * _loc6_ * _loc6_ * _loc6_;
                  break;
               }
               _loc2_ = this.amp * 0.8 * Math.exp((- _loc6_) / 0.02);
            }
      }
      return _loc2_;
   };
return PotentialPointer;})();
let EigenfunctionData;EigenfunctionData=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function EigenfunctionData(functionPointer, numberOfEnergyLevels, numberOfXsteps, startX, stopX)
   {
      this.functionPointer = functionPointer;
      this.numberOfLevels = numberOfEnergyLevels;
      this.numberOfSteps = numberOfXsteps;
      this.energyValues = new Array(this.numberOfLevels);
      this.startX = startX;
      this.stopX = stopX;
   }
EigenfunctionData.prototype.getFunctionPointer=function getFunctionPointer()
   {
      return this.functionPointer;
   };
EigenfunctionData.prototype.changeParameters=function changeParameters(i, j)
   {
      this.numberOfLevels = i;
      this.numberOfSteps = j;
      this.energyValues = new Array(this.numberOfLevels);
   };
EigenfunctionData.prototype.getEnergyValue=function getEnergyValue(i)
   {
      return this.energyValues[i];
   };
EigenfunctionData.prototype.getNumberOfLevels=function getNumberOfLevels()
   {
      return this.numberOfLevels;
   };
EigenfunctionData.prototype.getNumberOfSteps=function getNumberOfSteps()
   {
      return this.numberOfSteps;
   };
EigenfunctionData.prototype.getX=function getX(i)
   {
      return this.startX + (this.stopX - this.startX) / this.numberOfSteps * i;
   };
EigenfunctionData.prototype.setEnergyValue=function setEnergyValue(i, d)
   {
      this.energyValues[i] = d;
   };
return EigenfunctionData;})();
let EigenfunctionFinder;EigenfunctionFinder=(function(){const TWO_PI=2*Math.PI,TINY=1e-30;function EigenfunctionFinder(eigenfunctiondata)
   {
      this.calculating = false;
      this.allowedToRun = true;
      this.eigenData = eigenfunctiondata;
      this.startX = this.eigenData.startX;
      this.stopX = this.eigenData.stopX;
      this.potentialPt = this.eigenData.getFunctionPointer();
      if(this.potentialPt.IsEven() && - this.startX == this.stopX)
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
      var _loc5_ = this.startX;
      var _loc3_ = 1.7976931348623157e+308;
      var _loc4_ = 0;
      var _loc2_ = 0;
      while(_loc2_ < this.numberOfSteps)
      {
         this.potentialData[_loc2_] = this.potentialPt.value(_loc5_);
         if(this.potentialData[_loc2_] < _loc3_)
         {
            _loc3_ = this.potentialData[_loc2_];
            _loc4_ = _loc2_;
         }
         else if(this.potentialData[_loc2_] == _loc3_)
         {
            if(_loc2_ < this.numberOfSteps / 2)
            {
               _loc4_ = _loc2_;
            }
         }
         _loc5_ += this.stepSize;
         _loc2_ = _loc2_ + 1;
      }
      _loc4_ = Math.max(Math.min(this.numberOfSteps - 5,_loc4_),5);
      if(this.potentialPt.getFittingProtocol().isCenterPosAtMinPotential)
      {
         this.potentialPt.getFittingProtocol().centerPos = _loc4_ / this.numberOfSteps;
      }
      this.energyStart = _loc3_;
      this.energyStop = 10000;
      this.energyStepSize = 0.5;
   };
EigenfunctionFinder.prototype.getEnergyStart=function getEnergyStart()
   {
      return this.energyStart;
   };
EigenfunctionFinder.prototype.getEigenfunction=function getEigenfunction(energyV, currentLevel)
   {
      this.level = currentLevel;
      this.schrodLR(energyV,true);
      var _loc3_;
      var _loc2_;
      if(this.isEven)
      {
         _loc3_ = new Array(this.numberOfSteps * 2 - 1);
         _loc2_ = 0;
         while(_loc2_ < this.numberOfSteps * 2 - 1)
         {
            if(_loc2_ < this.numberOfSteps - 1)
            {
               if(Math.floor(this.level / 2) * 2 == this.level)
               {
                  _loc3_[_loc2_] = this.psi[this.numberOfSteps - _loc2_ - 1];
               }
               else
               {
                  _loc3_[_loc2_] = - this.psi[this.numberOfSteps - _loc2_ - 1];
               }
            }
            else
            {
               _loc3_[_loc2_] = this.psi[_loc2_ - this.numberOfSteps + 1];
            }
            _loc2_ = _loc2_ + 1;
         }
         return _loc3_;
      }
      return this.psi;
   };
EigenfunctionFinder.prototype.getPotential=function getPotential()
   {
      var _loc3_;
      var _loc2_;
      if(this.isEven)
      {
         _loc3_ = new Array(this.numberOfSteps * 2 - 1);
         _loc2_ = 0;
         while(_loc2_ < this.numberOfSteps * 2 - 1)
         {
            if(_loc2_ < this.numberOfSteps - 1)
            {
               _loc3_[_loc2_] = this.potentialData[this.numberOfSteps - _loc2_ - 1];
            }
            else
            {
               _loc3_[_loc2_] = this.potentialData[_loc2_ - this.numberOfSteps + 1];
            }
            _loc2_ = _loc2_ + 1;
         }
         return _loc3_;
      }
      return this.potentialData;
   };
EigenfunctionFinder.prototype.findEigenValueAndFunction=function findEigenValueAndFunction(eStart, eEnd)
   {
      var _loc16_ = eStart;
      var _loc15_ = eEnd;
      var _loc18_ = 0;
      var _loc6_ = _loc16_;
      this.schrodStoerm(_loc6_);
      var _loc11_ = this.psi[this.numberOfSteps - 1];
      _loc6_ = _loc15_;
      this.schrodStoerm(_loc6_);
      if(Mathematics.sign(this.psi[this.numberOfSteps - 1]) == Mathematics.sign(_loc11_))
      {
         trace("이게 무슨말이야? Waarschijnlijk geen convergentie!\n");
         return 1;
      }
      if(_loc11_ > 0)
      {
         _loc6_ = _loc16_;
         _loc16_ = _loc15_;
         _loc15_ = _loc6_;
      }
      do
      {
         _loc6_ = 0.5 * _loc16_ + 0.5 * _loc15_;
         this.schrodStoerm(_loc6_);
         _loc11_ = this.psi[this.numberOfSteps - 1];
         if(_loc11_ < 0)
         {
            _loc16_ = _loc6_;
         }
         else
         {
            _loc15_ = _loc6_;
         }
         _loc18_ = _loc18_ + 1;
      }
      while(Math.abs(_loc11_) > 0.001 && _loc18_ < this.potentialPt.getFittingProtocol().numOfBisection);
      var _loc3_ = _loc6_;
      var _loc2_ = eEnd - _loc6_ <= _loc6_ - eStart ? _loc6_ - 0.25 * (_loc6_ - eStart) : _loc6_ + 0.25 * (eEnd - _loc6_);
      var _loc17_ = 0;
      var _loc7_;
      var _loc14_;
      var _loc12_;
      var _loc4_;
      var _loc8_;
      var _loc5_;
      var _loc13_;
      do
      {
         var bErr = this.schrodLR(_loc3_,false);
         _loc7_ = this.schrodLR(_loc2_,false);
         if(_loc7_ < bErr)
         {
            _loc14_ = _loc3_;
            _loc3_ = _loc2_;
            _loc2_ = _loc14_;
            _loc12_ = bErr;
            bErr = _loc7_;
            _loc7_ = _loc12_;
         }
         _loc4_ = _loc3_ - (_loc2_ - _loc3_);
         if(_loc4_ > eEnd)
         {
            _loc4_ = eEnd;
         }
         else if(_loc4_ < eStart)
         {
            _loc4_ = eStart;
         }
         _loc8_ = this.schrodLR(_loc4_,false);
         if(_loc8_ < bErr)
         {
            _loc5_ = _loc3_ - 1.5 * (_loc2_ - _loc3_);
            if(_loc5_ > eEnd)
            {
               _loc5_ = eEnd;
            }
            else if(_loc5_ < eStart)
            {
               _loc5_ = eStart;
            }
            _loc13_ = this.schrodLR(_loc5_,false);
            if(_loc13_ < _loc8_)
            {
               _loc2_ = _loc5_;
            }
            else
            {
               _loc2_ = _loc4_;
            }
         }
         else if(_loc8_ < _loc7_)
         {
            _loc2_ = _loc4_;
         }
         else
         {
            _loc2_ = _loc3_ + 0.75 * (_loc2_ - _loc3_);
         }
         _loc17_ = _loc17_ + 1;
      }
      while(bErr > this.potentialPt.getFittingProtocol().acceptedToll && _loc17_ < this.potentialPt.getFittingProtocol().numOfSympletic);
      _loc6_ = _loc3_;
      return _loc6_;
   };
EigenfunctionFinder.prototype.schrodLR=function schrodLR(energyL, isMatch)
   {var delRCenter,psiRCenter;
      var _loc2_;
      if(this.isEven && Math.floor(this.level / 2) * 2 == this.level)
      {
         _loc2_ = Mathematics.schrodLR(energyL,this.potentialData,this.psi,1,0,this.potentialPt.getFittingProtocol().centerPos,this.stepSize,isMatch);
      }
      else
      {
         _loc2_ = Mathematics.schrodLR(energyL,this.potentialData,this.psi,0,0.1,this.potentialPt.getFittingProtocol().centerPos,this.stepSize,isMatch);
      }
      return _loc2_;
   };
EigenfunctionFinder.prototype.schrodStoerm=function schrodStoerm(energyL)
   {
      var _loc2_;
      if(this.isEven && Math.floor(this.level / 2) * 2 == this.level)
      {
         _loc2_ = Mathematics.schrodStoerm(energyL,this.potentialData,this.psi,1,0,this.stepSize);
      }
      else
      {
         _loc2_ = Mathematics.schrodStoerm(energyL,this.potentialData,this.psi,0,0.1,this.stepSize);
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
EigenfunctionFinder.prototype.numberOfZeros=function numberOfZeros(ad, i, functionpointer, d)
   {
      var _loc7_ = 0;
      var _loc3_;
      _loc3_ = 1;
      while(d < this.potentialData[_loc3_++])
      {
      }
      var _loc6_ = _loc3_;
      var _loc4_ = Mathematics.sign(ad[_loc6_]);
      _loc3_ = i - 30;
      while(d < this.potentialData[_loc3_--])
      {
      }
      var _loc8_ = _loc3_;
      var _loc2_ = _loc6_;
      while(_loc2_ < _loc8_)
      {
         if(Mathematics.sign(ad[_loc2_]) != _loc4_)
         {
            _loc7_ = _loc7_ + 1;
            _loc4_ = - _loc4_;
         }
         _loc2_ = _loc2_ + 1;
      }
      return _loc7_;
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
      var _loc7_ = 0;
      var _loc3_ = this.energyStart;
      var _loc5_ = this.energyStepSize;
      var _loc4_;
      var _loc9_;
      var _loc6_;
      var _loc2_;
      var _loc8_;
      var _loc10_;
      var _loc11_;
      do
      {
         do
         {
            _loc6_ = _loc3_;
            _loc8_ = _loc6_;
            _loc10_ = this.schrodStoerm(_loc6_);
            _loc9_ = this.psi[this.numberOfSteps - 1];
            _loc2_ = _loc3_ + _loc5_;
            _loc8_ = _loc2_;
            _loc4_ = this.schrodStoerm(_loc2_);
            if(_loc4_ > _loc7_ + 1)
            {
               _loc5_ /= 2;
            }
            else if(_loc4_ == _loc7_)
            {
               _loc3_ = _loc2_;
               _loc5_ *= 2;
            }
         }
         while(_loc4_ != _loc7_ + 1 && this.allowedToRun);
         _loc5_ = _loc2_ - _loc6_;
         if(Mathematics.sign(this.psi[this.numberOfSteps - 1]) != Mathematics.sign(_loc9_) && this.allowedToRun)
         {
            _loc11_ = this.findEigenValueAndFunction(_loc3_,_loc3_ + _loc5_);
            this.eigenData.setEnergyValue(this.level,_loc11_);
            if(this.isEven)
            {
               this.level += 2;
            }
            else
            {
               this.level = this.level + 1;
            }
            _loc7_ = _loc7_ + 1;
         }
         _loc3_ = _loc2_;
      }
      while(_loc3_ < this.energyStop && this.level < this.numberOfLevels && this.allowedToRun);
   };
EigenfunctionFinder.prototype.stopIt=function stopIt()
   {
      this.allowedToRun = false;
   };
return EigenfunctionFinder;})();
let ft=new PotentialPointer(),fp=new FittingProtocol();ft.setFittingProtocol(fp);fp.setParameter(10,100,true,.06);fp.acceptedToll=.000001;ft.setType(16);ft.setParameter(100,1,p.mode);const a=new EigenfunctionData(ft,2,251,0,1),b=new EigenfunctionFinder(a);b.run();return{a,b,ft,start:0,end:1,steps:251,xscale:1};};
