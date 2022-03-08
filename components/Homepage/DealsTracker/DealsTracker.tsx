import Image from 'next/image'
import React from 'react'

const DealsTracker = () => {
  return (
    <div className=' font-jost bg-slate-500'>
        <div className=' max-w-7xl mx-auto'>
            <h1 className=" font-jost text-8xl text-black-200 font-semibold text-center py-8">Deals Tracker</h1>
            <div className='flex flex-wrap'>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-full bg-white'>
                    <div className="flex-3">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-5 p-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium py-3'>$300</p>
                      <div className='flex pr-4 text-lg pt-2'>
                        <p className='border-l-4 pl-1 font-medium text-blue-300'>PREORDER</p>
                        <p className='ml-auto text-grey-400 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-full bg-white'>
                    <div className="flex-3">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-5 p-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium py-3'>$300</p>
                      <div className='flex pr-4 text-lg pt-2'>
                        <p className='border-l-4 pl-1 font-medium text-blue-300'>PREORDER</p>
                        <p className='ml-auto text-grey-400 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-full bg-white'>
                    <div className="flex-3">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-5 p-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium py-3'>$300</p>
                      <div className='flex pr-4 text-lg pt-2'>
                        <p className='border-l-4 pl-1 font-medium text-green-100'>ACTIVE</p>
                        <p className='ml-auto text-grey-400 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-full bg-white'>
                    <div className="flex-3">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-5 p-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium py-3'>$300</p>
                      <div className='flex pr-4 text-lg pt-2'>
                        <p className='border-l-4 pl-1 font-medium text-green-100'>ACTIVE</p>
                        <p className='ml-auto text-grey-400 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-full bg-white'>
                    <div className="flex-3">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-5 p-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium py-3'>$300</p>
                      <div className='flex pr-4 text-lg pt-2'>
                        <p className='border-l-4 pl-1 font-medium text-green-100'>ACTIVE</p>
                        <p className='ml-auto text-grey-400 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-full bg-white'>
                    <div className="flex-3">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-5 p-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium py-3'>$300</p>
                      <div className='flex pr-4 text-lg pt-2'>
                        <p className='border-l-4 pl-1 font-medium text-blue-300'>PREORDER</p>
                        <p className='ml-auto text-grey-400 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className=" text-right bg-white-100 py-8">
              <button className=" border border-grey-600 font-jost text-xl text-black-100 rounded-md px-16 py-2 shadow-full">View All</button>
            </div>
        </div>
    </div>
  )
}

export default DealsTracker