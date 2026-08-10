import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import BLogoMark from '../components/BLogoMark';

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between">
      <Navbar theme="light" />

      {/* Main Content Area */}
      <main className="pt-44 sm:pt-52 md:pt-64 lg:pt-72 pb-16">
        <div className="container-custom">
          {/* Main Hero Headline */}
          <div className="max-w-4xl mt-6 md:mt-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-extrabold tracking-tight text-black leading-[1.05]">
              Build brands<br />
              that get found<br />
              and remembered<span className="text-[#FF007F] inline-block font-black">.</span>
            </h1>
          </div>

          {/* Rainbow Gradient Line with Pink Dot */}
          <GradientLine dotPosition="56%" className="my-10 md:my-14" />

          {/* Sub-Hero 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-2 pb-10">
            {/* Left: Strategy */}
            <div className="space-y-3 text-left">
              <span className="text-xs font-black tracking-[0.2em] text-black uppercase block">
                STRATEGY
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-snug">
                Build brands<br />
                that get found<span className="text-[#FF007F]">.</span>
              </h2>
              <p className="text-neutral-500 text-sm font-medium pt-2">
                Search. Growth. Visibility.
              </p>
            </div>

            {/* Middle: B Logo Mark */}
            <div className="flex justify-center items-center py-4 md:py-0">
              <BLogoMark className="h-32 md:h-44" />
            </div>

            {/* Right: Creativity */}
            <div className="space-y-3 text-left md:pl-6">
              <span className="text-xs font-black tracking-[0.2em] text-black uppercase block">
                CREATIVITY
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-snug">
                Design brands<br />
                worth remembering<span className="text-[#FF007F]">.</span>
              </h2>
              <p className="text-neutral-500 text-sm font-medium pt-2">
                Identity. Experience. Story.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Dark Banner */}
      <section className="bg-[#070709] text-white py-8 border-t border-white/10 relative overflow-hidden">
        {/* Contour topo overlay pattern */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='200' viewBox='0 0 600 200'%3E%3Cpath d='M-100 50 Q 150 150 400 30 T 800 100 M-100 100 Q 200 30 450 160 T 800 120 M-100 150 Q 100 190 350 70 T 800 160' fill='none' stroke='%23FFE66D' stroke-width='1.5' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '600px 200px'
          }}
        />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center">
            {/* Left */}
            <div className="py-2">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-neutral-300 uppercase inline-flex items-center gap-2">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#FFE66D] to-[#FF7B00]"></span>
                GET FOUND.
              </span>
            </div>

            {/* Center */}
            <div className="py-2">
              <span className="text-lg md:text-xl font-black tracking-[0.3em] text-white uppercase">
                BLACKLINE
              </span>
            </div>

            {/* Right */}
            <div className="py-2">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-neutral-300 uppercase">
                BE REMEMBERED.
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
}
