import React from 'react';

const JobFilters = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        placeholder="Search"
        className="p-2 border border-gray-300 rounded-md w-2/5"
      />
      <div className="flex gap-4">
        <select className="p-2 border border-gray-300 rounded-md">
          <option>Sort By: Latest1</option>
          <option>Sort By: Latest2</option>
          <option>Sort By: Latest3</option>
          <option>Sort By: Latest4</option>
          {/* Add more sorting options */}
        </select>
        <select className="p-2 border border-gray-300 rounded-md">
          <option>Filter By: Industry1</option>
          <option>Filter By: Industry2</option>
          <option>Filter By: Industry3</option>
          <option>Filter By: Industry4</option>
          {/* Add more filter options */}
        </select>
        <select className="p-2 border border-gray-300 rounded-md">
          <option>Salary1</option>
          <option>Salary2</option>
          <option>Salary3</option>
          <option>Salary4</option>
          {/* Add more filter options */}
        </select>
        <select className="p-2 border border-gray-300 rounded-md">
          <option>Title1</option>
          <option>Title2</option>
          <option>Title3</option>
          <option>Title4</option>
          {/* Add more filter options */}
        </select>
        <select className="p-2 border border-gray-300 rounded-md">
          <option>Location1</option>
          <option>Location2</option>
          <option>Location3</option>
          <option>Location4</option>
          {/* Add more filter options */}
        </select>
        <button className="p-2 border border-gray-300 rounded-md">Reset Filter</button>
      </div>
    </div>
  );
};

export default JobFilters;
