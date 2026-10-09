import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest } from './optics-batch50-adapter.mjs';
import {createKernel} from './optics-batch50-kernel-8bfa72046f6cac7a.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 719.9909210205078, "height": 320.00518798828125}, "dSlider": {"x": 265.35, "y": 379, "width": 150, "height": 13}, "startBtn": {"x": 645.1, "y": 387.4, "width": 70.00534057617188, "height": 20}, "showRayChk": {"x": 3.4, "y": 331.3, "width": 73.00556945800781, "height": 13}, "showFrontChk": {"x": 3.4, "y": 349.3, "width": 73.00556945800781, "height": 13}, "resetBtn": {"x": 645.4, "y": 364.3, "width": 70.00534057617188, "height": 20}, "R1Slider": {"x": 439.4, "y": 335.3, "width": 150.01144409179688, "height": 13}, "opSlider": {"x": 265.35, "y": 334.8, "width": 150.01144409179688, "height": 13}, "n0Slider": {"x": 108.9, "y": 331.3, "width": 55.00419616699219, "height": 12}, "n1Slider": {"x": 108.9, "y": 353.3, "width": 55.00419616699219, "height": 12}, "marker": {"x": 60, "y": 160, "width": 9, "height": 9.0186767578125}, "curv1Txt": {"x": 444.05, "y": 320.2, "width": null, "height": null}, "objTxt": {"x": 270.35, "y": 320.2, "width": null, "height": null}, "imageTxt": {"x": 509.8, "y": 0, "width": null, "height": null}, "obj2Txt": {"x": 5.4, "y": 0, "width": null, "height": null}, "R2Slider": {"x": 439.4, "y": 379.4, "width": 150.01144409179688, "height": 13}, "curv2Txt": {"x": 444.05, "y": 366.3, "width": null, "height": null}, "n2Slider": {"x": 108.9, "y": 369.3, "width": 55.00419616699219, "height": 12}, "coordTxt": {"x": 586.3, "y": 15.7, "width": null, "height": null}}, "id": "flash-de747b108f3ff0a5", "source": "sim2lens1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/thicklens/sim2lens1.swf", "title": "렌즈의 조합에 대한 모의실험", "lesson": "5-2-8-7", "width": 720, "height": 410, "animated": true, "controls": [{"clip": "n0Slider", "key": "n0", "label": "배경 굴절률", "min": 1.0, "max": 3.0, "step": 0.02, "value": 1.0}, {"clip": "R1Slider", "key": "R1", "label": "렌즈1 곡률반경", "min": -200.0, "max": 200.0, "step": 1.0, "value": 50.0}, {"clip": "n2Slider", "key": "n2", "label": "렌즈2 굴절률", "min": 1.0, "max": 3.0, "step": 0.02, "value": 1.5}, {"clip": "opSlider", "key": "op", "label": "물체 수평위치", "min": -1000.0, "max": 1000.0, "step": 0.1, "value": -100.0}, {"clip": "dSlider", "key": "d", "label": "두 렌즈사이의 거리", "min": 20.0, "max": 300.0, "step": 1.0, "value": 200.0}, {"clip": "n1Slider", "key": "n1", "label": "렌즈1 굴절률", "min": 1.0, "max": 3.0, "step": 0.02, "value": 1.5}, {"clip": "R2Slider", "key": "R2", "label": "렌즈2 곡률반경", "min": -200.0, "max": 200.0, "step": 1.0, "value": 50.0}], "checks": [{"clip": "showRayChk", "label": "광선 보기", "value": false}, {"clip": "showFrontChk", "label": "파면 보기", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}, {"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "drag": true, "sourceSha256": "8400b03d9f8d42b655fb55a72ca1702bfaf03621035a5b9d89f0a980e3ef6665", "kernelSha256": "8bfa72046f6cac7ae42027c28f00ddc51ac98fb6742a87d01f93c977cf8dd220", "kernelModule": "optics-batch50-kernel-8bfa72046f6cac7a.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/ThickLens.as", "sha256": "4a1cac58e49cb14efa2c3812440ecda60ce822a9d0cbff066e5a242f4dcf65c4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "InitWave", "frame1", "dSliderEventHandler", "opSliderEventHandler", "CheckBoxEventHandler", "reportClick", "aniReset", "stopAniEventHandler", "R2SliderEventHandler", "InitInstrument", "Init", "R1SliderEventHandler", "stopDragging", "setWhiteBG", "indexReset", "dragObject", "InitCtrl", "ButtonEventHandler", "startDragging", "nSliderEventHandler"], "programModule": "optics-batch50-program-flash-de747b108f3ff0a5.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
curv2Txt = new Sprite();
opSlider = new Sprite();
offsetX = 0;
offsetY = 0;
t2 = new Sprite();
n1Slider = new Sprite();
t1 = new Sprite();
marker = new Sprite();
obj2Txt = new Sprite();
dSlider = new Sprite();
resetBtn = new Sprite();
yposi = 0;
backGraphics = new Sprite();
startBtn = new Sprite();
wf = new Sprite();
gg = new Sprite();
gr = new Sprite();
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
n2Slider = new Sprite();
numOfPoint = 0;
mk = new Sprite();
isDrag = false;
curv1Txt = new Sprite();
xOrigin = 0;
showFrontChk = new Sprite();
R1Slider = new Sprite();
wavefrontStep0 = 0;
objTxt = new Sprite();
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_showRayChk__1();
         this.__setProp_n2Slider__1();
         this.__setProp_opSlider__1();
         this.__setProp_n0Slider__1();
         this.__setProp_resetBtn__1();
         this.__setProp_R1Slider__1();
         this.__setProp_showFrontChk__1();
         this.__setProp_R2Slider__1();
         this.__setProp_n1Slider__1();
         this.__setProp_dSlider__1();
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
         this.R1Slider.text = "렌즈1 곡률반경";
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
         this.gr.lineTo(720,this.yOrigin);
         this.gr.moveTo(this.xOrigin,0);
         this.gr.lineTo(this.xOrigin,2 * this.yOrigin);
         this.gr.moveTo(this.xOrigin + this.t2.p.x,0);
         this.gr.lineTo(this.xOrigin + this.t2.p.x,2 * this.yOrigin);
         this.gr.moveTo(0,0);
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
         this.xOrigin = 250;
         this.yOrigin = 160;
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
         this.wf.stepDist = 1;
         this.wfAux = this.pt.wfAux;
         this.indexField = this.pt.indexField;
         this.Init();
         this.indexReset();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.n1Slider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.n2Slider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.n0Slider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.opSlider.addEventListener(SliderEvent.CHANGE,this.opSliderEventHandler);
         this.dSlider.addEventListener(SliderEvent.CHANGE,this.dSliderEventHandler);
         this.R1Slider.addEventListener(SliderEvent.CHANGE,this.R1SliderEventHandler);
         this.R2Slider.addEventListener(SliderEvent.CHANGE,this.R2SliderEventHandler);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.isDrag = false;
         this.marker.addEventListener(MouseEvent.MOUSE_DOWN,this.startDragging);
         this.marker.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_DOWN,this.reportClick);
      }
