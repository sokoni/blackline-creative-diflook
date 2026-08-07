import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import { ArrowUpRight, ExternalLink, Filter } from 'lucide-react';

export const PROJECTS_DATA = [
  {
    id: 'stronger-together',
    title: 'Stronger Together Fitness Challenge',
    category: 'Health & Fitness',
    type: 'Strategy, Web Design, Development, SEO',
    tag: 'Web Design',
    challenge: 'Outdated site, unclear messaging, and low program sign-ups.',
    solution: 'A bold new brand presence and conversion-focused website built to drive challenge sign-ups.',
    results: '+48% organic traffic | +29% sign-ups | +35% time on site',
    bg: 'from-neutral-900 via-[#111116] to-[#1A1A24]',
    textColor: 'text-white'
  },
  {
    id: 'd-johnson-funeral',
    title: 'D. Johnson Personal Services Inc.',
    category: 'Personal Services',
    type: 'Branding, Web Design, CMS Development',
    tag: 'Branding',
    challenge: 'Legacy brand needed modern digital refresh while preserving trust.',
    solution: 'Clean, respectful user experience with custom service request workflows.',
    results: '+62% online inquiries | 100% Custom Built',
    bg: 'from-neutral-800 via-neutral-900 to-black',
    textColor: 'text-white'
  },
  {
    id: 'performance-apparel',
    title: 'Apex Performance Apparel Co.',
    category: 'E-commerce & Retail',
    type: 'Brand Strategy, E-commerce, Marketing',
    tag: 'Marketing',
    challenge: 'Struggling to differentiate in a crowded activewear market.',
    solution: 'Complete brand positioning overhaul with high-converting Shopify store.',
    results: '2.8x conversion increase | +115% revenue growth',
    bg: 'from-[#1A1024] via-[#111116] to-black',
    textColor: 'text-white'
  },
  {
    id: 'nexus-analytics',
    title: 'Nexus Data Analytics Platform',
    category: 'Technology & SaaS',
    type: 'UI/UX Design, Web Application',
    tag: 'Strategy',
    challenge: 'Complex data visualizations were confusing enterprise users.',
    solution: 'Streamlined dashboard UX design system with interactive charts.',
    results: '98% client satisfaction | 4.9/5 user rating',
    bg: 'from-[#0A1A24] via-[#111116] to-black',
    textColor: 'text-white'
  }
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Strategy', 'Web Design', 'Branding', 'Marketing'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.tag === activeFilter || p.type.includes(activeFilter));

  return (
    <div className="bg-[#070709] text-white min-h-screen">
      <Navbar theme="dark" />

      {/* Header */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-4">
              OUR WORK
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
              Strategy meets<br />
              creativity<span className="text-[#FF007F]">.</span><br />
              Results follow<span className="text-[#FF007F]">.</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              We partner with ambitious brands to build digital experiences that get found—and remembered.
            </p>
          </div>

          <GradientLine dotPosition="60%" className="my-12" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase mr-2 flex items-center gap-1">
              <Filter size={14} /> FILTER:
            </span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#FF007F] text-white shadow-[0_0_20px_rgba(255,0,127,0.4)]'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id}
                to={`/work/${project.id}`}
                className="group block rounded-3xl overflow-hidden bg-neutral-900/80 border border-white/10 hover:border-[#FF007F] transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`aspect-[16/10] bg-gradient-to-br ${project.bg} p-8 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="flex justify-between items-start z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-white/10 backdrop-blur-md text-white border border-white/20">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#FF007F] transition-colors">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Mockup Preview Visual */}
                  <div className="my-auto py-6 text-center z-10">
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                      {project.title.split(' ')[0]} {project.title.split(' ')[1]}
                    </h3>
                    <p className="text-xs text-neutral-400 tracking-widest uppercase">{project.type}</p>
                  </div>

                  <div className="text-xs text-neutral-400 border-t border-white/10 pt-4 z-10 flex justify-between">
                    <span>{project.results.split('|')[0]}</span>
                    <span className="text-[#FF007F] font-bold">CASE STUDY &rarr;</span>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-extrabold text-white group-hover:text-[#FF007F] transition-colors mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-neutral-400 line-clamp-2">
                    {project.solution}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <GradientLine dotPosition="20%" className="my-20" />

          {/* Statistics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-neutral-900/60 p-10 rounded-3xl border border-white/10">
            <div>
              <div className="text-4xl md:text-5xl font-black gradient-text">10+</div>
              <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mt-2">Projects completed</div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-black text-white">6+</div>
              <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mt-2">Industries served</div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-black text-white">100%</div>
              <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mt-2">Custom built</div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-black text-[#FF007F]">Results</div>
              <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mt-2">That matter</div>
            </div>
          </div>

        </div>
      </section>

      <Footer theme="dark" />
    </div>
  );
}
