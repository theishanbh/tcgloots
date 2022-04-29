import Image from 'next/image'
import React from 'react'

export default function HistoryComponent() {
  return (
    <div className='flex flex-col'>
     <div className='flex flex-row space-x-2 items-center'>
     <div className='w-10 h-10'>
         <Image src={require('../../assets/trackerpage/recent.svg')}/>
     </div>
     <div className='font-jost text-black-100 font-medium text-4xl'>Recent Stock History</div>
     </div>
     <div className='flex flex-row items-baseline mt-4 space-x-4'>
       <div>
       <button className="bg-yellow-200  rounded-lg py-2">
            <div className="w-28 flex flex-row items-center justify-center space-x-4  ">
                <div className="font-jost text-lg text-black-100">Refresh</div>
            </div>
        </button>
       </div>
       <div className='text-sm font-jost text-grey-400'>Updates apprx. every 5 minutes</div>
     </div>
     <div className='mt-10'>
     <table className="w-full divide-y  divide-grey-600">
                <thead>
                    <tr className="w-full">
                        <th className="flex justify-start font-jost font-medium text-xl text-grey-400">Date/Time</th>
                        <th className=" font-jost font-medium text-xl text-grey-400 ">Status</th>
                    </tr>
                </thead>
                <tbody className='divide-y  divide-grey-600'>
                    <tr className="">
                        <td className='font-jost w-72 text-sm text-grey-200'>Feb 13 - 1:09 AM EST</td>
                        <td className='font-jost text-sm text-grey-200'>
                            <div className='flex flex-row justify-between items-center' >
                               <div className=''> Amazon: Zacian V-UNION Special Collection Out of Stock </div>
                                <div className='w-6 h-6'><Image src={require('../../assets/trackerpage/cross.svg')}/></div>
                            </div></td>
                    </tr>
                    <tr className="">
                        <td className='font-jost w-72 text-sm text-grey-200'>Feb 13 - 1:09 AM EST</td>
                        <td className='font-jost text-sm text-grey-200'>
                        <div className='flex flex-row justify-between items-center' >
                               <div className=''> Amazon: Dragonite V or Hoopa V Box [Assortment] Preorder for $19.99</div>
                                <div className='w-6 h-6'><Image src={require('../../assets/trackerpage/check.svg')}/></div>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className='font-jost w-72 text-sm text-grey-200'>Feb 13 - 1:09 AM EST</td>
                        <td className='font-jost text-sm text-grey-200'>
                        <div className='flex flex-row justify-between items-center' >
                               <div className=''> Amazon: Zacian V-UNION Special Collection Out of Stock </div>
                                <div className='w-6 h-6'><Image src={require('../../assets/trackerpage/cross.svg')}/></div>
                            </div>
                        </td>
                    </tr>
                    <tr className="">
                        <td className='font-jost w-72 text-sm text-grey-200'>Feb 13 - 1:09 AM EST</td>
                        <td className='font-jost text-sm text-grey-200'>
                        <div className='flex flex-row justify-between items-center' >
                               <div className=''> Amazon: Dragonite V or Hoopa V Box [Assortment] Preorder for $19.99</div>
                                <div className='w-6 h-6'><Image src={require('../../assets/trackerpage/check.svg')}/></div>
                            </div>
                        </td>
                    </tr>
                    <tr></tr>
                </tbody>
            </table>
            <div className="flex flex-row items-center justify-center mt-8 space-x-2">
                <div className="text-blue-300 text-sm font-jost">Expanded History &nbsp; <span className="text-grey-200 text-lg">{'>'}</span></div>
        
            </div>
     </div>
    </div>
  )
}
