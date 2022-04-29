/* eslint-disable @next/next/no-img-element */
interface Props {
  isHot: boolean;
}

//TODO: add other props such as the name or the link when integrating with backend.
export const GiveawayItem = ({ isHot }: Props) => {
  return (
    <div
      className={
        isHot
          ? "flex flex-col w-1/2 max-w-[350px] my-6 lg:my-0 lg:w-1/5 px-4 relative"
          : "flex flex-col w-1/2 max-w-[350px] my-6 lg:my-0 lg:w-1/5 px-4"
      }
    >
      {isHot && (
        <div className="absolute flex content-center items-center bg-white-100">
          <div className="relative bg-white-100">
            <span className="absolute -top-3 -left-3 w-40 h-40 flex items-center justify-center overflow-hidden before:content-['HOT'] before:absolute before:h-10 before:bg-blue-200  before:-rotate-45 before:w-56 before:-translate-x-[0.9rem] before:-translate-y-[0.9rem] before:flex before:justify-center before:items-center before:text-white-100 before:text-4xl before:font-semibold before:py-2 before:tracking-wider before:shadow-badge after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-4 after:w-4 after:bg-green-100 after:z-0 before:z-20 after:shadow-badgefull"></span>
          </div>
        </div>
      )}
      <div className="bg-white-100 shadow-lg rounded-md flex-1 z-10">
        <div className=" border-b border-grey-primary ">
          <img
            src="./assets/homepage/producttracker/image.png"
            alt=""
            className=" mx-auto"
          />
        </div>
        <div className="p-3">
          <p className=" font-medium text-xl text-black-100">
            Rainbow Secret Mewtwo and Mew PSA 9
          </p>
          <span className=" text-grey-400">Ends in: 5 days</span>
        </div>
      </div>
    </div>
  );
};
