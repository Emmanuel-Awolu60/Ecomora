import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const total = cart.items.reduce((s, i) => s + i.price * i.qty, 0);

  const handlePlace = (e) => {
    e.preventDefault();
    // simulate order processing
    setSubmitted(true);
    setTimeout(() => {
      clear();
    }, 500);
  };

  if (submitted) {
    return (
      <div className="p-6 border rounded-lg">
        <h2 className="text-xl font-semibold">Order placed</h2>
        <p className="mt-3 text-gray-600">
          Thanks — this is a simulated checkout for portfolio demo purposes.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <form onSubmit={handlePlace} className="space-y-4">
        <div>
          <label className="block text-sm">Full name</label>
          <input required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Address</label>
          <input required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Payment method</label>
          <select className="mt-1 w-full border rounded px-3 py-2">
            <option>Card (simulated)</option>
            <option>PayPal (simulated)</option>
          </select>
        </div>
        <div className="text-right">
          <div className="font-semibold mb-2">Total: ${total.toFixed(2)}</div>
          <button
            type="submit"
            className="px-4 py-2 border rounded hover:bg-accent hover:text-white"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
