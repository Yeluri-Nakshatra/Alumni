import React from "react";
import about1 from "../../assets/about1.png";
import aboutteam from "../../assets/aboutteam.jpeg";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
const About = () => {
  const data = [
    { name: "hi", position: "web developer" },
    { name: "hi", position: "web developer" },
    { name: "hi", position: "web developer" },
    { name: "hi", position: "web developer" },
    { name: "hi", position: "web developer" },
    { name: "hi", position: "web developer" },
  ];
  const partners = [
    { photo: partner1 },
    { photo: partner2 },
    { photo: partner3 },
    { photo: partner2 },
    { photo: partner1 },
    { photo: partner3 },
    { photo: partner1 },
    { photo: partner2 },
  ];
  return (
    <div className="mt-[130px]">
      {/*main about*/}
      <div className="flex md:flex-row gap-[50px] justify-center flex-col ">
        <div className="md:h-[500px] md:w-[450px] flex flex-col gap-[40px]">
          <div className="text-[40px] text-[black] font-bold text-center">
            WELCOME TO <br />
            ALUMINI ASSOCIATION
          </div>
          <div className="text-[15px] text-[black] text-center font-semibold">
            We are a group of alumni who care deeply about our alma mater and
            the role it plays in our lives. The society is committed to
            fostering communication, friendship, and cooperation among its
            members, as well as promoting the development of the university. We
            hope that through our efforts, the university will become better and
            better, and the alumni will become more and more united.
          </div>
          <div className="flex flex-row gap-[10px] justify-center">
            <div className=" text-[20px] h-[40px] w-[100px] text-[white] bg-[#002140] rounded-[10px] flex items-center justify-center">
              Donate
            </div>
            <div className=" text-[20px] h-[40px] w-[100px] text-[#002140] bg-[#E5EDF5] rounded-[10px] flex items-center justify-center">
              Sign in
            </div>
          </div>
        </div>
        <div>
          <img src={about1} className="md:w-[600px]" />
        </div>
      </div>

      {/*form about*/}

      <div className="flex md:flex-row  flex-col md:gap-[70px]  gap-[40px] flex justify-center items-center flex-col mt-[30px]">
        <div className="order-2 md:order-1">
          <div className="h-[50px] md:w-[500px] w-[300px] text-[20px] font-bold text-[black] shadow-lg px-[20px] flex items-center ">
            Our mission
          </div>
          <div className="h-[50px] md:w-[500px] w-[300px] text-[20px] font-bold text-[black] shadow-lg px-[20px] flex items-center ">
            Our mission
          </div>
          <div className="h-[50px] md:w-[500px] w-[300px] text-[20px] font-bold text-[black] shadow-lg px-[20px] flex items-center ">
            Our mission
          </div>
        </div>
        <div className="text-[black] text-[60px] font-bold order-1 md:order-2">
          About us
        </div>
      </div>
      {/*team*/}
      <div className="bg-[#E3E3E3] flex flex-col gap-[30px] mt-[30px]">
        <div className="text-[40px] text-center font-bold mt-[30px]">
          OUR TEAM
        </div>
        <div className="flex flex-wrap justify-center items-center gap-[50px] m-[30px]">
          {data.map((item, index) => (
            <div className="relative">
              <img
                src={aboutteam}
                className="h-[350px] w-[300px] rounded-[5px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#F2F2F2] h-[90px] flex flex-col justify-center gap-[5px] items-center text-[black]">
                <div>{item.name}</div>
                <div>{item.position}</div>
                <div className="flex flex-row gap-[20px]">
                  <div>
                    <FaGithub />
                  </div>
                  <div>
                    <FaLinkedinIn />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*partners */}

      <div className="bg-[white] flex flex-col gap-[20px] mb-6 flex justify-center items-center ">
        <div>
          <p className="text-[30px] font-bold text-black mt-[50px]">
            Our Proud<span className="text-[blue]"> Partners</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-[100px] flex justify-center items-center md:mx-[100px]">
          {partners.map((item, index) => (
            <div>
              <img src={item.photo} className="h-[90px] w-[90px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;
