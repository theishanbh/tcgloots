import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import TileMobileView from '../../components/TrackerPage/TileMobileView'
import Dropdown from '../../components/Livedeals/Dropdown'
import GridButton from '../../components/TrackerPage/GridButton'
import PaginationComponent from '../../components/TrackerPage/PaginationComponent'
const TrackerPage = () => {
    return (
        <div className="flex flex-col content-between from-zinc-300 ">
            <div className="basis-1/4">
                <Navbar />
            </div>
            <div className="mx-2 mb-96  flex flex-col">
            <div className="flex flex-col my-10 mx-2">
              <div className="flex flex-row items-baseline justify-between">
                 <div className="font-jost text-4xl text-blue-300 font-medium"> Pokemon Cards </div>
                  <GridButton/>
                  </div>
               <div className="font-jost text-xs text-grey-400">Home {'>'} Collectibles {'>'} Trading Cards</div>
            </div>
            <div className="flex flex-col space-y-4 ">
            <div className="flex flex-1 mx-2"><Dropdown /></div>
             <div className="font-jost text-lg font-medium ml-2">Category name 1</div>
            <TileMobileView title={'Sony PlayStation 5 Console (PS5)'} price={'499.9'} date={'12 Dec, 08:08'} buttonType={'primary'} isAdded={true} isLabel={true} isNew={true}/>
            <TileMobileView title={'Sony PlayStation 5 Console (PS5)'} price={'499.9'} date={'12 Dec, 08:08'} buttonType={'secondary'} isAdded={false} isLabel={true} isNew={false}/>
            <TileMobileView title={'Sony PlayStation 5 Console (PS5)'} price={'499.9'} date={'12 Dec, 08:08'} buttonType={'secondary'} isAdded={false} isLabel={false} isNew={false}/>
             <div className="font-jost text-lg font-medium ml-2">Category name 2</div>
            <TileMobileView title={'Sony PlayStation 5 Console (PS5)'} price={'499.9'} date={'12 Dec, 08:08'} buttonType={'primary'} isAdded={true} isLabel={true} isNew={true}/>
            <TileMobileView title={'Sony PlayStation 5 Console (PS5)'} price={'499.9'} date={'12 Dec, 08:08'} buttonType={'secondary'} isAdded={false} isLabel={true} isNew={false}/>
            <TileMobileView title={'Sony PlayStation 5 Console (PS5)'} price={'499.9'} date={'12 Dec, 08:08'} buttonType={'primary'} isAdded={true} isLabel={false} isNew={true}/>
            <TileMobileView title={'Sony PlayStation 5 Console (PS5)'} price={'499.9'} date={'12 Dec, 08:08'} buttonType={'secondary'} isAdded={false} isLabel={false} isNew={false}/>
            <TileMobileView title={'Sony PlayStation 5 Console (PS5)'} price={'499.9'} date={'12 Dec, 08:08'} buttonType={'secondary'} isAdded={false} isLabel={false} isNew={false}/>
             <div className="font-jost text-lg font-medium ml-2">Category name 3</div>
            <TileMobileView title={'Sony PlayStation 5 Console (PS5)'} price={'499.9'} date={'12 Dec, 08:08'} buttonType={'primary'} isAdded={true} isLabel={false} isNew={true}/>
            <TileMobileView title={'Sony PlayStation 5 Console (PS5)'} price={'499.9'} date={'12 Dec, 08:08'} buttonType={'primary'} isAdded={true} isLabel={false} isNew={true}/>
            <TileMobileView title={'Sony PlayStation 5 Console (PS5)'} price={'499.9'} date={'12 Dec, 08:08'} buttonType={'secondary'} isAdded={false} isLabel={false} isNew={false}/>
            </div>
            <div className="flex flex-1 flex-row items-center justify-center mt-20">
            <PaginationComponent/>
            </div>
            <div className="flex flex-1 flex-col mt-24 mx-4">
              <div className="flex flex-row space-x-4">
              <Image
                    src={require("../../assets/trackerpage/recent.svg")}
                    alt={'poster image'}
                ></Image>
                <div className="font-jost text-xl text-black-100 font-medium">Recent Stock History</div>
              </div>
            </div>
            </div>
            <div className="basis-1/4">
                <Footer />
            </div>
        </div>
    )
}

export default TrackerPage
