import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import { Compass, Palette, Layout, Code, TrendingUp, ArrowRight, Check } from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: 'STRATEGY',
      icon: Compass,
      color: '#FFE66D',
      description: 'Positioning, research, and technical roadmaps to ensure your brand targets the right audience effectively.',
      items: ['Brand Strategy', 'Market Research & Positioning', 'SEO, AEO & GEO Strategy', 'Digital Growth Planning']
    },
    {
      title: 'BRANDING',
      icon: Palette,
      color: '#FF7B00',
      description: 'Cohesive visual identity systems that communicate your vision and leave a lasting impression.',
      items: ['Identity Design', 'Logo Design', 'Design Systems', 'Brand Guidelines & Assets']
    },
    {
      title: 'WEB DESIGN',
      icon: Layout,
      color: '#FF007F',
      description: 'User-centered interface design focused on seamless engagement, aesthetics, and high conversions.',
      items: ['UI/UX Design', 'Responsive Web Design', 'Interactive Prototyping', 'Conversion-Focused Layouts']
    },
    {
      title: 'DEVELOPMENT',
      icon: Code,
      color: '#9D4EDD',
      description: 'Clean, high-performance web engineering built with modern frameworks and scalable code.',
      items: ['Custom Websites', 'CMS Development', 'E-commerce Platforms', 'Web Applications']
    },
    {
      title: 'MARKETING',
      icon: TrendingUp,
      color: '#00B4D8',
      description: 'Data-backed search optimization, content marketing, and growth campaigns that generate revenue.',
      items: ['Content Strategy', 'Search Engine Optimization', 'Analytics & Reporting', 'Conversion Rate Growth']
    }
  ];

  return (
    <div className="bg-[#070709] text-white min-h-screen">
      <Navbar theme="dark" />

      <section className="pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="container-custom">
          
          {/* Header Grid with B Logo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-4">
                OUR SERVICES
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
                Everything your<br />
                brand needs to get<br />
                found and remembered<span className="text-[#FF007F]">.</span>
              </h1>
              <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
                From strategy to design to development and beyond—we build brands that grow, rank, and stand out.
              </p>
            </div>

            {/* B Logo Asset */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative p-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FFE66D]/20 via-[#FF007F]/30 to-[#00B4D8]/20 blur-2xl rounded-full"></div>
                <img 
                  src="/assets/b-logo.png" 
                  alt="BlackLine B Mark" 
                  className="h-56 md:h-72 w-auto object-contain relative z-10"
                />
              </div>
            </div>
          </div>

          <GradientLine dotPosition="80%" className="my-16" />

          {/* 5 Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {serviceCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div 
                  key={cat.title}
                  className="p-8 rounded-3xl bg-neutral-900/80 border border-white/10 hover:border-[#FF007F] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${cat.color}15`, border: `1px solid ${cat.color}30`, color: cat.color }}
                    >
                      <IconComp size={26} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-2" style={{ color: cat.color }}>
                      0{idx + 1} &bull; {cat.title}
                    </span>

                    <h3 className="text-2xl font-extrabold text-white mb-3">
                      {cat.title}
                    </h3>

                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    <div className="border-t border-white/10 pt-6 space-y-2">
                      {cat.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                          <Check size={14} style={{ color: cat.color }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5">
                    <Link to="/contact" className="text-xs font-bold tracking-widest text-neutral-400 group-hover:text-white uppercase flex items-center gap-2">
                      GET STARTED <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* CTA Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FF007F]/20 via-neutral-900 to-black border border-[#FF007F]/40 flex flex-col justify-between text-center items-center">
              <div className="my-auto">
                <span className="text-xs font-bold tracking-widest text-[#FF007F] uppercase mb-2 block">READY TO ELEVATE?</span>
                <h3 className="text-2xl font-extrabold text-white mb-4">Have a unique project in mind?</h3>
                <p className="text-xs text-neutral-400 mb-6">We tailor our strategy and design solutions around your business goals.</p>
              </div>

              <Link to="/contact" className="btn-gradient w-full text-center">
                LET'S BUILD SOMETHING GREAT
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer theme="dark" />
    </div>
  );
}
