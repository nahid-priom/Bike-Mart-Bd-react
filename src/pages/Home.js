import React from "react";

import Hero from "../components/Hero";
import FeaturedBikes from "../components/FeaturedBikes";
import WhyChooseUs from "../components/WhyChoose";
import AllCategories from "../components/Categories";
import ContactUs from "../components/Contact";

const Home = () => {
  return (
    <div className="bg-red-50">
      <Hero />
      <AllCategories/>
      <FeaturedBikes />
     
      <WhyChooseUs/>
      <ContactUs/>
    </div>
  );
};

export default Home;
