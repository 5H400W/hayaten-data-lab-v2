(function(){
var pre=document.getElementById('pre');
if(pre){var p=document.getElementById('pct'),n=0,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
function close(){pre.classList.add('done');document.body.style.overflow=''}
if(rm){close()}else{document.body.style.overflow='hidden';var iv=setInterval(function(){n+=Math.ceil(Math.random()*7);if(n>=100){n=100;clearInterval(iv);setTimeout(close,250)}p.textContent=n},60);document.getElementById('skip').onclick=function(){clearInterval(iv);close()}}}
var mf=document.querySelector('.mf');
if(mf){mf.innerHTML=mf.textContent.trim().split(/\s+/).map(function(w){return '<span>'+w+'</span>'}).join(' ');var sp=mf.querySelectorAll('span'),wrap=document.querySelector('.mfx');
function upd(){var r=wrap.getBoundingClientRect(),pr=Math.min(1,Math.max(0,-r.top/(r.height-innerHeight))),k=Math.round(pr*1.15*sp.length);sp.forEach(function(s,i){s.classList.toggle('on',i<k)})}
addEventListener('scroll',function(){requestAnimationFrame(upd)},{passive:true});upd()}
var T=document.querySelectorAll('[data-to]');
if(T.length){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;o.unobserve(e.target);var el=e.target,to=parseFloat(el.dataset.to),suf=el.dataset.suf||'',t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1600);k=1-Math.pow(1-k,3);el.textContent=Math.round(to*k).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')+suf;if(k<1)requestAnimationFrame(f)})(t0)})},{threshold:.4});T.forEach(function(el){o.observe(el)})}
})();