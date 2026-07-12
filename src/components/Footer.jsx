import { BUSINESS } from '../data/business'
import Logo from './Logo'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Logo dark />
          <p className="text-sm text-white/50">
            {BUSINESS.address}
          </p>
        </div>

        <SocialLinks variant="dark" />

        <p className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} {BUSINESS.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
