import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-92ed958d3a7c87a7.mjs';
const SPEC={"placements": {"nFTxt": {"x": 396.25, "y": 0.9, "width": null, "height": null}, "nDTxt": {"x": 396.25, "y": 13.3, "width": null, "height": null}, "nCTxt": {"x": 396.25, "y": 25.7, "width": null, "height": null}, "abbeTxt": {"x": 396.9, "y": 39.7, "width": null, "height": null}, "nF2Txt": {"x": 606.25, "y": -0.1, "width": null, "height": null}, "nD2Txt": {"x": 606.25, "y": 12.3, "width": null, "height": null}, "nC2Txt": {"x": 606.25, "y": 24.7, "width": null, "height": null}, "abbe2Txt": {"x": 606.9, "y": 38.7, "width": null, "height": null}, "resetBtn": {"x": 577.4, "y": 277.1, "width": 70.00534057617188, "height": 20}, "material1Txt": {"x": 223, "y": 0.7, "width": null, "height": null}, "material2Txt": {"x": 423.95, "y": 0.7, "width": null, "height": null}, "R11Txt": {"x": 316.9, "y": 283.45, "width": null, "height": null}, "R22Txt": {"x": 505.95, "y": 283.45, "width": null, "height": null}, "fdTxt": {"x": 37.4, "y": 284.45, "width": null, "height": null}, "f1dTxt": {"x": 236.95, "y": 283.45, "width": null, "height": null}, "f2dTxt": {"x": 420.9, "y": 283.45, "width": null, "height": null}, "pDTxt": {"x": 581.8, "y": 242.8, "width": null, "height": null}, "pCTxt": {"x": 581.75, "y": 257.8, "width": null, "height": null}, "pFTxt": {"x": 581.8, "y": 227.8, "width": null, "height": null}}, "id": "flash-48312d928701845d", "source": "aberAChromatic1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/aberration/aberAChromatic1.swf", "title": "색지움한 이중렌즈", "lesson": "5-2-10-4", "width": 650, "height": 300, "animated": true, "controls": [], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "selects": [], "drag": false, "sourceSha256": "3bea898b095419b43847cb9076b8da66955792895e6fae7352c33299e148b01a", "kernelSha256": "92ed958d3a7c87a7ba8f05dcfbc95810488d41087ba21509206bd12c5310a5d7", "kernelModule": "optics-batch50b-kernel-92ed958d3a7c87a7.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "f628e5cfc69f2d6ba3b20e8e316c6e5d9775cb6393234438ee19d0a2993f8b1a"}, {"path": "RayTracer/EGraphics.as", "sha256": "404fa0711e2d2cbfaa14b495ebb36ecfb9d5f0dceec92520d1e3e5a5da587d38"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "3c35376b576f2aadc98a6d34944b90cde5f6cf43bae00ee7e8470c9b39a09b6f"}, {"path": "RayTracer/LineStyle.as", "sha256": "1669de231465a75fb1f188d4041a013d721737973b4a82007e106ff50ac1141d"}, {"path": "RayTracer/Point2D.as", "sha256": "1aad18a5eb74a61459ee82f0bbd7081d60b36f51ccfffb94a0d600bbae5f6b1b"}, {"path": "RayTracer/Prototype.as", "sha256": "b0bc8dae9fac5c61cd79a070cf02e38a2d3c83880756c4b52fd8759674f78122"}, {"path": "RayTracer/RayTrace.as", "sha256": "03f571e9f4a7d799a04ea7e1ab1b1532d20cb99f9b78c536edeef6fe81a60b2b"}, {"path": "RayTracer/Rindex.as", "sha256": "f40728fcfe8d32b121de02d9932500430004c55af7ac07a8aad8e663d7634d8e"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a8a5220b3734ca00e4de626a36d3c7949910aa0eee006779cf5da28d122c2761"}, {"path": "RayTracer/ThickLens.as", "sha256": "39af072ac62dae8a0d03a72d05a7d990a2f70c0523d3c3e4c1394fe4ad4e6632"}, {"path": "RayTracer/WaveFront.as", "sha256": "739fda919fb15315146b738bef78ed894c65de9ae0d61b1b0fd795648075f10c"}], "methods": ["MainTimeline", "Init", "setWhiteBG", "InitInstrument", "InitWave", "aniReset", "stopAniEventHandler", "ButtonEventHandler", "setRand", "frame1"], "programModule": "optics-batch50b-program-flash-48312d928701845d.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pCTxt = new Sprite();
fdTxt = new Sprite();
pFTxt = new Sprite();
nF2Txt = new Sprite();
pDTxt = new Sprite();
nD2Txt = new Sprite();
R22Txt = new Sprite();
resetBtn = new Sprite();
nCTxt = new Sprite();
abbeTxt = new Sprite();
nFTxt = new Sprite();
R11Txt = new Sprite();
nDTxt = new Sprite();
f2dTxt = new Sprite();
material2Txt = new Sprite();
nC2Txt = new Sprite();
f1dTxt = new Sprite();
material1Txt = new Sprite();
abbe2Txt = new Sprite();
xOrigin = 0;
yOrigin = 0;
numOfPoint = 0;
wavefrontStep0 = 0;
pt = new Sprite();
canvas = new Sprite();
backGraphics = new Sprite();
gr = new Sprite();
wf = new Sprite();
midPoint = 0;
indexField = new Sprite();
t1 = new Sprite();
t2 = new Sprite();
fL = 0;
fs = new Sprite();
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_resetBtn_();
      }
