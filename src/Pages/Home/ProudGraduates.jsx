import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import aboutteam2 from "../../assets/aboutteam2.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import './ProudGrad.css';
import GraduateCard from '../../Components/GraduateCard';

const ProudGraduates = () => {
  return (
    <div className="">
      <h1 className='text-[25px] font-semibold text-center my-[20px]'>Our Proud Graduates</h1>
      <div className="flex md:flex-row flex-col gap-[10px] md:ml-[15px]">
        <div className='pb-[30px] px-[20px] md:px-0 md:w-[40%] w-[90%] '>
          <Swiper  
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            navigation
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]} 
            className="mySwiper "
          >
            <SwiperSlide className=" flex justify-center items-center"><GraduateCard/></SwiperSlide>
            <SwiperSlide className=" flex justify-center items-center"><GraduateCard/></SwiperSlide>
            <SwiperSlide className=" flex justify-center items-center"><GraduateCard/></SwiperSlide>
            <SwiperSlide className=" flex justify-center items-center"><GraduateCard/></SwiperSlide>
            <SwiperSlide className=" flex justify-center items-center"><GraduateCard/></SwiperSlide>
          </Swiper>
        </div>
        <div className="grid md:grid-cols-4 md:grid-rows-3 grid-cols-2 lg:gap-[20px] gap-[8px] lg:gap-rows-[15px]  ">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="">
              <img src={aboutteam2} className="lg:h-[150px] lg:w-[150px] h-[100px] w-[100px]  rounded-[5px] border-gray-200 border-[5px] "/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProudGraduates;
