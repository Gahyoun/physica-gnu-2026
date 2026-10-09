import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-8bfa72046f6cac7a.mjs';
const SPEC={"placements": {"resetBtn": {"x": 524.4, "y": 275.9, "width": 70.00534057617188, "height": 20}, "R1Txt": {"x": 451.5, "y": 286.25, "width": null, "height": null}, "causticTxt": {"x": -77.85, "y": -29.95, "width": 52.89990234375, "height": 13.99995422363281}, "lsaTxt": {"x": -125.8, "y": 92.05, "width": 39.39990234375, "height": 14.999908447265625}, "sigmaTxt": {"x": -102.95, "y": 208.95, "width": 24, "height": 13}}, "id": "flash-7d2fe52076b32c5f", "source": "aberSpherical2.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/aberration/aberSpherical2.swf", "title": "구면거울의 구면수차", "lesson": "5-2-10-1", "width": 600, "height": 300, "animated": true, "controls": [], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "selects": [], "drag": false, "sourceSha256": "024072e29ee06a9014dc5a1f8b96e9dc3d328672088899eda34514fb3d4f4c79", "kernelSha256": "8bfa72046f6cac7ae42027c28f00ddc51ac98fb6742a87d01f93c977cf8dd220", "kernelModule": "optics-batch50b-kernel-8bfa72046f6cac7a.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/ThickLens.as", "sha256": "4a1cac58e49cb14efa2c3812440ecda60ce822a9d0cbff066e5a242f4dcf65c4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "Init", "InitInstrument", "InitWave", "setWhiteBG", "frame1", "indexReset", "ButtonEventHandler", "setRand", "aniReset", "stopAniEventHandler"], "programModule": "optics-batch50b-program-flash-7d2fe52076b32c5f.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
sigmaTxt = new Sprite();
xposi = 0;
t1 = new Sprite();
wavefrontStep0 = 0;
indexField = new Sprite();
lsaTxt = new Sprite();
canvas = new Sprite();
yposi = 0;
backGraphics = new Sprite();
numOfPoint = 0;
resetBtn = new Sprite();
causticTxt = new Sprite();
xOrigin = 0;
wf = new Sprite();
R1Txt = new Sprite();
midPoint = new Sprite();
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_resetBtn__1();
      }
Init(){
         this.setWhiteBG(true);
         this.InitInstrument();
         this.wf.isShowRay = true;
         this.wf.isShowFront = false;
      }
InitInstrument(){
         this.t1 = this.t1 = new ThickLens(0,200,200,20,290);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.setRand();
         this.indexField.AddInstrument(this.t1);
         this.indexField.Draw();
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
         this.gr.lineStyle = new LineStyle(1,8421504,1);
         this.gr.drawLine(-this.xOrigin,0,600 - this.xOrigin,0);
         this.gr.drawLine(this.t1.p.x,-this.yOrigin,this.t1.p.x,this.yOrigin);
         this.wf.SetParallelWave(-this.xOrigin + 10,0,0,280);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),5);
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,255,1,false,LineScaleMode.NONE);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,5592575,1,false,LineScaleMode.NONE);
         }
      }
frame1(){
         this.xOrigin = 300;
         this.yOrigin = 146;
         this.numOfPoint = 29;
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
         this.addChild(this.causticTxt);
         this.addChild(this.lsaTxt);
         this.addChild(this.sigmaTxt);
         this.wf = this.pt.wf;
         this.indexField = this.pt.indexField;
         this.Init();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
      }
indexReset(){
         let _loc1_ = null;
         _loc1_ = Math.abs(this.t1.R1) >= ThickLens.flatCriterior ? "무한대" : this.t1.R1.toString();
         this.R1Txt.text = _loc1_;
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
         let _loc3_ = 0;
         _loc3_ = int(Math.random() > 0.7 ? 1 : -1);
         _loc2_ = 100 + Math.random() * 600;
         _loc2_ *= _loc3_;
         _loc2_ = Math.round(_loc2_);
         this.t1.R1 = _loc2_;
         this.t1.R2 = _loc2_;
         if(this.t1.R1 > 0)
         {
            this.t1.p.x = -160;
         }
         else
         {
            this.t1.p.x = 250;
         }
         this.indexReset();
      }
