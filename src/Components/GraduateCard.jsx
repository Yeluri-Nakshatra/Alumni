import React from 'react'
import proud from '/assets/proud.png'
import '../Pages/Home/ProudGrad.css';

const GraduateCard = () => {
  return (
    <div className='flex justify-center items-center flex-col p-[30px] shadow-lg border-[1px] ml-[10px] w-full md:w-[400px] md:h-[500px]'>
        <img src={proud} className='h-[50px] w-[50px] rounded-full image'/>
        <h3 className='text-[24px] font-semibold'>Sribabu</h3>
        <p>Computer science and engineering</p>
        <p className='text-center text-[15px] p-[12px]'>"University X provided me with the skills and opportunities to excel in my career."</p>
    </div>
  )
}

export default GraduateCard