import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-colors ${
        service.featured
          ? 'border-crimson/40 bg-gradient-to-br from-surface-raised to-surface'
          : 'border-line bg-surface hover:border-line-strong'
      }`}
    >
      <div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">
            {service.category}
          </span>
          {service.badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber/15 px-2.5 py-1 text-[11px] font-semibold text-amber-dim">
              <Sparkles className="h-3 w-3" />
              {service.badge}
            </span>
          )}
        </div>
        <h3 className="font-[var(--font-display)] text-2xl uppercase tracking-tight text-paper">
          {service.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
      </div>
      <div
        className={`mt-6 h-px w-full origin-left scale-x-0 bg-crimson transition-transform duration-300 group-hover:scale-x-100`}
      />
    </motion.div>
  )
}
