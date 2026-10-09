import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-8bfa72046f6cac7a.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 719.9909210205078, "height": 310.00634765625}, "startBtn": {"x": 648.1, "y": 335.4, "width": 70.00534057617188, "height": 20}, "resetBtn": {"x": 648.4, "y": 312.3, "width": 70.00534057617188, "height": 20}, "R1Slider": {"x": 395.4, "y": 314.3, "width": 150.01144409179688, "height": 13}, "opSlider": {"x": 1, "y": 329.5, "width": 150.01144409179688, "height": 13}, "nSlider": {"x": 166.4, "y": 329.5, "width": 55.00419616699219, "height": 12}, "marker": {"x": 60, "y": 155, "width": 9, "height": 9.0186767578125}, "R1Txt": {"x": 579.5, "y": 313.8, "width": null, "height": null}, "objTxt": {"x": 6.4, "y": 311, "width": null, "height": null}, "obj2Txt": {"x": 5.4, "y": 2, "width": null, "height": null}, "R2Slider": {"x": 395.4, "y": 330.3, "width": 150.01144409179688, "height": 13}, "R2Txt": {"x": 579.5, "y": 328.8, "width": null, "height": null}, "dirSlider": {"x": 239.4, "y": 329.5, "width": 150.01144409179688, "height": 13}, "coordTxt": {"x": 586.1, "y": 2, "width": null, "height": null}}, "id": "flash-367212c8f467ffa9", "source": "aberSphericalSim1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/aberration/aberSphericalSim1.swf", "title": "렌즈의 수차 모의실험", "lesson": "5-2-10-3", "width": 720, "height": 360, "animated": true, "controls": [{"clip": "R1Slider", "key": "R1", "label": "R1", "min": -200.0, "max": 200.0, "step": 1.0, "value": 100.0}, {"clip": "nSlider", "key": "n", "label": "n", "min": 1.0, "max": 3.0, "step": 0.02, "value": 1.5}, {"clip": "opSlider", "key": "op", "label": "물체 수평위치", "min": -1000.0, "max": 1000.0, "step": 0.1, "value": -1000.0}, {"clip": "dirSlider", "key": "dir", "label": "렌즈 기울기 (도)", "min": -45.0, "max": 45.0, "step": 1.0, "value": 0.0}, {"clip": "R2Slider", "key": "R2", "label": "R2", "min": -200.0, "max": 200.0, "step": 1.0, "value": -50.0}], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}, {"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "selects": [], "drag": true, "sourceSha256": "0f8ad7a8cb8fbdedeb3e4594f44310daaa22faf5455ac00aa08ae7a9fd2b2b1b", "kernelSha256": "8bfa72046f6cac7ae42027c28f00ddc51ac98fb6742a87d01f93c977cf8dd220", "kernelModule": "optics-batch50b-kernel-8bfa72046f6cac7a.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/ThickLens.as", "sha256": "4a1cac58e49cb14efa2c3812440ecda60ce822a9d0cbff066e5a242f4dcf65c4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "dirSliderEventHandler", "InitWave", "frame1", "opSliderEventHandler", "reportClick", "RSliderEventHandler", "aniReset", "stopAniEventHandler", "InitInstrument", "Init", "stopDragging", "setWhiteBG", "indexReset", "dragObject", "InitCtrl", "ButtonEventHandler", "nSliderEventHandler", "startDragging"], "programModule": "optics-batch50b-program-flash-367212c8f467ffa9.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
opSlider = new Sprite();
offsetX = 0;
offsetY = 0;
midPoint = new Sprite();
R2Txt = new Sprite();
t1 = new Sprite();
marker = new Sprite();
obj2Txt = new Sprite();
resetBtn = new Sprite();
yposi = 0;
backGraphics = new Sprite();
startBtn = new Sprite();
wf = new Sprite();
gg = new Sprite();
gr = new Sprite();
nSlider = new Sprite();
crossGraphics = new Sprite();
yOrigin = 0;
xposi = 0;
R2Slider = new Sprite();
coordTxt = new Sprite();
indexField = new Sprite();
canvas = new Sprite();
wfAux = new Sprite();
isDrag = false;
numOfPoint = 0;
mk = new Sprite();
xOrigin = 0;
dirSlider = new Sprite();
R1Txt = new Sprite();
R1Slider = new Sprite();
wavefrontStep0 = 0;
objTxt = new Sprite();
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_R2Slider__1();
         this.__setProp_opSlider__1();
         this.__setProp_R1Slider__1();
         this.__setProp_resetBtn__1();
         this.__setProp_dirSlider__1();
         this.__setProp_nSlider__1();
      }
