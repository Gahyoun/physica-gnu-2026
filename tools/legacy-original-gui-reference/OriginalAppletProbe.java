import java.applet.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.lang.reflect.*;
import java.net.*;
import java.nio.file.*;
import java.util.*;
import javax.swing.*;
import javax.imageio.ImageIO;

/** Runs the original class in its own real AWT window. Never captures other windows. */
public class OriginalAppletProbe implements AppletStub {
  static Applet app; static Frame frame; static StringBuilder cases=new StringBuilder();
  URL base; Map<String,String> params=new HashMap<>();
  public boolean isActive(){return true;} public URL getCodeBase(){return base;} public URL getDocumentBase(){return base;}
  public String getParameter(String k){return params.get(k);} public AppletContext getAppletContext(){return new AppletContext(){
    public AudioClip getAudioClip(URL u){return Applet.newAudioClip(u);}public Image getImage(URL u){return Toolkit.getDefaultToolkit().getImage(u);}
    public Applet getApplet(String n){return app;}public Enumeration<Applet> getApplets(){return Collections.enumeration(Collections.singletonList(app));}
    public void showDocument(URL u){}public void showDocument(URL u,String target){}public void showStatus(String s){}
    private Map<String,InputStream> streams=new HashMap<>();public void setStream(String k,InputStream s){streams.put(k,s);}public InputStream getStream(String k){return streams.get(k);}public Iterator<String> getStreamKeys(){return streams.keySet().iterator();}
  };}
  public void appletResize(int w,int h){}
  static String q(Object s){return "\""+String.valueOf(s).replace("\\","\\\\").replace("\"","\\\"").replace("\n","\\n").replace("\r","\\r").replace("\t","\\t")+"\"";}
  static java.util.List<Component> tree(Component c){java.util.List<Component> a=new ArrayList<>();a.add(c);if(c instanceof Container)for(Component x:((Container)c).getComponents())a.addAll(tree(x));return a;}
  static String info(Component c){String s="{\"class\":"+q(c.getClass().getName())+",\"enabled\":"+c.isEnabled();
    if(c instanceof AbstractButton){AbstractButton b=(AbstractButton)c;s+=",\"label\":"+q(b.getText())+",\"selected\":"+b.isSelected();}
    if(c instanceof Button)s+=",\"label\":"+q(((Button)c).getLabel());
    if(c instanceof Checkbox){Checkbox b=(Checkbox)c;s+=",\"label\":"+q(b.getLabel())+",\"selected\":"+b.getState();}
    if(c instanceof Choice){Choice b=(Choice)c;s+=",\"value\":"+q(b.getSelectedItem())+",\"options\":[";for(int i=0;i<b.getItemCount();i++)s+=(i>0?",":"")+q(b.getItem(i));s+="]";}
    if(c instanceof JComboBox){JComboBox b=(JComboBox)c;s+=",\"value\":"+q(b.getSelectedItem())+",\"options\":[";for(int i=0;i<b.getItemCount();i++)s+=(i>0?",":"")+q(b.getItemAt(i));s+="]";}
    if(c instanceof Scrollbar){Scrollbar b=(Scrollbar)c;s+=",\"min\":"+b.getMinimum()+",\"max\":"+(b.getMaximum()-b.getVisibleAmount())+",\"value\":"+b.getValue();}
    if(c instanceof JSlider){JSlider b=(JSlider)c;s+=",\"min\":"+b.getMinimum()+",\"max\":"+b.getMaximum()+",\"value\":"+b.getValue();}
    if(c instanceof TextField)s+=",\"value\":"+q(((TextField)c).getText());
    if(c instanceof JTextField)s+=",\"value\":"+q(((JTextField)c).getText());
    return s+"}";
  }
  static boolean control(Component c){return c instanceof AbstractButton||c instanceof Button||c instanceof Checkbox||c instanceof Choice||c instanceof JComboBox||c instanceof Scrollbar||c instanceof JSlider||c instanceof TextField||c instanceof JTextField;}
  static String state(){String s="{";boolean first=true;for(Field f:app.getClass().getDeclaredFields())try{if(Modifier.isStatic(f.getModifiers()))continue;f.setAccessible(true);Object v=f.get(app);if(v instanceof Number||v instanceof Boolean||v instanceof String){if(!first)s+=",";first=false;s+=q(f.getName())+":"+(v instanceof Number&&Double.isFinite(((Number)v).doubleValue())?v:v instanceof Boolean?v:q(v));}}catch(Exception e){}return s+"}";}
  static void sample(String label){if(cases.length()>0)cases.append(',');cases.append("{\"case\":").append(q(label)).append(",\"state\":").append(state()).append("}");}
  static int choices(Component c){if(c instanceof Choice)return ((Choice)c).getItemCount();if(c instanceof JComboBox)return ((JComboBox)c).getItemCount();if(c instanceof JCheckBox||c instanceof Checkbox)return 2;return 0;}
  static void set(Component c,int n){if(c instanceof Choice){Choice a=(Choice)c;if(n>=a.getItemCount())return;if(a.getSelectedIndex()==n)return;a.select(n);a.dispatchEvent(new ItemEvent(a,ItemEvent.ITEM_STATE_CHANGED,a.getSelectedItem(),ItemEvent.SELECTED));}else if(c instanceof JComboBox){JComboBox a=(JComboBox)c;if(n<a.getItemCount()&&a.getSelectedIndex()!=n)a.setSelectedIndex(n);}else if(c instanceof Checkbox){Checkbox a=(Checkbox)c;if(a.getState()==(n==1))return;a.setState(n==1);a.dispatchEvent(new ItemEvent(a,ItemEvent.ITEM_STATE_CHANGED,a.getLabel(),n==1?ItemEvent.SELECTED:ItemEvent.DESELECTED));}else if(c instanceof JCheckBox){JCheckBox a=(JCheckBox)c;if(a.isSelected()!=(n==1))a.doClick(0);}}
  static void capture(Path p)throws Exception{BufferedImage im=new BufferedImage(app.getWidth(),app.getHeight(),BufferedImage.TYPE_INT_RGB);Graphics2D g=im.createGraphics();app.printAll(g);g.dispose();ImageIO.write(im,"png",p.toFile());}
  public static void main(String[] a)throws Exception{
    Path out=Paths.get(a[4]);Files.createDirectories(out);String status="passed",error="";StringBuilder controls=new StringBuilder();int discrete=0,bounds=0,buttons=0;long combinations=1;boolean capped=false;
    try{
      OriginalAppletProbe stub=new OriginalAppletProbe();stub.base=new URL(a[1].split(";")[0]);for(int i=5;i<a.length;i++){String[] kv=a[i].split("=",2);stub.params.put(kv[0],kv.length>1?kv[1]:"");}
      URL[] urls=Arrays.stream(a[1].split(";")).map(s->{try{return new URL(s);}catch(Exception e){throw new RuntimeException(e);}}).toArray(URL[]::new);stub.base=urls[urls.length-1];
      URLClassLoader loader=new URLClassLoader(urls,OriginalAppletProbe.class.getClassLoader());
      Class<?> cls=Class.forName(a[0].replace(".class",""),true,loader);
      EventQueue.invokeAndWait(()->{try{app=(Applet)cls.getDeclaredConstructor().newInstance();app.setStub(stub);app.setPreferredSize(new Dimension(Integer.parseInt(a[2]),Integer.parseInt(a[3])));frame=new Frame("물리의 이해 · 원본 Java GUI 대조");frame.add(app);frame.pack();frame.setLocation(40,40);frame.setVisible(true);app.init();frame.validate();app.start();}catch(Exception e){throw new RuntimeException(e);}});
      Thread.sleep(350);EventQueue.invokeAndWait(()->sample("initial"));EventQueue.invokeAndWait(()->{try{capture(out.resolve("initial.png"));}catch(Exception e){throw new RuntimeException(e);}});
      java.util.List<Component> all=tree(app),opts=new ArrayList<>();
      for(Component c:all)if(control(c)){if(controls.length()>0)controls.append(',');controls.append(info(c));if(choices(c)>0){opts.add(c);combinations*=choices(c);if(combinations>65536)capped=true;}}
      Files.writeString(out.resolve("controls.json"),"{\"class\":"+q(a[0])+",\"controls\":["+controls+"],\"initialState\":"+state()+",\"discreteProduct\":"+combinations+"}");
      int total=(int)Math.min(65536,combinations);
      for(int n=0;n<total;n++){final int index=n;EventQueue.invokeAndWait(()->{int k=index;for(Component c:opts){int count=choices(c);if(count>0){set(c,k%count);k/=count;}}sample("discrete:"+index);});discrete++;if(discrete%128==0)Files.writeString(out.resolve("progress.json"),"{\"discreteCombinations\":"+discrete+",\"lastState\":"+state()+"}");}
      for(Component c:all){
        if(c instanceof Scrollbar){Scrollbar b=(Scrollbar)c;int min=b.getMinimum(),max=b.getMaximum()-b.getVisibleAmount(),initial=b.getValue();for(int v:new int[]{min,(min+max)/2,max,initial}){EventQueue.invokeAndWait(()->{b.setValue(v);b.dispatchEvent(new AdjustmentEvent(b,AdjustmentEvent.ADJUSTMENT_VALUE_CHANGED,AdjustmentEvent.TRACK,v));sample("range:"+v);});bounds++;}}
        if(c instanceof JSlider){JSlider b=(JSlider)c;int initial=b.getValue();for(int v:new int[]{b.getMinimum(),(b.getMinimum()+b.getMaximum())/2,b.getMaximum(),initial}){EventQueue.invokeAndWait(()->{b.setValue(v);sample("range:"+v);});bounds++;}}
        if(c instanceof Button){Button b=(Button)c;EventQueue.invokeAndWait(()->{b.dispatchEvent(new ActionEvent(b,ActionEvent.ACTION_PERFORMED,b.getLabel()));sample("button:"+b.getLabel());});buttons++;Thread.sleep(100);}
        if(c instanceof JButton){JButton b=(JButton)c;EventQueue.invokeAndWait(()->{b.doClick(0);sample("button:"+b.getText());});buttons++;Thread.sleep(100);}
      }
      EventQueue.invokeAndWait(()->sample("final"));EventQueue.invokeAndWait(()->{try{capture(out.resolve("final.png"));}catch(Exception e){throw new RuntimeException(e);}});
    }catch(Throwable e){status="blocked";Throwable c=e;while(c.getCause()!=null)c=c.getCause();error=c.getClass().getName()+": "+c.getMessage();c.printStackTrace();}
    String json="{\"class\":"+q(a[0])+",\"status\":"+q(status)+",\"error\":"+q(error)+",\"controls\":["+controls+"],\"discreteCombinations\":"+discrete+",\"discreteProduct\":"+combinations+",\"capped\":"+capped+",\"rangeBoundaryCases\":"+bounds+",\"buttons\":"+buttons+",\"textFieldsEdited\":false,\"pointerGesturesExhaustive\":false,\"cases\":["+cases+"]}";
    Files.writeString(out.resolve("result.json"),json);System.out.println(json);try{EventQueue.invokeAndWait(()->{if(app!=null){app.stop();app.destroy();}if(frame!=null)frame.dispose();});}catch(Exception e){}System.exit(status.equals("passed")?0:2);
  }
}
