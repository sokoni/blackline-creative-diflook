import React from 'react';
import Navbar from '../components/Navbar';
import "./Creativity.css";

export default function Creativity() {
  return (
    <main className="creativity-page">

      {/* NAVIGATION */}
      <Navbar variant="black" />


      {/* HERO */}
      <section className="creativity-hero">

        <div className="creativity-content">

          <span className="creativity-eyebrow">
            CREATIVITY
          </span>

          <h1>
            Design brands
            <br />
            worth
            <br />
            remembering<span>.</span>
          </h1>

          <p>
            We create bold identities, intuitive experiences,
            and stories that connect—visually, emotionally,
            and strategically.
          </p>

        </div>


        {/* ABSTRACT COLOR VISUAL */}
        <div className="creative-art">
          <img
            src="/images/AdobeStock_602793829.png"
            alt="BlackLine Creative Abstract Art"
            className="creative-artwork-img"
          />
        </div>

      </section>


      {/* GRADIENT DIVIDER */}
      <div className="creativity-gradient" />


      {/* CREATIVE PILLARS */}
      <section className="creative-pillars">

        <div className="creative-pillar">

          <div className="identity-icon">
            <span />
            <span />
            <span />
          </div>

          <h2>IDENTITY</h2>

          <p>
            Distinct visual systems
            <br />
            that set you apart.
          </p>

        </div>


        <div className="creative-pillar">

          <div className="experience-icon">
            <span />
            <span />
          </div>

          <h2>EXPERIENCE</h2>

          <p>
            Digital experiences that
            <br />
            feel effortless.
          </p>

        </div>


        <div className="creative-pillar">

          <div className="story-icon">
            <span />
            <span />
          </div>

          <h2>STORY</h2>

          <p>
            Words and visuals that
            <br />
            make an impact.
          </p>

        </div>

      </section>

    </main>
  );
}
