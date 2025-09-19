import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const count = cart.items.reduce((s, i) => s + i.qty, 0);

  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-semibold text-primary">
          Ecomora
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <Link to="/shop" className="hover:text-accent">
            Shop
          </Link>
          <Link to="/blog" className="hover:text-accent">
            Blog
          </Link>
          <Link to="/about" className="hover:text-accent">
            About
          </Link>
          <Link to="/contact" className="hover:text-accent">
            Contact
          </Link>
          <Link to="/cart" className="relative inline-flex items-center">
            <span className="sr-only">Cart</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              />
            </svg>
            {count > 0 && (
              <span className="ml-2 text-xs bg-accent text-white rounded-full px-2">
                {count}
              </span>
            )}
          </Link>
        </nav>
        <div className="md:hidden">
          <Link to="/cart" className="inline-flex items-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              />
            </svg>
            {count > 0 && (
              <span className="ml-2 text-xs bg-accent text-white rounded-full px-2">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
