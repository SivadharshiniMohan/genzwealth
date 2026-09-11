import { ChevronDown } from 'lucide-react'

const steps = [
  'Watch the above video',
  'Apply for the free discovery session',
  'Speak with our team to understand the complete membership',
  "If it's the right fit for your goals, join Genz Wealth Circle",
]

export default function FlowMap() {
  return (
    <section className="section-divider mt-8 pt-7 sm:mt-10 sm:pt-9">
      <div className="mb-5 text-center sm:mb-6">
        <h2 className="font-display text-lg font-semibold text-gold-light sm:text-xl">
          What Happens Next?
        </h2>
        <div className="mx-auto mt-2 h-px w-12 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-md">
        <div
          className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-gold/50 via-gold/25 to-gold/50 sm:left-[20px]"
          aria-hidden="true"
        />

        <div className="space-y-1">
          {steps.map((text, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dim text-sm font-bold text-ink ring-4 ring-ink shadow-gold-sm sm:h-10 sm:w-10"
                >
                  {index + 1}
                </span>

                <div
                  className="flex-1 rounded-xl border border-gold/20 bg-gradient-to-r from-ink-card to-ink-elevated px-4 py-3 shadow-card transition hover:border-gold/35 sm:px-5 sm:py-3.5"
                >
                  <p className="text-[13px] leading-snug text-cream/85 sm:text-sm sm:leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="flex w-9 justify-center py-0.5 sm:w-10 sm:py-1">
                  <ChevronDown className="h-3.5 w-3.5 text-gold/40" strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
