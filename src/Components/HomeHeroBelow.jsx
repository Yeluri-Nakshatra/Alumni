import React from 'react';
import './Goldtext.css';
const HomeHeroBelow=()=>{
    return(
    
     <div className="md:mt-[150px] lg:mt-[200px] mb-4">
    <div className="flex  flex-col  gap-[40px] justify-center items-center">
        <div className=" flex justify-center items-center flex-col gap-[5px] text-[25px] font-bold ">
            <div className="gold-shine text-[30px] font-bold">1000+</div>
            <div className="text-[25px] font-bold text-blue-950">startups</div>
            </div>

            <div className=" flex justify-center items-center flex-col gap-[5px] text-[25px] font-bold ">
            <div className="gold-shine text-[30px] font-bold">100000+</div>
            <div className="text-[25px] font-bold text-blue-950">Alumnis</div>
            </div>

            <div className=" flex justify-center items-center flex-col gap-[5px] text-[25px] font-bold ">
            <div className="gold-shine text-[30px] font-bold">3000+</div>
            <div className="text-[25px] font-bold text-blue-950">Contributors</div>
            </div>
        
    </div>
     </div>
    );
}
export default HomeHeroBelow;