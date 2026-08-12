import ApplyButton from './ApplyButton'

export default function CTAButton() {
  return (
    <section className="section-divider mt-8 pt-7 sm:mt-10 sm:pt-9">
      <div
        className="relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-b from-gold/[0.08] via-ink-card to-ink-card px-5 py-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-7 sm:py-8"
      >
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-gold/5 blur-2xl"
          aria-hidden="true"
        />

        <h2 className="relative font-display text-xl font-semibold text-gold-light sm:text-2xl">
          Ready to Take the Next Step?
        </h2>

        <div
          className="relative mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent sm:mt-4 sm:w-20"
          aria-hidden="true"
        />

        <p className="relative mx-auto mt-4 max-w-sm text-[13px] font-bold leading-relaxed text-cream/80 sm:mt-5 sm:text-sm sm:leading-relaxed">
          If our approach aligns with your goals, apply for a complimentary discovery session with
          our team.
        </p>

        <div className="relative mt-5 sm:mt-6">
          <ApplyButton />
        </div>
      </div>
    </section>
  )
}
