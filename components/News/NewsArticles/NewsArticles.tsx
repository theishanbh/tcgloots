import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsArticles = () => {
  return (
    <div className="bg-slate-300">
        <div className=' max-w-7xl mx-auto font-jost py-12'>
            {/* Categories */}
            <div className=' bg-white shadow-lg bg-white-100 p-4 border-4 rounded-lg border-grey-600'>
                <div className='flex text-black-100'>
                    <a className=' px-8 text-xl border-r'>ALL</a>
                    <a className=' px-8 text-xl border-r'>FEATURED</a>
                    <a className=' px-8 text-xl border-r'>CATEGORY</a>
                    <a className=' px-8 text-xl'>CATEGORY</a>
                </div>
            </div>
            {/* blogs */}
            <section className="bg-white pt-1 px-12">
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row pt-12 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0">
                  <div className="flex flex-col-reverse flex-3 mr-8">
                    <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start sm:flex-col md:flex-row lg:flex-row justify-start border-solid border-b-2 border-grey-600 py-10" >
                        <div 
                          className="relative justify-center items-center my-auto flex-shrink-0 overflow-hidden"
                        >
                            <Image
                              src={require("../../../assets/news/image1.png")}
                              objectFit="cover"
                              className=' rounded-lg'
                            />
                        </div>
                        <div className="flex flex-col h-full ml-4 w-auto">
                            <Link
                              href={"/news/1"}
                            >
                            <span className=" text-6xl font-medium text-black-100 text-center md:text-left lg:text-left xl:text-left no-underline hover:underline pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            </Link>
                            <div className="text-xl font-light text-black-100 text-center md:text-left lg:text-left xl:text-left overflow-ellipsis overflow-hidden whitespace-nowrap"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </div>
                            <div className=" text-2sm text-black-100 text-center mt-auto md:text-left lg:text-left xl:text-left pt-3"> 1 Dec 2021 </div>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0">
                  <div className="flex flex-col-reverse flex-3 mr-8">
                    <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start sm:flex-col md:flex-row lg:flex-row justify-start border-solid border-b-2 border-grey-600 py-10" >
                        <div 
                          className="relative justify-center items-center my-auto flex-shrink-0 overflow-hidden"
                        >
                            <Image
                              src={require("../../../assets/news/image2.png")}
                              objectFit="cover"
                              className=' rounded-lg'
                            />
                        </div>
                        <div className="flex flex-col h-full ml-4 w-auto">
                            <Link
                              href={"/news/1"}
                            >
                            <span className=" text-6xl font-medium text-black-100 text-center md:text-left lg:text-left xl:text-left no-underline hover:underline pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            </Link>
                            <div className="text-xl font-light text-black-100 text-center md:text-left lg:text-left xl:text-left overflow-ellipsis overflow-hidden whitespace-nowrap"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </div>
                            <div className=" text-2sm text-black-100 text-center mt-auto md:text-left lg:text-left xl:text-left pt-3"> 1 Dec 2021 </div>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0">
                  <div className="flex flex-col-reverse flex-3 mr-8">
                    <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start sm:flex-col md:flex-row lg:flex-row justify-start border-solid border-b-2 border-grey-600 py-10" >
                        <div 
                          className="relative justify-center items-center my-auto flex-shrink-0"
                        >
                            <Image
                              src={require("../../../assets/news/image3.png")}
                              objectFit="cover"
                              className=' rounded-lg'
                            />
                        </div>
                        <div className="flex flex-col h-full ml-4 w-auto">
                            <Link
                              href={"/news/1"}
                            >
                            <span className=" text-6xl text-black-100 font-medium text-center md:text-left lg:text-left xl:text-left no-underline hover:underline pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            </Link>
                            <div className="text-xl font-light text-black-100 text-center md:text-left lg:text-left xl:text-left overflow-ellipsis overflow-hidden whitespace-nowrap"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </div>
                            <div className=" text-2sm text-black-100 text-center mt-auto md:text-left lg:text-left xl:text-left pt-3"> 1 Dec 2021 </div>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0">
                  <div className="flex flex-col-reverse flex-3 mr-8">
                    <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start sm:flex-col md:flex-row lg:flex-row justify-start border-solid border-b-2 border-grey-600 py-10" >
                        <div 
                          className="relative justify-center items-center my-auto flex-shrink-0 overflow-hidden"
                        >
                            <Image
                              src={require("../../../assets/news/image4.png")}
                              objectFit="cover"
                              className=' rounded-lg'
                            />
                        </div>
                        <div className="flex flex-col h-full ml-4 w-auto">
                            <Link
                              href={"/news/1"}
                            >
                            <span className=" text-6xl text-black-100 font-medium text-center md:text-left lg:text-left xl:text-left no-underline hover:underline pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            </Link>
                            <div className="text-xl font-light text-black-100 text-center md:text-left lg:text-left xl:text-left overflow-ellipsis overflow-hidden whitespace-nowrap"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </div>
                            <div className=" text-2sm text-black-100 text-center mt-auto md:text-left lg:text-left xl:text-left pt-3"> 1 Dec 2021 </div>
                        </div>
                      </div>
                    </div>
              </div>
            </section>
            {/* button */}
            <div className=" text-center bg-slate-300 py-8">
              <button className=" border border-grey-600 font-jost text-xl text-black-100 rounded-md px-16 py-2 shadow-full">Load More</button>
          </div>
        </div>
    </div>
  )
}

export default NewsArticles