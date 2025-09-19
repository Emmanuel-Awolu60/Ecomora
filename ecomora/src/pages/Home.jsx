import React from "react";
import { useCart } from "../context/CartContext.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
  const { addToCart } = useCart();

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
      <Hero /> {/* Hero Section */}
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
