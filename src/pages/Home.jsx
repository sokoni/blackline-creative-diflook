import React from 'react';
import Navbar from '../components/Navbar';
import "./Home.css";

export default function Home() {
  return (
    <main className="blackline-home">

      {/* HEADER */}
      <Navbar variant="white" />


      {/* HERO */}
      <section className="hero">

        <h1>
          Building brands
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
              Building brands
              <br />
              that get found.
            </p>

            <p className="pillar-description">
              Search. Growth. Visibility.
            </p>
          </div>


          <div className="center-logo">
            <img
              src="/images/Main Logo B (B_Rainbow).png"
              alt="BlackLine Creative B"
            />
          </div>


          <div className="pillar creativity">
            <h3>CREATIVITY</h3>

            <p className="pillar-title">
              Designing brands
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
