import React from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Import the phone icon

const FloatingCallButton = () => {
  return (
    <>
     
      {/* Floating "Call Now" Button */}
      <a
        href="tel:+8801711347182"
        className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition animate-pulse duration-300"
        aria-label="Call Now"
      >
        <FaPhoneAlt className="text-xl" />
      </a>
    </>
  );
};

export default FloatingCallButton;
