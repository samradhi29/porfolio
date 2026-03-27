"use client";
import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Code2,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Euron",
    period: "Jan 2026 – Present",
    location: "Remote",
    type: "Internship",
    offerLetter: "https://your-offer-letter-link.pdf",
    techStack: ["FastAPI", "Next.js", "TypeScript", "Docker"],
    highlights: [
      {
        project: "AI-Based Expense Tracker",
        subtitle: "Accounting SaaS",
        points: [
          "Implemented Google OAuth login",
          "Built expense tracking with charts and reports",
        ],
      },
      {
        project: "Patient Summarization System",
        subtitle: "Healthcare UI",
        points: [
          "Developed modern UI using Next.js & Tailwind",
        ],
      },
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section className="py-24 px-6 text-white relative z-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl md:text-5xl text-center mb-12 font-semibold text-purple-400">
          Experience
        </h2>

        {/* Cards */}
        <div className="space-y-6">
          {experiences.map((exp) => {
            const isOpen = expanded === exp.id;

            return (
              <div
                key={exp.id}
                className="border border-white/10 rounded-xl bg-black/40 backdrop-blur p-5"
              >
                {/* Header */}
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() =>
                    setExpanded(isOpen ? null : exp.id)
                  }
                >
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-pink-400">{exp.company}</p>

                    <div className="flex gap-4 text-sm text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expand Section */}
                {isOpen && (
                  <div className="mt-5 space-y-4">

                    {/* Offer Letter */}
                    {exp.offerLetter && (
                      <a
                        href={exp.offerLetter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg 
                        bg-purple-500/20 border border-purple-400 text-purple-300 hover:scale-105 transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Offer Letter
                      </a>
                    )}

                    {/* Highlights */}
                    {exp.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <p className="font-semibold">{h.project}</p>
                        <p className="text-sm text-pink-400">{h.subtitle}</p>

                        <ul className="mt-2 space-y-2">
                          {h.points.map((p, j) => (
                            <li key={j} className="text-gray-300 text-sm">
                              • {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}