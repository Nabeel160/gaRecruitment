import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger & Close icons

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          GA Recruitment
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-200 transition">About</Link>
          <Link to="/services" className="hover:text-gray-200 transition">Services</Link>
          <Link to="/contracts" className="hover:text-gray-200 transition">Contracts</Link>
          <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-800 px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contracts"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Contracts
          </Link>
          <Link
            to="/contact"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};
