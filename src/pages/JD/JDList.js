import React from 'react';
import JobCard from './JobCard';
import JobDetails from './JobDetails';

function JDList(){
    const jobs = [
        {
          id: '12345678',
          title: 'Graphic Designer',
          company: 'Nettech Solutions',
          location: 'Kharadi, Pune',
          industry: 'Design',
          experience: '02 Years',
          salary: '1600,00/- P.a',
          type: 'Full time, Hybrid',
          status: 'Open',
        },
        // Add more job data here
      ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex">
      <div className="w-3/5">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border border-gray-300 rounded-md w-2/5"
          />
          <div className="flex gap-4">
            <select className="p-2 border border-gray-300 rounded-md">
              <option>Sort By: Latest</option>
              {/* Add more sorting options */}
            </select>
            <select className="p-2 border border-gray-300 rounded-md">
              <option>Filter By: Industry</option>
              {/* Add more filter options */}
            </select>
            <select className="p-2 border border-gray-300 rounded-md">
              <option>Salary</option>
              {/* Add more filter options */}
            </select>
            <select className="p-2 border border-gray-300 rounded-md">
              <option>Title</option>
              {/* Add more filter options */}
            </select>
            <select className="p-2 border border-gray-300 rounded-md">
              <option>Location</option>
              {/* Add more filter options */}
            </select>
            <button className="p-2 border border-gray-300 rounded-md">Reset Filter</button>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="w-2/5 ml-4">
        <JobDetails job={jobs[0]} />
      </div>
    </div>
  );
}

export default JDList
