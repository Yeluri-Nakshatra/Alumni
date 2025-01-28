import React from 'react'
import Error from "../../assets/Error404.png"
import { FaArrowLeft } from "react-icons/fa6";
const Error404 = () => {
  return (
    <div className="flex justify-center items-center bg-blue-950 mt-[100px] h-screen">
        <div className="flex flex-col-reverse md:flex-row text-white gap-[10px] md:gap-[100px] p-[0px] md:p-[100px]">
            <div><img src={Error} className="w-full md:w-[500px] md:h-[500px]"></img></div>
            <div className="flex flex-col md:pt-[70px] gap-[20px]">
                <div className="text-9xl font-semibold">404</div>
                <div className="text-xl">Something's missing</div>
                <div className="text-md">This page is missing for you</div>
                <div>assembled the link incorrectly</div>
                <div className="flex flex-row gap-[4px]">
                    <p><button><FaArrowLeft  className="pt-[2px]"/></button></p>
                    <p><button>Go back to home</button></p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Error404
