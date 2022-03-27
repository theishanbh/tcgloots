import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-grey-300 '>
      <div className='mx-auto pt-8 text-white-100'>
        <div className=' bg-grey-300'>
          <div className='mx-auto max-w-7xl py-4'>
            <div className='flex justify-between items-center py-6 px-4 2xl:px-2'>

              {/* first */}
              <div className=' flex-col hidden lg:flex'>
                {/* image container */}
                <div className='relative'>
                  <Image
                    src={require("../../assets/footer/lootslogo.png")}
                    alt="footer image here"
                  />
                </div>
              </div>

              {/* second */}
              <div className="flex justify-between flex-grow flex-col 2md:flex-row">
                {/* menu items */}
                <div className='flex flex-grow justify-between items-center pr-4 lg:pr-12'>
                  <div className='flex flex-grow justify-center 2md:justify-between'>
                    <div className='flex text-lg justify-between 2md:flex-grow 2md:justify-evenly 2md:items-center'>
                      {/* first block items */}
                      <div className='flex 2md:justify-evenly pl-4 2md:pl-0 2md:flex-grow flex-col 2md:flex-row tep:flex tep:space-y-5 tep:flex-col sehp:space-y-0 sehp:flex sehp:space-x-2 efp:space-x-6 otp:space-x-8 twefp:space-x-12 sehp:justify-start sehp:flex-row'>
                        <Link href={"/register"}><a>Register</a></Link>
                        <Link href={'/contactus'}><a className=' pt-2 2md:pt-0'>Contact</a></Link>
                        <Link href={'/faq'}><a className=' pt-2 2md:pt-0'>FAQ</a></Link>
                      </div>
                      {/* <div className=''> */}
                      {/* second block items */}
                      <div className=' flex justify-between pl-4 2md:pl-0 2md:flex-grow flex-col 2md:flex-row tep:flex tep:space-y-5 tep:flex-col sehp:space-y-0 sehp:flex sehp:space-x-2 efp:space-x-6 otp:space-x-8 twefp:space-x-12 sehp:justify-start sehp:flex-row'>
                        <Link href={'/unsubscribe'}><a>Unsubscribe</a></Link>
                        <Link href={'/terms'}><a className=' pt-2 2md:pt-0'>Terms of Use</a></Link>
                        <Link href={'/privacypolicy'}><a className=' pt-2 2md:pt-0'>Privacy Policy</a></Link>
                        <Link href={'/terms'}><a className=' pt-2 2md:pt-0'>Terms</a></Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* third box - social icons */}
                <div className=''>
                    <div className="flex items-center justify-center pt-6 2md:pt-0 2md:justify-end">

                      <div className='border border-grey-600 h-10 w-10 flex items-center rounded-md justify-center ml-2'>
                        <div className="relative flex justify-center items-center p-2">
                          <Image src={require("../../assets/footer/facebook.svg")}
                            alt="Facebook image here"
                            className="scale-75"/>
                        </div>
                      </div>

                      <div className='border border-grey-600 h-10 w-10 flex items-center rounded-md justify-center ml-2'>
                        <div className="relative flex justify-center items-center p-2">
                          <Image src={require("../../assets/footer/instagram.svg")}
                            alt="Instagram image here"
                            className="scale-75"
                          />
                        </div>
                      </div>

                      <div className='border border-grey-600 h-10 w-10 flex items-center rounded-md justify-center ml-2'>
                        <div className="relative flex justify-center items-center p-2">
                          <Image src={require("../../assets/footer/twitter.svg")}
                            alt="Twitter image here"
                            className="scale-75"/>
                        </div>
                      </div>

                      <div className='border border-grey-600 h-10 w-10 flex items-center rounded-md justify-center ml-2'>
                        <div className="relative flex justify-center items-center p-2">
                          <Image src={require("../../assets/footer/discord.svg")}
                            alt="Discord image here"
                            className="scale-75"/>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='font-jost text-base bg-grey-100'>
          <div className='max-w-7xl mx-auto py-6'>
            <p className='text-2sm'>All other trademarks and/or images cited herein are the property of their respective owners.</p>
            <p className='text-2sm'>Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon.com or other retailer&apos;s at the time of purchase will apply to the purchase of this product. TCGLoots.com is a participant in the Amazon.com Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.</p>
            <p className='text-center pt-8 text-grey-400'> COPYRIGHT © TCGLOOTS.COM </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer