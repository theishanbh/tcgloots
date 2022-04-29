import React, { ReactNode } from 'react'
import Image from 'next/image'

interface props {
    children: ReactNode
}
export default function PrimaryButtonWithRightIcon(props: props) {
    return (
        <button className="bg-blue-300 px-2  font-jost text-sm text-white-100 rounded-lg py-2">
            <div className="w-48 flex flex-row items-center justify-center space-x-4  ">
                <div className="font-jost text-xl">{props.children}</div>
                <div className='my-1'><Image
                    src={require("../../assets/trackerpage/rightArrow.svg")}
                    width={10}
                ></Image></div>

            </div>
        </button>
    )
}
