import React from "react";

const posts = [
  {
    id: "b1",
    title: "Designing Clean UIs",
    excerpt: "Principles for minimal and functional layouts.",
  },
  {
    id: "b2",
    title: "Product Photography Tips",
    excerpt: "How to photograph products for e-commerce.",
  },
  {
    id: "b3",
    title: "Writing Product Descriptions",
    excerpt: "Make copy short, useful and scannable.",
  },
];

export default function Blog() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Blog</h1>
      <div className="grid gap-6">
        {posts.map((p) => (
          <article key={p.id} className="border rounded-lg p-5 bg-white">
            <h2 className="font-medium text-lg">{p.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
            <div className="mt-3">
              <a className="text-accent text-sm" href="#">
                Read →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
