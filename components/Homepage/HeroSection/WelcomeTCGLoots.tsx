const WelcomeTCGLoots = () => {
  return (
    <div className=" bg-gradient-to-b from-grey-600 to-grey-500">
        <div className="py-32 px-28 max-w-7xl mx-auto relative">
            <div className=" relative bg-slate-200 mx-auto p-8 flex rounded-md">
                {/* info welcome tcgLoots */}
                <div className="flex-4">
                  <div className=" border-b-yellow-200 border-b-4 w-max pb-3">
                    <h1 className=" font-jost inline font-semibold text-6xl">Welcome to TCGLOOTS!</h1>
                  </div>
                  
                  <p className="font-jost text-xl pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente asperiores sed quod qui recusandae, deserunt quam veritatis at beatae vitae repellat officia officiis, porro quaerat est obcaecati alias temporibus nihil possimus molestiae impedit facilis. Aliquid, expedita quo.</p>
                </div>
                {/* Image */}
                <div className="flex-1">
                  <img src="./assets/homepage/welcometgcloots/images.png" alt="" />
                </div>
            <img src="./assets/homepage/welcometgcloots/lootbox.png" className="absolute -bottom-32 -right-28" alt="" />
            </div>
        </div>
    </div>
  )
}

export default WelcomeTCGLoots