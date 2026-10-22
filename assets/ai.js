(function(){var h=document.querySelector('.path');if(!h)return;
var c=h.querySelector('canvas'),x=c.getContext('2d'),W,H,D,n=110,A=[],rm=matchMedia('(prefers-reduced-motion: reduce)').matches,caps=h.querySelectorAll('.cap'),bar=h.querySelector('.pbar i'),sp=0,t=0,vis=true,i,px=[],py=[];
function size(){var r=c.getBoundingClientRect();W=r.width;H=r.height;D=Math.min(devicePixelRatio||1,2);c.width=W*D|0;c.height=H*D|0;x.setTransform(D,0,0,D,0,0)}
size();addEventListener('resize',size);
function sm(a){a=Math.max(0,Math.min(1,a));return a*a*(3-2*a)}
for(i=0;i<n;i++){var u=Math.random()*2-1,th=Math.random()*6.283,r=Math.sqrt(1-u*u),tx,ty,q=Math.random(),sg=i<77?1:-1;
if(i<44){tx=-.9+Math.random()*1.35;ty=(Math.random()-.5)*.09}else{tx=.92-q*.57;ty=sg*q*.5+(Math.random()-.5)*.05}
A.push({X:r*Math.cos(th),Y:u,Z:r*Math.sin(th),tx:tx,ty:ty,d:Math.random(),s:1.1+Math.random()*2})}
function draw(){x.clearRect(0,0,W,H);var wide=W>820,cx=wide?W*.68:W*.5,cy=wide?H*.5:H*.72,R=Math.min(W,H)*(wide?.34:.27),m=sm((sp-.62)/.3),cn=sm((sp-.2)/.2)*(1-m),ang=t*.35+sp*5,co=Math.cos(ang),si=Math.sin(ang),k,a,mi,xr,zr,sc,ax,ay,j,dx,dy,d;
for(k=0;k<n;k++){a=A[k];mi=sm(m*1.5-a.d*.5);xr=a.X*co+a.Z*si;zr=-a.X*si+a.Z*co;sc=1/(1.9-zr*.5);var br=1+.05*Math.sin(t+a.d*6);
ax=cx+xr*sc*R*br;ay=cy+a.Y*sc*R*br;px[k]=ax+(cx+a.tx*R*1.25-ax)*mi;py[k]=ay+(cy+a.ty*R*1.25-ay)*mi;
var rr=a.s*sc*(1-.3*mi),al=(.3+.5*sc)*(1-.2*mi);x.fillStyle='rgba(200,245,255,'+al.toFixed(3)+')';x.beginPath();x.arc(px[k],py[k],rr,0,6.283);x.fill()}
if(cn>.02){x.lineWidth=1;for(k=0;k<60;k++)for(j=k+1;j<60;j++){dx=px[k]-px[j];dy=py[k]-py[j];d=Math.sqrt(dx*dx+dy*dy);if(d<R*.3){x.strokeStyle='rgba(120,200,255,'+((1-d/(R*.3))*.4*cn).toFixed(3)+')';x.beginPath();x.moveTo(px[k],py[k]);x.lineTo(px[j],py[j]);x.stroke()}}}}
function step(){var r=h.getBoundingClientRect(),p=Math.max(0,Math.min(1,-r.top/(r.height-innerHeight)));sp+=(p-sp)*(rm?1:.08);if(!rm)t+=.016;draw();var st=Math.min(3,Math.floor(sp*4));caps.forEach(function(e,k){e.classList.toggle('on',k===st)});bar.style.transform='scaleX('+sp+')'}
new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(h);
if(rm){addEventListener('scroll',step,{passive:true});step()}else(function L(){requestAnimationFrame(L);if(vis&&!document.hidden)step()})();
})();