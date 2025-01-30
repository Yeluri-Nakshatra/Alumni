import react from 'react';
import { LuDownload } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import person from "../../../assets/aboutteam2.jpg";
const Mentees=()=>{



    const Mentees=[
        
        {photo:person,name:"Muthuraja Balasubramani",position:"Admin"},
        {photo:person,name:"Muthuraja Balasubramani",position:"Admin"},
        {photo:person,name:"Muthuraja Balasubramani",position:"Admin"},
        {photo:person,name:"Muthuraja Balasubramani",position:"Admin"},
        {photo:person,name:"Muthuraja Balasubramani",position:"Admin"},
        {photo:person,name:"Muthuraja Balasubramani",position:"Admin"},

    ]
    return(
        <div>




              <div className="flex md:flex-row flex-col gap-[20px] justify-between">
               <div className="flex md:flex-row flex-col justify-center gap-[10px] ml-[85px]">
                <div className="border border-[gray] bg-gray-300 h-[50px] w-[200px] text-[black] flex justify-center items-center">
                    My Preferences
                </div>
                <div className="border border-[gray] bg-gray-300 h-[50px] w-[200px] text-[black] flex justify-center items-center">
                    Mentorship Homepage
                </div>
            </div>



           <div className="flex flex-col gap-[10px] md:mr-[80px] ml-[30px]">
            <div className="text-[20px] font-bold text-[black]">Mentees List</div>
            <div className=" flex justify-center items-center border-black border text-[black] font-bold text-[15px] h-[40px] w-[300px]">Add mentees</div>
            <div className=" flex justify-center items-center bg-blue-950  text-[white] flex-row gap-[10px] font-bold text-[15px] h-[40px] w-[300px]">
            <LuDownload className="text-[20px]"/>
             <div>Download</div>  </div>  
         <div className="flex flex-row gap-[20px] ">
        <div className="relative ">
          <input placeholder="Search a Workshop" className=" px-[5px] text-[gray] text-[15px] w-[200px]  font-bold border border-black h-[40px]"/>
          <div><IoSearchOutline  className="text-[white] h-[40px] bg-blue-950 w-[27px] text-[20px] absolute right-0 top-0" /></div>
        </div>
        <div className="h-[40px] w-[80px] border border-black flex flex-row gap-[5px] justify-center items-center">
          <div><CiFilter className="text-[black] font-bold text-[20px] font-bold" /></div>
          <div className="text-[gray] font-bold text-[17px]">Filters</div>
        </div>
        </div> 
           </div>
           </div>

             


          

          <div className="flex flex-row flex-wrap  justify-center gap-x-[50px] gap-y-[30px] mt-[30px] ">
        {Mentees.map((item, index) => (
          <div key={index} className="h-[350px] w-[300px]  rounded-[5px] shadow-lg shadow-gray-400 flex flex-col justify-center items-center gap-[10px]">
            
              <img src={item.photo} className="h-[100px] w-[100px] rounded-[50%]" />
              <div className="text-[20px] font-bold text-[black]">{item.name}</div>
              <div className="text-[15px] font-bold text-[gray]">{item.position}</div>
              <div className="text-[12px] font-bold text-[black]">Seeking for help</div>
              <div>
                <div className="text-[black] font-semibold text-[black] text-center">Need help with my resume review</div>
                <div  className="text-[black] font-semibold text-[black] text-center">Need help with HR interview</div>
              </div>
              <div className="h-[30px] w-[100px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
                View Profile
              </div>
            
          </div>
        ))}
      </div>

          






            </div>
    );
}
export default Mentees;