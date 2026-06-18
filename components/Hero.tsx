'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fff8] flex items-center">

      {/* BLUR BACKGROUND */}
      <div className="absolute top-20 left-6 w-56 h-56 sm:w-72 sm:h-72 bg-green-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-lime-200 rounded-full blur-3xl opacity-30"></div>

      <div className="section-container grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 items-center pt-32 relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >

          <div className="inline-flex items-center gap-2 bg-white shadow-lg px-4 py-2 rounded-full mb-8">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-sm font-medium text-green-700">Fresh Hydroponic Lettuce</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black leading-tight text-gray-900">
            Fresh
            <span className="block text-green-600">Healthy</span>
            <span className="block">Organic</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-8 max-w-xl">
            OmahSelada menghadirkan sayur selada hidroponik premium yang segar, higienis, dan sehat langsung dari kebun untuk kebutuhan rumah maupun bisnis kuliner.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
            <a
              https://wa.me/6285895341572?text=Halo%20OmahSelada%20🌱%0A%0ASaya%20tertarik%20untuk%20membeli%20produk%20selada%20hidroponik.%0A%0ABerikut%20detail%20pesanan%20saya:%0A%0ANama%20:%0AAlamat%20:%0AProduk%20:%0AJumlah%20:%0A%0AMohon%20informasi%20mengenai%20harga%20dan%20ketersediaannya.%0A%0ATerima%20kasih%20🙏
  "
              className="bg-green-600 hover:bg-green-700 transition-all duration-300 text-white px-6 sm:px-8 py-4 rounded-full shadow-2xl hover:scale-105 text-center"
            >
              Order Sekarang
            </a>
            <a
              href="#products"
              className="bg-white shadow-lg px-6 sm:px-8 py-4 rounded-full hover:scale-105 transition text-center"
            >
              Explore Produk
            </a>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap justify-between gap-6 mt-16">
            <div className="min-w-[120px]">
              <h3 className="text-4xl sm:text-5xl font-bold text-green-700">100+</h3>
              <p className="text-gray-600">Pelanggan</p>
            </div>
            <div className="min-w-[120px]">
              <h3 className="text-4xl sm:text-5xl font-bold text-green-700">Fresh</h3>
              <p className="text-gray-600">Panen Harian</p>
            </div>
            <div className="min-w-[120px]">
              <h3 className="text-4xl sm:text-5xl font-bold text-green-700">Premium</h3>
              <p className="text-gray-600">Quality</p>
            </div>
          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-[700px] mx-auto"
        >

          <div className="absolute inset-0 bg-green-300 rounded-[40px] blur-3xl opacity-20"></div>

          <Image
            src="/Hero1.jpg"
            alt="hero"
            width={700}
            height={700}
            className="relative z-10 rounded-[40px] shadow-2xl hover:scale-105 transition duration-700 w-full h-auto object-cover"
          />

          {/* FLOATING CARD */}
          <div className="absolute left-0 sm:-left-8 bottom-0 sm:-bottom-8 bg-white shadow-2xl rounded-3xl px-5 py-4 sm:px-6 sm:py-5 z-20">
            <h3 className="text-3xl sm:text-4xl font-bold text-green-700">100%</h3>
            <p className="text-gray-600">Organic Fresh</p>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
