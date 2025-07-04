import React from 'react'
import { Phone, MapPin, Menu } from 'lucide-react'

export const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1a3c34] text-white flex justify-around items-center py-2 shadow-md md:hidden z-50">
      
      {/* Phone */}
      <a href="tel:+17867634000" className="flex flex-col items-center text-xs">
        <Phone className="w-6 h-6 text-[#e6d38d]" />
        <span className="mt-1 text-white">Call</span>
      </a>

      {/* Menu */}
      <button className="flex flex-col items-center text-xs focus:outline-none">
        <Menu className="w-6 h-6 text-[#e6d38d]" />
        <span className="mt-1 text-white">Menu</span>
      </button>

      {/* Location */}
      <a
        href="https://www.google.com/maps?q=5264+Lincoln+Ave,+Skokie+IL+60077"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-xs"
      >
        <MapPin className="w-6 h-6 text-[#e6d38d]" />
        <span className="mt-1 text-white">Location</span>
      </a>
    </div>
  )
}
