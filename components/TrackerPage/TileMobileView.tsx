import React from 'react'
import PrimaryButton from '../AlertView/PrimaryButton'
import SecondaryButton from '../AlertView/SecondaryButton'
import Image from 'next/image'
import ButtonLiveDeal from '../Livedeals/ButtonLiveDeal'
interface AlertItemProps {
    title: String,
    price: String,
    date: String,
    buttonType: String,
    isAdded: boolean,
    isLabel: boolean,
    isNew: boolean,
}


export default function TileMobileView({ title, price, date, buttonType, isAdded, isLabel, isNew }: AlertItemProps) {
    return (
        <div className="flex flex-row relative my-4 border items-center bg-white-100  space-x-2 py-2 px-1 rounded-lg border-grey-600 xl:h-20 xl:py xl:px-4">
            <div className="flex-3 flex relative items-center  xl:w-14 xl:h-10 ">
                <Image
                    src={require("../../assets/alerts/cardImage.png")}
                    alt={'poster image'}
                ></Image>
                {isLabel && <div className="absolute top-0 left-0">
                    {isNew ? <Image
                        src={require("../../assets/trackerpage/newLabel.svg")}
                        alt={'poster image'}
                    ></Image> : <Image
                        src={require("../../assets/trackerpage/updateLabel.svg")}
                        alt={'poster image'}
                    ></Image>}
                </div>}
            </div>
            <div className="flex-2 flex flex-col xl:flex-row xl:flex-4 xl:justify-start xl:items-center xl:mr-8   2md:pt-5 xl:pt-0 space-y-3 xl:space-y-0 justify-center" >
                <div className=" font-jost text-center xl:items-center text-xs xl:text-md xl:text-left ">
                    {title}
                </div>
                <div className=" flex  justify-center xl:hidden">
                    {buttonType == 'primary' ? 
                    <button className="bg-blue-300 w-28 font-jost text-sm text-white-100 rounded-md ">
                        <div className="flex justify-center items-center px-2 py-2 ">
                            <span>Added</span>
                        </div>
                    </button> : <ButtonLiveDeal notificationCount={0}>Add</ButtonLiveDeal>}
                </div>
            </div>
            <div className="flex-2  flex flex-col pl-1 pr-2 xl:pl-0 xl:flex-7 xl:flex-row xl:items-center   xl:justify-start justify-center xl:space-x-14 space-y-3 xl:space-y-0">
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

            </div>
            {isAdded ? <div className='absolute top-1 right-1'><Image src={require('../../assets/trackerpage/addedIcon.svg')} /></div> : <div className='absolute top-1 right-1'><Image src={require('../../assets/trackerpage/addIcon.svg')} /></div>}
        </div>
    )
} 
