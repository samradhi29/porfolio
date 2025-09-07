"use client"

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

    const backgroundStars: Array<any> = [];
    const foregroundStars: Array<any> = [];

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

      backgroundStars.forEach((star) => {
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

      foregroundStars.forEach((star) => {
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

      if (Math.random() < 0.003) {
        const shootingStar = {
          x: -50,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 4,
          opacity: 1
        };

        const drawShootingStar = () => {
          ctx.strokeStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(shootingStar.x - shootingStar.length, shootingStar.y + shootingStar.length * 0.3);
          ctx.stroke();
          
          shootingStar.x += shootingStar.speed;
          shootingStar.y += shootingStar.speed * 0.3;
          shootingStar.opacity -= 0.02;

          if (shootingStar.opacity > 0 && shootingStar.x < canvas.width + 100) {
            requestAnimationFrame(drawShootingStar);
          }
        };
        drawShootingStar();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

// Updated projects with images
const projects = [
  {
    name: 'Virtumeet',
    description: 'A video conferencing app like Google Meet with real-time chat',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JavaScript', 'WebSocket', 'Express', 'MUI', 'CSS'],
    github: 'https://github.com/samradhi29/zoomclone',
    live: 'https://httpmeet1234.netlify.app/',
    color: 'purple',
    image: '/video.png' // Add your project image path
  },
  {
    name: 'Socitopia',
    description: "A full-stack Society Management System with role-based access, visitor OTP login, Excel flat registration, complaints with anonymous mode, lost & found management, real-time meetings with chat, event RSVPs with gallery, and automated payments.",
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Razorpay', 'Node-Cron', 'Shadcn/UI'],
    github: 'https://github.com/samradhi29/smartsociety',
    live: 'https://github.com/samradhi29/smartsociety',
    color: 'blue',
    image: '/soceity.png'
  },
  {
    name: 'Finance Tracker',
    description: 'Track your income, expenses, and savings with simple visual breakdowns.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'MongoDB', 'Shadcn/UI'],
    github: 'https://github.com/samradhi29/expensetracker',
    live: 'https://expensetracker-29l2.vercel.app/',
    color: 'green',
    image: '/finnance.png'
  },
];

export default function ProjectSection() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          border: 'border-purple-400/30',
          shadow: 'hover:shadow-purple-500/30',
          titleGradient: 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent',
          techBorder: 'border-purple-400/40',
          techHover: 'hover:border-purple-400 hover:bg-purple-500/10'
        };
      case 'blue':
        return {
          border: 'border-blue-400/30',
          shadow: 'hover:shadow-blue-500/30',
          titleGradient: 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent',
          techBorder: 'border-blue-400/40',
          techHover: 'hover:border-blue-400 hover:bg-blue-500/10'
        };
      case 'green':
        return {
          border: 'border-green-400/30',
          shadow: 'hover:shadow-green-500/30',
          titleGradient: 'bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent',
          techBorder: 'border-green-400/40',
          techHover: 'hover:border-green-400 hover:bg-green-500/10'
        };
      default:
        return {
          border: 'border-purple-400/30',
          shadow: 'hover:shadow-purple-500/30',
          titleGradient: 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent',
          techBorder: 'border-purple-400/40',
          techHover: 'hover:border-purple-400 hover:bg-purple-500/10'
        };
    }
  };

  return (
    <>
      <DynamicCosmicBackground />

      <section className="relative z-10 text-white py-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Creating impactful solutions through modern technologies and intuitive design.
            </p>
            <div className="mt-8 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 rounded-full max-w-md mx-auto"></div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color);
              return (
                <div
                  key={project.name}
                  className={`bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg border ${colors.border} rounded-2xl p-0 shadow-2xl ${colors.shadow} transition-all duration-500 hover:-translate-y-3 group overflow-hidden`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Project Image */}
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-3 ${colors.titleGradient} group-hover:scale-105 transition-transform duration-300`}>
                      {project.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base mb-4">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <p className="text-sm text-gray-400 font-semibold mb-3 uppercase tracking-wide">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`bg-gradient-to-r from-gray-800/80 to-gray-900/80 border ${colors.techBorder} text-sm px-3 py-2 rounded-lg text-gray-200 ${colors.techHover} transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm`}
                            style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">GitHub</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="font-medium">Live Demo</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
