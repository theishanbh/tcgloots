import React, { ReactNode } from 'react'
import Image from 'next/image'

interface props {
    children: ReactNode;
}
export default function ButtonLiveDeal(props: props) {
    return (
        <button className="bg-grey-500 px-2  font-jost text-sm text-blue-300 border border-1 border-blue-300 rounded-md py-2">
            <div className="flex-1 items-center px-2">
                <span>{props.children}</span>
            </div>
        </button>
    )
}