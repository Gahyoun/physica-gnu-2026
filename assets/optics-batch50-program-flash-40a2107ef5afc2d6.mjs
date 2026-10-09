import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest } from './optics-batch50-adapter.mjs';
import {createKernel} from './optics-batch50-kernel-4aee8e9b4394c043.mjs';
const SPEC={"placements": {"startBtn": {"x": 356.15, "y": 257.35, "width": 70.00534057617188, "height": 19.99664306640625}, "showRayChk": {"x": 2.45, "y": 247.35, "width": 73.00556945800781, "height": 12.997817993164062}, "showFrontChk": {"x": 2.45, "y": 265.35, "width": 73.00556945800781, "height": 12.997817993164062}, "resetBtn": {"x": 279.45, "y": 257.35, "width": 70.00534057617188, "height": 19.99664306640625}, "marker": {"x": 10, "y": 130, "width": 16.0244140625, "height": 16.00341796875}, "typeBtn": {"x": 116, "y": 257.35, "width": 70, "height": 20}, "numBtn": {"x": 189, "y": 257.35, "width": 70, "height": 20}}, "id": "flash-40a2107ef5afc2d6", "source": "toy_Fresnel.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/grinetc/toy_Fresnel.swf", "title": "프레넬 렌즈에서의 광선의 진행", "lesson": "5-2-9-3", "width": 500, "height": 280, "animated": true, "controls": [], "checks": [{"clip": "showFrontChk", "label": "파면 보기", "value": false}, {"clip": "showRayChk", "label": "광선 보기", "value": false}], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}, {"clip": "typeBtn", "label": "선형 톱니", "alternate": "구형 톱니", "toggle": true}, {"clip": "numBtn", "label": "세밀", "alternate": "거침", "toggle": true}, {"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "drag": true, "sourceSha256": "53bf7625f8dc78294f790ee781bf356be7c4c91b45095f62e9ed3ecc52019a95", "kernelSha256": "4aee8e9b4394c043b4e9e9973cf73231e257e7f6fe31034fecfbb46e1eed2df7", "kernelModule": "optics-batch50-kernel-4aee8e9b4394c043.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "8f9a9dc0dd9a9117177a2a6b82e4b99c560970482f2ed59cb6ca97f8672570a4"}, {"path": "RayTracer/FillStyle.as", "sha256": "a55e36587faf4ee73d47320ca883e6a814553875e7c68376e4d2b9843631a5c1"}, {"path": "RayTracer/Fresnel.as", "sha256": "252130af5a45e0c19011cadde8997a764af095ed0103e78162f202621c4d4d89"}, {"path": "RayTracer/IndexField.as", "sha256": "a6bac35d4e2cb10264bb83e15fcad0323b57c24a7f9a12b9fcd07772cd168983"}, {"path": "RayTracer/LineStyle.as", "sha256": "aaac5848b9887ec4488c5745d3c68c46044413687b27757701aa2ffc98bfad06"}, {"path": "RayTracer/Point2D.as", "sha256": "ba36daff08f699c4581ae7b38fde841704651895bc4a4cb459bed5c03c929fc5"}, {"path": "RayTracer/Prototype.as", "sha256": "e596f20c5970bcfffb978caa81337e08010a7a9cba7108a1e569b0a336041285"}, {"path": "RayTracer/RayTrace.as", "sha256": "69a66f65454dac61a131ff5cc2a5a4d4b385965b05c807dcb242c25e279300a1"}, {"path": "RayTracer/WaveFront.as", "sha256": "038aff35b6ecac3b97cfa499579d29c50f4e4db9d9494d39c595fadc00c8291f"}], "methods": ["MainTimeline", "stopAniEventHandler", "Init", "setWhiteBG", "InitWave", "frame1", "InitInstrument", "stopDragging", "CheckBoxEventHandler", "ButtonEventHandler", "InitCtrl", "dragObject", "startDragging", "aniReset"], "programModule": "optics-batch50-program-flash-40a2107ef5afc2d6.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,Fresnel,IndexField,LineStyle,Point2D,Prototype,RayTrace,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
xposi = 0;
offsetY = 0;
t1 = new Sprite();
indexField = new Sprite();
canvas = new Sprite();
showRayChk = new Sprite();
yposi = 0;
backGraphics = new Sprite();
startBtn = new Sprite();
marker = new Sprite();
resetBtn = new Sprite();
numOfPoint = 0;
xOrigin = 0;
typeBtn = new Sprite();
wf = new Sprite();
showFrontChk = new Sprite();
wavelength0 = 0;
numBtn = new Sprite();
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_typeBtn__1();
         this.__setProp_showRayChk__1();
         this.__setProp_numBtn__1();
         this.__setProp_resetBtn__1();
         this.__setProp_showFrontChk__1();
      }
stopAniEventHandler(param1){
         this.startBtn.isON = false;
         this.startBtn.visible = false;
      }
Init(){
         this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
         this.wf.frontLineStyle = new LineStyle(1,26112,1);
         this.setWhiteBG(true);
         this.InitCtrl();
         this.InitInstrument();
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
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,26112,1);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16720418,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,47872,1);
         }
      }
