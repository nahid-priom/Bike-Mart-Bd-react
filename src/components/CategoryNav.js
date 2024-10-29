// CategoryNav.js
import React from "react";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const categories = [
    "Apple",
    "LG",
    "Samsung",
    "Motorola",
    "Other Parts",
    "Game Console",
    "Board Component",
    "Accessories",
    "Pre-owned Devices",
  ];

  return (
    <nav className="bg-blue-50 hidden lg:block py-3 mt-4 shadow-lg border-t border-gray-300">
      <div className="container mx-auto flex justify-center space-x-6 overflow-x-auto px-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-gray-700 hover:text-blue-600 font-medium text-[14px] px-3 py-1.5 transition duration-300 ease-in-out rounded-md hover:bg-blue-100"
          >
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;