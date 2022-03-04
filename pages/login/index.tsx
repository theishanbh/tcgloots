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
                        <div className=' bg-grey-600 p-4 bg-opacity-70 rounded-lg'>
                            <div className='flex flex-col'>
                                {/* your email */}
                                <div className='flex flex-col'>
                                    <span className=' text-lg font-medium'>Your Email</span>
                                    <div className='mt-2'>
                                        <input 
                                            type="text"
                                            placeholder='Your Email'
                                            className='p-2 rounded-lg text-lg'
                                        />
                                    </div>
                                </div>
                                {/* your Password */}
                                <div className='flex flex-col mt-6'>
                                    <span className=' text-lg font-medium'>Your Password</span>
                                    <div className='mt-2'>
                                        <input 
                                            type="text"
                                            placeholder='Your Password'
                                            className='p-2 rounded-lg text-lg'
                                        />
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1" className='ml-2'>Remember me</label>
                                    </div>
                                    <div className='ml-auto'>Forgot Passowrd</div>
                                </div>
                                {/* button */}
                                <div className='text-center my-4'>
                                    <button className='border font-jost bg-white text-grey-primary text-base font-medium rounded-md px-12 py-2'>LOG IN</button>
                                </div>
                                
                                <div>
                                    <span>
                                        Don&apos;t have an account? Register
                                    </span>
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