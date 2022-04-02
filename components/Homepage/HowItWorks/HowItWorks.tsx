import React from 'react'

const HowItWorks = () => {
  return (
    <div className="font-jost bg-[url('/assets/homepage/howitworks/background.png')] bg-cover bg-no-repeat bg-center">
      <div className='mx-auto max-w-7xl px-10 2md:px-20 py-10 md:py-24'>
        <div className=' px-6 2md:px-20 py-8 bg-white-100 rounded-xl shadow-full'>
          <div className=''>
            <h1 className=" text-center md:text-left text-5xl md:text-7xl font-jost py-8 underline underline-offset-8 leading-10 decoration-yellow-200">How does it work?</h1>
            <p className=' text-center md:text-left text-base 2md:text-2lg text-grey-400 font-light text-grey-primary'>Tell us which product you are interested in. When it is in stock, we instantly send a notification to your:</p>
            <div>
            <div className='flex flex-col-reverse md:flex-row'>
              {/* left */}
              <div className='flex-1 flex flex-col flex-grow justify-around font-medium py-2 md:py-8'>
                {/* first phone/tablet*/}
                <div className='flex py-4 mx-auto md:mx-0'>
                  <div className=''>
                    <img src="./assets/homepage/howitworks/phoneortablet.svg" alt="" />
                  </div>
                  {/* info container */}
                  <div className='flex flex-col pl-4'>
                    <span className=' text-lg md:text-xl text-grey-400 leading-none'>PHONE OR TABLET</span>
                    <span className='pt-1'>
                      <span className=' text-blue-100 text-lg md:text-xl'>Discord </span>
                      <img src="./assets/logos/discord.svg" alt="" className='inline'/>
                      <span className='text-lg md:text-xl'> or </span>
                      <span className='text-blue-200 text-lg md:text-xl'>Telegram </span>
                      <img src="./assets/logos/telegram.svg" alt="" className='inline'/>
                    </span>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-center md:justify-evenly flex-grow">
                  {/* email */}
                  <div className='flex py-4 pr-4 md:pr-0'>
                    <div className=''>
                      <img src="./assets/homepage/howitworks/email.svg" alt="" />
                    </div>
                    {/* info container */}
                    <div className='flex flex-col pl-4'>
                      <span className=' text-xl text-grey-400 leading-none'>EMAIL</span>
                      <span className='pt-1'>
                        <span className='text-blue-200 text-xl'>Register </span>
                      </span>
                    </div>
                  </div>
                  {/* browser */}
                  <div className='flex py-4 pl-4 md:pl-0'>
                    <div className=''>
                      <img src="./assets/homepage/howitworks/browser.svg" alt="" />
                    </div>
                    {/* info container */}
                    <div className='flex flex-col pl-4'>
                      <span className=' text-xl text-grey-400 leading-none'>BROWSER</span>
                      <span className='pt-1'>
                        <span className='text-blue-200 text-xl'>Register </span>
                      </span>
                    </div>
                  </div>
                </div>
                
              </div>
              {/* right */}
              <div className='flex-1 flex justify-center items-center'>
                <img src="./assets/homepage/howitworks/devices.png" alt="" />
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks