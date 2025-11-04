import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function StepsPinned() {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const checksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2000',
          scrub: true,
          pin: true,
        },
      });

      stepRefs.current.forEach((el, i) => {
        tl.to(
          el,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            onUpdate: () => {
              const progress = tl.progress() * (stepRefs.current.length + 0.2);
              if (progress > i + 0.6) {
                checksRef.current[i]?.classList.add('text-emerald-400');
              } else {
                checksRef.current[i]?.classList.remove('text-emerald-400');
              }
            },
          },
          i
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="steps" ref={sectionRef} className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_20%,rgba(255,255,255,0.06),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h3 className="text-3xl font-semibold sm:text-4xl">From Browse to Bliss</h3>
          <p className="mt-3 text-zinc-300">
            Pinned progression highlights each step as you scroll. Watch the checkmarks light up.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: 'Discover', desc: 'Explore our curated collection with immersive visuals.' },
            { title: 'Select', desc: 'Compare details effortlessly and choose your favorite.' },
            { title: 'Enjoy', desc: 'Fast, delightful checkout and premium delivery.' },
          ].map((s, i) => (
            <div
              key={s.title}
              ref={(el) => (stepRefs.current[i] = el)}
              className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-6 opacity-30 backdrop-blur-xl shadow-xl translate-y-8"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm tracking-wide text-zinc-300/80">Step {i + 1}</span>
                <CheckCircle2 ref={(el) => (checksRef.current[i] = el)} className="h-5 w-5 text-zinc-400 transition-colors" />
              </div>
              <h4 className="text-xl font-semibold">{s.title}</h4>
              <p className="mt-2 text-zinc-300">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-black/30 p-4 text-center text-sm text-zinc-300">
          This section pins while you scroll so all steps stay visible.
        </div>
      </div>
    </section>
  );
}
