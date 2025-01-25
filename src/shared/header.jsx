import React from "react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import NewNotifications from "../Components/NewNotifications";
import bell from "../assets/bell.png"
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {

  const [tab, setTab] = useState("home");
  const location = useLocation();
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
   const [count,setcount]=useState(5);
   const [notifivisibility,setNotifivisibility]=useState(false);
   const togglenotific=()=>{
    setNotifivisibility(!notifivisibility);
   }
  return (
    <div className="fixed bg-white top-0 left-0 w-screen z-[9999]">
      <div className="flex  flex-row justify-between items-center m-2 mx-4 h-max">
        <div className="flex flex-row ">
          <div>
            <Link to="/"><img src={Logo} className="w-[40px] h-[40px] md:w-[70px] md:h-[70px]" /></Link>
          </div>
          <div className="hidden lg:flex flex-col justify-center items-center ">
            <div className="text-lg font-bold text-blue-950 ">ALUMNI ASSOCIATION</div>
            <div className='font-semibold'>RGUKT-NUZVID</div>
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center gap-6 font-semibold">
          <Link
            to="/home"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
              ${
                location.pathname === "/home"
                  ? "text-blue-950"
                  : "text-gray-500"}
               `}
            
          >
            Home
            {location.pathname === "/home" ? (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </Link>
          <Link
            to="/aboutus"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
              ${
                location.pathname === "/aboutus"
                  ? "text-blue-950"
                  : "text-gray-500"}
               `}
           
          >
            About Us
            {location.pathname === "/aboutus" ? (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </Link>
          <div className="group relative  p-2">
            <div className="flex  flex-row items-center  gap-2">
              <div
                className={`cursor-pointer rounded-md duration-200 font-semibold  hover:text-blue-950
                    ${tab === "events" ? " text-blue-950" : "text-gray-500"}`}
                
              >
                Events
              </div>
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </div>
            <div className="hidden group-hover:flex absolute duration-400 flex-col mt-2 rounded-md w-max px-2 py-1 gap-2 bg-gray-100">
              <Link
                to='/events'
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                onClick={() => setTab("event1")}
              >
                {" "}
                Event 1{" "}
              </Link>
              <Link
                to='/events'
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                onClick={() => setTab("eventevent1")}
              >
                {" "}
                Event Event 1{" "}
              </Link>
              <Link
                to='/events'
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                onClick={() => setTab("event2")}
              >
                {" "}
                Event 2{" "}
              </Link>
            </div>
          </div>
          <Link
            to="/getinvolved"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
              ${
                location.pathname === "/getinvolved"
                  ? "text-blue-950"
                  : "text-gray-500"}
               `}
            
          >
            Get Involved
            {location.pathname === "/getinvolved" ? (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </Link>

          <div className="group relative  p-2">
            <div className="flex  flex-row items-center  gap-2">
              <div
                className={`cursor-pointer rounded-md duration-200 font-semibold  hover:text-blue-950
                    ${tab === "events" ? " text-blue-950" : "text-gray-500"}`}
                
              >
                Alumni
              </div>
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </div>
            <div className="hidden group-hover:flex absolute duration-400 flex-col mt-2 rounded-md w-max px-2 py-1 gap-2 bg-gray-100">
              <Link
                to='/events'
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                onClick={() => setTab("event1")}
              >
                {" "}
                CSE{" "}
              </Link>
              <Link
                to='/events'
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                onClick={() => setTab("eventevent1")}
              >
                {" "}
                ECE
                {" "}
              </Link>
              <Link
                to='/events'
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                onClick={() => setTab("event2")}
              >
                {" "}
                EEE{" "}
              </Link>
              <Link
                to='/events'
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                onClick={() => setTab("event2")}
              >
                {" "}
                CIVIL{" "}
              </Link>
              <Link
                to='/events'
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                onClick={() => setTab("event2")}
              >
                {" "}
                MECH{" "}
              </Link>
              <Link
                to='/events'
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                onClick={() => setTab("event2")}
              >
                {" "}
                CHEM{" "}
              </Link>
              <Link
                to='/events'
                className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                onClick={() => setTab("event2")}
              >
                {" "}
                MME{" "}
              </Link>
             
            </div>
          </div>
          {/*<a
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
          </a>*/}

          <Link 
            to="Contact"
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
          </Link>
        </div>
        <div className="hidden lg:flex flex-row justify-center items-center gap-4">
          <div>
            <a
              href="#"
              className="text-white font-semibold bg-blue-950 px-2 py-[5px] rounded-md "
            >
              Donate
            </a>
          </div>
          <div>
            <Link
              to="/login"
              className="font-semibold bg-blue-950 bg-opacity-20 px-2 py-[5px] rounded-md "
            >
              Login
            </Link>
          </div>
          <div className="group flex flex-col   subscription mr-[20px]">
           <img src={bell} className="h-[35px] w-[35px]"/>
           {count>0 && <span className="bell-icon">{count}</span>}
           <div className='absolute top-10 right-0 hidden group-hover:flex'>
           <NewNotifications/>
           </div>
          </div>
        </div>
        <div className="flex  z-[1000] lg:hidden">
            <div className="flex flex-row gap-2">
          <button onClick={toggleMenu} className="text-2xl">
            <RiMenu2Line />
          </button>
          <div className="group flex flex-col   subscription mr-[20px]">
           <img src={bell} className="h-[35px] w-[35px]"/>
           {count>0 && <span className="bell-icon">{count}</span>}
           <div className='absolute top-10 -right-4 hidden group-hover:flex'>
           <NewNotifications/>
           </div>
          </div>
          </div>
          {isMenuVisible && (
            <div
              className="flex absolute  top-0 left-0  text-xl  pt-4 px-8 transition duration-500 h-screen   w-[80%]   bg-white  p-2  flex-col   gap-4"
              id="menulist"
            >
              <div className="flex justify-between">
              <div className="flex flex-row gap-[3px] ">
                 <div>
                 <Link to="/"><img src={Logo} className="w-[40px] h-[40px]" onClick={() => {setTab("home")}}/></Link>
                </div>
          <div className="flex flex-col  ">
            <div className="text-[8px] font-bold text-blue-950 ">ALUMNI ASSOCIATION</div>
            <div className='font-semibold text-[8px] mt-[-10px]'>RGUKT-NUZVID</div>
          </div>
        </div>
              
                <button
                  className=" rounded-sm w-fit text-[25px] justify-content-end text-[red] p-2 hover:bg-gray-300 duration-200"
                  onClick={toggleMenu}
                >
                  <RxCross2 />
                </button>
                
              
              </div>
              <div className="flex flex-col gap-6 px-[10px]">
              <Link
                to="/home"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950  rounded-md duration-200"
                onClick={() => {tabClick("home")}}
              >
                Home
              </Link>
              <Link to="/aboutus"
                href="#"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950  rounded-md duration-200"
                onClick={() => tabClick("aboutus")}
              >
                About Us
              </Link>
              <div>
                <div
                  className=" flex flex-col  gap-2  cursor-pointer font-semibold text-gray-600 hover:text-blue-950   w-full  py-2 rounded-md duration-200"
                  
                >
                  <div className='flex flex-row gap-2  items-center' onClick={tglsubmenu}>

                  <div >Events</div>
                  <div>
                    <FaCaretDown
                      className={`${submenu?'rotate-180':''}  duration-300`}
                    />
                  </div>
                  </div>
                  <div
                  className={` 
                        ${submenu?'flex':'hidden'}
                   duration-400 flex-col font-semibold mt-2 rounded-md w-full px-2 py-1 gap-2 bg-gray-100`}
                >
                  <Link
                    to='/events'
                    className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                    onClick={() => tabClick("event1")}
                  >
                    {" "}
                    Event 1{" "}
                  </Link>
                  <Link
                    to='/events'
                    className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                    onClick={() => tabClick("eventevent1")}
                  >
                    {" "}
                    Event Event 1{" "}
                  </Link>
                  <Link
                    to='/events'
                    className="text-gray-500 hover:text-white hover:bg-blue-950 rounded px-2 "
                    onClick={() => tabClick("event2")}
                  >
                    {" "}
                    Event 2{" "}
                  </Link>
                </div>
                </div>
                
              </div>
              <Link
                to="/getinvolved"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950  rounded-md duration-200"
                onClick={() =>{tabClick("getinvolved")}}
              >
                Get Involved
              </Link>
              <a
                href="#"
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950  rounded-md duration-200"
                onClick={() => tabClick("alumni")}
              >
                Alumni
              </a>
              <Link
                to='Contact'
                className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950  rounded-md duration-200"
                onClick={() => tabClick("contact")}
              >
                Contact
              </Link>
              <a
                href="#"
                className="text-white font-semibold bg-blue-950 px-2 py-[5px] rounded-md w-full text-center"
                onClick={() => tabClick("donate")}
              >
                {" "}
                Donate
              </a>
              <Link
                to='login'
                className="font-semibold bg-blue-950 bg-opacity-20 px-2 py-[5px] rounded-md  w-full text-center"
                onClick={() => tabClick("login")}
              >
                {" "}
                Login 
              </Link>
                </div>
              
              
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
