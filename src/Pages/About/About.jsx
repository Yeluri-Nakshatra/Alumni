import React from "react";
import MainAbout from "../../Components/MainAbout";
import AboutUs from "../../Components/AboutUs";
import OurTeam from "../../Components/OurTeam";
import Partners from "../../Components/Partners";
const About = () => {
  return (
    <div className=" mt-20 md:mt-26 lg:mt-[110px] ">
      <MainAbout />
      <AboutUs />
      <OurTeam />
      <Partners />
    </div>
  );
};
export default About;
