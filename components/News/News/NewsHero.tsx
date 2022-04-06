import Image from 'next/image'
import React from 'react'

const NewsHero = () => {
  return (
    <div className="bg-slate-500 shadow-xl relative font-jost">
      <div className="bg-[url('/assets/news/news/background.png')] bg-bottom bg-cover bg-blend-darken max-w-7xl mx-auto bg-no-repeat  py-12">
          <div className='mx-auto max-w-7xl font-jost bg-transparent'>
              <h1 className="font-jost text-8xl text-black-200 font-semibold text-center">News</h1>
              <div className='flex flex-grow py-8'>
                <div className='flex flex-col px-4 '>
                  <div className='bg-slate-500 shadow-full rounded-md'>
                    {/* image container */}
                    <div className='relative'>
                      <Image
                        src={require("../../../assets/news/image1.png")}
                        layout="intrinsic"
                      />

                    </div>
                    {/* text container */}
                    <div className='flex flex-col py-1 md:py-2 px-4'>
                      <p className=' font-medium text-xl 2md:text-2xl text-black-100'>Lorem ipsum dolor sit amet</p>
                      <span className=' text-grey-primary text-base lg:text-lg pt-2 pb-4 md:py-8 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</span>
                      <div className='flex justify-between items-center'>
                        <p className=' text-sm md:text-2sm'>1 Dec 2021</p>
                        <button className='border bg-grey-600 text-grey-400 font-jost text-sm md:text-base rounded-md px-1'>Category</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col px-4 '>
                  <div className='bg-slate-500 shadow-full rounded-xl'>
                    {/* image container */}
                    <div className=''>
                      <div className="relative">
                        <Image
                          src = {require("../../../assets/news/image2.png")}
                          layout="responsive"
                        ></Image>
                      </div>
                    </div>
                    {/* text container */}
                    <div className='flex flex-col py-1 md:py-2 px-4'>
                      <p className=' font-medium text-xl 2md:text-2xl text-black-100'>Lorem ipsum dolor sit amet</p>
                      <span className='text-grey-primary text-base lg:text-lg pt-2 pb-4 md:py-8 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</span>
                      <div className='flex justify-between items-center'>
                        <p className='text-sm md:text-2sm'>1 Dec 2021</p>
                        <button className='border bg-yellow-500 text-brown-100 font-jost text-sm md:text-base rounded-md px-1'>Featured</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col px-4 '>
                  <div className='bg-slate-500 shadow-full rounded-xl'>
                    {/* image container */}
                    <div className=''>
                      <div className="relative">
                        <Image
                          src = {require("../../../assets/news/image1.png")}
                          layout="responsive"
                        ></Image>
                      </div>
                    </div>
                    {/* text container */}
                    <div className='flex flex-col py-1 md:py-2 px-4'>
                      <p className=' font-medium text-xl 2md:text-2xl text-black-100'>Lorem ipsum dolor sit amet</p>
                      <span className='text-grey-primary text-base lg:text-lg pt-2 pb-4 md:py-8 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</span>
                      <div className='flex justify-between items-center'>
                        <p className='text-sm md:text-2sm'>1 Dec 2021</p>
                        <button className='border bg-slate-200 text-blue-300 font-jost text-sm md:text-base rounded-md px-1'>Category</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col px-4 '>
                  <div className='bg-slate-500 shadow-full rounded-md'>
                    {/* image container */}
                    <div className=''>
                      <div className="relative">
                          <Image
                            src = {require("../../../assets/news/image2.png")}
                            layout="responsive"
                          ></Image>
                        </div>
                    </div>
                    {/* text container */}
                    <div className='flex flex-col py-1 md:py-2 px-4'>
                      <p className=' font-medium text-xl 2md:text-2xl text-black-100'>Lorem ipsum dolor sit amet</p>
                      <span className='text-grey-primary text-base lg:text-lg pt-2 pb-4 md:py-8 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</span>
                      <div className='flex justify-between items-center'>
                        <p className='text-sm md:text-2sm'>1 Dec 2021</p>
                        <button className='border bg-yellow-500 text-brown-100 font-jost text-sm md:text-base rounded-md px-1'>Featured</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewsHero