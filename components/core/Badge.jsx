import React from 'react';
export function Badge({dark=false,children,style}){
  return <span style={{display:'inline-block',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:14,padding:'6px 14px',borderRadius:'var(--radius-sm)',background:dark?'#26272B':'var(--blue-50)',color:dark?'#fff':'var(--blue-600)',...style}}>{children}</span>;
}
