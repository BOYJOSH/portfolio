import React, { useState } from 'react';
import { Copy, Check, Terminal as TerminalIcon } from 'lucide-react';

export default function TerminalCard({ profile }) {
  const [copied, setCopied] = useState(false);

  const jsonString = JSON.stringify(profile || {}, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-300 dark:border-dark-border bg-white dark:bg-[#0A101D] shadow-2xl overflow-hidden font-mono text-xs cyan-glow transition-all">
      {/* Title Bar */}
      <div className="px-5 py-3.5 bg-slate-100 dark:bg-[#070B14] border-b border-slate-200 dark:border-dark-border/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-slate-500 dark:text-slate-400 text-xs font-semibold flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-sky-500 dark:text-brand-cyan" />
            joshua@unilag: ~/api/me.json
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            200 OK
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors px-2.5 py-1 rounded-lg bg-slate-200/60 dark:bg-white/5 hover:bg-slate-300/60 dark:hover:bg-white/10"
            title="Copy JSON Payload"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[11px] text-emerald-500 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[11px]">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Terminal Command Prompt */}
      <div className="px-6 py-3 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-white/5 flex items-center justify-between text-xs bg-slate-50/50 dark:bg-black/20">
        <div className="flex items-center gap-2">
          <span className="text-sky-500 dark:text-brand-cyan font-bold">$</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">curl -X GET https://boyjosh.dev/api/me</span>
        </div>
        <span className="text-slate-400 text-[11px]">32ms</span>
      </div>

      {/* Terminal Code Body */}
      <div className="p-6 max-h-[420px] overflow-y-auto text-slate-800 dark:text-slate-200 leading-relaxed font-mono">
        <pre className="text-xs">
          <code>
            {jsonString.split('\n').map((line, idx) => {
              let styledLine = line;
              if (line.includes(':')) {
                const [key, ...rest] = line.split(':');
                const val = rest.join(':');
                return (
                  <div key={idx} className="hover:bg-sky-500/5 px-1 -mx-1 rounded transition-colors">
                    <span className="text-sky-600 dark:text-brand-blue font-semibold">{key}:</span>
                    <span className={val.includes('"') ? 'text-emerald-600 dark:text-brand-teal' : val.includes('true') || val.includes('false') ? 'text-amber-600 dark:text-amber-300' : 'text-purple-600 dark:text-purple-300'}>
                      {val}
                    </span>
                  </div>
                );
              }
              return (
                <div key={idx} className="text-slate-500 dark:text-slate-400">
                  {line}
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Footer Info */}
      <div className="px-6 py-2.5 bg-slate-100 dark:bg-[#070B14] border-t border-slate-200 dark:border-dark-border/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-brand-cyan" />
          University of Lagos (UNILAG) · Computer Science
        </span>
        <span>UTF-8 · JSON</span>
      </div>
    </div>
  );
}
