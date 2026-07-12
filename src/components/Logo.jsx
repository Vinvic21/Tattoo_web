export default function Logo({ size = 26, showText = true, dark = false }) {
  const textColor = dark ? '#fbf9f5' : 'var(--color-paper)'
  return (
    <div className="flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
        <path
          d="M20 4l3.2 6.4L28 6l1 8.5L34 12l-2 8.5L36 24l-6 2.5L28 34l-8-3-8 3-2-7.5-6-2.5 4-3.5-2-8.5 4.8 2.5L12 10.4z"
          fill="none"
          stroke="var(--color-amber)"
          strokeWidth="1.2"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          d="M8 22 L20 34 L32 22"
          fill="none"
          stroke="var(--color-crimson)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span
          className="font-[var(--font-display)] text-lg uppercase leading-none tracking-wide"
          style={{ color: textColor }}
        >
          Body Gallery
        </span>
      )}
    </div>
  )
}
