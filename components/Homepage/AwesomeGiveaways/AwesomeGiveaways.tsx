import Image from "next/image";
import React from "react";

const mockGiveawayItems = [1, 2, 3, 4, 5];

const AwesomeGiveaways = () => {
  return (
    <div className="font-jost bg-[url('/assets/homepage/awesomegiveaways/backgroundtwo.png')] bg-cover">
      <div className=" mx-auto max-w-7xl text-white py-8">
        <h1 className=" font-jost text-8xl font-semibold text-center text-white-100 py-8">
          Awesome Giveaways!
        </h1>
        <div className=" max-w-7xl mx-auto my-4 px-4 py-8 bg-yellow-400 rounded-lg">
          <div className="flex flex-wrap justify-center flex-row">
            {mockGiveawayItems.map((it) => (
              <div
                key={it}
                className="flex flex-col w-1/2 max-w-[350px] my-6 lg:my-0 lg:w-1/5 px-4 relative"
              >
                {/* body */}
                <div className="absolute flex content-center items-center bg-white-100">
                  {/* class card */}
                  <div className="relative bg-white-100">
                    <span className="absolute -top-3 -left-3 w-40 h-40 flex items-center justify-center overflow-hidden before:content-['HOT'] before:absolute before:h-10 before:bg-blue-200  before:-rotate-45 before:w-56 before:-translate-x-[0.9rem] before:-translate-y-[0.9rem] before:flex before:justify-center before:items-center before:text-white-100 before:text-4xl before:font-semibold before:py-2 before:tracking-wider before:shadow-badge after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-4 after:w-4 after:bg-green-100 after:z-0 before:z-20 after:shadow-badgefull"></span>
                  </div>
                </div>
                <div className="bg-white-100 shadow-lg rounded-md flex-1 z-10">
                  <div className=" border-b border-grey-primary ">
                    <img
                      src="./assets/homepage/producttracker/image.png"
                      alt=""
                      className=" mx-auto"
                    />
                  </div>
                  <div className="p-3">
                    <p className=" font-medium text-xl text-black-100">
                      Rainbow Secret Mewtwo and Mew PSA 9
                    </p>
                    <span className=" text-grey-400">Ends in: 5 days</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" text-right py-8">
          <button className=" border bg-white-100 border-grey-600 font-jost text-xl text-black-100 rounded-md px-16 py-2 shadow-full">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwesomeGiveaways;
