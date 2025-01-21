import React from 'react'
import Frame2 from "../assets/Frame2.png";
const SeekersSays = () => {
    const helpSeekers = [
        {
          img: Frame2,
          data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          cost: "xx,xxx/-",
        },
        {
            img: Frame2,
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            cost: "xx,xxx/-",
          },
          {
            img: Frame2,
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            cost: "xx,xxx/-",
          },
          {
            img: Frame2,
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            cost: "xx,xxx/-",
          },
          {
            img: Frame2,
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            cost: "xx,xxx/-",
          },
          {
            img: Frame2,
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            cost: "xx,xxx/-",
          },
          
      ];
  return (
    <div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-[40px] lg:text-[50px] text-center  font-bold">See what your help seekers said</div>
          <div className="flex flex-wrap gap-6 justify-center items-center md:justify-between">
            {helpSeekers.map((item) => (
              <div className="flex flex-row justify-center items-center gap-4 bg-white shadow-blue-950 shadow-md rounded-lg p-4 h-auto lg:text-[14px] text-xs w-full md:w-[47%]">
                <div>
                  <img src={item.img} className="w-full " />
                </div>
                <div className="flex gap-2 flex-col">
                  <div>{item.data}</div>
                  <div><span className="font-bold">Fund Raised: </span>{item.cost}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default SeekersSays