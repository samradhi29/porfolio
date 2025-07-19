import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

const ContactMe: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-black text-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-4xl font-stretch-ultra-expanded text-center text-fuchsia-300 mb-6 tracking-wide">
        Let's Connect 
      </h2>
      <p className="text-center text-gray-400 text-lg mb-10 leading-relaxed px-2">
        Got an idea? Want to collaborate or just vibe on tech stuff? Don’t hesitate to drop a message. <br />
        I’d love to hear from you. 
      </p>

      <div className="space-y-5 text-sm sm:text-base">
        <div className="flex items-center gap-4 p-4 border border-purple-100 bg-gradient-to-r from-black to-zinc-900 rounded-2xl hover:bg-gray-800 transition">
          <FaEnvelope className="text-purple-100 text-xl" />
          <span>
            <strong className="text-purple-100">Personal:</strong>{' '}
            <a href="mailto:samradhi4320@gmail.com" className="hover:underline text-purple-100">
              samradhi4320@gmail.com
            </a>
          </span>
        </div>

        <div className="flex items-center gap-4 p-4 border border-purple-100 bg-gradient-to-r from-black to-zinc-900 rounded-2xl hover:bg-gray-800 transition">
          <FaEnvelope className="text-purple-100 text-xl" />
          <span>
            <strong className="text-purple-100">College:</strong>{' '}
            <a href="mailto:samradh23bcd37iiitkottam.ac.in" className="hover:underline text-purple-100">
              samradh23bcd37iiitkottam.ac.in
            </a>
          </span>
        </div>

        <div className="flex items-center gap-4 p-4 border border-purple-100 bg-gradient-to-r from-black to-zinc-900 rounded-2xl hover:bg-gray-800 transition">
          <FaPhone className="text-purple-100 text-xl" />
          <span>
            <strong className="text-purple-100">Phone:</strong> +91 62687 84320
          </span>
        </div>

        <div className="flex items-center gap-4 p-4 border border-purple-100 bg-gradient-to-r from-black to-zinc-900 rounded-2xl hover:bg-gray-800 transition">
          <FaGithub className="text-purple-100 text-xl" />
          <span>
            <strong className="text-purple-100">GitHub:</strong>{' '}
            <a
              href="https://github.com/samradhi29"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-purple-100"
            >
              github.com/samradhi4320
            </a>
          </span>
        </div>

        <div className="flex items-center gap-4 p-4 border border-purple-100 bg-gradient-to-r from-black to-zinc-900 rounded-2xl hover:bg-gray-800 transition">
          <FaLinkedin className="text-purple-100 text-xl" />
          <span>
            <strong className="text-purple-100">LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/samradhi-rathore-81017a308/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-purple-100"
            >
              linkedin.com/in/samradhi
            </a>
          </span>
        </div>

        <div className="flex items-center gap-4 p-4 border border-purple-100 bg-gradient-to-r from-black to-zinc-900 rounded-2xl hover:bg-gray-800 transition">
          <FaInstagram className="text-purple-400 text-xl" />
          <span>
            <strong className="text-purple-100">Instagram:</strong>{' '}
            <a
              href="https://instagram.com/samradhiii_29"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-purple-100"
            >
              instagram.com/samradhi
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
