'use client';
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // ensures client-only

  useEffect(() => {
    setMounted(true); // mark as mounted on client
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    if (!mounted) return; // only scroll on client
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-950/95 backdrop-blur-2xl shadow-2xl border-b border-slate-800/50' : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand */}
          <div onClick={() => scrollToSection('home')} className="cursor-pointer text-white font-bold text-xl lg:text-2xl">
            Samradhi Rathore
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navigationItems.map(item => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-white px-4 py-2 font-medium transition">{item.label}</button>
            ))}

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1N_DuBXvXQ_ojosOM-_5EtqgtV_DU7PQG/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-5 py-2.5 rounded-lg border border-slate-600 text-slate-300 hover:text-white hover:border-pink-400/50 transition-all duration-300 font-medium">
                Resume
              </button>
            </a>

            {/* Contact Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-pink-600 hover:to-purple-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-2">
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl rounded-xl mt-2 py-4 flex flex-col space-y-2">
            {navigationItems.map(item => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}
                className="text-left px-6 py-2 text-slate-300 hover:text-white">{item.label}</button>
            ))}

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1N_DuBXvXQ_ojosOM-_5EtqgtV_DU7PQG/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6"
            >
              <button className="w-full px-4 py-2.5 rounded-lg border border-slate-600 text-slate-300 hover:text-white hover:border-pink-400/50 transition-all duration-300 font-medium">
                Resume
              </button>
            </a>

            {/* Contact Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
