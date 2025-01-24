import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import OtherHero from "./OtherHero";

// Dummy data for demonstration
const featuredBikes = [
  {
    name: "Yamaha R15",
    image:
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
    additionalImages: [
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
    ],
    description: "A sporty 155cc bike with cutting-edge technology.",
    price: "BDT 5,40,000",
    discount: "10%",
    longDescription:
      "The Suzuki Hayabusa is a legendary superbike known for its speed, aerodynamics, and iconic design. Powered by a robust 1340cc engine, it delivers breathtaking acceleration and unmatched performance on highways. It features advanced safety technology like ABS and multiple riding modes for optimal control and stability.",
  },
  {
    name: "Yamaha MT-15",
    image:
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
    additionalImages: [
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
    ],
    description: "A sporty 155cc bike with cutting-edge technology.",
    price: "BDT 5,40,000",
    discount: "10%",
    longDescription:
      "The Suzuki Hayabusa is a legendary superbike known for its speed, aerodynamics, and iconic design. Powered by a robust 1340cc engine, it delivers breathtaking acceleration and unmatched performance on highways. It features advanced safety technology like ABS and multiple riding modes for optimal control and stability.",
  },
  {
    name: "Yamaha FZ",
    image:
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
    additionalImages: [
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
    ],
    description: "A sporty 155cc bike with cutting-edge technology.",
    price: "BDT 5,40,000",
    discount: "10%",
    longDescription:
      "The Suzuki Hayabusa is a legendary superbike known for its speed, aerodynamics, and iconic design. Powered by a robust 1340cc engine, it delivers breathtaking acceleration and unmatched performance on highways. It features advanced safety technology like ABS and multiple riding modes for optimal control and stability.",
  },
  {
    name: "Suzuki Hayabusa",
    image:
      "https://i0.wp.com/c7.staticflickr.com/6/5687/30724074422_42c153d481_b.jpg?resize=1024%2C683&ssl=1",
    additionalImages: [
      "https://i0.wp.com/c7.staticflickr.com/6/5687/30724074422_42c153d481_b.jpg?resize=1024%2C683&ssl=1",
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
    ],
    description: "The ultimate superbike with legendary performance.",
    price: "BDT 8,40,000",
    discount: "15%",
    longDescription:
      "The Suzuki Hayabusa is a legendary superbike known for its speed, aerodynamics, and iconic design. Powered by a robust 1340cc engine, it delivers breathtaking acceleration and unmatched performance on highways. It features advanced safety technology like ABS and multiple riding modes for optimal control and stability.",
  },
  {
    name: "Honda CBR 650R",
    image:
      "https://powersports.honda.com/motorcycle/sport/-/media/products/family/cbr650r/panel-features/desktop/2024/2024-cbr650r-dohc-inline-four-engine.png",
    additionalImages: [
      "https://powersports.honda.com/motorcycle/sport/-/media/products/family/cbr650r/panel-features/desktop/2024/2024-cbr650r-dohc-inline-four-engine.png",
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
    ],
    description: "A powerful middleweight bike for daily rides.",
    price: "BDT 9,40,000",
    discount: "5%",
    longDescription:
      "The Suzuki Hayabusa is a legendary superbike known for its speed, aerodynamics, and iconic design. Powered by a robust 1340cc engine, it delivers breathtaking acceleration and unmatched performance on highways. It features advanced safety technology like ABS and multiple riding modes for optimal control and stability.",
  },
  // Add other bikes here...
];
const BikeDetails = () => {
  const { bikeName } = useParams();
  const bike = featuredBikes.find((bike) => bike.name === bikeName);

  // State for tracking modal and form submission status
  const [currentImage, setCurrentImage] = useState(bike?.image || "");
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  // If no bike is found, show a "Bike not found" message
  if (!bike) {
    return <h2 className="text-center mt-8">Bike not found</h2>;
  }

  // Filter out the current bike from the list to display similar bikes
  const similarProducts = featuredBikes.filter((b) => b.name !== bike.name);

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
    setFormData({ name: "", phone: "" });
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
            {bike.longDescription}
          </p>
        </div>

        {/* Similar Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Similar Bikes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((product, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-lg rounded-lg border border-gray-300 hover:shadow-xl transition-all"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-red-600 font-bold">Price: {product.price}</p>
                <Link to={`/bike/${product.name}`}>
                  <button className="mt-4 px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
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
