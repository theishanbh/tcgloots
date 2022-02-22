import type { NextPage } from 'next'
import Navbar from '../components/Navbar/Navbar'
import ProductTracker from '../components/ProductTracker/ProductTracker'

const Home: NextPage = () => {
  return (
    <div>
      <div className=' text-center'>
        <Navbar></Navbar>
        <ProductTracker></ProductTracker>
      </div>
    </div>
  )
}

export default Home
