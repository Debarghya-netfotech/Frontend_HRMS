import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobFilters from './JobFilters';
import JobList from './JobList';
import JobDetails from './JobDetails';

const JDList = ({ limit = Infinity }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]); // Initialize as an empty array

  useEffect(() => {
    getBackendData();
  }, []);

  const getBackendData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/showJDs');
      console.log('Backend data:', response.data);

      // Map the backend data to the format required by JobList
      const formattedJobs = response.data.jds.map((job) => ({
        id: job._id, // Use the backend _id as the job ID
        title: job.title,
        company: job.client_name,
        location: job.location,
        industry: job.industry,
        experience: job.required_experience,
        salary: job.salary,
        type: 'Full time', // This can be adjusted based on additional data or logic
        interviewRounds: job.rounds_of_interview,
        noticePeriod: job.notice_period,
        priority: job.jd_status, // This can be adjusted if you have a specific priority field
        submissionsRequired: job.no_of_openings,
        uploadedOn: new Date(job.createdAt).toLocaleDateString(), // Format date as needed
        deliveryRequired: new Date(job.assured_time).toLocaleDateString(), // Format date as needed
        replacementPeriod: job.replacement_period,
        skills: job.remarks, // Adjust if needed based on the actual data
        comments: job.remarks, // Adjust if needed based on the actual data
        status: job.jd_status,
        payout: job.payout,
        absoluteValue: job.payout,
        signUpRate: job.sign_up_rate,
        paymentTerms: [job.payment_terms], // Convert to an array if needed
        importantNotes: [job.remarks], // Convert to an array if needed
      }));

      // Apply the limit to the number of jobs displayed
      setJobs(formattedJobs.slice(0, limit));
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="min-h-screen max-w-8xl bg-white p-4 gap-4 flex items-start">
      <div className="w-full">
        {/* <JobFilters /> */}
        <JobList jobs={jobs} onJobClick={handleJobClick} />
      </div>
      <div className="w-2/5">
        <JobDetails job={selectedJob} />
      </div>
    </div>
  );
};

export default JDList;
