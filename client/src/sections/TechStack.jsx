import React from 'react';
import { Terminal, Code2, Server, Database, Shield, Wrench, Globe } from 'lucide-react';

export default function TechStack() {
  const stackCategories = [
    {
      category: 'Core Languages',
      icon: <Code2 className="w-5 h-5 text-sky-500 dark:text-brand-cyan" />,
      skills: [
        { name: 'JavaScript (Node.js)', level: 'Advanced', exp: 'Asynchronous event loop, ES6+, streams' },
        { name: 'Python', level: 'Intermediate', exp: 'Backend scripts, data structures, automation' },
        { name: 'SQL (PostgreSQL Dialect)', level: 'Advanced', exp: 'DDL, DML, JOINS, aggregate queries' },
        { name: 'HTML5 & CSS3', level: 'Proficient', exp: 'Semantic markup, modern layout, styling' },
      ],
    },
    {
      category: 'Backend Frameworks',
      icon: <Server className="w-5 h-5 text-emerald-500 dark:text-brand-teal" />,
      skills: [
        { name: 'Express.js', level: 'Advanced', exp: 'Layered MVC pipelines, custom middleware' },
        { name: 'Sequelize ORM', level: 'Advanced', exp: 'Data models, validations, associations, migrations' },
        { name: 'RESTful API Architecture', level: 'Advanced', exp: 'Standard HTTP codes, clean URI design, JSON' },
      ],
    },
    {
      category: 'Databases & Storage',
      icon: <Database className="w-5 h-5 text-amber-500" />,
      skills: [
        { name: 'PostgreSQL 16+', level: 'Advanced', exp: 'ACID transactions, schemas, UUID keys' },
        { name: 'Database Normalization', level: 'Advanced', exp: '1NF, 2NF, 3NF schema structuring' },
        { name: 'Relational Integrity', level: 'Advanced', exp: 'Foreign keys, cascading constraints' },
      ],
    },
    {
      category: 'Auth, Security & Performance',
      icon: <Shield className="w-5 h-5 text-purple-500" />,
      skills: [
        { name: 'JWT & Token Auth', level: 'Advanced', exp: 'Cryptographic claims, bearer auth' },
        { name: 'Bcrypt Password Hashing', level: 'Advanced', exp: 'Salted cryptographic protection' },
        { name: 'Helmet & Rate Limiting', level: 'Advanced', exp: 'Brute-force defense & HTTP headers' },
      ],
    },
    {
      category: 'Developer Tools & Workflow',
      icon: <Wrench className="w-5 h-5 text-rose-500" />,
      skills: [
        { name: 'Postman', level: 'Advanced', exp: 'API collection testing, mock servers, documentation' },
        { name: 'Git & GitHub', level: 'Advanced', exp: 'Version control, commit history, branch flows' },
        { name: 'macOS & Zsh Terminal', level: 'Proficient', exp: 'Command line mastery, nvm, Homebrew, Unix' },
      ],
    },
  ];

  return (
    <section id="stack" className="min-h-screen flex flex-col justify-center py-24 border-t border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg transition-colors">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 dark:bg-brand-cyan/10 border border-sky-500/30 dark:border-brand-cyan/30 text-sky-600 dark:text-brand-cyan text-xs font-mono font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Backend Mastery & Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            The core tools, languages, and patterns I leverage to engineer production systems.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stackCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-card p-7 hover:border-sky-500/50 dark:hover:border-brand-cyan/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-white dark:bg-white/5 shadow-sm">
                  {cat.icon}
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white font-mono">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-start justify-between text-xs gap-3">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">
                        {skill.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {skill.exp}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-sky-500/10 text-sky-600 dark:bg-brand-cyan/10 dark:text-brand-cyan border border-sky-500/20 dark:border-brand-cyan/30 whitespace-nowrap">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
