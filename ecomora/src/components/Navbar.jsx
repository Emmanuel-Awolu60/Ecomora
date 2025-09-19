import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-gray-800">
        Ecomora
      </Link>

      {/* Desktop Menu */}
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
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden">
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
            className="py-2 text-gray-700 hover:text-blue-600 w-full text-center"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/shop"
            className="py-2 text-gray-700 hover:text-blue-600 w-full text-center"
          >
            Shop
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/blog"
            className="py-2 text-gray-700 hover:text-blue-600 w-full text-center"
          >
            Blog
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/contact"
            className="py-2 text-gray-700 hover:text-blue-600 w-full text-center"
          >
            Contact
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/cart"
            className="py-2 bg-blue-600 text-white w-full text-center"
          >
            Cart ({totalItems})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
