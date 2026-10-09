import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-92ed958d3a7c87a7.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 719.9909210205078, "height": 310.00634765625}, "nFTxt": {"x": 453.25, "y": 0.9, "width": null, "height": null}, "nDTxt": {"x": 453.25, "y": 13.3, "width": null, "height": null}, "nCTxt": {"x": 453.25, "y": 25.7, "width": null, "height": null}, "abbeTxt": {"x": 453.9, "y": 39.7, "width": null, "height": null}, "nF2Txt": {"x": 667.25, "y": -0.1, "width": null, "height": null}, "nD2Txt": {"x": 667.25, "y": 12.3, "width": null, "height": null}, "nC2Txt": {"x": 667.25, "y": 24.7, "width": null, "height": null}, "abbe2Txt": {"x": 667.9, "y": 38.7, "width": null, "height": null}, "pDTxt": {"x": 636, "y": 278.9, "width": null, "height": null}, "pCTxt": {"x": 635.95, "y": 294.9, "width": null, "height": null}, "pFTxt": {"x": 636, "y": 262.9, "width": null, "height": null}, "material1Txt": {"x": 280, "y": 0.7, "width": null, "height": null}, "material2Txt": {"x": 487.95, "y": 0.7, "width": null, "height": null}, "fdTxt": {"x": 33.25, "y": 295.2, "width": null, "height": null}, "f1dTxt": {"x": 115.8, "y": 295.2, "width": null, "height": null}, "f2dTxt": {"x": 198.75, "y": 295.2, "width": null, "height": null}, "startBtn": {"x": 647.2, "y": 336.65, "width": 70.00534057617188, "height": 20}, "resetBtn": {"x": 647.2, "y": 314.55, "width": 70.00534057617188, "height": 20}, "R11Slider": {"x": 266.5, "y": 313.55, "width": 150.01144409179688, "height": 13}, "R11Txt": {"x": 453.6, "y": 313.05, "width": null, "height": null}, "R22Slider": {"x": 266.5, "y": 329.55, "width": 150.01144409179688, "height": 13}, "R22Txt": {"x": 453.6, "y": 328.05, "width": null, "height": null}, "mat1Cmb": {"x": 68.4, "y": 320.55, "width": 131, "height": 16}, "mat2Cmb": {"x": 68.4, "y": 338.65, "width": 131, "height": 16}, "R12Slider": {"x": 487.5, "y": 329.55, "width": 150.01144409179688, "height": 13}, "R12Txt": {"x": 562.6, "y": 315, "width": null, "height": null}, "coordTxt": {"x": 4.25, "y": 2.6, "width": null, "height": null}}, "id": "flash-93516affb99b4e72", "source": "aberAChromatic2.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/aberration/aberAChromatic2.swf", "title": "렌즈의 색수차 모의실험", "lesson": "5-2-10-5", "width": 720, "height": 360, "animated": true, "controls": [{"clip": "R11Slider", "key": "R11", "label": "R11", "min": -200.0, "max": 200.0, "step": 1.0, "value": 100.0}, {"clip": "R22Slider", "key": "R22", "label": "R22", "min": -200.0, "max": 200.0, "step": 1.0, "value": 50.0}, {"clip": "R12Slider", "key": "R12", "label": "두 렌즈의 공통 곡률반경", "min": -200.0, "max": 200.0, "step": 1.0, "value": 0.0}], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}, {"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "selects": [{"clip": "mat1Cmb", "label": "렌즈 재료"}, {"clip": "mat2Cmb", "label": "둘째 렌즈 재료"}], "drag": false, "sourceSha256": "3c4976695919affbd9a0c6e26756a2c21435a6fa22b8020db351826a819ff430", "kernelSha256": "92ed958d3a7c87a7ba8f05dcfbc95810488d41087ba21509206bd12c5310a5d7", "kernelModule": "optics-batch50b-kernel-92ed958d3a7c87a7.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "f628e5cfc69f2d6ba3b20e8e316c6e5d9775cb6393234438ee19d0a2993f8b1a"}, {"path": "RayTracer/EGraphics.as", "sha256": "404fa0711e2d2cbfaa14b495ebb36ecfb9d5f0dceec92520d1e3e5a5da587d38"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "3c35376b576f2aadc98a6d34944b90cde5f6cf43bae00ee7e8470c9b39a09b6f"}, {"path": "RayTracer/LineStyle.as", "sha256": "1669de231465a75fb1f188d4041a013d721737973b4a82007e106ff50ac1141d"}, {"path": "RayTracer/Point2D.as", "sha256": "1aad18a5eb74a61459ee82f0bbd7081d60b36f51ccfffb94a0d600bbae5f6b1b"}, {"path": "RayTracer/Prototype.as", "sha256": "b0bc8dae9fac5c61cd79a070cf02e38a2d3c83880756c4b52fd8759674f78122"}, {"path": "RayTracer/RayTrace.as", "sha256": "03f571e9f4a7d799a04ea7e1ab1b1532d20cb99f9b78c536edeef6fe81a60b2b"}, {"path": "RayTracer/Rindex.as", "sha256": "f40728fcfe8d32b121de02d9932500430004c55af7ac07a8aad8e663d7634d8e"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a8a5220b3734ca00e4de626a36d3c7949910aa0eee006779cf5da28d122c2761"}, {"path": "RayTracer/ThickLens.as", "sha256": "39af072ac62dae8a0d03a72d05a7d990a2f70c0523d3c3e4c1394fe4ad4e6632"}, {"path": "RayTracer/WaveFront.as", "sha256": "739fda919fb15315146b738bef78ed894c65de9ae0d61b1b0fd795648075f10c"}], "methods": ["MainTimeline", "Init", "setWhiteBG", "InitInstrument", "InitWave", "aniReset", "stopAniEventHandler", "ButtonEventHandler", "OListener", "RSliderEventHandler", "InitCtrl", "reportClick", "frame1"], "programModule": "optics-batch50b-program-flash-93516affb99b4e72.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pCTxt = new Sprite();
fdTxt = new Sprite();
pFTxt = new Sprite();
nF2Txt = new Sprite();
pDTxt = new Sprite();
nD2Txt = new Sprite();
coordTxt = new Sprite();
mk = new Sprite();
R22Txt = new Sprite();
R11Slider = new Sprite();
resetBtn = new Sprite();
nCTxt = new Sprite();
R12Txt = new Sprite();
startBtn = new Sprite();
R12Slider = new Sprite();
abbeTxt = new Sprite();
nFTxt = new Sprite();
R22Slider = new Sprite();
R11Txt = new Sprite();
nDTxt = new Sprite();
mat2Cmb = new Sprite();
f2dTxt = new Sprite();
material2Txt = new Sprite();
mat1Cmb = new Sprite();
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
crossGraphics = new Sprite();
gg = new Sprite();
wf = new Sprite();
midPoint = 0;
indexField = new Sprite();
t1 = new Sprite();
t2 = new Sprite();
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_resetBtn_();
         this.__setProp_R11Slider_();
         this.__setProp_R22Slider_();
         this.__setProp_mat1Cmb_();
         this.__setProp_mat2Cmb_();
         this.__setProp_R12Slider_();
      }
