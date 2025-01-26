import React from "react";
import OtherHero from "../components/OtherHero";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Yamaha",
    image:
      "https://www.bikebd.com/den/storage/app/files/shares/images/productimages/yamaha-r15-v4628a0297c2cff.webp",
  },
  {
    name: "Suzuki",
    image:
      "https://apiprod.suzuki.com.bd/api/user/media/cdn/product%2Foriginal-3ba3ce53-ea4c-43ce-ba7f-9f952f89ab28.webp",
  },
  {
    name: "Kawasaki",
    image:
      "https://imgd.aeplcdn.com/476x268/n/cw/ec/124863/ninja-400-right-front-three-quarter.gif?isig=0",
  },
  {
    name: "Honda",
    image:
      "https://images.othoba.com/images/thumbs/0622585_honda-cbr-indo-black.webp",
  },
  {
    name: "Ducati",
    image:
      "https://images.ctfassets.net/x7j9qwvpvr5s/5rGh3VR3kzzqKuYZYJsaHs/a46d226911cde8756569224832623a87/Panigale-V4-S-7G-MY25-Model-Blocks-630x390_v02.png",
  },
];

const AllCategoriesPage = () => {
    const navigate = useNavigate();
  return (
    <>
      <OtherHero
        title="Our Collections"
        description="Select your partner for long ride"
      />
      <section className="mt-8 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-4 bg-white cursor-pointer flex flex-col border border-red-200 items-center justify-center shadow-lg rounded-lg hover:shadow-xl transition-all"
              onClick={() => navigate(`/category/${category.name}`)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[150px] object-contain rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllCategoriesPage;
