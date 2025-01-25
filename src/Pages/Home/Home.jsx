import React from 'react'
import Homehero from '../../Components/Homehero'
import TopEvents from '../../Components/TopEvents'
import ProudGraduates from './ProudGraduates'
import HomeAbout from '../../Components/HomeAbout'
import HomeEvents from '../../Components/HomeEvents'
import HomeGetInvolved from '../../Components/HomeGetInvolved'
import {InfiniteMovingCardsDemo} from "../../accernity/InfiniteMovingCardsDemo";
import {LayoutGridDemo} from "../../accernity/LayoutGridDemo";
const Home = () => {
  return (
    <div>

      <Homehero />
      <TopEvents />
      <ProudGraduates />
      <HomeAbout />
      <HomeEvents />
      <LayoutGridDemo/>
      <InfiniteMovingCardsDemo />
      <HomeGetInvolved />

    </div>
  )
}

export default Home