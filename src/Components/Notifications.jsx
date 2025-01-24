import React from 'react'
import { useState } from "react";
const Notifications = () => {
    const notific = [
        { 
          id:1,
          title:"Note1",
          time:'2m ago',
          note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptate?",
        },
        {
          id:2,
          title:"Note2",
          time:'3m ago',
          note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptate?",
        },
        {
          id:3,
          title:"Note3",
          time:'9m ago',
          note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptate?",
        },
        {
          id:4,
          title:'Note4',
          time:'1hr ago',
          note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptate?",
        },
      ];
       const [msg, setMsg] = useState(null);
        const toggleMessage = (id) => {
          msg === id ? setMsg(null) : setMsg(id);
        };
  return (
    <div className='mt-20 mb-10'>
        <div className='flex flex-col gap-0 justify-center items-center'>
            <div className='mx-4 mt-4 w-[95%] rounded-lg h-[60px] md:h-[100px] bg-blue-950'></div>
            <div className='md:w-[300px] md:h-[50px] w-[170px] flex justify-center h-[40px] bg-blue-950 rounded-bl-lg rounded-br-lg text-white font-bold text-lg md:text-2xl text-center'>Notifications</div>

        </div>
        <div className="  gap-4 mt-8   p-4 justify-center items-center  flex flex-col rounded-lg ">
      {notific.map((data) => (
        <div
          className="w-[90%] md:w-[70%] duration-[500ms] bg-white text-sm shadow-md shadow-blue-950 border   p-1 cursor-pointer  rounded-md sm:text-md hover:scale-[1.05]"
          key={data.id}
          onClick={() => toggleMessage(data.id)}
        >
            <div className="flex flex-row justify-between">
                <div className="font-bold text-blue-950">{data.title}</div>
                <div className="font-semibold text-gray-700">{data.time}</div>
                </div>
          {" "}
          {data.id === msg ? data.note : `${data.note.substring(0, 30)}...`}
        </div>
      ))}
      
    </div>
    </div>
  )
}

export default Notifications