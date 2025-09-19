import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-gray-50 min-h-[85vh] flex items-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Shop Smarter, <span className="text-blue-600">Live Cleaner</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover modern products with a touch of simplicity and style.
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="/shop"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Shop Now
            </a>
            <a
              href="/blog"
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              Explore Blog
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Hero Product"
            className="w-full max-w-md drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
