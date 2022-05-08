import Image from "next/image";
// @ts-ignore
import Blur from "react-css-blur";

const flags = [
  "flag-us.svg",
  "flag-uk.svg",
  "flag-ca.svg",
  "flag-ge.svg",
  "flag-it.svg",
  "flag-fr.svg",
  "flag-ja.svg",
];

const InstoreTracker = () => {
  return (
    <div className="font-jost">
      <div className=" bg-slate-700">
        <div className="mx-auto max-w-7xl">
          <h1 className=" font-jost text-8xl text-black-200 font-semibold text-center pt-20 pb-8">
            Instore Finds
          </h1>

          <div className="flex justify-center items-center">
            {flags.map((element, index) => (
              <span key={index} className="px-2">
                <Image
                  src={require(`../../../assets/trackerpage/${element}`)}
                  alt="flag image"
                />
              </span>
            ))}
            {/* <Image src={require(`"`)} /> */}
          </div>
          <p className=" font-jost text-sm md:text-xl text-grey-400 font-medium text-center pb-8">
            Every week we randomly reward contributors that help the community!
          </p>
          <div className="bg-contain bg-no-repeat px-20 py-6 overflow-x-scroll lg:overflow-x-hidden">
            <div className="flex items-center justify-start md:justify-center relative ">
              {/* second left element */}
              <div className="bg-white-100 w-auto inline-block p-3 shadow-xl rounded-lg lg:scale-75 shrink-0 lg:absolute lg:left-0 lg:z-10 lg:blur-[5px] mr-10 lg:mr-0">
                <div className="flex flex-col">
                  <div>
                    <div className="relative">
                      <Image
                        src={require("../../../assets/homepage/instoretracker/default.png")}
                      ></Image>
                    </div>
                  </div>
                  <div className="flex items-center text-base justify-between py-4 text-black-200 px-4">
                    <div className="w-1/3 border-r border-grey-600 text-center">
                      Seattle, WA
                    </div>
                    <div className="w-1/3 border-r border-grey-600 text-center">
                      Gamestop
                    </div>
                    <div className="w-1/3 text-right">12:00 AM EST</div>
                  </div>
                </div>
              </div>
              {/* first left */}
              <div className="bg-white-100 w-auto inline-block p-3 shadow-xl rounded-lg lg:scale-90 shrink-0 lg:absolute lg:left-40 lg:z-20 lg:blur-[2px]  mr-10 lg:mr-0">
                <div className="flex flex-col">
                  {/* iamge */}
                  <div>
                    <div className="relative">
                      <Image
                        src={require("../../../assets/homepage/instoretracker/default.png")}
                      ></Image>
                    </div>
                  </div>
                  {/* text container */}
                  <div className="flex items-center text-base justify-between py-4 text-black-200 px-4">
                    <div className="w-1/3 border-r border-grey-600 text-center">
                      Seattle, WA
                    </div>
                    <div className="w-1/3 border-r border-grey-600 text-center">
                      Gamestop
                    </div>
                    <div className="w-1/3 text-right">12:00 AM EST</div>
                  </div>
                </div>
              </div>
              {/* center element */}
              <div className="bg-white-100 w-auto inline-block p-3 shadow-xl rounded-lg shrink-0 lg:z-30  mr-10 lg:mr-0">
                <div className="flex flex-col">
                  {/* iamge */}
                  <div>
                    <div className="relative">
                      <Image
                        src={require("../../../assets/homepage/instoretracker/default.png")}
                      ></Image>
                    </div>
                  </div>
                  {/* text container */}
                  <div className="flex items-center text-base justify-between py-4 text-black-200 px-4">
                    <div className="w-1/3 border-r border-grey-600 text-center">
                      Seattle, WA
                    </div>
                    <div className="w-1/3 border-r border-grey-600 text-center">
                      Gamestop
                    </div>
                    <div className="w-1/3 text-right">12:00 AM EST</div>
                  </div>
                </div>
              </div>
              {/* first right element */}
              <div className="bg-white-100 w-auto inline-block p-3 shadow-xl rounded-lg lg:scale-90 shrink-0 lg:absolute lg:right-40 lg:z-20 lg:blur-[2px]  mr-10 lg:mr-0">
                <div className="flex flex-col">
                  {/* iamge */}
                  <div>
                    <div className="relative">
                      <Image
                        src={require("../../../assets/homepage/instoretracker/default.png")}
                      ></Image>
                    </div>
                  </div>
                  {/* text container */}
                  <div className="flex items-center text-base justify-between py-4 text-black-200 px-4">
                    <div className="w-1/3 border-r border-grey-600 text-center">
                      Seattle, WA
                    </div>
                    <div className="w-1/3 border-r border-grey-600 text-center">
                      Gamestop
                    </div>
                    <div className="w-1/3 text-right">12:00 AM EST</div>
                  </div>
                </div>
              </div>
              {/* second right element */}
              <div className="bg-white-100 w-auto inline-block p-3 shadow-xl rounded-lg lg:scale-75 shrink-0 lg:absolute lg:right-0 lg:z-10 lg:blur-[5px]  mr-10 lg:mr-0">
                <div className="flex flex-col">
                  {/* iamge */}
                  <div>
                    <div className="relative">
                      <Image
                        src={require("../../../assets/homepage/instoretracker/default.png")}
                      ></Image>
                    </div>
                  </div>
                  {/* text container */}
                  <div className="flex items-center text-base justify-between py-4 text-black-200 px-4">
                    <div className="w-1/3 border-r border-grey-600 text-center">
                      Seattle, WA
                    </div>
                    <div className="w-1/3 border-r border-grey-600 text-center">
                      Gamestop
                    </div>
                    <div className="w-1/3 text-right">12:00 AM EST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <p className=' font-medium text-xl text-center text-grey-primary'>Every week we randomly reward contributors that help the community!</p> */}
          <div className="text-center">
            <button className=" bg-yellow-200 text-center text-xl hover:bg-blue-700 px-12 py-2 text-white-100 rounded my-8">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstoreTracker;
