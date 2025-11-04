import React from 'react';
import Hero3D from './components/Hero3D';
import ParallaxLayers from './components/ParallaxLayers';
import StepsPinned from './components/StepsPinned';
import GlassFeatures from './components/GlassFeatures';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-violet-500/30 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">CigarCraft</a>
          <nav className="flex items-center gap-4 text-sm text-zinc-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#steps" className="hover:text-white">Steps</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero3D />
        <ParallaxLayers />
        <StepsPinned />
        <GlassFeatures />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950/80 py-8 text-zinc-400">
        <div className="mx-auto max-w-6xl px-6 text-sm">
          <p>© {new Date().getFullYear()} CigarCraft — Built with motion and glass.</p>
        </div>
      </footer>
    </div>
  );
}
