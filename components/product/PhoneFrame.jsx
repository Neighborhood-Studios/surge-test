import React from 'react';
export function PhoneFrame({width=340,children,style}){
  const h=width*2.06;
  return <div style={{width,height:h,background:'#1E1F22',borderRadius:width*0.155,padding:width*0.032,boxShadow:'var(--shadow-phone)',position:'relative',flexShrink:0,...style}}>
    <div style={{width:'100%',height:'100%',background:'var(--paper)',borderRadius:width*0.125,overflow:'hidden',position:'relative'}}>
      <div style={{position:'absolute',top:width*0.045,left:'50%',transform:'translateX(-50%)',width:width*0.34,height:width*0.1,background:'#000',borderRadius:999,zIndex:5}}></div>
      {children}
    </div>
  </div>;
}