Init(){
         this.setWhiteBG(true);
         let _loc1_ = int(Rindex.data.length);
         this.mat1Cmb.labels = new Array(_loc1_);
         this.mat2Cmb.labels = new Array(_loc1_);
         let _loc2_ = 0;
         while(_loc2_ < _loc1_)
         {
            this.mat1Cmb.labels[_loc2_] = Rindex.data[_loc2_][0] + "_" + Rindex.data[_loc2_][1] + " [" + Math.round(Rindex.getAbbe(_loc2_) * 10) / 10 + "]";
            this.mat2Cmb.labels[_loc2_] = Rindex.data[_loc2_][0] + "_" + Rindex.data[_loc2_][1] + " [" + Math.round(Rindex.getAbbe(_loc2_) * 10) / 10 + "]";
            _loc2_++;
         }
         this.mat1Cmb.selIndex = 2;
         this.mat2Cmb.selIndex = 5;
         this.InitInstrument();
         this.InitCtrl();
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
            this.mat1Cmb.setCustomColor(2);
            this.mat2Cmb.setCustomColor(2);
            this.R11Slider.setCustomColor(2);
            this.R22Slider.setCustomColor(2);
            this.R12Slider.setCustomColor(2);
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
         this.indexField.AddInstrument(this.t1);
         this.indexField.AddInstrument(this.t2);
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-150,720,300);
      }
InitWave(){
         this.wf.SetCDFParallelWave(10 - this.xOrigin,0,0,145);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),12);
      }
