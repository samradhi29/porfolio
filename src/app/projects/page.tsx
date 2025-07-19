import { details } from 'framer-motion/client';
import React from 'react';

const projects = [
  {
    name: 'Virtumeet',
    description: 'A video conferencing app like Google Meet with real-time chat',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB' , 'javascript' , 'websocket' , 'express' , 'MUI' , 'CSS'],
    github: 'https://github.com/samradhi29/zoomclone',
    live: 'https://virtuemeet.live',
  
  },
  {
    name: 'Socitopia',
    description: 'A society management system for residents and admins with flat registration and emergency alerts.',
    techStack: ['nextjs' ,  'typescript' , 'mongoDB' , ' Razorpay' , 'Node-Cron' , ' Shadcn/UI ' ],
    github: 'https://github.com/samradhi29/smartsociety',
    live: 'https://socitopia.live',
  },
  {
    name: 'Finance Tracker',
    description: 'Track your income, expenses, and savings with simple visual breakdowns.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js' ,'mongoDB' , 'Shadcn/UI' ],
    github: 'https://github.com/samradhi29/expensetracker',
    live: 'https://finance.samradhi.dev',
  },
];

export default function ProjectSection() {
  return (
    <section className="bg-[#0e0e10] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-stretch-90% mb-10 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gradient-to-br from-black to-zinc-900 p-6 rounded-2xl shadow-lg border border-gray-800 "
            >
              <h3 className="text-xl font-stretch-extra-expanded mb-2 text-purple-400">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 font-semibold mb-1">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-br from-black to-zinc-900 text-sm px-3 py-1 rounded-full text-white border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  GitHub →
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400 hover:text-green-300 transition"
                >
                  Live →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
