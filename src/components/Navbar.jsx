import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ theme = 'dark' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  }, [location]);

  const isLight = theme === 'light';

  const navLinks = [
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'WORK', path: '/work' },
    { name: 'INSIGHTS', path: '/insights' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isLight 
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200 py-4 shadow-sm' 
          : 'bg-[#070709]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/50' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container-custom flex items-center justify-between">
        {/* Left Logo */}
        <BrandLogo theme={theme} />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-12 lg:space-x-16">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-bold tracking-[0.15em] transition-colors relative py-1 ${
                  isLight
                    ? isActive ? 'text-black font-extrabold' : 'text-neutral-600 hover:text-black'
                    : isActive ? 'text-white font-extrabold' : 'text-neutral-400 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF007F] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
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
        <div className={`md:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 p-8 flex flex-col justify-between transition-all duration-300 ${
          isLight ? 'bg-white text-black' : 'bg-[#070709] text-white border-t border-white/10'
        }`}>
          <div className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-2xl font-black tracking-wider flex items-center justify-between border-b pb-4 ${
                    isLight ? 'border-neutral-200' : 'border-white/10'
                  } ${isActive ? 'text-[#FF007F]' : ''}`
                }
              >
                <span>{link.name}</span>
                <ArrowUpRight size={20} className="opacity-50" />
              </NavLink>
            ))}
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
