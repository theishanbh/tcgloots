import React from 'react'
import Image from 'next/image'
import ButtonLiveDeal from './ButtonLiveDeal'
import PrimaryButtonLiveDeal from './PrimaryButtonLiveDeal'


interface LiveDealProps {
    isLink:boolean
}

export default function LiveDealCard({isLink}:LiveDealProps) {
    return (
        <div className="flex  flex-col  space-x-2 rounded-lg shadow-default shadow-slate-100 px-2 py-2">
            <div className="flex-1 flex flex-row justify-between ">
                <Image
                    src={require("../../assets/alerts/cardImage.png")}
                    width={62}
                    height={57}
                ></Image>
                <div className="flex font-jost font-semibold text-black-100 text-sm items-center">Target</div>
                <div className="flex font-jost font-semibold text-black-100 text-sm items-center">Expired</div>
                <div className="flex font-jost text-grey-400 text-sm items-center">30 sec ago</div>
            </div>
            <div className="flex-2 flex drop-shadow 2md:pt-5 pt-2 justify-center" >
                <div className="font-jost text-xs">
                    Elit irure est ullamco voluptate. Ullamco mollit incididunt ex sit enim ut ad pariatur eu consectetur anim occaecat eu. Non aliqua sunt dolor dolore.
                </div>
            </div>
            <div className="flex-1 flex flex-row justify-between pt-2">
                <PrimaryButtonLiveDeal>Coupons:xyz12345</PrimaryButtonLiveDeal>
               <ButtonLiveDeal>Go To deal</ButtonLiveDeal>
            </div>
           {isLink && <div className="flex-1 flex flex-row justify-between pt-2">
               <ButtonLiveDeal>Link 1</ButtonLiveDeal>
               <ButtonLiveDeal>Link 2</ButtonLiveDeal>
               <ButtonLiveDeal>Link 3</ButtonLiveDeal>
            </div>}
        </div>
    )
}

