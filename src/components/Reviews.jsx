import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { REVIEWS } from '../data/reviews'
import { BUSINESS } from '../data/business'

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <span className="font-[var(--font-stamp)] text-amber-dim">what clients say</span>
          <h2 className="mt-2 font-[var(--font-display)] text-4xl uppercase tracking-tight text-paper sm:text-5xl">
            Reviews
          </h2>
          <div className="mt-5 inline-flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber text-amber" />
              ))}
            </div>
            <span className="text-paper-dim">
              {BUSINESS.rating} rating from {BUSINESS.reviewCount} Google reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <motion.figure
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-line bg-ink-soft p-7"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-crimson/25" />
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber text-amber" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-paper">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-2 text-sm text-muted">
                <span className="font-semibold text-paper-dim">{review.author}</span>
                <span aria-hidden="true">·</span>
                <span>{review.service}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
