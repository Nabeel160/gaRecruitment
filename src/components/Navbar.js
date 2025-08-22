import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger & Close icons

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className="bg-[#b57571] shadow-md fixed w-full z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      {/* Logo */}
      <div className="flex-shrink-0 text-white font-bold text-xl">
        GA Recruitment
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-white hover:text-gray-200">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-200">About</Link>
        <Link to="/services" className="text-white hover:text-gray-200">Services</Link>
        <Link to="/contracts" className="text-white hover:text-gray-200">Contracts</Link>
        <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
      </div>
    </div>
  </div>
</nav>

  );
};
