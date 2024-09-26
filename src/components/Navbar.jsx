import React, { useEffect } from "react";
import '../assets/styles/Navbar.css';

function Navbar() {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    console.log(`Scrolling to ${id}`);
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    console.log("Navbar component mounted");
  }, []);

  return (
    <div className="Navbar">
      <header className="Navbar-header">
        <div className="Navbar-header-div">
          <img src="sb.png" alt="logo" />
          <p>SERGI BONET</p>
        </div>
        <nav className="Navbar-header-nav">
          <ul>
            <li><a href="#about" onClick={(e) => scrollToSection(e, "#about")}>SOBRE MI</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, "#projects")}>MIS PROYECTOS</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, "#skills")}>HABILIDADES</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>CONTACTO</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
