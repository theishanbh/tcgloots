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

export default function AlertItemView({title,price,date,buttonType}: AlertItemProps) {
    return (
        <div className="flex  flex-row border space-x-2 py-2 px-1 rounded-lg border-grey-600">
            <div className="flex-1 flex items-center ">
                <Image
                    src={require("../../assets/alerts/cardImage.png")}
                    alt={'poster image'}
                ></Image>              
            </div>
            <div className="flex-2 flex flex-col 2md:pt-5 space-y-3 justify-center" >
                <div className=" font-jost text-center text-xs">
                    {title}
                </div>
                <div className=" flex justify-center">
                   {buttonType =='primary' ? <PrimaryButton>IN STOCK</PrimaryButton> : <SecondaryButton>MONITORING</SecondaryButton>}
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-3 ">
                <div>
                    <div className="font-jost text-xs">
                        Last price
                    </div>
                    <div className="font-jost text-green-100 text-xs">
                        € {price}
                    </div>
                </div>
                <div>
                    <div className="font-jost text-xs">
                        Last stock
                    </div>
                    <div className=" font-jost text-grey-400 text-xs">
                        {date}
                    </div>
                </div>
            </div>
        </div>
    )
}
