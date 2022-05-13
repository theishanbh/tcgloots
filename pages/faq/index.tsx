import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import FaqBlock from "./faqBlock";

const FAQ = () => {
    const DATA = [
        {
            title: "How to sign up?",
            subTitle:
                "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsajdisojdaosd;anldoiahdlaui",
        },
        {
            title: "Why can’t I log in?",
            subTitle: "lorem ipsum",
        },
        {
            title: "How to add-remove a friend?",
            subTitle: "lorem ipsum",
        },
        {
            title: "How to remove the account?",
            subTitle: "lorem ipsum",
        },
        {
            title: "I have an issue with my account, how can I contact you?",
            subTitle: "lorem ipsum",
        },
        {
            title: "I have an issue with my account, how can I contact you?",
            subTitle: "lorem ipsum",
        },
        {
            title: "Can I connect my current TCGLoots account with my Steam acccount that was used in the deleted account?",
            subTitle: "lorem ipsum",
        },
        {
            title: "Can I connect my current TCGLoots account with my Steam acccount that was used in the deleted account?",
            subTitle: "lorem ipsum",
        },
        {
            title: "I got banned for ”untrustworthy connection”. What should I do?",
            subTitle: "lorem ipsum",
        },
        {
            title: "I got banned for”untrustworthy connection”. What should I do?",
            subTitle: "lorem ipsum",
        },
        {
            title: "Can I change password while being logged in?",
            subTitle: "lorem ipsum",
        },
        {
            title: "Can I change password while being logged in?",
            subTitle: "lorem ipsum",
        },
    ];

    const renderFAQ = DATA.map((item, idx) => {
        return <FaqBlock item={item} key={idx} />;
    });

    console.log(renderFAQ);

    return (
        <div>
            <div>
                <Navbar></Navbar>

                <div>
                    <div className="relative h-full bg-[url('/assets/faq/background.png')] bg-cover bg-no-repeat bg-[center_top_8rem]">
                        <div className="mx-auto max-w-7xl">
                            <div className="flex flex-col font-jost relative ">
                                <h1 className="text-center text-8xl text-black-200 font-semibold pt-20 z-10 relative">
                                    FAQ
                                </h1>
                                <p className=" text-xl text-center py-8 lg:py-20">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor...
                                </p>
                                <div>
                                    <div className="flex flex-col lg:flex-row">
                                        {/* account */}
                                        <div className="w-full lg:w-1/5 p-2 h-20 lg:h-48">
                                            <div className="flex flex-row lg:flex-col border border-blue-500 rounded-lg bg-blue-400 p-4 lg:justify-between items-center h-full bg-grey-800">
                                                {/* img container */}
                                                <div className="lg:flex-1 scale-50 lg:scale-100 flex justify-center items-center relative">
                                                    <Image
                                                        src={require("../../assets/faq/account.svg")}
                                                        alt="alt"
                                                        layout="intrinsic"
                                                    />
                                                </div>
                                                <div className=" font-medium text-base lg:text-lg text-blue-300 flex-grow lg:flex-grow-0 text-center">
                                                    ACCOUNTS
                                                </div>
                                            </div>
                                        </div>
                                        {/* games */}
                                        <div className="w-full lg:w-1/5 p-2 h-20 lg:h-48">
                                            <div className="flex flex-row lg:flex-col border border-blue-500 rounded-lg bg-blue-400 p-4 lg:justify-between items-center h-full bg-grey-800">
                                                {/* img container */}
                                                <div className="lg:flex-1 scale-50 lg:scale-100 flex justify-center items-center relative">
                                                    <Image
                                                        src={require("../../assets/faq/games.svg")}
                                                        alt="alt"
                                                    />
                                                </div>
                                                <div className=" font-medium text-base lg:text-lg text-blue-300 flex-grow lg:flex-grow-0 text-center">
                                                    GAMES
                                                </div>
                                            </div>
                                        </div>
                                        {/* rewards */}
                                        <div className="w-full lg:w-1/5 p-2 h-20 lg:h-48">
                                            <div className="flex flex-row lg:flex-col border border-blue-500 rounded-lg bg-blue-400 p-4 lg:justify-between items-center h-full bg-grey-800">
                                                {/* img container */}
                                                <div className="lg:flex-1 scale-50 lg:scale-100 flex justify-center items-center relative">
                                                    <Image
                                                        src={require("../../assets/faq/rewards.svg")}
                                                        alt="alt"
                                                    />
                                                </div>
                                                <div className=" font-medium text-base lg:text-lg text-blue-300 flex-grow lg:flex-grow-0 text-center">
                                                    REWARDS
                                                </div>
                                            </div>
                                        </div>
                                        {/* website features */}
                                        <div className="w-full lg:w-1/5 p-2 h-20 lg:h-48">
                                            <div className="flex flex-row lg:flex-col border border-blue-500 rounded-lg bg-blue-400 p-4 lg:justify-between items-center h-full bg-grey-800">
                                                {/* img container */}
                                                <div className="lg:flex-1 scale-50 lg:scale-100 flex justify-center items-center relative">
                                                    <Image
                                                        src={require("../../assets/faq/websitefeatures.svg")}
                                                        alt="alt"
                                                    />
                                                </div>
                                                <div className="font-medium text-base lg:text-lg text-blue-300 flex-grow lg:flex-grow-0 text-center">
                                                    WEBSITE FEATURES
                                                </div>
                                            </div>
                                        </div>
                                        {/* payments */}
                                        <div className="w-full lg:w-1/5 p-2 h-20 lg:h-48">
                                            <div className="flex flex-row lg:flex-col border border-blue-500 rounded-lg bg-blue-400 p-4 lg:justify-between items-center h-full bg-grey-800">
                                                {/* img container */}
                                                <div className="lg:flex-1 scale-50 lg:scale-100 flex justify-center items-center relative">
                                                    <Image
                                                        src={require("../../assets/faq/payments.svg")}
                                                        alt="alt"
                                                    />
                                                </div>
                                                <div className=" font-medium text-base lg:text-lg text-blue-300 flex-grow lg:flex-grow-0 text-center">
                                                    PAYMENTS
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute h-full">
                            <Image
                                src={require("../../assets/faq/background.png")}
                                layout="fill"
                                alt="alt"
                            />
                        </div>
                    </div>
                    {/* faq answers and questions */}
                    <div className="md:mx-auto max-w-7xl font-jost py-16 mx-2">
                        {/* container */}
                        <div className="py-8 px-4 bg-grey-800 border-grey-600 border bg-blue-400 rounded-lg">
                            <div className="flex flex-row flex-wrap text-base md:text-lg font-medium">
                                {renderFAQ}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default FAQ;
