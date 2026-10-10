import java.net.*;import java.lang.reflect.*;import javax.swing.*;
public class FissionStageProbe {
 static Field f(Class<?>c,String n)throws Exception{Field f=c.getDeclaredField(n);f.setAccessible(true);return f;}
 public static void main(String[]a)throws Exception{Class<?> c=new URLClassLoader(new URL[]{new URL(a[0])}).loadClass("fission1");Object o=c.getConstructor().newInstance();f(c,"isStandalone").set(o,true);((JApplet)o).setSize(400,450);((JApplet)o).init();((JApplet)o).start();Method reset=c.getDeclaredMethod("setInitialStage"),run=c.getDeclaredMethod("runMain");reset.setAccessible(true);run.setAccessible(true);
  for(boolean fast:new boolean[]{false,true}){((JCheckBox)f(c,"isFast").get(o)).setSelected(fast);reset.invoke(o);for(int n=1;n<=(fast?60:170);n++){f(c,"time").setInt(o,n);run.invoke(o);System.out.println(fast+","+n+","+f(c,"isInitialStage").get(o)+","+f(c,"isStartFission").get(o)+","+f(c,"isFinalStage").get(o)+","+f(c,"isTrigged").get(o));}}
 System.exit(0);}
}
