import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {product.name}
      </h3>
      <p className="text-blue-600 font-medium">{product.price}</p>
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
