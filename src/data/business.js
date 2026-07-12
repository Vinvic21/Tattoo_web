export const BUSINESS = {
  name: 'Body Gallery',
  fullName: 'Body Gallery Tattoos',
  tagline: 'Tattoo & Piercing Studio',
  established: 1996,
  rating: 4.9,
  reviewCount: 323,
  address: '1315 Franklin St, Michigan City, IN 46360, United States',
  phoneDisplay: '(219) 874-3912',
  phoneTel: '+12198743912',
  whatsappNumber: '+254743221529',
  whatsappMessage:
    "Hey Body Gallery! I'd like to inquire about getting a tattoo/piercing.",
  mapsEmbedSrc:
    'https://www.google.com/maps?q=1315+Franklin+St,+Michigan+City,+IN+46360&output=embed',
  mapsLinkSrc:
    'https://www.google.com/maps/search/?api=1&query=1315+Franklin+St+Michigan+City+IN+46360',
  facebookUrl: 'https://www.facebook.com/bodygallerytattoos/',
  instagramUrl: 'https://www.instagram.com/bgtattoos96/',
}

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
  BUSINESS.whatsappMessage
)}`

// 0 = Sunday ... 6 = Saturday, hours in 24h local studio time
export const HOURS = [
  { day: 'Sunday', open: null, close: null },
  { day: 'Monday', open: null, close: null },
  { day: 'Tuesday', open: 12, close: 20 },
  { day: 'Wednesday', open: 12, close: 20 },
  { day: 'Thursday', open: 12, close: 20 },
  { day: 'Friday', open: 12, close: 20 },
  { day: 'Saturday', open: 12, close: 20 },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]
