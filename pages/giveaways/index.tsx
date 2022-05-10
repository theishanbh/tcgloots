import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Giveaways = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="bg-[url('/assets/giveaways/background.png')] bg-contain bg-no-repeat">
          <div className="mx-auto max-w-7xl font-jost">
            {/* summary */}
            <div className="flex flex-col font-jost">
              <h1 className="text-center text-black-200 text-8xl font-semibold pt-20">
                Giveaways
              </h1>
              <p className=" text-xl text-center py-20">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
            {/* giveaways active */}
            <div className="py-8 px-4 xl:px-20">
              <div className="flex flex-wrap">
                {/* done */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                  <div className="hidden flex-col md:flex bg-white-100 shadow-full border border-grey-600 p-4 rounded-lg">
                    <div className="absolute flex content-center items-center bg-white-100">
                      <div className="relative bg-white-100">
                        <span className="absolute -top-7 -left-8 w-40 h-40 flex items-center justify-center overflow-hidden before:content-['HOT'] before:absolute before:h-10 before:bg-blue-200  before:-rotate-45 before:w-56 before:-translate-x-[0.9rem] before:-translate-y-[0.9rem] before:flex before:justify-center before:items-center before:text-white-100 before:text-4xl before:font-semibold before:py-2 before:tracking-wider before:shadow-badge after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-4 after:w-4 after:bg-green-100 after:z-0 before:z-20 after:shadow-badgefull"></span>
                      </div>
                    </div>
                    <h1 className="text-center text-xl">
                      Rainbow Secret Mewtwo & Mew PSA 9
                    </h1>
                    <div className="flex justify-center items-center my-4">
                      <Image
                        src={require("../../assets/homepage/producttracker/image.png")}
                        alt="alt"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xl text-grey-400">Ends in: 5 days</p>
                      <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-12 py-2 ml-2">
                        ENTER
                      </button>
                    </div>
                  </div>
                  <div className="flex md:hidden flex-row bg-white-100 shadow-full border border-grey-600 p-2 rounded-lg">
                    <div className="absolute flex content-center items-center bg-white-100">
                      <div className="relative bg-white-100">
                        <span className="absolute -top-5 -left-6 w-40 h-40 flex items-center justify-center overflow-hidden before:content-['HOT'] before:absolute before:h-10 before:bg-blue-200  before:-rotate-45 before:w-56 before:-translate-x-[0.9rem] before:-translate-y-[0.9rem] before:flex before:justify-center before:items-center before:text-white-100 before:text-4xl before:font-semibold before:py-2 before:tracking-wider before:shadow-badge after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-4 after:w-4 after:bg-green-100 after:z-0 before:z-20 after:shadow-badgefull"></span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={require("../../assets/homepage/producttracker/image.png")}
                        alt="alt"
                      />
                    </div>
                    <div className="flex flex-col mx-auto my-3">
                      <h1 className="text-center text-base">
                        Rainbow Secret Mewtwo & Mew PSA 9
                      </h1>
                      <div className="flex justify-between items-center flex-row-reverse mt-auto">
                        <p className="text-xs text-grey-400 ml-2">
                          Ends in: 5 days
                        </p>
                        <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-6 py-2 ml-2">
                          ENTER
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* done */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                  <div className="hidden flex-col md:flex bg-white-100 shadow-full border border-grey-600 p-2 rounded-lg">
                    <div className="absolute flex content-center items-center bg-white-100">
                      <div className="relative bg-white-100">
                        <span className="absolute -top-5 -left-6 w-40 h-40 flex items-center justify-center overflow-hidden before:content-['HOT'] before:absolute before:h-10 before:bg-blue-200  before:-rotate-45 before:w-56 before:-translate-x-[0.9rem] before:-translate-y-[0.9rem] before:flex before:justify-center before:items-center before:text-white-100 before:text-4xl before:font-semibold before:py-2 before:tracking-wider before:shadow-badge after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-4 after:w-4 after:bg-green-100 after:z-0 before:z-20 after:shadow-badgefull"></span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={require("../../assets/homepage/producttracker/image.png")}
                        alt="alt"
                      />
                    </div>
                    <div className="flex flex-col mx-auto my-3">
                      <h1 className="text-center text-base">
                        Rainbow Secret Mewtwo & Mew PSA 9
                      </h1>
                      <div className="flex justify-between items-center flex-row-reverse mt-auto">
                        <p className="text-xs text-grey-400 ml-2">
                          Ends in: 5 days
                        </p>
                        <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-6 py-2 ml-2">
                          ENTER
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:hidden flex-row bg-white-100 shadow-full border border-grey-600 p-2 rounded-lg">
                    <div className="flex justify-center items-center">
                      <Image
                        src={require("../../assets/homepage/producttracker/image.png")}
                        alt="alt"
                      />
                    </div>
                    <div className="flex flex-col mx-auto my-3">
                      <h1 className="text-center text-base">
                        Rainbow Secret Mewtwo & Mew PSA 9
                      </h1>
                      <div className="flex justify-between items-center flex-row-reverse mt-auto">
                        <p className="text-xs text-grey-400 ml-2">
                          Ends in: 5 days
                        </p>
                        <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-6 py-2 ml-2">
                          ENTER
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* skipped */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2 hidden md:block">
                  <div className="hidden flex-col md:flex bg-white-100 shadow-full border border-grey-600 p-4 rounded-lg">
                    <h1 className="text-center text-xl">
                      Rainbow Secret Mewtwo & Mew PSA 9
                    </h1>
                    <div className="flex justify-center items-center my-4">
                      <Image
                        src={require("../../assets/homepage/producttracker/image.png")}
                        alt="alt"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xl text-grey-400">Ends in: 5 days</p>
                      <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-12 py-2 ml-2">
                        ENTER
                      </button>
                    </div>
                  </div>
                </div>
                {/* done */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                  <div className="hidden flex-col md:flex bg-white-100 shadow-full border border-grey-600 p-4 rounded-lg">
                    <h1 className="text-center text-xl">
                      Rainbow Secret Mewtwo & Mew PSA 9
                    </h1>
                    <div className="flex justify-center items-center my-4">
                      <Image
                        src={require("../../assets/homepage/producttracker/image.png")}
                        alt="alt"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xl text-grey-400">Ends in: 5 days</p>
                      <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-12 py-2 ml-2">
                        ENTER
                      </button>
                    </div>
                  </div>
                  <div className="flex md:hidden flex-row bg-white-100 shadow-full border border-grey-600 p-2 rounded-lg">
                    <div className="flex justify-center items-center">
                      <Image
                        src={require("../../assets/homepage/producttracker/image.png")}
                        alt="alt"
                      />
                    </div>
                    <div className="flex flex-col mx-auto my-3">
                      <h1 className="text-center text-base">
                        Rainbow Secret Mewtwo & Mew PSA 9
                      </h1>
                      <div className="flex justify-between items-center flex-row-reverse mt-auto">
                        <p className="text-xs text-grey-400 ml-2">
                          Ends in: 5 days
                        </p>
                        <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-6 py-2 ml-2">
                          ENTER
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* done */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                  <div className="hidden flex-col md:flex bg-white-100 shadow-full border border-grey-600 p-4 rounded-lg">
                    <h1 className="text-center text-xl">
                      Rainbow Secret Mewtwo & Mew PSA 9
                    </h1>
                    <div className="flex justify-center items-center my-4">
                      <Image
                        src={require("../../assets/homepage/producttracker/image.png")}
                        alt="alt"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xl text-grey-400">Ends in: 5 days</p>
                      <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-12 py-2 ml-2">
                        ENTER
                      </button>
                    </div>
                  </div>
                  <div className="flex md:hidden flex-row bg-white-100 shadow-full border border-grey-600 p-2 rounded-lg">
                    <div className="flex justify-center items-center">
                      <Image
                        src={require("../../assets/homepage/producttracker/image.png")}
                        alt="alt"
                      />
                    </div>
                    <div className="flex flex-col mx-auto my-3">
                      <h1 className="text-center text-base">
                        Rainbow Secret Mewtwo & Mew PSA 9
                      </h1>
                      <div className="flex justify-between items-center flex-row-reverse mt-auto">
                        <p className="text-xs text-grey-400 ml-2">
                          Ends in: 5 days
                        </p>
                        <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-6 py-2 ml-2">
                          ENTER
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* done */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                  <div className="hidden flex-col md:flex bg-white-100 shadow-full border border-grey-600 p-4 rounded-lg">
                    <div className="flex flex-col opacity-50">
                      <h1 className="text-center text-xl">
                        Rainbow Secret Mewtwo & Mew PSA 9
                      </h1>
                      <div className="flex justify-center items-center my-4">
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                          alt="alt"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center">
                          <span className="text-xl text-grey-400 pr-3">
                            ENDED{" "}
                          </span>
                          <div className="relative flex">
                            <Image
                              src={require("../../assets/giveaways/checkmark.svg")}
                              alt="alt"
                            />
                          </div>
                        </span>
                        <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-12 py-2 ml-2">
                          ENTER
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:hidden flex-row bg-white-100 shadow-full border border-grey-600 p-2 rounded-lg opacity-50">
                    <div className="flex justify-center items-center">
                      <Image
                        src={require("../../assets/homepage/producttracker/image.png")}
                        alt="alt"
                      />
                    </div>
                    <div className="flex flex-col mx-auto my-3">
                      <h1 className="text-center text-base">
                        Rainbow Secret Mewtwo & Mew PSA 9
                      </h1>
                      <div className="flex justify-between items-center flex-row-reverse mt-auto">
                        <p className="text-base text-right text-grey-400 ml-2">
                          ENDED
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* winners */}
            <div className="relative pt-16">
              {/* heading */}
              <div className="flex justify-center items-center">
                <Image
                  src={require("../../assets/giveaways/partypopperemoji.png")}
                  alt="alt"
                />

                <h1 className=" font-semibold text-4xl px-4">WINNERS</h1>
                <Image
                  src={require("../../assets/giveaways/partypopperemoji.png")}
                  alt="alt"
                />
              </div>
              {/* winners */}
              <div className="py-20 px-4 xl:px-20">
                <div className="grid xl:grid-cols-4 xl:gap-12 grid-cols-2 gap-2">
                  <div className="">
                    <div className="flex flex-col rounded-lg shadow-slate-100 shadow-full">
                      <div className="">
                        <div className=" relative">
                          <Image
                            src={require("../../assets/giveaways/background.png")}
                            layout="fill"
                            alt="alt"
                          />
                        </div>
                        <h1 className="text-center text-3xl py-4 shadow-full shadow-slate-100">
                          Ilyes101
                        </h1>
                      </div>
                      <div className="flex justify-center items-center my-4">
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                          alt="alt"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col rounded-lg shadow-slate-100 shadow-full">
                      <div className="">
                        <div className=" relative">
                          <Image
                            src={require("../../assets/giveaways/background.png")}
                            layout="fill"
                            alt="alt"
                          />
                        </div>
                        <h1 className="text-center text-3xl py-4 shadow-full shadow-slate-100">
                          Ilyes101
                        </h1>
                      </div>
                      <div className="flex justify-center items-center my-4">
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                          alt="alt"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col rounded-lg shadow-slate-100 shadow-full">
                      <div className="">
                        <div className=" relative">
                          <Image
                            src={require("../../assets/giveaways/background.png")}
                            layout="fill"
                            alt="alt"
                          />
                        </div>
                        <h1 className="text-center text-3xl py-4 shadow-full shadow-slate-100">
                          Ilyes101
                        </h1>
                      </div>
                      <div className="flex justify-center items-center my-4">
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                          alt="alt"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col rounded-lg shadow-slate-100 shadow-full">
                      <div className="">
                        <div className=" relative">
                          <Image
                            src={require("../../assets/giveaways/background.png")}
                            layout="fill"
                            alt="alt"
                          />
                        </div>
                        <h1 className="text-center text-3xl py-4 shadow-full shadow-slate-100">
                          Ilyes101
                        </h1>
                      </div>
                      <div className="flex justify-center items-center my-4">
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                          alt="alt"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col rounded-lg shadow-slate-100 shadow-full">
                      <div className="">
                        <div className=" relative">
                          <Image
                            src={require("../../assets/giveaways/background.png")}
                            layout="fill"
                            alt="alt"
                          />
                        </div>
                        <h1 className="text-center text-3xl py-4 shadow-full shadow-slate-100">
                          Ilyes101
                        </h1>
                      </div>
                      <div className="flex justify-center items-center my-4">
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                          alt="alt"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col rounded-lg shadow-slate-100 shadow-full">
                      <div className="">
                        <div className=" relative">
                          <Image
                            src={require("../../assets/giveaways/background.png")}
                            layout="fill"
                            alt="alt"
                          />
                        </div>
                        <h1 className="text-center text-3xl py-4 shadow-full shadow-slate-100">
                          Ilyes101
                        </h1>
                      </div>
                      <div className="flex justify-center items-center my-4">
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                          alt="alt"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col rounded-lg shadow-slate-100 shadow-full">
                      <div className="">
                        <div className=" relative">
                          <Image
                            src={require("../../assets/giveaways/background.png")}
                            layout="fill"
                            alt="alt"
                          />
                        </div>
                        <h1 className="text-center text-3xl py-4 shadow-full shadow-slate-100">
                          Ilyes101
                        </h1>
                      </div>
                      <div className="flex justify-center items-center my-4">
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                          alt="alt"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col rounded-lg shadow-slate-100 shadow-full">
                      <div className="">
                        <div className=" relative">
                          <Image
                            src={require("../../assets/giveaways/background.png")}
                            layout="fill"
                            alt="alt"
                          />
                        </div>
                        <h1 className="text-center text-3xl py-4 shadow-full shadow-slate-100">
                          Ilyes101
                        </h1>
                      </div>
                      <div className="flex justify-center items-center my-4">
                        <Image
                          src={require("../../assets/homepage/producttracker/image.png")}
                          alt="alt"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Giveaways;
