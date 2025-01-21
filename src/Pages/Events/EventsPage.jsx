import React from 'react'
import EventsHero from '../../Components/EventsHero';
import UpComingEvents from '../../Components/UpComingEvents';
import PastEvents from '../../Components/PastEvents';
import SomeMemories from '../../Components/SomeMemories';



const EventsPage = () => {
  return (
    <div className="  mt-20 md:mt-28 lg:mt-[110px] mx-6 ">
        <EventsHero/>
        <UpComingEvents/>
        <PastEvents/>
        <SomeMemories/>
        
       
       


      
    </div>
  )
}

export default EventsPage
