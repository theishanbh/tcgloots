import Image from "next/image";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
                <div className="bg-[url('/assets/contactus/background.png')] bg-center bg-cover">
                    <div className="mx-auto max-w-5xl font-jost ">
                        <div className="flex overflow-hidden items-center justify-center py-16 px-2">
                            {/* items container */}
                            <div className=" flex bg-grey-600 bg-opacity-80 rounded-r-xl shadow-full">
                                {/* left block */}
                                <div className="relative hidden md:flex items-center justify-center flex-4 shadow-full bg-blue-primary rounded-l-md">
                                    <div className="absolute h-full w-full">
                                        <Image
                                            src={require("../../assets/register/background.png")}
                                            layout="fill"
                                            alt="alt"
                                        ></Image>
                                    </div>
                                    <div className="relative scale-150">
                                        <Image
                                            src={require("../../assets/register/register.png")}
                                            objectFit="cover"
                                            alt="alt"
                                        />
                                    </div>
                                </div>
                                {/* right block */}
                                <div className=" flex-5 md:pl-20 p-6 rounded-r-md bg-white-100 shadow-full">
                                    <div className="flex flex-col items-center md:justify-start md:items-start">
                                        <div className=" w-full md:w-3/4">
                                            {/* your email */}
                                            <div className="flex flex-col">
                                                <span className=" text-lg font-medium">
                                                    EMAIL
                                                </span>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Email address"
                                                        className="p-2 rounded-lg text-lg border border-grey-600 w-full"
                                                    />
                                                </div>
                                            </div>
                                            {/* username */}
                                            <div className="flex flex-col pt-8">
                                                <span className=" text-lg font-medium">
                                                    Username
                                                </span>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Username"
                                                        className="p-2 rounded-lg text-lg border border-grey-600 w-full"
                                                    />
                                                </div>
                                            </div>
                                            {/* Password */}
                                            <div className="flex flex-col pt-8">
                                                <span className=" text-lg font-medium">
                                                    Password
                                                </span>
                                                <div className="mt-2 flex">
                                                    <input
                                                        type={
                                                            showPassword
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        placeholder="Your Password"
                                                        className="p-2 rounded-lg text-lg border border-grey-600 w-full"
                                                    />
                                                    <div className="w-[5%] -ml-8  flex items-center">
                                                        {!showPassword && (
                                                            <EyeIcon
                                                                className="cursor-pointer text-grey-400"
                                                                onClick={() =>
                                                                    setShowPassword(
                                                                        !showPassword
                                                                    )
                                                                }
                                                            />
                                                        )}
                                                        {showPassword && (
                                                            <EyeOffIcon
                                                                className="cursor-pointer text-grey-400"
                                                                onClick={() =>
                                                                    setShowPassword(
                                                                        !showPassword
                                                                    )
                                                                }
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* declare  */}
                                            <div className="flex mt-5">
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id=""
                                                    className=""
                                                />
                                                <div className="flex flex-col ml-3">
                                                    <span className=" leading-none">
                                                        I declare that I have
                                                        read and accept:
                                                    </span>
                                                    <span>
                                                        <span className="text-blue-300">
                                                            Conditions of the
                                                            server
                                                        </span>{" "}
                                                        and to{" "}
                                                        <span className="text-blue-300">
                                                            Privacy Policy.
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-center pt-4 block md:hidden">
                                                <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-12 py-2">
                                                    REGISTER
                                                </button>
                                            </div>
                                            {/* or */}
                                            <div className="flex justify-center items-center">
                                                <div className="flex-1 h-px bg-grey-600"></div>
                                                <div className="px-3 py-6">
                                                    OR
                                                </div>
                                                <div className="flex-1 h-px bg-grey-600"></div>
                                            </div>
                                            {/* icons facebook and discord */}
                                            <div className="flex justify-center items-center py-2">
                                                <div className="relative p-2 rounded-full border-grey-600 border h-12 w-12 flex items-center justify-center">
                                                    <Image
                                                        src={require("../../assets/register/facebook.svg")}
                                                        alt="alt"
                                                    />
                                                </div>
                                                <div className="relative p-2 rounded-full border-grey-600 border h-12 w-12 flex items-center justify-center ml-4">
                                                    <Image
                                                        src={require("../../assets/register/google.svg")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* button */}
                                        <div className="text-right pt-4 hidden md:block">
                                            <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-12 py-2">
                                                REGISTER
                                            </button>
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

export default Register;
