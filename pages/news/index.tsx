import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import NewsHero from '../../components/News/News/NewsHero'
import NewsArticles from '../../components/News/NewsArticles/NewsArticles'

const News = () => {
  return (
    <div>
        <div className=''>
            <Navbar></Navbar>
            <NewsHero></NewsHero>
            <NewsArticles></NewsArticles>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default News