__setProp_R1Slider__1(){
         try
         {
            this.R1Slider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.R1Slider.arrowColor = 102;
         this.R1Slider.centerSquareOffColor = 21947;
         this.R1Slider.centerSquareOnColor = 13369548;
         this.R1Slider.enabled = true;
         this.R1Slider.fontBold = true;
         this.R1Slider.fontColor = 8421504;
         this.R1Slider.fontEmbed = false;
         this.R1Slider.fontColorLimit = 8421504;
         this.R1Slider.fontName = "_sans";
         this.R1Slider.fontNumName = "_sans";
         this.R1Slider.fontColorSelected = 8421504;
         this.R1Slider.fontSize = 12;
         this.R1Slider.boxHeight = 13;
         this.R1Slider.incrementOrDigit = 1;
         this.R1Slider.isIncrement = true;
         this.R1Slider.limitLower = -200;
         this.R1Slider.limitUpper = 200;
         this.R1Slider.lineColor = 8421504;
         this.R1Slider.lineThickness = 1;
         this.R1Slider.isShowValue = false;
         this.R1Slider.skin = 0;
         this.R1Slider.text = "";
         this.R1Slider.value = 100;
         this.R1Slider.visible = true;
         this.R1Slider.boxWidth = 150;
         try
         {
            this.R1Slider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
dirSliderEventHandler(param1){
         this.t1.p.dir = -this.dirSlider.value * Math.PI / 180;
         this.indexReset();
      }
InitWave(){
         let _loc1_ = NaN;
         let _loc2_ = null;
         this.gr.clear();
         this.gr.lineStyle = new LineStyle(1,8421504,1);
         this.gr.drawLine(-this.xOrigin,0,720 - this.xOrigin,0);
         this.gr.drawLine(this.t1.p.x,-this.yOrigin,this.t1.p.x,this.yOrigin);
         this.gr.lineStyle = new LineStyle(1,8421504,1);
         this.gr.drawLine(this.t1.p.x + this.t1.length / 2 * Math.sin(this.t1.p.dir),this.t1.p.y - this.t1.length / 2 * Math.cos(this.t1.p.dir),this.t1.p.x - this.t1.length / 2 * Math.sin(this.t1.p.dir),this.t1.p.y + this.t1.length / 2 * Math.cos(this.t1.p.dir));
         this.gr.drawLine(this.t1.p.x - 500 * Math.cos(this.t1.p.dir),this.t1.p.y - 500 * Math.sin(this.t1.p.dir),this.t1.p.x + 500 * Math.cos(this.t1.p.dir),this.t1.p.y + 500 * Math.sin(this.t1.p.dir));
         _loc1_ = Math.atan2(-this.yposi,this.xposi);
         if(Math.abs(this.xposi) >= 1000)
         {
            _loc1_ = Math.atan2(-this.yposi,-(10 - this.xOrigin));
            if(this.xposi > 0)
            {
               this.wf.SetParallelWave(10 - this.xOrigin,this.yposi,_loc1_,150);
            }
            else
            {
               _loc1_ = -_loc1_;
               this.wf.SetParallelWave(10 - this.xOrigin,-this.yposi,_loc1_,150);
            }
         }
         else if(this.xposi > 0)
         {
            if(this.xposi < this.xOrigin - 10)
            {
               this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,0.7,5);
            }
            else
            {
               this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,140 / this.xposi,this.xposi - this.xOrigin + 10);
            }
         }
         else if(this.xposi > -200)
         {
            this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,-0.5,this.xOrigin - 10 - this.xposi);
         }
         else
         {
            this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,100 / this.xposi,this.xOrigin - 10 - this.xposi);
         }
         this.wf.ShowRayStatus(25,new LineStyle(1,16711935,1),10);
         if(Math.abs(this.xposi) >= 1000)
         {
            _loc2_ = "무한대";
         }
         else
         {
            _loc2_ = "(" + this.xposi.toString() + ", " + this.yposi.toString() + ")";
         }
         _loc2_ = "물체위치 " + _loc2_;
         this.objTxt.text = _loc2_;
         if(Math.abs(this.xposi) >= 1000)
         {
            _loc2_ = "무한대";
         }
         else
         {
            _loc2_ = "(" + this.xposi.toString() + ", " + this.yposi.toString() + ")";
         }
         if(this.xposi >= 0)
         {
            _loc2_ = "실물체 " + _loc2_;
         }
         else
         {
            _loc2_ = "허물체 " + _loc2_;
         }
         this.obj2Txt.text = _loc2_;
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
         this.xOrigin = 350;
         this.yOrigin = 155;
         this.numOfPoint = 35;
         this.midPoint = Math.floor(this.numOfPoint / 2);
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
         this.addChild(this.coordTxt);
         this.crossGraphics = new Sprite();
         this.gg = this.crossGraphics.graphics;
         this.addChild(this.crossGraphics);
         this.wf = this.pt.wf;
         this.wf.isShowRay = true;
         this.wf.isShowFront = false;
         this.wfAux = this.pt.wfAux;
         this.indexField = this.pt.indexField;
         this.Init();
         this.indexReset();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.nSlider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
         this.opSlider.addEventListener(SliderEvent.CHANGE,this.opSliderEventHandler);
         this.R1Slider.addEventListener(SliderEvent.CHANGE,this.RSliderEventHandler);
         this.R2Slider.addEventListener(SliderEvent.CHANGE,this.RSliderEventHandler);
         this.dirSlider.addEventListener(SliderEvent.CHANGE,this.dirSliderEventHandler);
         this.isDrag = false;
         this.marker.addEventListener(MouseEvent.MOUSE_DOWN,this.startDragging);
         this.marker.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_DOWN,this.reportClick);
      }
