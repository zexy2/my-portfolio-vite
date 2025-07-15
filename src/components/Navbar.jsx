import React from "react";
import "./Navbar.css";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Zeki Akgül</h1>
      </div>

      <div className="navbar-links">
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
