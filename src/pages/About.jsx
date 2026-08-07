import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import { Search, Target, Edit3, Code, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const steps = [
    {
      step: '01',
      title: 'DISCOVER',
      icon: Search,
      color: '#FFE66D',
      desc: 'We learn your business, audience, competitive market landscape, and key growth goals.'
    },
    {
      step: '02',
      title: 'STRATEGIZE',
      icon: Target,
      color: '#FF7B00',
      desc: 'We create a clear roadmap to get you where you want to go, defining position and search intent.'
    },
    {
      step: '03',
      title: 'DESIGN',
      icon: Edit3,
      color: '#FF007F',
      desc: 'We design bold visual experiences and intuitive user interfaces that bring your brand to life.'
    },
    {
      step: '04',
      title: 'BUILD',
      icon: Code,
      color: '#9D4EDD',
      desc: 'We develop fast, functional, accessible, and scalable digital solutions with modern tech stacks.'
    },
    {
      step: '05',
      title: 'LAUNCH',
      icon: Rocket,
      color: '#00B4D8',
      desc: 'We launch with technical precision, verify performance analytics, and optimize for continuous growth.'
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar theme="light" />

      <section className="pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="container-custom">
          
          {/* Header */}
          <div className="max-w-4xl mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-4">
              OUR APPROACH
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-black mb-6 leading-[1.05]">
              We follow the line<br />
              from insight to impact<span className="text-[#FF007F]">.</span>
            </h1>
            <p className="text-neutral-600 text-lg md:text-xl max-w-2xl leading-relaxed">
              Our process is collaborative, strategic, and built to move your brand forward with measurable clarity.
            </p>
          </div>

          <GradientLine dotPosition="50%" className="my-16" />

          {/* 5-Step Process Timeline Connected Visually */}
          <div className="py-12 relative">
            {/* Horizontal Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFE66D] via-[#FF007F] to-[#00B4D8] -translate-y-12 -z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.title} className="flex flex-col items-center text-center group">
                    {/* Circle Node */}
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center text-white mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110 relative"
                      style={{ backgroundColor: item.color }}
                    >
                      <IconComp size={30} />
                      <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-black px-2 py-0.5 rounded-full border border-white">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-black mb-2 tracking-wide">
                      {item.title}
                    </h3>

                    <p className="text-xs text-neutral-600 leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <GradientLine dotPosition="75%" className="my-20" />

          {/* Team / Values Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
            <div className="p-10 rounded-3xl bg-neutral-50 border border-neutral-200">
              <span className="text-xs font-bold tracking-[0.2em] text-[#FF007F] uppercase block mb-3">
                WHO WE ARE
              </span>
              <h2 className="text-3xl font-extrabold text-black mb-4">
                A modern strategy & creative studio built for what's next.
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                BlackLine Creative was founded on a simple principle: beautiful design means nothing if your target audience can't find you. We combine strategic search intelligence (SEO, AEO, GEO) with high-end creative direction so your brand stands out everywhere.
              </p>
              <Link to="/contact" className="btn-primary light-btn">
                TALK WITH OUR TEAM
              </Link>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 text-[#FF007F] font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="text-base font-extrabold text-black mb-1">Direct Senior Partner Access</h4>
                  <p className="text-xs text-neutral-600">You work directly with strategic leaders and top-tier designers, not junior account managers.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 text-[#FF7B00] font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="text-base font-extrabold text-black mb-1">Future-Proof Search Architecture</h4>
                  <p className="text-xs text-neutral-600">We optimize your brand footprint for traditional search engines, voice assistants, and AI answer engines.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-[#00B4D8] font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="text-base font-extrabold text-black mb-1">Tailored, Non-Generic Codebase</h4>
                  <p className="text-xs text-neutral-600">No bloated templates. We craft clean, custom web solutions built for lightning speed and conversion.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
}
