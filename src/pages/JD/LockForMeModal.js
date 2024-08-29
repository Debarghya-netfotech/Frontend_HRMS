import React, { useState } from 'react';

function LockForMeModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleConfirm = () => {
    if (isChecked) {
      alert("Job Description Locked!");
      setIsOpen(false);
    } else {
      alert("Please accept the terms to proceed.");
    }
  };

  // const handleCancel = () => {
  //   setIsOpen(false);
  // };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex p-1 px-4 mb-5 justify-between items-center self-stretch rounded-lg bg-[#378BA6]/30 text-[#4F4F4F] text-center font-jost text-2xl font-semibold leading-9">LOCK FOR ME</div>
            <p className="flex w-auto flex-col justify-center flex-1 text-[#4F4F4F] font-jost text-xl font-normal leading-[28px] text-wrap">Please confirm if you want to lock this Job Description</p>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <span className="text-[#4F4F4F] ml-2 mt-6 font-jost text-base font-light  leading-[20px]">I have read and accept the terms of the Job Description.</span>
              </label>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="flex p-2 px-3 justify-center items-center gap-2 flex-1 rounded-lg border border-[#A4A4A4] bg-white text-[#4F4F4F] text-center font-jost text-base font-bold leading-[36px]"
              >
                <a href='/JDList'>Cancel</a>
              </button>
              
              <button
                onClick={handleConfirm}
                className="flex p-2 px-3 justify-center items-center gap-2 flex-1 self-stretch rounded-lg bg-[#378BA6] text-white text-center font-jost text-2xl font-semibold leading-[28px]"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LockForMeModal;
