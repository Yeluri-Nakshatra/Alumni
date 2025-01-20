import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import firsteve from "../../assets/firsteve.png"
import Eventsimg from "../../assets/Eventsimg.png"
import Buttoneve from "../../assets/Buttoneve.png"
import Secondeve from "../../assets/Secondeve.png";
import Thirdeve from "../../assets/Thirdeve.png";
import Fourtheve from "../../assets/Fourtheve.png";
import Fiftheve from "../../assets/Fiftheve.png";
import Photoone from "../../assets/Photoone.png";
import Phototwo from "../../assets/Phototwo.png";
const EventsPage = () => {
  return (
    <div className="flex mt-8 md:mt-12 lg:mt-14 flex-col p-[50px] ">
        <div><img src={Eventsimg} className="w-screen overflow-x-hidden"></img></div>
        <div className="text-3xl font-bold pt-2">UpComing Events</div>
        <div className="pt-2">RGUKT Alumini events are great to stay connected to the university and your fellow graduates.Find an 
            near you or one that matches your interests
        </div>
        <div className="flex flex-row gap-[10px] flex-wrap pt-[6px]">
            <div><button className="bg-blue-100 rounded-lg flex items-center space-x-2 p-[6px]"><CiLocationOn /><span>All events</span></button></div>
            <div><button className="bg-blue-100 rounded-lg flex items-center space-x-2 p-[6px]"><MdOutlineOndemandVideo /><span>Webinars</span></button></div>
            <div><button className="bg-blue-100 rounded-lg flex items-center space-x-2 p-[6px]"><IoPersonOutline /><span>Inperson</span></button></div>
            <div><button className="bg-blue-100 rounded-lg flex items-center space-x-2 p-[6px]"><IoPersonOutline /><span>Virtual</span></button></div>
        </div>
        <div className="pt-[10px] flex flex-col md:flex-row">
            <div className="flex w-full md:w-[25%]"><img src={firsteve} /></div>
            <div className="flex flex-col w-full md:w-[70%]">
                <div className="flex md:justify-end pt-[10px]"><button><img src={Buttoneve}/></button></div>
                <div className="flex md:pl-[30px] pt-[10px] md:pt-[50px] text-[#4573A1]">Oct 15</div>
                <div  className="flex md:pl-[30px] pt-[10px] text-xl font-bold">Home coming</div>
                <div  className="flex md:pl-[30px] pt-[10px] text-[#4573A1] text-semibold">Join us for our annual home coming event,featuring the football game, the 5k run and more</div>
            </div>
        </div>
        <div className="pt-[10px] flex flex-col md:flex-row">
            <div className="flex w-full md:w-[25%]"><img src={Secondeve} /></div>
            <div className="flex flex-col w-full md:w-[70%]">
                <div className="flex  md:justify-end pt-[4px]"><button><img src={Buttoneve}/></button></div>
                <div className="flex md:pl-[30px] pt-[10px] md:pt-[50px] text-[#4573A1]">Oct 15</div>
                <div  className="flex md:pl-[30px] pt-[10px] text-xl font-bold">Hello Nuzvidu</div>
                <div  className="flex md:pl-[30px] pt-[10px] text-[#4573A1] text-semibold">Join us for our annual home coming event,featuring the football game, the 5k run and more</div>
            </div>
        </div>
        <div className="flex text-xl font-bold pt-[20px]">Past Events</div>
        <div className="flex flex-col md:flex-row justify-between">
            <div className="flex w-full md:w-[30%] flex-col">
                <div><img src={Thirdeve} /></div>
                <div className="text-md flex font-bold justify-center items-center">Hello nuzvid</div>
                <div className="text-[#4573A1]">Join us for our annual Homecoming event ,featuring the football game,the 5k run, and more.</div>
            </div>
            <div className="flex w-full md:w-[30%] flex-col">
                <div><img src={Fourtheve} /></div>
                <div className="text-md flex font-bold justify-center items-center">Hello nuzvid</div>
                <div className="text-[#4573A1]">Join us for our annual Homecoming event ,featuring the football game,the 5k run, and more.</div>
            </div>
            <div className="flex w-full md:w-[30%] flex-col">
                <div><img src={Fiftheve} /></div>
                <div className="flex text-md font-bold justify-center items-center ">Hello nuzvid</div>
                <div className="text-[#4573A1]">Join us for our annual Homecoming event ,featuring the football game,the 5k run, and more.</div>
            </div>

        </div>
        <div className="flex text-xl font-bold pt-[10px]">Some memories</div>
        <div className="pt-[5px]">All photos</div>
        <div className="flex flex-col md:flex-row gap-[6px]">
            <div><img src={Photoone} className="w-[562px] h-[496px]  bg-red-500"></img></div>
            <div className="flex flex-col md:flex-row flex-wrap gap-[6px] pl-[6px]">
            <div><img src={Phototwo} className="w-[320px] h-[235px]"></img></div>
            <div><img src={Phototwo} className="w-[180px] h-[235px]"></img></div>
            <div><img src={Phototwo} className="w-[505px] h-[247px]"></img></div>
            </div>
            <div><img src={Photoone} className="w-[562px] h-[496px]"></img></div>
            <div><img src={Photoone} className="w-[562px] h-[496px]   pl-[4px]"></img></div>
           
           

        </div>


      
    </div>
  )
}

export default EventsPage
