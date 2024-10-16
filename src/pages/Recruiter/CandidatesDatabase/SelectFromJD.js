import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
// import JobFilters from '../../Recruiter/JD/JobFilters';
import ExportIcon from '../../../Images/ExportIcon.png';
import Chat from '../../../Images/ChatIcon.png';
 
function SelectFromJD() {
  const location = useLocation(); // Get location
  const candidate = location.state?.candidate; // Extract candidate data from state
  const [lockedJobDetails, setLockedJobDetails] = useState([]); // State for locked job details
  const [selectedJDs, setSelectedJDs] = useState([]); // State for selected JDs
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message
  const navigate = useNavigate(); // Navigation hook
 
  // Function to get job details
  const getJobDetails = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/showJDs');
      return response.data.jds; // Return the response data
    } catch (error) {
      console.error('Error fetching job details:', error);
      throw error; // Re-throw the error for further handling
    }
  };
 
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const jobDetails = await getJobDetails(); // Call the new function
 
        // Filter to only get locked JDs
        const lockedJDs = jobDetails.filter(jd => jd.locked === true);
        setLockedJobDetails(lockedJDs);
        console.log(lockedJDs);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setErrorMessage('Error fetching job details.');
      }
    };
 
    fetchJobDetails();
 
    // Log candidate details to console
    if (candidate) {
      console.log('Candidate Data:', candidate);
    }
  }, [candidate]);
 
  // Handle checkbox selection
  const handleCheckboxChange = (jd) => {
    setSelectedJDs((prevSelectedJDs) => {
      if (prevSelectedJDs.includes(jd)) {
        return prevSelectedJDs.filter(selectedJD => selectedJD !== jd); // Deselect if already selected
      } else {
        return [...prevSelectedJDs, jd]; // Add to selected if not selected
      }
    });
  };
 
  // Handle "Done" button click
  const handleDoneClick = () => {
    // Check if any JD is selected
    if (selectedJDs.length > 0 && candidate) {
      // Navigate to the FinanceCandidate page and pass selected JDs and candidate data
      navigate('/FinanceCandidate', { state: { candidate, selectedJDs } });
    } else {
      alert('Please select at least one JD and a candidate.');
    }
  };
 
  return (
    <div className='max-h-screen gap-6 p-4 bg-[#EAF1F4] flex flex-col items-center'>
      <div className='flex flex-col w-[1156px] py-8 px-0 items-end gap-6'>
        <div className='w-full'>
          {/* <JobFilters /> */}
        </div>
        <div className='flex justify-end items-center gap-3 self-stretch'>
          <button className='flex p-2 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-[white] w-[244px] h-[52px]'>
            <h1 className='text-[bg-gray-400] text-center font-semibold text-2xl leading-7 font-jost'>Cancel</h1>
          </button>
          <button onClick={handleDoneClick} className='flex p-2 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-gray-400 w-[244px] h-[52px]'>
            <h1 className='text-white text-center font-semibold text-2xl leading-7 font-jost'>Done</h1>
          </button>
        </div>
        <div className='h-[52px] self-stretch rounded-[8px] bg-[rgba(55,139,166,0.30)] flex justify-between items-center p-8 mt-[20px]'>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>Serial no</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>Select</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>JD ID</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>CLIENT DETAILS</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>JD DETAIL</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>CANDIDATES</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>DATE</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>AMOUNT</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>STATUS</h1>
        </div>
 
        {/* Show error message if there is one */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
 
        {/* Map over locked JDs array */}
        <div className='flex flex-col justify-center items-end gap-5 self-stretch'>
          {lockedJobDetails.length > 0 ? (
            lockedJobDetails.map((jd, index) => (
              <div
                key={index}
                className='flex justify-between items-center self-stretch rounded-md border border-[#9B9B9B] bg-white shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] p-4 mt-6'
              >
                {/* Serial number */}
                <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>
                  {index + 1}
                </h1>
               
                {/* Checkbox */}
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  onChange={() => handleCheckboxChange(jd)} // Handle checkbox change
                />
               
                {/* JD ID */}
                <div className='flex flex-row items-center'>
                  <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>
                    #{jd._id.slice(-4)}
                  </h1>
                </div>
 
                {/* Client Details */}
                <div className='flex flex-row items-center'>
                  <div className='flex w-[40px] h-[40px] justify-center items-center rounded-[45px] bg-[#EAF1F3]'>
                    <img src={ExportIcon} alt='Export' className='w-16 h-auto' />
                  </div>
                  <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>
                    {jd.client_name}
                  </h1>
                </div>
 
                {/* JD Details */}
                <div className='flex flex-row items-center'>
                  <div className='flex w-[40px] h-[40px] justify-center items-center rounded-[45px] bg-[#EAF1F3]'>
                    <img src={Chat} alt='Chat' className='w-16 h-auto' />
                  </div>
                  <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>
                    <span className='overflow-hidden text-[#4F4F4F] truncate whitespace-nowrap font-jost text-base font-semibold leading-6 tracking-tight'>
                      {jd.jobTitle}
                    </span>
                    <br />
                    {jd.companyName}
                  </h1>
                </div>
 
                {/* More details */}
                <a href='/FinanceCandidate'>
                  <div className='flex w-[86px] justify-center items-center gap-[10px] rounded-[12px] border border-[#000] bg-white'>
                    <h1>02/02</h1>
                    <img src={ExportIcon} alt='Export' className='w-12 h-auto' />
                  </div>
                </a>
 
                {/* Date */}
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                  {jd.createdAt.split('T')[0]}
                </h1>
 
                {/* Amount */}
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                  ${jd.amount}
                </h1>
 
                {/* Status */}
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                  {jd.status}
                </h1>
              </div>
            ))
          ) : (
            <h2 className='text-lg font-semibold'>No locked job descriptions available.</h2>
          )}
        </div>
      </div>
    </div>
  );
}
 
export default SelectFromJD;
 
 