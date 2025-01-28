import React from 'react';
import Newimage from "../../../assets/Newimage.png";
import { FaLinkedinIn } from "react-icons/fa";

const team = [
  { id: 1, name: "Alice", Professsion: "President", ID: "N21000" },
  { id: 2, name: "Bob", Professsion: "Vice President", ID: "N21001" },
  { id: 3, name: "Charlie", Professsion: "Secretary", ID: "N21002" },
  { id: 4, name: "David", Professsion: "Treasurer", ID: "N21003" },
  { id: 5, name: "David", Professsion: "Treasurer", ID: "N21003" },
];

const CoreTeam = () => {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen gap-6 p-4 mt-[50px] md:mt-[0px]">
      {team.map((member) => (
        <div key={member.id} className="relative flex flex-col items-center text-center">
          <img
            src={Newimage}
            alt={member.name}
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full border-4 border-blue-950 p-4"
          />
          <div className="absolute top-[80px] md:top-[110px] ml-[190px] md:ml-[240px]">
            <FaLinkedinIn className="bg-blue-950 text-white w-[40px] h-[40px] rounded-full p-2 shadow-lg" />
          </div>
          <div className="font-bold lg:mt-4">
            <div>{member.name}</div>
            <div>{member.Professsion}</div>
            <div>{member.ID}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoreTeam;
