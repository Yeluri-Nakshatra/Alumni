import React from 'react'
import Pic from '../assets/homeabout.png'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from "react-icons/fa";
const HomeAbout = () => {
  return (
    <div className='flex  py-10 md:px-20 flex-col md:gap-10 justify-center items-center md:flex-row '>
        <div className='flex justify-center'>
            <img src={Pic} className='w-[85%]  md:w-[75%] ' />
        </div>
        <div className='flex flex-col gap-4 w-[85%] md:w-full  lg:w-[60%]'>
            <div className='text-4xl font-bold text-blue-950'>About Us</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis minima alias neque praesentium numquam, voluptates maxime nisi qui molestias sequi harum magni odit cumque rerum quae corrupti laudantium nesciunt quis.</div>
            <div className='font-bold'>10,540+ Contributors</div>
            <div>
                <Link to='/aboutus'><button className='p-2 px-4 flex flex-row gap-2 items-center text-lg bg-blue-950 text-white font-bold rounded-xl'>Know More<FaArrowCircleRight className='text-white' /></button></Link>
            </div>

        </div>
    </div>
  )
}

export default HomeAbout