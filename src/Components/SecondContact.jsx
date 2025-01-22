import React from 'react'
import { PiHeadphones } from "react-icons/pi";
import { PiMessengerLogoBold } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const SecondContact = () => {
  return (
    <div className="flex  flex-col md:flex-row p-[10px] justify-center lg:gap-[90px]">
        <div className="flex flex-col w-full md:w-[600px] gap-[16px]">
            <div className="text-[#182d6a] text-xl font-bold">Send us a message</div>
            <div >Do you have a question?A complaint? Or need any help to choose
                the right product from Zalomi.Feel free to contact us
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <p className="font-bold pl-[2px] pb-[2px]">First Name</p>
                    <p className="pt-[4px]"><input type="text" placeholder="Enter your first name"className="rounded-[20px] border border-gray-300 p-[4px] text-sm"></input></p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold pl-[2px] pb-[2px]">Last Name</p>
                    <p className="pt-[4px]"><input type="text" placeholder="Enter your Last name"className="rounded-[20px] border border-gray-300 p-[4px] text-sm"></input></p>
                </div>

            </div>
            <div className="flex flex-col md:flex-row justify-between pt-[6px]">
                <div className="flex flex-col">
                    <p className="font-bold pl-[2px] pb-[2px]">Email</p>
                    <p className="pt-[4px]"><input type="email" placeholder="Enter your Email"className="rounded-[20px] border border-gray-300 p-[4px] text-sm"></input></p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold pl-[2px] pb-[2px]">Contact details</p>
                    <p className="pt-[4px]"><input type="number" placeholder="Enter your number"className="rounded-[20px] border border-gray-300 p-[4px] text-sm"></input></p>
                </div>

            </div>
            <div className="flex flex-col">
                <div className=" text-lg font-bold">Message</div>
                <div><textarea className="w-[300px] md:w-[350px] h-[100px] border border-gray-200 rounded-[10px]"></textarea></div>
            </div>
            <div className="flex justify-end pb-[10px] md:pb-[0px] pr-0 md:pr-[10px]"><button className="bg-[#182d6a] rounded-[20px] pl-[24px] pr-[24px] pt-[10px] pb-[10px] text-white">Send a message</button></div>
            
        </div>
        <div className="w-[300px] h-[400px] bg-[#182d6a] rounded-[10px] flex flex-col p-[26px] gap-[20px] md:mt-[40px]">
            <div className="text-white font-semibold">Hi! we are always there here to help you</div>
            <div className="bg-[#a0b0df] h-[50px] w-full rounded-[10px] flex flex-row p-[4px] text-white">
                <div className="pt-[6px] pl-[20px]"><PiHeadphones className="text-white w-[30px] h-[30px]"/></div>
                <div className="flex flex-col pl-[20px]">
                    <p className="text-sm">Hotline</p>
                    <p className="text-sm pb-[-10px]">12 234 678</p>
                </div>
            </div>
            <div className="bg-[#a0b0df] h-[50px] w-full rounded-[10px] flex flex-row p-[4px] text-white">
                <div className="pt-[6px] pl-[20px]"><PiMessengerLogoBold className="text-white w-[30px] h-[30px]"/></div>
                <div className="flex flex-col pl-[20px]">
                    <p className="text-sm">sms Whatsapp</p>
                    <p className="text-sm pb-[-10px]">12 234 678</p>
                </div>
            </div>
            <div className="bg-[#a0b0df] h-[50px] w-full rounded-[10px] flex flex-row p-[4px] text-white">
                <div className="pt-[6px] pl-[20px]"><MdOutlineMail className="text-white w-[30px] h-[30px]"/></div>
                <div className="flex flex-col pl-[20px]">
                    <p className="text-sm">Email</p>
                    <p className="text-sm pb-[-10px]">alumni@gmail.com</p>
                </div>
            </div>
            <hr></hr>
            <div className="text-white flex justify-center">Connect with us</div>
            <div className="flex flex-row text-white justify-evenly">
            <FaFacebookF className="w-[20px] h-[20px] cursor-pointer"/>
            <FaInstagram className="w-[20px] h-[20px] cursor-pointer"/>
            <FaTwitter className="w-[20px] h-[20px] cursor-pointer"/>


            </div>

        </div>
        

      
    </div>
  )
}

export default SecondContact
