import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function SuccessCheck({size=64,style}){
  return <div style={{width:size,height:size,borderRadius:'50%',background:'var(--success)',display:'flex',alignItems:'center',justifyContent:'center',animation:'surge-pop var(--dur-slow) var(--ease-spring) both',...style}}>
    <Icon name="check" size={size*0.42} color="#fff"/>
  </div>;
}
