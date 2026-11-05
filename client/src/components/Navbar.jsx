import React, { useState } from 'react';
import { Terminal, Menu, X, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-light-bg/90 dark:bg-[#070A12]/90 border-b border-slate-300 dark:border-slate-800/80 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 font-mono font-bold text-lg group">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-sky-400/10 border border-sky-500/30 flex items-center justify-center text-sky-500 dark:text-sky-400 shadow-sm group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 text-sky-500 dark:text-sky-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-950 dark:text-white tracking-tight text-base font-black flex items-center gap-1">
              boyjosh<span className="text-sky-500 dark:text-sky-400">.dev</span>
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans font-medium">
              Ilelaboye Joshua
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          {/* Social Icons */}
          <div className="flex items-center gap-1.5 pl-2 border-l border-slate-300 dark:border-slate-800">
            <a
              href="https://github.com/boyjosh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              title="GitHub: boyjosh"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/connectwjosh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              title="LinkedIn: connectwjosh"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/heis__josh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              title="X: heis__josh"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/2347014224561"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs transition-transform hover:-translate-y-0.5 shadow-md shadow-emerald-500/20"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-300 dark:border-slate-800 bg-white/95 dark:bg-[#070A12]/95 backdrop-blur-xl px-6 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 py-2 text-base font-bold"
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-4 border-t border-slate-300 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="https://github.com/boyjosh" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/connectwjosh" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/heis__josh" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://wa.me/2347014224561"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
