import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest } from './optics-batch50-adapter.mjs';
import {createKernel} from './optics-batch50-kernel-239fe7b6cfd6fe47.mjs';
const SPEC={"placements": {"mk": {"x": 0, "y": 0, "width": 599.9931335449219, "height": 300.00238037109375}, "showRayChk": {"x": 5.4, "y": 305.3, "width": 73.00556945800781, "height": 12.98175048828125}, "showFrontChk": {"x": 94.4, "y": 305.3, "width": 73.00556945800781, "height": 12.98175048828125}, "resetBtn": {"x": 527.3, "y": 300.3, "width": 70.00534057617188, "height": 19.971923828125}, "curvTxt": {"x": 374.05, "y": 302.3, "width": null, "height": null}, "imageTxt": {"x": 389.8, "y": 2, "width": null, "height": null}, "obj2Txt": {"x": 5.4, "y": 2, "width": null, "height": null}, "marker": {"x": -16, "y": 331.9, "width": 9, "height": 9.00604248046875}}, "id": "flash-558538a6a36d5249", "source": "focalparabolasim1.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/mirror/focalparabolasim1.swf", "title": "포물면거울에서의 빛의 진행", "lesson": "5-2-2-3", "width": 600, "height": 320, "animated": true, "controls": [], "checks": [{"clip": "showRayChk", "label": "광선 보기", "value": false}, {"clip": "showFrontChk", "label": "파면 보기", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "drag": false, "sourceSha256": "54449991ea9e160141016e825582221edfd21b014d670cc1b3e9d950f875bc14", "kernelSha256": "239fe7b6cfd6fe47fdfc107d6d7e58995a725bf7f70745727714715f787b41ad", "kernelModule": "optics-batch50-kernel-239fe7b6cfd6fe47.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Parabola.as", "sha256": "55643b091fd3e492560b0db7e5df431a02f74ca0821a0f55d8b85653a239b05d"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "stopAniEventHandler", "Init", "InitWave", "frame1", "InitInstrument", "setWhiteBG", "indexReset", "CheckBoxEventHandler", "rayShowSet", "ButtonEventHandler", "InitCtrl", "aniReset"], "programModule": "optics-batch50-program-flash-558538a6a36d5249.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Parabola,Point2D,Prototype,RayTrace,Rindex,ScreenCoord,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
imageTxt = new Sprite();
xposi = 0;
t1 = new Sprite();
wavefrontStep0 = 0;
indexField = new Sprite();
canvas = new Sprite();
curvTxt = new Sprite();
obj2Txt = new Sprite();
wfAux = new Sprite();
showRayChk = new Sprite();
yposi = 0;
backGraphics = new Sprite();
numOfPoint = 0;
marker = new Sprite();
aniMode = 0;
mk = new Sprite();
resetBtn = new Sprite();
xOrigin = 0;
wf = new Sprite();
showFrontChk = new Sprite();
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_showRayChk__1();
         this.__setProp_resetBtn__1();
         this.__setProp_showFrontChk__1();
      }
stopAniEventHandler(param1){
         if(this.aniMode == 0)
         {
            this.aniMode = 1;
            this.imageTxt.text = this.pt.statusExplanation;
         }
         else
         {
            this.aniMode = 0;
         }
      }
Init(){
         let _loc1_ = 0;
         this.setWhiteBG(true);
         this.InitCtrl();
         this.InitInstrument();
         _loc1_ = 0;
         while(_loc1_ < this.numOfPoint)
         {
            this.wf.ray[_loc1_].isShowRay = false;
            _loc1_ += 2;
         }
      }
InitWave(){
         let _loc1_ = NaN;
         let _loc2_ = NaN;
         let _loc3_ = null;
         this.yposi = 0;
         if(this.aniMode == 0)
         {
            this.xposi = 1000;
            this.marker.x = -100;
         }
         else
         {
            this.xposi = Math.round(this.t1.f * 100) / 100;
            this.marker.x = this.xOrigin - this.xposi;
            this.marker.y = this.yOrigin - this.yposi;
         }
         _loc1_ = Math.atan2(-this.yposi,this.xposi);
         if(Math.abs(this.xposi) >= 1000)
         {
            _loc1_ = Math.atan2(-this.yposi,-(10 - this.xOrigin));
            if(this.xposi > 0)
            {
               this.wf.SetParallelWave(10 - this.xOrigin,this.yposi,_loc1_,250);
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
               if(this.xposi > 50)
               {
                  this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,Math.PI,5);
               }
               else
               {
                  this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,1.5 * Math.PI,5);
               }
            }
            else
            {
               this.wf.SetCircularWave(-this.xposi,this.yposi,_loc1_,200 / this.xposi,this.xposi - this.xOrigin + 10);
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
         _loc2_ = Math.floor(this.numOfPoint / 2);
         this.wfAux.ray[0].p.movePt(this.wf.ray[_loc2_ - 1].p);
         this.wfAux.ray[1].p.movePt(this.wf.ray[_loc2_].p);
         this.wfAux.ray[2].p.movePt(this.wf.ray[_loc2_ + 1].p);
         this.wfAux.SetInside();
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),3);
         if(Math.abs(this.xposi) >= 1000)
         {
            _loc3_ = "무한대";
         }
         else
         {
            _loc3_ = "(" + this.xposi.toString() + ", " + this.yposi.toString() + ")";
         }
         if(this.xposi >= 0)
         {
            _loc3_ = "실물체 " + _loc3_;
         }
         else
         {
            _loc3_ = "허물체 " + _loc3_;
         }
         this.obj2Txt.text = _loc3_;
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
         this.xOrigin = 500;
         this.yOrigin = 150;
         this.numOfPoint = 55;
         this.wavefrontStep0 = 20;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.canvas.mask = this.mk;
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.wf = this.pt.wf;
         this.wfAux = this.pt.wfAux;
         this.indexField = this.pt.indexField;
         this.aniMode = 0;
         this.addChild(this.imageTxt);
         this.addChild(this.obj2Txt);
         this.Init();
         this.indexReset();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
      }
