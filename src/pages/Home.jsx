import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

export default function Home() {
  return (
    <main className="blackline-home">

      {/* HEADER */}
      <header className="header">
        <Link to="/" className="header-logo">
          <img
            src="/images/blc-logo-long.png"
            alt="BlackLine Creative"
          />
        </Link>

        <nav className="nav">
          <div className="nav-dropdown">
            <Link to="/strategy" className="nav-dropdown-trigger">
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

          <Link to="/contact" className="talk-button">
            LET'S TALK
          </Link>
        </nav>
      </header>


      {/* HERO */}
      <section className="hero">

        <h1>
          Build brands
          <br />
          that get found
          <br />
          and remembered<span className="pink-dot">.</span>
        </h1>

        <div className="brand-line">
          <span className="line-marker" />
        </div>


        {/* STRATEGY / LOGO / CREATIVITY */}
        <div className="brand-pillars">

          <div className="pillar strategy">
            <h3>STRATEGY</h3>

            <p className="pillar-title">
              Build brands
              <br />
              that get found.
            </p>

            <p className="pillar-description">
              Search. Growth. Visibility.
            </p>
          </div>


          <div className="center-logo">
            <img
              src="/images/blc-logo-b.png"
              alt="BlackLine Creative B"
            />
          </div>


          <div className="pillar creativity">
            <h3>CREATIVITY</h3>

            <p className="pillar-title">
              Design brands
              <br />
              worth remembering.
            </p>

            <p className="pillar-description">
              Identity. Experience. Story.
            </p>
          </div>

        </div>
      </section>


      {/* BOTTOM BRAND BAND */}
      <section className="brand-band">

        <span>GET FOUND.</span>

        <strong>BLACKLINE</strong>

        <span>BE REMEMBERED.</span>

      </section>

    </main>
  );
}
