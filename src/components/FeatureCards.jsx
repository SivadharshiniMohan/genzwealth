import { MapPinned, LineChart, BadgeCheck, UsersRound } from 'lucide-react'

const benefits = [
  { icon: MapPinned, label: 'Clear Wealth Roadmap', accent: 'from-amber-500/20 to-gold/5' },
  { icon: LineChart, label: 'A Structured Wealth Framework', accent: 'from-gold/20 to-amber-600/5' },
  { icon: BadgeCheck, label: 'Expert Guidance', accent: 'from-gold-light/20 to-gold/5' },
  { icon: UsersRound, label: 'A Community That Thinks Long-Term', accent: 'from-gold-dim/20 to-gold/5' },
]

function BenefitIcon({ icon: Icon }) {
  return (
    <div className="relative mx-auto">
      <div
        className="absolute inset-0 rounded-full bg-gold/20 blur-md"
        aria-hidden="true"
      />
      <div
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/25 to-gold/5 shadow-[0_0_20px_rgba(212,168,83,0.25)] sm:h-11 sm:w-11"
      >
        <Icon className="h-[18px] w-[18px] text-gold-pale sm:h-5 sm:w-5" strokeWidth={1.75} />
      </div>
    </div>
  )
}

export default function FeatureCards() {
  return (
    <section className="mt-4 grid grid-cols-4 gap-2 sm:mt-5 sm:gap-2.5">
      {benefits.map(({ icon, label, accent }) => (
        <div
          key={label}
          className={`group relative flex min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-gold/25 bg-gradient-to-b ${accent} px-1 py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-gold-sm sm:gap-2.5 sm:px-1.5 sm:py-4`}
        >
          <BenefitIcon icon={icon} />
          <span className="text-center text-[8.5px] font-semibold leading-tight text-cream sm:text-[10px] lg:text-[11px]">
            {label}
          </span>
        </div>
      ))}
    </section>
  )
}
