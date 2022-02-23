import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-colors-black-300 '>
      <div className='max-w-7xl mx-auto py-8 text-colors-white'>
        <div className='flex justify-center py-6'>
          {/* first */}
          <div className='flex flex-col'>
            <span>Join the community</span>
            <div className='flex items-center my-2'>
              <div className='bg-colors-white rounded h-full p-2 w-10'>
                <img src="./assets/logos/facebook.svg" alt="" className='mx-auto my-auto h-4/5'/>
              </div>
              <div className='bg-colors-white rounded h-full p-2 ml-1 w-10'>
                <img src="./assets/logos/instagram.svg" alt="" className='mx-auto my-auto h-4/5'/>
              </div>
              <div className='bg-colors-white rounded h-full p-2 ml-1 w-10'>
                <img src="./assets/logos/discord.svg" alt="" className='mx-auto my-auto h-4/5'/>
              </div>
            </div>
          </div>
          {/* second */}
          <div className=' flex-1'>
            <img src="./assets/logos/lootslogo.png" alt="loots logo" className='mx-auto'/>
            
          </div>
          {/* third */}
          <div className='flex'>
            <p className='cursor-pointer hover:underline'>Privacy Policy</p>
            <p className='ml-2 cursor-pointer hover:underline'>Terms</p>
          </div>
        </div>
        <div className='font-jost text-base '>
          <p>All other trademarks and/or images cited herein are the property of their respective owners.</p>
          <p>Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon.com or other retailer&apos;s at the time of purchase will apply to the purchase of this product. TCGLoots.com is a participant in the Amazon.com Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.</p>
          <p className='text-center pt-8'> COPYRIGHT © TCGLOOTS.COM </p>
        </div>
      </div>
    </div>
  )
}

export default Footer