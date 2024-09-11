import React, { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    joinAs: "",
    location: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-[var(--Grey-Med,#848484)] text-[20px] font-normal leading-7 flex-grow font-jost">Lets get Started !</h2>
        <h3 className="text-[var(--Dark-grey,#4F4F4F)] text-2xl mb-8 font-semibold leading-7 flex-grow font-jos">Please Signup here</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex w-[192px] h-[20px] flex-col justify-center text-[var(--Teal,#378BA6)] text-base font-medium leading-[20.8px] tracking-[0.08px] font-jost">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg focus:outline-none focus:border-[var(--Teal,#378BA6)]"
                placeholder="Text"
                required
              />
            </div>
            <div>
              <label className="flex w-[192px] h-[20px] flex-col justify-center text-[var(--Teal,#378BA6)] text-base font-medium leading-[20.8px] tracking-[0.08px] font-jost">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg focus:outline-none focus:border-[var(--Teal,#378BA6)]"
                placeholder="Text"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="flex w-[192px] h-[20px] flex-col justify-center text-[var(--Teal,#378BA6)] text-base font-medium leading-[20.8px] tracking-[0.08px] font-jost">Personal Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              placeholder="Email"
              required
            />
          </div>
          <div className="mt-4">
            <label className="flex w-[192px] h-[20px] flex-col justify-center text-[var(--Teal,#378BA6)] text-base font-medium leading-[20.8px] tracking-[0.08px] font-jost">Mobile Number *</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              placeholder="Mobile No"
              required
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="flex w-[192px] h-[20px] flex-col justify-center text-[var(--Teal,#378BA6)] text-base font-medium leading-[20.8px] tracking-[0.08px] font-jost">Join as *</label>
              <select
                name="joinAs"
                value={formData.joinAs}
                onChange={handleChange}
                className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg text-[#A4A4A4] text-base font-normal leading-[20.8px] tracking-[0.08px] font-jost"
                required
              >
                <option value="">Select</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
              </select>
            </div>
            <div>
              <label className="flex w-[192px] h-[20px] flex-col justify-center text-[var(--Teal,#378BA6)] text-base font-medium leading-[20.8px] tracking-[0.08px] font-jost">Location *</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg text-[#A4A4A4] text-base font-normal leading-[20.8px] tracking-[0.08px] font-jost"
                required
              >
                <option value="">Select</option>
                <option value="newYork">New York</option>
                <option value="losAngeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>
          </div>
          <div className="mt-3">
            <label className="flex w-[192px] h-[20px] flex-col justify-center text-[var(--Teal,#378BA6)] text-base font-medium leading-[20.8px] tracking-[0.08px] font-jost">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg mb-3 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              placeholder="********"
              required
            />
            <p className="text-[var(--Teal,#848484)] text-xs font-normal flex-1 font-poppins">
              (Hint: The password should be at least twelve characters long. To
              make it stronger, use upper and lower case letters, numbers, and
              symbols like ! " ? $ % ^ & )
            </p>
          </div>
          <div className="mt-6">
            <a
              type="submit"
              href="/otp"
              className="w-full py-3 text-white mb-4 flex h-[52px] px-[12px]  justify-center items-center gap-[8px] self-stretch rounded-[8px] bg-[var(--Teal,#378BA6)]"
            >
                <span class="text-white text-center font-jost text-[24px] font-semibold leading-[116.667%]">Submit</span>
              
            </a>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-[var(--Black-60,rgba(17,17,19,0.60))] text-center font-jost text-[18px] font-normal leading-[130%] tracking-[0.09px]">
            Existing User?{" "}
            <a href="/login" className="text-[var(--Teal,#378BA6)] font-jost text-[18px] font-normal leading-[130%] tracking-[0.09px] underline">
              LOGIN HERE
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
