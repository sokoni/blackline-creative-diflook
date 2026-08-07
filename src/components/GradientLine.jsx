import React from 'react';

export default function GradientLine({ dotPosition = '70%', className = '' }) {
  return (
    <div className={`relative w-full my-8 ${className}`}>
      <div className="gradient-bar rounded-full h-[2px]"></div>
      <div 
        className="gradient-dot"
        style={{ left: dotPosition }}
      />
    </div>
  );
}
