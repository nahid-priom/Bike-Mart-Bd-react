import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import bgImage from "../img/bgimage.jpg"; // Background image
import { useNavigate } from "react-router-dom"; // For navigation

const Hero = () => {
  const navigate = useNavigate();
  const [motorcycleImage, setMotorcycleImage] = useState("");
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch motorcycle image from API or cache
  useEffect(() => {
    const fetchImage = async () => {
      const cachedData = localStorage.getItem("cachedSliderData");

      // Check if cached data exists and is valid (within 1 hour)
      if (cachedData) {
        const { imagePath, timestamp } = JSON.parse(cachedData);
        const isCacheValid = new Date().getTime() - timestamp < 3600000; // 1 hour in milliseconds

        if (isCacheValid) {
          console.log("Using cached data");
          setMotorcycleImage(`https://bikemart.blacktechcorp.com/public/${imagePath}`);
          setLoading(false); // Stop loading if cache is valid
          return; // Exit if cache is valid
        }
      }

      // Fetch fresh data from the API
      try {
        const response = await fetch("https://bikemart.blacktechcorp.com/public/api/slider");
        const result = await response.json();
        console.log(result);

        if (result.data?.length > 0) {
          const imagePath = result.data[0].image;
          const fullImageUrl = `https://bikemart.blacktechcorp.com/public/${imagePath}`;
          setMotorcycleImage(fullImageUrl);

          // Cache the new data
          localStorage.setItem(
            "cachedSliderData",
            JSON.stringify({ imagePath, timestamp: new Date().getTime() })
          );
        } else {
          console.error("No image data found in the response");
        }
      } catch (error) {
        console.error("Error fetching the image:", error);
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchImage();
  }, []);

  // Animation variants for Framer Motion
  const leftVariant = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const rightVariant = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <section
      className="relative h-[95vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Shadow overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 lg:px-12 text-white space-y-8 lg:space-y-0">
        {/* Left Side: Title, Description, and Button */}
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
            Discover high-quality motorcycles from trusted brands. We provide the
            best bikes to match your style and performance needs.
          </p>
          <button
            onClick={() => navigate("/all-categories")}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300"
          >
            Explore Our Collection
          </button>
        </motion.div>

        {/* Right Side: Motorcycle Image or Loader */}
        <motion.div
          className="w-full lg:w-[600px] flex justify-center lg:justify-end"
          variants={rightVariant}
          initial="hidden"
          animate="visible"
        >
          {loading ? (
            // Loader while the image is being fetched
            <div className="flex justify-center items-center h-[200px]">
              <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            // Display the motorcycle image once loaded
            motorcycleImage && (
              <img
                src={motorcycleImage}
                alt="Motorcycle"
                className="w-[450px] lg:w-[600px] object-contain"
                loading="lazy" // Lazy load the image for better performance
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;