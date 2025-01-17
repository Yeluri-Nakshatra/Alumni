import React from 'react'
import Header from '../../shared/header'
import Footer from '../../shared/Footer/Footer'
import Hero from '../../Components/Hero'
import TopEvents from '../../Components/TopEvents'
import ProudGraduates from './ProudGraduates'
const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <TopEvents/>
        <ProudGraduates/>
        <Footer/>
    </div>
  )
}

export default Home