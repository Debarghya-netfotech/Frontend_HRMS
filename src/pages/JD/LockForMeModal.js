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

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-lg font-semibold mb-4 text-gray-700">LOCK FOR ME</div>
            <p className="text-gray-600 mb-4">Please confirm if you want to lock this Job Description</p>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <span className="ml-2 text-gray-600">I have read and accept the terms of the Job Description.</span>
              </label>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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
