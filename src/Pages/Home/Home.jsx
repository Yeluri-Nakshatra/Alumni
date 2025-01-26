import React from 'react'
import Homehero from '../../Components/Homehero'
import TopEvents from '../../Components/TopEvents'
import ProudGraduates from './ProudGraduates'
import HomeAbout from '../../Components/HomeAbout'
import HomeEvents from '../../Components/HomeEvents'
import HomeGetInvolved from '../../Components/HomeGetInvolved'

import Network from '../../Components/Network';

import {InfiniteMovingCardsDemo} from "../../accernity/InfiniteMovingCardsDemo";
import Testimonals from "../../accernity/Testimonals"

const Home = () => {
  return (
    <div>
      <Homehero />
      <TopEvents />
      <ProudGraduates />
      <Testimonals />
      <HomeAbout />
      <Network />
      <HomeEvents />
      <InfiniteMovingCardsDemo />
      <HomeGetInvolved />
    </div>
  );
};
export default Home;
