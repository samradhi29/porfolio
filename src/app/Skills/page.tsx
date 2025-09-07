'use client';

import React, { useEffect, useRef } from 'react';

// Dynamic Cosmic Background Component
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
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const backgroundStars: Array<{
      x: number; y: number; radius: number; opacity: number; blinkSpeed: number; driftX: number; driftY: number;
    }> = [];

    const foregroundStars: Array<{
      x: number; y: number; radius: number; opacity: number; pulseSpeed: number; originalX: number; originalY: number;
    }> = [];

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
        x, y,
        radius: Math.random() * 2.5 + 1.5,
        opacity: Math.random() * 0.6 + 0.4,
        pulseSpeed: Math.random() * 0.03 + 0.02,
        originalX: x,
        originalY: y
      });
    }

    const animate = () => {
      if (!canvas || !ctx) return;
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
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      foregroundStars.forEach(star => {
        star.x = star.originalX + Math.sin(time * 0.5) * 10;
        star.y = star.originalY + Math.cos(time * 0.3) * 8;
        star.opacity = 0.6 + Math.sin(time * star.pulseSpeed * 50) * 0.4;
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 4;
        ctx.fillStyle = '#ffffff';
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
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default function Skills() {
  const frontend = [
    "HTML", "CSS", "JavaScript", "React", "Next.js",
    "Tailwind CSS", "Framer Motion", "TypeScript", "Material/UI", "Shadcn/UI", "Redux", "Lucide-React"
  ];

  const backend = [
    "Node.js", "Express", "REST API", "JWT/OAuth",
    "SQL", "MongoDB", "PostgreSQL"
  ];

  const tools = [
    "Python", "Java", "C/C++", "VS Code", "Git", "GitHub", "Linux",
    "Vercel", "Netlify", "Render", "UX/UI Design", "Figma", "Postman"
  ];

  return (
    <>
      <DynamicCosmicBackground />
      
      <div className="relative z-10 min-h-screen text-white flex flex-col items-center pt-24 px-4 overflow-hidden">
        <div className="relative mb-32 z-10">
          <div className="px-8 py-4 bg-gradient-to-r from-gray-900/90 to-black/90 border-2 border-purple-400/50 rounded-xl shadow-2xl shadow-purple-500/30 text-2xl font-bold backdrop-blur-sm hover:shadow-purple-500/50 transition-all duration-300">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              SKILLS
            </span>
          </div>

          <div className="absolute left-1/2 top-full transform -translate-x-1/2 h-20 w-1 bg-gradient-to-b from-purple-400 to-pink-400 shadow-lg shadow-purple-500/50"></div>
          <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 translate-y-20 w-[600px] h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>

          <div className="absolute top-[100%] left-[calc(50%-300px)] translate-y-20 w-1 h-16 bg-gradient-to-b from-purple-400 to-pink-400"></div>
          <div className="absolute top-[100%] left-1/2 translate-y-20 w-1 h-16 bg-gradient-to-b from-purple-400 to-pink-400"></div>
          <div className="absolute top-[100%] left-[calc(50%+297px)] translate-y-20 w-1 h-16 bg-gradient-to-b from-purple-400 to-pink-400"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 max-w-7xl w-full px-4 mt-4 z-10">
          {/* Frontend */}
          <div className="flex-1 group">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-purple-300 text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {frontend.map((skill, index) => (
                  <span key={index} className="px-5 py-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-purple-400/40 rounded-xl text-sm font-medium text-gray-200 hover:border-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="flex-1 group">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg border border-pink-400/30 rounded-2xl p-8 shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-pink-300 text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Backend
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {backend.map((skill, index) => (
                  <span key={index} className="px-5 py-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-pink-400/40 rounded-xl text-sm font-medium text-gray-200 hover:border-pink-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Others */}
          <div className="flex-1 group">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg border border-blue-400/30 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-blue-300 text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {tools.map((skill, index) => (
                  <span key={index} className="px-5 py-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-blue-400/40 rounded-xl text-sm font-medium text-gray-200 hover:border-blue-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
