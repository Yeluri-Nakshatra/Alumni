import React from "react";
import img from "../assets/logo.png";
const DistinguishedAlumni = () => {
  const alumni = [
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
        profile: img,
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
  ];
  return (
    <div className="">
      <div className="w-[98%] md:w-[280px] lg:w-[430px] border bg-white shadow-lg  rounded-md">
        {/* header */}
        <div className="flex flex-row bg-white  items-center w-[100%] px-4 py-4">
          <div className="text-lg font-bold text-blue-950">DISTINGUISHED ALUMNI</div>
          
        </div>
        <div className="w-full h-[500px] overflow-y-auto">
          <div className="mx-4 flex flex-col gap-4">
            {alumni.map((data) => (
              <div className="flex flex-row items-center justify-start gap-4 hover:bg-gray-200 rounded-md p-1">
                <div><img src={data.profile} className="w-[50px] h-[50px]" /></div>
                <div className="flex flex-col ">
                    <div className="font-semibold">{data.name}</div>
                    <div className="font-normal text-gray-500">{data.position}</div>

                </div>

                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistinguishedAlumni;
