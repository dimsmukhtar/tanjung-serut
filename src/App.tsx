// src/App.tsx

import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout" // <-- Impor Layout
import Home from "./pages/Home"
import OurTeamPage from "./pages/OurTeamPage"
import ScrollToTop from "./components/ScrollToTop"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Semua halaman di dalam sini akan otomatis memiliki Navbar dan Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="our-team" element={<OurTeamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
