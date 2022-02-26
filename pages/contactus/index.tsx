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
                    <div className='flex overflow-hidden items-center justify-center py-28'>
                        {/* items container */}
                        <div className=' bg-colors-grey-600 p-4 bg-opacity-70 rounded-lg'>
                            <div className='flex flex-col'>
                                {/* contact us logo and name */}
                                <div className='flex items-center'>
                                    <div className='flex items-center shadow-xl p-4 bg-colors-white rounded-lg'>
                                        <Image
                                            src={require("../../assets/contactus/email.svg")}
                                            alt='hello'
                                            className='  shadow-md p-4'
                                        />
                                    </div>
                                    <h1 className='ml-4 box-border text-4xl border-b-4 text-colors-black-200 border-colors-yellow-primary'>
                                        Contact Us
                                    </h1>
                                </div>
                                {/* your name and email */}
                                <div className='flex mt-8'>
                                    {/* your name */}
                                    <div className='flex flex-col'>
                                        <span className=' text-lg font-medium'>Your Name</span>
                                        <div className='mt-2'>
                                            <input 
                                                type="text"
                                                placeholder='Your Name'
                                                className='p-2 rounded-lg text-lg'
                                            />
                                        </div>
                                    </div>
                                    {/* your email */}
                                    <div className='flex flex-col ml-6'>
                                        <span className=' text-lg font-medium'>Your Email</span>
                                        <div className='mt-2'>
                                            <input 
                                                type="text"
                                                placeholder='Your Email'
                                                className='p-2 rounded-lg text-lg'
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
                                                className='p-2 rounded-lg text-lg w-full'
                                            >
                                                <option value="" disabled selected>Select your option</option>
                                                <option> Any</option>
                                                <option> Deals</option>
                                                <option> Pizza</option>
                                                <option> Sides</option>
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
                                <div className='text-right'>
                                    <button className='border font-jost text-colors-white bg-colors-yellow-primary text-base font-medium rounded-md px-12 py-2'>SEND</button>
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