import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Services.css';

export default function Services() {
  return (
    <main className="services-page">
      {/* NAVBAR */}
      <Navbar variant="black" />

      {/* HERO */}
      <section className="services-hero">
        {/* LEFT SIDE */}
        <div className="hero-copy">
          <span className="eyebrow">OUR SERVICES</span>

          <h1>
            Everything your
            <br />
            brand needs to get
            <br />
            found and remembered<span>.</span>
          </h1>

          <p>
            From strategy to design to development
            <br />
            and beyond—we build brands that grow.
          </p>
        </div>

        {/* RIGHT SIDE / B LOGO */}
        <div className="hero-mark">
          <img
            src="/images/Main Logo B (W_Rainbow).png"
            alt="BlackLine Creative B Logo"
          />
        </div>
      </section>

      {/* BLACKLINE GRADIENT */}
      <div className="gradient-area">
        <div className="gradient-line"></div>
        <div className="gradient-dot"></div>
      </div>

      {/* SERVICES */}
      <section className="services-grid">
        {/* STRATEGY */}
        <article className="service">
          <div className="service-icon strategy-icon">
            <span>✦</span>
          </div>

          <h2>STRATEGY</h2>

          <ul>
            <li>Brand Strategy</li>
            <li>Positioning</li>
            <li>Market Research</li>
            <li>SEO, AEO, GEO</li>
          </ul>
        </article>

        {/* BRANDING */}
        <article className="service">
          <div className="service-icon branding-icon">
            <span>◇</span>
          </div>

          <h2>BRANDING</h2>

          <ul>
            <li>Identity Design</li>
            <li>Logo Design</li>
            <li>Brand Systems</li>
            <li>Guidelines</li>
          </ul>
        </article>

        {/* WEB DESIGN */}
        <article className="service">
          <div className="service-icon web-icon">
            <span></span>
          </div>

          <h2>WEB DESIGN</h2>

          <ul>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>Prototyping</li>
            <li>Conversion Focused</li>
          </ul>
        </article>

        {/* DEVELOPMENT */}
        <article className="service">
          <div className="service-icon development-icon">
            <span>&lt;/&gt;</span>
          </div>

          <h2>DEVELOPMENT</h2>

          <ul>
            <li>Custom Websites</li>
            <li>CMS Development</li>
            <li>E-commerce</li>
            <li>Web Applications</li>
          </ul>
        </article>

        {/* MARKETING */}
        <article className="service">
          <div className="service-icon marketing-icon">
            <span>✧</span>
          </div>

          <h2>MARKETING</h2>

          <ul>
            <li>Content Strategy</li>
            <li>SEO</li>
            <li>Analytics</li>
            <li>Growth</li>
          </ul>
        </article>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <Link to="/contact">
          LET'S BUILD SOMETHING GREAT
          <span>→</span>
        </Link>
      </section>
    </main>
  );
}
