"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="section-container mt-5">
        <div
          className="
            backdrop-blur-xl
            bg-white/60
            border
            border-white/20
            shadow-[0_8px_30px_rgb(0,0,0,0.08)]
            rounded-3xl
            px-5
            py-4
            flex
            items-center
            justify-between
          "
        >
          {/* LOGO */}

          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-black text-green-700">
                OmahSelada
              </h1>

              <p className="text-[10px] md:text-xs text-gray-500">
                Fresh Hydroponic Farm
              </p>
            </div>
          </div>

          {/* MENU DESKTOP */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-10
              text-gray-700
              font-medium
            "
          >
            <Link href="#about" className="hover:text-green-600 transition">
              Tentang
            </Link>

            <Link href="#products" className="hover:text-green-600 transition">
              Produk
            </Link>

            <Link href="#gallery" className="hover:text-green-600 transition">
              Galeri
            </Link>

            <Link href="#contact" className="hover:text-green-600 transition">
              Kontak
            </Link>
            <a
              href="https://www.instagram.com/omahselada/"
              target="_blank"
              className="
    hover:text-green-600
    transition
  "
            >
              Instagram
            </a>
          </div>

          {/* BUTTON DESKTOP */}

          <a
            href="
  https://wa.me/6285895341572?text=Halo%20OmahSelada%20🌱%0A%0ASaya%20tertarik%20untuk%20membeli%20produk%20selada%20hidroponik.%0A%0ABerikut%20detail%20pesanan%20saya:%0A%0ANama%20:%0AAlamat%20:%0AProduk%20:%0AJumlah%20:%0A%0AMohon%20informasi%20mengenai%20harga%20dan%20ketersediaannya.%0A%0ATerima%20kasih%20🙏
  "
            target="_blank"
            className="
              hidden
              md:flex
              bg-green-600
              hover:bg-green-700
              hover:scale-105
              transition-all
              duration-300
              text-white
              px-6
              py-3
              rounded-full
              shadow-lg
              font-medium
            "
          >
            Order Sekarang
          </a>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              text-3xl
              text-green-700
            "
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <div
            className="
              md:hidden
              mt-4
              backdrop-blur-xl
              bg-white/70
              rounded-3xl
              shadow-xl
              p-6
              flex
              flex-col
              gap-5
              text-gray-700
              font-medium
            "
          >
            <Link href="#about" onClick={() => setMenuOpen(false)}>
              Tentang
            </Link>

            <Link href="#products" onClick={() => setMenuOpen(false)}>
              Produk
            </Link>

            <Link href="#gallery" onClick={() => setMenuOpen(false)}>
              Galeri
            </Link>

            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              Kontak
            </Link>

            <a
              href="https://www.instagram.com/omahselada/"
              target="_blank"
              className="
                hover:text-green-600
                transition
              "
            >
              Instagram
            </a>

            <a
              href="https://wa.me/6285895341572?text=Halo%20OmahSelada%20🌱%20Saya%20ingin%20memesan%20produk%20selada."
              target="_blank"
              className="
                bg-green-600
                text-white
                py-4
                rounded-full
                text-center
                mt-2
              "
            >
              Order Sekarang
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
