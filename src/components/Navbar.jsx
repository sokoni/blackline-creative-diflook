import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ variant }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Determine current active variant (white or black)
  let activeVariant = variant;
  if (!activeVariant) {
    const path = location.pathname;
    if (path === '/' || path === '/about' || path === '/services') {
      activeVariant = 'white';
    } else {
      activeVariant = 'black';
    }
  }

  const isWhite = activeVariant === 'white';
  const logoSrc = isWhite
    ? '/images/Main Logo Full (B_Rainbow).png'
    : '/images/Main Logo Full (white).png';

  return (
    <header className={`blc-navbar variant-${activeVariant}`}>
      <div className="blc-navbar-container">
        {/* Logo */}
        <Link to="/" className="blc-logo">
          <img src={logoSrc} alt="BlackLine Creative" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="blc-nav">
          {/* BLACKLINE THEORY Dropdown */}
          <div className="blc-nav-dropdown">
            <Link to="/strategy" className="blc-nav-link blc-dropdown-trigger">
              BLACKLINE THEORY
            </Link>
            <div className="blc-dropdown-menu">
              <Link to="/strategy">STRATEGY</Link>
            </div>
          </div>

          <Link to="/services" className="blc-nav-link">SERVICES</Link>
          <Link to="/work" className="blc-nav-link">WORK</Link>
          <Link to="/insights" className="blc-nav-link">INSIGHTS</Link>
          <Link to="/contact" className="blc-nav-link">CONTACT</Link>

          {/* LET'S TALK Button */}
          <Link to="/contact" className="blc-talk-button">
            LET'S TALK
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="blc-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="blc-mobile-drawer">
          <div className="blc-mobile-links">
            <Link to="/strategy" className="blc-mobile-link">BLACKLINE THEORY</Link>
            <Link to="/strategy" className="blc-mobile-link" style={{ paddingLeft: '20px', fontSize: '18px', opacity: 0.8 }}>└ STRATEGY</Link>
            <Link to="/services" className="blc-mobile-link">SERVICES</Link>
            <Link to="/work" className="blc-mobile-link">WORK</Link>
            <Link to="/insights" className="blc-mobile-link">INSIGHTS</Link>
            <Link to="/contact" className="blc-mobile-link">CONTACT</Link>
          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/contact" className="blc-talk-button" style={{ display: 'block', textAlign: 'center', width: '100%' }}>
              LET'S TALK
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
