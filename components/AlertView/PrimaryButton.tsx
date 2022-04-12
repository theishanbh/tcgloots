import React, { ReactNode } from 'react'
import Image from 'next/image'

interface props {
    children: ReactNode;
}
export default function PrimaryButton(props: props) {
    return (
        <button className="bg-blue-300 px-2  font-jost text-sm text-white-100 rounded-md py-2">
            <div className="flex space-x-3 ">
                <Image
                    src={require("../../assets/alerts/instockIcon.svg")}
                    width={18}
                ></Image>
                <span>{props.children}</span>
            </div>
        </button>
    )
}
