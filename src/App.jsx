import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import InkLine from './components/InkLine'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <InkLine className="max-w-6xl mx-auto px-5 sm:px-8" />
        <Services />
        <Gallery />
        <Reviews />
        <InkLine flip className="max-w-6xl mx-auto px-5 sm:px-8" />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
