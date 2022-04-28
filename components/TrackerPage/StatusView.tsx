import Image from 'next/image'
import React from 'react'

export default function StatusView() {
    return (
        <div className='flex flex-col w-full divide-y divide-grey-600'>
            <div className='flex flex-row'>
                <div className='font-jost flex flex-1 text-grey-400 text-lg ml-10'>Status</div>
                <div className='font-jost flex flex-1 text-grey-400 text-lg justify-end items-end'>Date/Time</div>
            </div>
            <div className='flex flex-row justify-between p-2 items-center'>
                <div className='flex-1 items-center justify-center'>
                    <Image src={require('../../assets/trackerpage/addIcon.svg')} />
                </div>
                <div className='text-sm flex-4 font-jost font-medium text-grey-200'>Amazon: Zacian V-UNION Special Collection Out of Stock </div>
                <div className='text-xs flex-col flex-2 font-jost text-center p-2 text-grey-200'>
                    <div>Feb 13</div>
                    <div>1:09 AM EST</div>
                </div>
            </div>
            <div className='flex flex-row justify-between p-2 items-center'>
                <div className='flex-1 items-center justify-center'>
                    <Image src={require('../../assets/trackerpage/addedIcon.svg')} />
                </div>
                <div className='text-sm flex-4 font-jost font-medium text-grey-200'>Amazon: Dragonite V or Hoopa V Box [Assortment] Preorder for $19.99 </div>
                <div className='text-xs flex-col flex-2 font-jost text-center p-2 text-grey-200'>
                    <div>Feb 13</div>
                    <div>1:09 AM EST</div>
                </div>
            </div>
            <div className='flex flex-row justify-between p-2 items-center'>
                <div className='flex-1 items-center justify-center'>
                    <Image src={require('../../assets/trackerpage/addIcon.svg')} />
                </div>
                <div className='text-sm flex-4 font-jost font-medium text-grey-200'>Amazon: Zacian V-UNION Special Collection Out of Stock </div>
                <div className='text-xs flex-col flex-2 font-jost text-center p-2 text-grey-200'>
                    <div>Feb 13</div>
                    <div>1:09 AM EST</div>
                </div>
            </div>
            <div className='flex flex-row justify-between p-2 items-center'>
                <div className='flex-1 items-center justify-center'>
                    <Image src={require('../../assets/trackerpage/addedIcon.svg')} />
                </div>
                <div className='text-sm flex-4 font-jost font-medium text-grey-200'>Amazon: Dragonite V or Hoopa V Box [Assortment] Preorder for $19.99</div>
                <div className='text-xs flex-col flex-2 font-jost text-center p-2 text-grey-200'>
                    <div>Feb 13</div>
                    <div>1:09 AM EST</div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
