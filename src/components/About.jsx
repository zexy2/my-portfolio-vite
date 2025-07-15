import React from "react";
import "./About.css";

function About({
  name,
  title,
  description,
  university,
  experience,
  github,
  linkedin,
  mail,
  medium,
}) {
  return (
    <section className="about" id="about">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="education">
        <h3>Education</h3>
        <p>{university}</p>
        <p>Computer Engineering, GPA: 3.41</p>
        <p>Expected Graduation: 2026</p>
      </div>

      <div className="current-experience">
        <h3>Experience</h3>

        <div className="experience-item">
          <h4>Current Position</h4>
          <p>
            <strong>{experience}</strong>
          </p>
          <p>Started: July 7, 2025</p>
          <p>
            Developing modern web applications using React, JavaScript and
            working on responsive user interfaces.
          </p>
        </div>

        <div className="experience-item">
          <h4>Freelance Web Developer</h4>
          <p>
            <strong>Big Bag Çuval Fabrikası Website</strong>
          </p>
          <p>January 2025 - February 2025</p>
          <ul>
            <li>
              Designed and developed a complete website using PHP, CSS, and
              MySQL
            </li>
            <li>Enhanced user experience and client satisfaction</li>
            <li>
              Optimized website for mobile responsiveness and cross-browser
              compatibility
            </li>
            <li>
              Implemented SEO best practices to improve search engine ranking
            </li>
          </ul>
        </div>
      </div>

      <div className="skills">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>PHP</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Frontend Technologies</h4>
            <ul>
              <li>React</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tools & Others</h4>
            <ul>
              <li>Git & GitHub</li>
              <li>SQL</li>
              <li>Database Management</li>
              <li>Algorithms & Data Structures</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="social-links">
        <h3>Connect With Me</h3>
        <div className="links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
          <a
            href={`https://${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
          <a href={`mailto:${mail}`}>Email Me</a>
          <a href={medium} target="_blank" rel="noopener noreferrer">
            Medium Profile
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
