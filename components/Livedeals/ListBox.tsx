import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import FlagUS from "../../assets/trackerpage/flag-us.svg";
import FlagUk from "../../assets/trackerpage/flag-uk.svg";
import FlagCa from "../../assets/trackerpage/flag-ca.svg";
import FlagGe from "../../assets/trackerpage/flag-ge.svg";
import Flagit from "../../assets/trackerpage/flag-it.svg";
import FlagFr from "../../assets/trackerpage/flag-fr.svg";
import FlagJa from "../../assets/trackerpage/flag-ja.svg";

const people = [
  { name: "United States", imageUrl: FlagUS },
  { name: "United Kingdom", imageUrl: FlagUk },
  { name: "Canada", imageUrl: FlagCa },
  { name: "Deutschland", imageUrl: FlagGe },
  { name: "Italia", imageUrl: Flagit },
  { name: "France", imageUrl: FlagFr },
  { name: "Japan", imageUrl: FlagJa },
];

export default function ListBox() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="z-40 flex flex-1">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <div className="flex flex-1">
            <Listbox.Button className="flex flex-row w-full items-center py-2  pr-6 font-jost text-left bg-white-100 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-grey-500 focus-visible:ring-offset-2 focus-visible:border-white-100 text-xs">
              <span className="pl-2 pt-2 block flex-1  ">
                <Image
                  src={selected.imageUrl}
                  width={20}
                  height={20}
                  alt={`flagImage`}
                ></Image>
              </span>
              <div className="block w-full text-center truncate flex-4 pt-1 ">
                {selected.name}
              </div>
              <span className="absolute inset-y-0 top-4 pr-2 pointer-events-none flex-1 right-0">
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 -mr-1 text-black-100"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white-100 rounded-md shadow-lg max-h-60 ring-1 ring-black-100 ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? "text-black-100" : "text-grey-600"
                    }`
                  }
                  value={person}
                >
                  {({ selected }: any) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>

                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                        <Image
                          src={person.imageUrl}
                          width={20}
                          height={20}
                          alt={`flagImage`}
                        ></Image>
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
