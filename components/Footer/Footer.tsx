import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-grey-300 '>
      <div className='mx-auto pt-8 text-white-100'>
        <div className=' bg-grey-300'>
          <div className='mx-auto max-w-7xl py-4'>
            <div className='flex justify-between items-center py-6'>

              {/* first */}
              <div className='flex flex-col'>
                {/* image container */}
                <div className='relative'>
                  <Image
                    src={require("../../assets/footer/lootslogo.png")}
                    alt="footer image here"
                  />
                </div>
              </div>

              {/* second */}
              <div className='flex-grow px-12'>
                <div className='tep:flex tep:justify-between sehp:flex  sehp:justify-start'>
                  <div className='flex justify-between text-lg'>
                    {/* <div className='tep:flex tep:space-y-5 tep:flex-col sehp:space-y-0 sehp:flex sehp:space-x-2 efp:space-x-6 otp:space-x-8 twefp:space-x-12 sehp:justify-start sehp:flex-row'> */}
                      <Link href={"/register"}><a>Register</a></Link>
                      <Link href={'/contactus'}><a>Contact</a></Link>
                      <Link href={'/faq'}><a>FAQ</a></Link>
                    {/* </div> */}
                    {/* <div className=''> */}
                    {/* <div className='tep:flex tep:space-y-5 tep:flex-col sehp:space-y-0 sehp:flex sehp:space-x-2 efp:space-x-6 otp:space-x-8 twefp:space-x-12 sehp:justify-start sehp:flex-row'> */}
                      <Link href={'/unsubscribe'}><a  className='otp:ml-8'>Unsubscribe</a></Link>
                      <Link href={'/terms'}><a>Terms of Use</a></Link>
                      <Link href={'/privacypolicy'}><a>Privacy Policy</a></Link>
                      <Link href={'/terms'}><a>Terms</a></Link>
                    {/* </div> */}
                  </div>
                </div>
              </div>
              {/* third icons*/}
              <div className=''>
                <div>
                  <div className="flex items-center">

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