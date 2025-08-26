import React from "react"
import { motion } from "framer-motion"
import Atraktif1 from "../assets/atraksi-1.jpg"
import Atraktif2 from "../assets/atraksi-2.jpg"
import Atraktif3 from "../assets/atraksi-3.jpg"

const attractions = [
  {
    image: Atraktif1,
    title: "Spot Foto Dermaga",
    description:
      "Abadikan momen tak terlupakan dengan latar belakang Waduk Wadaslintang yang megah.",
  },
  {
    image: Atraktif2,
    title: "Area Piknik, Bersantai, & Camping",
    description: "Nikmati suasana tenang dan udara sejuk bersama keluarga dan teman di tepi waduk.",
  },
  {
    image: Atraktif3,
    title: "Aktivitas Memancing",
    description:
      "Uji keberuntungan Anda dan dapatkan ikan segar langsung dari waduk yang kaya akan ikan.",
  },
]

const AttractionsSection: React.FC = () => {
  // Fungsi untuk menentukan animasi awal berdasarkan posisi kartu
  const getInitialAnimation = (index: number) => {
    if (index === 0) {
      return { opacity: 0, x: -100 }
    } else if (index === 1) {
      return { opacity: 0, y: 50 }
    } else {
      return { opacity: 0, x: 100 }
    }
  }

  return (
    <section id="daya-tarik" className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold font-montserrat text-forest-green">Daya Tarik Utama</h2>
          <p className="text-lg mt-2 text-wood-brown">
            Beberapa hal yang tidak boleh Anda lewatkan saat berkunjung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-sandy-beige rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              initial={getInitialAnimation(index)}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: index * 0.1 }}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-montserrat text-forest-green mb-2">
                  {item.title}
                </h3>
                <p className="text-wood-brown">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AttractionsSection
