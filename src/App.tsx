import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import OurTeamPage from "./pages/OurTeamPage"
import ScrollToTop from "./components/ScrollToTop"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeamPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
