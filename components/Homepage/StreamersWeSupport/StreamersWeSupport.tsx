import Image from 'next/image'
import React from 'react'

const StreamersWeSupport = () => {
  return (
    <div className=' bg-slate-500'>
      <div className='max-w-7xl mx-auto font-jost py-12'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className=" font-jost text-8xl text-black-200 font-semibold text-center pb-12">Streamers We Support</h1>
          {/* featured streamer */}
          <div className='flex flex-col items-center'>
            <div className='flex justify-center items-center'>
              {/* image container */}
              <div className="relative flex items-center justify-center">
                <Image
                  src={require("../../../assets/homepage/streamerswesupport/person1.png")}
                ></Image>
              </div>
              <span className='px-4 text-2xl font-medium text-black-100'>Cameron Williamson</span>
              <span className='text-base font-light text-black-100'>58 k</span>
            </div>
            <div className='h-1 bg-yellow-200 w-1/2 my-6'></div>
            <div className='w-2/3 text-centPer text-grey-400 text-lg'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          {/* other streamers */}
          <div className="relative w-full py-24 bg-[url('/assets/homepage/streamerswesupport/background.png')] bg-cover">
            <div className='flex items-center justify-between px-4 bg-slate-400 bg-opacity-70 py-4'>
              <div className="flex flex-col items-center ">
                <div className='relative'>
                  <Image
                    src={require("../../../assets/homepage/streamerswesupport/person1.png")}
                  ></Image>
                </div>
                <span className=' text-xl text-black-100'>John Doe</span>
                <span className=' text-base font-light text-black-100'>58 K</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative'>
                  <Image
                    src={require("../../../assets/homepage/streamerswesupport/person2.png")}
                  ></Image>
                </div>
                <span className=' text-xl text-black-100'>John Doe</span>
                <span className=' text-base font-light text-black-100'>58 K</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative'>
                  <Image
                    src={require("../../../assets/homepage/streamerswesupport/person3.png")}
                  ></Image>
                </div>
                <span className=' text-xl text-black-100'>John Doe</span>
                <span className=' text-base font-light text-black-100'>58 K</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative'>
                  <Image
                    src={require("../../../assets/homepage/streamerswesupport/person1.png")}
                  ></Image>
                </div>
                <span className=' text-xl text-black-100'>John Doe</span>
                <span className=' text-base font-light text-black-100'>58 K</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative'>
                  <Image
                    src={require("../../../assets/homepage/streamerswesupport/person4.png")}
                  ></Image>
                </div>
                <span className=' text-xl text-black-100'>John Doe</span>
                <span className=' text-base font-light text-black-100'>58 K</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative'>
                  <Image
                    src={require("../../../assets/homepage/streamerswesupport/person5.png")}
                  ></Image>
                </div>
                <span className=' text-xl text-black-100'>John Doe</span>
                <span className=' text-base font-light text-black-100'>58 K</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative'>
                  <Image
                    src={require("../../../assets/homepage/streamerswesupport/person6.png")}
                  ></Image>
                </div>
                <span className=' text-xl text-black-100'>John Doe</span>
                <span className=' text-base font-light text-black-100'>58 K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StreamersWeSupport