import React from 'react'
import Image from 'next/image'
export default function StockAlertView() {
  return (
    <div className='w-72 flex rounded-lg flex-col bg-white-100'>
     <div className='font-jost flex flex-row font-medium h-16 items-center borderbutton pl-8 text-black-100 text-xl  rounded-t-lg'>FREE in Stock Alerts!</div>
     <div className='mx-8'>
     <div className='flex flex-row space-x-2 py-2'>
      <Image 
       src={require("../../assets/trackerpage/telegram.svg")}
       width={30}
       height={30}
      />
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Telegram</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>
      <Image 
       src={require("../../assets/trackerpage/discord.svg")}
       width={30}
       height={30}
      />
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Discord</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>
      <Image 
       src={require("../../assets/trackerpage/email.svg")}
       width={30}
       height={30}
      />
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Email</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>
      <Image 
       src={require("../../assets/trackerpage/browser.svg")}
       width={30}
       height={30}
      />
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Browser</div>
     </div>
     
     </div>
    </div>
  )
}
