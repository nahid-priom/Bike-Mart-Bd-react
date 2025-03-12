import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);
  const [activeBrand, setActiveBrand] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);


  // Fetch categories from the API or cache
  useEffect(() => {
    const fetchCategories = async () => {
      // Check if data is already cached in localStorage
      const cachedData = localStorage.getItem("cachedCategories");
      const now = new Date().getTime();

      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);

        // Check if the cached data is still valid (less than 1 hour old)
        if (now - timestamp < 3600000) {
        
          console.log("Using cached data");
          setCategories(data);
       
          return; 
        }
      }

     
      try {
        const response = await fetch("/public/api/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const result = await response.json();
        console.log("API Response:", result);

        
        if (result.data && Array.isArray(result.data)) {
          // Transform the API data to match the expected structure
          const transformedCategories = result.data.map((category) => ({
            name: category.name,
            image: `/public/${category.image}`, // Construct the full image URL
            slug: category.slug, // Add slug for navigation
          }));

          // Update the state with the transformed data
          setCategories(transformedCategories);

          // Cache the data in localStorage with a timestamp
          const cacheData = {
            data: transformedCategories,
            timestamp: now, // Store the current timestamp
          };
          localStorage.setItem("cachedCategories", JSON.stringify(cacheData));
        } else {
          throw new Error("Invalid data format: expected an array");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        
      } finally {
       
      }
    };

    fetchCategories();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 shadow-md fixed w-full transition-all ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 lg:px-0">
        {/* Burger Icon for Mobile */}
        <button
          className="text-2xl lg:hidden bg-red-700 text-red-50 px-2 py-2 rounded-lg mr-4 transition-transform transform hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <IoClose className="transition-transform transform rotate-180" />
          ) : (
            <FaBars />
          )}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-[80px] lg:w-[120px]">
            <img src={Logo} alt="Logo" className="" />
          </div>
        </Link>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex items-center space-x-8 font-medium">
          <div
            className="relative group"
            onMouseEnter={() => setShowBrandsDropdown(true)}
            onMouseLeave={() => {
              setShowBrandsDropdown(false);
              setActiveBrand(null);
            }}
          >
            <span className="cursor-pointer text-white hover:text-red-400 flex items-center">
              Brands
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            {showBrandsDropdown && (
              <div className="absolute  top-4 left-0 bg-white text-black shadow-lg rounded-md w-60 transition-transform transform scale-95">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="px-6 py-2 hover:bg-gray-50 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 group flex items-center space-x-4 rounded-lg border border-gray-200 hover:border-red-300 shadow-sm hover:shadow-md"
                    onMouseEnter={() => setActiveBrand(category.name)}
                    onMouseLeave={() => setActiveBrand(null)}
                    onClick={() => navigate(`/category/${category.slug}`)}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-12 h-10 object-cover rounded-lg border-2 border-gray-200 transition-all"
                    />
                    <span className="text-base font-medium text-gray-700  transition-all">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-red-400 text-white">
            About
          </Link>
          <Link to="/blog" className="hover:text-red-400 text-white">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-red-400 text-white">
            Contact
          </Link>
        </nav>

        {/* Cart and Profile Icons */}
        {/* <div className="hidden lg:flex items-center space-x-2 lg:space-x-8">
          <button className="border-red-500 border text-white px-2 py-1 cursor-pointer hover:bg-red-700 hover:text-red-50 rounded-md ml-4 transition-transform transform hover:scale-105">
            Login/SignUp
          </button>
        </div> */}
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 bg-black w-full h-screen shadow-md lg:hidden z-50 transition-transform transform translate-x-0">
          <nav className="flex flex-col font-medium py-4 relative h-full">
            {/* Close Button */}
            <div className="px-6 py-4 pl-10 text-right">
              <button
                className="text-red-50 font-bold bg-red-700 rounded-xl px-4 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Nav Links */}
            <div className="px-6 py-4 pl-10 relative">
              <span
                className="cursor-pointer text-red-50 flex text-3xl font-bold items-center hover:text-red-400"
                onClick={() => setShowBrandsDropdown(!showBrandsDropdown)}
              >
                Brands
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    showBrandsDropdown ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              {/* Subcategories */}
              <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                  showBrandsDropdown
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-red-50 text-black shadow-lg rounded-md py-2 w-full mt-2">
                  {categories.map((category) => (
                    <div key={category.name} className="relative">
                      <div
                        className="px-4 py-2 hover:bg-red-700 hover:text-white cursor-pointer font-bold flex justify-between items-center"
                        onClick={() => {
                          setActiveBrand(
                            activeBrand === category.name ? null : category.name
                          );
                        }}
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-12 h-10 object-cover rounded-lg border-2 border-gray-200 transition-all"
                        />
                        <span className="text-base font-medium text-gray-700  transition-all">
                          {category.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Static Links */}
            <Link
              to="/about"
              className="px-6 py-4 pl-10 text-3xl font-bold text-red-50 hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="px-6 py-4 pl-10 text-3xl font-bold text-red-50 hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-6 py-4 pl-10 text-3xl font-bold text-red-50 hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
