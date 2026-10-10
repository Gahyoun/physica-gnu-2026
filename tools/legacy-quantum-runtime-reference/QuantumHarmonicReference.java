import quantumMath.*;import spMath.*;import java.lang.reflect.*;import java.util.*;
public class QuantumHarmonicReference {
 static Object f(Object x,String n)throws Exception{Field z=x.getClass().getDeclaredField(n);z.setAccessible(true);return z.get(x);}
 public static void main(String[]args)throws Exception {
  double[][] cases={{2,0,0,0,.1},{-2,4,1,.75,.3},{4,-2,4,.35,.01}};
  System.out.println("[");
  for(int ci=0;ci<cases.length;ci++) {double[]p=cases[ci];HarmonicOsc3D b=new HarmonicOsc3D(50,-1,1,-1,1,-1,1,51,51,51);b.build(1000);Gaussian3DWaveFtn g=new Gaussian3DWaveFtn(p[3],0,0,p[0],p[1],p[2],p[4]);b.setAmplitude(g.waveFtn(b.getBeamInfo()));ArrayList<?> q=b.getQListSelected();
  System.out.printf(java.util.Locale.ROOT,"{\"parameters\":[%g,%g,%g,%g,%g],\"selected\":%d,\"initialMax\":%.17g,\"coefficient0\":[",p[0],p[1],p[2],p[3],p[4],q.size(),(Double)f(b,"maxAmplitude"));Object first=q.get(0);Complex a=(Complex)f(first,"amplitude");System.out.printf(java.util.Locale.ROOT,"%d,%d,%d,%.17g,%.17g],\"samples\":[",(Integer)f(first,"nx"),(Integer)f(first,"ny"),(Integer)f(first,"nz"),a.re(),a.im());
  double[][] points={{0,0,0,0},{.2,.12,-.2,.001},{-.36,.08,.44,.013},{.6,0,0,-.02}};for(int i=0;i<points.length;i++){double[]pt=points[i];Complex s=new Complex(0,0);for(Object o:q){int nx=(Integer)f(o,"nx"),ny=(Integer)f(o,"ny"),nz=(Integer)f(o,"nz");double e=(Double)f(o,"E");Complex c=(Complex)f(o,"amplitude");s=s.add(c.mul(Complex.polar(1,-e*pt[3])).scale(new HarmonicOsc1D(50,-1,1,51).waveFtn(nx,pt[0])*new HarmonicOsc1D(50,-1,1,51).waveFtn(ny,pt[1])*new HarmonicOsc1D(50,-1,1,51).waveFtn(nz,pt[2])));}System.out.printf(java.util.Locale.ROOT,"%s{\"point\":[%g,%g,%g,%g],\"re\":%.17g,\"im\":%.17g}",i>0?",":"",pt[0],pt[1],pt[2],pt[3],s.re(),s.im());}System.out.print("]}"+(ci<cases.length-1?",":""));
 }
 System.out.println("]"); }
}
