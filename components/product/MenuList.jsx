import React from 'react';
export function MenuList({items=[],onSelect,dense=false,style}){
  return <div style={{background:'#fff',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-menu)',padding:dense?'8px 0':'10px 0',minWidth:dense?0:260,...style}}>
    {items.map((it,i)=><div key={i} onClick={()=>onSelect&&onSelect(it)} style={{fontFamily:'var(--font-sans)',fontSize:dense?15:18,color:'var(--ink)',padding:dense?'10px 18px':'13px 24px',whiteSpace:'nowrap',cursor:'pointer',transition:'background var(--dur-fast) var(--ease-out)'}}
      onMouseEnter={e=>e.currentTarget.style.background='var(--surface-dim)'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>{it}</div>)}
  </div>;
}
