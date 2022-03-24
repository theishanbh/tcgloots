import Image from 'next/image'
// @ts-ignore
import Blur from 'react-css-blur'

const InstoreTracker = () => {
  return (
    <div className='font-jost'>
      <div className=' bg-grey-600'>
        <div className='mx-auto max-w-7xl'>
        <h1 className=" font-jost text-8xl text-black-200 font-semibold text-center py-8">Instore Tracker</h1>
        <p className=" font-jost text-xl text-grey-700 font-medium text-center pb-8">Every week we randomly reward contributors that help the community!</p>
          <div className="bg-contain bg-no-repeat p-20">
            <div className='flex items-center justify-center relative'>
              {/* second left element */}
              <div className='bg-white-100 w-auto inline-block p-3 shadow-xl rounded-lg scale-75 shrink-0 absolute left-0 z-10 blur-md'>
                <div className="flex flex-col">
                  <div>
                    <div className="relative">
                      <Image
                        src={require("../../../assets/homepage/instoretracker/default.png")}
                      >
                      </Image>
                    </div>
                  </div>
                  <div className="flex items-center text-base justify-between py-4 text-black-200 px-4">
                    <div className='w-1/3 border-r border-grey-600 text-center'>
                    Seattle, WA
                    </div>
                    <div className='w-1/3 border-r border-grey-600 text-center'>Gamestop</div>
                    <div className='w-1/3 text-right'>12:00 AM EST</div>
                  </div>
                </div>
              </div>
              {/* first left */}
              <div className='bg-white-100 w-auto inline-block p-3 shadow-xl rounded-lg scale-90 shrink-0 absolute left-40 z-20 blur-sm'>
                <div className="flex flex-col">
                  {/* iamge */}
                  <div>
                    <div className="relative">
                      <Image
                        src={require("../../../assets/homepage/instoretracker/default.png")}
                      >
                      </Image>
                    </div>
                  </div>
                  {/* text container */}
                  <div className="flex items-center text-base justify-between py-4 text-black-200 px-4">
                    <div className='w-1/3 border-r border-grey-600 text-center'>
                    Seattle, WA
                    </div>
                    <div className='w-1/3 border-r border-grey-600 text-center'>Gamestop</div>
                    <div className='w-1/3 text-right'>12:00 AM EST</div>
                  </div>
                </div>
              </div>
              {/* center element */}
              <div className='bg-white-100 w-auto inline-block p-3 shadow-xl rounded-lg shrink-0 z-30'>
                <div className="flex flex-col">
                  {/* iamge */}
                  <div>
                    <div className="relative">
                      <Image
                        src={require("../../../assets/homepage/instoretracker/default.png")}
                      >
                      </Image>
                    </div>
                  </div>
                  {/* text container */}
                  <div className="flex items-center text-base justify-between py-4 text-black-200 px-4">
                    <div className='w-1/3 border-r border-grey-600 text-center'>
                    Seattle, WA
                    </div>
                    <div className='w-1/3 border-r border-grey-600 text-center'>Gamestop</div>
                    <div className='w-1/3 text-right'>12:00 AM EST</div>
                  </div>
                </div>
              </div>
              {/* first right element */}
              <div className='bg-white-100 w-auto inline-block p-3 shadow-xl rounded-lg scale-90 shrink-0 absolute right-40 z-20 blur-sm'>
                <div className="flex flex-col">
                  {/* iamge */}
                  <div>
                    <div className="relative">
                      <Image
                        src={require("../../../assets/homepage/instoretracker/default.png")}
                      >
                      </Image>
                    </div>
                  </div>
                  {/* text container */}
                  <div className="flex items-center text-base justify-between py-4 text-black-200 px-4">
                    <div className='w-1/3 border-r border-grey-600 text-center'>
                    Seattle, WA
                    </div>
                    <div className='w-1/3 border-r border-grey-600 text-center'>Gamestop</div>
                    <div className='w-1/3 text-right'>12:00 AM EST</div>
                  </div>
                </div>
              </div>
              {/* second right element */}
              <div className='bg-white-100 w-auto inline-block p-3 shadow-xl rounded-lg scale-75 shrink-0 absolute right-0 z-10 blur-md'>
                <div className="flex flex-col">
                  {/* iamge */}
                  <div>
                    <div className="relative">
                      <Image
                        src={require("../../../assets/homepage/instoretracker/default.png")}
                      >
                      </Image>
                    </div>
                  </div>
                  {/* text container */}
                  <div className="flex items-center text-base justify-between py-4 text-black-200 px-4">
                    <div className='w-1/3 border-r border-grey-600 text-center'>
                    Seattle, WA
                    </div>
                    <div className='w-1/3 border-r border-grey-600 text-center'>Gamestop</div>
                    <div className='w-1/3 text-right'>12:00 AM EST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className=' font-medium text-xl text-center text-grey-primary'>Every week we randomly reward contributors that help the community!</p>
          <div className='text-center'>
            <button className=' bg-yellow-200 text-center text-xl hover:bg-blue-700 px-12 py-2 text-white rounded my-8'> See more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstoreTracker