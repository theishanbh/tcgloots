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
                <div className='bg-grey-500 p-1'>
                    <div className='flex'>
                        {/* left */}
                        <div className='flex flex-col flex-4'>
                            {/* first box */}
                            <div className='p-1'>
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
                                <div className='p-1'>
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
                                <div className='flex-1 p-1'>
                                    <div className='flex flex-col bg-white p-4'>
                                        <div className="flex">
                                            <div>
                                                <Image
                                                    src={require("../../assets/settings/notification.png")}
                                                />
                                            </div>
                                            <div className="flex flex-col ml-2">
                                                <h1 className=' text-xl font-medium'>Product Tracker Notifications</h1>
                                                <p className=' text-base'>Receive alerts usiong the follwing methods:</p>
                                                
                                                <div className="flex">
                                                    <div className="h-4 w-4 border"/>
                                                    <span className=' leading-none pl-2 text-lg'>Email notifications</span>
                                                </div>
                                                <div className="flex flex-col pt-1">
                                                    <div className='flex'>
                                                        <div className="h-4 w-4 border"/>
                                                        <span className=' leading-none pl-2'>Browser notifications</span>
                                                    </div>
                                                    

                                                    {/* browser notifications */}
                                                    <div className="flex ml-4 pt-1">
                                                        <div className="h-4 w-4 border"/>
                                                        <span className=' text-sm leading-none pl-2'>Audible alerts</span>
                                                        <div className='relative px-2'>
                                                            <Image
                                                                src={require("../../assets/settings/sound.png")}
                                                            />
                                                        </div>
                                                        <span className=' text-blue-primary'>Test Alarm</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* right section */}
                                <div className='flex-1 p-1'>
                                    <div className='flex flex-col bg-white p-4'>
                                        <div className="flex">
                                            <div>
                                                <Image
                                                    src={require("../../assets/settings/notification.png")}
                                                />
                                            </div>
                                            <div className="flex flex-col ml-2">
                                                <h1 className=' text-xl font-medium'>Product Tracker Notifications</h1>
                                                <p className=' text-base'>Receive alerts usiong the follwing methods:</p>
                                                
                                                <div className="flex">
                                                    <div className="h-4 w-4 border"/>
                                                    <span className=' leading-none pl-2 text-lg'>Email notifications</span>
                                                </div>
                                                <div className="flex flex-col pt-1">
                                                    <div className='flex'>
                                                        <div className="h-4 w-4 border"/>
                                                        <span className=' leading-none pl-2'>Browser notifications</span>
                                                    </div>
                                                    

                                                    {/* browser notifications */}
                                                    <div className="flex ml-4 pt-1">
                                                        <div className="h-4 w-4 border"/>
                                                        <span className=' text-sm leading-none pl-2'>Audible alerts</span>
                                                        <div className='relative px-2'>
                                                            <Image
                                                                src={require("../../assets/settings/sound.png")}
                                                            />
                                                        </div>
                                                        <span className=' text-blue-primary'>Test Alarm</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 flex-grow'>
                                <div className='p-4 bg-white flex '>
                                    <div className='relative'>
                                        <Image
                                            src={require("../../assets/settings/discord.svg")}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1>Discord Notifications</h1>
                                        <p>Receive instant stock & live deals notifications via Discord.</p>
                                        <div>
                                            <p>1) Download and install discord: https://discord.com/download</p>
                                            <p>2) After you have the app installed on your mobile device, tablet, or PC, click the Join button below.</p>
                                            <p>3) <b>IMPORTANT!</b>  : Setup your notifications:</p>
                                            {/*  */}
                                            <div>
                                                <p> · Unfortunately receiving alerts from specific Text channels in Discord takes a little more effort.</p>
                                                <p> ·  After joining the above text channel, visit our #notification-controls channel and follow the instructions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* button */}
                <div className='text-center '>
                    <button className='border font-jost text-white bg-yellow-primary text-base font-medium rounded-md px-12 py-2 ml-2'>SAVE CHANGES</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Settings