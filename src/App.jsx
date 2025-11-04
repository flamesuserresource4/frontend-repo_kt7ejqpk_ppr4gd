import Hero3D from './components/Hero3D'
import ParallaxLayers from './components/ParallaxLayers'
import StepsPinned from './components/StepsPinned'
import GlassFeatures from './components/GlassFeatures'

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b0b10_0%,#10121a_30%,#0f1117_100%)] text-white selection:bg-indigo-500/30">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold tracking-tight text-white">Cigar Studio</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#steps" className="hover:text-white">Steps</a>
            <a href="#features" className="hover:text-white">Features</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <ParallaxLayers />
        <StepsPinned />
        <GlassFeatures />
      </main>

      <footer className="py-10 text-center text-white/60">
        Built with love for motion.
      </footer>
    </div>
  )
}

export default App
