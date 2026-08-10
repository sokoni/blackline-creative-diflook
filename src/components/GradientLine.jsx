import React from 'react';

export default function GradientLine({ dotPosition = '56%', className = '' }) {
  return (
    <div className={`relative w-full my-10 ${className}`}>
      <div 
        className="w-full h-[3px] rounded-full"
        style={{
          background: 'linear-gradient(90deg, #FFE66D 0%, #FF7B00 25%, #FF007F 50%, #9D4EDD 75%, #00B4D8 100%)'
        }}
      />
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FF007F] rounded-full shadow-[0_0_10px_rgba(255,0,127,0.6)]"
        style={{ left: dotPosition }}
      />
    </div>
  );
}
