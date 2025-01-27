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
import { GrGallery } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import Login from "../Components/Login";
import { GrChapterAdd } from "react-icons/gr";
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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <div className="fixed bg-white top-0 left-0 w-screen z-[9999]">
      <div className="flex  flex-row justify-between items-center m-2 mx-4 h-max">
        <div className="flex flex-row ">
          <div>
            <Link to="/home">
              <img
                src={Logo}
                className="w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
              />
            </Link>
          </div>
          <div className="hidden lg:flex flex-col justify-center items-center ">
            <div className="text-md font-bold text-blue-950 ">
              ALUMNI ASSOCIATION
            </div>
            <div className="font-semibold">RGUKT-NUZVID</div>
          </div>
        </div>
        <div className=" hidden lg:flex flex-row items-center justify-center gap-4 font-semibold">
          {/* Home */}
          <Link
            to="/home"
            onClick={() => setTab("home")}
            className={`relative  group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
              ${
                location.pathname === "/home"
                  ? "text-blue-950"
                  : "text-gray-500"
              }
               `}
          >
            Home
            
            
            {location.pathname === "/home" ? (
              
              <hr className="absolute bottom-0 left-2 w-[80%]  horizontal bg-blue-950 h-[3px] mt-1" />
              
            ) : (
              <hr className=" absolute bottom-0 left-2 w-[80%]   horizontal bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
            
          </Link>
          {/* About */}
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
                to="/alumni_association"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <RiUserCommunityFill className="font-bold" />
                  Alumni Association
                </div>{" "}
              </Link>
              <Link
                to="/core_team"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <GiAtomCore className="font-bold" />
                  Core Team
                </div>{" "}
              </Link>
              <Link
                to="/student_volunteers"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <BsPersonHeart className="font-bold" />
                  Student Volunteers
                </div>{" "}
              </Link>
              <Link
                to="/web_team"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <MdWebhook className="font-bold" />
                  Web Team
                </div>{" "}
              </Link>
              <Link
                to="/gallery"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <GrGallery className="font-bold" />
                  Gallery
                </div>{" "}
              </Link>
            </div>
          </div>
          {/* Events */}
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
                to="/event_calender"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("eventcalender")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <SlCalender className="font-bold" />
                  Event Calender
                </div>{" "}
              </Link>
              <Link
                to="/reunion"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("reunion")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <LuCombine className="font-bold" />
                  Reunion
                </div>{" "}
              </Link>
              <Link
                to="/sponserships"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("sponserships")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <GoSponsorTiers className="font-bold" />
                  Sponserships
                </div>{" "}
              </Link>
              <Link
                to="/services"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("services")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <GrServices className="font-bold" />
                  Services
                </div>{" "}
              </Link>
              <Link
                to="/chapters"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setTab("services")}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <GrChapterAdd className="font-bold" />
                  Chapters
                </div>{" "}
              </Link>
            </div>
          </div>
          {/* News&Blogs */}
          <div className="group relative  p-2">
            <div className="flex  flex-row items-center  gap-2">
              <div
                className={`cursor-pointer rounded-md duration-200 font-semibold  hover:text-blue-950
                    ${
                      tab === "news&blogs" ? " text-blue-950" : "text-gray-500"
                    }`}
              >
                News & Blogs
              </div>
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </div>
            <div className="hidden group-hover:flex absolute duration-400 flex-col mt-2 rounded-md w-max px-2 py-1 gap-2 bg-gray-100">
              <Link
                to="/donate"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <RiRefund2Line className="font-bold" />
                  Donate
                </div>{" "}
              </Link>
             
                <Link to='/alumni_directory' className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 ">
                <div className="flex flex-row gap-2 items-center p-1">
                  <IoPersonSharp className="font-bold" />
                  Alumni Directory
                </div>{" "}
              </Link>
              <Link
                to="/mentor_ship"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <SiMentorcruise className="font-bold" />
                  Mentor Ship
                </div>{" "}
              </Link>
              <Link
                to="/workshops"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <GrWorkshop className="font-bold" />
                  Workshops
                </div>{" "}
              </Link>
              <Link
                to="/alumni_talks"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <RiKakaoTalkFill className="font-bold" />
                  Alumni Talks
                </div>{" "}
              </Link>
              <Link
                to="/smartid"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <FaRegIdCard className="font-bold" />
                  Alumni SMART ID
                </div>{" "}
              </Link>
            </div>
          </div>
          

          {/* Updates */}
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
                to="/news_letter"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <FaRegNewspaper className="font-bold" />
                  News Letter
                </div>{" "}
              </Link>
              <Link
                to="/awards"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <LiaAwardSolid className="font-bold" />
                  RGUKT Awards
                </div>{" "}
              </Link>
              <Link
                to="/alumni_news"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <LuNewspaper className="font-bold" />
                  Alumni News
                </div>{" "}
              </Link>
            </div>
          </div>
          {/* Contact */}
          <Link
            to="Contact"
            className={`relative group font-semibold cursor-pointer px-4 py-1 rounded-md duration-200  hover:text-blue-950
                    ${tab === "contact" ? " text-blue-950" : "text-gray-500"} `}
            onClick={() => setTab("contact")}
          >
            Contact
            {tab === "contact" ? (
              <hr className="absolute bottom-0 left-3 w-[80%]  horizontal bg-blue-950 h-[3px] mt-1" />
            ) : (
              <hr className="absolute bottom-0 left-3 w-[80%]  horizontal bg-blue-950 h-[3px] mt-1 hidden group-hover:block" />
            )}
          </Link>
        </div>
        <div className="hidden lg:flex flex-row justify-center items-center gap-4">
          {/* Donate */}
          <div className="flex flex-row justify-center items-center">
            <a
              href="#"
              className="text-white font-semibold bg-blue-950 px-2 py-[5px] rounded-md "
            >
              Donate
            </a>
          </div>
          {/* Sign in/ Sign up */}
          <div>
            <button
              onClick={toggleModal}
              className="font-semibold bg-blue-950 bg-opacity-20 px-2 py-[5px] rounded-md"
            >
               Sign In / Sign Up
            </button>
          </div>
          
          
          {/* Notifications */}
          <div className="group flex flex-col  subscription mr-[20px]">
            <img src={bell} className="h-[35px] w-[35px]" />
            {count > 0 && <span className="bell-icon">{count}</span>}
            <div className="absolute top-10 right-0 hidden group-hover:flex">
              <NewNotifications />
            </div>
          </div>
        </div>
        {/* sidebar */}
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
                {/* Home */}
                <Link
                  to="/home"
                  className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950  rounded-md duration-200"
                  onClick={() => {
                    tabClick("home");
                  }}
                >
                  Home
                </Link>
                {/* About */}
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
                          to="/alumni_association"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <RiUserCommunityFill className="font-bold" />
                            Alumni Association
                          </div>{" "}
                        </Link>
                        <Link
                          to="/core_team"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <GiAtomCore className="font-bold" />
                            Core Team
                          </div>{" "}
                        </Link>
                        <Link
                          to="/student_volunteers"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <BsPersonHeart className="font-bold" />
                            Student Volunteers
                          </div>{" "}
                        </Link>
                        <Link
                          to="/web_team"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <MdWebhook className="font-bold" />
                            Web Team
                          </div>{" "}
                        </Link>
                        <Link
                          to="/gallery"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <GrGallery className="font-bold" />
                            Gallery
                          </div>{" "}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                {/* Events */}
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
                          to="/event_calender"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <SlCalender className="font-bold" />
                            Event Calender
                          </div>{" "}
                        </Link>
                        <Link
                          to="/reunion"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <LuCombine className="font-bold" />
                            Reunion
                          </div>{" "}
                        </Link>
                        <Link
                          to="/sponserships"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <GoSponsorTiers className="font-bold" />
                            Sponserships
                          </div>{" "}
                        </Link>
                        <Link
                          to="/services"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <GrServices className="font-bold" />
                            Services
                          </div>{" "}
                        </Link>
                        <Link
                to="/chapters"
                className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                onClick={() => setIsMenuVisible(false)}
              >
                {" "}
                <div className="flex flex-row gap-2 items-center p-1">
                  <GrChapterAdd className="font-bold" />
                  Chapters
                </div>{" "}
              </Link>
                      </div>
                    )}
                  </div>
                </div>
                {/* News & Blogs */}
                <div>
                  <div className="flex flex-col gap-2 cursor-pointer font-semibold text-gray-600 hover:text-blue-950 w-full py-2 rounded-md duration-200">
                    <div
                      className="flex flex-row gap-2 items-center"
                      onClick={() => tglsubmenu("news&blogs")}
                    >
                      <div>News & Blogs</div>

                      <div>
                        <FaCaretDown
                          className={`${
                            submenu === "news&blogs" ? "rotate-180" : ""
                          }  duration-300`}
                        />
                      </div>
                    </div>

                    {/* Submenu items */}
                    {submenu === "news&blogs" && (
                      <div className="flex flex-col text-sm font-semibold mt-2 rounded-md w-full px-2 py-1 gap-2 bg-gray-100">
                        <Link
                          to="/donate"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <RiRefund2Line className="font-bold" />
                            Donate
                          </div>{" "}
                        </Link>
                        <Link
                          to="/alumni_directory"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <IoPersonSharp className="font-bold" />
                            Alumni Directory
                          </div>{" "}
                        </Link>
                        <Link
                          to="/mentor_ship"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <SiMentorcruise className="font-bold" />
                            Mentor Ship
                          </div>{" "}
                        </Link>
                        <Link
                          to="/workshops"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <GrWorkshop className="font-bold" />
                            Workshops
                          </div>{" "}
                        </Link>
                        <Link
                          to="/alumni_talks"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <RiKakaoTalkFill className="font-bold" />
                            Alumni Talks
                          </div>{" "}
                        </Link>
                        <Link
                          to="/smartid"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => {
                            setIsMenuVisible(false);
                          }}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <FaRegIdCard className="font-bold" />
                            Alumni SMART ID
                          </div>{" "}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Updates */}
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
                          to="/news_letter"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <FaRegNewspaper className="font-bold" />
                            News Letter
                          </div>{" "}
                        </Link>
                        <Link
                          to="/awards"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <LiaAwardSolid className="font-bold" />
                            RGUKT Awards
                          </div>{" "}
                        </Link>
                        <Link
                          to="/alumni_news"
                          className="text-gray-500 hover:text-blue-950 hover:bg-blue-950 hover:bg-opacity-20 rounded px-2 "
                          onClick={() => setIsMenuVisible(false)}
                        >
                          {" "}
                          <div className="flex flex-row gap-2 items-center p-1">
                            <LuNewspaper className="font-bold" />
                            Alumni News
                          </div>{" "}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                {/* Contact */}
                <Link
                  to="Contact"
                  className=" cursor-pointer font-semibold text-gray-600 hover:text-blue-950  rounded-md duration-200"
                  onClick={() => tabClick("contact")}
                >
                  Contact
                </Link>
                {/* Donate */}

                <a
                  href="#"
                  className="flex flex-row justify-center items-center text-white font-semibold bg-blue-950 px-2 py-[5px] rounded-md w-full text-center"
                  onClick={() => tabClick("donate")}
                >
                  {" "}
                  Donate
                </a>
                {/* Sign in */}


                <div>
            <button
              onClick={toggleModal}
              className="font-semibold bg-blue-950 bg-opacity-20 px-2 py-[5px] rounded-md"
            >
               Sign In / Sign Up
            </button>
          </div>
                
               
              </div>
            </div>
          )}
        </div>
      </div>
      <Login isVisible={isModalVisible} onClose={toggleModal} />
    </div>
  );
};

export default Header;