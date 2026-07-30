const DS=window.SurgeDesignSystem_be3e4e;
const {PhoneFrame,VoiceBar,ChecklistItem,MenuList,ProgressBar,InputTile,SuccessCheck,Icon,Button,Badge}=DS;
// Frames-advance probe (shared with sections.js pattern): when frames are frozen, skip CSS transitions entirely.
window.__surgeFramesOK=null;
requestAnimationFrame(()=>requestAnimationFrame(()=>{window.__surgeFramesOK=true}));
setTimeout(()=>{if(window.__surgeFramesOK===null)window.__surgeFramesOK=false},400);
const tr=css=>window.__surgeFramesOK===false?'none':css;
const QUESTIONS=['How thick was the drywall in the ceiling?','How much drywall did you remove?','How long will you leave the dehumidifier?','Is the wall and baseboard affected?'];
const JOBS=['Interior reconstruction','Exterior reconstruction','Mitigation','Contents','Mold','Fire mitigation','Biohazard','Time & Material'];
function ScreenPad({children,style}){return <div style={{position:'absolute',inset:0,padding:'84px 26px 26px',display:'flex',flexDirection:'column',...style}}>{children}</div>;}
function ScreenTitle({children,action,small}){return <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20}}><h2 style={{fontSize:small?30:34,fontWeight:600,letterSpacing:'-0.02em'}}>{children}</h2>{action}</div>;}
// Looping demo: questions check in → note submitted modal
function FollowUpDemo(){
  const [phase,setPhase]=React.useState(0); // 0..4 checks, 5 modal
  React.useEffect(()=>{const t=setInterval(()=>setPhase(p=>(p+1)%8),1100);return()=>clearInterval(t)},[]);
  const checks=Math.min(phase,4),modal=phase>=5&&phase<7;
  return <PhoneFrame width={330}>
    <div style={{position:'absolute',inset:0,filter:modal?'blur(9px)':'none',transition:tr('filter .45s var(--ease-out)')}}>
      <ScreenPad>
        <div style={{textAlign:'center'}}>
          <div style={{fontSize:14,color:'var(--ink-2)',marginBottom:8}}>Mitigation</div>
          <h2 style={{fontSize:32,fontWeight:600,letterSpacing:'-0.02em',lineHeight:1.1}}>Some follow-up questions</h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:24,marginTop:56,flex:1}}>
          {QUESTIONS.map((q,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:13,opacity:i<checks?1:.25,transform:i<checks?'none':'translateY(6px)',transition:tr('all .5s var(--ease-out)')}}>
            <div style={{width:28,height:28,borderRadius:'50%',background:'var(--blue-500)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,transform:i<checks?'scale(1)':'scale(.7)',transition:tr('transform .4s var(--ease-spring)')}}><Icon name="check" size={12} color="#fff"/></div>
            <span style={{fontSize:15.5,color:'var(--ink-3)',fontWeight:500}}>{q}</span>
          </div>)}
        </div>
        <VoiceBar time={'0:0'+Math.min(phase+1,9)} state={phase>=4?'done':'recording'} style={{transform:'scale(.92)'}}/>
      </ScreenPad>
    </div>
    <div style={{position:'absolute',left:16,right:16,bottom:22,background:'#fff',borderRadius:24,boxShadow:'var(--shadow-float)',padding:'42px 24px 22px',textAlign:'center',opacity:modal?1:0,transform:modal?'translateY(0) scale(1)':'translateY(30px) scale(.96)',transition:tr('all .5s var(--ease-spring)'),pointerEvents:'none'}}>
      <h3 style={{fontSize:27,fontWeight:600}}>Note submitted</h3>
      <div style={{fontSize:15,color:'var(--ink-3)',fontWeight:600,marginTop:6}}>6 mins / 35 questions</div>
      <button style={{marginTop:30,fontFamily:'var(--font-sans)',fontWeight:600,fontSize:17,color:'#fff',background:'var(--ink)',border:'none',borderRadius:999,padding:'14px 28px',whiteSpace:'nowrap'}}>Generate Estimate</button>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:34}}>
        <div style={{width:40,height:40,borderRadius:'50%',border:'1px solid var(--line-strong)',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="pause" size={15} color="var(--ink-2)"/></div>
        <div style={{flex:1,borderBottom:'2px dotted var(--line-strong)',margin:'0 14px'}}></div>
        <div style={{width:40,height:40,borderRadius:'50%',background:'var(--success)',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="check" size={15} color="#fff"/></div>
      </div>
    </div>
  </PhoneFrame>;
}
// Projects screen with New menu (loops open/closed)
function ProjectsDemo(){
  const [open,setOpen]=React.useState(false);
  React.useEffect(()=>{const t=setInterval(()=>setOpen(o=>!o),2600);return()=>clearInterval(t)},[]);
  return <PhoneFrame width={330}>
    <ScreenPad>
      <ScreenTitle action={<Button variant="primary" size="sm">New</Button>}>Projects</ScreenTitle>
      <div style={{display:'flex',flexDirection:'column',gap:14}}>
        {[0,1,2].map(i=><div key={i} style={{background:'var(--surface-dim)',borderRadius:18,padding:16,display:'flex',gap:14}}>
          <div style={{width:64,height:64,background:'#E7E6E0',borderRadius:14}}></div>
          <div style={{flex:1,display:'flex',flexDirection:'column',gap:8,justifyContent:'center'}}><div style={{height:12,width:'70%',background:'#E7E6E0',borderRadius:6}}></div><div style={{height:12,width:'45%',background:'#E7E6E0',borderRadius:6}}></div></div>
        </div>)}
      </div>
      <div style={{position:'absolute',top:112,right:16,opacity:open?1:0,transform:open?'translateY(0) scale(1)':'translateY(-8px) scale(.95)',transformOrigin:'top right',transition:tr('all .4s var(--ease-out)'),pointerEvents:'none',zIndex:10}}>
        <MenuList dense items={JOBS}/>
      </div>
    </ScreenPad>
  </PhoneFrame>;
}
// Generate Estimate inputs + progress → Xactimate-ready success (slow loop)
function InputsDemo(){
  const [tick,setTick]=React.useState(0); // 0..100 progress, 100..128 success hold
  React.useEffect(()=>{const t=setInterval(()=>setTick(v=>(v+2)%128),140);return()=>clearInterval(t)},[]);
  const p=Math.min(tick,100)/100,done=tick>=100;
  return <PhoneFrame width={330}>
    <ScreenPad>
      <ScreenTitle small>Generate Estimate</ScreenTitle>
      <div style={{background:'var(--surface-dim)',borderRadius:20,padding:12,display:'flex',gap:10}}>
        <InputTile icon="waveform" label="Voice Note" iconSize={38} labelSize={13} style={{flex:1,minWidth:0,padding:'20px 4px 14px',gap:12}}/>
        <InputTile icon="scan" label="3D Scan" iconSize={38} labelSize={13} style={{flex:1,minWidth:0,padding:'20px 4px 14px',gap:12}}/>
        <InputTile icon="documents" label="Documents" iconSize={38} labelSize={13} style={{flex:1,minWidth:0,padding:'20px 4px 14px',gap:12}}/>
      </div>
      <div style={{marginTop:22,opacity:done?0:1,transition:tr('opacity .3s var(--ease-out)')}}><ProgressBar animate={false} progress={p} label="Generating estimate…"/></div>
      <div style={{position:'absolute',left:20,right:20,bottom:26,background:'#fff',borderRadius:24,boxShadow:'var(--shadow-float)',padding:'32px 24px 28px',textAlign:'center',opacity:done?1:0,transform:done?'translateY(0) scale(1)':'translateY(24px) scale(.96)',transition:tr('all .5s var(--ease-spring)'),pointerEvents:'none'}}>
        <div style={{display:'flex',justifyContent:'center'}}>{done&&<SuccessCheck size={56}/>}</div>
        <h3 style={{fontSize:24,fontWeight:600,marginTop:16}}>Estimate ready</h3>
        <div style={{fontSize:14.5,color:'var(--ink-3)',fontWeight:600,marginTop:6}}>Xactimate-ready · ESX file generated</div>
        <div style={{display:'flex',gap:8,justifyContent:'center',marginTop:18}}><Badge dark>Xactimate</Badge><Badge dark>PDF</Badge></div>
      </div>
    </ScreenPad>
  </PhoneFrame>;
}
// Export screen + floating docs
function ExportDemo(){
  const doc=(tilt,label,dy)=><div style={{background:'#fff',borderRadius:20,boxShadow:'var(--shadow-float)',padding:18,width:190,transform:`rotate(${tilt}deg) translateY(${dy}px)`,position:'relative'}}>
    <div style={{display:'flex',flexDirection:'column',gap:8}}>
      <div style={{height:10,background:'var(--blue-100)',borderRadius:4,width:'85%'}}></div>
      <div style={{display:'flex',gap:8}}><div style={{width:64,height:56,background:'var(--blue-100)',borderRadius:5}}></div><div style={{flex:1,display:'flex',flexDirection:'column',gap:7}}><div style={{height:9,background:'var(--blue-100)',borderRadius:4}}></div><div style={{height:9,background:'var(--blue-100)',borderRadius:4}}></div><div style={{height:9,background:'var(--blue-100)',borderRadius:4,width:'75%'}}></div></div></div>
      <div style={{height:9,background:'var(--blue-100)',borderRadius:4,width:'60%'}}></div>
    </div>
    <div style={{position:'absolute',bottom:-14,left:'50%',transform:'translateX(-50%)'}}><Badge dark>{label}</Badge></div>
  </div>;
  return <div style={{position:'relative',display:'flex',justifyContent:'center'}}>
    <div style={{display:'flex',gap:26,position:'absolute',top:-40,zIndex:2}}>{doc(-6,'PDF',10)}{doc(5,'Xactimate',-14)}</div>
    <div style={{marginTop:150}}>
      <PhoneFrame width={330}>
        <ScreenPad>
          <ScreenTitle action={<Button variant="primary" size="sm">Export</Button>}>Estimate</ScreenTitle>
          <div style={{display:'flex',gap:14}}>
            <div style={{flex:1,background:'var(--surface-dim)',borderRadius:16,height:150,padding:14}}><div style={{width:56,height:56,background:'#E7E6E0',borderRadius:12}}></div></div>
            <div style={{flex:1,background:'var(--surface-dim)',borderRadius:16,height:150,padding:14,display:'flex',flexDirection:'column',gap:9}}><div style={{height:12,background:'#E7E6E0',borderRadius:6}}></div><div style={{height:12,background:'#E7E6E0',borderRadius:6,width:'65%'}}></div></div>
          </div>
        </ScreenPad>
      </PhoneFrame>
    </div>
  </div>;
}
Object.assign(window,{FollowUpDemo,ProjectsDemo,InputsDemo,ExportDemo,ScreenPad,ScreenTitle,QUESTIONS,JOBS});
