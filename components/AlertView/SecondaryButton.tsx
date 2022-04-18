import React, { ReactNode } from 'react'

interface props {
    children: ReactNode;
}
export default function SecondaryButton(props: props) {
    return (
        <button className="bg-white-100 px-2  font-jost text-sm text-blue-300 border border-1 border-blue-300 rounded-md py-2">
            <div className="w-24 flex-1 items-center ">
                <span>{props.children}</span>
            </div>
        </button>
    )
}