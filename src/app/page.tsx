'use client';

import Navbar from '@/app/Navbar/page';
import Skills from '@/app/Skills/page'
import ContactMe from './contactme/page';
import AboutMe from './aboutme/page';
import { FaGithub , FaInstagram , FaLinkedin } from 'react-icons/fa';
import ProjectTabs from './projects/page';
export default function Home() {
  return (
    <>
      <div className="m-1 p-1 border-2 border-gray-300 rounded-3xl bg-black text-white min-h-screen">
        {/* Navbar */}
        <Navbar />
        {/* <ProjectTabs/>
        <ContactMe/>
<AboutMe/> */}
        {/* Intro Section */}
        <div className="flex flex-col justify-center items-center h-screen text-center px-4 ">
          <h1 className="text-purple-300 text-5xl font-mono whitespace-nowrap overflow-hidden border-r-4 border-white animate-typewriter">
            <span className="text-white">Hello </span>I'm Samradhi Rathore
          </h1>

          <p className="mt-8 max-w-2xl text-gray-300 text-lg leading-relaxed tracking-wide px-4 md:px-0">
            Bridging the gap between design and functionality, I build full-stack apps that are both visually appealing and technically sound.
          </p>
        </div>
 <div className="flex flex-col items-center mb-10">
      {/* Horizontal Line (Rope) */}
      <div className="w-full max-w-md h-0.5 bg-fuchsia-200 relative">
        {/* Vertical lines like ropes */}
        <div className="absolute left-1/4 w-0.5 h-6 bg-white top-0"></div>
        <div className="absolute left-1/2 w-0.5 h-6 bg-white top-0"></div>
        <div className="absolute left-3/4 w-0.5 h-6 bg-white top-0"></div>
      </div>

      {/* Icons below the rope */}
      <ul className="flex gap-16 mt-4 text-3xl text-white">
        <li>
          <a href="https://github.com/samradhi29" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-purple-400 transition duration-200" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/samradhi-rathore-81017a308/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition duration-200" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/samradhiii_29" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-400 transition duration-200" />
          </a>
        </li>
      </ul>
    </div>
        {/* About Me Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto py-16 px-6">
          {/* Image */}
          <img
            className="w-86 h-86  rounded-3xl object-cover shadow-lg"
            src="/mypic2.jpg"
            alt="My Picture"
          />

          {/* About Me Text */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-gray-800 rounded-3xl p-8 shadow-lg max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-semibold text-fuchsia-200 mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a B.Tech student at IIIT Kottayam and a passionate MERN stack developer currently building with Next.js. I enjoy turning ideas into functional, user-friendly web applications. I’m hardworking, a strong team player, and always open to new challenges. With a continuous learning mindset, I'm excited to explore emerging technologies  especially the fields of Artificial Intelligence and Machine Learning  in the near future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
