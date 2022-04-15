import React from 'react'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

interface AlertItemProps { 
    title : String,
    price : String,
    date: String,
    buttonType: String
}

export default function  AlertItemView({title,price,date,buttonType}: AlertItemProps) {
    return (
        <div className="flex  flex-row border items-center bg-white-100  space-x-2 py-2 px-1 rounded-lg border-grey-600 xl:h-20 xl:py xl:px-4">
            <div className="flex-1 flex items-center  xl:w-14 xl:h-10 ">
                <Image
                    src={require("../../assets/alerts/cardImage.png")}
                    alt={'poster image'}
                    width={64}
                    className='object-contain'
                ></Image>              
            </div>
            <div className="flex-2 flex flex-col xl:flex-row xl:flex-4 xl:justify-start xl:items-center xl:mr-8   2md:pt-5 xl:pt-0 space-y-3 xl:space-y-0 justify-center" >
                <div className=" font-jost text-center xl:items-center text-xs xl:text-md xl:text-left ">
                    {title}
                </div>
                <div className=" flex justify-center xl:hidden">
                   {buttonType =='primary' ? <PrimaryButton>IN STOCK</PrimaryButton> : <SecondaryButton>MONITORING</SecondaryButton>}
                </div>
            </div>
            <div className="flex-1  flex flex-col pl-2 xl:pl-0 xl:flex-7 xl:flex-row xl:items-center   xl:justify-start justify-center xl:space-x-14 space-y-3 xl:space-y-0">
                <div>
                    <div className="font-jost text-xs xl:hidden">
                        Last price
                    </div>
                    <div className="font-jost text-green-100 text-xs xl:self-start xl:items-center xl:text-md">
                        € {price}
                    </div>
                </div>
                <div >
                    <div className="font-jost text-xs  xl:hidden">
                        Last stock
                    </div>
                    <div className=" font-jost text-grey-400 text-xs xl:items-center xl:text-md">
                        {date}
                    </div>
                </div>
                <div className="xl:flex xl:flex-1  xl:justify-end xl:items-center xl:visible hidden ">
                   {buttonType =='primary' ? <PrimaryButton>IN STOCK</PrimaryButton> : <SecondaryButton>MONITORING</SecondaryButton>}
                </div>
            </div>
        </div>
    )
}
