import React, { useEffect } from "react";
import '../assets/styles/Portfolio.css';
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function Portfolio() {
  useEffect(() => {
    console.log("Portfolio component mounted");
  }, []);

  return (
    <div className="Portfolio">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default Portfolio;
