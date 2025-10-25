import React from 'react';

const items = [
  {
    title: 'Interactive Product Showcase',
    description: 'A performant 3D product viewer with smooth camera transitions and material swaps.',
    tags: ['3D', 'WebGL', 'UI'],
    link: '#'
  },
  {
    title: 'Data Storytelling',
    description: 'Narrative-driven data visualization with scroll-based animations and parallax.',
    tags: ['React', 'Animation', 'Story'],
    link: '#'
  },
  {
    title: 'Portfolio System',
    description: 'Modular components, themeable tokens, and motion guidelines for a design system.',
    tags: ['Design System', 'Tailwind', 'DX'],
    link: '#'
  },
];

function ProjectCard({ title, description, tags, link }) {
  return (
    <a href={link} className="group relative block rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-6 hover:border-white/20 transition-colors">
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{
        background: 'radial-gradient(1200px 300px at var(--mx) var(--my), rgba(255,255,255,0.08), transparent 60%)'
      }} />
      <div className="relative">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white/80">{t}</span>
          ))}
        </div>
        <div className="mt-6 text-sm text-white/70">View case study →</div>
      </div>
    </a>
  );
}

export default function Projects() {
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      card.style.setProperty('--mx', `${mx}px`);
      card.style.setProperty('--my', `${my}px`);
    });
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-fuchsia-500/10 blur-[140px] rounded-full" />
      </div>
      <div className="relative flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-white/70 max-w-xl">A selection of work exploring interactivity, motion, and aesthetic systems for the modern web.</p>
        </div>
        <a href="#contact" className="hidden sm:inline-block rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Work with me</a>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" onMouseMove={handleMouseMove}>
        {items.map((item) => (
          <div key={item.title} data-tilt>
            <ProjectCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
