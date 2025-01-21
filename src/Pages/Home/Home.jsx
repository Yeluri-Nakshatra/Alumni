import React from 'react'
import Hero from '../../Components/Hero'
import TopEvents from '../../Components/TopEvents'
import ProudGraduates from './ProudGraduates'
import HomeAbout from '../../Components/HomeAbout'
import HomeEvents from '../../Components/HomeEvents'
import HomeGetInvolved from '../../Components/HomeGetInvolved'
const Home = () => {
  return (
    <div>
        
        <Hero/>
        <TopEvents/>
        <ProudGraduates/>
        <HomeAbout/>
        <HomeEvents/>
        <HomeGetInvolved/>
        
    </div>
  )
}

export default Home