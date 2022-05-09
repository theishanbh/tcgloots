import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TileMobileView from "../../components/TrackerPage/TileMobileView";
import Dropdown from "../../components/Livedeals/Dropdown";
import GridButton from "../../components/TrackerPage/GridButton";
import PaginationComponent from "../../components/TrackerPage/PaginationComponent";
import StackView from "../../components/TrackerPage/StackView";
import StatusView from "../../components/TrackerPage/StatusView";
import PrimaryButtonWithRightIcon from "../../components/TrackerPage/PrimaryButtonWithRightIcon";
import FilterView from "../../components/TrackerPage/FilterView";
import TypeView from "../../components/TrackerPage/TypeView";
import StockAlertView from "../../components/TrackerPage/StockAlertView";
import TileDesktopView from "../../components/TrackerPage/TileDesktopView";
import CustomButton from "../../components/TrackerPage/CustomButton";
import HistoryComponent from "../../components/TrackerPage/HistoryComponent";
import ExpandFilter from "../../components/TrackerPage/ExpandFilter";
const TrackerPage = () => {
  const [isFocus, setFocus] = React.useState("stack");
  return (
    <div className="flex flex-col content-between from-zinc-300 ">
      <Navbar />
      <div className="basis-1/4"></div>
      <div className="mx-2 mb-20  flex basis-2/4 flex-1 flex-col xl:hidden">
        <div className="flex flex-col my-10 mx-2">
          <div className="flex flex-row items-baseline justify-between">
            <div className="font-jost text-4xl text-blue-300 font-medium">
              {" "}
              Pokemon Cards{" "}
            </div>
            <GridButton isFocus={isFocus} setFocus={setFocus} />
          </div>
          <div className="font-jost text-xs text-grey-400">
            Home {">"} Collectibles {">"} Trading Cards
          </div>
        </div>

        {isFocus == "stack" ? (
          <div className="flex flex-col ">
            <div className="flex flex-1 mb-10">
              <Dropdown />
            </div>
            <div>
              <div className="font-jost text-lg font-medium ml-2">
                Category name 1
              </div>
              <TileMobileView
                title={"Sony PlayStation 5 Console (PS5)"}
                price={"499.9"}
                date={"12 Dec, 08:08"}
                buttonType={"primary"}
                isAdded={true}
                isLabel={true}
                isNew={true}
              />
              <TileMobileView
                title={"Sony PlayStation 5 Console (PS5)"}
                price={"499.9"}
                date={"12 Dec, 08:08"}
                buttonType={"secondary"}
                isAdded={false}
                isLabel={true}
                isNew={false}
              />
              <TileMobileView
                title={"Sony PlayStation 5 Console (PS5)"}
                price={"499.9"}
                date={"12 Dec, 08:08"}
                buttonType={"secondary"}
                isAdded={false}
                isLabel={false}
                isNew={false}
              />
              <div className="font-jost text-lg font-medium ml-2">
                Category name 2
              </div>
              <TileMobileView
                title={"Sony PlayStation 5 Console (PS5)"}
                price={"499.9"}
                date={"12 Dec, 08:08"}
                buttonType={"primary"}
                isAdded={true}
                isLabel={true}
                isNew={true}
              />
              <TileMobileView
                title={"Sony PlayStation 5 Console (PS5)"}
                price={"499.9"}
                date={"12 Dec, 08:08"}
                buttonType={"secondary"}
                isAdded={false}
                isLabel={true}
                isNew={false}
              />
              <TileMobileView
                title={"Sony PlayStation 5 Console (PS5)"}
                price={"499.9"}
                date={"12 Dec, 08:08"}
                buttonType={"primary"}
                isAdded={true}
                isLabel={false}
                isNew={true}
              />
              <TileMobileView
                title={"Sony PlayStation 5 Console (PS5)"}
                price={"499.9"}
                date={"12 Dec, 08:08"}
                buttonType={"secondary"}
                isAdded={false}
                isLabel={false}
                isNew={false}
              />
              <TileMobileView
                title={"Sony PlayStation 5 Console (PS5)"}
                price={"499.9"}
                date={"12 Dec, 08:08"}
                buttonType={"secondary"}
                isAdded={false}
                isLabel={false}
                isNew={false}
              />
              <div className="font-jost text-lg font-medium ml-2">
                Category name 3
              </div>
              <TileMobileView
                title={"Sony PlayStation 5 Console (PS5)"}
                price={"499.9"}
                date={"12 Dec, 08:08"}
                buttonType={"primary"}
                isAdded={true}
                isLabel={false}
                isNew={true}
              />
              <TileMobileView
                title={"Sony PlayStation 5 Console (PS5)"}
                price={"499.9"}
                date={"12 Dec, 08:08"}
                buttonType={"primary"}
                isAdded={true}
                isLabel={false}
                isNew={true}
              />
              <TileMobileView
                title={"Sony PlayStation 5 Console (PS5)"}
                price={"499.9"}
                date={"12 Dec, 08:08"}
                buttonType={"secondary"}
                isAdded={false}
                isLabel={false}
                isNew={false}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-1 mb-10">
              <Dropdown />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <StackView
                title={"Sony PlayStation 5 Console (PS5)"}
                isLabel={false}
                isNew={false}
              />
              <StackView
                title={"Sony PlayStation 5 Console (PS5)"}
                isLabel={false}
                isNew={false}
              />
              <StackView
                title={"Sony PlayStation 5 Console (PS5)"}
                isLabel={true}
                isNew={true}
              />
              <StackView
                title={"Sony PlayStation 5 Console (PS5)"}
                isLabel={true}
                isNew={false}
              />
              <StackView
                title={"Sony PlayStation 5 Console (PS5)"}
                isLabel={false}
                isNew={false}
              />
              <StackView
                title={"Sony PlayStation 5 Console (PS5)"}
                isLabel={false}
                isNew={false}
              />
              <StackView
                title={"Sony PlayStation 5 Console (PS5)"}
                isLabel={false}
                isNew={false}
              />
              <StackView
                title={"Sony PlayStation 5 Console (PS5)"}
                isLabel={false}
                isNew={false}
              />
              <StackView
                title={"Sony PlayStation 5 Console (PS5)"}
                isLabel={false}
                isNew={false}
              />
              <StackView
                title={"Sony PlayStation 5 Console (PS5)"}
                isLabel={false}
                isNew={false}
              />
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-row items-center justify-center mt-20">
          <PaginationComponent />
        </div>
        <div className="flex flex-1 flex-col mt-24 mx-4 mb-4">
          <div className="flex flex-row space-x-4">
            <Image
              src={require("../../assets/trackerpage/recent.svg")}
              alt={"poster image"}
            ></Image>
            <div className="font-jost text-xl text-black-100 font-medium">
              Recent Stock History
            </div>
          </div>
        </div>
        <StatusView />
      </div>
      <div className=" hidden xl:flex flex-row">
        <div className="flex flex-col w-1/4 bg-grey-600 ">
          <div className="mb-6 space-y-6">
            <div className="mt-16 mx-10">
              <ExpandFilter />
            </div>
            <div className=" mx-10">
              <FilterView />
            </div>
            <div className=" mx-10">
              <TypeView />
            </div>
            <div className=" mx-10">
              <StockAlertView />
            </div>

            <div className="flex  justify-center mt-8">
              <PrimaryButtonWithRightIcon title="Suggest a Product" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 mt-16 mb-20 ml-2 relative">
          {isFocus == "stack" ? (
            <>
              <div className="flex flex-row mx-10 mb-20 justify-between items-center">
                <div className="text-sm text-grey-200">
                  Home &nbsp;{">"}
                  &nbsp;Collectibles&nbsp; {">"}
                  &nbsp;Trading Cards&nbsp; {">"} &nbsp;
                  <span className="text-blue-100">Pokemon Cards</span>
                </div>
                <div className="flex flex-row space-x-4 mt-2 ml-20">
                  <div className="font-jost text-xs text-grey-400 flex-3 ">
                    Constantly checking for stock&nbsp; &nbsp;
                    <Image
                      src={require("../../assets/livedeals/loader.png")}
                      width={16}
                      height={16}
                      className="animate-spin"
                      alt="alt"
                    />
                  </div>
                  <div className="flex flex-row space-x-4">
                    <div>
                      <Image
                        src={require("../../assets/trackerpage/telegram.svg")}
                        width={20}
                        height={20}
                        alt="alt"
                      />
                    </div>
                    <div>
                      <Image
                        src={require("../../assets/trackerpage/discord.svg")}
                        width={20}
                        height={20}
                        alt="alt"
                      />
                    </div>
                    <div>
                      <Image
                        src={require("../../assets/trackerpage/email.svg")}
                        width={20}
                        height={20}
                        alt="alt"
                      />
                    </div>
                    <div>
                      <Image
                        src={require("../../assets/trackerpage/browser.svg")}
                        width={20}
                        height={20}
                        alt="alt"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-1">
                  <GridButton isFocus={isFocus} setFocus={setFocus} />
                </div>
              </div>
              <div className="flex flex-row mx-16 ">
                <div className="absolute topalign1 w-16 left-0">
                  <Image
                    src={require("../../assets/trackerpage/updateLabel.svg")}
                    alt={"poster image"}
                  ></Image>
                </div>
                <div className="absolute topalign2 w-16 left-0">
                  <Image
                    src={require("../../assets/trackerpage/newLabel.svg")}
                    alt={"poster image"}
                  ></Image>
                </div>
                <div className="absolute topalign3 w-16 left-0">
                  <Image
                    src={require("../../assets/trackerpage/updateLabel.svg")}
                    alt={"poster image"}
                  ></Image>
                </div>
                <div className="absolute topalign4 w-16 left-0">
                  <Image
                    src={require("../../assets/trackerpage/updateLabel.svg")}
                    alt={"poster image"}
                  ></Image>
                </div>
                <div className="w-full">
                  <TileDesktopView />
                </div>
              </div>{" "}
            </>
          ) : (
            <>
              <div className="flex flex-row mx-8 mb-20 justify-between items-center">
                <div className="text-sm flex-2  text-grey-200">
                  Home &nbsp;{">"}
                  &nbsp;Collectibles&nbsp; {">"}
                  &nbsp;Trading Cards&nbsp; {">"} &nbsp;
                  <span className="text-blue-100">Pokemon Cards</span>
                </div>
                <div className="flex flex-row space-x-4 mt-2 ml-20 items-baseline">
                  <div className="flex flex-row space-x-4">
                    <div>
                      <Image
                        src={require("../../assets/trackerpage/telegram.svg")}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <Image
                        src={require("../../assets/trackerpage/discord.svg")}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <Image
                        src={require("../../assets/trackerpage/email.svg")}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <Image
                        src={require("../../assets/trackerpage/browser.svg")}
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="mb-1">
                    <GridButton isFocus={isFocus} setFocus={setFocus} />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <PaginationComponent />
                    <div className="font-jost flex justify-end text-xs text-grey-400 flex-3 ">
                      Constantly checking for stock&nbsp; &nbsp;
                      <Image
                        src={require("../../assets/livedeals/loader.png")}
                        width={16}
                        height={16}
                        className="animate-spin"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 mx-10">
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={true}
                  isNew={true}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={true}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={true}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={true}
                  isNew={true}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={true}
                  isNew={true}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={true}
                  isNew={true}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
                <StackView
                  title={"Sony PlayStation 5 Console (PS5)"}
                  isLabel={false}
                  isNew={false}
                />
              </div>
            </>
          )}
          <div className="flex flex-row justify-center mt-16">
            <CustomButton />
          </div>
          <div className="mt-28 mx-10">
            <HistoryComponent />
          </div>
        </div>
      </div>

      <div className="basis-1/4">
        <Footer />
      </div>
    </div>
  );
};

export default TrackerPage;
