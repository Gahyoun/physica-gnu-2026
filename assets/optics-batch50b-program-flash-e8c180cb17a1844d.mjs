import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-ac7e5dcd3e4a6001.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 699.9961853027344, "height": 200.00115966796875}, "showRayChk": {"x": 5.4, "y": 205.3, "width": 73.00556945800781, "height": 13}, "showFrontChk": {"x": 94.4, "y": 205.3, "width": 73.00556945800781, "height": 13}, "resetBtn": {"x": 624.3, "y": 198.3, "width": 70.00534057617188, "height": 20}, "grTxt": {"x": 264.05, "y": 202.55, "width": null, "height": null}, "thicknessTxt": {"x": 198, "y": 202.55, "width": null, "height": null}, "marker": {"x": -16, "y": 231.95, "width": 9, "height": 9.0186767578125}, "expTxt": {"x": 359.95, "y": 202.55, "width": null, "height": null}}, "id": "flash-e8c180cb17a1844d", "source": "focalgrinsim1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/grinetc/focalgrinsim1.swf", "title": "GRIN 렌즈에서의 광선의 행동", "lesson": "5-2-9-1", "width": 700, "height": 220, "animated": true, "controls": [], "checks": [{"clip": "showRayChk", "label": "광선 보기", "value": false}, {"clip": "showFrontChk", "label": "파면 보기", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "selects": [], "drag": false, "sourceSha256": "97a6401ec844b19d52c8727fe14929a4e41e64f962e8cc48ce10a1f99ffb9f59", "kernelSha256": "ac7e5dcd3e4a60011dd905988182cbd686ef17f17b1a1deeefd1010f81a1b072", "kernelModule": "optics-batch50b-kernel-ac7e5dcd3e4a6001.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/GRIN.as", "sha256": "38ba65be222557b0498e17cda9cd0024e26466be5a1b0473214b187455fcee20"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "Init", "InitWave", "frame1", "InitInstrument", "setWhiteBG", "indexReset", "CheckBoxEventHandler", "ButtonEventHandler", "InitCtrl", "aniReset", "stopAniEventHandler"], "programModule": "optics-batch50b-program-flash-e8c180cb17a1844d.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,GRIN,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
expTxt = new Sprite();
xposi = 0;
t1 = new Sprite();
wavefrontStep0 = 0;
indexField = new Sprite();
canvas = new Sprite();
thicknessTxt = new Sprite();
showRayChk = new Sprite();
yposi = 0;
backGraphics = new Sprite();
numOfPoint = 0;
marker = new Sprite();
aniMode = 0;
grTxt = new Sprite();
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
Init(){
         this.setWhiteBG(true);
         this.InitCtrl();
         this.InitInstrument();
      }
InitWave(){
         let _loc1_ = NaN;
         let _loc2_ = NaN;
         if(Math.random() > 0.5)
         {
            this.aniMode = 1;
         }
         else
         {
            this.aniMode = 0;
         }
         this.yposi = -25 + Math.floor(Math.random() * 50);
         if(this.aniMode == 0)
         {
            this.xposi = 1000;
            this.marker.x = -100;
         }
         else
         {
            this.xposi = 90;
            this.marker.x = this.xOrigin - this.xposi;
            this.marker.y = this.yOrigin - this.yposi;
         }
         _loc1_ = Math.atan2(-this.yposi,this.xposi);
         if(Math.abs(this.xposi) >= 1000)
         {
            _loc1_ = Math.atan2(-this.yposi,-(10 - this.xOrigin));
            this.wf.SetParallelWave(10 - this.xOrigin,this.yposi,_loc1_,95);
         }
         else if(this.xposi > 0)
         {
            this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,1,5);
         }
         _loc2_ = Math.floor(this.numOfPoint / 2);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),3);
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
         this.yOrigin = 100;
         this.numOfPoint = 7;
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
         this.indexField = this.pt.indexField;
         this.aniMode = 0;
         this.Init();
         this.indexReset();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
      }
InitInstrument(){
         this.t1 = new GRIN(2,0.003,300,190);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.indexField.AddInstrument(this.t1);
         this.indexField.Draw();
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
         }
         this.gr.clear();
         this.gr.lineStyle(1,8421504,1);
         this.gr.moveTo(0,this.yOrigin);
         this.gr.lineTo(this.width,this.yOrigin);
         this.gr.moveTo(0,0);
      }
indexReset(){
         this.t1.thickness = 250 + Math.floor(Math.random() * 300);
         this.t1.p.x = this.t1.thickness / 2;
         this.t1.a = Math.round(3 + Math.floor(Math.random() * 7)) * 0.001;
         this.thicknessTxt.text = "두께 " + this.t1.thickness;
         this.grTxt.text = "물매상수 " + this.t1.a;
         this.expTxt.text = "(중심 굴절률 2.0, 가장자리 굴절률 " + Math.round(2 * Math.sqrt(1 - this.t1.a * this.t1.a * 95 * 95) * 100) / 100 + ")";
         this.indexField.Draw();
         this.aniReset();
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
            this.wf.isShowRay = this.showRayChk.isChecked;
         }
         this.wf.isShowRay = this.showRayChk.isChecked;
         this.wf.isShowFront = this.showFrontChk.isChecked;
      }
aniReset(){
         this.pt.clearWaveFront();
         this.InitWave();
         this.pt.startAni();
      }
stopAniEventHandler(param1){
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
