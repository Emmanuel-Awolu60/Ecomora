import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {product.name}
      </h3>
      <p className="text-blue-600 font-medium">{product.price}</p>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
