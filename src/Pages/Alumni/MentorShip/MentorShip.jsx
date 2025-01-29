import React from 'react'
import { CgMail } from "react-icons/cg";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoCopy } from "react-icons/go";
const MentorShip = () => {
  const data = [
    { name: "Analytics" },
    { name: "Promote Mentorship" },
    { name: "View Mentors List"},
    { name: "View Mentees List" },
   
  ];
  return (
    <div className='flex flex-col gap-[30px] mt-[100px] mb-[20px]'>
      
      <div className="flex md:flex-row flex-col gap-[10px] justify-center ml-[60px]">
        {data.map((item, index) => (
          <button
            key={index}
            className={`bg-gray-300  h-[50px] w-[250px] px-[20px] flex justify-between items-center 
              text-[15px] border-l-[3px] transition-all duration-200 border-[black]
            `}
          >
            <div>{item.name}</div>
          </button>
        ))}
      </div>



     <div className="flex flex-col gap-[10px] justify-center  ">
      <div className="text-[black] text-[25px] font-bold text-center">Promote Mentorship</div>
      <div className="text-[black] text-[15px] font-semibold  text-center">This page will help you promote the Mentorship
        Platform.It is important to promote mentorship periodically if you want it to be effective
      </div>
      </div>



      <div className="flex flex-row flex-wrap  justify-center gap-x-[50px] gap-y-[30px] ">
           {/*box1*/}
          <div  className="md:h-[270px] h-[300px] md:w-[350px] w-[330px]  rounded-[5px] px-[30px] shadow-lg shadow-gray-400 flex flex-col justify-center items-center gap-[5px]">
              <div className="text-[20px] font-bold text-[black]">Introduce the mentorship platform to everyone</div>
              <div className="text-[15px] font-semibold text-[black] mt-[20px]">
                <div>Use this section in 2 steps:</div>
                <div>1.Firstly invite semiors to volunteer as mentors</div>
                <div>2.Upon getting a few members,introduce mentorship to everyone else</div>
              </div>
              <div className="flex flex-row justify-between gap-[15px]">
              <div className="h-[30px] w-[150px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
               Invite Mentors
              </div>
              <div className="h-[30px] w-[150px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
               Invite Mentors
              </div>
              </div>
          </div>
          {/*second box*/}
          <div  className="md:h-[270px] h-[300px]  md:w-[350px] w-[330px]  rounded-[5px] px-[30px] shadow-lg shadow-gray-400 flex flex-col justify-center items-center gap-[5px]">
              <div className="text-[20px] font-bold text-[black]">Mail templates to attract more mentors</div>
              <div className="text-[15px] font-semibold text-[black] mt-[20px]">
                <div>Use this section when</div>
                <div>1.You have just started the memtorship.</div>
                <div>No new mentors from the past few days.</div>
              </div>
              
              <div className="flex flex-row  gap-[8px] justify-center items-center h-[30px] mt-[25px] w-[150px] ml-[20px] rounded-[5px]  bg-blue-950 ">
              <div className="text-[white]">Send mail</div>
              <div><CgMail className="text-[white] text-[25px]"/></div>
              </div>
              
          </div>


          {/*third box*/}
          <div  className="md:h-[270px] h-[300px] md:w-[350px] w-[330px] rounded-[5px] px-[30px] shadow-lg shadow-gray-400 flex flex-col justify-center items-center gap-[15px]">
              <div className="text-[20px] font-bold text-[black]">send mail to already listed mentors and mentees</div>
              <div className="text-[15px] font-semibold text-[black] mt-[20px]">
                <div>Use this section in 2 steps:</div>
                <div>1.Share the guidelines or any such informatioins.</div>
                <div>2.Take feedback and testimonials</div>
              </div>
              <div className="flex flex-row justify-between gap-[15px] mt-[10px]">
              <div className="h-[30px] w-[150px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
              Mail Mentors
              </div>
              <div className="h-[30px] w-[150px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
              Mail Mentors
              </div>
              </div>
          </div>
          
          {/*fourth box*/}
          <div  className="md:h-[270px] h-[300px]  md:w-[350px] w-[330px]  rounded-[5px] px-[30px] shadow-lg shadow-gray-400 flex flex-col justify-center items-center gap-[20px]">
              <div className=" flex flex-row gap-[7px] items-center">
                <div><IoShareSocialOutline className="text-[20px] font-extrabold"/></div>
                <div className="text-[20px] font-bold text-[black]">Share on Social media</div>
                </div>
                 


                 <div className="flex flex-row gap-[5px] mt-[20px]">
                  <div className="h-[40px] w-[40px] rounded-[50%] bg-blue-950 flex justify-center items-center"><LuFacebook className="text-[white] text-[23px]" /></div>
                  <div className="h-[40px] w-[40px] rounded-[50%] bg-blue-950 flex justify-center items-center"><FaInstagram className="text-[white] text-[23px]" /></div>
                  <div className="h-[40px] w-[40px] rounded-[50%] bg-blue-950 flex justify-center items-center"><SlSocialLinkedin className="text-[white] text-[23px]" /></div>

                 </div>
                 <div className="relative w-[95%]">
              <input placeholder="htttps://aluminirguktn.ac.in" className=" relative p-[4px] h-[35px] w-[95%] border border-[black] text-[black]"/>
              <div><GoCopy className="text-[20px] text-[black] absolute top-[7px] right-[25px]" /></div></div>
              <div className="h-[30px] w-[150px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
              copy Now
              </div> 
              
          </div>


      </div>


    </div>
  )
}

export default MentorShip