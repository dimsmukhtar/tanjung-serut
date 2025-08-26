import React, { useState } from "react"
import ModalVideo from "react-modal-video"
import { motion } from "framer-motion"
import { FaPlay } from "react-icons/fa"
import Thumbnail from "../assets/video-thumbnail.png"

const VideoSection: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <section className="py-20 bg-sandy-beige overflow-x-hidden">
      {" "}
      {/* Tambahkan overflow-x-hidden */}
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

        {/* Video Player Area */}
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
      {/* The Modal Video Player */}
      <ModalVideo
        channel="youtube"
        youtube={{ autoplay: 1 }}
        isOpen={isOpen}
        videoId="YcHzPRZOmxQ" // <-- Ganti dengan ID video YouTube Anda
        onClose={() => setOpen(false)}
      />
    </section>
  )
}

export default VideoSection
