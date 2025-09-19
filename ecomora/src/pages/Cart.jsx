import React from "react";
import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // ✅ Calculate total price
  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace("$", ""));
    return sum + price;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-blue-600">{item.price}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="flex justify-between items-center pt-6 border-t">
            <h2 className="text-xl font-bold">Total: ${total}</h2>
            <div className="space-x-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                Clear Cart
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
