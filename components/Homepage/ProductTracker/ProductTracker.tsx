import Image from "next/image";

const ProductTracker = () =>{

    return(
        <div className="font-jost">
            <div className="bg-slate-500">
                <div className="max-w-7xl mx-auto">
                    <h1 className=" font-jost text-8xl text-black-200 font-semibold text-center py-12">Products Tracker</h1>
                    <div className="flex flex-wrap">
                        <div className=" w-1/2 mob:w-1/3 xl:w-1/6">
                            <div className=" bg-white p-4 rounded-xl">
                                <div className="relative flex justify-center items-center h-full w-full p-2 shadow-full rounded-lg">
                                    <Image
                                        src={require("../../../assets/homepage/producttracker/image.png")}
                                        objectFit="contain"
                                    />
                                    <span className="bg-yellow-200 absolute top-2 left-2 py-1 text-lg font-jost font-medium text-black-100 px-6 rounded-lg">NEW</span>
                                </div>
                                {/* <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/> */}
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className=" w-1/2 mob:w-1/3 xl:w-1/6">
                            <div className=" bg-white p-4 rounded-xl">
                                <div className="relative flex justify-center items-center h-full w-full p-2 shadow-full rounded-lg">
                                    <Image
                                        src={require("../../../assets/homepage/producttracker/image.png")}
                                        objectFit="contain"
                                    />
                                </div>
                                {/* <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/> */}
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className=" w-1/2 mob:w-1/3 xl:w-1/6">
                            <div className=" bg-white p-4 rounded-xl">
                                <div className="relative flex justify-center items-center h-full w-full p-2 shadow-full rounded-lg">
                                    <Image
                                        src={require("../../../assets/homepage/producttracker/image.png")}
                                        objectFit="contain"
                                    />
                                </div>
                                {/* <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/> */}
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className=" w-1/2 mob:w-1/3 xl:w-1/6">
                            <div className=" bg-white p-4 rounded-xl">
                                <div className="relative flex justify-center items-center h-full w-full p-2 shadow-full rounded-lg">
                                    <Image
                                        src={require("../../../assets/homepage/producttracker/image.png")}
                                        objectFit="contain"
                                    />
                                </div>
                                {/* <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/> */}
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className=" w-1/2 mob:w-1/3 xl:w-1/6">
                            <div className=" bg-white p-4 rounded-xl">
                                <div className="relative flex justify-center items-center h-full w-full p-2 shadow-full rounded-lg">
                                    <Image
                                        src={require("../../../assets/homepage/producttracker/image.png")}
                                        objectFit="contain"
                                    />
                                </div>
                                {/* <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/> */}
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className=" w-1/2 mob:w-1/3 xl:w-1/6">
                            <div className=" bg-white p-4 rounded-xl">
                                <div className="relative flex justify-center items-center h-full w-full p-2 shadow-full rounded-lg">
                                    <Image
                                        src={require("../../../assets/homepage/producttracker/image.png")}
                                        objectFit="contain"
                                    />
                                </div>
                                {/* <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-full rounded-lg"/> */}
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        {/* <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                            <div className="relative h-full w-full p-2 shadow-full rounded-lg">
                                    <Image
                                        src={require("../../../assets/homepage/producttracker/image.png")}
                                        layout="fill"
                                    />
                                    <span className="bg-yellow-200 absolute py-1 text-lg font-jost font-medium text-black-100 px-6 rounded-lg">NEW</span>
                                </div>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                            <div className="relative h-full w-full p-2 shadow-full rounded-lg">
                                    <Image
                                        src={require("../../../assets/homepage/producttracker/image.png")}
                                        layout="fill"
                                    />
                                </div>
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
                            <div className="relative h-full w-full p-2 shadow-full rounded-lg">
                                    <Image
                                        src={require("../../../assets/homepage/producttracker/image.png")}
                                        layout="fill"
                                    />
                                </div>
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
                            <div className="relative h-full w-full p-2 shadow-full rounded-lg">
                                    <Image
                                        src={require("../../../assets/homepage/producttracker/image.png")}
                                        layout="fill"
                                    />
                                </div>
                            </div>
                            <p className=" text-lg text-black-100 text-center h-1/5">Lorem, ipsum dolor</p>
                        </div> */}
                        
                    </div>
                    {/* button */}
                    <div className=" text-center bg-white-100 py-8 px-4 2xl:px-0 mob:text-right">
                        <button className=" border border-grey-600 font-jost text-xl text-black-100 rounded-md px-16 py-2 shadow-full">View All</button>
                    </div>
                </div>
                
            </div>
            <div className=" bg-gradient-to-r from-slate-400 to-slate-100">
                <div className="max-w-7xl mx-auto py-8">
                    {/* image */}
                    <div className="flex items-center justify-center">
                        <div>
                            <Image
                                src={require("../../../assets/homepage/producttracker/groupimages.png")}
                            ></Image>
                        </div>
                        {/*  */}
                        <div className="text-center px-4 md:px-12">
                            <p className=" text-left md:text-center text-base sm:text-lg md:text-4xl font-light">Want to suggest a product for us to track?</p>
                            <button className=" bg-blue-300 text-white-100 text-xs sm:text-lg md:text-xl flex items-center m-auto hover:bg-blue-100 mt-6 text-white py-2 px-4 rounded"> 
                                <span>
                                    Submit a suggestion 
                                </span>
                                <div className='relative flex justify-center items-center ml-2'>
                                    <Image
                                        src={require("../../../assets/homepage/producttracker/rightarrow.svg")}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default ProductTracker;