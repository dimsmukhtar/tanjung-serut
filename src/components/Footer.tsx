import React from "react"
import { FaInstagram, FaTiktok } from "react-icons/fa"
import { Link } from "react-router-dom" // <-- 1. Impor komponen Link

const Footer: React.FC = () => {
  return (
    <footer className="bg-sandy-beige text-sandy-beige pt-20">
      <div className="relative bg-forest-green">
        {/* SVG Shape Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[75px]"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-forest-green"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-8 py-16">
          {/* Kolom 1: Tentang */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Tanjung Serut</h3>
            <p className="text-sm">
              Sebuah surga tersembunyi di Desa Sumbersari yang menawarkan ketenangan dan keindahan
              Waduk Wadaslintang.
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Tautan</h3>
            <ul className="space-y-2">
              {/* --- PERBAIKAN DI SINI --- */}
              <li>
                <Link to="/#daya-tarik" className="hover:text-sunset-orange transition-colors">
                  Daya Tarik
                </Link>
              </li>
              <li>
                <Link to="/#info-kunjungan" className="hover:text-sunset-orange transition-colors">
                  Info Kunjungan
                </Link>
              </li>
              <li>
                <Link to="/#galeri" className="hover:text-sunset-orange transition-colors">
                  Galeri
                </Link>
              </li>
              {/* --- SAMPAI SINI --- */}
            </ul>
          </div>

          {/* Kolom 3: Media Sosial */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Ikuti Kami</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/kpmsumbersari02/"
                aria-label="Instagram"
                className="text-2xl hover:text-sunset-orange transform hover:scale-125 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@kpm2sumbersari"
                aria-label="Tiktok"
                className="text-2xl hover:text-sunset-orange transform hover:scale-125 transition-transform"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-sandy-beige/30 py-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Dibuat dengan ❤️ oleh Tim 02 KPM UNSIQ 51 Desa
            Sumbersari
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
