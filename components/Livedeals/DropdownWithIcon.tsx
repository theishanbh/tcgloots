import { Menu, Transition } from '@headlessui/react'
import { Fragment, SVGProps, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'



export default function Dropdown() {
    return (
        <div className="z-40">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm  font-jost bg-white-100 shadow-lg  text-black-100 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white-100 focus-visible:ring-opacity-75">
                        Options
                        <Image
                            src={require("../../assets/livedeals/arrowdown.png")}
                            alt={'arrow'}
                        ></Image>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute z-40  w-72 mt-2 origin-top-right bg-white-100  rounded-md shadow-lg ring-1 ring-white-100 ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                                                } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                                        >
                                            {/* {active ? (
                      <EditActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                                            Active
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="divide-y-2 divide-grey-600">
                                <div className="px-1 py-1 divide-y-2 divide-grey-600">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                                                    } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                                            >
                                                {/* {active ? (
                      <EditActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                                                Preorder
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="px-1 py-1 divide-y-2 divide-grey-600">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                                                    } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                                            >
                                                {/* {active ? (
                      <EditActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                                                Name: from A to Z
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </div>
                            <div className="divide-y-2 divide-grey-600">
                                <div className="px-1 py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                                                    } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                                            >
                                                {/* {active ? (
                      <EditActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                                                Name: from Z to A
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>

                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                                                    } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                                            >
                                                {/* {active ? (
                      <EditActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                                                Date added: from newest
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </div>
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                                                } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                                        >
                                            {/* {active ? (
                      <EditActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                                            Date added: from oldest
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>

                        </Menu.Items>
                    </Transition>
                </div>
            </Menu>
        </div>
    )
}


