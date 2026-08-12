import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BulletPoints from './components/BulletPoints'
import FeatureCards from './components/FeatureCards'
import VideoSection from './components/VideoSection'
import FlowMap from './components/FlowMap'
import CTAButton from './components/CTAButton'

function App() {
  return (
    <div className="relative min-h-screen bg-ink text-cream">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(212,168,83,0.09),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_50%_30%_at_100%_100%,rgba(212,168,83,0.04),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[720px] px-4 pb-12 sm:max-w-[800px] sm:px-6 sm:pb-16">
        <Navbar />
        <Hero />
        <BulletPoints />
        <FeatureCards />
        <VideoSection />
        <FlowMap />
        <CTAButton />
      </div>
    </div>
  )
}

export default App
