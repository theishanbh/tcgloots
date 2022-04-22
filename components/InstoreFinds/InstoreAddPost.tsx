import React from 'react'
import Image from 'next/image'
import InputInstore from './InputInstore';
import TextAreaInstore from './TextAreaInstore';
import ImageLoadingComponent from './ImageLoadingComponent';
import InstoreButton from './InstoreButton';

interface props{
    setPost : (boolean: boolean) => void
}


export default function InstoreAddPost(props: props) {
    const [city,setCity] = React.useState('');
    const [store,setStore] = React.useState('');
    const [state,setState] = React.useState('');
    const [time,setTime] = React.useState('');
    const [additional,setAdditional] = React.useState('');
    return (
        <div className='flex-1 flex-col flex mx-6 my-8'>
            <div className=' mb-10'>
                <div className='inline-flex mr-4' onClick={()=>props.setPost(false)}>
                <Image
                    src={require("../../assets/instorefinds/backIcon.svg")}
                    width={8}
                    height={16}
                ></Image>
                </div>
                <span className="text-3xl font-jost text-black-100 font-medium mr-4">New Post</span>
                <Image
                    src={require("../../assets/trackerpage/flag-us.svg")}
                    width={18}
                    height={18}
                    alt={`flagImage`}
                    className="pt-2"
                ></Image>
            </div>
            <div className=' flex-1 flex-col justify-center'>
                <div className='flex flex-1 flex-row justify-between space-x-2'>
                 <InputInstore name='state' placeholder='State' value={state} onChange={(e:any)=>{setState(e.target.value)}}/>
                 <InputInstore name='city' placeholder='City' value={city} onChange={(e:any)=>{setCity(e.target.value)}}/>
                </div>
                <div className='flex flex-1 flex-row justify-between'>
                 <InputInstore name='store' placeholder='Store' value={store} onChange={(e:any)=>{setStore(e.target.value)}}/>
                 <InputInstore name='time' placeholder='Time' value={time} onChange={(e:any)=>{setTime(e.target.value)}}/>
                </div>
                <div className='flex flex-1 flex-row justify-between'>
                 <TextAreaInstore name='additional' placeholder='Additional Information' value={additional} onChange={(e:any)=>{setAdditional(e.target.value)}}/>
                </div>
            </div>
            <div  className='flex flex-1 flex-col justify-center mt-10'>
                <div className='font-jost text-xl text-black-100 font-light'>Add Photo</div>
                <div className='space-x-1 pt-4 '>
                    <Image
                    src={require("../../assets/instorefinds/imageIcon.svg")}
                    width={20}
                    height={20}
                    alt={`image`}
                    className='pr-2 mt-4'
                ></Image>
                <div className='inline-flex items-center font-jost text-lg text-blue-100 pr-1 mb-4'>Choose a file</div>
                <div  className='inline font-jost text-lg text-grey-400 pr-1 mb-4'>or drag it here</div>
                </div>
                <div className='mt-10 my-4'>
                    <ImageLoadingComponent/>
                </div>
                <div className='flex flex-1 flex-row justify-end mt-6'><InstoreButton>Submit</InstoreButton></div>
            </div>
        </div>
    )
}
