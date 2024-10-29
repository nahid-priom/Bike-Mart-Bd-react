// Header.js
import React, { useContext, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { BsBag } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaSearch, FaBars } from "react-icons/fa";
import CategoryNavMobile from "./CategoryNavMobile";
import CategoryNav from "./CategoryNav";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [showCategoryNavMobile, setShowCategoryNavMobile] = useState(false);

  // Example categories with subcategories
  const categories = [
    { name: "Apple" },
    { name: "LG" },
    { name: "Samsung", subcategories: ["Galaxy", "Note Series"] },
    { name: "Motorola" },
    { name: "Other Parts" },
    { name: "Game Console" },
    { name: "Board Component" },
    { name: "Accessories" },
    { name: "Pre-owned Devices" },
  ];

  return (
    <header className="bg-white pb-4 lg:pb-0 pt-4 shadow-md fixed w-full z-10 transition-all">
      <div className="container mx-auto flex items-center justify-between h-full px-6 lg:px-0">
        {/* Burger Icon for Mobile */}
        <button
          className="text-2xl lg:hidden text-gray-700 mr-4"
          onClick={() => setShowCategoryNavMobile(!showCategoryNavMobile)}
        >
          <FaBars />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-[130px]">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>

        {/* Navigation Links (Visible on larger screens only) */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/about" className="text-gray-700 hover:text-black">
            About Us
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-black">
            Blog
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md mx-2 lg:mx-4 ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 lg:px-4 lg:py-2 py-1 rounded-md border-2 border-blue-100 focus:border-red-500 outline-none focus:ring-1 focus:ring-red-200"
            style={{ color: "#2C3E50" }}
          />
          <FaSearch className="absolute right-2 lg:right-3 lg:top-3 top-2 text-blue-600 hover:text-red-500 cursor-pointer" />
        </div>

        {/* Cart and Profile Icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/profile"
            className="text-2xl text-gray-700 hover:text-black"
          >
            <FiUser />
          </Link>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl text-gray-700" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
        
      <CategoryNav />

      {/* Sidebar for mobile category navigation */}
      <CategoryNavMobile
        isOpen={showCategoryNavMobile}
        toggleSidebar={() => setShowCategoryNavMobile(false)}
        categories={categories}
      />
    </header>
  );
};

export default Header;
