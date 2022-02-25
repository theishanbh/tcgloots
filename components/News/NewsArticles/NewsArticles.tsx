import React from 'react'

const NewsArticles = () => {
  return (
    <div>
        <div className=' max-w-7xl mx-auto font-jost py-8'>
            {/* Categories */}
            <div className=' bg-colors-white shadow-lg p-4 border-4 rounded-lg border-colors-grey-500'>
                <div className='flex'>
                    <a className=' px-8 text-xl border-r'>ALL</a>
                    <a className=' px-8 text-xl border-r'>FEATURED</a>
                    <a className=' px-8 text-xl border-r'>CATEGORY</a>
                    <a className=' px-8 text-xl'>CATEGORY</a>
                </div>
            </div>
            {/* blogs */}
            <section className="bg-white pt-1">
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row py-12 mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0">
                  <div className="flex flex-col-reverse flex-3 mr-8">
                    <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start sm:flex-col md:flex-row lg:flex-row justify-start border-solid border-b-2 border-colors-grey-100 py-10" >
                        <div 
                          className="relative justify-center items-center my-auto flex-shrink-0 overflow-hidden"
                        >
                            <img
                                src = './assets/news/news/image1.png'
                                alt = "alt text"
                                className="border border-gray-200 rounded-md "
                            />
                        </div>
                        <div className="flex flex-col h-full ml-4 w-auto">
                            <span className=" text-3xl font-medium text-center md:text-left lg:text-left xl:text-left no-underline hover:underline pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            <div className="text-xl text-colors-black-200 text-center md:text-left lg:text-left xl:text-left overflow-ellipsis overflow-hidden whitespace-nowrap"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </div>
                            <div className=" text-base text-colors-black-200 text-center mt-auto md:text-left lg:text-left xl:text-left italic pt-3"> 1 Dec 2021 </div>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row py-12 mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0">
                  <div className="flex flex-col-reverse flex-3 mr-8">
                    <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start sm:flex-col md:flex-row lg:flex-row justify-start border-solid border-b-2 border-colors-grey-100 py-10" >
                        <div 
                          className="relative justify-center items-center my-auto flex-shrink-0 overflow-hidden"
                        >
                            <img
                                src = './assets/news/news/image2.png'
                                alt = "alt text"
                                className="border border-gray-200 rounded-md "
                            />
                        </div>
                        <div className="flex flex-col h-full ml-4 w-auto">
                            <span className=" text-3xl font-medium text-center md:text-left lg:text-left xl:text-left no-underline hover:underline pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            <div className="text-xl text-colors-black-200 text-center md:text-left lg:text-left xl:text-left overflow-ellipsis overflow-hidden whitespace-nowrap"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </div>
                            <div className=" text-base text-colors-black-200 text-center mt-auto md:text-left lg:text-left xl:text-left italic pt-3"> 1 Dec 2021 </div>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row py-12 mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0">
                  <div className="flex flex-col-reverse flex-3 mr-8">
                    <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start sm:flex-col md:flex-row lg:flex-row justify-start border-solid border-b-2 border-colors-grey-100 py-10" >
                        <div 
                          className="relative justify-center items-center my-auto flex-shrink-0 overflow-hidden"
                        >
                            <img
                                src = './assets/news/news/image3.png'
                                alt = "alt text"
                                className="border border-gray-200 rounded-md "
                            />
                        </div>
                        <div className="flex flex-col h-full ml-4 w-auto">
                            <span className=" text-3xl font-medium text-center md:text-left lg:text-left xl:text-left no-underline hover:underline pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            <div className="text-xl text-colors-black-200 text-center md:text-left lg:text-left xl:text-left overflow-ellipsis overflow-hidden whitespace-nowrap"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </div>
                            <div className=" text-base text-colors-black-200 text-center mt-auto md:text-left lg:text-left xl:text-left italic pt-3"> 1 Dec 2021 </div>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row py-12 mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0">
                  <div className="flex flex-col-reverse flex-3 mr-8">
                    <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start sm:flex-col md:flex-row lg:flex-row justify-start border-solid border-b-2 border-colors-grey-100 py-10" >
                        <div 
                          className="relative justify-center items-center my-auto flex-shrink-0 overflow-hidden"
                        >
                            <img
                                src = './assets/news/news/image4.png'
                                alt = "alt text"
                                className="border border-gray-200 rounded-md "
                            />
                        </div>
                        <div className="flex flex-col h-full ml-4 w-auto">
                            <span className=" text-3xl font-medium text-center md:text-left lg:text-left xl:text-left no-underline hover:underline pb-2 hover:text-blue-700"> Lorem ipsum dolor sit amet </span>
                            <div className="text-xl text-colors-black-200 text-center md:text-left lg:text-left xl:text-left overflow-ellipsis overflow-hidden whitespace-nowrap"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... </div>
                            <div className=" text-base text-colors-black-200 text-center mt-auto md:text-left lg:text-left xl:text-left italic pt-3"> 1 Dec 2021 </div>
                        </div>
                      </div>
                    </div>
              </div>
            </section>
            {/* button */}
            <div className='text-center'>
              <button className=" border font-jost text-xl rounded-md px-16 py-2">Load More</button>
            </div>
        </div>
    </div>
  )
}

export default NewsArticles