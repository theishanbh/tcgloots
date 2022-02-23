import type { NextPage } from 'next'
import Slider from '../components/Homepage/HeroSection/Slider'
import WelcomeTCGLoots from '../components/Homepage/HeroSection/WelcomeTCGLoots'
import Navbar from '../components/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <div className=' text-center'>
        <Navbar></Navbar>
        <Slider></Slider>
        <WelcomeTCGLoots></WelcomeTCGLoots>
      </div>
    </div>
  )
}

export default Home
