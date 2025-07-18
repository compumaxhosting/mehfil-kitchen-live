"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cateringDropdownOpen, setCateringDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cateringItems = [
    {
      name: "Birthday Catering",
      href: "/catering-services-for-birthday-party-near-me",
    },
    {
      name: "Wedding Catering",
      href: "/wedding-catering-near-me-in-skokie-il",
    },
    { name: "Party Orders", href: "/party-catering-services-skokie-Illinois" },
    { name: "Event Catering", href: "/event-catering-in-skokie-il" },
    { name: "Corporate Meals", href: "/corporate" },
    { name: "On-Demand Orders", href: "/ondemand" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#1a3c34]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-1 md:py-2">
        {/* Mobile Logo */}
        <div className="lg:hidden">
          <Link href="/" passHref>
            <Image src="/logo2.png" alt="Logo" width={100} height={40} />
          </Link>
        </div>

        {/* Left links (Desktop) */}
        <div className="hidden lg:flex gap-14 text-white items-center">
          {["Home", "About", "Menu", "Gallery"].map((text) => (
            <Link
              key={text}
              href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className="relative group"
            >
              <span className="text-white flex flex-col items-center">
                {text}
                <span className="absolute left-1/2 top-full mt-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </span>
            </Link>
          ))}
        </div>

        {/* Center Logo (Desktop) */}
        <div className="hidden lg:block">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="Logo"
              width={120}
              height={60}
              priority
              quality={100}
            />
          </Link>
        </div>

        {/* Right links (Desktop) */}
        <div className="hidden lg:flex gap-14 text-white items-center">
          {/* Catering Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setCateringDropdownOpen(true)}
            onMouseLeave={() => setCateringDropdownOpen(false)}
          >
            <Link
              href="/halal-hyderabadi-catering-skokie-il"
              className="relative group"
            >
              <span className="text-white flex flex-col items-center">
                <span className="flex items-center gap-1">
                  Catering
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      cateringDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
                <span className="absolute left-1/2 top-full mt-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </span>
            </Link>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                cateringDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              }`}
            >
              <div className="py-2 w-48">
                {cateringItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6d38d] hover:text-black transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* DoorDash Logo */}
          <a href="https://www.doordash.com" target="_blank">
            <Image src="/doordash.png" alt="DoorDash" width={80} height={40} />
          </a>

          {/* Uber Eats Logo */}
          <a href="https://www.ubereats.com" target="_blank">
            <Image
              src="/ubereats.jpeg"
              alt="Uber Eats"
              width={50}
              height={40}
            />
          </a>

          {/* Contact */}
          <Link href="/contact" className="relative group">
            <span className="text-white flex flex-col items-center">
              Contact
              <span className="absolute left-1/2 top-full mt-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </span>
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-white ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 text-black space-y-2">
          {["Home", "About", "Menu", "Gallery"].map((text) => (
            <Link
              key={text}
              href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className="block py-2 border-b border-gray-200"
            >
              {text}
            </Link>
          ))}

          {/* Mobile Catering Dropdown */}
          <div>
            <button
              onClick={() => setCateringDropdownOpen(!cateringDropdownOpen)}
              className="flex items-center justify-between w-full py-2 border-b border-gray-200"
            >
              <span>Catering</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  cateringDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                cateringDropdownOpen
                  ? "max-h-64 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 py-2 space-y-1">
                <Link
                  href="/catering"
                  className="block py-1 text-sm text-gray-600 hover:text-black"
                >
                  All Catering Services
                </Link>
                {cateringItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-1 text-sm text-gray-600 hover:text-black"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* DoorDash Logo */}
          <a
            href="https://www.doordash.com/store/mehfil-kitchen-skokie-33915289/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 border-b border-gray-200"
          >
            <Image src="/doordash.png" alt="DoorDash" width={80} height={40} />
          </a>

          {/* Uber Eats Logo */}
          <a
            href="https://www.ubereats.com/store/mehfil-kitchen/RpxFaKXDRC6WeTay-6Iqhw"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 border-b border-gray-200"
          >
            <Image
              src="/ubereats.jpeg"
              alt="Uber Eats"
              width={50}
              height={40}
            />
          </a>

          {/* Contact */}
          <Link href="/contact" className="block py-2 border-b border-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}