import React from 'react';

function JobCard({ job }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <p className="text-sm text-gray-500">{job.company}</p>
        <p className="text-sm text-gray-500">Location: {job.location}</p>
        <p className="text-sm text-gray-500">Industry: {job.industry}</p>
        <p className="text-sm text-gray-500">Experience: {job.experience}</p>
        <p className="text-sm text-gray-500">Type: {job.type}</p>
      </div>
      <div className="text-right">
        <p className={`text-sm font-semibold ${job.status === 'Open' ? 'text-green-500' : job.status === 'Closed' ? 'text-red-500' : 'text-yellow-500'}`}>{job.status}</p>
        <p className="text-sm text-gray-500">Salary: {job.salary}</p>
      </div>
    </div>
  );
}

export default JobCard;
