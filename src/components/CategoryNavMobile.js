// CategoryNav.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

const CategoryNav = ({ isOpen, toggleSidebar, categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[250px] rounded-bl-2xl bg-blue-900 rounded-l-xl text-white p-6 z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute top-6 right-6">
        <FontAwesomeIcon
          icon={faTimes}
          className="w-[32px] h-[32px] text-white cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <ul className="flex flex-col items-center space-y-6 mt-20">
        {categories.map((category) => (
          <li key={category.name} className="relative">
            <Link
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-xl"
              onClick={() => toggleSidebar(false)}
            >
              {category.name}
              {category.subcategories && (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="ml-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory(
                      activeCategory === category.name ? null : category.name
                    );
                  }}
                />
              )}
            </Link>
            {category.subcategories && activeCategory === category.name && (
              <ul className="ml-4 mt-2 bg-white text-black p-2 rounded-lg">
                {category.subcategories.map((subcat) => (
                  <li key={subcat} className="py-2">
                    <Link to={`/category/${subcat}`} onClick={toggleSidebar}>
                      {subcat}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNav;
