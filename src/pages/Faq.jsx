import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      q: 'What types of businesses do you work with?',
      a: 'We work with ambitious founders, growth-stage companies, enterprise brands, and modern service providers looking to build high-visibility digital platforms and distinct visual brand identities.'
    },
    {
      q: 'What services do you offer?',
      a: 'Our core services span Brand Strategy, Search Engine & Answer Engine Optimization (SEO, AEO, GEO), Identity & UI/UX Design, Custom Web Engineering, and Performance Marketing.'
    },
    {
      q: 'How long does a project typically take?',
      a: 'Timeline varies by scope. A comprehensive brand identity and custom website build typically ranges from 6 to 12 weeks. We establish clear timelines during the initial strategy sprint.'
    },
    {
      q: 'How much does a website cost?',
      a: 'Our projects are custom tailored to specific business objectives. Custom website builds start with strategic discovery and range based on interactive complexity, content requirements, and search integrations.'
    },
    {
      q: 'Do you offer ongoing support?',
      a: 'Yes. We offer post-launch optimization retainers including continuous SEO management, content publishing, security maintenance, analytics reporting, and conversion rate optimization.'
    },
    {
      q: 'How do we get started?',
      a: 'Simply click "Let\'s Talk" or fill out our contact form. We\'ll schedule a 30-minute discovery call to discuss your vision, review your current brand footprint, and outline an action plan.'
    }
  ];

  return (
    <div className="bg-[#070709] text-white min-h-screen">
      <Navbar theme="dark" />

      <section className="pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Headline */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-4">
                FAQ
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
                Questions?<br />
                We’ve got<br />
                answers<span className="text-[#FF007F]">.</span>
              </h1>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Everything you need to know before we get started on your project.
              </p>

              <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10">
                <h4 className="text-base font-bold text-white mb-2">Have a question not listed here?</h4>
                <p className="text-xs text-neutral-400 mb-6">Our team is happy to answer any custom inquiries.</p>
                <Link to="/contact" className="btn-primary dark-btn text-xs w-full text-center">
                  ASK US DIRECTLY
                </Link>
              </div>
            </div>

            {/* Interactive Accordion */}
            <div className="lg:col-span-7 space-y-4">
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.q}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'bg-neutral-900 border-[#FF007F]' 
                        : 'bg-neutral-950 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg text-white cursor-pointer"
                    >
                      <span>{item.q}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? 'bg-[#FF007F] text-white rotate-180' : 'bg-white/10 text-neutral-400'
                      }`}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <GradientLine dotPosition="50%" className="my-20" />

        </div>
      </section>

      <Footer theme="dark" />
    </div>
  );
}
