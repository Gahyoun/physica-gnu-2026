import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-ab0c9d27902bfe9d.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 699.9961853027344, "height": 250.00433349609375}, "symbol1": {"x": -652.65, "y": -471.6, "width": 701.1, "height": 251.05}, "symbol2": {"x": -659.6, "y": -245.7, "width": 701.05, "height": 251.1}, "showRayChk": {"x": 5.4, "y": 256.3, "width": 73.00445556640625, "height": 13}, "showFrontChk": {"x": 94.4, "y": 256.3, "width": 73.00445556640625, "height": 13}, "resetBtn": {"x": 624.3, "y": 251.3, "width": 70.0042724609375, "height": 20}, "marker": {"x": -16, "y": 231.95, "width": 9, "height": 9.0186767578125}, "modeChangeChk": {"x": 540.6, "y": 256.3, "width": 73.00445556640625, "height": 13}}, "id": "flash-84d5263a3db489ee", "source": "focalgrinsim3.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/light/ray/focalgrinsim3.swf", "title": "신기루", "lesson": "5-1-2-3", "width": 700, "height": 270, "animated": true, "controls": [], "checks": [{"clip": "showRayChk", "label": "광선 보기", "value": false}, {"clip": "showFrontChk", "label": "파면 보기", "value": false}, {"clip": "modeChangeChk", "label": "모드 변경", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "selects": [], "drag": false, "sourceSha256": "1ffc1d8b1716030712af3b4c42123b0ba4b2579afb24d1d64d01051d40e8850a", "kernelSha256": "ab0c9d27902bfe9d0e9f1e9cca604f472e27683f10ced1482e68efaf9aaccdac", "kernelModule": "optics-batch50b-kernel-ab0c9d27902bfe9d.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "f628e5cfc69f2d6ba3b20e8e316c6e5d9775cb6393234438ee19d0a2993f8b1a"}, {"path": "RayTracer/EGraphics.as", "sha256": "404fa0711e2d2cbfaa14b495ebb36ecfb9d5f0dceec92520d1e3e5a5da587d38"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/GRIN2.as", "sha256": "a853a87a7eba3517e9f60c3c5ae45deee58602c10ca6a056655d758b51e4c84a"}, {"path": "RayTracer/IndexField.as", "sha256": "3c35376b576f2aadc98a6d34944b90cde5f6cf43bae00ee7e8470c9b39a09b6f"}, {"path": "RayTracer/LineStyle.as", "sha256": "1669de231465a75fb1f188d4041a013d721737973b4a82007e106ff50ac1141d"}, {"path": "RayTracer/Point2D.as", "sha256": "1aad18a5eb74a61459ee82f0bbd7081d60b36f51ccfffb94a0d600bbae5f6b1b"}, {"path": "RayTracer/Prototype.as", "sha256": "b0bc8dae9fac5c61cd79a070cf02e38a2d3c83880756c4b52fd8759674f78122"}, {"path": "RayTracer/RayTrace.as", "sha256": "03f571e9f4a7d799a04ea7e1ab1b1532d20cb99f9b78c536edeef6fe81a60b2b"}, {"path": "RayTracer/Rindex.as", "sha256": "f40728fcfe8d32b121de02d9932500430004c55af7ac07a8aad8e663d7634d8e"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a8a5220b3734ca00e4de626a36d3c7949910aa0eee006779cf5da28d122c2761"}, {"path": "RayTracer/WaveFront.as", "sha256": "739fda919fb15315146b738bef78ed894c65de9ae0d61b1b0fd795648075f10c"}], "methods": ["MainTimeline", "Init", "setWhiteBG", "InitInstrument", "modeSetting", "InitWave", "indexReset", "aniReset", "stopAniEventHandler", "ButtonEventHandler", "CheckBoxEventHandler", "CheckBoxEventHandler2", "InitCtrl", "frame1"], "programModule": "optics-batch50b-program-flash-84d5263a3db489ee.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,GRIN2,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,WaveFront}=createKernel();
class MainTimeline extends Sprite {
modeChangeChk = new Sprite();
symbol1 = new Sprite();
symbol2 = new Sprite();
mk = new Sprite();
resetBtn = new Sprite();
showFrontChk = new Sprite();
marker = new Sprite();
showRayChk = new Sprite();
xOrigin = 0;
yOrigin = 0;
numOfPoint = 0;
wavefrontStep0 = 0;
pt = new Sprite();
canvas = new Sprite();
backGraphics = new Sprite();
gr = new Sprite();
wf = new Sprite();
indexField = new Sprite();
aniMode = 0;
t1 = new Sprite();
xposi = 0;
yposi = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_showRayChk_();
         this.__setProp_showFrontChk_();
         this.__setProp_resetBtn_();
         this.__setProp_modeChangeChk_();
      }
Init(){
         this.setWhiteBG(true);
         this.InitCtrl();
         this.InitInstrument();
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
InitInstrument(){
         this.t1 = new GRIN2();
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.indexField.AddInstrument(this.t1);
         this.indexField.Draw();
      }
modeSetting(){
         this.aniReset();
         this.InitWave();
         this.symbol1.x = -2000;
         this.symbol2.x = -2000;
         if(this.modeChangeChk.isChecked)
         {
            this.t1.modex = true;
            this.symbol1.x = 0;
            this.symbol1.y = 0;
         }
         else
         {
            this.t1.modex = false;
            this.symbol2.x = 0;
            this.symbol2.y = 0;
         }
      }
InitWave(){
         if(Math.random() > 0.5)
         {
            this.aniMode = 1;
         }
         else
         {
            this.aniMode = 0;
         }
         if(this.modeChangeChk.isChecked)
         {
            this.yposi = 40;
            this.xposi = -20;
         }
         else
         {
            this.yposi = 232;
            this.xposi = -20;
         }
         this.marker.x = this.xOrigin - this.xposi;
         this.marker.y = this.yOrigin - this.yposi;
         let _loc1_ = -Math.PI * 1 / 6;
         this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,1.5,5);
         if(this.modeChangeChk.isChecked)
         {
            this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_ + 0.5,1.5,5);
         }
         let _loc2_ = Math.floor(this.numOfPoint / 2);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),3);
      }
