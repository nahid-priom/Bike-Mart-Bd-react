import React, { useEffect, useState } from "react";
import OtherHero from "../components/OtherHero";
import { useNavigate } from "react-router-dom";

const AllCategoriesPage = () => {
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
        const response = await fetch("/public/api/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const result = await response.json();
        console.log("API Response:", result);

       
        if (result.data && Array.isArray(result.data)) {
          
          const transformedCategories = result.data.map((category) => ({
            name: category.name,
            image: `/public/${category.image}`, 
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


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="flex flex-col items-center space-y-4">
          
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>

         
          <p className="text-xl font-semibold text-white">Loading...</p>

          
          <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
            Please wait while we fetch the latest collections.
          </p>
        </div>
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <OtherHero
        title="Our Collections"
        description="Select your partner for long ride"
      />
      <section className="mt-8 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-white cursor-pointer flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-red-700 relative overflow-hidden"
              onClick={() => navigate(`/category/${category.slug}`)}
            >
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-500 opacity-100 transition-opacity"></div>

             
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[150px] object-contain rounded-lg z-10"
              />

              
              <h3 className="text-xl font-bold mt-4 z-10 group-hover:text-red-500 transition-colors">
                {category.name}
              </h3>

             
              <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg opacity-100 transition-opacity z-10 hover:bg-red-700">
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllCategoriesPage;