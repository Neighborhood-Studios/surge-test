import React from 'react';
export function Eyebrow({children,style}){
  return <div style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-eyebrow)',fontWeight:600,letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:'var(--ink-2)',...style}}>{children}</div>;
}
