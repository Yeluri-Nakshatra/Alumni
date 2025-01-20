import React from "react";
import Frame from "../../assets/Frame1.png";
import { FaArrowCircleRight } from "react-icons/fa";
import Frame2 from "../../assets/Frame2.png";
import Graph from "./Graph";
import Logo from "../../assets/logo.png"
import Header from "../../shared/header";
import Footer from "../../shared/Footer/Footer";
const GetInvolved = () => {
  const helpSeekers = [
    {
      img: Frame2,
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      cost: "xx,xxx/-",
    },
    {
        img: Frame2,
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        cost: "xx,xxx/-",
      },
      {
        img: Frame2,
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        cost: "xx,xxx/-",
      },
      {
        img: Frame2,
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        cost: "xx,xxx/-",
      },
      {
        img: Frame2,
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        cost: "xx,xxx/-",
      },
      {
        img: Frame2,
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        cost: "xx,xxx/-",
      },
      
  ];
  const oppurtunities=[
    {
        comp:"Company",
        pos:"Job position"
    },
    {
        comp:"Company",
        pos:"Job position"
    },
    {
        comp:"Company",
        pos:"Job position"
    },
    {
        comp:"Company",
        pos:"Job position"
    },
    {
        comp:"Company",
        pos:"Job position"
    },
    {
        comp:"Company",
        pos:"Job position"
    },
  ]
  return (
    <div>
        
      <div className="m-4 mx-10 mt-20 md:mt-24  lg:mt-32 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row  gap-10 items-center">
          <div className="w-full md:w-[60%] md:h-[430px] h-[250px]">
            <img src={Frame} className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-2 md:w-[30%] justify-end items-end">
            <div className="text-[55px] lg:text-[70px] text-right text-blue-950 leading-snug font-bold">
              Help us to do better
            </div>
            <div>Your help makes a big difference to us.</div>
            <div>Let's work together and make it happen big.</div>
            <div>
              <button className="flex flex-row px-4 py-1 items-center gap-2 my-4 rounded-2xl bg-blue-950 text-white">
                Donate <FaArrowCircleRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-[40px] lg:text-[50px] text-center  font-bold">See what your help seekers said</div>
          <div className="flex flex-wrap gap-6 justify-center items-center md:justify-between">
            {helpSeekers.map((item) => (
              <div className="flex flex-row justify-center items-center gap-4 bg-white shadow-blue-950 shadow-md rounded-lg p-4 h-auto lg:text-[14px] text-xs w-full md:w-[47%]">
                <div>
                  <img src={item.img} className="w-full " />
                </div>
                <div className="flex gap-2 flex-col">
                  <div>{item.data}</div>
                  <div><span className="font-bold">Fund Raised: </span>{item.cost}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-8">
            <div className="text-2xl md:text-4xl font-bold">
                Fund raised by us:
            </div>
            <div className="w-[100%] ">
                <Graph/>
            </div>

        </div>
        <div className="flex relative flex-col h-[50vh] lg:h-[90vh] justify-center items-center">
            <div className="flex flex-col items-center">
                <div className="text-[80px] md:text-[100px] font-bold">
                    10,345+
                </div>
                <div>
                    contributors
                </div>
            </div>
            <div>
            <button className="flex flex-row px-4 py-1 items-center gap-2 my-4 rounded-2xl bg-blue-950 text-white">
                Contribute <FaArrowCircleRight className="text-white" />
              </button>
            </div>
            <div className="absolute hidden lg:block top-10 left-64 w-[130px] h-[170px]">
            <img src={Frame2} className="h-full w-full" />
            </div>
            <div className="absolute hidden lg:block top-56 left-40 w-[150px] h-[170px]">
            <img src={Frame2} className="h-full w-full" />
            </div>
            <div className="absolute hidden lg:block bottom-28 left-80 w-[150px] h-[100px]">
            <img src={Frame2} className="h-full w-full" />
            </div>
            <div className="absolute hidden lg:block top-10 right-80 w-[150px] h-[100px]">
            <img src={Frame2} className="h-full w-full" />
            </div>
            <div className="absolute hidden lg:block top-24 right-40 w-[150px] h-[170px]">
            <img src={Frame2} className="h-full w-full" />
            </div>
            <div className="absolute hidden lg:block top-72 right-44 w-[200px] h-[170px]">
            <img src={Frame2} className="h-full w-full" />
            </div>


        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-[40px] lg:text-[50px] text-center mb-4 font-bold">Seek some oppurtunities</div>
          <div className="flex flex-wrap gap-8 justify-center items-center md:justify-between">
            {oppurtunities.map((item) => (
              <div className="flex flex-col   gap-4 bg-white shadow-blue-950 shadow-md rounded-lg p-4 h-auto lg:text-[14px] text-xs w-full md:w-[45%] lg:w-[28%]">
                <div className="flex flex-row gap-4">
                  <div className="shadow-md rounded"><img src={Logo} className="w-[50px] h-[50px]" /></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-bold">{item.comp}</div>
                    <div className="text-gray-700">Location</div>

                  </div>
                </div>
                <div className="flex gap-4 flex-col">
                  <div className="text-lg font-bold">{item.pos}</div>
                  <div className="flex flex-row gap-8 text-gray-700">
                    <div >Full Time</div>
                    <div>Time Period</div>

                  </div>
                  <div>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciim veniam, ”</div>
                  <div className="flex flex-row gap-4">
                    <button className="bg-blue-950 bg-opacity-10 rounded px-2 py-1">Figma</button>
                    <button className="bg-blue-950 bg-opacity-10 rounded px-2 py-1">Figma</button>
                    <button className="bg-blue-950 bg-opacity-10 rounded px-2 py-1">Figma</button>

                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="font-bold">10,000/month</div>
                    <div>
                        <button className="bg-blue-950 rounded text-white px-4 py-2">Apply</button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default GetInvolved;
