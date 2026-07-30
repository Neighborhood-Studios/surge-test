import React from 'react';
const P={
  waveform:<g fill="currentColor"><rect x="4" y="18" width="5" height="12" rx="2.5"/><rect x="13" y="10" width="5" height="28" rx="2.5"/><rect x="22" y="4" width="5" height="40" rx="2.5"/><rect x="31" y="12" width="5" height="24" rx="2.5"/><rect x="40" y="19" width="5" height="10" rx="2.5"/></g>,
  scan:<g stroke="currentColor" strokeWidth="3.5" fill="none"><circle cx="24" cy="24" r="19"/><ellipse cx="24" cy="24" rx="19" ry="8" transform="rotate(-20 24 24)"/><path d="M24 5v38" transform="rotate(20 24 24)"/></g>,
  documents:<g stroke="currentColor" strokeWidth="3.5" fill="none"><rect x="4" y="8" width="22" height="28" rx="3" transform="rotate(-6 15 22)"/><rect x="22" y="14" width="22" height="18" rx="3" transform="rotate(6 33 23)"/><circle cx="29" cy="21" r="2.4" fill="currentColor" stroke="none"/><path d="M24 30l5-5 4 4 4-4 5 5"/></g>,
  check:<path d="M10 25l9 9 19-19" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
  arrowUp:<path d="M24 38V12M12 22l12-11 12 11" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
  pause:<g fill="currentColor"><rect x="14" y="12" width="7" height="24" rx="3"/><rect x="27" y="12" width="7" height="24" rx="3"/></g>,
  bolt:<path d="M27.5 8 14 27h8l-2.5 13L34 21h-8l1.5-13z" fill="currentColor"/>,
};
export function Icon({name,size=24,color='var(--icon-tint)',style}){
  return <svg width={size} height={size} viewBox="0 0 48 48" style={{color,display:'block',...style}} aria-hidden="true">{P[name]||null}</svg>;
}
