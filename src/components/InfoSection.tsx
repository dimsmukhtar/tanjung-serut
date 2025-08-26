import React from "react"
import { motion } from "framer-motion"
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api"
import {
  FaClock,
  FaTicketAlt,
  FaParking,
  FaRestroom,
  FaUtensils,
  FaMosque,
  FaLandmark,
} from "react-icons/fa"

// --- Konfigurasi Peta ---
const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0.75rem", // rounded-xl
}

const center = {
  lat: -7.570311078381827,
  lng: 109.77983198966459,
}
// AIzaSyB7CD5_wvhfOf5gLQUuwB_lFCBvsA9P_6Q
const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#f5eedc" }] }, // sandy-beige
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8b5a2b" }] }, // wood-brown
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#a6cc93" }], // Warna taman yang lebih soft
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#e9dcb4" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#f8c967" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#e9bc62" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#4a90e2" }], // lake-blue
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#a1a1a1" }],
  },
]

const InfoSection: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })

  const facilities = [
    { icon: <FaParking />, name: "Area Parkir" },
    { icon: <FaRestroom />, name: "Toilet" },
    { icon: <FaUtensils />, name: "Warung Makan" },
    { icon: <FaMosque />, name: "Mushola" },
    { icon: <FaLandmark />, name: "Gazebo" },
  ]

  return (
    <section id="info-kunjungan" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold font-montserrat text-forest-green">
            Rencanakan Kunjungan Anda
          </h2>
          <p className="text-lg mt-2 text-wood-brown">
            Semua informasi yang Anda butuhkan untuk pengalaman terbaik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Kolom Kiri: Peta */}
          <motion.div
            className="w-full h-96 lg:h-[500px] shadow-2xl rounded-xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                options={{ styles: mapStyles, disableDefaultUI: true, zoomControl: true }}
              >
                <MarkerF position={center} />
              </GoogleMap>
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-sandy-beige rounded-xl">
                Memuat Peta...
              </div>
            )}
          </motion.div>

          {/* Kolom Kanan: Informasi */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Kartu Jam Buka */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }}
              className="bg-sandy-beige p-6 rounded-lg shadow-md flex items-center"
            >
              <FaClock className="text-4xl text-forest-green mr-4" />
              <div>
                <h3 className="font-bold font-montserrat text-xl text-forest-green">
                  Jam Operasional
                </h3>
                <p className="text-wood-brown">Setiap Hari: 08:00 - 17:00 WIB</p>
              </div>
            </motion.div>

            {/* Kartu Tiket Masuk */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }}
              className="bg-sandy-beige p-6 rounded-lg shadow-md flex items-center"
            >
              <FaTicketAlt className="text-4xl text-forest-green mr-4" />
              <div>
                <h3 className="font-bold font-montserrat text-xl text-forest-green">Tiket Masuk</h3>
                <p className="text-wood-brown">Rp 5.000 per orang</p>
              </div>
            </motion.div>

            {/* Kartu Fasilitas */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }}
              className="bg-sandy-beige p-6 rounded-lg shadow-md"
            >
              <h3 className="font-bold font-montserrat text-xl text-forest-green mb-4">
                Fasilitas Tersedia
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {facilities.map((item) => (
                  <div key={item.name} className="flex items-center text-wood-brown">
                    <span className="text-forest-green mr-2">{item.icon}</span>
                    {item.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
