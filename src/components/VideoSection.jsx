import { Play } from 'lucide-react'
import { siteConfig } from '../config'
import ApplyButton from './ApplyButton'
import NewsBanner from './NewsBanner'

export default function VideoSection() {
  const hasVideo = Boolean(siteConfig.videoSrc)

  return (
    <section className="section-divider mt-7 pt-6 sm:mt-8 sm:pt-7">
      <div className="mb-3 sm:mb-4">
        <h2>
          <NewsBanner />
        </h2>
        <p className="mt-2 text-[13px] leading-relaxed text-cream/55 sm:text-sm">
          Before booking your discovery session, watch this short introduction from Kalanithi.
        </p>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl border border-gold/25 bg-ink-card shadow-card"
        style={{ aspectRatio: '16/9' }}
      >
        {hasVideo ? (
          <video
            className="h-full w-full object-cover"
            src={siteConfig.videoSrc}
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-ink-elevated to-ink px-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-ink-card shadow-gold-sm sm:h-16 sm:w-16"
            >
              <Play className="h-6 w-6 fill-gold text-gold sm:h-7 sm:w-7" />
            </div>
            <p className="text-center text-xs text-cream/40 sm:text-sm">Your video will appear here</p>
            <p className="text-center text-[10px] text-cream/30 sm:text-xs">
              Add your video path in <code className="text-gold/70">src/config.js</code>
            </p>
          </div>
        )}
      </div>

      <div className="mt-5 sm:mt-6">
        <ApplyButton />
      </div>
    </section>
  )
}
