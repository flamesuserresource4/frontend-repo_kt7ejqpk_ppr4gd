import React from 'react';
import { Sparkles, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Polished Aesthetic',
    desc: 'Frosted glass, subtle gradients, and tasteful depth for a premium feel.',
  },
  {
    icon: Shield,
    title: 'Smooth & Stable',
    desc: 'Optimized motion with careful layering that never fights your content.',
  },
  {
    icon: Clock,
    title: 'Fast by Default',
    desc: 'Vite-powered frontend and lean components for snappy user interactions.',
  },
];

export default function GlassFeatures() {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-zinc-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_10%_20%,rgba(255,255,255,0.06),transparent),radial-gradient(500px_300px_at_90%_60%,rgba(168,85,247,0.12),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-semibold sm:text-4xl">Crafted Features</h3>
          <p className="mt-3 text-zinc-300">
            Carefully designed components you can adapt to your brand.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-xl transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl border border-white/20 bg-black/30 p-3 text-violet-300">
                <f.icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold">{f.title}</h4>
              <p className="mt-2 text-zinc-300">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
