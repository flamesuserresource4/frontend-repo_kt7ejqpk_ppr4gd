import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket } from 'lucide-react'

export default function Hero3D() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2I4zQy3m4Dq6gkYz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
            <div className="inline-flex items-center gap-2 text-white/80 text-sm mb-4">
              <Rocket className="w-4 h-4" />
              <span>Designed with GSAP + WebGL vibes</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Smooth, Glassy, Animated Landing
            </h1>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              Cinematic scroll, parallax depth, and a premium 3D hero. We can swap the model to a cigar while keeping the same effects.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#steps" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/90 hover:bg-white text-gray-900 font-semibold shadow transition">
                Explore Flow
              </a>
              <a href="#features" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
