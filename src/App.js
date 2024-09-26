import React, { useEffect } from 'react';
import './assets/styles/App.css';
import StarsCanvas from './StarsCanvas';
import Portfolio from '../src/components/Portfolio';

function App() {
  useEffect(() => {
    const body = document.body;
    const hoverEffect = document.createElement('div');
    hoverEffect.className = 'hover-effect';
    body.appendChild(hoverEffect);

    const updateHoverPosition = (event) => {
      hoverEffect.style.left = `${event.clientX}px`;
      hoverEffect.style.top = `${event.clientY}px`;
    };

    body.addEventListener('mousemove', updateHoverPosition);

    return () => {
      body.removeEventListener('mousemove', updateHoverPosition);
      body.removeChild(hoverEffect);
    };
  }, []);
  return (
    <div className="App">
      <StarsCanvas />
      <Portfolio className="App-Portfolio"/>
    </div>
  );
}

export default App;
