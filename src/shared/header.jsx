import React from "react";
import Logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
const header = () => {
  const [tab, setTab] = useState("home");
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const tglsubmenu = () => {
    setSubmenu(!submenu);
  };
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const tabClick = (tabSelected) => {
    setTab(tabSelected);
    setIsMenuVisible(false);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-2 mx-4 h-max">
        <div className="flex flex-row ">
          <div>
            <img src={Logo} className="w-[70px] h-[70px]" />
          </div>
          <div className="hidden lg:flex flex-col justify-center items-center ">
            <div className="text-lg font-bold">ALUMNI ASSOCIATION</div>
            <div>RGUKT-NUZVID</div>
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center gap-6 font-semibold">
          <a
            href="#"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
                        ${
                          tab === "home" ? " text-blue-950" : "text-gray-500"
                        } `}
            onClick={() => setTab("home")}
          >
            Home
            {tab === "home" ? (
              <hr className="bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </a>
          <a
            href="#"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
                    ${tab === "aboutus" ? " text-blue-950" : "text-gray-500"} `}
            onClick={() => setTab("aboutus")}
          >
            About Us
            {tab === "aboutus" ? (
              <hr className="bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </a>
          <div className="group relative  p-2">
            <div className="flex  flex-row items-center  gap-2">
              <div
                className={`cursor-pointer rounded-md duration-200 font-semibold  hover:text-blue-950
                    ${tab === "events" ? " text-blue-950" : "text-gray-500"}`}
                onClick={() => setTab("events")}
              >
                Events
              </div>
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </div>
            <div className="hidden group-hover:flex absolute duration-400 flex-col mt-2 rounded-md w-max px-2 py-1 gap-2 bg-gray-100">
              <a
                href="#"
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
              >
                {" "}
                Event 1{" "}
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
              >
                {" "}
                Event Event 1{" "}
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
              >
                {" "}
                Event 2{" "}
              </a>
            </div>
          </div>
          <a
            href="#"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
                    ${
                      tab === "getinvolved" ? " text-blue-950" : "text-gray-500"
                    } `}
            onClick={() => setTab("getinvolved")}
          >
            Get Involved
            {tab === "getinvolved" ? (
              <hr className="bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </a>
          <a
            href="#"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
                    ${tab === "alumni" ? " text-blue-950" : "text-gray-500"} `}
            onClick={() => setTab("alumni")}
          >
            Alumni
            {tab === "alumni" ? (
              <hr className="bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </a>
          <a
            href="#"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
                    ${tab === "contact" ? " text-blue-950" : "text-gray-500"} `}
            onClick={() => setTab("contact")}
          >
            Contact
            {tab === "contact" ? (
              <hr className="bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </a>
        </div>
        <div className="hidden lg:flex flex-row justify-center items-center gap-4">
          <div className="text-lg">
            <IoSearch />
          </div>
          <div>
            <a
              href="#"
              className="text-white font-semibold bg-blue-950 px-2 py-[5px] rounded-md "
            >
              Donate
            </a>
          </div>
          <div>
            <a
              href="#"
              className="font-semibold bg-blue-950 bg-opacity-20 px-2 py-[5px] rounded-md "
            >
              sign in
            </a>
          </div>
        </div>
        <div className="flex z-[1000] lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            <RiMenu2Line />
          </button>
          {isMenuVisible && (
            <div
              className="flex absolute  top-0 right-0  text-xl  pt-10 px-8 transition duration-500 h-screen   w-screen   bg-white  p-2  flex-col   gap-4"
              id="menulist"
            >
              <div className="w-full text-right">
                <button
                  className=" rounded-sm w-fit justify-content-end  p-2 hover:bg-gray-300 duration-200"
                  onClick={toggleMenu}
                >
                  <RxCross2 />
                </button>
              </div>
              <a
                href="#"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full text-center py-2 rounded-md duration-200"
                onClick={() => tabClick("home")}
              >
                Home
              </a>
              <a
                href="#"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full text-center py-2 rounded-md duration-200"
                onClick={() => tabClick("aboutus")}
              >
                About Us
              </a>
              <div>
                <div
                  className=" flex flex-row justify-center gap-2 items-center cursor-pointer font-semibold text-gray-600 hover:text-blue-950   w-full  py-2 rounded-md duration-200"
                  onClick={tglsubmenu}
                >
                  <div >Events</div>
                  <div>
                    <FaCaretDown
                      className={`${submenu ? "rotate-180" : ""} duration-300`}
                    />
                  </div>
                </div>
                <div
                  className={` ${
                    submenu ? "flex" : "hidden"
                  }  duration-400 flex-col font-semibold mt-2 rounded-md w-full px-2 py-1 gap-2 bg-gray-100`}
                >
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                    onClick={() => tabClick("event1")}
                  >
                    {" "}
                    Event 1{" "}
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                    onClick={() => tabClick("eventevent1")}
                  >
                    {" "}
                    Event Event 1{" "}
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                    onClick={() => tabClick("event2")}
                  >
                    {" "}
                    Event 2{" "}
                  </a>
                </div>
              </div>
              <a
                href="#"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full text-center py-2 rounded-md duration-200"
                onClick={() => tabClick("getinvolved")}
              >
                Get Involved
              </a>
              <a
                href="#"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full text-center py-2 rounded-md duration-200"
                onClick={() => tabClick("alumni")}
              >
                Alumni
              </a>
              <a
                href="#"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full text-center py-2 rounded-md duration-200"
                onClick={() => tabClick("contact")}
              >
                Contact
              </a>
              <a
                href="#"
                className="text-white font-semibold bg-blue-950 px-2 py-[5px] rounded-md w-full text-center"
              >
                {" "}
                Donate
              </a>
              <a
                href="#"
                className="font-semibold bg-blue-950 bg-opacity-20 px-2 py-[5px] rounded-md  w-full text-center"
              >
                {" "}
                Sign in
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default header;
