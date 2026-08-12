function ShieldLogo() {
  return (
    <svg
      className="h-6 w-6 sm:h-7 sm:w-7"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 2L4 6.5V13.5C4 19.5 8.5 24.5 14 26C19.5 24.5 24 19.5 24 13.5V6.5L14 2Z"
        stroke="#D4A853"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M14 8V18M10 12H18"
        stroke="#D4A853"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Navbar() {
  return (
    <nav className="flex items-center justify-start py-4 sm:py-5">
      <div className="flex items-center gap-2.5">
        <ShieldLogo />
        <span className="text-[15px] font-semibold tracking-tight sm:text-base">
          <span className="text-gold">GenZ</span>
          <span className="text-cream"> Wealth</span>
        </span>
      </div>
    </nav>
  )
}
