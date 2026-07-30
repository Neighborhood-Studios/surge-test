import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function VoiceBar({time='0:04',state='recording',style}){
  const done=state==='done';
  const bars=[3,4,5,6,8,10,13,16,18,14,10,7,5,4,3];
  return <div style={{display:'flex',alignItems:'center',gap:14,background:'#fff',borderRadius:'var(--radius-pill)',padding:'10px 12px',boxShadow:'var(--shadow-float)',...style}}>
    <div style={{width:44,height:44,borderRadius:'50%',border:'1px solid var(--line-strong)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Icon name="pause" size={18} color="var(--ink-2)"/></div>
    <div style={{flex:1,display:'flex',alignItems:'center',gap:2.5,height:22,minWidth:120,justifyContent:'center'}}>
      {bars.map((h,i)=>done?
        <div key={i} style={{width:2.5,height:2.5,borderRadius:2,background:'var(--ink-3)'}}></div>:
        <div key={i} style={{width:2.5,height:h,borderRadius:2,background:i>3&&i<11?'var(--ink)':'var(--ink-3)',animation:i>3&&i<11?`surge-wave 1.1s var(--ease-in-out) ${i*0.08}s infinite`:'none',transformOrigin:'center'}}></div>)}
    </div>
    {!done&&<span style={{fontFamily:'var(--font-sans)',fontSize:17,color:'var(--ink)',fontVariantNumeric:'tabular-nums'}}>{time}</span>}
    <div style={{width:44,height:44,borderRadius:'50%',background:done?'var(--success)':'var(--blue-50)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,transition:'background var(--dur-base) var(--ease-out)'}}>
      <Icon name={done?'check':'arrowUp'} size={18} color={done?'#fff':'var(--blue-500)'}/>
    </div>
  </div>;
}
