import Image from 'next/image'
import React from 'react'
import AlertItemView from '../../components/AlertView/AlertItemView'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import AddCard from '../../components/AlertView/AddCard'
import FadeButton from '../../components/AlertView/FadeButton'
import NotificationView from '../../components/AlertView/NotificationView'

const tiles = [
    {
        title: 'Sony PlayStation 5 Console (PS5)',
        price: '499.99',
        date: '12 Dec, 08:08',
        buttonType: 'secondary',
    },
    {
        title: 'Sony PlayStation 5 Console (PS5)',
        price: '499.99',
        date: '12 Dec, 08:08',
        buttonType: 'primary',
    },
    {
        title: 'Sony PlayStation 5 Console (PS5)',
        price: '499.99',
        date: '12 Dec, 08:08',
        buttonType: 'secondary',
    },
    {
        title: 'Sony PlayStation 5 Console (PS5)',
        price: '499.99',
        date: '12 Dec, 08:08',
        buttonType: 'primary',
    },
    {
        title: 'Sony PlayStation 5 Console (PS5)',
        price: '499.99',
        date: '12 Dec, 08:08',
        buttonType: 'secondary',
    },
    {
        title: 'Sony PlayStation 5 Console (PS5)',
        price: '499.99',
        date: '12 Dec, 08:08',
        buttonType: 'primary',
    },
]

const addtiles = [
    {
        title: 'Consequat sint officia ea deserunt mollit officia ',
    },
    {
        title: 'Consequat sint officia ea deserunt mollit officia ',
    },
    {
        title: 'Consequat sint officia ea deserunt mollit officia ',
    },
    {
        title: 'Consequat sint officia ea deserunt mollit officia ',
    },
    {
        title: 'Consequat sint officia ea deserunt mollit officia ',
    },

]


const Alerts = () => {
    return (
        <div className="flex flex-col content-between ">
            <div className="basis-1/4">
                <Navbar />
            </div>
            <div className="mx-2 xl:mb-10 xl:mx-0 xl:flex flex-col xl:justify-center xl:flex-row  ">
                <div className="xl:flex-3 xl:from-zinc-300	">
                <div className="xl:ml-28 xl:flex xl:flex-row xl:items-center xl:mt-20">
                    <div className="mb-2 mt-5 xl:flex-2 xl:flex-row">
                        <div className="hidden xl:inline pr-5 ">
                            <Image
                                src={require("../../assets/alerts/notifications.svg")}
                                alt={'notifications'}
                                width={24}
                            ></Image>
                        </div>
                        
                        <h2 className="text-xl font-medium font-jost xl:inline text-black-100 xl:text-8xl">My Alerts</h2>
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
                <div className="xl:flex xl:ml-28 ">
                    <div className="flex flex-col justify-center xl:w-5/6 ">
                        <div className=" flex-row justify-between hidden xl:flex">
                            <div className="font-jost text-base text-black-100 flex-3">Tracked Products</div>
                            <div className="font-jost text-base text-black-100 flex-1">Last Price</div>
                            <div className="font-jost text-base text-black-100 flex-1">Last Stock</div>
                            <div className="font-jost text-base text-grey-400 flex-2">Constantly checking for stock</div>
                        </div>
                        {
                            tiles.length > 0 && tiles.map((item, index) => {
                                return <div className="mb-2 " key={index}><AlertItemView key={index} title={item.title} price={item.price} date={item.date} buttonType={item.buttonType} /></div>
                            })
                        }

                    </div>
                </div>
                </div>
               <div className="xl:flex-1 xl:bg-white-100 border border-white-100 ">
                <div className="mt-4 mb-2 xl:mt-14 xl:mb-12 ">
                    <h2 className="text-xl text-black-100 font-jost">Popular</h2>
                </div>
                {
                    addtiles.length > 0 && addtiles.map((item, index) => {
                        return <div className="mb-2 xl:mr-4" key={index}><AddCard key={index} title={item.title} /></div>
                    })
                }
                <div className='flex justify-center mb-4 mt-8 xl:hidden'>
                    <FadeButton>Load More</FadeButton>
                </div>
                </div>
            </div>

            <div className="basis-1/4">
                <Footer />
            </div>
        </div>
    )
}

export default Alerts
