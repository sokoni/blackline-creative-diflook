import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import BrandLogo from '../components/BrandLogo';
import { ArrowRight, Search, Target, Compass, Code, BarChart3, Layers, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar theme="light" />

      {/* 1. HERO SECTION (Light Theme) */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-black leading-[1.02]">
              Build brands<br />
              that get found<br />
              and remembered<span className="text-[#FF007F] font-black">.</span>
            </h1>
          </div>

          {/* Thin BlackLine Gradient Line with Pink Circular Point */}
          <GradientLine dotPosition="72%" className="my-12 md:my-16" />

          {/* Strategy / BlackLine Logo / Creativity Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center pt-6 pb-12">
            {/* Left: Strategy */}
            <div className="p-8 border border-neutral-200 rounded-2xl bg-neutral-50/50 hover:shadow-lg transition-all">
              <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-3">
                STRATEGY
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
                Build brands<br />that get found<span className="text-[#FF007F]">.</span>
              </h3>
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                Search. Growth. Visibility. Data-driven positioning that puts your brand in front of the right audience.
              </p>
              <Link 
                to="/strategy"
                className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-black hover:text-[#FF007F] transition-colors uppercase"
              >
                EXPLORE STRATEGY <ArrowRight size={14} />
              </Link>
            </div>

            {/* Center: BlackLine Logo B Mark */}
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FFE66D]/20 via-[#FF007F]/20 to-[#00B4D8]/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <img 
                  src="/assets/b-logo.png" 
                  alt="BlackLine Creative B Logo" 
                  className="h-44 md:h-56 w-auto object-contain relative transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right: Creativity */}
            <div className="p-8 border border-neutral-200 rounded-2xl bg-neutral-50/50 hover:shadow-lg transition-all">
              <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-3">
                CREATIVITY
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
                Design brands<br />worth remembering<span className="text-[#FF007F]">.</span>
              </h3>
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                Identity. Experience. Story. Distinct visual systems and effortless digital experiences that captivate.
              </p>
              <Link 
                to="/creativity"
                className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-black hover:text-[#FF007F] transition-colors uppercase"
              >
                EXPLORE CREATIVITY <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DARK LOWER SECTION: GET FOUND. BLACKLINE BE REMEMBERED. */}
      <section className="bg-[#070709] text-white py-24 border-t border-b border-white/10 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-6 px-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-widest text-white">
                GET FOUND<span className="text-[#FF007F]">.</span>
              </h2>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mt-3 font-semibold">
                SEARCH &bull; SEO &bull; GEO &bull; GROWTH
              </p>
            </div>

            <div className="py-6 px-4 flex flex-col items-center justify-center">
              <span className="text-xs font-extrabold tracking-[0.4em] text-neutral-500 uppercase mb-2">
                THE LINE
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-[0.2em] gradient-text">
                BLACKLINE
              </h2>
            </div>

            <div className="py-6 px-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-widest text-white">
                BE REMEMBERED<span className="text-[#FF007F]">.</span>
              </h2>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mt-3 font-semibold">
                IDENTITY &bull; EXPERIENCE &bull; STORY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORK PREVIEW SECTION */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-3">
                FEATURED WORK
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-black">
                Strategy meets creativity<span className="text-[#FF007F]">.</span><br />
                Results follow<span className="text-[#FF007F]">.</span>
              </h2>
            </div>
            <Link to="/work" className="btn-primary light-btn mt-6 md:mt-0">
              VIEW ALL PROJECTS
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Project 1 */}
            <Link to="/work/stronger-together" className="group block">
              <div className="bg-neutral-900 rounded-3xl overflow-hidden aspect-[16/10] relative mb-6 p-8 flex items-center justify-center border border-neutral-800 transition-all duration-500 group-hover:border-[#FF007F]">
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-900 to-neutral-800 opacity-90"></div>
                <div className="relative z-10 text-center text-white">
                  <span className="text-xs font-bold tracking-widest text-[#FF007F] uppercase mb-2 block">HEALTH & FITNESS</span>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">STRONGER TOGETHER.</h3>
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    VIEW CASE STUDY <ArrowRight size={14} />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-black group-hover:text-[#FF007F] transition-colors">Stronger Together Fitness Challenge</h4>
                  <p className="text-sm text-neutral-500 mt-1">Strategy, Web Design, Development, SEO</p>
                </div>
                <span className="text-xs font-bold text-[#FF007F] bg-pink-50 px-3 py-1 rounded-full border border-pink-200">+48% Traffic</span>
              </div>
            </Link>

            {/* Project 2 */}
            <Link to="/work/d-johnson-funeral" className="group block">
              <div className="bg-neutral-100 rounded-3xl overflow-hidden aspect-[16/10] relative mb-6 p-8 flex items-center justify-center border border-neutral-200 transition-all duration-500 group-hover:border-black">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-200"></div>
                <div className="relative z-10 text-center text-black">
                  <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-2 block">PERSONAL SERVICES</span>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">D. JOHNSON SERVICES</h3>
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-black text-white px-4 py-2 rounded-full">
                    VIEW CASE STUDY <ArrowRight size={14} />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-black group-hover:text-[#FF007F] transition-colors">D. Johnson Funeral Services Inc.</h4>
                  <p className="text-sm text-neutral-500 mt-1">Rebrand & Custom Web Platform</p>
                </div>
                <span className="text-xs font-bold text-[#FF007F] bg-pink-50 px-3 py-1 rounded-full border border-pink-200">100% Custom</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
}
