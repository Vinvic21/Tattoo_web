import { MessageCircle } from 'lucide-react'
import { BUSINESS, WHATSAPP_URL } from '../data/business'
import { InstagramIcon, FacebookIcon } from './BrandIcons'

const LINKS = [
  { label: 'WhatsApp', href: WHATSAPP_URL, Icon: MessageCircle, hoverColor: '#25D366' },
  { label: 'Instagram', href: BUSINESS.instagramUrl, Icon: InstagramIcon, hoverColor: '#d92b6e' },
  { label: 'Facebook', href: BUSINESS.facebookUrl, Icon: FacebookIcon, hoverColor: '#1877F2' },
]

export default function SocialLinks({ className = '', iconClassName = 'h-4.5 w-4.5', variant = 'light' }) {
  const borderClass = variant === 'dark' ? 'border-white/15' : 'border-line'
  const textClass = variant === 'dark' ? 'text-white/70' : 'text-paper-dim'

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {LINKS.map(({ label, href, Icon, hoverColor }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`group flex h-9 w-9 items-center justify-center rounded-full border ${borderClass} ${textClass} transition-all hover:-translate-y-0.5 hover:border-transparent hover:text-white`}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <Icon className={iconClassName} strokeWidth={2} />
        </a>
      ))}
    </div>
  )
}
