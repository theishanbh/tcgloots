import React, { ReactNode } from 'react'

interface props {
    children: ReactNode;
}

export default function InstoreButton(props: props) {
    return (
        <button className="bg-blue-300 items-center justify-center py-2  font-jost text-sm text-white-100 rounded-md w-24">

            <div className="">{props.children}</div>
        </button>
    )
}
