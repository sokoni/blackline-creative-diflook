import React from 'react';
import BrandLogo from './BrandLogo';
import GradientLine from './GradientLine';

export default function Footer({ theme = 'light' }) {
  return (
    <footer className="mt-32 pt-20 pb-12 border-t bg-white text-black border-neutral-200">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="space-y-4">
            <BrandLogo theme={theme} />
            <p className="text-sm text-neutral-500 max-w-sm">
              BlackLine Creative — Strategy Meets Creativity.
            </p>
          </div>
          <div>
            <a href="mailto:hello@blackline-creative.com" className="font-extrabold text-sm hover:text-[#FF007F] transition-colors">
              hello@blackline-creative.com
            </a>
          </div>
        </div>
        
        <GradientLine dotPosition="50%" className="my-6" />
        
        <div className="text-xs text-neutral-400 text-center pt-2">
          &copy; {new Date().getFullYear()} BlackLine Creative. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
