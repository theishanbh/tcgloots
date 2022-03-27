import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import giveaway from '../../public/assets/logos/giveaways.png'


// comments!!
const navigation = [
    { name: 'PRODUCT TRACKER', href: 'trackerpage', current: true, mobile: false },
    { name: 'LIVE DEALS', href: 'livedeals', current: false, mobile: false },
    { name: 'GIVEAWAYS', href: 'giveaways', current: false, mobile: false },
    { name: 'CONTACT', href: 'contactus', current: false, mobile: false },
    { name: 'FAQ', href: 'faq', current: false, mobile: false },
    { name: 'NEWS', href: 'news', current: false, mobile: false },
    { name: 'LOGIN', href: 'login', current: false, mobile: true },
    { name: 'REGISTER', href: 'register', current: false, mobile: true },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
// how to use this function (example)
// className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}

const Navbar = () => {
    return (
        <div>
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
                                                    src={require('../../assets/tcglootslogo.png')}
                                                    alt="TCGLoots"
                                                    height={70}
                                                    width={70}
                                                    objectFit='contain'
                                                />
                                            </div>
                                        </Link>
                                        <div className="hidden md:flex-1 lg:flex md:ml-6">
                                            <div className="flex flex-1 justify-start space-x-4 items-center">
                                                {navigation.map((item) => (
                                                    item.mobile == false ?
                                                        item.name == 'GIVEAWAYS' ?
                                                            <Link href={`/${item.href}`}>
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className={classNames('pl-10 py-2 font-jost text-grey-400 text-base rounded-md font-medium inline-flex items-center uppercase')}
                                                                    aria-current={item.current ? 'page' : undefined}
                                                                >
                                                                    <img src="./assets/logos/giveaways.png" alt="" className='inline h-full' />
                                                                    {/* <div className='sehp:inline sehp:w-4 sehp:h-full'>
                                                                        <Image
                                                                            src={giveaway}
                                                                            alt='giveaway image here'
                                                                            // width={20}
                                                                            // height={30}
                                                                        />
                                                                    </div> */}
                                                                    <span className='ml-2'> {item.name} </span>
                                                                </a>
                                                            </Link>
                                                            :
                                                            <Link href={`/${item.href}`}>
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className={classNames('pl-10 py-2 rounded-md font-jost text-grey-400 text-base font-medium uppercase')}
                                                                    aria-current={item.current ? 'page' : undefined}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            </Link>
                                                        : false
                                                ))}
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
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
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
                                            <button className='border border-grey-400 font-jost text-grey-400 text-base font-medium rounded-md px-10 py-2'>LOGIN</button>
                                        </Link>
                                        <Link passHref href={"/register"}>
                                            <button className='border font-jost text-white-100 bg-yellow-200 text-base font-medium rounded-md px-10 py-2 ml-2'>REGISTER</button>
                                        </Link>

                                        {/* Profile dropdown */}
                                        {/* <Menu as="div" className="ml-3 relative">
                                </Menu> */}
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="lg:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default Navbar