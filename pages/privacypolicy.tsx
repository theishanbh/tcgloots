import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import terms from '../assets/terms.png'

const PrivacyPolicy = () => {
    return (
        <>
            <div className='font-jost'>
                <Navbar></Navbar>
                <h1 className='text-8xl text font-semibold text-black-200 text-left sm:text-center mt-12 mb-10 px-8 py-8 sm:py-0 2xl:px-0'>Privacy Policy</h1>
                <div className='tep:text-center w-4/6 h-4/5 my-5 mx-auto justify-center items-center hidden sm:flex'>
                    <Image
                        src={terms}
                        alt='terms image here'
                        height={230}
                        className="object-cover"
                    />
                </div>
                <div className='mx-auto max-w-7xl tep:flex tep:justify-center'>
                    <div className='flex tep:items-center flex-col mb-8  xl:relative'>

                        {/* first point */}
                        <div>
                            <h1 className='smmob:text-left mob:text-left mx-5 tep:text-center tep:text-xl tfp:text-2xl ffp:mx-3 fifp:text-3xl shp:text-left font-medium text-2xl'>1. Object and principles of the Privacy Policy</h1>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>1.This Privacy Policy sets out the principles of processing and protection of personal information pertaining to Users of the www.TCGLoots.com Portal. It constitutes an integral part of the Terms and Conditions of the www.TCGLoots.com website. </div>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>2.The Administrator shall protect the personal information against unauthorised access, loss, alteration, damage or destruction and shall process the information entrusted thereto in conformity with the legal regulations in force, and in particular in conformity with the requirements of the Personal Data Protection Act of xx yy zzzz and all related legal acts,</div>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>3.The www.TCGLoots.com website respects Users’ right to privacy and makes every effort to ensure the most comprehensive protection of the personal information entrusted to it.</div>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>4.The Administrator of the personal information provided by Users is.....................</div>
                        </div>

                        {/* second point */}
                        <div className=' mt-10'>
                            <h1 className='smmob:text-left mob:text-left tep:mx-5 tep:text-xl tep:text-center tfp:text-2xl ffp:mx-3 fifp:text-3xl  mx-5 shp:text-left font-medium text-2xl'>2. Type and purpose of processed personal information</h1>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>1.Personal information is processed on the basis of a consent granted by the User upon registration with the Portal. </div>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>
                                <p>2.Personal information referred to in 2.1 above includes particulars enabling identification of the User and determining his identity, i.e.:</p>
                                <p>– first name and surname,</p>
                                <p>– age,</p>
                                <p>– address of residence,</p>
                                <p>– e-mail address,</p>
                                <p>– mobile phone number.</p>
                            </div>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>3.The User shall have the right of access, monitoring and verification of the processed information pertaining thereto and the right to obtain information on the purpose, scope and method of processing of the data contained in the files, the right to demand supplementing, updating and correcting such data, temporary or permanent suspension of processing thereof, removal of data, as well as to demand that the data no longer be processed pursuant current rules of personal data protection. User can request changes or removal of data upon contacting the Administrator at email address: contact@TCGLoots.com. On the User’s request, the Administrator is obligated within 30 days to inform in writing about the rights and processed data. The User have the right of information no more than once every 6 months. The request should be send to an e-mail address: contact@TCGLoots.com.</div>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>4.The User hereby warrants and represents that all personal information provided thereby in the course of registration or while using the Portal is true and complete. Providing true and complete personal information is a prerequisite for the uninterrupted and correct use of the Portal.</div>
                        </div>

                        {/* third point */}
                        <div className=' mt-10'>
                            <h1 className='smmob:text-left mx-5 mob:text-left tep:mx-5 tep:text-xl tep:text-center tfp:text-2xl ffp:mx-3 fifp:text-3xl shp:text-left font-medium text-2xl'>3. Account cancellation</h1>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>1.The User may at any time cancel his account with the Website. </div>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>2.Cancellation of the User’s account results in the removal of any and all information and data pertaining to the User. The Portal Administrator, however, reserves the right to store the User’s information and to refuse to remove it to the extent and for a period which is legally permitted, this in order to settle any obligations that have arisen between the User and the Portal and in order to clarify the circumstances of an unauthorised use of the Portal, i.e. its use in breach of the Terms and Conditions and/or legal provisions in force.</div>
                        </div>

                        {/* fourth point */}
                        <div className='mt-10 xl:mb-56'>
                            <h1 className='smmob:text-left mob:text-left mx-5 tep:mx-5 tep:text-xl tep:text-center tfp:text-2xl ffp:mx-3 fifp:text-3xl shp:text-left font-medium text-2xl'>4. Cookies</h1>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>
                                <p>Use of cookies</p>
                                <p>1.Cookies are small text files downloaded onto the User’s device while using the website, used to identify the User or to store the history of activities undertaken thereby.</p>
                            </div>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>2.Cookies are used to adjust and optimise the contents of the Website to the Users’ preferences, to produce statistics of website usage, to personalise marketing content and to ensure Website security.</div>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>3.The User may disagree with the use of cookies on his device, among others by changing browser settings. Refusal to agree to the use of cookies may, however, result in incorrect functioning of the Website or its incomplete display.</div>
                        </div>

                        {/* fifth point */}
                        <div className='mt-10 xl:absolute xl:left-0 xl:bottom-0'>
                            <h1 className='smmob:text-left mob:text-left mx-5 tep:mx-5 tep:text-xl tfp:text-2xl ffp:mx-3 fifp:text-3xl shp:text-left font-medium text-2xl'>5. Final provisions</h1>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>
                                1.Users may send any questions and objections to this Privacy Policy via Contact form: https://TCGLoots.com/
                            </div>
                            <div className='smmob:mx-4 tep:mx-10 tep:text-lg tfp:text-xl ffp:mx-7 shp:mx-3 text-xl mt-10'>2.This Privacy Policy may be amended. The Administrator shall notify Users thereof upon a seven days’ notice by publishing it on the Portal.</div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default PrivacyPolicy