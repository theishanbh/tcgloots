import type { NextPage } from 'next'
import Footer from '../components/Footer/Footer'
import AwesomeGiveaways from '../components/Homepage/AwesomeGiveaways/AwesomeGiveaways'
import DealsTracker from '../components/Homepage/DealsTracker/DealsTracker'
import Slider from '../components/Homepage/HeroSection/Slider'
import WelcomeTCGLoots from '../components/Homepage/HeroSection/WelcomeTCGLoots'
import HowItWorks from '../components/Homepage/HowItWorks/HowItWorks'
import InstoreTracker from '../components/Homepage/InstoreTracker/InstoreTracker'
import LatestNews from '../components/Homepage/LatestNews/LatestNews'
import LiveDeals from '../components/Homepage/LiveDeals/LiveDeals'
import ProductTracker from '../components/Homepage/ProductTracker/ProductTracker'
import StreamersWeSupport from '../components/Homepage/StreamersWeSupport/StreamersWeSupport'
import Navbar from '../components/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <div className=''>
        <Navbar></Navbar>
        <Slider></Slider>
        <WelcomeTCGLoots></WelcomeTCGLoots>
        <ProductTracker></ProductTracker>
        <DealsTracker></DealsTracker>
        <LiveDeals></LiveDeals>
        <InstoreTracker></InstoreTracker>
        <AwesomeGiveaways></AwesomeGiveaways>
        <StreamersWeSupport></StreamersWeSupport>
        <HowItWorks></HowItWorks>
        <LatestNews></LatestNews>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home
