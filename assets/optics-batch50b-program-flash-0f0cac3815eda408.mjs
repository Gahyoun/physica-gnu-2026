import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-8bfa72046f6cac7a.mjs';
const SPEC={"placements": {"n400Txt": {"x": 415, "y": 0.9, "width": null, "height": null}, "n500Txt": {"x": 415, "y": 13.3, "width": null, "height": null}, "n600Txt": {"x": 415, "y": 25.7, "width": null, "height": null}, "n700Txt": {"x": 415, "y": 38.1, "width": null, "height": null}, "resetBtn": {"x": 527.4, "y": 277.1, "width": 70.00534057617188, "height": 20}, "materialTxt": {"x": 5.4, "y": 2.7, "width": null, "height": null}, "material2Txt": {"x": 5.4, "y": 17.7, "width": null, "height": null}, "R1Txt": {"x": 386.9, "y": 284.45, "width": null, "height": null}, "R2Txt": {"x": 463.95, "y": 284.45, "width": null, "height": null}, "thicknessTxt": {"x": 290.4, "y": 284.45, "width": null, "height": null}, "abbeTxt": {"x": 547.7, "y": 0.1, "width": null, "height": null}}, "id": "flash-0f0cac3815eda408", "source": "aberChromatic1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/aberration/aberChromatic1.swf", "title": "렌즈의 색수차", "lesson": "5-2-10-4", "width": 600, "height": 300, "animated": true, "controls": [], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "selects": [], "drag": false, "sourceSha256": "292e61ae74aa217faf4441813e17c48243ba69b0ce1b6f5603c6f1be4972e208", "kernelSha256": "8bfa72046f6cac7ae42027c28f00ddc51ac98fb6742a87d01f93c977cf8dd220", "kernelModule": "optics-batch50b-kernel-8bfa72046f6cac7a.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/ThickLens.as", "sha256": "4a1cac58e49cb14efa2c3812440ecda60ce822a9d0cbff066e5a242f4dcf65c4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "InitInstrument", "Init", "InitWave", "setWhiteBG", "frame1", "ButtonEventHandler", "aniReset", "setRand", "stopAniEventHandler"], "programModule": "optics-batch50b-program-flash-0f0cac3815eda408.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
n500Txt = new Sprite();
R2Txt = new Sprite();
t1 = new Sprite();
wavefrontStep0 = 0;
indexField = new Sprite();
thicknessTxt = new Sprite();
canvas = new Sprite();
n700Txt = new Sprite();
n400Txt = new Sprite();
numOfPoint = 0;
material2Txt = new Sprite();
backGraphics = new Sprite();
abbeTxt = new Sprite();
resetBtn = new Sprite();
xOrigin = 0;
materialTxt = new Sprite();
n600Txt = new Sprite();
R1Txt = new Sprite();
wf = new Sprite();
midPoint = 0;
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_resetBtn__1();
      }
InitInstrument(){
         this.t1 = new ThickLens(1.5,200,-400,200,290);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.setRand();
         this.indexField.AddInstrument(this.t1);
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-150,600,300);
      }
Init(){
         this.setWhiteBG(true);
         this.InitInstrument();
         this.aniReset();
      }
InitWave(){
         this.wf.SetColorParallelWave(10 - this.xOrigin,0,0,210);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),12);
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
      }
frame1(){
         this.xOrigin = 150;
         this.yOrigin = 150;
         this.numOfPoint = 124;
         this.wavefrontStep0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
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
         this.addChild(this.materialTxt);
         this.addChild(this.material2Txt);
         this.wf = this.pt.wf;
         this.wf.isShowRay = true;
         this.wf.isShowFront = false;
         this.midPoint = Math.floor(this.numOfPoint / 2);
         this.indexField = this.pt.indexField;
         this.Init();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
      }
ButtonEventHandler(param1){
         if(param1.target == this.resetBtn)
         {
            this.setRand();
         }
      }
aniReset(){
         let _loc1_ = null;
         let _loc2_ = null;
         let _loc3_ = NaN;
         let _loc4_ = null;
         this.pt.clearWaveFront();
         this.indexField.Draw();
         this.gr.clear();
         this.gr.lineStyle = new LineStyle(1,8421504,1,false,LineScaleMode.NONE);
         this.gr.drawLine(-this.xOrigin,0,600 - this.xOrigin,0);
         this.gr.drawLine(this.t1.p.x,-this.yOrigin,this.t1.p.x,this.yOrigin);
         _loc1_ = Math.abs(this.t1.R1) >= ThickLens.flatCriterior ? "무한대" : this.t1.R1.toString();
         _loc2_ = Math.abs(this.t1.R2) >= ThickLens.flatCriterior ? "무한대" : this.t1.R2.toString();
         this.R1Txt.text = _loc1_;
         this.R2Txt.text = _loc2_;
         this.thicknessTxt.text = Math.round(this.t1.thickness * 100) / 100;
         _loc3_ = Math.round(Rindex.getRindex(this.t1.material,400) * 100000) / 100000;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.n400Txt.text = _loc4_;
         _loc3_ = Math.round(Rindex.getRindex(this.t1.material,500) * 100000) / 100000;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.n500Txt.text = _loc4_;
         _loc3_ = Math.round(Rindex.getRindex(this.t1.material,600) * 100000) / 100000;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.n600Txt.text = _loc4_;
         _loc3_ = Math.round(Rindex.getRindex(this.t1.material,700) * 100000) / 100000;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.n700Txt.text = _loc4_;
         _loc3_ = Math.round(Rindex.getAbbe(this.t1.material) * 100) / 100;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.abbeTxt.text = _loc4_;
         this.pt.stopAni();
         this.InitWave();
         this.pt.startAni();
      }
setRand(){
         let _loc1_ = NaN;
         let _loc2_ = NaN;
         let _loc3_ = 0;
         let _loc4_ = 0;
         this.t1.thickness = 100;
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
         while(Math.abs(this.t1.focalLength()) > 450 || Math.abs(this.t1.focalLength()) < 250);
         _loc3_ = int(int(Rindex.data.length));
         _loc4_ = int(_loc3_ * Math.random());
         this.t1.material = Math.floor(_loc4_);
         this.materialTxt.text = "종류: " + Rindex.data[_loc4_][0];
         this.material2Txt.text = "이름: " + Rindex.data[_loc4_][1];
         trace(_loc4_);
         this.aniReset();
      }
stopAniEventHandler(param1){
         let _loc2_ = null;
         let _loc3_ = 0;
         _loc3_ = int(400);
         while(_loc3_ <= 700)
         {
            _loc2_ = this.wf.RayTest(new Point2D(-this.xOrigin,0,0),-1,-1,_loc3_);
            if(_loc2_.dir != 666)
            {
               this.gr.lineStyle = new LineStyle(1,EGraphics.WaveLengthColor(_loc3_,0.9),1,false,LineScaleMode.NONE);
               this.gr.drawLine(_loc2_.x,-100,_loc2_.x,100);
            }
            _loc3_ += 100;
         }
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
