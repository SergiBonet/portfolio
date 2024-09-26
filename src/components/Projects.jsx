import React from "react";
import '../assets/styles/Projects.css';
import calculatorImage from '../assets/images/calculator.png';
import drumMachine from '../assets/images/drum-machine.png'
import pomodoro from '../assets/images/Pomodoro.png'
import randomQuoteMachine from '../assets/images/RandomQuoteMachine.png'
import markdownPreviewer from '../assets/images/markdown-previewer.png'

function Projects() {
  return (
    <div className="Projects" id="projects">
      <h2>Mis Proyectos</h2>
      <div className="Projects-grid">
        <a target="_blank" href="https://sergibonet.github.io/calculator/" className="link">
          <div>
            <img src={calculatorImage} alt="Calculator"></img>
            <span>Calculator</span>
          </div>
        </a>
        <a target="_blank" href="https://sergibonet.github.io/drum-machine/" className="link">
          <div>
            <img src={drumMachine} alt="Drum Machine"></img>
            <span>Drum Machine</span>
          </div>
        </a>
        <a target="_blank" href="https://sergibonet.github.io/Pomodoro/" className="link">
          <div>
            <img src={pomodoro} alt=""></img>
            <span>Pomodoro</span>
          </div>
        </a>
        <a target="_blank" href="https://sergibonet.github.io/random-quote-machine/" className="link">
          <div>
            <img src={randomQuoteMachine} alt=""></img>
            <span>Random Quote Machine</span>
          </div>
        </a>
        <a target="_blank" href="https://sergibonet.github.io/markdown-previewer/" className="link">
          <div>
            <img src={markdownPreviewer} alt=""></img>
            <span>Markdown Previewer</span>
          </div>
        </a>
        
      </div>
    </div>
  );
}

export default Projects;
