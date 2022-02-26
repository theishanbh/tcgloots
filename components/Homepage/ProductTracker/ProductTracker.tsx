import Image from "next/image";

const ProductTracker = () =>{

    return(
        <div className="font-jost">
            <div className="bg-grey-600">
                <div className="max-w-7xl mx-auto">
                    <h1 className=" font-jost text-4xl font-semibold text-center py-12">Products Tracker</h1>
                    <div className="flex flex-wrap">
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        <div className="w-1/6">
                            <div className=" bg-white h-4/5 p-4 ">
                                <img src="./assets/homepage/producttracker/image2.png" alt="" className="h-full w-full p-2 shadow-xl"/>
                            </div>
                            <p className=" text-lg text-center h-1/5">Lorem, ipsum dolor</p>
                        </div>
                        
                    </div>
                    <div>
                        <button className=" border font-jost text-xl rounded-md px-16 py-2">View All</button>
                    </div>
                </div>
                
            </div>
            <div className="bg-grey-700">
                <div className="max-w-7xl mx-auto py-8">
                    {/* image */}
                    <div></div>
                    {/*  */}
                    <div className="text-center">
                        <p className=" text-3xl font-light">Want to suggest a product for us to track?</p>
                        <button className=" bg-blue-primary text-white inline-flex hover:bg-blue-100 mt-6 text-white font-bold py-2 px-4 rounded"> Submit a suggestion <img src="./assets/rightarrow.svg" className="ml-2"/> </button>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default ProductTracker;