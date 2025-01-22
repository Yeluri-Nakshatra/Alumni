import React from "react";
import AboutUs from "../../Components/AboutUs";
import OurTeam from "../../Components/OurTeam";
import Partners from "../../Components/Partners";
import Hero from "../../Components/Hero";
import Description from "../../Components/Description";
import Cards from "../../Components/Cards";
const About = () => {
  return (
    <div className=" mt-20 md:mt-26 px-4 sm:px-8 lg:mt-[110px] ">
      <Hero />
      <Description />
      <Cards />
      <OurTeam />
      <Partners />
    </div>
  );
};
export default About;
