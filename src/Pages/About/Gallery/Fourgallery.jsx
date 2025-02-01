import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

import Fest from '../../../assets/Fest.jpeg'
import Fourthfest from '../../../assets/Fourthfest.jpg'
import Fifthfest from '../../../assets/Fifthfest.jpg'
import { PiCalendarDotsLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { VscSaveAll } from "react-icons/vsc";
import { CiMenuKebab } from "react-icons/ci";
const Fourgallery = () => {

  return (
     <>
                <div className="absolute flex flex-col gap-[4px] justify-end items-end w-full fixed mt-[100px] fixed">
                  <div className="w-[40px] h-[40px] rounded-full bg-blue-500 flex justify-center items-center text-white"><FaFacebookF /></div>
                  <div className="w-[40px] h-[40px] rounded-full bg-green-500 flex justify-center items-center text-white"> <FaWhatsapp /></div>
                  <div className="w-[40px] h-[40px] rounded-full bg-blue-700 flex justify-center items-center text-white"><FaLinkedinIn /></div>
                  <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center">   <VscSaveAll /></div>
                  <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center">   <CiMenuKebab /></div>
                </div>
                <div className=" relative flex flex-col m-[10px] md:m-[20px] lg:m-[200px]">
                  <div><button className="flex flex-row">
                    <p><FaArrowLeftLong className="mt-[4px]"/></p>
                    <p>Go Back</p>
                    </button>
                  </div>
                  <div className="text-xl font-bold">Alumni life in Delhi</div>
                  <div className="flex flex-wrap gap-[10px]">
                      <div><img src={Fest}></img></div>
                      <div><img src={Fourthfest}></img></div>
                      <div><img src={Fifthfest}></img></div>
                  </div>
                  <hr className="mt-[20px]"></hr>
                  <div className="flex flex-row"><p><PiCalendarDotsLight className="mt-[5px]"/></p><p>Oct 11,2024</p></div>
                  <div className="flex flex-row gap-[4px] pt-[20px]"><p>Category</p><p><button className="rounded-full bg-blue-100 w-[80px] h-[30px]">Nuzvid</button></p></div>
                  <div><hr></hr></div>
            
                  
                </div>
                </>
  )
   
}

export default Fourgallery
