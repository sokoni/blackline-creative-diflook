import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "BlackLine took our vision and turned it into a website that not only looks amazing but brings in real results.",
    author: "Alexandria W.",
    company: "Stronger Together Fitness",
    role: "Founder & CEO",
    accentColor: "#FF007F"
  },
  {
    id: 2,
    quote: "Professional, creative, and strategic. They truly care about your brand's success and search positioning.",
    author: "Devalle Johnson",
    company: "D. Johnson Funeral Services",
    role: "Managing Director",
    accentColor: "#FFE66D"
  },
  {
    id: 3,
    quote: "Our traffic and conversions have grown so much since launch. Worth every single penny.",
    author: "Marcus T.",
    company: "Performance Apparel Co.",
    role: "Head of Marketing",
    accentColor: "#00B4D8"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#070709] text-white min-h-screen">
      <Navbar theme="dark" />

      <section className="pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="container-custom">
          
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-4">
              KIND WORDS
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
              Our clients say<br />
              it best<span className="text-[#FF007F]">.</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              Real partnerships. Real results. Read how we help clients get found and remembered.
            </p>
          </div>

          <GradientLine dotPosition="35%" className="my-12" />

          {/* Interactive Testimonial Carousel */}
          <div className="relative max-w-5xl mx-auto my-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS_DATA.map((item, idx) => (
                <div
                  key={item.id}
                  className={`p-8 rounded-3xl bg-neutral-900/80 border transition-all duration-500 flex flex-col justify-between ${
                    idx === currentIndex 
                      ? 'border-[#FF007F] bg-neutral-900 shadow-[0_0_30px_rgba(255,0,127,0.2)] scale-105 z-10' 
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div>
                    <Quote size={32} style={{ color: item.accentColor }} className="mb-4" />
                    <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-medium mb-6">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="text-sm font-extrabold text-white">{item.author}</div>
                    <div className="text-xs text-neutral-400 font-medium">{item.company}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12">
              <div className="flex items-center space-x-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-[#FF007F]' : 'w-2 bg-neutral-700'
                    }`}
                  />
                ))}
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="w-12 h-12 rounded-full border border-white/20 bg-neutral-900 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="w-12 h-12 rounded-full border border-white/20 bg-neutral-900 text-white flex items-center justify-center hover:bg-[#FF007F] transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <GradientLine dotPosition="80%" className="my-20" />

          {/* Metrics & Statistics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-neutral-900/60 p-10 rounded-3xl border border-white/10">
            <div>
              <div className="text-4xl md:text-5xl font-black gradient-text">98%</div>
              <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mt-2">Client satisfaction</div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-black text-white">65%</div>
              <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mt-2">Avg. increase in traffic</div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-black text-[#FF007F]">2.8x</div>
              <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mt-2">Avg. increase in conversions</div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-black text-white">Long-term</div>
              <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mt-2">Partnerships built</div>
            </div>
          </div>

        </div>
      </section>

      <Footer theme="dark" />
    </div>
  );
}
