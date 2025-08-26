import React from "react"
import { motion } from "framer-motion"
import { FaInstagram } from "react-icons/fa"

import anggota1 from "../assets/team/anggota-1.png"
import anggota2 from "../assets/team/anggota-2.png"
import anggota3 from "../assets/team/anggota-3.png"
import anggota4 from "../assets/team/anggota-4.png"
import anggota5 from "../assets/team/anggota-5.png"
import anggota6 from "../assets/team/anggota-6.png"
import anggota7 from "../assets/team/anggota-7.png"
import anggota8 from "../assets/team/anggota-8.png"
import anggota9 from "../assets/team/anggota-9.png"
import anggota10 from "../assets/team/anggota-10.png"
import anggota11 from "../assets/team/anggota-11.png"
import anggota12 from "../assets/team/anggota-12.png"
import anggota13 from "../assets/team/anggota-13.png"
import anggota14 from "../assets/team/anggota-14.png"
import anggota15 from "../assets/team/anggota-15.png"

// --- LANGKAH 2: Isi data tim Anda di sini ---
const teamMembers = [
  {
    name: "Maula Sholahudin Arbab",
    role: "Ketua",
    major: "Ilmu Al-Qur'an dan Tafsir",
    imageUrl: anggota1,
    instagram: "https://www.instagram.com/babramaula/",
  },
  {
    name: "Muhammad Abdul Qodir Syauqi Zakka Maula",
    role: "Wakil Ketua",
    major: "Ilmu Al-Qur'an dan Tafsir",
    imageUrl: anggota2,
    instagram: "https://www.instagram.com/syaaauqizm_/",
  },
  {
    name: "Rizky May Khafifah",
    role: "Sekretaris",
    major: "Manajemen",
    imageUrl: anggota3,
    instagram: "https://www.instagram.com/mayyr.r_/",
  },
  {
    name: "Siti Fatimah",
    role: "Sekretaris",
    major: "Pendidikan Agama Islam",
    imageUrl: anggota4,
    instagram: "https://www.instagram.com/fatimah.o6/",
  },
  {
    name: "Kuni Mukaromah",
    role: "Bendahara",
    major: "Manajemen",
    imageUrl: anggota5,
    instagram: "https://www.instagram.com/kuniiimrm/",
  },
  {
    name: "Pradhita Ika Ayuningtyas",
    role: "Bendahara",
    major: "Hukum Ekonomi Syari'ah (Mu'amalah)",
    imageUrl: anggota6,
    instagram: "https://www.instagram.com/pradhitata_/",
  },
  {
    name: "Endah Widi Astuti",
    role: "Logistik",
    major: "Ilmu Hukum",
    imageUrl: anggota7,
    instagram: "https://www.instagram.com/_en.ndah/",
  },
  {
    name: "Zerlinda Aurellia Sahda",
    role: "Logistik",
    major: "Ilmu Hukum",
    imageUrl: anggota8,
    instagram: "https://www.instagram.com/jennaxyy_/",
  },
  {
    name: "Ismah Ulia Wahdah",
    role: "Perkap",
    major: "Keperawatan S1",
    imageUrl: anggota9,
    instagram: "https://www.instagram.com/sza.isna/",
  },
  {
    name: "Dimas Mukhtar Yuliawan",
    role: "Perkap",
    major: "Teknik Informatika",
    imageUrl: anggota10,
    instagram: "https://www.instagram.com/dimsmukhtar._/",
  },
  {
    name: "Alvin Faknie Sugiyanto",
    role: "Perkap",
    major: "Ilmu Politik",
    imageUrl: anggota11,
    instagram: "https://www.instagram.com/alvin_faknie_s/",
  },
  {
    name: "Firdani Dhea Mayzatul Eriyanto",
    role: "Humas",
    major: "Manajemen",
    imageUrl: anggota12,
    instagram: "https://www.instagram.com/_.dddh3aaa/",
  },
  {
    name: "Yulica Wulan Anjarwati",
    role: "Humas",
    major: "Manajemen",
    imageUrl: anggota13,
    instagram: "https://www.instagram.com/yulica_/",
  },
  {
    name: "Nadia Kurota Akyun",
    role: "PDD",
    major: "Komunikasi dan Penyiaran Islam",
    imageUrl: anggota14,
    instagram: "https://www.instagram.com/nadiakrtaa_/",
  },
  {
    name: "Zahrotu Sindi Nafisah",
    role: "PDD",
    major: "Pendidikan Agama Islam",
    imageUrl: anggota15,
    instagram: "https://www.instagram.com/zahrotu_sindi/",
  },
]

const OurTeamPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  }

  return (
    <div className="relative bg-white pt-32 pb-20 overflow-hidden">
      {/* --- Latar Belakang Animasi --- */}
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-br from-sandy-beige via-green-100 to-blue-100"
        style={{ backgroundSize: "200% 200%", animation: "animated-gradient 15s ease infinite" }}
      >
        {/* Bentuk-bentuk Mengambang */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-lake-blue/20 rounded-full filter blur-xl opacity-70 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-10 right-1/4 w-56 h-56 bg-forest-green/20 rounded-full filter blur-xl opacity-50 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-sunset-orange/20 rounded-full filter blur-2xl opacity-60 animate-[float_12s_ease-in-out_infinite]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold font-montserrat text-forest-green">Tim KPM Kami</h1>
          <p className="text-lg mt-4 text-wood-brown max-w-2xl mx-auto">
            Kelompok mahasiswa yang berdedikasi untuk memberikan kontribusi positif bagi masyarakat
            Desa Sumbersari.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center text-center p-6 
                         bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg
                         border border-white/30 transition-all duration-300 hover:shadow-2xl hover:border-white/50"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="relative w-36 h-36 mx-auto mb-4 transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-lake-blue to-sunset-orange rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-full bg-sandy-beige flex items-end justify-center overflow-hidden p-1">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-contain object-bottom transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="mt-2 flex-grow flex flex-col">
                <h3 className="text-xl font-bold font-montserrat text-forest-green">
                  {member.name}
                </h3>
                <p className="text-wood-brown">{member.role}</p>
                <p className="text-lake-blue font-semibold text-sm mb-4">{member.major}</p>

                <div className="mt-auto">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-forest-green/80 group-hover:text-forest-green group-hover:font-semibold transition-all duration-300"
                  >
                    <FaInstagram size={20} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default OurTeamPage
