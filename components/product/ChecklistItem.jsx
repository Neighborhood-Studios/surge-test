import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function ChecklistItem({children,checked=true,delay=0,style}){
  return <div style={{display:'flex',alignItems:'center',gap:16,animation:`surge-fade-up var(--dur-reveal) var(--ease-out) ${delay}ms both`,...style}}>
    <div style={{width:34,height:34,borderRadius:'50%',background:checked?'var(--blue-500)':'var(--surface-dim)',border:checked?'none':'1px solid var(--line-strong)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
      {checked&&<Icon name="check" size={15} color="#fff"/>}
    </div>
    <span style={{fontFamily:'var(--font-sans)',fontSize:19,color:'var(--ink-3)',fontWeight:500}}>{children}</span>
  </div>;
}
