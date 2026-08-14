import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './About.css';

export default function About() {
  return (
    <main className="about-page">
      {/* NAVIGATION */}
      <Navbar variant="black" />

      {/* HERO SECTION */}
      <section className="about-hero">
        {/* LEFT CONTENT */}
        <div className="about-copy">
          <span className="eyebrow">ABOUT US</span>

          <h1>
            Built by visionaries.
            <br />
            Driven by purpose<span>.</span>
          </h1>

          <div className="about-gradient-line">
            <span />
          </div>

          <p className="hero-intro">
            BlackLine Creative was founded by two partners who believe brands can
            do more than look good—they can lead, inspire, and leave a lasting impact.
          </p>

          <p className="hero-subtext">
            We combine strategy, creativity, and technology to help businesses stand
            out and grow with intention.
          </p>
        </div>

        {/* RIGHT VISUAL ARTWORK */}
        <div className="about-art">
          <div className="topography-bg" aria-hidden="true" />
          <div className="brand-b-mark">
            <img
              src="/images/Main Logo B (W_Rainbow).png"
              alt="BlackLine Creative Brand Mark"
              className="b-logo-img"
            />
          </div>
        </div>
      </section>

      {/* CO-FOUNDERS SECTION */}
      <section className="founders-section">
        <div className="founders-heading">
          <span className="eyebrow-accent">THE CO-FOUNDERS</span>
          <h2>
            The minds behind BlackLine Creative<span>.</span>
          </h2>
        </div>

        <div className="founders-grid">
          {/* SOKONI BABB */}
          <article className="founder-card">
            <div className="founder-image-wrapper">
              <img
                src="/images/sokoni-babb.jpg"
                alt="Sokoni Babb, Co-Founder and Strategy Lead of BlackLine Creative"
                className="founder-photo"
              />
            </div>

            <div className="founder-info">
              <h3>SOKONI BABB</h3>
              <p className="founder-title">CO-FOUNDER &amp; STRATEGY LEAD</p>

              <div className="card-gradient-bar" />

              <p className="founder-bio">
                A strategist at heart, Sokoni turns big ideas into clear plans that
                drive real results. With a background in technology, psychology, and
                business, he specializes in brand strategy, positioning, and growth
                systems that create long-term impact.
              </p>

              <div className="focus-block">
                <div className="focus-icon-node" aria-hidden="true">
                  ◎
                </div>
                <div className="focus-details">
                  <h4>FOCUS AREAS</h4>
                  <p>
                    Brand Strategy, Market Research, Growth Planning, Business Development
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* AIDEN WILLIAMS */}
          <article className="founder-card">
            <div className="founder-image-wrapper">
              <img
                src="/images/aiden-williams.jpg"
                alt="Aiden Williams, Co-Founder and Creative Lead of BlackLine Creative"
                className="founder-photo"
              />
            </div>

            <div className="founder-info">
              <h3>AIDEN WILLIAMS</h3>
              <p className="founder-title">CO-FOUNDER &amp; CREATIVE LEAD</p>

              <div className="card-gradient-bar" />

              <p className="founder-bio">
                Aiden is the creative force that brings brands to life. He leads
                with design thinking, storytelling, and a sharp eye for detail—crafting
                visual identities and digital experiences that connect and convert.
              </p>

              <div className="focus-block">
                <div className="focus-icon-node" aria-hidden="true">
                  ◉
                </div>
                <div className="focus-details">
                  <h4>FOCUS AREAS</h4>
                  <p>
                    Brand Identity, Web Design, UI/UX, Creative Direction, Content Strategy
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SHARED MISSION / VISION SECTION */}
      <section className="about-mission-section">
        <div className="mission-panel">
          {/* RADAR VISUAL */}
          <div className="mission-radar-wrapper" aria-hidden="true">
            <div className="about-radar">
              <div className="radar-circle outer-ring" />
              <div className="radar-circle middle-ring" />
              <div className="radar-circle inner-ring" />
              <div className="radar-center-glow">
                <div className="radar-core-dot" />
              </div>
              <div className="radar-beam-line" />
            </div>
          </div>

          {/* MISSION COPY */}
          <div className="mission-copy">
            <span className="eyebrow">OUR VISION</span>
            <h2>
              Different backgrounds.
              <br />
              One mission<span>.</span>
            </h2>

            <p>
              We come from different paths, but we share the same belief: when strategy
              and creativity work together, brands don't just grow—they leave a mark.
            </p>

            <p>
              That's why we built BlackLine Creative—to help ambitious brands get found,
              remembered, and chosen.
            </p>

            <div className="mission-cta-row">
              <strong className="cta-statement">
                Let's build something worth remembering<span>.</span>
              </strong>

              <Link to="/contact" className="about-talk-button">
                LET'S TALK &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
