import React from 'react'
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";

const FinanceCandidate = () => {
    return (
      <div className='min-h-screen flex items-center bg-[#FBEFD0] justify-center p-4'>
        <div className='flex flex-col items-start p-4 lg:p-8 gap-4 rounded-lg bg-white w-full lg:w-[1200px] lg:h-[533px]'>
          <div className='flex p-2 lg:p-4 justify-between items-center self-stretch rounded-[8px] bg-[rgba(55,139,166,0.30)]'>
            <p className='text-[#4F4F4F] text-center font-jost text-base lg:text-[20px] font-medium leading-custom'>CANDIDATES</p>
            <button className='w-[24px] h-[24px] text-lg lg:text-xl'><IoMdClose /></button>
          </div>
          <h1 className='flex p-2 lg:p-4 justify-center items-center rounded-[4px] bg-[#E8E8E8] text-sm lg:text-base'>JD:ID 64378738</h1>
          <div className="w-full h-px bg-[#848484]"></div>
          <div className='rounded-lg border border-teal-500 bg-white flex flex-col gap-3 p-4 lg:p-6 self-stretch'>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
              <div className='flex flex-row items-center gap-4 w-full'>
                <input type="checkbox" id="checkbox" className='w-5 h-5' />
                <div className='flex flex-col w-full lg:w-[75%]'>
                  <h1 className='overflow-hidden text-gray-600 truncate whitespace-nowrap text-lg lg:text-2xl font-medium leading-6 lg:leading-7'>Samule Mattehew</h1>
                  <h1 className='overflow-hidden text-[#378BA6] truncate whitespace-nowrap text-sm lg:text-base font-medium leading-5'>Candidate ID : 67890987</h1>
                </div>
                <div className='text-black text-sm lg:text-base font-semibold font-jost leading-6 lg:leading-7 flex flex-row gap-2 items-center'>
                  Exp:
                  <h1 className='text-[#A38740] text-xs lg:text-base font-normal font-jost leading-6 lg:leading-7 text-center bg-[#FFFB9A]'>02 Years</h1>
                </div>
                <div className='flex h-10 w-10 justify-center items-center bg-[#EAF1F3]'>
                  <MdDelete className='w-6 h-6' />
                </div>
              </div>
            </div>
            <div className='w-full h-px bg-black my-4 lg:my-6'></div>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
              <div className='flex flex-row items-center text-sm lg:text-base'>
                <FaBriefcase className='w-5 h-5 text-[#378BA6]' />
                <h1 className='text-gray-600 font-normal ml-2'>Job Title:</h1>
                <h1 className='text-gray-600 font-normal'>Frontend Developer</h1>
              </div>
              <div className='flex flex-row items-center text-sm lg:text-base'>
                <FaLocationDot className='w-5 h-5 text-[#378BA6]' />
                <h1 className='text-gray-600 font-normal ml-2'>Location:</h1>
                <h1 className='text-gray-600 font-normal'>Mumbai, Maharashtra</h1>
              </div>
              <div className='flex flex-row items-center text-sm lg:text-base'>
                <RiMoneyRupeeCircleFill className='w-5 h-5 text-[#378BA6]' />
                <h1 className='text-gray-600 font-normal ml-2'>Salary:</h1>
                <h1 className='text-gray-600 font-normal'>Mumbai, Maharashtra</h1>
              </div>
              <div className='flex flex-row items-center justify-center gap-2 py-2 px-3 rounded-md border border-gray-400 bg-white'>
                <h1 className='text-sm lg:text-base'>View More</h1>
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FinanceCandidate;