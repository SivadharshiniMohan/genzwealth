import { ArrowRight } from 'lucide-react'
import { siteConfig } from '../config'

const buttonClasses =
  'group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-gold-dim via-gold to-gold-light px-5 py-4 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] sm:px-8 sm:py-[18px] shadow-[0_4px_20px_rgba(212,168,83,0.45),0_0_40px_rgba(212,168,83,0.25),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_8px_32px_rgba(212,168,83,0.6),0_0_56px_rgba(212,168,83,0.35),inset_0_1px_0_rgba(255,255,255,0.3)]'

export default function ApplyButton() {
  const hasLink = Boolean(siteConfig.ctaLink)

  const content = (
    <>
      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <span className="relative text-[13px] uppercase tracking-[0.08em] text-ink sm:text-sm">
        Apply for a Free Discovery Session
      </span>
      <ArrowRight
        className="relative h-5 w-5 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2.5}
      />
    </>
  )

  if (hasLink) {
    return (
      <a
        href={siteConfig.ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={buttonClasses}>
      {content}
    </button>
  )
}
