import React, { useState } from 'react';
import eye from '../../Images/Eye.png';
import Google from '../../Images/Googleicon.png'
import Sidebar from '../global/Sidebar.js'

const LoginForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({
      emailOrPhone,
      password,
      rememberMe,
    });
  };

  return (
    <>
    <Sidebar/>
<div >
    <div className="max-w-sm mx-auto p-10 bg-white rounded-lg text-left shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] ">
      <h2 className="text-[var(--Dark-500,var(--Grey-Med,#848484))] font-jost text-[20px] font-normal leading-[28px] self-stretch">Welcome!</h2>
      <h3 className="text-[var(--Dark-grey,#4F4F4F)] font-jost text-[24px] font-semibold leading-[28px] self-stretch mb-8">Please Login here</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-5 text-left">
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Email/Phone Number *</label>
          <input
            type="text"
            placeholder="Email"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="flex w-full h-[40px] p-[12px]w-full p-3 border border-[var(--Teal,#378BA6)] rounded-xl focus:outline-none focus:border-[var(--Teal,#378BA6)]"
            required
          />
        </div>
        <div className="mb-5 text-left relative">
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Password *</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex w-full h-[40px] p-[12px]w-full p-3 border border-[var(--Teal,#378BA6)] rounded-xl focus:outline-none focus:border-[var(--Teal,#378BA6)]"
            required
          />
          <span className="absolute right-3 top-8 cursor-pointer"><img src={eye} alt='eye'/></span>
        </div>
        <div className="flex justify-between items-center mb-5">
          <label className=" text-[var(--Dark-grey,#4F4F4F)] font-jost text-[18px] font-normal leading-[130%] tracking-[0.09px]">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2 bg-[var(--Teal,#378BA6)]"
            />
            Remember me
          </label>
          <a href="/forgot-password" className="text-[var(--Teal,#378BA6)] font-jost text-[14px] font-normal leading-[130%] tracking-[0.07px]">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white mb-4 flex h-[52px] px-[12px]  justify-center items-center gap-[8px] self-stretch rounded-[8px] bg-[var(--Teal,#378BA6)]"
        >
            <a href="#" class="text-white text-center font-jost text-[24px] font-semibold leading-[116.667%]">
            Confirm
            </a>
        </button>
        <div className="mb-5">
          <button className="w-full py-3 flex h-[40px] p-[12px] justify-center items-center self-stretch rounded-[12px] border-[0.5px] border-[var(--Teal,#378BA6)] bg-[var(--White,#FFF)]">
            <span className="mr-2"><img src={Google} alt='Google icon'/></span><span class="text-[var(--Teal,#378BA6)] text-center font-poppins text-[16px] font-medium leading-[120%] tracking-[0.32px] opacity-70">Or Sign in with Google</span>
 
          </button>
        </div>
      </form>
      <div className="mt-5 text-center">
        <span className="text-[var(--Black-60,rgba(17,17,19,0.60))] text-center font-jost text-[18px] font-normal leading-[130%] tracking-[0.09px]">New User? </span>
        <a href="/signup" className="text-[var(--Teal,#378BA6)] font-jost text-[18px] font-normal leading-[130%] tracking-[0.09px] underline">
          SIGN UP HERE
        </a>
      </div>
    </div>
    </div>

    </> 
  );
};

export default LoginForm;
