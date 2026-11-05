import React from 'react';
import { ArrowDown, Mail, Github, Linkedin, Twitter, MessageCircle, FileDown, GraduationCap, MapPin } from 'lucide-react';
import TerminalCard from '../components/TerminalCard';

export default function Hero({ profile }) {
  return (
    <section className="relative min-h-screen flex items-center py-20 lg:py-28 overflow-hidden bg-light-bg dark:bg-[#070A12] transition-colors">
      {/* Background radial ambient glow - deep chill blue */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-sky-500/15 dark:bg-sky-400/10 blur-[150px] -z-10 pointer-events-none rounded-full" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Personal Intro & Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/40 dark:border-sky-400/30 bg-sky-500/10 dark:bg-sky-400/10 text-sky-700 dark:text-sky-300 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Backend Roles & Internships</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 text-xs font-semibold">
                <GraduationCap className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                <span>UNILAG · Computer Science</span>
              </div>
            </div>

            {/* Profile Photo & Name header */}
            <div className="flex items-center gap-5 pt-2">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 blur-sm opacity-80 group-hover:opacity-100 transition duration-300" />
                <img
                  src="/profile.jpg"
                  alt="Ilelaboye Joshua Oluwadamilare"
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-white dark:border-slate-700 shadow-xl"
                />
              </div>

              <div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                  Ilelaboye Joshua <span className="text-sky-500 dark:text-sky-400">Oluwadamilare</span>
                </h1>
                <p className="text-base sm:text-xl font-mono font-extrabold text-slate-700 dark:text-slate-200 mt-1">
                  Backend Software Engineer
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>University of Lagos, Akoka · 1 Year Experience</span>
                </p>
              </div>
            </div>

            {/* Bold High-Contrast Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-100 font-normal leading-relaxed">
              I am a Computer Science student at the <strong className="text-slate-950 dark:text-white font-black">University of Lagos (UNILAG)</strong> with 1 year of production-focused experience architecting resilient backends. I specialize in <span className="text-sky-600 dark:text-sky-400 font-bold">Node.js/Express MVC</span>, <span className="text-sky-600 dark:text-sky-400 font-bold">PostgreSQL</span> databases, <span className="text-sky-600 dark:text-sky-400 font-bold">Python</span> scripts, REST APIs, and web fundamentals (HTML5, CSS3).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/2347014224561"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 flex items-center gap-2.5 font-mono"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-sky-500 dark:hover:border-sky-400 text-slate-900 dark:text-white font-bold text-sm transition-all hover:-translate-y-0.5 flex items-center gap-2 font-mono shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-sky-500 dark:text-sky-400" />
              </a>

              {/* CV Button linking to # with downloadable filename */}
              <a
                href="#"
                download="Joshua_Ilelaboye_CV.pdf"
                className="px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 hover:border-sky-500 text-slate-800 dark:text-slate-200 font-bold text-xs transition-all flex items-center gap-2 font-mono shadow-sm"
                title="Download CV (PDF)"
              >
                <FileDown className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Direct Social & Contact Channels */}
            <div className="flex flex-wrap items-center gap-4 pt-4 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px]">Direct Channels:</span>
              
              <a
                href="mailto:softboyjosh27@gmail.com"
                className="flex items-center gap-1.5 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-rose-500" />
                <span className="font-bold">softboyjosh27@gmail.com</span>
              </a>

              <a
                href="https://github.com/boyjosh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>boyjosh</span>
              </a>

              <a
                href="https://linkedin.com/in/connectwjosh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-500" />
                <span>connectwjosh</span>
              </a>

              <a
                href="https://x.com/heis__josh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                <Twitter className="w-4 h-4 text-sky-400" />
                <span>@heis__josh</span>
              </a>
            </div>

          </div>

          {/* Right Column: Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/25 via-blue-500/20 to-emerald-500/20 blur-xl opacity-80" />
              <div className="relative">
                <TerminalCard profile={profile} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
