import React from 'react';
import Homehero from '../../Components/Homehero';
import TopEvents from '../../Components/TopEvents';
import ProudGraduates from './ProudGraduates';
import HomeAbout from '../../Components/HomeAbout';
import HomeEvents from '../../Components/HomeEvents';
import HomeGetInvolved from '../../Components/HomeGetInvolved';
import Network from '../../Components/Network';
import Testimonals from "../../accernity/Testimonals";
import {InfiniteMovingCardsDemo} from "../../accernity/InfiniteMovingCardsDemo";
import HomeHeroBelow from '../../Components/HomeHeroBelow'
import Announcement from '../../Components/Announcement';
import DistinguishedAlumni from '../../Components/DistinguishedAlumni';
const Home = () => {
  return (
    <div>
      <Homehero />
      <HomeHeroBelow/>
      <TopEvents />
      <ProudGraduates />
      <div className='flex md:flex-row flex-col w-full mt-16 md:justify-around lg:justify-evenly items-center gap-6 md:gap-0 '>
        <Announcement/>
        <DistinguishedAlumni/>

      </div>

      <Testimonals />
      <HomeAbout />
      <Network />
      <HomeEvents />
      
      <HomeGetInvolved />
    </div>
  );
};
export default Home;
