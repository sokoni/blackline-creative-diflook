import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import GradientLine from './GradientLine';

export default function Footer({ theme = 'dark' }) {
  const isLight = theme === 'light';

  return (
    <footer className={`mt-32 md:mt-48 pt-20 pb-12 border-t ${
      isLight ? 'bg-white text-black border-neutral-200' : 'bg-[#070709] text-white border-white/10'
    }`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <BrandLogo theme={theme} />
            <p className={`text-lg md:text-xl font-extrabold max-w-md ${isLight ? 'text-neutral-800' : 'text-neutral-200'}`}>
              Build brands that get found<span className="text-[#FF007F]">.</span> and remembered<span className="text-[#FF007F]">.</span>
            </p>
            <p className={`text-sm max-w-sm ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
              We combine strategy, brand design, web engineering, and digital growth marketing to move ambitious companies forward.
            </p>
          </div>

          {/* Col 2: Contact & Location (PAGES removed as requested) */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold tracking-[0.2em] uppercase mb-6 text-[#FF007F]">
              GET IN TOUCH
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <div className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:hello@blackline-creative.com" className="font-extrabold hover:text-[#FF007F] transition-colors text-base">
                  hello@blackline-creative.com
                </a>
              </li>
              <li>
                <div className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Location</div>
                <div className="font-bold">Chicago, IL</div>
              </li>
            </ul>
          </div>
        </div>

        <GradientLine dotPosition="85%" className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400 tracking-wider pt-4 gap-4">
          <div>
            &copy; {new Date().getFullYear()} BlackLine Creative. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/404" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link to="/404" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
