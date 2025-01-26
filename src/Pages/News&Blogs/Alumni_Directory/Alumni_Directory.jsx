import React from 'react'
import AlumniCard from '../AlumniCard'
const Alumni_Directory = () => {
    const Alumni_data=
    [
        {
          "name": "Aarav Patel",
          "department": "CSE",
          "domain": "Software Development",
          "year_of_graduation": 2019,
          "profile_pic": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          "name": "Meera Sharma",
          "department": "ECE",
          "domain": "Embedded Systems",
          "year_of_graduation": 2018,
          "profile_pic": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
          "name": "Ravi Kumar",
          "department": "Mechanical",
          "domain": "Robotics",
          "year_of_graduation": 2020,
          "profile_pic": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
          "name": "Priya Singh",
          "department": "Civil",
          "domain": "Structural Engineering",
          "year_of_graduation": 2017,
          "profile_pic": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
          "name": "Kiran Desai",
          "department": "CSE",
          "domain": "Cybersecurity",
          "year_of_graduation": 2021,
          "profile_pic": "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
          "name": "Anjali Verma",
          "department": "EEE",
          "domain": "Renewable Energy Systems",
          "year_of_graduation": 2020,
          "profile_pic": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
          "name": "Rohit Agarwal",
          "department": "Chemical",
          "domain": "Process Engineering",
          "year_of_graduation": 2016,
          "profile_pic": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
          "name": "Neha Gupta",
          "department": "MME",
          "domain": "Material Science",
          "year_of_graduation": 2022,
          "profile_pic": "https://randomuser.me/api/portraits/women/8.jpg"
        },
        {
          "name": "Vikram Rao",
          "department": "CSE",
          "domain": "Data Science",
          "year_of_graduation": 2014,
          "profile_pic": "https://randomuser.me/api/portraits/men/9.jpg"
        },
        {
          "name": "Sneha Kapoor",
          "department": "ECE",
          "domain": "Telecommunication",
          "year_of_graduation": 2019,
          "profile_pic": "https://randomuser.me/api/portraits/women/10.jpg"
        },
        {
          "name": "Arjun Nair",
          "department": "Mechanical",
          "domain": "Automotive Engineering",
          "year_of_graduation": 2023,
          "profile_pic": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
          "name": "Divya Mishra",
          "department": "Civil",
          "domain": "Urban Planning",
          "year_of_graduation": 2015,
          "profile_pic": "https://randomuser.me/api/portraits/women/12.jpg"
        },
        {
          "name": "Siddharth Jain",
          "department": "EEE",
          "domain": "Power Systems",
          "year_of_graduation": 2018,
          "profile_pic": "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
          "name": "Pooja Mehta",
          "department": "Chemical",
          "domain": "Environmental Engineering",
          "year_of_graduation": 2024,
          "profile_pic": "https://randomuser.me/api/portraits/women/14.jpg"
        },
        {
          "name": "Rahul Bose",
          "department": "MME",
          "domain": "Mining and Metallurgy",
          "year_of_graduation": 2020,
          "profile_pic": "https://randomuser.me/api/portraits/men/15.jpg"
        }
      ]
      
      
  return (
    <div className='h-[100vh] mt-[100px] p-[20px] flex gap-[20px]'>
        <div className='flex flex-col gap-2 w-[300px] border-[2px] h-[80vh] p-2'>
            <input type="text" className='border-[2px] h-[40px] outline-blue-500 rounded-lg' />
        <div className="year bg-[blue]  h-[40px] text-white font-semibold text-[30px] flex justify-center items-center rounded-md">
            Year of Graduation
        </div>
        <div className="year bg-[blue]  h-[40px] text-white font-semibold text-[30px] flex justify-center items-center rounded-md">
            Department
        </div>
        <div className="year bg-[blue]  h-[40px] text-white font-semibold text-[30px] flex justify-center items-center rounded-md">
            Domain
        </div>
        </div>
        { Alumni_data.map(item =>{
            <div className='flex gap-[30px] flex-wrap'>
                <AlumniCard data={item}/>
                </div>
        
        })
        }
    </div>
  )
}

export default Alumni_Directory