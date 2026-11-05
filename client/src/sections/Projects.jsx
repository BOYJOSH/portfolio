import React, { useState, useEffect } from 'react';
import { Terminal, RefreshCw } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { api } from '../services/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Backend Architecture', 'REST API', 'Developer Tooling'];

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const data = await api.getProjects();
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24 border-t border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-surface/40 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 dark:bg-brand-cyan/10 border border-sky-500/30 dark:border-brand-cyan/30 text-sky-600 dark:text-brand-cyan text-xs font-mono font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // Featured Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Engineered Backend Architectures
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Real implementations of microservices, transactional REST APIs, background workers, and clean starter engines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedFilter === filter
                  ? 'bg-sky-500 text-white dark:bg-brand-cyan dark:text-slate-950 shadow-md shadow-sky-500/20'
                  : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-dark-border hover:border-sky-500/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="py-24 flex flex-col items-center justify-center text-slate-500 font-mono text-xs gap-3">
            <RefreshCw className="w-6 h-6 animate-spin text-sky-500 dark:text-brand-cyan" />
            <span>Querying PostgreSQL database...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id || project.slug} project={project} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
