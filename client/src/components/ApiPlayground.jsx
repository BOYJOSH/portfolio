import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, RefreshCw, CheckCircle2, Clock } from 'lucide-react';

export default function ApiPlayground() {
  const endpoints = [
    { label: 'GET /api/me', url: '/api/me', desc: 'Fetches developer bio, core skills & architecture specs' },
    { label: 'GET /api/projects', url: '/api/projects', desc: 'Fetches full project portfolio from PostgreSQL' },
    { label: 'GET /api/health', url: '/api/health', desc: 'Checks server uptime and health state' },
  ];

  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    const start = performance.now();
    try {
      const res = await fetch(selectedEndpoint.url);
      const data = await res.json();
      const duration = Math.round(performance.now() - start);
      setResponse({
        status: res.status,
        statusText: res.statusText || 'OK',
        duration,
        data,
      });
    } catch (err) {
      const duration = Math.round(performance.now() - start);
      setResponse({
        status: 500,
        statusText: 'Error',
        duration,
        data: { error: err.message, note: 'Make sure your backend server is running on port 5001' },
      });
    } finally {
      setLoading(false);
    }
  };

  const copyResponse = () => {
    if (!response) return;
    navigator.clipboard.writeText(JSON.stringify(response.data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-dark-border dark:border-dark-border light:border-light-border bg-dark-card dark:bg-dark-card light:bg-light-card overflow-hidden shadow-xl">
      {/* Top Controller Bar */}
      <div className="p-4 sm:p-5 border-b border-dark-border dark:border-dark-border light:border-light-border bg-dark-bg/40 dark:bg-dark-bg/40 light:bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Endpoint Selector Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {endpoints.map((ep) => (
            <button
              key={ep.url}
              onClick={() => {
                setSelectedEndpoint(ep);
                setResponse(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedEndpoint.url === ep.url
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-sm'
                  : 'bg-white/5 dark:bg-white/5 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-600 border border-dark-border dark:border-dark-border light:border-light-border hover:text-slate-200'
              }`}
            >
              {ep.label}
            </button>
          ))}
        </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={loading}
          className="flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-semibold text-xs transition-colors shadow-lg shadow-emerald-500/20 disabled:opacity-50"
        >
          {loading ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Executing...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Send Request</span>
            </>
          )}
        </button>
      </div>

      {/* URL Display */}
      <div className="px-5 py-3 border-b border-dark-border/60 dark:border-dark-border/60 light:border-light-border/60 flex items-center gap-3 bg-dark-bg/20 font-mono text-xs text-slate-300">
        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[11px] border border-emerald-500/20">
          GET
        </span>
        <span className="text-slate-400">https://api.damilare.dev</span>
        <span className="text-emerald-400 font-semibold">{selectedEndpoint.url}</span>
      </div>

      {/* Interactive Response View */}
      <div className="p-5 font-mono text-xs">
        {response ? (
          <div>
            {/* Response Metrics */}
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-dark-border/50 text-[11px]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  Status: {response.status} {response.statusText}
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3 h-3 text-slate-500" />
                  Latency: {response.duration}ms
                </span>
              </div>

              <button
                onClick={copyResponse}
                className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
                title="Copy JSON response"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Output */}
            <div className="bg-[#0b0d10] text-slate-200 p-4 rounded-xl border border-dark-border/80 max-h-[300px] overflow-y-auto">
              <pre>
                <code>{JSON.stringify(response.data, null, 2)}</code>
              </pre>
            </div>
          </div>
        ) : (
          <div className="py-12 text-center text-slate-500 flex flex-col items-center justify-center">
            <Terminal className="w-8 h-8 text-slate-600 mb-2" />
            <p className="text-slate-400">Click <span className="text-emerald-400 font-semibold">"Send Request"</span> to execute a live query against the API.</p>
            <p className="text-[11px] text-slate-600 mt-1">{selectedEndpoint.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
