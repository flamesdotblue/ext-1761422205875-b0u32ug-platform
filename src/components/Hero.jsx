import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-start justify-center min-h-[100dvh]">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance work
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight">
          Building immersive web experiences
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 text-base sm:text-lg">
          I’m a frontend engineer crafting high-performance interfaces and playful 3D visuals. I blend clean UI with interactive scenes to tell compelling stories.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#projects" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/20">
            View Projects
          </a>
          <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 bg-black/30 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
            Contact Me
          </a>
        </div>
        <div className="mt-10 flex items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-white/80 hover:text-white">
            <span className="p-2 rounded-md bg-white/10 border border-white/10 group-hover:bg-white/15"><Github className="h-5 w-5"/></span>
            <span className="text-sm">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-white/80 hover:text-white">
            <span className="p-2 rounded-md bg-white/10 border border-white/10 group-hover:bg-white/15"><Linkedin className="h-5 w-5"/></span>
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href="#contact" className="group inline-flex items-center gap-2 text-white/80 hover:text-white">
            <span className="p-2 rounded-md bg-white/10 border border-white/10 group-hover:bg-white/15"><Mail className="h-5 w-5"/></span>
            <span className="text-sm">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
