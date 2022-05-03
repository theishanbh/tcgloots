import Image from "next/image";
import React from "react";

const DealsTracker = () => {
  return (
    <div className=" font-jost bg-slate-500">
      <div className=" max-w-7xl mx-auto">
        <h1 className=" font-jost text-8xl text-black-200 font-semibold text-center py-24">
          Live Deals
        </h1>
        <div className="flex flex-wrap">
          <div className=" w-full sm:w-1/2 lg:w-1/3 p-4 ">
            <div className="flex shadow-full bg-white rounded-xl h-full">
              <div className="flex-3">
                <img
                  src="./assets/homepage/producttracker/image.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex justify-evenly flex-col flex-5 p-2">
                <p className=" text-base xl:text-lg pr-4">
                  Baldur’s Gate and Baldur’s Gate II: Enhanced Editions
                </p>
                <div className="flex pr-4 pt-2">
                  <p className=" text-sm xl:text-lg border-l-4 pl-1 font-medium text-blue-300">
                    PREORDER
                  </p>
                  <p className=" text-xs xl:text-base ml-auto text-grey-400">
                    5 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 lg:w-1/3 p-4 ">
            <div className="flex shadow-full bg-white rounded-xl h-full">
              <div className="flex-3">
                <img
                  src="./assets/homepage/producttracker/image.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex justify-evenly flex-col flex-5 p-2">
                <p className=" text-base xl:text-lg pr-4">
                  Baldur’s Gate and Baldur’s Gate II: Enhanced Editions
                </p>
                <div className="flex pr-4  pt-2">
                  <p className=" text-sm xl:text-lg border-l-4 pl-1 font-medium text-blue-300">
                    PREORDER
                  </p>
                  <p className=" text-xs xl:text-base ml-auto text-grey-400">
                    5 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 lg:w-1/3 p-4 ">
            <div className="flex shadow-full bg-white rounded-xl h-full">
              <div className="flex-3">
                <img
                  src="./assets/homepage/producttracker/image.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex justify-evenly flex-col flex-5 p-2">
                <p className="text-base xl:text-lg pr-4">
                  Baldur’s Gate and Baldur’s Gate II: Enhanced Editions
                </p>
                <div className="flex pr-4 pt-2">
                  <p className=" text-sm xl:text-lg border-l-4 pl-1 font-medium text-green-100">
                    ACTIVE
                  </p>
                  <p className=" text-xs xl:text-base ml-auto text-grey-400">
                    5 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 lg:w-1/3 p-4 ">
            <div className="flex shadow-full bg-white rounded-xl h-full">
              <div className="flex-3">
                <img
                  src="./assets/homepage/producttracker/image.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex justify-evenly flex-col flex-5 p-2">
                <p className="text-base xl:text-lg pr-4">
                  Baldur’s Gate and Baldur’s Gate II: Enhanced Editions
                </p>
                <div className="flex pr-4 pt-2">
                  <p className=" text-sm xl:text-lg border-l-4 pl-1 font-medium text-green-100">
                    ACTIVE
                  </p>
                  <p className=" text-xs xl:text-base ml-auto text-grey-400">
                    5 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 lg:w-1/3 p-4 ">
            <div className="flex shadow-full bg-white rounded-xl h-full">
              <div className="flex-3">
                <img
                  src="./assets/homepage/producttracker/image.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex justify-evenly flex-col flex-5 p-2">
                <p className="text-base xl:text-lg pr-4">
                  Baldur’s Gate and Baldur’s Gate II: Enhanced Editions
                </p>
                <div className="flex pr-4 pt-2">
                  <p className=" text-sm xl:text-lg border-l-4 pl-1 font-medium text-green-100">
                    ACTIVE
                  </p>
                  <p className=" text-xs xl:text-base ml-auto text-grey-400">
                    5 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 lg:w-1/3 p-4 ">
            <div className="flex shadow-full bg-white rounded-xl h-full">
              <div className="flex-3">
                <img
                  src="./assets/homepage/producttracker/image.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex justify-evenly flex-col flex-5 p-2">
                <p className=" text-base xl:text-lg pr-4">
                  Baldur’s Gate and Baldur’s Gate II: Enhanced Editions
                </p>
                <div className="flex pr-4  pt-2">
                  <p className=" text-sm xl:text-lg border-l-4 pl-1 font-medium text-blue-300">
                    PREORDER
                  </p>
                  <p className=" text-xs xl:text-base ml-auto text-grey-400">
                    5 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center bg-white-100 py-16 px-4 2xl:px-0 mob:text-right">
          <button className=" border border-grey-600 font-jost text-xl text-black-100 rounded-md px-20 py-4 shadow-full">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealsTracker;
