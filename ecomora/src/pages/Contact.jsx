import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a placeholder for actual submission)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Optional Info Section */}
        <div className="mt-12 text-center text-gray-600 space-y-2">
          <p>Email: contact@ecomora.com</p>
          <p>Phone: +234 123 456 7890</p>
          <p>Address: 123 Minimal St, Lagos, Nigeria</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
