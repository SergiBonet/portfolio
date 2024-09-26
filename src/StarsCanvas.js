// StarsCanvas.js
import React, { useRef, useEffect } from 'react';

const STAR_COLOR = '#fff';
const STAR_SIZE = 8;
const STAR_MIN_SCALE = 1;
const STAR_COUNT = (window.innerWidth + window.innerHeight) / 1;

function StarsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let width, height;
    let stars = [];
    let velocity = { x: 0, y: 0, z: 0.0005 };

    function generateStars() {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
        });
      }
    }

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars.forEach(star => {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      });
    }

    function updateStars() {
      stars.forEach(star => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;
        if (star.x < 0 || star.x > width || star.y < 0 || star.y > height) {
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        }
      });
    }

    function renderStars() {
      context.clearRect(0, 0, width, height);
      stars.forEach(star => {
        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = STAR_SIZE * star.z;
        context.globalAlpha = 0.5 + 0.5 * Math.random();
        context.strokeStyle = STAR_COLOR;
        context.moveTo(star.x, star.y);
        context.lineTo(star.x + velocity.x, star.y + velocity.y);
        context.stroke();
      });
    }

    function animate() {
      updateStars();
      renderStars();
      requestAnimationFrame(animate);
    }

    generateStars();
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
}

export default StarsCanvas;