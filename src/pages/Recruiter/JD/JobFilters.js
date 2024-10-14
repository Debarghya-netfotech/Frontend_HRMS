import React from 'react';

const JobFilters = ({ filters, setFilters }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md mb-4">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="block">Location</label>
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="">All</option>
            {filters.uniqueLocations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block">Industry</label>
          <select
            value={filters.industry}
            onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
          >
            <option value="">All</option>
            {filters.uniqueIndustries.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block">Job Title</label>
          <select
            value={filters.title}
            onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          >
            <option value="">All</option>
            {filters.uniqueTitles.map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block">Status</label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">All</option>
            {filters.uniqueStatuses.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;
