import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsArticles = () => {
  return (
    <div className="bg-slate-300">
        <div className=' max-w-7xl mx-auto font-jost py-12'>
            {/* Categories */}
            <div className=' hidden md:block bg-white shadow-lg bg-white-100 p-4 border-4 rounded-lg border-grey-600'>
                <div className='flex text-black-100'>
                    <a className=' px-8 text-xl border-r border-grey-600'>ALL</a>
                    <a className=' px-8 text-xl border-r border-grey-600'>FEATURED</a>
                    <a className=' px-8 text-xl border-r border-grey-600'>CATEGORY</a>
                    <a className=' px-8 text-xl'>CATEGORY</a>
                </div>
            </div>
            {/* blogs */}
            <section className="bg-white pt-1 px-4 w-full">
              <div className="flex flex-row px-2 xl:px-0">
                  <div className="flex flex-col flex-3">
                    <div className="flex items-start flex-row justify-start border-solid border-b-4 border-grey-600 py-10" >
                        <div className="relative flex-1 md:flex-initial justify-center items-center my-auto flex-shrink-0 overflow-hidden">
                            <Image
                              src={require("../../../assets/news/image1.png")}
                              objectFit="cover"
                              layout = "responsive"
                              className=' rounded-lg'
                            />
                        </div>
                        <div className="flex flex-2 md:flex-initial flex-col h-full ml-4 w-auto">
                            <Link
                              href={"/news/1"}
                            >
                            <span className=" text-base md:text-6xl font-medium text-black-100 text-left no-underline hover:underline pb-0 md:pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            </Link>
                            <p className="text-xl font-light text-black-100 text-left text-ellipsis overflow-hidden hidden md:block"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </p>
                            <div className=" md:text-2sm text-grey-400 md:text-black-100 mt-0 md:mt-auto text-left py-0 md:py-3"> 1 Dec 2021 </div>
                            <div className=" text-base block md:hidden text-black-100 mt-auto text-left"> Read More &gt; </div>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="flex flex-row px-2 xl:px-0">
                  <div className="flex flex-col flex-3">
                    <div className="flex items-start flex-row justify-start border-solid border-b-4 border-grey-600 py-10" >
                        <div className="relative flex-1 md:flex-initial justify-center items-center my-auto flex-shrink-0 overflow-hidden">
                            <Image
                              src={require("../../../assets/news/image1.png")}
                              objectFit="cover"
                              layout = "responsive"
                              className=' rounded-lg'
                            />
                        </div>
                        <div className="flex flex-2 md:flex-initial flex-col h-full ml-4 w-auto">
                            <Link
                              href={"/news/1"}
                            >
                            <span className=" text-base md:text-6xl font-medium text-black-100 text-left no-underline hover:underline pb-0 md:pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            </Link>
                            <p className="text-xl font-light text-black-100 text-left text-ellipsis overflow-hidden hidden md:block"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </p>
                            <div className=" md:text-2sm text-grey-400 md:text-black-100 mt-0 md:mt-auto text-left py-0 md:py-3"> 1 Dec 2021 </div>
                            <div className=" text-base block md:hidden text-black-100 mt-auto text-left"> Read More &gt; </div>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="flex flex-row px-2 xl:px-0">
                  <div className="flex flex-col flex-3">
                    <div className="flex items-start flex-row justify-start border-solid border-b-4 border-grey-600 py-10" >
                        <div className="relative flex-1 md:flex-initial justify-center items-center my-auto flex-shrink-0 overflow-hidden">
                            <Image
                              src={require("../../../assets/news/image1.png")}
                              objectFit="cover"
                              layout = "responsive"
                              className=' rounded-lg'
                            />
                        </div>
                        <div className="flex flex-2 md:flex-initial flex-col h-full ml-4 w-auto">
                            <Link
                              href={"/news/1"}
                            >
                            <span className=" text-base md:text-6xl font-medium text-black-100 text-left no-underline hover:underline pb-0 md:pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            </Link>
                            <p className="text-xl font-light text-black-100 text-left text-ellipsis overflow-hidden hidden md:block"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </p>
                            <div className=" md:text-2sm text-grey-400 md:text-black-100 mt-0 md:mt-auto text-left py-0 md:py-3"> 1 Dec 2021 </div>
                            <div className=" text-base block md:hidden text-black-100 mt-auto text-left"> Read More &gt; </div>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="flex flex-row px-2 xl:px-0">
                  <div className="flex flex-col flex-3">
                    <div className="flex items-start flex-row justify-start border-solid border-b-4 border-grey-600 py-10" >
                        <div className="relative flex-1 md:flex-initial justify-center items-center my-auto flex-shrink-0 overflow-hidden">
                            <Image
                              src={require("../../../assets/news/image1.png")}
                              objectFit="cover"
                              layout = "responsive"
                              className=' rounded-lg'
                            />
                        </div>
                        <div className="flex flex-2 md:flex-initial flex-col h-full ml-4 w-auto">
                            <Link
                              href={"/news/1"}
                            >
                            <span className=" text-base md:text-6xl font-medium text-black-100 text-left no-underline hover:underline pb-0 md:pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            </Link>
                            <p className="text-xl font-light text-black-100 text-left text-ellipsis overflow-hidden hidden md:block"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </p>
                            <div className=" md:text-2sm text-grey-400 md:text-black-100 mt-0 md:mt-auto text-left py-0 md:py-3"> 1 Dec 2021 </div>
                            <div className=" text-base block md:hidden text-black-100 mt-auto text-left"> Read More &gt; </div>
                        </div>
                      </div>
                    </div>
              </div>
            </section>
            {/* button */}
            <div className=" text-center py-8">
              <button className=" border bg-white-100 border-grey-600 font-jost text-xl text-black-100 rounded-md px-16 py-2 shadow-full">Load More</button>
          </div>
        </div>
    </div>
  )
}

export default NewsArticles