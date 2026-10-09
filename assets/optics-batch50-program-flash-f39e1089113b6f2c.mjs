import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest } from './optics-batch50-adapter.mjs';
import {createKernel} from './optics-batch50-kernel-194e7be0300cfe44.mjs';
const SPEC={"placements": {"candle": {"x": 572.5, "y": 123, "width": 25.592459106445315, "height": -94.97539978027343}, "startBtn": {"x": 314.1, "y": 227.4, "width": 70.00534057617188, "height": 19.99664306640625}, "showRayChk": {"x": 4.4, "y": 216.35, "width": 73.00556945800781, "height": 12.997817993164062}, "showFrontChk": {"x": 4.4, "y": 234.35, "width": 73.00556945800781, "height": 12.997817993164062}, "resetBtn": {"x": 235.4, "y": 227.4, "width": 70.00534057617188, "height": 19.99664306640625}, "marker": {"x": 30, "y": 120, "width": 16.0244140625, "height": 16.00341796875}}, "id": "flash-f39e1089113b6f2c", "source": "toy_Lens.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/image/toy_Lens.swf", "title": "실제의 렌즈에 의한 결상", "lesson": "5-2-3-1", "width": 700, "height": 250, "animated": true, "controls": [], "checks": [{"clip": "showRayChk", "label": "광선 보기", "value": false}, {"clip": "showFrontChk", "label": "파면 보기", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}, {"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "drag": true, "sourceSha256": "f0ee5bd61527f062d03dc455529657255883ae1fdff1dd924ce0a549f92de69d", "kernelSha256": "194e7be0300cfe4498f14a4f0a94b0a2aeef6fd88598618baa51072b13d23f63", "kernelModule": "optics-batch50-kernel-194e7be0300cfe44.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "8f9a9dc0dd9a9117177a2a6b82e4b99c560970482f2ed59cb6ca97f8672570a4"}, {"path": "RayTracer/FillStyle.as", "sha256": "a55e36587faf4ee73d47320ca883e6a814553875e7c68376e4d2b9843631a5c1"}, {"path": "RayTracer/IndexField.as", "sha256": "a6bac35d4e2cb10264bb83e15fcad0323b57c24a7f9a12b9fcd07772cd168983"}, {"path": "RayTracer/LineStyle.as", "sha256": "aaac5848b9887ec4488c5745d3c68c46044413687b27757701aa2ffc98bfad06"}, {"path": "RayTracer/Point2D.as", "sha256": "7a4dddb51b5de42db1057c9f1d869c48c8710995ca583dccc57b89f41afda7f5"}, {"path": "RayTracer/Prototype.as", "sha256": "e596f20c5970bcfffb978caa81337e08010a7a9cba7108a1e569b0a336041285"}, {"path": "RayTracer/RayTrace.as", "sha256": "69a66f65454dac61a131ff5cc2a5a4d4b385965b05c807dcb242c25e279300a1"}, {"path": "RayTracer/ThickLens.as", "sha256": "02d34f6e7175f7d6635b21c3d53ba6f5eb6fb822c02b479c96ebc565d99e4b80"}, {"path": "RayTracer/WaveFront.as", "sha256": "038aff35b6ecac3b97cfa499579d29c50f4e4db9d9494d39c595fadc00c8291f"}], "methods": ["MainTimeline", "stopAniEventHandler", "Init", "InitInstrument", "InitWave", "frame1", "stopDragging", "CheckBoxEventHandler", "ButtonEventHandler", "InitCtrl", "dragObject", "startDragging", "aniReset"], "authoredRayBounds": {"x": -310, "y": -131, "width": 701, "height": 251}, "programModule": "optics-batch50-program-flash-f39e1089113b6f2c.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
candle = new Sprite();
xposi = 0;
offsetX = 0;
gr = new Sprite();
offsetY = 0;
indexField = new Sprite();
canvas = new Sprite();
showRayChk = new Sprite();
yposi = 0;
backGraphics = new Sprite();
startBtn = new Sprite();
marker = new Sprite();
resetBtn = new Sprite();
numOfPoint = 0;
xOrigin = 0;
wf = new Sprite();
showFrontChk = new Sprite();
wavelength0 = 0;
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_showRayChk__1();
         this.__setProp_resetBtn__1();
         this.__setProp_showFrontChk__1();
      }
stopAniEventHandler(param1){
         this.startBtn.isON = false;
         this.startBtn.visible = false;
      }
Init(){
         this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
         this.wf.frontLineStyle = new LineStyle(1,26112,1);
         this.InitCtrl();
         this.InitInstrument();
      }
InitInstrument(){
         let _loc1_ = null;
         _loc1_ = new ThickLens(3.5,690,-690,50,200);
         _loc1_.p.x = 0;
         _loc1_.p.y = 0;
         _loc1_.p.dir = 0;
         _loc1_.makeThinner();
         this.indexField.AddInstrument(_loc1_);
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-this.height + this.yOrigin,this.width,this.height);
         this.indexField.Draw();
      }
InitWave(){
         let _loc1_ = NaN;
         _loc1_ = Math.atan2(-this.yposi,-this.xposi);
         this.wf.SetCircularWave(this.xposi,this.yposi,_loc1_,0.15 * Math.PI,10);
         this.wf.ShowRayStatus(25,new LineStyle(1,16711935,1),10);
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
         this.xOrigin = 310;
         this.yOrigin = 120;
         this.numOfPoint = 25;
         this.wavelength0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavelength0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt.aniMode = 1;
         this.pt.aniTimeLimit = 50;
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.addChild(this.marker);
         this.addChild(this.candle);
         this.wf = this.pt.wf;
         this.indexField = this.pt.indexField;
         this.Init();
         this.aniReset();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.marker.addEventListener(MouseEvent.MOUSE_DOWN,this.startDragging);
         this.marker.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
      }
stopDragging(param1){
         this.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
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
         this.xposi = -this.xOrigin + this.marker.x;
         this.yposi = this.yOrigin - this.marker.y;
      }
dragObject(param1){
         this.marker.x = param1.stageX - this.offsetX;
         this.marker.y = param1.stageY - this.offsetY;
         this.xposi = this.marker.x - this.xOrigin;
         this.yposi = this.yOrigin - this.marker.y;
         if(this.xposi < -300)
         {
            this.xposi = -300;
            this.marker.x = this.xOrigin + this.xposi;
         }
         else if(this.xposi > -150)
         {
            this.xposi = -150;
            this.marker.x = this.xOrigin + this.xposi;
         }
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
         this.aniReset();
         param1.updateAfterEvent();
      }
startDragging(param1){
         this.offsetX = param1.stageX - this.marker.x;
         this.offsetY = param1.stageY - this.marker.y;
         this.stage.addChild(this.marker);
         this.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
      }
aniReset(){
         this.pt.stopAni();
         this.startBtn.isON = false;
         this.pt.clearWaveFront();
         this.InitWave();
         this.startBtn.visible = true;
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
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();Object.assign(timeline.indexField.boundRect,SPEC.authoredRayBounds);return timeline;}
