import React from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { FaQuoteLeft } from "react-icons/fa"

const testimonials = [
  {
    quote:
      "Tempatnya benar-benar menenangkan, sempurna untuk lari dari hiruk pikuk kota. Pemandangan waduknya luar biasa!",
    name: "Dimas Mukhtar",
    origin: "Pengunjung dari Banjarnegara",
  },
  {
    quote:
      "Anak-anak suka sekali memancing di sini. Udaranya sejuk dan warganya ramah. Pasti akan kembali lagi.",
    name: "Siti Fatimah",
    origin: "Pengunjung dari Temanggung",
  },
  {
    quote:
      "Sebagai pemerintah desa, kami bangga dan berterima kasih atas revitalisasi tempat seindah ini. Potensinya sangat besar!",
    name: "Kepala Desa Sumbersari",
    origin: "Pemerintah Desa",
  },
]

const TestimonialsSection: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold font-montserrat text-forest-green">Kata Mereka</h2>
          <p className="text-lg mt-2 text-wood-brown">
            Kesan dan cerita dari mereka yang telah berkunjung.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={false}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="max-w-3xl mx-auto pb-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-sandy-beige p-8 rounded-xl shadow-lg text-center relative">
                  <FaQuoteLeft className="absolute top-6 left-6 text-5xl text-forest-green/10" />
                  <p className="text-wood-brown italic text-lg leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                  <p className="font-bold font-montserrat text-forest-green text-xl">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.origin}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
