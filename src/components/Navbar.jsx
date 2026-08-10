import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function Navbar({ theme = 'light' }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="container-custom flex items-center justify-between">
        <BrandLogo theme={theme} />
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* New nav links will be added here */}
        </nav>

        {/* CTA Button */}
        <Link
          to="/"
          className="btn-primary !bg-black !text-white !border-black hover:!bg-neutral-900 shadow-md"
        >
          LET'S TALK
        </Link>
      </div>
    </header>
  );
}