InitWave(){
         let _loc1_ = NaN;
         _loc1_ = Math.atan2(-this.yposi,-this.xposi);
         this.wf.SetParallelWave(-80,-80 * Math.tan(_loc1_),_loc1_,175);
         this.wf.ShowRayStatus(25,new LineStyle(1,16711935,1),3);
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
         this.xOrigin = 100;
         this.yOrigin = 130;
         this.numOfPoint = 59;
         this.wavelength0 = 10;
         this.pt = new Prototype(this.numOfPoint,this.wavelength0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt.aniMode = 1;
         this.pt.aniTimeLimit = 100;
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.addChild(this.startBtn);
         this.addChild(this.resetBtn);
         this.addChild(this.typeBtn);
         this.addChild(this.numBtn);
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.addChild(this.marker);
         this.wf = this.pt.wf;
         this.indexField = this.pt.indexField;
         this.Init();
         this.aniReset();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.typeBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.numBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
         this.showRayChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.showFrontChk.addEventListener(MouseEvent.CLICK,this.CheckBoxEventHandler);
         this.marker.addEventListener(MouseEvent.MOUSE_DOWN,this.startDragging);
         this.marker.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
         this.stage.addEventListener(MouseEvent.MOUSE_UP,this.stopDragging);
      }
InitInstrument(){
         this.t1 = new Fresnel(2,400,3,250);
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.p.dir = Math.PI;
         this.t1.num = 5;
         this.indexField.AddInstrument(this.t1);
         this.indexField.boundRect = new Rectangle(-200,-200,700,400);
         this.indexField.Draw();
      }
stopDragging(param1){
         this.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
      }
CheckBoxEventHandler(param1){
         if(param1.target == this.showRayChk)
         {
            if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
            {
               this.showFrontChk.isChecked = true;
               this.wf.isShowFront = this.showFrontChk.isChecked;
            }
            this.wf.isShowRay = this.showRayChk.isChecked;
         }
         else if(param1.target == this.showFrontChk)
         {
            if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
            {
               this.showRayChk.isChecked = true;
               this.wf.isShowRay = this.showRayChk.isChecked;
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
         else if(param1.target == this.typeBtn)
         {
            if(this.typeBtn.isON)
            {
               this.t1.type = 1;
            }
            else
            {
               this.t1.type = 0;
            }
            this.indexField.Draw();
            this.aniReset();
         }
         else if(param1.target == this.numBtn)
         {
            if(this.numBtn.isON)
            {
               this.t1.num = 20;
            }
            else
            {
               this.t1.num = 5;
            }
            this.indexField.Draw();
            this.aniReset();
         }
      }
InitCtrl(){
         if(!this.showFrontChk.isChecked && !this.showRayChk.isChecked)
         {
            this.showRayChk.isChecked = true;
            this.wf.isShowRay = this.showRayChk.isChecked;
         }
         this.wf.isShowRay = this.showRayChk.isChecked;
         this.wf.isShowFront = this.showFrontChk.isChecked;
         this.xposi = -this.xOrigin + this.marker.x;
         this.yposi = this.yOrigin - this.marker.y;
      }
dragObject(param1){
         this.marker.y = param1.stageY - this.offsetY;
         this.xposi = this.marker.x - this.xOrigin;
         this.yposi = this.yOrigin - this.marker.y;
         if(this.yposi > 50)
         {
            this.yposi = 50;
            this.marker.y = this.yOrigin - this.yposi;
         }
         else if(this.yposi < -50)
         {
            this.yposi = -50;
            this.marker.y = this.yOrigin - this.yposi;
         }
         this.aniReset();
         param1.updateAfterEvent();
      }
__setProp_typeBtn__1(){
         try
         {
            this.typeBtn["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.typeBtn.backOffColor = 8421504;
         this.typeBtn.backOnColor = 8421504;
         this.typeBtn.backOverColor = 13369548;
         this.typeBtn.enabled = true;
         this.typeBtn.fontBold = true;
         this.typeBtn.fontColor = 14548957;
         this.typeBtn.fontEmbed = false;
         this.typeBtn.fontName = "_sans";
         this.typeBtn.fontSize = 12;
         this.typeBtn.boxHeight = 20;
         this.typeBtn.lineColor = 8421504;
         this.typeBtn.lineThickness = 1;
         this.typeBtn.isON = true;
         this.typeBtn.skin = 0;
         this.typeBtn.textOFF = "선형 톱니";
         this.typeBtn.textON = "구형 톱니";
         this.typeBtn.isToggle = true;
         this.typeBtn.visible = true;
         this.typeBtn.boxWidth = 70;
         try
         {
            this.typeBtn["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
startDragging(param1){
         this.offsetY = param1.stageY - this.marker.y;
         this.stage.addChild(this.marker);
         this.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.dragObject);
      }
aniReset(){
         this.pt.stopAni();
         this.startBtn.isON = false;
         this.pt.clearWaveFront();
         this.InitWave();
         this.startBtn.visible = true;
      }
__setProp_numBtn__1(){
         try
         {
            this.numBtn["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.numBtn.backOffColor = 8421504;
         this.numBtn.backOnColor = 8421504;
         this.numBtn.backOverColor = 13369548;
         this.numBtn.enabled = true;
         this.numBtn.fontBold = true;
         this.numBtn.fontColor = 14548957;
         this.numBtn.fontEmbed = false;
         this.numBtn.fontName = "_sans";
         this.numBtn.fontSize = 12;
         this.numBtn.boxHeight = 20;
         this.numBtn.lineColor = 8421504;
         this.numBtn.lineThickness = 1;
         this.numBtn.isON = false;
         this.numBtn.skin = 0;
         this.numBtn.textOFF = "세밀";
         this.numBtn.textON = "거침";
         this.numBtn.isToggle = true;
         this.numBtn.visible = true;
         this.numBtn.boxWidth = 70;
         try
         {
            this.numBtn["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
