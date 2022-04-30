import React from 'react'
import Image from 'next/image'


interface props {
    title: String,
    isLabel : boolean,
    isNew : boolean,
}


export default function StackView({title,isLabel, isNew}:props) {
    return (
        <div className="flex flex-col rounded-lg  w-30 justify-center">
            <div className="flex p-2 h-36 rounded-lg stackView relative m-0.5 justify-center">
                <Image
                    src={require("../../assets/alerts/cardImage.png")}
                    alt={'poster image'}
                ></Image>
                {isLabel && <div className="absolute top-2 left-2">
                    {isNew ? <Image
                        src={require("../../assets/trackerpage/newLabel.svg")}
                        alt={'poster image'}
                    ></Image> : <Image
                        src={require("../../assets/trackerpage/updateLabel.svg")}
                        alt={'poster image'}
                    ></Image>}
                </div>}
           </div>
           <div className="flex pl-2 font-jost text-black-100">{title}</div>
           </div>
            )
}
