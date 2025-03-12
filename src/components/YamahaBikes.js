import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";

const FeaturedBikes = () => {
  const navigate = useNavigate();
  const [featuredBikes, setFeaturedBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedBikes = async () => {
      const cachedData = localStorage.getItem("cachedFeaturedBikes");
      const now = new Date().getTime();

      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);

        if (now - timestamp < 3600000) {
          console.log("Using cached data");
          setFeaturedBikes(data);
          setLoading(false);
          return;
        }
      }

      try {
        const response = await fetch("/public/api/product");
        if (!response.ok) {
          throw new Error("Failed to fetch featured bikes");
        }
        const result = await response.json();
        console.log("API Response:", result);

        if (result.data && Array.isArray(result.data)) {
          const transformedBikes = result.data
            .map((bike) => ({
              name: bike.name,
              image: `/public/${bike.image}`,
              price: `BDT ${bike.current_price}`,
              discount: calculateDiscount(bike.current_price, bike.old_price),
              description: bike.shortDescription.replace(/<[^>]+>/g, ""), // Remove HTML tags
              current_price: parseFloat(bike.current_price), // Add current_price for sorting
            }))
            .sort((a, b) => b.current_price - a.current_price); // Sort by current_price in descending order

          setFeaturedBikes(transformedBikes);

          const cacheData = {
            data: transformedBikes,
            timestamp: now,
          };
          localStorage.setItem("cachedFeaturedBikes", JSON.stringify(cacheData));
        } else {
          throw new Error("Invalid data format: expected an array");
        }
      } catch (error) {
        console.error("Error fetching featured bikes:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBikes();
  }, []);

  const calculateDiscount = (currentPrice, oldPrice) => {
    if (!oldPrice || oldPrice === "0.00") return "0%";
    const discount = ((oldPrice - currentPrice) / oldPrice) * 100;
    return `${Math.round(discount)}%`;
  };

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
          slidesToShow: 2,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[200px] bg-black">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xl font-semibold text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[200px]">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="mt-8 lg:mt-16 max-w-7xl mx-auto px-4 lg:px-0">
      <div className="flex justify-between items-center mt-4 my-8 lg:mb-12">
        <h2 className="text-xl sm:text-3xl font-extrabold text-red-600 tracking-wide uppercase text-center sm:text-left">
          <span className="inline-block border-b-4 border-red-500 pb-2">
            Yamaha Bikes
          </span>
        </h2>

        <button className="px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-all">
          See All
        </button>
      </div>

      <Slider {...sliderSettings}>
        {featuredBikes.map((bike, index) => (
          <div
            key={index}
            className="p-4 bg-white cursor-pointer shadow-md h-88 lg:h-96 border border-red-200 rounded-lg hover:shadow-xl transition-all relative"
            onClick={() => navigate(`/bike/${bike.name}`)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-[120px] lg:h-[180px] object-contain"
              />
              <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 text-sm font-bold">
                {bike.price}
              </div>
            </div>

            <div className="absolute top-4 right-1 lg:right-2 bg-white text-red-500 border border-red-500 text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full animate-bounce">
              {bike.discount}
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-base lg:text-lg font-semibold text-gray-800">
                {bike.name}
              </h3>
              <p className="text-gray-600 text-[10px] mt-2">
                {bike.description.split(" ").slice(0, 20).join(" ")}...
              </p>
              <Link to={`/bike/${bike.name}`}>
                <button className="mt-4 px-4 py-2 bg-red-50 text-red-500 font-bold border border-red-500 hover:text-white text-sm rounded-md hover:bg-red-600 transition-all">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedBikes;