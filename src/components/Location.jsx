import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { BUSINESS, HOURS, WHATSAPP_URL } from '../data/business'
import { useStoreStatus } from '../hooks/useStoreStatus'

export default function Location() {
  const status = useStoreStatus()
  const todayIndex = new Date().getDay()

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div id="location" className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12">
          <span className="font-[var(--font-stamp)] text-amber-dim">find us</span>
          <h2 className="mt-2 font-[var(--font-display)] text-4xl uppercase tracking-tight text-paper sm:text-5xl">
            Visit the Studio
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      status.isOpen ? 'bg-emerald-400' : 'bg-crimson'
                    }`}
                  />
                  <span className="font-semibold text-paper">{status.label}</span>
                </div>
                <span className="text-sm text-muted">{status.detail}</span>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-line bg-surface p-6">
              <a
                href={BUSINESS.mapsLinkSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-paper-dim transition-colors hover:text-paper"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-crimson" />
                <span>{BUSINESS.address}</span>
              </a>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="flex items-center gap-3 text-paper-dim transition-colors hover:text-paper"
              >
                <Phone className="h-5 w-5 shrink-0 text-crimson" />
                <span>{BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-paper-dim transition-colors hover:text-paper"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-crimson" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-crimson" />
                <h3 className="font-semibold text-paper">Hours</h3>
              </div>
              <ul className="divide-y divide-line">
                {HOURS.map((h, i) => (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between py-2.5 text-sm ${
                      i === todayIndex ? 'text-paper' : 'text-muted'
                    }`}
                  >
                    <span className={i === todayIndex ? 'font-semibold' : ''}>{h.day}</span>
                    <span className={i === todayIndex ? 'font-semibold' : ''}>
                      {h.open === null
                        ? 'Closed'
                        : `${formatHour(h.open)} – ${formatHour(h.close)}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-line"
          >
            <iframe
              title="Body Gallery location map"
              src={BUSINESS.mapsEmbedSrc}
              className="h-[420px] w-full grayscale-[35%] contrast-[1.05] lg:h-full lg:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function formatHour(hour) {
  const h = Math.floor(hour)
  const suffix = h >= 12 ? 'PM' : 'AM'
  const display = h % 12 === 0 ? 12 : h % 12
  return `${display}:00 ${suffix}`
}
