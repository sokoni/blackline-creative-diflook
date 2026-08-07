import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ variant = 'header', theme = 'dark', className = '' }) {
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  
  if (variant === 'b-mark') {
    return (
      <img 
        src="/assets/b-logo.png" 
        alt="BlackLine Creative B Mark" 
        className={`h-24 w-auto object-contain ${className}`}
      />
    );
  }

  return (
    <Link to="/" className={`inline-flex flex-col group text-decoration-none ${className}`}>
      <span className={`font-extrabold text-xl tracking-[0.2em] leading-none ${textColor} group-hover:opacity-90 transition-opacity`}>
        BLACKLINE
      </span>
      <span className={`font-medium text-[0.65rem] tracking-[0.38em] leading-tight text-neutral-400 mt-1 uppercase relative`}>
        CREATIVE
        <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-gradient-to-r from-[#FFE66D] via-[#FF007F] to-[#00B4D8] opacity-80 group-hover:opacity-100 transition-opacity"></span>
      </span>
    </Link>
  );
}
