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
                <div className="mx-auto max-w-5xl font-jost ">
                    <div className='flex overflow-hidden items-center justify-center py-16 px-2'>
                        {/* items container */}
                        <div className=' flex bg-grey-600 bg-opacity-70 rounded-r-xl shadow-full'>
                            {/* left block */}
                            <div className='relative flex items-center justify-center flex-4 shadow-full bg-blue-primary rounded-l-md'>
                                <div className="absolute h-full w-full">
                                    <Image
                                        src={require("../../assets/register/background.png")}
                                        layout="fill"
                                    ></Image>
                                </div>
                                <div className='relative'>
                                    <Image
                                        src={require("../../assets/register/register.png")}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            {/* right block */}
                            <div className=' flex-5 p-6 rounded-r-md bg-white-100 shadow-full'>
                                <div className='flex flex-col'>
                                    {/* your email */}
                                    <div className='flex flex-col'>
                                        <span className=' text-lg font-medium'>EMAIL</span>
                                        <div className='mt-2'>
                                            <input 
                                                type="text"
                                                placeholder='Email address'
                                                className='p-2 rounded-lg text-lg border border-grey-600 w-2/3'
                                            />
                                        </div>
                                    </div>
                                    {/* username */}
                                    <div className='flex flex-col pt-8'>
                                        <span className=' text-lg font-medium'>Username</span>
                                        <div className='mt-2'>
                                            <input 
                                                type="text"
                                                placeholder='Username'
                                                className='p-2 rounded-lg text-lg border border-grey-600 w-2/3'
                                            />
                                        </div>
                                    </div>
                                    {/* Password */}
                                    <div className='flex flex-col pt-8'>
                                        <span className=' text-lg font-medium'>Password</span>
                                        <div className='mt-2'>
                                            <input 
                                                type="password"
                                                placeholder='Password'
                                                className='p-2 rounded-lg text-lg border border-grey-600 w-2/3'
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
                                    <div className='flex justify-center items-center py-2'>
                                        <div className='relative p-2 rounded-full border-grey-200 border h-12 w-12 flex items-center justify-center'>
                                            <Image
                                                src={require("../../assets/register/facebook.svg")}
                                            />
                                        </div>
                                        <div className='relative p-2 rounded-full border-grey-200 border h-12 w-12 flex items-center justify-center ml-4'>
                                            <Image
                                                src={require("../../assets/register/google.svg")}
                                            />
                                        </div>
                                    </div>
                                    {/* button */}
                                    <div className='text-right'>
                                        <button className='border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-12 py-2'>REGISTER</button>
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