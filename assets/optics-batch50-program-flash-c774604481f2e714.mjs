import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest } from './optics-batch50-adapter.mjs';
import {createKernel} from './optics-batch50-kernel-8a1cdc9b14eb882a.mjs';
const SPEC={"placements": {"chicken": {"x": 325.3, "y": 95, "width": -62.000274658203125, "height": 58.699937438964845}, "mirrorTypeStr": {"x": -1, "y": 162.8, "width": null, "height": null}, "startBtn": {"x": 527.1, "y": 326.35, "width": 70.00534057617188, "height": 20}, "showRayChk": {"x": 3.4, "y": 316.35, "width": 73.00556945800781, "height": 13}, "showFrontChk": {"x": 3.4, "y": 334.35, "width": 73.00556945800781, "height": 13}, "resetBtn": {"x": 527.4, "y": 303.25, "width": 70.00534057617188, "height": 20}, "marker": {"x": 300, "y": 340, "width": 16.0244140625, "height": 16.006103515625}, "btnMirrorType": {"x": 9, "y": 138.25, "width": 70, "height": 20}}, "id": "flash-c774604481f2e714", "source": "toy_Mirage_physica.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/mirror/toy_Mirage_physica.swf", "title": "포물면거울을 이용한 장난감", "lesson": "5-2-2-4", "width": 600, "height": 350, "animated": true, "controls": [], "checks": [{"clip": "showRayChk", "label": "광선 보기", "value": false}, {"clip": "showFrontChk", "label": "파면 보기", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}, {"clip": "btnMirrorType", "label": "btnMirrorType", "alternate": "일시정지", "toggle": false}, {"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "drag": true, "sourceSha256": "b48c0e976194566e90e3201c82db23bc3b734837e53d03799ad215fb51be2abc", "kernelSha256": "8a1cdc9b14eb882a93b105a4ab976799e845f103e8e73067bce41a3e22b90e6a", "kernelModule": "optics-batch50-kernel-8a1cdc9b14eb882a.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Parabola.as", "sha256": "55643b091fd3e492560b0db7e5df431a02f74ca0821a0f55d8b85653a239b05d"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/ThickLens.as", "sha256": "4a1cac58e49cb14efa2c3812440ecda60ce822a9d0cbff066e5a242f4dcf65c4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "Init", "InitInstrument", "InitWave", "frame1", "stopDragging", "CheckBoxEventHandler", "ButtonEventHandler", "InitCtrl", "startDragging", "ButtonEventHandler2", "aniReset", "dragObject", "stopAniEventHandler"], "programModule": "optics-batch50-program-flash-c774604481f2e714.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Parabola,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
mirrorTypeStr = new Sprite();
btnMirrorType = new Sprite();
xposi = 0;
offsetX = 0;
offsetY = 0;
gr = new Sprite();
wavefrontStep0 = 0;
indexField = new Sprite();
canvas = new Sprite();
showRayChk = new Sprite();
yposi = 0;
mirrorType = 0;
startBtn = new Sprite();
marker = new Sprite();
backGraphics = new Sprite();
resetBtn = new Sprite();
chicken = new Sprite();
xOrigin = 0;
numOfPoint = 0;
wf = new Sprite();
showFrontChk = new Sprite();
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_showRayChk__1();
         this.__setProp_btnMirrorType__1();
         this.__setProp_resetBtn__1();
         this.__setProp_showFrontChk__1();
      }
__setProp_btnMirrorType__1(){
         try
         {
            this.btnMirrorType["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.btnMirrorType.backOffColor = 26112;
         this.btnMirrorType.backOnColor = 22015;
         this.btnMirrorType.backOverColor = 13369548;
         this.btnMirrorType.enabled = true;
         this.btnMirrorType.fontBold = true;
         this.btnMirrorType.fontColor = 14548957;
         this.btnMirrorType.fontEmbed = false;
         this.btnMirrorType.fontName = "_sans";
         this.btnMirrorType.fontSize = 12;
         this.btnMirrorType.boxHeight = 20;
         this.btnMirrorType.lineColor = 8421504;
         this.btnMirrorType.lineThickness = 1;
         this.btnMirrorType.isON = false;
         this.btnMirrorType.skin = 0;
         this.btnMirrorType.textOFF = "거울교체";
         this.btnMirrorType.textON = "정지";
         this.btnMirrorType.isToggle = false;
         this.btnMirrorType.visible = true;
         this.btnMirrorType.boxWidth = 70;
         try
         {
            this.btnMirrorType["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
Init(){
         this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
         this.wf.frontLineStyle = new LineStyle(1,170,1);
         this.InitCtrl();
         this.InitInstrument();
      }
InitInstrument(){
         let _loc1_ = undefined;
         let _loc2_ = undefined;
         let _loc3_ = null;
         this.indexField.RemoveInstrument();
         _loc3_ = new Parabola(1,200);
         _loc3_.p.x = 0;
         _loc3_.p.y = 199;
         _loc3_.isShellShape = true;
         _loc3_.thickness = 12;
         _loc3_.length = 75;
         _loc3_.p.dir = Math.PI / 2;
         if(this.mirrorType == 0)
         {
            _loc1_ = new Parabola(0,200);
            _loc1_.p.x = 0;
            _loc1_.p.y = 0;
            _loc1_.isShellShape = true;
            _loc1_.length = 580;
            _loc1_.p.dir = -Math.PI / 2;
            _loc2_ = new Parabola(0,200);
            _loc2_.p.x = 0;
            _loc2_.p.y = 200;
            _loc2_.isShellShape = true;
            _loc2_.length = 580;
            _loc2_.p.dir = Math.PI / 2;
            this.indexField.AddInstrument(_loc1_);
            this.indexField.AddInstrument(_loc2_);
            this.indexField.AddInstrument(_loc3_);
            this.mirrorTypeStr.text = "포물면거울";
         }
         else
         {
            _loc1_ = new ThickLens(0,400,400,10,540);
            _loc1_.p.x = 0;
            _loc1_.p.y = -5;
            _loc1_.p.dir = Math.PI / 2;
            _loc2_ = new ThickLens(0,-400,-400,10,540);
            _loc2_.p.x = 0;
            _loc2_.p.y = 205;
            _loc2_.p.dir = Math.PI / 2;
            this.indexField.AddInstrument(_loc1_);
            this.indexField.AddInstrument(_loc2_);
            this.indexField.AddInstrument(_loc3_);
            this.mirrorTypeStr.text = "구형오목거울";
         }
         this.indexField.Draw();
      }
InitWave(){
         this.wf.SetCircularWave(this.xposi,this.yposi,Math.PI / 2,0.779 * Math.PI,10);
         this.wf.ShowRayStatus(25,new LineStyle(1,16711935,1),10);
      }
frame1(){
         this.xOrigin = 300;
         this.yOrigin = 340;
         this.numOfPoint = 35;
         this.wavefrontStep0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt.aniMode = 1;
         this.pt.aniTimeLimit = 50;
         this.mirrorType = 0;
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.addChild(this.marker);
         this.addChild(this.chicken);
         this.wf = this.pt.wf;
         this.indexField = this.pt.indexField;
         this.Init();
         this.aniReset();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.btnMirrorType.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler2);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.marker.addEventListener(MouseEvent.MOUSE_DOWN,this.startDragging);
         this.marker.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
      }
stopDragging(param1){
         this.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
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
      }
startDragging(param1){
         this.offsetX = param1.stageX - this.marker.x;
         this.offsetY = param1.stageY - this.marker.y;
         this.stage.addChild(this.marker);
         this.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
      }
ButtonEventHandler2(param1){
         if(param1.target == this.btnMirrorType)
         {
            if(this.mirrorType == 0)
            {
               this.mirrorType = 1;
            }
            else
            {
               this.mirrorType = 0;
            }
            this.aniReset();
            this.InitInstrument();
         }
      }
aniReset(){
         this.pt.stopAni();
         this.startBtn.isON = false;
         this.pt.clearWaveFront();
         this.InitWave();
         this.startBtn.visible = true;
      }
dragObject(param1){
         this.marker.x = param1.stageX - this.offsetX;
         this.marker.y = param1.stageY - this.offsetY;
         this.xposi = this.marker.x - this.xOrigin;
         this.yposi = this.yOrigin - this.marker.y;
         if(this.xposi > 50)
         {
            this.xposi = 50;
            this.marker.x = this.xOrigin + this.xposi;
         }
         else if(this.xposi < -50)
         {
            this.xposi = -50;
            this.marker.x = this.xOrigin + this.xposi;
         }
         if(this.yposi > 150)
         {
            this.yposi = 150;
            this.marker.y = this.yOrigin - this.yposi;
         }
         else if(this.yposi < 0)
         {
            this.yposi = 0;
            this.marker.y = this.yOrigin - this.yposi;
         }
         this.aniReset();
         param1.updateAfterEvent();
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
stopAniEventHandler(param1){
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
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