dSliderEventHandler(param1){
         this.t2.p.x = this.dSlider.value;
         this.indexReset();
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
__setProp_n2Slider__1(){
         try
         {
            this.n2Slider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.n2Slider.arrowColor = 102;
         this.n2Slider.enabled = true;
         this.n2Slider.fontBold = true;
         this.n2Slider.fontColor = 8421504;
         this.n2Slider.fontEmbed = false;
         this.n2Slider.fontName = "_sans";
         this.n2Slider.fontSize = 12;
         this.n2Slider.boxHeight = 13;
         this.n2Slider.incrementOrDigit = 0.02;
         this.n2Slider.isIncrement = true;
         this.n2Slider.limitLower = 1;
         this.n2Slider.limitUpper = 3;
         this.n2Slider.lineColor = 8421504;
         this.n2Slider.lineThickness = 1;
         this.n2Slider.skin = 0;
         this.n2Slider.text = "렌즈2 굴절률";
         this.n2Slider.value = 1.5;
         this.n2Slider.visible = true;
         this.n2Slider.boxWidth = 55;
         try
         {
            this.n2Slider["componentInspectorSetting"] = false;
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
aniReset(){
         this.imageTxt.text = "";
         this.pt.stopAni();
         this.startBtn.isON = false;
         this.pt.clearWaveFront();
         this.InitWave();
         this.startBtn.visible = true;
      }
stopAniEventHandler(param1){
         if(this.pt.imagePosition.dir == 0)
         {
            this.imageTxt.text = "상의 좌표: " + this.pt.imagePosition.toString();
         }
         else if(this.pt.imagePosition.dir == 666)
         {
            this.imageTxt.text = "무한대 결상";
         }
         else
         {
            this.imageTxt.text = "결상위치 ?";
         }
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
R2SliderEventHandler(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         _loc2_ = this.R2Slider.value;
         if(_loc2_ == 0)
         {
            _loc2_ = 1;
         }
         _loc3_ = Math.round(10000 / _loc2_);
         this.t2.R1 = _loc3_;
         this.t2.R2 = -_loc3_;
         this.t2.thickness = 50;
         this.t2.makeThinner();
         this.indexReset();
      }
InitInstrument(){
         this.t1 = new ThickLens(1.5,200,-200,50,300);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.t1.makeThinner();
         this.t2 = new ThickLens(1.5,200,-200,50,300);
         this.t2.p.x = 200;
         this.t2.p.y = 0;
         this.t2.p.dir = 0;
         this.t2.makeThinner();
         this.indexField.AddInstrument(this.t1);
         this.indexField.AddInstrument(this.t2);
         this.indexField.Draw();
      }
Init(){
         this.setWhiteBG(true);
         this.InitCtrl();
         this.InitInstrument();
      }
__setProp_dSlider__1(){
         try
         {
            this.dSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.dSlider.arrowColor = 102;
         this.dSlider.centerSquareOffColor = 21947;
         this.dSlider.centerSquareOnColor = 13369548;
         this.dSlider.enabled = true;
         this.dSlider.fontBold = true;
         this.dSlider.fontColor = 8421504;
         this.dSlider.fontEmbed = false;
         this.dSlider.fontColorLimit = 8421504;
         this.dSlider.fontName = "_sans";
         this.dSlider.fontNumName = "_sans";
         this.dSlider.fontColorSelected = 8421504;
         this.dSlider.fontSize = 12;
         this.dSlider.boxHeight = 13;
         this.dSlider.incrementOrDigit = 1;
         this.dSlider.isIncrement = true;
         this.dSlider.limitLower = 20;
         this.dSlider.limitUpper = 300;
         this.dSlider.lineColor = 8421504;
         this.dSlider.lineThickness = 1;
         this.dSlider.isShowValue = true;
         this.dSlider.skin = 0;
         this.dSlider.text = "두 렌즈사이의 거리";
         this.dSlider.value = 200;
         this.dSlider.visible = true;
         this.dSlider.boxWidth = 150;
         try
         {
            this.dSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
R1SliderEventHandler(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         _loc2_ = this.R1Slider.value;
         if(_loc2_ == 0)
         {
            _loc2_ = 1;
         }
         _loc3_ = Math.round(10000 / _loc2_);
         this.t1.R1 = _loc3_;
         this.t1.R2 = -_loc3_;
         this.t1.thickness = 50;
         this.t1.makeThinner();
         this.indexReset();
      }
__setProp_n1Slider__1(){
         try
         {
            this.n1Slider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.n1Slider.arrowColor = 102;
         this.n1Slider.enabled = true;
         this.n1Slider.fontBold = true;
         this.n1Slider.fontColor = 8421504;
         this.n1Slider.fontEmbed = false;
         this.n1Slider.fontName = "_sans";
         this.n1Slider.fontSize = 12;
         this.n1Slider.boxHeight = 13;
         this.n1Slider.incrementOrDigit = 0.02;
         this.n1Slider.isIncrement = true;
         this.n1Slider.limitLower = 1;
         this.n1Slider.limitUpper = 3;
         this.n1Slider.lineColor = 8421504;
         this.n1Slider.lineThickness = 1;
         this.n1Slider.skin = 0;
         this.n1Slider.text = "렌즈1 굴절률";
         this.n1Slider.value = 1.5;
         this.n1Slider.visible = true;
         this.n1Slider.boxWidth = 55;
         try
         {
            this.n1Slider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
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
         this.R2Slider.text = "렌즈2 곡률반경";
         this.R2Slider.value = 50;
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
            this.R1Slider.setCustomColor(2);
            this.R2Slider.setCustomColor(2);
            this.n0Slider.setCustomColor(2);
            this.n1Slider.setCustomColor(2);
            this.n2Slider.setCustomColor(2);
            this.dSlider.setCustomColor(2);
         }
      }
indexReset(){
         let _loc1_ = null;
         let _loc2_ = null;
         let _loc3_ = null;
         let _loc4_ = null;
         _loc1_ = Math.abs(this.t1.R1) >= ThickLens.flatCriterior ? "무한대" : this.t1.R1.toString();
         _loc2_ = Math.abs(this.t1.R2) >= ThickLens.flatCriterior ? "무한대" : this.t1.R2.toString();
         this.curv1Txt.text = "곡률반경 " + _loc1_ + ", " + _loc2_;
         _loc3_ = Math.abs(this.t2.R1) >= ThickLens.flatCriterior ? "무한대" : this.t2.R1.toString();
         _loc4_ = Math.abs(this.t2.R2) >= ThickLens.flatCriterior ? "무한대" : this.t2.R2.toString();
         this.curv2Txt.text = "곡률반경 " + _loc3_ + ", " + _loc4_;
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
         if(this.yposi > 100)
         {
            this.yposi = 100;
            this.marker.y = this.yOrigin - this.yposi;
         }
         else if(this.yposi < -100)
         {
            this.yposi = -100;
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
startDragging(param1){
         this.isDrag = true;
         this.offsetX = param1.stageX - this.marker.x;
         this.offsetY = param1.stageY - this.marker.y;
         this.stage.addChild(this.marker);
         this.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
      }
nSliderEventHandler(param1){
         if(param1.target == this.n1Slider)
         {
            this.t1.rIndex = this.n1Slider.value / this.n0Slider.value;
         }
         else if(param1.target == this.n2Slider)
         {
            this.t2.rIndex = this.n2Slider.value / this.n0Slider.value;
         }
         else if(param1.target == this.n0Slider)
         {
            this.t1.rIndex = this.n1Slider.value / this.n0Slider.value;
            this.t2.rIndex = this.n2Slider.value / this.n0Slider.value;
            this.pt.wavefrontStep = this.wavefrontStep0 / this.n0Slider.value;
         }
         this.indexReset();
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
