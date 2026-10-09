import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-8bfa72046f6cac7a.mjs';
const SPEC={"placements": {"resetBtn": {"x": 524.4, "y": 275.9, "width": 70.00534057617188, "height": 20}, "R1Txt": {"x": 163.5, "y": 284.25, "width": null, "height": null}, "R2Txt": {"x": 240.55, "y": 284.25, "width": null, "height": null}, "thicknessTxt": {"x": 67, "y": 284.25, "width": null, "height": null}, "causticTxt": {"x": -77.85, "y": -29.95, "width": 52.9, "height": 14}, "angleTxt": {"x": 385.55, "y": 285.35, "width": null, "height": null}}, "id": "flash-07388eb4da3a86fe", "source": "aberComa1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/aberration/aberComa1.swf", "title": "렌즈의 코마수차", "lesson": "5-2-10-2", "width": 600, "height": 300, "animated": true, "controls": [], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "selects": [], "drag": false, "sourceSha256": "32aacc5ca72d9c6afd2e5686af9a8d24a945bc9c8733dc6c15556001adebcfea", "kernelSha256": "8bfa72046f6cac7ae42027c28f00ddc51ac98fb6742a87d01f93c977cf8dd220", "kernelModule": "optics-batch50b-kernel-8bfa72046f6cac7a.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/ThickLens.as", "sha256": "4a1cac58e49cb14efa2c3812440ecda60ce822a9d0cbff066e5a242f4dcf65c4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "InitInstrument", "Init", "InitWave", "setWhiteBG", "frame1", "indexReset", "ButtonEventHandler", "setRand", "aniReset", "stopAniEventHandler"], "programModule": "optics-batch50b-program-flash-07388eb4da3a86fe.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
xposi = 0;
R2Txt = new Sprite();
t1 = new Sprite();
wavefrontStep0 = 0;
indexField = new Sprite();
canvas = new Sprite();
thicknessTxt = new Sprite();
n = 0;
yposi = 0;
numOfPoint = 0;
angleTxt = new Sprite();
backGraphics = new Sprite();
midPoint = new Sprite();
resetBtn = new Sprite();
causticTxt = new Sprite();
xOrigin = 0;
wf = new Sprite();
R1Txt = new Sprite();
angle = 0;
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_resetBtn__1();
      }
InitInstrument(){
         this.t1 = new ThickLens(this.n,200,-400,200,350);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = Math.PI / 8;
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
InitWave(){
         this.gr.clear();
         this.gr.lineStyle = new LineStyle(1,3355443,1);
         this.gr.drawLine(-this.xOrigin,0,600 - this.xOrigin,0);
         this.gr.drawLine(this.t1.p.x,-this.yOrigin,this.t1.p.x,this.yOrigin);
         this.gr.lineStyle = new LineStyle(1,8421504,1);
         this.gr.drawLine(this.t1.p.x + this.t1.length / 2 * Math.sin(this.t1.p.dir),this.t1.p.y - this.t1.length / 2 * Math.cos(this.t1.p.dir),this.t1.p.x - this.t1.length / 2 * Math.sin(this.t1.p.dir),this.t1.p.y + this.t1.length / 2 * Math.cos(this.t1.p.dir));
         this.gr.drawLine(this.t1.p.x - 500 * Math.cos(this.t1.p.dir),this.t1.p.y - 500 * Math.sin(this.t1.p.dir),this.t1.p.x + 500 * Math.cos(this.t1.p.dir),this.t1.p.y + 500 * Math.sin(this.t1.p.dir));
         this.wf.SetParallelWave(-this.xOrigin + 10,0,0,250);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),5);
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,34816,1,false,LineScaleMode.NONE);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,43520,1,false,LineScaleMode.NONE);
         }
      }
frame1(){
         this.xOrigin = 300;
         this.yOrigin = 146;
         this.numOfPoint = 51;
         this.midPoint = Math.floor(this.numOfPoint / 2);
         this.wavefrontStep0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin,1);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt.aniMode = 1;
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.backGraphics = new Sprite();
         this.gr = new EGraphics(this.backGraphics.graphics,this.pt.screenCoord);
         this.addChild(this.backGraphics);
         this.addChild(this.resetBtn);
         this.addChild(this.R1Txt);
         this.addChild(this.R2Txt);
         this.addChild(this.thicknessTxt);
         this.addChild(this.angleTxt);
         this.addChild(this.causticTxt);
         this.wf = this.pt.wf;
         this.indexField = this.pt.indexField;
         this.n = 1.5;
         this.Init();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
      }
