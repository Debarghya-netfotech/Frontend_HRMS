import React from 'react';
import PropTypes from 'prop-types';
import LocationIcon from '../../../Images/LocationIcon.png';
import IndustryIcon from '../../../Images/IndustryIcon.png';
import ExperienceIcon from '../../../Images/ExperienceIcon.png';
import JobTypeIcon from '../../../Images/JobTypeIcon.png';
import SalaryIcon from '../../../Images/SalaryIcon.png';
import TimeIcon from '../../../Images/TimeIcon.png';
import SubmissionIcon from '../../../Images/SubmissionIcon.png';
import NoticePeriodIcon from '../../../Images/NoticePeriodIcon.png';
import InterviewIcon from '../../../Images/InterviewIcon.png';
import PriorityIcon from '../../../Images/PriorityIcon.png';
import { IoIosArrowForward } from "react-icons/io";


// Default values for the job prop
const defaultJob = {
  location: 'N/A',
  name: 'N/A',
  industry: 'N/A',
  experience: 'N/A',
  salary: 'N/A',
  type: 'N/A',
  interviewRounds: 'N/A',
  noticePeriod: 'N/A',
  priority: 'N/A',
  submissionsRequired: 'N/A',
  uploadedOn: 'N/A',
  deliveryRequired: 'N/A',
  replacementPeriod: 'N/A',
  skills: 'N/A',
  comments: 'N/A',
  signUpRate: 'N/A',
  paymentTerms: [],
  importantNotes: []
};

