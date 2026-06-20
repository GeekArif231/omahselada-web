import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Gallery from '@/components/Gallery'
// import Testimonial from '@/components/Testimonial'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Location from '@/components/location'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      {/* <Testimonial /> */}
      <Contact />
      <Location />
      <Footer />
      <a
        href="https://wa.me/6285895341572"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 text-2xl"
      >
        💬
      </a>
    </main>
  )
}