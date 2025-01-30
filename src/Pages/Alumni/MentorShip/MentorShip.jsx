import React, { useState } from "react";
import Promote from "./Promote";
import Analytics from "./Analytics";
import Mentors from "./Mentors";
import Mentees from "./Mentees";

const MentorShip = () => {
  const [selectedTab, setSelectedTab] = useState("Promote Mentorship");

  const data = [
    { name: "Analytics", component: <Analytics /> },
    { name: "Promote Mentorship", component: <Promote /> },
    { name: "View Mentors List", component: <Mentors /> },
    { name: "View Mentees List", component: <Mentees /> },
  ];

  return (
    <div className="flex flex-col gap-[30px] mt-[100px] mb-[20px]">
      {/* Buttons Section */}
      <div className="flex md:flex-row flex-col gap-[10px] justify-center ml-[60px]">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(item.name)}
            className={`bg-gray-300 h-[50px] w-[250px] px-[20px] flex justify-between items-center 
              text-[15px]  transition-all duration-200 border-[black]
              ${selectedTab === item.name ? "bg-gray-500 text-white border-l-[3px]" : ""}
            `}
          >
            <div>{item.name}</div>
          </button>
        ))}
      </div>

      {/* Dynamic Content Section */}
      <div>{data.find((item) => item.name === selectedTab)?.component}</div>
    </div>
  );
};

export default MentorShip;
