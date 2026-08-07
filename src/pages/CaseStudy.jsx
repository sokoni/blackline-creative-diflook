import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import { PROJECTS_DATA } from './Work';
import { ArrowLeft, CheckCircle2, Monitor, Smartphone, TrendingUp, Sparkles } from 'lucide-react';

export default function CaseStudy() {
  const { id } = useParams();
  
  const project = PROJECTS_DATA.find(p => p.id === id) || PROJECTS_DATA[0];

  return (
    <div className="bg-[#070709] text-white min-h-screen">
      <Navbar theme="dark" />

      <section className="pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="container-custom">
          
          {/* Top navigation back link */}
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-neutral-400 hover:text-white transition-colors uppercase mb-8"
          >
            <ArrowLeft size={16} /> BACK TO ALL WORK
          </Link>

          {/* Headline & Overview */}
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-3">
              CASE STUDY &bull; {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {project.title}<span className="text-[#FF007F]">.</span>
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
              {project.solution}
            </p>
          </div>

          <GradientLine dotPosition="40%" className="my-10" />

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 mb-16">
            <div>
              <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-1">INDUSTRY</div>
              <div className="text-base font-bold text-white">{project.category}</div>
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-1">SERVICES</div>
              <div className="text-base font-bold text-white">{project.type}</div>
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-1">TIMELINE</div>
              <div className="text-base font-bold text-white">8 Weeks</div>
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-1">OUTCOME</div>
              <div className="text-base font-bold text-[#FF007F]">{project.results.split('|')[0]}</div>
            </div>
          </div>

          {/* Mockup Display Section (Laptop + Phone Showcase) */}
          <div className="bg-neutral-900/90 border border-white/10 rounded-3xl p-8 md:p-16 mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF007F]/20 to-[#00B4D8]/20 blur-3xl -z-10 rounded-full"></div>
            
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Desktop Mockup Simulation */}
              <div className="w-full md:w-3/4 bg-neutral-950 rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
                {/* Browser top bar */}
                <div className="bg-neutral-900 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <div className="ml-4 bg-neutral-800 rounded-md px-3 py-1 text-[10px] text-neutral-400 font-mono w-64 text-center">
                    https://{project.id}.blackline.design
                  </div>
                </div>
                
                {/* Website content simulation */}
                <div className="p-10 bg-neutral-950 text-white min-h-[300px] flex flex-col justify-center items-center text-center">
                  <span className="text-xs font-extrabold tracking-widest text-[#FF007F] uppercase mb-2">STRONGER TOGETHER</span>
                  <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">CHALLENGE YOUR LIMITS<span className="text-[#FF007F]">.</span></h3>
                  <p className="text-xs text-neutral-400 max-w-md mb-6">A community that pushes you to be your best self through data-driven performance training.</p>
                  <button className="btn-gradient text-xs px-6 py-2">JOIN THE CHALLENGE</button>
                </div>
              </div>

              {/* Mobile Phone Mockup Simulation */}
              <div className="w-48 bg-neutral-950 rounded-[32px] border-4 border-neutral-800 p-2 shadow-2xl">
                <div className="w-full h-full bg-neutral-900 rounded-[24px] p-4 text-center text-white min-h-[260px] flex flex-col justify-center items-center">
                  <div className="w-12 h-1 bg-neutral-700 rounded-full mx-auto mb-4"></div>
                  <span className="text-[10px] font-bold text-[#FF007F] uppercase mb-1">MOBILE APP</span>
                  <h4 className="text-sm font-extrabold mb-2">STRONGER.</h4>
                  <p className="text-[9px] text-neutral-400 mb-4">Push your boundaries daily.</p>
                  <button className="bg-[#FF007F] text-white text-[9px] font-bold px-3 py-1.5 rounded-full w-full">START NOW</button>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Challenge & Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* The Challenge */}
            <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/60 border border-white/10">
              <span className="text-xs font-bold tracking-[0.2em] text-[#FFE66D] uppercase block mb-3">
                THE CHALLENGE
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-4">
                Outdated digital touchpoints causing lead dropoff.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {project.challenge} The brand lacked consistency across digital channels, and legacy web interfaces failed to communicate the value proposition effectively.
              </p>
              <ul className="space-y-3 text-xs text-neutral-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#FFE66D]" /> High bounce rates on desktop & mobile</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#FFE66D]" /> Low search visibility across target keywords</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#FFE66D]" /> Friction in the conversion checkout funnel</li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/60 border border-white/10">
              <span className="text-xs font-bold tracking-[0.2em] text-[#FF007F] uppercase block mb-3">
                THE SOLUTION & RESULTS
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-4">
                Custom brand system built for conversion & organic growth.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                We designed a modern visual identity system, built a custom high-performance web platform, and executed an aggressive SEO strategy.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-[#FF007F] uppercase tracking-widest mb-1">KEY PERFORMANCE RESULTS</div>
                <div className="text-lg font-extrabold text-white">{project.results}</div>
              </div>
            </div>
          </div>

          {/* Bottom Back Button */}
          <div className="text-center pt-8">
            <Link to="/work" className="btn-primary dark-btn">
              &larr; BACK TO ALL WORK
            </Link>
          </div>

        </div>
      </section>

      <Footer theme="dark" />
    </div>
  );
}
