import { motion } from 'framer-motion'
import { Star, MapPin, MessageCircle } from 'lucide-react'
import { BUSINESS, WHATSAPP_URL } from '../data/business'
import heroImage from '../assets/studio-interior.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24 pb-20"
    >
      {/* Photo background with legibility overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Inside the Body Gallery tattoo studio, exposed brick walls lined with framed flash art"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/78 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/30" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber text-amber" />
                ))}
              </span>
              <span className="text-sm font-medium text-white/90">
                {BUSINESS.rating} · {BUSINESS.reviewCount} reviews
              </span>
            </span>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              Est. {BUSINESS.established}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-[var(--font-display)] text-5xl uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Premium Tattoos
            <span className="block text-crimson">&amp; Piercings</span>
            in Michigan City
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/80"
          >
            Custom artwork, flash pieces, and precision piercings from a studio
            trusted with a <span className="font-semibold text-white">4.9-star reputation</span>{' '}
            across {BUSINESS.reviewCount} reviews. Walk-ins welcome, appointments preferred.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_var(--color-crimson-glow)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Book Your Session
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <MapPin className="h-5 w-5" />
              1315 Franklin St
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm items-center justify-center rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm lg:flex"
        >
          <div className="relative flex flex-col items-center gap-3 px-8 text-center">
            <span className="font-[var(--font-stamp)] text-3xl text-amber rotate-[-4deg]">
              est. clean work
            </span>
            <p className="text-sm text-white/75">
              A private-lot studio on Franklin St. — sterile setup, licensed
              artists, walk-ins welcome.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}