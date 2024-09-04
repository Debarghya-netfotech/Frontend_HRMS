import React, { useState } from 'react';
import LocationIcon from '../../Images/LocationIcon.png';
import DeleteIcon from '../../Images/DeleteIcon.png';

const CandidateForm = () => {

  // State for managing experiences and educations
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  // Handlers for adding new experience and education
  const addExperience = () => {
    setExperiences([...experiences, { jobTitle: '', companyName: '', startDate: '', endDate: '' }]);
  };

  const addEducation = () => {
    setEducations([...educations, { fieldOfStudy: '', levelOfEducation: '', startDate: '', endDate: '' }]);
  };

  // Handlers for updating experience and education fields
  const updateExperience = (index, field, value) => {
    const updatedExperiences = experiences.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setExperiences(updatedExperiences);
  };

  const updateEducation = (index, field, value) => {
    const updatedEducations = educations.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setEducations(updatedEducations);
  };


  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex p-2 px-4 justify-between items-center self-stretch rounded-lg bg-[#378BA6]/25">
        <h2 className="text-[#4F4F4F] text-center font-jost text-[20px] font-medium leading-[36px]">CANDIDATE FORM</h2>
        <div className='flex gap-3'>
          <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded hover:bg-gray-300 text-dark-grey text-center font-jost text-[16px] font-bold leading-[24px]">Export</button>
          <button className="text-gray-500">✕</button>
        </div>
      </div>
      <div className='bg-white p-4'>
        {/* Job Details */}
        <div className="mb-6 my-3">
          <p className="flex w-32 items-center justify-center px-2 py-1 mb-1 bg-gray-200 text-[#4F4F4F] rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">JD ID: 12345678</p>
          <h3 className="flex flex-row justify-start my-3 self-stretch overflow-hidden text-[#4F4F4F] text-[20px] font-jost font-normal leading-[24px] whitespace-nowrap overflow-ellipsis h-6">Job Title: <span className="font-bold ml-1 text-[#303030]">Software Developer</span></h3>
          <p className="flex flex-row align-self-stretch overflow-hidden text-[#378BA6] text-[20px] font-jost font-normal leading-[28px] text-overflow-ellipsis">Company: <b> Tech Solutions </b> </p>
          <div className="mt-3 flex flex-row text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]" > <img src={LocationIcon} alt='LocationIcon' /> Location: Kharadi, Pune</div>
        </div>
        <div className='border border-[#378BA6] rounded-xl p-4'>
          {/* Personal Details */}
          <div className="mt-8 border border-[#378BA6] rounded-xl p-4 mb-4">
            <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">PERSONAL DETAILS</p>
            <form className="px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className=' mb-8 w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'> First Name *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="First Name" />
                </label>
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Last Name *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Last Name" />
                </label>
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Current Location *
                  <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Current Location">
                    <option>Kolkata</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bengaluru</option>
                    <option> Chennai</option>
                    <option>Hyderabad</option>
                    <option>Ahmedabad</option>
                    <option>Pune</option>
                    <option>Jaipur</option>
                    <option>Lucknow</option>
                    <option>Chandigarh</option>
                    <option>Varanasi</option>
                    <option>Indore</option>
                    <option>Coimbatore</option>
                    <option>Goa</option>
                    <option>Agra</option>
                  </select>
                </label>
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Email ID *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Email ID" />
                </label>
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Contact Number *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Contact Number" />
                </label>
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Job Title *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Job Title" />
                </label>
              </div>
            </form>
          </div>

          <hr />

          {/* Experience Details */}
          {/* <div className="mb-6">
            <h4 className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">EXPERIENCE DETAILS</h4>
            <div className=''>
              <form className="py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Job Title *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Job Title" />
                </label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Company Name *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Company Name" />
                </label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Start Date *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="date" placeholder="Start Date" />
                </label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>End Date *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="date" placeholder="End Date" />
                </label>
              </form>
              <div className="py-2 px-4 flex items-center justify-between space-x-2">
                <div className='flex items-center space-x-2'><input type="checkbox" className="h-4 w-4" />
                  <p className="text-[#4F4F4F] text-lg font-normal leading-7 font-Jost">Current Employer</p></div>
                <button className="flex p-2.5 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-teal bg-[var(--Teal,#378BA6)] text-white text-center text-[24px] font-semibold leading-[28px] font-jost active:bg-[#A4A4A4]">Add Experience +</button>
              </div>
            </div>
          </div> */}
          <hr />

          {/* Experience */}
          <div className="mt-8 border border-[#378BA6] rounded-xl p-4 mb-4">
            <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">EXPERIENCE</p>

            {experiences.map((experience, index) => (
              <form key={index} className="pt-8 pb-4 px-4 mt-4 border border-[#378BA6] rounded-xl grid grid-cols-1 md:grid-cols-4 gap-4">
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'> Job Title *
                  <input
                    type="text"
                    value={experience.jobTitle}
                    onChange={(e) => updateExperience(index, 'jobTitle', e.target.value)}
                    placeholder="Job Title"
                    className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                  /></label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Company Name
                  <input
                    type="text"
                    value={experience.companyName}
                    onChange={(e) => updateExperience(index, 'companyName', e.target.value)}
                    placeholder="Company Name"
                    className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                  /></label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Start Date
                  <input
                    type="text"
                    value={experience.startDate}
                    onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                    placeholder="Start Date"
                    className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                  /></label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>End Date
                  <input
                    type="text"
                    value={experience.endDate}
                    onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                    placeholder="End Date"
                    className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                  /></label>
                <button
                  type="button"
                  className=" mt-4 flex"
                  onClick={() => setExperiences(experiences.filter((_, i) => i !== index))}
                >
                  <img src={DeleteIcon} alt='Delete Icon' />
                </button>
              </form>
            ))}
            <button
              type="button"
              className="bg-[#378BA6] text-white px-4 py-2 rounded font-jost text-[16px] font-bold leading-[24px] w-full mt-4"
              onClick={addExperience}
            >
              Add Experience
            </button>
          </div>

          {/* Education */}
          <div className="mt-8 border border-[#378BA6] rounded-xl p-4 mb-4">
            <p className="w-full flex items-center rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">EDUCATION</p>

            {educations.map((education, index) => (
              <form key={index} className="pt-8 pb-4 px-4 mt-4 border border-[#378BA6] rounded-xl grid grid-cols-1 md:grid-cols-4 gap-4">
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Field of Study *
                  <input
                    type="text"
                    value={education.fieldOfStudy}
                    onChange={(e) => updateEducation(index, 'fieldOfStudy', e.target.value)}
                    placeholder="Field of Study"
                    className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                  /></label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Level of Education *
                  <input
                    type="text"
                    value={education.levelOfEducation}
                    onChange={(e) => updateEducation(index, 'levelOfEducation', e.target.value)}
                    placeholder="Level of Education"
                    className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                  /></label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Start Date *
                  <input
                    type="text"
                    value={education.startDate}
                    onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                    placeholder="Start Date"
                    className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                  /></label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>End Date *
                  <input
                    type="text"
                    value={education.endDate}
                    onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                    placeholder="End Date"
                    className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                  /></label>
                <button
                  type="button"
                  className=" mt-4 flex"
                  onClick={() => setEducations(educations.filter((_, i) => i !== index))}
                >
                  <img src={DeleteIcon} alt='Delete Icon' />
                </button>
              </form>
            ))}
            <button
              type="button"
              className="bg-[#378BA6] text-white px-4 py-2 rounded font-jost text-[16px] font-bold leading-[24px] w-full mt-4"
              onClick={addEducation}
            >
              Add Education
            </button>
          </div>

          {/* Education Details */}
          {/* <div className="mb-6">
            <h4 className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">EDUCATION DETAILS</h4>
            <div className="">
              <div className='flex items-center justify-between'>
                <p className='text-[#4F4F4F] text-lg font-normal leading-7 font-Jost px-4 pt-4'>Degree/Diploma</p>
                <button><img className='mr-4 bg-[#C3DCE4] p-1 rounded-md text-white' src={DeleteIcon} alt='DeleteIcon' /></button>
              </div>

              <form className="px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-4">

                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Field of Study *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Field of Study" />
                </label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Level of Education *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Level of Education" />
                </label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Start Date *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="date" placeholder="Start Date" />
                </label>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>End Date *
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="date" placeholder="End Date" />
                </label>
              </form>
              <div className="py-2 px-4 flex items-center justify-between space-x-2">
                <div className='flex items-center space-x-2'><input type="checkbox" className="h-4 w-4" />
                  <p className="text-[#4F4F4F] text-lg font-normal leading-7 font-Jost">Current Education</p></div>
                <button className="flex p-2.5 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-teal bg-[var(--Teal,#378BA6)] text-white text-center text-[24px] font-semibold leading-[28px] font-jost active:bg-[#A4A4A4]">Add Education +</button>
              </div>
            </div>
          </div> */}

          <hr />

          {/* Other Details */}
          <div className="mt-8 border border-[#378BA6] rounded-xl p-4 mb-4">
            <h4 className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">OTHER DETAILS</h4>
            <form className="px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className='mb-8 w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Current Salary *
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Current Salary" />
              </label>
              <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Expected Salary *
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Expected Salary " />
              </label>
              <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Reason for change*
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Reason for change" />
              </label>
              <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Notice Period*
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Notice Period" />
              </label>
              <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Availability for Interview*
                <div className='flex flex-row space-x-2'>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="date" placeholder="Date" />
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="time" placeholder="12:00" />
                </div>
              </label>
            </form>
          </div>

          <hr />

          {/* Documents */}
          <div className="mt-8 border border-[#378BA6] rounded-xl p-4 mb-4">
            <h4 className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">DOCUMENTS</h4>
            <form className="px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Resume/CV *
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="file" placeholder="Resume/CV" />
              </label>
              <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Upload Website Link if Applicable
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Notice Period" />
              </label>
              <textarea className=" p-2 mt-4 w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Remarks"></textarea>
            </form>

          </div>

          <hr />

          {/* Footer */}
          <div className="mt-6 px-4 flex justify-between items-center">
            <button className="flex p-2 px-5 h-14 justify-center items-center gap-2 text-center text-[20px] text-[var(--dark-grey,#4F4F4F)] border border-[#A4A4A4] font-bold leading-[36px] rounded-lg  bg-white font-jost">Cancel</button>
            <button className="flex p-2 px-5 justify-center items-center gap-2 self-stretch rounded-lg bg-teal bg-[var(--Teal,#378BA6)] text-white text-center text-[24px] font-semibold leading-[28px] font-jost">Save</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CandidateForm;