indexReset(){
         let _loc1_ = null;
         let _loc2_ = null;
         _loc1_ = Math.abs(this.t1.R1) >= ThickLens.flatCriterior ? "무한대" : this.t1.R1.toString();
         _loc2_ = Math.abs(this.t1.R2) >= ThickLens.flatCriterior ? "무한대" : this.t1.R2.toString();
         this.R1Txt.text = _loc1_;
         this.R2Txt.text = _loc2_;
         this.angleTxt.text = -this.angle + " 도";
         this.thicknessTxt.text = Math.round(this.t1.thickness * 100) / 100;
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
         this.t1.thickness = 200;
         do
         {
            _loc1_ = -100 + Math.random() * 200;
            if(Math.abs(_loc1_) < 10)
            {
               _loc1_ = 1;
            }
            _loc2_ = Math.round(10000 / _loc1_);
            if(Math.random() > 0.7 && _loc2_ < 0)
            {
               _loc2_ = -_loc2_;
            }
            this.t1.R1 = _loc2_;
            _loc1_ = -100 + Math.random() * 200;
            if(Math.abs(_loc1_) < 10)
            {
               _loc1_ = 1;
            }
            _loc2_ = Math.round(10000 / _loc1_);
            if(Math.random() > 0.7 && _loc2_ > 0)
            {
               _loc2_ = -_loc2_;
            }
            this.t1.R2 = _loc2_;
         }
         while(this.t1.effectiveYsize < 150 || Math.abs(this.t1.focalLength()) > 450 || Math.abs(this.t1.focalLength()) < 400);
         if(this.t1.focalLength() > 0)
         {
            this.t1.p.x = -160;
         }
         else
         {
            this.t1.p.x = 160;
         }
         this.t1.makeThinner();
         do
         {
            this.angle = Math.round(-30 + 60 * Math.random());
         }
         while(Math.abs(this.angle) < 10);
         this.t1.p.dir = this.angle * Math.PI / 180;
         this.indexReset();
      }
aniReset(){
         this.pt.clearWaveFront();
         this.InitWave();
         this.causticTxt.x = -1000;
         this.pt.startAni();
      }
stopAniEventHandler(param1){
         let _loc2_ = 0;
         let _loc3_ = null;
         let _loc4_ = null;
         let _loc5_ = null;
         let _loc6_ = false;
         let _loc7_ = 0;
         let _loc8_ = NaN;
         if(this.t1.focalLength() < 0)
         {
            this.wf.DrawRayExtendLine(0,2,false);
         }
         _loc6_ = true;
         this.gr.lineStyle = new LineStyle(2,16711935,1,false,LineScaleMode.NONE);
         _loc2_ = int(0);
         while(_loc2_ < this.numOfPoint - 1)
         {
            _loc3_ = this.wf.ray[_loc2_];
            _loc4_ = this.wf.ray[_loc2_ + 1];
            if(_loc3_.countReflection == 0 && _loc3_.countRefraction == 2 && _loc4_.countReflection == 0 && _loc4_.countRefraction == 2)
            {
               _loc5_ = _loc3_.p.findCrossSection(_loc4_.p);
               if(_loc6_)
               {
                  this.gr.moveTo(_loc5_.x,_loc5_.y);
                  _loc6_ = false;
               }
               else
               {
                  this.gr.lineTo(_loc5_.x,_loc5_.y);
               }
            }
            _loc2_++;
         }
         this.gr.moveTo(0,0);
         this.gr.lineStyle = new LineStyle(0,0,0);
         this.gr.fillStyle = new FillStyle(16711935,1);
         _loc7_ = int(this.numOfPoint);
         _loc2_ = int(0);
         while(_loc2_ < this.numOfPoint - 1)
         {
            _loc3_ = this.wf.ray[_loc2_];
            _loc4_ = this.wf.ray[_loc2_ + 1];
            if(_loc3_.countReflection == 0 && _loc3_.countRefraction == 2 && _loc4_.countReflection == 0 && _loc4_.countRefraction == 2)
            {
               _loc7_ = int(Math.min(_loc7_,_loc2_));
               _loc5_ = _loc3_.p.findCrossSection(_loc4_.p);
               this.gr.drawCircle(_loc5_.x,_loc5_.y,1,true);
            }
            _loc2_++;
         }
         this.gr.moveTo(0,0);
         _loc3_ = this.wf.ray[_loc7_ + 2];
         _loc4_ = this.wf.ray[_loc7_ + 3];
         _loc5_ = _loc3_.p.findCrossSection(_loc4_.p);
         this.gr.lineStyle = new LineStyle(1,8421504,1);
         _loc8_ = this.t1.focalLength() > 0 ? 20 : -20;
         this.gr.drawLine(_loc5_.x,_loc5_.y,_loc5_.x + _loc8_,_loc5_.y - 20);
         _loc5_ = this.pt.screenCoord.getScreenCoord(new Point2D(_loc5_.x + _loc8_,_loc5_.y - 20));
         this.causticTxt.x = _loc5_.x - 10;
         this.causticTxt.y = _loc5_.y - 5;
         this.gr.lineStyle = new LineStyle(0,0,0);
         this.gr.fillStyle = new FillStyle(16711680,1);
         _loc2_ = int(0);
         while(_loc2_ < this.midPoint - 1)
         {
            _loc3_ = this.wf.ray[_loc2_];
            _loc4_ = this.wf.ray[this.numOfPoint - _loc2_ - 1];
            if(_loc3_.countReflection == 0 && _loc3_.countRefraction == 2 && _loc4_.countReflection == 0 && _loc4_.countRefraction == 2)
            {
               _loc5_ = _loc3_.p.findCrossSection(_loc4_.p);
               if(Math.abs(this.t1.p.x - _loc5_.x) < 500 && Math.abs(this.t1.p.x - _loc5_.x) > 20 && (this.t1.focalLength() > 0 && _loc5_.x > this.t1.p.x || this.t1.focalLength() < 0 && _loc5_.x < this.t1.p.x))
               {
                  this.gr.drawCircle(_loc5_.x,_loc5_.y,2,true);
               }
            }
            _loc2_++;
         }
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
