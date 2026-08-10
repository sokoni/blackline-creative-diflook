import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ theme = 'dark', className = '' }) {
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <Link to="/" className={`inline-flex flex-col group text-decoration-none ${className}`}>
      <span className={`font-black text-xl md:text-2xl tracking-[0.18em] leading-none ${textColor}`}>
        BLACKLINE
      </span>
      <span className={`font-bold text-[0.65rem] md:text-[0.7rem] tracking-[0.36em] leading-tight ${theme === 'light' ? 'text-black' : 'text-white'} mt-1 uppercase relative`}>
        <span className="absolute -top-[3px] left-0 w-full h-[2px] bg-gradient-to-r from-[#FFE66D] via-[#FF7B00] via-[#FF007F] to-[#00B4D8] rounded-full"></span>
        CREAT<span className="text-[#FF007F]">I</span>VE
      </span>
    </Link>
  );
}
