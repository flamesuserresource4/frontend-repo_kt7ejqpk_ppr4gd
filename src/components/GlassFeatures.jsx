import { Sparkles, Layers, Shield } from 'lucide-react'

export default function GlassFeatures() {
  const features = [
    {
      icon: Sparkles,
      title: 'Glassy Aesthetic',
      desc: 'Frosted surfaces with soft borders and subtle bloom.'
    },
    {
      icon: Layers,
      title: 'Parallax Depth',
      desc: 'Foreground, mid, and background layers for immersive motion.'
    },
    {
      icon: Shield,
      title: 'Smooth Performance',
      desc: 'Optimized animations with GPU-accelerated transforms.'
    }
  ]

  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.18),transparent_40%)]" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Refined Details</h2>
          <p className="mt-4 text-gray-600">Polished interactions and clear visual hierarchy throughout.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <Icon className="w-6 h-6 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
