import React from 'react'

const Default = () => {
  return (
    <div>
        <div className=' max-w-7xl mx-auto text-center h-screen'>
            <div className='h-full flex flex-col my-auto justify-center items-center'>
                <h1 className=' text-8xl font-bold'>404</h1>
                <p className=' text-2xl w-full py-4'>We couldn&apos;t find the page you were looking for. Maybe our FAQ can help?</p>
                <div>
                    <button className=" my-2 border text-blue-primary bg-white border-blue-primary font-jost text-xl rounded-md px-16 py-2">Back To Home</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Default