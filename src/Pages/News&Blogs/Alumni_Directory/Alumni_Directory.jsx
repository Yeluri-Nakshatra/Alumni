import React from "react";
import AlumniCard from "../AlumniCard";
import { useState } from "react";
import { div } from "framer-motion/client";
const Alumni_Directory = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [Yog, setYog] = useState(false);
  const [dep, setdep] = useState(false);
  const [domain, setDomain] = useState(false);
  const handleYog = () => {
    if (Yog) {
      setYog(false);
    } else {
      setYog(true);
    }
  };
  const handleDep = () => {
    if (dep) {
      setdep(false);
    } else {
      setdep(true);
    }
  };
  const handleDomain = () => {
    if (domain) {
      setDomain(false);
    } else {
      setDomain(true);
    }
  };
   const domains = [
    "Artificial Intelligence",
    "Cybersecurity",
    "Data Science",
    "Software Development",
    "Cloud Computing",
    "Embedded Systems",
    "VLSI Design",
    "Signal Processing",
    "Telecommunication",
    "IoT (Internet of Things)",
    "Automobile Engineering",
    "Thermal Engineering",
    "Robotics",
    "Manufacturing Technology",
    "Design and Simulation",
    "Structural Engineering",
    "Environmental Engineering",
    "Construction Management",
    "Geotechnical Engineering",
    "Transportation Engineering",
    "Power Systems",
    "Renewable Energy",
    "Control Systems",
    "Electrical Machines",
    "Energy Systems",
    "Medical Imaging",
    "Biomaterials",
    "Clinical Engineering",
    "Rehabilitation Engineering",
    "Bioinformatics",
    "Process Engineering",
    "Petrochemical Engineering",
    "Biochemical Engineering",
    "Polymer Technology",
    "Catalysis",
    "Aerodynamics",
    "Spacecraft Design",
    "Avionics",
    "Propulsion Systems",
    "Flight Mechanics"
];

  const department = [
    "CSE",
    "ECE",
    "EEE",
    "MECHANICAL",
    "CIVIL",
    "CHEMICAL",
    "METALLURGY",
  ];
  const year_of_graduation = [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];
  const Alumni_data = [
    {
      name: "Aarav Patel",
      department: "CSE",
      domain: "Software Development",
      year_of_graduation: 2019,
      profile_pic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Meera Sharma",
      department: "ECE",
      domain: "Embedded Systems",
      year_of_graduation: 2018,
      profile_pic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Ravi Kumar",
      department: "Mechanical",
      domain: "Robotics",
      year_of_graduation: 2020,
      profile_pic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Priya Singh",
      department: "Civil",
      domain: "Structural Engineering",
      year_of_graduation: 2017,
      profile_pic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Kiran Desai",
      department: "CSE",
      domain: "Cybersecurity",
      year_of_graduation: 2021,
      profile_pic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Anjali Verma",
      department: "EEE",
      domain: "Renewable Energy Systems",
      year_of_graduation: 2020,
      profile_pic: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: "Rohit Agarwal",
      department: "Chemical",
      domain: "Process Engineering",
      year_of_graduation: 2016,
      profile_pic: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Neha Gupta",
      department: "MME",
      domain: "Material Science",
      year_of_graduation: 2022,
      profile_pic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      name: "Vikram Rao",
      department: "CSE",
      domain: "Data Science",
      year_of_graduation: 2014,
      profile_pic: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      name: "Sneha Kapoor",
      department: "ECE",
      domain: "Telecommunication",
      year_of_graduation: 2019,
      profile_pic: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "Arjun Nair",
      department: "Mechanical",
      domain: "Automotive Engineering",
      year_of_graduation: 2023,
      profile_pic: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Divya Mishra",
      department: "Civil",
      domain: "Urban Planning",
      year_of_graduation: 2015,
      profile_pic: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Siddharth Jain",
      department: "EEE",
      domain: "Power Systems",
      year_of_graduation: 2018,
      profile_pic: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      name: "Pooja Mehta",
      department: "Chemical",
      domain: "Environmental Engineering",
      year_of_graduation: 2024,
      profile_pic: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      name: "Rahul Bose",
      department: "MME",
      domain: "Mining and Metallurgy",
      year_of_graduation: 2020,
      profile_pic: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      name: "Aarav Patel",
      department: "CSE",
      domain: "Software Development",
      year_of_graduation: 2019,
      profile_pic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Meera Sharma",
      department: "ECE",
      domain: "Embedded Systems",
      year_of_graduation: 2018,
      profile_pic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Ravi Kumar",
      department: "Mechanical",
      domain: "Robotics",
      year_of_graduation: 2020,
      profile_pic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Priya Singh",
      department: "Civil",
      domain: "Structural Engineering",
      year_of_graduation: 2017,
      profile_pic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Kiran Desai",
      department: "CSE",
      domain: "Cybersecurity",
      year_of_graduation: 2021,
      profile_pic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Anjali Verma",
      department: "EEE",
      domain: "Renewable Energy Systems",
      year_of_graduation: 2020,
      profile_pic: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: "Rohit Agarwal",
      department: "Chemical",
      domain: "Process Engineering",
      year_of_graduation: 2016,
      profile_pic: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Neha Gupta",
      department: "MME",
      domain: "Material Science",
      year_of_graduation: 2022,
      profile_pic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      name: "Vikram Rao",
      department: "CSE",
      domain: "Data Science",
      year_of_graduation: 2014,
      profile_pic: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      name: "Sneha Kapoor",
      department: "ECE",
      domain: "Telecommunication",
      year_of_graduation: 2019,
      profile_pic: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "Arjun Nair",
      department: "Mechanical",
      domain: "Automotive Engineering",
      year_of_graduation: 2023,
      profile_pic: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Divya Mishra",
      department: "Civil",
      domain: "Urban Planning",
      year_of_graduation: 2015,
      profile_pic: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Siddharth Jain",
      department: "EEE",
      domain: "Power Systems",
      year_of_graduation: 2018,
      profile_pic: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      name: "Pooja Mehta",
      department: "Chemical",
      domain: "Environmental Engineering",
      year_of_graduation: 2024,
      profile_pic: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      name: "Rahul Bose",
      department: "MME",
      domain: "Mining and Metallurgy",
      year_of_graduation: 2020,
      profile_pic: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  ];
  const handleCheckboxChange = (setter, value, selectedArray) => {
    if (selectedArray.includes(value)) {
      setter(selectedArray.filter((item) => item !== value));
    } else {
      setter([...selectedArray, value]);
    }
  };

  const filteredAlumni = Alumni_data.filter((alumni) => {
    const yearMatch = selectedYears.length
      ? selectedYears.includes(alumni.year_of_graduation.toString())
      : true;

    const departmentMatch = selectedDepartments.length
      ? selectedDepartments.includes(alumni.department)
      : true;

    const domainMatch = selectedDomains.length
      ? selectedDomains.includes(alumni.domain)
      : true;

    return yearMatch && departmentMatch && domainMatch;
  });

  return (
    <div className=" h-[100vh] bg-white mt-[100px] p-[20px] flex gap-[40px] relative">
     
      <div className="md:flex hidden md:flex-col gap-4 w-1/5 h-[100vh] p-4 mb-[40px] fixed bg-gray-100 shadow-md rounded-lg overflow-y-auto no-scrollbar ">
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-gray-300 h-[40px] outline-blue-500 rounded-lg px-2"
        />
        <div
          className="year bg-gray-500 h-[40px] text-white font-semibold text-[16px] flex   items-center px-4 rounded-md cursor-pointer"
          onClick={handleYog}
        >
          <div>Year of Graduation</div>
        </div>
        {Yog ? (
          <div className="mb-[30px] overflow-y-auto no-scrollbar">
          {year_of_graduation.map((year) => (
             <div className="flex gap-[5px]">
            <label key={year}>
              <input
                type="checkbox"
                value={year}
                onChange={() =>
                  handleCheckboxChange(setSelectedYears, year, selectedYears)
                }
                className="mr-[10px]"
              />
              {year}
            </label>
            </div>
          ))}
          </div>
        ):""}
        <div
          className="year bg-gray-500 h-[40px] text-white font-semibold text-[16px] flex items-center px-4 rounded-md cursor-pointer"
          onClick={handleDep}
        >
          Department
        </div>
        {dep ? (
          <div>
            <ul>
              {department.map((dept, index) => (
                <div className="flex gap-[5px]">
                <label key={dept} >
                <input
                  type="checkbox"
                  value={dept}
                  onChange={() =>
                    handleCheckboxChange(setSelectedDepartments, dept, selectedDepartments)
                  }
                  className="mr-[10px]"
                />
                {dept}
              </label>
              </div>
              ))}
            </ul>
          </div>
        ):""}
        <div
          className="year bg-gray-500 h-[40px] text-white font-semibold text-[16px] flex items-center px-4 rounded-md cursor-pointer"
          onClick={handleDomain}
        >
          Domain
        </div>
        {domain ? (
          <div className="mb-[30px] overflow-y-auto no-scrollbar">           
            {domains.map((domain, index) => (
               <div className="flex gap-[5px]">
               <label key={domain}>
               <input
                 type="checkbox"
                 value={domain}
                 onChange={() =>
                   handleCheckboxChange(setSelectedDomains, domain, selectedDomains)
                 }
                 className="mr-[10px]"
               />
               {domain}
             </label>
             </div>
              ))}
           
          </div>
        ):""}
      </div>

      <div className="lg:ml-[20%] flex flex-wrap  gap-6 overflow-y-auto md:p-4 no-scrollbar place-content-start md:ml-[10%] ">
      {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alumni) => (
            <AlumniCard name={alumni.name} alumni={alumni}
            image={alumni.profile_pic}
            department={alumni.department}
            domain={alumni.domain}
            yog={alumni.year_of_graduation}/>
          ))
        ) : (
          <p>No alumni match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Alumni_Directory;
