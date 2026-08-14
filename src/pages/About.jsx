import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* 1. NAVIGATION */}
      <Navbar variant="black" />

      <main>
        {/* 2. HERO SECTION */}
        <section className="about-hero">
          <div className="hero-copy">
            <p className="eyebrow">ABOUT US</p>

            <h1>
              Built by visionaries.<br />
              Driven by purpose<span className="pink">.</span>
            </h1>

            <div className="gradient-line">
              <span />
            </div>

            <div className="hero-description">
              <p>
                BlackLine Creative was founded by two partners who believe
                brands can do more than look good—they can lead, inspire,
                and leave a lasting impact.
              </p>

              <p>
                We combine strategy, creativity, and technology to help
                businesses stand out and grow with intention.
              </p>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="topography" />
            <div className="big-b">
              B
            </div>
          </div>
        </section>

        {/* 3. CO-FOUNDERS SECTION */}
        <section className="founders-section">
          <div className="section-heading">
            <p className="eyebrow">THE CO-FOUNDERS</p>

            <h2>
              The minds behind BlackLine Creative<span className="pink">.</span>
            </h2>
          </div>

          <div className="founders-grid">
            {/* SOKONI BABB */}
            <article className="founder-card">
              <div className="founder-image">
                <img
                  src="/images/sokoni-babb.jpg"
                  alt="Sokoni Babb, Co-Founder and Strategy Lead of BlackLine Creative"
                />
              </div>

              <div className="founder-content">
                <h3>SOKONI BABB</h3>

                <p className="founder-role">
                  CO-FOUNDER &amp; STRATEGY LEAD
                </p>

                <div className="small-gradient" />

                <p className="founder-bio">
                  A strategist at heart, Sokoni turns big ideas into clear
                  plans that drive real results. With a background in
                  technology, psychology, and business, he specializes in
                  brand strategy, positioning, and growth systems that
                  create long-term impact.
                </p>

                <div className="focus">
                  <div className="focus-icon" aria-hidden="true">
                    ◎
                  </div>

                  <div>
                    <h4>FOCUS AREAS</h4>
                    <p>
                      Brand Strategy, Market Research,<br />
                      Growth Planning, Business Development
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* AIDEN WILLIAMS */}
            <article className="founder-card">
              <div className="founder-image">
                <img
                  src="/images/aiden-williams.jpg"
                  alt="Aiden Williams, Co-Founder and Creative Lead of BlackLine Creative"
                />
              </div>

              <div className="founder-content">
                <h3>AIDEN WILLIAMS</h3>

                <p className="founder-role">
                  CO-FOUNDER &amp; CREATIVE LEAD
                </p>

                <div className="small-gradient" />

                <p className="founder-bio">
                  Aiden is the creative force that brings brands to life.
                  He leads with design thinking, storytelling, and a sharp
                  eye for detail—crafting visual identities and digital
                  experiences that connect and convert.
                </p>

                <div className="focus">
                  <div className="focus-icon" aria-hidden="true">
                    ◉
                  </div>

                  <div>
                    <h4>FOCUS AREAS</h4>
                    <p>
                      Brand Identity, Web Design, UI/UX,<br />
                      Creative Direction, Content Strategy
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 5. SHARED MISSION SECTION */}
        <section className="mission-section">
          <div className="mission-box">
            <div className="radar" aria-hidden="true">
              <div className="radar-ring ring-one" />
              <div className="radar-ring ring-two" />
              <div className="radar-ring ring-three" />
              <div className="radar-line" />
              <div className="radar-dot" />
            </div>

            <div className="mission-content">
              <p className="eyebrow">OUR VISION</p>

              <h2>
                Different backgrounds.<br />
                One mission<span className="pink">.</span>
              </h2>

              <p>
                We come from different paths, but we share the same belief:
                when strategy and creativity work together, brands don't
                just grow—they leave a mark.
              </p>

              <p>
                That's why we built BlackLine Creative—to help ambitious
                brands get found, remembered, and chosen.
              </p>

              <div className="mission-cta">
                <strong>
                  Let's build something worth remembering<span className="pink">.</span>
                </strong>

                <Link to="/contact" className="outline-button">
                  LET'S TALK &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          <span>BLACKLINE</span>
          <small>CREATIVE</small>
        </div>

        <p>
          &copy; {new Date().getFullYear()} BlackLine Creative LLC. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn">IN</a>
          <Link to="/contact" aria-label="Contact BlackLine Creative">EMAIL</Link>
        </div>
      </footer>
    </div>
  );
}
