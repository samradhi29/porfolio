import React from 'react';

const aboutData = [
  {
    title: 'College',
    content: `Currently pursuing B.Tech in Artificial Intelligence and Data Science at the Indian Institute of Information Technology, Kottayam, Kerala (2023–2027).`
  },
  {
    title: ' School',
    content: `Completed my schooling at Deep Jyoti Public School, Bhikangaon, Madhya Pradesh.`
  },
  {
    title: ' Tech Passion',
    content: `I enjoy building real-world projects using the MERN stack, creating clean and responsive user interfaces, and solving logical challenges through code. I also love solving DSA problems to sharpen my skills.`
  },
  {
    title: ' My Personality',
    content: `I'm creative, expressive, and always eager to learn. I enjoy sketching, styling outfits, and staying curious, confident, and driven in everything I do.`
  },
  {
    title: 'DSA Profiles',
    content: (
      <>
        You can check out my problem-solving profiles:
        <ul className="list-disc list-inside mt-2 text-fuchsia-300">
          <li>
            <a
              href="https://leetcode.com/u/samradhirathore/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-fuchsia-400"
            >
              LeetCode Profile
            </a>
          </li>
          <li>
            <a
              href="https://www.geeksforgeeks.org/user/samradhajd3/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-fuchsia-400"
            >
              GeeksforGeeks Profile
            </a>
          </li>
        </ul>
      </>
    )
  }
];

export default function AboutMe() {
  return (
    <section id="about" className="bg-zinc-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="space-y-6">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black to-zinc-900 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              {item.title && (
                <h3 className="text-2xl font-semibold text-fuchsia-300 mb-2">{item.title}</h3>
              )}
              <p className="text-base leading-relaxed text-gray-200">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
