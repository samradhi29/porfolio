"use client";
import React from "react";
import { GraduationCap, Brain, Rocket } from "lucide-react";

const aboutData = [
  {
    id: "education",
    icon: "education",
    title: "Education",
    content: "B.Tech in AI & Data Science, IIIT Kottayam (2023–2027).",
  },
  {
    id: "dsa",
    icon: "brain",
    title: "Problem Solver",
    content: "Solved 400+ problems on LeetCode & GFG.",
  },
  {
    id: "gsoc",
    icon: "rocket",
    title: "Open Source",
    content: "GSoC contributor, building impactful projects.",
  },
];

export default function AboutMe() {
  const renderIcon = (iconType : any) => {
    switch (iconType) {
      case "education":
        return <GraduationCap className="w-12 h-12 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />;
      case "brain":
        return <Brain className="w-12 h-12 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />;
      case "rocket":
        return <Rocket className="w-12 h-12 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Visible Heading with Better Contrast */}
        <h2 className="text-2xl md:text-5xl font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 drop-shadow-lg">
          About Me
        </h2>
        
        {/* Clean underline */}
        <div className="w-16 h-1 mx-auto mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
        
        {/* Enhanced Visible Subheading */}
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-16 drop-shadow-md">
          <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent font-semibold">Full Stack Developer</span>
          <span className="text-gray-300 mx-2 font-bold">•</span>
          <span className="bg-gradient-to-r from-pink-300 to-pink-400 bg-clip-text text-transparent font-semibold">Problem Solver</span>
          <span className="text-gray-300 mx-2 font-bold">•</span>
          <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent font-semibold">AI/ML Enthusiast</span>
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <div
              key={item.id}
              className="relative group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                {renderIcon(item.icon)}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              
              {/* Content */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.content}
              </p>
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}