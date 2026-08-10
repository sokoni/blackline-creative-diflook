import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ theme = 'dark' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theoryOpen, setTheoryOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setTheoryOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTheoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isLight = theme === 'light';

  const isTheoryActive = location.pathname === '/strategy' || location.pathname === '/creativity';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isLight 
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 py-4 shadow-sm' 
          : 'bg-[#070709]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/50' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container-custom flex items-center justify-between">
        {/* Left Logo */}
        <BrandLogo theme={theme} />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-xs font-bold tracking-[0.25em] transition-colors relative py-1 ${
                isLight
                  ? isActive ? 'text-black font-extrabold' : 'text-neutral-600 hover:text-black'
                  : isActive ? 'text-white font-extrabold' : 'text-neutral-400 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                ABOUT
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF007F] rounded-full" />
                )}
              </>
            )}
          </NavLink>

          {/* BLACKLINE THEORY Dropdown */}
          <div 
            className="relative" 
            ref={dropdownRef}
            onMouseEnter={() => setTheoryOpen(true)}
            onMouseLeave={() => setTheoryOpen(false)}
          >
            <button
              onClick={() => setTheoryOpen(!theoryOpen)}
              className={`text-xs font-bold tracking-[0.25em] transition-colors inline-flex items-center gap-1.5 py-1 ${
                isLight
                  ? isTheoryActive ? 'text-black font-extrabold' : 'text-neutral-600 hover:text-black'
                  : isTheoryActive ? 'text-white font-extrabold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              BLACKLINE THEORY
              <ChevronDown size={14} className={`transition-transform duration-200 ${theoryOpen ? 'rotate-180 text-[#FF007F]' : ''}`} />
              {isTheoryActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF007F] rounded-full" />
              )}
            </button>

            {/* Dropdown Menu */}
            {theoryOpen && (
              <div className={`absolute top-full left-0 mt-3 w-64 p-3 rounded-2xl shadow-xl border backdrop-blur-xl transition-all duration-200 z-50 ${
                isLight 
                  ? 'bg-white/95 border-neutral-200 text-black shadow-black/10' 
                  : 'bg-[#0E0E12]/95 border-white/10 text-white shadow-black/80'
              }`}>
                <div className="text-[0.65rem] font-black tracking-[0.2em] text-[#FF007F] uppercase px-3 pt-2 pb-1.5 border-b border-neutral-200 dark:border-white/10 mb-2">
                  THEORY MODULES
                </div>
                
                <Link
                  to="/strategy"
                  className={`group flex flex-col p-3 rounded-xl transition-all ${
                    isLight 
                      ? 'hover:bg-neutral-100' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-xs tracking-widest group-hover:text-[#FF007F] transition-colors">
                    <span>STRATEGY</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[0.7rem] text-neutral-500 mt-0.5 font-medium">
                    Build brands that get found.
                  </span>
                </Link>

                <Link
                  to="/creativity"
                  className={`group flex flex-col p-3 rounded-xl transition-all mt-1 ${
                    isLight 
                      ? 'hover:bg-neutral-100' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-xs tracking-widest group-hover:text-[#FF007F] transition-colors">
                    <span>CREATIVITY</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[0.7rem] text-neutral-500 mt-0.5 font-medium">
                    Design brands worth remembering.
                  </span>
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-xs font-bold tracking-[0.25em] transition-colors relative py-1 ${
                isLight
                  ? isActive ? 'text-black font-extrabold' : 'text-neutral-600 hover:text-black'
                  : isActive ? 'text-white font-extrabold' : 'text-neutral-400 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                SERVICES
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF007F] rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              `text-xs font-bold tracking-[0.25em] transition-colors relative py-1 ${
                isLight
                  ? isActive ? 'text-black font-extrabold' : 'text-neutral-600 hover:text-black'
                  : isActive ? 'text-white font-extrabold' : 'text-neutral-400 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                WORK
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF007F] rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `text-xs font-bold tracking-[0.25em] transition-colors relative py-1 ${
                isLight
                  ? isActive ? 'text-black font-extrabold' : 'text-neutral-600 hover:text-black'
                  : isActive ? 'text-white font-extrabold' : 'text-neutral-400 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                INSIGHTS
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF007F] rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-xs font-bold tracking-[0.25em] transition-colors relative py-1 ${
                isLight
                  ? isActive ? 'text-black font-extrabold' : 'text-neutral-600 hover:text-black'
                  : isActive ? 'text-white font-extrabold' : 'text-neutral-400 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                CONTACT
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF007F] rounded-full" />
                )}
              </>
            )}
          </NavLink>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className={`btn-primary !bg-black !text-white !border-black hover:!bg-neutral-900 hover:!border-neutral-900 hover:!text-white shadow-md`}
          >
            LET'S TALK
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isLight ? 'text-black hover:bg-neutral-100' : 'text-white hover:bg-white/10'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={`md:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 p-8 flex flex-col justify-between overflow-y-auto transition-all duration-300 ${
          isLight ? 'bg-white text-black' : 'bg-[#070709] text-white border-t border-white/10'
        }`}>
          <div className="flex flex-col space-y-6 pt-4">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl font-extrabold tracking-wider flex items-center justify-between border-b pb-4 ${
                  isLight ? 'border-neutral-200' : 'border-white/10'
                } ${isActive ? 'text-[#FF007F]' : ''}`
              }
            >
              <span>ABOUT</span>
              <ArrowUpRight size={20} className="opacity-50" />
            </NavLink>

            {/* Mobile BLACKLINE THEORY Accordion */}
            <div className={`border-b pb-4 ${isLight ? 'border-neutral-200' : 'border-white/10'}`}>
              <div className="text-xs font-black tracking-[0.25em] text-[#FF007F] uppercase mb-3">
                BLACKLINE THEORY
              </div>
              <div className="pl-4 space-y-3">
                <Link
                  to="/strategy"
                  className="flex items-center justify-between text-lg font-bold hover:text-[#FF007F] transition-colors"
                >
                  <span>STRATEGY</span>
                  <ArrowUpRight size={18} className="opacity-50" />
                </Link>
                <Link
                  to="/creativity"
                  className="flex items-center justify-between text-lg font-bold hover:text-[#FF007F] transition-colors"
                >
                  <span>CREATIVITY</span>
                  <ArrowUpRight size={18} className="opacity-50" />
                </Link>
              </div>
            </div>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-xl font-extrabold tracking-wider flex items-center justify-between border-b pb-4 ${
                  isLight ? 'border-neutral-200' : 'border-white/10'
                } ${isActive ? 'text-[#FF007F]' : ''}`
              }
            >
              <span>SERVICES</span>
              <ArrowUpRight size={20} className="opacity-50" />
            </NavLink>

            <NavLink
              to="/work"
              className={({ isActive }) =>
                `text-xl font-extrabold tracking-wider flex items-center justify-between border-b pb-4 ${
                  isLight ? 'border-neutral-200' : 'border-white/10'
                } ${isActive ? 'text-[#FF007F]' : ''}`
              }
            >
              <span>WORK</span>
              <ArrowUpRight size={20} className="opacity-50" />
            </NavLink>

            <NavLink
              to="/insights"
              className={({ isActive }) =>
                `text-xl font-extrabold tracking-wider flex items-center justify-between border-b pb-4 ${
                  isLight ? 'border-neutral-200' : 'border-white/10'
                } ${isActive ? 'text-[#FF007F]' : ''}`
              }
            >
              <span>INSIGHTS</span>
              <ArrowUpRight size={20} className="opacity-50" />
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xl font-extrabold tracking-wider flex items-center justify-between border-b pb-4 ${
                  isLight ? 'border-neutral-200' : 'border-white/10'
                } ${isActive ? 'text-[#FF007F]' : ''}`
              }
            >
              <span>CONTACT</span>
              <ArrowUpRight size={20} className="opacity-50" />
            </NavLink>
          </div>

          <div className="pt-8">
            <Link
              to="/contact"
              className="btn-primary !bg-black !text-white !border-black hover:!bg-neutral-900 w-full text-center py-3 shadow-md"
            >
              LET'S TALK
            </Link>
            <div className="mt-8 text-center text-xs text-neutral-500 tracking-widest uppercase">
              BlackLine Creative — Strategy Meets Creativity
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
