import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest } from './optics-batch50-adapter.mjs';
import {createKernel} from './optics-batch50-kernel-f86c6b2c9f46fd67.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 599.9931335449219, "height": 400.00360107421875}, "showRayChk": {"x": 5.4, "y": 385.3, "width": 73.00556945800781, "height": 12.98175048828125}, "showFrontChk": {"x": 94.4, "y": 385.3, "width": 73.00556945800781, "height": 12.98175048828125}, "resetBtn": {"x": 527.3, "y": 380.3, "width": 70.00534057617188, "height": 19.971923828125}, "curvTxt": {"x": 374.05, "y": 382.3, "width": null, "height": null}, "marker": {"x": -16, "y": 411.9, "width": 9, "height": 9.00604248046875}, "marker2": {"x": -16, "y": 425.95, "width": 9, "height": 9}}, "id": "flash-08335547ca0f950f", "source": "focalellipsesim1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/mirror/focalellipsesim1.swf", "title": "타원체 거울에서 초점에서 나온 빛의 진행", "lesson": "5-2-2-5", "width": 600, "height": 400, "animated": true, "controls": [], "checks": [{"clip": "showRayChk", "label": "광선 보기", "value": false}, {"clip": "showFrontChk", "label": "파면 보기", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "drag": false, "sourceSha256": "a6acaa66f2f4e4f5e49e2ba419763482eb0370efc13258724a4fe3408ff5662e", "kernelSha256": "f86c6b2c9f46fd67d658a9f958ab9a06eb8fd0bf59b2bf5d06af31ad3ef0b0e7", "kernelModule": "optics-batch50-kernel-f86c6b2c9f46fd67.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/Ellipse.as", "sha256": "53902209a06a336d9b48e7acaf328bf1418667e29d3839ef244c87cb60e3ecf4"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "stopAniEventHandler", "Init", "InitWave", "frame1", "setWhiteBG", "indexReset", "rayShowSet", "CheckBoxEventHandler", "ButtonEventHandler", "InitCtrl", "InitInstrument", "aniReset"], "programModule": "optics-batch50-program-flash-08335547ca0f950f.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,Ellipse,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
xposi = 0;
marker2 = new Sprite();
t1 = new Sprite();
wavefrontStep0 = 0;
indexField = new Sprite();
canvas = new Sprite();
curvTxt = new Sprite();
wfAux = new Sprite();
showRayChk = new Sprite();
yposi = 0;
backGraphics = new Sprite();
numOfPoint = 0;
marker = new Sprite();
aniMode = 0;
mk = new Sprite();
resetBtn = new Sprite();
xOrigin = 0;
wf = new Sprite();
showFrontChk = new Sprite();
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_showRayChk__1();
         this.__setProp_resetBtn__1();
         this.__setProp_showFrontChk__1();
      }
stopAniEventHandler(param1){
         if(this.aniMode == 0)
         {
            this.aniMode = 1;
         }
         else
         {
            this.aniMode = 0;
         }
      }
Init(){
         this.setWhiteBG(true);
         this.InitCtrl();
         this.InitInstrument();
         this.wf.isShowRay = false;
         this.rayShowSet();
      }
InitWave(){
         let _loc1_ = null;
         let _loc2_ = null;
         _loc1_ = this.t1.focalPoints()[0];
         _loc2_ = this.t1.focalPoints()[1];
         if(this.aniMode == 0)
         {
            this.xposi = _loc1_.x;
            this.yposi = _loc1_.y;
         }
         else
         {
            this.xposi = _loc2_.x;
            this.yposi = _loc2_.y;
         }
         _loc1_ = this.pt.getScreenCoordinate(_loc1_);
         this.marker.x = _loc1_.x;
         this.marker.y = _loc1_.y;
         _loc2_ = this.pt.getScreenCoordinate(_loc2_);
         this.marker2.x = _loc2_.x;
         this.marker2.y = _loc2_.y;
         this.wf.SetCircularWave(this.xposi,this.yposi,0,1.5 * Math.PI,10);
         this.wf.ShowRayStatus(15,new LineStyle(2,16711935,1),30);
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
         this.xOrigin = 300;
         this.yOrigin = 200;
         this.numOfPoint = 241;
         this.wavefrontStep0 = 15;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt.aniMode = 1;
         this.pt.aniTimeLimit = 100;
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.canvas.mask = this.mk;
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.wf = this.pt.wf;
         this.wfAux = this.pt.wfAux;
         this.indexField = this.pt.indexField;
         this.aniMode = 0;
         this.addChild(this.marker);
         this.addChild(this.marker2);
         this.Init();
         this.indexReset();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,170,1);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16720418,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,4474111,1);
         }
         this.gr.clear();
         this.gr.lineStyle(1,8421504,1);
         this.gr.moveTo(0,this.yOrigin);
         this.gr.lineTo(this.width,this.yOrigin);
         this.gr.moveTo(this.xOrigin,0);
         this.gr.lineTo(this.xOrigin,2 * this.yOrigin);
         this.gr.moveTo(0,0);
      }
indexReset(){
         this.t1.R1 = 150 + Math.round(Math.random() * 20) * 5;
         this.t1.R2 = 80 + Math.round(Math.random() * 24) * 5;
         this.t1.p.dir = Math.random() - 0.5;
         this.curvTxt.text = "반경 " + this.t1.R1 + ", " + this.t1.R2;
         this.indexField.Draw();
         this.aniReset();
      }
rayShowSet(){
         let _loc1_ = 0;
         _loc1_ = 0;
         while(_loc1_ < this.numOfPoint)
         {
            if(_loc1_ == Math.floor(_loc1_ / 10) * 10)
            {
               this.wf.ray[_loc1_].isShowRay = this.showRayChk.isChecked;
            }
            _loc1_++;
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
            this.rayShowSet();
         }
         else if(param1.target == this.showFrontChk)
         {
            if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
            {
               this.showRayChk.isChecked = true;
               this.rayShowSet();
            }
            this.wf.isShowFront = this.showFrontChk.isChecked;
         }
      }
ButtonEventHandler(param1){
         if(param1.target == this.resetBtn)
         {
            this.indexReset();
         }
      }
InitCtrl(){
         if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
         {
            this.showRayChk.isChecked = true;
         }
         this.rayShowSet();
         this.wf.isShowFront = this.showFrontChk.isChecked;
      }
InitInstrument(){
         this.t1 = new Ellipse(0,200,150);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.indexField.AddInstrument(this.t1);
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-400 + this.yOrigin,600,400);
         this.indexField.Draw();
      }
aniReset(){
         this.pt.clearWaveFront();
         this.InitWave();
         this.pt.startAni();
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
