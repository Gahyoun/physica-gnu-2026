import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-f402a795ba065de6.mjs';
const SPEC={"placements": {"resetBtn": {"x": 427.4, "y": 287.3, "width": 70.00534057617188, "height": 20}, "imageTxt": {"x": 291.8, "y": 2, "width": null, "height": null}, "obj2Txt": {"x": 5.4, "y": 2, "width": null, "height": null}, "nTxt": {"x": 5, "y": 262.1, "width": null, "height": null}, "apexTxt": {"x": 5, "y": 294.1, "width": null, "height": null}, "dirTxt": {"x": 5, "y": 278.1, "width": null, "height": null}}, "id": "flash-f91b55d3bb43716c", "source": "simprism2.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/prism/simprism2.swf", "title": "프리즘", "lesson": "5-2-6-1", "width": 500, "height": 310, "animated": true, "controls": [], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "selects": [], "drag": false, "sourceSha256": "842466aead4fc719727d78db85ff3f5fac98e00d3754043d9de1abe1e16de3cc", "kernelSha256": "f402a795ba065de6eb409aec53db6d46d162ddcfd44c44e07747b2f1595bca86", "kernelModule": "optics-batch50b-kernel-f402a795ba065de6.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prism.as", "sha256": "b163d9c7694b374a2b30152a6c226590d807a2b7566f4f47f7f81af413f0d341"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "InitInstrument", "Init", "InitWave", "setWhiteBG", "frame1", "indexReset", "ButtonEventHandler", "aniReset", "stopAniEventHandler"], "programModule": "optics-batch50b-program-flash-f91b55d3bb43716c.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prism,Prototype,RayTrace,Rindex,ScreenCoord,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
imageTxt = new Sprite();
nTxt = new Sprite();
apex = 0;
wavefrontStep0 = 0;
t1 = new Sprite();
indexField = new Sprite();
canvas = new Sprite();
obj2Txt = new Sprite();
n = 0;
backGraphics = new Sprite();
numOfPoint = 0;
midPoint = 0;
resetBtn = new Sprite();
dir = 0;
dirTxt = new Sprite();
xOrigin = 0;
wf = new Sprite();
apexTxt = new Sprite();
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_resetBtn__1();
      }
InitInstrument(){
         this.t1 = new Prism(1.5,new Point2D(100,-150,0),new Point2D(0,150,0),new Point2D(-100,-150,0));
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.makeIsosceles();
         this.indexField.AddInstrument(this.t1);
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-110,500,310);
      }
Init(){
         this.setWhiteBG(true);
         this.InitInstrument();
         this.aniReset();
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
         this.wf.SetParallelWave(10 - this.xOrigin,50,0,150);
         this.wf.ray[this.midPoint].rayLineStyle = new LineStyle(2,16711935,1,false,LineScaleMode.NONE);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),5);
         _loc1_ = Math.round((this.apex / 2 + this.dir) * 100) / 100;
         this.obj2Txt.text = "입사각: " + _loc1_;
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
         this.xOrigin = 250;
         this.yOrigin = 200;
         this.numOfPoint = 35;
         this.wavefrontStep0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt.aniMode = 1;
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.addChild(this.resetBtn);
         this.addChild(this.nTxt);
         this.addChild(this.dirTxt);
         this.addChild(this.apexTxt);
         this.wf = this.pt.wf;
         this.wf.isShowRay = true;
         this.wf.isShowFront = false;
         this.midPoint = Math.floor(this.numOfPoint / 2);
         this.indexField = this.pt.indexField;
         this.Init();
         this.indexReset();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
      }
indexReset(){
         this.apex = Math.round(5 + Math.random() * 65);
         this.t1.setApexAngle(Math.PI / 180 * this.apex);
         this.dir = Math.round(-20 + Math.random() * 40);
         this.t1.p.dir = Math.PI / 180 * this.dir;
         this.n = 1.3 + Math.round(Math.random() * 0.4 * 100) / 100;
         this.t1.rIndex = this.n;
         this.apexTxt.text = "꼭지각: " + Math.round(this.apex) + " 도";
         this.dirTxt.text = "회전각: " + Math.round(-this.dir) + " 도";
         this.nTxt.text = "굴절률: " + Math.round(this.n * 100) / 100;
         this.t1.positionCenter();
         this.indexField.Draw();
      }
ButtonEventHandler(param1){
         if(param1.target == this.resetBtn)
         {
            this.aniReset();
         }
      }
aniReset(){
         this.pt.clearWaveFront();
         this.imageTxt.text = "";
         this.indexReset();
         this.pt.stopAni();
         this.InitWave();
         this.pt.startAni();
      }
stopAniEventHandler(param1){
         let _loc2_ = NaN;
         _loc2_ = -180 / Math.PI * this.wf.ray[this.midPoint].p.dir;
         this.imageTxt.text = "중심 빔각도: " + Math.round(_loc2_ * 100) / 100 + "도";
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
