(function(){var h=document.querySelector('.hero.big');if(!h)return;
var L='Python,NumPy,Pandas,PySpark,Airflow,Snowflake,dbt,Kafka,SQL,PostgreSQL,TensorFlow,PyTorch,scikit-learn,Keras,LangChain,Hugging Face,OpenCV,FastAPI,Django,Flask,React,Next.js,Node.js,TypeScript,Java,Spring,Go,Rust,C++,Docker,Kubernetes,Terraform,AWS,Azure,Google Cloud,Redis,MongoDB,Elasticsearch,GraphQL,gRPC,Git,Linux,Jenkins,Grafana,Prometheus,Hadoop,Delta Lake,Iceberg,MLflow,Ray,ONNX,CUDA,Jupyter,Matplotlib,Selenium,Pytest,OpenAPI,Nginx,RabbitMQ,BigQuery,Databricks,Redshift'.split(',');
var c=document.createElement('canvas');c.className='sph';h.prepend(c);
var x=c.getContext('2d'),W,H,D,rm=matchMedia('(prefers-reduced-motion: reduce)').matches,n=L.length,N=[],E=[],T0=performance.now(),rx=.22,ry=0,M={x:0,y:0,px:-999,py:-999},vis=true,i,j;
function size(){var r=h.getBoundingClientRect();W=r.width;H=r.height;D=Math.min(devicePixelRatio||1,2);c.width=W*D|0;c.height=H*D|0;x.setTransform(D,0,0,D,0,0)}
size();addEventListener('resize',size);
addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();M.x=e.clientX/innerWidth-.5;M.y=e.clientY/innerHeight-.5;M.px=e.clientX-r.left;M.py=e.clientY-r.top},{passive:true});
for(i=0;i<n;i++){var y=1-2*(i+.5)/n,r=Math.sqrt(1-y*y),a=i*2.39996;N.push({X:r*Math.cos(a),Y:y,Z:r*Math.sin(a),l:L[i],d:i/n*.6+Math.random()*.2,sx:(Math.random()-.5)*4,sy:(Math.random()-.5)*4,sz:(Math.random()-.5)*4})}
for(i=0;i<n;i++){var ds=[];for(j=0;j<n;j++)if(j!=i){var dx=N[i].X-N[j].X,dy=N[i].Y-N[j].Y,dz=N[i].Z-N[j].Z;ds.push([dx*dx+dy*dy+dz*dz,j])}ds.sort(function(p,q){return p[0]-q[0]});for(j=0;j<3;j++)E.push([i,ds[j][1]])}
function ease(p){p=p<0?0:p>1?1:p;return 1-Math.pow(1-p,3)}
function draw(e){x.clearRect(0,0,W,H);var wide=W>820,cx=wide?W*.77:W*.5,cy=wide?H*.54:H*.7,R=wide?Math.min(W*.2,H*.33):Math.min(W*.34,H*.24),cY=Math.cos(ry),sY=Math.sin(ry),cX=Math.cos(rx),sX=Math.sin(rx),P=[],best=-1,bd=1600,a,p,X,Y,Z,x1,z1,y2,z2,f,t,al,hot;
for(i=0;i<n;i++){a=N[i];p=ease((e-a.d)/1.6);X=a.X*p+a.sx*(1-p);Y=a.Y*p+a.sy*(1-p);Z=a.Z*p+a.sz*(1-p);x1=X*cY+Z*sY;z1=-X*sY+Z*cY;y2=Y*cX-z1*sX;z2=Y*sX+z1*cX;f=2/(3-z2);t=(z2+1)/2;P[i]={x:cx+x1*R*f,y:cy+y2*R*f,t:t,p:p};
var ex=P[i].x-M.px,ey=P[i].y-M.py,dd=ex*ex+ey*ey;if(dd<bd&&p>.9){bd=dd;best=i}}
x.lineWidth=1;for(i=0;i<E.length;i++){var A=P[E[i][0]],B=P[E[i][1]];al=Math.min(A.p,B.p)*(.04+.3*(A.t+B.t)/2);if(best>=0&&(E[i][0]==best||E[i][1]==best))al=.7;x.strokeStyle='rgba(120,200,255,'+al.toFixed(3)+')';x.beginPath();x.moveTo(A.x,A.y);x.lineTo(B.x,B.y);x.stroke()}
for(i=0;i<n;i++){a=P[i];al=a.p*(.18+.82*Math.pow(a.t,1.6));hot=i==best;x.fillStyle=hot?'rgba(143,227,250,1)':'rgba(120,200,255,'+al.toFixed(3)+')';x.beginPath();x.arc(a.x,a.y,1.4+1.6*a.t+(hot?2:0),0,6.283);x.fill();
x.font='600 '+(10+3.5*a.t+(hot?3:0)).toFixed(1)+'px Manrope,system-ui,sans-serif';x.fillStyle=hot?'#fff':'rgba(215,236,255,'+al.toFixed(3)+')';x.fillText(N[i].l,a.x+6,a.y+3)}}
function frame(now){requestAnimationFrame(frame);if(!vis||document.hidden)return;ry+=.0032+M.x*.01;rx+=(.22+M.y*.5-rx)*.05;draw((now-T0)/1000-1.5)}
new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(h);
if(rm)draw(9);else requestAnimationFrame(frame);
})();