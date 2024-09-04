import React from 'react';
import DeleteIcon from '../../Images/DeleteIcon.png';
import ExportIcon from '../../Images/ExportIcon.png'

const CandidateProgress = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Candidate Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(55,139,166,0.20)] text-gray-700 font-semibold">
            C01
          </div>
          <div className="ml-4">
            <div className="font-semibold text-lg">Samuel Matthew</div>
            <div className="text-sm text-gray-500">Candidate ID: 1254631</div>
          </div>
        </div>
        <div className="text-red-500 text-sm font-semibold">
          <span className="mr-1">&#x26A0;</span>Incomplete Form
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-grow items-center">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-500 font-semibold">
            01
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-500 font-semibold">
            02
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-500 font-semibold">
            03
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-500 font-semibold">
            04
          </div>
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-500 mb-4">
        <span className="flex-1 text-center">Delivery <br />Pending</span>
        <span className="flex-1 text-center">Interview <br />Pending</span>
        <span className="flex-1 text-center">Offer <br />Pending</span>
        <span className="flex-1 text-center">Payment <br />Pending</span>
      </div>

      {/* Employer Remarks */}
      <div className="mb-4">
        <label className="text-sm text-gray-500">Employer Remarks:</label>
        <input
          type="text"
          className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
          placeholder="."
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button className="p-2 rounded-full hover:bg-[rgba(55,139,166,0.20)] bg-[rgba(55,139,166,0.30)]">
          <img src={DeleteIcon} alt='Delete' />
        </button>
        <button className="p-2 rounded-full hover:bg-[rgba(55,139,166,0.20)] bg-[rgba(55,139,166,0.30)]">
          <img src={ExportIcon} alt='Export'/>
        </button>
      </div>
    </div>
  );
};

export default CandidateProgress;

