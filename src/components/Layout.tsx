// src/components/Layout.tsx

import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout: React.FC = () => {
  return (
    // Jaring pengaman untuk masalah overflow horizontal
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main>
        {/* Outlet akan merender halaman yang sesuai (Beranda atau Tim Kami) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
