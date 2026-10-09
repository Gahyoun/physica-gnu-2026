export class Complex{
 constructor(re=0,im=0){this.re=re;this.im=im;}
 getReal(){return this.re;}getImag(){return this.im;}
 plus(z){return new Complex(this.re+z.re,this.im+z.im);}minus(z){return new Complex(this.re-z.re,this.im-z.im);}
 times(z){return new Complex(this.re*z.re-this.im*z.im,this.re*z.im+this.im*z.re);}
 scale(a){return new Complex(this.re*a,this.im*a);}negate(){return this.scale(-1);}conjugate(){return new Complex(this.re,-this.im);}
 over(z){const d=z.re*z.re+z.im*z.im;return new Complex((this.re*z.re+this.im*z.im)/d,(this.im*z.re-this.re*z.im)/d);}
 abs(){return Math.sqrt(this.re*this.re+this.im*this.im);}arg(){return Math.atan2(this.im,this.re);}
 sqrt(){const r=this.abs();if(!r)return new Complex();if(this.re>0){const a=Math.sqrt(.5*(r+this.re));return new Complex(a,.5*this.im/a);}let b=Math.sqrt(.5*(r-this.re));if(this.im<0)b=-b;return new Complex(.5*this.im/b,b);}
 static polar(r,a){if(r<0){a+=Math.PI;r=-r;}a%=2*Math.PI;return new Complex(r*Math.cos(a),r*Math.sin(a));}
 static exp(z){return Complex.polar(Math.exp(z.re),z.im);}static expi(z){return Complex.exp(new Complex(-z.im,z.re));}
}
export class ComplexMatrix{
 constructor(rows,cols){this.rows=rows;this.cols=cols;}setTwoDarray(a){this.a=a;}
 solveLinearSet(rhs){const a=this.a.map((r,i)=>[...r,rhs[i]]),n=a.length;
  for(let k=0;k<n;k++){let pivot=k;for(let j=k+1;j<n;j++)if(a[j][k].abs()>a[pivot][k].abs())pivot=j;[a[k],a[pivot]]=[a[pivot],a[k]];
   for(let i=k+1;i<n;i++){const ratio=a[i][k].over(a[k][k]);for(let j=k;j<=n;j++)a[i][j]=a[i][j].minus(ratio.times(a[k][j]));}}
  const x=new Array(n);for(let i=n-1;i>=0;i--){let v=a[i][n];for(let j=i+1;j<n;j++)v=v.minus(a[i][j].times(x[j]));x[i]=v.over(a[i][i]);}return x;
 }
}
