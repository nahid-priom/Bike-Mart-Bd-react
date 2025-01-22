// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);
  const [activeBrand, setActiveBrand] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const brands = [
    {
      name: "Yamaha",
      models: ["Yamaha R15", "Yamaha MT-15", "Yamaha FZ"],
    },
    {
      name: "Suzuki",
      models: ["Suzuki Gixxer", "Suzuki Hayabusa", "Suzuki Intruder"],
    },
    {
      name: "Honda",
      models: ["Honda CBR", "Honda Shine", "Honda Hornet"],
    },
  ];

  return (
    <header className="bg-red-50 z-50 shadow-md fixed w-full z-10 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 lg:px-0">
        {/* Burger Icon for Mobile */}
        <button
          className="text-2xl lg:hidden bg-red-500 text-red-50 px-2 py-2 rounded-lg mr-4 transition-transform transform hover:scale-110"
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
          <div className="w-[80px] lg:w-[130px]">
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
            <span className="cursor-pointer hover:text-red-400 flex items-center">
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
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md py-2 w-60 transition-transform transform scale-95">
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative group flex items-center"
                    onMouseEnter={() => setActiveBrand(brand.name)}
                    onMouseLeave={() => setActiveBrand(null)}
                  >
                    <img
                      src="https://w7.pngwing.com/pngs/857/436/png-transparent-yamaha-motor-company-yamaha-yzf-r15-auto-expo-motorcycle-yamaha-yzfr15-exhaust-system-car-motorcycle-thumbnail.png"
                      alt={brand.name}
                      className="w-8 h-8 mr-3"
                    />
                    <span>{brand.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 ml-auto transform group-hover:rotate-90 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {activeBrand === brand.name && (
                      <div className="absolute top-0 left-full bg-white text-black shadow-lg rounded-md py-2 w-60">
                        {brand.models.map((model) => (
                          <div
                            key={model}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                          >
                            <img
                              src="https://w7.pngwing.com/pngs/857/436/png-transparent-yamaha-motor-company-yamaha-yzf-r15-auto-expo-motorcycle-yamaha-yzfr15-exhaust-system-car-motorcycle-thumbnail.png"
                              alt={model}
                              className="w-6 h-6 mr-3"
                            />
                            {model}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-red-400">
            About
          </Link>
          <Link to="/blog" className="hover:text-red-400">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-red-400">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 bg-red-500  w-full shadow-md lg:hidden transition-all transform scale-100">
            <nav className="flex flex-col font-medium py-4">
              <div className="px-6 py-2 relative">
                <span
                  className="cursor-pointer text-red-50 hover:text-red-400"
                  onClick={() => setShowBrandsDropdown(!showBrandsDropdown)}
                >
                  Brands
                </span>
                {showBrandsDropdown && (
                  <div className="bg-red-50 text-black shadow-lg rounded-md py-2 w-full mt-2">
                    {brands.map((brand) => (
                      <div
                        key={brand.name}
                        className="px-4 py-2 hover:bg-red-100 cursor-pointer relative"
                      >
                        {brand.name}
                        <div className="bg-red-50 shadow-lg rounded-md py-2 w-full mt-2">
                          {brand.models.map((model) => (
                            <div
                              key={model}
                              className="px-4 py-2 hover:bg-red-100 cursor-pointer"
                            >
                              {model}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/about" className="px-6 py-2 hover:text-red-400">
                About
              </Link>
              <Link to="/blog" className="px-6 py-2 hover:text-red-400">
                Blog
              </Link>
              <Link to="/contact" className="px-6 py-2 hover:text-red-400">
                Contact
              </Link>
            </nav>
          </div>
        )}

        {/* Cart and Profile Icons */}
        <div className="hidden lg:flex items-center space-x-2 lg:space-x-8">
          <button className="border-red-500 border  px-2 py-1 cursor-pointer hover:bg-red-700 hover:text-red-50 rounded-md  ml-4 transition-transform transform hover:scale-105">
            Login/SignUp
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
