import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Alerts = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <div className="mx-auto max-w-7xl">
                <div className='flex'>
                    <div className="flex-7"></div>
                    <div className="flex-3">
                        {/* container */}
                        <div>
                            <div>
                                <h1>Popular</h1>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <div>
                                        <div className='flex'>
                                            <div>
                                                <Image
                                                
                                                />
                                            </div>
                                        </div>
                                    </div>
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

export default Alerts