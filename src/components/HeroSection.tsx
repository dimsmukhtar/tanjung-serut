import React from "react"
import { motion } from "framer-motion"
import { FaArrowDown } from "react-icons/fa"
import BackgroundImage from "../assets/hero-background.jpg"

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center ken-burns-background"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-4 drop-shadow-lg"
        >
          Temukan Ketenangan di Tanjung Serut
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl mx-auto font-nunito mb-8 drop-shadow-md"
        >
          Nikmati pemandangan Waduk Wadaslintang yang memukau dari spot terbaik di Desa Sumbersari.
        </motion.p>

        <motion.a
          href="#daya-tarik"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-sunset-orange text-white font-bold py-3 px-8 rounded-full 
                     text-lg transform transition-all duration-300 shadow-lg"
        >
          Jelajahi Sekarang
        </motion.a>

        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaArrowDown size={24} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection
