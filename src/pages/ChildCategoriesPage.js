import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import OtherHero from "../components/OtherHero";

const categories = [
  {
    name: "Yamaha",
    description: "Yamaha produces high-quality bikes known for their reliability and performance.",
    image: "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
    children: [
      {
        name: "Yamaha R15",
        image: "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
        price: "BDT 5,67,000"
      },
      {
        name: "Yamaha MT-15",
        image: "https://www.yamaha-motor-india.com/theme/v4/images/webp_images/mt_series/mt15v2/color/color_01.webp",
        price: "BDT 4,67,000"
      },
      {
        name: "Yamaha FZS",
        image: "https://www.yamaha-motor-india.com/theme/v4/images/webp_images/fz_series_all/fzs-fi-v4/color/metallicBlack.webp",
        price: "BDT 3,67,000"
      },
    ],
  },
 
];

const ChildCategoryPage = () => {
    const navigate = useNavigate();
  const { name } = useParams();
  const category = categories.find((category) => category.name === name);

  if (!category) {
    return <h1 className="text-center text-red-600 text-2xl mt-10">Category Not Found</h1>;
  }

  return (
    <>
      <OtherHero title={category.name} description="Select your partner for a long ride" />
      <section className="mt-8 max-w-7xl mx-auto px-4">
        {/* Category Details */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mt-6">{category.description}</p>
        </div>

        {/* Child Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {category.children.map((child, index) => (
            <div
              key={index}
              className="p-4 bg-white cursor-pointer relative flex flex-col items-center border border-gray-200 shadow-md rounded-lg hover:shadow-lg transition-all"
              onClick={() => navigate(`/bike/${child.name}`)}
            >
              <img
                src={child.image}
                alt={child.name}
                className="w-full h-[150px] object-contain rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
                {child.name}
              </h3>
              <div className="absolute top-0 left-0 rounded-t-lg bg-red-500 text-white px-3 py-1 text-sm font-bold">
                {child.price}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ChildCategoryPage;
