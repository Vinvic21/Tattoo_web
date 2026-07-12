import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchServices } from '../data/services'
import ServiceCard from './ServiceCard'
import ServiceSkeleton from './ServiceSkeleton'

const TABS = ['All', 'Tattoo', 'Piercing']

export default function Services() {
  const [services, setServices] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'error' | 'ready'
  const [activeTab, setActiveTab] = useState('All')

  useEffect(() => {
    let cancelled = false

    async function loadServices() {
      setStatus('loading')
      try {
        const data = await fetchServices()
        if (!cancelled) {
          setServices(data)
          setStatus('ready')
        }
      } catch {
        if (!cancelled) setStatus('error')
      }
    }

    loadServices()
    return () => {
      cancelled = true
    }
  }, [])

  const visibleServices =
    activeTab === 'All' ? services : services.filter((s) => s.category === activeTab)

  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-[var(--font-stamp)] text-amber-dim">what we do</span>
            <h2 className="mt-2 font-[var(--font-display)] text-4xl uppercase tracking-tight text-paper sm:text-5xl">
              Services
            </h2>
          </div>

          <div className="flex gap-2 self-start rounded-full border border-line bg-surface p-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-crimson text-white'
                    : 'text-paper-dim hover:text-paper'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {status === 'error' && (
          <p className="rounded-xl border border-line bg-surface p-6 text-center text-muted">
            We couldn't load the service list right now. Please reach out on WhatsApp and
            we'll walk you through it.
          </p>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {status === 'loading' &&
            Array.from({ length: 8 }).map((_, i) => <ServiceSkeleton key={i} />)}

          {status === 'ready' &&
            visibleServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
        </div>

        {status === 'ready' && visibleServices.length === 0 && (
          <p className="mt-6 text-center text-muted">No services in this category yet.</p>
        )}
      </div>
    </section>
  )
}
