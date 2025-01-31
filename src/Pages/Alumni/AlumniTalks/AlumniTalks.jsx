import React from 'react'
import person from "../../../assets/aboutteam2.jpg";

const AlumniTalks = () => {
  const student = [
    { photo: person, name: "John Doe", class: "Class of 2015", job: "Software Engineer at Google" },
    { photo: person, name: "John Doe", class: "Class of 2015", job: "Software Engineer at Google" },
    { photo: person, name: "John Doe", class: "Class of 2015", job: "Software Engineer at Google" },
    { photo: person, name: "John Doe", class: "Class of 2015", job: "Software Engineer at Google" },
    { photo: person, name: "John Doe", class: "Class of 2015", job: "Software Engineer at Google" },
  ];

  return (
    <div className="mt-[80px] md:mt-[100px] lg:mt-[170px] flex justify-center items-center flex-col gap-[30px] mb-[20px]">
      <div className="h-[150px] bg-gray-300 w-[90%] flex flex-col justify-center items-center gap-[10px]">
        <div className="text-[30px] font-bold text-[black]">Alumni Talks</div>
        <div className="text-[15px] font-bold text-[black] text-center">Hear from our successful alumni and their inspiring journeys</div>
      </div>

      {/* Updated flex container with explicit gap */}
      <div className="flex flex-row flex-wrap  justify-center gap-x-[50px] gap-y-[30px] ">
        {student.map((item, index) => (
          <div key={index} className="h-[250px] w-[270px]  rounded-[5px] shadow-lg shadow-gray-400 flex flex-col justify-center items-center gap-[5px]">
            
              <img src={item.photo} className="h-[50px] w-[50px] rounded-[50%]" />
              <div className="text-[20px] font-bold text-[black]">{item.name}</div>
              <div className="text-[10px] font-bold text-[gray]">{item.class}</div>
              <div className="text-[15px] font-bold text-[black]">{item.job}</div>
              <div className="h-[30px] w-[100px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
                View Story
              </div>
            
          </div>
        ))}
      </div>

      
      <div className="h-[170px] bg-gray-300 w-[90%] flex flex-col justify-center items-center gap-[10px]">
        <div className="text-[30px] font-bold text-[black]">Share your Story</div>
        <div className="text-[15px] font-bold text-[black] text-center">Are you an alumnus?We'd love to feature your journey and inspire others</div>
        <div className="h-[30px] w-[120px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
               Contact US
              </div>
      </div>


    </div>
  );
};

export default AlumniTalks;
