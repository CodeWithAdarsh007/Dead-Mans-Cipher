// Shared shell: bg particles, nav pill, scroll, reveals, tilt, page transitions, toasts
(function(){
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
  // nav scrolled
  const bar=$('#topbar');
  addEventListener('scroll',()=>{ bar&&bar.classList.toggle('scrolled',scrollY>24); if(window.__buntSync)window.__buntSync(); },{passive:true});
  bar&&bar.classList.toggle('scrolled',scrollY>24);
  // active pill
  const nav=$('#mainNav'), pill=$('#navPill');
  function movePill(){ if(!nav||!pill) return; const a=nav.querySelector('a.active'); if(!a){pill.style.opacity=0;return;}
    pill.style.opacity=1; pill.style.left=a.offsetLeft+'px'; pill.style.width=a.offsetWidth+'px'; }
  movePill(); addEventListener('resize',movePill); setTimeout(movePill,300);
  // burger
  const b=$('#burger'), m=$('#mmenu');
  b&&b.addEventListener('click',()=>m.classList.toggle('hidden'));
  // vintage dressing: thin double gold rule + tall-ship silhouette behind every page
  const bunt=document.createElement('div'); bunt.className='topline'; bunt.setAttribute('aria-hidden','true');
  function buntTop(){ bunt.style.top=((bar&&bar.classList.contains('scrolled'))?60:72)+'px'; }
  window.__buntSync=buntTop;
  if(bar){ bar.after(bunt); buntTop(); } else { document.body.prepend(bunt); bunt.style.top='0px'; }
  const ship=document.createElement('div'); ship.className='tallship'; ship.setAttribute('aria-hidden','true');
  ship.innerHTML='<svg viewBox="0 0 620 520" fill="none" stroke="#c9a961" stroke-width="2">'
    +'<path d="M60 472 q30 -14 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0" stroke-width="2.5"/>'
    +'<path d="M110 494 q30 -12 60 0 t60 0 t60 0 t60 0 t60 0 t60 0" stroke-width="1.5" opacity=".6"/>'
    +'<path d="M150 398 L470 398 L428 456 L192 456 Z" fill="#0d0f0a" stroke-width="2.5"/>'
    +'<line x1="470" y1="398" x2="548" y2="352" stroke-width="2.5"/>'
    +'<line x1="250" y1="150" x2="250" y2="398"/><line x1="320" y1="108" x2="320" y2="398"/><line x1="390" y1="160" x2="390" y2="398"/>'
    +'<line x1="212" y1="182" x2="288" y2="182"/><line x1="204" y1="244" x2="296" y2="244"/><line x1="210" y1="306" x2="290" y2="306"/>'
    +'<line x1="272" y1="150" x2="368" y2="150"/><line x1="264" y1="222" x2="376" y2="222"/><line x1="270" y1="294" x2="370" y2="294"/>'
    +'<line x1="358" y1="192" x2="422" y2="192"/><line x1="352" y1="254" x2="428" y2="254"/><line x1="358" y1="316" x2="422" y2="316"/>'
    +'<path d="M216 185 L284 185 L292 241 L208 241 Z" fill="rgba(201,169,97,.10)" stroke-width="1.2"/>'
    +'<path d="M276 153 L364 153 L372 219 L268 219 Z" fill="rgba(201,169,97,.10)" stroke-width="1.2"/>'
    +'<path d="M274 225 L366 225 L368 291 L272 291 Z" fill="rgba(201,169,97,.08)" stroke-width="1.2"/>'
    +'<path d="M361 195 L419 195 L425 251 L355 251 Z" fill="rgba(201,169,97,.08)" stroke-width="1.2"/>'
    +'<line x1="320" y1="108" x2="548" y2="352" stroke-width="1" opacity=".7"/>'
    +'<line x1="250" y1="150" x2="150" y2="398" stroke-width="1" opacity=".7"/>'
    +'<line x1="390" y1="160" x2="150" y2="398" stroke-width="1" opacity=".5"/>'
    +'<path d="M320 108 l30 8 -30 8 Z" fill="#c9a961" stroke="none"/>'
    +'<circle cx="310" cy="420" r="4" fill="#c9a961" stroke="none"/><circle cx="340" cy="420" r="4" fill="#c9a961" stroke="none"/></svg>';
  document.body.appendChild(ship);
  // page enter
  const page=$('#page'); requestAnimationFrame(()=>requestAnimationFrame(()=>page&&page.classList.add('enter')));
  // seamless transitions
  $$('a[data-link]').forEach(a=>a.addEventListener('click',e=>{
    const href=a.getAttribute('href');
    if(!href||href.startsWith('http')||e.metaKey||e.ctrlKey) return;
    e.preventDefault(); if(page){page.classList.remove('enter'); page.classList.add('leave');}
    setTimeout(()=>location.href=href,340);
  }));
  // reveals
  const io=new IntersectionObserver(es=>es.forEach(x=>{ if(x.isIntersecting){x.target.classList.add('in');
    x.target.querySelectorAll('.bar i').forEach(el=>el.style.width=el.dataset.w||'70%'); io.unobserve(x.target);} }),{threshold:.12});
  $$('.rv').forEach(el=>io.observe(el));
  // counters
  const cio=new IntersectionObserver(es=>es.forEach(x=>{ if(!x.isIntersecting) return; cio.unobserve(x.target);
    const el=x.target, end=parseFloat(el.dataset.count), t0=performance.now(), dur=1400;
    (function tick(t){ const p=Math.min(1,(t-t0)/dur), e=1-Math.pow(1-p,3); el.textContent=Math.round(end*e).toLocaleString(); if(p<1) requestAnimationFrame(tick); })(t0);
  }),{threshold:.4});
  $$('[data-count]').forEach(el=>cio.observe(el));
  // card tilt + glow follow
  if(matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    $$('.card').forEach(card=>{ card.addEventListener('pointermove',e=>{ const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
      card.style.setProperty('--mx',(x*100)+'%');
      card.style.transform=`perspective(900px) rotateX(${(0.5-y)*5}deg) rotateY(${(x-0.5)*6}deg) translateY(-4px)`; });
      card.addEventListener('pointerleave',()=>card.style.transform=''); });
    // cursor glow
    const glow=$('#cursorGlow');
    addEventListener('pointermove',e=>{ if(glow){glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px';} },{passive:true});
  }
  // stars canvas
  const cv=$('#stars');
  if(cv && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    const ctx=cv.getContext('2d'); let W,H,P=[];
    function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;
      P=Array.from({length:Math.min(90,innerWidth/14)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.6+.3,s:Math.random()*.35+.06,o:Math.random()*.7+.2}));}
    size(); addEventListener('resize',size);
    (function loop(){ ctx.clearRect(0,0,W,H);
      for(const p of P){ p.y-=p.s; if(p.y<-4){p.y=H+4;p.x=Math.random()*W;}
        ctx.globalAlpha=p.o*(.6+.4*Math.sin(Date.now()/900+p.x)); ctx.fillStyle=p.x%7<1?'#f6d67c':'#9fd8ff';
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7); ctx.fill(); }
      ctx.globalAlpha=1; requestAnimationFrame(loop); })();
  }
  // toast + copy helpers (global)
  window.toast=(msg)=>{ const w=$('#toasts')||document.body; const d=document.createElement('div'); d.className='toast'; d.textContent=msg;
    ( $('#toasts')||(()=>{const t=document.createElement('div');t.id='toasts';t.className='toast-wrap';document.body.appendChild(t);return t;})() ).appendChild(d);
    setTimeout(()=>{d.style.opacity=0; d.style.transition='opacity .4s'; setTimeout(()=>d.remove(),400);},2800); };
  window.copyText=async(t,msg)=>{ try{await navigator.clipboard.writeText(t); toast(msg||'Copied to logbook');}catch{ const ta=document.createElement('textarea'); ta.value=t; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); toast(msg||'Copied'); } };
  window.setLoading=(btn,on,label)=>{ if(!btn)return; if(on){btn.dataset.h=btn.innerHTML; btn.disabled=true; btn.innerHTML='<span class="spin"></span> '+(label||'Working…');} else {btn.disabled=false; if(btn.dataset.h)btn.innerHTML=btn.dataset.h;} };
})();
