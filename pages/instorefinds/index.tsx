import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

const index = () => {
  return (
    <div>
        <div>
            <Navbar></Navbar>
            <div className="mx-auto max-w-7xl">
                <div className='flex'>
                    {/* left section */}
                    <div className="flex-4">
                        <div>
                            {/* info */}
                            <div className='relative'>
                                {/* background image */}
                                <div className="absolute">
                                    <Image
                                        src={require("../../assets/instorefinds/background2.png")}
                                        layout="fill"
                                    />
                                </div>
                                <div className=' bg-opacity-0 '>
                                    <p>
                                        Every week we randomly reward contributors that help the community!
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Calendar></Calendar>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <span>Submitted Today(xx)</span>
                                    <div>
                                        <Image
                                            src={require("../../assets/instorefinds/search.svg")}
                                        ></Image>
                                    </div>
                                </div>
                                {/* submitted today */}
                                <div>
                                    <ul>
                                        <li>Seattle, WA (2)</li>
                                        <li>Phoenix, AZ</li>
                                        <li>Seattle, WA</li>
                                        <li>Phoenix, AZ</li>
                                        <li>Seattle, WA</li>
                                        <li>Phoenix, AZ</li>
                                    </ul>
                                </div>
                                {/* sort by */}
                                <div>
                                    <div className='flex justify-between'>
                                        <span>Sort by</span>
                                        <div>
                                            <Image
                                                src={require("../../assets/instorefinds/uparrow.svg")}
                                            ></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* middle section */}
                    <div className="flex-7">
                        <div>
                            <div className='flex'>
                                <div className='flex flex-col'>
                                    <h1>Instore Finds</h1>
                                    <span>Feb 16, 2022</span>
                                </div>
                                <div>
                                    <button className="flex border bg-blue-primary text-white font-jost text-xl rounded-md px-16 py-2">
                                        <div className="relative">
                                            <Image
                                                src={require("../../assets/instorefinds/add.svg")}
                                            ></Image>
                                        </div>
                                        <span>
                                            Post
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <div className='flex flex-col justify-between items-center'>
                                        <div className='flex'>
                                            <div className='flex-3'>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/homepage/instoretracker/person.png" alt="" className='h-10 w-10 object-cover rounded-full'/>
                                                    </div>
                                                    <span>User12345678</span>
                                                    <span>3 h ago</span>
                                                </div>
                                                <div className='flex flex-1 justify-around'>
                                                    <span className='text-lg border rounded-md py-1 px-3'>Seattle, WA</span>
                                                    <span className='text-lg border rounded-md py-1 px-3'>Target</span>
                                                    <span className='text-lg border rounded-md py-1 px-3'>12:00 AM EST</span>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className='relative'>
                                                    <Image
                                                        src={require("../../assets/instorefinds/default.png")}
                                                    ></Image>
                                                </div>
                                            </div>
                                        </div>                                            
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col justify-between items-center'>
                                        <div className='flex'>
                                            <div className='flex-3'>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/homepage/instoretracker/person.png" alt="" className='h-10 w-10 object-cover rounded-full'/>
                                                    </div>
                                                    <span>User12345678</span>
                                                    <span>3 h ago</span>
                                                </div>
                                                <div className='flex flex-1 justify-around'>
                                                    <span className='text-lg border rounded-md py-1 px-3'>Seattle, WA</span>
                                                    <span className='text-lg border rounded-md py-1 px-3'>Target</span>
                                                    <span className='text-lg border rounded-md py-1 px-3'>12:00 AM EST</span>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className='relative'>
                                                    <Image
                                                        src={require("../../assets/instorefinds/default.png")}
                                                    ></Image>
                                                </div>
                                            </div>
                                        </div>                                            
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col justify-between items-center'>
                                        <div className='flex'>
                                            <div className='flex-3'>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/homepage/instoretracker/person.png" alt="" className='h-10 w-10 object-cover rounded-full'/>
                                                    </div>
                                                    <span>User12345678</span>
                                                    <span>3 h ago</span>
                                                </div>
                                                <div className='flex flex-1 justify-around'>
                                                    <span className='text-lg border rounded-md py-1 px-3'>Seattle, WA</span>
                                                    <span className='text-lg border rounded-md py-1 px-3'>Target</span>
                                                    <span className='text-lg border rounded-md py-1 px-3'>12:00 AM EST</span>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className='relative'>
                                                    <Image
                                                        src={require("../../assets/instorefinds/default.png")}
                                                    ></Image>
                                                </div>
                                            </div>
                                        </div>                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-4">
                        <div>
                            <div className='flex'>
                                <div className='flex-3'>
                                    <div className='flex flex-col'>
                                        {/* user info */}
                                        <div className='flex'>
                                            <div>
                                                <img src="./assets/homepage/instoretracker/person.png" alt="" className='h-10 w-10 object-cover rounded-full'/>
                                            </div>
                                            <span>User12345678</span>
                                            <span>3 h ago</span>
                                        </div>
                                        {/* image */}
                                        <div>
                                            <div className="relative h-56 w-56">
                                                <Image
                                                    src={require("../../assets/instorefinds/default.png")}
                                                    layout="fill"
                                                ></Image>
                                            </div>
                                        </div>
                                        {/* info about other stuff */}
                                        <div className='flex flex-col'>
                                            <div>
                                                <span>Location : </span>
                                                <span> Seattle, WA</span>
                                            </div>
                                            <div>
                                                <span>Store : </span>
                                                <span> Gamestop</span>
                                            </div>
                                            <div>
                                                <span>Time : </span>
                                                <span> 12:00 AM EST</span>
                                            </div>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
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


export default index