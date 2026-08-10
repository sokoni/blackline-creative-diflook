import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./CaseStudy.css";

const projectsData = {
  "stronger-together": {
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
    challenge: "Outdated site, unclear messaging, and low program sign-ups.",
    solution: "A bold new brand experience and conversion-focused website built to drive challenge sign-ups.",
    results: [
      "+48% organic traffic",
      "+32% sign-ups",
      "+28% time on site",
    ],
    image: "/images/Project PNG.png",
  },

  "project-2": {
    category: "CASE STUDY",
    title: "Project 2",
    industry: "Coming Soon",
    services: "Strategy, Branding, Web Design, Development",
    challenge: "Project details coming soon.",
    solution: "Project details coming soon.",
    results: ["Results coming soon."],
    image: "/images/project-two.png",
  },

  "project-3": {
    category: "CASE STUDY",
    title: "Project 3",
    industry: "Coming Soon",
    services: "Strategy, Branding, Web Design, Development",
    challenge: "Project details coming soon.",
    solution: "Project details coming soon.",
    results: ["Results coming soon."],
    image: "/images/project-three.png",
  },

  "project-four": {
    category: "CASE STUDY",
    title: "Project 4",
    industry: "Coming Soon",
    services: "Branding • Digital Experience",
    challenge: "Project details coming soon.",
    solution: "Project details coming soon.",
    results: ["Results coming soon."],
    image: "/images/Project PNG.png",
  },
};

export default function CaseStudy() {
  const { id } = useParams();
  const projectKey = id && projectsData[id] ? id : "stronger-together";
  const project = projectsData[projectKey];

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
          <img
            src={project.image}
            alt={`${project.title} project mockup`}
            className="project-mockup"
          />
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
