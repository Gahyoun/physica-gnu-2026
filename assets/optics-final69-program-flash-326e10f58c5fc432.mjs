import * as A from './optics-final69-adapter.mjs';
const {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;
const SPEC={"id": "flash-326e10f58c5fc432", "title": "다중슬릿 간섭", "source": "http://physica.gnu.ac.kr/phtml/optics/interference/young/moireint4cs3.swf", "sourceFile": "moireint4cs3.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/interference/young/moireint4cs3.swf", "originalSHA256": "0a2329b58d899f527a21863e08c89e19b371d8c8bd1de944e2b9a922b67d50a9", "lesson": "5-4-3-2", "width": 500.0, "height": 340.0, "fps": 24.0, "type": "moire", "as3": true, "animated": false, "controls": [{"clip": "spaceSlider", "label": "슬릿 간격", "min": 50.0, "max": 250.0, "step": 1.0, "value": 100.0}, {"clip": "numSlider", "label": "슬릿 수", "min": 2.0, "max": 12.0, "step": 1.0, "value": 4.0}, {"clip": "wavelengthSlider", "label": "파장 / 원본 눈금", "min": 10.0, "max": 30.0, "step": 0.1, "value": 20.0}], "checks": [], "buttons": [], "placements": {"spaceSlider": {"x": 10.8, "y": 312, "depth": 1, "width": 150, "height": 13}, "numSlider": {"x": 128.95, "y": 312, "depth": 2, "width": 150, "height": 13}, "wavelengthSlider": {"x": 247.1, "y": 312, "depth": 3, "width": 150, "height": 13}}};
export function createTimeline(){

class MainTimeline extends Sprite {
numSlider = new Sprite();
wavelengthSlider = new Sprite();
spaceSlider = new Sprite();
wavelength = 0;
num = 0;
space = 0;
graphicCanvas = new Sprite();
gd = new Sprite();
xC = 0;
yC = 0;
time = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_spaceSlider_();
         this.__setProp_numSlider_();
         this.__setProp_wavelengthSlider_();
      }
init(){
         this.graphicCanvas = new Sprite();
         this.addChild(this.graphicCanvas);
         let _loc1_ = new Sprite();
         _loc1_.graphics.beginFill(16711680);
         _loc1_.graphics.drawRect(0,0,500,300);
         this.addChild(_loc1_);
         this.graphicCanvas.mask = _loc1_;
         this.drawGraph();
      }
setValue(){
         this.wavelength = this.wavelengthSlider.value;
         this.num = this.numSlider.value;
         this.space = this.spaceSlider.value;
      }
drawGraph(){
         let _loc1_ = 0;
         let _loc2_ = undefined;
         this.setValue();
         this.gd = this.graphicCanvas.graphics;
         this.gd.clear();
         this.gd.lineStyle(this.wavelength / this.num,0,100);
         _loc1_ = int(0);
         while(_loc1_ < this.num)
         {
            _loc2_ = this.wavelength;
            while(_loc2_ < 550)
            {
               this.gd.drawCircle(this.xC,this.yC - this.space / 2 + this.space / (this.num - 1) * _loc1_,_loc2_ + this.time * 0.4);
               _loc2_ += this.wavelength;
            }
            _loc1_++;
         }
         this.gd.lineStyle(0,5570560,0);
         _loc1_ = int(0);
         while(_loc1_ < this.num)
         {
            this.gd.beginFill(16711680,100);
            this.gd.drawCircle(this.xC,this.yC - this.space / 2 + this.space / (this.num - 1) * _loc1_,4);
            this.gd.endFill();
            _loc1_++;
         }
      }
OListener(param1){
         this.drawGraph();
      }
__setProp_spaceSlider_(){
         try
         {
            this.spaceSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.spaceSlider.arrowColor = 102;
         this.spaceSlider.centerSquareOffColor = 21947;
         this.spaceSlider.centerSquareOnColor = 13369548;
         this.spaceSlider.enabled = true;
         this.spaceSlider.fontBold = true;
         this.spaceSlider.fontColor = 8421504;
         this.spaceSlider.fontEmbed = false;
         this.spaceSlider.fontColorLimit = 8421504;
         this.spaceSlider.fontName = "_sans";
         this.spaceSlider.fontNumName = "_sans";
         this.spaceSlider.fontColorSelected = 8421504;
         this.spaceSlider.fontSize = 12;
         this.spaceSlider.boxHeight = 13;
         this.spaceSlider.incrementOrDigit = 1;
         this.spaceSlider.isIncrement = true;
         this.spaceSlider.limitLower = 50;
         this.spaceSlider.limitUpper = 250;
         this.spaceSlider.lineColor = 8421504;
         this.spaceSlider.lineThickness = 1;
         this.spaceSlider.isShowValue = true;
         this.spaceSlider.skin = 0;
         this.spaceSlider.text = "";
         this.spaceSlider.value = 100;
         this.spaceSlider.visible = true;
         this.spaceSlider.boxWidth = 110;
         try
         {
            this.spaceSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_numSlider_(){
         try
         {
            this.numSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.numSlider.arrowColor = 102;
         this.numSlider.centerSquareOffColor = 21947;
         this.numSlider.centerSquareOnColor = 13369548;
         this.numSlider.enabled = true;
         this.numSlider.fontBold = true;
         this.numSlider.fontColor = 8421504;
         this.numSlider.fontEmbed = false;
         this.numSlider.fontColorLimit = 8421504;
         this.numSlider.fontName = "_sans";
         this.numSlider.fontNumName = "_sans";
         this.numSlider.fontColorSelected = 8421504;
         this.numSlider.fontSize = 12;
         this.numSlider.boxHeight = 13;
         this.numSlider.incrementOrDigit = 1;
         this.numSlider.isIncrement = true;
         this.numSlider.limitLower = 2;
         this.numSlider.limitUpper = 12;
         this.numSlider.lineColor = 8421504;
         this.numSlider.lineThickness = 1;
         this.numSlider.isShowValue = true;
         this.numSlider.skin = 0;
         this.numSlider.text = "";
         this.numSlider.value = 4;
         this.numSlider.visible = true;
         this.numSlider.boxWidth = 110;
         try
         {
            this.numSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_wavelengthSlider_(){
         try
         {
            this.wavelengthSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.wavelengthSlider.arrowColor = 102;
         this.wavelengthSlider.centerSquareOffColor = 21947;
         this.wavelengthSlider.centerSquareOnColor = 13369548;
         this.wavelengthSlider.enabled = true;
         this.wavelengthSlider.fontBold = true;
         this.wavelengthSlider.fontColor = 8421504;
         this.wavelengthSlider.fontEmbed = false;
         this.wavelengthSlider.fontColorLimit = 8421504;
         this.wavelengthSlider.fontName = "_sans";
         this.wavelengthSlider.fontNumName = "_sans";
         this.wavelengthSlider.fontColorSelected = 8421504;
         this.wavelengthSlider.fontSize = 12;
         this.wavelengthSlider.boxHeight = 13;
         this.wavelengthSlider.incrementOrDigit = 0.1;
         this.wavelengthSlider.isIncrement = true;
         this.wavelengthSlider.limitLower = 10;
         this.wavelengthSlider.limitUpper = 30;
         this.wavelengthSlider.lineColor = 8421504;
         this.wavelengthSlider.lineThickness = 1;
         this.wavelengthSlider.isShowValue = true;
         this.wavelengthSlider.skin = 0;
         this.wavelengthSlider.text = "";
         this.wavelengthSlider.value = 20;
         this.wavelengthSlider.visible = true;
         this.wavelengthSlider.boxWidth = 110;
         try
         {
            this.wavelengthSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
frame1(){
         this.xC = 10;
         this.yC = 150;
         this.time = 0;
         this.init();
         this.spaceSlider.addEventListener(SliderEvent.CHANGE,this.OListener);
         this.wavelengthSlider.addEventListener(SliderEvent.CHANGE,this.OListener);
         this.numSlider.addEventListener(SliderEvent.CHANGE,this.OListener);
      }
}
const t=new MainTimeline();A.configure(t,SPEC);t.frame1();return t;}
