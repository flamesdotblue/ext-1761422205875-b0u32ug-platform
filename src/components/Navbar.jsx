import React from 'react';
import { Rocket, User, FolderGit2, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-400 to-cyan-400 flex items-center justify-center ring-1 ring-white/20">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight group-hover:text-white">Your Name</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="text-white/80 hover:text-white inline-flex items-center gap-2"><User className="h-4 w-4"/> About</a>
          <a href="#projects" className="text-white/80 hover:text-white inline-flex items-center gap-2"><FolderGit2 className="h-4 w-4"/> Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white inline-flex items-center gap-2"><Mail className="h-4 w-4"/> Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/20">
          Get in touch
        </a>
      </div>
    </header>
  );
}
