import React from 'react'

const DealsTracker = () => {
  return (
    <div className=' font-jost bg-colors-grey-600'>
        <div className=' max-w-7xl mx-auto'>
            <h1 className=" font-jost text-4xl font-semibold text-center py-6">Deals Tracker</h1>
            <div className='flex flex-wrap'>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-xl bg-colors-white p-4'>
                    <div className="flex-1">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 "/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium'>$300</p>
                      <div className='flex pr-4 '>
                        <p className='border-l-4 pl-1 font-medium text-xl text-colors-green-primary'>ACTIVE</p>
                        <p className='ml-auto text-colors-grey-100 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-xl bg-colors-white p-4'>
                    <div className="flex-1">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 "/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium'>$300</p>
                      <div className='flex pr-4 '>
                        <p className='border-l-4 pl-1 font-medium text-xl text-colors-green-primary'>ACTIVE</p>
                        <p className='ml-auto text-colors-grey-100 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-xl bg-colors-white p-4'>
                    <div className="flex-1">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 "/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium'>$300</p>
                      <div className='flex pr-4 '>
                        <p className='border-l-4 pl-1 font-medium text-xl text-colors-blue-primary'>PREORDER</p>
                        <p className='ml-auto text-colors-grey-100 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-xl bg-colors-white p-4'>
                    <div className="flex-1">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 "/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium'>$300</p>
                      <div className='flex pr-4 '>
                        <p className='border-l-4 pl-1 font-medium text-xl text-colors-blue-primary'>PREORDER</p>
                        <p className='ml-auto text-colors-grey-100 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-xl bg-colors-white p-4'>
                    <div className="flex-1">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 "/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium'>$300</p>
                      <div className='flex pr-4 '>
                        <p className='border-l-4 pl-1 font-medium text-xl text-colors-green-primary'>ACTIVE</p>
                        <p className='ml-auto text-colors-grey-100 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4 ">
                  <div className='flex shadow-xl bg-colors-white p-4'>
                    <div className="flex-1">
                        <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 "/>
                    </div>
                    <div className="flex justify-evenly flex-col flex-2">
                      <p className='text-lg pr-4'>Baldur’s Gate and Baldur’s Gate II: Enhanced Editions</p>
                      <p className='text-xl font-medium'>$300</p>
                      <div className='flex pr-4 '>
                        <p className='border-l-4 pl-1 font-medium text-xl text-colors-green-primary'>ACTIVE</p>
                        <p className='ml-auto text-colors-grey-100 text-base'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                
            </div>
            <div>
              <button className=" border font-jost text-xl rounded-md px-16 py-2">View All</button>
          </div>
        </div>
    </div>
  )
}

export default DealsTracker