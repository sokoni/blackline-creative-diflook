import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import { Palette, Monitor, MessageSquareQuote, Layers, Sparkles, Feather } from 'lucide-react';

export default function Creativity() {
  return (
    <div className="bg-[#070709] text-white min-h-screen relative overflow-hidden">
      <Navbar theme="dark" />

      {/* Hero with vibrant abstract fluid gradient backdrop */}
      <section className="pt-36 pb-24 md:pt-48 md:pb-32 relative">
        {/* Glowing Abstract Fluid Gradient Visual */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tr from-[#FF7B00]/30 via-[#FF007F]/40 to-[#00B4D8]/30 blur-[120px] pointer-events-none -z-10 animate-pulse-glow"></div>

        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-4">
              CREATIVITY
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
              Design brands<br />
              worth remembering<span className="text-[#FF007F]">.</span>
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
              We create bold identities, intuitive experiences, and stories that connect—visually, emotionally, and strategically.
            </p>
          </div>

          <GradientLine dotPosition="30%" className="my-16" />

          {/* 3 Categories with line icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {/* IDENTITY */}
            <div className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-[#FF007F] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-[#FF007F] mb-6 group-hover:scale-110 transition-transform">
                <Palette size={28} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#FF007F] uppercase block mb-2">
                01 &bull; IDENTITY
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-4">
                Distinct visual systems that set you apart.
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                From logo design to complete brand guidelines, typography systems, and color palettes that make your company instantly recognizable.
              </p>
              <ul className="space-y-2 text-xs font-medium text-neutral-400">
                <li className="flex items-center gap-2"><Sparkles size={12} className="text-[#FF007F]" /> Brand Architecture</li>
                <li className="flex items-center gap-2"><Sparkles size={12} className="text-[#FF007F]" /> Logo Systems</li>
                <li className="flex items-center gap-2"><Sparkles size={12} className="text-[#FF007F]" /> Visual Guidelines</li>
              </ul>
            </div>

            {/* EXPERIENCE */}
            <div className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-[#FF007F] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#9D4EDD] mb-6 group-hover:scale-110 transition-transform">
                <Monitor size={28} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#9D4EDD] uppercase block mb-2">
                02 &bull; EXPERIENCE
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-4">
                Digital experiences that feel effortless.
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                User-centered interface design (UI/UX), intuitive site navigation, interactive web animations, and responsive screen optimization.
              </p>
              <ul className="space-y-2 text-xs font-medium text-neutral-400">
                <li className="flex items-center gap-2"><Sparkles size={12} className="text-[#9D4EDD]" /> Web & Mobile Apps</li>
                <li className="flex items-center gap-2"><Sparkles size={12} className="text-[#9D4EDD]" /> Interactive Design</li>
                <li className="flex items-center gap-2"><Sparkles size={12} className="text-[#9D4EDD]" /> Conversion UX</li>
              </ul>
            </div>

            {/* STORY */}
            <div className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-[#FF007F] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#00B4D8] mb-6 group-hover:scale-110 transition-transform">
                <MessageSquareQuote size={28} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#00B4D8] uppercase block mb-2">
                03 &bull; STORY
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-4">
                Words and visuals that make an impact.
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Compelling messaging strategy, brand voice definitions, editorial copywriting, and visual storytelling that resonates with your core audience.
              </p>
              <ul className="space-y-2 text-xs font-medium text-neutral-400">
                <li className="flex items-center gap-2"><Sparkles size={12} className="text-[#00B4D8]" /> Copywriting & Messaging</li>
                <li className="flex items-center gap-2"><Sparkles size={12} className="text-[#00B4D8]" /> Content Strategy</li>
                <li className="flex items-center gap-2"><Sparkles size={12} className="text-[#00B4D8]" /> Creative Direction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer theme="dark" />
    </div>
  );
}
