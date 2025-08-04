"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonial", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#06db9a] text-[#160c6b] shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-lg font-extrabold lg:text-2xl">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Lutendo Business Supplies Logo"
            width={25}
            height={20}
            className="w-24 0 object-cover"
          />
        </Link>

        {/* Right: Nav links (desktop) */}
        <nav className="hidden md:flex space-x-7 font-medium text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm nav-link font-medium hover:text-[#160c6b] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-black">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-red-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
