import React from 'react'
import Homehero from '../../Components/Homehero'
import TopEvents from '../../Components/TopEvents'
import ProudGraduates from './ProudGraduates'
import HomeAbout from '../../Components/HomeAbout'
import HomeEvents from '../../Components/HomeEvents'
import HomeGetInvolved from '../../Components/HomeGetInvolved'
const Home = () => {
  return (
    <div>

      <Homehero />
      <TopEvents />
      <ProudGraduates />
      <HomeAbout />
      <HomeEvents />
      <HomeGetInvolved />

    </div>
  )
}

export default Home