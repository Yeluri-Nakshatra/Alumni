import React from 'react'

const GetInTouch = () => {
  return (
    <div>
        <div className='flex justify-center mt-20 items-center bg-gray-200'>
            <div className='flex flex-col gap-4 p-2 md:p-4 justify-center items-center w-[95%] md:w-[700px] bg-white'>
                <div className='text-2xl font-bold text-blue-950'>Get In Touch</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div className='w-[95%] md:w-[80%] border rounded-md p-4'>

                    <form className='flex flex-col gap-4 p-2'>
                        <input type="text" placeholder='Name' className='py-2 px-2 placeholder:text-black w-full bg-blue-950 bg-opacity-10 outline-none focus:border rounded-md focus:border-blue-950'/>
                        <input type="email" placeholder='Email' className='py-2 px-2 placeholder:text-black w-full bg-blue-950 bg-opacity-10 outline-none focus:border rounded-md focus:border-blue-950'/>
                        <input type="number" placeholder='phone' className='py-2 px-2 placeholder:text-black w-full bg-blue-950 bg-opacity-10 outline-none focus:border rounded-md focus:border-blue-950'/>
                        <textarea rows='6' placeholder='Description' className='py-2 px-2 placeholder:text-black w-full bg-blue-950 bg-opacity-10 outline-none focus:border rounded-md focus:border-blue-950'></textarea>
                    </form>

                </div>
                <div>
                    <button className='rounded-md bg-blue-950 text-white font-semibold py-1 px-4'>Submit</button>
                </div>


            </div>
            
        </div>
    </div>
  )
}

export default GetInTouch