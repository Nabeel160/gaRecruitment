import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#b57571] text-white mt-16">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/contracts" className="hover:underline">Contracts</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        {/* Column 2: Policies & Contact */}
        <div>
          <h3 className="font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 mb-6">
            <li><a href="/contact-us" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/contact-us" className="hover:underline">Terms of Service</a></li>
          </ul>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            123 Recruitment Street<br />
            London, UK<br />
            +44 123 456 789<br />
            Monday–Friday: 9 am to 5 pm
          </p>
        </div>
        {/* Column 3: Newsletter Signup */}
        <div>
          <h3 className="font-semibold mb-4">Stay Connected</h3>
          <p className="text-sm mb-4">
            Join our newsletter for staffing updates and company news.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#b57571] px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/50">
        <div className="max-w-6xl mx-auto py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} GA Recruitment. All Rights Reserved.
          </p>
          <p>Designed with care to elevate your staffing experience.</p>
        </div>
      </div>
    </footer>
  );
}