aniReset(){
         let _loc4_ = NaN;
         let _loc5_ = null;
         this.pt.clearWaveFront();
         this.indexField.Draw();
         this.gr.clear();
         this.gr.lineStyle = new LineStyle(1,8421504,1,false,LineScaleMode.NONE);
         this.gr.drawLine(-this.xOrigin,0,720 - this.xOrigin,0);
         this.gr.drawLine(0,-this.yOrigin,0,this.yOrigin);
         let _loc1_ = Math.abs(this.t1.R1) >= ThickLens.flatCriterior ? "무한대" : Math.round(this.t1.R1).toString();
         let _loc2_ = Math.abs(this.t2.R2) >= ThickLens.flatCriterior ? "무한대" : Math.round(this.t2.R2).toString();
         let _loc3_ = Math.abs(this.t1.R2) >= ThickLens.flatCriterior ? "무한대" : Math.round(this.t1.R2).toString();
         this.R11Txt.text = _loc1_;
         this.R22Txt.text = _loc2_;
         this.R12Txt.text = _loc3_;
         this.pCTxt.text = "";
         this.pDTxt.text = "";
         this.pFTxt.text = "";
         _loc4_ = Math.round(Rindex.getRindex(this.t1.material,Rindex.Fline) * 10000) / 10000;
         _loc5_ = _loc4_ > 1 ? "" + _loc4_ : " NA ";
         this.nFTxt.text = _loc5_;
         _loc4_ = Math.round(Rindex.getRindex(this.t1.material,Rindex.Dline) * 10000) / 10000;
         _loc5_ = _loc4_ > 1 ? "" + _loc4_ : " NA ";
         this.nDTxt.text = _loc5_;
         _loc4_ = Math.round(Rindex.getRindex(this.t1.material,Rindex.Cline) * 10000) / 10000;
         _loc5_ = _loc4_ > 1 ? "" + _loc4_ : " NA ";
         this.nCTxt.text = _loc5_;
         _loc4_ = Math.round(Rindex.getAbbe(this.t1.material) * 100) / 100;
         _loc5_ = _loc4_ > 1 ? "" + _loc4_ : " NA ";
         this.abbeTxt.text = _loc5_;
         _loc4_ = Math.round(Rindex.getRindex(this.t2.material,Rindex.Fline) * 10000) / 10000;
         _loc5_ = _loc4_ > 1 ? "" + _loc4_ : " NA ";
         this.nF2Txt.text = _loc5_;
         _loc4_ = Math.round(Rindex.getRindex(this.t2.material,Rindex.Dline) * 10000) / 10000;
         _loc5_ = _loc4_ > 1 ? "" + _loc4_ : " NA ";
         this.nD2Txt.text = _loc5_;
         _loc4_ = Math.round(Rindex.getRindex(this.t2.material,Rindex.Cline) * 10000) / 10000;
         _loc5_ = _loc4_ > 1 ? "" + _loc4_ : " NA ";
         this.nC2Txt.text = _loc5_;
         _loc4_ = Math.round(Rindex.getAbbe(this.t2.material) * 100) / 100;
         _loc5_ = _loc4_ > 1 ? "" + _loc4_ : " NA ";
         this.abbe2Txt.text = _loc5_;
         this.t1.rIndex = Rindex.getRindex(this.t1.material,Rindex.Dline);
         this.t2.rIndex = Rindex.getRindex(this.t2.material,Rindex.Dline);
         this.f1dTxt.text = Math.round(10 * this.t1.focalLength()) / 10;
         this.f2dTxt.text = Math.round(10 * this.t2.focalLength()) / 10;
         this.fdTxt.text = Math.round(10 * 1 / (1 / this.t1.focalLength() + 1 / this.t2.focalLength())) / 10;
         this.pt.stopAni();
         this.InitWave();
         this.pt.stopAni();
         this.startBtn.isON = false;
         this.startBtn.visible = true;
      }
