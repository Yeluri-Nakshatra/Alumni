import React from 'react'
import rgukt from '../../../assets/rgukt.jpeg'
import Hackathon from '../../../assets/Hackathon.png';
import AIHackathon from '../../../assets/AIHackathon.png';
const Awards = () => {
  return (
    <div className="flex flex-col bg-gray-100 lg:mt-[130px] pb-[30px] overflow-hidden">
      <div className='relative w-screen h-[300px] md:h-[550px]'>
        <img src={rgukt} className="w-full h-full  "></img>
        <div className='absolute flex flex-col top-0 left-0 w-full h-full bg-black bg-opacity-40 items-center justify-center'>
        <div className="text-2xl md:text-3xl font-bold  text-white ">RGUKT ACHIEVEMENTS</div>
        <hr className="  w-[200px] flex  font-bold"></hr>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full items-center pt-[50px] gap-[10px] p-[10px]">
        <div className="flex flex-row items-center rounded-lg w-[98%] md:w-[70%] lg:w-[60%] shadow-md bg-white p-2 md:p-[20px] gap-[10px] md:gap-[30px]">
          <div><img src={Hackathon} className="w-[250px] md:w-[400px] h-[120px] md:h-[190px] rounded-lg"></img></div>
          <div className="flex flex-col gap-[10px] md:gap-[30px]">
            <div className="text-lg font-bold md:pt-[20px]">Smart India Hackathon 2024-Winners</div>
            <div>Organised By: government fo India</div>
            <div>Cash prize: 1,00,000</div>

          </div>

        </div>
        <div className="flex flex-row items-center w-[98%] md:w-[70%] lg:w-[60%] bg-white rounded-lg shadow-md p-2 md:p-[20px] gap-[10px] md:gap-[30px]">
          <div><img src={AIHackathon} className="w-[250px] md:w-[400px] h-[120px] md:h-[190px] rounded-lg"></img></div>
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