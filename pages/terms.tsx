import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import terms from '../assets/terms.png'


const Terms = () => {
    return (
        <>
            <div className='font-jost'>
                <Navbar></Navbar>
                <h1 className='  text-8xl text font-semibold text-black-200 text-left sm:text-center mt-12 px-8 py-8 sm:py-0 2xl:px-0'>Terms</h1>
                <div className='tep:text-center w-4/6 h-4/5 my-5 mx-auto justify-center items-center hidden sm:flex'>
                    <Image
                        src={terms}
                        alt='terms image here'
                        height={230}
                        className="object-cover"
                    />
                </div>
                <div className='mx-auto max-w-7xl px-8 2xl:px-0'>
                    <div className='flex flex-col mb-8'>
                        <h1 className=' font-medium text-2xl tep:text-center tfp:ml-5 fhp:text-left'>1. General Provision and Definitions</h1>
                        <div className=' text-xl mt-10 tep:text-left tep:mx-5'>The purpose of the Terms and Conditions of the TCG Loots website is to set out the terms and conditions of operation, functioning and use of the TCG Loots Portal available on the Internet at www.gamehag.com as well as the rights and obligations of the Administrator, Users and entities using the Portal.</div>
                        <div className=' text-xl mt-10 tep:text-left tep:mx-5'>The Administrator is Gaming Sp. z o.o., ul. Romana Abrahama 18, 61-615 Poznań, NIP [VAT reg. No.]: 7831749141, REGON [statistical ID No.]: 365698526, entered in the Register of Entrepreneurs of the National Court Register kept by the District Court for Poznań - Nowe Miasto and Wilda in Poznań, 8th Commercial Division of the National Court Register, under number KRS 0000643377.</div>
                        <div className=' text-xl mt-10 tep:text-left tep:mx-5'>
                            <p>Whenever a reference is made in the Terms and Conditions to:</p>
                            <p>a) Portal – this shall be understood as meaning the service provided under the www.TCGLoots.com domain.</p>
                            <p>b) Terms and Conditions – this shall be understood as meaning this document.</p>
                            <p>c) User account – it should be understood as an individual User account registered in the Portal based on the data provided by the User during the registration process the User account may be a basic account or VIP account.</p>
                            <p>d) Basic account – it should be understood as a User account equipped with basic functionalities, the use of which is free of charge (the Administrator does not charge any fees for using the basic account by the User)</p>
                            <p>e) VIP account – it should be understood as a User account in which the Administrator grants the User additional functionalities (e.g. by creating groups on the Forum, disabling advertising in the Portal, graphic highlighting of the User account, etc.) and bonuses - in exchange for the fee paid by the User to the amount specified in the price list</p>
                            <p>f) Bonuses – it should be understood as various types of preferences, facilities and other privileges that the User may have in the VIP account, such as, in particular:</p>
                            <p>- preferential treatment of User requests by the support team</p>
                            <p>- bonuses in Games</p>
                            <p>- discounts for Rewards</p>
                            <p>- increased number of Soul Gems, which are awarded for daily logging into the Portal</p>
                            <p>- access to free mailboxes on the site as part of the mailbox system</p>
                            <p>g) billing period – it should be understood as the period for which the Administrator is entitled to a fee for using the VIP account. The billing period is a calendar month, i.e. the period from the first to the last day of the month</p>
                            <p>h) User Profile – this shall be understood as meaning a file of settings individually adjusted by the User in the User Account.</p>
                            <p>i) Limited User – this shall be understood as meaning a natural person who registered with the Portal and who uses a limited range of the services provided under the www.gamehag.com domain.</p>
                            <p>j) Partner – this shall be understood as meaning an entity which may award Soul Gems for purchases made therefrom.</p>
                            <p>k) fee for the VIP account – it should be understood as the remuneration due to the Administrator for the provision of services under t he VIP account - according to the agreed price list. For the purposes of special campaigns, the Administrator may temporarily opt out of charging a fee for the VIP account - according to information about special campaigns</p>
                            <p>l) Games – this shall be understood as meaning the games made available at gamehag.com</p>
                            <p>m) Soul Gems – this shall be understood as meaning points awarded to the User with or without consideration, gathered in the User Account.</p>
                            <p>n) Prize – this shall be understood as meaning a bonus awarded to the User as a result of gathering a certain number of Soul Gems and fulfilling other conditions and requirements set by gamehag.com</p>
                            <p>o) Store – this shall be understood as meaning the place where the User may select the Prize or purchase Soul Gems.</p>
                            <p>p) shadowing – it should be understood as presentation of the functionality of the VIP account to each User by highlighting them in grey and indicating their readiness to be activated, in order to present the benefits and differences which result from having a VIP account</p>
                            <p>r) Forum – this shall be understood as meaning a virtual meeting place of users.</p>
                            <p>s) Ranking – this shall be understood as meaning a list of Users categorised according to the number of Soul Gems gained by each of them individually.</p>
                            <p>t) Enchantment – this shall be understood as an additional system determining the Soul Gems attribution among the users of the Portal.</p>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Terms