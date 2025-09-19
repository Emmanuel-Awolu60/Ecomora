import React from "react";
import heroImg from "../assets/hero.png"; // 👈 Your hero image
import { useCart } from "../context/CartContext.jsx";
import ProductCard from "../components/ProductCard.jsx"; // 👈 Import reusable card

const Home = () => {
  const { addToCart } = useCart(); // ✅ destructured

  // ✅ Static Unsplash images (stable & reliable)
  const products = [
    {
      id: 1,
      name: "Minimal Chair",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Smart Lamp",
      price: "$80",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Cozy Sofa",
      price: "$350",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Clean Desk",
      price: "$200",
      image:
        "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
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

      {/* Featured Products Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Featured Products
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
