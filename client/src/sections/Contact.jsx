import React, { useState } from 'react';
import { Terminal, Mail, Send, CheckCircle2, AlertCircle, RefreshCw, Github, Linkedin, Twitter, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { api } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await api.sendMessage(formData);
      setStatus({
        type: 'success',
        message: res.message || 'Message stored in PostgreSQL! Joshua will reply to you shortly.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Failed to submit message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-24 border-t border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-surface/40 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 dark:bg-brand-cyan/10 border border-sky-500/30 dark:border-brand-cyan/30 text-sky-600 dark:text-brand-cyan text-xs font-mono font-bold">
            <Mail className="w-3.5 h-3.5" />
            <span>05 // Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Get in Touch With Joshua
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Whether you want to hire me, collaborate on a project, or discuss backend architecture, reach out through any of my direct channels or drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Channels & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Channels Box */}
            <div className="rounded-3xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card p-8 space-y-6 shadow-sm">
              <h3 className="font-extrabold text-xl text-slate-900 dark:text-white font-mono">
                Direct Channels
              </h3>

              {/* WhatsApp Highlight Button */}
              <a
                href="https://wa.me/2347014224561"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-bold shadow-md">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">Fastest Response</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">+234 701 422 4561</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Gmail Button */}
              <a
                href="mailto:softboyjosh27@gmail.com"
                className="w-full p-4 rounded-2xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white font-bold shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-sky-600 dark:text-sky-400 font-bold uppercase">Email Inbox</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">softboyjosh27@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Social Grid */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Social Profiles</p>

                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="https://github.com/boyjosh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 hover:border-sky-500 text-center flex flex-col items-center gap-1.5 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-sky-500" />
                    <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400">boyjosh</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/connectwjosh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 hover:border-sky-500 text-center flex flex-col items-center gap-1.5 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-sky-500" />
                    <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400">connectwjosh</span>
                  </a>

                  <a
                    href="https://x.com/heis__josh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 hover:border-sky-500 text-center flex flex-col items-center gap-1.5 transition-colors group"
                  >
                    <Twitter className="w-5 h-5 text-sky-400" />
                    <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400">heis__josh</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form (Direct PostgreSQL Integration) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card p-8 sm:p-10 space-y-5 shadow-xl"
            >
              <h3 className="text-xl font-black text-slate-900 dark:text-white font-mono">
                Send a Message to My PostgreSQL Database
              </h3>

              {status && (
                <div
                  className={`p-4 rounded-xl text-xs flex items-center gap-3 font-mono font-medium ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-500" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-dark-border bg-slate-50 dark:bg-dark-surface/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-dark-border bg-slate-50 dark:bg-dark-surface/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Backend Role / Internship Opportunity"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-dark-border bg-slate-50 dark:bg-dark-surface/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Joshua, we have an exciting project and we love your backend architecture..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-dark-border bg-slate-50 dark:bg-dark-surface/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-400 dark:bg-brand-cyan dark:hover:bg-cyan-300 text-white dark:text-slate-950 font-mono font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Writing to PostgreSQL...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message (POST /api/messages)</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
