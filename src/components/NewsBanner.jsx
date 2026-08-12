export default function NewsBanner() {
  return (
    <div className="relative inline-block w-full sm:w-auto">
      <div className="relative inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3">
        <span
          className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-[#7a5c18] via-gold-dim to-gold shadow-[0_4px_14px_rgba(0,0,0,0.45)]"
          aria-hidden="true"
        />
        <span className="relative text-sm font-semibold text-cream sm:text-base">
          Watch Before You Apply
        </span>
      </div>
    </div>
  )
}
