import React from "react";

const ContactUs = () => {
  return (
    <section className="mt-16 max-w-7xl mx-auto px-4 lg:px-0">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-red-600 tracking-wide uppercase mb-8 text-center">
        <span className="inline-block border-b-4 border-red-500 pb-2">
          Contact Us
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.525369671941!2d90.3654210154325!3d23.771586793484837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f9f97dbebb%3A0x3c2dd1d3826a7a7e!2sPlot%3A%209%2FE%2C%20Extension%20Pallabi%2C%20Mirpur%2C%20Dhaka%201216%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1619154227888!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
            title="Bike Mart Location"
          ></iframe>
        </div>

        {/* Contact Details */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to us for any inquiries or support.
          </p>

          {/* Address */}
          <div className="flex items-start mb-4 flex-wrap sm:flex-nowrap">
            <span className="text-red-500 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-red-100">
              📍
            </span>
            <p className="text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
              Plot: 9/E, Extension Pallabi, Mirpur, Dhaka
            </p>
          </div>

          {/* Email */}
          <div className="flex items-start mb-4 flex-wrap sm:flex-nowrap">
            <span className="text-red-500 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-red-100">
              📧
            </span>
            <p className="text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
              bikemartbd@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-start flex-wrap sm:flex-nowrap">
            <span className="text-red-500 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-red-100">
              📞
            </span>
            <p className="text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
              +880 1711-347182
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
