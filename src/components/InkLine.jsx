import { motion } from 'framer-motion'

/**
 * A single continuous line, drawn like a tattoo machine pass, that
 * animates in when scrolled into view. Used as the page's signature
 * device to separate sections without a plain <hr>.
 */
export default function InkLine({ flip = false, className = '' }) {
  return (
    <div className={`relative h-10 w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className={`h-full w-full ${flip ? 'scale-y-[-1]' : ''}`}
      >
        <motion.path
          d="M0 20 C 150 5, 300 35, 450 20 S 750 5, 900 20 S 1100 35, 1200 18"
          fill="none"
          stroke="var(--color-crimson)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}
