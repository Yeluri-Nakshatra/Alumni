import React from "react";
import img from "../assets/logo.png";
const Announcement = () => {
  const announc = [
    {
      profile: img,
      sendor: "Office of Alumni Affairs - IIT Kharagpur",
      position: "PROJECT ASSISTANT",
      address: "at Indian Institute of Technology Kharagpur, Kharagpur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic non aliquid ducimus tenetur suscipit, delectus voluptates sit, saepe ipsum laboriosam illum deleniti eaque aspernatur quos nam minus veritatis. ",
    },
    {
      profile: img,
      sendor: "Office of Alumni Affairs - IIT Kharagpur",
      position: "PROJECT ASSISTANT",
      address: "at Indian Institute of Technology Kharagpur, Kharagpur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic non aliquid ducimus tenetur suscipit, delectus voluptates sit, saepe ipsum laboriosam illum deleniti eaque aspernatur quos nam minus veritatis. ",
    },
  ];
  return (
    <div className="w-full h-screen flex justify-center items-center flex-row bg-gray-200">
      <div className="w-[430px]  bg-white">
        {/* header */}
        <div className="flex flex-row bg-gray-400 justify-between items-center w-[100%] px-4 py-4">
          <div className="text-lg font-semibold">ANNOUNCEMENT</div>
          <div>
            <a href="#" className="text-blue-950 font-semibold">
              View All
            </a>
          </div>
        </div>
        <div className="w-full h-[480px] overflow-y-auto">
          <div className="mx-2 border-2 flex flex-col gap-2">
            {announc.map((data) => (
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 justify-center items-center">
                  <div>
                    <img
                      src={data.profile}
                      className="w-[20px] h-[20px] rounded-[50%]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between items-center">
                      <div className="text-lg font-semibold">{data.sendor}</div>
                      <div className="text-gray-500 font-semibold">SENDOR</div>
                    </div>
                    <div className='text-gray-500 '>
                        {data.position.toUpperCase()}
                    </div>
                    <div>
                        {data.address}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
