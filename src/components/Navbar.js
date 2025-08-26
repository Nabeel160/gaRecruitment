import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-[#b57571] shadow-md fixed w-full z-50 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center relative">
          {/* Logo */}
          <Link to="/">
          <div className="flex-shrink-0 text-white font-bold text-xl font-playpen">
            GA Recruitment
          </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center relative">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className="flex items-center text-white hover:text-gray-200"
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 hidden group-hover:block bg-[#b57571] shadow-lg rounded-md w-52 z-50">
                <Link
                  to="/services/event"
                  className="block px-4 py-2 text-white hover:bg-[#9a5f5b] rounded-md"
                >
                  Event Management
                </Link>
                <Link
                  to="/services/hotel"
                  className="block px-4 py-2 text-white hover:bg-[#9a5f5b]"
                >
                  Hotel Staffing
                </Link>
                <Link
                  to="/services/cleaning"
                  className="block px-4 py-2 text-white hover:bg-[#9a5f5b] rounded-md"
                >
                  Cleaning Services
                </Link>
              </div>
            </div>

            <Link to="/contracts" className="text-white hover:text-gray-200">
              Contracts
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#b57571] w-full space-y-3 py-4 px-6 overflow-hidden">
          <Link
            to="/"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-white hover:text-gray-200"
            >
              Services{" "}
              <ChevronDown
                className={`ml-2 w-4 h-4 transform transition ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  to="/services/event"
                  className="block text-white hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Event Management
                </Link>
                <Link
                  to="/services/hotel"
                  className="block text-white hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Hotel Staffing
                </Link>
                <Link
                  to="/services/cleaning"
                  className="block text-white hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Cleaning Services
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contracts"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Contracts
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};
