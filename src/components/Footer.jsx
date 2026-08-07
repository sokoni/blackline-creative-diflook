import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import GradientLine from './GradientLine';

export default function Footer({ theme = 'dark' }) {
  const isLight = theme === 'light';

  return (
    <footer className={`pt-16 pb-12 border-t ${
      isLight ? 'bg-white text-black border-neutral-200' : 'bg-[#070709] text-white border-white/10'
    }`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <BrandLogo theme={theme} />
            <p className={`text-lg md:text-xl font-bold max-w-md ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
              Build brands that get found<span className="text-[#FF007F]">.</span> and remembered<span className="text-[#FF007F]">.</span>
            </p>
            <p className={`text-sm max-w-sm ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
              We combine strategy, brand design, web engineering, and digital growth marketing to move ambitious companies forward.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[#FF007F]">
              PAGES
            </h4>
            <ul className="space-y-3 text-sm font-semibold tracking-wide">
              <li><Link to="/" className="hover:text-[#FF007F] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#FF007F] transition-colors">About & Approach</Link></li>
              <li><Link to="/strategy" className="hover:text-[#FF007F] transition-colors">Strategy</Link></li>
              <li><Link to="/creativity" className="hover:text-[#FF007F] transition-colors">Creativity</Link></li>
              <li><Link to="/services" className="hover:text-[#FF007F] transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-[#FF007F] transition-colors">Work & Case Studies</Link></li>
              <li><Link to="/insights" className="hover:text-[#FF007F] transition-colors">Insights</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#FF007F] transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-[#FF007F] transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF007F] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[#FF007F]">
              GET IN TOUCH
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <div className="text-xs text-neutral-500 uppercase tracking-widest">Email</div>
                <a href="mailto:hello@blackline-creative.com" className="font-bold hover:text-[#FF007F] transition-colors">
                  hello@blackline-creative.com
                </a>
              </li>
              <li>
                <div className="text-xs text-neutral-500 uppercase tracking-widest">Location</div>
                <div className="font-bold">Chicago, IL</div>
              </li>
              <li>
                <div className="text-xs text-neutral-500 uppercase tracking-widest">Website</div>
                <div className="font-bold">blackline-creative.com</div>
              </li>
            </ul>
          </div>
        </div>

        <GradientLine dotPosition="85%" className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 tracking-wider pt-4 gap-4">
          <div>
            &copy; {new Date().getFullYear()} BlackLine Creative. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/404" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link to="/404" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
            <Link to="/404" className="hover:text-neutral-300 transition-colors">404 Preview</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
