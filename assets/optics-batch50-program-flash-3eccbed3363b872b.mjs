import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest } from './optics-batch50-adapter.mjs';
import {createKernel} from './optics-batch50-kernel-8bfa72046f6cac7a.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 719.9909210205078, "height": 310.00634765625}, "startBtn": {"x": 648.1, "y": 335.4, "width": 70.00534057617188, "height": 20}, "showRayChk": {"x": 3.4, "y": 321.3, "width": 73.00556945800781, "height": 13}, "showFrontChk": {"x": 3.4, "y": 339.3, "width": 73.00556945800781, "height": 13}, "resetBtn": {"x": 648.4, "y": 312.3, "width": 70.00534057617188, "height": 20}, "R1Slider": {"x": 395.4, "y": 314.3, "width": 150.01144409179688, "height": 13}, "thicknessSlider": {"x": 232.35, "y": 328.8, "width": 150.01144409179688, "height": 13}, "n0Slider": {"x": 85.9, "y": 321.3, "width": 55.00419616699219, "height": 12}, "nSlider": {"x": 85.9, "y": 337.3, "width": 55.00419616699219, "height": 12}, "R1Txt": {"x": 579.5, "y": 313.8, "width": null, "height": null}, "imageTxt": {"x": 611.15, "y": 0.3, "width": null, "height": null}, "R2Slider": {"x": 395.4, "y": 331.3, "width": 150.01144409179688, "height": 13}, "R2Txt": {"x": 579.5, "y": 329.8, "width": null, "height": null}, "principalTxt": {"x": 397.8, "y": 0.3, "width": null, "height": null}, "modeBtn": {"x": 2.4, "y": 2, "width": 70, "height": 20}, "coordTxt": {"x": 586.1, "y": 14, "width": null, "height": null}}, "id": "flash-3eccbed3363b872b", "source": "simThicklens1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/thicklens/simThicklens1.swf", "title": "두꺼운 렌즈의 굴절에 대한 모의실험", "lesson": "5-2-8-2", "width": 720, "height": 360, "animated": true, "controls": [{"clip": "thicknessSlider", "key": "thickness", "label": "렌즈의 두께", "min": 50.0, "max": 200.0, "step": 0.1, "value": 100.0}, {"clip": "R1Slider", "key": "R1", "label": "R1", "min": -200.0, "max": 200.0, "step": 1.0, "value": 50.0}, {"clip": "n0Slider", "key": "n0", "label": "배경 굴절률", "min": 1.0, "max": 3.0, "step": 0.02, "value": 1.0}, {"clip": "nSlider", "key": "n", "label": "렌즈 굴절률", "min": 1.0, "max": 3.0, "step": 0.02, "value": 1.5}, {"clip": "R2Slider", "key": "R2", "label": "R2", "min": -200.0, "max": 200.0, "step": 1.0, "value": -25.0}], "checks": [{"clip": "showRayChk", "label": "광선 보기", "value": false}, {"clip": "showFrontChk", "label": "파면 보기", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}, {"clip": "modeBtn", "label": "제2주요면", "alternate": "제1주요면", "toggle": true}, {"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "drag": false, "sourceSha256": "af44126f901155f95345105968456ba9b60f229b6f45a8b27e5521acdf74f022", "kernelSha256": "8bfa72046f6cac7ae42027c28f00ddc51ac98fb6742a87d01f93c977cf8dd220", "kernelModule": "optics-batch50-kernel-8bfa72046f6cac7a.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/ThickLens.as", "sha256": "4a1cac58e49cb14efa2c3812440ecda60ce822a9d0cbff066e5a242f4dcf65c4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "InitWave", "frame1", "setBySlider", "CheckBoxEventHandler", "reportClick", "RSliderEventHandler", "aniReset", "stopAniEventHandler", "InitInstrument", "Init", "thicknessSliderEventHandler", "setWhiteBG", "indexReset", "InitCtrl", "ButtonEventHandler", "nSliderEventHandler"], "programModule": "optics-batch50-program-flash-3eccbed3363b872b.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
R2Txt = new Sprite();
t1 = new Sprite();
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
simMode = 0;
R2Slider = new Sprite();
coordTxt = new Sprite();
indexField = new Sprite();
canvas = new Sprite();
principalTxt = new Sprite();
thicknessSlider = new Sprite();
showRayChk = new Sprite();
wfAux = new Sprite();
numOfPoint = 0;
mk = new Sprite();
modeBtn = new Sprite();
xOrigin = 0;
R1Txt = new Sprite();
showFrontChk = new Sprite();
R1Slider = new Sprite();
wavefrontStep0 = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_modeBtn__1();
         this.__setProp_showRayChk__1();
         this.__setProp_thicknessSlider__1();
         this.__setProp_n0Slider__1();
         this.__setProp_R2Slider__1();
         this.__setProp_nSlider__1();
         this.__setProp_R1Slider__1();
         this.__setProp_resetBtn__1();
         this.__setProp_showFrontChk__1();
      }
