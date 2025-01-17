import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-blue-950 text-white font-light">
      <div className="flex flex-col p-6 ">
        <div className="flex  md:flex-row  gap-8 flex-col md:justify-between justify-start  mb-6">
          <div className="flex flex-col md:w-[30%] gap-4 items-start ">
            <div className="text-2xl font-semibold">Alumni Association</div>
            <div className="flex flex-col ">
              <div>Rajiv Ghandhi University of Knowledge Technologies,</div>
              <div>Nuzvid,Eluru district -521202</div>
              <div>Email-Alumniassociation@rguktn.ac.in</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:items-center">
            <div className="text-2xl font-semibold">Quick links</div>
            <div className="flex flex-col md:items-center ">
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Events</a>
              <a href="#">Get Involved</a>
              <a href="#">Alumni</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:items-center">
            <div className="text-2xl font-semibold">Navigation</div>
            <div className="flex flex-col md:items-center gap-1">
              <a href="#">Home</a>
              <a href="#">News&Updates</a>
              <a href="#">Testimonials</a>
              <a href="#">Our Alumni</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:items-center">
            <div className="text-2xl font-semibold">Follow Us</div>
            <div className="flex flex-row gap-4 text-lg">
              <FaFacebook className="text-white" />
              <FaLinkedin className="text-white" />
              <FaXTwitter className="text-white" />
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
        <div>
            <hr className="w-full h-2 text-white"/>
        </div>
        <div className="flex flex-row justify-center text-sm items-center font-normal mt-4">
         <FaRegCopyright className="text-white"/>
         2024 ALUMNI ASSOCIATION.All rights reserved.

        </div>
      </div>
    </div>
  );
};

export default Footer;
