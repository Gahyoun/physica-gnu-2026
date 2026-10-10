import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-c8db27599ba6e756", "title": "광학기기의 분해능", "source": "http://physica.gnu.ac.kr/phtml/optics/diffraction/circle/rp2.swf", "sourceFile": "rp2.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/diffraction/circle/rp2.swf", "originalSHA256": "ef63a6cd3093ee9350bd545ca8c369be4dfcf9e72690f742463e4ca0ce8420e3", "lesson": "5-5-2-2", "width": 420.0, "height": 300.0, "fps": 15.0, "type": "resolution", "as3": true, "animated": false, "controls": [{"clip": "bSlider", "label": "구경 / 원본 눈금", "min": 15.0, "max": 100.0, "step": 1.0, "value": 50.0}, {"clip": "lSlider", "label": "파장 / nm", "min": 380.0, "max": 700.0, "step": 1.0, "value": 500.0}, {"clip": "aSlider", "label": "두 광원 간격", "min": -50.0, "max": 50.0, "step": 0.1, "value": 10.0}], "checks": [{"clip": "showGuideChk", "label": "보조선", "value": false}], "buttons": [], "placements": {"bSlider": {"x": 2, "y": 271.05, "depth": 4, "width": 150, "height": 13}, "lSlider": {"x": 120.15, "y": 271.05, "depth": 5, "width": 150, "height": 13}, "aSlider": {"x": 238.3, "y": 271.05, "depth": 6, "width": 150, "height": 13}, "exp": {"x": 226.9, "y": 87.75, "depth": 23, "width": null, "height": null}, "showGuideChk": {"x": 363.1, "y": 271.15, "depth": 24, "width": 73, "height": 13}}};
export function createTimeline(){

class MainTimeline extends Sprite {
aSlider = new Sprite();
bSlider = new Sprite();
showGuideChk = new Sprite();
lSlider = new Sprite();
exp = new Sprite();
canvas = new Sprite();
graphCanvas = new Sprite();
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_bSlider_Scene1_();
         this.__setProp_lSlider_Scene1_();
         this.__setProp_aSlider_Scene1_();
         this.__setProp_showGuideChk_Scene1_Action_0();
      }
init(){
         this.canvas = new Sprite();
         this.addChild(this.canvas);
         this.graphCanvas = new Sprite();
         this.addChild(this.graphCanvas);
         this.drawGraph();
      }
drawGraph(){
         this.gc = this.canvas.graphics;
         this.gd = this.graphCanvas.graphics;
         this.gc.clear();
         this.gd.clear();
         this.diameter = this.bSlider.value;
         this.parallax = this.aSlider.value;
         this.dd = this.parallax;
         this.wavelength = this.lSlider.value;
         this.adDiameter = 1.22 * this.wavelength / this.diameter;
         this.gc.beginFill(0,0.25);
         this.gc.drawCircle(this.stopX,this.stopY,45);
         this.gc.endFill();
         this.gc.beginFill(16777215,1);
         this.gc.drawCircle(this.stopX,this.stopY,this.diameter / 4);
         this.gc.endFill();
         this.gc.lineStyle(1,8421504,1,true,LineScaleMode.NORMAL);
         this.gc.drawCircle(this.stopX + 5,this.stopY - 5,30);
         let _loc1_ = this.convertRGB(this.wavelength,0.8);
         this.gc.lineStyle(0,8421504,0);
         this.gc.beginFill(_loc1_,0.9);
         this.gc.drawCircle(this.adx,this.ady,this.adDiameter);
         this.gc.endFill();
         this.gc.beginFill(_loc1_,0.9);
         this.gc.drawCircle(this.adx + this.dd,this.ady,this.adDiameter);
         this.gc.endFill();
         this.gc.lineStyle(1,8421504,1,true,LineScaleMode.NORMAL);
         this.gc.moveTo(this.adx,this.ady);
         this.gc.lineTo(this.lsx,this.lsy);
         this.gc.moveTo(this.adx + this.dd,this.ady);
         this.gc.lineTo(this.lsx - this.dd,this.lsy);
         if(this.adDiameter > Math.abs(this.dd))
         {
            this.exp.text = "분해불가능";
         }
         else
         {
            this.exp.text = "분해가능";
         }
         this.rhoFactor = 3.83 / this.adDiameter / this.xScale;
         this.xStep = (this.xe - this.xs) * 1 / this.x_num;
         let _loc2_ = 0;
         this.gd.lineStyle(1,0,0.5,false,LineScaleMode.NONE);
         if(this.showGuideChk.isChecked)
         {
            this.gd.moveTo(this.getX(0),this.getY(0));
            this.gd.lineTo(this.getX(0),this.getY(2));
            this.gd.moveTo(this.getX(0 + this.adDiameter * this.xScale),this.getY(0));
            this.gd.lineTo(this.getX(0 + this.adDiameter * this.xScale),this.getY(0.2));
            this.gd.moveTo(this.getX(0 - this.adDiameter * this.xScale),this.getY(0));
            this.gd.lineTo(this.getX(0 - this.adDiameter * this.xScale),this.getY(0.2));
         }
         _loc2_ = int(0);
         while(_loc2_ < this.x_num)
         {
            this.xVal = this.xs + this.xStep * (_loc2_ + 1);
            this.yVal = this.myFunction(this.rhoFactor * this.xVal);
            if(_loc2_ == 0)
            {
               this.gd.moveTo(this.getX(this.xVal),this.getY(this.yVal));
            }
            else
            {
               this.gd.lineTo(this.getX(this.xVal),this.getY(this.yVal));
            }
            _loc2_++;
         }
         this.gd.lineStyle(1,0,0.5,false,LineScaleMode.NONE);
         if(this.showGuideChk.isChecked)
         {
            this.gd.moveTo(this.getX(0 + this.dd * this.xScale),this.getY(0));
            this.gd.lineTo(this.getX(0 + this.dd * this.xScale),this.getY(2));
            this.gd.moveTo(this.getX(0 + this.dd * this.xScale + this.adDiameter * this.xScale),this.getY(0));
            this.gd.lineTo(this.getX(0 + this.dd * this.xScale + this.adDiameter * this.xScale),this.getY(0.2));
            this.gd.moveTo(this.getX(0 + this.dd * this.xScale - this.adDiameter * this.xScale),this.getY(0));
            this.gd.lineTo(this.getX(0 + this.dd * this.xScale - this.adDiameter * this.xScale),this.getY(0.2));
         }
         _loc2_ = int(0);
         while(_loc2_ < this.x_num)
         {
            this.xVal = this.xs + this.xStep * (_loc2_ + 1);
            this.yVal = this.myFunction(this.rhoFactor * (this.xVal - this.dd * this.xScale));
            if(_loc2_ == 0)
            {
               this.gd.moveTo(this.getX(this.xVal),this.getY(this.yVal));
            }
            else
            {
               this.gd.lineTo(this.getX(this.xVal),this.getY(this.yVal));
            }
            _loc2_++;
         }
         _loc1_ = this.convertRGB(this.wavelength,0.7);
         this.gd.lineStyle(1,_loc1_,1,false,LineScaleMode.NORMAL);
         _loc2_ = int(0);
         while(_loc2_ < this.x_num)
         {
            this.xVal = this.xs + this.xStep * (_loc2_ + 1);
            this.yVal = this.myFunction(this.rhoFactor * this.xVal) + this.myFunction(this.rhoFactor * (this.xVal - this.dd * this.xScale));
            if(_loc2_ == 0)
            {
               this.gd.moveTo(this.getX(this.xVal),this.getY(this.yVal));
            }
            else
            {
               this.gd.lineTo(this.getX(this.xVal),this.getY(this.yVal));
            }
            _loc2_++;
         }
      }
getX(param1){
         return this.GrX + this.GrWidth * (param1 - this.xs) / (this.xe - this.xs);
      }
getY(param1){
         return this.GrY + this.GrHeight * (this.ye - param1) / (this.ye - this.ys);
      }
myFunction(param1){
         this.amp = 1;
         if(Math.abs(param1) < 0.01)
         {
            this.returnValue = 1;
         }
         else
         {
            this.j1 = this.bessel1(param1);
            this.returnValue = 2 * 2 * this.j1 * this.j1 / param1 / param1;
         }
         return this.amp * this.returnValue;
      }
bessel1(param1){
         if(param1 * param1 > 200)
         {
            return 0;
         }
         this.fac = 1;
         this.sign = -1;
         this.rho = param1 / 2;
         this.sum = 0;
         let _loc2_ = 0;
         while(_loc2_ < 20)
         {
            if(_loc2_ != 0)
            {
               this.fac *= _loc2_;
            }
            this.sign *= -1;
            this.sum += this.sign / this.fac / this.fac / (_loc2_ + 1) * this.rho;
            this.rho *= param1 / 2 * param1 / 2;
            _loc2_++;
         }
         return this.sum;
      }
convertRGB(param1, param2 = 1){
         let _loc3_ = undefined;
         this.w = new Array(380,440,490,510,580,645);
         this.rr = new Array(255,10,10,10,255,255);
         this.gg = new Array(10,10,255,255,255,10);
         this.bb = new Array(255,255,255,10,10,10);
         this.ii = 0;
         if(param1 <= this.w[0])
         {
            this.ii = 0;
            _loc3_ = 0;
         }
         else if(param1 <= this.w[1])
         {
            this.ii = 0;
            _loc3_ = 1 * (param1 - this.w[0]) / (this.w[1] - this.w[0]);
         }
         else if(param1 <= this.w[2])
         {
            this.ii = 1;
            _loc3_ = 1 * (param1 - this.w[1]) / (this.w[2] - this.w[1]);
         }
         else if(param1 <= this.w[3])
         {
            this.ii = 2;
            _loc3_ = 1 * (param1 - this.w[2]) / (this.w[3] - this.w[2]);
         }
         else if(param1 <= this.w[4])
         {
            this.ii = 3;
            _loc3_ = 1 * (param1 - this.w[3]) / (this.w[4] - this.w[3]);
         }
         else if(param1 <= this.w[5])
         {
            this.ii = 4;
            _loc3_ = 1 * (param1 - this.w[4]) / (this.w[5] - this.w[4]);
         }
         else
         {
            this.ii = 4;
            _loc3_ = 1;
         }
         this.redcolor = Math.floor((this.rr[this.ii] * (1 - _loc3_) + this.rr[this.ii + 1] * _loc3_) * param2);
         this.grecolor = Math.floor((this.gg[this.ii] * (1 - _loc3_) + this.gg[this.ii + 1] * _loc3_) * param2);
         this.blucolor = Math.floor((this.bb[this.ii] * (1 - _loc3_) + this.bb[this.ii + 1] * _loc3_) * param2);
         if(this.redcolor > 255)
         {
            this.redcolor = 255;
         }
         if(this.grecolor > 255)
         {
            this.grecolor = 255;
         }
         if(this.blucolor > 255)
         {
            this.blucolor = 255;
         }
         return (this.redcolor * 256 + this.grecolor) * 256 + this.blucolor;
      }
OListener(param1){
         this.drawGraph();
      }
OListener2(param1){
         if(param1.target == this.showGuideChk)
         {
            this.drawGraph();
         }
      }
__setProp_bSlider_Scene1_(){
         try
         {
            this.bSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.bSlider.arrowColor = 102;
         this.bSlider.centerSquareOffColor = 21947;
         this.bSlider.centerSquareOnColor = 13369548;
         this.bSlider.enabled = true;
         this.bSlider.fontBold = true;
         this.bSlider.fontColor = 8421504;
         this.bSlider.fontEmbed = false;
         this.bSlider.fontColorLimit = 8421504;
         this.bSlider.fontName = "_sans";
         this.bSlider.fontNumName = "_sans";
         this.bSlider.fontColorSelected = 8421504;
         this.bSlider.fontSize = 12;
         this.bSlider.boxHeight = 13;
         this.bSlider.incrementOrDigit = 1;
         this.bSlider.isIncrement = true;
         this.bSlider.limitLower = 15;
         this.bSlider.limitUpper = 100;
         this.bSlider.lineColor = 8421504;
         this.bSlider.lineThickness = 1;
         this.bSlider.isShowValue = true;
         this.bSlider.skin = 0;
         this.bSlider.text = "";
         this.bSlider.value = 50;
         this.bSlider.visible = true;
         this.bSlider.boxWidth = 110;
         try
         {
            this.bSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_lSlider_Scene1_(){
         try
         {
            this.lSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.lSlider.arrowColor = 102;
         this.lSlider.centerSquareOffColor = 21947;
         this.lSlider.centerSquareOnColor = 13369548;
         this.lSlider.enabled = true;
         this.lSlider.fontBold = true;
         this.lSlider.fontColor = 8421504;
         this.lSlider.fontEmbed = false;
         this.lSlider.fontColorLimit = 8421504;
         this.lSlider.fontName = "_sans";
         this.lSlider.fontNumName = "_sans";
         this.lSlider.fontColorSelected = 8421504;
         this.lSlider.fontSize = 12;
         this.lSlider.boxHeight = 13;
         this.lSlider.incrementOrDigit = 1;
         this.lSlider.isIncrement = true;
         this.lSlider.limitLower = 380;
         this.lSlider.limitUpper = 700;
         this.lSlider.lineColor = 8421504;
         this.lSlider.lineThickness = 1;
         this.lSlider.isShowValue = true;
         this.lSlider.skin = 0;
         this.lSlider.text = "";
         this.lSlider.value = 500;
         this.lSlider.visible = true;
         this.lSlider.boxWidth = 110;
         try
         {
            this.lSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_aSlider_Scene1_(){
         try
         {
            this.aSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.aSlider.arrowColor = 102;
         this.aSlider.centerSquareOffColor = 21947;
         this.aSlider.centerSquareOnColor = 13369548;
         this.aSlider.enabled = true;
         this.aSlider.fontBold = true;
         this.aSlider.fontColor = 8421504;
         this.aSlider.fontEmbed = false;
         this.aSlider.fontColorLimit = 8421504;
         this.aSlider.fontName = "_sans";
         this.aSlider.fontNumName = "_sans";
         this.aSlider.fontColorSelected = 8421504;
         this.aSlider.fontSize = 12;
         this.aSlider.boxHeight = 13;
         this.aSlider.incrementOrDigit = 0.1;
         this.aSlider.isIncrement = true;
         this.aSlider.limitLower = -50;
         this.aSlider.limitUpper = 50;
         this.aSlider.lineColor = 8421504;
         this.aSlider.lineThickness = 1;
         this.aSlider.isShowValue = true;
         this.aSlider.skin = 0;
         this.aSlider.text = "";
         this.aSlider.value = 10;
         this.aSlider.visible = true;
         this.aSlider.boxWidth = 110;
         try
         {
            this.aSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_showGuideChk_Scene1_Action_0(){
         try
         {
            this.showGuideChk["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.showGuideChk.checkColor = 16711680;
         this.showGuideChk.checkStyle = 1;
         this.showGuideChk.checkThickness = 2;
         this.showGuideChk.isChecked = false;
         this.showGuideChk.enabled = true;
         this.showGuideChk.fontBold = true;
         this.showGuideChk.fontColor = 8421504;
         this.showGuideChk.fontEmbed = false;
         this.showGuideChk.fontName = "_sans";
         this.showGuideChk.fontOnColor = 13369548;
         this.showGuideChk.fontSize = 11;
         this.showGuideChk.boxHeight = 12;
         this.showGuideChk.lineColor = 8421504;
         this.showGuideChk.lineThickness = 2;
         this.showGuideChk.text = "보조선";
         this.showGuideChk.visible = true;
         this.showGuideChk.boxWidth = 60;
         try
         {
            this.showGuideChk["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
frame1(){
         this.diameter = 10;
         this.stopX = 150;
         this.stopY = 150;
         this.adx = 250;
         this.ady = 50;
         this.lsx = 50;
         this.lsy = 250;
         this.dd = 50;
         this.wavelength = 500;
         this.xs = -100;
         this.xe = 100;
         this.x_num = 250;
         this.ys = 0;
         this.ye = 2;
         this.xScale = 2;
         this.GrX = 150;
         this.GrY = 120;
         this.GrWidth = 270;
         this.GrHeight = 130;
         this.bSlider.setCustomStyle(1);
         this.lSlider.setCustomStyle(1);
         this.aSlider.setCustomStyle(1);
         this.showGuideChk.setCustomStyle(1);
         this.init();
         this.aSlider.addEventListener(SliderEvent.CHANGE,this.OListener);
         this.lSlider.addEventListener(SliderEvent.CHANGE,this.OListener);
         this.bSlider.addEventListener(SliderEvent.CHANGE,this.OListener);
         this.showGuideChk.addEventListener(MouseEvent.CLICK,this.OListener2);
      }
}
const t=new MainTimeline();A.configure(t,SPEC);t.frame1();return t;}
