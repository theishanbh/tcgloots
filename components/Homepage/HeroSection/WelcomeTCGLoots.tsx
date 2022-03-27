import Image from "next/image"

const WelcomeTCGLoots = () => {
  return (
    <div className=" bg-white-100 md:bg-gradient-to-b md:from-grey-600 md:to-grey-500">
        <div className=" px-12 md:py-32 md:px-28 max-w-7xl mx-auto relative">
            <div className=" relative bg-white-100 md:bg-slate-200 mx-auto p-8 flex rounded-md flex-col md:flex-row">
                {/* info welcome tcgLoots */}
                <div className="flex-4">
                  <div className=" border-b-yellow-200 border-b-4 w-full sm:w-max pb-3 mx-auto md:mx-0">
                    <h1 className=" font-jost font-semibold text-8xl md:text-6xl text-center md:text-left">Welcome to TCGLOOTS!</h1>
                  </div>
                  
                  <p className="font-jost text-xl pt-6 hidden md:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente asperiores sed quod qui recusandae, deserunt quam veritatis at beatae vitae repellat officia officiis, porro quaerat est obcaecati alias temporibus nihil possimus molestiae impedit facilis. Aliquid, expedita quo.</p>
                </div>
                {/* Image */}
                <div className="flex-2 flex justify-center items-center relative">
                  <Image
                    src={require("../../../assets/homepage/welcometgcloots/images.png")}
                  />
                  <img src="./assets/homepage/welcometgcloots/lootbox.png" className="absolute -bottom-12 -right-0 scale-50 md:scale-100 md:-bottom-32 md:-right-28" alt="" />
                </div>
                <p className="font-jost text-xl pt-6 block text-center md:hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente asperiores sed quod qui recusandae, deserunt quam veritatis at beatae vitae repellat officia officiis, porro quaerat est obcaecati alias temporibus nihil possimus molestiae impedit facilis. Aliquid, expedita quo.</p>
            
            </div>
        </div>
    </div>
  )
}

export default WelcomeTCGLoots