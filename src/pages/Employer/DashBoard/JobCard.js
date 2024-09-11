import React from "react";
import CandidateCard from "./CandidateCard";
import Chaticon from '../../../Images/ChatIcon.png'

const JobCard = () => {
  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="flex w-32 items-center justify-center px-2 py-1 mb-2 bg-gray-200 text-gray-700 rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">JD ID: 12345678</p>
          <h1 className="text-2xl font-normal text-[#4F4F4F]">Job Title: <span className="font-bold text-[#303030]">Graphic Designer</span> </h1>
          <p className="overflow-hidden text-[#378BA6] text-ellipsis font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] -webkit-box -webkit-box-orient-vertical -webkit-line-clamp-1">Company: <b>Netfotech Solutions</b> </p>
        </div>
        
        <div><p className="flex flex-row text-[#000] gap-1 font-jost text-[14px] font-semibold leading-[36px]">Exp:<span className='text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[36px] border border-[#4F4F4F] rounded-lg p-[1px_12px]'> 02 Years</span></p></div>

        <div className="flex flex-row gap-3 bg-[#ECB015]/30 p-[12px_16px] border rounded-lg">
          <img src={Chaticon} className="bg-white rounded-full p-2" />
          <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
          <div>
            <h2 className="flex h-[22.595px] flex-col justify-center self-stretch overflow-hidden text-[#4F4F4F] text-ellipsis whitespace-nowrap font-jost text-[20px] font-medium leading-[28px]">Samuel Matthew</h2>
            <p className="overflow-hidden text-[#378BA6] text-ellipsis font-jost text-[16px] font-bold leading-[20.8px] tracking-[0.08px] -webkit-box -webkit-box-orient-vertical -webkit-line-clamp-1">Candidate ID: 1254631</p>
          </div>
        </div>

      </div>
      <CandidateCard />
      <CandidateCard />
    </div>
  );
};

export default JobCard;