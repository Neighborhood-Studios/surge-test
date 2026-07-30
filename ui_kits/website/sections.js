const DS2=window.SurgeDesignSystem_be3e4e;
const {Button:BBtn,Eyebrow:EEyebrow,Card:CCard}=DS2;
// Frames-advance probe: reveal animations arm ONLY if rAF ticks twice (frozen/capture environments render everything visible, no transitions).
let __framesOK=null;const __framesWaiters=[];
requestAnimationFrame(()=>requestAnimationFrame(()=>{__framesOK=true;__framesWaiters.forEach(f=>f())}));
setTimeout(()=>{if(__framesOK===null){__framesOK=false;__framesWaiters.forEach(f=>f())}},400);
function Reveal({children,delay=0,style}){
  const ref=React.useRef(null);
  // 'shown' = visible, no transition (default & fallback). 'hidden' = armed start state. 'in' = animating in.
  const [st,setSt]=React.useState('shown');
  React.useEffect(()=>{
    const el=ref.current;if(!el)return;let dead=false,o=null,t=null;
    const arm=()=>{
      if(dead||!__framesOK)return;
      const r=el.getBoundingClientRect();
      if(r.top<window.innerHeight*0.92&&r.bottom>0)return; // already on screen: stay shown
      setSt('hidden');
      const show=()=>{if(!dead)setSt('in');cleanup()};
      if(typeof IntersectionObserver!=='undefined'){o=new IntersectionObserver(([e])=>{if(e.isIntersecting)show()},{threshold:.18});o.observe(el)}
      const onScroll=()=>{const r2=el.getBoundingClientRect();if(r2.top<window.innerHeight*0.92&&r2.bottom>0)show()};
      window.addEventListener('scroll',onScroll,{passive:true});
      // safety: never stay hidden more than 6s
      t=setTimeout(show,6000);
      var cleanup=()=>{if(o)o.disconnect();window.removeEventListener('scroll',onScroll);if(t)clearTimeout(t)};
    };
    if(__framesOK===null)__framesWaiters.push(arm);else arm();
    return()=>{dead=true;if(o)o.disconnect();if(t)clearTimeout(t)};
  },[]);
  const hidden=st==='hidden';
  return <div ref={ref} style={{opacity:hidden?0:1,transform:hidden?'translateY(28px)':'none',transition:st==='in'?`all .9s var(--ease-out) ${delay}ms`:'none',...style}}>{children}</div>;
}
function Nav(){
  return <nav style={{position:'sticky',top:0,zIndex:50,background:'rgba(244,243,238,.85)',backdropFilter:'blur(12px)',borderBottom:'1px solid var(--line)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'18px var(--container-pad)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <a href="#top" style={{display:'flex',alignItems:'center'}}><img src="../../assets/logo.svg" height="24" alt="Surge"/></a>
      <div style={{display:'flex',alignItems:'center',gap:28}}>
        {['About','Careers','Log in'].map(l=><a key={l} href="#" style={{fontSize:12,fontWeight:600,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--ink)',whiteSpace:'nowrap'}}>{l}</a>)}
        <BBtn variant="brand" caps size="sm">Book a demo</BBtn>
      </div>
    </div>
  </nav>;
}
function Hero(){
  return <header id="top" className="grid-lines" style={{position:'relative',overflow:'hidden'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'90px var(--container-pad) 70px',textAlign:'center',position:'relative'}}>
      <Reveal><div className="eyebrow" style={{marginBottom:26}}>The only AI estimating tool built for restoration</div></Reveal>
      <Reveal delay={100}><h1 style={{fontSize:'var(--text-display)',lineHeight:'var(--leading-display)',letterSpacing:'var(--tracking-display)',fontWeight:600,maxWidth:820,margin:'0 auto'}}>Remediation estimates in seconds</h1></Reveal>
      <Reveal delay={200}><p style={{fontSize:19,lineHeight:1.55,color:'var(--ink-2)',maxWidth:620,margin:'26px auto 0'}}>Surge uses AI to help your team write accurate, high-dollar-value estimates in a fraction of the time. Cut your cycle time in half and increase your revenue per job.</p></Reveal>
      <Reveal delay={300}><div style={{marginTop:36}}><BBtn variant="brand" caps size="lg">Book a demo</BBtn></div></Reveal>
    </div>
    <div style={{position:'relative'}}>
      <div className="surge-grad" style={{position:'absolute',inset:'34% -10% -40%',borderRadius:'50% 50% 0 0/30% 30% 0 0',filter:'blur(2px)',opacity:.9}}></div>
      <div style={{position:'relative',display:'flex',justifyContent:'center',paddingBottom:80}}>
        <Reveal delay={350}><FollowUpDemo/></Reveal>
      </div>
    </div>
  </header>;
}
function Stories(){
  const T=[["Margin pressure is driving a new era of restoration. Surge gives estimators speed and clarity, turning complexity into an edge.","R. Palmer","Owner, Titan-class restoration firm"],["Estimating used to slow us down. With Surge, anyone in Operations can estimate, and conversational AI turns scope notes into faster payouts.","D. Fussell","COO, regional restoration group"],["We doubled the number of estimates we write in a week and payouts per job are up significantly. Surge changed our company.","W. Braddy","Owner, water restoration company"]];
  return <section className="grid-lines" style={{borderTop:'1px solid var(--line)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'90px var(--container-pad)'}}>
      <Reveal><div className="eyebrow" style={{marginBottom:20}}>Customer stories</div></Reveal>
      <div style={{display:'grid',gridTemplateColumns:'1.1fr 1fr',gap:64,alignItems:'start'}}>
        <Reveal delay={100}><h2 style={{fontSize:'var(--text-h2)',fontWeight:600,letterSpacing:'-0.02em',lineHeight:1.12}}>Our customers see a <span style={{color:'var(--blue-500)'}}>12% revenue increase</span> on average, while winning more jobs</h2>
        <p style={{fontSize:17,color:'var(--ink-2)',lineHeight:1.55,marginTop:20,maxWidth:420}}>Higher-dollar-value claims that get approved. Decrease your cycle time and increase your revenue.</p>
        <div style={{marginTop:26}}><BBtn variant="ghost" caps size="sm">Read more</BBtn></div></Reveal>
        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {T.map((t,i)=><Reveal key={i} delay={i*120}><CCard style={{padding:'26px 28px'}}>
            <div style={{fontSize:18,fontWeight:600,color:'var(--ink)',lineHeight:1.4,letterSpacing:'-0.01em'}}>&ldquo;{t[0]}&rdquo;</div>
            <div style={{display:'flex',alignItems:'center',gap:12,marginTop:18}}>
              <div style={{width:40,height:40,borderRadius:'50%',background:'var(--blue-100)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,color:'var(--blue-600)',fontSize:15}}>{t[1][0]}</div>
              <div><div style={{fontWeight:600,fontSize:14,color:'var(--ink)'}}>{t[1]}</div><div style={{fontSize:13,color:'var(--ink-3)'}}>{t[2]}</div></div>
            </div>
          </CCard></Reveal>)}
        </div>
      </div>
    </div>
  </section>;
}
function FeatureRow({eyebrow,title,body,demo,flip}){
  return <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:70,alignItems:'center',direction:flip?'rtl':'ltr'}}>
    <Reveal style={{direction:'ltr'}}>
      <div className="eyebrow" style={{marginBottom:16}}>{eyebrow}</div>
      <h3 style={{fontSize:34,fontWeight:600,letterSpacing:'-0.02em',lineHeight:1.12,maxWidth:400}}>{title}</h3>
      <p style={{fontSize:17,color:'var(--ink-2)',lineHeight:1.55,marginTop:16,maxWidth:420}}>{body}</p>
    </Reveal>
    <Reveal delay={150} style={{direction:'ltr',display:'flex',justifyContent:'center'}}>{demo}</Reveal>
  </div>;
}
function Features(){
  return <section className="grid-lines" style={{borderTop:'1px solid var(--line)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'100px var(--container-pad)'}}>
      <Reveal><h2 style={{fontSize:'var(--text-h1)',fontWeight:600,letterSpacing:'-0.025em',lineHeight:1.06,textAlign:'center',maxWidth:700,margin:'0 auto'}}>Standardized, fast documentation</h2>
      <p style={{fontSize:18,color:'var(--ink-2)',textAlign:'center',maxWidth:560,margin:'22px auto 0',lineHeight:1.55}}>Surge makes sure the full scope of every job is documented, and generates a complete, insurance-compliant estimate.</p></Reveal>
      <div style={{display:'flex',flexDirection:'column',gap:130,marginTop:110}}>
        <FeatureRow eyebrow="Scope" title="Add value to every type of job" body="Generate high-value estimates, regardless of scope. Write claims with comprehensive, accurate line items for all remediation jobs." demo={<ProjectsDemo/>}/>
        <FeatureRow flip eyebrow="Inputs" title="Capture on-site details with voice assistant" body="Surge's AI voice assistant guides you through job sites to ensure a complete scope. Add 3D scans, tic sheets, and more." demo={<InputsDemo/>}/>
        <FeatureRow eyebrow="Export" title="Get Xactimate-ready estimates in seconds" body="Create insurance-compliant estimates in 90 seconds to 2 minutes. Export to Xactimate or a customized PDF." demo={<ExportDemo/>}/>
      </div>
    </div>
  </section>;
}
function HowItWorks(){
  const steps=['Document site conditions','Upload images, notes and 3D scans','Analyze all documentation together','Customize the estimate to carrier','Check for errors or missed opportunities','Generate line items and upload to Xactimate'];
  const [active,setActive]=React.useState(0);
  React.useEffect(()=>{const t=setInterval(()=>setActive(a=>(a+1)%steps.length),1800);return()=>clearInterval(t)},[]);
  return <section style={{borderTop:'1px solid var(--line)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'100px var(--container-pad)',display:'grid',gridTemplateColumns:'1fr 1fr',gap:70}}>
      <Reveal>
        <div className="eyebrow" style={{marginBottom:18}}>How it works</div>
        <h2 style={{fontSize:'var(--text-h2)',fontWeight:600,letterSpacing:'-0.02em',lineHeight:1.1}}>AI-powered estimates that deliver real value</h2>
        <p style={{fontSize:17,color:'var(--ink-2)',lineHeight:1.55,marginTop:18,maxWidth:420}}>Estimating speed and accuracy decrease cycle times by more than 50%, expand capacity, improve win rates, and increase revenue.</p>
        <div style={{marginTop:26}}><BBtn variant="primary">See impact</BBtn></div>
      </Reveal>
      <Reveal delay={120}><div style={{display:'flex',flexDirection:'column'}}>
        {steps.map((s,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:18,padding:'17px 20px',borderRadius:14,background:i===active?'#fff':'transparent',boxShadow:i===active?'var(--shadow-card)':'none',transition:'all .45s var(--ease-out)'}}>
          <div style={{fontSize:13,fontWeight:700,color:i===active?'var(--blue-500)':'var(--ink-3)',width:22,fontVariantNumeric:'tabular-nums',transition:'color .3s'}}>{String(i+1).padStart(2,'0')}</div>
          <div style={{fontSize:17,fontWeight:i===active?600:500,color:i===active?'var(--ink)':'var(--ink-2)',transition:'all .3s'}}>{s}</div>
        </div>)}
      </div></Reveal>
    </div>
  </section>;
}
function FooterCta(){
  return <footer className="surge-grad" style={{position:'relative'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'110px var(--container-pad) 40px',position:'relative',zIndex:1,textAlign:'center'}}>
      <div className="eyebrow" style={{color:'rgba(23,24,26,.75)',marginBottom:20}}>Get started</div>
      <h2 style={{fontSize:'var(--text-h1)',fontWeight:600,letterSpacing:'-0.025em',lineHeight:1.06,maxWidth:720,margin:'0 auto',color:'var(--ink)'}}>Ready to supercharge your remediation company?</h2>
      <p style={{fontSize:18,color:'rgba(23,24,26,.8)',maxWidth:520,margin:'22px auto 0',lineHeight:1.55}}>Sign up for a free demo to learn how Surge can help you generate fast, high-value estimates.</p>
      <div style={{marginTop:34}}><BBtn variant="brand" caps size="lg">Book a demo</BBtn></div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:110,paddingTop:26,borderTop:'1px solid rgba(23,24,26,.18)',fontSize:13,color:'rgba(23,24,26,.75)'}}>
        <span>© 2026 Surge Estimates Inc.</span>
        <span style={{display:'flex',gap:24}}><a href="#" style={{color:'inherit'}}>Privacy Policy</a><a href="#" style={{color:'inherit'}}>Terms of Service</a></span>
      </div>
    </div>
  </footer>;
}
function Website(){
  return <div style={{background:'var(--bg-page)'}}><Nav/><Hero/><Stories/><Features/><HowItWorks/><FooterCta/></div>;
}
Object.assign(window,{Website,Reveal});
