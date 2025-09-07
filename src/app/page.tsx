'use client';
import { useEffect, useRef } from 'react';
import Navbar from './Navbar/page';
import Skills from './Skills/page';
import ProjectSection from './projects/page';
import AboutMe from './aboutme/page';
import ContactMe from './contactme/page';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

// Dynamic Cosmic Background
const DynamicCosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const backgroundStars: any[] = [];
    const foregroundStars: any[] = [];

    for (let i = 0; i < 80; i++) {
      backgroundStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
        blinkSpeed: Math.random() * 0.015 + 0.005,
        driftX: (Math.random() - 0.5) * 0.1,
        driftY: (Math.random() - 0.5) * 0.1
      });
    }

    for (let i = 0; i < 25; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      foregroundStars.push({
        x,
        y,
        radius: Math.random() * 2.5 + 1.5,
        opacity: Math.random() * 0.6 + 0.4,
        pulseSpeed: Math.random() * 0.03 + 0.02,
        originalX: x,
        originalY: y
      });
    }

    const animate = () => {
      time += 0.01;

      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(0.5, '#0a0a0a');
      gradient.addColorStop(1, '#000000');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      backgroundStars.forEach(star => {
        star.x += star.driftX;
        star.y += star.driftY;
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
        star.opacity = 0.3 + Math.sin(time * star.blinkSpeed * 50) * 0.2;
        ctx.fillStyle = '#fff';
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      foregroundStars.forEach(star => {
        star.x = star.originalX + Math.sin(time * 0.5) * 10;
        star.y = star.originalY + Math.cos(time * 0.3) * 8;
        star.opacity = 0.6 + Math.sin(time * star.pulseSpeed * 50) * 0.4;
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 4;
        ctx.fillStyle = '#fff';
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default function Home() {
  return (
    <>
      <DynamicCosmicBackground />
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="relative z-10 flex flex-col justify-center items-center h-screen text-center px-4 text-white pt-24"
      >
      <h1 className="text-5xl font-medium mb-4">
  Hello, I'm{' '}
  <span className="text-purple-400">
    <Typewriter
      words={["Samradhi Rathore"]}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={100}
      deleteSpeed={50}
    />
  </span>
</h1>


        <p className="max-w-2xl text-gray-300 mb-12">
          Bridging design and functionality, I build full-stack apps that are visually appealing and technically sound.
        </p>

        {/* Socials */}
        <div className="flex gap-12 mt-30">
          <a href="https://github.com/samradhi29" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-purple-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/samradhi-rathore-81017a308/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
          </a>
          <a href="https://instagram.com/samradhiii_29" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-pink-400 transition" />
          </a>
        </div>
      </section>

      {/* Other Sections */}
      <section id="skills"><Skills /></section>
      <section id="projects"><ProjectSection /></section>
      <section id="about"><AboutMe /></section>
      <section id="contact"><ContactMe /></section>
    </>
  );
}
