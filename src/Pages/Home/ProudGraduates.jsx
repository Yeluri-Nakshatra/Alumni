import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import aboutteam2 from "../../assets/aboutteam2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProudGrad.css";
import GraduateCard from "../../Components/GraduateCard";

// Generate Alumni Data (20 per year)
const generateAlumniData = () => {
  const years = Array.from({ length: 17 }, (_, i) => 2008 + i);
  const alumniData = {};

  years.forEach((year) => {
    alumniData[year] = Array.from({ length: 20 }, (_, i) => ({
      id: `${year}-${i}`,
      name: `Alumni ${i + 1}`,
      year: year,
      image: aboutteam2,
    }));
  });

  return alumniData;
};

const alumniData = generateAlumniData();

const ProudGraduates = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData[2024]);
  const [activeAlumni, setActiveAlumni] = useState(null);
  const scrollRef = useRef(null);

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setFilteredAlumni(alumniData[year]);
    setActiveAlumni(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-[22px] font-semibold text-center my-4">
        Our Proud Graduates
      </h1>

      

      {/* Main Layout (Grid & Swiper) */}
      <div className="flex flex-col md:flex-row gap-5 items-start mt-4">
        {/* Swiper Carousel */}
        <div className="w-full md:w-[40%]">
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
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {(activeAlumni ? [activeAlumni] : filteredAlumni).map(
              (alumni) => (
                <SwiperSlide key={alumni.id} className="flex justify-center items-center">
                  <GraduateCard name={alumni.name} image={alumni.image} />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* Alumni Grid */}
        <div>

  
  {/* Alumni Section */}
  <div className="w-full md:w-[60%]">
    {/* Year Buttons - Fixed width container with proper scrolling */}
    <div className="relative w-full">
      <div 
        ref={scrollRef}
        className="flex gap-2 pb-2 overflow-x-auto scrollbar-hide"
        style={{
          msOverflowStyle: 'none',  /* IE and Edge */
          scrollbarWidth: 'none',   /* Firefox */
        }}
      >
        {Object.keys(alumniData).map((year) => (
          <button
            key={year}
            onClick={() => handleYearClick(Number(year))}
            className={`px-4 py-2 border rounded-md transition-colors flex-shrink-0 ${
              selectedYear === Number(year)
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>

    {/* Alumni Grid - Adjusted grid layout */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-4">
      {filteredAlumni.map((alumni) => (
        <div
          key={alumni.id}
          className="cursor-pointer text-center"
          onClick={() => setActiveAlumni(alumni)}
        >
          <img
            src={alumni.image}
            alt={alumni.name}
            className="h-[80px] w-[80px] lg:h-[90px] lg:w-[90px] rounded-[5px] border-gray-200 border-[2px] mx-auto"
          />
          <p className="text-xs font-semibold mt-1">{alumni.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>
</div>

    </div>
  );
};

export default ProudGraduates;
