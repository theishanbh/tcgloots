import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const ContactUs = () => {
  return (
    <div>
        <div className="">
            <Navbar></Navbar>
            <div className="bg-[url('/assets/contactus/background.png')] bg-center bg-cover">
                <div className="mx-auto max-w-7xl font-jost ">
                    <div className='flex overflow-hidden items-center justify-center py-8 sm:py-20'>
                        {/* items container */}
                        <div className=' bg-slate-500 px-8 py-4 bg-opacity-80 rounded-lg shadow-full w-full max-w-xl mx-4 sm:mx-auto'>
                            <div className='flex flex-col'>
                                {/* contact us logo and name */}
                                <div className='flex items-center'>
                                    <div className='flex items-center shadow-full p-4 bg-white rounded-lg'>
                                        <Image
                                            src={require("../../assets/contactus/email.svg")}
                                            alt='hello'
                                            className='shadow-full p-4'
                                        />
                                    </div>
                                    <h1 className='ml-4 box-border text-8xl border-b-4 text-black-200 border-yellow-300'>
                                        Contact Us
                                    </h1>
                                </div>
                                {/* your name and email */}
                                <div className='flex flex-col sm:flex-row mt-8 pt-8'>
                                    {/* your name */}
                                    <div className='flex flex-col w-full sm:w-1/2'>
                                        <span className=' text-lg font-medium'>Your Name</span>
                                        <div className='mt-2'>
                                            <input 
                                                type="text"
                                                placeholder='Your Name'
                                                className='p-2 rounded-lg text-lg w-full'
                                            />
                                        </div>
                                    </div>
                                    {/* your email */}
                                    <div className='flex flex-col mt-4 sm:mt-0 sm:ml-6 w-full sm:w-1/2'>
                                        <span className=' text-lg font-medium'>Email Address</span>
                                        <div className='mt-2 '>
                                            <input 
                                                type="text"
                                                placeholder='Your Email'
                                                className='p-2 rounded-lg text-lg w-full'
                                            />
                                        </div>
                                    </div>

                                </div>
                                {/* Subject dropdown menu */}
                                <div className='flex flex-col mt-6'>
                                    <span className=' text-lg font-medium'>Subject</span>
                                    <div className='mt-2 w-full'>
                                        <form action="">
                                            <select 
                                                placeholder="What's your message about"
                                                className='p-2 rounded-lg text-lg w-full invalid:text-grey-400'
                                                required
                                            >
                                                {/* <option value="" disabled selected>What's your message about?</option> */}
                                                <option value="" disabled selected> Any</option>
                                                <option value="deals"> Deals</option>
                                                <option value="pizza"> Pizza</option>
                                                <option value="sides"> Sides</option>
                                            </select>
                                        </form>
                                        
                                    </div>
                                </div>
                                {/* message */}
                                <div className='flex flex-col mt-6'>
                                    <span className=' text-lg font-medium'>Message</span>
                                    <div className='mt-2'>
                                        <textarea 
                                            placeholder='Your Message'
                                            className='p-2 rounded-lg text-lg resize-none w-full'
                                        />
                                    </div>
                                </div>
                                {/* button */}
                                <div className='text-center sm:text-right py-2'>
                                    <button className='font-jost text-black-100 bg-yellow-200 text-base font-medium rounded-md px-12 py-2'>SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    </div>
  )
}

export default ContactUs