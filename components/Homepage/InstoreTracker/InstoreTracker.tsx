import React from 'react'

const InstoreTracker = () => {
  return (
    <div className='font-jost'>
      <div className=' bg-colors-grey-600'>
        <div className='mx-auto max-w-7xl'>
          <h1 className=" font-jost text-4xl font-semibold text-center py-12">Instore Tracker</h1>
          <div className="bg-[url('/assets/homepage/instoretracker/background.png')] bg-contain bg-no-repeat p-20">
            <div className=' bg-colors-white p-4 w-3/5 mx-auto shadow-xl rounded-lg'>
              <div className='flex justify-between items-center'>
                <div className=''>
                  <img src="./assets/homepage/instoretracker/person.png" alt="" className='h-20 w-20 object-cover rounded-full'/>
                </div>
                <div className='flex flex-1 justify-around'>
                  <span className='text-lg border rounded-md py-1 px-3'>Seattle, WA</span>
                  <span className='text-lg border rounded-md py-1 px-3'>Target</span>
                  <span className='text-lg border rounded-md py-1 px-3'>12:00 AM EST</span>
                </div>
              </div>
            </div>
          </div>
          <p className=' font-medium text-xl text-center text-colors-grey-100'>Every week we randomly reward contributors that help the community!</p>
          <div className='text-center'>
            <button className=' bg-colors-yellow-primary text-center text-xl hover:bg-blue-700 px-12 py-2 text-colors-white rounded my-8'> See more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstoreTracker