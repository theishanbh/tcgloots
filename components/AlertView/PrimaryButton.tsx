import React, { ReactNode } from 'react'
import Image from 'next/image'

interface props {
    children: ReactNode;
}
export default function PrimaryButton(props: props) {
    return (

        <button className="bg-blue-300 px-2  font-jost text-sm text-white-100 rounded-md py-2">
            <div className="w-24 flex flex-row space-x-2  ">
                <div><Image
                    src={require("../../assets/alerts/instockIcon.svg")}
                    width={18}
                ></Image></div>
                <div className="">{props.children}</div>
            </div>
        </button>
    )
}