stopAniEventHandler(param1){
         let _loc2_ = null;
         let _loc3_ = NaN;
         this.startBtn.isON = false;
         this.startBtn.visible = false;
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
OListener(param1){
         if(param1.target == this.mat1Cmb)
         {
            this.t1.material = param1.value;
         }
         else if(param1.target == this.mat2Cmb)
         {
            this.t2.material = param1.value;
         }
         this.material1Txt.text = "" + Rindex.data[this.t1.material][1];
         this.material2Txt.text = "" + Rindex.data[this.t2.material][1];
         this.aniReset();
      }
RSliderEventHandler(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         this.t1.thickness = 100;
         this.t2.thickness = 100;
         _loc2_ = this.R11Slider.value;
         if(_loc2_ == 0)
         {
            _loc2_ = 1;
         }
         _loc3_ = Math.round(10000 / _loc2_);
         this.t1.R1 = _loc3_;
         _loc2_ = this.R22Slider.value;
         if(_loc2_ == 0)
         {
            _loc2_ = 1;
         }
         _loc3_ = Math.round(10000 / _loc2_);
         this.t2.R2 = _loc3_;
         _loc2_ = this.R12Slider.value;
         if(_loc2_ == 0)
         {
            _loc2_ = 1;
         }
         _loc3_ = Math.round(10000 / _loc2_);
         this.t1.R2 = _loc3_;
         this.t2.R1 = _loc3_;
         this.t1.makeThinner();
         this.t2.makeThinner();
         let _loc4_ = (this.t1.thickness + this.t2.thickness) / 2;
         this.t1.p.x = -this.t1.thickness / 2;
         this.t2.p.x = this.t1.p.x + _loc4_;
         this.aniReset();
      }
InitCtrl(){
         this.t1.material = 0;
         this.t2.material = 0;
         this.RSliderEventHandler(new SliderEvent("",0,"",""));
      }
reportClick(param1){
         let _loc2_ = param1.stageX;
         let _loc3_ = param1.stageY;
         if(_loc3_ > this.mk.height || Boolean(isNaN(_loc3_)))
         {
            return;
         }
         this.gg.clear();
         this.gg.lineStyle(1,0,0.8,false,LineScaleMode.NONE);
         this.gg.moveTo(_loc2_,_loc3_ - 10);
         this.gg.lineTo(_loc2_,_loc3_ + 10);
         this.gg.moveTo(_loc2_ - 7,_loc3_);
         this.gg.lineTo(_loc2_ + 7,_loc3_);
         this.coordTxt.text = "(" + Math.round((_loc2_ - this.xOrigin) * 10) / 10 + ", " + Math.round((this.yOrigin - _loc3_) * 10) / 10 + ")";
         this.coordTxt.x = _loc2_;
         this.coordTxt.y = _loc3_;
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
__setProp_R11Slider_(){
         try
         {
            this.R11Slider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.R11Slider.arrowColor = 102;
         this.R11Slider.centerSquareOffColor = 21947;
         this.R11Slider.centerSquareOnColor = 13369548;
         this.R11Slider.enabled = true;
         this.R11Slider.fontBold = true;
         this.R11Slider.fontColor = 8421504;
         this.R11Slider.fontEmbed = false;
         this.R11Slider.fontColorLimit = 8421504;
         this.R11Slider.fontName = "_sans";
         this.R11Slider.fontNumName = "_sans";
         this.R11Slider.fontColorSelected = 8421504;
         this.R11Slider.fontSize = 12;
         this.R11Slider.boxHeight = 13;
         this.R11Slider.incrementOrDigit = 1;
         this.R11Slider.isIncrement = true;
         this.R11Slider.limitLower = -200;
         this.R11Slider.limitUpper = 200;
         this.R11Slider.lineColor = 8421504;
         this.R11Slider.lineThickness = 1;
         this.R11Slider.isShowValue = false;
         this.R11Slider.skin = 0;
         this.R11Slider.text = "";
         this.R11Slider.value = 100;
         this.R11Slider.visible = true;
         this.R11Slider.boxWidth = 150;
         try
         {
            this.R11Slider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_R22Slider_(){
         try
         {
            this.R22Slider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.R22Slider.arrowColor = 102;
         this.R22Slider.centerSquareOffColor = 21947;
         this.R22Slider.centerSquareOnColor = 13369548;
         this.R22Slider.enabled = true;
         this.R22Slider.fontBold = true;
         this.R22Slider.fontColor = 8421504;
         this.R22Slider.fontEmbed = false;
         this.R22Slider.fontColorLimit = 8421504;
         this.R22Slider.fontName = "_sans";
         this.R22Slider.fontNumName = "_sans";
         this.R22Slider.fontColorSelected = 8421504;
         this.R22Slider.fontSize = 12;
         this.R22Slider.boxHeight = 13;
         this.R22Slider.incrementOrDigit = 1;
         this.R22Slider.isIncrement = true;
         this.R22Slider.limitLower = -200;
         this.R22Slider.limitUpper = 200;
         this.R22Slider.lineColor = 8421504;
         this.R22Slider.lineThickness = 1;
         this.R22Slider.isShowValue = false;
         this.R22Slider.skin = 0;
         this.R22Slider.text = "";
         this.R22Slider.value = 50;
         this.R22Slider.visible = true;
         this.R22Slider.boxWidth = 150;
         try
         {
            this.R22Slider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_mat1Cmb_(){
         try
         {
            this.mat1Cmb["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.mat1Cmb.arrowColor = 102;
         this.mat1Cmb.backColor = 16777215;
         this.mat1Cmb.backOnColor = 16755455;
         this.mat1Cmb.selPanelUpward = true;
         this.mat1Cmb.enabled = true;
         this.mat1Cmb.fontBold = true;
         this.mat1Cmb.fontColor = 6710886;
         this.mat1Cmb.fontEmbed = false;
         this.mat1Cmb.fontName = "_sans";
         this.mat1Cmb.fontSize = 12;
         this.mat1Cmb.boxHeight = 15;
         this.mat1Cmb.labels = ["선택1","선택2"];
         this.mat1Cmb.lineColor = 5592405;
         this.mat1Cmb.lineThickness = 1;
         this.mat1Cmb.selIndex = 0;
         this.mat1Cmb.skin = 0;
         this.mat1Cmb.visible = true;
         this.mat1Cmb.boxWidth = 190;
         try
         {
            this.mat1Cmb["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_mat2Cmb_(){
         try
         {
            this.mat2Cmb["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.mat2Cmb.arrowColor = 102;
         this.mat2Cmb.backColor = 16777215;
         this.mat2Cmb.backOnColor = 16755455;
         this.mat2Cmb.selPanelUpward = true;
         this.mat2Cmb.enabled = true;
         this.mat2Cmb.fontBold = true;
         this.mat2Cmb.fontColor = 6710886;
         this.mat2Cmb.fontEmbed = false;
         this.mat2Cmb.fontName = "_sans";
         this.mat2Cmb.fontSize = 12;
         this.mat2Cmb.boxHeight = 15;
         this.mat2Cmb.labels = ["선택1","선택2"];
         this.mat2Cmb.lineColor = 5592405;
         this.mat2Cmb.lineThickness = 1;
         this.mat2Cmb.selIndex = 0;
         this.mat2Cmb.skin = 0;
         this.mat2Cmb.visible = true;
         this.mat2Cmb.boxWidth = 190;
         try
         {
            this.mat2Cmb["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
__setProp_R12Slider_(){
         try
         {
            this.R12Slider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.R12Slider.arrowColor = 102;
         this.R12Slider.centerSquareOffColor = 21947;
         this.R12Slider.centerSquareOnColor = 13369548;
         this.R12Slider.enabled = true;
         this.R12Slider.fontBold = true;
         this.R12Slider.fontColor = 8421504;
         this.R12Slider.fontEmbed = false;
         this.R12Slider.fontColorLimit = 8421504;
         this.R12Slider.fontName = "_sans";
         this.R12Slider.fontNumName = "_sans";
         this.R12Slider.fontColorSelected = 8421504;
         this.R12Slider.fontSize = 12;
         this.R12Slider.boxHeight = 13;
         this.R12Slider.incrementOrDigit = 1;
         this.R12Slider.isIncrement = true;
         this.R12Slider.limitLower = -200;
         this.R12Slider.limitUpper = 200;
         this.R12Slider.lineColor = 8421504;
         this.R12Slider.lineThickness = 1;
         this.R12Slider.isShowValue = false;
         this.R12Slider.skin = 0;
         this.R12Slider.text = "두 렌즈의 공통 곡률반경";
         this.R12Slider.value = 0;
         this.R12Slider.visible = true;
         this.R12Slider.boxWidth = 150;
         try
         {
            this.R12Slider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
frame1(){
         this.xOrigin = 150;
         this.yOrigin = 150;
         this.numOfPoint = 90;
         this.wavefrontStep0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt.aniMode = 1;
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.canvas.mask = this.mk;
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
         this.addChild(this.pCTxt);
         this.addChild(this.pDTxt);
         this.addChild(this.pFTxt);
         this.addChild(this.mat1Cmb);
         this.addChild(this.mat2Cmb);
         this.addChild(this.coordTxt);
         this.crossGraphics = new Sprite();
         this.gg = this.crossGraphics.graphics;
         this.addChild(this.crossGraphics);
         this.wf = this.pt.wf;
         this.wf.isShowRay = true;
         this.wf.isShowFront = false;
         this.midPoint = Math.floor(this.numOfPoint / 2);
         this.indexField = this.pt.indexField;
         this.Init();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.mat1Cmb.addEventListener(SliderEvent.CHANGE,this.OListener);
         this.mat2Cmb.addEventListener(SliderEvent.CHANGE,this.OListener);
         this.R11Slider.addEventListener(SliderEvent.CHANGE,this.RSliderEventHandler);
         this.R22Slider.addEventListener(SliderEvent.CHANGE,this.RSliderEventHandler);
         this.R12Slider.addEventListener(SliderEvent.CHANGE,this.RSliderEventHandler);
         this.stage.addEventListener(MouseEvent.MOUSE_DOWN,this.reportClick);
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
