import React from 'react'
import Error from "../../assets/Error404.png"
import { FaArrowLeft } from "react-icons/fa6";
const Error404 = () => {
  return (
    <div className="flex justify-center items-center bg-blue-950">
        <div className="flex flex-col md:flex-row text-white ">
            <div><img src={Error}></img></div>
            <div className="flex flex-col">
                <div className="text-4xl font-semibold">404</div>
                <div className="text-xl">Something's missing</div>
                <div className="text-md">This page is missing for you</div>
                <div>assembled the link incorrectly</div>
                <div className="flex flex-row">
                    <p><button><FaArrowLeft /></button></p>
                    <p><button>Go back to home</button></p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Error404
