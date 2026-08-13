import { Play } from 'lucide-react'
import { siteConfig } from '../config'
import ApplyButton from './ApplyButton'
import NewsBanner from './NewsBanner'

export default function VideoSection() {
  const videoSrc = siteConfig.videoSrc
    ? `${import.meta.env.BASE_URL}${siteConfig.videoSrc}`
    : ''
  const videoPoster = siteConfig.videoPoster
    ? `${import.meta.env.BASE_URL}${siteConfig.videoPoster}`
    : undefined
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
            src={videoSrc}
            poster={videoPoster}
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="relative h-full w-full">
            {videoPoster ? (
              <img
                src={videoPoster}
                alt="Watch before you apply"
                className="h-full w-full object-cover"
              />
            ) : null}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 px-4">
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
          </div>
        )}
      </div>

      <div className="mt-5 sm:mt-6">
        <ApplyButton />
      </div>
    </section>
  )
}
