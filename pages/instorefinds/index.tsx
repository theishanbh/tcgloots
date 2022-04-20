import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import InstoreCard from '../../components/InstoreFinds/InstoreCard'

const index = () => {
  return (
    <div className="flex flex-col content-between from-zinc-300 ">
            <div className="basis-1/4">
                <Navbar />
            </div>
            <div className=" m-2 space-y-2">
               <InstoreCard isdes={false}/>
               <InstoreCard isdes={true}/>
               <InstoreCard isdes={false}/>
               <InstoreCard isdes={true}/>
            </div>
            <div className="b
            sis-1/4">
                <Footer />
            </div>
        </div>
  )
}


export default index