const JDSummary = ({ job }) => {
  // Destructure job properties with fallback to default values
  const {
    location = defaultJob.location,
    name =defaultJob.name,
    industry = defaultJob.industry,
    experience = defaultJob.experience,
    salary = defaultJob.salary,
    type = defaultJob.type,
    interviewRounds = defaultJob.interviewRounds,
    noticePeriod = defaultJob.noticePeriod,
    priority = defaultJob.priority,
    submissionsRequired = defaultJob.submissionsRequired,
    uploadedOn = defaultJob.uploadedOn,
    deliveryRequired = defaultJob.deliveryRequired,
    replacementPeriod = defaultJob.replacementPeriod,
    skills = defaultJob.skills,
    comments = defaultJob.comments,
    signUpRate = defaultJob.signUpRate,
    paymentTerms = defaultJob.paymentTerms,
    importantNotes = defaultJob.importantNotes
  } = job || {};

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex p-2 px-4 justify-between items-center self-stretch rounded-lg bg-[#378BA6]/30">
        <div>
          <h2 className="text-center text-dark-gray text-2xl font-medium leading-9">SUMMARY SHEET</h2>
          
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-gray-500">
            <i className="fas fa-download"></i>
          </button>
          <button className="text-gray-500">✕</button>
        </div>
      </div>

<p className="flex w-32 my-3 items-center justify-center px-2 py-1 mb-2 bg-gray-200 text-gray-700 rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">JD ID: {job.id}</p>

      {/* Recruiter Details */}
      <div className="bg-yellow-100 p-4 rounded-lg mb-6">
        <p className="text-black text-ellipsis overflow-hidden font-medium text-2xl leading-7 truncate">Recruiter Details:</p>
        <hr className='my-1'/>
        <div className="flex items-center">
          <div className="custom-clamp text-dark-grey text-ellipsis overflow-hidden font-medium text-2xl leading-7">R01</div>
          <div className='w-[0.737px] h-[42px] bg-[#848484] mx-3'></div>
          <div>
            <p className="font-bold text-gray-800">{job.name}</p>
            <p className="text-sm text-gray-600">ID: {job.id}</p>
          </div>
        </div>
      </div>

      {/* Job Title and Company */}
      <div className="mb-4">
        <h3 className="flex flex-col justify-center text-dark-grey text-ellipsis overflow-hidden whitespace-nowrap font-normal text-2xl leading-9">Job Title: <span className="text-custom-gray font-jost text-2xl font-semibold leading-9">{job.title}</span></h3>
        <p className="flex flex-col justify-center w-auto h-[20.809px] overflow-hidden text-[#378BA6] whitespace-nowrap text-[20px] font-normal leading-28px font-jost">Company:{job.company} </p>
      </div>

      {/* Job Description and Payout Details */}
      <div className="grid grid-cols-2 gap-4">
        {/* Job Description */}
        <div className="border border-[#378BA6] rounded-lg">
          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Job Description</h3>
            <ol className="list-inside list-none text-sm text-gray-700">
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={LocationIcon} alt='Location' />Location: {location}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={IndustryIcon} alt='Industry' />Industry: {industry}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={ExperienceIcon} alt='Experience' />Experience: {experience}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={SalaryIcon} alt='Salary' />Salary: {salary}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={JobTypeIcon} alt='Job Type' />Type: {type}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={InterviewIcon} alt='Interview Rounds' />Interview Rounds: {interviewRounds}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={NoticePeriodIcon} alt='Notice Period' />Notice Period: {noticePeriod}</li>
            </ol>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Submission Details</h3>
            <ul className="list-none list-inside text-sm text-gray-700">
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={PriorityIcon} alt='Priority' />Priority: {priority}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={SubmissionIcon} alt='Submissions Required' />No. of Submissions Required: {submissionsRequired}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={TimeIcon} alt='Uploaded On' />Uploaded on: {uploadedOn}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={TimeIcon} alt='Delivery Required' />Delivery Required: {deliveryRequired}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={TimeIcon} alt='Replacement Period' />Replacement Period: {replacementPeriod}</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Skills Required</h3>
            <p className="flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">{skills}</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Additional Comments</h3>
            <p className="flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">{comments}</p>
          </div>
        </div>

        {/* Payout Details */}
        <div className="space-y-4 border border-[#378BA6] rounded-lg">
          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Payout Details</h3>
            <div className="grid grid-cols-2 gap-0 border mt-3 border-gray-400 rounded-md text-center">
              <div className="p-2 border-r border-b border-gray-400 bg-[#EAF1F3] text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                Your Payout
              </div>
              <div className="p-2 border-b border-gray-400 text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                1500/-
              </div>
              <div className="bg-[#EAF1F3] p-2 border-r border-gray-400 text-gray-700 text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                Absolute value
              </div>
              <div className="p-2 border-gray-400 text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                1500/-
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Sign Up Rate with Client</h3>
            <p className="flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">{signUpRate}</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Payment Terms</h3>
            <ol className="gap-2 my-1 pl-5 list-decimal text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
              {Array.isArray(paymentTerms) && paymentTerms.length > 0 ? (
                paymentTerms.map((term, index) => (
                  <li key={index}>{term}</li>
                ))
              ) : (
                <li>No payment terms provided</li>
              )}
            </ol>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Important Notes</h3>
            <ol className="gap-2 my-1 pl-5 list-decimal text-[#FC5C5C] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
              {Array.isArray(importantNotes) && importantNotes.length > 0 ? (
                importantNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))
              ) : (
                <li>No important notes provided</li>
              )}
            </ol>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex gap-3 mt-7 justify-between">
            <button className="flex py-2 px-3 justify-center items-center gap-2 rounded-lg border border-[#A4A4A4] bg-white text-[#4F4F4F] text-center text-[20px] font-bold leading-[36px] font-jos">Close</button>
            <button className="flex py-2 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-[#378BA6] text-white text-center text-[20px] font-bold leading-[36px] font-jos">Go to My Workplace <IoIosArrowForward className='items-center' /> </button>
        </div>
    </div>
  );
};

// Define prop types
JDSummary.propTypes = {
  job: PropTypes.shape({
    location: PropTypes.string,
    industry: PropTypes.string,
    experience: PropTypes.string,
    salary: PropTypes.string,
    type: PropTypes.string,
    interviewRounds: PropTypes.string,
    noticePeriod: PropTypes.string,
    priority: PropTypes.string,
    submissionsRequired: PropTypes.string,
    uploadedOn: PropTypes.string,
    deliveryRequired: PropTypes.string,
    replacementPeriod: PropTypes.string,
    skills: PropTypes.string,
    comments: PropTypes.string,
    signUpRate: PropTypes.string,
    paymentTerms: PropTypes.arrayOf(PropTypes.string),
    importantNotes: PropTypes.arrayOf(PropTypes.string)
  })
};

// Define default props
JDSummary.defaultProps = {
  job: defaultJob
};

export default JDSummary;
