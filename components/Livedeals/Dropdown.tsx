import { Menu, Transition } from '@headlessui/react'
import { Fragment, SVGProps, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'




export default function Dropdown() {
  const [name,setName] = useState('Sort by')
  return (
    <div className="z-40 flex flex-1">
    <Menu as='div' className="relative inline-flex flex-1 xl:block">
      <div className="xl:w-60 xl:flex flex flex-1">
          <Menu.Button className="flex flex-1 justify-between items-center xl:items-start px-4 py-2 font-jost text-left bg-white-100 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-grey-500 focus-visible:ring-offset-2 focus-visible:border-white-100 sm:text-sm">
            {name}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1  text-black-100"
              aria-hidden="true"
            />
         
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
          <Menu.Items className="absolute top-8 z-40  w-72 mt-2 origin-top-right bg-white-100  rounded-md shadow-lg ring-1 ring-white-100 ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                    } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                  onClick={() => setName('Active')}
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
                    className={`${
                      active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                    } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                    onClick={() => setName('Preorder')}
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
                    className={`${
                      active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                    } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                    onClick={() => setName('Name: from A to Z')}
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
                    className={`${
                      active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                    } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                    onClick={() => setName('Name: from Z to A')}
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
                    className={`${
                      active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                    } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                    onClick={() => setName('Date added: from newest')}
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
                    className={`${
                      active ? 'bg-blue-300 text-white-100 ' : 'text-black-100'
                    } group flex rounded-md items-center w-full font-medium font-jost text-sm px-4 py-2`}
                    onClick={() => setName('Date added: from oldest')}
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

function EditInactiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

