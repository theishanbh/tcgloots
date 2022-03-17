import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const FAQ = () => {
  return (
    <div>
        <div>
            <Navbar></Navbar>

            <div>
              <div className='relative h-full'>
                <div className='mx-auto max-w-7xl'>
                  <div className='flex flex-col font-jost relative'>
                    <Image
                      src={require("../../assets/faq/background.png")}
                      layout="fill"
                      className="z-0"
                    />
                    <h1 className='text-center text-8xl text-black-200 font-semibold pt-20 z-10 relative'>FAQ</h1>
                    <p className=' text-xl text-center py-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                    <div>
                      <div className="flex">
                        {/* accoutn */}
                        <div className=" w-1/5 p-4 h-48">
                          <div className='flex flex-col border border-blue-500 rounded-lg bg-blue-400 p-4 justify-between items-center h-full bg-grey-800'>
                            {/* img container */}
                            <div className='flex-1 flex justify-center items-center relative'>
                              <Image
                                src={require("../../assets/faq/account.svg")}
                              />
                            </div>
                            <div className=' font-medium text-xl text-blue-300'>ACCOUNTS</div>
                          </div>
                        </div>
                        {/* games */}
                        <div className=" w-1/5 p-4 h-48">
                          <div className='flex flex-col border border-blue-500 rounded-lg bg-blue-400 p-4 justify-between items-center h-full bg-grey-800'>
                            {/* img container */}
                            <div className='flex-1 flex justify-center items-center relative'>
                              <Image
                                src={require("../../assets/faq/games.svg")}
                              />
                            </div>
                            <div className=' font-medium text-xl text-blue-300'>GAMES</div>
                          </div>
                        </div>
                        {/* rewards */}
                        <div className=" w-1/5 p-4 h-48">
                          <div className='flex flex-col border border-blue-500 rounded-lg bg-blue-400 p-4 justify-between items-center h-full bg-grey-800'>
                            {/* img container */}
                            <div className='flex-1 flex justify-center items-center relative'>
                              <Image
                                src={require("../../assets/faq/rewards.svg")}
                              />
                            </div>
                            <div className=' font-medium text-xl text-blue-300'>REWARDS</div>
                          </div>
                        </div>
                        {/* website features */}
                        <div className=" w-1/5 p-4 h-48">
                          <div className='flex flex-col border border-blue-500 rounded-lg bg-blue-400 p-4 justify-between items-center h-full bg-grey-800'>
                            {/* img container */}
                            <div className='flex-1 flex justify-center items-center relative'>
                              <Image
                                src={require("../../assets/faq/websitefeatures.svg")}
                              />
                            </div>
                            <div className=' font-medium text-xl text-blue-300'>WEBSITE FEATURES</div>
                          </div>
                        </div>
                        {/* payments */}
                        <div className=" w-1/5 p-4 h-48">
                          <div className='flex flex-col border border-blue-500 rounded-lg bg-blue-400 p-4 justify-between items-center h-full bg-grey-800'>
                            {/* img container */}
                            <div className='flex-1 flex justify-center items-center relative'>
                              <Image
                                src={require("../../assets/faq/payments.svg")}
                              />
                            </div>
                            <div className=' font-medium text-xl text-blue-300'>PAYMENTS</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className='absolute h-full'>
                  <Image
                    src={require('../../assets/faq/background.png')}
                    layout="fill"
                  />
                </div>
              </div>
              {/* faq answers and questions */}
              <div className='mx-auto max-w-7xl font-jost py-16'>
                {/* container */}
                <div className='py-8 px-4 bg-grey-800 border-grey-600 border bg-blue-400 rounded-lg'>
                  <div className="flex flex-row flex-wrap text-lg font-medium">
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                        How to sign up? 
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                      Why can’t I log in?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                      How to add-remove a friend?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                      How to remove the account?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                      I have an issue with my account, how can I contact you?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                      I have an issue with my account, how can I contact you?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                      Can I connect my current TCGLoots account with my Steam acccount that was used in the deleted account?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                      Can I connect my current TCGLoots account with my Steam acccount that was used in the deleted account?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                      I got banned for”untrustworthy connection”. What should I do?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                      I got banned for”untrustworthy connection”. What should I do?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                      Can I change password while being logged in?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-500 py-4 px-8 text-grey-400 bg-white-100 rounded-lg">
                      Can I change password while being logged in?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Footer></Footer>
        </div>
    </div>
  )
}

export default FAQ