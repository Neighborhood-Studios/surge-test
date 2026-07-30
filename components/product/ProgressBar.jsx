import React from 'react';
export function ProgressBar({label='Generating estimate…',progress=0.6,animate=true,style}){
  return <div style={{...style}}>
    <div style={{background:'var(--surface-dim)',border:'1px solid var(--line)',borderRadius:'var(--radius-md)',padding:10}}>
      <div style={{height:26,width:animate?undefined:`${progress*100}%`,borderRadius:'var(--radius-pill)',background:'var(--blue-500)',animation:animate?'surge-progress 2.8s var(--ease-in-out) infinite alternate':'none'}}></div>
    </div>
    {label&&<div style={{fontFamily:'var(--font-sans)',fontSize:16,color:'var(--ink)',marginTop:12}}>{label}</div>}
  </div>;
}
