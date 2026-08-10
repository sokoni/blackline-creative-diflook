import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./CaseStudy.css";

const project = {
  category: "CASE STUDY",

  title: (
    <>
      Stronger Together
      <br />
      Fitness Challenge
    </>
  ),

  industry: "Health & Fitness",

  services: "Strategy, Web Design, Development, SEO",

  challenge:
    "Outdated site, unclear messaging, and low program sign-ups.",

  solution:
    "A bold new brand experience and conversion-focused website built to drive challenge sign-ups.",

  results: [
    "+48% organic traffic",
    "+32% sign-ups",
    "+28% time on site",
  ],

  desktopImage: "/images/stronger-together-desktop.png",
  mobileImage: "/images/stronger-together-mobile.png",
};

export default function CaseStudy() {
  return (
    <main className="case-study-page">

      {/* HEADER */}
      <Navbar variant="black" />


      {/* CASE STUDY */}
      <section className="case-content">

        {/* LEFT */}
        <div className="case-information">

          <span className="case-eyebrow">
            {project.category}
          </span>

          <h1>
            {project.title}
          </h1>


          <div className="case-detail">

            <h3>INDUSTRY</h3>

            <p>
              {project.industry}
            </p>

          </div>


          <div className="case-detail">

            <h3>SERVICES</h3>

            <p>
              {project.services}
            </p>

          </div>


          <div className="case-detail">

            <h3>THE CHALLENGE</h3>

            <p>
              {project.challenge}
            </p>

          </div>


          <div className="case-detail">

            <h3>THE SOLUTION</h3>

            <p>
              {project.solution}
            </p>

          </div>


          <div className="case-detail results">

            <h3>THE RESULTS</h3>

            {project.results.map((result) => (
              <p key={result}>
                {result}
              </p>
            ))}

          </div>

        </div>


        {/* RIGHT PROJECT SHOWCASE */}
        <div className="project-showcase">

          <div className="laptop">

            <div className="laptop-screen">

              <img
                src={project.desktopImage}
                alt="Stronger Together desktop website"
              />

            </div>

            <div className="laptop-base" />

          </div>


          <div className="phone">

            <div className="phone-notch" />

            <img
              src={project.mobileImage}
              alt="Stronger Together mobile website"
            />

          </div>

        </div>

      </section>


      {/* BACK */}
      <div className="case-back">

        <Link to="/work">
          <span>←</span>
          BACK TO ALL WORK
        </Link>

      </div>

    </main>
  );
}
