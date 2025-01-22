import React from 'react'
import aboutteam2 from "../assets/aboutteam2.jpg";
import logo from "../assets/logo.png";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
const Cards = () => {
    const teamMembers = [
        { id: 1, image: aboutteam2, linkedin: "#", instagram: "#" },
        { id:2, image:aboutteam2, linkedin: "#", instagram: "#"}
        
      ];
    const coremembers = [
        {id:1, image:aboutteam2,name:"Name"},
        {id:2, image:aboutteam2,name:"Name"},
        {id:3, image:aboutteam2,name:"Name"}
    ]
  return (
   <>
   <div className="flex justify-center text-3xl font-bold">Members</div>
    <div className='flex flex-row flex-wrap  p-[20px] justify-center  gap-[30px]'>
        
        
        {teamMembers.map((member) => (
        <div
          key={member.id}
          className="flex w-[300px] h-[350px] border border-gray-500 rounded-md shadow-lg justify-center flex-col items-center"
        >
            <div className=" rounded-full w-[250px] h-[250px] border border-2 group mt-[-30px]">
            <img
              src={member.image}
              className=" rounded-full w-full h-full object-cover w-[250px] h-[250px]"
            />
          </div>
          <div className="flex justify-center pt-[30px] gap-[10px]">
            <a href={member.linkedin} target="_blank">
              <CiLinkedin className="w-[32px] h-[32px] cursor-pointer" />
            </a>
            <a href={member.instagram} target="_blank">
              <FaInstagram className="w-[30px] h-[30px] cursor-pointer pt-[2px]" />
            </a>
          </div>
        </div>
        ))}
            
          
       
      
    </div>
    <div className="flex justify-center text-3xl font-bold">Core Members</div>
    <div className='flex flex-row flex-wrap  p-[20px] justify-center flex-row flex-wrap gap-[30px]'>
        
        
        {coremembers.map((member) => (
        <div
          key={member.id}
          className="flex w-[300px] h-[350px] border border-gray-500 rounded-md shadow-lg justify-center flex-col items-center"
        >
            <div className=" rounded-full w-[250px] h-[250px] border border-2 group mt-[-30px]">
            <img
              src={member.image}
              className=" rounded-full w-full h-full object-cover w-[250px] h-[250px]"
            />
          </div>
          <div className="text-xl font-bold pt-[30px]">{member.name}</div>
        </div>
        ))}
            
          
       
      
    </div>
   </>
  )
}

export default Cards
