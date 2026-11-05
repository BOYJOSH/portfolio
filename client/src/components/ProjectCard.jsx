import React from 'react';
import { Github, ExternalLink, Database, Server, Layers } from 'lucide-react';

export default function ProjectCard({ project }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Backend Architecture':
        return <Layers className="w-4 h-4 text-sky-500 dark:text-brand-cyan" />;
      case 'REST API':
        return <Server className="w-4 h-4 text-emerald-500 dark:text-brand-teal" />;
      default:
        return <Database className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <div className="group rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card p-7 sm:p-8 flex flex-col justify-between hover:border-sky-500/50 dark:hover:border-brand-cyan/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-2xl">
      <div>
        {/* Category & Action links */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-600 dark:bg-brand-cyan/10 dark:text-brand-cyan border border-sky-500/20 dark:border-brand-cyan/30">
            {getCategoryIcon(project.category)}
            {project.category || 'Backend Service'}
          </span>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                title="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-brand-cyan bg-slate-100 dark:bg-white/5 transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-brand-cyan transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm font-mono font-bold text-sky-600 dark:text-brand-cyan">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Pills */}
      <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-2">
        {(project.techStack || []).map((tech, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
