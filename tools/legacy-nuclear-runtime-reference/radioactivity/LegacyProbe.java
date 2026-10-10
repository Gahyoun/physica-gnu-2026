package radioactivity;
public class LegacyProbe {
 public static void main(String[] args) {
  String[] keys={"Test","Pu241","Th232","U238","U235","RadiosactiveEquiv"};
  Sequence[] seq={FourSeries.TestSequence,FourSeries.Pu241Sequence,FourSeries.Th232Sequence,FourSeries.U238Sequence,FourSeries.U235Sequence,FourSeries.RadiosactiveEquivSequence};
  double[] times={0,0.001,1,10,100,10000};
  System.out.print("[");boolean first=true;
  for(int i=0;i<seq.length;i++)for(double t:times){if(!first)System.out.print(",");first=false;System.out.print("{\"key\":\""+keys[i]+"\",\"t\":"+t+",\"amounts\":[");double[] a=seq[i].Amounts(t);for(int j=0;j<a.length;j++){if(j>0)System.out.print(",");System.out.print(a[j]);}System.out.print("]}");}
  System.out.println("]");
 }
}
