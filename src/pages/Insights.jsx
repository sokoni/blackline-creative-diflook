import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ARTICLES_DATA = [
  {
    id: 'seo-aeo-geo-difference',
    title: "SEO, AEO, GEO: What's the difference and why it matters.",
    excerpt: "Sharing what we learn so you can build smarter, grow faster, and stay ahead in traditional and AI search.",
    category: 'FEATURED',
    tag: 'STRATEGY',
    readTime: '6 min read',
    date: 'Aug 2026',
    featured: true
  },
  {
    id: 'website-converting-fix',
    title: "Why your website isn't converting (and how to fix it)",
    excerpt: "Diagnosing friction points in user experience, messaging clarity, and call-to-action layout.",
    category: 'DESIGN',
    tag: 'CONVERSION',
    readTime: '4 min read',
    date: 'Jul 2026',
    featured: false
  },
  {
    id: 'brand-consistency-more-than-logo',
    title: "Brand consistency is more than a logo.",
    excerpt: "How unified visual language, tone of voice, and interaction patterns build long-term brand equity.",
    category: 'BRANDING',
    tag: 'IDENTITY',
    readTime: '5 min read',
    date: 'Jul 2026',
    featured: false
  },
  {
    id: 'content-that-ranks-answers',
    title: "Content that ranks is content that answers.",
    excerpt: "Shift from keyword stuffing to answering high-intent questions for ChatGPT, Perplexity, and Google.",
    category: 'MARKETING',
    tag: 'SEO',
    readTime: '5 min read',
    date: 'Jun 2026',
    featured: false
  }
];

export default function Insights() {
  const [activeTab, setActiveTab] = useState('ALL');
  const featuredArticle = ARTICLES_DATA.find(a => a.featured) || ARTICLES_DATA[0];

  const gridArticles = ARTICLES_DATA.filter(a => !a.featured);

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar theme="light" />

      <section className="pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="container-custom">
          
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-4">
              INSIGHTS & THOUGHT LEADERSHIP
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-black mb-6 leading-[1.05]">
              Ideas, trends, and<br />
              strategies that move<br />
              brands forward<span className="text-[#FF007F]">.</span>
            </h1>
            <p className="text-neutral-600 text-lg md:text-xl max-w-2xl leading-relaxed">
              Sharing what we learn so you can build smarter, grow faster, and stay ahead.
            </p>
          </div>

          <GradientLine dotPosition="65%" className="my-12" />

          {/* Featured Article Card */}
          <div className="bg-[#070709] text-white rounded-3xl overflow-hidden mb-16 border border-neutral-800 shadow-2xl relative group">
            {/* Colorful wave glow in header background */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF007F]/30 via-[#9D4EDD]/20 to-transparent opacity-80 pointer-events-none"></div>

            <div className="p-8 md:p-14 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#FF007F] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                    FEATURED
                  </span>
                  <span className="text-xs text-neutral-400 font-semibold">{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight group-hover:text-[#FF007F] transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-neutral-300 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-white hover:text-[#FF007F] transition-colors uppercase bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full"
                >
                  READ FEATURED ARTICLE <ArrowRight size={14} />
                </Link>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full h-64 rounded-2xl bg-gradient-to-tr from-[#FFE66D]/20 via-[#FF007F]/40 to-[#00B4D8]/30 border border-white/20 flex items-center justify-center p-8 text-center backdrop-blur-md">
                  <div>
                    <BookOpen size={48} className="mx-auto text-[#FF007F] mb-4" />
                    <span className="text-xs font-bold tracking-widest uppercase text-white block">SEARCH EVOLUTION</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {gridArticles.map((article) => (
              <div 
                key={article.id}
                className="bg-neutral-900 text-white rounded-3xl p-8 border border-neutral-800 flex flex-col justify-between hover:border-[#FF007F] transition-all duration-300 group"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#FF007F] uppercase block mb-3">
                    {article.category}
                  </span>

                  <h3 className="text-xl font-extrabold text-white mb-4 leading-snug group-hover:text-[#FF007F] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500 font-semibold">{article.readTime}</span>
                  <Link to="/contact" className="text-xs font-bold text-white group-hover:text-[#FF007F] transition-colors flex items-center gap-1 uppercase">
                    READ MORE <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-primary light-btn">
              SEND ALL INSIGHTS &rarr;
            </button>
          </div>

        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
}
