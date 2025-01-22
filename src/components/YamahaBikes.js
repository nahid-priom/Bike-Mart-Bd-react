import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const yamahaBikes = [
  {
    name: "Yamaha MT-15",
    image:
      "https://www.yamaha-motor-india.com/theme/v4/images/webp_images/mt_series/mt15v2/color/color_01.webp",
    description: "A lightweight streetfighter with aggressive looks.",
    price: "BDT 3,40,000",
    discount: "10%",
  },
  {
    name: "Yamaha FZ-S V3",
    image:
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/majesty-red6427c0fec33b0.webp",
    description: "Stylish and fuel-efficient commuter bike.",
    price: "BDT 2,71,000",
    discount: "5%",
  },
  {
    name: "Yamaha R3",
    image:
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/1618906408_12_727940.jpeg",
    description: "A sporty twin-cylinder machine for enthusiasts.",
    price: "BDT 5,40,000",
    discount: "15%",
  },
  {
    name: "Yamaha XSR 155",
    image:
      "https://global.yamaha-motor.com/business/mc/lineup/xsr/img/sec02_xsr700.jpg",
    description: "Retro-styled modern bike with great handling.",
    price: "BDT 4,20,000",
    discount: "12%",
  },
];

const YamahaBikes = () => {
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
    <section className="mt-8 lg:mt-16 max-w-7xl  mx-auto px-4 lg:px-0">
      <div className="flex justify-between mt-4 items-center my-8 lg:mb-12">
        <h2 className="text-xl sm:text-3xl font-extrabold text-red-600 tracking-wide uppercase">
          <span className="inline-block border-b-4 border-red-500 pb-2">
            Yamaha Bikes
          </span>
        </h2>
        <button className="text-sm sm:text-base bg-red-500 text-white font-medium px-4 py-2 rounded-md hover:bg-red-600 transition-all">
          See All
        </button>
      </div>

      <Slider {...sliderSettings}>
        {yamahaBikes.map((bike, index) => (
          <div
            key={index}
            className="p-4 bg-white h-96 shadow-md rounded-lg border border-red-200 hover:shadow-xl transition-all"
          >
            <div className="relative pt-4 overflow-hidden rounded-lg">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-[200px] object-contain"
              />
              <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 text-sm font-bold">
                {bike.price}
              </div>
              <div className="absolute top-3 right-0 bg-white text-red-500 border border-red-500 text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full animate-bounce">
              {bike.discount}
            </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-base font-semibold text-gray-800">
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

export default YamahaBikes;
