import React from 'react'

const LatestNews = () => {
  return (
    <div>
      <div className=' max-w-7xl mx-auto font-jost'>
        <h1 className=" text-4xl font-semibold text-center py-12">Latest News</h1>
        {/* latest news items */}
        <div className='flex'>
          <div className='w-1/4 flex flex-col p-4'>
            <img src="./assets/homepage/latestnews/night.png" alt="" />
            <span className=' text-lg text-ellipsis overflow-hidden whitespace-nowrap px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam sint voluptatum cupiditate labore, aliquam quos modi? Ut illum veniam, quisquam, voluptate dignissimos excepturi dicta eveniet repellat accusamus magnam saepe?</span>
            <p className=' px-4 text-sm'>24 Nov, 2020</p>
          </div>
          <div className='w-1/4 flex flex-col p-4'>
            <img src="./assets/homepage/latestnews/pokemon.png" alt="" />
            <span className=' text-lg text-ellipsis overflow-hidden whitespace-nowrap px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam sint voluptatum cupiditate labore, aliquam quos modi? Ut illum veniam, quisquam, voluptate dignissimos excepturi dicta eveniet repellat accusamus magnam saepe?</span>
            <p className=' px-4 text-sm'>24 Nov, 2020</p>
          </div>
          <div className='w-1/4 flex flex-col p-4'>
            <img src="./assets/homepage/latestnews/tablet.png" alt="" />
            <span className=' text-lg text-ellipsis overflow-hidden whitespace-nowrap px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam sint voluptatum cupiditate labore, aliquam quos modi? Ut illum veniam, quisquam, voluptate dignissimos excepturi dicta eveniet repellat accusamus magnam saepe?</span>
            <p className=' px-4 text-sm'>24 Nov, 2020</p>
          </div>
          <div className='w-1/4 flex flex-col p-4'>
            <img src="./assets/homepage/latestnews/night.png" alt="" />
            <span className=' text-lg text-ellipsis overflow-hidden whitespace-nowrap px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam sint voluptatum cupiditate labore, aliquam quos modi? Ut illum veniam, quisquam, voluptate dignissimos excepturi dicta eveniet repellat accusamus magnam saepe?</span>
            <p className=' px-4 text-sm'>24 Nov, 2020</p>
          </div>
        </div>
        {/* buuton */}
        <div>
          <button className=" border font-jost text-xl rounded-md px-16 py-2">Read more news</button>
        </div>
      </div>
    </div>
  )
}

export default LatestNews