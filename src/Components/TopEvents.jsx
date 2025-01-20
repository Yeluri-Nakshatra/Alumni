import React from 'react'
import EventCard from '../Pages/Home/EventCard'
const TopEvents = () => {
  return (
    <div>
        <h1 className='text-[25px] font-semibold text-center'>Top News & Events</h1>
        <h2 className='text-[25px] font-semibold px-[50px]'>Latest News</h2>
        <div className="eventcards flex justify-center gap-[20px] flex-wrap">
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        </div>
            
    </div>
  )
}

export default TopEvents