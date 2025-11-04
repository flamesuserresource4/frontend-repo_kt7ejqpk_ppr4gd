import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { title: 'Concept', desc: 'Shape the vibe, define the flow, and set the tone.' },
  { title: 'Craft', desc: 'Animate with GSAP, add depth, and polish interactions.' },
  { title: 'Launch', desc: 'Pin, parallax, and ship a silky smooth experience.' },
]

export default function StepsPinned() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=250%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(steps.length - 1, Math.floor(self.progress * steps.length + 0.001))
            setActive(idx)
          },
        },
        defaults: { ease: 'power2.out' },
      })

      cardsRef.current.forEach((el, i) => {
        tl.fromTo(
          el,
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6 },
          i === 0 ? 0 : '>'
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="steps" ref={sectionRef} className="relative bg-gradient-to-b from-black/5 to-black/0">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_400px_at_50%_-10%,rgba(255,255,255,0.25),transparent)]" />

      <div className="container mx-auto px-6 py-24 md:py-28">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Three Crisp Steps
          </h2>
          <p className="mt-4 text-gray-600">
            Pinned as you scroll, each step checks off in sequence.
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                <CheckCircle
                  className={`w-6 h-6 transition-colors ${i <= active ? 'text-emerald-500' : 'text-gray-300'}`}
                />
              </div>
              <p className="mt-3 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Keep scrolling to complete all steps
        </p>
      </div>
    </section>
  )
}
