import React from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-cyan-400/10 blur-[120px] rounded-full" />
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">Let’s build something beautiful</h2>
          <p className="mt-3 text-white/70">Have a project in mind or just want to say hi? I’m always open to discussing new ideas, collaborations, and opportunities.</p>
          <div className="mt-6 flex flex-col gap-3 text-sm">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Mail className="h-4 w-4" /> you@example.com
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="lg:col-span-3">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input type="text" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Project details</label>
              <textarea rows="5" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90">
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
