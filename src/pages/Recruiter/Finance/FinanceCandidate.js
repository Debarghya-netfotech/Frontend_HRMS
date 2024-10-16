import React, { useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md"; // Imported but not used; remove if not needed
import { FaBriefcase } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
 
const FinanceCandidate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { candidate, selectedJDs } = location.state || {}; // Destructure candidate and selected JDs
 
  // Log candidate value to console
  useEffect(() => {
    if (candidate) {
      console.log('Candidate:', candidate);
    }
  }, [candidate]);
 
 
  const handleViewMore = () => {
    navigate('/CandidatesOne'); // Navigate to CandidatesOne page
  };
 
 
  return (
    <div className='min-h-screen flex items-center bg-[#FBEFD0] justify-center p-4'>
      <div className='flex flex-col items-start p-4 lg:p-8 gap-4 rounded-lg bg-white w-full lg:w-[1200px] lg:h-[533px]'>
        <div className='flex p-2 lg:p-4 justify-between items-center self-stretch rounded-[8px] bg-[rgba(55,139,166,0.30)]'>
          <p className='text-[#4F4F4F] text-center font-jost text-base lg:text-[20px] font-medium leading-custom'>CANDIDATES</p>
          <button className='w-[24px] h-[24px] text-lg lg:text-xl'><IoMdClose /></button>
        </div>
 
        {/* Display candidate name */}
        {candidate && (
          <h2 className='flex p-2 lg:p-4 justify-center items-center rounded-[4px] bg-[#E8E8E8] text-sm lg:text-base'>
            Candidate Name: {candidate.Last_name} {/* Display candidate name */}
            Candidate id: {candidate._id}
          </h2>
         
        )}
 
        {/* Dynamically display JD ID */}
        {selectedJDs && selectedJDs.length > 0 && (
          <h1 className='flex p-2 lg:p-4 justify-center items-center rounded-[4px] bg-[#E8E8E8] text-sm lg:text-base'>
            JD: ID {selectedJDs[0]._id.slice(-4)} {/* Display first JD ID */}
          </h1>
        )}
 
        <div className="w-full h-px bg-[#848484]"></div>
 
        <div className='rounded-lg border border-teal-500 bg-white flex flex-col gap-3 p-4 lg:p-6 self-stretch'>
          <div className='w-full h-px bg-black my-4 lg:my-6'></div>
 
          {/* Dynamically display job details */}
          {selectedJDs && selectedJDs.length > 0 ? (
            selectedJDs.map((jd, index) => (
              <div key={index} className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
                <div className='flex flex-row items-center text-sm lg:text-base'>
                  <FaBriefcase className='w-5 h-5 text-[#378BA6]' />
                  <h1 className='text-gray-600 font-normal ml-2'>Job Title:</h1>
                  <h1 className='text-gray-600 font-normal'>{jd.job_title}</h1>
                </div>
                <div className='flex flex-row items-center text-sm lg:text-base'>
                  <FaLocationDot className='w-5 h-5 text-[#378BA6]' />
                  <h1 className='text-gray-600 font-normal ml-2'>Location:</h1>
                  <h1 className='text-gray-600 font-normal'>{jd.location}</h1>
                </div>
                <div className='flex flex-row items-center text-sm lg:text-base'>
                  <RiMoneyRupeeCircleFill className='w-5 h-5 text-[#378BA6]' />
                  <h1 className='text-gray-600 font-normal ml-2'>Salary:</h1>
                  <h1 className='text-gray-600 font-normal'>{jd.absolute_payout}</h1>
                </div>
                <div className='flex flex-row items-center justify-center gap-2 py-2 px-3 rounded-md border border-gray-400 bg-white' onClick={handleViewMore}>
                  <h1 className='text-sm lg:text-base'>View More</h1>
                  <FaExternalLinkAlt />
                </div>
              </div>
            ))
          ) : (
            <div className='text-gray-600 text-sm lg:text-base'>
              No job descriptions selected.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
 
export default FinanceCandidate;
 
 