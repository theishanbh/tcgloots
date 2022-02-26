import React from 'react'

const HowItWorks = () => {
  return (
    <div className="font-jost bg-[url('/assets/homepage/howitworks/background.png')] bg-cover bg-no-repeat bg-center">
      <div className='mx-auto max-w-7xl px-20 py-8'>
        <div className='px-20 py-8 bg-white'>
          <div className=''>
            <h1 className=" text-4xl font-jost font-semibold py-8 underline underline-offset-8 decoration-yellow-primary">How does it work?</h1>
            <p className=' text-xl font-light text-grey-primary'>Tell us which product you are interested in. When it is in stock, we instantly send a notification to your:</p>
            <div>
            <div className='flex flex-row'>
              {/* left */}
              <div className='flex-1 flex flex-col justify-around'>
                {/* first phone/tablet*/}
                <div className='flex'>
                  <div className=''>
                    <img src="./assets/homepage/howitworks/phoneortablet.svg" alt="" />
                  </div>
                  {/* info container */}
                  <div className='flex flex-col pl-4'>
                    <span className=' font-medium text-xl text-grey-primary leading-none'>PHONE OR TABLET</span>
                    <span className='pt-1'>
                      <span className=' text-blue-discord text-xl'>Discord </span>
                      <img src="./assets/logos/discord.svg" alt="" className='inline'/>
                      <span className='text-xl'> or </span>
                      <span className='text-blue-200 text-xl'>Telegram </span>
                      <img src="./assets/logos/telegram.svg" alt="" className='inline'/>
                    </span>
                  </div>
                </div>
                {/* email */}
                <div className='flex'>
                  <div className=''>
                    <img src="./assets/homepage/howitworks/email.svg" alt="" />
                  </div>
                  {/* info container */}
                  <div className='flex flex-col pl-4'>
                    <span className=' font-medium text-xl text-grey-primary leading-none'>EMAIL</span>
                    <span className='pt-1'>
                      <span className='text-blue-200 text-xl'>Register </span>
                    </span>
                  </div>
                </div>
                {/* browser */}
                <div className='flex'>
                  <div className=''>
                    <img src="./assets/homepage/howitworks/browser.svg" alt="" />
                  </div>
                  {/* info container */}
                  <div className='flex flex-col pl-4'>
                    <span className=' font-medium text-xl text-grey-primary leading-none'>BROWSER</span>
                    <span className='pt-1'>
                      <span className='text-blue-200 text-xl'>Register </span>
                    </span>
                  </div>
                </div>
                
              </div>
              {/* right */}
              <div className='flex-1'>
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