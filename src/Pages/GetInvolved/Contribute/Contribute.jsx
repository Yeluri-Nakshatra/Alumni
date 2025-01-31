import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import carddata from "./ContributeData";
import person from "../../../assets/aboutteam2.jpg";
import { IoMdShare } from "react-icons/io";

const Contribute = () => {
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
    <div className="flex flex-col md:mt-[120px] mt-[60px] lg:mt-[170px] md:gap-[10px] lg:gap-[6px] justify-center ">
      
      {/* Categories Tabs */}
      <div className="flex flex-row flex-wrap gap-[10px] justify-center">
        {data.map((item, index) => (
          <button
            key={index}
            className={`md:ml-[10px] md:flex hidden h-[50px] w-[200px] px-[13px] justify-between items-center rounded-[30px] 
            text-[15px] border-l-[3px] transition-all duration-200
            ${selectedCategory === item.name ? "bg-blue-950 text-white" : "bg-gray-200 text-black hover:bg-gray-300"}`}
            onClick={() => setSelectedCategory(item.name)}
          >
            <div className="flex flex-row w-full">
              <div>{item.name}</div>
              <div className="ml-auto">{item.num}</div> {/* Properly aligns numbers */}
            </div>
          </button>
        ))}
      </div>

      {/* Add spacing between tabs and cards */}
      <div className="mt-[30px"></div>

      {/* Cards Section */}
      <div className="flex lg:flex-wrap lg:flex-row flex-col md:ml-0 ml-[-25px] gap-[10px] md:h-auto md:overflow-y-auto md:mr-[5px] justify-center items-center">
        {filteredCards.length > 0 ? (
          filteredCards.map((item, index) => (
            <div key={index} 
              className="lg:w-[48%] w-[90%] md:h-[260px] w-[330px]  ml-[20px] p-[20px] shadow-lg shadow-gray-400 flex justify-center items-center md:flex-row flex-col gap-[5px]">
              <div>
                <div>
                  <img src={person} className="md:h-[200px] h-[150px] md:w-[300px] w-[300px] rounded-[4px]" />
                </div>
              </div>

              <div className="flex flex-col gap-[15px] ml-[10px]">
                <div className="flex flex-row justify-between items-center">
                  <div className="text-[22px] text-black hover:text-blue-950 w-[50%]">{item.title}</div>
                  <div><IoMdShare /></div>
                </div>
                <div className="text-[16px]">{item.complete}</div>
                <div className="h-[8px] md:w-[400px] w-[300px] bg-blue-950 rounded-[10px]"></div>

                <div className="flex md:flex-row flex-col justify-between">
                  <div className="flex flex-row gap-[5px] items-center">
                    <div className="h-[17px] w-[17px] bg-green-500 rounded-full flex justify-center items-center">
                      <TiTick className="text-white" />
                    </div>
                    <div className="text-green-500 text-[16px]">Contribution goal achieved</div>
                  </div>
                  <div className="text-[15px] text-black">6 people contributed</div>
                </div>

                <button className="h-[30px] bg-blue-950 text-white flex flex-row gap-[5px] justify-center items-center cursor-pointer rounded-lg">
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

export default Contribute;