Init(){
         this.setWhiteBG(true);
         this.InitInstrument();
         this.aniReset();
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
InitInstrument(){
         this.t1 = new ThickLens(1.5,200,-400,200,290);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.t2 = new ThickLens(1.5,200,-400,200,290);
         this.t2.p.x = 200;
         this.t2.p.y = 0;
         this.t2.p.dir = 0;
         this.setRand();
         this.indexField.AddInstrument(this.t1);
         this.indexField.AddInstrument(this.t2);
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-150,720,300);
      }
InitWave(){
         this.wf.SetCDFParallelWave(10 - this.xOrigin,0,0,105);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),12);
      }
aniReset(){
         let _loc3_ = NaN;
         let _loc4_ = null;
         this.pt.clearWaveFront();
         this.indexField.Draw();
         this.gr.clear();
         this.gr.lineStyle = new LineStyle(1,8421504,1,false,LineScaleMode.NONE);
         this.gr.drawLine(-this.xOrigin,0,720 - this.xOrigin,0);
         let _loc1_ = Math.abs(this.t1.R1) >= ThickLens.flatCriterior ? "무한대" : Math.round(this.t1.R1).toString();
         let _loc2_ = Math.abs(this.t2.R2) >= ThickLens.flatCriterior ? "무한대" : Math.round(this.t2.R2).toString();
         this.R11Txt.text = _loc1_;
         this.R22Txt.text = _loc2_;
         this.fdTxt.text = this.fL;
         this.f1dTxt.text = Math.round(this.fs[0] * 10) / 10;
         this.f2dTxt.text = Math.round(this.fs[1] * 10) / 10;
         this.pCTxt.text = "";
         this.pDTxt.text = "";
         this.pFTxt.text = "";
         _loc3_ = Math.round(Rindex.getRindex(this.t1.material,Rindex.Fline) * 10000) / 10000;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.nFTxt.text = _loc4_;
         _loc3_ = Math.round(Rindex.getRindex(this.t1.material,Rindex.Dline) * 10000) / 10000;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.nDTxt.text = _loc4_;
         _loc3_ = Math.round(Rindex.getRindex(this.t1.material,Rindex.Cline) * 10000) / 10000;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.nCTxt.text = _loc4_;
         _loc3_ = Math.round(Rindex.getAbbe(this.t1.material) * 100) / 100;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.abbeTxt.text = _loc4_;
         _loc3_ = Math.round(Rindex.getRindex(this.t2.material,Rindex.Fline) * 10000) / 10000;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.nF2Txt.text = _loc4_;
         _loc3_ = Math.round(Rindex.getRindex(this.t2.material,Rindex.Dline) * 10000) / 10000;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.nD2Txt.text = _loc4_;
         _loc3_ = Math.round(Rindex.getRindex(this.t2.material,Rindex.Cline) * 10000) / 10000;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.nC2Txt.text = _loc4_;
         _loc3_ = Math.round(Rindex.getAbbe(this.t2.material) * 100) / 100;
         _loc4_ = _loc3_ > 1 ? "" + _loc3_ : " NA ";
         this.abbe2Txt.text = _loc4_;
         this.pt.stopAni();
         this.InitWave();
         this.pt.startAni();
      }
