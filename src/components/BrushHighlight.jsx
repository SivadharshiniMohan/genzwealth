export default function BrushHighlight({ children }) {
  return (
    <span className="relative inline-block isolate py-0.5">
      <svg
        className="absolute -left-3 -right-3 top-1/2 h-[160%] w-[calc(100%+24px)] -translate-y-1/2"
        viewBox="0 0 300 44"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#D4A853"
          fillOpacity="0.48"
          d="M32,12 C26,12 20,13 16,16 C12,19 10,23 11,27 C12,31 16,34 22,34 L278,34 C284,34 288,31 289,27 C290,23 288,19 284,16 C280,13 274,12 268,12 Z"
        />
        <circle cx="14" cy="17" r="2.8" fill="#D4A853" fillOpacity="0.38" />
        <circle cx="8" cy="22" r="2" fill="#D4A853" fillOpacity="0.32" />
        <circle cx="18" cy="29" r="1.5" fill="#D4A853" fillOpacity="0.28" />
        <circle cx="5" cy="19" r="1.2" fill="#D4A853" fillOpacity="0.22" />
        <circle cx="11" cy="26" r="0.9" fill="#D4A853" fillOpacity="0.2" />
        <circle cx="286" cy="16" r="2.8" fill="#D4A853" fillOpacity="0.38" />
        <circle cx="292" cy="23" r="2" fill="#D4A853" fillOpacity="0.32" />
        <circle cx="282" cy="28" r="1.5" fill="#D4A853" fillOpacity="0.28" />
        <circle cx="295" cy="20" r="1.2" fill="#D4A853" fillOpacity="0.22" />
        <circle cx="289" cy="27" r="0.9" fill="#D4A853" fillOpacity="0.2" />
      </svg>
      <span className="relative z-10 px-2 font-semibold tracking-tight text-cream sm:px-3">
        {children}
      </span>
    </span>
  )
}
