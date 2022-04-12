import React, { ReactNode } from 'react'
import Image from 'next/image'

interface props {
    children: ReactNode;
}
export default function FadeButton(props: props) {
    return (
        <button className="bg-white-100 px-2  font-jost text-sm text-grey-600 border border-1 border-grey-600 rounded-md py-2">
            <div className="flex-1 items-center ">
                <span>{props.children}</span>
            </div>
        </button>
    )
}