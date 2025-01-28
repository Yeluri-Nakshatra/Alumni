import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import carousel from "../assets/graduation.png"
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';
const Homehero=()=>{
    return(
        <div className="md:flex md:justify-center md:items-center">
        <div className='p-[20px] rounded-xl mt-[50px] md:mt-[80px] md:w-[70%] '>
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
    );
}
export default Homehero;