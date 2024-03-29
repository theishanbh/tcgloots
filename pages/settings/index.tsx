import Image from "next/image";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Settings = () => {
  const [giveawayCheckbox, setGiveawayCheckbox] = useState(false);
  const [trackedCheckbox, setTrackedCheckbox] = useState(false);
  const [productEmailCheckbox, setProductEmailCheckbox] = useState(false);
  const [productBrowserCheckbox, setProductBrowserCheckbox] = useState(false);
  const [productAlertCheckbox, setProductAlertCheckbox] = useState(false);
  const [dealsEmailCheckbox, setDealsEmailCheckbox] = useState(false);
  const [dealsBrowserCheckbox, setDealsBrowserCheckbox] = useState(false);
  const [dealsAlertCheckbox, setDealsAlertCheckbox] = useState(false);

  return (
    <div>
      <div className="bg-slate-500">
        <Navbar></Navbar>
        <div className="mx-auto max-w-7xl font-jost bg-slate-600 ">
          {/* heading */}
          <div className="">
            <h1 className="text-8xl font-medium py-8 pl-12 lg:pl-8">
              Settings
            </h1>
          </div>
          {/* settings */}
          <div className="p-2 lg:pl-20 lg:p-1">
            <div className="flex flex-col lg:flex-row">
              {/* left */}
              <div className="flex flex-col flex-4">
                {/* first box */}
                <div className="p-1 flex-grow">
                  <div className=" bg-white-100 p-8 shadow-half h-full rounded-lg">
                    {/* container */}
                    <div className="flex flex-col flex-grow">
                      {/* username */}
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <h2 className=" text-sm lg:text-xl text-grey-400">
                            Username
                          </h2>
                          <span className=" text-base lg:text-lg font-medium">
                            Username1234
                          </span>
                        </div>
                        <div className="flex relative pr-0 lg:pr-4 pt-3">
                          <Image
                            src={require("../../assets/settings/gift.png")}
                            alt="alt"
                          />
                        </div>
                      </div>
                      {/* email */}
                      <div className="flex flex-col py-12">
                        <div className="flex text-xl">
                          <span className="text-sm lg:text-xl text-grey-400">
                            Email
                          </span>
                          <span className="text-sm lg:text-xl pl-12 text-red-100">
                            Verify your Email
                          </span>
                        </div>
                        <div>
                          <span className="text-base lg:text-lg font-medium">
                            loremipsum@gmail.com
                          </span>
                        </div>
                      </div>
                      {/* password */}
                      <div className="flex flex-col">
                        <span className="text-xl text-grey-400">Password</span>
                        <span className="text-lg font-medium">*****</span>
                      </div>
                      {/* password reset button */}
                      <div className="pt-8">
                        <button className="border font-jost text-blue-300 border-blue-300 text-sm lg:text-base font-medium rounded-md px-6 py-2">
                          Send Reset Password Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* second box */}
                <div className="flex-grow py-2">
                  <div className="p-1 flex-grow h-full">
                    <div className="flex flex-col bg-white-100 h-full p-8 rounded-lg shadow-half">
                      <div className="flex items-center lg:flex-row flex-row-reverse justify-between lg:justify-start">
                        {/* image question mark */}
                        <div className="relative items-center justify-center flex">
                          <Image
                            src={require("../../assets/settings/questionmark.png")}
                            alt="alt"
                          />
                        </div>
                        <span className="text-black-100 font-medium text-lg lg:text-xl lg:ml-4 ml-0">
                          Other Preferences
                        </span>
                      </div>
                      <div className="flex flex-col lg:px-6 px-0 text-grey-300 text-lg">
                        <div className="flex lg:pl-8 pl-4 py-3 mt-3 items-center">
                          <div
                            className="h-6 w-6 relative flex-shrink-0"
                            onClick={() =>
                              setGiveawayCheckbox(!giveawayCheckbox)
                            }
                          >
                            {giveawayCheckbox ? (
                              <Image
                                src={require("../../assets/settings/check.svg")}
                                alt="alt"
                              />
                            ) : (
                              <Image
                                src={require("../../assets/settings/checkbox.svg")}
                                alt="alt"
                              />
                            )}
                          </div>
                          <p className=" text-lg leading-none pl-2">
                            Please keep me updated by email on any giveaways &
                            tcgloots news.
                          </p>
                        </div>
                        <div className="flex lg:pl-8 pl-4 py-3 mt-3">
                          <div
                            className="h-6 w-6 relative flex-shrink-0"
                            onClick={() => setTrackedCheckbox(!trackedCheckbox)}
                          >
                            {trackedCheckbox ? (
                              <Image
                                src={require("../../assets/settings/check.svg")}
                                alt="alt"
                              />
                            ) : (
                              <Image
                                src={require("../../assets/settings/checkbox.svg")}
                                alt="alt"
                              />
                            )}
                          </div>
                          <p className=" text-lg leading-none pl-2">
                            Please keep me updated by email onfuture tracked
                            items.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="flex flex-col flex-7">
                <div className="flex lg:flex-row flex-col">
                  {/* left section */}
                  <div className="flex-1 p-1">
                    <div className="flex flex-col bg-white-100 p-4 rounded-xl shadow-half">
                      <div className="flex flex-row-reverse lg:flex-row lg:justify-start justify-between">
                        <div>
                          <Image
                            src={require("../../assets/settings/notification.png")}
                            alt="alt"
                          />
                        </div>
                        <div className="flex flex-col ml-2">
                          <h1 className=" text-xl font-medium leading-none">
                            Product Tracker Notifications
                          </h1>
                          <p className=" text-base text-grey-300 py-4">
                            Receive alerts usiong the follwing methods:
                          </p>

                          <div className="flex items-center pt-2">
                            <div
                              className="relative flex-shrink-0 flex items-center justify-center"
                              onClick={() =>
                                setProductEmailCheckbox(!productEmailCheckbox)
                              }
                            >
                              {productEmailCheckbox ? (
                                <Image
                                  src={require("../../assets/settings/check.svg")}
                                  alt="alt"
                                />
                              ) : (
                                <Image
                                  src={require("../../assets/settings/checkbox.svg")}
                                  alt="alt"
                                />
                              )}
                            </div>
                            <span className=" leading-none pl-2 text-lg text-grey-400">
                              Email notifications
                            </span>
                          </div>
                          <div className="flex flex-col pt-6">
                            <div className="flex items-center">
                              <div
                                className="h-6 w-6 relative flex-shrink-0"
                                onClick={() =>
                                  setProductBrowserCheckbox(
                                    !productBrowserCheckbox
                                  )
                                }
                              >
                                {productBrowserCheckbox ? (
                                  <Image
                                    src={require("../../assets/settings/check.svg")}
                                    alt="alt"
                                  />
                                ) : (
                                  <Image
                                    src={require("../../assets/settings/checkbox.svg")}
                                    alt="alt"
                                  />
                                )}
                              </div>
                              <span className=" leading-none text-lg pl-2 text-grey-400">
                                Browser notifications
                              </span>
                            </div>

                            {/* browser notifications */}
                            <div className="flex ml-4 items-center justify-center pt-4">
                              <div
                                className="h-4 w-4 flex items-center flex-shrink-0 rounded-sm"
                                onClick={() =>
                                  setProductAlertCheckbox(!productAlertCheckbox)
                                }
                              >
                                {productAlertCheckbox ? (
                                  <Image
                                    src={require("../../assets/settings/check.svg")}
                                    alt="alt"
                                  />
                                ) : (
                                  <Image
                                    src={require("../../assets/settings/checkbox.svg")}
                                    alt="alt"
                                  />
                                )}
                              </div>
                              <span className=" text-sm leading-none pl-2 text-grey-400">
                                Audible alerts
                              </span>
                              <div className="relative px-2">
                                <Image
                                  src={require("../../assets/settings/sound.png")}
                                  alt="alt"
                                />
                              </div>
                              <span className=" text-blue-300">Test Alarm</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* right section */}
                  <div className="flex-1 p-1 flex-grow">
                    <div className="flex flex-col bg-white-100 p-4 rounded-xl shadow-half flex-grow h-full">
                      <div className="flex">
                        <div>
                          <Image
                            src={require("../../assets/settings/notification.png")}
                            alt="alt"
                          />
                        </div>
                        <div className="flex flex-col ml-2">
                          <h1 className=" text-xl font-medium leading-none">
                            Live Deals Notifications
                          </h1>
                          <p className=" text-base text-grey-300 py-4">
                            Receive alerts usiong the follwing methods:
                          </p>

                          <div className="flex items-center pt-2">
                            <div
                              className="relative flex-shrink-0 flex items-center justify-center"
                              onClick={() =>
                                setDealsEmailCheckbox(!dealsEmailCheckbox)
                              }
                            >
                              {dealsEmailCheckbox ? (
                                <Image
                                  src={require("../../assets/settings/check.svg")}
                                  alt="alt"
                                />
                              ) : (
                                <Image
                                  src={require("../../assets/settings/checkbox.svg")}
                                  alt="alt"
                                />
                              )}
                            </div>
                            <span className=" leading-none pl-2 text-lg text-grey-400">
                              Email notifications
                            </span>
                          </div>
                          <div className="flex flex-col pt-6">
                            <div className="flex items-center">
                              <div
                                className="h-6 w-6 relative flex-shrink-0"
                                onClick={() =>
                                  setDealsBrowserCheckbox(!dealsBrowserCheckbox)
                                }
                              >
                                {dealsBrowserCheckbox ? (
                                  <Image
                                    src={require("../../assets/settings/check.svg")}
                                    alt="alt"
                                  />
                                ) : (
                                  <Image
                                    src={require("../../assets/settings/checkbox.svg")}
                                    alt="alt"
                                  />
                                )}
                              </div>
                              <span className=" leading-none text-lg pl-2 text-grey-400">
                                Browser notifications
                              </span>
                            </div>

                            {/* browser notifications */}
                            <div className="flex ml-4 items-center justify-center pt-4">
                              <div
                                className="h-4 w-4 relative flex-shrink-0 flex items-center justify-center"
                                onClick={() =>
                                  setDealsAlertCheckbox(!dealsAlertCheckbox)
                                }
                              >
                                {dealsAlertCheckbox ? (
                                  <Image
                                    src={require("../../assets/settings/check.svg")}
                                    alt="alt"
                                  />
                                ) : (
                                  <Image
                                    src={require("../../assets/settings/checkbox.svg")}
                                    alt="alt"
                                  />
                                )}
                              </div>
                              <span className=" text-sm leading-none pl-2 text-grey-400">
                                Audible alerts
                              </span>
                              <div className="relative px-2">
                                <Image
                                  src={require("../../assets/settings/sound.png")}
                                  alt="alt"
                                />
                              </div>
                              <span className=" text-blue-300">Test Alarm</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* third box */}
                <div className="p-1 flex-grow">
                  <div className="p-10 bg-white-100 flex flex-grow h-full rounded-xl shadow-half ">
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center">
                          <Image
                            src={require("../../assets/settings/discord.svg")}
                            alt="alt"
                          />
                        </div>
                        <h1 className="pl-6 text-xl font-medium leading-none">
                          Discord Notifications
                        </h1>
                      </div>
                      <div className="pl-12 pt-6 text-grey-400">
                        <p className="text-lg text-grey-300">
                          Receive instant stock & live deals notifications via
                          Discord.
                        </p>
                        <div className="pt-6 text-lg">
                          <p>
                            1) Download and install discord:{" "}
                            <span className="text-blue-300">
                              {" "}
                              https://discord.com/download
                            </span>
                          </p>
                          <p>
                            2) After you have the app installed on your mobile
                            device, tablet, or PC, click the Join button below.
                          </p>
                          <p>
                            3){" "}
                            <span className="text-black-100">IMPORTANT!</span> :
                            Setup your notifications:
                          </p>
                          {/*  */}
                          <div>
                            <p>
                              {" "}
                              · Unfortunately receiving alerts from specific
                              Text channels in Discord takes a little more
                              effort.
                            </p>
                            <p>
                              {" "}
                              · After joining the above text channel, visit our{" "}
                              <span className="text-blue-300">
                                {" "}
                                #notification-controls{" "}
                              </span>{" "}
                              channel and follow the instructions.
                            </p>
                          </div>
                        </div>
                        <div className=" text-right pt-8">
                          <button className=" border bg-blue-100 text-white-100 border-grey-600 font-jost text-lg rounded-md px-16 py-2 shadow-full">
                            Join
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* button */}
          <div className=" text-center py-12">
            <button className=" border border-grey-600 font-jost text-xl text-white-100 bg-yellow-200 rounded-md px-8 py-2 shadow-full">
              SAVE CHANGES
            </button>
          </div>
          <div className="w-11/12 mx-auto py-4">
            <div className="w-full h-px bg-black-100 mb-3" />
            <span className="text-red-100 font-jost text-lg font-medium pl-4">
              Deactivate Account
            </span>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Settings;
