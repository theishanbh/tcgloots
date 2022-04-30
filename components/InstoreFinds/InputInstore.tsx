import React from 'react'

interface props{
    placeholder:string,
    name:string,
    value:string,
    onChange:any,
}


export default function InputInstore(props: props) {
  return (
    <input className='w-32 mb-2 p-2 border rounded-lg border-slate-100 text-sm font-light font-jost text-black-100 placeholder-grey-400 mx-1' type='text' placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange}/>
  )
}
