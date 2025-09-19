import React from "react";

const Blog = () => {
  // Example blog posts (replace with real data later)
  const posts = [
    {
      id: 1,
      title: "5 Tips for Minimalist Home Design",
      date: "Sep 10, 2025",
      snippet:
        "Discover how to create a minimalist home that feels clean, open, and stylish...",
      link: "/blog/minimalist-home-design",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Chair",
      date: "Sep 5, 2025",
      snippet:
        "Choosing the right chair can transform your space. Learn what to look for in comfort, style, and durability...",
      link: "/blog/perfect-chair",
    },
    {
      id: 3,
      title: "Modern Lighting for Every Room",
      date: "Aug 28, 2025",
      snippet:
        "Lighting sets the mood in your home. Explore modern lighting ideas that bring warmth and elegance...",
      link: "/blog/modern-lighting",
    },
    {
      id: 4,
      title: "Organizing Your Desk Like a Pro",
      date: "Aug 20, 2025",
      snippet:
        "Maximize productivity and aesthetics by keeping your desk organized with these simple tips...",
      link: "/blog/desk-organization",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Our Blog
        </h1>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-600 mb-4">{post.snippet}</p>
              <a
                href={post.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
