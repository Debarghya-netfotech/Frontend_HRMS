// src/components/JobCard.js
import React, { useState } from 'react';
import CandidateDetails from './CandidateDetails';
import CandidateProgress from './CandidateProgress';

const JobCard = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg mb-4">
      <div className="flex justify-between p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.clientName}</p>
          <p className="text-xs text-gray-400">{job.deadline}</p>
        </div>
        <div className={`flex items-center text-sm rounded-full py-1 px-3 ${job.status === 'Closed' ? 'bg-red-100 text-red-600' : job.status === 'Rework: Open' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'}`}>
          {job.status}
        </div>
      </div>
      {isOpen && (
        <div className="p-4 border-t">
          <CandidateDetails candidate={job.candidate} />
          <CandidateProgress progress={job.progress} />
          <div className="flex justify-end space-x-2 mt-4">
            <button className="bg-teal-600 text-white py-1 px-3 rounded-lg">Submit Candidates</button>
            <button className="bg-gray-500 text-white py-1 px-3 rounded-lg">Add Candidate</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCard;
