import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const TrackerPage = () => {
  return (
    <div>
        <div>
            <Navbar></Navbar>
            <div className="mx-auto max-w-7xl">
                <div className='flex'>
                    <div className='flex flex-1'>
                        <div className="flex flex-col">
                            {/* sort by */}
                            <div className='flex flex-col'>
                                {/* heading */}
                                <div className='flex justify-between'>
                                    <span>Sort By</span>
                                    <div className='relative'>
                                        <Image
                                            src={require("../../assets/trackerpage/uparrow.svg")}
                                        />
                                    </div>
                                </div>
                                {/* items */}
                                <div className='flex flex-col'>
                                    <ul>
                                        <li>Name</li>
                                        <li>Price</li>
                                        <li>Sale start time</li>
                                        <li>Added to Site</li>
                                    </ul>
                                </div>
                            </div>
                            {/* location */}
                            <div className='flex flex-col'>
                                {/* heading */}
                                <div>
                                    <span>Location</span>
                                </div>
                                {/* items */}
                                <div className='flex flex-col'>
                                    <ul className='flex flex-col'>
                                        <li className='flex'>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/flag-us.svg")}
                                                ></Image>
                                            </div>
                                            <span>United States</span>
                                        </li>
                                        <li className='flex'>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/flag-uk.svg")}
                                                ></Image>
                                            </div>
                                            <span>United Kingdom</span>
                                        </li>
                                        <li className='flex'>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/flag-ca.svg")}
                                                ></Image>
                                            </div>
                                            <span>Canada</span>
                                        </li>
                                        <li className='flex'>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/flag-ge.svg")}
                                                ></Image>
                                            </div>
                                            <span>Deutschland</span>
                                        </li>
                                        <li className='flex'>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/flag-it.svg")}
                                                ></Image>
                                            </div>
                                            <span>Italia</span>
                                        </li>
                                        <li className='flex'>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/flag-fr.svg")}
                                                ></Image>
                                            </div>
                                            <span>France</span>
                                        </li>
                                        <li className='flex'>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/flag-ja.svg")}
                                                ></Image>
                                            </div>
                                            <span>Japan</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Type */}
                            <div className='flex flex-col'>
                                {/* heading */}
                                <div>
                                    <span>Type</span>
                                </div>
                                {/* items */}
                                <div className='flex flex-col'>
                                    <ul>
                                        <li>Game</li>
                                        <li>Game + DLC</li>
                                        <li>DLC</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Free in stock alerts */}
                            <div className='flex flex-col'>
                                {/* heading */}
                                <div>
                                    <span>FREE in Stock Alerts!</span>
                                </div>
                                {/* items */}
                                <div className='flex flex-col'>
                                    <ul className='flex flex-col'>
                                        <li className='flex'>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/telegram.svg")}
                                                ></Image>
                                            </div>
                                            <span>Telegram</span>
                                        </li>
                                        <li className='flex'>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/discord.svg")}
                                                ></Image>
                                            </div>
                                            <span>Discord</span>
                                        </li>
                                        <li className='flex'>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/email.svg")}
                                                ></Image>
                                            </div>
                                            <span>Email</span>
                                        </li>
                                        <li className='flex'>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/browser.svg")}
                                                ></Image>
                                            </div>
                                            <span>Browser</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* button */}
                            <div>
                                <button className=" border bg-white flex text-black-100 font-jost text-xl rounded-md px-16 py-2">
                                    <span>Suggest a Product</span>
                                    <div className='relative'>
                                        <Image
                                            src={require("../../assets/trackerpage/uparrow.svg")}
                                        ></Image>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-5'>
                        <div className='flex-grow'>
                            {/* link url and right icons */}
                            <div className='flex justify-between'>
                                <div>
                                    <span>Home &gt; Collectibles &gt; Trading Cards &gt; Pokemon Cards</span>
                                </div>
                                <div className='flex'>
                                    {/* checking for updates */}
                                    <div className='flex'>
                                        <span>Constantly checking for updates</span>
                                        <div className='relative'>
                                            <Image
                                                src={require("../../assets/trackerpage/loading.png")}
                                            ></Image>
                                        </div>
                                    </div>
                                    {/* social icons */}
                                    <div className='flex'>
                                        <div>
                                            <Image
                                                src={require("../../assets/trackerpage/discord.svg")}
                                            ></Image>
                                        </div>
                                        <div>
                                            <Image
                                                src={require("../../assets/trackerpage/telegram.svg")}
                                            ></Image>
                                        </div>
                                        <div>
                                            <Image
                                                src={require("../../assets/trackerpage/email.svg")}
                                            ></Image>
                                        </div>
                                        <div>
                                            <Image
                                                src={require("../../assets/trackerpage/browser.svg")}
                                            ></Image>
                                        </div>
                                    </div>
                                    {/* stack or grid */}
                                    <div className='flex'>
                                        <div>
                                            <div className='relative bg-yellow-primary'>
                                                <Image
                                                    src={require("../../assets/trackerpage/stack.svg")}></Image>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='relative'>
                                                <Image
                                                    src={require("../../assets/trackerpage/grid.svg")}></Image>
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

export default TrackerPage
