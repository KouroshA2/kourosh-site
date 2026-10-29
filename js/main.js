(function(){
var EN=window.PAGE_EN;
var els=[].slice.call(document.querySelectorAll('[data-i]'));
els.forEach(function(e){e._fa=e.innerHTML});
var meta=document.querySelector('meta[name=description]'),ogt=document.querySelector('meta[property="og:title"]');
var FA={title:document.title,desc:meta.content};

/* Inspector label: live size of the headline, like DevTools */
var insp=document.querySelector('.insp');
function dim(){if(!insp)return;var h=insp.querySelector('h1').getBoundingClientRect();insp.dataset.dim=Math.round(h.width)+' \u00d7 '+Math.round(h.height)}
addEventListener('resize',dim);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(dim);

function set(l){
  var fa=l==='fa',h=document.documentElement;h.lang=fa?'fa':'en';h.dir=fa?'rtl':'ltr';
  els.forEach(function(e){e.innerHTML=fa?e._fa:EN[e.dataset.i]});
  document.title=fa?FA.title:EN.title;meta.content=fa?FA.desc:EN.desc;ogt.content=document.title;
  document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l)});
  try{localStorage.setItem('lang',l)}catch(e){}
  dim();
}
document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.l)})});
var q=new URLSearchParams(location.search).get('lang'),s=null;try{s=localStorage.getItem('lang')}catch(e){}
var init=q||s;if(init==='en')set('en');else dim();
document.getElementById('yr').textContent=new Date().getFullYear();

var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(el){var sib=[].filter.call(el.parentNode.children,function(x){return x.classList.contains('rv')});el.style.setProperty('--d',Math.min(sib.indexOf(el),3)*80+'ms');io.observe(el)});

var hd=document.querySelector('header'),bg=document.getElementById('burger'),cur=(location.pathname.split('/').pop()||'index').replace(/\.html$/,'')||'index';
var links=[].slice.call(document.querySelectorAll('header nav a'));
links.forEach(function(a){var h=a.getAttribute('href');if(h.charAt(0)!=='#'&&(h.split('#')[0].replace(/\.html$/,'').replace(/^\.\/$/,'index')||'index')===cur){a.classList.add('cur');a.setAttribute('aria-current','page')}a.addEventListener('click',function(){hd.classList.remove('open');bg.setAttribute('aria-expanded','false')})});
var hl=links.filter(function(a){return a.getAttribute('href').charAt(0)==='#'}),secs=hl.map(function(a){return document.querySelector(a.getAttribute('href'))});
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)hl.forEach(function(a,i){a.classList.toggle('on',secs[i]===e.target)})})},{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(function(s){if(s)so.observe(s)});
bg.addEventListener('click',function(){var o=hd.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
addEventListener('keydown',function(e){if(e.key==='Escape'&&hd.classList.contains('open')){hd.classList.remove('open');bg.setAttribute('aria-expanded','false')}});
function sc(){hd.classList.toggle('sc',scrollY>8)}addEventListener('scroll',sc,{passive:true});sc();
})();
