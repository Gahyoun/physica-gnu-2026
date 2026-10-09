import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-f402a795ba065de6.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 719.9909210205078, "height": 310.00634765625}, "startBtn": {"x": 648.1, "y": 335.4, "width": 70.00534057617188, "height": 20}, "showRayChk": {"x": 3.4, "y": 313.3, "width": 73.00556945800781, "height": 13}, "showFrontChk": {"x": 3.4, "y": 328.3, "width": 73.00556945800781, "height": 13}, "resetBtn": {"x": 648.4, "y": 312.3, "width": 70.00534057617188, "height": 20}, "apexSlider": {"x": 304.35, "y": 326.8, "width": 150.01144409179688, "height": 13}, "n0Slider": {"x": 105.9, "y": 321.3, "width": 55.00419616699219, "height": 12}, "nSlider": {"x": 105.9, "y": 337.3, "width": 55.00419616699219, "height": 12}, "imageTxt": {"x": 509.8, "y": 2, "width": null, "height": null}, "obj2Txt": {"x": 5.4, "y": 2, "width": null, "height": null}, "dirSlider": {"x": 467.4, "y": 326.8, "width": 150.01144409179688, "height": 13}, "auxChk": {"x": 3.35, "y": 343.3, "width": 73, "height": 13}}, "id": "flash-9252322b7f86ca63", "source": "simprism1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/prism/simprism1.swf", "title": "프리즘에 대한 모의실험", "lesson": "5-2-6-3", "width": 720, "height": 360, "animated": true, "controls": [{"clip": "n0Slider", "key": "n0", "label": "배경 굴절률", "min": 1.0, "max": 3.0, "step": 0.02, "value": 1.0}, {"clip": "nSlider", "key": "n", "label": "프리즘 굴절률", "min": 1.0, "max": 3.0, "step": 0.02, "value": 1.5}, {"clip": "dirSlider", "key": "dir", "label": "프리즘 방향 (도)", "min": -45.0, "max": 45.0, "step": 0.1, "value": 0.0}, {"clip": "apexSlider", "key": "apex", "label": "프리즘 꼭지각 (도)", "min": 0.5, "max": 90.0, "step": 0.5, "value": 60.0}], "checks": [{"clip": "showRayChk", "label": "광선 보기", "value": false}, {"clip": "showFrontChk", "label": "파면 보기", "value": false}, {"clip": "auxChk", "label": "보조선", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}, {"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "selects": [], "drag": false, "sourceSha256": "4a8dc8e9268900f0b2c7f15750835e6b61095e2aab04f33a96fb2251f37b6b11", "kernelSha256": "f402a795ba065de6eb409aec53db6d46d162ddcfd44c44e07747b2f1595bca86", "kernelModule": "optics-batch50b-kernel-f402a795ba065de6.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prism.as", "sha256": "b163d9c7694b374a2b30152a6c226590d807a2b7566f4f47f7f81af413f0d341"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "InitWave", "frame1", "CheckBoxEventHandler", "sliderEventHandler", "aniReset", "stopAniEventHandler", "Init", "InitInstrument", "setWhiteBG", "indexReset", "apexSliderEventHandler", "InitCtrl", "ButtonEventHandler", "nSliderEventHandler"], "programModule": "optics-batch50b-program-flash-9252322b7f86ca63.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prism,Prototype,RayTrace,Rindex,ScreenCoord,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
midPoint = 0;
t1 = new Sprite();
obj2Txt = new Sprite();
resetBtn = new Sprite();
yposi = 0;
backGraphics = new Sprite();
startBtn = new Sprite();
apexSlider = new Sprite();
wf = new Sprite();
gr = new Sprite();
nSlider = new Sprite();
yOrigin = 0;
n0Slider = new Sprite();
xposi = 0;
imageTxt = new Sprite();
auxChk = new Sprite();
indexField = new Sprite();
canvas = new Sprite();
showRayChk = new Sprite();
numOfPoint = 0;
mk = new Sprite();
xOrigin = 0;
dirSlider = new Sprite();
showFrontChk = new Sprite();
wavefrontStep0 = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_showRayChk__1();
         this.__setProp_auxChk__1();
         this.__setProp_n0Slider__1();
         this.__setProp_nSlider__1();
         this.__setProp_apexSlider__1();
         this.__setProp_resetBtn__1();
         this.__setProp_dirSlider__1();
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
InitWave(){
         let _loc1_ = NaN;
         this.gr.clear();
         this.gr.lineStyle(1,8421504,1,false,LineScaleMode.NONE);
         this.gr.moveTo(0,this.yOrigin);
         this.gr.lineTo(this.width,this.yOrigin);
         this.gr.moveTo(this.xOrigin,0);
         this.gr.lineTo(this.xOrigin,2 * this.yOrigin);
         this.gr.moveTo(0,0);
         this.wf.SetParallelWave(10 - this.xOrigin,1,0,150);
         this.wf.ray[this.midPoint].rayLineStyle = new LineStyle(2,16711935,1,false,LineScaleMode.NONE);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),5);
         _loc1_ = Math.round((this.apexSlider.value / 2 + this.dirSlider.value) * 100) / 100;
         this.obj2Txt.text = "입사각: " + _loc1_;
      }