InitInstrument(){
         this.t1 = new Parabola(0,100);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.indexField.AddInstrument(this.t1);
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-300 + this.yOrigin,600,300);
         this.indexField.Draw();
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,170,1);
            this.wf.huyLineStyle = new LineStyle(1,170,1,false,LineScaleMode.NONE);
            this.wfAux.defaultRayLineStyle = new LineStyle(2,16711935,1,false,LineScaleMode.NONE);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16720418,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,4474111,1);
            this.wf.huyLineStyle = new LineStyle(1,255,1,false,LineScaleMode.NONE);
            this.wfAux.defaultRayLineStyle = new LineStyle(2,11141290,1,false,LineScaleMode.NONE);
         }
         this.gr.clear();
         this.gr.lineStyle(1,8421504,1);
         this.gr.moveTo(0,this.yOrigin);
         this.gr.lineTo(this.width,this.yOrigin);
         this.gr.moveTo(this.xOrigin,0);
         this.gr.lineTo(this.xOrigin,2 * this.yOrigin);
         this.gr.moveTo(0,0);
      }
indexReset(){
         let _loc1_ = null;
         this.t1.f = 10 + Math.round(Math.random() * 10) * 10;
         _loc1_ = Math.abs(this.t1.f) >= Parabola.flatCriterior ? "무한대" : this.t1.f.toString();
         this.curvTxt.text = "초점거리 " + _loc1_;
         this.indexField.Draw();
         this.aniReset();
      }
CheckBoxEventHandler(param1){
         if(param1.target == this.showRayChk)
         {
            if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
            {
               this.showFrontChk.isChecked = true;
               this.wf.isShowFront = this.showFrontChk.isChecked;
            }
            this.rayShowSet();
         }
         else if(param1.target == this.showFrontChk)
         {
            if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
            {
               this.showRayChk.isChecked = true;
               this.rayShowSet();
            }
            this.wf.isShowFront = this.showFrontChk.isChecked;
         }
      }
__setProp_showRayChk__1(){
         try
         {
            this.showRayChk["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.showRayChk.checkColor = 16711680;
         this.showRayChk.checkStyle = 1;
         this.showRayChk.checkThickness = 2;
         this.showRayChk.isChecked = false;
         this.showRayChk.enabled = true;
         this.showRayChk.fontBold = true;
         this.showRayChk.fontColor = 8421504;
         this.showRayChk.fontEmbed = false;
         this.showRayChk.fontName = "_sans";
         this.showRayChk.fontOnColor = 13369548;
         this.showRayChk.fontSize = 12;
         this.showRayChk.boxHeight = 12;
         this.showRayChk.lineColor = 8421504;
         this.showRayChk.lineThickness = 2;
         this.showRayChk.text = "광선 보기";
         this.showRayChk.visible = true;
         this.showRayChk.boxWidth = 60;
         try
         {
            this.showRayChk["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
rayShowSet(){
         let _loc1_ = 0;
         _loc1_ = 1;
         while(_loc1_ < this.numOfPoint)
         {
            this.wf.ray[_loc1_].isShowRay = this.showRayChk.isChecked;
            _loc1_ += 2;
         }
      }
ButtonEventHandler(param1){
         if(param1.target == this.resetBtn)
         {
            this.indexReset();
         }
      }
InitCtrl(){
         if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
         {
            this.showFrontChk.isChecked = true;
         }
         this.rayShowSet();
         this.wf.isShowFront = this.showFrontChk.isChecked;
      }
aniReset(){
         this.imageTxt.text = "";
         this.pt.clearWaveFront();
         this.InitWave();
         this.pt.startAni();
      }
__setProp_showFrontChk__1(){
         try
         {
            this.showFrontChk["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.showFrontChk.checkColor = 16711680;
         this.showFrontChk.checkStyle = 1;
         this.showFrontChk.checkThickness = 2;
         this.showFrontChk.isChecked = false;
         this.showFrontChk.enabled = true;
         this.showFrontChk.fontBold = true;
         this.showFrontChk.fontColor = 8421504;
         this.showFrontChk.fontEmbed = false;
         this.showFrontChk.fontName = "_sans";
         this.showFrontChk.fontOnColor = 13369548;
         this.showFrontChk.fontSize = 12;
         this.showFrontChk.boxHeight = 12;
         this.showFrontChk.lineColor = 8421504;
         this.showFrontChk.lineThickness = 2;
         this.showFrontChk.text = "파면 보기";
         this.showFrontChk.visible = true;
         this.showFrontChk.boxWidth = 60;
         try
         {
            this.showFrontChk["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
