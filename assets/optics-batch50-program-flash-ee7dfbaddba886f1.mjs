import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest } from './optics-batch50-adapter.mjs';
import {createKernel} from './optics-batch50-kernel-8bfa72046f6cac7a.mjs';
const SPEC={"placements": {"resetBtn": {"x": 427.4, "y": 227.9, "width": 70.00534057617188, "height": 20}, "R1Txt": {"x": 30.55, "y": -1.25, "width": null, "height": null}, "imageTxt": {"x": 384.9, "y": 0.3, "width": null, "height": null}, "R2Txt": {"x": 91.6, "y": -1.25, "width": null, "height": null}, "principalTxt": {"x": 181, "y": 0.3, "width": null, "height": null}, "thicknessTxt": {"x": 67, "y": 13.85, "width": null, "height": null}}, "id": "flash-ee7dfbaddba886f1", "source": "focalThicklens1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/thicklens/focalThicklens1.swf", "title": "두꺼운 렌즈의 제1주요면", "lesson": "5-2-8-1", "width": 500, "height": 250, "animated": true, "controls": [], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "drag": false, "sourceSha256": "d40612f34a8c066f989c786e79608cc1b75aa67577f7651e0a2d414e1b304aa4", "kernelSha256": "8bfa72046f6cac7ae42027c28f00ddc51ac98fb6742a87d01f93c977cf8dd220", "kernelModule": "optics-batch50-kernel-8bfa72046f6cac7a.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/ThickLens.as", "sha256": "4a1cac58e49cb14efa2c3812440ecda60ce822a9d0cbff066e5a242f4dcf65c4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "InitInstrument", "Init", "InitWave", "frame1", "setWhiteBG", "indexReset", "ButtonEventHandler", "setRand", "aniReset", "stopAniEventHandler"], "programModule": "optics-batch50-program-flash-ee7dfbaddba886f1.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
imageTxt = new Sprite();
xposi = 0;
simMode = 0;
R2Txt = new Sprite();
t1 = new Sprite();
wavefrontStep0 = 0;
indexField = new Sprite();
canvas = new Sprite();
thicknessTxt = new Sprite();
principalTxt = new Sprite();
wfAux = new Sprite();
yposi = 0;
numOfPoint = 0;
backGraphics = new Sprite();
resetBtn = new Sprite();
xOrigin = 0;
n = 0;
wf = new Sprite();
R1Txt = new Sprite();
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_resetBtn__1();
      }
InitInstrument(){
         this.t1 = new ThickLens(this.n,200,-400,100,240);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.setRand();
         this.indexField.AddInstrument(this.t1);
         this.indexField.Draw();
      }
Init(){
         this.setWhiteBG(true);
         this.InitInstrument();
         this.wf.isShowRay = true;
         this.wf.isShowFront = false;
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
         else
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
         this.xOrigin = 300;
         this.yOrigin = 125;
         this.numOfPoint = 25;
         this.wavefrontStep0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.addChild(this.resetBtn);
         this.addChild(this.principalTxt);
         this.addChild(this.imageTxt);
         this.addChild(this.R1Txt);
         this.addChild(this.R2Txt);
         this.addChild(this.thicknessTxt);
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.wf = this.pt.wf;
         this.simMode = 1;
         this.wfAux = this.pt.wfAux;
         this.indexField = this.pt.indexField;
         this.n = 1.5;
         this.Init();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
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
         }
      }
indexReset(){
         let _loc1_ = null;
         let _loc2_ = null;
         _loc1_ = Math.abs(this.t1.R1) >= ThickLens.flatCriterior ? "무한대" : this.t1.R1.toString();
         _loc2_ = Math.abs(this.t1.R2) >= ThickLens.flatCriterior ? "무한대" : this.t1.R2.toString();
         this.R1Txt.text = _loc1_;
         this.R2Txt.text = _loc2_;
         this.thicknessTxt.text = this.t1.thickness;
         this.indexField.Draw();
         this.aniReset();
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
         this.t1.thickness = Math.round(50 + Math.random() * 100);
         _loc1_ = -100 + Math.random() * 200;
         if(_loc1_ == 0)
         {
            _loc1_ = 1;
         }
         _loc2_ = Math.round(10000 / _loc1_);
         this.t1.R1 = _loc2_;
         _loc1_ = -100 + Math.random() * 200;
         if(_loc1_ == 0)
         {
            _loc1_ = 1;
         }
         _loc2_ = Math.round(10000 / _loc1_);
         this.t1.R2 = _loc2_;
         this.indexReset();
      }
aniReset(){
         this.imageTxt.text = "";
         this.principalTxt.text = "";
         this.pt.clearWaveFront();
         this.InitWave();
         this.pt.startAni();
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
            else
            {
               this.principalTxt.text = "제 2주요면 x 좌표: " + Math.round(_loc2_.x * 10) / 10;
            }
         }
         else
         {
            this.principalTxt.text = "";
         }
         if(this.simMode == 2)
         {
            this.imageTxt.text = this.pt.statusExplanation;
         }
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
