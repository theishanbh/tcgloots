import React from 'react'
import Image from 'next/image'
interface AlertItemProps { 
    title : String,
}

export default function AddCard({title}: AlertItemProps) {
    return (
        <div className="flex  flex-row border rounded-lg border-grey-600">
            <div className="flex-1 2md:flex items-center py-2 px-2">
                <Image
                    src={require("../../assets/alerts/cardImage.png")}
                    alt={'poster'}
                ></Image>
            </div>
            <div className="flex-2 flex 2md:flex-2 2md:justify-center items-center   text-center " >
                <div className="font-jost text-xs">
                    {title}
                </div>
            </div>
            <div className="flex 2md:flex-1 2md:justify-end flex-row justify-center pr-2">
                <button className=''><Image
                    src={require("../../assets/alerts/add.svg")}
                ></Image></button>
               </div>
        </div>
    )
}
