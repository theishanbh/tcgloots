import Image from "next/image";

const ProductTracker = () =>{

    return(
        <div className="font-jost">
            <div className="bg-slate-500">
                <div className="max-w-7xl mx-auto">
                    <h1 className=" font-jost text-8xl text-black-200 font-semibold text-center py-12">Products Tracker</h1>
                    <div className="flex flex-wrap">
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 rounded-xl">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        
                    </div>
                    {/* button */}
                    <div className=" text-right bg-white-100 py-8">
                        <button className=" border border-grey-600 font-jost text-xl text-black-100 rounded-md px-16 py-2 shadow-full">View All</button>
                    </div>
                </div>
                
            </div>
            <div className=" bg-gradient-to-r from-slate-400 to-slate-100">
                <div className="max-w-7xl mx-auto py-8">
                    {/* image */}
                    <div className="flex items-center justify-center">
                        <div>
                            <div>
                                <Image
                                    src={require("../../../assets/homepage/producttracker/groupimages.png")}
                                ></Image>
                            </div>
                        </div>
                        {/*  */}
                        <div className="text-center px-12">
                            <p className=" text-4xl font-light">Want to suggest a product for us to track?</p>
                            <button className=" bg-blue-300 text-white-100 text-xl inline-flex hover:bg-blue-100 mt-6 text-white font-bold py-2 px-4 rounded"> Submit a suggestion <img src="./assets/rightarrow.svg" className="ml-2"/> </button>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default ProductTracker;