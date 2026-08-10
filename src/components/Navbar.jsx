import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

        {/* Desktop Navigation Links Placeholder - Ready for new pages */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* New nav links will be added here */}
        </nav>

        {/* Right CTA Button */}
        <div>
          <Link
            to="/contact"
            className="btn-primary !bg-black !text-white !border-black hover:!bg-neutral-900 shadow-md"
          >
            LET'S TALK
          </Link>
        </div>
      </div>
    </header>
  );
}
