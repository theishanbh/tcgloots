import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Settings = () => {
  return (
    <div>
        <div>
            <Navbar></Navbar>
            <div className="mx-auto max-w-7xl font-jost ">
                {/* heading */}
                <div className="">
                    <h1 className='text-4xl font-medium py-8'>Settings</h1>
                </div>
                {/* settings */}
                <div className='p-4 bg-grey-500'>
                    <div className='flex'>
                        {/* left */}
                        <div className='flex flex-col flex-4'>
                            {/* first box */}
                            <div className='py-4'>
                                <div className=' bg-white p-4'>
                                    {/* container */}
                                    <div className='flex flex-col'>
                                        {/* username */}
                                        <div className='flex justify-between items-center'>
                                            <div className='flex flex-col'>
                                                <h2 className=' text-xl'>Username</h2>
                                                <span className=' text-lg font-medium'>Username1234</span>
                                            </div>
                                            <div className='flex relative'>
                                                <Image
                                                    src={require("../../assets/settings/gift.png")}
                                                />
                                            </div>
                                        </div>
                                        {/* email */}
                                        <div className='flex flex-col py-12'>
                                            <div className='flex text-xl'>
                                                <span className=''>Email</span>
                                                <span className=' pl-12'>Verify your Email</span>
                                            </div>
                                            <div>
                                                <span className='text-lg'>loremipsum@gmail.com</span>
                                            </div>
                                        </div>
                                        {/* password */}
                                        <div className='flex flex-col'>
                                            <span>Password</span>
                                            <span className=''>*****</span>
                                        </div>
                                        {/* password reset button */}
                                        <div className=''>
                                            <button className='border font-jost text-grey-primary text-base font-medium rounded-md px-12 py-2'>LOGIN</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                            {/* second box */}
                            <div>
                                <div className=''>
                                    <div className='flex flex-col bg-white p-4'>
                                        <div className='flex items-center'>
                                            {/* image question mark */}
                                            <div className='relative flex items-center justify-center'>
                                                <Image
                                                    src={require("../../assets/settings/questionmark.png")}
                                                />
                                            </div>
                                            <span className=' text-blue-primary ml-2'>Other Preferences</span>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex pl-8 py-3'>
                                                <div className='h-6 w-6 border flex-shrink-0 rounded-sm'/>
                                                <p className=' text-lg leading-none pl-2'>Please keep me updated by email on any giveaways & tcgloots news.</p>
                                            </div>
                                            <div className='flex pl-8 py-3'>
                                            <div className='h-6 w-6 border flex-shrink-0 rounded-sm'/>
                                                <p className=' text-lg leading-none pl-2'>Please keep me updated by email onfuture tracked items.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        {/* right */}
                        <div className='flex flex-col flex-7'>
                            <div className='flex'>
                                {/* left section */}
                                <div></div>
                                {/* right section */}
                                <div></div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                {/* button */}
            </div>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Settings