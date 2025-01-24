import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const NewNotifications = () => {
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
    <div className="absolute duration-[1000ms] top-16 w-[300px] z-[1000] gap-2 bg-white/30 backdrop-blur-lg   border border-black/20 shadow-md p-4  right-4 flex flex-col rounded-lg ">
      {notific.map((data) => (
        <div
          className="duration-[500ms] bg-white text-sm shadow-md shadow-blue-950 border   p-1 cursor-pointer  rounded-md sm:text-md hover:scale-[1.1]"
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
      <div>
        <Link to='/notifications'>
        <button className="duration-[500ms] bg-blue-950 text-white font-bold w-full p-1 rounded-lg hover:scale-[0.8] ">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default NewNotifications;
