
import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import carousel from "../../../assets/Eventsimg2.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';
const Workshops = () => {

const upcoming=[
  {photo:carousel,name:"Ai/Ml",mentor:"santhosh kumar",branch:"Btech cse"},
  {photo:carousel,name:"Ai/Ml",mentor:"santhosh kumar",branch:"Btech cse"},
  {photo:carousel,name:"Ai/Ml",mentor:"santhosh kumar",branch:"Btech cse"},
]
const completed=[
  {photo:carousel,name:"Ai/Ml",mentor:"santhosh kumar",branch:"Btech cse"},
  {photo:carousel,name:"Ai/Ml",mentor:"santhosh kumar",branch:"Btech cse"},
  {photo:carousel,name:"Ai/Ml",mentor:"santhosh kumar",branch:"Btech cse"},
]

  return (
    <div className="mt-[90px] lg:mt-[160px] mb-[20px]">

      {/*search and filter box*/}
      <div className="flex flex-row gap-[20px] md:justify-end md:mr-[80px] ml-[30px] ">
        <div className="relative ">
          <input placeholder="Search a Workshop" className=" px-[5px] text-[gray] text-[15px] w-[200px]  font-bold border border-black h-[40px]"/>
          <div><IoSearchOutline  className="text-[white] p-1  h-[40px] bg-blue-950 w-[34px] text-[20px] absolute right-0 top-0" /></div>
        </div>
        <div className="h-[40px] w-[80px] border border-black flex flex-row gap-[5px] justify-center items-center">
          <div><CiFilter className="text-[black] text-[20px] font-bold" /></div>
          <div className="text-[gray] font-bold text-[17px]">Filters</div>
        </div>
        </div>
      <div className="font-bold text-[25px] text-center mt-[20px]">Live workshops</div>


      {/*carosuel*/}
      <div className="md:flex md:justify-center md:items-center">
        <div className='p-[20px] rounded-xl mt-[30px] md:w-[85%] md:h-[80%] '>
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable:true
      }}
      navigation
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      slidesPerView={1}

      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide><img src={carousel} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel} className='rounded-xl ' /></SwiperSlide>
      <SwiperSlide><img src={carousel} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel} className='rounded-xl' /></SwiperSlide>
      <SwiperSlide><img src={carousel} className='rounded-xl' /></SwiperSlide>
    </Swiper>
  </div>
  </div>



     {/*upcoming workshops*/}
     <div className="font-bold text-center text-[black] text-[25px] mt-[20px]">Upcoming  Workshops</div>
     <div className="flex flex-row flex-wrap  justify-center gap-x-[50px] gap-y-[30px] mt-[40px] ">
        {upcoming.map((item, index) => (
          <div key={index} className="h-[270px] w-[300px]  rounded-[5px] shadow-lg shadow-gray-400 flex flex-col justify-center items-center gap-[5px]">
            
              <img src={item.photo} className="h-[150px] w-[90%] rounded-[5px]" />
              <div className="text-[18px] font-bold text-[black]">{item.name}</div>
              <div className="text-[20px] font-bold text-[gray]">{item.mentor}</div>
              <div className="text-[15px] font-bold text-[gray]">{item.branch}</div>
          </div>
        ))}
      </div>


      {/*completed workshops*/}
      <div className="font-bold text-center text-[black] text-[25px] mt-[20px]">Completed Workshops</div>
     <div className="flex flex-row flex-wrap  justify-center gap-x-[50px] gap-y-[30px] mt-[40px] ">
        {completed.map((item, index) => (
          <div key={index} className="h-[270px] w-[300px]  rounded-[5px] shadow-lg shadow-gray-400 flex flex-col justify-center items-center gap-[5px]">
            
              <img src={item.photo} className="h-[150px] w-[90%] rounded-[5px]" />
              <div className="text-[18px] font-bold text-[black]">{item.name}</div>
              <div className="text-[20px] font-bold text-[gray]">{item.mentor}</div>
              <div className="text-[15px] font-bold text-[gray]">{item.branch}</div>
          </div>
        ))}
      </div>

     
     

      </div>
  )
}

export default Workshops