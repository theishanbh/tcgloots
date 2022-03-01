import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Giveaways = () => {
  return (
    <div>
        <div>
            <Navbar></Navbar>
            <div className='mx-auto max-w-7xl font-jost'>
              <div className='flex flex-col font-jost'>
                <h1 className='text-center text-5xl font-semibold pt-20'>Giveaways</h1>
                <p className=' text-xl text-center py-20'>Lorem ipsum dolor sit amet...</p>
              </div>
              <div className='py-8'>
                <div className="flex flex-wrap p-4">
                  <div className="w-1/3 p-2">
                    <div className="flex flex-col border border-black-100 p-4 rounded-lg">
                      <h1 className='text-center text-xl'>Rainbow Secret Mewtwo & Mew PSA 9</h1>
                      <div className='flex justify-center items-center my-4'>
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p className='text-xl'>Ends in: 5 days</p>
                        <button className='border font-jost text-white bg-yellow-primary text-base font-medium rounded-md px-12 py-2 ml-2'>REGISTER</button>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 p-2">
                    <div className="flex flex-col border border-black-100 p-4 rounded-lg">
                      <h1 className='text-center text-xl'>Rainbow Secret Mewtwo & Mew PSA 9</h1>
                      <div className='flex justify-center items-center my-4'>
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p className='text-xl'>Ends in: 5 days</p>
                        <button className='border font-jost text-white bg-yellow-primary text-base font-medium rounded-md px-12 py-2 ml-2'>REGISTER</button>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 p-2">
                    <div className="flex flex-col border border-black-100 p-4 rounded-lg">
                      <h1 className='text-center text-xl'>Rainbow Secret Mewtwo & Mew PSA 9</h1>
                      <div className='flex justify-center items-center my-4'>
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p className='text-xl'>Ends in: 5 days</p>
                        <button className='border font-jost text-white bg-yellow-primary text-base font-medium rounded-md px-12 py-2 ml-2'>REGISTER</button>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 p-2">
                    <div className="flex flex-col border border-black-100 p-4 rounded-lg">
                      <h1 className='text-center text-xl'>Rainbow Secret Mewtwo & Mew PSA 9</h1>
                      <div className='flex justify-center items-center my-4'>
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p className='text-xl'>Ends in: 5 days</p>
                        <button className='border font-jost text-white bg-yellow-primary text-base font-medium rounded-md px-12 py-2 ml-2'>REGISTER</button>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 p-2">
                    <div className="flex flex-col border border-black-100 p-4 rounded-lg">
                      <h1 className='text-center text-xl'>Rainbow Secret Mewtwo & Mew PSA 9</h1>
                      <div className='flex justify-center items-center my-4'>
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p className='text-xl'>Ends in: 5 days</p>
                        <button className='border font-jost text-white bg-yellow-primary text-base font-medium rounded-md px-12 py-2 ml-2'>REGISTER</button>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 p-2">
                    <div className="flex flex-col border border-black-100 p-4 rounded-lg">
                      <h1 className='text-center text-xl'>Rainbow Secret Mewtwo & Mew PSA 9</h1>
                      <div className='flex justify-center items-center my-4'>
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p className='text-xl'>Ends in: 5 days</p>
                        <button className='border font-jost text-white bg-yellow-primary text-base font-medium rounded-md px-12 py-2 ml-2'>REGISTER</button>
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

export default Giveaways