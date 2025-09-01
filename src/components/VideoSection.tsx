import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaPlay } from "react-icons/fa"
import { HiX } from "react-icons/hi"
import Thumbnail from "../assets/video-thumbnail.png"

const VideoSection: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  // Ganti dengan ID video YouTube Anda
  const YOUTUBE_VIDEO_ID = "h5cClzYR3Ss"

  return (
    <section className="py-20 bg-sandy-beige overflow-x-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-forest-green">
            Pesona Tanjung Serut
          </h2>
          <p className="text-lg mt-2 text-wood-brown">
            Lihat lebih dekat keindahan dan suasana desa kami melalui video profil ini.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl cursor-pointer group"
          onClick={() => setOpen(true)}
        >
          <img src={Thumbnail} alt="Video Thumbnail Tanjung Serut" className="w-full h-auto" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/30 backdrop-blur-sm p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
              <FaPlay className="text-white text-4xl" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- KODE MODAL VIDEO BARU YANG DIJAMIN BERHASIL --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)} // Menutup modal saat klik di background
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat klik video
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 z-10 hover:scale-110 transition-transform"
                aria-label="Tutup video"
              >
                <HiX className="text-forest-green text-2xl" />
              </button>
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default VideoSection
