import React from 'react';
import { BiSort } from "react-icons/bi";
import { LuFilter } from "react-icons/lu";
import { IoIosRefresh } from "react-icons/io";
import SortIcon from '../../../Images/SortIcon.png';
import ResetIcon from '../../../Images/ResetIcon.png';
import FilterIcon from '../../../Images/FilterIcon.png';

const JobFilters = () => {
  return (
    <div className="flex justify-between items-center mb-4 bg-white border border-[#848484] ">
      <input
        type="text"
        placeholder="Search"
        className="p-2 mx-3 border border-[#848484] rounded-md w-1/4 focus:outline-none focus:border-[var(--Teal,#378BA6)] border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
      />
      <div className="flex gap-0 bg-white ">
        <div className=" flex flex-row p-4 border text-[#378BA6]  ">
        <img src={SortIcon} className='h-5 w-5 mt-2.5'/>
          <select  >
            
            <option>Sort By: Latest</option>
            <option>Sort By: Latest2</option>
            <option>Sort By: Latest3</option>
            <option>Sort By: Latest4</option>
            {/* Add more sorting options */}
          </select>
        </div>
        <div className="flex flex-row p-4 border text-[#378BA6]">
          <img src={FilterIcon} className='h-5 w-5 mt-2.5' />
          <select className='w-20'>
            <option>Filter By:</option>
            <option>Filter By: Filter2</option>
            <option>Filter By: Filter3</option>
            <option>Filter By: Filter4</option>
            {/* Add more filter options */}
          </select>
        </div>
        <div className="p-4 border text-[#378BA6] mt-2 border-t-transparent ">
          <select>
            <option> Industry</option>
            <option> Industry2</option>
            <option> Industry3</option>
            <option> Industry4</option>
            {/* Add more filter options */}
          </select>
        </div>
        
        <div className="p-4 border text-[#378BA6] mt-2 border-t-transparent  ">
          <select >
            <option>Sataus</option>
            <option>Status2</option>
            <option>Status3</option>
            <option>Status4</option>
            {/* Add more filter options */}
          </select>
        </div>
        <div className="p-4 border text-[#378BA6] mt-2 border-t-transparent  ">
          <select >
            <option>Title</option>
            <option>Title2</option>
            <option>Title3</option>
            <option>Title4</option>
            {/* Add more filter options */}
          </select>
        </div>
        <div className="p-4 border text-[#378BA6] mt-2 border-t-transparent  ">
          <select >
            <option>Location</option>
            <option>Location2</option>
            <option>Location3</option>
            <option>Location4</option>
            {/* Add more filter options */}
          </select>
            
        </div>
        <div className='flex flex-row p-4 border text-[#378BA6]'>
        <img src={ResetIcon} className='h-5 w-5 mt-2.5' />
        <button>Reset Filter</button>
        </div>
        

      </div>
    </div>
  );
};

export default JobFilters;
