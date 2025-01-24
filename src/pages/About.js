import React from "react";

import WhyChooseUs from "../components/WhyChoose";

import ContactUs from "../components/Contact";

import Mission from "../components/Mission";
import AboutTimeline from "../components/AboutTimeline";
import OtherHero from "../components/OtherHero";


const Home = () => {
  return (
    <div>
      <OtherHero title="About Us" description="Passionate about motorbikes. Driven by adventure."/>
      <Mission/>
      <AboutTimeline/>

      <WhyChooseUs/>
      <ContactUs/>
    </div>
  );
};

export default Home;
