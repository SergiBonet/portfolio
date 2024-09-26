import React, {useEffect} from "react";
import '../assets/styles/About.css';
import foto from '../assets/images/foto-.png'

function About(){
  useEffect(() => {
    console.log("About component mounted");
  }, []);
  return(
    <div className="About" id="about">
      <h2>Sobre Mi</h2>
      <div className="About-photo">
        <img src={foto} alt="Sergi" loading="lazy"/>
      </div>
      <div className="About-description">
        <p>Hola, me llamo Sergi Bonet y soy mecánico industrial de profesión, pero siempre me ha interesado la programación. Ahora he aprendido desarrollo web.</p>
        <p>Hablo español como lengua materna, además de inglés y alemán (viví alrededor de 3 años en Alemania).</p>
        <p>Tengo conocimientos de HTML, CSS, Javascript, React.Js, Bootstrap, jQuery, Sass, Redux, Node.Js. Estoy dispuesto a aprender cosas nuevas que me permitan aumentar mi conocimiento y convertirme en un mejor profesional.</p>
      </div>
      
    </div>
  );
};

export default About;