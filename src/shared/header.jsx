import React from "react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import NewNotifications from "../Components/NewNotifications";
import bell from "../assets/bell.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { RiUserCommunityFill } from "react-icons/ri";
import { GiAtomCore } from "react-icons/gi";
import { BsPersonHeart } from "react-icons/bs";
import { MdWebhook } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LuCombine } from "react-icons/lu";
import { GoSponsorTiers } from "react-icons/go";
import { RiRefund2Line } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { SiMentorcruise } from "react-icons/si";
import { GrWorkshop } from "react-icons/gr";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaRegIdCard } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdOutlineElectricScooter } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { GiMissileMech } from "react-icons/gi";
import { GiChemicalTank } from "react-icons/gi";
import { GiMetalDisc } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";
import { LiaAwardSolid } from "react-icons/lia";
import { LuNewspaper } from "react-icons/lu";
const Header = () => {
  const [tab, setTab] = useState("home");
  const location = useLocation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [submenu, setSubmenu] = useState(null);

  const tglsubmenu = (menu) => {
    setSubmenu(submenu === menu ? null : menu);
  };
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    if (!isMenuVisible) {
      setSubmenu(null);
    }
  };
  const tabClick = (tabSelected) => {
    setTab(tabSelected);
    setIsMenuVisible(false);
  };
  const [count, setcount] = useState(5);
  return (
    <div className="fixed bg-white top-0 left-0 w-screen z-[9999]">
      <div className="flex  flex-row justify-between items-center m-2 mx-4 h-max">
        <div className="flex flex-row ">
          <div>
            <Link to="/">
              <img
                src={Logo}
                className="w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
              />
            </Link>
          </div>
          <div className="hidden lg:flex flex-col justify-center items-center ">
            <div className="text-lg font-bold text-blue-950 ">
              ALUMNI ASSOCIATION
            </div>
            <div className="font-semibold">RGUKT-NUZVID</div>
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center gap-6 font-semibold">
          <Link
            to="/home"
            className={`group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
              ${
                location.pathname === "/home"
                  ? "text-blue-950"
                  : "text-gray-500"
              }
               `}
          >
            Home
            {location.pathname === "/home" ? (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="horizontal bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </Link>
          <div className="group relative  p-2">
            <div className="flex  flex-row items-center  gap-2">
              <div
                className={`cursor-pointer rounded-md duration-200 font-semibold  hover:text-blue-950
                    ${tab === "aboutus" ? " text-blue-950" : "text-gray-500"}`}
              >
                About
              </div>
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </div>
            <div className="hidden group-hover:flex absolute duration-400 flex-col mt-2 rounded-md w-max px-2 py-1 gap-2 bg-gray-100">
              <Link
                to="/aboutus"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <RiUserCommunityFill className="font-bold" />
                  Alumni Association
                </div>{" "}
              </Link>
              <Link
                to="/aboutus"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <GiAtomCore className="font-bold" />
                  Core Team
                </div>{" "}
              </Link>
              <Link
                to="/aboutus"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <BsPersonHeart className="font-bold" />
                  Student Volunteers
                </div>{" "}
              </Link>
              <Link
                to="/aboutus"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <MdWebhook className="font-bold" />
                  Student Volunteers
                </div>{" "}
              </Link>
            </div>
          </div>
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
                to="/events"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("eventcalender")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <SlCalender className="font-bold" />
                  Event Calender
                </div>{" "}
              </Link>
              <Link
                to="/events"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("reunion")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <LuCombine className="font-bold" />
                  Reunion
                </div>{" "}
              </Link>
              <Link
                to="/events"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("sponserships")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <GoSponsorTiers className="font-bold" />
                  Sponserships
                </div>{" "}
              </Link>
            </div>
          </div>

          <div className="group relative  p-2">
            <div className="flex  flex-row items-center  gap-2">
              <div
                className={`cursor-pointer rounded-md duration-200 font-semibold  hover:text-blue-950
                    ${tab === "services" ? " text-blue-950" : "text-gray-500"}`}
              >
                Services
              </div>
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </div>
            <div className="hidden group-hover:flex absolute duration-400 flex-col mt-2 rounded-md w-max px-2 py-1 gap-2 bg-gray-100">
              <Link
                to="/getinvolved"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <RiRefund2Line className="font-bold" />
                  Donate
                </div>{" "}
              </Link>
              <Link
                to="/getinvolved"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <IoPersonSharp className="font-bold" />
                  Alumni Directory
                </div>{" "}
              </Link>
              <Link
                to="/getinvolved"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <SiMentorcruise className="font-bold" />
                  Mentor Ship
                </div>{" "}
              </Link>
              <Link
                to="/getinvolved"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <GrWorkshop className="font-bold" />
                  Workshops
                </div>{" "}
              </Link>
              <Link
                to="/getinvolved"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <RiKakaoTalkFill className="font-bold" />
                  Alumni Talks
                </div>{" "}
              </Link>
              <Link
                to="/getinvolved"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <FaRegIdCard className="font-bold" />
                  Alumni SMART ID
                </div>{" "}
              </Link>
            </div>
          </div>

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
                to="/events"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("cse")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <FaComputer className="font-bold" />
                  CSE
                </div>{" "}
              </Link>
              <Link
                to="/events"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("ece")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <MdOutlineElectricBolt className="font-bold" />
                  ECE
                </div>{" "}
              </Link>
              <Link
                to="/events"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("eee")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <MdOutlineElectricScooter className="font-bold" />
                  EEE
                </div>{" "}
              </Link>
              <Link
                to="/events"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("civil")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <FaBuilding className="font-bold" />
                  CIVIL
                </div>{" "}
              </Link>
              <Link
                to="/events"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("mech")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <GiMissileMech className="font-bold" />
                  MECH
                </div>{" "}
              </Link>
              <Link
                to="/events"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("chem")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <GiChemicalTank className="font-bold" />
                  CHEM
                </div>{" "}
              </Link>
              <Link
                to="/events"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("mme")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <GiMetalDisc className="font-bold" />
                  MME
                </div>{" "}
              </Link>
            </div>
          </div>

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
          <div className="group relative  p-2">
            <div className="flex  flex-row items-center  gap-2">
              <div
                className={`cursor-pointer rounded-md duration-200 font-semibold  hover:text-blue-950
                    ${tab === "updates" ? " text-blue-950" : "text-gray-500"}`}
              >
                Updates
              </div>
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </div>
            <div className="hidden group-hover:flex absolute duration-400 flex-col mt-2 rounded-md w-max px-2 py-1 gap-2 bg-gray-100">
              <Link
                to="/getinvolved"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <FaRegNewspaper className="font-bold" />
                  News Letter
                </div>{" "}
              </Link>
              <Link
                to="/getinvolved"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <LiaAwardSolid className="font-bold" />
                  RGUKT Awards
                </div>{" "}
              </Link>
              <Link
                to="/getinvolved"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center">
                  <LuNewspaper className="font-bold" />
                  Alumni News
                </div>{" "}
              </Link>
            </div>
          </div>
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
          <div className="group flex flex-col  subscription mr-[20px]">
            <img src={bell} className="h-[35px] w-[35px]" />
            {count > 0 && <span className="bell-icon">{count}</span>}
            <div className="absolute top-10 right-0 hidden group-hover:flex">
              <NewNotifications />
            </div>
          </div>
        </div>
        <div className="flex  z-[1000] lg:hidden">
          <div className="flex flex-row gap-2">
            <button onClick={toggleMenu} className="text-2xl">
              <RiMenu2Line />
            </button>
            <div className="group flex flex-col   subscription mr-[20px]">
              <img src={bell} className="h-[35px] w-[35px]" />
              {count > 0 && <span className="bell-icon">{count}</span>}
              <div className="absolute top-10 -right-4 hidden group-hover:flex">
                <NewNotifications />
              </div>
            </div>
          </div>
          {isMenuVisible && (
            <div
              className="flex absolute  top-0 left-0  text-xl  pt-4 px-8 transition duration-500 h-screen overflow-y-scroll  w-[80%]   bg-white  p-2  flex-col   gap-4"
              id="menulist"
            >
              <div className="flex justify-between">
                <div className="flex flex-row gap-[3px] ">
                  <div>
                    <Link to="/">
                      <img
                        src={Logo}
                        className="w-[40px] h-[40px]"
                        onClick={() => {
                          setTab("home");
                        }}
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col  ">
                    <div className="text-[8px] font-bold text-blue-950 ">
                      ALUMNI ASSOCIATION
                    </div>
                    <div className="font-semibold text-[8px] mt-[-10px]">
                      RGUKT-NUZVID
                    </div>
                  </div>
                </div>

                <button
                  className=" rounded-sm w-fit text-[25px] justify-content-end text-[red] p-2 hover:bg-gray-300 duration-200"
                  onClick={toggleMenu}
                >
                  <RxCross2 />
                </button>
              </div>
              <div className="flex flex-col gap-4 px-[10px]">
                <Link
                  to="/home"
                  className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950  rounded-md duration-200"
                  onClick={() => {
                    tabClick("home");
                  }}
                >
                  Home
                </Link>

                <div>
                  <div className="flex flex-col gap-2 cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full py-2 rounded-md duration-200">
                    <div
                      className="flex flex-row gap-2 items-center"
                      onClick={() => tglsubmenu("about")}
                    >
                      <div>About</div>

                      <div>
                        <FaCaretDown
                          className={`${
                            submenu === "about" ? "rotate-180" : ""
                          }  duration-300`}
                        />
                      </div>
                    </div>

                    {/* Submenu items */}
                    {submenu === "about" && (
                      <div className="flex flex-col text-sm font-semibold mt-2 rounded-md w-full px-2 py-1 gap-2 bg-gray-100">
                        <Link
                          to="/aboutus"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <RiUserCommunityFill className="font-bold" />
                            Alumni Association
                          </div>{" "}
                        </Link>
                        <Link
                          to="/aboutus"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <GiAtomCore className="font-bold" />
                            Core Team
                          </div>{" "}
                        </Link>
                        <Link
                          to="/aboutus"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <BsPersonHeart className="font-bold" />
                            Student Volunteers
                          </div>{" "}
                        </Link>
                        <Link
                          to="/aboutus"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <MdWebhook className="font-bold" />
                            Student Volunteers
                          </div>{" "}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2 cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full py-2 rounded-md duration-200">
                    <div
                      className="flex flex-row gap-2 items-center"
                      onClick={() => tglsubmenu("events")}
                    >
                      <div>Events</div>

                      <div>
                        <FaCaretDown
                          className={`${
                            submenu === "events" ? "rotate-180" : ""
                          }  duration-300`}
                        />
                      </div>
                    </div>

                    {/* Submenu items */}
                    {submenu === "events" && (
                      <div className="flex flex-col text-sm font-semibold mt-2 rounded-md w-full px-2 py-1 gap-2 bg-gray-100">
                        <Link
                          to="/events"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <SlCalender className="font-bold" />
                            Event Calender
                          </div>{" "}
                        </Link>
                        <Link
                          to="/events"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <LuCombine className="font-bold" />
                            Reunion
                          </div>{" "}
                        </Link>
                        <Link
                          to="/events"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <GoSponsorTiers className="font-bold" />
                            Sponserships
                          </div>{" "}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-2 cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full py-2 rounded-md duration-200">
                    <div
                      className="flex flex-row gap-2 items-center"
                      onClick={() => tglsubmenu("services")}
                    >
                      <div>Services</div>

                      <div>
                        <FaCaretDown
                          className={`${
                            submenu === "services" ? "rotate-180" : ""
                          }  duration-300`}
                        />
                      </div>
                    </div>

                    {/* Submenu items */}
                    {submenu === "services" && (
                      <div className="flex flex-col text-sm font-semibold mt-2 rounded-md w-full px-2 py-1 gap-2 bg-gray-100">
                        <Link
                          to="/getinvolved"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <RiRefund2Line className="font-bold" />
                            Donate
                          </div>{" "}
                        </Link>
                        <Link
                          to="/getinvolved"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <IoPersonSharp className="font-bold" />
                            Alumni Directory
                          </div>{" "}
                        </Link>
                        <Link
                          to="/getinvolved"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <SiMentorcruise className="font-bold" />
                            Mentor Ship
                          </div>{" "}
                        </Link>
                        <Link
                          to="/getinvolved"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <GrWorkshop className="font-bold" />
                            Workshops
                          </div>{" "}
                        </Link>
                        <Link
                          to="/getinvolved"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <RiKakaoTalkFill className="font-bold" />
                            Alumni Talks
                          </div>{" "}
                        </Link>
                        <Link
                          to="/getinvolved"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <FaRegIdCard className="font-bold" />
                            Alumni SMART ID
                          </div>{" "}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-2 cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full py-2 rounded-md duration-200">
                    <div
                      className="flex flex-row gap-2 items-center"
                      onClick={() => tglsubmenu("alumni")}
                    >
                      <div>Alumni</div>

                      <div>
                        <FaCaretDown
                          className={`${
                            submenu === "alumni" ? "rotate-180" : ""
                          }  duration-300`}
                        />
                      </div>
                    </div>

                    {/* Submenu items */}
                    {submenu === "alumni" && (
                      <div className="flex flex-col text-sm font-semibold mt-2 rounded-md w-full px-2 py-1 gap-2 bg-gray-100">
                        <Link
                          to="/events"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <FaComputer className="font-bold" />
                            CSE
                          </div>{" "}
                        </Link>
                        <Link
                          to="/events"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <MdOutlineElectricBolt className="font-bold" />
                            ECE
                          </div>{" "}
                        </Link>
                        <Link
                          to="/events"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <MdOutlineElectricScooter className="font-bold" />
                            EEE
                          </div>{" "}
                        </Link>
                        <Link
                          to="/events"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <FaBuilding className="font-bold" />
                            CIVIL
                          </div>{" "}
                        </Link>
                        <Link
                          to="/events"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <GiMissileMech className="font-bold" />
                            MECH
                          </div>{" "}
                        </Link>
                        <Link
                          to="/events"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <GiChemicalTank className="font-bold" />
                            CHEM
                          </div>{" "}
                        </Link>
                        <Link
                          to="/events"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <GiMetalDisc className="font-bold" />
                            MME
                          </div>{" "}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <Link
                  to="Contact"
                  className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950  rounded-md duration-200"
                  onClick={() => tabClick("contact")}
                >
                  Contact
                </Link>
                <div>
                  <div className="flex flex-col gap-2 cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full py-2 rounded-md duration-200">
                    <div
                      className="flex flex-row gap-2 items-center"
                      onClick={() => tglsubmenu("updates")}
                    >
                      <div>Updates</div>

                      <div>
                        <FaCaretDown
                          className={`${
                            submenu === "updates" ? "rotate-180" : ""
                          }  duration-300`}
                        />
                      </div>
                    </div>

                    {/* Submenu items */}
                    {submenu === "updates" && (
                      <div className="flex flex-col text-sm font-semibold mt-2 rounded-md w-full px-2 py-1 gap-2 bg-gray-100">
                        <Link
                          to="/getinvolved"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <FaRegNewspaper className="font-bold" />
                            News Letter
                          </div>{" "}
                        </Link>
                        <Link
                          to="/getinvolved"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <LiaAwardSolid className="font-bold" />
                            RGUKT Awards
                          </div>{" "}
                        </Link>
                        <Link
                          to="/getinvolved"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center">
                            <LuNewspaper className="font-bold" />
                            Alumni News
                          </div>{" "}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <a
                  href="#"
                  className="text-white font-semibold bg-blue-950 px-2 py-[5px] rounded-md w-full text-center"
                  onClick={() => tabClick("donate")}
                >
                  {" "}
                  Donate
                </a>
                <Link
                  to="login"
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
