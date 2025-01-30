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
    <div className="">
      <div className="w-[98%] md:w-[280px] lg:w-[430px] border bg-white shadow-lg rounded-md">
        {/* header */}
        <div className="flex flex-row bg-white justify-between items-center w-[100%] px-4 py-4">
          <div className="text-lg text-blue-950 font-bold">ANNOUNCEMENTS</div>
          <div>
            <a href="#" className="text-red-600 font-semibold">
              View All
            </a>
          </div>
        </div>
        <div className="w-full h-[500px] overflow-y-auto">
          <div className="mx-2 flex flex-col gap-4">
            {announc.map((data) => (
              <div className="flex border-2 border-gray-300 flex-col gap-4 rounded-md hover:bg-gray-200 ">
                <div className="flex flex-row gap-2 mt-2 justify-center items-center">
                  <div>
                    <img
                      src={data.profile}
                      className="w-[50px] h-[50px] rounded-[50%]"
                    />
                  </div>
                  <div className="flex flex-col gap-0">
                    <div className="flex flex-row justify-between items-center pr-2 md:gap-2">
                      <div className=" font-semibold text-[15px]">{data.sendor}</div>
                      <div className="text-gray-500 font-semibold text-[10px]">SENDOR</div>
                    </div>
                    <div className='text-gray-500 text-[10px] font-semibold'>
                        {data.position.toUpperCase()}
                    </div>
                    <div className="text-xs text-gray-900">
                        {data.address}
                    </div>
                  </div>
                </div>
                <div className='p-2 text-sm'>
                    {data.description}
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
