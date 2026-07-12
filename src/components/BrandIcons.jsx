export function InstagramIcon({ className = 'h-4.5 w-4.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon({ className = 'h-4.5 w-4.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M15 8.5h2V5.2c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.79-4.92 5.08V13H6.5v3.6h2.63V22h3.7v-5.4h2.72l.43-3.6h-3.15v-2.5c0-1.04.28-1.75 1.77-1.75z"
        fill="currentColor"
      />
    </svg>
  )
}