__setProp_thicknessSlider__1(){
         try
         {
            this.thicknessSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.thicknessSlider.arrowColor = 102;
         this.thicknessSlider.centerSquareOffColor = 21947;
         this.thicknessSlider.centerSquareOnColor = 13369548;
         this.thicknessSlider.enabled = true;
         this.thicknessSlider.fontBold = true;
         this.thicknessSlider.fontColor = 8421504;
         this.thicknessSlider.fontEmbed = false;
         this.thicknessSlider.fontColorLimit = 8421504;
         this.thicknessSlider.fontName = "_sans";
         this.thicknessSlider.fontNumName = "_sans";
         this.thicknessSlider.fontColorSelected = 8421504;
         this.thicknessSlider.fontSize = 12;
         this.thicknessSlider.boxHeight = 13;
         this.thicknessSlider.incrementOrDigit = 0.1;
         this.thicknessSlider.isIncrement = true;
         this.thicknessSlider.limitLower = 50;
         this.thicknessSlider.limitUpper = 200;
         this.thicknessSlider.lineColor = 8421504;
         this.thicknessSlider.lineThickness = 1;
         this.thicknessSlider.isShowValue = true;
         this.thicknessSlider.skin = 0;
         this.thicknessSlider.text = "렌즈의 두께";
         this.thicknessSlider.value = 100;
         this.thicknessSlider.visible = true;
         this.thicknessSlider.boxWidth = 150;
         try
         {
            this.thicknessSlider["componentInspectorSetting"] = false;
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
InitWave(){
         let _loc1_ = NaN;
         let _loc2_ = NaN;
         this.gr.clear();
         this.gr.lineStyle(1,8421504,1);
         this.gr.moveTo(0,this.yOrigin);
         this.gr.lineTo(this.width,this.yOrigin);
         this.gr.moveTo(this.xOrigin,0);
         this.gr.lineTo(this.xOrigin,2 * this.yOrigin);
         this.gr.moveTo(0,0);
         if(this.simMode == 1)
         {
            _loc2_ = Number(this.t1.objectFocalPoint()[0]);
            if(_loc2_ < 0)
            {
               if(-_loc2_ < this.xOrigin - 10)
               {
                  this.wf.SetCircularWave(_loc2_,0,0,0.9,5);
               }
               else
               {
                  this.wf.SetCircularWave(_loc2_,0,0,170 / -_loc2_,-_loc2_ - this.xOrigin + 10);
               }
            }
            else if(_loc2_ < 200)
            {
               this.wf.SetCircularWave(_loc2_,0,Math.PI,-0.7,this.xOrigin - 10 + _loc2_);
            }
            else
            {
               this.wf.SetCircularWave(_loc2_,0,Math.PI,-120 / _loc2_,this.xOrigin - 10 + _loc2_);
            }
         }
         else if(this.simMode == 2)
         {
            this.wf.SetParallelWave(-this.xOrigin + 10,0,0,150);
         }
         _loc1_ = Math.floor(this.numOfPoint / 2);
         this.wfAux.ray[0].p.movePt(this.wf.ray[_loc1_ - 1].p);
         this.wfAux.ray[1].p.movePt(this.wf.ray[_loc1_].p);
         this.wfAux.ray[2].p.movePt(this.wf.ray[_loc1_ + 1].p);
         this.wfAux.SetInside();
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),5);
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
         this.simMode = 2;
         this.wfAux = this.pt.wfAux;
         this.indexField = this.pt.indexField;
         this.Init();
         this.indexReset();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.modeBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.nSlider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.n0Slider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.R1Slider.addEventListener(SliderEvent.CHANGE,this.RSliderEventHandler);
         this.R2Slider.addEventListener(SliderEvent.CHANGE,this.RSliderEventHandler);
         this.thicknessSlider.addEventListener(SliderEvent.CHANGE,this.thicknessSliderEventHandler);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
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
         this.nSlider.value = 1.5;
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
setBySlider(){
         let _loc1_ = NaN;
         let _loc2_ = NaN;
         this.t1.thickness = this.thicknessSlider.value;
         _loc1_ = this.R1Slider.value;
         if(_loc1_ == 0)
         {
            _loc1_ = 1;
         }
         _loc2_ = Math.round(10000 / _loc1_);
         this.t1.R1 = _loc2_;
         _loc1_ = this.R2Slider.value;
         if(_loc1_ == 0)
         {
            _loc1_ = 1;
         }
         _loc2_ = Math.round(10000 / _loc1_);
         this.t1.R2 = _loc2_;
         this.indexReset();
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
reportClick(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         _loc2_ = param1.stageX;
         _loc3_ = param1.stageY;
         if(_loc3_ > 310 || Boolean(isNaN(_loc3_)))
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
         this.setBySlider();
      }
aniReset(){
         this.imageTxt.text = "";
         this.principalTxt.text = "";
         this.pt.stopAni();
         this.startBtn.isON = false;
         this.pt.clearWaveFront();
         this.InitWave();
         this.startBtn.visible = true;
      }
stopAniEventHandler(param1){
         let _loc2_ = null;
         _loc2_ = this.wf.FindCrossSectionWithBackup(true);
         if(_loc2_ != null)
         {
            if(this.simMode == 1)
            {
               this.principalTxt.text = "제 1주요면 x 좌표: " + Math.round(_loc2_.x * 10) / 10;
            }
            else if(this.simMode == 2)
            {
               this.principalTxt.text = "제 2주요면 x 좌표: " + Math.round(_loc2_.x * 10) / 10;
            }
         }
         else
         {
            this.principalTxt.text = "";
         }
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
         this.t1 = new ThickLens(1.5,200,-400,100,300);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.t1.makeThinner();
         this.indexField.AddInstrument(this.t1);
         this.indexField.Draw();
      }
Init(){
         this.setWhiteBG(true);
         this.InitInstrument();
         this.InitCtrl();
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
         this.R2Slider.value = -25;
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
thicknessSliderEventHandler(param1){
         this.setBySlider();
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,26112,1);
            this.wfAux.defaultRayLineStyle = new LineStyle(2,16711935,1,false,LineScaleMode.NONE);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16720418,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,47872,1);
            this.wfAux.defaultRayLineStyle = new LineStyle(2,11141290,1,false,LineScaleMode.NONE);
            this.thicknessSlider.setCustomColor(2);
            this.R1Slider.setCustomColor(2);
            this.R2Slider.setCustomColor(2);
            this.n0Slider.setCustomColor(2);
            this.nSlider.setCustomColor(2);
         }
      }
__setProp_modeBtn__1(){
         try
         {
            this.modeBtn["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.modeBtn.backOffColor = 3355443;
         this.modeBtn.backOnColor = 3355443;
         this.modeBtn.backOverColor = 13369548;
         this.modeBtn.enabled = true;
         this.modeBtn.fontBold = true;
         this.modeBtn.fontColor = 14548957;
         this.modeBtn.fontEmbed = false;
         this.modeBtn.fontName = "_sans";
         this.modeBtn.fontSize = 12;
         this.modeBtn.boxHeight = 20;
         this.modeBtn.lineColor = 8421504;
         this.modeBtn.lineThickness = 1;
         this.modeBtn.isON = false;
         this.modeBtn.skin = 0;
         this.modeBtn.textOFF = "제2주요면";
         this.modeBtn.textON = "제1주요면";
         this.modeBtn.isToggle = true;
         this.modeBtn.visible = true;
         this.modeBtn.boxWidth = 80;
         try
         {
            this.modeBtn["componentInspectorSetting"] = false;
         }
         catch(e)
         {
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
InitCtrl(){
         if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
         {
            this.showRayChk.isChecked = true;
            this.wf.isShowRay = this.showRayChk.isChecked;
         }
         this.wf.isShowRay = this.showRayChk.isChecked;
         this.wf.isShowFront = this.showFrontChk.isChecked;
         this.setBySlider();
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
         else if(param1.target == this.modeBtn)
         {
            if(this.modeBtn.isON)
            {
               this.simMode = 1;
            }
            else
            {
               this.simMode = 2;
            }
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
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
