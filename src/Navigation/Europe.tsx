
import { CircularGallery } from "../Context/EuropeDestinty/CircularGallery"
import { HeroImageSection } from "../Context/EuropeDestinty/HeroImageSection"
import { MasonryGallery } from "../Context/EuropeDestinty/MasonryGallery"
import { OverlappingCards } from "../Context/EuropeDestinty/OverlappingCard"
import { ParallaxCards } from "../Context/EuropeDestinty/ParallaxCards"
import { SplitImageSection } from "../Context/EuropeDestinty/SplitImageSection"


const Europe = () => {
  return (
    <>
    <HeroImageSection/>
     <ParallaxCards/>
     <MasonryGallery/>
    <CircularGallery/>
    <SplitImageSection/>
    <OverlappingCards/>
    
    
    </>
  )
}

export default Europe