import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './JobList';
import JobDetails from './JobDetails';
import LockForMeModal from './LockForMeModal';
import Sidebar from '../../global/Sidebar';

const JDList = ({ limit = Infinity }) => {
  const [selectedJob, setSelectedJob] = useState(null); 
  const [jobs, setJobs] = useState([]); 
  const [showModal, setShowModal] = useState(false); 


  useEffect(() => {
    getBackendData();
  }, []);

  const getBackendData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/showJDs');
      console.log('Backend data:', response.data);

      const formattedJobs = response.data.jds.map((job) => ({
        id: job._id, // Ensure this is the correct field name
        job_title: job.job_title,
        company: job.company_Name,
        experience: job.experience,
        industry: job.industry,
        location: job.location,
        work_exp: job.work_experience,
        salary: job.salary,
        type: 'Full time',
        noticePeriod: job.notice_period,
        interviewRounds: job.interview_rounds,
        job_type: job.job_type,
        priority: job.priority_tag,
        delivery_deadline: new Date(job.delivery_deadline).toLocaleDateString(),
        replacementPeriod: job.replacement_period,
        no_of_vacancy: job.no_of_vacancy,
        absoluteValue: job.absolute_payout,
        delivery_payout:job.delivery_payout,
        additional_comments:job.additional_comments,
        skills_required: job.skills_required,
        jd_status:job.jd_status,
        uploadedOn: new Date(job.createdAt).toLocaleDateString(),
        // replacementPeriod: job.replacement_period,
        
        comments: job.remarks,
        status: job.jd_status,
        // payout: job.payout,
        // absoluteValue: job.payout,
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
    <div className='min-h-screen flex flex-row gap-4'>
    <Sidebar className='max-[30%]'/>
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
    </div>
  );
};

export default JDList;
