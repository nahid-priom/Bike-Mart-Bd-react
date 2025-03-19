import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OtherHero from "./OtherHero";

const BikeDetails = () => {
  const { slug } = useParams();
  console.log(slug); // Get the slug from the URL
  const [bike, setBike] = useState(null); // State to store the bike details
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors

  // State for tracking modal and form submission status
  const [currentImage, setCurrentImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    time: "",
  });

  // Fetch bike details based on slug
  useEffect(() => {
    const fetchBikeDetails = async () => {
      try {
        const response = await fetch(
          "https://bikemart.blacktechcorp.com/public/api/product"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bike details");
        }
        const result = await response.json();
        console.log("API Response:", result);

        // Ensure result.data is an array
        if (result.data && Array.isArray(result.data)) {
          // Transform the API data to match the structure of featuredBikes
          const transformedBikes = result.data.map((product) => ({
            name: product.name,
            slug: product.slug,
            image: `https://bikemart.blacktechcorp.com/public/${product.image}`,
            additionalImages: product.gallery
              ? product.gallery.map(
                  (img) =>
                    `https://bikemart.blacktechcorp.com/public/${img.image}`
                )
              : [],
            description: product.shortDescription,
            price: product.current_price,
            discount: "10%", // Add discount if available in the API response
            longDescription: product.longDescription,
          }));

          // Filter the bike based on the slug
          const filteredBike = transformedBikes.find((product) => {
            // Ensure the product has a valid slug before calling toLowerCase()
            if (!product.slug) {
              console.warn("Skipping product with missing slug:", product);
              return false;
            }

            // Perform a case-insensitive and trimmed comparison
            return product.slug === slug;
          });

          // Log the slug and filtered bike for debugging
          console.log("Slug from URL:", slug);
          console.log("Filtered Bike:", filteredBike);

          if (filteredBike) {
            setBike(filteredBike);
            setCurrentImage(filteredBike.image);
          } else {
            throw new Error("Bike not found");
          }
        } else {
          throw new Error("Invalid data format: expected an array");
        }
      } catch (error) {
        console.error("Error fetching bike details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBikeDetails();
  }, [slug]);
  // Utility function to strip HTML tags
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  // If loading, show a loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // If error, show an error message
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  // If no bike is found, show a "Bike not found" message
  if (!bike) {
    return <h2 className="text-center mt-8">Bike not found</h2>;
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Show Thank You message after form submission
  };

  // Close the modal and reset form
  const closeModal = () => {
    setShowModal(false);
    setFormSubmitted(false);
    setFormData({ name: "", phone: "", address: "", date: "", time: "" });
  };

  return (
    <>
      <OtherHero
        title={bike.name}
        description="Choose the beast for a long ride."
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="flex-1">
            <div className="mb-4">
              <img
                src={currentImage}
                alt={bike.name}
                className="w-full h-72 max-h-96 object-contain rounded-lg border-2 border-gray-300"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {bike.additionalImages?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => setCurrentImage(img)}
                  className={`w-24 h-24 object-contain rounded-lg cursor-pointer transition-all ${
                    currentImage === img
                      ? "border-4 border-red-500"
                      : "border-2 border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between bg-red-50 p-6 rounded-lg shadow-md">
            <div>
              {/* Title */}
              <h1 className="text-4xl font-bold text-black mb-4">
                {bike.name}
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-700 mb-6">{bike.description}</p>

              {/* Price */}
              <p className="text-2xl font-semibold text-red-600 mb-2">
                Price: {bike.price}
              </p>

              {/* Discount */}
              <p className="text-lg font-medium text-green-500 mb-2">
                Discount: {bike.discount}
              </p>

              {/* Brand */}
              <p className="text-lg font-medium text-gray-600 mb-2">
                Brand:{" "}
                <span className="font-bold">{bike.name.split(" ")[0]}</span>
              </p>

              {/* Product Code */}
              <p className="text-lg text-gray-700 mb-4">
                Product Code:{" "}
                <span className="font-semibold">
                  #BIKE{bike.name.length * 123}
                </span>
              </p>
            </div>

            {/* Order Button */}
            <div className="mt-6">
              <button
                onClick={() => setShowModal(true)} // Show modal when button is clicked
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-all mb-4"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Long Description Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About {bike.name}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {stripHtmlTags(bike.longDescription)}
          </p>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white relative p-8 rounded-lg shadow-lg w-96">
              {!formSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Appointment Form
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div className="mb-4">
                      <label
                        className="block text-lg font-medium text-gray-700"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="mb-4">
                      <label
                        className="block text-lg font-medium text-gray-700"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Address Input */}
                    <div className="mb-4">
                      <label
                        className="block text-lg font-medium text-gray-700"
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                        required
                        placeholder="Enter your address"
                      />
                    </div>

                    {/* Date Input */}
                    <div className="mb-4">
                      <label
                        className="block text-lg font-medium text-gray-700"
                        htmlFor="date"
                      >
                        Appointment Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                        required
                      />
                    </div>

                    {/* Time Input */}
                    <div className="mb-4">
                      <label
                        className="block text-lg font-medium text-gray-700"
                        htmlFor="time"
                      >
                        Appointment Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                        required
                      />
                    </div>

                    {/* Submit and Close Buttons */}
                    <div className="flex justify-end gap-2 items-center">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-black transition-all w-32"
                      >
                        Submit
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-red-700 transition-all w-32"
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto">
                    <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
                      Thank You for Your Submission!
                    </h2>
                    <p className="text-lg text-gray-700 text-center mb-6">
                      Your appointment request has been successfully submitted.
                      We will review the details and contact you shortly to
                      confirm your appointment.
                    </p>
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={closeModal}
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BikeDetails;
