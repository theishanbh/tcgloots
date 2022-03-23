import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-grey-300 '>
      <div className='mx-auto pt-8 text-white-100'>
        <div className=' bg-grey-300'>
          <div className='mx-auto max-w-7xl py-4 sehp:py-8 tep:py-2'>
            <div className='flex justify-between items-center py-6 tep:flex-col sehp:flex-row tep:py-2'>

              {/* first */}
              <div className='flex tep:-mt-10 sehp:mx-5 sehp:h-28 sehp:w-16 otp:h-32 otp:w-20 twefp:ml-20 flex-col'>
                {/* image container */}
                <div className='relative'>
                  <Image
                    src={require("../../assets/footer/lootslogo.png")}
                    alt="footer image here" height={200} width={130}/>
                </div>
              </div>

              {/* second */}
              <div className='flex-grow tep:flex tep:-mt-44 sehp:-mt-10 sehp:justify-center tep:px-0 sehp:flex px-12'>
                <div className='tep:flex tep:justify-between sehp:flex  sehp:justify-start'>
                  <div className='flex justify-between sehp:flex sehp:space-x-2 sehp:justify-start otp:text-lg tep:text-sm tep:flex tep:justify-start tep:space-x-20 fhp:space-x-48 text-lg'>
                    <div className='tep:flex tep:space-y-5 tep:flex-col sehp:space-y-0 sehp:flex sehp:space-x-2 efp:space-x-6 otp:space-x-8 twefp:space-x-12 sehp:justify-start sehp:flex-row'>
                      <Link href={"/register"}><a>Register</a></Link>
                      <Link href={'/contactus'}><a>Contact</a></Link>
                      <Link href={'/faq'}><a>FAQ</a></Link>
                    </div>
                    <div className='tep:flex tep:space-y-5 tep:flex-col sehp:space-y-0 sehp:flex sehp:space-x-2 efp:space-x-6 otp:space-x-8 twefp:space-x-12 sehp:justify-start sehp:flex-row'>
                      <Link href={'/unsubscribe'}><a  className='otp:ml-8'>Unsubscribe</a></Link>
                      <Link href={'/terms'}><a>Terms of Use</a></Link>
                      <Link href={'/privacypolicy'}><a>Privacy Policy</a></Link>
                      <Link href={'/terms'}><a>Terms</a></Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* third */}
              <div className='tep:mt-10 tep:mb-5 sehp:-mt-10 sehp:mb-0 sehp:w-40 sehp:h-10 otp:h-10 otp:w-44 otp:mx-3 twefp:w-52 twefp:h-10 twefp:mx-10 sehp:mx-5'>
                <div>
                  <div className="flex items-center twefp:space-x-3">

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
                          className="scale-75"/>
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
          <div className='max-w-7xl mx-auto tep:py-3 otp:mx-10 py-6'>
            <p className='tep:text-xs tep:mt-1 tep:mb-2 tep:mx-5 otp:text-sm text-2sm'>All other trademarks and/or images cited herein are the property of their respective owners.</p>
            <p className='tep:text-xs tep:mt-1 tep:mb-2 tep:mx-5 otp:text-sm text-2sm'>Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon.com or other retailer&apos;s at the time of purchase will apply to the purchase of this product. TCGLoots.com is a participant in the Amazon.com Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.</p>
            <p className=' tep:text-sm tep:pt-3 otp:text-lg text-center pt-8 text-grey-400'> COPYRIGHT © TCGLOOTS.COM </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer