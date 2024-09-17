import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './JobList';
import JobDetails from './JobDetails';
import LockForMeModal from './LockForMeModal'; // Import the modal

const JDList = ({ limit = Infinity }) => {
  const [selectedJob, setSelectedJob] = useState(null); // To store the selected job
  const [jobs, setJobs] = useState([]); // To store the list of jobs
  const [showModal, setShowModal] = useState(false); // To control modal visibility

  useEffect(() => {
    getBackendData();
  }, []);

  const getBackendData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/showJDs');
      console.log('Backend data:', response.data);

      const formattedJobs = response.data.jds.map((job) => ({
        id: job._id, // Ensure this is the correct field name
        title: job.title,
        company: job.client_name,
        location: job.location,
        industry: job.industry,
        experience: job.required_experience,
        salary: job.salary,
        type: 'Full time',
        interviewRounds: job.rounds_of_interview,
        noticePeriod: job.notice_period,
        priority: job.jd_status,
        submissionsRequired: job.no_of_openings,
        uploadedOn: new Date(job.createdAt).toLocaleDateString(),
        deliveryRequired: new Date(job.assured_time).toLocaleDateString(),
        replacementPeriod: job.replacement_period,
        skills: job.remarks,
        comments: job.remarks,
        status: job.jd_status,
        payout: job.payout,
        absoluteValue: job.payout,
        signUpRate: job.sign_up_rate,
        paymentTerms: [job.payment_terms],
        importantNotes: [job.remarks],
      }));

      setJobs(formattedJobs.slice(0, limit));
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  };

  const handleJobClick = (job) => {
    console.log('Job clicked:', job); // Add this line to debug
    setSelectedJob(job);
    setShowModal(true); // Show the modal when a job is clicked
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedJob(null); // Reset selected job when modal is closed
  };

  return (
    <div className="min-h-screen max-w-8xl bg-white p-4 gap-4 flex items-start">
      <div className="w-full">
        <JobList jobs={jobs} onJobClick={handleJobClick} />
      </div>
      <div className="w-2/5">
        <JobDetails job={selectedJob} />
      </div>
      {showModal && selectedJob && (
        <LockForMeModal
          id={selectedJob.id}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default JDList;
