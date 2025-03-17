import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const AllCategories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const cachedData = localStorage.getItem("cachedCategories");
      const now = new Date().getTime();

      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);

        if (now - timestamp < 3600000) {
          console.log("Using cached data");
          setCategories(data);
          setLoading(false);
          return;
        }
      }

      try {
        const response = await fetch(
          "https://bikemart.blacktechcorp.com/public/api/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const result = await response.json();
        console.log("API Response:", result);

        if (result.data && Array.isArray(result.data)) {
          const transformedCategories = result.data.map((category) => ({
            name: category.name,
            image: `https://bikemart.blacktechcorp.com/public/${category.image}`,
            slug: category.slug,
          }));

          setCategories(transformedCategories);

          const cacheData = {
            data: transformedCategories,
            timestamp: now,
          };
          localStorage.setItem("cachedCategories", JSON.stringify(cacheData));
        } else {
          throw new Error("Invalid data format: expected an array");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Slider settings
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
    <section className="mt-4 lg:mt-16 max-w-7xl mx-auto px-4 lg:px-0">
      <div className="flex justify-between mt-4 items-center my-8 lg:mb-12">
        <h2 className="text-xl sm:text-3xl font-extrabold text-red-600 tracking-wide uppercase">
          <span className="inline-block border-b-4 border-red-500 pb-2">
            All Categories
          </span>
        </h2>
        <button
          className="text-sm sm:text-base bg-red-500 text-white font-medium px-4 py-2 rounded-md hover:bg-red-600 transition-all"
          onClick={() => navigate("/all-categories")}
        >
          See All
        </button>
      </div>

      {/* Slider */}
      <Slider {...sliderSettings}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-4 bg-white cursor-pointer flex flex-col border border-red-200 items-center justify-center shadow-lg rounded-lg hover:shadow-xl transition-all"
            onClick={() => navigate(`/category/${category.slug}`)}
          >
            <div className="rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[120px] lg:h-[160px] object-cover rounded-lg"
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
