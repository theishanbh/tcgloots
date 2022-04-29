import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
export default function ExpandFilter() {
  return (
    <Disclosure>
    <Disclosure.Button className="font-jost w-72 flex flex-row justify-between font-medium h-10 items-center borderbutton pl-8 text-black-100 text-xl  rounded-t-lg">
          <div>Sort by</div>
          <div className='w-8 h-10 mr-6 mt-2'><Image src={require('../../assets/trackerpage/uparrow.svg')}/></div>
    </Disclosure.Button>
    <Disclosure.Panel className="">
    <div className=' bg-white-100 w-72'>
     <div className='flex flex-row space-x-2 py-2'>
     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Game</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>

     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>Game + DLC</div>
     </div>
     <div className='flex flex-row space-x-2 py-2'>

     <div className='font-jost text-lg pl-4 text-grey-200  rounded-t-lg'>DLC</div>
     </div>
     </div>
    </Disclosure.Panel>
  </Disclosure>
  )
}
