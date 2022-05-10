import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Post = ({ blog }: { blog: any }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto max-w-7xl font-jost">
        <div className="flex py-8 flex-col lg:flex-row">
          {/* Articles */}
          <div className="flex-2 pl-6 pr-6 lg:pr-20">
            <div className="flex flex-col">
              <div className="flex">
                <div className="flex relative flex-shrink-0 lg:hidden">
                  <Image
                    src={require("../../assets/news/leftarrow.svg")}
                    alt="alt"
                  />
                </div>
                <div className="ml-4 lg:ml-0">
                  <h1 className=" text-2xl lg:text-7xl text-black-100 font-semibold">
                    Lorem ipsum dolor sit amet
                  </h1>
                  <span className=" font-light text-sm lg:text-2xl text-black-200 py-4">
                    12 Dec 2021
                  </span>
                </div>
              </div>

              {/* img container */}
              <div className="py-4 relative">
                <Image
                  src={require("../../assets/news/image1.png")}
                  layout="responsive"
                  className=" rounded-xl"
                  alt="alt"
                />
              </div>
              <div className=" text-grey-400 lg:text-black-100 text-lg lg:text-2xl">
                <p className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
          {/* second block */}
          <div className="flex-1 flex flex-col px-4">
            <h2 className=" font-medium text-xl lg:text-6xl pb-4 pt-16 lg:pt-0">
              Lorem, ipsum
            </h2>
            <div className=" pt-0 lg:pt-16">
              {/* element */}
              <div className="flex justify-start border-solid border-b-2 border-grey-600 p-2">
                <div className="relative flex-1 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                  <a target="_blank" className="no-underline hover:underline">
                    <Image
                      src={require("../../assets/image1.png")}
                      alt={"alt"}
                      objectFit="cover"
                      layout="fill"
                    />
                  </a>
                </div>
                <div className="flex flex-2 flex-col ml-4 w-auto">
                  <div className="no-underline text-lg lg:text-2xl font-medium">
                    {" "}
                    Lorem ipsum dolor sit{" "}
                  </div>
                  <div className="text-justify font-light lg:font-normal text-xs lg:text-sm text-grey-primary mt-0 lg:mt-auto pt-0 lg:pt-8">
                    {" "}
                    1 Dec 2021{" "}
                  </div>
                  <div className=" block lg:hidden pt-8 text-base">
                    Read More {">"}
                  </div>
                </div>
              </div>
              {/* element */}
              <div className="flex justify-start border-solid border-b-2 border-grey-600 p-2">
                <div className="relative flex-1 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                  <a target="_blank" className="no-underline hover:underline">
                    <Image
                      src={require("../../assets/image1.png")}
                      alt={"alt"}
                      objectFit="cover"
                      layout="fill"
                    />
                  </a>
                </div>
                <div className="flex flex-2 flex-col ml-4 w-auto">
                  <div className="no-underline text-lg lg:text-2xl font-medium">
                    {" "}
                    Lorem ipsum dolor sit{" "}
                  </div>
                  <div className="text-justify font-light lg:font-normal text-xs lg:text-sm text-grey-primary mt-0 lg:mt-auto pt-0 lg:pt-8">
                    {" "}
                    1 Dec 2021{" "}
                  </div>
                  <div className=" block lg:hidden pt-8 text-base">
                    Read More {">"}
                  </div>
                </div>
              </div>
              {/* element */}
              <div className="flex justify-start border-solid border-b-2 border-grey-600 p-2">
                <div className="relative flex-1 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                  <a target="_blank" className="no-underline hover:underline">
                    <Image
                      src={require("../../assets/image1.png")}
                      alt={"alt"}
                      objectFit="cover"
                      layout="fill"
                    />
                  </a>
                </div>
                <div className="flex flex-2 flex-col ml-4 w-auto">
                  <div className="no-underline text-lg lg:text-2xl font-medium">
                    {" "}
                    Lorem ipsum dolor sit{" "}
                  </div>
                  <div className="text-justify font-light lg:font-normal text-xs lg:text-sm text-grey-primary mt-0 lg:mt-auto pt-0 lg:pt-8">
                    {" "}
                    1 Dec 2021{" "}
                  </div>
                  <div className=" block lg:hidden pt-8 text-base">
                    Read More {">"}
                  </div>
                </div>
              </div>
              {/* element */}
              <div className="flex justify-start border-solid border-b-2 border-white-100 p-2">
                <div className="relative flex-1 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                  <a target="_blank" className="no-underline hover:underline">
                    <Image
                      src={require("../../assets/image1.png")}
                      alt={"alt"}
                      objectFit="cover"
                      layout="fill"
                    />
                  </a>
                </div>
                <div className="flex flex-2 flex-col ml-4 w-auto">
                  <div className="no-underline text-lg lg:text-2xl font-medium">
                    {" "}
                    Lorem ipsum dolor sit{" "}
                  </div>
                  <div className="text-justify font-light lg:font-normal text-xs lg:text-sm text-grey-primary mt-0 lg:mt-auto pt-0 lg:pt-8">
                    {" "}
                    1 Dec 2021{" "}
                  </div>
                  <div className=" block lg:hidden pt-8 text-base">
                    Read More {">"}
                  </div>
                </div>
              </div>
              {/* button */}
              <div className="text-center lg:text-right bg-white-100 py-8">
                <button className=" border border-grey-600 font-jost text-sm lg:text-xl text-black-100 rounded-md px-8 lg:px-12 py-2 lg:py-4 shadow-full">
                  Load More
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src={require("../../assets/news/chest.png")}
                className="opacity-25"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Post;
