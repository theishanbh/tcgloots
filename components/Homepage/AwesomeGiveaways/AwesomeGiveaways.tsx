/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { GiveawayItem } from "./GiveawayItem";

const mockGiveawayItems = [1, 2, 3, 4, 5];

const AwesomeGiveaways = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const itemsToTake = mockGiveawayItems.slice(0, isMobile ? 4 : 5);
  return (
    <div className="font-jost bg-[url('/assets/homepage/awesomegiveaways/backgroundtwo.png')] bg-cover">
      <div className=" mx-auto max-w-7xl text-white py-8">
        <h1 className=" font-jost text-8xl font-semibold text-center text-white-100 py-8">
          Awesome Giveaways!
        </h1>
        <div className=" max-w-7xl mx-auto my-4 px-4 py-8 bg-yellow-400 rounded-lg">
          <div className="flex flex-wrap justify-center flex-row">
            {itemsToTake.map((it) => (
              <GiveawayItem key={it} isHot={it === 1} />
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
