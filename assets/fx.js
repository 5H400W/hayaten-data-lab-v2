(function(){
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,M={x:-999,y:-999,on:false},G=document.getElementById('glow'),gx=0,gy=0;
addEventListener('pointermove',function(e){M.x=e.clientX;M.y=e.clientY;M.on=true;if(G)G.style.opacity=1},{passive:true});
document.addEventListener('pointerleave',function(){M.on=false;if(G)G.style.opacity=0});
function Net(host){var c=document.createElement('canvas');c.className='nn';host.prepend(c);var x=c.getContext('2d'),w,h,d,N=[],S=[],vis=true,en=.3,t=0,lx=0,ly=0,story=host.classList.contains('story');
function size(){var r=host.getBoundingClientRect();d=Math.min(window.devicePixelRatio||1,2);w=r.width;h=r.height;c.width=Math.round(w*d);c.height=Math.round(h*d);x.setTransform(d,0,0,d,0,0);
var n=Math.min(story?120:90,Math.round(w*h/13000));N=[];for(var i=0;i<n;i++)N.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,p:Math.random()*6.28,hot:0});if(reduce)draw()}
function draw(){x.clearRect(0,0,w,h);var r=host.getBoundingClientRect(),mx=M.x-r.left,my=M.y-r.top,L=135,i,j,a,b,dx,dy,q,al;
if(story){var p=(innerHeight-r.top)/(r.height+innerHeight);en=Math.max(0,Math.min(1,p))}
for(i=0;i<N.length;i++){a=N[i];if(!reduce){a.x+=a.vx*(1+en*2.2);a.y+=a.vy*(1+en*2.2);if(a.x<0||a.x>w)a.vx*=-1;if(a.y<0||a.y>h)a.vy*=-1}
dx=a.x-mx;dy=a.y-my;q=dx*dx+dy*dy;if(M.on&&q<25600){var f=(1-Math.sqrt(q)/160);a.x+=dx*f*.03;a.y+=dy*f*.03;a.hot=1}else a.hot*=.93}
for(i=0;i<N.length;i++){a=N[i];for(j=i+1;j<N.length;j++){b=N[j];dx=a.x-b.x;dy=a.y-b.y;q=dx*dx+dy*dy;if(q<L*L){al=(1-Math.sqrt(q)/L)*(.2+en*.5+Math.max(a.hot,b.hot)*.45);x.strokeStyle=(a.hot>.2||b.hot>.2)?'rgba(143,227,250,'+al.toFixed(3)+')':'rgba(76,201,240,'+al.toFixed(3)+')';x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}}
for(i=0;i<N.length;i++){a=N[i];al=.45+.4*Math.sin(t*2.2+a.p);x.fillStyle=a.hot>.2?'rgba(143,227,250,'+(.6+a.hot*.4)+')':'rgba(160,225,255,'+al.toFixed(2)+')';x.beginPath();x.arc(a.x,a.y,1.6+a.hot*2.4+en*.8,0,6.283);x.fill()}
if(!reduce){if(M.on&&mx>0&&my>0&&mx<w&&my<h&&(Math.abs(mx-lx)+Math.abs(my-ly))>6){if(S.length<48)S.push({x:mx,y:my,vx:(Math.random()-.5)*1.6,vy:(Math.random()-.5)*1.6,l:1});lx=mx;ly=my}
for(i=S.length-1;i>=0;i--){var s=S[i];s.x+=s.vx;s.y+=s.vy;s.l-=.035;if(s.l<=0){S.splice(i,1);continue}x.fillStyle='rgba(143,227,250,'+(s.l*(.5+.5*Math.random())).toFixed(2)+')';x.beginPath();x.arc(s.x,s.y,1+s.l*2,0,6.283);x.fill()}}}
new ResizeObserver(size).observe(host);new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(host);size();
if(!reduce)(function loop(){requestAnimationFrame(loop);if(!vis||document.hidden)return;t+=.016;draw()})()}

var bar=document.getElementById('bar');
if(!reduce){(function gl(){requestAnimationFrame(gl);if(!G)return;gx+=(M.x-gx)*.14;gy+=(M.y-gy)*.14;G.style.transform='translate3d('+gx+'px,'+gy+'px,0)'})();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('main h2,.card,.ch>.wrap,.sintro>.wrap,.tick li,.lead').forEach(function(el){el.classList.add('rv');io.observe(el)})}
var tk=false;addEventListener('scroll',function(){if(tk)return;tk=true;requestAnimationFrame(function(){var m=document.documentElement.scrollHeight-innerHeight;if(bar)bar.style.transform='scaleX('+(m>0?scrollY/m:0)+')';tk=false})},{passive:true});
})();