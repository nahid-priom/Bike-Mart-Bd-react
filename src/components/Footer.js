import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-8 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">BikeMartBD</h2>
          <p className="text-sm">
            Your trusted destination for top-quality motorcycles, accessories, and services.
          </p>
          <p className="text-sm mt-4">&copy; 2025 BikeMart. All rights reserved.</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-red-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-red-500 transition">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">
            Plot: 9/E, Extension Pallabi, Mirpur, Dhaka 1216, Dhaka, Bangladesh
          </p>
          <p className="text-sm mt-2">Email: bikemartbd@gmail.com</p>
          <p className="text-sm mt-2">Phone: +880 1711-347182</p>
          <div className="mt-4 flex space-x-4">
            <Link
              to="#"
              className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="#"
              className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
