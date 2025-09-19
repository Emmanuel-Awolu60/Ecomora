import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/70 shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Ecomora
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/shop" className="text-gray-700 hover:text-blue-600">
            Shop
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-600">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>

          <Link
            to="/cart"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Cart ({totalItems})
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <span className="text-gray-700 text-xl">🛒</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/blog"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Cart ({totalItems})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
