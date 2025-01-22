import React from "react";
import { FaTools, FaThumbsUp, FaMotorcycle, FaUserShield } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaMotorcycle className="text-4xl text-red-600" />,
      title: "Wide Range of Bikes",
      description: "We offer a diverse selection of motorcycles to suit every rider's needs and preferences.",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-red-600" />,
      title: "Quality Assurance",
      description: "Every bike is inspected to ensure top-notch quality and performance.",
    },
    {
      icon: <FaTools className="text-4xl text-red-600" />,
      title: "Expert Service",
      description: "Our certified technicians provide exceptional maintenance and repair services.",
    },
    {
      icon: <FaUserShield className="text-4xl text-red-600" />,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority, and we ensure a seamless buying experience.",
    },
  ];

  return (
    <section className="mt-16 bg-red-50 py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-600 tracking-wide uppercase mb-8">
          <span className="inline-block border-b-4 border-red-500 pb-2">
            Why Choose Us
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-all text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
