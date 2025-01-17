import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './ProudGrad.css';
import GraduateCard from '../../Components/GraduateCaRd';
const ProudGraduates = () => {
  return (
    <div className='pb-[30px] px-[20px] md:px-0'>
        <h1 className='text-[25px] font-semibold text-center my-[20px]'>Our Proud Graduates</h1>
        <Swiper  pagination={{
        dynamicBullets: true,
        clickable:true
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
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
  )
}

export default ProudGraduates




