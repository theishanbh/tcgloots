/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Nav: React.FC = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    const tabs = [
        { name: "Settings" },
        { name: "Live Deals" },
        { name: "My Alerts" },
        { name: "Product Tracker" },
        { name: "In-Store Finds" },
        { name: "Giveaway" },
        { name: "News" },
        { name: "Log out" },
    ];

    const items = tabs.map((tab) => (
        <Link href={"/"} key={tab.name} passHref>
            <div className="font-jost text-xl text-[#888888] py-6 px-10 hover:bg-[#F9F9F9] hover:border-[#55AEF0] border-l-4 border-transparent cursor-pointer">
                {tab.name}
            </div>
        </Link>
    ));

    return (
        <div className="fixed font-jost top-0 w-full z-20 bg-white-100">
            <div className="flex flex-col items-end w-full z-10">
                <div className="flex items-center justify-between lg:justify-between px-8 shadow-lg w-full">
                    <div className="flex lg:gap-5 xl:gap-16">
                        <Image
                            className=" cursor-pointer"
                            src={require("../../assets/tcglootslogo.png")}
                            alt="TCGLoots"
                            height={70}
                            width={70}
                            objectFit="contain"
                        />
                        <div className="hidden lg:flex lg:gap-6 items-center text-[#888888]">
                            <Link href={"/"}>PRODUCT TRACKER</Link>
                            <Link href={"/"}>LIVE DEALS</Link>
                            <Link href={"/"} passHref>
                                <div className="flex items-center gap-3">
                                    <img
                                        src="./assets/logos/giveaways.png"
                                        alt=""
                                        className="inline h-full"
                                    />
                                    <div>GIVEAWAYS</div>
                                </div>
                            </Link>
                            <Link href={"/"}>CONTACT</Link>
                            <Link href={"/"}>FAQ</Link>
                            <Link href={"/"}>NEWS</Link>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:gap-4">
                        <button className="px-5 py-2 border-[#888888] border-[2px] rounded-lg">
                            LOGIN
                        </button>
                        <button className="px-5 py-2  rounded-lg bg-[#FFCC30] text-white-100">
                            REGISTER
                        </button>
                    </div>
                    <MenuIcon
                        className="block h-7 w-7 lg:hidden"
                        aria-hidden="true"
                        onClick={() => setShowSideBar(!showSideBar)}
                    />
                </div>
            </div>
            {showSideBar && (
                <div className="w-3/4 h-[calc(100vh-70px)] py-6 flex flex-col shadow-[-8px_0px_10px_-5px_rgba(0,0,0,0.1)] justify-between lg:hidden bg-white-100 absolute right-0 z-20">
                    <div>{items}</div>
                    <div className="px-10 flex gap-4">
                        <Link href="/" passHref>
                            <Image
                                src={require("../../assets/socials/telegram.svg")}
                                height={30}
                                alt=""
                                className="cursor-pointer"
                            />
                        </Link>
                        <Link href="/" passHref>
                            <Image
                                src={require("../../assets/socials/discord.svg")}
                                height={30}
                                alt=""
                                className="cursor-pointer"
                            />
                        </Link>
                        <Link href="/" passHref>
                            <Image
                                src={require("../../assets/socials/email.svg")}
                                height={30}
                                alt=""
                                className="cursor-pointer"
                            />
                        </Link>
                        <Link href="/" passHref>
                            <Image
                                src={require("../../assets/socials/pages.svg")}
                                height={30}
                                alt=""
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;
