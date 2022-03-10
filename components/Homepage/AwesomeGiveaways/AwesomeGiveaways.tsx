import Image from 'next/image'
import React from 'react'

const AwesomeGiveaways = () => {
  return (
    <div className="font-jost bg-[url('/assets/homepage/awesomegiveaways/background.png')] bg-cover">
      <div className=' mx-auto max-w-7xl text-white py-8'>
        <h1 className=" font-jost text-8xl font-semibold text-center text-white-100 py-8">Awesome Giveaways!</h1>
        <div className=' max-w-7xl mx-auto my-4 p-4 bg-yellow-400 rounded-lg'>
          <div className='flex flex-wrap'>
            <div className='flex flex-col w-1/5 px-4 '>
              <div className='bg-white-100 shadow-lg rounded-md flex-1'>
                <div className=' border-b border-grey-primary '>
                  <img src="./assets/homepage/producttracker/image.png" alt="" className=' mx-auto' />
                </div>
                <div className='p-3'>
                  <p className=' font-medium text-xl text-black-100'>Rainbow Secret Mewtwo and Mew PSA 9</p>
                  <span className=' text-grey-400'>Ends in: 5 days</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-1/5 px-4 '>
              <div className='bg-white-100 shadow-lg rounded-md flex-1'>
                <div className=' border-b border-grey-primary '>
                  <img src="./assets/homepage/producttracker/image.png" alt="" className=' mx-auto' />
                </div>
                <div className='p-3'>
                  <p className=' font-medium text-xl text-black-100'>Rainbow Secret Mewtwo and Mew PSA 9</p>
                  <span className=' text-grey-400'>Ends in: 5 days</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-1/5 px-4 '>
              <div className='bg-white-100 shadow-lg rounded-md flex-1'>
                <div className=' border-b border-grey-primary '>
                  <img src="./assets/homepage/producttracker/image.png" alt="" className=' mx-auto' />
                </div>
                <div className='p-3'>
                  <p className=' font-medium text-xl text-black-100'>Rainbow Secret Mewtwo and Mew PSA 9</p>
                  <span className=' text-grey-400'>Ends in: 5 days</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-1/5 px-4 '>
              <div className='bg-white-100 shadow-lg rounded-md flex-1'>
                <div className=' border-b border-grey-primary opacity-50'>
                  <img src="./assets/homepage/producttracker/image.png" alt="" className=' mx-auto' />
                </div>
                <div className='p-3'>
                  <p className=' font-medium text-xl text-black-100 opacity-50'>Rainbow Secret Mewtwo and Mew PSA 9</p>
                  {/* ended with check */}
                  <span className=' text-grey-400 flex items-center'>
                    <span className=' text-black-100 font-medium'>
                      ENDED
                    </span>
                    <div className='relative flex justify-center items-center ml-2'>
                      <Image
                        src={require("../../../assets/homepage/awesomegiveaways/checkmark.svg")}
                      ></Image>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-1/5 px-4 '>
              <div className='bg-white-100 shadow-lg rounded-md flex-1'>
                <div className=' border-b border-grey-primary opacity-50'>
                  <img src="./assets/homepage/producttracker/image.png" alt="" className=' mx-auto' />
                </div>
                <div className='p-3'>
                  <p className=' font-medium text-xl text-black-100 opacity-50'>Rainbow Secret Mewtwo and Mew PSA 9</p>
                  {/* ended with check */}
                  <span className=' text-grey-400 flex items-center'>
                    <span className=' text-black-100 font-medium'>
                      ENDED
                    </span>
                    <div className='relative flex justify-center items-center ml-2'>
                      <Image
                        src={require("../../../assets/homepage/awesomegiveaways/checkmark.svg")}
                      ></Image>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className=" text-right py-8">
              <button className=" border bg-white-100 border-grey-600 font-jost text-xl text-black-100 rounded-md px-16 py-2 shadow-full">View All</button>
            </div>
      </div>
    </div>
  )
}

export default AwesomeGiveaways