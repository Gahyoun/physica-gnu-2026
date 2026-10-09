import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest } from './optics-batch50-adapter.mjs';
import {createKernel} from './optics-batch50-kernel-92ed958d3a7c87a7.mjs';
const SPEC={"placements": {"resetBtn": {"x": 647.4, "y": 374.85, "width": 70.00534057617188, "height": 20}, "R1Txt": {"x": 30.55, "y": -1.25, "width": null, "height": null}, "imageTxt": {"x": 384.9, "y": 0.3, "width": null, "height": null}, "R2Txt": {"x": 91.6, "y": -1.25, "width": null, "height": null}, "principalTxt": {"x": 166.95, "y": 0.3, "width": null, "height": null}, "thicknessTxt": {"x": 67, "y": 13.85, "width": null, "height": null}, "image2Txt": {"x": 384.9, "y": 201, "width": null, "height": null}, "principal2Txt": {"x": 164.95, "y": 201, "width": null, "height": null}}, "id": "flash-941179ccb1460a21", "source": "focal2Thicklens1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/thicklens/focal2Thicklens1.swf", "title": "두꺼운 렌즈의 주요면", "lesson": "5-2-8-1", "width": 720, "height": 400, "animated": true, "controls": [], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "drag": false, "sourceSha256": "c01fad1cb2c8473f35af7d1a8d36bc91f913f81be31215cf28d1e175ca0feb8a", "kernelSha256": "92ed958d3a7c87a7ba8f05dcfbc95810488d41087ba21509206bd12c5310a5d7", "kernelModule": "optics-batch50-kernel-92ed958d3a7c87a7.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "f628e5cfc69f2d6ba3b20e8e316c6e5d9775cb6393234438ee19d0a2993f8b1a"}, {"path": "RayTracer/EGraphics.as", "sha256": "404fa0711e2d2cbfaa14b495ebb36ecfb9d5f0dceec92520d1e3e5a5da587d38"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "3c35376b576f2aadc98a6d34944b90cde5f6cf43bae00ee7e8470c9b39a09b6f"}, {"path": "RayTracer/LineStyle.as", "sha256": "1669de231465a75fb1f188d4041a013d721737973b4a82007e106ff50ac1141d"}, {"path": "RayTracer/Point2D.as", "sha256": "1aad18a5eb74a61459ee82f0bbd7081d60b36f51ccfffb94a0d600bbae5f6b1b"}, {"path": "RayTracer/Prototype.as", "sha256": "b0bc8dae9fac5c61cd79a070cf02e38a2d3c83880756c4b52fd8759674f78122"}, {"path": "RayTracer/RayTrace.as", "sha256": "03f571e9f4a7d799a04ea7e1ab1b1532d20cb99f9b78c536edeef6fe81a60b2b"}, {"path": "RayTracer/Rindex.as", "sha256": "f40728fcfe8d32b121de02d9932500430004c55af7ac07a8aad8e663d7634d8e"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a8a5220b3734ca00e4de626a36d3c7949910aa0eee006779cf5da28d122c2761"}, {"path": "RayTracer/ThickLens.as", "sha256": "39af072ac62dae8a0d03a72d05a7d990a2f70c0523d3c3e4c1394fe4ad4e6632"}, {"path": "RayTracer/WaveFront.as", "sha256": "739fda919fb15315146b738bef78ed894c65de9ae0d61b1b0fd795648075f10c"}], "methods": ["MainTimeline", "Init", "setWhiteBG", "InitInstrument", "InitWave", "indexReset", "aniReset", "stopAniEventHandler", "stopAniEventHandler2", "ButtonEventHandler", "setRand", "frame1"], "programModule": "optics-batch50-program-flash-941179ccb1460a21.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
R1Txt = new Sprite();
principal2Txt = new Sprite();
principalTxt = new Sprite();
resetBtn = new Sprite();
image2Txt = new Sprite();
thicknessTxt = new Sprite();
imageTxt = new Sprite();
R2Txt = new Sprite();
xOrigin = 0;
yOrigin = 0;
xOrigin2 = 0;
yOrigin2 = 0;
numOfPoint = 0;
wavefrontStep0 = 0;
pt = new Sprite();
pt2 = new Sprite();
canvas = new Sprite();
canvas2 = new Sprite();
backGraphics = new Sprite();
gr = new Sprite();
wf = new Sprite();
wf2 = new Sprite();
simMode = 0;
wfAux = new Sprite();
indexField = new Sprite();
wfAux2 = new Sprite();
indexField2 = new Sprite();
t1 = new Sprite();
n = 0;
xposi = 0;
yposi = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_resetBtn_();
      }
Init(){
         this.setWhiteBG(true);
         this.InitInstrument();
         this.wf.isShowRay = true;
         this.wf.isShowFront = false;
         this.wf2.isShowRay = true;
         this.wf2.isShowFront = false;
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-100,720,200);
         this.indexField2.boundRect = new Rectangle(-this.xOrigin2,-100,720,200);
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         this.pt2.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
            this.wfAux.defaultRayLineStyle = new LineStyle(2,16711935,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,26112,1);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16720418,1,false,LineScaleMode.NONE);
            this.wfAux.defaultRayLineStyle = new LineStyle(2,11141290,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,47872,1);
         }
         if(param1)
         {
            this.wf2.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
            this.wfAux2.defaultRayLineStyle = new LineStyle(2,16711935,1,false,LineScaleMode.NONE);
            this.wf2.frontLineStyle = new LineStyle(1,26112,1);
         }
         else
         {
            this.wf2.defaultRayLineStyle = new LineStyle(1,16720418,1,false,LineScaleMode.NONE);
            this.wfAux2.defaultRayLineStyle = new LineStyle(2,11141290,1,false,LineScaleMode.NONE);
            this.wf2.frontLineStyle = new LineStyle(1,47872,1);
         }
      }
