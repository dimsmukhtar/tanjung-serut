import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import { Link, useLocation } from "react-router-dom"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation() // Hook untuk mendapatkan info halaman saat ini

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Daya Tarik", href: "/#daya-tarik" },
    { name: "Galeri", href: "/#galeri" },
    { name: "Info Kunjungan", href: "/#info-kunjungan" },
    { name: "Tim Kami", href: "/our-team" },
  ]

  // --- LOGIKA BARU DI SINI ---
  // Cek apakah kita sedang di Halaman Beranda
  const isHomePage = location.pathname === "/"
  // Tentukan apakah navbar harus transparan
  const isTransparent = isHomePage && !isScrolled

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // Class akan berubah berdasarkan kondisi isTransparent
      className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : "bg-forest-green/80 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center text-white">
        <Link to="/" className="text-2xl font-bold font-montserrat">
          Tanjung Serut
        </Link>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name} className="group">
              <Link
                to={link.href}
                className="hover:text-sunset-orange transition-colors duration-300"
              >
                {link.name}
              </Link>
              <div className="h-0.5 bg-sunset-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            // ... (sisa kode animasi mobile menu tetap sama)
            variants={{
              hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
              visible: { opacity: 1, y: 0, transition: { duration: 0.2, staggerChildren: 0.05 } },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col bg-forest-green/95 p-2 rounded-lg shadow-xl">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <Link
                    to={link.href}
                    className="block w-full text-center text-white rounded-md py-3 hover:bg-white/10 hover:text-sunset-orange transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
