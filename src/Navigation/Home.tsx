import WhyBookWithUs from "../Pages/BookWithUs"
import TravelTips from "../Pages/TravelTips"
import Destiny from "../Pages/Destiny"
import CompanyLogos from "../Pages/CompanyPartner"
import ExploreDestinations from "../Pages/ExploreDestination"
import HeroFlight from "../Layout/HeroSection"
import HomeTestimonials from "../Pages/HomeTestimonial"
import HomePage from "../Layout/HomeBanner"







const Home = () => {
  return (
    <>
<HomePage/>
    <HeroFlight/>
    <ExploreDestinations/>
    <CompanyLogos/>
    <Destiny/>
    <HomeTestimonials/>
    <WhyBookWithUs/>
    <TravelTips/>
    

    </>
  )
}

export default Home