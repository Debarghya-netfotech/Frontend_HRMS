import React from 'react';
import SortIcon from '../../../Images/SortIcon.png';
import FilterIcon from '../../../Images/FilterIcon.png';
import ResetIcon from '../../../Images/ResetIcon.png';

const JobFilters = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mb-4 bg-white border border-[#848484]">
      <input
        type="text"
        placeholder="Search"
        className="p-2 mx-3 border border-[#848484] rounded-md w-full lg:w-1/4 focus:outline-none focus:border-[var(--Teal,#378BA6)] border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)] mb-2 lg:mb-0"
      />
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 bg-white w-full lg:w-auto">
        <div className="flex flex-row p-2 lg:p-4 border text-[#378BA6] mb-2 lg:mb-0">
          <img src={SortIcon} className='h-5 w-5 mt-1 lg:mt-2.5' alt="Sort Icon" />
          <select className='ml-2'>
            <option>Sort By: Latest</option>
            <option>Sort By: Latest2</option>
            <option>Sort By: Latest3</option>
            <option>Sort By: Latest4</option>
            {/* Add more sorting options */}
          </select>
        </div>
        <div className="flex flex-row p-2 lg:p-4 border text-[#378BA6] mb-2 lg:mb-0">
          <img src={FilterIcon} className='h-5 w-5 mt-1 lg:mt-2.5' alt="Filter Icon" />
          <select className='ml-2'>
            <option>Filter By:</option>
            <option>Filter By: Filter2</option>
            <option>Filter By: Filter3</option>
            <option>Filter By: Filter4</option>
            {/* Add more filter options */}
          </select>
        </div>
        <div className="flex flex-row p-2 lg:p-4 border text-[#378BA6] mb-2 lg:mb-0">
          <select className='ml-2'>
            <option>Industry</option>
            <option>Industry2</option>
            <option>Industry3</option>
            <option>Industry4</option>
            {/* Add more filter options */}
          </select>
        </div>
        <div className="flex flex-row p-2 lg:p-4 border text-[#378BA6] mb-2 lg:mb-0">
          <select className='ml-2'>
            <option>Status</option>
            <option>Status2</option>
            <option>Status3</option>
            <option>Status4</option>
            {/* Add more filter options */}
          </select>
        </div>
        <div className="flex flex-row p-2 lg:p-4 border text-[#378BA6] mb-2 lg:mb-0">
          <select className='ml-2'>
            <option>Title</option>
            <option>Title2</option>
            <option>Title3</option>
            <option>Title4</option>
            {/* Add more filter options */}
          </select>
        </div>
        <div className="flex flex-row p-2 lg:p-4 border text-[#378BA6] mb-2 lg:mb-0">
          <select className='ml-2'>
            <option>Location</option>
            <option>Location2</option>
            <option>Location3</option>
            <option>Location4</option>
            {/* Add more filter options */}
          </select>
        </div>
        <div className="flex flex-row p-2 lg:p-4 border text-[#378BA6] items-center">
          <img src={ResetIcon} className='h-5 w-5 mt-1 lg:mt-2.5' alt="Reset Icon" />
          <button className='ml-2'>Reset Filter</button>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;
