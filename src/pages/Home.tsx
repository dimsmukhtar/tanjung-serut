import { useLocation } from "react-router-dom"
import AttractionsSection from "../components/AttractionsSection"
import GallerySection from "../components/GallerySection"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import TestimonialsSection from "../components/TestimonialsSection"
import VideoSection from "../components/VideoSection"
import { useEffect } from "react"

const Home: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1) // Hapus '#' dari string
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 0)
    }
  }, [location])
  return (
    <div>
      <HeroSection />
      <VideoSection />
      <AttractionsSection />
      <GallerySection />
      <TestimonialsSection />
      <InfoSection />
    </div>
  )
}

export default Home
