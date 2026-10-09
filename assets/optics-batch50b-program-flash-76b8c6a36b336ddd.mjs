import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-f402a795ba065de6.mjs';
const SPEC={"placements": {"resetBtn": {"x": 427.4, "y": 287.3, "width": 70.00534057617188, "height": 20}, "imageTxt": {"x": 358, "y": 2, "width": null, "height": null}, "obj2Txt": {"x": 5.4, "y": 2, "width": null, "height": null}, "dirSlider": {"x": 3.4, "y": 279.3, "width": 150.01144409179688, "height": 13}, "nSlider": {"x": 3.4, "y": 249.3, "width": 55.00419616699219, "height": 12}}, "id": "flash-76b8c6a36b336ddd", "source": "simprism3.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/prism/simprism3.swf", "title": "아베 프리즘", "lesson": "5-2-6-2", "width": 500, "height": 310, "animated": true, "controls": [{"clip": "nSlider", "key": "n", "label": "프리즘 굴절률", "min": 1.4, "max": 1.7, "step": 0.01, "value": 1.5}, {"clip": "dirSlider", "key": "dir", "label": "프리즘 방향 (도)", "min": 25.0, "max": 60.0, "step": 0.05, "value": 45.0}], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "selects": [], "drag": false, "sourceSha256": "a378c991580e111485942ac66785d0f0df27c2e3617b6b3e739734b719605f2e", "kernelSha256": "f402a795ba065de6eb409aec53db6d46d162ddcfd44c44e07747b2f1595bca86", "kernelModule": "optics-batch50b-kernel-f402a795ba065de6.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prism.as", "sha256": "b163d9c7694b374a2b30152a6c226590d807a2b7566f4f47f7f81af413f0d341"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "Init", "InitInstrument", "InitWave", "setWhiteBG", "frame1", "indexReset", "ButtonEventHandler", "sliderEventHandler", "aniReset", "nSliderEventHandler", "stopAniEventHandler"], "programModule": "optics-batch50b-program-flash-76b8c6a36b336ddd.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prism,Prototype,RayTrace,Rindex,ScreenCoord,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
imageTxt = new Sprite();
t1 = new Sprite();
wavefrontStep0 = 0;
indexField = new Sprite();
canvas = new Sprite();
obj2Txt = new Sprite();
backGraphics = new Sprite();
numOfPoint = 0;
midPoint = 0;
resetBtn = new Sprite();
xOrigin = 0;
dirSlider = new Sprite();
wf = new Sprite();
nSlider = new Sprite();
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_dirSlider__1();
         this.__setProp_nSlider__1();
         this.__setProp_resetBtn__1();
      }
Init(){
         this.setWhiteBG(true);
         this.InitInstrument();
         this.aniReset();
      }
InitInstrument(){
         this.t1 = new Prism(1.5,new Point2D(0,0,0),new Point2D(200 * Math.sqrt(3),0),new Point2D(0,-200,0));
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.positionCenter();
         this.t1.p.dir = -Math.PI * this.dirSlider.value / 180;
         this.indexField.AddInstrument(this.t1);
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-150,500,310);
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
         let _loc1_ = NaN;
         this.wf.SetParallelWave(10 - this.xOrigin,65,0,50);
         this.wf.ray[this.midPoint].rayLineStyle = new LineStyle(2,16711935,1,false,LineScaleMode.NONE);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),2);
         _loc1_ = Math.round(-180 / Math.PI * this.t1.p.dir * 100) / 100;
         this.obj2Txt.text = "입사각: " + _loc1_ + "도";
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
         this.nSlider.incrementOrDigit = 0.01;
         this.nSlider.isIncrement = true;
         this.nSlider.limitLower = 1.4;
         this.nSlider.limitUpper = 1.7;
         this.nSlider.lineColor = 8421504;
         this.nSlider.lineThickness = 1;
         this.nSlider.skin = 0;
         this.nSlider.text = "프리즘 굴절률";
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
frame1(){
         this.xOrigin = 250;
         this.yOrigin = 130;
         this.numOfPoint = 5;
         this.wavefrontStep0 = 200;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt.aniMode = 1;
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.addChild(this.resetBtn);
         this.wf = this.pt.wf;
         this.wf.isShowRay = true;
         this.wf.isShowFront = false;
         this.midPoint = Math.floor(this.numOfPoint / 2);
         this.indexField = this.pt.indexField;
         this.Init();
         this.indexReset();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.dirSlider.addEventListener(SliderEvent.CHANGE,this.sliderEventHandler);
         this.nSlider.addEventListener(SliderEvent.CHANGE,this.nSliderEventHandler);
      }
indexReset(){
         this.indexField.Draw();
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
         this.dirSlider.incrementOrDigit = 0.05;
         this.dirSlider.isIncrement = true;
         this.dirSlider.limitLower = 25;
         this.dirSlider.limitUpper = 60;
         this.dirSlider.lineColor = 8421504;
         this.dirSlider.lineThickness = 1;
         this.dirSlider.isShowValue = true;
         this.dirSlider.skin = 0;
         this.dirSlider.text = "프리즘 방향 (도)";
         this.dirSlider.value = 45;
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
ButtonEventHandler(param1){
         if(param1.target == this.resetBtn)
         {
            this.aniReset();
         }
      }
sliderEventHandler(param1){
         this.t1.p.dir = -Math.PI * this.dirSlider.value / 180;
         this.aniReset();
      }
aniReset(){
         this.pt.clearWaveFront();
         this.imageTxt.text = "";
         this.indexReset();
         this.pt.stopAni();
         this.InitWave();
         this.pt.startAni();
      }
nSliderEventHandler(param1){
         if(param1.target == this.nSlider)
         {
            this.t1.rIndex = this.nSlider.value;
         }
         this.aniReset();
      }
stopAniEventHandler(param1){
         let _loc2_ = NaN;
         this.wf.FindCrossSectionWithBackup(true,false);
         _loc2_ = -180 / Math.PI * this.wf.ray[this.midPoint].p.dir;
         this.imageTxt.text = "편향각: " + Math.round(_loc2_ * 100) / 100 + "도";
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
