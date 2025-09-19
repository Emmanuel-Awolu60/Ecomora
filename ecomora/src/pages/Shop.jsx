import React, { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

const Shop = () => {
  const { addToCart } = useCart();

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Minimal Chair",
      price: "$120",
      category: "Chair",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Smart Lamp",
      price: "$80",
      category: "Lamp",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Cozy Sofa",
      price: "$350",
      category: "Sofa",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Clean Desk",
      price: "$200",
      category: "Desk",
      image:
        "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Modern Bookshelf",
      price: "$150",
      category: "Shelf",
      image:
        "https://images.unsplash.com/photo-1598300058360-3e1e2e7f768b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Shop Products
      </h1>

      {/* Category Filter */}
      <div className="mb-8 flex justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
