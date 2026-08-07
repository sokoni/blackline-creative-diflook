import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import { Search, TrendingUp, Compass, Cpu, CheckCircle2 } from 'lucide-react';

export default function Strategy() {
  return (
    <div className="bg-[#070709] text-white min-h-screen">
      <Navbar theme="dark" />

      <section className="pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="container-custom">
          
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-4">
                STRATEGY
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
                Build brands<br />
                that get found<span className="text-[#FF007F]">.</span>
              </h1>
              <p className="text-neutral-400 text-lg max-w-lg mb-8 leading-relaxed">
                We combine data, search insight, and strategic thinking to put your brand in front of the right people at the right time.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-neutral-300 bg-white/5">
                  Search Engine Optimization (SEO)
                </span>
                <span className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-neutral-300 bg-white/5">
                  Answer Engine Optimization (AEO)
                </span>
                <span className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-neutral-300 bg-white/5">
                  Generative Engine Optimization (GEO)
                </span>
              </div>
            </div>

            {/* Radar / Target Graphic */}
            <div className="lg:col-span-6 flex justify-center relative py-12">
              <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse"></div>
                {/* Middle Ring */}
                <div className="absolute inset-12 md:inset-16 rounded-full border border-white/20"></div>
                {/* Inner Ring */}
                <div className="absolute inset-24 md:inset-28 rounded-full border border-[#FF007F]/40 shadow-[0_0_30px_rgba(255,0,127,0.2)]"></div>
                {/* Center Core */}
                <div className="w-8 h-8 rounded-full bg-[#FF007F] shadow-[0_0_25px_#FF007F] z-10 animate-ping opacity-75"></div>
                <div className="w-6 h-6 rounded-full bg-[#FF007F] z-20"></div>

                {/* Laser scan line with glowing pink dot */}
                <div className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-[#FF007F] via-[#FF007F] to-transparent origin-left transform -translate-y-1/2 rotate-12">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FF007F] shadow-[0_0_15px_#FF007F]"></div>
                </div>

                {/* Nodes with Labels */}
                {/* Top Right: SEARCH */}
                <div className="absolute -top-4 right-0 flex items-center gap-3 bg-neutral-900/90 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                  <Search size={18} className="text-[#FF007F]" />
                  <div>
                    <div className="text-xs font-bold tracking-widest text-white">SEARCH</div>
                    <div className="text-[10px] text-neutral-400">SEO, AEO, GEO</div>
                  </div>
                </div>

                {/* Right: GROWTH */}
                <div className="absolute top-1/3 -right-6 flex items-center gap-3 bg-neutral-900/90 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                  <TrendingUp size={18} className="text-[#FF7B00]" />
                  <div>
                    <div className="text-xs font-bold tracking-widest text-white">GROWTH</div>
                    <div className="text-[10px] text-neutral-400">Traffic that converts</div>
                  </div>
                </div>

                {/* Bottom Right: STRATEGY */}
                <div className="absolute bottom-4 right-0 flex items-center gap-3 bg-neutral-900/90 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                  <Compass size={18} className="text-[#FFE66D]" />
                  <div>
                    <div className="text-xs font-bold tracking-widest text-white">STRATEGY</div>
                    <div className="text-[10px] text-neutral-400">Positioning that drives results</div>
                  </div>
                </div>

                {/* Bottom Left: TECHNOLOGY */}
                <div className="absolute bottom-12 left-0 flex items-center gap-3 bg-neutral-900/90 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                  <Cpu size={18} className="text-[#00B4D8]" />
                  <div>
                    <div className="text-xs font-bold tracking-widest text-white">TECHNOLOGY</div>
                    <div className="text-[10px] text-neutral-400">Web, Analytics, Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <GradientLine dotPosition="50%" className="my-20" />

          {/* 4 Principle Cards Along Bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {/* 01 */}
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-[#FF007F]/50 transition-all duration-300 group">
              <span className="text-4xl font-black text-[#FFE66D] block mb-4 group-hover:scale-105 transition-transform">01</span>
              <h3 className="text-xl font-bold text-white mb-2">Strategy first.<br />Always.</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                We diagnose before we prescribe. Every creative decision starts with business goals and market analysis.
              </p>
            </div>

            {/* 02 */}
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-[#FF007F]/50 transition-all duration-300 group">
              <span className="text-4xl font-black text-[#FF7B00] block mb-4 group-hover:scale-105 transition-transform">02</span>
              <h3 className="text-xl font-bold text-white mb-2">Built for<br />discoverability.</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Search engines and AI models evolve rapidly. We optimize for modern search behavior across Google, ChatGPT, and Beyond.
              </p>
            </div>

            {/* 03 */}
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-[#FF007F]/50 transition-all duration-300 group">
              <span className="text-4xl font-black text-[#FF007F] block mb-4 group-hover:scale-105 transition-transform">03</span>
              <h3 className="text-xl font-bold text-white mb-2">Data informed.<br />Human focused.</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Analytics guide our roadmap, but human empathy drives the experience. We build for real people.
              </p>
            </div>

            {/* 04 */}
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-[#FF007F]/50 transition-all duration-300 group">
              <span className="text-4xl font-black text-[#00B4D8] block mb-4 group-hover:scale-105 transition-transform">04</span>
              <h3 className="text-xl font-bold text-white mb-2">Results that<br />move the needle.</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Vanity metrics don't pay bills. We focus on qualified traffic, lead generation, and measurable ROI.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer theme="dark" />
    </div>
  );
}
