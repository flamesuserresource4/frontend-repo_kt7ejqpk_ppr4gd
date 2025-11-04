import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxLayers() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const yBack = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -240])
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -360])

  useEffect(() => {
    // no-op; hook to ensure effects attach in client
  }, [])

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-transparent to-black/5">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="container mx-auto px-6 relative">
        <motion.div style={{ y: yBack }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Depth Through Motion
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Subtle layers slide at different speeds as you scroll, creating immersive parallax.
          </p>
        </motion.div>

        <motion.div style={{ y: yMid }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
              <p className="text-white text-opacity-90 font-medium">
                Layer {i}
              </p>
              <p className="text-white/70 text-sm mt-2">
                Glassmorphic cards floating over the scene.
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: yFront }} className="mt-20">
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-8">
            <p className="text-white/90">
              This section moves the most to emphasize foreground content.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
