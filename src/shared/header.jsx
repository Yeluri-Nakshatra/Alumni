import React from "react";
import Logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  // const naviagte=useNavigate();
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
    <div className="fixed bg-white top-0 left-0 w-screen z-[9999]">
      <div className="flex  flex-row justify-between items-center m-2 mx-4 h-max">
        <div className="flex flex-row ">
          <div>
            <Link to="/"><img src={Logo} className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]" onClick={() => {setTab("home")}}/></Link>
          </div>
          <div className="hidden lg:flex flex-col justify-center items-center ">
            <div className="text-lg font-bold text-blue-950">ALUMNI ASSOCIATION</div>
            <div className='font-semibold'>RGUKT-NUZVID</div>
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center gap-6 font-semibold">
          <Link
            to="/home"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
                        ${
                          tab === "home" ? " text-blue-950" : "text-gray-500"
                        } `}
            onClick={() => {setTab("home")}}
          >
            Home
            {tab === "home" ? (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </Link>
          <Link
            to="/aboutus"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
                    ${tab === "aboutus" ? " text-blue-950" : "text-gray-500"} `}
            onClick={() => setTab("aboutus")}
          >
            About Us
            {tab === "aboutus" ? (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </Link>
          <div className="group relative  p-2">
            <div className="flex  flex-row items-center  gap-2">
              <Link to='/events'
                className={`cursor-pointer rounded-md duration-200 font-semibold  hover:text-blue-950
                    ${tab === "events" ? " text-blue-950" : "text-gray-500"}`}
                onClick={() => setTab("events")}
              >
                Events
              </Link>
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
          <Link
            to="/getinvolved"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
                    ${
                      tab === "getinvolved" ? " text-blue-950" : "text-gray-500"
                    } `}
            onClick={() =>{setTab("getinvolved")}}
          >
            Get Involved
            {tab === "getinvolved" ? (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </Link>
          <a
            href="#"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
                    ${tab === "alumni" ? " text-blue-950" : "text-gray-500"} `}
            onClick={() => setTab("alumni")}
          >
            Alumni
            {tab === "alumni" ? (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
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
              <hr className="horizontal bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
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
          <div>
            <a href="#" className="hover:text-blue-950 text-gray-700 text-xl">
            <IoIosNotifications />
            </a>
          </div>
        </div>
        <div className="flex  z-[1000] lg:hidden">
            <div className="flex flex-row gap-2">
          <button onClick={toggleMenu} className="text-2xl">
            <RiMenu2Line />
          </button>
          <div>
            <a href="#" className="hover:text-blue-950 text-gray-700 text-xl">
            <IoIosNotifications />
            </a>
          </div>
          </div>
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
              <Link
                to="/home"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full text-center py-2 rounded-md duration-200"
                onClick={() => {tabClick("home")}}
              >
                Home
              </Link>
              <Link to="/aboutus"
                href="#"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full text-center py-2 rounded-md duration-200"
                onClick={() => tabClick("aboutus")}
              >
                About Us
              </Link>
              <div>
                <div
                  className="group flex flex-row justify-center gap-2 items-center cursor-pointer font-semibold text-gray-600 hover:text-blue-950   w-full  py-2 rounded-md duration-200"
                  onClick={() => {tabClick("events")}}
                >
                  <Link to="/events" >Events</Link>
                  <div>
                    <FaCaretDown
                      className={`group-hover:rotate-180  duration-300`}
                    />
                  </div>
                </div>
                <div
                  className={` 
                     group-hover:flex  hidden
                   duration-400 flex-col font-semibold mt-2 rounded-md w-full px-2 py-1 gap-2 bg-gray-100`}
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
              <Link
                to="/getinvolved"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full text-center py-2 rounded-md duration-200"
                onClick={() =>{tabClick("getinvolved")}}
              >
                Get Involved
              </Link>
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

export default Header;
