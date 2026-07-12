import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Users } from 'lucide-react'
import { BUSINESS } from '../data/business'
import StatCounter from './StatCounter'
import muralImage from '../assets/mural-logo.jpg'

const YEARS = new Date().getFullYear() - BUSINESS.established

const POINTS = [
  {
    Icon: ShieldCheck,
    title: 'Clean & sterile',
    text: 'Single-use needles, hospital-grade sterilization, and a setup you can see for yourself when you walk in.',
  },
  {
    Icon: Sparkles,
    title: 'Bright & bold',
    text: 'From fine-line minimalism to full-color traditional work, our artists move fluidly across styles.',
  },
  {
    Icon: Users,
    title: 'Walk-ins welcome',
    text: 'No appointment, no problem. Cash accepted, and consultations are always free.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-line"
          >
            <img
              src={muralImage}
              alt="Body Gallery Tattoos hand-painted mural on the studio's exterior brick wall, established 1996"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-[var(--font-stamp)] text-amber-dim">our story</span>
            <h2 className="mt-2 font-[var(--font-display)] text-4xl uppercase tracking-tight text-paper sm:text-5xl">
              {YEARS} Years on Franklin Street
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Since {BUSINESS.established}, Body Gallery has been Michigan City's home for
              custom tattoos and precision piercings. What started as a single chair on
              Franklin St. has grown into a full studio, without losing the walk-in,
              come-as-you-are attitude that got us here.
            </p>

            <div className="mt-8 space-y-5">
              {POINTS.map(({ Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-paper">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 bg-charcoal py-14">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-5 sm:grid-cols-4 sm:px-8">
          <StatCounter value={YEARS} suffix="+" label="Years running" />
          <StatCounter value={BUSINESS.rating} decimals={1} label="Google rating" />
          <StatCounter value={BUSINESS.reviewCount} suffix="+" label="Reviews" />
          <StatCounter value={100} suffix="%" label="Licensed artists" />
        </div>
      </div>
    </section>
  )
}
