import Image from 'next/image'
import React from 'react'
import AlertItemView from '../../components/AlertView/AlertItemView'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import AddCard from '../../components/AlertView/AddCard'
import FadeButton from '../../components/AlertView/FadeButton'

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
            <div className="mx-2">
                <div className="mb-2 mt-5">
                    <h2 className="text-xl font-medium font-jost text-black-100">My Alerts</h2>
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
                        src={require("../../assets/alerts/line.svg")}
                        width={14}
                    ></Image></span>
                    <span className="text-blue-200 ">Telegram
                    </span>
                    <span className=' flex items-center'><Image
                        src={require("../../assets/alerts/telegram.svg")}
                        width={14}
                    ></Image></span>

                </div>
                <div className="flex flex-col justify-center ">
                    {
                        tiles.length > 0 && tiles.map((item, index) => {
                            return <div className="mb-2" key={index}><AlertItemView key={index} title={item.title} price={item.price} date={item.date} buttonType={item.buttonType} /></div>
                        })
                    }

                </div>
                <div className="mt-4 mb-2">
                    <h2 className="text-xl text-black-100 font-jost">Popular</h2>
                </div>
                {
                    addtiles.length > 0 && addtiles.map((item, index) => {
                        return <div className="mb-2" key={index}><AddCard key={index} title={item.title} /></div>
                    })
                }
                <div className='flex justify-center mb-4 mt-8'>
                    <FadeButton>Load More</FadeButton>
                </div>
            </div>
            <div className="basis-1/4">
                <Footer />
            </div>
        </div>
    )
}

export default Alerts