indexReset(){
         this.aniReset();
      }
aniReset(){
         this.pt.clearWaveFront();
         this.InitWave();
         this.pt.startAni();
      }
stopAniEventHandler(param1){
      }
ButtonEventHandler(param1){
         if(param1.target == this.resetBtn)
         {
            this.indexReset();
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
CheckBoxEventHandler2(param1){
         if(param1.target == this.modeChangeChk)
         {
            this.modeSetting();
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
__setProp_showRayChk_(){
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
         this.showRayChk.fontColor = 3355443;
         this.showRayChk.fontEmbed = false;
         this.showRayChk.fontName = "_sans";
         this.showRayChk.fontOnColor = 13369548;
         this.showRayChk.fontSize = 12;
         this.showRayChk.boxHeight = 12;
         this.showRayChk.lineColor = 3355443;
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
__setProp_showFrontChk_(){
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
         this.showFrontChk.fontColor = 3355443;
         this.showFrontChk.fontEmbed = false;
         this.showFrontChk.fontName = "_sans";
         this.showFrontChk.fontOnColor = 13369548;
         this.showFrontChk.fontSize = 12;
         this.showFrontChk.boxHeight = 12;
         this.showFrontChk.lineColor = 3355443;
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
__setProp_resetBtn_(){
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
         this.resetBtn.boxHeight = 18;
         this.resetBtn.lineColor = 13421772;
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
__setProp_modeChangeChk_(){
         try
         {
            this.modeChangeChk["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.modeChangeChk.checkColor = 16711680;
         this.modeChangeChk.checkStyle = 1;
         this.modeChangeChk.checkThickness = 2;
         this.modeChangeChk.isChecked = false;
         this.modeChangeChk.enabled = true;
         this.modeChangeChk.fontBold = true;
         this.modeChangeChk.fontColor = 3355443;
         this.modeChangeChk.fontEmbed = false;
         this.modeChangeChk.fontName = "_sans";
         this.modeChangeChk.fontOnColor = 13369548;
         this.modeChangeChk.fontSize = 12;
         this.modeChangeChk.boxHeight = 12;
         this.modeChangeChk.lineColor = 3355443;
         this.modeChangeChk.lineThickness = 2;
         this.modeChangeChk.text = "모드 변경";
         this.modeChangeChk.visible = true;
         this.modeChangeChk.boxWidth = 60;
         try
         {
            this.modeChangeChk["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
frame1(){
         this.xOrigin = 10;
         this.yOrigin = 250;
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
         this.indexField = this.pt.indexField;
         this.aniMode = 0;
         this.Init();
         this.indexReset();
         this.modeSetting();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.modeChangeChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler2);
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
