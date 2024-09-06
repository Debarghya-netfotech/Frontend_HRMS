import React from 'react'
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
const FinanceCandidate = () => {
    return (
        <div className='min-h-screen flex items-center bg-[#FBEFD0] justify-center'>
            <div className='flex flex-col items-start p-8 gap-4 rounded-lg bg-white w-[1200px] h-[533px]'>
                <div className='flex p-[8px_16px] justify-between items-center self-stretch rounded-[8px] bg-[rgba(55,139,166,0.30)]'>
                    <p className='text-[#4F4F4F] text-center font-jost text-[20px] font-medium leading-custom'>CANDIDATES</p>
                    <button className='w-[24px] h-[24px]'><IoMdClose /></button>
                </div>
                <h1 className='flex p-[2px_8px] justify-center items-center rounded-[4px] bg-[#E8E8E8]'>JD:ID 64378738</h1>
                <div className="w-[1148px] h-[0.5px] bg-[#848484]"></div>
                <div className='rounded-lg border border-teal-500 bg-white flex flex-col  gap-3 p-4 self-stretch w-[1148px] h-[155px]'>
                    <div className='flex justify-between self-stretch'>
                        <div className='flex flex-row items-center gap-4 w-[100%]'>
                            <div className>
                                <input type="checkbox" id="checkbox" className='w-[20px] h-[20px]' />
                            </div>
                            <div className='flex flex-col w-[75%]'>
                                <h1 className='overflow-hidden text-gray-600 truncate whitespace-nowrap text-2xl font-medium leading-7'>Samule Mattehew</h1>
                                <h1 className='overflow-hidden text-[#378BA6] truncate whitespace-nowrap text-base font-medium leading-5'>Candidate ID : 67890987</h1>
                            </div>
                            <div className='text-black text-sm font-semibold font-jost leading-9 flex flex-row gap-2 items-center'>Exp:
                                <h1 className='text-[#A38740] text-base font-normal font-jost leading-7 text-center bg-[#FFFB9A]'>02 Years</h1>
                            </div>
                            <div className='flex h-[40px] w-[40px] justify-center items-center bg-[#EAF1F3] ml-8'>
                                < MdDelete className='w-16 h-auto' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-px bg-black '></div>
                    <div className='mt-4 flex flex-row gap-8'>
                        <div className='flex flex-row text-center'>< FaBriefcase className='w-5 h-5 text-[#378BA6]' />
                            <h1 className='text-gray-600 text-base font-normal ml-2'>JobTitle:</h1>
                            <h1 className='text-gray-600 text-base font-normal'>:Frontend developer</h1>
                        </div>
                        <div className='flex flex-row text-center'>< FaLocationDot className='w-5 h-5 text-[#378BA6]' />
                            <h1 className='text-gray-600 text-base font-normal ml-2'>Location:</h1>
                            <h1 className='text-gray-600 text-base font-normal'>Mumbal,Maharastra</h1>
                        </div>
                        <div className='flex flex-row mr-[20px] text-center'>< RiMoneyRupeeCircleFill className='w-5 h-5 text-[#378BA6]' />
                            <h1 className='text-gray-600 text-base font-normal ml-2'>Location:</h1>
                            <h1 className='text-gray-600 text-base font-normal'>Mumbal Maharastra</h1>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-2 py-2 px-3  ml-40  rounded-md border border-gray-400 bg-white'><h1>View More</h1>
                            <FaExternalLinkAlt />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FinanceCandidate
