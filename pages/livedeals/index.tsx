import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const LiveDeals = () => {
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
                                {/* heading */}
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
                            {/* Table */}
                            <div className="flex">
                                <div className=' flex-7'>
                                    {/* laoding new pages */}
                                    {/* loading */}
                                    <div>
                                        <div className="flex justify-end">
                                            <span>Constantly adding new deals</span>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/livedeals/loading.png")}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* target */}
                                    <div className='flex flex-col'>
                                        <div className='flex'>
                                            {/* image */}
                                            <div className='relative flex justify-center items-center'>
                                                <Image
                                                    src={require("../../assets/livedeals/default.png")}
                                                />
                                            </div>
                                            {/* product tracker */}
                                            <div>
                                                <span>Target</span>
                                            </div>                                            
                                            {/* product info */}
                                            <div>
                                                <p>Just in case anyone was looking for this and hasn’t found it, the 25th anniversary ultra pro binder is available shipped and sold by Amazon</p>
                                            </div>
                                            {/*  time*/}
                                            <div>
                                                <span>30 seconds ago</span>
                                            </div>
                                            {/* status */}
                                            <div>
                                                <span>
                                                    PREORDER
                                                </span>
                                            </div>
                                            {/* button */}
                                            <div className='flex flex-col'>
                                                <button className='border flex font-jost text-white bg-blue-primary text-base font-medium rounded-md px-12 py-2 ml-2'>
                                                    GO TO DEAL
                                                </button>
                                                <button className='border flex font-jost text-white bg-blue-primary text-base font-medium rounded-md px-12 py-2 ml-2'>
                                                    COUPON: xyz12345
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-3">
                                    <div>
                                    <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown header <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                                    <div id="dropdownInformation" className="z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1" aria-labelledby="dropdownInformationButton">
                                        <li>
                                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">Active</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">Preorder</a>
                                        </li>
                                        </ul>
                                        <ul className="py-1" aria-labelledby="dropdownInformationButton">
                                            <li>
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">Name: from A to Z</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">Name: from Z to A</a>
                                            </li>
                                        </ul>
                                        <ul className="py-1" aria-labelledby="dropdownInformationButton">
                                            <li>
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">Date added: from newest</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">Date added: from oldest</a>
                                            </li>
                                        </ul>
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

export default LiveDeals    