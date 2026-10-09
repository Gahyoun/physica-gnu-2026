import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest } from './optics-batch50-adapter.mjs';
import {createKernel} from './optics-batch50-kernel-8bfa72046f6cac7a.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 719.9909210205078, "height": 310.00634765625}, "startBtn": {"x": 648.1, "y": 335.4, "width": 70.00534057617188, "height": 20}, "showRayChk": {"x": 3.4, "y": 321.3, "width": 73.00556945800781, "height": 13}, "showFrontChk": {"x": 3.4, "y": 339.3, "width": 73.00556945800781, "height": 13}, "resetBtn": {"x": 648.4, "y": 312.3, "width": 70.00534057617188, "height": 20}, "R1Slider": {"x": 395.4, "y": 314.3, "width": 150.01144409179688, "height": 13}, "opSlider": {"x": 232.35, "y": 328.8, "width": 150.01144409179688, "height": 13}, "n0Slider": {"x": 85.9, "y": 321.3, "width": 55.00419616699219, "height": 12}, "nSlider": {"x": 85.9, "y": 337.3, "width": 55.00419616699219, "height": 12}, "marker": {"x": 60, "y": 155, "width": 9, "height": 9.0186767578125}, "R1Txt": {"x": 579.5, "y": 313.8, "width": null, "height": null}, "objTxt": {"x": 236.4, "y": 314.2, "width": null, "height": null}, "imageTxt": {"x": 509.8, "y": 0, "width": null, "height": null}, "obj2Txt": {"x": 5.4, "y": 0, "width": null, "height": null}, "R2Slider": {"x": 395.4, "y": 331.3, "width": 150.01144409179688, "height": 13}, "R2Txt": {"x": 579.5, "y": 329.8, "width": null, "height": null}, "coordTxt": {"x": 586.1, "y": 13.7, "width": null, "height": null}}, "id": "flash-929bf840d9e022e1", "source": "simlens1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/spherelens/simlens1.swf", "title": "렌즈에서의 파면과 광선 모의실험", "lesson": "5-2-1-4", "width": 720, "height": 360, "animated": true, "controls": [{"clip": "n0Slider", "key": "n0", "label": "배경 굴절률", "min": 1.0, "max": 3.0, "step": 0.02, "value": 1.0}, {"clip": "R1Slider", "key": "R1", "label": "R1", "min": -200.0, "max": 200.0, "step": 1.0, "value": 50.0}, {"clip": "nSlider", "key": "n", "label": "렌즈 굴절률", "min": 1.0, "max": 3.0, "step": 0.02, "value": 2.0}, {"clip": "opSlider", "key": "op", "label": "물체 수평위치", "min": -1000.0, "max": 1000.0, "step": 0.1, "value": -100.0}, {"clip": "R2Slider", "key": "R2", "label": "R2", "min": -200.0, "max": 200.0, "step": 1.0, "value": -50.0}], "checks": [{"clip": "showRayChk", "label": "광선 보기", "value": false}, {"clip": "showFrontChk", "label": "파면 보기", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}, {"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "drag": true, "sourceSha256": "8562c6051cd18ab64d9f5519299b134b960db32bfbb3596cd8caabc9cfbbe068", "kernelSha256": "8bfa72046f6cac7ae42027c28f00ddc51ac98fb6742a87d01f93c977cf8dd220", "kernelModule": "optics-batch50-kernel-8bfa72046f6cac7a.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/ThickLens.as", "sha256": "4a1cac58e49cb14efa2c3812440ecda60ce822a9d0cbff066e5a242f4dcf65c4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "InitWave", "frame1", "opSliderEventHandler", "CheckBoxEventHandler", "reportClick", "RSliderEventHandler", "aniReset", "stopAniEventHandler", "InitInstrument", "Init", "stopDragging", "setWhiteBG", "indexReset", "dragObject", "InitCtrl", "ButtonEventHandler", "nSliderEventHandler", "startDragging"], "programModule": "optics-batch50-program-flash-929bf840d9e022e1.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
opSlider = new Sprite();
offsetX = 0;
offsetY = 0;
R2Txt = new Sprite();
t1 = new Sprite();
marker = new Sprite();
obj2Txt = new Sprite();
resetBtn = new Sprite();
yposi = 0;
backGraphics = new Sprite();
startBtn = new Sprite();
wf = new Sprite();
gg = new Sprite();
gr = new Sprite();
nSlider = new Sprite();
crossGraphics = new Sprite();
yOrigin = 0;
n0Slider = new Sprite();
xposi = 0;
imageTxt = new Sprite();
R2Slider = new Sprite();
coordTxt = new Sprite();
indexField = new Sprite();
canvas = new Sprite();
wfAux = new Sprite();
showRayChk = new Sprite();
isDrag = false;
numOfPoint = 0;
mk = new Sprite();
xOrigin = 0;
R1Txt = new Sprite();
showFrontChk = new Sprite();
R1Slider = new Sprite();
wavefrontStep0 = 0;
objTxt = new Sprite();
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_showRayChk__1();
         this.__setProp_opSlider__1();
         this.__setProp_R2Slider__1();
         this.__setProp_n0Slider__1();
         this.__setProp_nSlider__1();
         this.__setProp_R1Slider__1();
         this.__setProp_resetBtn__1();
         this.__setProp_showFrontChk__1();
      }
