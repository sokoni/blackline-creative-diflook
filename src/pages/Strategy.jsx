import React from 'react';
import { Link } from 'react-router-dom';
import "./Strategy.css";

const strategyItems = [
  {
    title: "SEARCH",
    text: "SEO, AEO, GEO",
  },
  {
    title: "GROWTH",
    text: "Traffic that converts",
  },
  {
    title: "STRATEGY",
    text: "Positioning that drives results",
  },
  {
    title: "TECHNOLOGY",
    text: "Web, Analytics, Automation",
  },
];

const principles = [
  {
    number: "01",
    text: <>Strategy first.<br />Always.</>,
  },
  {
    number: "02",
    text: <>Built for<br />discoverability.</>,
  },
  {
    number: "03",
    text: <>Data informed.<br />Human focused.</>,
  },
  {
    number: "04",
    text: <>Results that<br />move the needle.</>,
  },
];

export default function Strategy() {
  return (
    <main className="strategy-page">

      {/* HEADER */}
      <header className="strategy-header">

        <Link to="/" className="strategy-logo">
          <img
            src="/images/blc-logo-white.png"
            alt="BlackLine Creative"
          />
        </Link>

        <nav className="strategy-nav">
          <div className="strategy-nav-dropdown">
            <Link to="/strategy" className="strategy-nav-dropdown-trigger">
              BLACKLINE THEORY
            </Link>
            <div className="dropdown-menu">
              <Link to="/strategy">STRATEGY</Link>
            </div>
          </div>
          <Link to="/services">SERVICES</Link>
          <Link to="/work">WORK</Link>
          <Link to="/insights">INSIGHTS</Link>
          <Link to="/contact">CONTACT</Link>

          <Link to="/contact" className="strategy-talk">
            LET'S TALK
          </Link>
        </nav>

      </header>


      {/* MAIN CONTENT */}
      <section className="strategy-hero">

        {/* LEFT CONTENT */}
        <div className="strategy-copy">

          <span className="eyebrow">
            STRATEGY
          </span>

          <h1>
            Build brands
            <br />
            that get found<span>.</span>
          </h1>

          <div className="strategy-line-container">
            <img 
              src="/images/gradient-line.png" 
              alt="BlackLine Gradient Line" 
              className="strategy-line-img" 
            />
          </div>

          <p>
            We combine data, search insight, and strategic
            thinking to put your brand in front of the right
            people at the right time.
          </p>

        </div>


        {/* RADAR */}
        <div className="radar-area">

          <div className="radar">

            <div className="radar-circle radar-outer" />
            <div className="radar-circle radar-middle" />
            <div className="radar-circle radar-inner" />

            <div className="radar-center">
              <div className="radar-glow" />
              <div className="radar-dot" />
            </div>

            <div className="radar-gradient">
              <span />
            </div>

          </div>


          {/* RIGHT LABELS */}
          <div className="radar-labels">

            {strategyItems.map((item) => (
              <div
                className="radar-label"
                key={item.title}
              >
                <div className="connector">
                  <span />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* PRINCIPLES */}
      <section className="strategy-principles">

        {principles.map((item) => (
          <div
            className="principle"
            key={item.number}
          >
            <strong>{item.number}</strong>
            <p>{item.text}</p>
          </div>
        ))}

      </section>

    </main>
  );
}
