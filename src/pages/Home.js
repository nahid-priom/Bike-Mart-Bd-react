import React from "react";

import Hero from "../components/Hero";
import FeaturedBikes from "../components/FeaturedBikes";
import YamahaBikes from "../components/YamahaBikes";
import WhyChooseUs from "../components/WhyChoose";
import AllCategories from "../components/Categories";
import ContactUs from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <AllCategories/>
      <FeaturedBikes />
      <YamahaBikes />
      <WhyChooseUs/>
      <ContactUs/>
    </div>
  );
};

export default Home;
