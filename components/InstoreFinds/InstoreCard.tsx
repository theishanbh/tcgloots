import React from 'react'
import Image from 'next/image'

interface props {
  isdes: boolean
}

export default function InstoreCard(props: props) {
  return (
    <div className="flex  flex-col   rounded-lg bg-white-100 shadow-default shadow-slate-100 px-2 py-2">
      <div className="flex-1 flex flex-row ">
        <div className="flex-1 flex-col">
          <div className="inline-flex  flex-row ">
            <div className="pb-4">
              <div className='relative pr-2'>
                <Image
                  src={require("../../assets/instorefinds/avatar.png")}
                  width={32}
                  height={32}
                  alt={'avatar'}
                />
                <div className='absolute top-4 left-5'>
                  <Image
                    src={require("../../assets/instorefinds/ribbon.png")}
                    width={20}
                    height={22}
                    alt={'avatar'}

                  ></Image>
                </div>
              </div>

            </div>
            <div className="flex-1 flex-col">
              <div className='text-grey-400 text-lg font-jost'>User12345678</div>
              <div className='text-grey-400 text-xs font-jost'>3 h ago</div>
            </div>
          </div>
          <div className="flex-1 flex flex-row space-x-1 ">
            <div className="w-16 h-6 flex justify-center items-center rounded-sm  font-jost border border-black-100 bg-white-100 text-xs text-black-100">Seattle, WA</div>
            <div className="w-16 h-6 flex justify-center items-center rounded-sm font-jost border border-black-100 bg-white-100 text-xs text-black-100">Target</div>
            <div className="w-20 h-6 flex justify-center items-center rounded-sm font-jost border border-black-100 bg-white-100 text-xs text-black-100">12:00 AM EST</div>
          </div>
        </div>

        <div className='flex-1 flex pl-1 bg-contain'>
          <div className='relative pr-1'>
            <Image
              src={require("../../assets/instorefinds/animeImage.png")}
              width={70}
              height={70}
              alt={'cartoon'}
              className="relative"
            ></Image>
            <div className='absolute top-0 right-1'>
              <Image
                src={require("../../assets/instorefinds/fig.png")}
                width={20}
                height={22}
                alt={'avatar'}

              ></Image>
            </div>
          </div>

        </div>
      </div>
      {props.isdes ? <div className='font-jost text-black-100 text-sm mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</div> : <></>}

    </div>
  )
}
