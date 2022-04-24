import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import InstoreCard from '../../components/InstoreFinds/InstoreCard'
import Dropdown from '../../components/Livedeals/Dropdown'
import ListBox from '../../components/Livedeals/ListBox'
import InstoreCardDescription from '../../components/InstoreFinds/InstoreCardDescription'
import InstoreAddPost from '../../components/InstoreFinds/InstoreAddPost'

const index = () => {
  const [showdes, setShowdes] = React.useState<boolean>(false)
  const [post, setPost] = React.useState(false);
  const [value, onChange] = React.useState(new Date());
  return (
    <div className="flex flex-col content-between from-zinc-300 ">
      <div className="basis-1/4">
        <Navbar />
      </div>
      <div className="relative m-2 space-y-2 xl:hidden">
        {
          post ? <InstoreAddPost setPost={setPost} />
            : showdes ? <InstoreCardDescription setShowdes={setShowdes} /> : <><div className="flex justify-between mx-4 mt-4 flex-row mb-4">
              <div className="flex-col mb-4">
                <div className="font-jost text-lg text-black-100">Instore Finds</div>
                <div className="font-jost text-sm text-grey-200">Feb 16, 2022</div>
              </div>
              <div>
                <button onClick={() => setPost(true)} className="bg-blue-300 mt-1 w-24 h-8  flex flex-row space-x-2 justify-center  font-jost text-sm text-white-100 rounded-md">
                  <div className=''><Image
                    src={require("../../assets/instorefinds/add.svg")}
                    width={18}
                  ></Image></div>
                  <div className="pt-1">Post</div>
                </button>
              </div>
            </div>
              <div className="xl:hidden flex flex-1 justify-between space-x-4 mb-6 z-40">
                <div className="flex flex-1"><Dropdown /></div>
                <div className="flex flex-1"><ListBox /></div>
              </div>
              <InstoreCard isdes={false} setShowdes={setShowdes} />
              <InstoreCard isdes={true} setShowdes={setShowdes} />
              <InstoreCard isdes={false} setShowdes={setShowdes} />
              <InstoreCard isdes={true} setShowdes={setShowdes} /></>
        }

      </div>
      <div className="relative hidden xl:flex flex-1 flex-row m-2 mb-10">
        <div className='w-1/3 h-full flex flex-col  from-zinc-300 justify-center'>
        <div className="flex flex-1 mx-4 mt-10" >
      <Calendar onChange={onChange} next2Label={null} prev2Label={null} className={'bg-white-100 rounded-xl'} value={value} />
    </div>
        <div className="flex flex-1  ml-10 mt-10"><Dropdown /></div>
        </div>
        <div className='w-2/3 h-full flex flex-col mx-24  justify-center pt-4'>
        <div className="flex  flex-1 items-center justify-between flex-row space-x-4">
              <div className="flex-col flex flex-3">
                <div className="font-jost text-8xl text-black-100">Instore Finds</div>
                <div className="font-jost text-xl text-grey-200">Feb 16, 2022</div>
              </div>
              <div className="flex flex-2 items-center"><ListBox /></div>
              <div className="flex flex-1 justify-end items-start">
                <button onClick={() => {}} className="bg-blue-300 mt-1 w-24 h-8  flex flex-row space-x-2 justify-center  font-jost text-sm text-white-100 rounded-md">
                  <div className=''><Image
                    src={require("../../assets/instorefinds/add.svg")}
                    width={18}
                  ></Image></div>
                  <div className="pt-1">Post</div>
                </button>
              </div>
         </div>

         <div className="flex flex-3 flex-col mt-8 space-y-8">
          <InstoreCard isdes={false} setShowdes={setShowdes} />
         <InstoreCard isdes={true} setShowdes={setShowdes}/>
         <InstoreCard isdes={false} setShowdes={setShowdes} />
         <InstoreCard isdes={true} setShowdes={setShowdes}/>
         </div>
         </div>
         
        <div className='w-1/3 h-full '>
        <InstoreCardDescription setShowdes={setShowdes} />
        </div>
      </div>
      <div className="b
            sis-1/4">
        <Footer />
      </div>
    </div>
  )
}


export default index