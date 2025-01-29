import React from 'react'

const StudentVolunteers = () => {
  const team = [
    { id: 1, Name: "Star", Id: "N210615", Year: "E-2", Branch: "CSE", Linked: "Nakshatra" },
    { id: 2, Name: "Bindu", Id: "N210323", Year: "E-2", Branch: "CSE", Linked: "BinduSree" },
    { id: 3, Name: "Sireesha", Id: "N210413", Year: "E-2", Branch: "CSE", Linked: "Sireesha" },
    { id: 4, Name: "Star", Id: "N210615", Year: "E-2", Branch: "CSE", Linked: "Nakshatra" },
    { id: 5, Name: "Bindu", Id: "N210323", Year: "E-2", Branch: "CSE", Linked: "BinduSree" }
  ];

  return (
    <div className='flex justify-center items-center w-full h-screen p-[20px]'>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border border-2">
          <thead>
            <tr className="border border-2">
              <th className="border border-2 py-2 px-4 text-left text-center">Name</th>
              <th className="border border-2 py-2 px-4 text-left text-center">Id</th>
              <th className="border border-2 py-2 px-4 text-left text-center">Year</th>
              <th className="border border-2 py-2 px-4 text-left text-center">Branch</th>
              <th className="border border-2 py-2 px-4 text-left text-center">LinkedIn Profile</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member) => (
              <tr key={member.id} className="text-sm md:text-base">
                <td className="border border-2 py-2 px-4 text-center">{member.Name}</td>
                <td className="border border-2 py-2 px-4 text-center">{member.Id}</td>
                <td className="border border-2 py-2 px-4 text-center">{member.Year}</td>
                <td className="border border-2 py-2 px-4 text-center">{member.Branch}</td>
                <td className="border border-2 py-2 px-4 text-center">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    {member.Linked}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentVolunteers;
