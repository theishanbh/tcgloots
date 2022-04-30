import React from 'react'
import Image from 'next/image'
export default function FilterView() {
  return (
    <div className='w-72 flex rounded-lg flex-col bg-white-100'>
     <div className='font-jost flex flex-row font-medium h-16 items-center borderbutton pl-8 text-black-100 text-xl  rounded-t-lg'>Location</div>
     <div className='mx-8'>
     <div className='flex flex-row space-x-2 py-2'>
      <Image 
       src={require("../../assets/trackerpage/flag-us.svg")}
       width={30}
       height={30}
      />
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>United States</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>
      <Image 
       src={require("../../assets/trackerpage/flag-uk.svg")}
       width={30}
       height={30}
      />
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>United Kingdom</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>
      <Image 
       src={require("../../assets/trackerpage/flag-ca.svg")}
       width={30}
       height={30}
      />
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Canada</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>
      <Image 
       src={require("../../assets/trackerpage/flag-ge.svg")}
       width={30}
       height={30}
      />
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Deutschland</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>
      <Image 
       src={require("../../assets/trackerpage/flag-it.svg")}
       width={30}
       height={30}
      />
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Italia</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>
      <Image 
       src={require("../../assets/trackerpage/flag-fr.svg")}
       width={30}
       height={30}
      />
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>France</div>
     </div>
     
     <div className='flex flex-row space-x-2 py-2'>
      <Image 
       src={require("../../assets/trackerpage/flag-ja.svg")}
       width={30}
       height={30}
      />
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Japan</div>
     </div>
     </div>
    </div>
  )
}
