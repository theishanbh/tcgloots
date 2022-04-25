import Image from 'next/image'
import React from 'react'
import SearchIcon from '../../assets/instorefinds/search.svg'
export default function SearchComponent() {
  return (
    <div className="w-80 h-56 flex flex-col box-shadow-div rounded-lg overflow-hidden">
      <div className="h-full">
      <div className="h-1/6 bg-slate-500 border rounded-t-lg border-grey-600 inline-flex flex-row w-full px-2 items-center">
      <input className="text-lg  font-medium  w-full focus:border-none font-jost text-center text-black-100 placeholder-black-100 bg-slate-500 " placeholder="Submitted Today (xx)"/>
       <Image src={SearchIcon} alt='search icon'/>
      </div>
      <div className="h-5/6 pl-8 overflow-y-scroll scrollbar">
       <ul className="py-1">
       <li className="text-sm my-2 font-jost text-black-100 font-normal">
       Seattle, WA (2)
       </li>
       <li className="text-sm my-2 font-jost text-black-100 font-normal">
       Phoenix, AZ
       </li>
       <li className="text-sm my-2 font-jost text-black-100 font-normal">
       Seattle, WA
       </li>
       <li className="text-sm my-2 font-jost text-black-100 font-normal">
       Phoenix, AZ
       </li>
       <li className="text-sm my-2 font-jost text-black-100 font-normal">
       Seattle, WA
       </li>
       <li className="text-sm my-2 font-jost text-black-100 font-normal">
       Phoenix, AZ
       </li>
       <li className="text-sm my-2 font-jost text-black-100 font-normal">
       Seattle, WA
       </li>
       <li className="text-sm my-2 font-jost text-black-100 font-normal">
       Phoenix, AZ
       </li>
       </ul>
      </div>
      </div>
    </div>
  )
}
