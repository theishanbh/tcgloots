import Image from 'next/image'
import React from 'react'
import LiveDealCard from '../../components/Livedeals/LiveDealCard'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Dropdown from '../../components/Livedeals/Dropdown'
import ListBox from '../../components/Livedeals/ListBox'
import NotificationView from '../../components/AlertView/NotificationView'


const Livedeals = () => {
    return (
        <div className="flex flex-col content-between from-zinc-300 ">
            <div className="basis-1/4">
                <Navbar />
            </div>
            <div className="mx-2 xl:mb-10 xl:mx-0 xl:flex flex-col xl:justify-center xl:flex-row  ">
            <div className="xl:flex-3 mx-2 from-zinc-300">
            <div className="xl:ml-28 xl:flex xl:flex-row xl:items-center xl:mt-20">
                    <div className="mb-2 mt-5 xl:flex-2 xl:flex-row">
                        <div className="hidden xl:inline pr-5 ">
                            <Image
                                src={require("../../assets/alerts/notifications.svg")}
                                alt={'notifications'}
                                width={24}
                            ></Image>
                        </div>
                        
                        <h2 className="text-xl font-medium font-jost xl:inline text-black-100 xl:text-8xl">Live Deals</h2>
                    </div>
                    <div className=" text-grey-400  xl:flex xl:flex-2 xl:mb-2 xl:mt-5 text-sm xl:justify-center">
                        We also send immediate deals alerts via:
                    </div>
                    <div className="mb-10 space-x-2 xl:flex-2 xl:mb-2 xl:mt-5 flex items-center xl:justify-start text-xs">
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
                </div>
                <div className="hidden xl:w-4/6 xl:ml-28 xl:mt-5 xl:mb-20  xl:block"><NotificationView>Youll be notified when the following products are back in stock. Manage notification preferences in Settings. Not sure if your alerts are working? Watch this Demo product to test out receiving them every minute. </NotificationView></div>

                <div className="xl:hidden flex flex-1 justify-between space-x-4 mb-6 z-40">
                    <div className="flex flex-1"><Dropdown /></div>
                    <div className="flex flex-1"><ListBox/></div>
                    </div>
               <div className="hidden xl:flex flex-1  flex-row items-between ml-28 mr-10 mb-2">
                        <div className="flex flex-2"><ListBox/></div>
                        <div className="flex flex-4"></div>
                        <div className="flex flex-3 items-center justify-end text-sm whitespace-normal">Constantly adding new deals 
                        &nbsp;<Image src={require('../../assets/livedeals/loader.png')} className='animate-spin w-2'/></div>
                </div>
                <div className="xl:ml-28 xl:mr-10 z-30  flex flex-col items-between  mx-2 mb-40 space-y-3">
                    <LiveDealCard isLink={false} />
                    <LiveDealCard isLink={true} />
                    <LiveDealCard isLink={false} />
                    <LiveDealCard isLink={true} />
                    <LiveDealCard isLink={false} />
                </div>
            </div>
            <div className="hidden xl:flex flex-1 flex-row ">
                <div className="mt-96 flex flex-1 pl-6 pt-6 w-60"><Dropdown /></div></div>
            </div>
            <div className="b
            sis-1/4">
                <Footer />
            </div>
        </div>
    )
}

export default Livedeals





