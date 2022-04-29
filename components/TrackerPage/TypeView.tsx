import React from 'react'

export default function TypeView() {
  return (
    <div className='w-72 flex rounded-lg flex-col bg-white-100'>
     <div className='font-jost flex flex-row font-medium h-16 items-center borderbutton pl-8 text-black-100 text-xl  rounded-t-lg'>Type</div>
     <div className='mx-8'>
     <div className='flex flex-row space-x-2 py-2'>
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Game</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>

     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Game + DLC</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>

     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>DLC</div>
     </div>
   
     </div>
    </div>
  )
}
