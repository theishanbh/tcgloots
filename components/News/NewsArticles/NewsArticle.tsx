import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropsInterface {
  border: Boolean;
}

const NewsArticle = (props: PropsInterface) => {
  return (
    <div className="flex flex-row px-2 xl:px-0">
      <div className="flex flex-col flex-3">
        <div
          className={
            "flex items-start flex-row justify-start py-10 " +
            (props.border === true
              ? "border-solid border-b-2 border-grey-600"
              : "")
          }
        >
          <div className="relative flex-1 md:flex-initial justify-center items-center my-auto flex-shrink-0 overflow-hidden">
            <Image
              src={require("../../../assets/news/image1.png")}
              objectFit="cover"
              className=" rounded-lg"
              alt="alt"
            />
          </div>
          <div className="flex flex-2 md:flex-initial flex-col h-full ml-4 w-auto">
            <Link href={"/news/1"}>
              <span className=" text-base md:text-6xl font-medium text-black-100 text-left no-underline hover:underline pb-0 md:pb-2 hover:text-blue-700">
                {" "}
                Lorem ipsum dolor sit amet{" "}
              </span>
            </Link>
            <p className="text-xl font-light text-black-100 text-left text-ellipsis overflow-hidden hidden md:block">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...{" "}
            </p>
            <div className=" md:text-2sm text-grey-400 md:text-black-100 mt-0 md:mt-auto text-left py-0 md:py-3">
              {" "}
              1 Dec 2021{" "}
            </div>
            <div className=" text-base block md:hidden text-black-100 mt-auto text-left">
              {" "}
              Read More &gt;{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
