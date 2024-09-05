import React from 'react'
import Sidebar from '../global/Sidebar'
import JobFilters from '../JD/JobFilters'

import { MdDelete } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
function CandidatesOne() {
  return (
    <div className='max-h-screen flex flex-row gap-6'>
      <div className='max-[30%]'>
        <Sidebar />
      </div>
      <div className=' w-[100%] bg-[#EAF1F4] flex flex-col py-5 gap-33 flex-1 p-6'>
        <h1>Hello</h1>
        <JobFilters />
        <div className='flex justify-end items-center gap-3 self-stretch'>
          <button className='flex p-2 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-gray-400'>
            <h1 className='text-white text-center font-semibold text-2xl leading-7 font-jost'>Add New Candidates</h1>
          </button>
          
        </div>
        <div className='w-full flex flex-col gap-4 mt-4'>
            <div className='rounded-lg border border-teal-500 bg-white flex flex-col  gap-3 p-4 self-stretch w-[full] h-auto'>
              <div className='flex justify-between self-stretch'>
                <div className='flex flex-row items-center gap-4 w-[100%]'>
                  <div className='flex flex-col w-[75%]'>
                    <h1 className='overflow-hidden text-gray-600 truncate whitespace-nowrap text-2xl font-medium leading-7'>Samule Mattehew</h1>
                    <h1 className='overflow-hidden text-[#378BA6] truncate whitespace-nowrap text-base font-medium leading-5'>Candidate ID : 67890987</h1>
                  </div>
                  <div className='text-black text-sm font-semibold font-jost leading-9 flex flex-row gap-2  ml-20 items-center'>Exp:
                    <h1 className='text-[#A38740] text-base font-normal font-jost leading-7 text-center bg-[#FFFB9A]'>02 Years</h1>
                  </div>
                  <div className='flex h-[40px] w-[40px] justify-end items-end bg-[#EAF1F3] ml-8'>
                    < MdDelete className='w-16 h-auto' />
                  </div>
                </div>
              </div>
              <div className='w-full h-px bg-black '></div>
              <div className='mt-4 flex flex-row gap-8 items-center'>
                <div className='flex flex-row text-center'>< FaBriefcase className='w-5 h-5 text-[#378BA6]' />
                  <h1 className='text-gray-600 text-base font-normal ml-2'>JobTitle:</h1>
                  <h1 className='text-gray-600 text-base font-normal'>:Frontend developer</h1>
                </div>
                <div className='flex flex-row text-center'>< FaLocationDot className='w-5 h-5 text-[#378BA6]' />
                  <h1 className='text-gray-600 text-base font-normal ml-2'>Location:</h1>
                  <h1 className='text-gray-600 text-base font-normal'>Mumbal,Maharastra</h1>
                </div>
                <div className='flex flex-row mr-[20px] text-center '>< RiMoneyRupeeCircleFill className='w-5 h-5 text-[#378BA6]' />
                  <h1 className='text-gray-600 text-base font-normal ml-2'>Location:</h1>
                  <h1 className='text-gray-600 text-base font-normal'>Mumbal Maharastra</h1>
                </div>
                <a href='/SelectFromJD'>
                <button className='flex flex-row items-center justify-center gap-2 py-2 px-3  ml-[220px]  rounded-md border border-gray-400 bg-white'><h1 className='text-dark-grey text-center font-bold text-base-lg font-jost'>Move to jd</h1>
                  <FaExternalLinkAlt />
                </button>
                </a>
              </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidatesOne
