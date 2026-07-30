const ADS=window.SurgeDesignSystem_be3e4e;
const {PhoneFrame:PF,VoiceBar:VB,MenuList:ML,ProgressBar:PB,InputTile:IT,Icon:IC,Button:BT,Badge:BD}=ADS;
const AQ=['How thick was the drywall in the ceiling?','How much drywall did you remove?','How long will you leave the dehumidifier?','Is the wall and baseboard affected?'];
const AJOBS=['Interior reconstruction','Exterior reconstruction','Mitigation','Contents','Mold','Fire mitigation','Biohazard','Time & Material'];
const LINES=[['DRY 1/2" - Remove & replace drywall','188 SF','$412.84'],['Tear out wet drywall, cleanup, bag','64 SF','$96.32'],['Dehumidifier (per 24 hr period)','3 EA','$247.65'],['Air mover (per 24 hr period)','9 EA','$314.19'],['Apply antimicrobial agent to walls','188 SF','$67.11'],['Baseboard - Remove & replace 3 1/4"','42 LF','$188.58'],['Content manipulation charge','2 HR','$97.40'],['Final cleaning - construction','310 SF','$110.05']];
function Fade({k,children}){return <div key={k} style={{position:'absolute',inset:0,animation:'surge-fade-up .5s var(--ease-out) both'}}>{children}</div>;}
function Pad({children,style}){return <div style={{position:'absolute',inset:0,padding:'78px 24px 24px',display:'flex',flexDirection:'column',overflow:'hidden',...style}}>{children}</div>;}
function Title({children,action,size=32}){return <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:18,flexShrink:0}}><h2 style={{fontSize:size,fontWeight:600,letterSpacing:'-0.02em'}}>{children}</h2>{action}</div>;}
function App(){
  const [screen,setScreen]=React.useState('login');
  const [menu,setMenu]=React.useState(false);
  const [checks,setChecks]=React.useState(0);
  const [noteDone,setNoteDone]=React.useState(false);
  const [exported,setExported]=React.useState(false);
  React.useEffect(()=>{
    if(screen==='voice'&&checks<5){const t=setTimeout(()=>setChecks(c=>c+1),1000);return()=>clearTimeout(t)}
    if(screen==='voice'&&checks>=5&&!noteDone){const t=setTimeout(()=>setNoteDone(true),700);return()=>clearTimeout(t)}
    if(screen==='generating'){const t=setTimeout(()=>setScreen('estimate'),3400);return()=>clearTimeout(t)}
  },[screen,checks,noteDone]);
  const go=s=>{setMenu(false);setScreen(s);if(s==='voice'){setChecks(0);setNoteDone(false)}if(s==='estimate')setExported(false)};
  return <PF width={370}>
    {screen==='login'&&<Fade k="login"><Pad style={{justifyContent:'center',alignItems:'center',textAlign:'center',gap:0}}>
      <img src="../../assets/logo.svg" height="36" alt="Surge"/>
      <h2 style={{fontSize:30,fontWeight:600,letterSpacing:'-0.02em',marginTop:26}}>Welcome back</h2>
      <p style={{fontSize:15,color:'var(--ink-3)',marginTop:8}}>Estimates in seconds, on site.</p>
      <div style={{width:'100%',marginTop:34,display:'flex',flexDirection:'column',gap:12}}>
        <input defaultValue="alex@titanrestoration.com" style={{fontFamily:'var(--font-sans)',fontSize:16,padding:'15px 18px',borderRadius:14,border:'1px solid var(--line-strong)',background:'#fff',color:'var(--ink)',outline:'none'}}/>
        <input type="password" defaultValue="••••••••" style={{fontFamily:'var(--font-sans)',fontSize:16,padding:'15px 18px',borderRadius:14,border:'1px solid var(--line-strong)',background:'#fff',color:'var(--ink)',outline:'none'}}/>
        <BT variant="brand" size="lg" onClick={()=>go('projects')} style={{marginTop:8}}>Log in</BT>
      </div>
    </Pad></Fade>}
    {screen==='projects'&&<Fade k="projects"><Pad>
      <Title action={<BT variant="primary" size="sm" onClick={()=>setMenu(m=>!m)}>New</BT>}>Projects</Title>
      <div style={{display:'flex',flexDirection:'column',gap:14}}>
        {[['1427 Maplewood Dr','Mitigation · yesterday'],['88 Harbor View Ct','Mold · Mon'],['302 Birch Hollow Ln','Fire mitigation · last week']].map((p,i)=><div key={i} onClick={()=>go('capture')} style={{background:'#fff',boxShadow:'var(--shadow-card)',borderRadius:18,padding:16,display:'flex',gap:14,alignItems:'center',cursor:'pointer'}}>
          <div style={{width:56,height:56,background:'var(--blue-50)',borderRadius:13,display:'flex',alignItems:'center',justifyContent:'center'}}><IC name={['waveform','documents','scan'][i]} size={30}/></div>
          <div><div style={{fontWeight:600,fontSize:16,color:'var(--ink)'}}>{p[0]}</div><div style={{fontSize:13.5,color:'var(--ink-3)',marginTop:3}}>{p[1]}</div></div>
        </div>)}
      </div>
      {menu&&<div style={{position:'absolute',top:112,right:20,zIndex:10,animation:'surge-fade-up .3s var(--ease-out) both'}}><ML dense items={AJOBS} onSelect={()=>go('capture')}/></div>}
    </Pad></Fade>}
    {screen==='capture'&&<Fade k="capture"><Pad>
      <Title size={29}>Generate Estimate</Title>
      <div style={{fontSize:13.5,color:'var(--ink-3)',margin:'-10px 0 16px'}}>1427 Maplewood Dr · Mitigation</div>
      <div style={{background:'var(--surface-dim)',borderRadius:20,padding:12,display:'flex',gap:10}}>
        <IT icon="waveform" label="Voice Note" iconSize={42} labelSize={13.5} onClick={()=>go('voice')} style={{flex:1,minWidth:0,padding:'22px 4px 15px',gap:13}}/>
        <IT icon="scan" label="3D Scan" iconSize={42} labelSize={13.5} style={{flex:1,minWidth:0,padding:'22px 4px 15px',gap:13}}/>
        <IT icon="documents" label="Documents" iconSize={42} labelSize={13.5} style={{flex:1,minWidth:0,padding:'22px 4px 15px',gap:13}}/>
      </div>
      <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><BT variant="ghost" size="sm" onClick={()=>go('projects')}>Back</BT></div>
    </Pad></Fade>}
    {screen==='voice'&&<Fade k="voice">
      <div style={{position:'absolute',inset:0,filter:noteDone?'blur(9px)':'none',transition:'filter .45s var(--ease-out)'}}><Pad>
        <div style={{textAlign:'center'}}><div style={{fontSize:14,color:'var(--ink-2)',marginBottom:8}}>Mitigation</div><h2 style={{fontSize:32,fontWeight:600,letterSpacing:'-0.02em',lineHeight:1.1}}>Some follow-up questions</h2></div>
        <div style={{display:'flex',flexDirection:'column',gap:26,marginTop:52,flex:1}}>
          {AQ.map((q,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:14,opacity:i<checks?1:.25,transition:'opacity .5s var(--ease-out)'}}>
            <div style={{width:30,height:30,borderRadius:'50%',background:'var(--blue-500)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,transform:i<checks?'scale(1)':'scale(.7)',transition:'transform .4s var(--ease-spring)'}}><IC name="check" size={13} color="#fff"/></div>
            <span style={{fontSize:16.5,color:'var(--ink-3)',fontWeight:500}}>{q}</span>
          </div>)}
        </div>
        <VB time={'0:0'+Math.min(checks+1,9)} state={checks>=4?'done':'recording'}/>
      </Pad></div>
      {noteDone&&<div style={{position:'absolute',left:18,right:18,bottom:24,background:'#fff',borderRadius:24,boxShadow:'var(--shadow-float)',padding:'44px 26px 24px',textAlign:'center',animation:'surge-pop .55s var(--ease-spring) both'}}>
        <h3 style={{fontSize:28,fontWeight:600}}>Note submitted</h3>
        <div style={{fontSize:15,color:'var(--ink-3)',fontWeight:600,marginTop:6}}>6 mins / 35 questions</div>
        <div style={{marginTop:30}}><BT variant="brand" size="lg" onClick={()=>go('generating')}>Generate Estimate</BT></div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:36}}>
          <div style={{width:42,height:42,borderRadius:'50%',border:'1px solid var(--line-strong)',display:'flex',alignItems:'center',justifyContent:'center'}}><IC name="pause" size={16} color="var(--ink-2)"/></div>
          <div style={{flex:1,borderBottom:'2px dotted var(--line-strong)',margin:'0 14px'}}></div>
          <div style={{width:42,height:42,borderRadius:'50%',background:'var(--success)',display:'flex',alignItems:'center',justifyContent:'center'}}><IC name="check" size={16} color="#fff"/></div>
        </div>
      </div>}
    </Fade>}
    {screen==='generating'&&<Fade k="gen"><Pad>
      <Title size={29}>Generate Estimate</Title>
      <div style={{background:'var(--surface-dim)',borderRadius:20,padding:12,display:'flex',gap:10,opacity:.5}}>
        <IT icon="waveform" label="Voice Note" iconSize={42} labelSize={13.5} style={{flex:1,minWidth:0,padding:'22px 4px 15px',gap:13,pointerEvents:'none'}}/>
        <IT icon="scan" label="3D Scan" iconSize={42} labelSize={13.5} style={{flex:1,minWidth:0,padding:'22px 4px 15px',gap:13,pointerEvents:'none'}}/>
        <IT icon="documents" label="Documents" iconSize={42} labelSize={13.5} style={{flex:1,minWidth:0,padding:'22px 4px 15px',gap:13,pointerEvents:'none'}}/>
      </div>
      <div style={{marginTop:24}}><PB label="Generating estimate…"/></div>
    </Pad></Fade>}
    {screen==='estimate'&&<Fade k="est"><Pad>
      <Title action={<BT variant="primary" size="sm" onClick={()=>setExported(true)}>Export</BT>}>Estimate</Title>
      <div style={{fontSize:13.5,color:'var(--ink-3)',margin:'-8px 0 14px'}}>1427 Maplewood Dr · Mitigation · $1,534.14 total</div>
      <div style={{flex:1,overflow:'hidden',display:'flex',flexDirection:'column',gap:9}}>
        {LINES.map((l,i)=><div key={i} style={{background:'#fff',boxShadow:'var(--shadow-card)',borderRadius:13,padding:'11px 14px',display:'flex',alignItems:'center',gap:10,animation:`surge-fade-up .6s var(--ease-out) ${i*70}ms both`}}>
          <div style={{flex:1,fontSize:13.5,fontWeight:600,color:'var(--ink)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{l[0]}</div>
          <div style={{fontSize:12.5,color:'var(--ink-3)',flexShrink:0}}>{l[1]}</div>
          <div style={{fontSize:13.5,fontWeight:700,color:'var(--ink)',flexShrink:0,fontVariantNumeric:'tabular-nums'}}>{l[2]}</div>
        </div>)}
      </div>
      {exported&&<div style={{position:'absolute',inset:0,background:'rgba(244,243,238,.78)',backdropFilter:'blur(8px)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:18,animation:'surge-fade-up .35s var(--ease-out) both'}}>
        <div style={{width:64,height:64,borderRadius:'50%',background:'var(--success)',display:'flex',alignItems:'center',justifyContent:'center',animation:'surge-pop .55s var(--ease-spring) both'}}><IC name="check" size={26} color="#fff"/></div>
        <div style={{fontSize:22,fontWeight:600,color:'var(--ink)'}}>Estimate exported</div>
        <div style={{display:'flex',gap:10}}><BD dark>PDF</BD><BD dark>Xactimate</BD></div>
        <BT variant="ghost" size="sm" onClick={()=>go('projects')}>Back to projects</BT>
      </div>}
    </Pad></Fade>}
  </PF>;
}
window.SurgeApp=App;
