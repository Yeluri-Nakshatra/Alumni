import React from 'react'
import SSIT from '../assets/SSIT.avif';
const Business = () => {
  return (
   <>
   <div className="flex flex-col bg-gray-100 mt-[100px] w-full overflex-x-hidden">
   <div className="flex flex-col p-[10px] lg:p-[60px] md:p-[20px]  gap-[10px] w-full bg-gray-100">
    <div className="text-3xl w-full flex bg-gray-400 h-[70px] rounded-md text-center justify-center items-center font-semibold">Business Connect</div>
    <div className="flex text-lg font-bold">Business Listening</div>
    <div className="flex flex-row gap-[6px] ">
        <div><input type="text" placeholder="Search Business"className="border border-2 rounded-md"></input></div>
        <div><button className="p-[3px] bg-blue-950 rounded-md text-white">Search</button></div>

    </div>
    <div className="flex flex-col md:flex-row gap-[40px] w-full">
        <div className="flex flex-row border border-2 p-[20px] lg:w-[40%] md:w-[45%] w-full rounded-md bg-white">
        <div className="w-full md:w-[40%] flex justify-center flex flex-col">
            <div><img src={SSIT} className="w-[170px] h-[130px] mt-[10px] md:mt-[0px]"></img></div>
            <div className="font-semibold ml-[41px] lg:ml-[70px]">SSIT</div>
            <div className="font-semibold ml-[33px] lg:ml-[40px]">Private limited</div>

        </div>
        <div className="flex flex-col w-[60%] gap-[17px]">
            <div className="flex flex-row">
                <p className="text-md font-semibold">Industry:</p>
                <p className="text-gray-500 text-md">Technology</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Description:</p>
                <p className="text-gray-500 text-md w-[250px]">A startup focused on AI-driven solutions</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Website:</p>
                <p className="text-gray-500 text-md">www.ssit.ac.in</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Contact:</p>
                <p className="text-gray-500 text-md">ssit@gmial.com</p>
            </div>
        </div>
    </div>
    <div className="flex flex-row  rounded-md border border-2 md:w-[45%] lg:w-[40%] w-full bg-white p-[20px]">
        <div className="w-full md:w-[40%] flex flex-col">
            <div><img src={SSIT} className="w-[170px] h-[130px] mt-[10px] md:mt-[0px]"></img></div>
            <div className="font-semibold ml-[41px] lg:ml-[70px]">SSIT</div>
            <div className="font-semibold ml-[33px] lg:ml-[40px]">Private limited</div>


        </div>
        <div className="flex flex-col w-[60%] gap-[17px]">
            <div className="flex flex-row">
                <p className="text-md font-semibold">Industry:</p>
                <p className="text-gray-500 text-md">Technology</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Description:</p>
                <p className="text-gray-500 text-md w-[250px]">A startup focused on AI-driven solutions</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Website:</p>
                <p className="text-gray-500 text-md">www.ssit.ac.in</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Contact:</p>
                <p className="text-gray-500 text-md">ssit@gmial.com</p>
            </div>
        </div>
    </div>
        

      

    </div>

   </div>
   <div className="flex flex-col p-[10px] lg:pl-[60px] md:mb-[60px] md:mr-[60px] md:mt-[10px] gap-[10px] w-full bg-gray-100 p-[20px]">
    <div className="text-lg font-bold w-[200px] flex">Job promotions</div>
   
    <div className="flex flex-row gap-[6px] ">
        <div><input type="text" placeholder="Search Job"className="border border-2 rounded-md h-[30px]"></input></div>
        <div><button className="p-[3px] bg-blue-950 rounded-md text-white">Search</button></div>

    </div>
    <div className="flex flex-col md:flex-row gap-[40px] w-full">
        <div className="flex flex-row border border-2 p-[20px] md:w-[45%] lg:w-[40%] w-full rounded-md bg-white">
        <div className="w-full md:w-[40%] flex justify-center flex flex-col">
            <div><img src={SSIT} className="w-[170px] h-[130px] mt-[10px] md:mt-[0px]"></img></div>
            <div className="font-semibold  ml-[41px] lg:ml-[70px]">SSIT</div>
            <div className="font-semibold ml-[33px] lg:ml-[40px]">Private limited</div>

        </div>
        <div className="flex flex-col w-[60%] gap-[17px]">
            <div className="flex flex-row">
                <p className="text-md font-semibold">Industry:</p>
                <p className="text-gray-500 text-md">Technology</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Description:</p>
                <p className="text-gray-500 text-md w-[250px]">A startup focused on AI-driven solutions</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Website:</p>
                <p className="text-gray-500 text-md">www.ssit.ac.in</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Contact:</p>
                <p className="text-gray-500 text-md">ssit@gmial.com</p>
            </div>
        </div>
    </div>
    <div className="flex flex-row rounded-md border border-2 md:w-[45%] lg:w-[40%] w-full bg-white p-[20px]">
        <div className="w-full md:w-[40%] flex flex-col">
            <div><img src={SSIT} className="w-[170px] h-[130px] mt-[10px] md:mt-[10px]"></img></div>
            <div className="font-semibold ml-[41px] lg:ml-[70px]">SSIT</div>
            <div className="font-semibold ml-[33px] lg:ml-[40px] ">Private limited</div>


        </div>
        <div className="flex flex-col w-[60%] gap-[17px]">
            <div className="flex flex-row">
                <p className="text-md font-semibold">Industry:</p>
                <p className="text-gray-500 text-md">Technology</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Description:</p>
                <p className="text-gray-500 text-md w-[250px]">A startup focused on AI-driven solutions</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Website:</p>
                <p className="text-gray-500 text-md">www.ssit.ac.in</p>
            </div>
            <div className="flex flex-row">
                <p className="text-md font-semibold">Contact:</p>
                <p className="text-gray-500 text-md">ssit@gmial.com</p>
            </div>
        </div>
    </div>
        

      

    </div>

   </div>

   </div>
   </>
  )
}

export default Business