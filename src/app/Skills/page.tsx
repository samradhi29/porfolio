'use client';
import React from 'react';

export default function Skills() {
  const frontend = [
    "HTML", "CSS", "JavaScript", "React", "Next.js",
    "Tailwind CSS", "Framer Motion", "DOM", "SSR" , "typescript"
  ];

  const backend = [
    "Node", "Express", "REST API", "JWT/OAuth",
    "SQL",  "MongoDB",
  ];

  const tools = [
    "TypeScript", "Python", "Go", "Git", "GitHub", "Linux",
   "VPS", "Vercel", "UX/UI Design", "Figma", 
  ];

  return (
    <>
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-16 px-4 relative">

      {/* MY SKILLS Node */}
      <div className="relative mb-32">
        <div className="px-6 py-3 bg-black border border-purple-200 rounded-md shadow-md shadow-fuchsia-300 text-xl font-bold z-10">
          MY SKILLS
        </div>

        {/* Downward Lines to Sections */}
        <div className="absolute left-1/2 top-full transform -translate-x-1/2 h-20 w-0.5  bg-purple-200"></div>

        {/* Horizontal Line branching to 3 */}
        <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 translate-y-20 w-[520px] h-0.5 bg-purple-200"></div>

        {/* Vertical Lines to 3 Sections */}
        <div className="absolute top-[100%] left-[calc(50%-260px)] translate-y-20 w-0.5 h-12 bg-purple-200"></div>
        <div className="absolute top-[100%] left-1/2 translate-y-20 w-0.5 h-12 bg-purple-200"></div>
        <div className="absolute top-[100%] left-[calc(50%+257px)] translate-y-20 w-0.5 h-12 bg-purple-200"></div>
      </div>

      {/* 3 Columns Below */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-7xl w-full px-4 mt-4">
        {/* Frontend */}
        <div className="flex-1 mt-12 md:mt-0">
       <h3 className="text-purple-300  shadow-md shadow-fuchsia-300 text-3xl font-medium mb-4 text-center">Frontend</h3> 
          <div className="flex flex-wrap gap-3 justify-center">
            {frontend.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-black border border-fuchsia-300 rounded-md text-sm hover:border-purple-500 transition hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="flex-1 mt-12 md:mt-0">
          <h3 className="text-purple-300  shadow-md shadow-fuchsia-300 text-3xl font-medium mb-4 text-center">Backend</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {backend.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-black border border-fuchsia-300 rounded-md text-sm hover:border-purple-500 transition hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Others */}
        <div className="flex-1 mt-12 md:mt-0">
          <h3 className="text-purple-300  shadow-md shadow-fuchsia-300 text-3xl font-medium mb-4 text-center">Tools & Others</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-black border border-fuchsia-300 rounded-md text-sm hover:border-purple-500 transition hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

   
    </div>
    <div className=" w-full max-w-5xl mx-auto text-center bg-black">
  <h2 className="text-3xl font-stretch-200% text-fuchsia-300 mb-6 ">Other Skills</h2>

  <div className="flex flex-wrap justify-center gap-4 bg-black">
    {["English", "Hindi", "Basketball", "Sketching", "Teamwork"].map((skill, index) => (
      <div
        key={index}
        className="bg-gradient-to-br from-fuchsia-300 to-pink-300 text-black px-6 py-3 rounded-2xl text-lg font-medium shadow-md hover:scale-105 transition"
      >
        {skill}
      </div>
    ))}
  </div>
</div>

      </>
  );

}

