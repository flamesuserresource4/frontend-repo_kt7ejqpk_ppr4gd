import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxLayers() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const yBack = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -320]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_20%,rgba(124,58,237,0.15),transparent),radial-gradient(500px_300px_at_10%_60%,rgba(59,130,246,0.12),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Layered Depth, Effortless Motion</h2>
          <p className="mt-4 text-zinc-300">
            Subtle parallax motion enriches the experience without overwhelming the content. Each layer
            moves at its own pace for a natural sense of depth.
          </p>
        </div>

        <div className="relative h-[360px] md:h-[420px]">
          <motion.div style={{ y: yBack }} className="absolute left-2 top-6 h-32 w-32 rounded-2xl bg-violet-500/20 blur-md" />
          <motion.div style={{ y: yMid }} className="absolute right-6 top-24 h-40 w-40 rounded-full bg-blue-500/25 blur" />
          <motion.div style={{ y: yFront }} className="absolute bottom-4 left-10 h-48 w-64 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl" />
          <div className="absolute inset-0 rounded-3xl border border-white/10" />
        </div>
      </div>
    </section>
  );
}
