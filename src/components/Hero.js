import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import motorcycleImg from "../img/motorcycle.png";
import bgImage from "../img/bgimage.jpg";

const Hero = () => {
  // Animation variants
  const leftVariant = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const rightVariant = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Shadow overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 lg:px-12 text-white space-y-8 lg:space-y-0">
        {/* Left Side: Title and Button */}
        <motion.div
          className="max-w-lg text-center lg:text-left"
          variants={leftVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Welcome to Bike Mart BD
          </h1>
          <p className="text-lg mb-6">
            Discover high-quality motorcycles from trusted brands. We provide
            the best bikes to match your style and performance needs.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md">
            Explore Our Collection
          </button>
        </motion.div>

        {/* Right Side: Motorcycle Image */}
        <motion.div
          className="w-full lg:w-[600px] flex justify-center lg:justify-end"
          variants={rightVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            src={motorcycleImg}
            alt="Motorcycle"
            className="w-[450px] lg:w-[600px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