InitInstrument(){
         this.t1 = new ThickLens(this.n,200,-400,100,180);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.indexField.AddInstrument(this.t1);
         this.indexField2.AddInstrument(this.t1);
         this.setRand();
      }
InitWave(){
         this.gr.clear();
         this.gr.lineStyle(1,8421504,1);
         this.gr.moveTo(0,this.yOrigin);
         this.gr.lineTo(this.width,this.yOrigin);
         this.gr.moveTo(0,this.yOrigin2);
         this.gr.lineTo(this.width,this.yOrigin2);
         this.gr.moveTo(this.xOrigin,0);
         this.gr.lineTo(this.xOrigin,this.height);
         this.gr.moveTo(0,0);
         this.wf.SetParallelWave(-this.xOrigin + 10,0,0,102);
         this.wf2.SetParallelWave(710 - this.xOrigin,0,Math.PI,102);
         let _loc1_ = Math.floor(this.numOfPoint / 2);
         this.wfAux.ray[0].p.movePt(this.wf.ray[_loc1_ - 1].p);
         this.wfAux.ray[1].p.movePt(this.wf.ray[_loc1_].p);
         this.wfAux.ray[2].p.movePt(this.wf.ray[_loc1_ + 1].p);
         this.wfAux.SetInside();
         this.wfAux2.ray[0].p.movePt(this.wf2.ray[_loc1_ - 1].p);
         this.wfAux2.ray[1].p.movePt(this.wf2.ray[_loc1_].p);
         this.wfAux2.ray[2].p.movePt(this.wf2.ray[_loc1_ + 1].p);
         this.wfAux2.SetInside();
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),5);
         this.wf2.ShowRayStatus(25,new LineStyle(2,16711935,1),5);
      }
indexReset(){
         let _loc1_ = Math.abs(this.t1.R1) >= ThickLens.flatCriterior ? "무한대" : this.t1.R1.toString();
         let _loc2_ = Math.abs(this.t1.R2) >= ThickLens.flatCriterior ? "무한대" : this.t1.R2.toString();
         this.R1Txt.text = _loc1_;
         this.R2Txt.text = _loc2_;
         this.thicknessTxt.text = this.t1.thickness;
         this.indexField.Draw();
         this.indexField2.Draw();
         this.aniReset();
      }
aniReset(){
         this.imageTxt.text = "";
         this.principalTxt.text = "";
         this.image2Txt.text = "";
         this.principal2Txt.text = "";
         this.pt.clearWaveFront();
         this.pt2.clearWaveFront();
         this.InitWave();
         this.pt.startAni();
         this.pt2.startAni();
      }
stopAniEventHandler(param1){
         let _loc2_ = this.wf.FindCrossSectionWithBackup(true,true,80);
         if(_loc2_ != null)
         {
            this.principalTxt.text = "제 2주요면 x 좌표: " + Math.round(_loc2_.x * 10) / 10;
         }
         else
         {
            this.principalTxt.text = "";
         }
         if(this.pt.imagePosition.dir != 999)
         {
            this.imageTxt.text = "상: (" + this.pt.imagePosition.x + ", " + this.pt.imagePosition.y + ")";
         }
      }
stopAniEventHandler2(param1){
         let _loc2_ = this.wf2.FindCrossSectionWithBackup(true,true,80);
         if(_loc2_ != null)
         {
            this.principal2Txt.text = "제 1주요면 x 좌표: " + Math.round(_loc2_.x * 10) / 10;
         }
         else
         {
            this.principal2Txt.text = "";
         }
         if(this.pt2.imagePosition.dir != 999)
         {
            this.image2Txt.text = "상: (" + this.pt2.imagePosition.x + ", " + this.pt2.imagePosition.y + ")";
         }
      }
ButtonEventHandler(param1){
         if(param1.target == this.resetBtn)
         {
            this.setRand();
         }
      }
setRand(){
         let _loc1_ = NaN;
         let _loc2_ = NaN;
         this.t1.thickness = Math.round(25 + Math.random() * 50);
         do
         {
            _loc1_ = -150 + Math.random() * 300;
            if(_loc1_ == 0)
            {
               _loc1_ = 1;
            }
            _loc2_ = Math.round(10000 / _loc1_);
            this.t1.R1 = _loc2_;
            _loc1_ = -150 + Math.random() * 300;
            if(_loc1_ == 0)
            {
               _loc1_ = 1;
            }
            _loc2_ = Math.round(10000 / _loc1_);
            this.t1.R2 = _loc2_;
         }
         while(Math.abs(this.t1.focalLength()) > 750);
         this.indexReset();
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
         this.xOrigin = 360;
         this.yOrigin = 100;
         this.xOrigin2 = 360;
         this.yOrigin2 = 300;
         this.numOfPoint = 35;
         this.wavefrontStep0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt2 = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin2);
         this.pt2.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler2);
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.canvas2 = this.pt2.background;
         this.addChild(this.canvas2);
         this.addChild(this.resetBtn);
         this.addChild(this.principalTxt);
         this.addChild(this.imageTxt);
         this.addChild(this.R1Txt);
         this.addChild(this.R2Txt);
         this.addChild(this.thicknessTxt);
         this.addChild(this.principal2Txt);
         this.addChild(this.image2Txt);
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.wf = this.pt.wf;
         this.wf2 = this.pt2.wf;
         this.simMode = 2;
         this.wfAux = this.pt.wfAux;
         this.indexField = this.pt.indexField;
         this.wfAux2 = this.pt2.wfAux;
         this.indexField2 = this.pt2.indexField;
         this.n = 1.5;
         this.Init();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
