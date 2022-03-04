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
                    <div className='flex flex-col flex-5'>
                        <div className='flex'>
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
                        {/* stacks */}
                        <div>
                        <div className="hidden">
                                <div>
                                <table className=' table-auto w-full'>
                                    <thead>
                                        <tr>
                                            <th> </th>
                                            <th>Name</th>
                                            <th>Store</th>
                                            <th>Status</th>
                                            <th>Last Price</th>
                                            <th>Last Stock</th>
                                            <th>Track</th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                            {/* body row 1 */}
                                            <tr>
                                                <td></td>
                                                <td>Category Name1</td>
                                            </tr>
                                            {/* body row 2 */}
                                            <tr>
                                                <td></td>
                                                <td>Celebrations Collection Lance’s Charizard V</td>
                                                <td>Gamestop</td>
                                                <td>Out of Stock</td>
                                                <td>$29.99</td>
                                                <td>Jan 06  - 4:11 PM</td>
                                                <td>
                                                <div className='text-center my-4'>
                                                    <button className='border font-jost bg-white text-grey-primary text-base font-medium rounded-md px-12 py-2'>ADD</button>
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Celebrations Collection Lance’s Charizard V</td>
                                                <td>Gamestop</td>
                                                <td>Out of Stock</td>
                                                <td>$29.99</td>
                                                <td>Jan 06  - 4:11 PM</td>
                                                <td>
                                                <div className='text-center my-4'>
                                                    <button className='border font-jost bg-white text-grey-primary text-base font-medium rounded-md px-12 py-2'>ADD</button>
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Celebrations Collection Lance’s Charizard V</td>
                                                <td>Gamestop</td>
                                                <td>Out of Stock</td>
                                                <td>$29.99</td>
                                                <td>Jan 06  - 4:11 PM</td>
                                                <td>
                                                <div className='text-center my-4'>
                                                    <button className='border font-jost bg-white text-grey-primary text-base font-medium rounded-md px-12 py-2'>ADD</button>
                                                </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                        </div>
                        {/* grid */}
                        <div>
                            <div className='flex flex-wrap'>
                                <div className='w-1/6'>
                                    <div className='flex flex-col'>
                                        <div className='relative'>
                                            <Image
                                                src={require("../../assets/trackerpage/default.png")}
                                            ></Image>
                                        </div>
                                        <span>Lorem ipsum dolor sit </span>
                                    </div>
                                </div>
                                <div className='w-1/6'>
                                    <div className='flex flex-col'>
                                        <div className='relative'>
                                            <Image
                                                src={require("../../assets/trackerpage/default.png")}
                                            ></Image>
                                        </div>
                                        <span>Lorem ipsum dolor sit </span>
                                    </div>
                                </div>
                                <div className='w-1/6'>
                                    <div className='flex flex-col'>
                                        <div className='relative'>
                                            <Image
                                                src={require("../../assets/trackerpage/default.png")}
                                            ></Image>
                                        </div>
                                        <span>Lorem ipsum dolor sit </span>
                                    </div>
                                </div>
                                <div className='w-1/6'>
                                    <div className='flex flex-col'>
                                        <div className='relative'>
                                            <Image
                                                src={require("../../assets/trackerpage/default.png")}
                                            ></Image>
                                        </div>
                                        <span>Lorem ipsum dolor sit </span>
                                    </div>
                                </div>
                                <div className='w-1/6'>
                                    <div className='flex flex-col'>
                                        <div className='relative'>
                                            <Image
                                                src={require("../../assets/trackerpage/default.png")}
                                            ></Image>
                                        </div>
                                        <span>Lorem ipsum dolor sit </span>
                                    </div>
                                </div>
                                <div className='w-1/6'>
                                    <div className='flex flex-col'>
                                        <div className='relative'>
                                            <Image
                                                src={require("../../assets/trackerpage/default.png")}
                                            ></Image>
                                        </div>
                                        <span>Lorem ipsum dolor sit </span>
                                    </div>
                                </div>
                                <div className='w-1/6'>
                                    <div className='flex flex-col'>
                                        <div className='relative'>
                                            <Image
                                                src={require("../../assets/trackerpage/default.png")}
                                            ></Image>
                                        </div>
                                        <span>Lorem ipsum dolor sit </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* button */}
                        <div className='text-center my-4'>
                            <button className='border font-jost bg-white text-grey-primary text-base font-medium rounded-md px-12 py-2'>LOAD MORE</button>
                        </div>
                        {/* Recent Stock History */}
                        <div>
                            {/* Heading */}
                            <div className='flex'>
                                <div>
                                    <Image
                                        src={require("../../assets/trackerpage/recently-viewed.svg")}
                                    />
                                </div>
                                <h1>Recent Stock History</h1>
                            </div>
                            {/* refresh */}
                            <div className='flex'>
                                <div className='text-center my-4'>
                                    <button className='border font-jost bg-white text-grey-primary text-base font-medium rounded-md px-12 py-2'>LOG IN</button>
                                </div>
                                <span>
                                Updates apprx. every 5 minutes
                                </span>
                            </div>
                            {/* table */}
                            <div>
                                <div>
                                    <table className=' table-auto'>
                                    <thead>
                                        <tr>
                                            <th>Date/Time</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                            {/* body row 1 */}
                                            <tr>
                                                <td>Feb 13 - 1:09 AM EST</td>
                                                <td>CAmazon: Zacian V-UNION Special Collection Out of Stock</td>
                                                <td>
                                                    <div>
                                                        <Image
                                                            src={require("../../assets/trackerpage/cross.svg")}
                                                        ></Image>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* body row 2 */}
                                            <tr>
                                                <td></td>
                                                <td>Celebrations Collection Lance’s Charizard V</td>
                                                <td>Gamestop</td>
                                                <td>Out of Stock</td>
                                                <td>$29.99</td>
                                                <td>Jan 06  - 4:11 PM</td>
                                                <td>
                                                <div className='text-center my-4'>
                                                    <button className='border font-jost bg-white text-grey-primary text-base font-medium rounded-md px-12 py-2'>ADD</button>
                                                </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
