import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Lightbox, { type Slide } from "yet-another-react-lightbox"
import Video from "yet-another-react-lightbox/plugins/video"
import { FaExpand, FaPlay } from "react-icons/fa"

import { galleryData } from "../assets/galleryData"

interface GalleryItem {
  type: "image" | "video"
  src: string
}

const STATIC_VIDEO_THUMBNAIL =
  "https://ik.imagekit.io/yxctvbjvh/gallery/video-thumbnail_default.png?updatedAt=1756205069170"

const slides: Slide[] = (galleryData as GalleryItem[]).map((item) => {
  if (item.type === "video") {
    return {
      type: "video",
      sources: [{ src: item.src, type: "video/mp4" }],
      poster: STATIC_VIDEO_THUMBNAIL,
    }
  }
  return { src: item.src }
})

// Komponen baru untuk placeholder saat loading
const SkeletonCard = ({ isLarge = false }: { isLarge?: boolean }) => (
  <div
    className={`bg-gray-300/50 rounded-lg animate-pulse ${isLarge ? "col-span-2 row-span-2" : ""}`}
  ></div>
)

const GallerySection: React.FC = () => {
  const [index, setIndex] = useState(-1)
  // --- 1. Tambahkan state untuk loading ---
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulasi waktu loading, karena data Anda dimuat secara sinkron
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 750) // Jeda 0.75 detik

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="galeri" className="py-20 bg-sandy-beige overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-forest-green">Galeri Momen</h2>
          <p className="text-lg mt-2 text-wood-brown">
            Jelajahi keindahan Tanjung Serut melalui foto dan video.
          </p>
        </div>

        {/* --- 2. Ganti div ini dengan logika loading --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 min-h-[400px]">
          {isLoading ? (
            // Jika sedang loading, tampilkan placeholder
            <>
              <SkeletonCard isLarge={true} />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            // Jika loading selesai, tampilkan galeri dengan animasi
            <motion.div
              className="contents"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              animate="visible"
            >
              {slides.map((slide, i) => (
                <motion.div
                  key={i}
                  className={`relative rounded-lg overflow-hidden cursor-pointer group ${
                    i === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                  onClick={() => setIndex(i)}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <img
                    src={slide.type === "video" ? slide.poster : slide.src}
                    alt={`Galeri ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    {slide.type === "video" ? (
                      <FaPlay className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    ) : (
                      <FaExpand className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Video]}
        styles={{ container: { backgroundColor: "rgba(34, 75, 12, 0.9)" } }}
        animation={{ fade: 300, swipe: 250 }}
      />
    </section>
  )
}

export default GallerySection
