import TopAdventures from "../Pages/TopAdventures"
import PopularDestination from "../Pages/ActivityDestination";
import VideoGallery from "../Pages/VideoGallery";
import CardsGrid from "../Pages/CardGrid";
import ServicesProvided from "../Pages/ServiceProvider";
import TravelFeaturesSection from "../Pages/TravelFeaturesSection";
import TravelImageSlider from "../Pages/TravelSlider";
const Package = () => {
  return (
   <>
   <TravelImageSlider/>
   <PopularDestination/>
   <CardsGrid/>
   <TopAdventures/>
   <TravelFeaturesSection/>
   <ServicesProvided/>
   <VideoGallery/>
   </>
  )
}

export default Package