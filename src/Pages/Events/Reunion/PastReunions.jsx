import React from 'react'
import { useState } from 'react';
import img from '../../../assets/Reunion.png'
import grid1 from '../../../assets/grid1.png'
import grid2 from '../../../assets/grid2.png'
import grid3 from '../../../assets/grid3.png'
import grid4 from '../../../assets/grid4.png'
import grid5 from '../../../assets/grid5.png'
import grid6 from '../../../assets/grid6.png'
import grid7 from '../../../assets/grid7.png'
import { IoPersonSharp } from "react-icons/io5";
const PastReunions = () => {
  const [past,setPast] = useState(true);
  const [gallery,setGallery] = useState(false);
  const activePast=()=>{
    setPast(true);
    setGallery(false)
  }
  const activeGall=()=>{
    setPast(false);
    setGallery(true)
  }
      const events = [
          { title: "Alumni Reunion - 2018", date: "Jan 30, 2025", location: "Venue XYZ",time:'2:15-5:15',mem:250, image: img },
          { title: "Alumni Reunion - 2019", date: "Feb 10, 2025", location: "Venue ABC",time:'2:15-5:15',mem:500, image: img },
         
        ];
        
  return (
    <div>
        <div className='flex flex-col gap-8 items-center bg-gray-200 py-8'>
                    <div className='text-4xl text-blue-950 font-semibold'>Past Reunions</div>
                    <div className='flex flex-row bg-white rounded-xl'>
                      <div className={`h-full cursor-pointer duration-[500ms] text-lg py-1 px-4 rounded-xl ${past?'bg-blue-950 text-white':'text-blue-950'}`} onClick={activePast}>
                        Reunions
                      </div>
                      <div className={`h-full cursor-pointer duration-[500ms] text-lg py-1 px-4 rounded-xl ${gallery?'bg-blue-950 text-white':'text-blue-950'}`} onClick={activeGall}>
                        Gallery
                      </div>

                    </div>
                    {past&&(
                    <div className='grid grid-cols-1  md:grid-cols-2 gap-6'>
                        {
                            events.map((data)=>(
                                <div className="rounded-2xl shadow-md p-4  bg-white duration-[700ms] hover:bg-blue-950 hover:bg-opacity-20">
                                <img
                                  src={data.image}
                                  alt="Event"
                                  className="rounded-lg object-cover w-full h-48"
                                />
                                <div className="mt-4 flex flex-row justify-between ">
                                  <div>
                                  <h3 className="font-bold text-lg">{data.title}</h3>
                                  <p className="text-gray-600">{data.location}</p>
                                  <p className="text-gray-600">{data.time}</p>
                                  </div>
                                  <div className="mt-2 w-[70px]">
                                    <span className="text-md text-gray-700">{data.date}</span>
                                  </div>
                                  <div className="mt-2 w-[70px]">
                                    <span className="flex flex-row gap-1 text-lg text-gray-900 font-semibold items-center"><span className='text-blue-950'><IoPersonSharp/></span>{data.mem}+</span>
                                  </div>
                                </div>
                              </div>
                            ))
        
                        }
                    </div> )}
                    {
                      gallery && (
                        <div className='grid grid-cols-2 w-[98%] lg:w-[900px]  md:h-[500px] md:grid-rows-4 md:grid-cols-5 gap-2'>
                          <div className=' col-span-2 row-span-2 '>
                            <img src={grid1}  className='w-full h-full object-cover rounded-md'/>
                          </div>
                          <div className=' col-span-1 row-span-1 '>
                            <img src={grid2}  className='w-full h-full object-cover rounded-md'/>
                          </div>
                          <div className=' md:col-span-2 md:row-span-2 row-span-1 col-span-1'>
                            <img src={grid3}  className='w-full h-full object-cover rounded-md'/>
                          </div>
                          <div className='row-span-3 col-span-1 '>
                            <img src={grid5}  className='w-full h-full object-cover rounded-md'/>
                          </div>
                          <div className=' col-span-1 md:col-span-2 row-span-2 '>
                            <img src={grid4}  className='w-full h-full object-cover rounded-md'/>
                          </div>
                          
                          <div className=' col-span-1 row-span-2 '>
                            <img src={grid6}  className='w-full h-full object-cover rounded-md'/>
                          </div>
                          <div className=' col-span-1 row-span-2 '>
                            <img src={grid7}  className='w-full h-full object-cover rounded-md'/>
                          </div>

                        </div>
                      )
                    }
        
                </div>
    </div>
  )
}

export default PastReunions