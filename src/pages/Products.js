import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OtherHero from "../components/OtherHero";

const ProductsPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  console.log(slug);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://bikemart.blacktechcorp.com/public/api/category-wise-products/${slug}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const result = await response.json();
        console.log("API Response:", result);

        if (result.data && Array.isArray(result.data)) {
            const transformedBikes = result.data.map((bike) => ({
                name: bike.name,
                image: `https://bikemart.blacktechcorp.com/public/${bike.image}`,
                price: `BDT ${bike.current_price}`,
                discount: calculateDiscount(bike.current_price, bike.old_price),
                description: bike.shortDescription.replace(/<[^>]+>/g, ""), 
                slug: bike.slug,
              }));
          setProducts(transformedBikes);
        } else {
          throw new Error("Invalid data format: expected an array");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug]);
  const calculateDiscount = (currentPrice, oldPrice) => {
    if (!oldPrice || oldPrice === "0.00") return "0%";
    const discount = ((oldPrice - currentPrice) / oldPrice) * 100;
    return `${Math.round(discount)}%`;
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xl font-semibold text-white">Loading...</p>
          <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
            Please wait while we fetch the latest products.
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
        title="Bike Models"
        description="Explore our wide range of Bikes"
      />
      <section className="mt-8 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-4 bg-white cursor-pointer shadow-md h-88 lg:h-96 border border-red-200 rounded-lg hover:shadow-xl transition-all relative"
              onClick={() => navigate(`/bike/${product.slug}`)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                 src={product.image}
                  alt={product.name}
                  className="w-full h-[120px] lg:h-[180px] object-contain"
                />
                <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 text-sm font-bold">
                  {product.price}
                </div>
              </div>

              <div className="absolute top-0 lg:top-4 -right-2 lg:right-2 bg-white text-red-500 border border-red-500 text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full animate-bounce">
                {product.discount}
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-sm lg:text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-[10px] mt-2">
                  {product.description
                    ? product.description.split(" ").slice(0, 20).join(" ") + "..."
                    : "No description available"}
                </p>

                <button className="mt-4 px-4 py-2 bg-red-50 text-red-500 font-bold border border-red-500 hover:text-white text-sm rounded-md hover:bg-red-600 transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;