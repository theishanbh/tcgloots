import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
        <div className="bg-[url('/assets/contactus/background.png')] bg-center bg-cover">
          <div className="mx-auto max-w-7xl font-jost ">
            <div className="flex overflow-hidden items-center justify-center py-28">
              {/* items container */}
              <div className=" bg-white-100 p-4 bg-opacity-90 rounded-lg shadow-full">
                <div className="flex flex-col p-8">
                  {/* your email */}
                  <div className="flex flex-col">
                    <span className=" text-xl font-normal">EMAIL</span>
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="p-3 rounded-lg text-lg font-normal w-full"
                      />
                    </div>
                  </div>
                  {/* your Password */}
                  <div className="flex flex-col mt-6">
                    <span className=" text-xl font-normal">PASSWORD</span>
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Your Password"
                        className="p-2 rounded-lg text-lg font-normal w-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between leading-none py-6 text-2sm">
                    <div className="flex">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label htmlFor="vehicle1" className="pl-1">
                        Remember me
                      </label>
                    </div>
                    <div className="pl-40">Forgot Password? </div>
                  </div>
                  {/* button */}
                  <div className=" text-center py-4">
                    <button className=" border bg-white-100 border-grey-400 font-jost text-lg text-grey-400 rounded-md px-16 py-2 shadow-full">
                      LOG IN
                    </button>
                  </div>

                  <div className="text-center inline-flex justify-center">
                    <span>
                      Don&apos;t have an account?
                      <span className="pl-1 text-blue-300">Register</span>
                    </span>
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

export default Login;
