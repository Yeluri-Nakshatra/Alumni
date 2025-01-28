import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';
import aboutteam2 from "../../assets/aboutteam2.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './ProudGrad.css';
import GraduateCard from '../../Components/GraduateCard';
const ProudGraduates = () => {
  return (
    <div>
       <h1 className='text-[25px] font-semibold text-center my-[20px]'>Our Proud Graduates</h1>
    
    <div className="flex md:flex-row flex-col gap-[10px]">
      
    <div className='pb-[30px] px-[20px] md:px-0 md:w-[40%] w-[90%] '>
       
        <Swiper  
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
       
      }}
      navigation
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
      <SwiperSlide><GraduateCard/></SwiperSlide>
      <SwiperSlide><GraduateCard/></SwiperSlide>
      <SwiperSlide><GraduateCard/></SwiperSlide>
      <SwiperSlide><GraduateCard/></SwiperSlide>
      <SwiperSlide><GraduateCard/></SwiperSlide>

     
    </Swiper>
  </div>
  <div className="grid md:grid-cols-5 md:grid-rows-3 grid-cols-2 gap-[10px] gap-[6px] ml-[15px]">
    <div><img src={aboutteam2} className="h-[150px] w-[150px] rounded-[5px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
    <div><img src={aboutteam2} className="h-[150px] w-[150px]"/></div>
  </div>
  </div>
  </div>
  )
}

export default ProudGraduates




