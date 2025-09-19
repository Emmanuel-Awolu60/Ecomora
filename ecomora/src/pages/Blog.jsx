// src/components/BlogPreview.jsx
import React from "react";
import { Link } from "react-router-dom";

const BlogPreview = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of E-commerce in 2025",
      excerpt: "Discover the top trends shaping online shopping this year...",
      link: "/blog",
    },
    {
      id: 2,
      title: "5 Tips for a Smarter Shopping Experience",
      excerpt:
        "Learn how to save money and shop efficiently with these tips...",
      link: "/blog",
    },
    {
      id: 3,
      title: "Why Minimalist Design Wins in Online Stores",
      excerpt:
        "A closer look at why simple design drives higher conversions...",
      link: "/blog",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          From Our Blog
        </h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={post.link}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
