import React from "react";

import WhyChooseUs from "../components/WhyChoose";

import ContactUs from "../components/Contact";
import AboutHero from "../components/AboutHero";
import Mission from "../components/Mission";
import AboutTimeline from "../components/AboutTimeline";


const Home = () => {
  return (
    <div>
      <AboutHero />
      <Mission/>
      <AboutTimeline/>

      <WhyChooseUs/>
      <ContactUs/>
    </div>
  );
};

export default Home;
