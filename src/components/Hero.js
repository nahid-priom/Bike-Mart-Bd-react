import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import bgImage from "../img/bgimage.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [motorcycleImage, setMotorcycleImage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
     
      const cachedData = localStorage.getItem("cachedSliderData");

      if (cachedData) {
       
        const { imagePath, timestamp } = JSON.parse(cachedData);

       
        const isCacheValid = new Date().getTime() - timestamp < 3600000; // 1 hour in milliseconds

        if (isCacheValid) {
          console.log("Using cached data");
          const fullImageUrl = `/public/${imagePath}`;
          setMotorcycleImage(fullImageUrl);
          return; 
        }
      }

      
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/public/api/slider`);
        const result = await response.json();
        console.log(result);

        if (result.data && result.data.length > 0) {
          const imagePath = result.data[0].image;
          console.log("Image Path:", imagePath);

        
          const fullImageUrl = `/public/${imagePath}`;
          console.log("Full Image URL:", fullImageUrl);

        
          setMotorcycleImage(fullImageUrl);

         
          const cacheData = {
            imagePath,
            timestamp: new Date().getTime(), 
          };
          localStorage.setItem("cachedSliderData", JSON.stringify(cacheData));
        } else {
          console.error("No image data found in the response");
        }
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    };

    fetchImage();
  }, []);

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
          <button
            onClick={() => navigate("/all-categories")}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md"
          >
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
          {motorcycleImage && (
            <img
              src={motorcycleImage}
              alt="Motorcycle"
              className="w-[450px] lg:w-[600px] object-contain"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;