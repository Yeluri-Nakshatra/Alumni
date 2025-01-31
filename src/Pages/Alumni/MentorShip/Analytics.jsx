import react from "react";
import { AiOutlineExclamation } from "react-icons/ai";
const Analytics = () => {
  return (
    <div>
      {/*tabs*/}

      <div className="flex md:flex-row flex-col justify-center gap-[10px] ml-[85px]">
        <div className="border border-[gray] bg-gray-300 h-[50px] w-[200px] text-[black] flex justify-center items-center">
          My Preferences
        </div>
        <div className="border border-[gray] bg-gray-300 h-[50px] w-[200px] text-[black] flex justify-center items-center">
          Mentorship Homepage
        </div>
      </div>

      {/*Top Analytics */}
      <div className="flex flex-col gap-[50px]">
        <div className="text-[black] font-semibold text-[25px] text-center mt-[30px]">
          Top Analytics
        </div>
        <div className="flex md:flex-row flex-col gap-[50px] justify-center items-center ">
          <div className="md:h-[270px] h-[300px] md:w-[350px] w-[340px] rounded-[5px]  shadow-lg shadow-gray-400 flex flex-col justify-center pl-[20px] gap-[10px]">
            <div className="text-[20px] font-bold text-[black]">
              Total mentors
            </div>
            <div className="text-[40px] font-semibold text-[black] ">40</div>

            <div className="text-[20px] font-bold text-[black] underline">
              +1 new mentors in last 30 days
            </div>
            <div className="flex flex-row gap-[10px] mt-[30px]">
              <div className="h-[30px] w-[150px] rounded-[5px] text-blue-950  bg-[white]  border border-blue-950 flex justify-center items-center">
                View all
              </div>
              <div className="h-[30px] w-[150px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
                Increase Mentors
              </div>
            </div>
          </div>
          {/*second box*/}
          <div className="md:h-[270px] h-[300px] md:w-[350px] w-[340px] rounded-[5px]  shadow-lg shadow-gray-400 flex flex-col justify-center pl-[20px] gap-[10px]">
            <div className="text-[20px] font-bold text-[black]">
              Total mentees
            </div>
            <div className="text-[40px] font-semibold text-[black] ">50</div>

            <div className="text-[20px] font-bold text-[black] underline">
              +1 new mentors in last 30 days
            </div>
            <div className="flex flex-row  gap-[10px] mt-[30px]">
              <div className="h-[30px] w-[150px] rounded-[5px] text-blue-950  bg-[white]  border border-blue-950 flex justify-center items-center">
                View all
              </div>
              <div className="h-[30px] w-[150px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
                Increase Mentors
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[black] font-semibold text-[25px] text-center ">
            Important actions
          </div>

          <div className="flex md:flex-row flex-col gap-[50px] justify-center items-center mt-[30px]">
            {/*first box*/}
            <div className="md:h-[200px] h-[300px] md:w-[500px] w-[340px] rounded-[5px]  shadow-lg shadow-gray-400 flex flex-col justify-center pl-[20px] gap-[15px]">
              <div className="flex flex-row gap-[6px] items-center">
                <div className="flex justify-center items-center bg-blue-950 rounded-[50%] h-[25px] w-[25px] md:mt-auto mt-[-25px]">
                  <AiOutlineExclamation className="text-[white] text-[25px]" />
                </div>
                <div className="text-[20px] font-bold text-[black]">
                  Very few important requests in recent time
                </div>
              </div>

              <div className="text-[16px] font-semibold text-[gray]  ">
                Promoting the mentorship platform regularly will encourage
                mentors to connect with mentors as and when needed
              </div>
              <div className="h-[30px] w-[200px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
                Promote Mentorship
              </div>
            </div>
            {/*second box*/}
            <div className="md:h-[200px] h-[300px] md:w-[500px] w-[340px] rounded-[5px]  shadow-lg shadow-gray-400 flex flex-col justify-center pl-[20px] gap-[15px]">
              <div className="flex flex-row gap-[6px] items-center">
                <div className="flex justify-center items-center bg-blue-950 rounded-[50%] h-[25px] w-[25px]  md:mt-auto mt-[-25px]">
                  <AiOutlineExclamation className="text-[white] text-[25px]" />
                </div>
                <div className="text-[20px] font-bold text-[black]">
                  Very few important requests in recent time
                </div>
              </div>
              <div className="text-[16px] font-semibold text-[gray] ">
                Promoting the mentorship platform regularly will encourage
                mentors to connect with mentors as and when needed
              </div>
              <div className="h-[30px] w-[200px] rounded-[5px] text-[white] bg-blue-950 flex justify-center items-center">
                Promote Mentorship
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
