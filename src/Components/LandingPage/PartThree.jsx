import React from 'react'

import Phonecall from '../../Images/PhoneCall.png'
import Email from '../../Images/Email.png'
import MapPin from '../../Images/Map Pin.png'
import Footer from '../Footer/Footer'
function PartThree() {
    return (
        <div className='min-h-screen bg-[#EAF1F3] '>
            <div className='w-[95%] h-[665px] bg-white m-auto p-[60px_60px] gap-[10px] rounded-[16px] flex flex-col mt-20 mb-10'>
                <div className='w-[95%]'>
                    <h1 className='font-jost text-4xl font-semibold leading-[34.12px] text-left mb-6'>
                        CONTACTS US
                    </h1>
                </div>
                <div className='w-[95%] h-[477px] gap-[119px] flex flex-row'>
                    <div className='w-[50%] flex flex-col gap-4'>
                        <h1 className='font-jost text-[18px] font-normal leading-[28px] text-left mb-4 text-[#848484]'>
                            We're here to assist and support you. If you have any questions, feedback, or need assistance, please don't hesitate to get in touch. We value your thoughts and inquiries.</h1>
                        <div className='flex flex-row gap-10'>
                            <img src={MapPin} alt="phone call"></img>
                            <p className='text-[#848484]'>2715 Ash Dr. San Jose, South <br></br>Dakota 83475</p>
                        </div>
                        <div className='w-[272px] h-0 border-t-[1px] border-solid border-[#E6E6E6]'></div>
                        <div className='flex flex-row gap-10'>
                            <img src={Email} alt="phone call"></img>
                            <p className='text-[#848484]'>Proxy@gmail.com <br></br>Text@gmail.com</p>
                        </div>
                        <div className='w-[272px] h-0 border-t-[1px] border-solid border-[#E6E6E6]'></div>
                        <div className='flex flex-row gap-10'>
                            <img src={Phonecall} alt="phone call"></img>
                            <p className='text-[#848484]'>+91 9999999999 <br></br>(162)-787-9090</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className=' w-[457px]  h-[477px]  pt-[32px]  p-8 gap-[32px]  rounded-[8px] border-[1px] border-solid border-[#378BA6] bg-white flexflex-col'>
                        <p className='font-jost text-[24px] font-semibold leading-[28px] text-left mb-4'>Contact US</p>
                        <form className='flex flex-col gap-[16px]'>
                            {/* Name Field */}
                            <label htmlFor='name' className='text-left'>
                                <span className='block font-jost text-[16px] font-semibold leading-[24px] text-[#378BA6]'>Name</span>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    className='w-full p-2 border border-[#E6E6E6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#378BA6]'
                                    placeholder='Your Name'
                                />
                            </label>

                            {/* Email Field */}
                            <label htmlFor='email' className='text-left'>
                                <span className='block font-jost text-[16px] font-semibold leading-[24px] text-[#378BA6]'>Email</span>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    className='w-full p-2 border border-[#E6E6E6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#378BA6]'
                                    placeholder='Your Email'
                                />
                            </label>

                            {/* Message Field */}
                            <label htmlFor='message' className='text-left'>
                                <span className='block font-jost text-[16px] font-semibold leading-[24px] text-[#378BA6]'>Message</span>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='4'
                                    className='w-full p-2 border border-[#E6E6E6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#378BA6]'
                                    placeholder='Your Message'
                                ></textarea>
                            </label>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                className='w-full py-2 bg-[#378BA6] text-white rounded-[4px] hover:bg-[#2c6f8c] transition-colors duration-300 font-[600]'>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PartThree
