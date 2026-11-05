import React from 'react';
import { Server, Database, ShieldCheck, Cpu, Terminal, GraduationCap, Clock, Code, FileDown, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const coreCompetencies = [
    {
      title: 'Layered MVC Architecture',
      detail: 'I structure backends into decoupled layers—Controllers for HTTP logic, Services for business rules, and Models for data persistence. This keeps codebases modular, testable, and enterprise-ready.',
    },
    {
      title: 'PostgreSQL Relational Mastery',
      detail: 'Deep expertise in normalized schema design (1NF through 3NF), relational table constraints, indexing, ACID transactional rollback safety, and Sequelize ORM integration.',
    },
    {
      title: 'Authentication & API Defense',
      detail: 'Implementation of stateless JWT bearer authorization, refresh token rotation, salted Bcrypt password hashing, rate-limiting guards against DDoS/brute-force, and Helmet headers.',
    },
    {
      title: 'Python & Web Fundamentals',
      detail: 'Proficient in Python for automated task queues and data transformations, paired with HTML5 and CSS3 for seamless full-stack collaboration.',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 border-t border-slate-300 dark:border-slate-800 bg-white dark:bg-[#070A12] transition-colors">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 dark:bg-sky-400/10 border border-sky-500/30 text-sky-600 dark:text-sky-300 text-xs font-mono font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // About Joshua</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            Engineering High-Throughput Backends with Clean Architecture
          </h2>
        </div>

        {/* Deep Multi-Paragraph Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-800 dark:text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
            
            <p>
              I am <strong className="text-slate-950 dark:text-white font-extrabold">Ilelaboye Joshua Oluwadamilare</strong>, a passionate backend software engineer and undergraduate studying <strong className="text-slate-950 dark:text-white font-extrabold">Computer Science at the University of Lagos (UNILAG)</strong>. My computing journey began with an insatiable curiosity about what happens behind the screen—how servers ingest millions of packets, process concurrent queries, and safeguard sensitive data.
            </p>

            <p>
              Over the past year of dedicated backend engineering, I chose to specialize deeply in the server-side ecosystem. While many developers focus solely on visual interfaces, my passion lies in <span className="text-sky-600 dark:text-sky-400 font-bold">architectural reliability</span>—designing normalized PostgreSQL database schemas, eliminating N+1 query bottlenecks, structuring clean RESTful API contracts, and ensuring zero-downtime execution.
            </p>

            <p>
              My development stack centers around <strong className="text-slate-950 dark:text-white font-extrabold">Node.js, Express, PostgreSQL, and Python</strong>. I adhere strictly to clean code principles (SOLID, DRY) and layered MVC separation of concerns. To me, great software is measured by how effortlessly it scales when traffic spikes, how securely it protects user authentication, and how cleanly its codebase can be maintained by distributed teams.
            </p>

            <p>
              When I'm not writing controllers or optimizing database indexes, I actively hone my computer science fundamentals in algorithms, data structures, and computer networking at UNILAG, constantly pushing myself to build faster, smarter, and more resilient systems.
            </p>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#"
                download="Joshua_Ilelaboye_CV.pdf"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-mono font-bold text-xs transition-all flex items-center gap-2 shadow-md shadow-sky-500/25"
                title="Download CV"
              >
                <FileDown className="w-4 h-4" />
                <span>Download My Full CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono font-bold text-xs transition-all hover:border-sky-500 flex items-center gap-2"
              >
                <span>Let's Discuss Opportunities</span>
                <ArrowRight className="w-4 h-4 text-sky-500" />
              </a>
            </div>

          </div>

          {/* Quick Facts & Stats (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic & Experience Card */}
            <div className="p-7 rounded-2xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 shadow-lg space-y-5">
              <h3 className="text-lg font-black text-slate-950 dark:text-white font-mono flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-sky-500 dark:text-sky-400" />
                Academic & Experience Profile
              </h3>

              <div className="space-y-4 text-sm">
                <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
                  <p className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">Degree & Institution</p>
                  <p className="font-bold text-slate-900 dark:text-white text-base">B.Sc. Computer Science</p>
                  <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">University of Lagos (UNILAG) · In Progress</p>
                </div>

                <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
                  <p className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">Industry Track</p>
                  <p className="font-bold text-slate-900 dark:text-white text-base">Backend Software Engineering</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">1 Year Dedicated Practical Experience</p>
                </div>

                <div>
                  <p className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">Current Availability</p>
                  <p className="font-bold text-slate-900 dark:text-white text-base">Open for Internships & Full-time Roles</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Remote · Hybrid · On-site (Lagos)</p>
                </div>
              </div>
            </div>

            {/* Engineering Values */}
            <div className="p-6 rounded-2xl border border-sky-500/30 bg-sky-500/[0.04] dark:bg-sky-400/[0.03] space-y-3">
              <h4 className="font-black text-slate-900 dark:text-white text-sm font-mono flex items-center gap-2">
                <Code className="w-4 h-4 text-sky-500" />
                My Core Engineering Standards
              </h4>
              <ul className="text-xs text-slate-700 dark:text-slate-200 space-y-2 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Always separate business rules from transport/HTTP logic.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Never store raw passwords; enforce salted Bcrypt hashing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Guard against database deadlocks with indexed foreign keys.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Document and test every route with Postman and clean status codes.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* 4 Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCompetencies.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:border-sky-500/50 transition-all shadow-sm"
            >
              <h3 className="font-extrabold text-base text-slate-950 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
