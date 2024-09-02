import React from 'react';
import LocationIcon from '../../Images/LocationIcon.png';

const CandidateForm = () => {
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
          <div className="mb-6">
            <h4 className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">PERSONAL DETAILS</h4>
            <form className="grid grid-cols-3 gap-8 my-4">
              <div>
              <label className='w-full flex flex-col h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'> First Name *
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="First Name" />
              </label>
    </div>
              <div>
              <label className='w-full flex flex-col h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Last Name *
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Last Name" />
              </label>
    </div>
              <div>
              <label className='w-full flex flex-col h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Current Location *
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
              <label className='w-full flex flex-col h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Email ID *
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Email ID" />
              </label>
    </div>
              <div>
              <label className='w-full flex flex-col h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Contact Number *
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Contact Number" />
              </label>
    </div>
              <div>
              <label className='w-full flex flex-col  h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Job Title *
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Job Title" />
              </label>
    </div>              
            </form>
          </div>

          {/* Experience Details */}
          <div className="mb-6">
            <h4 className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">EXPERIENCE DETAILS</h4>
            <div className="space-y-4">
              <form className="grid grid-cols-2 gap-4">
              <label>Job Title *
                <input className="border p-2 rounded" type="text" placeholder="Job Title" />
              </label>
              <label>Company Name *
                <input className="border p-2 rounded" type="text" placeholder="Company Name" />
              </label>
              <label>Start Date *
                <input className="border p-2 rounded" type="date" placeholder="Start Date" />
              </label>
              <label>End Date *
                <input className="border p-2 rounded" type="date" placeholder="End Date" />
              </label>
              </form>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4" />
                <p className="text-sm text-gray-700">Current Employer</p>
              </div>
              <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">Add Experience +</button>
            </div>
          </div>

          {/* Education Details */}
          <div className="mb-6">
            <h4 className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">EDUCATION DETAILS</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="border p-2 rounded" type="text" placeholder="Degree/Diploma" />
                <input className="border p-2 rounded" type="text" placeholder="Field of Study" />
                <input className="border p-2 rounded" type="text" placeholder="Level of Education" />
                <input className="border p-2 rounded" type="text" placeholder="Start Date" />
                <input className="border p-2 rounded" type="text" placeholder="End Date" />
              </div>
              <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">Add Education +</button>
            </div>
          </div>

          {/* Other Details */}
          <div className="mb-6">
            <h4 className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">OTHER DETAILS</h4>
            <div className="grid grid-cols-2 gap-4">
              <input className="border p-2 rounded" type="text" placeholder="Current Salary" />
              <input className="border p-2 rounded" type="text" placeholder="Expected Salary" />
              <input className="border p-2 rounded" type="text" placeholder="Reason for change" />
              <input className="border p-2 rounded" type="text" placeholder="Notice Period" />
              <input className="border p-2 rounded" type="text" placeholder="Availability for Interview" />
            </div>
          </div>

          {/* Documents */}
          <div className="mb-6">
            <h4 className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">DOCUMENTS</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm text-gray-600">Resume/CV</label>
                <input className="border p-2 rounded w-full" type="file" />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600">Upload Website Link if Applicable</label>
                <input className="border p-2 rounded w-full" type="text" placeholder="Upload Website Link" />
              </div>
            </div>
            <textarea className="border p-2 rounded w-full mt-4" placeholder="Remarks"></textarea>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-between items-center">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Cancel</button>
            <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">Save</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CandidateForm;