aniReset(){
         this.pt.clearWaveFront();
         this.InitWave();
         this.causticTxt.x = -1000;
         this.lsaTxt.x = -1000;
         this.sigmaTxt.x = -1000;
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
         let _loc9_ = NaN;
         let _loc10_ = NaN;
         let _loc11_ = false;
         let _loc12_ = 0;
         let _loc13_ = 0;
         let _loc14_ = NaN;
         if(this.t1.R1 > 0)
         {
            this.wf.DrawRayExtendLine(1,0,false);
         }
         _loc6_ = true;
         this.gr.lineStyle = new LineStyle(2,16711935,1,false,LineScaleMode.NONE);
         _loc2_ = int(0);
         while(_loc2_ < this.numOfPoint - 1)
         {
            _loc3_ = this.wf.ray[_loc2_];
            _loc4_ = this.wf.ray[_loc2_ + 1];
            if(_loc3_.countReflection == 1 && _loc3_.countRefraction == 0 && _loc4_.countReflection == 1 && _loc4_.countRefraction == 0)
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
            if(_loc3_.countReflection == 1 && _loc3_.countRefraction == 0 && _loc4_.countReflection == 1 && _loc4_.countRefraction == 0)
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
         _loc8_ = this.t1.R1 > 0 ? 20 : -20;
         this.gr.drawLine(_loc5_.x,_loc5_.y,_loc5_.x + _loc8_,_loc5_.y - 20);
         _loc5_ = this.pt.screenCoord.getScreenCoord(new Point2D(_loc5_.x + _loc8_,_loc5_.y - 20));
         this.causticTxt.x = _loc5_.x - 10;
         this.causticTxt.y = _loc5_.y - 5;
         _loc9_ = -5000;
         _loc10_ = 5000;
         _loc11_ = true;
         _loc14_ = -5000;
         this.gr.lineStyle = new LineStyle(0,0,0);
         this.gr.fillStyle = new FillStyle(16711680,1);
         _loc2_ = int(0);
         while(_loc2_ < this.midPoint)
         {
            _loc3_ = this.wf.ray[_loc2_];
            _loc4_ = this.wf.ray[this.numOfPoint - _loc2_ - 1];
            if(_loc3_.countReflection == 1 && _loc3_.countRefraction == 0 && _loc4_.countReflection == 1 && _loc4_.countRefraction == 0)
            {
               _loc5_ = _loc3_.p.findCrossSection(_loc4_.p);
               if(Math.abs(this.t1.p.x - _loc5_.x) < 500 && Math.abs(this.t1.p.x - _loc5_.x) > 20 && (this.t1.R1 > 0 && _loc5_.x > this.t1.p.x || this.t1.R1 < 0 && _loc5_.x < this.t1.p.x))
               {
                  this.gr.drawCircle(_loc5_.x,_loc5_.y,1,true);
                  _loc9_ = Math.max(_loc9_,_loc5_.x);
                  _loc10_ = Math.min(_loc10_,_loc5_.x);
                  if(_loc11_)
                  {
                     _loc12_ = int(_loc2_);
                     _loc11_ = false;
                  }
                  else
                  {
                     _loc5_ = this.wf.ray[_loc12_].p.findCrossSection(_loc4_.p);
                     if(_loc5_.y > _loc14_)
                     {
                        _loc14_ = _loc5_.y;
                        _loc13_ = int(this.numOfPoint - _loc2_ - 1);
                     }
                  }
               }
            }
            _loc2_++;
         }
         this.gr.lineStyle = new LineStyle(1,8421504,1);
         this.gr.drawLine(_loc9_,0,_loc9_,102);
         this.gr.drawLine(_loc10_,0,_loc10_,102);
         this.gr.lineStyle = new LineStyle(1,8421504,1);
         this.gr.drawLine(_loc9_,97.5,_loc10_,97.5,true,true);
         _loc5_ = this.pt.screenCoord.getScreenCoord(new Point2D((_loc9_ + _loc10_) / 2 - 15,115));
         this.lsaTxt.x = _loc5_.x;
         this.lsaTxt.y = _loc5_.y;
         _loc5_ = this.wf.ray[_loc12_].p.findCrossSection(this.wf.ray[_loc13_].p);
         this.gr.lineStyle = new LineStyle(4,10027263,1);
         this.gr.drawLine(_loc5_.x,_loc5_.y + 30,_loc5_.x,_loc5_.y,true);
         this.gr.drawLine(_loc5_.x,-_loc5_.y - 30,_loc5_.x,-_loc5_.y,true);
         _loc5_ = this.pt.screenCoord.getScreenCoord(new Point2D(_loc5_.x - 10,_loc5_.y + 45));
         this.sigmaTxt.x = _loc5_.x;
         this.sigmaTxt.y = _loc5_.y;
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
