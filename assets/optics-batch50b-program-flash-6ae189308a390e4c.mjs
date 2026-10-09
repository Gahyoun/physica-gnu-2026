import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-4bbd29b1bfc0a729.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 699.9961853027344, "height": 410.0101318359375}, "startBtn": {"x": 625.1, "y": 435.4, "width": 70.00534057617188, "height": 20}, "resetBtn": {"x": 625.4, "y": 412.3, "width": 70.00534057617188, "height": 20}, "apexSlider": {"x": 201.35, "y": 426.3, "width": 150.01144409179688, "height": 13}, "obj2Txt": {"x": 5.4, "y": -1, "width": null, "height": null}, "dirSlider": {"x": 341.85, "y": 426.3, "width": 150.01144409179688, "height": 13}, "dir2Slider": {"x": 482.4, "y": 426.3, "width": 150.01144409179688, "height": 13}, "marker": {"x": 372.4, "y": 254.4, "width": 11, "height": 11.0228271484375}, "matCmb": {"x": 8.35, "y": 419.85, "width": 131, "height": 16}, "n400Txt": {"x": 632.3, "y": 14.15, "width": null, "height": null}, "n500Txt": {"x": 632.3, "y": 26.55, "width": null, "height": null}, "n600Txt": {"x": 632.3, "y": 38.95, "width": null, "height": null}, "n700Txt": {"x": 632.3, "y": 51.35, "width": null, "height": null}, "matTxt": {"x": 456.05, "y": -0.7, "width": null, "height": null}, "lensTxt": {"x": 339.95, "y": 2.2, "width": null, "height": null}, "coordTxt": {"x": 558.1, "y": 370.15, "width": null, "height": null}}, "id": "flash-6ae189308a390e4c", "source": "simdisprism2.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/prism/simdisprism2.swf", "title": "프리즘을 이용한 스펙트럼 측정", "lesson": "5-2-6-5", "width": 700, "height": 460, "animated": true, "controls": [{"clip": "dir2Slider", "key": "dir2", "label": "렌즈 방향 (도)", "min": 0.0, "max": 90.0, "step": 1.0, "value": 50.0}, {"clip": "dirSlider", "key": "dir", "label": "프리즘 방향 (도)", "min": 0.0, "max": 60.0, "step": 1.0, "value": 30.0}, {"clip": "apexSlider", "key": "apex", "label": "프리즘 꼭지각 (도)", "min": 30.0, "max": 75.0, "step": 1.0, "value": 60.0}], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}, {"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "selects": [{"clip": "matCmb", "label": "렌즈 재료"}], "drag": true, "sourceSha256": "03da3ea2ec5bac20019cd85504de517509e240ae9d7fa876fb1cbb810c38a7dd", "kernelSha256": "4bbd29b1bfc0a72903d7f4ada6f33a1b22d37f4d1b8c2ddb4c3827e18e3e21be", "kernelModule": "optics-batch50b-kernel-4bbd29b1bfc0a729.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prism.as", "sha256": "b163d9c7694b374a2b30152a6c226590d807a2b7566f4f47f7f81af413f0d341"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/ThickLens.as", "sha256": "4a1cac58e49cb14efa2c3812440ecda60ce822a9d0cbff066e5a242f4dcf65c4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "OListener", "InitWave", "frame1", "reportClick", "sliderEventHandler", "aniReset", "stopAniEventHandler", "Init", "InitInstrument", "stopDragging", "setWhiteBG", "indexReset", "apexSliderEventHandler", "dragObject", "ButtonEventHandler", "startDragging"], "programModule": "optics-batch50b-program-flash-6ae189308a390e4c.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prism,Prototype,RayTrace,Rindex,ScreenCoord,ThickLens,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
offsetX = 0;
offsetY = 0;
t2 = new Sprite();
t1 = new Sprite();
obj2Txt = new Sprite();
marker = new Sprite();
n700Txt = new Sprite();
dir2Slider = new Sprite();
n400Txt = new Sprite();
resetBtn = new Sprite();
yposi = 0;
lensTxt = new Sprite();
startBtn = new Sprite();
backGraphics = new Sprite();
apexSlider = new Sprite();
wf = new Sprite();
gg = new Sprite();
gr = new Sprite();
crossGraphics = new Sprite();
matTxt = new Sprite();
yOrigin = 0;
xposi = 0;
n500Txt = new Sprite();
coordTxt = new Sprite();
indexField = new Sprite();
canvas = new Sprite();
isDrag = false;
numOfPoint = 0;
mk = new Sprite();
xOrigin = 0;
n600Txt = new Sprite();
dirSlider = new Sprite();
matCmb = new Sprite();
wavefrontStep0 = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_dir2Slider__1();
         this.__setProp_apexSlider__1();
         this.__setProp_matCmb__1();
         this.__setProp_dirSlider__1();
         this.__setProp_resetBtn__1();
      }
