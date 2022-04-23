import React from 'react'
import Image from 'next/image'

interface props{
    setShowdes : (des:boolean) => void
}

export default function InstoreCardDescription(props: props) {
    return (
        <div className='flex-1 flex-col flex mx-4 my-6 xl:my-0 xl:mx-0 xl:h-full xl:mt-4' onClick={()=>props.setShowdes(false)}>
            <div className='pl-1 mb-10 xl:hidden'>
                <Image
                    src={require("../../assets/instorefinds/backIcon.svg")}
                    width={8}
                    height={16}
                ></Image>
            </div>
            <div className='flex  flex-col xl:h-full rounded-lg bg-white-100 shadow-default shadow-slate-100 xl:shadow-none xl:rounded-none px-2 py-2'>

            <div className="flex-1 flex flex-row pb-4">
                <Image
                  src={require("../../assets/instorefinds/avatar.png")}
                  width={45}
                  height={45}
                  alt={'avatar'}
                />
            <div className="flex-1 flex flex-col xl:flex-row xl:space-x-4 xl:items-baseline xl:pt-2 pl-2">
              <div className='text-grey-400 text-lg font-jost'>User12345678</div>
              <div className='text-grey-400 text-xs font-jost'>3 h ago</div>
            </div>
          </div>
          <div className="flex-1 mx-2">
          <div className='relative pr-1'>
            <Image
              src={require("../../assets/instorefinds/cardImage.png")}
              width={300}
              height={300}
              alt={'cartoon'}
              className="relative"
            ></Image>
            <div className='absolute top-0 right-1'>
              <Image
                src={require("../../assets/instorefinds/cardfig.png")}
                width={44}
                height={44}
                alt={'avatar'}

              ></Image>
            </div>
            <div className='absolute bottom-0 right-1'>
              <Image
                src={require("../../assets/instorefinds/checkCircle.svg")}
                width={44}
                height={44}
                alt={'avatar'}

              ></Image>
            </div>
          </div>
          </div>
          <div className='flex-1 flex flex-row mx-2 xl:my-2  space-x-10'>
              <div className='font-jost text-sm text-grey-400  '>Location:</div>
              <div className='font-jost text-sm text-black-100'>Seattle, WA</div>
          </div>
          <div className='flex-1 flex flex-row mx-2 xl:my-2 space-x-10'>
              <div className='font-jost text-sm text-grey-400  '>Store:</div>
              <div className='font-jost text-sm text-black-100 pl-4'>Gamestop</div>
          </div>
          <div className='flex-1 flex flex-row mx-2 xl:my-2 space-x-10'>
              <div className='font-jost text-sm text-grey-400  '>Time:</div>
              <div className='font-jost text-sm text-black-100 pl-4'>12:00 AM EST</div>
          </div>
          <div className='flex-1 flex flex-col mx-2 xl:my-2 mb-2'>
              <div className='font-jost text-sm text-grey-400  '>Additional:</div>
              <div className='font-jost text-sm text-black-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
          </div>
            </div>
        </div>
    )
}
