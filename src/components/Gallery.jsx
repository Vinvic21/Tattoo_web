import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { InstagramIcon } from './BrandIcons'
import { BUSINESS } from '../data/business'
import workWolf from '../assets/work-wolf-leg.jpg'
import workTrick from '../assets/work-trick-arm.jpg'
import workElephant from '../assets/work-elephant-arm.jpg'
import workMask from '../assets/work-mask-shoulder.jpg'
import storefront from '../assets/storefront-night.jpg'
import mural from '../assets/mural-logo.jpg'

const PIECES = [
  { src: workMask, alt: 'Comedy mask tattoo in red and black on shoulder', span: 'sm:row-span-2' },
  { src: workWolf, alt: 'Howling wolf and volcano black and grey tattoo on calf' },
  { src: mural, alt: 'Body Gallery Tattoos hand-painted brick mural, established 1996' },
  { src: workTrick, alt: 'Trick-or-treat sack character tattoo in color on forearm' },
  { src: workElephant, alt: 'Elephant hand tattoo in progress, black and grey linework' },
  { src: storefront, alt: 'Body Gallery Tattoos storefront lit up at night', span: 'sm:row-span-2' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-[var(--font-stamp)] text-amber-dim">the work &amp; the shop</span>
            <h2 className="mt-2 font-[var(--font-display)] text-4xl uppercase tracking-tight text-paper sm:text-5xl">
              Gallery
            </h2>
          </div>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-crimson hover:text-crimson"
          >
            <InstagramIcon className="h-4 w-4" />
            More on Instagram
          </a>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-3">
          {PIECES.map((piece, i) => (
            <motion.button
              key={piece.src}
              type="button"
              onClick={() => setActive(piece)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-line text-left ${piece.span ?? ''}`}
            >
              <img
                src={piece.src}
                alt={piece.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-5"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={active.src}
              alt={active.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
