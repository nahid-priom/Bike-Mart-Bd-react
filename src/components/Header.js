import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { BsBag } from "react-icons/bs";
import { FiUser } from "react-icons/fi"; // Import profile icon
import { FaSearch } from "react-icons/fa"; // Import search icon
import CategoryNav from "./CategoryNav";

const Header = () => {
  
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);


  return (
    <header
      className="bg-white py-4 shadow-md fixed w-full z-10 lg:px-8 transition-all" 
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div className="w-[120px]">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link to="/categories" className="text-gray-700 hover:text-black">Categories</Link>
          <Link to="/about" className="text-gray-700 hover:text-black">About Us</Link>
          <Link to="/blog" className="text-gray-700 hover:text-black">Blog</Link>
        </nav>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md mx-4">
          <input
            type="text"
            placeholder="Search for parts..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 outline-none"
          />
          <FaSearch className="absolute right-3 top-2 text-gray-400" />
        </div>

        {/* Cart and Profile Icons */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <Link to="/profile" className="text-2xl text-gray-700 hover:text-black">
            <FiUser />
          </Link>

          {/* Cart Icon */}
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
      <CategoryNav/>
    </header>
  );
};

export default Header;
