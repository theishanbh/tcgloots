import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Alerts = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <div className="mx-auto max-w-7xl">
                <div className='flex'>
                    <div className="flex-7">
                        <div>
                            {/* Alerts Notificatiosn */}
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between'>
                                    <div className='relative flex items-center justify-center'>
                                        <Image
                                            src={require("../../assets/alerts/notifications.svg")}
                                        ></Image>
                                    </div>
                                    <h1>My Alerts</h1>
                                    <div className='flex items-center'>
                                        <span>We also send immmediate stock alerts via: </span>
                                        <span className='flex items-center'>
                                            <div className='flex items-center'>
                                                <span>Discord</span>
                                                <div className="relative flex items-center">
                                                    <Image
                                                        src={require("../../assets/alerts/discord.svg")}
                                                    ></Image>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <span>Telegram</span>
                                                <div className="relative flex items-center">
                                                    <Image
                                                        src={require("../../assets/alerts/telegram.svg")}
                                                    ></Image>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className='p-8'>
                                    <div className='border-4 rounded-xl border-yellow-primary p-4'>
                                You’ll be notified when the following products are back in stock. Manage notification preferences in Settings. Not sure if your alerts are working? Watch this Demo product to test out receiving them every minute. 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-3">
                        {/* container */}
                        <div>
                            <div>
                                <h1>Popular</h1>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <div className='py-2'>
                                        <div className='flex items-center justify-around bg-grey-primary p-2'>
                                            <div className='relative flex justify-center items-center'>
                                                <Image
                                                    src={require("../../assets/alerts/default.png")}
                                                />
                                            </div>
                                            <span>Lorem ipsum dolor sit amet</span>
                                            <div className='relative flex justify-center items-center'>
                                                <Image
                                                    src={require("../../assets/alerts/add.svg")}
                                                />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='py-2'>
                                        <div className='flex items-center justify-around bg-grey-primary p-2'>
                                            <div className='relative flex justify-center items-center'>
                                                <Image
                                                    src={require("../../assets/alerts/default.png")}
                                                />
                                            </div>
                                            <span>Lorem ipsum dolor sit amet</span>
                                            <div className='relative flex justify-center items-center'>
                                                <Image
                                                    src={require("../../assets/alerts/add.svg")}
                                                />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='py-2'>
                                        <div className='flex items-center justify-around bg-grey-primary p-2'>
                                            <div className='relative flex justify-center items-center'>
                                                <Image
                                                    src={require("../../assets/alerts/default.png")}
                                                />
                                            </div>
                                            <span>Lorem ipsum dolor sit amet</span>
                                            <div className='relative flex justify-center items-center'>
                                                <Image
                                                    src={require("../../assets/alerts/add.svg")}
                                                />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='py-2'>
                                        <div className='flex items-center justify-around bg-grey-primary p-2'>
                                            <div className='relative flex justify-center items-center'>
                                                <Image
                                                    src={require("../../assets/alerts/default.png")}
                                                />
                                            </div>
                                            <span>Lorem ipsum dolor sit amet</span>
                                            <div className='relative flex justify-center items-center'>
                                                <Image
                                                    src={require("../../assets/alerts/add.svg")}
                                                />
                                            </div>
                                        </div>
                                        
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

export default Alerts