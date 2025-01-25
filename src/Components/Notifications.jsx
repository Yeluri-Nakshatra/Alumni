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
        const [tab, setTab] = useState("direct");
  return (
    <div className='mt-28 md:mt-36 mb-10 h-auto md:h-[50vh] lg:h-auto flex flex-col justify-center items-center'>
        {/* <div className='flex flex-col gap-0 justify-center items-center'>
            <div className='mx-4 mt-4 w-[95%] rounded-lg h-[60px] md:h-[100px] bg-blue-950'></div>
            <div className='md:w-[300px] md:h-[50px] w-[170px] flex justify-center h-[40px] bg-blue-950 rounded-bl-lg rounded-br-lg text-white font-bold text-lg md:text-2xl text-center'>Notifications</div>

        </div> */}
        <div className='font-bold text-2xl text-blue-950 my-10'>Notifications</div>
        <div className='flex flex-col gap-4 w-[80%] justify-center '>
        <div className='flex flex-row gap-12'>
        <div className={`${tab=="direct"?'text-blue-950':'text-gray-500'} font-semibold cursor-pointer flex flex-col`} onClick={()=>{setTab('direct')}}>
          Direct
          {
            tab=='direct'?(<hr className="horizontal bg-blue-950 h-[3px] mt-1 " />):''
          }

        </div>
        <div className={`${tab=="overall"?'text-blue-950':'text-gray-500'}  font-semibold cursor-pointer flex flex-col`} onClick={()=>{setTab('overall')}}>
          Overall
          {
            tab=='overall'?(<hr className="horizontal bg-blue-950 h-[3px] mt-1" />):''
          }
        </div>
        

      </div>
      <div><hr className="h-[2px] mt-[-20px] w-full bg-gray-200"/></div>
      <div className="flex flex-col gap-2">
      {tab=="direct" && (notific.map((data) => (
        <div
          className="duration-[500ms]  text-sm  p-1 cursor-pointer  rounded-md sm:text-md "
          key={data.id}
          onClick={() => toggleMessage(data.id)}
        >
            <div className="flex flex-row justify-between">
                <div className="font-bold text-blue-950">{data.title}</div>
                <div className="font-semibold text-gray-700">{data.time}</div>
                </div>
           <div>{data.note}</div>
           <div><hr className="mt-4 bg-gray-800"/></div>
        </div>
      )))}
      {tab=="overall" && (notific.map((data) => (
        <div
          className="duration-[500ms]  text-sm   p-1 cursor-pointer  rounded-md sm:text-md "
          key={data.id}
          onClick={() => toggleMessage(data.id)}
        >
            <div className="flex flex-row justify-between">
                <div className="font-bold text-blue-950">{data.title}</div>
                <div className="font-semibold text-gray-700">{data.time}</div>
                </div>
           <div>{data.note}</div>
           <div><hr className="mt-4 bg-gray-800"/></div>
        </div>
      )))}

      </div>
        </div>
    </div>
  )
}

export default Notifications