import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import giveaway from "../../public/assets/logos/giveaways.png";

// comments!!
const navigation = [
  {
    name: "PRODUCT TRACKER",
    href: "trackerpage",
    current: true,
    mobile: false,
  },
  { name: "LIVE DEALS", href: "livedeals", current: false, mobile: false },
  { name: "GIVEAWAYS", href: "giveaways", current: false, mobile: false },
  { name: "CONTACT", href: "contactus", current: false, mobile: false },
  { name: "FAQ", href: "faq", current: false, mobile: false },
  { name: "NEWS", href: "news", current: false, mobile: false },
  { name: "LOGIN", href: "login", current: false, mobile: true },
  { name: "REGISTER", href: "register", current: false, mobile: true },
];

const items = navigation.map((tab, index) => (
  <Link href={"/"} key={index} passHref>
    <div className="font-jost text-xl text-[#888888] py-6 px-10 hover:bg-[#F9F9F9] hover:border-[#55AEF0] border-l-4 border-transparent cursor-pointer">
      {tab.name}
    </div>
  </Link>
));

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
// how to use this function (example)
// className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}

const Navbar = () => {
  return (
    <div className=" sticky top-0 left-0 bg-white-100 z-50">
      <div className=" shadow-lg relative py-3">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="flex-1 flex items-center lg:items-stretch justify-start">
                    <Link passHref href="/">
                      <div className="relative flex-shrink-0 flex items-center">
                        <Image
                          className=" cursor-pointer"
                          src={require("../../assets/tcglootslogo.png")}
                          alt="TCGLoots"
                          height={70}
                          width={70}
                          objectFit="contain"
                        />
                      </div>
                    </Link>
                    <div className="hidden md:flex-1 lg:flex md:ml-6">
                      <div className="flex flex-1 justify-start space-x-4 items-center">
                        {navigation.map((item) =>
                          item.mobile == false ? (
                            <Link href={`/${item.href}`}>
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  "pl-8 py-2 rounded-md font-jost text-grey-400 text-base font-medium uppercase"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </a>
                            </Link>
                          ) : (
                            false
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="inset-y-0 left-0 flex items-center lg:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden lg:flex">
                    {/* <button
                                    type="button"
                                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />    
                                </button> */}
                    <Link passHref href={"/login"}>
                      <button className="border border-grey-400 font-jost text-grey-400 text-base font-medium rounded-md px-10 py-2">
                        LOGIN
                      </button>
                    </Link>
                    <Link passHref href={"/register"}>
                      <button className="border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-10 py-2 ml-2">
                        REGISTER
                      </button>
                    </Link>

                    {/* Profile dropdown */}
                    {/* <Menu as="div" className="ml-3 relative">
                                </Menu> */}
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <div className="w-3/4 h-[calc(100vh-70px)] py-6 flex flex-col shadow-[-8px_0px_10px_-5px_rgba(0,0,0,0.1)] justify-between lg:hidden bg-white-100 absolute right-0 z-20">
                    <div>{items}</div>
                    <div className="px-10 flex gap-4">
                      <Link href="/" passHref>
                        <Image
                          src={require("../../assets/logos/telegram.svg")}
                          height={30}
                          alt=""
                          className="cursor-pointer"
                        />
                      </Link>
                      <Link href="/" passHref>
                        <Image
                          src={require("../../assets/logos/discord.svg")}
                          height={30}
                          alt=""
                          className="cursor-pointer"
                        />
                      </Link>
                      <Link href="/" passHref>
                        <Image
                          src={require("../../assets/trackerpage/email.svg")}
                          height={30}
                          alt=""
                          className="cursor-pointer"
                        />
                      </Link>
                      {/* pages svg */}
                      <Link href="/" passHref>
                        <Image
                          src={require("../../assets/logos/discord.svg")}
                          height={30}
                          alt=""
                          className="cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Navbar;
