import React from "react";
import graduation from "../assets/graduation.png";
import { GrResources } from "react-icons/gr";
const Homehero=()=>{
    return(
        <div className=" flex md:flex-row flex-col md:mt-auto mt-[100px] gap-[40px] justify-center items-center   w-full ">
           <div className="flex flex-col gap-[30px] px-[35px] md:order-1 order-2">
           <div className="text-black font-bold text-[45px] ">A new way to learn <br className="md:block hidden"/>& get knowledge</div>
           <div className="text-black text-[15px] ">Eduflex is here for you with various courses & <br className="md:block hidden"/>materials from skilled tutors oil around the world.</div>
           <div className="flex flex-row gap-[20px]">
            <div className="h-[30px] w-[100px] text-[white] bg-blue-950 rounded-[13px] flex justify-center items-center">Register</div>
            <div className="h-[30px] w-[100px] text-[black] bg-[white]  rounded-[13px] border border-[black] flex justify-center items-center">join us</div>
           </div>

         <div className="flex flex-row gap-[20px]">

            <div className="flex flex-col gap-[5px] justify-center items-center">
                <div className="font-bold text-[25px] text-black">15,2K</div>
                <div className="text-[15px] text-[gray]">Active students</div>
            </div>
          <div className="h-[70px] w-[2px] text-[black] bg-[black]"></div>
            <div className="flex flex-col gap-[5px] justify-center items-center">
                <div className="font-bold text-[25px] text-black">45K</div>
                <div className="text-[15px] text-[gray]">Tutors</div>
            </div>
            <div className="h-[70px] w-[2px] text-[black] bg-[black]"></div>
            <div className="flex flex-col gap-[5px] justify-center items-center">
                <div className="font-bold text-[35px] text-black"><GrResources /></div>
                <div className="text-[15px] text-[gray] mt-[5px]">Resources</div>
            </div>

         </div>


            </div> 

            <div className="md:order-2 order-1">
                <img src={graduation} className="h-[500px] w-[500px]"/>
            </div>
            
            
            </div>
    );
}
export default Homehero;