frame1(){
         this.xOrigin = 350;
         this.yOrigin = 155;
         this.numOfPoint = 35;
         this.wavefrontStep0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt.aniMode = 1;
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.canvas.mask = this.mk;
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.wf = this.pt.wf;
         this.wf.stepDist = 0.5;
         this.midPoint = Math.floor(this.numOfPoint / 2);
         this.indexField = this.pt.indexField;
         this.Init();
         this.indexReset();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.nSlider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.n0Slider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.apexSlider.addEventListener(SliderEvent.CHANGE,this.apexSliderEventHandler);
         this.dirSlider.addEventListener(SliderEvent.CHANGE,this.sliderEventHandler);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
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
         this.nSlider.text = "프리즘 굴절률";
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
__setProp_dirSlider__1(){
         try
         {
            this.dirSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.dirSlider.arrowColor = 102;
         this.dirSlider.centerSquareOffColor = 21947;
         this.dirSlider.centerSquareOnColor = 13369548;
         this.dirSlider.enabled = true;
         this.dirSlider.fontBold = true;
         this.dirSlider.fontColor = 8421504;
         this.dirSlider.fontEmbed = false;
         this.dirSlider.fontColorLimit = 8421504;
         this.dirSlider.fontName = "_sans";
         this.dirSlider.fontNumName = "_sans";
         this.dirSlider.fontColorSelected = 8421504;
         this.dirSlider.fontSize = 12;
         this.dirSlider.boxHeight = 13;
         this.dirSlider.incrementOrDigit = 0.1;
         this.dirSlider.isIncrement = true;
         this.dirSlider.limitLower = -45;
         this.dirSlider.limitUpper = 45;
         this.dirSlider.lineColor = 8421504;
         this.dirSlider.lineThickness = 1;
         this.dirSlider.isShowValue = true;
         this.dirSlider.skin = 0;
         this.dirSlider.text = "프리즘 방향 (도)";
         this.dirSlider.value = 0;
         this.dirSlider.visible = true;
         this.dirSlider.boxWidth = 150;
         try
         {
            this.dirSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
sliderEventHandler(param1){
         this.t1.p.dir = -Math.PI * this.dirSlider.value / 180;
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
         let _loc2_ = NaN;
         if(this.auxChk.isChecked)
         {
            this.wf.FindCrossSectionWithBackup(true,false);
         }
         _loc2_ = -180 / Math.PI * this.wf.ray[this.midPoint].p.dir;
         this.imageTxt.text = "중심 빔각도: " + Math.round(_loc2_ * 100) / 100 + "도";
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
__setProp_apexSlider__1(){
         try
         {
            this.apexSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.apexSlider.arrowColor = 102;
         this.apexSlider.centerSquareOffColor = 21947;
         this.apexSlider.centerSquareOnColor = 13369548;
         this.apexSlider.enabled = true;
         this.apexSlider.fontBold = true;
         this.apexSlider.fontColor = 8421504;
         this.apexSlider.fontEmbed = false;
         this.apexSlider.fontColorLimit = 8421504;
         this.apexSlider.fontName = "_sans";
         this.apexSlider.fontNumName = "_sans";
         this.apexSlider.fontColorSelected = 8421504;
         this.apexSlider.fontSize = 12;
         this.apexSlider.boxHeight = 13;
         this.apexSlider.incrementOrDigit = 0.5;
         this.apexSlider.isIncrement = true;
         this.apexSlider.limitLower = 0.5;
         this.apexSlider.limitUpper = 90;
         this.apexSlider.lineColor = 8421504;
         this.apexSlider.lineThickness = 1;
         this.apexSlider.isShowValue = true;
         this.apexSlider.skin = 0;
         this.apexSlider.text = "프리즘 꼭지각 (도)";
         this.apexSlider.value = 60;
         this.apexSlider.visible = true;
         this.apexSlider.boxWidth = 150;
         try
         {
            this.apexSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_auxChk__1(){
         try
         {
            this.auxChk["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.auxChk.checkColor = 16711680;
         this.auxChk.checkStyle = 1;
         this.auxChk.checkThickness = 2;
         this.auxChk.isChecked = false;
         this.auxChk.enabled = true;
         this.auxChk.fontBold = true;
         this.auxChk.fontColor = 8421504;
         this.auxChk.fontEmbed = false;
         this.auxChk.fontName = "_sans";
         this.auxChk.fontOnColor = 13369548;
         this.auxChk.fontSize = 12;
         this.auxChk.boxHeight = 12;
         this.auxChk.lineColor = 8421504;
         this.auxChk.lineThickness = 2;
         this.auxChk.text = "보조선";
         this.auxChk.visible = true;
         this.auxChk.boxWidth = 60;
         try
         {
            this.auxChk["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
Init(){
         this.setWhiteBG(true);
         this.InitCtrl();
         this.InitInstrument();
      }
InitInstrument(){
         this.t1 = new Prism(1.5,new Point2D(100,-175,0),new Point2D(0,150,0),new Point2D(-100,-175,0));
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.makeIsosceles();
         this.t1.setApexAngle(Math.PI / 180 * this.apexSlider.value);
         this.indexField.AddInstrument(this.t1);
         this.indexField.Draw();
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-155,720,310);
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,26112,1);
            this.wf.huyLineStyle = new LineStyle(1,170,1,false,LineScaleMode.NONE);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16720418,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,47872,1);
            this.wf.huyLineStyle = new LineStyle(1,255,1,false,LineScaleMode.NONE);
            this.apexSlider.setCustomColor(2);
            this.dirSlider.setCustomColor(2);
            this.n0Slider.setCustomColor(2);
            this.nSlider.setCustomColor(2);
         }
      }
indexReset(){
         this.indexField.Draw();
         this.aniReset();
      }
apexSliderEventHandler(param1){
         this.t1.setApexAngle(Math.PI / 180 * this.apexSlider.value);
         this.indexReset();
      }
InitCtrl(){
         if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
         {
            this.showRayChk.isChecked = true;
            this.wf.isShowRay = this.showRayChk.isChecked;
         }
         this.wf.isShowRay = this.showRayChk.isChecked;
         this.wf.isShowFront = this.showFrontChk.isChecked;
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
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
