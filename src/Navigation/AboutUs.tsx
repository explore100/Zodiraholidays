import OurService from "../Pages/OurServices"

import Hero from "../Pages/AboutBanner";
import TestimonialSlider from "../Pages/TestimonialSlider";
import TravelStats from "../Pages/TravelStat";
import AboutUsSlider from "../Pages/AboutUsSlider";
import Country from "../Pages/Country";
import BlogsSlider from "../Pages/BlogSlider";


const AboutUs = () => {
  return (
    <>
    <Hero/>
    <AboutUsSlider/>
    <Country/>
    <BlogsSlider/>
    <OurService/>
    <TestimonialSlider/>
    <TravelStats/>
    

    </>
  )
}

export default AboutUs