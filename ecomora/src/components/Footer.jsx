import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa"; // ✅ React Icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-white mb-2">Ecomora</h1>
          <p className="text-gray-400 max-w-xs">
            Discover modern products with a touch of simplicity and style.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/shop" className="hover:text-blue-500 transition">
            Shop
          </Link>
          <Link to="/blog" className="hover:text-blue-500 transition">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 text-2xl">
          <a href="#" className="hover:text-blue-500 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Ecomora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
