import React,{useState} from 'react';
export function Button({variant='primary',size='md',caps=false,children,style,...rest}){
  const [hov,setHov]=useState(false),[act,setAct]=useState(false);
  const pal={
    primary:{bg:hov?'var(--action-primary-hover)':'var(--action-primary)',fg:'#fff',bd:'none'},
    brand:{bg:hov?'#000':'var(--ink)',fg:'#fff',bd:'none'},
    ghost:{bg:hov?'rgba(23,24,26,.06)':'transparent',fg:'var(--ink)',bd:'1px solid var(--line-strong)'},
    success:{bg:hov?'var(--green-600)':'var(--success)',fg:'#fff',bd:'none'},
  }[variant];
  const sz={sm:{p:'8px 18px',f:14},md:{p:'12px 26px',f:16},lg:{p:'16px 34px',f:18}}[size];
  return <button onMouseEnter={()=>setHov(true)} onMouseLeave={()=>{setHov(false);setAct(false)}} onMouseDown={()=>setAct(true)} onMouseUp={()=>setAct(false)}
    style={{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:caps?sz.f-2:sz.f,letterSpacing:caps?'0.1em':'0',textTransform:caps?'uppercase':'none',
    padding:sz.p,whiteSpace:'nowrap',borderRadius:'var(--radius-pill)',border:pal.bd,background:pal.bg,color:pal.fg,cursor:'pointer',
    transform:act?'scale(.97)':'none',transition:'background var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)',...style}} {...rest}>{children}</button>;
}
