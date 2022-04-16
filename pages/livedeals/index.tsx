import Image from 'next/image'
import React from 'react'
import LiveDealCard from '../../components/Livedeals/LiveDealCard'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Dropdown from '../../components/Livedeals/Dropdown'
import ListBox from '../../components/Livedeals/ListBox'


const Livedeals = () => {
    return (
        <div className="flex flex-col content-between from-zinc-300 ">
            <div className="basis-1/4">
                <Navbar />
            </div>
            <div className="mx-2 from-zinc-300">
                <div className="mb-2 mt-5">
                    <h2 className="text-xl font-medium font-jost text-black-100">Live Deals</h2>
                </div>
                <div className=" text-grey-400 text-sm">
                    We also send immediate deals alerts via:
                </div>
                <div className="mb-10 space-x-2 flex items-center text-xs">
                    <span className="text-blue-100 ">Discord
                    </span>
                    <span className='flex items-center'><Image
                        src={require("../../assets/alerts/discord.svg")}
                        width={14}
                    ></Image></span>

                    <span className='flex items-end'><Image
                        src={require("../../assets/alerts/Line.svg")}
                        width={14}
                    ></Image></span>
                    <span className="text-blue-200 ">Telegram
                    </span>
                    <span className=' flex items-center'><Image
                        src={require("../../assets/alerts/telegram.svg")}
                        width={14}
                    ></Image></span>
                </div>

                <div className="flex flex-1 justify-between space-x-4 mb-6 z-40">
                    <div className="flex flex-1"><Dropdown /></div>
                    <div className="flex flex-1"><ListBox/></div>
                    
                    </div>
                <div className="z-30 flex flex-col items-between  mx-2 mb-4 space-y-3">
                    <LiveDealCard isLink={false} />
                    <LiveDealCard isLink={true} />
                    <LiveDealCard isLink={false} />
                </div>
            </div>
            <div className="b
            sis-1/4">
                <Footer />
            </div>
        </div>
    )
}

export default Livedeals





