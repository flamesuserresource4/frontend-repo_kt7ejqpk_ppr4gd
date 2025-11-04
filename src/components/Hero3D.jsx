import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white">
      <div className="absolute inset-0">
        {/* 3D Scene */}
        <Spline
          scene="https://prod.spline.design/2B9yq2vBfQx2M5gG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial accent behind content (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.15),transparent_45%)]" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Handcrafted Luxury, Modern Motion
          </h1>
          <p className="mt-4 text-zinc-200/80 sm:text-lg">
            A refined, glassmorphic landing experience with immersive 3D and fluid scroll animations.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <Rocket size={18} />
              Explore Features
            </a>
            <a
              href="#steps"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/30 px-5 py-3 text-white backdrop-blur-md transition hover:bg-black/40"
            >
              <Play size={18} />
              How It Works
            </a>
          </div>
        </div>

        {/* Glass bar */}
        <div className="mt-8 w-full max-w-4xl rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-zinc-200/80 backdrop-blur-xl">
          This hero uses an interactive 3D scene. Overlays are non-blocking to keep the scene responsive.
        </div>
      </div>
    </section>
  );
}
