import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Work.css";

const projects = [
  {
    id: 1,
    title: "Stronger Together",
    category: "Strategy • Web Design • SEO",
    image: "/images/stronger-together.jpg",
    url: "/work/stronger-together",
  },
  {
    id: 2,
    title: "Dr. Jebastan Services",
    category: "Branding • Web Design",
    image: "/images/jebastan.jpg",
    url: "/work/jebastan",
  },
  {
    id: 3,
    title: "Project Three",
    category: "Brand Strategy • Development",
    image: "/images/project-three.jpg",
    url: "/work/project-three",
  },
  {
    id: 4,
    title: "Project Four",
    category: "Branding • Digital Experience",
    image: "/images/project-four.jpg",
    url: "/work/project-four",
  },
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main className="work-page">

      {/* HEADER */}
      <header className="work-header">

        <Link to="/" className="work-logo">
          <img
            src="/images/Main Logo Full (white).png"
            alt="BlackLine Creative"
          />
        </Link>

        <nav className="work-nav">
          <div className="work-nav-dropdown">
            <Link to="/strategy" className="work-nav-dropdown-trigger">
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
      <section className="work-hero">

        <div className="work-copy">

          <span className="work-eyebrow">
            OUR WORK
          </span>

          <h1>
            Strategy meets
            <br />
            creativity<span>.</span>
            <br />
            Results follow<span>.</span>
          </h1>

          <p>
            We partner with ambitious brands to
            build digital experiences that get
            found—and remembered.
          </p>

          <a href="#projects" className="case-button">
            VIEW CASE STUDIES
          </a>

        </div>


        {/* PROJECT COLLAGE */}
        <div className="project-collage">

          {projects.map((project) => (
            <Link
              to={project.url}
              className={`collage-project project-${project.id}`}
              key={project.id}
            >
              <img
                src={project.image}
                alt={project.title}
              />
            </Link>
          ))}

        </div>

      </section>


      {/* INTERACTIVE PROJECT LINE */}
      <section
        className="project-timeline"
        id="projects"
      >

        <div className="gradient-line" />

        <div className="project-dots">

          {projects.map((project) => (

            <div
              className="project-marker"
              key={project.id}
              onMouseEnter={() =>
                setActiveProject(project.id)
              }
              onMouseLeave={() =>
                setActiveProject(null)
              }
            >

              <button
                className={`project-dot ${
                  activeProject === project.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveProject(
                    activeProject === project.id
                      ? null
                      : project.id
                  )
                }
                aria-label={`View ${project.title}`}
              />


              {/* HOVER CARD */}
              <div
                className={`project-preview ${
                  activeProject === project.id
                    ? "visible"
                    : ""
                }`}
              >

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="preview-content">

                  <span>
                    PROJECT 0{project.id}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.category}
                  </p>

                  <Link to={project.url}>
                    VIEW CASE STUDY →
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* STATISTICS */}
      <section className="work-stats">

        <div>
          <strong>10+</strong>
          <span>Projects completed</span>
        </div>

        <div>
          <strong>6+</strong>
          <span>Industries served</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Custom built</span>
        </div>

        <div>
          <strong>Results</strong>
          <span>That matter</span>
        </div>

      </section>

    </main>
  );
}
