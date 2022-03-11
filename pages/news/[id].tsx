import { Fragment, useState,useEffect } from "react"
import Image from "next/image"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const Post = ({blog} : {blog:any}) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto max-w-7xl font-jost">
                <div className="flex py-8">
                    {/* Articles */}
                    <div className="flex-2 pr-20">
                        <div className="flex flex-col">
                            <h1 className=" text-7xl text-black-100 font-semibold">Lorem ipsum dolor sit amet</h1>
                            <span className=" font-light text-2xl text-black-200 py-4">12 Dec 2021</span>
                            {/* img container */}
                            <div className="py-4 relative">
                                <Image
                                    src={require('../../assets/news/image1.png')}
                                    layout="responsive"
                                    className=" rounded-xl"
                                />
                            </div>
                            <div className=" text-2xl">
                                <p className="py-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    {/* second block */}
                    <div className="flex-1 flex flex-col px-4">
                        <h2 className="text-center mx-auto pb-4">Lorem, ipsum</h2>
                        <div>
                            <div className="flex justify-start border-solid border-b-2 border-grey-600 p-2" >
                                <div className="relative flex-1 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                                    <a target="_blank" className="no-underline hover:underline">
                                    <Image
                                        src = {require("../../assets/image1.png")}
                                        alt = {"alt"}
                                        objectFit= "cover"
                                        layout="fill"
                                    />
                                    </a>
                                </div>
                                <div className="flex flex-2 flex-col ml-4 w-auto py-2">
                                    <div className="no-underline text-2xl font-medium"> Lorem ipsum dolor sit </div>
                                    <div className="text-justify text-sm text-grey-primary mt-auto"> 1 Dec 2021 </div>
                                </div>
                            </div>
                            <div className="flex justify-start border-solid border-b-2 border-grey-600 p-2" >
                                <div className="relative h-28 w-28 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                                    <a target="_blank" className="no-underline hover:underline">
                                    <Image
                                        src = {require("../../assets/image1.png")}
                                        alt = {"alt"}
                                        objectFit= "cover"
                                        layout="fill"
                                    />
                                    </a>
                                </div>
                                <div className="flex flex-col ml-4 w-auto py-2">
                                    <div className="no-underline text-xl font-medium"> Lorem ipsum dolor sit </div>
                                    <div className="text-justify text-sm text-grey-primary mt-auto"> 1 Dec 2021 </div>
                                </div>
                            </div>
                            <div className="flex justify-start border-solid border-b-2 border-grey-600 p-2" >
                                <div className="relative h-28 w-28 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                                    <a target="_blank" className="no-underline hover:underline">
                                    <Image
                                        src = {require("../../assets/image1.png")}
                                        alt = {"alt"}
                                        objectFit= "cover"
                                        layout="fill"
                                    />
                                    </a>
                                </div>
                                <div className="flex flex-col ml-4 w-auto py-2">
                                    <div className="no-underline text-xl font-medium"> Lorem ipsum dolor sit </div>
                                    <div className="text-justify text-sm text-grey-primary mt-auto"> 1 Dec 2021 </div>
                                </div>
                            </div>
                            <div className="flex justify-start p-2" >
                                <div className="relative h-28 w-28 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                                    <a target="_blank" className="no-underline hover:underline">
                                    <Image
                                        src = {require("../../assets/image1.png")}
                                        alt = {"alt"}
                                        objectFit= "cover"
                                        layout="fill"
                                    />
                                    </a>
                                </div>
                                <div className="flex flex-col ml-4 w-auto py-2">
                                    <div className="no-underline text-xl font-medium"> Lorem ipsum dolor sit </div>
                                    <div className="text-justify text-sm text-grey-primary mt-auto"> 1 Dec 2021 </div>
                                </div>
                                
                            </div>
                            {/* button */}
                            <div>
                                <button className=" my-2 border bg-white text-black-100 font-jost text-xl rounded-md px-16 py-2">View All</button>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src={require("../../assets/news/chest.png")}
                                className="opacity-25"
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Post