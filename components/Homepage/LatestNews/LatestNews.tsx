import React from "react";

const LatestNews = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto font-jost">
        <h1 className=" font-jost text-8xl text-black-200 font-semibold text-center py-4 sm:py-12">
          Latest News
        </h1>
        {/* latest news items */}
        <div className="flex overflow-x-scroll sm:overflow-x-hidden">
          <div className=" w-4/5 sm:w-1/4 flex flex-col p-4 h-full">
            <img src="./assets/homepage/latestnews/night.png" alt="" />
            <span className=" text-lg text-ellipsis overflow-hidden font-medium whitespace-nowrap px-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              quisquam sint voluptatum cupiditate labore, aliquam quos modi? Ut
              illum veniam, quisquam, voluptate dignissimos excepturi dicta
              eveniet repellat accusamus magnam saepe?
            </span>
            <p className=" px-4 text-sm">24 Nov, 2020</p>
          </div>
          <div className=" w-4/5 sm:w-1/4 flex flex-col p-4 h-full">
            <img src="./assets/homepage/latestnews/tablet.png" alt="" />
            <span className=" text-lg text-ellipsis overflow-hidden font-medium whitespace-nowrap px-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              quisquam sint voluptatum cupiditate labore, aliquam quos modi? Ut
              illum veniam, quisquam, voluptate dignissimos excepturi dicta
              eveniet repellat accusamus magnam saepe?
            </span>
            <p className=" px-4 text-sm">24 Nov, 2020</p>
          </div>
          <div className=" w-4/5 sm:w-1/4 flex flex-col p-4 h-full">
            <img src="./assets/homepage/latestnews/tablet.png" alt="" />
            <span className=" text-lg text-ellipsis overflow-hidden font-medium whitespace-nowrap px-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              quisquam sint voluptatum cupiditate labore, aliquam quos modi? Ut
              illum veniam, quisquam, voluptate dignissimos excepturi dicta
              eveniet repellat accusamus magnam saepe?
            </span>
            <p className=" px-4 text-sm">24 Nov, 2020</p>
          </div>
          <div className=" w-4/5 sm:w-1/4 flex flex-col p-4 h-full">
            <img src="./assets/homepage/latestnews/night.png" alt="" />
            <span className=" text-lg text-ellipsis overflow-hidden font-medium whitespace-nowrap px-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              quisquam sint voluptatum cupiditate labore, aliquam quos modi? Ut
              illum veniam, quisquam, voluptate dignissimos excepturi dicta
              eveniet repellat accusamus magnam saepe?
            </span>
            <p className=" px-4 text-sm">24 Nov, 2020</p>
          </div>
        </div>
        {/* buuton */}
        <div className=" px-4 2xl:px-2 3xl:px-0 text-center md:text-right bg-white-100 py-8">
          <button className=" border border-grey-600 font-jost text-xl text-black-100 rounded-md px-12 py-3 shadow-full">
            Read more news
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
