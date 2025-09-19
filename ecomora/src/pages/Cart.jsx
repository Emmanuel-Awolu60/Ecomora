import React from "react";
import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left">Product</th>
                  <th className="px-6 py-3 text-left">Price</th>
                  <th className="px-6 py-3 text-left">Quantity</th>
                  <th className="px-6 py-3 text-left">Total</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="px-6 py-4">{`$${item.price}`}</td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) =>
                          updateQty(item.id, parseInt(e.target.value))
                        }
                        className="w-16 px-2 py-1 border border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4">{`$${item.price * item.qty}`}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Subtotal & Checkout */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-lg shadow">
              <span className="text-xl font-semibold">
                Subtotal: ${subtotal}
              </span>
              <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