stopAniEventHandler(param1){
         let _loc2_ = null;
         let _loc3_ = NaN;
         _loc3_ = Number(Rindex.Fline);
         _loc2_ = this.wf.RayTest(new Point2D(-this.xOrigin,0,0),-1,-1,_loc3_);
         if(_loc2_.dir != 666)
         {
            this.gr.lineStyle = new LineStyle(1,EGraphics.WaveLengthColor(_loc3_,0.9),1,false,LineScaleMode.NONE);
            this.gr.drawLine(_loc2_.x,-100,_loc2_.x,100);
            this.pFTxt.text = "F: " + Math.round(_loc2_.x * 100) / 100;
         }
         _loc3_ = Number(Rindex.Dline);
         _loc2_ = this.wf.RayTest(new Point2D(-this.xOrigin,0,0),-1,-1,_loc3_);
         if(_loc2_.dir != 666)
         {
            this.gr.lineStyle = new LineStyle(1,EGraphics.WaveLengthColor(_loc3_,0.9),1,false,LineScaleMode.NONE);
            this.gr.drawLine(_loc2_.x,-100,_loc2_.x,100);
            this.pDTxt.text = "d: " + Math.round(_loc2_.x * 100) / 100;
         }
         _loc3_ = Number(Rindex.Cline);
         _loc2_ = this.wf.RayTest(new Point2D(-this.xOrigin,0,0),-1,-1,_loc3_);
         if(_loc2_.dir != 666)
         {
            this.gr.lineStyle = new LineStyle(1,EGraphics.WaveLengthColor(_loc3_,0.9),1,false,LineScaleMode.NONE);
            this.gr.drawLine(_loc2_.x,-100,_loc2_.x,100);
            this.pCTxt.text = "C: " + Math.round(_loc2_.x * 100) / 100;
         }
      }
ButtonEventHandler(param1){
         if(param1.target == this.resetBtn)
         {
            this.setRand();
         }
      }
setRand(){
         let _loc4_ = NaN;
         let _loc5_ = NaN;
         let _loc6_ = NaN;
         this.t1.thickness = 100;
         this.t2.thickness = 100;
         let _loc1_ = int(Rindex.data.length);
         let _loc2_ = 4;
         let _loc3_ = 7;
         _loc4_ = Math.random();
         if(_loc4_ < 0.33)
         {
            _loc2_ = int(2);
         }
         else if(_loc4_ < 0.66)
         {
            _loc2_ = int(4);
         }
         else
         {
            _loc2_ = int(8);
         }
         _loc4_ = Math.random();
         if(_loc4_ < 0.33)
         {
            _loc3_ = int(5);
         }
         else if(_loc4_ < 0.66)
         {
            _loc3_ = int(7);
         }
         else
         {
            _loc3_ = int(12);
         }
         this.t1.material = _loc2_;
         this.t2.material = _loc3_;
         this.material1Txt.text = "" + Rindex.data[_loc2_][1];
         this.material2Txt.text = "" + Rindex.data[_loc3_][1];
         this.fL = Math.floor(20 + 40 * Math.random()) * 10;
         this.fs = Rindex.get2Focus(_loc2_,_loc3_,this.fL);
         let _loc7_ = this.fs[0] * (Rindex.getRindex(_loc2_,Rindex.Dline) - 1);
         let _loc8_ = -this.fs[1] * (Rindex.getRindex(_loc3_,Rindex.Dline) - 1);
         this.t1.R1 = _loc7_;
         this.t1.R2 = 100000;
         this.t2.R1 = 100000;
         this.t2.R2 = _loc8_;
         this.t1.makeThinner();
         this.t2.makeThinner();
         let _loc9_ = (this.t1.thickness + this.t2.thickness) / 2;
         this.t1.p.x = -this.t1.thickness / 2 - 2.5;
         this.t2.p.x = this.t1.p.x + _loc9_ + 5;
         this.aniReset();
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
         this.xOrigin = 150;
         this.yOrigin = 150;
         this.numOfPoint = 66;
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
         this.addChild(this.R11Txt);
         this.addChild(this.R22Txt);
         this.addChild(this.fdTxt);
         this.addChild(this.material1Txt);
         this.addChild(this.material2Txt);
         this.addChild(this.f1dTxt);
         this.addChild(this.f2dTxt);
         this.wf = this.pt.wf;
         this.wf.isShowRay = true;
         this.wf.isShowFront = false;
         this.midPoint = Math.floor(this.numOfPoint / 2);
         this.indexField = this.pt.indexField;
         this.Init();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
