import React from 'react'
import Sidebar from '../../global/Sidebar'
// import JobFilters from '../JD/JobFilters'
import ExportIcon from '../../../Images/ExportIcon.png'
import Chat from '../../../Images/ChatIcon.png'
function FinanceList() {

  return (
    <div className='max-h-screen flex flex-row gap-0'>
      <div className='max-[30%]'>
        <Sidebar />
      </div>
      <div className=' w-[100%] bg-[#EAF1F4] flex flex-col p-5 gap-33 flex-1'>
        <div className='flex flex-col w-auto flex-wrap justify-center items-start gap-1 p-2.5 self-stretch bg-[#FBEFD0] mb-[20px] '>
          <div className='flex justify-between items-center self-stretch md:items-center mb-4  m-8 flex-wrap'>
            <div className='flex flex-col w-[50%]'>
              <h1 className='overflow-hidden text-gray-600 truncate whitespace-nowrap text-2xl font-medium leading-7'>Samule </h1>
              <h1 className='overflow-hidden text-[#378BA6] truncate whitespace-nowrap text-base font-medium leading-5 md: mb-4 '> ID : 67890987</h1>
            </div>
            <div className='flex p-2 px-3 gap-3 justify-center items-center rounded bg-white'>
              <h1 className='text-teal-600 text-center text-4xl font-medium leading-7'>10 </h1>
              <div className='w-px h-7 bg-gray-500'></div>
              <h1 className='text-dark-grey font-jost text-base font-normal leading-custom tracking-custom text-[#4F4F4F]'>Locked JD’s</h1>
            </div>
            <div className='flex p-2 px-3 gap-3 justify-center items-center rounded bg-white'>
              <h1 className='text-teal-600 text-center text-4xl font-medium leading-7'>10 </h1>
              <div className='w-px h-7 bg-gray-500'></div>
              <h1 className='text-dark-grey font-jost text-base font-normal leading-custom tracking-custom text-[#4F4F4F]'>Successful JD’s</h1>
            </div>
            <div className='flex p-2 px-3 gap-3 justify-center items-center rounded bg-white'>
              <h1 className='text-teal-600 text-center text-4xl font-medium leading-7'>10 </h1>
              <div className='w-px h-7 bg-gray-500'></div>
              <h1 className='text-dark-grey font-jost text-base font-normal leading-custom tracking-custom text-[#4F4F4F]'>Total Incentives</h1>
            </div>
          </div>
        </div>
        {/* <div><JobFilters /></div> */}
        <div className='h-[52px] self-stretch rounded-[8px] bg-[rgba(55,139,166,0.30)] flex justify-between items-center p-8 mt-[20px] '>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>JD ID</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>CLIENT DETAILS</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>JD DETAIL</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>CANDIDATES</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>DATE</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>AMOUNT</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>STATUS</h1>
        </div>
        <div className='flex flex-col justify-center items-end gap-5 self-stretch rounded-md border border-[#9B9B9B] bg-white shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] p-4 mt-6'>
          <div className='flex justify-between items-center self-stretch flex-wrap'>
            <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>#34567643</h1>
            <div className='flex flex-row items-center'>
              <div className='flex w-[40px] h-[40px] p-[7.655px_7.832px_8.345px_8.168px] justify-center items-center rounded-[45px] bg-[#EAF1F3]'>
                <img src={ExportIcon} alt="Recutify" className='w-16 h-auto' />
              </div>
              <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>Aditya raj</h1>
            </div>
            <div className='flex flex-row items-center'>
              <div className='flex w-[40px] h-[40px] p-[7.655px_7.832px_8.345px_8.168px] justify-center items-center rounded-[45px] bg-[#EAF1F3]'>
                <img src={Chat} alt="Recutify" className='w-16 h-auto' />
              </div>
              <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'><span className='overflow-hidden text-[#4F4F4F] truncate whitespace-nowrap font-jost text-base font-semibold leading-6 tracking-tight'> Software developer</span><br />Netfotech Solution</h1>
            </div><a href='/FinanceCandidate'>
              <div className='flex w-[86px] p-[4px_12px] justify-center items-center gap-[10px] rounded-[12px] border border-[#000] bg-white'>

                <h1>02/02</h1>
                <img src={ExportIcon} alt="Recutify" className='w-12 h-auto' />

              </div></a>
            <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>30th July’24</h1>
            <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>15000</h1>
            <a href='/FinancePayroll'>
            <div className='flex flex-col w-[86px] p-[4px_12px] justify-center items-center gap-[10px] rounded-[12px] border'>
              <button className='flex h-[26px] p-[6px_12px] justify-center items-center  bg-[#ECB015]'><h1 className='text-white text-center font-jost text-sm font-bold leading-[28px] w-full '>Closed</h1></button>
              <h1 className='text-gray-500 text-center font-sans text-base font-small leading-6 tracking-tight'>View </h1>
              {/* <img src={ExportIcon} alt="Recutify" className='w-12 h-auto' /> */}
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinanceList
