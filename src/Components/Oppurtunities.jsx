import React from 'react'
import Logo from "../assets/logo.png"
const Oppurtunities = () => {
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
  )
}

export default Oppurtunities