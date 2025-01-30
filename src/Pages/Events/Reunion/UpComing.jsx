import React from 'react'
import { useState } from 'react';
import img from '../../../assets/Reunion.png'
const UpComing = () => {
  const [showAll, setShowAll] = useState(false);
    const events = [
        { title: "Alumni Reunion - 2018", date: "Jan 30, 2025", location: "Venue XYZ", image: img },
        { title: "Alumni Reunion - 2019", date: "Feb 10, 2025", location: "Venue ABC", image: img },
        { title: "Alumni Reunion - 2020", date: "March 20, 2025", location: "Venue DEF", image: img },
        { title: "Alumni Reunion - 2021", date: "April 15, 2025", location: "Venue GHI", image: img }
      ];
  return (
    <div>
        <div className='flex flex-col gap-8 items-center'>
            <div className='text-4xl text-blue-950 font-semibold'>Upcoming Reunions</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    (showAll?events:events.slice(0,2)).map((data)=>(
                        <div className="rounded-2xl shadow-md p-4 bg-white duration-[700ms] hover:bg-blue-950 hover:bg-opacity-20">
                        <img
                          src={data.image}
                          alt="Event"
                          className="rounded-lg object-cover w-full h-48"
                        />
                        <div className="mt-4 flex flex-row justify-between ">
                          <div>
                          <h3 className="font-bold text-lg">{data.title}</h3>
                          <p className="text-gray-600">{data.location}</p>
                          </div>
                          <div className="mt-2 w-[70px]">
                            <span className="text-lg text-gray-700">{data.date}</span>
                          </div>
                        </div>
                      </div>
                    ))

                }
            </div>
            <div className="flex justify-center mt-6">
        <button
          className="bg-blue-950 text-white px-4 py-2 rounded-md shadow "
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

        </div>
    </div>
  )
}

export default UpComing