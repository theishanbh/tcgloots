import React from 'react'

const NewsHero = () => {
  return (
    <div className="bg-[url('/assets/news/news/background.png')] bg-bottom bg-cover py-12">
        <div className='mx-auto max-w-7xl font-jost'>
            <h1 className="font-jost text-4xl font-semibold text-center">News</h1>
            <div className='flex flex-wrap py-8'>
              <div className='flex flex-col w-1/4 px-4 '>
                <div className='bg-colors-white shadow-lg rounded-md'>
                  {/* image container */}
                  <div className=' border-b border-colors-grey-100 '>
                    <img src="./assets/news/news/image1.png" alt="" className='h-full w-full' />
                  </div>
                  {/* text container */}
                  <div className='flex flex-col p-2'>
                    <p className=' font-medium text-xl text-colors-black-100'>Rainbow Secret Mewtwo and Mew PSA 9</p>
                    <span className=' text-colors-grey-100 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</span>
                    <div className='flex justify-between items-center'>
                      <p className=' text-base'>1 Dec 2021</p>
                      <button className='border bg-colors-grey-400 text-colors-black-100 font-jost text-base rounded-md px-1'>Category</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col w-1/4 px-4 '>
                <div className='bg-colors-white shadow-lg rounded-md'>
                  {/* image container */}
                  <div className=' border-b border-colors-grey-100 '>
                    <img src="./assets/news/news/image2.png" alt="" className='h-full w-full' />
                  </div>
                  {/* text container */}
                  <div className='flex flex-col p-2'>
                    <p className=' font-medium text-xl text-colors-black-100'>Rainbow Secret Mewtwo and Mew PSA 9</p>
                    <span className=' text-colors-grey-100 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</span>
                    <div className='flex justify-between items-center'>
                      <p className=' text-base'>1 Dec 2021</p>
                      <button className='border bg-colors-grey-400 text-colors-black-100 font-jost text-base rounded-md px-1'>Category</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col w-1/4 px-4 '>
                <div className='bg-colors-white shadow-lg rounded-md'>
                  {/* image container */}
                  <div className=' border-b border-colors-grey-100 '>
                    <img src="./assets/news/news/image2.png" alt="" className='h-full w-full' />
                  </div>
                  {/* text container */}
                  <div className='flex flex-col p-2'>
                    <p className=' font-medium text-xl text-colors-black-100'>Rainbow Secret Mewtwo and Mew PSA 9</p>
                    <span className=' text-colors-grey-100 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</span>
                    <div className='flex justify-between items-center'>
                      <p className=' text-base'>1 Dec 2021</p>
                      <button className='border bg-colors-yellow-primary text-colors-black-100 font-jost text-base rounded-md px-1'>Featured</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col w-1/4 px-4 '>
                <div className='bg-colors-white shadow-lg rounded-md'>
                  {/* image container */}
                  <div className=' border-b border-colors-grey-100 '>
                    <img src="./assets/news/news/image4.png" alt="" className='h-full w-full' />
                  </div>
                  {/* text container */}
                  <div className='flex flex-col p-2'>
                    <p className=' font-medium text-xl text-colors-black-100'>Rainbow Secret Mewtwo and Mew PSA 9</p>
                    <span className=' text-colors-grey-100 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</span>
                    <div className='flex justify-between items-center'>
                      <p className=' text-base'>1 Dec 2021</p>
                      <button className='border bg-colors-grey-400 text-colors-black-100 font-jost text-base rounded-md px-1'>Category</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default NewsHero