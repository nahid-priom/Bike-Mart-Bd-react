import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const featuredBikes = [
  {
    name: "Yamaha R15",
    image:
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
    description: "A sporty 155cc bike with cutting-edge technology.",
    price: "BDT 5,40,000",
    discount: "10%", // Added discount
  },
  {
    name: "Suzuki Hayabusa",
    image:
      "https://i0.wp.com/c7.staticflickr.com/6/5687/30724074422_42c153d481_b.jpg?resize=1024%2C683&ssl=1",
    description: "The ultimate superbike with legendary performance.",
    price: "BDT 8,40,000",
    discount: "15%",
  },
  {
    name: "Honda CBR 650R",
    image:
      "https://powersports.honda.com/motorcycle/sport/-/media/products/family/cbr650r/panel-features/desktop/2024/2024-cbr650r-dohc-inline-four-engine.png",
    description: "A powerful middleweight bike for daily rides.",
    price: "BDT 9,40,000",
    discount: "5%",
  },
  {
    name: "Kawasaki Ninja 400",
    image:
      "https://imgd.aeplcdn.com/476x268/n/cw/ec/124863/ninja-400-right-front-three-quarter.gif?isig=0",
    description: "A lightweight champion for beginners and enthusiasts.",
    price: "BDT 6,40,000",
    discount: "8%",
  },
  {
    name: "Ducati Panigale V4",
    image:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/129581/panigale-v4-right-side-view-16.png?isig=0",
    description: "The pinnacle of Italian engineering and performance.",
    price: "BDT 7,40,000",
    discount: "12%",
  },
];

const FeaturedBikes = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-8 lg:mt-16  max-w-7xl mx-auto px-4 lg:px-0">
      {/* Header Section */}
      <div className="flex justify-between items-center mt-4 my-8 lg:mb-12">
        <h2 className="text-xl sm:text-3xl font-extrabold text-red-600 tracking-wide uppercase text-center sm:text-left">
          <span className="inline-block border-b-4 border-red-500 pb-2">
            Featured Bikes
          </span>
        </h2>

        <button className="px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-all">
          See All
        </button>
      </div>

      {/* Slider Section */}
      <Slider {...sliderSettings}>
        {featuredBikes.map((bike, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md h-96 border border-red-200 rounded-lg hover:shadow-xl transition-all relative"
          >
            {/* Image Section */}
            <div className="relative pt-4 overflow-hidden rounded-lg">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-[180px] object-contain"
              />
              <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 text-sm font-bold">
                {bike.price}
              </div>
            </div>

            {/* Discount Badge */}
            <div className="absolute top-4 right-2 bg-white text-red-500 border border-red-500 text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full animate-bounce">
              {bike.discount}
            </div>

            {/* Bike Details */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {bike.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{bike.description}</p>
              <button className="mt-4 px-4 py-2 bg-red-50 text-red-500 font-bold border border-red-500 hover:text-white text-sm rounded-md hover:bg-red-600 transition-all">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedBikes;
