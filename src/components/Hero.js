import React from "react";
import Slider from "react-slick";

// Sample images for the slider
const sliderImages = [
  { src: "https://srmbio.com/storage/2024/04/Pink-Blue-Yellow-Creative-3d-Extra-Discount-Banner-Landscape-2-1.png", alt: "Promo 1" },
  { src: "https://srmbio.com/storage/2024/04/Pink-Blue-Yellow-Creative-3d-Extra-Discount-Banner-Landscape-2-1.png", alt: "Promo 2" },
  { src: "https://srmbio.com/storage/2024/04/Pink-Blue-Yellow-Creative-3d-Extra-Discount-Banner-Landscape-2-1.png", alt: "Promo 3" },
];

// Sample images for the promotional banners below the slider
const promotionalBanners = [
  { src: "https://img.freepik.com/free-vector/yellow-sale-banner-template_1361-1255.jpg?semt=ais_hybrid", alt: "Promo Banner 1" },
  { src: "https://www.shutterstock.com/image-vector/flash-sale-promotion-banner-25-600nw-2159885029.jpg", alt: "Promo Banner 2" },
];

const Hero = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="mt-24 lg:mt-40 container mx-auto h-full bg-no-repeat bg-cover bg-center">
      {/* Slider Section */}
      <Slider {...settings}>
        {sliderImages.map((image, index) => (
          <div key={index} className="h-full">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full lg:h-[400px] h-[180px] object-cover" 
            />
          </div>
        ))}
      </Slider>

      {/* Promotional Banners Section */}
      <div className="flex justify-around mt-6">
        {promotionalBanners.map((banner, index) => (
          <div key={index} className="flex-1 m-2">
            <img 
              src={banner.src} 
              alt={banner.alt} 
              className="w-full h-[80px] lg:h-[300px] lg: object-cover rounded-md" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
