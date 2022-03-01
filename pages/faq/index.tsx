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
                  <div className='flex flex-col font-jost'>
                    <h1 className='text-center text-5xl font-semibold pt-20'>FAQ</h1>
                    <p className=' text-xl text-center py-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                    <div>
                      <div className="flex">
                        {/* accoutn */}
                        <div className=" w-1/5 p-4 h-48">
                          <div className='flex flex-col border border-blue-discord bg-blue-300 p-4 justify-between items-center h-full bg-grey-800'>
                            {/* img container */}
                            <div className='flex-1 flex justify-center items-center relative'>
                              <Image
                                src={require("../../assets/faq/account.svg")}
                              />
                            </div>
                            <div className=' font-medium text-xl'>ACCOUNTS</div>
                          </div>
                        </div>
                        {/* games */}
                        <div className=" w-1/5 p-4 h-48">
                          <div className='flex flex-col border border-blue-discord bg-blue-300 p-4 justify-between items-center h-full bg-grey-800'>
                            {/* img container */}
                            <div className='flex-1 flex justify-center items-center relative'>
                              <Image
                                src={require("../../assets/faq/games.svg")}
                              />
                            </div>
                            <div className=' font-medium text-xl'>GAMES</div>
                          </div>
                        </div>
                        {/* rewards */}
                        <div className=" w-1/5 p-4 h-48">
                          <div className='flex flex-col border border-blue-discord bg-blue-300 p-4 justify-between items-center h-full bg-grey-800'>
                            {/* img container */}
                            <div className='flex-1 flex justify-center items-center relative'>
                              <Image
                                src={require("../../assets/faq/rewards.svg")}
                              />
                            </div>
                            <div className=' font-medium text-xl'>REWARDS</div>
                          </div>
                        </div>
                        {/* website features */}
                        <div className=" w-1/5 p-4 h-48">
                          <div className='flex flex-col border border-blue-discord bg-blue-300 p-4 justify-between items-center h-full bg-grey-800'>
                            {/* img container */}
                            <div className='flex-1 flex justify-center items-center relative'>
                              <Image
                                src={require("../../assets/faq/websitefeatures.svg")}
                              />
                            </div>
                            <div className=' font-medium text-xl'>WEBSITE FEATURES</div>
                          </div>
                        </div>
                        {/* payments */}
                        <div className=" w-1/5 p-4 h-48">
                          <div className='flex flex-col border border-blue-discord bg-blue-300 p-4 justify-between items-center h-full bg-grey-800'>
                            {/* img container */}
                            <div className='flex-1 flex justify-center items-center relative'>
                              <Image
                                src={require("../../assets/faq/payments.svg")}
                              />
                            </div>
                            <div className=' font-medium text-xl'>PAYMENTS</div>
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
                <div className='py-8 px-4 bg-grey-800 border-blue-discord border'>
                  <div className="flex flex-row flex-wrap text-lg font-medium">
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
                        How to sign up? 
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
                      Why can’t I log in?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
                      How to add-remove a friend?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
                      How to remove the account?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
                      I have an issue with my account, how can I contact you?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
                      I have an issue with my account, how can I contact you?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
                      Can I connect my current TCGLoots account with my Steam acccount that was used in the deleted account?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
                      Can I connect my current TCGLoots account with my Steam acccount that was used in the deleted account?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
                      I got banned for”untrustworthy connection”. What should I do?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
                      I got banned for”untrustworthy connection”. What should I do?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
                      Can I change password while being logged in?
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="border border-blue-200 py-4 pl-8 bg-white">
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