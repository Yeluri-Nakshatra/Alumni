import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import carddata from "./NewsData";
import person from "../../../assets/aboutteam2.jpg"
import { IoMdShare } from "react-icons/io";
const NewsLetter = () => {
  // Categories list (Ensure category names match those in carddata)
  const data = [
    { name: "All", num: "14" },
    { name: "Academic Scholarship", num: "3" },
    { name: "Development", num: "3" },
    { name: "Social", num: "5" },
    { name: "Financial Assistance", num: "5" }
  ];

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter cards based on selected category
  const filteredCards = selectedCategory === "All"
    ? carddata
    : carddata.filter(item => item.category === selectedCategory);

  return (
    <div className='flex flex-row mt-[100px] gap-[20px] justify-center'>

      {/* Categories */}
    
      <div className="flex flex-col gap-[10px] h-[85vh] overflow-y-auto">
  {data.map((item, index) => (
    <button
      key={index}
      className={`md:flex hidden h-[50px] w-[370px] px-[20px] justify-between items-center 
        text-[23px] border-l-[3px] transition-all duration-200
        ${selectedCategory === item.name ? "border-black bg-gray-200" : "bg-gray-200 text-black hover:bg-gray-300"}`}
      onClick={() => setSelectedCategory(item.name)}
    >
      <div className="flex flex-row w-full">
        <div>{item.name}</div>
        <div className="ml-auto">{item.num}</div> {/* Properly aligns numbers */}
      </div>
    </button>
  ))}
</div>


      {/* Cards */}
      <div className="flex flex-col md:ml-[0px] ml-[-25px] gap-[15px] md:h-[85vh] md:overflow-y-auto">
        {filteredCards.length > 0 ? (
          filteredCards.map((item, index) => (
            <div key={index} className="md:h-[250px]  w-[330px] md:w-auto h-[450px] p-[15px] shadow-lg shadow-gray-300 flex justify-center  items-center md:flex-row flex-col  gap-[5px] md:gap-[9px]">
              <div>
                <div>
                  <img src={person} className="h-[200px] md:w-[300px] md:w-[200px] w-[300px] rounded-[4px] "/>
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <div class="flex flex-row justify-between items-center">
                <div className="text-[20px] text-black hover:text-blue-950 w-[50%]">{item.title}</div>
                <div><IoMdShare /></div>
                </div>
                <div className="text-[15px]">{item.complete}</div>
                <div className="h-[8px] md:w-[450px] w-[300px] bg-blue-950 rounded-[10px]"></div>

                <div className="flex md:flex-row flex-col justify-between">
                  <div className="flex flex-row gap-[5px] items-center">
                    <div className="h-[17px] w-[17px] bg-green-500 rounded-full flex justify-center items-center">
                      <TiTick className="text-white" />
                    </div>
                    <div className="text-green-500 text-[15px]">Contribution goal achieved</div>
                  </div>
                  <div className="text-[20px] text-black">6 people contributed</div>
                </div>

                <button className="h-[50px] bg-blue-950 text-white flex flex-row gap-[5px] justify-center items-center cursor-pointer">
                  <FaHeart className="text-white" />
                  <span>CONTRIBUTE NOW</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-[20px] text-gray-600">No data available for this category.</div>
        )}
      </div>

    </div>
  );
};


export default NewsLetter;

    

