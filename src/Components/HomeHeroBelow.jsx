import React from 'react';
import './Goldtext.css';
const HomeHeroBelow=()=>{
    return(
    
     <div className="mt-[20px]">
    <div className="flex md:flex-row flex-col md:gap-[80px] gap-[40px] justify-center items-center">
        <div className="w-[200px] h-[50px] border-2 flex justify-center items-center rounded-[8px] text-[25px] font-bold gold-shine">Startups</div>
        <div className="w-[200px] h-[50px] border-2 flex justify-center items-center rounded-[8px] text-[25px] font-bold gold-shine">Aluminis</div>
        <div className="w-[200px] h-[50px] border-2 flex justify-center items-center rounded-[8px] text-[25px] font-bold gold-shine">Contributions</div>
    </div>
     </div>
    );
}
export default HomeHeroBelow;