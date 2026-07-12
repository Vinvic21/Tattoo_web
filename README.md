# Body Gallery — Tattoo & Piercing Studio Website

A modern, animated, single-page React site for Body Gallery
(1315 Franklin St, Michigan City, IN), based on their public Google
business profile (4.9 stars, 323 reviews; Tue-Sat 12-8 PM, closed Sun/Mon).

## Stack
- React 19 (hooks: useState, useEffect)
- Vite 8
- Tailwind CSS v4 (via @tailwindcss/vite, tokens defined in src/index.css)
- Framer Motion (scroll reveals, hover/tap micro-interactions, mobile menu)
- lucide-react (icons)

## Design system
- Colors: bright warm paper background (#fbf9f5), dark ink text (#1c1815),
  crimson #d92b2b primary accent, amber #e8952c secondary accent (ratings,
  eyebrows, badges), dark charcoal band (#1a1613) used sparingly for the
  hero overlay, stats band, and footer.
- Type: Oswald (condensed display, headlines), Inter (body), Permanent
  Marker (sparingly, for stamp-style accents like "est. clean work").
- Signature element: InkLine — a hand-drawn SVG line that draws itself in
  on scroll, echoing a tattoo machine's continuous pass, used to divide
  major sections instead of a plain rule.
- Real studio photography (interior, mural, storefront at night, and four
  pieces of client work) is used throughout — as the hero background, an
  About section image, and a lightbox Gallery.

## Structure
src/
  assets/                  real studio + tattoo photos (hero bg, gallery, about)
  data/business.js         business info, hours, social + WhatsApp links (single source of truth)
  data/services.js         mock async "API" (fetchServices) for the services grid
  data/reviews.js          testimonial content
  hooks/useStoreStatus.js  live open/closed status, recalculated every minute
  components/
    Navbar.jsx              sticky nav + animated mobile menu, adapts text color over the photo hero
    Logo.jsx                 brand mark (crown + chevron, matches the studio's real signage)
    Hero.jsx                 photo background, headline, rating + "Est. 1996" badges, CTAs
    About.jsx                 studio story, mural photo, animated stat counters
    StatCounter.jsx           reusable animated number-count-up
    Services.jsx              tab filter + skeleton loading + async fetch
    ServiceCard.jsx / ServiceSkeleton.jsx
    Gallery.jsx                lightbox grid of real studio/work photos
    Reviews.jsx                testimonial grid
    Location.jsx               hours table, live status badge, Google Maps embed
    Footer.jsx
    SocialLinks.jsx            WhatsApp / Instagram / Facebook icon row (light + dark variants)
    BrandIcons.jsx              custom Instagram/Facebook SVGs (not in lucide-react)
    WhatsAppButton.jsx         floating CTA
    InkLine.jsx                 signature animated divider

## Run locally
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build

## Notes
- All WhatsApp links point to https://wa.me/12198743912?text=... (Book Now
  button, floating button, nav CTA, and contact section).
- The Google Maps iframe uses a public embed URL for the studio's address,
  no API key required.
- Hours/status logic lives in useStoreStatus.js and is driven purely by
  data/business.js, so updating hours only requires editing one file.