__setProp_nSlider__1(){
         try
         {
            this.nSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.nSlider.arrowColor = 102;
         this.nSlider.enabled = true;
         this.nSlider.fontBold = true;
         this.nSlider.fontColor = 8421504;
         this.nSlider.fontEmbed = false;
         this.nSlider.fontName = "_sans";
         this.nSlider.fontSize = 12;
         this.nSlider.boxHeight = 13;
         this.nSlider.incrementOrDigit = 0.02;
         this.nSlider.isIncrement = true;
         this.nSlider.limitLower = 1;
         this.nSlider.limitUpper = 3;
         this.nSlider.lineColor = 8421504;
         this.nSlider.lineThickness = 1;
         this.nSlider.skin = 0;
         this.nSlider.text = "";
         this.nSlider.value = 1.5;
         this.nSlider.visible = true;
         this.nSlider.boxWidth = 55;
         try
         {
            this.nSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
opSliderEventHandler(param1){
         this.xposi = -this.opSlider.value;
         this.stage.addChild(this.marker);
         this.marker.x = this.xOrigin - this.xposi;
         this.aniReset();
      }
__setProp_opSlider__1(){
         try
         {
            this.opSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.opSlider.arrowColor = 102;
         this.opSlider.centerSquareOffColor = 21947;
         this.opSlider.centerSquareOnColor = 13369548;
         this.opSlider.enabled = true;
         this.opSlider.fontBold = true;
         this.opSlider.fontColor = 8421504;
         this.opSlider.fontEmbed = false;
         this.opSlider.fontColorLimit = 8421504;
         this.opSlider.fontName = "_sans";
         this.opSlider.fontNumName = "_sans";
         this.opSlider.fontColorSelected = 8421504;
         this.opSlider.fontSize = 12;
         this.opSlider.boxHeight = 13;
         this.opSlider.incrementOrDigit = 0.1;
         this.opSlider.isIncrement = true;
         this.opSlider.limitLower = -1000;
         this.opSlider.limitUpper = 1000;
         this.opSlider.lineColor = 8421504;
         this.opSlider.lineThickness = 1;
         this.opSlider.isShowValue = false;
         this.opSlider.skin = 0;
         this.opSlider.text = "물체 수평위치";
         this.opSlider.value = -1000;
         this.opSlider.visible = true;
         this.opSlider.boxWidth = 150;
         try
         {
            this.opSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
reportClick(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         _loc2_ = param1.stageX;
         _loc3_ = param1.stageY;
         if(this.isDrag || _loc3_ > this.mk.height || Boolean(isNaN(_loc3_)))
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
__setProp_dirSlider__1(){
         try
         {
            this.dirSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.dirSlider.arrowColor = 102;
         this.dirSlider.centerSquareOffColor = 21947;
         this.dirSlider.centerSquareOnColor = 13369548;
         this.dirSlider.enabled = true;
         this.dirSlider.fontBold = true;
         this.dirSlider.fontColor = 8421504;
         this.dirSlider.fontEmbed = false;
         this.dirSlider.fontColorLimit = 8421504;
         this.dirSlider.fontName = "_sans";
         this.dirSlider.fontNumName = "_sans";
         this.dirSlider.fontColorSelected = 8421504;
         this.dirSlider.fontSize = 12;
         this.dirSlider.boxHeight = 13;
         this.dirSlider.incrementOrDigit = 1;
         this.dirSlider.isIncrement = true;
         this.dirSlider.limitLower = -45;
         this.dirSlider.limitUpper = 45;
         this.dirSlider.lineColor = 8421504;
         this.dirSlider.lineThickness = 1;
         this.dirSlider.isShowValue = true;
         this.dirSlider.skin = 0;
         this.dirSlider.text = "렌즈 기울기 (도)";
         this.dirSlider.value = 0;
         this.dirSlider.visible = true;
         this.dirSlider.boxWidth = 150;
         try
         {
            this.dirSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
RSliderEventHandler(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         _loc2_ = this.R1Slider.value;
         if(_loc2_ == 0)
         {
            _loc2_ = 1;
         }
         _loc3_ = Math.round(10000 / _loc2_);
         this.t1.R1 = _loc3_;
         _loc2_ = this.R2Slider.value;
         if(_loc2_ == 0)
         {
            _loc2_ = 1;
         }
         _loc3_ = Math.round(10000 / _loc2_);
         this.t1.R2 = _loc3_;
         this.t1.thickness = 100;
         this.indexReset();
      }
aniReset(){
         this.pt.stopAni();
         this.startBtn.isON = false;
         this.pt.clearWaveFront();
         this.InitWave();
         this.startBtn.visible = true;
      }
stopAniEventHandler(param1){
         let _loc2_ = 0;
         let _loc3_ = null;
         let _loc4_ = null;
         let _loc5_ = null;
         let _loc6_ = 0;
         let _loc7_ = false;
         this.startBtn.isON = false;
         this.startBtn.visible = false;
         this.gr.moveTo(0,0);
         this.gr.lineStyle = new LineStyle(0,0,0);
         this.gr.fillStyle = new FillStyle(16711935,1);
         _loc6_ = int(this.numOfPoint);
         _loc2_ = int(0);
         while(_loc2_ < this.numOfPoint - 1)
         {
            _loc3_ = this.wf.ray[_loc2_];
            _loc4_ = this.wf.ray[_loc2_ + 1];
            if(_loc3_.countReflection == 0 && _loc3_.countRefraction == 2 && _loc4_.countReflection == 0 && _loc4_.countRefraction == 2)
            {
               _loc6_ = int(Math.min(_loc6_,_loc2_));
               _loc5_ = _loc3_.p.findCrossSection(_loc4_.p);
               if(Math.abs(_loc5_.x) < 1000)
               {
                  this.gr.drawCircle(_loc5_.x,_loc5_.y,1.5,true);
               }
            }
            _loc2_++;
         }
         this.gr.moveTo(0,0);
         this.gr.lineStyle = new LineStyle(0,0,0);
         this.gr.fillStyle = new FillStyle(16711680,1);
         _loc7_ = false;
         _loc2_ = int(0);
         while(_loc2_ < this.midPoint)
         {
            _loc3_ = this.wf.ray[_loc2_];
            _loc4_ = this.wf.ray[this.numOfPoint - _loc2_ - 1];
            if(_loc3_.countReflection == 0 && _loc3_.countRefraction == 2 && _loc4_.countReflection == 0 && _loc4_.countRefraction == 2)
            {
               _loc5_ = _loc3_.p.findCrossSection(_loc4_.p);
               if(_loc2_ == this.midPoint - 1 && _loc5_.x < 0)
               {
                  _loc7_ = true;
               }
               if(Math.abs(this.t1.p.x - _loc5_.x) < 500 && Math.abs(this.t1.p.x - _loc5_.x) > 20 && (this.t1.focalLength() > 0 && _loc5_.x > this.t1.p.x || this.t1.focalLength() < 0 && _loc5_.x < this.t1.p.x))
               {
                  this.gr.drawCircle(_loc5_.x,_loc5_.y,1.5,true);
               }
            }
            _loc2_++;
         }
         if(_loc7_)
         {
            this.wf.DrawRayExtendLine(0,2,false);
         }
      }
InitInstrument(){
         this.t1 = new ThickLens(1.5,100,-200,100,300);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.t1.makeThinner();
         this.indexField.AddInstrument(this.t1);
         this.indexField.Draw();
      }
Init(){
         this.setWhiteBG(true);
         this.InitCtrl();
         this.InitInstrument();
      }
__setProp_R2Slider__1(){
         try
         {
            this.R2Slider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.R2Slider.arrowColor = 102;
         this.R2Slider.centerSquareOffColor = 21947;
         this.R2Slider.centerSquareOnColor = 13369548;
         this.R2Slider.enabled = true;
         this.R2Slider.fontBold = true;
         this.R2Slider.fontColor = 8421504;
         this.R2Slider.fontEmbed = false;
         this.R2Slider.fontColorLimit = 8421504;
         this.R2Slider.fontName = "_sans";
         this.R2Slider.fontNumName = "_sans";
         this.R2Slider.fontColorSelected = 8421504;
         this.R2Slider.fontSize = 12;
         this.R2Slider.boxHeight = 13;
         this.R2Slider.incrementOrDigit = 1;
         this.R2Slider.isIncrement = true;
         this.R2Slider.limitLower = -200;
         this.R2Slider.limitUpper = 200;
         this.R2Slider.lineColor = 8421504;
         this.R2Slider.lineThickness = 1;
         this.R2Slider.isShowValue = false;
         this.R2Slider.skin = 0;
         this.R2Slider.text = "";
         this.R2Slider.value = -50;
         this.R2Slider.visible = true;
         this.R2Slider.boxWidth = 150;
         try
         {
            this.R2Slider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
stopDragging(param1){
         this.isDrag = false;
         this.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
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
            this.opSlider.setCustomColor(2);
            this.R1Slider.setCustomColor(2);
            this.R2Slider.setCustomColor(2);
            this.nSlider.setCustomColor(2);
            this.dirSlider.setCustomColor(2);
         }
      }
indexReset(){
         let _loc1_ = null;
         let _loc2_ = null;
         _loc1_ = Math.abs(this.t1.R1) >= ThickLens.flatCriterior ? "무한대" : this.t1.R1.toString();
         _loc2_ = Math.abs(this.t1.R2) >= ThickLens.flatCriterior ? "무한대" : this.t1.R2.toString();
         this.R1Txt.text = _loc1_;
         this.R2Txt.text = _loc2_;
         this.indexField.Draw();
         this.aniReset();
      }
dragObject(param1){
         this.marker.x = param1.stageX - this.offsetX;
         this.marker.y = param1.stageY - this.offsetY;
         this.xposi = this.xOrigin - this.marker.x;
         this.yposi = this.yOrigin - this.marker.y;
         this.xposi = Math.round(this.xposi * 10) / 10;
         this.yposi = Math.round(this.yposi * 10) / 10;
         if(this.yposi > 0)
         {
            this.yposi = 0;
            this.marker.y = this.yOrigin - this.yposi;
         }
         else if(this.yposi < 0)
         {
            this.yposi = 0;
            this.marker.y = this.yOrigin - this.yposi;
         }
         this.opSlider.value = -this.xposi;
         this.aniReset();
         param1.updateAfterEvent();
      }
InitCtrl(){
         this.xposi = this.xOrigin - this.marker.x;
         this.yposi = this.yOrigin - this.marker.y;
         this.xposi = Math.round(this.xposi * 10) / 10;
         this.yposi = Math.round(this.yposi * 10) / 10;
         this.opSlider.value = -this.xposi;
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
nSliderEventHandler(param1){
         this.t1.rIndex = this.nSlider.value;
         this.indexReset();
      }
startDragging(param1){
         this.isDrag = true;
         this.offsetX = param1.stageX - this.marker.x;
         this.offsetY = param1.stageY - this.marker.y;
         this.stage.addChild(this.marker);
         this.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
