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
import HomeHeroBelow from "../../components/HomeHeroBelow";
const Home = () => {
  return (
    <div>
      <Homehero />
      <HomeHeroBelow/>
      <TopEvents />
      <ProudGraduates />
      <Testimonals />
      <HomeAbout />
      <Network />
      <HomeEvents />
      
      <HomeGetInvolved />
    </div>
  );
};
export default Home;
