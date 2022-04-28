import Image from 'next/image'
import React from 'react'

interface props{
  isFocus:string,
  setFocus:(value:string) => void,
}

export default function GridButton({isFocus,setFocus}:props) {
    
  return (
    <div className="w-16 h-8 rounded-sm flex flex-row">
        <button className={isFocus == 'stack'?"bg-yellow-200 w-1/2 rounded-l-md": "bg-white-100 w-1/2 border border-grey-600 rounded-l-md"} onClick={()=>{setFocus('stack')}}>
        <Image src={require('../../assets/trackerpage/stack.svg')}/>
       </button>
        <button className={isFocus == 'grid'?"bg-yellow-200 w-1/2  rounded-r-md": "bg-white-100 w-1/2 border rounded-r-md border-grey-600"}  onClick={()=>{setFocus('grid')}}>
        <Image src={require('../../assets/trackerpage/grid.svg')}/>
       </button>
    </div>
  )
}
