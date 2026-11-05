import React from 'react';
import { Terminal, Github, Linkedin, Twitter, MessageCircle, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark-surface py-16 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-brand-cyan/10 border border-sky-500/30 dark:border-brand-cyan/30 flex items-center justify-center text-sky-500 dark:text-brand-cyan font-bold">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-base font-extrabold text-slate-900 dark:text-white">
                <span className="text-sky-500 dark:text-brand-cyan">boyjosh.dev</span>
              </span>
              <p className="text-slate-500 text-xs font-mono">
                Ilelaboye Joshua Oluwadamilare · Backend Software Engineer
              </p>
            </div>
          </div>

          {/* Attribution */}
          <div className="text-xs text-slate-500 font-mono text-center">
            Engineered with <span className="text-sky-600 dark:text-brand-cyan font-bold">Node.js</span>, <span className="text-sky-600 dark:text-brand-cyan font-bold">PostgreSQL</span>, <span className="text-sky-600 dark:text-brand-cyan font-bold">Python</span> & <span className="text-sky-600 dark:text-brand-cyan font-bold">React</span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/2347014224561"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-dark-card text-emerald-600 dark:text-emerald-400 hover:scale-105 transition-transform"
              title="WhatsApp: +234 701 422 4561"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="mailto:softboyjosh27@gmail.com"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-dark-card text-rose-500 hover:scale-105 transition-transform"
              title="Gmail: softboyjosh27@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/boyjosh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-sky-500 hover:scale-105 transition-transform"
              title="GitHub: boyjosh"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/connectwjosh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-dark-card text-sky-500 hover:scale-105 transition-transform"
              title="LinkedIn: connectwjosh"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/heis__josh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-dark-card text-sky-400 hover:scale-105 transition-transform"
              title="Twitter: heis__josh"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-brand-cyan hover:scale-105 transition-transform ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/60 text-center text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} Ilelaboye Joshua Oluwadamilare. Student at University of Lagos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
