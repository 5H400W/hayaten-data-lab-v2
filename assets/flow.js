(function(){
var c=document.createElement('canvas');c.id='flow';document.body.prepend(c);
var x=c.getContext('2d'),W,H,D,rm=matchMedia('(prefers-reduced-motion: reduce)').matches,P={x:-999,y:-999,sx:-999,sy:-999,v:0},t=0,pys=scrollY,sv=0,S=[],N=32,ST=28,i;
function size(){W=innerWidth;H=innerHeight;D=Math.min(devicePixelRatio||1,2);if(W*H*D*D>6e6)D=Math.sqrt(6e6/(W*H));c.width=W*D|0;c.height=H*D|0;x.setTransform(D,0,0,D,0,0)}
size();addEventListener('resize',size);
function mv(e){var q=e.touches?e.touches[0]:e;if(!q)return;P.x=q.clientX;P.y=q.clientY;if(P.sx<-900){P.sx=P.x;P.sy=P.y}}
['pointermove','touchstart','touchmove'].forEach(function(n){addEventListener(n,mv,{passive:true})});
for(i=0;i<8;i++)S.push({l:Math.random()*N|0,u:Math.random(),s:.0012+Math.random()*.0018});
function Y(l,px){var b=(l+.5)/N*H*1.2-H*.1,y=b+H*.04*Math.sin(px*.0042+t*.7+l*.42+scrollY*.0016)+H*.02*Math.sin(px*.011-t*1.1+l*.9),dx=px-P.sx,dy=b-P.sy,d=Math.sqrt(dx*dx+dy*dy),f=Math.exp(-d*d/51200)*(46+P.v*2.2);return y+dy/(Math.abs(dy)+50)*f*.9+Math.sin(d*.045-t*6)*f*.16}
function draw(){x.clearRect(0,0,W,H);var l,px,k,a,g,s,py;
for(l=0;l<N;l++){x.beginPath();for(px=-ST;px<=W+ST;px+=ST){k=Y(l,px);px<0?x.moveTo(px,k):x.lineTo(px,k)}
k=l/N;a=.08+.14*(.5+.5*Math.sin(l*.6+t*.6));x.strokeStyle='rgba('+(42+k*110|0)+','+(110+k*115|0)+',250,'+a.toFixed(3)+')';x.lineWidth=1;x.stroke()}
if(P.sx>-900){g=x.createRadialGradient(P.sx,P.sy,0,P.sx,P.sy,220);g.addColorStop(0,'rgba(120,200,255,.16)');g.addColorStop(1,'rgba(120,200,255,0)');x.fillStyle=g;x.fillRect(P.sx-220,P.sy-220,440,440)}
for(i=0;i<S.length;i++){s=S[i];if(!rm){s.u+=s.s*(1+Math.abs(sv)*.2);if(s.u>1)s.u=0}px=s.u*W;py=Y(s.l,px);x.fillStyle='rgba(180,240,255,.14)';x.beginPath();x.arc(px,py,7,0,6.283);x.fill();x.fillStyle='rgba(200,245,255,.9)';x.beginPath();x.arc(px,py,2,0,6.283);x.fill()}}
function f(){requestAnimationFrame(f);if(document.hidden)return;var s=scrollY;sv+=((s-pys)-sv)*.12;pys=s;t+=.016*(1+Math.min(Math.abs(sv)*.05,3));P.sx+=(P.x-P.sx)*.14;P.sy+=(P.y-P.sy)*.14;P.v+=(Math.hypot(P.x-P.sx,P.y-P.sy)-P.v)*.2;draw()}
if(rm){draw()}else f();
})();