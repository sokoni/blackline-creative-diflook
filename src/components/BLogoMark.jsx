import React from 'react';

export default function BLogoMark({ className = "h-36 md:h-48" }) {
  return (
    <svg 
      viewBox="0 0 160 160" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto object-contain ${className}`}
    >
      <defs>
        <linearGradient id="bMarkGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFE66D" />
          <stop offset="35%" stopColor="#FF7B00" />
          <stop offset="65%" stopColor="#FF007F" />
          <stop offset="100%" stopColor="#00B4D8" />
        </linearGradient>
      </defs>

      {/* Black Left Vertical Bar */}
      <rect x="12" y="16" width="12" height="128" rx="6" fill="#09090B" />

      {/* Capital B Shape with Gradient Fill */}
      <path 
        d="M 44 16 
           H 95 
           C 120 16, 136 28, 136 48 
           C 136 64, 124 74, 108 78 
           C 128 82, 142 94, 142 112 
           C 142 134, 122 144, 95 144 
           H 44 
           Z 
           M 70 38 
           V 68 
           H 92 
           C 104 68, 112 62, 112 53 
           C 112 44, 104 38, 92 38 
           Z 
           M 70 90 
           V 122 
           H 95 
           C 108 122, 118 114, 118 106 
           C 118 97, 108 90, 95 90 
           Z" 
        fill="url(#bMarkGradient)" 
        fillRule="evenodd" 
      />
    </svg>
  );
}
