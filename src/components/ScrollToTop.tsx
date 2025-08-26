// src/components/ScrollToTop.tsx

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  // Mengambil informasi path URL saat ini
  const { pathname } = useLocation()

  // Menjalankan efek setiap kali 'pathname' berubah
  useEffect(() => {
    // Menggulir jendela browser ke posisi paling atas (0, 0)
    window.scrollTo(0, 0)
  }, [pathname]) // <-- Efek ini akan aktif setiap kali URL berganti

  // Komponen ini tidak merender apa-apa, hanya menjalankan logika
  return null
}

export default ScrollToTop
