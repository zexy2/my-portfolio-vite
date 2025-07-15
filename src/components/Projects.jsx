import React from "react";
import "./Projects.css";

function Projects({ projects }) {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-date">{project.date}</p>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website-link"
                >
                  🌐 Visit Website
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  📁 View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
