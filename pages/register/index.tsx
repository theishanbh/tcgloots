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
                        <div className=' flex bg-grey-600 bg-opacity-70 rounded-r-xl shadow-2xl'>
                            <div className='flex-4 bg-blue-primary rounded-l-md'>
                                <Image
                                    src={require("../../assets/register/register.png")}
                                />
                            </div>
                            <div className=' flex-5 p-6 rounded-r-md'>
                                <div className='flex flex-col'>
                                    {/* your email */}
                                    <div className='flex flex-col'>
                                        <span className=' text-lg font-medium'>Email Address</span>
                                        <div className='mt-2'>
                                            <input 
                                                type="text"
                                                placeholder='Email Address'
                                                className='p-2 rounded-lg text-lg'
                                            />
                                        </div>
                                    </div>
                                    {/* username */}
                                    <div className='flex flex-col'>
                                        <span className=' text-lg font-medium'>Username</span>
                                        <div className='mt-2'>
                                            <input 
                                                type="text"
                                                placeholder='Username'
                                                className='p-2 rounded-lg text-lg'
                                            />
                                        </div>
                                    </div>
                                    {/* Password */}
                                    <div className='flex flex-col'>
                                        <span className=' text-lg font-medium'>Password</span>
                                        <div className='mt-2'>
                                            <input 
                                                type="password"
                                                placeholder='Password'
                                                className='p-2 rounded-lg text-lg'
                                            />
                                        </div>
                                    </div>
                                    {/* declare  */}
                                    <div className='flex mt-5 items-center'>
                                        <input type="checkbox" name="" id="" className='' />
                                        <div className='flex flex-col ml-3'>
                                            <span>I declare that I have read and accept:</span>
                                            <span>Conditions of the server and to Privacy Policy.</span>
                                        </div>
                                    </div>
                                    {/* or */}
                                    <div className='flex justify-center items-center'>
                                        <div className='flex-1 h-px bg-black'></div>
                                        <div className='px-3'>OR</div>
                                        <div className='flex-1 h-px bg-black'></div>
                                    </div>
                                    {/* icons facebook and discord */}
                                    <div className='flex justify-center items-center'>
                                        <div className='p-2 rounded-full border-black border h-16 w-16 flex items-center justify-center'>
                                            <Image
                                                src={require("../../assets/register/facebook.svg")}
                                            />
                                        </div>
                                        <div className='p-2 rounded-full border-black border h-16 w-16 flex items-center justify-center ml-4'>
                                            <Image
                                                src={require("../../assets/register/google.svg")}
                                            />
                                        </div>
                                    </div>
                                    {/* button */}
                                    <div className='text-right'>
                                        <button className='border font-jost text-white bg-yellow-primary text-base font-medium rounded-md px-12 py-2'>REGISTER</button>
                                    </div>
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