OListener(param1){
         if(param1.target == this.matCmb)
         {
            this.t1.material = param1.value;
            this.indexReset();
         }
      }
InitWave(){
         let _loc1_ = NaN;
         this.gr.clear();
         this.gr.lineStyle(1,8421504,1,false,LineScaleMode.NONE);
         this.gr.moveTo(0,this.yOrigin);
         this.gr.lineTo(this.width,this.yOrigin);
         this.gr.moveTo(this.xOrigin,0);
         this.gr.lineTo(this.xOrigin,410);
         this.gr.moveTo(0,0);
         this.wf.SetColorParallelWave(10 - this.xOrigin,75,0,72);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,5),12);
         _loc1_ = Math.round((this.apexSlider.value / 2 + this.dirSlider.value) * 100) / 100;
         this.obj2Txt.text = "입사각: " + _loc1_;
      }
__setProp_dir2Slider__1(){
         try
         {
            this.dir2Slider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.dir2Slider.arrowColor = 102;
         this.dir2Slider.centerSquareOffColor = 21947;
         this.dir2Slider.centerSquareOnColor = 13369548;
         this.dir2Slider.enabled = true;
         this.dir2Slider.fontBold = true;
         this.dir2Slider.fontColor = 8421504;
         this.dir2Slider.fontEmbed = false;
         this.dir2Slider.fontColorLimit = 8421504;
         this.dir2Slider.fontName = "_sans";
         this.dir2Slider.fontNumName = "_sans";
         this.dir2Slider.fontColorSelected = 8421504;
         this.dir2Slider.fontSize = 12;
         this.dir2Slider.boxHeight = 13;
         this.dir2Slider.incrementOrDigit = 1;
         this.dir2Slider.isIncrement = true;
         this.dir2Slider.limitLower = 0;
         this.dir2Slider.limitUpper = 90;
         this.dir2Slider.lineColor = 8421504;
         this.dir2Slider.lineThickness = 1;
         this.dir2Slider.isShowValue = true;
         this.dir2Slider.skin = 0;
         this.dir2Slider.text = "렌즈 방향 (도)";
         this.dir2Slider.value = 50;
         this.dir2Slider.visible = true;
         this.dir2Slider.boxWidth = 125;
         try
         {
            this.dir2Slider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
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
         this.xOrigin = 210;
         this.yOrigin = 150;
         this.numOfPoint = 100;
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
         this.crossGraphics = new Sprite();
         this.gg = this.crossGraphics.graphics;
         this.addChild(this.crossGraphics);
         this.addChild(this.marker);
         this.addChild(this.matCmb);
         this.addChild(this.coordTxt);
         this.wf = this.pt.wf;
         this.wf.isShowRay = true;
         this.wf.isShowFront = false;
         this.indexField = this.pt.indexField;
         this.Init();
         this.indexReset();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.apexSlider.addEventListener(SliderEvent.CHANGE,this.apexSliderEventHandler);
         this.dirSlider.addEventListener(SliderEvent.CHANGE,this.sliderEventHandler);
         this.dir2Slider.addEventListener(SliderEvent.CHANGE,this.sliderEventHandler);
         this.matCmb.addEventListener(SliderEvent.CHANGE,this.OListener);
         this.isDrag = false;
         this.marker.addEventListener(MouseEvent.MOUSE_DOWN,this.startDragging);
         this.marker.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_DOWN,this.reportClick);
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
         this.gg.lineStyle(1,0,1,false,LineScaleMode.NONE);
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
         this.dirSlider.limitLower = 0;
         this.dirSlider.limitUpper = 60;
         this.dirSlider.lineColor = 8421504;
         this.dirSlider.lineThickness = 1;
         this.dirSlider.isShowValue = true;
         this.dirSlider.skin = 0;
         this.dirSlider.text = "프리즘 방향 (도)";
         this.dirSlider.value = 30;
         this.dirSlider.visible = true;
         this.dirSlider.boxWidth = 125;
         try
         {
            this.dirSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
sliderEventHandler(param1){
         if(param1.target == this.dirSlider)
         {
            this.t1.p.dir = -Math.PI * this.dirSlider.value / 180;
            this.indexReset();
         }
         else if(param1.target == this.dir2Slider)
         {
            this.t2.p.dir = -Math.PI * this.dir2Slider.value / 180;
            this.indexReset();
         }
      }
aniReset(){
         this.pt.stopAni();
         this.startBtn.isON = false;
         this.pt.clearWaveFront();
         this.InitWave();
         this.startBtn.visible = true;
      }
__setProp_matCmb__1(){
         try
         {
            this.matCmb["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.matCmb.arrowColor = 102;
         this.matCmb.backColor = 16777215;
         this.matCmb.backOnColor = 16755455;
         this.matCmb.selPanelUpward = true;
         this.matCmb.enabled = true;
         this.matCmb.fontBold = true;
         this.matCmb.fontColor = 6710886;
         this.matCmb.fontEmbed = false;
         this.matCmb.fontName = "_sans";
         this.matCmb.fontSize = 12;
         this.matCmb.boxHeight = 15;
         this.matCmb.labels = ["선택1","선택2"];
         this.matCmb.lineColor = 5592405;
         this.matCmb.lineThickness = 1;
         this.matCmb.selIndex = 0;
         this.matCmb.skin = 0;
         this.matCmb.visible = true;
         this.matCmb.boxWidth = 175;
         try
         {
            this.matCmb["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
stopAniEventHandler(param1){
         this.startBtn.isON = false;
         this.startBtn.visible = false;
      }
__setProp_apexSlider__1(){
         try
         {
            this.apexSlider["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.apexSlider.arrowColor = 102;
         this.apexSlider.centerSquareOffColor = 21947;
         this.apexSlider.centerSquareOnColor = 13369548;
         this.apexSlider.enabled = true;
         this.apexSlider.fontBold = true;
         this.apexSlider.fontColor = 8421504;
         this.apexSlider.fontEmbed = false;
         this.apexSlider.fontColorLimit = 8421504;
         this.apexSlider.fontName = "_sans";
         this.apexSlider.fontNumName = "_sans";
         this.apexSlider.fontColorSelected = 8421504;
         this.apexSlider.fontSize = 12;
         this.apexSlider.boxHeight = 13;
         this.apexSlider.incrementOrDigit = 1;
         this.apexSlider.isIncrement = true;
         this.apexSlider.limitLower = 30;
         this.apexSlider.limitUpper = 75;
         this.apexSlider.lineColor = 8421504;
         this.apexSlider.lineThickness = 1;
         this.apexSlider.isShowValue = true;
         this.apexSlider.skin = 0;
         this.apexSlider.text = "프리즘 꼭지각 (도)";
         this.apexSlider.value = 60;
         this.apexSlider.visible = true;
         this.apexSlider.boxWidth = 125;
         try
         {
            this.apexSlider["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
Init(){
         let _loc1_ = 0;
         let _loc2_ = 0;
         _loc1_ = int(int(Rindex.data.length));
         this.matCmb.labels = new Array(_loc1_);
         _loc2_ = int(0);
         while(_loc2_ < _loc1_)
         {
            this.matCmb.labels[_loc2_] = Rindex.data[_loc2_][0] + " - " + Rindex.data[_loc2_][1];
            _loc2_++;
         }
         this.setWhiteBG(true);
         this.InitInstrument();
      }
InitInstrument(){
         this.t1 = new Prism(1.5,new Point2D(100,-150,0),new Point2D(0,100,0),new Point2D(-100,-150,0));
         this.t1.positionCenter();
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = -Math.PI / 6;
         this.t1.makeIsosceles();
         this.t1.setApexAngle(Math.PI / 180 * this.apexSlider.value);
         this.t1.material = this.matCmb.selIndex;
         this.t2 = new ThickLens(2,300,-300,100,200);
         this.t2.makeThinner();
         this.t2.p.x = this.marker.x - this.xOrigin;
         this.t2.p.y = this.yOrigin - this.marker.y;
         this.t2.p.dir = -50 * Math.PI / 180;
         this.indexField.AddInstrument(this.t1);
         this.indexField.AddInstrument(this.t2);
         this.indexField.Draw();
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-310,720,600);
      }
stopDragging(param1){
         this.isDrag = false;
         this.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(!param1)
         {
            this.apexSlider.setCustomColor(2);
            this.dirSlider.setCustomColor(2);
            this.dir2Slider.setCustomColor(2);
            this.matCmb.setCustomColor(2);
         }
      }
indexReset(){
         let _loc1_ = NaN;
         let _loc2_ = null;
         this.indexField.Draw();
         this.aniReset();
         _loc1_ = Math.round(Rindex.getRindex(this.t1.material,400) * 100000) / 100000;
         _loc2_ = _loc1_ > 1 ? "" + _loc1_ : " NA ";
         this.n400Txt.text = _loc2_;
         _loc1_ = Math.round(Rindex.getRindex(this.t1.material,500) * 100000) / 100000;
         _loc2_ = _loc1_ > 1 ? "" + _loc1_ : " NA ";
         this.n500Txt.text = _loc2_;
         _loc1_ = Math.round(Rindex.getRindex(this.t1.material,600) * 100000) / 100000;
         _loc2_ = _loc1_ > 1 ? "" + _loc1_ : " NA ";
         this.n600Txt.text = _loc2_;
         _loc1_ = Math.round(Rindex.getRindex(this.t1.material,700) * 100000) / 100000;
         _loc2_ = _loc1_ > 1 ? "" + _loc1_ : " NA ";
         this.n700Txt.text = _loc2_;
         this.matTxt.text = Rindex.data[this.t1.material][0] + " - " + Rindex.data[this.t1.material][1];
         this.lensTxt.text = "렌즈 (" + Math.round(this.t2.p.x * 10) / 10 + ", " + Math.round(this.t2.p.y * 10) / 10 + ")";
         this.gr.moveTo(this.xOrigin + this.t2.p.x - 200 * Math.cos(this.t2.p.dir),this.yOrigin - this.t2.p.y + 200 * Math.sin(this.t2.p.dir));
         this.gr.lineTo(this.xOrigin + this.t2.p.x + 200 * Math.cos(this.t2.p.dir),this.yOrigin - this.t2.p.y - 200 * Math.sin(this.t2.p.dir));
      }
apexSliderEventHandler(param1){
         this.t1.setApexAngle(Math.PI / 180 * this.apexSlider.value);
         this.indexReset();
      }
dragObject(param1){
         let _loc2_ = NaN;
         let _loc3_ = NaN;
         this.marker.x = param1.stageX - this.offsetX;
         this.marker.y = param1.stageY - this.offsetY;
         _loc2_ = this.marker.x - this.xOrigin;
         _loc3_ = this.yOrigin - this.marker.y;
         if(_loc3_ > 100)
         {
            _loc3_ = 100;
            this.marker.y = this.yOrigin - _loc3_;
         }
         else if(_loc3_ < -200)
         {
            _loc3_ = -200;
            this.marker.y = this.yOrigin - _loc3_;
         }
         if(_loc2_ > 400)
         {
            _loc2_ = 400;
            this.marker.x = _loc2_ + this.xOrigin;
         }
         else if(_loc2_ < 0)
         {
            _loc2_ = 0;
            this.marker.x = _loc2_ + this.xOrigin;
         }
         this.t2.p.x = _loc2_;
         this.t2.p.y = _loc3_;
         this.indexReset();
         param1.updateAfterEvent();
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
startDragging(param1){
         this.isDrag = true;
         this.offsetX = param1.stageX - this.marker.x;
         this.offsetY = param1.stageY - this.marker.y;
         this.stage.addChild(this.marker);
         this.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
