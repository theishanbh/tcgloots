import React from 'react'
import Image from 'next/image'
import ButtonLiveDeal from './ButtonLiveDeal'
import PrimaryButtonLiveDeal from './PrimaryButtonLiveDeal'
import SecondaryButton from '../AlertView/SecondaryButton'

interface LiveDealProps {
    isLink: boolean
}

export default function LiveDealCard({ isLink }: LiveDealProps) {
    return (
        <>
            <div className="xl:hidden flex  flex-col  space-x-2 rounded-lg bg-white-100 shadow-default shadow-slate-100 px-2 py-2">
                <div className="flex-1 flex flex-row justify-between ">
                    <Image
                        src={require("../../assets/alerts/cardImage.png")}
                        width={62}
                        height={57}
                        alt={'card image'}
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
                <div className="flex-1 flex flex-row justify-between pt-2 space-x-1 xl:space-x-0 bg-grey-100">
                    <PrimaryButtonLiveDeal>Coupons:xyz12345</PrimaryButtonLiveDeal>
                    <ButtonLiveDeal notificationCount={0}>Go To deal</ButtonLiveDeal>
                </div>
                {isLink && <div className="flex-1 flex flex-row justify-between pt-2">
                    <ButtonLiveDeal notificationCount={0}>Link 1</ButtonLiveDeal>
                    <ButtonLiveDeal notificationCount={0}>Link 2</ButtonLiveDeal>
                    <ButtonLiveDeal notificationCount={0}>Link 3</ButtonLiveDeal>
                </div>}
            </div>
            <div className="hidden xl:flex  flex-col space-x-4 rounded-lg bg-white-100 shadow-default shadow-slate-100 px-2 py-4">
            <div className="flex flex-2 flex-row  items-center   ">
                <div className="flex flex-1"> <Image
                    src={require("../../assets/alerts/cardImage.png")}
                    width={120}
                    height={108}
                    alt={'card image'}
                ></Image></div>
                <div className="flex flex-1 font-jost font-semibold text-black-100 text-sm items-center">Target</div>
                <div className="flex-3 flex flex-wrap drop-shadow 2md:pt-5 pt-2 justify-start" >
                    <div className="font-jost text-xs">
                        Elit irure est ullamco voluptate. Ullamco mollit incididunt ex sit enim ut ad pariatur eu consectetur anim occaecat eu. Non aliqua sunt dolor dolore.
                    </div>
                </div>
                <div className="flex flex-1 font-jost text-grey-400 text-sm items-center justify-center">30 sec ago</div>
                <div className="flex flex-1 font-jost font-semibold text-black-100 text-sm items-center">Expired</div>
                <div className="flex-2 flex flex-col flex-wrap  space-y-2">
                    <PrimaryButtonLiveDeal>Coupons:xyz12345</PrimaryButtonLiveDeal>
                    <ButtonLiveDeal notificationCount={3}>Go To deal</ButtonLiveDeal>
                </div>
            </div>
                {isLink && <div className="flex-1 flex flex-wrap space-x-8 justify-end pt-4">
                    <SecondaryButton><div className="w-36 h-8 flex justify-center items-center">Link 1</div></SecondaryButton>
                    <SecondaryButton><div className="w-36 h-8 flex justify-center items-center">Link 2</div></SecondaryButton>
                    <SecondaryButton><div className="w-36 h-8 flex justify-center items-center">Link 3</div></SecondaryButton>
                </div>}
            </div>
        </>
    )
}

