import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  {
    name: "Yamaha",
    image: "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
  },
  {
    name: "Suzuki",
    image: "https://apiprod.suzuki.com.bd/api/user/media/cdn/product%2Foriginal-3ba3ce53-ea4c-43ce-ba7f-9f952f89ab28.webp",
  },
  {
    name: "Kawasaki",
    image: "https://imgd.aeplcdn.com/476x268/n/cw/ec/124863/ninja-400-right-front-three-quarter.gif?isig=0",
  },
  {
    name: "Honda",
    image: "https://images.othoba.com/images/thumbs/0622585_honda-cbr-indo-black.webp",
  },
  {
    name: "Ducati",
    image: "https://images.ctfassets.net/x7j9qwvpvr5s/5rGh3VR3kzzqKuYZYJsaHs/a46d226911cde8756569224832623a87/Panigale-V4-S-7G-MY25-Model-Blocks-630x390_v02.png",
  },
];

const AllCategories = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className=" mt-4 lg:mt-16 max-w-7xl mx-auto px-4 lg:px-0">
      <h2 className="text-xl sm:text-3xl font-extrabold text-red-600 tracking-wide uppercase mb-8">
        <span className="inline-block border-b-4 border-red-500 pb-2">
          All Categories
        </span>
      </h2>
      <Slider {...sliderSettings}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-4 bg-white flex flex-col border border-red-200 items-center justify-center shadow-lg rounded-lg hover:shadow-xl transition-all"
          >
            <div className="rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[100px] object-contain rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {category.name}
              </h3>
             
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default AllCategories;