__setProp_n0Slider__1(){
         try
         {
            this.n0Slider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.n0Slider.arrowColor = 102;
         this.n0Slider.enabled = true;
         this.n0Slider.fontBold = true;
         this.n0Slider.fontColor = 8421504;
         this.n0Slider.fontEmbed = false;
         this.n0Slider.fontName = "_sans";
         this.n0Slider.fontSize = 12;
         this.n0Slider.boxHeight = 13;
         this.n0Slider.incrementOrDigit = 0.02;
         this.n0Slider.isIncrement = true;
         this.n0Slider.limitLower = 1;
         this.n0Slider.limitUpper = 3;
         this.n0Slider.lineColor = 8421504;
         this.n0Slider.lineThickness = 1;
         this.n0Slider.skin = 0;
         this.n0Slider.text = "배경 굴절률";
         this.n0Slider.value = 1;
         this.n0Slider.visible = true;
         this.n0Slider.boxWidth = 55;
         try
         {
            this.n0Slider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_R1Slider__1(){
         try
         {
            this.R1Slider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.R1Slider.arrowColor = 102;
         this.R1Slider.centerSquareOffColor = 21947;
         this.R1Slider.centerSquareOnColor = 13369548;
         this.R1Slider.enabled = true;
         this.R1Slider.fontBold = true;
         this.R1Slider.fontColor = 8421504;
         this.R1Slider.fontEmbed = false;
         this.R1Slider.fontColorLimit = 8421504;
         this.R1Slider.fontName = "_sans";
         this.R1Slider.fontNumName = "_sans";
         this.R1Slider.fontColorSelected = 8421504;
         this.R1Slider.fontSize = 12;
         this.R1Slider.boxHeight = 13;
         this.R1Slider.incrementOrDigit = 1;
         this.R1Slider.isIncrement = true;
         this.R1Slider.limitLower = -200;
         this.R1Slider.limitUpper = 200;
         this.R1Slider.lineColor = 8421504;
         this.R1Slider.lineThickness = 1;
         this.R1Slider.isShowValue = false;
         this.R1Slider.skin = 0;
         this.R1Slider.text = "";
         this.R1Slider.value = 50;
         this.R1Slider.visible = true;
         this.R1Slider.boxWidth = 150;
         try
         {
            this.R1Slider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
InitWave(){
         let _loc1_ = NaN;
         let _loc2_ = NaN;
         let _loc3_ = null;
         this.gr.clear();
         this.gr.lineStyle(1,8421504,1);
         this.gr.moveTo(0,this.yOrigin);
         this.gr.lineTo(this.width,this.yOrigin);
         this.gr.moveTo(this.xOrigin,0);
         this.gr.lineTo(this.xOrigin,2 * this.yOrigin);
         this.gr.moveTo(0,0);
         _loc1_ = Math.atan2(-this.yposi,this.xposi);
         if(Math.abs(this.xposi) >= 1000)
         {
            _loc1_ = Math.atan2(-this.yposi,-(10 - this.xOrigin));
            if(this.xposi > 0)
            {
               this.wf.SetParallelWave(10 - this.xOrigin,this.yposi,_loc1_,150);
            }
            else
            {
               _loc1_ = -_loc1_;
               this.wf.SetParallelWave(10 - this.xOrigin,-this.yposi,_loc1_,150);
            }
         }
         else if(this.xposi > 0)
         {
            if(this.xposi < this.xOrigin - 10)
            {
               this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,0.7,5);
            }
            else
            {
               this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,140 / this.xposi,this.xposi - this.xOrigin + 10);
            }
         }
         else if(this.xposi > -200)
         {
            this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,-0.5,this.xOrigin - 10 - this.xposi);
         }
         else
         {
            this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,100 / this.xposi,this.xOrigin - 10 - this.xposi);
         }
         _loc2_ = Math.floor(this.numOfPoint / 2);
         this.wfAux.ray[0].p.movePt(this.wf.ray[_loc2_ - 1].p);
         this.wfAux.ray[1].p.movePt(this.wf.ray[_loc2_].p);
         this.wfAux.ray[2].p.movePt(this.wf.ray[_loc2_ + 1].p);
         this.wfAux.SetInside();
         this.wf.ShowRayStatus(25,new LineStyle(1,16711935,1),10);
         if(Math.abs(this.xposi) >= 1000)
         {
            _loc3_ = "무한대";
         }
         else
         {
            _loc3_ = "(" + this.xposi.toString() + ", " + this.yposi.toString() + ")";
         }
         _loc3_ = "물체위치 " + _loc3_;
         this.objTxt.text = _loc3_;
         if(Math.abs(this.xposi) >= 1000)
         {
            _loc3_ = "무한대";
         }
         else
         {
            _loc3_ = "(" + this.xposi.toString() + ", " + this.yposi.toString() + ")";
         }
         if(this.xposi >= 0)
         {
            _loc3_ = "실물체 " + _loc3_;
         }
         else
         {
            _loc3_ = "허물체 " + _loc3_;
         }
         this.obj2Txt.text = _loc3_;
      }
__setProp_resetBtn__1(){
         try
         {
            this.resetBtn["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.resetBtn.backOffColor = 21947;
         this.resetBtn.backOnColor = 22015;
         this.resetBtn.backOverColor = 13369548;
         this.resetBtn.enabled = true;
         this.resetBtn.fontBold = true;
         this.resetBtn.fontColor = 14548957;
         this.resetBtn.fontEmbed = false;
         this.resetBtn.fontName = "_sans";
         this.resetBtn.fontSize = 12;
         this.resetBtn.boxHeight = 20;
         this.resetBtn.lineColor = 8421504;
         this.resetBtn.lineThickness = 1;
         this.resetBtn.isON = false;
         this.resetBtn.skin = 0;
         this.resetBtn.textOFF = "리셋";
         this.resetBtn.textON = "정지";
         this.resetBtn.isToggle = false;
         this.resetBtn.visible = true;
         this.resetBtn.boxWidth = 70;
         try
         {
            this.resetBtn["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
frame1(){
         this.xOrigin = 350;
         this.yOrigin = 155;
         this.numOfPoint = 35;
         this.wavefrontStep0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.canvas.mask = this.mk;
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.crossGraphics = new Sprite();
         this.gg = this.crossGraphics.graphics;
         this.addChild(this.crossGraphics);
         this.wf = this.pt.wf;
         this.wfAux = this.pt.wfAux;
         this.indexField = this.pt.indexField;
         this.Init();
         this.indexReset();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.nSlider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.n0Slider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.opSlider.addEventListener(SliderEvent.CHANGE,this.opSliderEventHandler);
         this.R1Slider.addEventListener(SliderEvent.CHANGE,this.RSliderEventHandler);
         this.R2Slider.addEventListener(SliderEvent.CHANGE,this.RSliderEventHandler);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.isDrag = false;
         this.marker.addEventListener(MouseEvent.MOUSE_DOWN,this.startDragging);
         this.marker.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_DOWN,this.reportClick);
      }
__setProp_nSlider__1(){
         try
         {
            this.nSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.nSlider.arrowColor = 102;
         this.nSlider.enabled = true;
         this.nSlider.fontBold = true;
         this.nSlider.fontColor = 8421504;
         this.nSlider.fontEmbed = false;
         this.nSlider.fontName = "_sans";
         this.nSlider.fontSize = 12;
         this.nSlider.boxHeight = 13;
         this.nSlider.incrementOrDigit = 0.02;
         this.nSlider.isIncrement = true;
         this.nSlider.limitLower = 1;
         this.nSlider.limitUpper = 3;
         this.nSlider.lineColor = 8421504;
         this.nSlider.lineThickness = 1;
         this.nSlider.skin = 0;
         this.nSlider.text = "렌즈 굴절률";
         this.nSlider.value = 2;
         this.nSlider.visible = true;
         this.nSlider.boxWidth = 55;
         try
         {
            this.nSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_showRayChk__1(){
         try
         {
            this.showRayChk["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.showRayChk.checkColor = 16711680;
         this.showRayChk.checkStyle = 1;
         this.showRayChk.checkThickness = 2;
         this.showRayChk.isChecked = false;
         this.showRayChk.enabled = true;
         this.showRayChk.fontBold = true;
         this.showRayChk.fontColor = 8421504;
         this.showRayChk.fontEmbed = false;
         this.showRayChk.fontName = "_sans";
         this.showRayChk.fontOnColor = 13369548;
         this.showRayChk.fontSize = 12;
         this.showRayChk.boxHeight = 12;
         this.showRayChk.lineColor = 8421504;
         this.showRayChk.lineThickness = 2;
         this.showRayChk.text = "광선 보기";
         this.showRayChk.visible = true;
         this.showRayChk.boxWidth = 60;
         try
         {
            this.showRayChk["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
opSliderEventHandler(param1){
         this.xposi = -this.opSlider.value;
         this.stage.addChild(this.marker);
         this.marker.x = this.xOrigin - this.xposi;
         this.aniReset();
      }
CheckBoxEventHandler(param1){
         if(param1.target == this.showRayChk)
         {
            if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
            {
               this.showFrontChk.isChecked = true;
               this.wf.isShowFront = this.showFrontChk.isChecked;
            }
            this.wf.isShowRay = this.showRayChk.isChecked;
         }
         else if(param1.target == this.showFrontChk)
         {
            if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
            {
               this.showRayChk.isChecked = true;
               this.wf.isShowRay = this.showRayChk.isChecked;
            }
            this.wf.isShowFront = this.showFrontChk.isChecked;
         }
      }
__setProp_opSlider__1(){
         try
         {
            this.opSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.opSlider.arrowColor = 102;
         this.opSlider.centerSquareOffColor = 21947;
         this.opSlider.centerSquareOnColor = 13369548;
         this.opSlider.enabled = true;
         this.opSlider.fontBold = true;
         this.opSlider.fontColor = 8421504;
         this.opSlider.fontEmbed = false;
         this.opSlider.fontColorLimit = 8421504;
         this.opSlider.fontName = "_sans";
         this.opSlider.fontNumName = "_sans";
         this.opSlider.fontColorSelected = 8421504;
         this.opSlider.fontSize = 12;
         this.opSlider.boxHeight = 13;
         this.opSlider.incrementOrDigit = 0.1;
         this.opSlider.isIncrement = true;
         this.opSlider.limitLower = -1000;
         this.opSlider.limitUpper = 1000;
         this.opSlider.lineColor = 8421504;
         this.opSlider.lineThickness = 1;
         this.opSlider.isShowValue = false;
         this.opSlider.skin = 0;
         this.opSlider.text = "물체 수평위치";
         this.opSlider.value = -100;
         this.opSlider.visible = true;
         this.opSlider.boxWidth = 150;
         try
         {
            this.opSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
reportClick(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         _loc2_ = param1.stageX;
         _loc3_ = param1.stageY;
         if(this.isDrag || _loc3_ > this.mk.height || Boolean(isNaN(_loc3_)))
         {
            return;
         }
         this.gg.clear();
         this.gg.lineStyle(1,0,1,false,LineScaleMode.NONE);
         this.gg.moveTo(_loc2_,_loc3_ - 10);
         this.gg.lineTo(_loc2_,_loc3_ + 10);
         this.gg.moveTo(_loc2_ - 7,_loc3_);
         this.gg.lineTo(_loc2_ + 7,_loc3_);
         this.coordTxt.text = "(" + Math.round((_loc2_ - this.xOrigin) * 10) / 10 + ", " + Math.round((this.yOrigin - _loc3_) * 10) / 10 + ")";
      }
RSliderEventHandler(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         _loc2_ = this.R1Slider.value;
         if(_loc2_ == 0)
         {
            _loc2_ = 1;
         }
         _loc3_ = Math.round(10000 / _loc2_);
         this.t1.R1 = _loc3_;
         _loc2_ = this.R2Slider.value;
         if(_loc2_ == 0)
         {
            _loc2_ = 1;
         }
         _loc3_ = Math.round(10000 / _loc2_);
         this.t1.R2 = _loc3_;
         this.t1.thickness = 100;
         this.t1.makeThinner();
         this.indexReset();
      }
aniReset(){
         this.imageTxt.text = "";
         this.pt.stopAni();
         this.startBtn.isON = false;
         this.pt.clearWaveFront();
         this.InitWave();
         this.startBtn.visible = true;
      }
stopAniEventHandler(param1){
         this.imageTxt.text = this.pt.statusExplanation;
         this.startBtn.isON = false;
         this.startBtn.visible = false;
      }
__setProp_showFrontChk__1(){
         try
         {
            this.showFrontChk["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.showFrontChk.checkColor = 16711680;
         this.showFrontChk.checkStyle = 1;
         this.showFrontChk.checkThickness = 2;
         this.showFrontChk.isChecked = false;
         this.showFrontChk.enabled = true;
         this.showFrontChk.fontBold = true;
         this.showFrontChk.fontColor = 8421504;
         this.showFrontChk.fontEmbed = false;
         this.showFrontChk.fontName = "_sans";
         this.showFrontChk.fontOnColor = 13369548;
         this.showFrontChk.fontSize = 12;
         this.showFrontChk.boxHeight = 12;
         this.showFrontChk.lineColor = 8421504;
         this.showFrontChk.lineThickness = 2;
         this.showFrontChk.text = "파면 보기";
         this.showFrontChk.visible = true;
         this.showFrontChk.boxWidth = 60;
         try
         {
            this.showFrontChk["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
InitInstrument(){
         this.t1 = new ThickLens(2,200,-200,100,300);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.t1.makeThinner();
         this.indexField.AddInstrument(this.t1);
         this.indexField.Draw();
      }
Init(){
         this.setWhiteBG(true);
         this.InitCtrl();
         this.InitInstrument();
      }
__setProp_R2Slider__1(){
         try
         {
            this.R2Slider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.R2Slider.arrowColor = 102;
         this.R2Slider.centerSquareOffColor = 21947;
         this.R2Slider.centerSquareOnColor = 13369548;
         this.R2Slider.enabled = true;
         this.R2Slider.fontBold = true;
         this.R2Slider.fontColor = 8421504;
         this.R2Slider.fontEmbed = false;
         this.R2Slider.fontColorLimit = 8421504;
         this.R2Slider.fontName = "_sans";
         this.R2Slider.fontNumName = "_sans";
         this.R2Slider.fontColorSelected = 8421504;
         this.R2Slider.fontSize = 12;
         this.R2Slider.boxHeight = 13;
         this.R2Slider.incrementOrDigit = 1;
         this.R2Slider.isIncrement = true;
         this.R2Slider.limitLower = -200;
         this.R2Slider.limitUpper = 200;
         this.R2Slider.lineColor = 8421504;
         this.R2Slider.lineThickness = 1;
         this.R2Slider.isShowValue = false;
         this.R2Slider.skin = 0;
         this.R2Slider.text = "";
         this.R2Slider.value = -50;
         this.R2Slider.visible = true;
         this.R2Slider.boxWidth = 150;
         try
         {
            this.R2Slider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
stopDragging(param1){
         this.isDrag = false;
         this.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,26112,1);
            this.wf.huyLineStyle = new LineStyle(1,170,1,false,LineScaleMode.NONE);
            this.wfAux.defaultRayLineStyle = new LineStyle(2,16711935,1,false,LineScaleMode.NONE);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16720418,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,47872,1);
            this.wf.huyLineStyle = new LineStyle(1,255,1,false,LineScaleMode.NONE);
            this.wfAux.defaultRayLineStyle = new LineStyle(2,11141290,1,false,LineScaleMode.NONE);
            this.opSlider.setCustomColor(2);
            RSlider.setCustomColor(2);
            this.n0Slider.setCustomColor(2);
            this.nSlider.setCustomColor(2);
         }
      }
indexReset(){
         let _loc1_ = null;
         let _loc2_ = null;
         _loc1_ = Math.abs(this.t1.R1) >= ThickLens.flatCriterior ? "무한대" : this.t1.R1.toString();
         _loc2_ = Math.abs(this.t1.R2) >= ThickLens.flatCriterior ? "무한대" : this.t1.R2.toString();
         this.R1Txt.text = _loc1_;
         this.R2Txt.text = _loc2_;
         this.indexField.Draw();
         this.aniReset();
      }
dragObject(param1){
         this.marker.x = param1.stageX - this.offsetX;
         this.marker.y = param1.stageY - this.offsetY;
         this.xposi = this.xOrigin - this.marker.x;
         this.yposi = this.yOrigin - this.marker.y;
         this.xposi = Math.round(this.xposi * 10) / 10;
         this.yposi = Math.round(this.yposi * 10) / 10;
         if(this.yposi > 150)
         {
            this.yposi = 150;
            this.marker.y = this.yOrigin - this.yposi;
         }
         else if(this.yposi < -150)
         {
            this.yposi = -150;
            this.marker.y = this.yOrigin - this.yposi;
         }
         this.opSlider.value = -this.xposi;
         this.aniReset();
         param1.updateAfterEvent();
      }
InitCtrl(){
         if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
         {
            this.showRayChk.isChecked = true;
            this.wf.isShowRay = this.showRayChk.isChecked;
         }
         this.wf.isShowRay = this.showRayChk.isChecked;
         this.wf.isShowFront = this.showFrontChk.isChecked;
         this.xposi = this.xOrigin - this.marker.x;
         this.yposi = this.yOrigin - this.marker.y;
         this.xposi = Math.round(this.xposi * 10) / 10;
         this.yposi = Math.round(this.yposi * 10) / 10;
         this.opSlider.value = -this.xposi;
      }
ButtonEventHandler(param1){
         if(param1.target == this.startBtn)
         {
            if(this.startBtn.isON)
            {
               this.pt.startAni();
            }
            else
            {
               this.pt.stopAni();
            }
         }
         else if(param1.target == this.resetBtn)
         {
            this.aniReset();
         }
      }
nSliderEventHandler(param1){
         if(param1.target == this.nSlider)
         {
            this.t1.rIndex = this.nSlider.value / this.n0Slider.value;
         }
         else if(param1.target == this.n0Slider)
         {
            this.t1.rIndex = this.nSlider.value / this.n0Slider.value;
            this.pt.wavefrontStep = this.wavefrontStep0 / this.n0Slider.value;
         }
         this.indexReset();
      }
startDragging(param1){
         this.isDrag = true;
         this.offsetX = param1.stageX - this.marker.x;
         this.offsetY = param1.stageY - this.marker.y;
         this.stage.addChild(this.marker);
         this.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
