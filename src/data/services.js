const SERVICES = [
  {
    id: 'custom-artwork',
    category: 'Tattoo',
    name: 'Custom Artwork',
    description:
      'One-on-one design sessions with our artists to build a piece that is entirely yours, from concept sketch to final line work.',
    featured: true,
  },
  {
    id: 'flash-art',
    category: 'Tattoo',
    name: 'Flash Art',
    description:
      'Walk-in-friendly designs ready to ink today. Browse the wall, pick your favorite, and get seated the same visit.',
  },
  {
    id: 'cover-ups',
    category: 'Tattoo',
    name: 'Cover-Ups',
    description:
      'Old tattoo not aging well? Our artists specialize in reworking existing pieces into something you will love again.',
  },
  {
    id: 'matching-tattoos',
    category: 'Tattoo',
    name: 'Matching & Family Tattoos',
    description:
      'Coordinated designs for couples, friends, and family, scheduled together so everyone leaves with matching ink.',
  },
  {
    id: 'septum',
    category: 'Piercing',
    name: 'Septum Piercing',
    description:
      'Our most requested piercing. Precise placement and aftercare guidance from a piercer clients specifically ask for by name.',
    featured: true,
    badge: 'Highly rated',
  },
  {
    id: 'daith',
    category: 'Piercing',
    name: 'Daith Piercing',
    description:
      'Detailed inner-ear work performed with a steady hand and a calm, patient approach for first-timers and regulars alike.',
  },
  {
    id: 'nose',
    category: 'Piercing',
    name: 'Nose Piercing',
    description:
      'Classic nostril piercing with a wide selection of implant-grade jewelry to match your style from day one.',
  },
  {
    id: 'belly-button',
    category: 'Piercing',
    name: 'Belly Button Piercing',
    description:
      'A studio favorite, done with careful placement to complement your body and heal cleanly.',
  },
]

/**
 * Simulates fetching the services catalog from a remote API.
 * @returns {Promise<typeof SERVICES>}
 */
export function fetchServices() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(SERVICES), 900)
  })
}
