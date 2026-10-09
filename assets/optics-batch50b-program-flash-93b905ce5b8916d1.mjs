import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-ac7e5dcd3e4a6001.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 719.9909210205078, "height": 310.00634765625}, "startBtn": {"x": 645.1, "y": 333, "width": 70.00534057617188, "height": 20}, "showRayChk": {"x": 3.4, "y": 317.3, "width": 73.00556945800781, "height": 13}, "showFrontChk": {"x": 3.4, "y": 335.3, "width": 73.00556945800781, "height": 13}, "resetBtn": {"x": 645.4, "y": 311.3, "width": 70.00534057617188, "height": 20}, "dSlider": {"x": 445.4, "y": 325.3, "width": 150.01144409179688, "height": 13}, "opSlider": {"x": 282.35, "y": 324.8, "width": 150.01144409179688, "height": 13}, "nMaxSlider": {"x": 101.9, "y": 315.3, "width": 55.00419616699219, "height": 12}, "marker": {"x": 10, "y": 155, "width": 9, "height": 9.0186767578125}, "objTxt": {"x": 284.4, "y": 310.2, "width": null, "height": null}, "imageTxt": {"x": 509.8, "y": 2, "width": null, "height": null}, "obj2Txt": {"x": 5.4, "y": 2, "width": null, "height": null}, "aSlider": {"x": 101.9, "y": 331.5, "width": 55.00419616699219, "height": 12}}, "id": "flash-93b905ce5b8916d1", "source": "simgrin1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/grinetc/simgrin1.swf", "title": "GRIN 렌즈의 모의실험", "lesson": "5-2-9-2", "width": 720, "height": 355, "animated": true, "controls": [{"clip": "nMaxSlider", "key": "nMax", "label": "중심 굴절률", "min": 1.4, "max": 3.0, "step": 0.02, "value": 2.0}, {"clip": "opSlider", "key": "op", "label": "물체 수평위치", "min": -1000.0, "max": 1000.0, "step": 0.1, "value": -100.0}, {"clip": "dSlider", "key": "d", "label": "두께", "min": 200.0, "max": 600.0, "step": 1.0, "value": 400.0}, {"clip": "aSlider", "key": "a", "label": "물매 상수", "min": 0.0002, "max": 0.006, "step": 0.0002, "value": 0.003}], "checks": [{"clip": "showRayChk", "label": "광선 보기", "value": false}, {"clip": "showFrontChk", "label": "파면 보기", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}, {"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "selects": [], "drag": true, "sourceSha256": "7ca555eea409dba97341d378cb550dca016b3d230fb3d0b96247efa74694fb8a", "kernelSha256": "ac7e5dcd3e4a60011dd905988182cbd686ef17f17b1a1deeefd1010f81a1b072", "kernelModule": "optics-batch50b-kernel-ac7e5dcd3e4a6001.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/GRIN.as", "sha256": "38ba65be222557b0498e17cda9cd0024e26466be5a1b0473214b187455fcee20"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "InitWave", "frame1", "opSliderEventHandler", "CheckBoxEventHandler", "RSliderEventHandler", "aniReset", "stopAniEventHandler", "Init", "InitInstrument", "stopDragging", "setWhiteBG", "indexReset", "dragObject", "InitCtrl", "ButtonEventHandler", "startDragging", "nSliderEventHandler"], "programModule": "optics-batch50b-program-flash-93b905ce5b8916d1.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,GRIN,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
opSlider = new Sprite();
offsetX = 0;
offsetY = 0;
t1 = new Sprite();
marker = new Sprite();
obj2Txt = new Sprite();
dSlider = new Sprite();
resetBtn = new Sprite();
yposi = 0;
nMaxSlider = new Sprite();
backGraphics = new Sprite();
startBtn = new Sprite();
aSlider = new Sprite();
wf = new Sprite();
gr = new Sprite();
yOrigin = 0;
xposi = 0;
imageTxt = new Sprite();
indexField = new Sprite();
canvas = new Sprite();
wfAux = new Sprite();
showRayChk = new Sprite();
numOfPoint = 0;
mk = new Sprite();
xOrigin = 0;
showFrontChk = new Sprite();
wavefrontStep0 = 0;
objTxt = new Sprite();
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_dSlider__1();
         this.__setProp_showRayChk__1();
         this.__setProp_opSlider__1();
         this.__setProp_nMaxSlider__1();
         this.__setProp_aSlider__1();
         this.__setProp_resetBtn__1();
         this.__setProp_showFrontChk__1();
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
            _loc1_ = Math.atan2(-this.yposi * 0.1,this.xOrigin);
            if(this.xposi > 0)
            {
               this.wf.SetParallelWave(10 - this.xOrigin,this.yposi / 10,_loc1_,150);
            }
            else
            {
               _loc1_ = -_loc1_;
               this.wf.SetParallelWave(10 - this.xOrigin,-this.yposi / 10,_loc1_,150);
            }
         }
         else if(this.xposi > 0)
         {
            if(this.xposi < this.xOrigin)
            {
               this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,1.5,10);
            }
            else
            {
               this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,180 / this.xposi,this.xposi - this.xOrigin + 10);
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
         this.wf.ShowRayStatus(25,new LineStyle(1,16711935,1),3);
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
         this.xOrigin = 100;
         this.yOrigin = 155;
         this.numOfPoint = 15;
         this.wavefrontStep0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.canvas.mask = this.mk;
         this.addChild(this.imageTxt);
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.wf = this.pt.wf;
         this.wfAux = this.pt.wfAux;
         this.indexField = this.pt.indexField;
         this.Init();
         this.indexReset();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.nMaxSlider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.aSlider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.opSlider.addEventListener(SliderEvent.CHANGE,this.opSliderEventHandler);
         this.dSlider.addEventListener(SliderEvent.CHANGE,this.RSliderEventHandler);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.marker.addEventListener(MouseEvent.MOUSE_DOWN,this.startDragging);
         this.marker.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
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
__setProp_nMaxSlider__1(){
         try
         {
            this.nMaxSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.nMaxSlider.arrowColor = 102;
         this.nMaxSlider.enabled = true;
         this.nMaxSlider.fontBold = true;
         this.nMaxSlider.fontColor = 8421504;
         this.nMaxSlider.fontEmbed = false;
         this.nMaxSlider.fontName = "_sans";
         this.nMaxSlider.fontSize = 12;
         this.nMaxSlider.boxHeight = 13;
         this.nMaxSlider.incrementOrDigit = 0.02;
         this.nMaxSlider.isIncrement = true;
         this.nMaxSlider.limitLower = 1.4;
         this.nMaxSlider.limitUpper = 3;
         this.nMaxSlider.lineColor = 8421504;
         this.nMaxSlider.lineThickness = 1;
         this.nMaxSlider.skin = 0;
         this.nMaxSlider.text = "중심 굴절률";
         this.nMaxSlider.value = 2;
         this.nMaxSlider.visible = true;
         this.nMaxSlider.boxWidth = 70;
         try
         {
            this.nMaxSlider["componentInspectorSetting"] = false;
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
RSliderEventHandler(param1){
         this.t1.thickness = this.dSlider.value;
         this.t1.p.x = this.t1.thickness / 2;
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
Init(){
         this.setWhiteBG(true);
         this.InitCtrl();
         this.InitInstrument();
      }
InitInstrument(){
         this.t1 = new GRIN(2,0.003,400,300);
         this.t1.p.x = 200;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.indexField.AddInstrument(this.t1);
         this.indexField.Draw();
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
         this.dSlider.limitLower = 200;
         this.dSlider.limitUpper = 600;
         this.dSlider.lineColor = 8421504;
         this.dSlider.lineThickness = 1;
         this.dSlider.isShowValue = true;
         this.dSlider.skin = 0;
         this.dSlider.text = "두께";
         this.dSlider.value = 400;
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
stopDragging(param1){
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
            this.nMaxSlider.setCustomColor(2);
         }
      }
indexReset(){
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
         this.offsetX = param1.stageX - this.marker.x;
         this.offsetY = param1.stageY - this.marker.y;
         this.stage.addChild(this.marker);
         this.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
      }
nSliderEventHandler(param1){
         if(param1.target == this.nMaxSlider)
         {
            this.t1.nMax = this.nMaxSlider.value;
         }
         else if(param1.target == this.aSlider)
         {
            this.t1.a = this.aSlider.value;
         }
         this.indexReset();
      }
__setProp_aSlider__1(){
         try
         {
            this.aSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.aSlider.arrowColor = 102;
         this.aSlider.enabled = true;
         this.aSlider.fontBold = true;
         this.aSlider.fontColor = 8421504;
         this.aSlider.fontEmbed = false;
         this.aSlider.fontName = "_sans";
         this.aSlider.fontSize = 12;
         this.aSlider.boxHeight = 13;
         this.aSlider.incrementOrDigit = 0.0002;
         this.aSlider.isIncrement = true;
         this.aSlider.limitLower = 0.0002;
         this.aSlider.limitUpper = 0.006;
         this.aSlider.lineColor = 8421504;
         this.aSlider.lineThickness = 1;
         this.aSlider.skin = 0;
         this.aSlider.text = "물매 상수";
         this.aSlider.value = 0.003;
         this.aSlider.visible = true;
         this.aSlider.boxWidth = 70;
         try
         {
            this.aSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
