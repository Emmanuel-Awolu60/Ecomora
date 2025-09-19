import React from "react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ecomora
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a className="text-sm hover:text-accent" href="#">
            About
          </a>
          <a className="text-sm hover:text-accent" href="#">
            Privacy
          </a>
          <a className="text-sm hover:text-accent" href="#">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
