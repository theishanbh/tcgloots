import React, { ReactNode } from 'react'
import Image from 'next/image'

interface props {
    children: ReactNode;
}
export default function PrimaryButtonLiveDeal(props: props) {
    return (
        <button className="bg-yellow-100 font-jost text-sm text-white-100 rounded-md ">
            <div className="flex justify-center items-center px-2 py-2 ">
                <span>{props.children}</span>
            </div>
        </button>
    )
}
