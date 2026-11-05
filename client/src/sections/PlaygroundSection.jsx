import React from 'react';
import { Terminal, Cpu } from 'lucide-react';
import ApiPlayground from '../components/ApiPlayground';

export default function PlaygroundSection() {
  return (
    <section id="playground" className="py-20 border-t border-dark-border dark:border-dark-border light:border-light-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>04 // Live Backend Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Don't Just Take My Word For It.
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Test the live backend directly from your browser. Dispatch real HTTP queries to the Node.js/PostgreSQL engine and inspect the JSON responses in real-time.
          </p>
        </div>

        {/* Playground Widget */}
        <ApiPlayground />

      </div>
    </section>
  );
}
