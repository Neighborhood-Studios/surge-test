import React,{useState} from 'react';
import {Icon} from '../core/Icon.jsx';
export function InputTile({icon='waveform',label='Voice Note',iconSize=56,labelSize=16,onClick,style}){
  const [hov,setHov]=useState(false);
  return <div onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
    style={{background:'#fff',borderRadius:'var(--radius-md)',boxShadow:hov?'var(--shadow-float)':'var(--shadow-card)',transform:hov?'translateY(-2px)':'none',transition:'all var(--dur-base) var(--ease-out)',cursor:'pointer',padding:'28px 18px 20px',display:'flex',flexDirection:'column',alignItems:'center',gap:18,minWidth:120,...style}}>
    <Icon name={icon} size={iconSize}/>
    <span style={{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:labelSize,color:'var(--ink)',whiteSpace:'nowrap'}}>{label}</span>
  </div>;
}
