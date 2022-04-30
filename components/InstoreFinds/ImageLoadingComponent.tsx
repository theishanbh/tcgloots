import Image from 'next/image'
import React from 'react'

export default function ImageLoadingComponent() {
  return (
    <div className='flex flex-1 flex-row space-x-2 justify-center '>
      <span className='pr-4 pt-2'><Image width={28} height={32}  src={require("../../assets/instorefinds/jpgIcon.svg")}/></span>
      <div className='flex flex-2 flex-col space-y-1'>
        <div className=' flex-1 flex  flex-row font-jost text-sm text-blue-100 space-x-1 font-light pr-2'>IMG_0933.jpg &nbsp;<Image width={16} height={16}  src={require("../../assets/instorefinds/checkIcon.svg")} />
        </div>
        <div className='pl-2'></div>
       
        <div className='font-jost text-xs text-grey-400 pr-2 font-light'>7 MB</div>
      </div>
      <div className='flex flex-1 pr-4 pb-2 justify-end'> <Image width={11} height={11}  src={require("../../assets/instorefinds/cross.svg")}/></div>
    </div>
  )
}
