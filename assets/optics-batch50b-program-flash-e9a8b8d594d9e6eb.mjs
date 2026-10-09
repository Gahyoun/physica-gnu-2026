import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-854192265c1537d3.mjs';
const SPEC={"placements": {"startBtn": {"x": 523.25, "y": 220, "width": 70.00534057617188, "height": 20}, "resetBtn": {"x": 523.25, "y": 196.8, "width": 70.00534057617188, "height": 20}, "ccd": {"x": 8, "y": 225, "width": 505, "height": 90.5}, "planeTxt": {"x": 517.95, "y": 176, "width": null, "height": null}}, "id": "flash-e9a8b8d594d9e6eb", "source": "simMicrolens1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/grinetc/simMicrolens1.swf", "title": "미소 렌즈 배열에서 파면의 측정", "lesson": "5-2-9-3", "width": 570, "height": 250, "animated": true, "controls": [], "checks": [], "buttons": [{"clip": "startBtn", "label": "시작", "alternate": "정지", "toggle": true}, {"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "selects": [], "drag": false, "sourceSha256": "17c842a095b5eda9d7952ade6b4c0356e6ccc2d7ba9998ceea2bd005dd7975e2", "kernelSha256": "854192265c1537d319fc1dd84f9af6f1db30d229f2cdfcd1b6d90a5692a6928a", "kernelModule": "optics-batch50b-kernel-854192265c1537d3.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/MicroLens.as", "sha256": "c8041f3c0e192e06ecd1fc95449d859197088e48b14b08a54eefee1b04df0de3"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "Init", "InitInstrument", "InitWave", "frame1", "setWhiteBG", "ButtonEventHandler", "aniReset", "stopAniEventHandler"], "programModule": "optics-batch50b-program-flash-e9a8b8d594d9e6eb.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,MicroLens,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,WaveFront}=createKernel();
class MainTimeline extends Sprite {
ccd = new Sprite();
pt = new Sprite();
wavefrontStep0 = 0;
indexField = new Sprite();
canvas = new Sprite();
planeTxt = new Sprite();
startBtn = new Sprite();
resetBtn = new Sprite();
numOfPoint = 0;
xOrigin = 0;
wf = new Sprite();
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_startBtn__1();
         this.__setProp_resetBtn__1();
      }
Init(){
         this.setWhiteBG(true);
         this.InitInstrument();
         this.aniReset();
      }
InitInstrument(){
         this.t1 = new MicroLens(1.5,75,6,504);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = Math.PI / 2;
         this.indexField.AddInstrument(this.t1);
         this.indexField.Draw();
         this.indexField.boundRect = new Rectangle(-260,-75,520,225);
      }
__setProp_startBtn__1(){
         try
         {
            this.startBtn["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.startBtn.backOffColor = 21947;
         this.startBtn.backOnColor = 22015;
         this.startBtn.backOverColor = 13369548;
         this.startBtn.enabled = true;
         this.startBtn.fontBold = true;
         this.startBtn.fontColor = 14548957;
         this.startBtn.fontEmbed = false;
         this.startBtn.fontName = "_sans";
         this.startBtn.fontSize = 12;
         this.startBtn.boxHeight = 20;
         this.startBtn.lineColor = 8421504;
         this.startBtn.lineThickness = 1;
         this.startBtn.isON = false;
         this.startBtn.skin = 0;
         this.startBtn.textOFF = "시작";
         this.startBtn.textON = "정지";
         this.startBtn.isToggle = true;
         this.startBtn.visible = true;
         this.startBtn.boxWidth = 40;
         try
         {
            this.startBtn["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
InitWave(){
         let _loc1_ = 0;
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         let _loc4_ = NaN;
         let _loc5_ = NaN;
         if(Math.random() < 0.7)
         {
            _loc2_ = Math.random() * 100;
            _loc3_ = Math.random() * 10;
            _loc4_ = (Math.random() + 1) * 7.5;
            _loc5_ = Math.random() / 2;
            _loc1_ = int(0);
            while(_loc1_ < this.numOfPoint)
            {
               this.wf.ray[_loc1_].p.y = this.yOrigin - 20 + (_loc2_ * Math.sin(_loc3_ + _loc1_ / _loc4_) + _loc5_ * (-_loc1_ + 30)) / 7;
               this.wf.ray[_loc1_].p.x = -this.xOrigin + 10 + 5 * _loc1_;
               this.wf.ray[_loc1_].connect = true;
               this.wf.ray[_loc1_].isOut = false;
               _loc1_++;
            }
            this.planeTxt.text = "";
         }
         else
         {
            _loc1_ = int(0);
            while(_loc1_ < this.numOfPoint)
            {
               this.wf.ray[_loc1_].p.y = this.yOrigin - 20;
               this.wf.ray[_loc1_].p.x = -this.xOrigin + 10 + 5 * _loc1_ + 0.5;
               this.wf.ray[_loc1_].connect = true;
               this.wf.ray[_loc1_].isOut = false;
               _loc1_++;
            }
            this.planeTxt.text = "평면파";
         }
         this.wf.CalcDirByFrontAll();
         this.wf.ShowWaveFront();
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
         this.resetBtn.boxWidth = 40;
         try
         {
            this.resetBtn["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
frame1(){
         this.xOrigin = 260;
         this.yOrigin = 150;
         this.numOfPoint = 101;
         this.wavefrontStep0 = 7.5;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.canvas.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.addChild(this.pt.instrumentCanvas);
         this.addChild(this.pt.rayCanvas);
         this.addChild(this.startBtn);
         this.addChild(this.resetBtn);
         this.addChild(this.ccd);
         this.pt.aniDelay = 50;
         this.pt.hyugenceMode = 0;
         this.pt.aniMode = 1;
         this.wf = this.pt.wf;
         this.indexField = this.pt.indexField;
         this.wf.isShowRay = true;
         this.wf.isShowFront = true;
         this.Init();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,26112,1);
            this.wf.huyLineStyle = new LineStyle(1,13369548,1,false,LineScaleMode.NONE);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16720418,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,47872,1);
            this.wf.huyLineStyle = new LineStyle(1,16711935,1,false,LineScaleMode.NONE);
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
aniReset(){
         this.pt.stopAni();
         this.startBtn.isON = false;
         this.pt.clearWaveFront();
         this.InitWave();
         this.startBtn.visible = true;
      }
stopAniEventHandler(param1){
         this.startBtn.isON = false;
         this.startBtn.visible = false;
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
