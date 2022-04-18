import React, { ReactNode } from 'react'
import Image from 'next/image'

interface props {
    children: ReactNode;
    notificationCount: number;
}
export default function ButtonLiveDeal(props: props) {
    return (
        <>
        <div className="bg-white-100 hidden relative xl:flex flex-1 pt-2 pr-2">
            <button className="bg-slate-300 px-2 flex flex-1   font-jost text-sm text-blue-300 border border-1 border-blue-300 rounded-md py-2">
                <div className="flex-1 items-center px-2">
                    <span>{props.children}</span>
                </div>


            </button>
            {
                props.notificationCount > 0 && <div className="absolute top-0 right-0 w-4 h-4 rounded-lg bg-blue-300 font-jost text-xs inline-flex items-center justify-center text-white-100">{props.notificationCount}</div>
            }
        </div>
         <button className="bg-slate-300 px-2 flex flex-1 relative xl:hidden  font-jost text-sm text-blue-300 border border-1 border-blue-300 rounded-md py-2">
             <div className="flex-1 items-center px-2">
                 <span>{props.children}</span>
             </div>


         </button>
         {
             props.notificationCount > 0 && <div className="absolute xl:hidden top-0 right-0 w-4 h-4 rounded-lg bg-blue-300 font-jost text-xs inline-flex items-center justify-center text-white-100">{props.notificationCount}</div>
         }
     </>
    )
}