import React from 'react';
import './Goldtext.css';
const HomeHeroBelow=()=>{
    return(
    
     <div className="mt-[20px]">
    <div className="flex md:flex-row flex-col md:gap-[80px] gap-[40px] justify-center items-center">
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
            <div className="text-[25px] font-bold text-blue-950">Contrubutors</div>
            </div>
        
    </div>
     </div>
    );
}
export default HomeHeroBelow;