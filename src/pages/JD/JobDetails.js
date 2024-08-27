import React from 'react';

function JobDetails({ job }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-sm text-gray-500">{job.company}</p>
      <div className="flex justify-between mt-4">
        <div>
          <h4 className="text-md font-semibold">Job Description</h4>
          <p className="text-sm text-gray-500">Location: {job.location}</p>
          <p className="text-sm text-gray-500">Industry: {job.industry}</p>
          <p className="text-sm text-gray-500">Experience: {job.experience}</p>
          <p className="text-sm text-gray-500">Salary: {job.salary}</p>
          <p className="text-sm text-gray-500">Type: {job.type}</p>
          <p className="text-sm text-gray-500">Interview Rounds: 04</p>
          <p className="text-sm text-gray-500">Notice Period: 01 month</p>
        </div>
        <div>
          <h4 className="text-md font-semibold">Submission Details</h4>
          <p className="text-sm text-gray-500">On Priority</p>
          <p className="text-sm text-gray-500">No. of Submissions Required: 02</p>
          <p className="text-sm text-gray-500">Uploaded on: 15th July '24, 10:30am</p>
          <p className="text-sm text-gray-500">Delivery Required: 30th July '24</p>
          <p className="text-sm text-gray-500">Replacement Period: 05 days</p>
        </div>
      </div>
      <h4 className="text-md font-semibold mt-4">Skills Required</h4>
      <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet, consectetur adipiscing elit...</p>
      <h4 className="text-md font-semibold mt-4">Additional Comments</h4>
      <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
  );
}

export default JobDetails;
