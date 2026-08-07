import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';

export default function NotFound() {
  return (
    <div className="bg-[#070709] text-white min-h-screen flex flex-col justify-between">
      <Navbar theme="dark" />

      <main className="pt-36 pb-20 md:pt-48 md:pb-28 my-auto">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Huge 404 Gradient Text */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <h1 className="text-[120px] sm:text-[180px] md:text-[240px] font-black leading-none tracking-tighter gradient-text select-none">
                404
              </h1>
            </div>

            {/* Right: Message & Go Home CTA */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-4">
                ERROR 404 &bull; PAGE NOT FOUND
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Looks like this<br />
                page took a wrong<br />
                turn<span className="text-[#FF007F]">.</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-8 max-w-md">
                The page you're searching for doesn't exist or has been moved. Let's get you back on track.
              </p>

              <Link to="/" className="btn-gradient px-8 py-4 text-sm">
                GO HOME
              </Link>
            </div>
          </div>

          {/* Bottom Gradient Line with Loop Aesthetic */}
          <div className="mt-20 relative">
            <GradientLine dotPosition="25%" className="my-8" />
            <svg 
              className="w-full h-12 text-[#FF007F] opacity-40 -mt-6 pointer-events-none" 
              viewBox="0 0 1000 100" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <path 
                d="M0 50 Q250 100 500 50 T1000 50" 
                stroke="url(#gradient404)" 
                strokeWidth="3" 
              />
              <defs>
                <linearGradient id="gradient404" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFE66D" />
                  <stop offset="25%" stopColor="#FF7B00" />
                  <stop offset="50%" stopColor="#FF007F" />
                  <stop offset="75%" stopColor="#9D4EDD" />
                  <stop offset="100%" stopColor="#00B4D8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

        </div>
      </main>

      <Footer theme="dark" />
    </div>
  );
}
