import React from 'react'

interface props{
    placeholder:string,
    name:string,
    value:string,
    onChange:any,
}




export default function TextAreaInstore(props:props) {
  return (
    <textarea className='border rounded-xl border-slate-100 text-sm font-light font-jost text-black-100 placeholder-grey-400 w-72 pl-4 pt-2 mx-1' value={props.value} onChange={props.onChange} name={props.name} placeholder={props.placeholder} />
  )
}
