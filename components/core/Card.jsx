import React from 'react';
export function Card({float=false,tilt=0,children,style}){
  return <div style={{background:'var(--surface-card)',borderRadius:'var(--radius-lg)',boxShadow:float?'var(--shadow-float)':'var(--shadow-card)',transform:tilt?`rotate(${tilt}deg)`:'none',padding:'var(--space-6)',...style}}>{children}</div>;
}
