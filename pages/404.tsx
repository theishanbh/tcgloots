import Image from "next/image";
import Link from "next/link";
import React from "react";

const Default = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto text-center h-screen">
        <div className="h-full flex flex-col my-auto justify-center items-center">
          <div className="relative">
            <h1 className=" text-[300px] leading-none font-jost text-black-300 font-bold">
              404
            </h1>
            <div className="w-full h-full top-0 left-0 flex absolute justify-center items-center">
              <Image
                src={require("../assets/404/magnifyingGlass.svg")}
                alt="magnifying glass"
                className="scale-75"
              />
            </div>
          </div>
          <p className=" text-2xl w-full py-4">
            We couldn&apos;t find the page you were looking for. Maybe our FAQ
            can help?
          </p>
          <div>
            <Link href={"/"} passHref>
              <button className=" my-2 text-blue-200 border font-semibold bg-white border-blue-primary font-jost text-xl rounded-md px-16 py-4">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
