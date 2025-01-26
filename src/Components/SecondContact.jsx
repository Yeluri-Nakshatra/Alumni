import React from 'react'
import { IoLocation } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const SecondContact = () => {
  return (
    <div className="p-[10px] md:p-[100px] bg-gray-100">
        <div className="flex flex-col  md:flex-row justify-center gap-[10px]">
            <div className="flex w-full md:w-[50%] lg:w-[30%] flex-col p-[10px] gap-[22px] pt-[20px]">
                <div className="text-2xl font-bold">Get in Touch</div>
                <div>"We’d love to hear from you! Reach out with any questions, feedback, or collaboration ideas."</div>
                <hr></hr>
                <div className="flex flex-row">
                    <div className="pt-[10px] pr-[4px]"><IoLocation className="rounded-full bg-violet-300 w-[30px] h-[30px] p-[4px]"/></div>
                    <div className="flex flex-col">
                    <div className=" font-semibold">Location</div>
                    <p>Visit Us Here</p>
                    </div>
                    
                 
                </div>
                <div className="flex flex-row">
                    <div className="pt-[10px] pr-[4px]"><MdMarkEmailRead className="rounded-full bg-green-500 w-[30px] h-[30px] p-[4px]"/></div>
                    <div className="flex flex-col">
                    <div className=" font-semibold">Email</div>
                    <p>We’d Love to Hear from You!
                    Send us a message </p>
                    </div>
                    
                 
                </div>
                <div className="flex flex-row">
                    <div className="pt-[10px] pr-[4px]"><MdOutlinePhoneAndroid className="rounded-full bg-red-500 w-[30px] h-[30px] p-[4px]"/></div>
                    <div className="flex flex-col">
                    <div className=" font-semibold">Get us</div>
                    <p>Your questions are the key to better answers.</p>
                    </div>
                    
                 
                </div>
                <hr></hr>
                <div>Follow us on social media</div>
                <div className="flex flex-row gap-[4px]">
                    <div><FaFacebookF className="w-[30px] h-[30px] rounded-full p-[4px] bg-[rgba(24,45,106,0.9)] text-white cursor-pointer"/></div>
                    <div><FaTwitter className="w-[30px] h-[30px] rounded-full p-[4px] bg-[rgba(24,45,106,0.9)] text-white cursor-pointer"/></div>
                    <div><FaYoutube className="w-[30px] h-[30px] rounded-full p-[4px] bg-[rgba(24,45,106,0.9)] text-white cursor-pointer"/></div>
                    <div><FaSquareInstagram className="w-[30px] h-[30px] rounded-full p-[4px] bg-[rgba(24,45,106,0.9)] text-white cursor-pointer"/></div>
                    
                </div>
                

            </div>
            <div className="flex w-full md:w-[50%] flex-col border-2 shadow-lg rounded-lg p-[20px] lg:p-[50px] gap-[20px] md:gap-[0px]">
                <div className="text-2xl font-bold">Send a message</div>
                <div>“Communication is the key to understanding.”</div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-[50%]"><p>Name:</p><p><input type="text" placeholder="name"className="p-[6px] bg-[rgba(24,45,106,0.2)]  rounded-[10px] lg:w-[70%] w-full"></input></p></div>
                    <div classname="w-full lg:w-[50%]"><p>Branch</p><p><input type="text" placeholder="name"className="p-[6px] bg-[rgba(24,45,106,0.2)] rounded-[10px] lg:w-[70%] w-full"></input></p></div>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-[50%]"><p>Phone:</p><p><input type="text" placeholder="number"className="p-[6px] bg-[rgba(24,45,106,0.2)] rounded-[10px] lg:w-[70%] w-full"></input></p></div>
                    <div classname="w-full lg:w-[50%]"><p>Email:</p><p><input type="text" placeholder="email"className="p-[6px] bg-[rgba(24,45,106,0.2)] rounded-[10px] lg:w-[70%] w-full"></input></p></div>
                </div>
                <div><p>Subject</p><p><input type="text" placeholder="Subject"className="p-[6px] bg-[rgba(24,45,106,0.2)] rounded-[10px] lg:w-[70%] w-full"></input></p></div>
                <div><p>Message</p><p><input type="text" placeholder="Message" className="w-full h-[100px] bg-[rgba(24,45,106,0.2)] rounded-[10px]"></input></p></div>
                <div className="pt-[10px]"><button className="p-[10px] bg-violet-300 rounded-[10px]">Send message</button></div>

            </div>

        </div>
      
    </div>
  )
}

export default SecondContact
