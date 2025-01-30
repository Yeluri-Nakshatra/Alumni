import React from 'react'
import rgukt from '../../../assets/rgukt.jpeg'
import Hackathon from '../../../assets/Hackathon.png';
import AIHackathon from '../../../assets/AIHackathon.png';
const Awards = () => {
  return (
    <div className="flex flex-col bg-gray-100 pb-[30px]">
      <div>
        <div className="flex mt-[-150px]"><img src={rgukt} className="w-full h-[550px] relative bg-black opacity-80"></img></div>
        <div className="absolute text-2xl md:text-3xl font-bold mt-[-190px] md:mt-[-170px] text-white md:ml-[250px] lg:ml-[600px] ml-[40px]">RGUKT ACHIEVEMENTS</div>
        <hr className="absolute text-red-500 mt-[-150px] md:mt-[-130px] w-[200px] flex md:ml-[300px] lg:ml-[650px] ml-[70px] font-bold"></hr>
      </div>
      <div className="flex flex-col justify-center w-full items-center pt-[50px] gap-[10px] p-[10px]">
        <div className="flex flex-row bg-white p-[20px] gap-[10px] md:gap-[30px]">
          <div><img src={Hackathon} className="w-[250px] md:w-[400px] h-[190px]"></img></div>
          <div className="flex flex-col gap-[10px] md:gap-[30px]">
            <div className="text-lg font-bold md:pt-[20px]">Smart India Hackathon 2024-Winners</div>
            <div>Organised By: government fo India</div>
            <div>Cash prize: 1,00,000</div>

          </div>

        </div>
        <div className="flex flex-row bg-white p-[20px] gap-[10px] md:gap-[30px]">
          <div><img src={AIHackathon} className="w-[250px] md:w-[400px] h-[190px]"></img></div>
          <div className="flex flex-col gap-[10px] md:gap-[30px]">
            <div className="text-lg font-bold md:pt-[20px]">Intel AI Hackathon 2024-2nd Runner Up</div>
            <div>IEEE and Intel AI</div>
            <div>Cash prize: 15000</div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Awards