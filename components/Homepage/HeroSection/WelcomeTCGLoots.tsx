const WelcomeTCGLoots = () => {
  return (
    <div className=" bg-gradient-to-r from-grey-400 to-grey-500">
        <div className="py-32 px-28 max-w-7xl mx-auto relative">
            <div className=" relative bg-white mx-auto p-8 flex">
                {/* info welcome tcgLoots */}
                <div className="flex-4">
                  <h1 className=" font-jost font-semibold text-3xl underline underline-offset-8 decoration-solid decoration-yellow-primary">Welcome to TCGLOOTS!</h1>
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