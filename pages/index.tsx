import type { NextPage } from 'next'
import Navbar from '../components/Navbar/Navbar'
import ProductTracker from '../components/ProductTracker/ProductTracker'
import WelcomeTCGLoots from '../components/WelcomeTCGLoots/WelcomeTCGLoots'

const Home: NextPage = () => {
  return (
    <div>
      <div className=' text-center'>
        <Navbar></Navbar>
        <WelcomeTCGLoots></WelcomeTCGLoots>
      </div>
    </div>
  )
}

export default Home
