import React from 'react'
import Coin from '../assets/Coin.jpg';
import Hostel from '../assets/Hostel.jpeg';
import { useNavigate,useLocation  } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
const Sponsership = () => {
  const navigate=useNavigate();
  const location = useLocation();
  return (
    <div className="md:pl-[20px] mt-[110px] md:pr-[20px] pl-[10px] pr-[10px]">
        <div className="flex flex-col">
            <div className="flex justify-end relative lg:mr-[100px]"><img src={Coin} className="w-[300px] w-[500px]"></img></div>
            <div className="absolute flex text-3xl font-bold lg:mt-[200px] mt-[190px] md:mt-[100px] lg:ml-[200px]">Sponserships</div>
            <div className="absolute lg:mt-[240px] mt-[220px] w-[270px] lg:w-[500px] text-sm lg:ml-[200px]">Our alumni has graciously contributed in building the future of the university</div>
            <div className="bg-green-200 h-auto flex flex-col w-full p-[20px] lg:p-[30px] mt-[50px] md:mt-[0px]">
              <div className=" flex w-full justify-center">
                <div className="w-[250px] flex flex-wrap justify-center items-center md:w-[350px] bg-white rounded-md ">
                <button className="p-1 px-2 font-semibold rounded-md hover hover:bg-blue-950 hover:text-white"onClick={()=>navigate('/Clg')}>Collage infrastucture</button>
                <button className="p-1 px-2 font-semibold rounded-md hover hover:bg-blue-950 hover:text-white"onClick={()=>navigate('/Eve')}>Events</button>
                <button className="p-1 px-2 font-semibold rounded-md hover hover:bg-blue-950 hover:text-white"onClick={()=>navigate('/Students')}>Students</button>
                </div>

              </div>
              <div className="flex flex-wrap pt-[60px] justify-evenly lg:pl-[250px] lg:pr-[250px] gap-[20px]">
                <div className="w-[320px] h-[310px] rounded-md flex flex-row bg-white p-[10px]">
                  <div className="w-[50%]">
                    <div className="flex w-full h-full"><img src={Hostel} className="rounded-md"></img></div>
                  </div>
                  <div className="flex flex-col pl-[5px]">
                    <div className="text-lg font-bold pt-[6px]">I2 Hostel</div>
                    <div className="pt-[50px] text-sm font-semibold">Fund raised 1,00,000/-</div>
                    <div className="pt-[35px] text-sm font-semibold">No:Of Sponcers: 10</div>
                    <div className="pt-[35px] text-sm font-semibold">Spart:10/8/24</div>
                    <div className="pt-[40px] flex justify-end"><button className="text-purple-500 flex flex-row"onClick={()=>navigate('/Secondsponcer')}><p>View more-</p><p className="pt-[7px]"><FaAngleRight /></p></button></div>


                  </div>

                </div>
                <div className="w-[320px] h-[310px] rounded-md flex flex-row bg-white p-[10px]">
                  <div className="w-[50%]">
                    <div className="flex w-full h-full"><img src={Hostel} className="rounded-md"></img></div>
                  </div>
                  <div className="flex flex-col pl-[5px]">
                    <div className="text-lg font-bold pt-[6px]">I2 Hostel</div>
                    <div className="pt-[50px] text-sm font-semibold">Fund raised 1,00,000/-</div>
                    <div className="pt-[35px] text-sm font-semibold">No:Of Sponcers: 10</div>
                    <div className="pt-[35px] text-sm font-semibold">Spart:10/8/24</div>
                    <div className="pt-[40px] flex justify-end"><button className="text-purple-500 flex flex-row"onClick={()=>navigate('/Secondsponcer')}><p>View more-</p><p className="pt-[7px]"><FaAngleRight /></p></button></div>


                  </div>

                </div>
                <div className="w-[320px] h-[310px] rounded-md flex flex-row bg-white p-[10px]">
                  <div className="w-[50%]">
                    <div className="flex w-full h-full"><img src={Hostel} className="rounded-md"></img></div>
                  </div>
                  <div className="flex flex-col pl-[5px]">
                    <div className="text-lg font-bold pt-[6px]">I2 Hostel</div>
                    <div className="pt-[50px] text-sm font-semibold">Fund raised 1,00,000/-</div>
                    <div className="pt-[35px] text-sm font-semibold">No:Of Sponcers: 10</div>
                    <div className="pt-[35px] text-sm font-semibold">Spart:10/8/24</div>
                    <div className="pt-[40px] flex justify-end"><button className="text-purple-500 flex flex-row"onClick={()=>navigate('/Secondsponcer')}><p>View more-</p><p className="pt-[7px]"><FaAngleRight /></p></button></div>


                  </div>

                </div>
                <div className="w-[320px] h-[310px] rounded-md flex flex-row bg-white p-[10px]">
                  <div className="w-[50%]">
                    <div className="flex w-full h-full"><img src={Hostel} className="rounded-md"></img></div>
                  </div>
                  <div className="flex flex-col pl-[5px]">
                    <div className="text-lg font-bold pt-[6px]">I2 Hostel</div>
                    <div className="pt-[50px] text-sm font-semibold">Fund raised 1,00,000/-</div>
                    <div className="pt-[35px] text-sm font-semibold">No:Of Sponcers: 10</div>
                    <div className="pt-[35px] text-sm font-semibold">Spart:10/8/24</div>
                    <div className="pt-[40px] flex justify-end"><button className="text-purple-500 flex flex-row"onClick={()=>navigate('/Secondsponcer')}><p>View more-</p><p className="pt-[7px]"><FaAngleRight /></p></button></div>


                  </div>

                </div>

              </div>

            </div>
        </div>
      
    </div>
  )
}

export default Sponsership
